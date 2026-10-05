// Copy to Ask AI functionality
const DEFAULT_SYSTEM_PROMPT = `Bạn là một Chuyên gia Đào tạo và Luyện thi Chứng chỉ. 
Nhiệm vụ: Giải câu hỏi trắc nghiệm theo cách **NGẮN GỌN, ĐÚNG TRỌNG TÂM, DỄ NHỚ**, giúp người học nhanh chóng nhận diện đáp án trong kỳ thi.

### FORMAT

1. **✅ ĐÁP ÁN ĐÚNG**: A / B / C / D

2. **🎯 ĐỀ ĐANG HỎI GÌ?**
   Tóm tắt ngắn gọn:

   * Bài toán thực sự là gì?
   * Requirement quan trọng nhất là gì?
   * Đề đang ưu tiên điều gì? (cost, latency, scalability, operational overhead, security...)

3. **💡 LÝ DO CHỌN ĐÁP ÁN**
   Giải thích 1-2 câu tại sao đáp án đúng đáp ứng requirement tốt nhất.

4. **⚡ PHÂN TÍCH NHANH**

   * **A**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **B**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **C**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **D**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.

5. **🔑 KEYWORDS CẦN NHỚ**
   3-5 keyword/cụm từ quan trọng.

6. **🧠 MẸO THI**
   "Gặp X → nghĩ ngay đến Y."

### QUY TẮC

* Trả lời bằng tiếng Việt; giữ nguyên tên AWS service và thuật ngữ AWS bằng English.
* Không nhắc lại nguyên văn đề.
* Ưu tiên **requirement quyết định đáp án**.
* Phân biệt rõ:
  **"Có thể làm được" ≠ "Đáp án tốt nhất".**
* Đặc biệt chú ý: **BEST, MOST, LEAST, LOWEST COST, LOW LATENCY, MINIMUM OPERATIONAL OVERHEAD, MINIMUM DEVELOPMENT EFFORT, SERVERLESS, MANAGED, HIGHLY AVAILABLE, SCALABLE...**
* Nếu đáp án có thể hoạt động nhưng không tối ưu → dùng **⚠️ Có thể nhưng không tối ưu**.
* Nếu đáp án không đáp ứng requirement → **❌ Sai**.
* Nếu có nhiều đáp án đúng, chọn đúng số lượng theo yêu cầu.
* Mặc định **150-250 từ**; chỉ dài hơn khi câu hỏi có concept phức tạp hoặc dễ nhầm.
* Không giải thích kiến thức ngoài phạm vi cần thiết để chọn đáp án.
`;

document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.querySelector('.btn-copyToAskAI');

  if (copyBtn) {
    copyBtn.addEventListener('click', async function() {
      const originalText = copyBtn.innerHTML;

      // Get system prompt from USER_STORAGE or use default
      const groupId = getUserStorage('group_id');
      let systemPrompt = '';

      if (groupId && USER_STORAGE.system_prompts && USER_STORAGE.system_prompts[groupId]) {
        systemPrompt = USER_STORAGE.system_prompts[groupId];
      } else {
        systemPrompt = DEFAULT_SYSTEM_PROMPT;
      }

      // Get question text from .que-text
      const questionText = document.querySelector('.que-text')?.innerText || 'No question found';

      // Get answer choices
      const answerElements = document.querySelectorAll('#ques-list label');
      let answerText = '';
      answerElements.forEach((label, index) => {
        const checkbox = label.querySelector('input[type="radio"], input[type="checkbox"]');
        if (checkbox) {
          let text = label.textContent.trim().replace(/\s+/g, ' ');
          // Remove leading letter and dot if exists (e.g., "A. ", "B. ")
          text = text.replace(/^[A-E]\.\s*/, '');
          answerText += `${checkbox.value}. ${text}${index < answerElements.length - 1 ? '\n' : ''}`;
        }
      });

      // Construct the full prompt
      const fullPrompt = `System Prompt:
${systemPrompt}

---

Question:
${questionText}

Answer Options:
${answerText}`;

      try {
        // Copy to clipboard
        await navigator.clipboard.writeText(fullPrompt);
        showCopyFeedback(copyBtn, originalText);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  }
});

function showCopyFeedback(btn, originalText) {
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 700);
}

