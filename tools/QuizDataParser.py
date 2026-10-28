# Filename: QuizDataParserV2.py
# pip install beautifulsoup4 lxml

import os
import json
import re
from collections import Counter
from bs4 import BeautifulSoup


def natural_sort_key(filename):
    """
    Tạo key sắp xếp tự nhiên (natural sort) để:
    question 1, 2, 3, ..., 9, 10, 11, ... thay vì 1, 10, 11, ..., 2, 20, ...
    """
    return [int(c) if c.isdigit() else c.lower() for c in re.split(r'(\d+)', filename)]


def get_majority_answer(discussion_data):
    """
    Phân tích discussion để tìm đáp án được chọn nhiều nhất (tính theo upvote).
    Trả về chuỗi chữ cái đáp án, ví dụ: "CD", "A", "BC", ...
    """
    answer_votes = Counter()

    for comment in discussion_data:
        selected = comment.get("selected_answers", "")
        # Trích xuất phần chữ cái sau "Selected Answer:" (ví dụ "Selected Answer:CD" -> "CD")
        match = re.search(r'Selected Answer[:\s]*([A-H]+)', selected, re.IGNORECASE)
        if not match:
            continue
        letters = match.group(1).upper()

        # Cộng upvote cho đáp án này
        try:
            upvote = int(comment.get("upvote_count", "0"))
        except ValueError:
            upvote = 0
        # Tối thiểu 1 để đáp án không bị bỏ qua dù upvote = 0
        answer_votes[letters] += max(upvote, 1)

    if not answer_votes:
        return ""

    # Trả về đáp án có tổng vote cao nhất
    return answer_votes.most_common(1)[0][0]


