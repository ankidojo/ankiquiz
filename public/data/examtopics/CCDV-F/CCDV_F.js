var CCDV_F = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are starting a new Claude application and have a small set of well-labeled examples that demonstrate the desired output format. You want to use these examples to guide Claude’s behavior. How would you guide the application’s behavior?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Có sẵn tập example nhỏ, well-labeled, muốn Claude bắt chước đúng format output.</li><li>Ưu tiên: áp dụng ngay cho mỗi request, không cần train lại model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Multi-shot prompting (đưa examples trực tiếp vào prompt) là cách nhanh và trực tiếp nhất để Claude học format mong muốn ngay trong context, không cần hạ tầng phụ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — lưu examples trong database làm tài liệu tham khảo cho team không giúp Claude tự động áp dụng format khi inference.</li><li><strong>B</strong>: ❌ Sai — zero-shot bỏ qua hoàn toàn các example đã có, không đảm bảo format nhất quán.</li><li><strong>C</strong>: ❌ Sai — train custom model tốn chi phí, thời gian, và không cần thiết khi chỉ có vài example nhỏ.</li><li><strong>D</strong>: ✅ Đúng — multi-shot prompting đưa examples vào prompt là cách chuẩn để guide output format.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>multi-shot prompting, well-labeled examples, output format, in-context learning</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ít example, cần match format\" → nghĩ ngay đến multi-shot/few-shot prompting, không phải train model.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>Embed the examples in a database and retrieve them at runtime as reference material for the team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use zero-shot prompting and rely on the model’s general capability to produce the desired output format consistently across all incoming requests.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 1 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1803776,
          "date": "October 16, 2026 10:08 am",
          "username": "fae1a76",
          "content": "A small set of well-labeled examples is exactly what few-shot (multi-shot) prompting is for.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1803727,
          "date": "October 15, 2026 07:57 pm",
          "username": "Jidnyasa",
          "content": "A. Embed the examples in a database and retrieve them at runtime as reference material for the team.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1802477,
          "date": "October 08, 2026 12:23 pm",
          "username": "414ae6a",
          "content": "Are these questions up-to-date and do they appear on the exam?",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1795005,
          "date": "September 05, 2026 04:00 am",
          "username": "fireweed",
          "content": "Multi-shot prompting with varied examples will always be most likely to create consistent answers",
          "upvote_count": "3 times",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new Claude model release includes performance improvements for several reasoning tasks but has changed the format of its responses to system prompts that use multi-section instructions. Your application uses multi-section system prompts heavily. Initial evaluation on the application’s actual workload shows the new model performs 8 percent better on reasoning tasks but produces malformed output on roughly 3 percent of requests because of the format change. The team is debating whether to upgrade.<br>How would you decide?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Model mới tốt hơn reasoning nhưng đổi format response, gây lỗi 3% với multi-section system prompt.</li><li>Cần quyết định nâng cấp model dựa trên dữ liệu thực tế, không phải cảm tính.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Thích ứng system prompt theo format mới rồi đánh giá lại là cách đúng đắn — giải quyết tận gốc nguyên nhân (format thay đổi) trước khi quyết định upgrade, thay vì chấp nhận lỗi hoặc né tránh nâng cấp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — validation chỉ là lưới an toàn phụ, không giải quyết nguyên nhân gốc là prompt chưa tương thích format mới.</li><li><strong>B</strong>: ✅ Đúng — sửa prompt theo format mới, re-evaluate, chỉ upgrade khi vừa hết lỗi vừa giữ được cải thiện reasoning.</li><li><strong>C</strong>: ❌ Sai — ở lại vĩnh viễn bỏ lỡ cải thiện 8% reasoning và không giải quyết vấn đề gốc rễ.</li><li><strong>D</strong>: ❌ Sai — upgrade ngay khi biết có 3% lỗi định dạng là chấp nhận rủi ro không cần thiết trong khi có thể khắc phục.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>evaluation-driven decision, system prompt adaptation, model upgrade, regression</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"model mới tốt hơn nhưng gây lỗi do thay đổi hành vi\" → nghĩ ngay đến thích ứng/adapt rồi re-evaluate trước khi quyết định, không chấp nhận đánh đổi mù quáng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>Upgrade and add a downstream validation step that catches the 3 percent malformed output before it reaches users, treating the validation step as the team’s mitigation for the format change.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adapt the application’s system prompt to the new model’s format expectations and re-evaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Stay on the previous model permanently to avoid the malformed output rate and any future format changes that subsequent model releases might introduce in the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upgrade immediately, because the 8 percent reasoning improvement outweighs the 3 percent malformed output rate across the application’s typical request distribution.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 3 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1800979,
          "date": "September 29, 2026 02:52 pm",
          "username": "sapkrishna",
          "content": "You should upgrade to the new model, but only after implementing a remediation layer or updating your system prompt templates",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team’s Claude application has been in production for a year, and the team has decided to formalize its testing strategy. Currently, the team writes ad- hoc tests for individual features but has no overall testing approach. What testing approach would you formalize?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Team chỉ có test ad-hoc, muốn hình thành chiến lược testing chính thức cho ứng dụng Claude.</li><li>Cần chiến lược toàn diện, bao phủ nhiều lớp (unit, integration, end-to-end).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Kết hợp unit test cho hàm riêng lẻ, integration test riêng cho phần tích hợp Claude, và end-to-end test cho luồng quan trọng là chiến lược kiểm thử phân lớp chuẩn, áp dụng nhất quán toàn codebase.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — TDD là một phương pháp phát triển, không phải chiến lược testing toàn diện theo lớp.</li><li><strong>B</strong>: ✅ Đúng — phân lớp unit/integration/end-to-end áp dụng nhất quán là chiến lược testing formal, đầy đủ nhất.</li><li><strong>C</strong>: ❌ Sai — vẫn giữ cách làm ad-hoc, chỉ thêm review, không phải formal testing strategy.</li><li><strong>D</strong>: ❌ Sai — chỉ dùng end-to-end test là không đủ, bỏ lỡ lỗi ở tầng unit/integration, chi phí chạy test cao hơn cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>unit test, integration test, end-to-end test, testing pyramid, Claude integration</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cần chiến lược testing formal/toàn diện\" → nghĩ ngay đến kết hợp đủ 3 lớp unit/integration/end-to-end.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>Adopt a test-driven development practice where unit tests are written before each feature is implemented and must pass before code is merged.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Continue writing ad-hoc tests as features ship and introduce a peer review step to ensure each test adequately covers the feature being released.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define a single testing approach that uses end-to-end tests and apply it consistently across all new features as they are added to the codebase.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 4 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1795006,
          "date": "September 05, 2026 04:03 am",
          "username": "fireweed",
          "content": "This speaks more to development best practice. It's usually safe to assume that there is no such thing as overkill when it comes to ensuring the product continues to function.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The team is debating whether to build a new capability as a custom tool or to use an existing built-in tool that nearly covers the use case but lacks one specific feature. How would you decide?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Built-in tool gần đáp ứng được use case, chỉ thiếu 1 tính năng cụ thể.</li><li>Cần quyết định: build custom tool hay dùng built-in tool.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Trước khi quyết định build custom tool, phải đánh giá kỹ xem khả năng hiện có của built-in tool đã đủ dùng chưa — tránh phát triển dư thừa khi giải pháp sẵn có gần như đáp ứng đủ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — review tài liệu và đánh giá xem built-in tool hiện tại có đủ dùng không là bước đầu tiên hợp lý trước khi quyết định build thêm.</li><li><strong>B</strong>: ❌ Sai — dựa vào tiền lệ từng build tool khác không liên quan trực tiếp đến việc tool hiện tại có đủ hay không.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — scoping effort cho custom tool chỉ nên làm sau khi đã xác nhận built-in tool không đủ.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — đánh giá mở rộng built-in tool vs custom tool là bước hợp lý nhưng chưa phải bước đầu tiên, cần xác nhận thiếu sót cụ thể trước.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>built-in tool vs custom tool, feature gap assessment, build vs buy</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"built-in gần đủ, thiếu 1 tính năng\" → nghĩ ngay đến đánh giá built-in trước khi quyết định build custom.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>Review the built-in tool’s documentation and assess whether its existing capabilities are sufficient to cover the use case without any modification or extension.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Identify whether the team has previously built similar custom tools and use those precedents to determine which approach is more consistent with the existing codebase.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Examine the custom tool option by scoping the implementation effort and determining whether the additional flexibility justifies the development and maintenance cost.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 8 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1804988,
          "date": "October 23, 2026 12:06 pm",
          "username": "Vasant04",
          "content": "the decision-making process must start by evaluating the actual capability gap rather than assuming a default preference for either built-in or custom tooling. Reviewing the documentation first ensures the team does not build redundant custom code if the built-in tool already satisfies the core requirement.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Anthropic API deprecated a request parameter that your Claude application uses in approximately 40 places across the codebase. The deprecation notice gives a six-month window before the parameter is removed and recommends a replacement parameter with slightly different semantics. You would respond to the deprecation by ...</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Parameter bị deprecate ở 40 nơi trong codebase, có 6 tháng để migrate, parameter mới có semantics khác.</li><li>Cần chiến lược migrate an toàn, tránh regression trên diện rộng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Thêm regression test trước, sau đó migrate theo từng batch có kiểm chứng giúp phát hiện sớm vấn đề do semantics khác nhau, giảm rủi ro so với đổi toàn bộ cùng lúc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đổi toàn bộ 40 nơi ngay lập tức mà không test kỹ dễ gây lỗi diện rộng vì semantics khác nhau.</li><li><strong>B</strong>: ❌ Sai — đợi đến sát ngày xóa mới migrate toàn bộ là rủi ro cao, không có thời gian xử lý sự cố.</li><li><strong>C</strong>: ✅ Đúng — regression test trước, migrate theo batch có validate là cách an toàn và kiểm soát được rủi ro.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — viết wrapper chỉ trì hoãn vấn đề, cuối cùng vẫn phải migrate khi parameter cũ bị xóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHớ</strong></p><p>deprecation, regression test, batch migration, semantic change</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"deprecation ở nhiều nơi, semantics đổi\" → nghĩ ngay đến regression test + migrate theo batch có kiểm chứng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>adding regression tests to cover the parameter’s behavior, then migrating call sites in batches that you validate against regression tests.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 11 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801829,
          "date": "October 04, 2026 04:10 pm",
          "username": "ami007",
          "content": "A six-month window is enough to migrate safely. The replacement has slightly different semantics, so regression tests come first, then batched migration validated against them. A (single change now) and B (single change at the deadline) are both risky big-bang migrations. D keeps the deprecated parameter, so it only delays the problem.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your Claude application’s API keys are stored in a secrets manager. The team is debating whether the same key should be used in development, staging, and production environments. How would you handle the keys across environments?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API key lưu trong secrets manager, nên dùng chung hay riêng cho dev/staging/production.</li><li>Ưu tiên: an toàn, giới hạn blast radius khi bị lộ key.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng key riêng biệt cho từng environment đảm bảo nếu 1 môi trường bị compromise thì không ảnh hưởng các môi trường còn lại — nguyên tắc cơ bản về cô lập bảo mật.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng chung 1 key dev cho mọi nơi không giải quyết vấn đề cô lập, và không hợp lý khi nói production quá rủi ro để deploy.</li><li><strong>B</strong>: ✅ Đúng — key riêng cho từng môi trường giới hạn phạm vi ảnh hưởng khi bị lộ.</li><li><strong>C</strong>: ❌ Sai — rotate ngẫu nhiên không thay thế được việc cô lập bằng key riêng biệt.</li><li><strong>D</strong>: ❌ Sai — dùng chung key vì đơn giản đánh đổi lấy rủi ro bảo mật không cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>secrets manager, key isolation, blast radius, environment separation</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"API key qua nhiều environment\" → nghĩ ngay đến key riêng biệt từng môi trường để cô lập rủi ro.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application’s lifecycle.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 12 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1807140,
          "date": "November 03, 2026 01:51 pm",
          "username": "ABosco",
          "content": "This is no where related to Claude. This is a general principle followed in password management in the industry.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1801830,
          "date": "October 04, 2026 04:10 pm",
          "username": "ami007",
          "content": "Use separate keys per environment so a leak in dev doesn't expose production, and so you can revoke or rotate each independently. The other options all weaken isolation.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team’s Claude agent has accumulated several customizations that bypass the SDK’s defaults, including custom history management, retry logic, and error handling. A new team member has proposed reverting all the customizations to maintain the codebase more easily. The tech lead disagrees and says each customization was added for a reason. How would you advise the team?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Agent có nhiều customization bypass SDK defaults; thành viên mới muốn revert hết, tech lead phản đối.</li><li>Cần cách tiếp cận cân bằng, dựa trên lý do gốc và khả năng hiện tại của SDK.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mỗi customization nên được đánh giá riêng dựa trên lý do ban đầu và xem SDK hiện tại đã hỗ trợ đủ chưa — tránh cả 2 cực đoan là giữ tất cả mù quáng hoặc revert tất cả mù quáng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — revert toàn bộ không xem xét lý do ban đầu, có thể làm mất đi các customization vẫn cần thiết.</li><li><strong>B</strong>: ✅ Đúng — đánh giá từng customization riêng lẻ dựa trên lý do và khả năng SDK hiện tại là cách tiếp cận hợp lý nhất.</li><li><strong>C</strong>: ❌ Sai — giữ tất cả mà không kiểm chứng lại có còn hợp lý không là chủ quan, bỏ qua khả năng SDK đã cải thiện.</li><li><strong>D</strong>: ❌ Sai — rebuild toàn bộ custom loop là quá mức, tốn effort không cần thiết so với yêu cầu đề bài.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>SDK defaults, customization review, case-by-case decision, agent maintenance</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"nhiều customization, tranh cãi giữ hay bỏ\" → nghĩ ngay đến đánh giá từng cái dựa trên lý do gốc, không làm theo kiểu tất cả hoặc không gì cả.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>Revert all customizations to the SDK’s defaults to standardize the codebase.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decide on each customization individually based on its original reason and the SDK’s current capabilities.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Keep all customizations, trusting that the tech lead’s original reasoning is still valid.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the agent off the SDK and rebuild it with a custom loop.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 13 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801831,
          "date": "October 04, 2026 04:11 pm",
          "username": "ami007",
          "content": "Judge each customization on its original reason and whether the SDK now covers it.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Claude application is occasionally refusing to answer questions that should be in scope, including questions the application has answered correctly in the past. You want to investigate. What is the first step of your investigation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Claude thỉnh thoảng từ chối trả lời câu hỏi lẽ ra hợp lệ, kể cả câu từng trả lời đúng trước đó.</li><li>Cần xác định <strong>bước đầu tiên</strong> của investigation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Trước khi phân tích sâu (log, trace, thử nghiệm), bước đầu tiên hợp lý là xác định chính xác những câu nào bị từ chối và so sánh với các câu đã trả lời thành công để tìm điểm khác biệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — xác định tập câu bị từ chối và so sánh với câu thành công là bước khởi đầu hợp lý để khoanh vùng vấn đề.</li><li><strong>B</strong>: ❌ Sai — thử sửa instruction là bước can thiệp, cần làm sau khi đã hiểu rõ nguyên nhân, không phải bước đầu tiên.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phân tích phân bố log là bước phân tích sâu hơn, nên làm sau khi đã khoanh vùng sơ bộ.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — xem trace chi tiết là bước điều tra sâu, hợp lý hơn khi đã có tập câu hỏi để so sánh từ bước A.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>refusal investigation, root cause analysis, comparison baseline, incident triage</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"bước đầu tiên của investigation\" → nghĩ ngay đến thu thập/khoanh vùng dữ liệu để so sánh trước, chưa vội can thiệp hay phân tích sâu.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>Identify which questions have been refused and compare them against previously answered questions to determine what changed between the successful and refused interactions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Test whether removing or adjusting those instructions resolves the behavior.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Assess whether the refusals cluster around specific input patterns, question types, or time periods by analyzing the distribution of refused requests in the logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 14 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1805123,
          "date": "October 24, 2026 07:00 am",
          "username": "[email protected]",
          "content": "Firts identified refused request then check the logs of refused request",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1805028,
          "date": "October 23, 2026 05:19 pm",
          "username": "alessandro22",
          "content": "To review refused questions doesn't identify the route cause that could implicate new refusal to questions that do not have anything in common with others. You must analyze traces in order to review your Claude setup and prevent new issues.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1804515,
          "date": "October 21, 2026 12:08 am",
          "username": "Aliabbas448",
          "content": "aseline establishment: Before you can look for patterns (Option C), examine traces (Option D), or test solutions (Option B), you must first isolate the exact data points that are failing and compare them directly to their successful past counterparts to isolate the variables that changed.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1804459,
          "date": "October 20, 2026 03:19 pm",
          "username": "white_shadow",
          "content": "**D. Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.**<br>The reasoning is that refusals are intermittent, so the first move is to look directly at what happened in the failing cases before forming any hypothesis. A trace shows the exact system prompt, conversation history, tool results, and model output for a refused request, which lets you see the actual trigger instead of guessing at it.<br>Why not the others first:<br>- **A and C** are useful, but they come after you have traces in hand. Comparing refused and answered requests (A) or looking for clusters across logs (C) only works well once you know which features of a request matter, and the traces are where you learn that. Aggregate analysis without first reading individual cases tends to chase the wrong variable.<br>- **B** is a fix, not an investigation. Changing instructions before you understand the cause risks masking the problem, breaking something else, or leaving you unable to tell whether the change actually helped.<br>A sensible sequence is D, then A and C to see how widespread the pattern is and what distinguishes refused from answered cases, then B to test a targeted fix once you have a hypothesis.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1801832,
          "date": "October 04, 2026 04:12 pm",
          "username": "ami007",
          "content": "Investigate first by examining traces of the refused requests to see what actually triggers the refusal.",
          "upvote_count": "5 times",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1801691,
          "date": "October 03, 2026 05:35 pm",
          "username": "Reda12q",
          "content": "First step: collect the refused cases and compare them with the successful cases.",
          "upvote_count": "3 times",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your Claude application processes 50-page legal contracts and produces summaries with citation references back to the source. The team is debating whether to send each contract whole or split into smaller pieces. The contracts fit within Claude’s context window. Initial testing shows that whole- document processing produces summaries with stronger cross-section reasoning but occasionally drifts on citation accuracy in later sections. Chunked processing produces stronger citation accuracy per chunk but loses cross-section reasoning. The team has not decided which property matters more. How would you guide the team’s decision?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chọn xử lý document nguyên khối (cross-section reasoning tốt, citation có thể trôi) hay chunk (citation chính xác, mất cross-section reasoning).</li><li>Chưa rõ property nào quan trọng hơn với use case thực tế.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Quyết định đúng là xác định trước property nào quan trọng hơn với ứng dụng thực tế (reasoning hay citation), để điều đó dẫn dắt lựa chọn chiến lược, rồi validate lại trên dữ liệu đại diện.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — cost/latency là yếu tố phụ, không giải quyết câu hỏi cốt lõi về property nào quan trọng hơn cho chất lượng output.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ xem xét lỗi cross-section reasoning của whole-document, chưa đối chiếu đầy đủ 2 phương án.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ xem chunked processing, bỏ qua việc so sánh toàn diện với whole-document.</li><li><strong>D</strong>: ✅ Đúng — xác định rõ property quan trọng hơn (dựa trên yêu cầu thực tế) rồi mới chọn chiến lược và validate là cách tiếp cận đầy đủ nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>chunking strategy, cross-section reasoning, citation accuracy, context window</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đánh đổi giữa 2 property, chưa rõ cái nào quan trọng hơn\" → nghĩ ngay đến xác định ưu tiên dựa trên use case thực tế trước khi chọn giải pháp.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>Assess the cost and latency implications of both approaches against the application’s performance requirements before recommending which processing strategy to adopt.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Examine the use cases where cross-section reasoning failures occur and assess whether whole-document processing meets the application’s accuracy requirements across a representative sample of contracts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Review the citation accuracy results from chunked processing and determine whether the loss of cross-section reasoning produces summaries that still meet the application’s quality bar.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Identify which property matters more for the application’s actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 15 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801834,
          "date": "October 04, 2026 04:13 pm",
          "username": "ami007",
          "content": "The team hasn't decided which property matters more, so decide that first from the real use case, then validate on representative contracts.",
          "upvote_count": "1 time",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A teammate is reviewing the team’s threat model for a Claude application and has asked you to identify the categories of AI-specific threats that the model should cover. The teammate has already listed traditional web application threats and wants to know what additional categories apply to a Claude application.<br>Which AI-specific threat categories would you add?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Threat model đã có các mối đe dọa web truyền thống, cần bổ sung nhóm đe dọa đặc thù AI/Claude.</li><li>Yêu cầu liệt kê đúng category rủi ro AI-specific.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Prompt injection, rò rỉ dữ liệu từ prompt/context, jailbreak, và unsafe output bypass control là các nhóm đe dọa đặc thù của ứng dụng dùng LLM, khác với các mối đe dọa web truyền thống.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — supply chain attack trên SDK chỉ là một phần nhỏ, không phải toàn bộ rủi ro AI-specific.</li><li><strong>B</strong>: ❌ Sai — DoS và tấn công hạ tầng vật lý là rủi ro chung cho mọi hệ thống, không đặc thù cho ứng dụng Claude.</li><li><strong>C</strong>: ❌ Sai — XSS, SQL injection là rủi ro web truyền thống đã được liệt kê sẵn, không phải category mới cần bổ sung.</li><li><strong>D</strong>: ✅ Đúng — prompt injection, data leakage, jailbreak, unsafe output là các nhóm đe dọa AI-specific cần bổ sung.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>prompt injection, data leakage, jailbreak, unsafe output, threat model</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"threat model cho ứng dụng Claude/LLM\" → nghĩ ngay đến prompt injection, jailbreak, data leakage, unsafe output — không phải rủi ro web truyền thống.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 16 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801835,
          "date": "October 04, 2026 04:14 pm",
          "username": "ami007",
          "content": "Prompt injection, data leakage, jailbreaks, and unsafe output are the AI-specific categories.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team has deployed a multi-agent system in which a primary agent decomposes user requests and delegates subtasks to three specialized subagents: one for data retrieval, one for analysis, and one for report generation. In production, the team observes that subagents are making redundant tool calls, occasionally exceeding token budgets, and sometimes producing outputs that contradict each other – all of which the primary agent passes along without catching. What is the most appropriate way to address these failures?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Multi-agent system: subagent gọi tool dư thừa, vượt token budget, output mâu thuẫn nhau; primary agent không bắt được lỗi này.</li><li>Cần giải pháp khắc phục ở tầng quản lý/điều phối.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tăng cường tầng quản lý của primary agent — giới hạn tool budget cho từng subagent, validate output theo schema trước khi truyền tiếp, và định nghĩa rõ handoff contract — giải quyết đúng gốc rễ các vấn đề đã nêu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — budget kiểm soát, validate schema, và handoff contract rõ ràng xử lý đúng cả 3 vấn đề: redundant calls, vượt token, output mâu thuẫn.</li><li><strong>B</strong>: ❌ Sai — cho subagent truy cập chéo output của nhau làm tăng độ phức tạp và không giải quyết vấn đề tool budget hay validation.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — retry logic và shared trace giúp audit nhưng không ngăn chặn redundant calls hay mâu thuẫn ngay từ đầu.</li><li><strong>D</strong>: ❌ Sai — gộp 3 subagent thành 1 model call lớn làm mất lợi ích chuyên biệt hóa, không phải giải pháp khắc phục lỗi điều phối.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>multi-agent orchestration, tool budget, schema validation, handoff contract</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"multi-agent, lỗi điều phối giữa các subagent\" → nghĩ ngay đến tăng cường quản lý ở primary agent: budget, validate, handoff contract rõ ràng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>Strengthen the primary agent’s management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Give each subagent read access to the other subagents’ outputs so they can identify and resolve contradictions without routing back through the primary agent.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating – and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 17 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801836,
          "date": "October 04, 2026 04:15 pm",
          "username": "ami007",
          "content": "The failures are coordination problems (budgets, validation, contradictions), so the fix is a stronger orchestration layer with per-subagent limits, schema validation, and explicit handoff contracts.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A teammate has asked you to explain when a Skill would be the right choice over an MCP server. The teammate is unsure how the two differ in practice when both can be reused across teams. How would you explain the distinction?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phân biệt khi nào dùng Skill, khi nào dùng MCP server, cả hai đều tái sử dụng được giữa các team.</li><li>Cần giải thích đúng bản chất khác biệt kỹ thuật.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Skill đóng gói prompt, script, dữ liệu thành một unit để model load trực tiếp; MCP server cung cấp resource/tool/prompt qua giao thức client chuẩn — đây là khác biệt cốt lõi về cơ chế hoạt động.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — hiệu năng load không phải là điểm khác biệt chính giữa Skill và MCP server.</li><li><strong>B</strong>: ✅ Đúng — mô tả đúng bản chất: Skill là package model load như một unit, MCP server expose qua client interface chuẩn.</li><li><strong>C</strong>: ❌ Sai — hai cơ chế không tương đương và không thể dùng thay thế cho nhau tùy ý.</li><li><strong>D</strong>: ❌ Sai — không phải vấn đề \"cũ/mới\" mà là khác biệt về cơ chế và mục đích sử dụng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Skill, MCP server, tool/resource/prompt exposure, client interface</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Skill vs MCP server\" → nghĩ ngay đến: Skill = package model tự load; MCP server = expose qua giao thức client chuẩn.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A Skill is preferable for cross-team reuse because it loads more efficiently than an MCP server during normal operation in the team’s typical multi-team workloads.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A Skill bundles prompts, scripts, and data into a package the model loads as a unit while a MCP server exposes resources, tools, and prompts through a standard client interface.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A Skill and an MCP server are equivalent extension mechanisms that the team can use interchangeably for any reusable capability that needs to be accessible across teams.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A Skill is the older mechanism and an MCP server is the newer one, so the team should prefer an MCP server for any reusable capability that the team builds going forward.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 18 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801837,
          "date": "October 04, 2026 04:16 pm",
          "username": "ami007",
          "content": "This is the accurate distinction: a Skill packages instructions, scripts, and resources that the model loads, while an MCP server exposes tools, resources, and prompts through a standard client protocol. The other options make false claims (equivalence, &amp;quot;older vs newer&amp;quot;, efficiency).",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#19",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a Claude application that will process customer support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. The team is debating whether to use a single Claude call that handles both stages or separate Claude calls for each stage. How would you structure the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng xử lý ticket 2 giai đoạn: triage và response; cân nhắc 1 Claude call hay nhiều call riêng biệt.</li><li>Ưu tiên: mỗi giai đoạn có input/output/success criteria khác nhau.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng Claude call riêng cho mỗi giai đoạn cho phép prompt tập trung, tối ưu theo đúng input/output/success criteria riêng của từng stage, thay vì gộp chung làm giảm chất lượng cả hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tách riêng triage và response phù hợp vì mỗi stage có đặc thù input/output/success criteria khác nhau.</li><li><strong>B</strong>: ❌ Sai — thay response bằng hệ thống rule-based không tận dụng được khả năng tạo văn bản linh hoạt của Claude.</li><li><strong>C</strong>: ❌ Sai — chạy song song nhiều call rồi chọn 1 làm tăng chi phí không cần thiết so với pipeline 2 giai đoạn rõ ràng.</li><li><strong>D</strong>: ❌ Sai — gộp 1 call cho cả 2 giai đoạn làm giảm độ chính xác của từng stage và lý do \"rẻ hơn\" không phải luôn đúng và không phải tiêu chí chính ở đây.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>pipeline stages, triage, response generation, separate calls, focused prompts</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"nhiều giai đoạn xử lý khác tính chất\" → nghĩ ngay đến tách riêng Claude call cho từng giai đoạn thay vì gộp chung.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 19 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801838,
          "date": "October 04, 2026 04:17 pm",
          "username": "ami007",
          "content": "Triage and response have different inputs, outputs, and success criteria, so separate focused calls are easier to prompt, test, and debug.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your Claude application uses structured output that is consumed by downstream code. The team wants to handle malformed or unexpected output gracefully so it does not crash downstream systems. The best choice for handling this issue would be to ...</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Structured output của Claude được downstream code tiêu thụ, cần xử lý output lỗi/không mong đợi để tránh crash.</li><li>Ưu tiên: graceful handling, không làm sập hệ thống downstream.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Defensive parsing xử lý các trường hợp field thiếu, không mong đợi, sai kiểu dữ liệu là cách tiếp cận đúng để đảm bảo downstream code không bị crash khi gặp output bất thường.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — trì hoãn việc enforce schema đến giai đoạn sau không giải quyết vấn đề ngay, rủi ro crash vẫn tồn tại.</li><li><strong>B</strong>: ✅ Đúng — defensive parsing xử lý được các trường hợp lỗi phổ biến, bảo vệ downstream system.</li><li><strong>C</strong>: ❌ Sai — crash và yêu cầu khôi phục thủ công đi ngược lại mục tiêu graceful handling.</li><li><strong>D</strong>: ❌ Sai — âm thầm bỏ qua output lỗi che giấu vấn đề, downstream có thể thiếu dữ liệu mà không biết nguyên nhân.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>structured output, defensive parsing, schema validation, graceful degradation</p><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"structured output có thể lỗi, cần tránh crash downstream\" → nghĩ ngay đến defensive parsing.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam CCDV-F topic 1 question 20 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1801839,
          "date": "October 04, 2026 04:18 pm",
          "username": "ami007",
          "content": "Defensive parsing handles missing fields, extra fields, and type mismatches without crashing.",
          "upvote_count": "2 times",
          "selected_answers": "Selected Answer:B"
        }
      ]
    }
  ]
}
