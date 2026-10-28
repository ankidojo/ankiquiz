# Anki Quiz

Ứng dụng web để luyện tập các kỳ thi chứng chỉ (AWS, Oracle, PMP, v.v.) với giao diện tương tác.

## 📁 Cấu trúc thư mục

```
anki-quiz/
├── index.html                      # Trang chính của ứng dụng
├── public/
│   ├── js/
│   │   ├── exam.js                # Logic chính cho bài thi (quản lý câu hỏi, trả lời)
│   │   ├── classes.js             # Định nghĩa các lớp dữ liệu
│   │   └── desks.js               # Quản lý giao diện bảng điều khiển
│   ├── css/
│   │   ├── main.css               # CSS chung
│   │   └── exam.css               # CSS cho bài thi
│   └── data/
│       ├── examtopics/            # Dữ liệu câu hỏi theo từng kỳ thi
│       │   ├── SAA-C03/           # AWS Solutions Architect Associate
│       │   ├── SAP-C01/           # AWS Solutions Architect Professional
│       │   ├── DOP-C01/           # AWS DevOps Engineer
│       │   ├── DVA-C01/           # AWS Developer Associate
│       │   └── ...
│       ├── whizlabs/              # Dữ liệu từ nguồn Whizlabs
│       ├── freecams/              # Dữ liệu từ nguồn miễn phí
│       └── index.js               # Index dữ liệu chính
├── .claude/skills/examtopics-sync/ # Skill đồng bộ câu hỏi ExamTopics (crawl, parse, feedback, merge)
│   └── scripts/QuizDataParser.py  # Script để phân tích/nhập dữ liệu câu hỏi (HTML → JSON)
├── .claude/                       # Cấu hình Claude Code
└── .git/                          # Repository Git
```

## 🎯 Mục đích

- Cung cấp nền tảng học tập trực tuyến cho các kỳ thi chứng chỉ
- Lưu tiến độ học tập qua LocalStorage
- Hỗ trợ chế độ sáng/tối
- Quản lý nhiều kỳ thi và bộ câu hỏi khác nhau

## 🔧 Công nghệ

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework CSS**: Bootstrap 5
- **Icon**: Font Awesome 6
- **Font**: Google Fonts (Poppins)
- **Lưu trữ**: LocalStorage (USER_STORAGE)
- **Parser**: Python (.claude/skills/examtopics-sync/scripts/QuizDataParser.py)

## 📊 Kiến trúc dữ liệu

- Mỗi file JS trong `data/` chứa mảng câu hỏi
- Câu hỏi có cấu trúc: `{câu hỏi, đáp án, giải thích, chủ đề, ...}`
- Dữ liệu được tải động dựa trên lựa chọn kỳ thi

## 🚀 Để bắt đầu

1. Mở `index.html` trong trình duyệt
2. Chọn kỳ thi từ dropdown
3. Bắt đầu trả lời các câu hỏi
4. Tiến độ sẽ được lưu tự động