class QuizDataParser:
    def __init__(self, input_folder='input', output_file='quiz_data.json', img_prefix='https://img.localhost'):
        self.input_folder = input_folder
        self.output_file = output_file
        self.img_prefix = img_prefix.rstrip('/')
        self.results = []

    def process_images_in_element(self, element):
        """Tìm tất cả thẻ img, chỉ lấy tên file và nối với prefix mới."""
        if not element:
            return
        for img in element.find_all('img'):
            old_src = (img.get('src') or '').strip()
            if not old_src:
                continue
            if old_src.startswith('data:image/'):
                # Ảnh nhúng base64 (data:image/png;base64,...): giữ nguyên, không nối prefix.
                # Bỏ ký tự xuống dòng/khoảng trắng trong chuỗi base64 để không bị clean_html_string đổi thành <br>.
                img['src'] = re.sub(r'\s+', '', old_src)
            else:
                file_name = os.path.basename(old_src)
                img['src'] = f"{self.img_prefix}/{file_name}"
            img['class'] = "w-100"

    def clean_html_string(self, element, is_choice=False):
        """Làm sạch HTML, xử lý ảnh và trả về string."""
        if not element:
            return ""

        self.process_images_in_element(element)

        if is_choice:
            letter_tag = element.find('span', class_='multi-choice-letter')
            if letter_tag:
                letter_tag.decompose()

        for badge in element.find_all('span', class_='badge'):
            badge.decompose()

        content = element.decode_contents().strip()
        content = content.replace('\t', ' ').replace('\xa0', '')
        content = content.replace('\n', '<br>')
        content = re.sub(r'(<br>\s*){2,}', '<br>', content)
        return content

    def get_answer_and_feedback(self, block):
        """Lấy chữ cái đáp án và nội dung feedback (có thể chứa ảnh)."""
        voted_bar = block.find('div', class_='vote-bar')
        voted_letter = ""
        if voted_bar:
            match = re.search(r'([A-H])', voted_bar.get_text())
            if match:
                voted_letter = match.group(1)

        suggested_box = block.find('span', class_='correct-answer')
        feedback_html = ""

        if suggested_box:
            if suggested_box.find('img'):
                feedback_html = self.clean_html_string(suggested_box)
                if not voted_letter:
                    voted_letter = "See Image"
            else:
                text_ans = suggested_box.get_text(strip=True)
                feedback_html = text_ans
                if not voted_letter:
                    voted_letter = text_ans

        return voted_letter, feedback_html

    def parse_file(self, file_path):
        print(f"--- Đang xử lý: {os.path.basename(file_path)} ---")
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                soup = BeautifulSoup(f.read(), 'lxml')

            blocks = soup.find_all('div', class_='question-body')

            for block in blocks:
                container = block.find_parent('div', class_='exam-question-card') or \
                            block.find_parent('div', class_='sec-spacer') or \
                            block.find_parent('div', class_='discussion-header-container') or block

                # 1. Question ID
                q_id = "#0"
                header = container.find('div', class_='question-discussion-header')
                if header:
                    match = re.search(r'Question #:\s*(\d+)', header.get_text())
                    if match:
                        q_id = f"#{match.group(1)}"
                if q_id == "#0":
                    # Layout khác: trang thảo luận ("Question #: 30") hoặc trang danh sách ("Question #1")
                    match = re.search(r'Question #:?\s*(\d+)', container.get_text(' ', strip=True))
                    if match:
                        q_id = f"#{match.group(1)}"

                # 2. Question Text
                q_text_elem = block.find('p', class_='card-text')
                question_html = self.clean_html_string(q_text_elem)

                # 3. Đáp án & Feedback từ trang (vote-bar / correct-answer)
                correct_letter, feedback_content = self.get_answer_and_feedback(container)

                # 4. Lựa chọn (Choices) — chưa điền correct, làm sau khi có discussion
                raw_choices = []
                marked_letters = ""
                choice_items = block.select('.question-choices-container ul li')
                for li in choice_items:
                    letter_span = li.find('span', class_='multi-choice-letter')
                    this_letter = ""
                    if letter_span:
                        this_letter = letter_span.get('data-choice-letter', '').strip()
                        if not this_letter:
                            this_letter = letter_span.get_text(strip=True).replace('.', '')
                    choice_body = self.clean_html_string(li, is_choice=True)
                    raw_choices.append({
                        "letter": this_letter,
                        "choice": f"<p>{choice_body}</p>",
                        "feedback": ""
                    })
                    # Trang danh sách đánh dấu đáp án đúng bằng thuộc tính data-correct<id>
                    if this_letter and any(k.startswith('data-correct') for k in li.attrs):
                        marked_letters += this_letter

                # Trang thảo luận không có danh sách lựa chọn: tách "A. ...", "B. ..." từ đoạn câu hỏi
                if not raw_choices:
                    kept = []
                    # Ghép chữ cái đứng một mình ("D.") với dòng nội dung liền sau
                    q_lines = re.split(r'<br\s*/?>', question_html)
                    merged = []
                    for line in q_lines:
                        if merged and re.fullmatch(r'\s*[A-H]\.\s*', merged[-1]) and line.strip():
                            merged[-1] = f"{merged[-1].strip()} {line.strip()}"
                        else:
                            merged.append(line)
                    for line in merged:
                        m = re.match(r'^\s*([A-H])\.\s+(.*)$', line)
                        if m:
                            raw_choices.append({
                                "letter": m.group(1),
                                "choice": f"<p>{m.group(2).strip()}</p>",
                                "feedback": ""
                            })
                        elif line.strip() or not raw_choices:
                            kept.append(line)
                    if raw_choices:
                        question_html = '<br>'.join(kept).strip()

                # 5. Thảo luận (discusstion)
                discussion_data = []
                comment_blocks = container.find_all('div', class_='comment-container')
                for cb in comment_blocks:
                    c_id = cb.get('data-comment-id', '0')
                    content_divs = cb.find_all('div', class_='comment-content')
                    main_txt = self.clean_html_string(content_divs[0]) if content_divs else ""

                    if len(content_divs) > 1:
                        replies = "".join([f"<li>{self.clean_html_string(div)}</li>" for div in content_divs[1:]])
                        main_txt += f"<br><div>Replies:</div><ul>{replies}</ul>"

                    # Layout mới không có class comment-selected-answers, dùng badge-warning
                    sel = cb.find('div', class_='comment-selected-answers') or cb.find('div', class_='badge-warning')

                    discussion_data.append({
                        "id": int(c_id) if str(c_id).isdigit() else 0,
                        "date": cb.find('span', class_='comment-date').get('title', '') if cb.find('span', class_='comment-date') else "",
                        "username": cb.find('h5', class_='comment-username').get_text(strip=True) if cb.find('h5', class_='comment-username') else "user",
                        "content": main_txt,
                        "upvote_count": cb.find('span', class_='upvote-count').get_text(strip=True) if cb.find('span', class_='upvote-count') else "0",
                        "selected_answers": sel.get_text(strip=True) if sel else ""
                    })

                # 6. Xác định đáp án cuối cùng theo thứ tự ưu tiên:
                #    a) general_feedback có chứa đáp án rõ ràng (vd: "Correct Answer: CD")
                #    b) majority vote từ discussion (upvote_count)
                #    c) correct_letter lấy từ vote-bar / correct-answer trên trang

                # Trích đáp án từ feedback_content (đã là text thuần, vd "CD" hoặc "")
                feedback_answer = re.sub(r'[^A-H]', '', feedback_content.upper())

                if feedback_answer:
                    final_answer = feedback_answer
                    print(f"    {q_id}: đáp án từ general_feedback = {final_answer}")
                else:
                    majority_answer = get_majority_answer(discussion_data)
                    if majority_answer:
                        final_answer = majority_answer
                        print(f"    {q_id}: đáp án từ majority discussion = {final_answer}")
                    elif marked_letters:
                        final_answer = marked_letters
                        print(f"    {q_id}: đáp án từ data-correct = {final_answer}")
                    elif correct_letter:
                        final_answer = correct_letter
                        print(f"    {q_id}: đáp án từ correct_letter trang = {final_answer}")
                    else:
                        final_answer = ""
                        print(f"    {q_id}: KHÔNG tìm thấy đáp án")

                # 7. Build parsed_choices với correct đã điền
                parsed_choices = []
                for ch in raw_choices:
                    letter = ch["letter"]
                    is_correct = (letter in final_answer) if (letter and final_answer and final_answer != "See Image") else False
                    parsed_choices.append({
                        "choice": ch["choice"],
                        "correct": is_correct,
                        "feedback": ch["feedback"]
                    })

                self.results.append({
                    "question_id": q_id,
                    "topic_id": 1,
                    "course_id": 1,
                    "case_study_id": None,
                    "lab_id": 0,
                    "question_text": f"<p>{question_html}</p>",
                    "mark": 1,
                    "is_partially_correct": len(final_answer) > 1 and final_answer != "See Image",
                    "question_type": "1",
                    "difficulty_level": "0",
                    "general_feedback": f"<p>Correct Answer: {feedback_content}</p>",
                    "is_active": True,
                    "answer_list": [{
                        "question_answer_id": 1,
                        "question_id": q_id,
                        "answers": parsed_choices
                    }],
                    "topic_name": soup.title.string.strip() if soup.title else "",
                    "discusstion": discussion_data
                })
        except Exception as e:
            print(f"Lỗi khi xử lý {file_path}: {e}")

    def run(self):
        if not os.path.exists(self.input_folder):
            os.makedirs(self.input_folder)
            print(f"Đã tạo thư mục '{self.input_folder}'. Hãy đặt file HTML vào đó rồi chạy lại.")
            return

        # FIX 1: Lấy danh sách file và sắp xếp theo natural sort
        all_files = [f for f in os.listdir(self.input_folder) if f.endswith(('.html', '.mhtml'))]
        all_files.sort(key=natural_sort_key)

        print(f"Tìm thấy {len(all_files)} file, thứ tự xử lý:")
        for f in all_files:
            print(f"  - {f}")
        print()

        for file in all_files:
            self.parse_file(os.path.join(self.input_folder, file))

        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump({"msg": "Quiz Questions", "data": self.results}, f, ensure_ascii=False, indent=2)
        print(f"\n>> Hoàn tất! Đã xuất {len(self.results)} câu hỏi ra '{self.output_file}'.")


if __name__ == "__main__":
    in_dir = input("Thư mục input (mặc định 'input'): ").strip() or "input"
    out_f = input("File output (mặc định 'quiz_data.json'): ").strip() or "quiz_data.json"
    prefix = input("Prefix ảnh (mặc định 'https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01'): ").strip() \
             or "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01"

    parser = QuizDataParser(in_dir, out_f, prefix)
    parser.run()