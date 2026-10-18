var AIP_C01_UDEMY_TEST1 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services innovation team wants to pilot an internal “AI search” assistant that answers questions about employee policy PDFs stored in Amazon S3. The team needs a technical proof of concept within 2 weeks, wants to avoid managing servers, and must produce initial measurements of per-question latency and token-related cost before committing to a production rollout.</p><p>Which combination of actions will meet these requirements with the LEAST operational overhead? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Làm PoC RAG trên PDF ở S3 trong 2 tuần, không quản lý server, và đo được latency cùng chi phí token.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, tốc độ triển khai.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Knowledge Base</strong> lo chunking, embedding, vector store và retrieval, nên chỉ cần một Lambda mỏng gọi RetrieveAndGenerate. Đo lường dùng <strong>CountTokens API</strong> và CloudWatch metrics (token count, invocation, latency) có sẵn, không phải tự dựng gì thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SageMaker endpoint phải tự quản lý hạ tầng, và nhét thẳng tài liệu S3 vào prompt không phải RAG.</li><li><strong>B</strong>: ✅ Đúng — RAG managed, serverless, nhanh nhất cho PoC.</li><li><strong>C</strong>: ❌ Sai — Fine-tuning tốn công tạo dữ liệu, không hợp PoC 2 tuần và không giúp truy xuất tài liệu thay đổi.</li><li><strong>D</strong>: ✅ Đúng — Đáp ứng yêu cầu đo latency và token cost bằng công cụ native.</li><li><strong>E</strong>: ❌ Sai — Tự dựng OpenSearch cluster và Glue pipeline là overhead lớn nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Base, RetrieveAndGenerate, CountTokens, CloudWatch metrics, PoC</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp RAG trên tài liệu S3 + ít vận hành → nghĩ ngay đến <strong>Bedrock Knowledge Base</strong>; cần đo token/latency → <strong>CloudWatch</strong> + <strong>CountTokens</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>Deploy a large language model to an Amazon SageMaker AI real-time inference endpoint and front it with an Application Load Balancer. Run load tests to measure latency and then integrate it with the S3 documents directly in prompts.</p>",
              "correct": false,
              "feedback": "<p>This requires managing endpoint capacity and deployment concerns that are unnecessary for a rapid Bedrock-based proof of concept. It also risks very large prompts (higher token costs and context window pressure) because documents are being inserted directly into prompts instead of using managed retrieval.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base that ingests the policy PDFs from Amazon S3 with managed chunking and an embedding model. Implement a simple API backed by AWS Lambda that calls RetrieveAndGenerate to answer pilot user questions.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Knowledge Bases provide a managed RAG implementation that can be stood up quickly for a proof of concept, with minimal infrastructure to manage. Using Lambda to call RetrieveAndGenerate enables a lightweight pilot experience without building a custom retrieval pipeline.</p>"
            },
            {
              "choice": "<p>Fine-tune an Amazon Titan text model in Amazon Bedrock by creating labeled prompt-completion pairs from the policy documents in Amazon S3, then deploy the custom model for the pilot.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning increases time, cost, and operational effort compared to a RAG-based pilot. For a rapid proof of concept over documents that already exist in S3, using a managed RAG workflow is faster and better aligned to validating feasibility and business value.</p>"
            },
            {
              "choice": "<p>Instrument the proof of concept to estimate and track token usage and latency by using the Amazon Bedrock CountTokens API and Amazon CloudWatch metrics (such as input and output token counts, invocation count, and model latency).</p>",
              "correct": true,
              "feedback": "<p>For a proof of concept, the team needs early performance and cost signals. CountTokens provides a way to estimate request size without performing inference, and CloudWatch metrics provide ongoing visibility into latency and token consumption so the team can quantify per-question cost and performance characteristics.</p>"
            },
            {
              "choice": "<p>Provision an Amazon OpenSearch Service cluster on dedicated instances. Build a custom ingestion pipeline with AWS Glue ETL jobs to chunk documents, generate embeddings, and manage indexing and updates.</p>",
              "correct": false,
              "feedback": "<p>Although this can work, it adds significant operational overhead (cluster sizing, scaling, index management, and ETL pipeline maintenance) and is not the fastest approach for a 2-week proof of concept when a managed Bedrock Knowledge Base can provide retrieval and ingestion capabilities.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 1,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-overhead proof of concept should rely on managed GenAI building blocks and lightweight measurement. Using a Bedrock Knowledge Base with documents in S3 provides a fast “chat with your documents” style RAG implementation without building and operating a custom retrieval pipeline. Pairing the pilot with token and latency measurement through CountTokens and CloudWatch produces the core feasibility signals (cost per request and responsiveness) needed to decide whether to proceed to a full production deployment. Approaches that require fine-tuning, managing search clusters and ETL pipelines, or deploying and operating custom model endpoints add time and operational burden that conflicts with the rapid proof-of-concept goal.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This requires managing endpoint capacity and deployment concerns that are unnecessary for a rapid Bedrock-based proof of concept. It also risks very large prompts (higher token costs and context window pressure) because documents are being inserted directly into prompts instead of using managed retrieval.<br/>• <strong>B</strong>: ✅ Bedrock Knowledge Bases provide a managed RAG implementation that can be stood up quickly for a proof of concept, with minimal infrastructure to manage. Using Lambda to call RetrieveAndGenerate enables a lightweight pilot experience without building a custom retrieval pipeline.<br/>• <strong>C</strong>: ❌ Fine-tuning increases time, cost, and operational effort compared to a RAG-based pilot. For a rapid proof of concept over documents that already exist in S3, using a managed RAG workflow is faster and better aligned to validating feasibility and business value.<br/>• <strong>D</strong>: ✅ For a proof of concept, the team needs early performance and cost signals. CountTokens provides a way to estimate request size without performing inference, and CloudWatch metrics provide ongoing visibility into latency and token consumption so the team can quantify per-question cost and performance characteristics.<br/>• <strong>E</strong>: ❌ Although this can work, it adds significant operational overhead (cluster sizing, scaling, index management, and ETL pipeline maintenance) and is not the fastest approach for a 2-week proof of concept when a managed Bedrock Knowledge Base can provide retrieval and ingestion capabilities.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html\">Create a knowledge base by connecting to a data source in Amazon Bedrock Knowledge Bases (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html\">RetrieveAndGenerate - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring.html\">Monitoring the performance of Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, D"
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail platform is building a customer-support assistant by using a Strands agent with an Amazon Bedrock text model. The agent can call a tool that looks up order status from an internal system by invoking an AWS Lambda function. In production, the agent intermittently fails because it calls the tool with missing or malformed parameters (for example, an empty orderId), which causes Lambda errors and breaks the conversation.</p><p>The team wants to make the tool integration more reliable without changing the underlying FM or adding significant operational complexity. Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Agent gọi tool với tham số thiếu hoặc sai (orderId rỗng) làm Lambda lỗi.</li><li>Phải tăng độ tin cậy tool integration, không đổi FM, không thêm phức tạp.</li><li>Ưu tiên: reliability, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Gốc rễ là hợp đồng tool không chặt. Định nghĩa tool rõ tên và kiểu tham số, kèm <strong>validation</strong> trong Lambda và trả <strong>lỗi có cấu trúc</strong>, giúp agent biết thiếu gì để hỏi lại người dùng và retry an toàn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Guardrails chặn prompt có order ID làm hỏng luồng, và để FM tự đoán tham số là thiếu an toàn.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Đổi FM lớn hơn tốn kém, few-shot chỉ giảm chứ không loại bỏ lỗi, và đề yêu cầu không đổi FM.</li><li><strong>C</strong>: ❌ Sai — Retry mãi với cùng tham số sai không bao giờ thành công, circuit breaker không sửa nguyên nhân.</li><li><strong>D</strong>: ✅ Đúng — Sửa tận gốc bằng schema rõ ràng, validation và phản hồi lỗi mà agent hiểu được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Strands tool definition, parameter validation, structured error response, missing parameters</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp agent gọi tool sai tham số → nghĩ ngay đến <strong>schema tool chặt</strong> + <strong>validation</strong> và <strong>lỗi có cấu trúc</strong>, không phải đổi model hay retry.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 2,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>Add Amazon Bedrock Guardrails to the agent to block user prompts that mention order IDs, and rely on the FM to infer missing tool parameters from conversation history when it invokes Lambda.</p>",
              "correct": false,
              "feedback": "<p>Guardrails are primarily for content safety controls (filtering inputs/outputs, PII masking, grounding checks) and do not provide deterministic tool parameter validation. Blocking prompts about order IDs also conflicts with the business requirement to look up order status and does not address malformed tool invocations.</p>"
            },
            {
              "choice": "<p>Switch the agent to a larger FM and add few-shot examples to the agent prompt demonstrating correct tool calls for multiple orderId formats.</p>",
              "correct": false,
              "feedback": "<p>Better prompting and a larger model can reduce errors, but they do not guarantee reliable tool operation. This approach also increases cost and still lacks deterministic validation and structured error handling at the tool boundary.</p>"
            },
            {
              "choice": "<p>Place the Lambda invocation behind an AWS Step Functions state machine with retries and a circuit breaker pattern. Configure the state machine to keep retrying until the tool succeeds.</p>",
              "correct": false,
              "feedback": "<p>Retries and circuit breakers help with transient failures (timeouts, throttling, downstream outages), but they do not fix requests that are invalid due to missing or malformed parameters. This adds orchestration overhead while still failing repeatedly for bad inputs.</p>"
            },
            {
              "choice": "<p>Define the tool with the Strands API by using a standardized function signature (explicit parameter names and types). Add strict parameter validation and exception handling in the Lambda handler that returns structured error responses the agent can act on (for example, “missing orderId”), so the agent can request missing information and retry safely.</p>",
              "correct": true,
              "feedback": "<p>Standardizing the tool interface (clear name, description, and typed parameters) helps the agent form correct tool calls. Adding input validation and defensive error handling inside Lambda prevents malformed requests from becoming unhandled failures and allows the application to return deterministic, machine-readable error messages. This directly improves tool reliability with minimal additional infrastructure.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 2,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most reliable way to harden an agent tool is to treat the tool boundary like an API contract: use a standardized function definition so the agent knows exactly what parameters to supply, and enforce correctness with parameter validation and robust error handling in the Lambda function. Structured, predictable error responses let the agent recover (for example, by asking the user for a missing orderId) instead of failing the entire workflow. Other approaches either focus on content moderation rather than tool correctness, add orchestration that cannot repair invalid inputs, or depend on probabilistic improvements from prompting/model size instead of deterministic validation.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Guardrails are primarily for content safety controls (filtering inputs/outputs, PII masking, grounding checks) and do not provide deterministic tool parameter validation. Blocking prompts about order IDs also conflicts with the business requirement to look up order status and does not address malformed tool invocations.<br/>• <strong>B</strong>: ❌ Better prompting and a larger model can reduce errors, but they do not guarantee reliable tool operation. This approach also increases cost and still lacks deterministic validation and structured error handling at the tool boundary.<br/>• <strong>C</strong>: ❌ Retries and circuit breakers help with transient failures (timeouts, throttling, downstream outages), but they do not fix requests that are invalid due to missing or malformed parameters. This adds orchestration overhead while still failing repeatedly for bad inputs.<br/>• <strong>D</strong>: ✅ Standardizing the tool interface (clear name, description, and typed parameters) helps the agent form correct tool calls. Adding input validation and defensive error handling inside Lambda prevents malformed requests from becoming unhandled failures and allows the application to return deterministic, machine-readable error messages. This directly improves tool reliability with minimal additional infrastructure.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html\">Define OpenAPI schemas for your agent's action groups in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/agents-lambda.html\">Configure Lambda functions to send information that an Amazon Bedrock agent elicits from the user (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/\">Strands Agents SDK: A technical deep dive into agent architectures and observability (AWS Blog)</a>",
          "upvote_count": "",
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
      "question_text": "<p>A compliance engineering team is building an incident-report summarization feature by using an Amazon Bedrock text model. The summaries must be consistent in tone and avoid speculative language. During testing, the same report sometimes produces different wording and occasionally adds unsupported details. The team must continue using the same model and wants a data-driven way to validate changes before updating production.</p><p>Which approach will MOST effectively improve output quality for this use case?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Summary thiếu nhất quán và thêm chi tiết không có căn cứ, phải giữ nguyên model.</li><li>Cần cách đánh giá dựa trên dữ liệu trước khi cập nhật production.</li><li>Ưu tiên: <strong>determinism</strong>, chất lượng có đo lường.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Hạ <strong>temperature</strong> (và chỉnh top-p/top-k) giảm tính ngẫu nhiên, còn <strong>Model Evaluations</strong> với dataset đại diện và bản tóm tắt tham chiếu cho phép so sánh các cấu hình một cách khách quan trước khi chọn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Fine-tune tốn kém, tạo model mới (trái ý \"cùng model\"), và không có bước validate dữ liệu.</li><li><strong>B</strong>: ❌ Sai — Prompt caching chỉ tối ưu chi phí/latency, không giảm biến động; theo dõi complaint không phải data-driven.</li><li><strong>C</strong>: ✅ Đúng — Giảm ngẫu nhiên và xác thực bằng evaluation có dataset.</li><li><strong>D</strong>: ❌ Sai — Thêm context không giảm variance khi tham số sampling không đổi, và reranker không liên quan tới summarization.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>temperature, top-p, Model Evaluations, reference summaries, consistency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp output không ổn định với cùng model → nghĩ ngay đến giảm <strong>temperature</strong> + đánh giá bằng <strong>Model Evaluations</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 3,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock custom model by fine-tuning the base model with labeled prompt-completion pairs that contain ideal summaries. Deploy the custom model and route all summarization traffic to the new custom model.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning can improve behavior, but it changes the model (custom model) and introduces additional lifecycle management, time, and cost. The scenario specifically calls for continuing to use the same model and focuses on improving results through configuration and validation rather than customization.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock prompt caching for the summarization prompt prefix and increase maxTokens to reduce truncation. Keep the rest of the application unchanged and monitor user complaints after deployment.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching and maxTokens primarily address latency/cost and output length limits, not hallucinations or variability in phrasing and speculative content. This option also lacks a pre-deployment evaluation method.</p>"
            },
            {
              "choice": "<p>Adjust the model’s inference parameters to reduce randomness (for example, lower temperature and tune top-p or top-k based on the desired determinism). Use Amazon Bedrock Model Evaluations with a representative prompt dataset and reference summaries to compare the parameter configurations and select the best-performing configuration for production.</p>",
              "correct": true,
              "feedback": "<p>Lowering temperature and appropriately tuning top-p/top-k can make outputs more deterministic and reduce creative variation. Bedrock Model Evaluations provides a structured A/B-style comparison using a prompt dataset (and optional reference responses) so the team can quantitatively validate quality improvements before rollout.</p>"
            },
            {
              "choice": "<p>Add an Amazon Bedrock Knowledge Base and configure a reranker model so the summarization model always receives more context. Keep the inference parameters unchanged and rely on the additional context to reduce output variability.</p>",
              "correct": false,
              "feedback": "<p>Adding retrieval and reranking changes the architecture and targets grounding via external context, not model parameter tuning. It increases system complexity and does not directly address the need to tune generation behavior for consistent, non-speculative summaries while keeping the same model.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 3,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To reduce variation and speculative language without changing the underlying model, the most direct control is model-specific inference configuration. Lower temperature generally reduces randomness, while top-p or top-k tuning constrains token sampling to make responses more consistent. Because the team needs a data-driven validation method before production changes, running an evaluation with a representative prompt dataset and reference summaries provides measurable evidence of whether the new parameter configuration improves quality for the specific summarization use case. Approaches that focus on caching/throughput do not improve response quality, and adding retrieval or fine-tuning either changes the architecture or violates the requirement to keep using the same model.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Fine-tuning can improve behavior, but it changes the model (custom model) and introduces additional lifecycle management, time, and cost. The scenario specifically calls for continuing to use the same model and focuses on improving results through configuration and validation rather than customization.<br/>• <strong>B</strong>: ❌ Prompt caching and maxTokens primarily address latency/cost and output length limits, not hallucinations or variability in phrasing and speculative content. This option also lacks a pre-deployment evaluation method.<br/>• <strong>C</strong>: ✅ Lowering temperature and appropriately tuning top-p/top-k can make outputs more deterministic and reduce creative variation. Bedrock Model Evaluations provides a structured A/B-style comparison using a prompt dataset (and optional reference responses) so the team can quantitatively validate quality improvements before rollout.<br/>• <strong>D</strong>: ❌ Adding retrieval and reranking changes the architecture and targets grounding via external context, not model parameter tuning. It increases system complexity and does not directly address the need to tune generation behavior for consistent, non-speculative summaries while keeping the same model.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html\">Influence response generation with inference parameters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-jobs-management-create.html\">Starting an automatic model evaluation job in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets.html\">Use prompt datasets for model evaluation in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail platform team runs a customer-support chatbot that uses an Amazon Bedrock FM. The team frequently updates prompts and inference parameters to improve tone and accuracy. After several releases, business stakeholders report that answers are becoming inconsistent and occasionally violate the required response style.</p><p>The team needs a systematic quality assurance approach that performs regression testing before each deployment and continuously detects output regressions after deployment. The solution must integrate with an automated deployment workflow and require the LEAST operational overhead.</p><p>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần QA có hệ thống: regression test trước deploy và phát hiện regression liên tục sau deploy.</li><li>Phải tích hợp workflow deploy tự động.</li><li>Ưu tiên: automation, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>E là cổng chất lượng tự động trong <strong>CodePipeline</strong> (pre-deploy), C là <strong>canary</strong> theo lịch trên production API kèm alarm (post-deploy). Hai đáp án bổ sung nhau và đều tự động.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Tăng temperature làm tăng biến động, và \"trông hợp lý\" không phải regression test.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Review thủ công bằng Ground Truth Plus chậm, tốn chi phí, không tự động.</li><li><strong>C</strong>: ✅ Đúng — Synthetics canary giám sát liên tục sau deploy, alarm báo regression.</li><li><strong>D</strong>: ❌ Sai — Review mẫu thủ công mỗi ngày, không tự động và không chặn được deploy.</li><li><strong>E</strong>: ✅ Đúng — Model Evaluations với dataset tham chiếu làm gate trong pipeline, fail khi dưới ngưỡng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>regression testing, CodePipeline stage, Model Evaluations, CloudWatch Synthetics canary, threshold</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'trước deploy + sau deploy' → nghĩ ngay đến <strong>evaluation gate</strong> trong pipeline + <strong>canary</strong>/alarm giám sát.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 4,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>Increase the model temperature and top-p values during testing runs to explore more response variations, and deploy if the responses appear reasonable across multiple invocations.</p>",
              "correct": false,
              "feedback": "<p>Increasing randomness makes outputs less consistent and does not create a repeatable regression test or an automated quality gate. It also does not provide continuous monitoring after deployment.</p>"
            },
            {
              "choice": "<p>For each release, use Amazon SageMaker Ground Truth Plus to have human reviewers compare responses from the current and candidate prompts, then promote the change only after a manual approval step.</p>",
              "correct": false,
              "feedback": "<p>Human review can be valuable, but it adds significant operational overhead and latency and is not a lightweight, systematic regression-testing approach for frequent prompt iterations.</p>"
            },
            {
              "choice": "<p>Create an Amazon CloudWatch Synthetics canary that invokes the chatbot’s production API on a schedule with a small set of synthetic user workflows. Publish pass/fail as CloudWatch metrics and use CloudWatch alarms to detect regressions and alert the team.</p>",
              "correct": true,
              "feedback": "<p>CloudWatch Synthetics provides continuous, automated checks that simulate end-to-end usage. Alarms on the resulting metrics create an ongoing regression detection mechanism with minimal custom infrastructure.</p>"
            },
            {
              "choice": "<p>Export Amazon Bedrock request/response logs to Amazon S3 once per day and use Amazon Athena queries to manually review a sample of responses for tone and accuracy before approving each deployment.</p>",
              "correct": false,
              "feedback": "<p>This relies on manual review and periodic exports, which does not provide an automated quality gate in the deployment workflow or continuous regression detection with low operational overhead.</p>"
            },
            {
              "choice": "<p>Create a prompt dataset in Amazon S3 with representative user questions and reference responses. Add a stage in AWS CodePipeline that runs Amazon Bedrock Model Evaluations against the candidate prompt changes and fails the pipeline if quality metrics fall below defined thresholds.</p>",
              "correct": true,
              "feedback": "<p>A fixed prompt dataset provides repeatable regression tests, and Bedrock Model Evaluations can score outputs (for example, with LLM-as-a-judge or other supported evaluation approaches). Using the results as a pipeline gate implements an automated quality gate that prevents regressions from being promoted.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 4,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A systematic FM quality assurance process typically combines pre-deployment regression testing with post-deployment continuous monitoring. Running structured, repeatable model evaluations on a fixed prompt dataset provides a reliable regression test that can act as an automated quality gate in a CI/CD pipeline. After deployment, synthetic user workflows run by a canary provide continuous validation of end-to-end behavior and can trigger CloudWatch alarms when regressions occur. Manual sampling and ad hoc parameter tweaking do not provide consistent, automated controls, and human-only review adds substantial operational overhead for frequent releases.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Increasing randomness makes outputs less consistent and does not create a repeatable regression test or an automated quality gate. It also does not provide continuous monitoring after deployment.<br/>• <strong>B</strong>: ❌ Human review can be valuable, but it adds significant operational overhead and latency and is not a lightweight, systematic regression-testing approach for frequent prompt iterations.<br/>• <strong>C</strong>: ✅ CloudWatch Synthetics provides continuous, automated checks that simulate end-to-end usage. Alarms on the resulting metrics create an ongoing regression detection mechanism with minimal custom infrastructure.<br/>• <strong>D</strong>: ❌ This relies on manual review and periodic exports, which does not provide an automated quality gate in the deployment workflow or continuous regression detection with low operational overhead.<br/>• <strong>E</strong>: ✅ A fixed prompt dataset provides repeatable regression tests, and Bedrock Model Evaluations can score outputs (for example, with LLM-as-a-judge or other supported evaluation approaches). Using the results as a pipeline gate implements an automated quality gate that prevents regressions from being promoted.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets.html\">Use prompt datasets for model evaluation in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html\">Invoke an AWS Lambda function in a pipeline in CodePipeline - AWS CodePipeline (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html\">Synthetic monitoring (canaries) - Amazon CloudWatch (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C, E"
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services firm wants to allow its internal developers to build proof-of-concept applications that call Amazon Bedrock directly from local Python scripts. The firm uses Okta for workforce identity and requires single sign-on with short-lived credentials (no long-term access keys). Security requirements state that developers must be able to perform inference against approved FMs but must not be able to manage models, agents, or knowledge bases.</p><p>Which solution meets these requirements with the MOST secure, least-privilege access model?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Developer dùng Okta SSO gọi Bedrock từ script local, credential ngắn hạn, <strong>không access key dài hạn</strong>.</li><li>Chỉ được inference, không quản lý model, agent, knowledge base.</li><li>Ưu tiên: security, <strong>least privilege</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IAM Identity Center</strong> liên kết Okta cấp temporary credentials qua SSO, còn <strong>permission set</strong> tùy chỉnh giới hạn đúng các action runtime (InvokeModel, Converse) cho model được duyệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Role dùng chung và credentials phân phối thủ công là anti-pattern, không truy vết được từng người.</li><li><strong>B</strong>: ❌ Sai — IAM user với access key dài hạn và FullAccess vi phạm cả hai yêu cầu.</li><li><strong>C</strong>: ❌ Sai — Bedrock Runtime không chấp nhận JWT của Cognito user pool trực tiếp, cần đổi sang credentials AWS.</li><li><strong>D</strong>: ✅ Đúng — SSO, credential tạm, policy chỉ cho runtime actions.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM Identity Center, Okta, permission set, temporary credentials, InvokeModel/Converse</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp workforce SSO + credential ngắn hạn + least privilege → nghĩ ngay đến <strong>IAM Identity Center</strong> với <strong>permission set</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 5,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>Create one shared IAM role that has permissions to invoke Amazon Bedrock models. Distribute the role credentials to all developers and rotate the credentials quarterly.</p>",
              "correct": false,
              "feedback": "<p>Sharing credentials prevents per-user accountability and violates the requirement to avoid long-term credentials. It also increases security risk because access is not tied to federated user identity and is difficult to govern and audit at the individual level.</p>"
            },
            {
              "choice": "<p>Create an IAM user for each developer and generate access keys. Store the access keys in AWS Secrets Manager and attach the AmazonBedrockFullAccess managed policy to each user for simplicity.</p>",
              "correct": false,
              "feedback": "<p>This uses long-term access keys (explicitly disallowed) and grants overly broad permissions. AmazonBedrockFullAccess allows more than inference-only access and does not enforce least privilege.</p>"
            },
            {
              "choice": "<p>Configure an Amazon Cognito user pool federated with Okta. Have developers authenticate to Cognito and pass the Cognito JWT token directly to the Amazon Bedrock Runtime API for authorization.</p>",
              "correct": false,
              "feedback": "<p>Amazon Bedrock API requests require AWS SigV4 authentication with AWS credentials and IAM authorization, not a Cognito JWT presented directly to the Bedrock API. This approach does not provide a valid authorization mechanism for invoking Bedrock.</p>"
            },
            {
              "choice": "<p>Configure IAM Identity Center with Okta as the identity provider. Create a permission set for the developer group with a custom IAM policy that allows only Amazon Bedrock Runtime actions (for example, InvokeModel and Converse) for approved models. Have developers use IAM Identity Center authentication to obtain temporary credentials for AWS SDK calls.</p>",
              "correct": true,
              "feedback": "<p>IAM Identity Center provides identity federation with the enterprise IdP and issues short-lived credentials (no long-term access keys). A custom, least-privilege policy can allow only inference actions through the Bedrock Runtime endpoint while excluding management capabilities such as model, agent, or knowledge base management.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 5,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most secure approach is to federate workforce identities from the enterprise identity provider into AWS and issue temporary credentials, then apply role-based access control with least-privilege IAM policies. Using IAM Identity Center with Okta satisfies the federation and short-lived credential requirements, while a custom permission set policy can restrict access to only Bedrock Runtime inference operations (such as InvokeModel or Converse) for approved models. Approaches that rely on long-term access keys, shared credentials, or unsupported token types either violate the security requirements or cannot authorize requests to Amazon Bedrock.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Sharing credentials prevents per-user accountability and violates the requirement to avoid long-term credentials. It also increases security risk because access is not tied to federated user identity and is difficult to govern and audit at the individual level.<br/>• <strong>B</strong>: ❌ This uses long-term access keys (explicitly disallowed) and grants overly broad permissions. AmazonBedrockFullAccess allows more than inference-only access and does not enforce least privilege.<br/>• <strong>C</strong>: ❌ Amazon Bedrock API requests require AWS SigV4 authentication with AWS credentials and IAM authorization, not a Cognito JWT presented directly to the Bedrock API. This approach does not provide a valid authorization mechanism for invoking Bedrock.<br/>• <strong>D</strong>: ✅ IAM Identity Center provides identity federation with the enterprise IdP and issues short-lived credentials (no long-term access keys). A custom, least-privilege policy can allow only inference actions through the Bedrock Runtime endpoint while excluding management capabilities such as model, agent, or knowledge base management.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/gs-okta.html\">Configure SAML and SCIM with Okta and IAM Identity Center (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sdkref/latest/guide/feature-sso-credentials.html\">IAM Identity Center credential provider - AWS SDKs and Tools (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html\">Identity-based policy examples for Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail bank is building an internal GenAI assistant that helps loan officers draft customer-facing email responses. The bank must ensure the assistant follows an internal lending communications policy that prohibits the assistant from implying that a customer is approved or denied, and requires a standard disclaimer in every response. The bank must also document the model’s intended use and known limitations for governance review.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Assistant soạn email cho loan officer phải tuân policy: không ngụ ý duyệt/từ chối, luôn có disclaimer.</li><li>Cần tài liệu hóa intended use và limitations cho governance.</li><li>Ưu tiên: enforcement tự động, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails</strong> (kể cả automated reasoning) áp dụng policy một cách có hệ thống, Lambda kiểm tra deterministic sự hiện diện disclaimer, và <strong>model card</strong> đáp ứng yêu cầu tài liệu governance.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Enforcement chủ động ở cả hai lớp và có model card.</li><li><strong>B</strong>: ❌ Sai — Fine-tune cùng provisioned throughput tốn kém, không đảm bảo tuân policy, phát hiện vi phạm chỉ sau khi xảy ra.</li><li><strong>C</strong>: ❌ Sai — Citation không đồng nghĩa không ngụ ý duyệt/từ chối, cũng không bắt buộc disclaimer.</li><li><strong>D</strong>: ❌ Sai — System prompt chỉ là hướng dẫn mềm, không enforce được; CloudTrail chỉ audit.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails, automated reasoning, model card, disclaimer, policy enforcement</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp policy phải được thực thi chứ không chỉ nhắc → nghĩ ngay đến <strong>Guardrails</strong> + kiểm tra cuối; cần governance doc → <strong>model card</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 6,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock guardrail that implements the lending communications policy, including an automated reasoning policy derived from the policy document. Invoke the model through an AWS Lambda function that performs a final compliance check (for example, verifies the required disclaimer is present and blocks responses that violate policy). Document intended use and limitations in a model card.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock guardrails are designed to enforce policy-based constraints on model inputs and outputs, and automated reasoning checks can apply structured policy logic derived from a policy document. A lightweight Lambda pre/post-processing layer can enforce deterministic checks (such as ensuring a required disclaimer is present and blocking noncompliant outputs) before returning content to users. Maintaining a model card addresses governance needs by documenting intended use, limitations, and constraints in a standardized way.</p>"
            },
            {
              "choice": "<p>Create a fine-tuned Amazon Bedrock custom model by training on historical compliant email examples. Deploy the model with provisioned throughput to ensure consistent behavior, and rely on user feedback to detect policy violations over time.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning and provisioned throughput can improve domain style and performance consistency, but they do not provide strong, explicit policy enforcement. Relying on user feedback is reactive and allows policy violations to reach users. This also does not address automated compliance checks at inference time.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base that contains the lending communications policy and product guidelines. Use RetrieveAndGenerate so the assistant can cite the policy in responses, and reject any response that does not include citations.</p>",
              "correct": false,
              "feedback": "<p>Grounding responses with a knowledge base can improve factuality and provide citations, but it does not ensure the model will always follow the policy or include required disclaimers. Requiring citations does not prevent prohibited statements (such as implying approval/denial) and is not a substitute for explicit safety and compliance controls.</p>"
            },
            {
              "choice": "<p>Store an approved system prompt in Amazon Bedrock Prompt Management that includes the full policy text and the required disclaimer. Require all applications to use only this prompt and enable AWS CloudTrail logging for auditing.</p>",
              "correct": false,
              "feedback": "<p>Prompt governance and audit logging help with consistency and traceability but do not reliably enforce policy compliance because a model can still produce disallowed content, and prompts can be influenced by user input (prompt injection). This option also does not provide an automated enforcement layer to block or remediate noncompliant outputs.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 6,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A policy-compliant GenAI system needs explicit enforcement mechanisms, not just guidance. Amazon Bedrock guardrails provide built-in controls to block or filter content according to policy requirements, and automated reasoning checks can apply structured logic derived from a policy document for complex compliance rules. Adding a small Lambda layer for deterministic validation (such as checking for mandatory disclaimers and blocking disallowed phrases) creates a final compliance gate with minimal added complexity. A model card complements these controls by documenting intended use and known limitations to support governance and audits. Approaches that rely only on prompt text, citations, or post-hoc user feedback do not reliably prevent policy violations from reaching end users.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Amazon Bedrock guardrails are designed to enforce policy-based constraints on model inputs and outputs, and automated reasoning checks can apply structured policy logic derived from a policy document. A lightweight Lambda pre/post-processing layer can enforce deterministic checks (such as ensuring a required disclaimer is present and blocking noncompliant outputs) before returning content to users. Maintaining a model card addresses governance needs by documenting intended use, limitations, and constraints in a standardized way.<br/>• <strong>B</strong>: ❌ Fine-tuning and provisioned throughput can improve domain style and performance consistency, but they do not provide strong, explicit policy enforcement. Relying on user feedback is reactive and allows policy violations to reach users. This also does not address automated compliance checks at inference time.<br/>• <strong>C</strong>: ❌ Grounding responses with a knowledge base can improve factuality and provide citations, but it does not ensure the model will always follow the policy or include required disclaimers. Requiring citations does not prevent prohibited statements (such as implying approval/denial) and is not a substitute for explicit safety and compliance controls.<br/>• <strong>D</strong>: ❌ Prompt governance and audit logging help with consistency and traceability but do not reliably enforce policy compliance because a model can still produce disallowed content, and prompts can be influenced by user input (prompt injection). This option also does not provide an automated enforcement layer to block or remediate noncompliant outputs.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html\">Improve accuracy by adding Automated Reasoning checks in Amazon Bedrock Guardrails - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html\">Amazon SageMaker Model Cards - Amazon SageMaker AI (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SaaS provider runs a customer-support assistant that uses an Amazon Bedrock text model and a prompt template stored in Amazon Bedrock Prompt Management. The team wants to release an updated prompt version and occasionally switch to a newer model version. Before promoting changes, the team must automatically validate that answers remain consistent with previously accepted behavior and that hallucinations or semantic drift do not increase.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trước khi promote prompt/model mới phải tự động kiểm tra tính nhất quán và hallucination/semantic drift không tăng.</li><li>Ưu tiên: automation, quality gate, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Model Evaluations</strong> chạy dataset trên bản candidate và baseline, dùng <strong>LLM-as-a-judge</strong> chấm theo ngữ nghĩa và metric AI, rồi kết quả làm cổng chất lượng tự động trong pipeline.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — So khớp chính xác không phù hợp với output GenAI vốn đa dạng cách diễn đạt, gây false failure.</li><li><strong>B</strong>: ❌ Sai — Review sau deploy là phản ứng muộn, thủ công.</li><li><strong>C</strong>: ✅ Đúng — Đánh giá ngữ nghĩa tự động, so với baseline, làm gate.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — A2I tốn công người, chậm, không tự động hóa gate.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Evaluations, LLM-as-a-judge, baseline, quality gate, semantic drift</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp kiểm tra chất lượng trước khi promote → nghĩ ngay đến <strong>Model Evaluations</strong> <strong>LLM-as-a-judge</strong>, không phải exact match hay người duyệt.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 7,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>Create an Amazon CloudWatch Synthetics canary that invokes the assistant with a fixed set of prompts and fails if the generated responses do not exactly match a stored set of expected responses.</p>",
              "correct": false,
              "feedback": "<p>Exact string matching is not a reliable validation approach for GenAI because responses can be correct but vary in wording across runs. This approach will produce false failures and does not measure hallucination or semantic drift in a robust way.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock Model Invocation Logs and use Amazon CloudWatch Logs Insights queries to review a sample of production prompts and responses after deployment. Roll back if support engineers notice problems in the logs.</p>",
              "correct": false,
              "feedback": "<p>This is reactive and manual. It does not provide an automated pre-deployment validation gate, and it does not quantify semantic drift or hallucination rates against a controlled baseline before promoting the update.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Model Evaluations job that runs a prompt dataset (synthetic user workflows) stored in Amazon S3 against the candidate prompt/model and a baseline. Use an LLM-as-a-judge evaluation to score quality and AI-specific metrics, and use the results as an automated quality gate in the release pipeline before promoting the update.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Model Evaluations can run repeatable synthetic workflows from a dataset and use an evaluator model to score responses for quality and AI-specific risks such as groundedness/faithfulness and response consistency (semantic drift). Integrating the evaluation results as a pipeline gate provides automated deployment validation with minimal custom implementation.</p>"
            },
            {
              "choice": "<p>Route all responses from the updated prompt/model to Amazon Augmented AI (A2I) for human review during a canary period and promote the update only after reviewers approve a statistically significant sample.</p>",
              "correct": false,
              "feedback": "<p>Human review can work, but sending responses for ongoing human evaluation adds substantial operational overhead and cost. It is not the least-effort approach for automated validation during frequent FM or prompt updates.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 7,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-overhead deployment validation system for GenAI updates should run repeatable synthetic user workflows and automatically score the candidate release for AI-specific regressions such as hallucinations and semantic drift. Using Amazon Bedrock Model Evaluations with a prompt dataset in Amazon S3 provides a managed way to evaluate candidate prompt/model changes against a baseline by using an evaluator model, producing objective scores that can be enforced as a release gate. Log analysis is post-deployment and manual, exact string matching is brittle for non-deterministic outputs, and human-in-the-loop reviews are higher operational overhead than managed automated evaluation.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Exact string matching is not a reliable validation approach for GenAI because responses can be correct but vary in wording across runs. This approach will produce false failures and does not measure hallucination or semantic drift in a robust way.<br/>• <strong>B</strong>: ❌ This is reactive and manual. It does not provide an automated pre-deployment validation gate, and it does not quantify semantic drift or hallucination rates against a controlled baseline before promoting the update.<br/>• <strong>C</strong>: ✅ Bedrock Model Evaluations can run repeatable synthetic workflows from a dataset and use an evaluator model to score responses for quality and AI-specific risks such as groundedness/faithfulness and response consistency (semantic drift). Integrating the evaluation results as a pipeline gate provides automated deployment validation with minimal custom implementation.<br/>• <strong>D</strong>: ❌ Human review can work, but sending responses for ongoing human evaluation adds substantial operational overhead and cost. It is not the least-effort approach for automated validation during frequent FM or prompt updates.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html\">Evaluate model performance using another LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-judge-create.html\">Create a model evaluation job that uses an LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-version-compare.html\">Compare versions of a prompt in Prompt management - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A platform team at a regulated financial institution is building multiple internal applications that invoke Amazon Bedrock FMs for tasks such as summarization and drafting customer communications. The team must ensure that all applications use consistent, centrally managed prompts. Prompt changes must be reviewed and approved before they can be used in production, and auditors must be able to determine who used which prompt version and when.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều ứng dụng dùng prompt tập trung, thay đổi phải review/approve, auditor cần biết ai dùng prompt version nào và khi nào.</li><li>Ưu tiên: centralized governance, auditability, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Prompt Management</strong> cung cấp prompt tham số hóa, versioning và quy trình duyệt; <strong>CloudTrail</strong> cùng CloudWatch Logs cung cấp dấu vết audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Mapping template không có versioning/approval, và WAF không giải quyết việc quản lý prompt.</li><li><strong>B</strong>: ✅ Đúng — Dịch vụ chuyên dụng cho prompt có version và audit.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Parameter Store lưu được nhưng thiếu quy trình duyệt prompt và biết ai dùng version nào; metric token không phải audit.</li><li><strong>D</strong>: ❌ Sai — Model Registry dành cho model package, ép prompt vào là sai mục đích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management, versioning, approval workflow, CloudTrail, audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt tập trung + version + audit → nghĩ ngay đến <strong>Bedrock Prompt Management</strong> + <strong>CloudTrail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 8,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>Create an Amazon API Gateway front end that injects a standard system prompt by using request mapping templates. Enable AWS WAF to block prompt injection attempts and use access logs in API Gateway for auditing.</p>",
              "correct": false,
              "feedback": "<p>API Gateway request mapping can standardize an injected instruction, but it does not provide centralized prompt lifecycle governance such as prompt versioning, parameterized templates, and approval workflows. WAF is a web security control and does not provide prompt governance. API Gateway logs capture API access, but do not provide Bedrock prompt governance or prompt version management across multiple applications.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to create reusable, parameterized prompts with versioning and an approval workflow. Store the prompt template repository in Amazon S3 as the source of truth. Enable AWS CloudTrail to audit Bedrock API usage and send application prompt/response access logs to Amazon CloudWatch Logs.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Prompt Management provides centralized prompt storage, parameterization (template variables), and version governance, including controlled promotion of prompt versions through an approval process. S3 provides a durable repository for prompt artifacts and related assets. CloudTrail gives an audit trail for API activity (who/when invoked Bedrock operations), while CloudWatch Logs provides centralized operational logging of prompt access and usage across applications for investigations and oversight.</p>"
            },
            {
              "choice": "<p>Store prompt templates as AWS Systems Manager Parameter Store parameters and inject them into AWS Lambda environment variables during deployment. Enable Amazon CloudWatch metrics for token usage to track prompt usage over time.</p>",
              "correct": false,
              "feedback": "<p>Parameter Store and Lambda environment variables can distribute prompt text, but they do not provide a purpose-built prompt governance workflow (such as versioning and approvals) for Bedrock prompts. Token metrics track consumption, not who invoked which prompt version. This also increases operational overhead because each application must implement its own prompt retrieval, versioning, and audit mechanisms.</p>"
            },
            {
              "choice": "<p>Use Amazon SageMaker Model Registry to store and approve prompt templates as model package versions. Enable Amazon CloudWatch Logs for SageMaker endpoint invocation logging and use AWS CloudTrail for auditing.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Model Registry is intended for model versioning and deployment governance, not for managing and governing Bedrock prompt templates across applications. This approach introduces unnecessary components and does not directly implement prompt governance where the prompts are actually consumed (Bedrock Prompt Management), increasing operational overhead and complicating audits.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 8,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A comprehensive prompt governance solution needs a centralized place to define prompts, parameterize them for reuse, control changes through versioning and approvals, and maintain auditability of prompt usage. Amazon Bedrock Prompt Management is designed for prompt lifecycle management and sharing across applications, while Amazon S3 can serve as a durable repository for prompt artifacts and related assets. For oversight and auditing, AWS CloudTrail provides an authoritative record of API activity, and Amazon CloudWatch Logs centralizes operational access logs from the applications that consume prompts. Approaches that rely on ad hoc storage (such as environment variables) or unrelated governance tools (such as model registries) either lack approvals/version control for prompts or require significant custom implementation effort.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ API Gateway request mapping can standardize an injected instruction, but it does not provide centralized prompt lifecycle governance such as prompt versioning, parameterized templates, and approval workflows. WAF is a web security control and does not provide prompt governance. API Gateway logs capture API access, but do not provide Bedrock prompt governance or prompt version management across multiple applications.<br/>• <strong>B</strong>: ✅ Bedrock Prompt Management provides centralized prompt storage, parameterization (template variables), and version governance, including controlled promotion of prompt versions through an approval process. S3 provides a durable repository for prompt artifacts and related assets. CloudTrail gives an audit trail for API activity (who/when invoked Bedrock operations), while CloudWatch Logs provides centralized operational logging of prompt access and usage across applications for investigations and oversight.<br/>• <strong>C</strong>: ❌ Parameter Store and Lambda environment variables can distribute prompt text, but they do not provide a purpose-built prompt governance workflow (such as versioning and approvals) for Bedrock prompts. Token metrics track consumption, not who invoked which prompt version. This also increases operational overhead because each application must implement its own prompt retrieval, versioning, and audit mechanisms.<br/>• <strong>D</strong>: ❌ SageMaker Model Registry is intended for model versioning and deployment governance, not for managing and governing Bedrock prompt templates across applications. This approach introduces unnecessary components and does not directly implement prompt governance where the prompts are actually consumed (Bedrock Prompt Management), increasing operational overhead and complicating audits.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Construct and store reusable prompts with Prompt management in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-deploy.html\">Deploy a prompt to your application using versions in Prompt management - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">Monitor Amazon Bedrock API calls using CloudTrail - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail bank has multiple development teams building internal assistants that use Amazon Bedrock FMs for customer support, HR, and compliance workflows. The bank’s risk team requires a single governance approach so that prompt templates and inference settings are centrally controlled with versioning and approvals, all FM interactions are auditable for internal reviews, and organization-wide policy controls are enforced consistently across all applications.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một governance duy nhất cho nhiều team: prompt/inference settings tập trung có version và approval, mọi tương tác FM audit được, policy toàn tổ chức áp dụng nhất quán.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Prompt Management</strong> lo prompt và variants có version, <strong>Guardrails</strong> thực thi policy đồng nhất, <strong>CloudTrail</strong> và CloudWatch Logs cung cấp audit. Tất cả là dịch vụ managed của Bedrock.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Đủ ba trụ cột: quản lý prompt, enforce policy, audit.</li><li><strong>B</strong>: ❌ Sai — Secrets Manager không phải nơi quản lý prompt có version/variant, và metric invocation không enforce policy.</li><li><strong>C</strong>: ❌ Sai — SageMaker Model Registry cho model, deployment guardrails không kiểm soát nội dung prompt.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Mỗi team tự CI/CD và log riêng gây phân mảnh, không nhất quán toàn tổ chức, overhead cao.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management, Guardrails, CloudTrail, CloudWatch Logs, centralized governance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp governance prompt + policy + audit cho nhiều team → nghĩ ngay đến <strong>Prompt Management</strong> + <strong>Guardrails</strong> + <strong>CloudTrail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 9,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to centrally store and version approved prompt templates (including variants). Apply Amazon Bedrock Guardrails to enforce the bank’s policy controls, and use AWS CloudTrail and Amazon CloudWatch Logs to provide auditability of prompt and model usage across teams.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Prompt Management provides a centralized, governed mechanism for prompt reuse and versioning across multiple applications. Guardrails provide consistent policy enforcement for inputs and outputs, and CloudTrail/CloudWatch Logs provide the audit trail needed for oversight and compliance reviews without building a custom governance platform.</p>"
            },
            {
              "choice": "<p>Store prompts in AWS Secrets Manager and grant read access only to production roles. Use Amazon CloudWatch metrics to track the number of model invocations and configure alarms when usage spikes.</p>",
              "correct": false,
              "feedback": "<p>Secrets Manager is designed for sensitive secrets and rotation, not prompt governance, versioned prompt lifecycle management, or organization-wide approvals. CloudWatch metrics provide usage visibility but do not provide the centralized governance and policy enforcement required for consistent oversight of FM implementations.</p>"
            },
            {
              "choice": "<p>Register each team’s prompts as artifacts in Amazon SageMaker Model Registry and require manual approval before the teams can deploy their applications. Rely on SageMaker deployment guardrails to enforce controls on prompt updates.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Model Registry is intended for model versioning and deployment workflows, not for centrally governing Bedrock prompts across multiple applications. SageMaker deployment guardrails control model rollout behavior, not organization-wide prompt governance and enforcement for Bedrock-based FM interactions.</p>"
            },
            {
              "choice": "<p>Store prompt templates in Amazon S3 and require each team to deploy updates through their own CI/CD pipeline with peer code reviews. Configure each application to log prompt inputs and outputs to Amazon CloudWatch Logs.</p>",
              "correct": false,
              "feedback": "<p>Although S3 and CI/CD can distribute templates, governance is fragmented across multiple pipelines and review processes, which reduces consistent oversight and increases operational overhead. This approach also lacks a centralized prompt governance system with standardized approval and lifecycle controls for prompt artifacts.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 9,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>An organizational governance system for FMs needs centralized control over the artifacts that drive behavior (prompts and configurations), consistent enforcement of policies, and auditability for oversight. Centralized prompt governance through Amazon Bedrock Prompt Management standardizes prompt reuse, versioning, and controlled rollout across teams. Amazon Bedrock Guardrails adds consistent policy enforcement for both inputs and outputs, reducing the chance of teams implementing uneven safety controls. AWS CloudTrail and Amazon CloudWatch Logs provide the evidence trail required for governance and compliance audits by recording access and usage patterns, enabling consistent oversight without custom-built governance infrastructure.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Bedrock Prompt Management provides a centralized, governed mechanism for prompt reuse and versioning across multiple applications. Guardrails provide consistent policy enforcement for inputs and outputs, and CloudTrail/CloudWatch Logs provide the audit trail needed for oversight and compliance reviews without building a custom governance platform.<br/>• <strong>B</strong>: ❌ Secrets Manager is designed for sensitive secrets and rotation, not prompt governance, versioned prompt lifecycle management, or organization-wide approvals. CloudWatch metrics provide usage visibility but do not provide the centralized governance and policy enforcement required for consistent oversight of FM implementations.<br/>• <strong>C</strong>: ❌ SageMaker Model Registry is intended for model versioning and deployment workflows, not for centrally governing Bedrock prompts across multiple applications. SageMaker deployment guardrails control model rollout behavior, not organization-wide prompt governance and enforcement for Bedrock-based FM interactions.<br/>• <strong>D</strong>: ❌ Although S3 and CI/CD can distribute templates, governance is fragmented across multiple pipelines and review processes, which reduces consistent oversight and increases operational overhead. This approach also lacks a centralized prompt governance system with standardized approval and lifecycle controls for prompt artifacts.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Construct and store reusable prompts with Prompt management in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/security/implementing-least-privilege-access-for-amazon-bedrock/\">Implementing least privilege access for Amazon Bedrock (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial news provider is building a GenAI feature that generates short, compliant market summaries for traders by invoking an Amazon Bedrock text model from an AWS Lambda function. Traffic is highly predictable: every weekday at market open, request volume increases by about 10x for 45 minutes. During this window, users experience increased latency and occasional throttling errors from the model. The provider must keep all inference in a single AWS Region and wants consistent throughput with minimal operational overhead.</p><p>Which solution will MOST effectively maximize throughput and resource utilization for this workload?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Traffic dự đoán được, tăng 10x trong 45 phút mỗi ngày làm latency tăng và throttling.</li><li>Giữ inference trong một Region, cần throughput ổn định, ít vận hành.</li><li>Ưu tiên: <strong>throughput nhất quán</strong>, resource utilization.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Provisioned Throughput</strong> đảm bảo dung lượng theo model units (RPM/TPM) đã tính trước, loại bỏ throttling on-demand, và có thể giám sát bằng CloudWatch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Tự host model trên SageMaker làm tăng overhead lớn, đề đang dùng Bedrock model.</li><li><strong>B</strong>: ✅ Đúng — Dung lượng đảm bảo cho cửa sổ tải đỉnh có thể dự đoán.</li><li><strong>C</strong>: ❌ Sai — Batch là bất đồng bộ, không phù hợp người dùng cần kết quả gần real-time.</li><li><strong>D</strong>: ❌ Sai — Cross-Region inference vi phạm yêu cầu một Region và vẫn on-demand nên không đảm bảo throughput.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Provisioned Throughput, predictable peak, throttling, model units, single Region</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tải đỉnh dự đoán được + throttling Bedrock → nghĩ ngay đến <strong>Provisioned Throughput</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 10,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>Deploy the model behind a SageMaker AI real-time endpoint with AWS Auto Scaling and invoke the endpoint from AWS Lambda. Use CloudWatch to scale the endpoint during market open based on CPU and request metrics.</p>",
              "correct": false,
              "feedback": "<p>This increases operational overhead and changes the integration pattern away from managed Bedrock model invocation. It also introduces additional deployment and scaling complexity that is unnecessary when the requirement is primarily to increase Bedrock model throughput during predictable spikes.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock provisioned throughput for the selected model sized from expected requests-per-minute and tokens-per-minute. Update the application to invoke the provisioned model ARN, and use Amazon CloudWatch metrics (invocation count, latency, throttles, token counts) to monitor utilization and adjust capacity as needed.</p>",
              "correct": true,
              "feedback": "<p>Provisioned throughput is designed to provide predictable, reserved model capacity for higher sustained throughput during known peaks. Sizing based on expected RPM/TPM is a capacity-planning approach, and CloudWatch utilization monitoring helps validate the provisioned level and tune it over time. This approach keeps the same Bedrock integration pattern and remains within a single Region.</p>"
            },
            {
              "choice": "<p>Write each prompt to Amazon S3 and use Amazon Bedrock batch inference to process prompts asynchronously. Store the generated summaries back in Amazon S3 and notify users when processing completes by using Amazon EventBridge.</p>",
              "correct": false,
              "feedback": "<p>Batch inference is intended for asynchronous, throughput-oriented processing where users can wait for results. It does not meet the near-real-time interactive requirement implied by a trader-facing feature during market open, and it changes the user experience to a delayed, file-based workflow.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock cross-Region inference and configure the application to use an inference profile so Bedrock can route requests to the least busy Region. Keep the existing on-demand invocation pattern and rely on SDK retries with exponential backoff.</p>",
              "correct": false,
              "feedback": "<p>This violates the requirement that inference must remain in a single Region. While exponential backoff helps resiliency, it does not provide dedicated capacity and can still result in unacceptable throttling and latency during predictable peaks.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 10,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For predictable, recurring traffic spikes, the most direct way to increase model throughput while keeping a simple architecture is to reserve capacity for the exact Bedrock model being used. Provisioned throughput provides dedicated throughput for the model, and capacity planning based on expected request volume and token consumption helps select an appropriate provisioned level. CloudWatch monitoring then validates whether the provisioned capacity is sufficient (for example, by watching throttles, latency, and token counts) and informs iterative tuning. Asynchronous batch processing changes the interaction pattern, cross-Region inference conflicts with single-Region constraints, and moving to a hosted endpoint adds operational complexity that is avoidable for this use case.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This increases operational overhead and changes the integration pattern away from managed Bedrock model invocation. It also introduces additional deployment and scaling complexity that is unnecessary when the requirement is primarily to increase Bedrock model throughput during predictable spikes.<br/>• <strong>B</strong>: ✅ Provisioned throughput is designed to provide predictable, reserved model capacity for higher sustained throughput during known peaks. Sizing based on expected RPM/TPM is a capacity-planning approach, and CloudWatch utilization monitoring helps validate the provisioned level and tune it over time. This approach keeps the same Bedrock integration pattern and remains within a single Region.<br/>• <strong>C</strong>: ❌ Batch inference is intended for asynchronous, throughput-oriented processing where users can wait for results. It does not meet the near-real-time interactive requirement implied by a trader-facing feature during market open, and it changes the user experience to a delayed, file-based workflow.<br/>• <strong>D</strong>: ❌ This violates the requirement that inference must remain in a single Region. While exponential backoff helps resiliency, it does not provide dedicated capacity and can still result in unacceptable throttling and latency during predictable peaks.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html\">Increase model invocation capacity with Provisioned Throughput in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html\">Use a Provisioned Throughput with an Amazon Bedrock resource (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/model-invocations.html\">Model Invocations - Amazon CloudWatch (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media streaming provider uses an API Gateway endpoint backed by an AWS Lambda function to call an Amazon Bedrock FM that generates podcast episode summaries. The team wants to reduce cost by switching to a smaller FM and tuning inference parameters (for example, temperature and max token limits). Before rollout, the team must verify summary quality does not regress, quantify the latency-to-quality and cost-to-quality tradeoffs, and introduce the new configuration to production traffic gradually with an easy rollback path.</p><p>Which combination of steps should the team take to meet these requirements with the LEAST operational overhead? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đổi sang FM nhỏ hơn và tinh chỉnh tham số để giảm chi phí.</li><li>Cần kiểm tra chất lượng không giảm, định lượng tradeoff latency/cost so với quality, rollout dần có rollback dễ.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>E đánh giá chất lượng bằng <strong>LLM-as-a-judge</strong> và lấy latency, token từ CloudWatch để tính tỷ lệ. C dùng Lambda alias và <strong>CodeDeploy canary</strong> dịch chuyển traffic dần, tự rollback theo alarm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 Lifecycle không liên quan, và \"model chạy nhanh nhất\" bỏ qua chất lượng.</li><li><strong>B</strong>: ❌ Sai — Review thủ công mẫu nhỏ và chi phí tính từ Lambda duration/memory không phản ánh token cost.</li><li><strong>C</strong>: ✅ Đúng — Canary rollout có rollback tự động.</li><li><strong>D</strong>: ❌ Sai — Fine-tune không phục vụ mục tiêu giảm chi phí và spot check không đủ kiểm chứng.</li><li><strong>E</strong>: ✅ Đúng — Đánh giá có hệ thống và định lượng tradeoff.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Evaluations, LLM-as-a-judge, Lambda alias, CodeDeploy canary, rollback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đổi model/tham số + rollout dần → nghĩ ngay đến <strong>Model Evaluations</strong> để so sánh và <strong>CodeDeploy canary</strong> + alarm để rollback.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 11,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 Lifecycle policies to move older transcripts to lower-cost storage classes and run periodic batch summarization jobs to compare completion time across models. Select the model that finishes first to optimize performance.</p>",
              "correct": false,
              "feedback": "<p>Storage lifecycle policies are unrelated to model evaluation. Comparing only completion time ignores summary quality and token-based cost, and periodic batch jobs do not provide a controlled canary mechanism for safe rollout to production traffic.</p>"
            },
            {
              "choice": "<p>Enable detailed AWS Lambda logs and export the logs to Amazon S3. Use Amazon CloudWatch Logs Insights to manually review a small sample of model responses and estimate cost by averaging Lambda duration and memory usage.</p>",
              "correct": false,
              "feedback": "<p>Manual log sampling is not a systematic evaluation method and does not reliably compare multiple candidate configurations. Lambda duration is not a good proxy for FM inference cost (token-based) or FM latency, and this approach does not produce repeatable quality metrics.</p>"
            },
            {
              "choice": "<p>Deploy two AWS Lambda versions behind a single alias: one version calling the existing FM configuration and one version calling the candidate configuration. Use AWS CodeDeploy canary deployments to shift a small percentage of production traffic to the candidate version and automatically roll back based on Amazon CloudWatch alarms for error rate and latency.</p>",
              "correct": true,
              "feedback": "<p>A canary deployment provides controlled exposure of the new configuration to live traffic and a straightforward rollback mechanism. Monitoring CloudWatch alarms during the canary validates operational behavior (latency and errors) under real workload conditions without requiring complex orchestration.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock custom model by fine-tuning the FM on past transcripts so the model learns the provider’s preferred style. Promote the fine-tuned model to production after a small set of spot checks by editors.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning increases cost and complexity and does not directly address systematic comparison of multiple configurations. Spot checks are not a repeatable evaluation system, and this approach shifts the problem from selecting an optimal configuration to building and maintaining a customized model.</p>"
            },
            {
              "choice": "<p>Create a prompt dataset in Amazon S3 that includes representative transcripts (or excerpts) and reference summaries. Run Amazon Bedrock Model Evaluations across multiple candidate FMs and parameter configurations by using an LLM-as-a-judge. Use Amazon CloudWatch metrics (such as model latency and input/output token counts) collected during the runs to compute latency-to-quality and cost-to-quality ratios.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Model Evaluations provides a systematic way to compare models and inference settings on the same prompt dataset. Using token counts and latency metrics makes it possible to quantify price/performance (token efficiency and latency-to-quality) alongside quality scores without building a custom evaluation framework.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 11,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A systematic evaluation approach should first compare candidate foundation models and inference parameter settings on a consistent prompt dataset, using an evaluation method that produces repeatable quality scores. Then, the team should validate the chosen configuration under real production conditions with a controlled rollout mechanism that supports quick rollback.<br/><br/>Amazon Bedrock Model Evaluations enables structured, repeatable multi-model and multi-configuration testing using a prompt dataset, and it can be paired with operational metrics (token counts and latency) to calculate cost-to-quality and latency-to-quality tradeoffs. A CodeDeploy canary deployment for Lambda provides a low-ops way to gradually shift production traffic to the new configuration while monitoring alarms and rolling back automatically if issues occur. The other approaches either rely on manual review, optimize unrelated parts of the system, or introduce unnecessary customization complexity without providing systematic comparisons.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Storage lifecycle policies are unrelated to model evaluation. Comparing only completion time ignores summary quality and token-based cost, and periodic batch jobs do not provide a controlled canary mechanism for safe rollout to production traffic.<br/>• <strong>B</strong>: ❌ Manual log sampling is not a systematic evaluation method and does not reliably compare multiple candidate configurations. Lambda duration is not a good proxy for FM inference cost (token-based) or FM latency, and this approach does not produce repeatable quality metrics.<br/>• <strong>C</strong>: ✅ A canary deployment provides controlled exposure of the new configuration to live traffic and a straightforward rollback mechanism. Monitoring CloudWatch alarms during the canary validates operational behavior (latency and errors) under real workload conditions without requiring complex orchestration.<br/>• <strong>D</strong>: ❌ Fine-tuning increases cost and complexity and does not directly address systematic comparison of multiple configurations. Spot checks are not a repeatable evaluation system, and this approach shifts the problem from selecting an optimal configuration to building and maintaining a customized model.<br/>• <strong>E</strong>: ✅ Bedrock Model Evaluations provides a systematic way to compare models and inference settings on the same prompt dataset. Using token counts and latency metrics makes it possible to quantify price/performance (token efficiency and latency-to-quality) alongside quality scores without building a custom evaluation framework.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html\">Evaluate model performance using another LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html\">Working with deployment configurations in CodeDeploy - AWS CodeDeploy (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups-configure-advanced-options.html\">Configure advanced options for a deployment group - AWS CodeDeploy (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C, E"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large enterprise is building a Retrieval Augmented Generation (RAG) application by using Amazon Bedrock. The team stores embeddings and document chunks in Amazon OpenSearch Service and has grown to tens of millions of chunks across multiple business domains (HR policies, engineering runbooks, and legal templates). Users are experiencing increased query latency during peak hours, and the OpenSearch cluster shows signs of JVM memory pressure. The team also needs to tune index settings and, if necessary, use different embedding approaches for different domains.</p><p>Which design will optimize semantic search performance at scale MOST effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG với hàng chục triệu chunk trong OpenSearch: latency cao giờ cao điểm, <strong>JVM memory pressure</strong>, cần tune index và có thể dùng embedding khác nhau theo domain.</li><li>Ưu tiên: hiệu năng semantic search ở quy mô lớn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Tách index theo domain</strong> cùng <strong>hierarchical indexing</strong> (index tóm tắt định tuyến tới domain đúng) thu hẹp không gian tìm kiếm, cho phép tune riêng từng index và embedding riêng. Ít shard lớn hơn giảm chi phí phối hợp giữa shard khi k-NN search.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Giảm phạm vi tìm kiếm và giảm overhead shard.</li><li><strong>B</strong>: ❌ Sai — DynamoDB Scan không có nearest-neighbor search, rất chậm và đắt.</li><li><strong>C</strong>: ❌ Sai — UltraWarm là lưu trữ nóng-lạnh cho dữ liệu cũ, hợp log, không tăng hiệu năng vector search và thêm replica làm tăng memory pressure.</li><li><strong>D</strong>: ❌ Sai — Nhiều shard nhỏ tăng overhead phối hợp và JVM memory, làm xấu thêm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>multi-index, hierarchical indexing, shard sizing, k-NN, JVM memory pressure</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp OpenSearch vector chậm ở quy mô lớn → nghĩ ngay đến <strong>chia index theo domain</strong> + <strong>routing phân cấp</strong> + shard lớn vừa phải.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 12,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>Implement a multi-index strategy with separate indexes per domain and use a hierarchical indexing approach: a small top-level summary/metadata index routes queries to the appropriate domain index. Use fewer, larger shards for the domain indexes to reduce cross-shard coordination for vector search.</p>",
              "correct": true,
              "feedback": "<p>Separating domains into dedicated indexes enables domain-specific tuning (including embedding approaches and index settings). A hierarchical (summary-to-detail) index pattern reduces the search space and improves routing, while fewer, larger shards reduce coordination overhead and help improve vector search performance and cluster stability at scale.</p>"
            },
            {
              "choice": "<p>Store embeddings and metadata in Amazon DynamoDB and use Scan operations with FilterExpression to find the nearest vectors for each query.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB can store vectors but does not provide vector similarity search for k-nearest-neighbor retrieval. Performing scans would be inefficient and would not meet low-latency semantic retrieval requirements at scale.</p>"
            },
            {
              "choice": "<p>Move older vectors to UltraWarm storage and increase the replica count to improve read scalability for semantic search queries.</p>",
              "correct": false,
              "feedback": "<p>UltraWarm is a cost-optimization tier primarily for indices with few writes and is slower than hot storage. Increasing replicas can help read throughput, but it does not address the primary performance bottleneck for vector search caused by sharding strategy and query coordination, and it does not provide domain-specific tuning.</p>"
            },
            {
              "choice": "<p>Keep a single OpenSearch index for all domains and increase the number of shards significantly (for example, many small 5-GB shards) to maximize parallelism during k-NN searches.</p>",
              "correct": false,
              "feedback": "<p>For vector (semantic) search, too many shards increases cross-shard coordination overhead and can contribute to JVM memory pressure. Many small shards often reduce performance and stability rather than improving it at scale.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 12,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>High-performance semantic retrieval at scale is heavily influenced by index architecture and shard strategy. Splitting data into multiple indexes by domain allows each corpus to be tuned independently (for example, different mappings, shard sizes, and embedding strategies), which is difficult with a single monolithic index. A hierarchical approach, where a small top-level index helps route queries to a domain-specific index, reduces unnecessary searching across unrelated corpora and improves relevance and latency. For vector search, using fewer, larger shards helps reduce cross-shard coordination and can mitigate cluster stability issues such as JVM memory pressure that are commonly associated with excessive shard counts.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Separating domains into dedicated indexes enables domain-specific tuning (including embedding approaches and index settings). A hierarchical (summary-to-detail) index pattern reduces the search space and improves routing, while fewer, larger shards reduce coordination overhead and help improve vector search performance and cluster stability at scale.<br/>• <strong>B</strong>: ❌ DynamoDB can store vectors but does not provide vector similarity search for k-nearest-neighbor retrieval. Performing scans would be inefficient and would not meet low-latency semantic retrieval requirements at scale.<br/>• <strong>C</strong>: ❌ UltraWarm is a cost-optimization tier primarily for indices with few writes and is slower than hot storage. Increasing replicas can help read throughput, but it does not address the primary performance bottleneck for vector search caused by sharding strategy and query coordination, and it does not provide domain-specific tuning.<br/>• <strong>D</strong>: ❌ For vector (semantic) search, too many shards increases cross-shard coordination overhead and can contribute to JVM memory pressure. Many small shards often reduce performance and stability rather than improving it at scale.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp-sharding.html\">Choosing the number of shards - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/wellarchitected/latest/amazon-opensearch-service-lens/aosperf01-bp03.html\">AOSPERF01-BP03 Check the number of shards per GiB of heap memory - Amazon OpenSearch Service Lens (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/big-data/amazon-opensearch-services-vector-database-capabilities-explained/\">Amazon OpenSearch Service’s vector database capabilities explained (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech company is building a customer self-service chatbot that runs behind Amazon API Gateway and AWS Lambda. The chatbot uses Amazon Bedrock to answer questions such as “What were my last 5 card transactions?” by querying an Amazon Aurora PostgreSQL database. The company is concerned that abusive user messages could cause the chatbot to respond with profane or otherwise harmful language. The company also wants to avoid any fabricated transaction amounts and ensure that data-backed answers are deterministic and auditable.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chatbot fintech: chặn ngôn từ tục tĩu/độc hại, tránh bịa số liệu giao dịch, câu trả lời từ dữ liệu phải <strong>deterministic</strong> và audit được.</li><li>Ưu tiên: safety, accuracy, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails</strong> lọc nội dung độc hại theo cách managed. <strong>Text-to-SQL</strong> chỉ đọc, tham số hóa, thực thi bởi Lambda trên Aurora và format từ result set giúp số liệu chính xác, có thể truy vết.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Prompt và temperature 0 không đảm bảo, model vẫn có thể bịa số.</li><li><strong>B</strong>: ❌ Sai — Tự dựng model toxicity trên SageMaker là overhead lớn, và không giải quyết vấn đề số liệu.</li><li><strong>C</strong>: ❌ Sai — Comprehend sentiment không phải toxicity filter, và không xử lý fabricated amounts.</li><li><strong>D</strong>: ✅ Đúng — Một giải pháp xử lý cả an toàn nội dung lẫn tính chính xác dữ liệu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails, text-to-SQL, read-only, parameterized, deterministic</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp câu hỏi dữ liệu có cấu trúc cần chính xác → nghĩ ngay đến <strong>truy vấn SQL thật</strong> thay vì để model tự trả lời; cần lọc nội dung → <strong>Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 13,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>Rely on prompt instructions that tell the model to be polite and to not use offensive language. Set the model temperature to 0 to reduce variability, and let the model answer transaction questions from its own reasoning.</p>",
              "correct": false,
              "feedback": "<p>Prompt-only controls and lower temperature can reduce randomness but cannot reliably prevent harmful outputs, and the model can still fabricate transaction details because it is not deterministically grounded to the database results.</p>"
            },
            {
              "choice": "<p>Deploy a custom toxicity classification model in Amazon SageMaker AI and use SageMaker Model Monitor and SageMaker Clarify to detect unsafe outputs and block responses when toxicity or bias metrics exceed a threshold.</p>",
              "correct": false,
              "feedback": "<p>This introduces significant operational overhead (model deployment, monitoring jobs, and ongoing tuning) and is not the most direct approach for preventing harmful LLM outputs. Clarify focuses on bias and explainability, not primary output moderation for conversational responses, and this does not inherently make database-backed answers deterministic.</p>"
            },
            {
              "choice": "<p>Use AWS Lambda to call Amazon Comprehend to detect negative sentiment in the generated response and remove any sentences that appear toxic. Then return the remaining text to the user without changing how the model answers transaction questions.</p>",
              "correct": false,
              "feedback": "<p>Sentiment detection is not the same as content safety enforcement, and deleting sentences post-generation can produce incomplete or misleading answers. This also does not ensure deterministic, auditable transaction responses because the model is still generating the content rather than returning results grounded in the database query.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock Guardrails to filter model responses (for example, profanity and topic filters) and return a blocked message when content violates policy. For transaction questions, implement a text-to-SQL flow where the model produces a SQL query that is restricted to read-only, parameterized patterns executed by a Lambda function against Aurora, and format the response only from the SQL result set.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Guardrails provide managed output filtering to prevent harmful language in responses. Using a text-to-SQL approach with restricted, read-only query patterns and returning answers from the executed SQL results makes transaction answers deterministic and auditable, reducing hallucinations and preventing fabricated amounts while keeping the architecture managed and relatively simple to operate.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 13,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A robust content safety framework for a customer-facing chatbot should combine managed output controls with deterministic data access patterns. Guardrails help enforce policy on the model’s generated responses by filtering profanities and disallowed topics and by returning a consistent blocked message when violations occur. For questions that require exact values (such as financial transactions), a text-to-SQL approach reduces the risk of hallucinated numbers by forcing the system to retrieve the answer from the database and to generate the final response only from the query results. Approaches that rely only on prompting or post-hoc sentiment checks are less reliable for preventing harmful outputs and do not ensure deterministic, auditable data-backed answers.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Prompt-only controls and lower temperature can reduce randomness but cannot reliably prevent harmful outputs, and the model can still fabricate transaction details because it is not deterministically grounded to the database results.<br/>• <strong>B</strong>: ❌ This introduces significant operational overhead (model deployment, monitoring jobs, and ongoing tuning) and is not the most direct approach for preventing harmful LLM outputs. Clarify focuses on bias and explainability, not primary output moderation for conversational responses, and this does not inherently make database-backed answers deterministic.<br/>• <strong>C</strong>: ❌ Sentiment detection is not the same as content safety enforcement, and deleting sentences post-generation can produce incomplete or misleading answers. This also does not ensure deterministic, auditable transaction responses because the model is still generating the content rather than returning results grounded in the database query.<br/>• <strong>D</strong>: ✅ Bedrock Guardrails provide managed output filtering to prevent harmful language in responses. Using a text-to-SQL approach with restricted, read-only query patterns and returning answers from the executed SQL results makes transaction answers deterministic and auditable, reducing hallucinations and preventing fabricated amounts while keeping the architecture managed and relatively simple to operate.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use-independent-api.html\">Use the ApplyGuardrail API in your application - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/database/build-an-ai-powered-text-to-sql-chatbot-using-amazon-bedrock-amazon-memorydb-and-amazon-rds/\">Build an AI-powered text-to-SQL chatbot using Amazon Bedrock, Amazon MemoryDB, and Amazon RDS | AWS Database Blog (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A risk and compliance team is building an internal Q&amp;A assistant by using Amazon Bedrock Knowledge Bases backed by an Amazon OpenSearch Service vector store. Source policy documents are stored in Amazon S3 and are frequently updated throughout the day (new versions, replacements, and deletions). Users report that answers sometimes reference outdated policy language.</p><p>The team needs an automated data maintenance approach that detects document changes in near real time and keeps the vector store synchronized with the latest content with the LEAST operational overhead.</p><p>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tài liệu S3 đổi liên tục (thêm, thay, xóa) làm vector store lỗi thời.</li><li>Cần phát hiện thay đổi gần real-time và đồng bộ vector store, ít vận hành.</li><li>Ưu tiên: freshness, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 event</strong> qua EventBridge kích hoạt Lambda gọi <strong>StartIngestionJob</strong> ngay khi có thay đổi, giúp knowledge base đồng bộ gần real-time, kể cả khi xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Versioning và CRR không cập nhật vector store, truy vấn hai Region là phức tạp vô ích.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Lịch 6 giờ để lại cửa sổ dữ liệu cũ dài, không phải near real time.</li><li><strong>C</strong>: ❌ Sai — Access log parse mỗi đêm trễ tới cả ngày và tự dựng ETL.</li><li><strong>D</strong>: ✅ Đúng — Event-driven, gần real-time, managed.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 event notifications, EventBridge, StartIngestionJob, near real time, sync</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp Knowledge Base cần luôn cập nhật theo S3 → nghĩ ngay đến <strong>S3 event</strong> + <strong>EventBridge</strong> + Lambda gọi <strong>StartIngestionJob</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 14,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>Enable Amazon S3 Versioning and Amazon S3 Cross-Region Replication (CRR) for the document bucket. Configure the application to query both Regions’ vector stores and select the most recent response based on the S3 version ID.</p>",
              "correct": false,
              "feedback": "<p>Replicating S3 objects does not automatically update embeddings or the vector store in either Region. Querying multiple vector stores adds complexity and cost, and it does not provide a direct synchronization mechanism to ensure the vector index reflects the latest document state.</p>"
            },
            {
              "choice": "<p>Create an Amazon EventBridge scheduled rule to call the Amazon Bedrock StartIngestionJob API for the knowledge base every 6 hours so the vector store is periodically refreshed.</p>",
              "correct": false,
              "feedback": "<p>A scheduled refresh can help with maintenance, but running only every 6 hours does not provide near-real-time synchronization for frequently updated documents. It also performs unnecessary ingestion when no changes occurred, increasing cost and lag.</p>"
            },
            {
              "choice": "<p>Enable Amazon S3 server access logging to a separate logging bucket. Run an AWS Glue ETL job each night to parse the access logs, identify changed objects, and update the OpenSearch vector index.</p>",
              "correct": false,
              "feedback": "<p>Access logs are primarily for auditing and are not a near-real-time change detection mechanism for keeping a vector store current. A nightly batch job also delays updates and introduces additional operational overhead for ETL management.</p>"
            },
            {
              "choice": "<p>Configure Amazon S3 event notifications for object create, overwrite, and delete events to Amazon EventBridge. Create an EventBridge rule that invokes an AWS Lambda function to call StartIngestionJob for the Amazon Bedrock knowledge base whenever relevant S3 changes occur.</p>",
              "correct": true,
              "feedback": "<p>S3 events provide real-time change detection, and EventBridge + Lambda provides a serverless, automated synchronization workflow. Triggering a knowledge base ingestion job when documents change keeps the embeddings and vector store aligned with the current S3 content while minimizing infrastructure and operational burden.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 14,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Keeping a RAG vector store current requires both change detection and an automated synchronization mechanism that updates embeddings/index entries when source content changes. Using S3 events routed through EventBridge to trigger a Lambda function provides near-real-time detection of new, updated, or deleted documents and automatically initiates a knowledge base ingestion job to refresh the underlying vector store. Alternatives based on periodic batch refreshes increase staleness windows and can waste resources, while replication and access-log-driven pipelines add complexity without directly ensuring that embeddings and vector indices are updated promptly.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Replicating S3 objects does not automatically update embeddings or the vector store in either Region. Querying multiple vector stores adds complexity and cost, and it does not provide a direct synchronization mechanism to ensure the vector index reflects the latest document state.<br/>• <strong>B</strong>: ❌ A scheduled refresh can help with maintenance, but running only every 6 hours does not provide near-real-time synchronization for frequently updated documents. It also performs unnecessary ingestion when no changes occurred, increasing cost and lag.<br/>• <strong>C</strong>: ❌ Access logs are primarily for auditing and are not a near-real-time change detection mechanism for keeping a vector store current. A nightly batch job also delays updates and introduces additional operational overhead for ETL management.<br/>• <strong>D</strong>: ✅ S3 events provide real-time change detection, and EventBridge + Lambda provides a serverless, automated synchronization workflow. Triggering a knowledge base ingestion job when documents change keeps the embeddings and vector store aligned with the current S3 content while minimizing infrastructure and operational burden.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html\">StartIngestionJob - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html\">Using EventBridge - Amazon Simple Storage Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html\">Event bus targets in Amazon EventBridge - Amazon EventBridge (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An insurance company is building an internal GenAI assistant that drafts claim denial letters by using an Amazon Bedrock FM. Company policy requires a licensed adjuster to review and approve (or edit) each draft before the letter is sent to a customer. The company also wants to capture the adjuster’s rating and final approved text for later analysis. Review times can vary from minutes to hours.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thư từ từ chối bồi thường phải được adjuster duyệt hoặc sửa trước khi gửi, lưu rating và bản cuối, thời gian review từ vài phút đến vài giờ.</li><li>Ưu tiên: <strong>human-in-the-loop</strong>, workflow chờ lâu, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions</strong> điều phối cả quy trình, chờ approval (callback) dài hạn mà không tốn tài nguyên, <strong>DynamoDB</strong> lưu trạng thái, rating và nội dung cuối.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SQS thô không có UI/trạng thái, adjuster đọc trực tiếp queue và phải tự lo logic, khó mở rộng.</li><li><strong>B</strong>: ✅ Đúng — Orchestration có chờ human approval và lưu feedback.</li><li><strong>C</strong>: ❌ Sai — Bỏ qua yêu cầu review của con người.</li><li><strong>D</strong>: ❌ Sai — Polling inbox bằng Lambda hỏng với thời gian chờ nhiều giờ và rất kém tin cậy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions, human-in-the-loop, wait for callback, DynamoDB, approval</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp human approval chờ lâu trong workflow GenAI → nghĩ ngay đến <strong>Step Functions</strong> chờ callback.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 15,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>Send each prompt to an Amazon SQS queue. Have adjusters read messages directly from the queue, write approvals back to a second queue, and have a Lambda consumer send the final letter to the customer.</p>",
              "correct": false,
              "feedback": "<p>This approach places workflow coordination responsibilities on the adjusters and requires additional custom coordination logic to correlate requests with approvals and to manage edits and ratings. It also lacks a centralized, auditable review/approval workflow without building extra orchestration and data models.</p>"
            },
            {
              "choice": "<p>Use Amazon API Gateway to accept the request and start an AWS Step Functions state machine. The state machine invokes the Amazon Bedrock FM to create a draft, stores the draft and status in Amazon DynamoDB, notifies adjusters (for example, through Amazon SNS), and waits for the adjuster to submit an approval/edit and rating through an API Gateway endpoint. The state machine then continues to send the approved letter and records the final output and reviewer feedback in DynamoDB.</p>",
              "correct": true,
              "feedback": "<p>AWS Step Functions provides a managed orchestration layer for review and approval workflows, including the ability to wait for human actions. API Gateway provides a simple, controlled interface for collecting human feedback and decisions. DynamoDB is well-suited for tracking draft status, storing reviewer inputs, and enabling later analysis, all with minimal operational overhead compared to custom polling or manual queue-based coordination.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Guardrails to enforce compliance and safety policies for the denial letters, and automatically send the FM output to customers without human review. Store all prompts and responses in Amazon CloudWatch Logs for auditing.</p>",
              "correct": false,
              "feedback": "<p>Guardrails can help filter content and improve safety, but they do not satisfy a requirement for human review and approval. Logging prompts and responses supports auditing but does not provide a collaborative approval step or capture explicit reviewer feedback and edits.</p>"
            },
            {
              "choice": "<p>Invoke the FM from an AWS Lambda function behind Amazon API Gateway. Email the draft to the adjuster and poll the email inbox from Lambda until an approval reply is received. Store approvals in Amazon S3.</p>",
              "correct": false,
              "feedback": "<p>Polling an email inbox introduces significant custom operational logic, error handling, and state management. It is also difficult to reliably correlate replies to the original request and to handle long-running review times without building additional infrastructure.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 15,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A human-in-the-loop design needs an explicit approval step, durable storage of the draft and the reviewer’s edits/ratings, and orchestration that can span variable human response times. A managed workflow service can coordinate the end-to-end process: generate the draft with the FM, route it to a reviewer for approval, and continue only after the review is complete. Exposing a dedicated feedback endpoint simplifies collecting structured reviewer decisions and ratings, and storing this information in a low-maintenance database enables traceability and later evaluation. Alternatives that rely on email polling or forcing reviewers to interact directly with queues increase custom code, coordination complexity, and operational burden, while relying only on safety controls does not fulfill the mandatory human review requirement.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach places workflow coordination responsibilities on the adjusters and requires additional custom coordination logic to correlate requests with approvals and to manage edits and ratings. It also lacks a centralized, auditable review/approval workflow without building extra orchestration and data models.<br/>• <strong>B</strong>: ✅ AWS Step Functions provides a managed orchestration layer for review and approval workflows, including the ability to wait for human actions. API Gateway provides a simple, controlled interface for collecting human feedback and decisions. DynamoDB is well-suited for tracking draft status, storing reviewer inputs, and enabling later analysis, all with minimal operational overhead compared to custom polling or manual queue-based coordination.<br/>• <strong>C</strong>: ❌ Guardrails can help filter content and improve safety, but they do not satisfy a requirement for human review and approval. Logging prompts and responses supports auditing but does not provide a collaborative approval step or capture explicit reviewer feedback and edits.<br/>• <strong>D</strong>: ❌ Polling an email inbox introduces significant custom operational logic, error handling, and state management. It is also difficult to reliably correlate replies to the original request and to handle long-running review times without building additional infrastructure.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html\">Deploying a workflow that waits for human approval in Step Functions - AWS Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html\">Discover service integration patterns in Step Functions - AWS Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/building-generative-ai-prompt-chaining-workflows-with-human-in-the-loop/\">Building Generative AI prompt chaining workflows with human in the loop | Artificial Intelligence (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services team is building an internal policy assistant that uses an Amazon Bedrock knowledge base for RAG. Before promoting new prompt templates and model configuration changes to production, the team needs an evaluation approach that can automatically score answers for faithfulness to retrieved context and citation quality. The team also wants to collect ongoing end-user feedback on answer usefulness for later analysis.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trước khi promote thay đổi cho RAG, cần chấm điểm tự động faithfulness và citation quality, đồng thời thu thập feedback người dùng liên tục.</li><li>Ưu tiên: automation, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Model Evaluations</strong> có <strong>RAG evaluation</strong> (retrieve and generate) dùng LLM-as-a-judge cho faithfulness và citation coverage. API Gateway ghi rating vào DynamoDB là cách đơn giản thu feedback.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Model Monitor/Clarify cho ML truyền thống (drift, fairness), không đánh giá faithfulness hay citation.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Human review bằng A2I đắt, chậm và không tự động.</li><li><strong>C</strong>: ❌ Sai — Cosine similarity chỉ là proxy yếu, phải tự xây bằng Lambda, vận hành nhiều.</li><li><strong>D</strong>: ✅ Đúng — Managed evaluation và pipeline feedback gọn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RAG evaluation, faithfulness, citation coverage, LLM-as-a-judge, user feedback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đánh giá RAG tự động (faithfulness, citation) → nghĩ ngay đến <strong>Bedrock Model Evaluations</strong> <strong>RAG evaluation</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 16,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>Use Amazon SageMaker Model Monitor to detect drift in the assistant’s responses over time and use Amazon SageMaker Clarify to evaluate fairness metrics. Send user feedback to an Amazon SNS topic and review notifications manually.</p>",
              "correct": false,
              "feedback": "<p>Model Monitor and Clarify focus on monitoring ML data/model quality, bias, and feature attribution for SageMaker model endpoints; they do not directly provide RAG-specific evaluation metrics such as faithfulness to retrieved context or citation precision/coverage for generated answers. Manual review of SNS notifications is not a scalable feedback collection and analysis approach.</p>"
            },
            {
              "choice": "<p>Create a human evaluation workflow where reviewers rate each response for correctness and citations by using Amazon Augmented AI. Store the ratings in Amazon S3 and promote prompt changes only after reviewers approve the results.</p>",
              "correct": false,
              "feedback": "<p>A fully human-driven workflow can provide high-quality judgments, but it adds significant operational overhead and does not satisfy the requirement for automated scoring from multiple perspectives. It also slows iteration compared to combining automated RAG evaluation with lightweight end-user feedback capture.</p>"
            },
            {
              "choice": "<p>Log prompts, retrieved passages, and responses to Amazon CloudWatch Logs. Use CloudWatch Logs Insights and AWS Lambda to compute cosine similarity between the response and retrieved passages as a proxy for faithfulness. Store user feedback as JSON files in Amazon S3 for later review.</p>",
              "correct": false,
              "feedback": "<p>This requires building and maintaining custom evaluation logic (similarity scoring, parsing, and thresholds) and does not provide the comprehensive multi-metric RAG evaluation capabilities that managed RAG evaluation jobs provide. It also increases operational burden compared to a managed evaluation service.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Model Evaluations to run a RAG evaluation job (retrieve and generate) from a prompt dataset stored in Amazon S3, using an LLM-as-a-judge evaluator model to score metrics such as faithfulness and citation coverage. Add an Amazon API Gateway endpoint that records user ratings and comments into Amazon DynamoDB for analysis.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Model Evaluations provides managed, automated evaluation workflows for RAG systems, including LLM-as-a-judge scoring of groundedness/faithfulness and citation-related metrics when you supply prompt datasets (and optionally reference contexts/responses) in S3. Adding API Gateway for feedback capture and DynamoDB for storage creates a lightweight human-feedback collection interface without requiring a separate labeling workforce or custom scoring pipelines.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 16,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A comprehensive evaluation system for GenAI outputs typically combines automated scoring (to scale across many prompts and releases) with human feedback (to capture real-world usefulness and UX). Managed RAG evaluation jobs in Amazon Bedrock Model Evaluations can score retrieval-and-generation behavior with LLM-as-a-judge techniques against a prompt dataset in Amazon S3, including faithfulness/groundedness and citation-oriented metrics. A simple feedback collection interface built with Amazon API Gateway and Amazon DynamoDB adds ongoing human feedback signals without the operational complexity of building custom scoring pipelines or running a fully human review process for every response.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Model Monitor and Clarify focus on monitoring ML data/model quality, bias, and feature attribution for SageMaker model endpoints; they do not directly provide RAG-specific evaluation metrics such as faithfulness to retrieved context or citation precision/coverage for generated answers. Manual review of SNS notifications is not a scalable feedback collection and analysis approach.<br/>• <strong>B</strong>: ❌ A fully human-driven workflow can provide high-quality judgments, but it adds significant operational overhead and does not satisfy the requirement for automated scoring from multiple perspectives. It also slows iteration compared to combining automated RAG evaluation with lightweight end-user feedback capture.<br/>• <strong>C</strong>: ❌ This requires building and maintaining custom evaluation logic (similarity scoring, parsing, and thresholds) and does not provide the comprehensive multi-metric RAG evaluation capabilities that managed RAG evaluation jobs provide. It also increases operational burden compared to a managed evaluation service.<br/>• <strong>D</strong>: ✅ Bedrock Model Evaluations provides managed, automated evaluation workflows for RAG systems, including LLM-as-a-judge scoring of groundedness/faithfulness and citation-related metrics when you supply prompt datasets (and optionally reference contexts/responses) in S3. Adding API Gateway for feedback capture and DynamoDB for storage creates a lightweight human-feedback collection interface without requiring a separate labeling workforce or custom scoring pipelines.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-create.html\">Creating a RAG evaluation job in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-eval-retrieve.html\">Use metrics to understand RAG system performance - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html\">Tutorial: Using Lambda with API Gateway - AWS Lambda (AWS Documentation)</a>",
          "upvote_count": "",
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
      "question_text": "<p>An HR analytics team is building an internal assistant that drafts employee performance feedback by using Amazon Bedrock. The team stores standardized prompts in Amazon Bedrock Prompt Management. During a pilot, leadership raised concerns that the generated feedback might contain subtly different tone and recommendations for employees who are described with different demographic attributes in otherwise equivalent scenarios.</p><p>The team wants to automatically evaluate and compare prompt variants for fairness, and track fairness results over time with minimal custom tooling.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Feedback do GenAI soạn có thể khác nhau theo thuộc tính nhân khẩu học.</li><li>Cần so sánh tự động các prompt variant về fairness và theo dõi theo thời gian với ít tooling tùy chỉnh.</li><li>Ưu tiên: bias evaluation, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Prompt Management</strong> cho variants, Prompt Flows chạy A/B, <strong>Model Evaluations</strong> LLM-as-a-judge trên dataset cân bằng chấm bias, rồi đẩy metric lên CloudWatch dashboards để theo dõi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Pre-training bias của Clarify áp dụng cho dữ liệu huấn luyện ML, không đánh giá output của FM.</li><li><strong>B</strong>: ✅ Đúng — So sánh variant, đo bias tự động, theo dõi liên tục.</li><li><strong>C</strong>: ❌ Sai — Topic/profanity filter không phát hiện khác biệt tinh tế về giọng điệu theo nhân khẩu học.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Human review đo được nhưng tốn công, chậm, không tự động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management, Prompt Flows, Model Evaluations, LLM-as-a-judge, fairness, CloudWatch dashboards</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đánh giá fairness của output FM → nghĩ ngay đến <strong>Model Evaluations</strong> với dataset cân bằng, không phải Clarify pre-training.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 17,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>Use Amazon SageMaker Clarify to calculate pre-training bias metrics, and automatically fail the deployment if the bias metrics exceed thresholds.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Clarify is designed for bias detection and explainability in ML workflows, but it does not directly provide an end-to-end, low-overhead mechanism to A/B test Bedrock prompt variants and evaluate generated text outputs using an LLM-as-a-judge within the Bedrock prompt lifecycle.</p>"
            },
            {
              "choice": "<p>Create two prompt variants in Amazon Bedrock Prompt Management and orchestrate A/B execution with Amazon Bedrock Prompt Flows. Use Amazon Bedrock Model Evaluations with an LLM-as-a-judge on a balanced prompt dataset to score potential bias, and publish the resulting fairness metrics to Amazon CloudWatch dashboards for ongoing tracking.</p>",
              "correct": true,
              "feedback": "<p>Prompt Management variants and Prompt Flows support systematic A/B testing without building custom orchestration. Bedrock Model Evaluations can use an LLM-as-a-judge to automatically score outputs across a representative dataset for fairness-related criteria. Publishing the evaluation results as metrics to CloudWatch enables trend monitoring and governance reporting with minimal additional infrastructure.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock Guardrails with strict topic and profanity filters, and configure a blocked-message response to prevent biased content from being returned to users.</p>",
              "correct": false,
              "feedback": "<p>Guardrails provide input/output safety controls (filtering and policy enforcement), but they do not perform fairness evaluation or comparative A/B testing across prompt variants. Filtering can reduce harmful content, but it does not measure whether outputs are unbiased across demographic scenarios.</p>"
            },
            {
              "choice": "<p>Route a statistically significant sample of generated feedback to Amazon Augmented AI (A2I) for human review, and store reviewers’ ratings in Amazon S3 to measure bias trends.</p>",
              "correct": false,
              "feedback": "<p>Human review can assess bias, but it introduces substantial operational overhead (workforce management, review latency, and ongoing cost). This does not meet the goal of automated fairness evaluation with minimal custom tooling compared with using Bedrock’s native prompt experimentation and evaluation capabilities.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 17,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To apply fairness evaluations for foundation model outputs, the solution needs a repeatable way to compare alternatives and quantify bias-related behavior across a representative dataset. Using prompt variants and prompt orchestration enables controlled A/B testing, while automated model evaluation with an LLM-as-a-judge provides scalable scoring of outputs for fairness criteria without building a bespoke evaluation pipeline. Publishing those scores to CloudWatch makes fairness observable over time and supports governance reporting. Guardrails focus on safety filtering rather than fairness measurement, and human-in-the-loop review adds significant operational burden. SageMaker Clarify is valuable for bias assessment in ML workflows but is not the most direct, low-overhead approach for evaluating prompt-driven Bedrock text generation behavior.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ SageMaker Clarify is designed for bias detection and explainability in ML workflows, but it does not directly provide an end-to-end, low-overhead mechanism to A/B test Bedrock prompt variants and evaluate generated text outputs using an LLM-as-a-judge within the Bedrock prompt lifecycle.<br/>• <strong>B</strong>: ✅ Prompt Management variants and Prompt Flows support systematic A/B testing without building custom orchestration. Bedrock Model Evaluations can use an LLM-as-a-judge to automatically score outputs across a representative dataset for fairness-related criteria. Publishing the evaluation results as metrics to CloudWatch enables trend monitoring and governance reporting with minimal additional infrastructure.<br/>• <strong>C</strong>: ❌ Guardrails provide input/output safety controls (filtering and policy enforcement), but they do not perform fairness evaluation or comparative A/B testing across prompt variants. Filtering can reduce harmful content, but it does not measure whether outputs are unbiased across demographic scenarios.<br/>• <strong>D</strong>: ❌ Human review can assess bias, but it introduces substantial operational overhead (workforce management, review latency, and ongoing cost). This does not meet the goal of automated fairness evaluation with minimal custom tooling compared with using Bedrock’s native prompt experimentation and evaluation capabilities.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Construct and store reusable prompts with Prompt management in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html\">Evaluate model performance using another LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html\">Using Amazon CloudWatch dashboards - Amazon CloudWatch (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech company is launching a public, GenAI-powered customer support chatbot that uses Amazon Bedrock to answer account questions. Security reviewers are concerned about prompt injection attempts (for example, users trying to override instructions or request hidden system prompts) and about accidental leakage of personally identifiable information (PII) in both user inputs and model outputs. The company wants a defense-in-depth approach that adds comprehensive protection against FM misuse with the LEAST operational overhead.</p><p>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chatbot public cần chống prompt injection và rò rỉ PII ở cả input lẫn output.</li><li>Cần <strong>defense-in-depth</strong>, bảo vệ toàn diện, ít vận hành.</li><li>Ưu tiên: nhiều lớp bảo vệ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Pipeline serverless nhiều lớp: che PII đầu vào bằng Comprehend, <strong>Guardrails</strong> khi gọi model, hậu kiểm và redaction đầu ra, rồi lọc cấu trúc phản hồi ở API Gateway. Đây là defense-in-depth thật sự.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — WAF chống web exploit, không chống prompt injection hay PII, và không có kiểm soát nào tại Bedrock.</li><li><strong>B</strong>: ✅ Đúng — Nhiều lớp kiểm soát trước, trong và sau khi gọi model.</li><li><strong>C</strong>: ❌ Sai — Fine-tune không đảm bảo an toàn và bỏ hết pre/post-processing.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Chỉ một lớp, trái với yêu cầu defense-in-depth.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>defense-in-depth, prompt injection, PII, Guardrails, pre/post-processing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'defense-in-depth' cho GenAI → nghĩ ngay đến <strong>nhiều lớp</strong>: lọc input, <strong>Guardrails</strong>, kiểm tra output, không dựa vào một lớp.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>Place Amazon API Gateway in front of the chatbot. Use AWS WAF managed rules to block SQL injection and common web exploits, and then invoke Amazon Bedrock directly from the application with no additional controls.</p>",
              "correct": false,
              "feedback": "<p>AWS WAF protects the HTTP interface, but it does not provide LLM-specific protections such as PII detection/redaction, prompt injection handling, or output moderation. Invoking the model without additional pre-processing, guardrails, and post-processing does not provide defense in depth for FM misuse.</p>"
            },
            {
              "choice": "<p>Implement a serverless safety pipeline where Amazon API Gateway invokes a Lambda function that uses Amazon Comprehend to detect and mask PII in user prompts before invoking Amazon Bedrock with Bedrock Guardrails enabled. After the model responds, the Lambda function performs post-processing validation and additional PII redaction before returning the response through API Gateway response mapping templates that enforce a safe, filtered response shape.</p>",
              "correct": true,
              "feedback": "<p>This design layers multiple controls: Comprehend provides pre-processing filters (including PII detection/masking), Bedrock Guardrails provide model-based safety controls for prompts and responses, Lambda enables custom post-processing validation/redaction for anything that slips through, and API Gateway can apply response transformations to enforce a safe response contract. This matches a defense-in-depth pattern while remaining largely managed and serverless.</p>"
            },
            {
              "choice": "<p>Fine-tune a custom model in Amazon Bedrock by using past chat transcripts so the model learns the company’s policies and avoids unsafe outputs. Deploy the fine-tuned model without additional pre-processing or post-processing because the model has been customized.</p>",
              "correct": false,
              "feedback": "<p>Customization (fine-tuning or continued pre-training) does not guarantee compliance with safety requirements and does not replace layered runtime controls. It also increases cost and operational effort compared to managed guardrails and lightweight pre/post-processing.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Guardrails only, configured to block profanity and remove PII. Rely on the guardrail blocked-message response to prevent misuse, and return the model response directly to callers.</p>",
              "correct": false,
              "feedback": "<p>Guardrails are an important layer, but using only guardrails is not defense in depth. Additional layers (such as input pre-processing and post-processing validation/redaction) help reduce the impact of missed detections, integration mistakes, or novel prompt injection patterns.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 18,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A defense-in-depth safety design uses multiple independent layers to reduce the probability and impact of unsafe inputs and outputs. A practical pattern is to filter and normalize inputs before model invocation (for example, detect and mask PII and suspicious content), apply model-native safety controls during inference (guardrails for prompt/response filtering and grounding-style checks where applicable), and validate or redact again after inference before returning data to end users. Implementing these layers with serverless components (Lambda, API Gateway) and managed services (Comprehend, Bedrock Guardrails) provides comprehensive protection with minimal infrastructure management, while approaches that rely on a single control layer (only WAF or only guardrails) or on model customization alone do not provide equivalent runtime protection against FM misuse.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ AWS WAF protects the HTTP interface, but it does not provide LLM-specific protections such as PII detection/redaction, prompt injection handling, or output moderation. Invoking the model without additional pre-processing, guardrails, and post-processing does not provide defense in depth for FM misuse.<br/>• <strong>B</strong>: ✅ This design layers multiple controls: Comprehend provides pre-processing filters (including PII detection/masking), Bedrock Guardrails provide model-based safety controls for prompts and responses, Lambda enables custom post-processing validation/redaction for anything that slips through, and API Gateway can apply response transformations to enforce a safe response contract. This matches a defense-in-depth pattern while remaining largely managed and serverless.<br/>• <strong>C</strong>: ❌ Customization (fine-tuning or continued pre-training) does not guarantee compliance with safety requirements and does not replace layered runtime controls. It also increases cost and operational effort compared to managed guardrails and lightweight pre/post-processing.<br/>• <strong>D</strong>: ❌ Guardrails are an important layer, but using only guardrails is not defense in depth. Additional layers (such as input pre-processing and post-processing validation/redaction) help reduce the impact of missed detections, integration mistakes, or novel prompt injection patterns.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/comprehend/latest/dg/pii.html\">Personally identifiable information (PII) - Amazon Comprehend (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html\">Mapping template transformations for REST APIs in API Gateway (AWS Documentation)</a>",
          "upvote_count": "",
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
      "question_text": "<p>An online retailer’s GenAI team is building a product discovery feature on Amazon Bedrock. Customers will search either by uploading a product photo or by entering a short text description. The backend will perform semantic similarity search in a vector store so the same search experience works for both photos and text queries.</p><p>Which Amazon Bedrock foundation model choice will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tìm kiếm sản phẩm bằng ảnh hoặc text với semantic similarity trên vector store.</li><li>Cùng một trải nghiệm cho cả hai loại truy vấn.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Titan Multimodal Embeddings</strong> đưa cả ảnh và text vào cùng không gian vector, nên ảnh truy vấn hoặc text truy vấn đều so sánh trực tiếp với embedding sản phẩm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Stable Diffusion sinh ảnh chứ không tạo caption, và thêm bước trung gian không cần thiết.</li><li><strong>B</strong>: ❌ Sai — Chỉ embed text nên không tìm được bằng ảnh.</li><li><strong>C</strong>: ✅ Đúng — Một model, cùng vector space cho cả hai modality.</li><li><strong>D</strong>: ❌ Sai — Nhét cả catalog vào prompt vượt context, đắt, không scale, và không có vector search.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Titan Multimodal Embeddings, image + text, same vector space, semantic search</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tìm kiếm bằng ảnh và text → nghĩ ngay đến <strong>Titan Multimodal Embeddings</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>Use Stable Diffusion to generate a text caption for each product image, then use an Amazon Titan text embeddings model to embed the generated captions and user text queries for similarity search.</p>",
              "correct": false,
              "feedback": "<p>Stable Diffusion is an image generation model, not an image captioning or embedding model. Even if captions were produced by another component, a multi-step caption-then-embed approach adds extra processing, cost, and error modes (caption quality becomes a dependency) compared with using a multimodal embeddings model directly.</p>"
            },
            {
              "choice": "<p>Use an Amazon Titan text embeddings model for all content and store only the product descriptions (not images) in the vector store to simplify ingestion.</p>",
              "correct": false,
              "feedback": "<p>A text-only embeddings model cannot embed images, so the system would not support photo-based queries as required. Dropping images simplifies ingestion but fails the core business requirement of unified search across photos and text.</p>"
            },
            {
              "choice": "<p>Use an Amazon Titan multimodal embeddings model to generate embeddings from both the product image and associated text so they can be compared in the same vector space.</p>",
              "correct": true,
              "feedback": "<p>The Amazon Titan multimodal embeddings model is designed to embed images, text, or both into vector representations that can be stored and queried in a vector database. This directly supports “search by image” and “search by text” using a single retrieval mechanism, without adding additional captioning or translation components.</p>"
            },
            {
              "choice": "<p>Use Anthropic Claude to answer user queries conversationally and include the entire product catalog in the prompt so the model can find the best matching items without vector search.</p>",
              "correct": false,
              "feedback": "<p>This does not align with the technical requirement to use semantic similarity search in a vector store. Putting a large catalog into prompts is not scalable and is constrained by context window limits and cost. Claude is a conversational LLM rather than an embeddings model for multimodal vector retrieval.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 19,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key technical requirement is to support semantic similarity search when the query might be either an image or text. This requires an embeddings model that can produce comparable vectors for both modalities. A Titan multimodal embeddings model provides this capability directly, allowing the application to embed product images and user photo queries using the same embedding approach used for text. The alternative options either use models that are not intended for embeddings, avoid vector search entirely, or rely on text-only embeddings that cannot represent images.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Stable Diffusion is an image generation model, not an image captioning or embedding model. Even if captions were produced by another component, a multi-step caption-then-embed approach adds extra processing, cost, and error modes (caption quality becomes a dependency) compared with using a multimodal embeddings model directly.<br/>• <strong>B</strong>: ❌ A text-only embeddings model cannot embed images, so the system would not support photo-based queries as required. Dropping images simplifies ingestion but fails the core business requirement of unified search across photos and text.<br/>• <strong>C</strong>: ✅ The Amazon Titan multimodal embeddings model is designed to embed images, text, or both into vector representations that can be stored and queried in a vector database. This directly supports “search by image” and “search by text” using a single retrieval mechanism, without adding additional captioning or translation components.<br/>• <strong>D</strong>: ❌ This does not align with the technical requirement to use semantic similarity search in a vector store. Putting a large catalog into prompts is not scalable and is constrained by context window limits and cost. Claude is a conversational LLM rather than an embeddings model for multimodal vector retrieval.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/titan-multiemb-models.html\">Amazon Titan Multimodal Embeddings G1 model - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/aws/amazon-titan-image-generator-multimodal-embeddings-and-text-models-are-now-available-in-amazon-bedrock/\">Amazon Titan Image Generator, Multimodal Embeddings, and Text models are now available in Amazon Bedrock | AWS News Blog (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/easily-build-semantic-image-search-using-amazon-titan/\">Easily build semantic image search using Amazon Titan | Artificial Intelligence (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A product enablement team is building an internal web portal that helps employees draft customer emails by using an Amazon Bedrock foundation model (FM). The team wants to deliver an accessible web UI quickly, standardize backend integration for future clients by using an API-first approach, and allow non-developers to adjust the prompt workflow (including branching and reusable prompt components) without redeploying application code.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cổng web nội bộ soạn email: UI nhanh, backend API-first, non-developer chỉnh được prompt workflow (branching, reusable components) mà không redeploy.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, <strong>tách prompt khỏi code</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amplify cho UI và auth nhanh, API Gateway từ OpenAPI spec chuẩn hóa API, <strong>Bedrock Flows</strong> chứa prompt chain và điều kiện có thể cập nhật mà không phải redeploy code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Amazon Q Business hướng tới hỏi đáp trên dữ liệu doanh nghiệp, không cung cấp API-first và prompt workflow tùy biến.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — ECS cộng ALB cộng Step Functions tốn vận hành, và prompt chain nằm trong code/state machine, non-developer khó sửa.</li><li><strong>C</strong>: ✅ Đúng — Đủ ba yêu cầu với mức vận hành thấp.</li><li><strong>D</strong>: ❌ Sai — Gọi Bedrock thẳng từ browser và hardcode prompt trong client không an toàn, không quản lý được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amplify, API Gateway OpenAPI, Bedrock Flows, branching, no redeploy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt chain có nhánh cần chỉnh không redeploy → nghĩ ngay đến <strong>Bedrock Flows</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 20,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon Q Business application and connect it to internal data sources. Configure Amazon Q Business admin controls to shape responses and use it as the primary employee-facing interface for email drafting.</p>",
              "correct": false,
              "feedback": "<p>Amazon Q Business is a managed assistant with its own UI and governance controls, but it does not satisfy the requirement for an API-first interface based on an OpenAPI specification that can be reused by multiple client applications. It also does not provide the same prompt workflow construction model (branching prompt chains as a custom application component) described in the requirements.</p>"
            },
            {
              "choice": "<p>Deploy a containerized web application on Amazon ECS behind an Application Load Balancer. Use AWS Step Functions to orchestrate a multi-step prompt chain that invokes the FM and stores intermediate results in Amazon DynamoDB.</p>",
              "correct": false,
              "feedback": "<p>This introduces additional infrastructure to manage (ECS cluster/services and load balancing) and uses Step Functions for orchestration rather than a purpose-built no-code prompt workflow capability. While Step Functions can orchestrate calls, updating the prompt workflow would typically require developer-driven changes to state machine definitions and associated code/configuration, increasing operational overhead compared to using Amazon Bedrock Flows for prompt chaining.</p>"
            },
            {
              "choice": "<p>Build the web UI with AWS Amplify and use Amplify libraries for authentication. Define the backend as an Amazon API Gateway REST API created from an OpenAPI specification. Invoke an Amazon Bedrock Flow from an AWS Lambda integration behind the API so prompt chains and conditions can be updated in the Flow without application redeployments.</p>",
              "correct": true,
              "feedback": "<p>AWS Amplify accelerates delivery of a production-ready, accessible web interface and commonly used front-end capabilities (such as authentication). An OpenAPI-driven Amazon API Gateway REST API provides an API-first contract that can be shared across teams and used to generate/validate clients consistently. Amazon Bedrock Flows provide a managed, no-code/low-code way to chain prompts and models with conditional connections, so non-developers can update the workflow without changing and redeploying the UI or API code. Lambda provides a simple integration layer to invoke Bedrock and apply any necessary request/response handling.</p>"
            },
            {
              "choice": "<p>Host a static single-page application in Amazon S3 behind Amazon CloudFront, and call the Amazon Bedrock runtime APIs directly from the browser by using Amazon Cognito identity pools. Hardcode the full prompt sequence in the client so business users can edit prompts in the web page source.</p>",
              "correct": false,
              "feedback": "<p>This approach pushes prompt logic to the client, which increases governance and maintenance risk (for example, prompt leakage and inconsistent prompt versions across users). It also does not provide a no-code workflow builder for chaining prompts and branching logic. Although the UI could be delivered quickly, ongoing prompt management and workflow updates would be operationally burdensome and error-prone.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 20,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The lowest-overhead solution combines a rapid front-end delivery mechanism with a standardized API contract and a managed, no-code workflow layer for prompt chaining. AWS Amplify accelerates building and hosting the web interface and common client capabilities. An OpenAPI-defined Amazon API Gateway interface provides an API-first contract that other clients can adopt consistently. Amazon Bedrock Flows allow teams to create and change multi-step prompt workflows (including conditional branching and reusable prompt components) without continuous code deployments, reducing ongoing operational effort compared to hardcoding prompts in the client or building custom orchestration and infrastructure.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Amazon Q Business is a managed assistant with its own UI and governance controls, but it does not satisfy the requirement for an API-first interface based on an OpenAPI specification that can be reused by multiple client applications. It also does not provide the same prompt workflow construction model (branching prompt chains as a custom application component) described in the requirements.<br/>• <strong>B</strong>: ❌ This introduces additional infrastructure to manage (ECS cluster/services and load balancing) and uses Step Functions for orchestration rather than a purpose-built no-code prompt workflow capability. While Step Functions can orchestrate calls, updating the prompt workflow would typically require developer-driven changes to state machine definitions and associated code/configuration, increasing operational overhead compared to using Amazon Bedrock Flows for prompt chaining.<br/>• <strong>C</strong>: ✅ AWS Amplify accelerates delivery of a production-ready, accessible web interface and commonly used front-end capabilities (such as authentication). An OpenAPI-driven Amazon API Gateway REST API provides an API-first contract that can be shared across teams and used to generate/validate clients consistently. Amazon Bedrock Flows provide a managed, no-code/low-code way to chain prompts and models with conditional connections, so non-developers can update the workflow without changing and redeploying the UI or API code. Lambda provides a simple integration layer to invoke Bedrock and apply any necessary request/response handling.<br/>• <strong>D</strong>: ❌ This approach pushes prompt logic to the client, which increases governance and maintenance risk (for example, prompt leakage and inconsistent prompt versions across users). It also does not provide a no-code workflow builder for chaining prompts and branching logic. Although the UI could be delivered quickly, ongoing prompt management and workflow updates would be operationally burdensome and error-prone.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows-create.html\">Create and design a flow in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api.html\">Develop REST APIs using OpenAPI in API Gateway - Amazon API Gateway (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/amplify/latest/userguide/getting-started-next.html\">Deploy a Next.js app to Amplify Hosting - AWS Amplify Hosting (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech company is building a loan pre-qualification assistant. The assistant uses an AWS Step Functions state machine to orchestrate an agent-like loop: it invokes an Amazon Bedrock FM to decide the next action and, when needed, invokes an AWS Lambda function that calls a third-party credit bureau API. During intermittent credit bureau outages, the FM keeps requesting the tool call, which causes repeated loop iterations and increased token usage.</p><p>The company needs to stop the workflow after a small number of tool failures, temporarily disable credit bureau calls for a cooldown period to prevent repeated failures, and ensure the tool Lambda function cannot access resources beyond a specific DynamoDB table and a single secret in AWS Secrets Manager. Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Vòng lặp agent liên tục gọi tool khi credit bureau lỗi, tốn token.</li><li>Cần <strong>dừng workflow sau vài lần lỗi</strong>, tạm ngắt gọi tool trong thời gian cooldown, và giới hạn quyền Lambda chỉ vào một bảng DynamoDB và một secret.</li><li>Ưu tiên: resilience, least privilege, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Step Functions đếm vòng và dùng <strong>Choice state</strong> dừng khi vượt ngưỡng lỗi. <strong>Circuit breaker</strong> bằng cờ open/closed có TTL trong DynamoDB dùng chung giữa các lần chạy. IAM scoped đúng tài nguyên.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Biến trong bộ nhớ Lambda không bền giữa các execution environment, và permissions boundary trên user không hạn chế Lambda.</li><li><strong>B</strong>: ✅ Đúng — Đáp ứng đủ ba yêu cầu bằng dịch vụ managed.</li><li><strong>C</strong>: ❌ Sai — Vẫn lặp đến khi có final answer nên không dừng, và FullAccess vi phạm least privilege.</li><li><strong>D</strong>: ❌ Sai — API Gateway/WAF không dừng vòng lặp agent, không đổi IAM.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Choice, circuit breaker, DynamoDB TTL, least privilege, loop counter</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp circuit breaker cho workflow phân tán → nghĩ ngay đến state lưu ở <strong>DynamoDB</strong> (TTL) chứ không phải biến in-memory.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 21,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>Implement a circuit breaker inside the Lambda function by using an in-memory variable to skip credit bureau calls for 10 minutes after a failure. Invoke the Amazon Bedrock FM directly from the Lambda function and stop the loop by returning an error to the caller. Use an IAM permissions boundary on the IAM user who invokes the state machine to restrict access.</p>",
              "correct": false,
              "feedback": "<p>An in-memory variable in Lambda is not a reliable circuit breaker because execution environments are reused unpredictably and do not provide durable shared state across concurrent invocations. Adding a permissions boundary to the calling IAM user does not restrict what the Lambda execution role can access. This option also removes Step Functions’ ability to enforce deterministic stopping conditions at the workflow level.</p>"
            },
            {
              "choice": "<p>Use Step Functions to implement a loop counter and stopping condition with a Choice state that ends the workflow after a maximum number of tool failures. Implement a circuit breaker by storing an “open/closed” flag with a TTL in DynamoDB that the state machine checks before calling the tool. Configure the tool Lambda with a short timeout and least-privilege IAM permissions scoped to the required DynamoDB table and the specific Secrets Manager secret.</p>",
              "correct": true,
              "feedback": "<p>Step Functions can enforce explicit stopping conditions by tracking failure counts in state input and branching with a Choice state. A DynamoDB-backed circuit breaker persists across executions and can implement a cooldown period by using TTL. A short Lambda timeout prevents long-running tool calls, and least-privilege IAM policies on the Lambda execution role enforce resource boundaries.</p>"
            },
            {
              "choice": "<p>Configure Step Functions retries with exponential backoff on the Lambda task and set a maximum retry count of 3. Keep the state machine looping until the model returns a final answer. Grant the Lambda function AmazonDynamoDBFullAccess and SecretsManagerReadWrite to simplify access management.</p>",
              "correct": false,
              "feedback": "<p>Limiting retries on a single task does not prevent the overall model-driven loop from repeatedly requesting the tool across multiple iterations. This approach also does not implement a circuit breaker and uses overly broad IAM permissions that violate the requirement to enforce resource boundaries.</p>"
            },
            {
              "choice": "<p>Place the third-party credit bureau API behind Amazon API Gateway and configure throttling with a usage plan. Add AWS WAF rate-based rules to block repeated requests during outages. Leave the Step Functions workflow and Lambda IAM permissions unchanged to minimize changes.</p>",
              "correct": false,
              "feedback": "<p>Throttling and rate-based blocking can reduce request volume but do not provide deterministic stopping conditions for the agent loop, and they can increase failure rates without implementing a controlled fallback path. This option also does not enforce least-privilege access for the tool Lambda function.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 21,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A safeguarded agentic workflow needs explicit controls that are independent of the FM’s behavior. Implementing stopping conditions in Step Functions prevents unbounded loops when the model keeps requesting a failing tool. A circuit breaker requires durable shared state so the system can “fail fast” during an outage and recover automatically after a cooldown; DynamoDB is well-suited for persisting the breaker state and can use TTL to automatically expire an “open” state. Finally, controlling what the tool can do is enforced by scoping the Lambda execution role to least privilege (only the required DynamoDB table operations and a specific secret), which ensures the FM cannot indirectly access other resources through the tool.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ An in-memory variable in Lambda is not a reliable circuit breaker because execution environments are reused unpredictably and do not provide durable shared state across concurrent invocations. Adding a permissions boundary to the calling IAM user does not restrict what the Lambda execution role can access. This option also removes Step Functions’ ability to enforce deterministic stopping conditions at the workflow level.<br/>• <strong>B</strong>: ✅ Step Functions can enforce explicit stopping conditions by tracking failure counts in state input and branching with a Choice state. A DynamoDB-backed circuit breaker persists across executions and can implement a cooldown period by using TTL. A short Lambda timeout prevents long-running tool calls, and least-privilege IAM policies on the Lambda execution role enforce resource boundaries.<br/>• <strong>C</strong>: ❌ Limiting retries on a single task does not prevent the overall model-driven loop from repeatedly requesting the tool across multiple iterations. This approach also does not implement a circuit breaker and uses overly broad IAM permissions that violate the requirement to enforce resource boundaries.<br/>• <strong>D</strong>: ❌ Throttling and rate-based blocking can reduce request volume but do not provide deterministic stopping conditions for the agent loop, and they can increase failure rates without implementing a controlled fallback path. This option also does not enforce least-privilege access for the tool Lambda function.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/compute/using-the-circuit-breaker-pattern-with-aws-step-functions-and-amazon-dynamodb/\">Using the circuit breaker pattern with AWS Step Functions and Amazon DynamoDB (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-example-data-crud.html\">IAM policy to read, write, update, and delete access on a DynamoDB table (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-secrets-manager.html\">Use Secrets Manager secrets in Lambda functions (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A logistics software provider runs an order-tracking platform on AWS that integrates with multiple internal microservices. A shipping partner sends signed HTTPS webhooks whenever a delivery exception occurs. The provider wants to add GenAI functionality that uses an Amazon Bedrock FM to generate a short, customer-ready message and then deliver the generated message to both a case-management service and a notification service. The webhook endpoint must acknowledge requests within 2 seconds, and the provider must be able to add additional downstream consumers later without changing the webhook handler code.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Webhook phải phản hồi trong 2 giây, trong khi gọi FM và đẩy kết quả tới hai service.</li><li>Thêm consumer mới sau này mà <strong>không sửa webhook handler</strong>.</li><li>Ưu tiên: decoupling, extensibility, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Handler chỉ xác thực chữ ký rồi publish event lên <strong>EventBridge</strong> và trả lời ngay. Các <strong>rule</strong> định tuyến event tới các Lambda xử lý, thêm consumer chỉ cần thêm rule.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Event-driven, tách rời, mở rộng bằng rule.</li><li><strong>B</strong>: ❌ Sai — Gọi Bedrock và các API đồng bộ có thể vượt 2 giây, và gắn chặt consumer vào handler.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Phản hồi nhanh được, nhưng SQS là điểm-tới-điểm, một consumer gọi cứng cả hai service nên thêm consumer phải sửa code.</li><li><strong>D</strong>: ❌ Sai — Chờ workflow hoàn tất mới trả lời nên vi phạm 2 giây và không dễ thêm consumer.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EventBridge, event-driven, decoupling, acknowledge fast, fan-out</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp phản hồi nhanh + thêm consumer sau này → nghĩ ngay đến <strong>EventBridge fan-out</strong>, không xử lý đồng bộ trong handler.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 22,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>Use Amazon API Gateway to receive the webhook and invoke an AWS Lambda function that validates the webhook signature and publishes a custom event to Amazon EventBridge. Use EventBridge rules to invoke a second Lambda function that calls Amazon Bedrock and publishes a new event containing the generated message. Use additional EventBridge rules to invoke Lambda functions that call the case-management and notification microservice APIs.</p>",
              "correct": true,
              "feedback": "<p>API Gateway provides a managed HTTPS endpoint, Lambda performs custom signature validation and normalization, and EventBridge decouples producers from consumers with managed, event-driven fan-out. The webhook handler can respond immediately after publishing the event, meeting the 2-second acknowledgement requirement. Adding new downstream consumers later is done by creating new EventBridge rules/targets without modifying the webhook handler.</p>"
            },
            {
              "choice": "<p>Use Amazon API Gateway to receive the webhook and invoke a single AWS Lambda function that validates the webhook signature, calls Amazon Bedrock, calls the case-management and notification microservice APIs, and then returns a response to the webhook sender.</p>",
              "correct": false,
              "feedback": "<p>This tightly couples webhook acknowledgement to FM inference and downstream service latency, which can exceed the 2-second acknowledgement requirement. It also makes future fan-out harder because new consumers require modifying the same Lambda function.</p>"
            },
            {
              "choice": "<p>Use Amazon API Gateway to receive the webhook and invoke an AWS Lambda function that validates the webhook signature and sends the payload to an Amazon SQS queue. Use a Lambda consumer to read messages from the queue, call Amazon Bedrock, and then call the case-management and notification microservice APIs.</p>",
              "correct": false,
              "feedback": "<p>SQS provides durable buffering, but it is not optimized for content-based routing and multi-consumer fan-out without additional design (for example, multiple queues or custom fan-out logic). Adding new downstream consumers typically requires additional queues and changes to producers/consumers, increasing integration overhead compared to EventBridge rules.</p>"
            },
            {
              "choice": "<p>Use Amazon API Gateway to start an AWS Step Functions workflow that validates the webhook signature, invokes Amazon Bedrock, and calls both microservice APIs. Configure the workflow to return the result to API Gateway after all steps complete.</p>",
              "correct": false,
              "feedback": "<p>Returning only after the workflow completes couples the webhook acknowledgement to FM invocation and downstream API calls, making it difficult to reliably meet the 2-second acknowledgement requirement. Step Functions is useful for orchestrating multi-step workflows, but it adds unnecessary orchestration complexity for a simple event-driven fan-out integration.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 22,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key design requirement is to enhance an existing application by integrating GenAI while keeping the inbound webhook path fast and keeping downstream integrations loosely coupled. A managed webhook endpoint can be implemented with Amazon API Gateway, while AWS Lambda is appropriate for webhook handling tasks like HMAC signature validation and request normalization.<br/><br/>Publishing the validated event to Amazon EventBridge decouples the webhook handler from downstream processing. EventBridge rules can then trigger GenAI inference (invoking an Amazon Bedrock model from Lambda) and fan out the resulting message to multiple existing microservices. This pattern minimizes operational overhead because routing, fan-out, and future consumer additions are handled by EventBridge configuration rather than custom integration code changes.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ API Gateway provides a managed HTTPS endpoint, Lambda performs custom signature validation and normalization, and EventBridge decouples producers from consumers with managed, event-driven fan-out. The webhook handler can respond immediately after publishing the event, meeting the 2-second acknowledgement requirement. Adding new downstream consumers later is done by creating new EventBridge rules/targets without modifying the webhook handler.<br/>• <strong>B</strong>: ❌ This tightly couples webhook acknowledgement to FM inference and downstream service latency, which can exceed the 2-second acknowledgement requirement. It also makes future fan-out harder because new consumers require modifying the same Lambda function.<br/>• <strong>C</strong>: ❌ SQS provides durable buffering, but it is not optimized for content-based routing and multi-consumer fan-out without additional design (for example, multiple queues or custom fan-out logic). Adding new downstream consumers typically requires additional queues and changes to producers/consumers, increasing integration overhead compared to EventBridge rules.<br/>• <strong>D</strong>: ❌ Returning only after the workflow completes couples the webhook acknowledgement to FM invocation and downstream API calls, making it difficult to reliably meet the 2-second acknowledgement requirement. Step Functions is useful for orchestrating multi-step workflows, but it adds unnecessary orchestration complexity for a simple event-driven fan-out integration.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html\">Event buses in Amazon EventBridge - Amazon EventBridge (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html\">Event bus targets in Amazon EventBridge - Amazon EventBridge (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/inference-api.html\">Submit prompts and generate responses using the API - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech customer support engineering team is building an internal GenAI assistant to help agents answer questions about the latest policies and procedures. The documents are stored in Amazon S3 and an internal Atlassian Confluence wiki, and the content changes frequently. The team wants the assistant’s answers to be grounded in the approved documents to reduce hallucinations and to avoid having to retrain a model whenever content is updated.</p><p>Which architecture will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trợ lý trả lời dựa trên tài liệu ở S3 và Confluence, nội dung thay đổi thường xuyên.</li><li>Giảm hallucination, không retrain khi cập nhật.</li><li>Ưu tiên: grounding, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Knowledge Base</strong> có connector S3 và Confluence, tự lo embedding và vector store, RetrieveAndGenerate sinh câu trả lời có căn cứ, Guardrails <strong>contextual grounding checks</strong> giảm hallucination thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Managed RAG, nhiều nguồn, có grounding check.</li><li><strong>B</strong>: ❌ Sai — Scan DynamoDB và tính cosine similarity trong code không scale và tự vận hành nhiều.</li><li><strong>C</strong>: ❌ Sai — Fine-tune cần retrain mỗi lần nội dung đổi, trái yêu cầu.</li><li><strong>D</strong>: ❌ Sai — Nhét toàn văn vào prompt vượt context window, tốn token và không kiểm soát được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Base, Confluence connector, RetrieveAndGenerate, contextual grounding check</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp nội dung hay đổi + giảm hallucination + không retrain → nghĩ ngay đến RAG bằng <strong>Bedrock Knowledge Base</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 23,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base that connects to Amazon S3 and Confluence as data sources. Configure an embedding model (such as Amazon Titan embeddings) and a managed vector store. Use the bedrock-agent-runtime RetrieveAndGenerate capability to produce responses and apply Amazon Bedrock Guardrails with contextual grounding checks.</p>",
              "correct": true,
              "feedback": "<p>A Bedrock Knowledge Base provides a managed RAG architecture that ingests documents from supported data sources (including S3 and Confluence), chunks content, generates embeddings, and performs semantic retrieval to augment prompts. RetrieveAndGenerate uses the retrieved context to ground responses, and Guardrails with contextual grounding checks help further reduce hallucinations. Updates can be handled by synchronizing the knowledge base rather than retraining an FM, minimizing operational overhead.</p>"
            },
            {
              "choice": "<p>Store the policy documents and their embedding vectors as items in Amazon DynamoDB. For each user query, use AWS Lambda to scan the table, calculate cosine similarity in code, select the top matches, and send those matches to an Amazon Bedrock model.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB is not designed for semantic vector similarity search; scanning and scoring items in Lambda does not scale and creates significant custom operational burden. This design increases latency, cost, and complexity compared to using a managed knowledge base and vector retrieval solution.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock custom model by fine-tuning a text FM with prompt-completion training pairs stored in Amazon S3. Invoke the fine-tuned model by using the Amazon Bedrock Runtime API for all agent questions.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning (custom models) requires creating and managing training datasets and running customization jobs. It also does not align well with frequently changing documents because the model would require additional customization jobs to incorporate updates, which increases operational overhead and delays content freshness.</p>"
            },
            {
              "choice": "<p>Use AWS Lambda to fetch the full text of the relevant policy documents from Amazon S3 and Confluence and append the documents to each user prompt before calling an Amazon Bedrock text model.</p>",
              "correct": false,
              "feedback": "<p>This approach requires custom retrieval and prompt-building logic and is likely to hit context window limits and increase token costs. It also does not provide a managed retrieval layer that is optimized for semantic relevance, which can reduce answer quality and increase troubleshooting effort.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 23,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A managed RAG architecture is the best match when information changes frequently and the goal is to keep responses grounded in approved sources without retraining. Amazon Bedrock Knowledge Bases provide built-in ingestion from supported repositories, embedding generation, chunking, and semantic retrieval, and they integrate directly with a generation step (RetrieveAndGenerate). Adding Bedrock Guardrails with contextual grounding checks further enforces that responses stay aligned with retrieved context, reducing hallucinations while keeping the architecture simple to operate. In contrast, fine-tuning introduces a model customization lifecycle that must be repeated to keep up with document changes, and building custom retrieval/prompt stuffing or DIY similarity search increases complexity and maintenance effort.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ A Bedrock Knowledge Base provides a managed RAG architecture that ingests documents from supported data sources (including S3 and Confluence), chunks content, generates embeddings, and performs semantic retrieval to augment prompts. RetrieveAndGenerate uses the retrieved context to ground responses, and Guardrails with contextual grounding checks help further reduce hallucinations. Updates can be handled by synchronizing the knowledge base rather than retraining an FM, minimizing operational overhead.<br/>• <strong>B</strong>: ❌ DynamoDB is not designed for semantic vector similarity search; scanning and scoring items in Lambda does not scale and creates significant custom operational burden. This design increases latency, cost, and complexity compared to using a managed knowledge base and vector retrieval solution.<br/>• <strong>C</strong>: ❌ Fine-tuning (custom models) requires creating and managing training datasets and running customization jobs. It also does not align well with frequently changing documents because the model would require additional customization jobs to incorporate updates, which increases operational overhead and delays content freshness.<br/>• <strong>D</strong>: ❌ This approach requires custom retrieval and prompt-building logic and is likely to hit context window limits and increase token costs. It also does not provide a managed retrieval layer that is optimized for semantic relevance, which can reduce answer quality and increase troubleshooting effort.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-data.html\">Turning data into a knowledge base - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve-generate.html\">Query a knowledge base and generate responses based off the retrieved data - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html\">Use contextual grounding check to filter hallucinations in responses - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media analytics team is building a Retrieval Augmented Generation (RAG) assistant by using Amazon Bedrock. Millions of internal articles are stored in Amazon S3 and are tagged by topic (for example, sports, finance, and entertainment). The team wants to segment the corpus by topic to improve retrieval precision. The team also wants the search tier to accept natural language queries and generate embeddings automatically so the application does not need to compute embeddings before querying the vector store.</p><p>Which solution meets these requirements with the LEAST application-side implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG trên hàng triệu bài viết, chia corpus theo topic để tăng độ chính xác.</li><li>Tầng search phải nhận câu hỏi tự nhiên và <strong>tự sinh embedding</strong> để ứng dụng không phải tính embedding trước khi truy vấn.</li><li>Ưu tiên: ít công sức phía application.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>OpenSearch Neural plugin</strong> gọi Bedrock embedding model qua ingest pipeline, và <strong>neural query</strong> tự chuyển câu hỏi thành vector phía search. Mỗi topic một index giúp phân đoạn corpus.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Tự sinh embedding ở tầng search, index theo topic.</li><li><strong>B</strong>: ❌ Sai — Tính similarity bằng SQL trên JSON không scale với hàng triệu tài liệu.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Knowledge Base managed, nhưng không đáp ứng rõ yêu cầu phân đoạn theo topic và để OpenSearch tự sinh query embedding như đề nêu.</li><li><strong>D</strong>: ❌ Sai — Application phải tự tạo embedding và DynamoDB Scan là không khả thi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OpenSearch Neural plugin, neural query, ingest pipeline, separate indices, Bedrock embedding</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'search tier tự sinh embedding từ natural language query' → nghĩ ngay đến <strong>OpenSearch neural search</strong> với model connector Bedrock.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 24,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>Store the documents in Amazon S3. Create an Amazon OpenSearch Service domain with separate indices per topic. Configure the OpenSearch Neural plugin to call an Amazon Bedrock embedding model in an ingest pipeline and use neural queries so OpenSearch generates query embeddings automatically.</p>",
              "correct": true,
              "feedback": "<p>This design uses OpenSearch as the vector database and applies topic-based segmentation by isolating content into per-topic indices. The Neural plugin allows OpenSearch to generate embeddings during ingestion and at query time by invoking an embedding model in Amazon Bedrock, which removes the need for the application to compute embeddings before search.</p>"
            },
            {
              "choice": "<p>Store documents in Amazon S3 and store embeddings in Amazon RDS for PostgreSQL as a JSON column. Use SQL to calculate similarity scores in queries and filter by topic tags to return the top matches.</p>",
              "correct": false,
              "feedback": "<p>Storing embeddings as JSON and implementing similarity calculations manually increases application and database complexity and is not an optimized vector database architecture. This approach also misses purpose-built vector indexing/search capabilities needed for efficient semantic retrieval at scale.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base with the S3 bucket as the data source and an Amazon OpenSearch Serverless collection as the managed vector store. Use hierarchical chunking and let the Knowledge Base handle ingestion and retrieval for the application.</p>",
              "correct": false,
              "feedback": "<p>Although a Knowledge Base can simplify RAG ingestion and retrieval, it does not directly satisfy the requirement for the search tier itself (OpenSearch) to accept natural language queries and generate embeddings automatically for ad hoc search use cases. The requirement is specifically to offload query-embedding generation into the search layer.</p>"
            },
            {
              "choice": "<p>Store document text and topic tags in Amazon DynamoDB. Generate embeddings in the application with an Amazon Bedrock embedding model and store embeddings as DynamoDB attributes. Use DynamoDB Scan operations and compute cosine similarity in the application to find the closest matches.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB is not designed for efficient vector similarity search in this pattern. Scanning and computing similarity in the application does not provide efficient semantic retrieval at scale and significantly increases application-side complexity and latency.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 24,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The best approach is to use Amazon OpenSearch Service as the vector store with topic-based segmentation (separate indices per topic) and integrate embedding generation directly into OpenSearch through the Neural plugin. This lets OpenSearch create embeddings for documents during ingestion and create embeddings for user queries at search time by invoking an Amazon Bedrock embedding model, enabling efficient semantic retrieval without requiring the application to generate embeddings before each query. Other approaches either don’t offload embedding generation into the search tier or require inefficient retrieval patterns and substantial custom implementation.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This design uses OpenSearch as the vector database and applies topic-based segmentation by isolating content into per-topic indices. The Neural plugin allows OpenSearch to generate embeddings during ingestion and at query time by invoking an embedding model in Amazon Bedrock, which removes the need for the application to compute embeddings before search.<br/>• <strong>B</strong>: ❌ Storing embeddings as JSON and implementing similarity calculations manually increases application and database complexity and is not an optimized vector database architecture. This approach also misses purpose-built vector indexing/search capabilities needed for efficient semantic retrieval at scale.<br/>• <strong>C</strong>: ❌ Although a Knowledge Base can simplify RAG ingestion and retrieval, it does not directly satisfy the requirement for the search tier itself (OpenSearch) to accept natural language queries and generate embeddings automatically for ad hoc search use cases. The requirement is specifically to offload query-embedding generation into the search layer.<br/>• <strong>D</strong>: ❌ DynamoDB is not designed for efficient vector similarity search in this pattern. Scanning and computing similarity in the application does not provide efficient semantic retrieval at scale and significantly increases application-side complexity and latency.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/semantic-search.html\">Semantic search in Amazon OpenSearch Service - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cfn-template-bedrock.html\">Amazon Bedrock templates - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/big-data/power-neural-search-with-ai-ml-connectors-in-amazon-opensearch-service/\">Power neural search with AI/ML connectors in Amazon OpenSearch Service (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services analytics team is building a document-summarization workflow by using an Amazon Bedrock text model. Each night, a new batch of customer interaction transcripts is delivered as JSON files to an Amazon S3 bucket. Some files are missing required fields (for example, transcriptText), and some contain empty strings that cause poor model responses. The team needs an automated validation workflow that can enforce data quality rules before the transcripts are sent for FM inference and that can publish pass/fail results as operational metrics for monitoring.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Transcript JSON mỗi đêm có file thiếu trường (transcriptText) hoặc chuỗi rỗng.</li><li>Cần validation tự động trước khi gọi FM và publish pass/fail thành metric giám sát.</li><li>Ưu tiên: automation, data quality, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Glue Data Quality</strong> dùng ruleset <strong>DQDL</strong> kiểm tra trường bắt buộc và giá trị không rỗng, job có thể fail, quarantine bản ghi lỗi, và đẩy kết quả lên CloudWatch metrics cho alarm và dashboard.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Quy tắc chất lượng khai báo, quarantine và metric tích hợp.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Athena kiểm tra được nhưng quyết định chạy workflow vẫn thủ công và không có metric pass/fail.</li><li><strong>C</strong>: ❌ Sai — Data Wrangler là công cụ tương tác thủ công, không hợp pipeline hàng đêm.</li><li><strong>D</strong>: ❌ Sai — Chỉ kiểm tra JSON hợp lệ, vẫn gửi dữ liệu xấu vào model, và lỗi chỉ nằm trong log.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Glue Data Quality, DQDL, quarantine, CloudWatch metrics, data validation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp validate chất lượng dữ liệu trước khi vào FM + metric → nghĩ ngay đến <strong>Glue Data Quality</strong> (DQDL) + <strong>CloudWatch</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 25,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>Create an AWS Glue ETL job that reads the JSON files from Amazon S3 and evaluates an AWS Glue Data Quality ruleset (DQDL) for required fields and non-empty values. Configure the job to fail when the ruleset fails, write failed records to a quarantine S3 prefix, and publish data quality results to Amazon CloudWatch metrics for alarms and dashboards.</p>",
              "correct": true,
              "feedback": "<p>AWS Glue Data Quality is designed for automated, rule-based validation and can be embedded directly into Glue jobs. The ruleset can enforce completeness and basic validity checks (such as required fields and non-empty strings). Failing the job prevents downstream FM inference on bad data, while quarantining isolates invalid records for later remediation. Emitting results to CloudWatch provides the required operational visibility with minimal custom code.</p>"
            },
            {
              "choice": "<p>Run scheduled Amazon Athena queries that look for missing fields and empty strings in the transcript dataset stored in Amazon S3. Use the query results to decide whether to run the summarization workflow on the next schedule.</p>",
              "correct": false,
              "feedback": "<p>Athena can detect data issues through queries, but this approach requires additional orchestration and does not inherently integrate pass/fail enforcement into the ingestion workflow. It also adds operational complexity to translate query results into consistent validation outcomes and monitoring signals compared to a Glue job with Glue Data Quality and CloudWatch metrics.</p>"
            },
            {
              "choice": "<p>Use Amazon SageMaker Data Wrangler in SageMaker Studio to visually inspect the transcript dataset for missing values, correct the records manually, and export the cleaned data back to Amazon S3 for the summarization workflow.</p>",
              "correct": false,
              "feedback": "<p>Data Wrangler is well suited for interactive data preparation and exploration, but relying on manual inspection and correction does not provide an automated validation workflow for recurring nightly batches. This approach also increases ongoing operational overhead and does not inherently enforce or continuously report pass/fail rule evaluations as monitoring metrics.</p>"
            },
            {
              "choice": "<p>Create an AWS Lambda function that is triggered by S3 object creation events. The function checks whether the JSON is valid and then sends the data directly to the Amazon Bedrock model. Store any errors in Amazon CloudWatch Logs for later review.</p>",
              "correct": false,
              "feedback": "<p>While Lambda can perform basic checks, implementing and maintaining comprehensive validation logic and pass/fail reporting is custom work and increases operational overhead compared to using a managed data quality capability. Logging errors to CloudWatch Logs alone does not provide a standardized, rule-based validation workflow with explicit data quality results published as metrics.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 25,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most operationally efficient approach is to implement validation where the batch data is already being processed and to use managed, rule-based checks. AWS Glue Data Quality can evaluate explicit rules (such as required keys and non-empty values) as part of an AWS Glue job, and it can be configured to fail processing when quality thresholds are not met so that invalid data does not reach the foundation model. Publishing the evaluation results to Amazon CloudWatch metrics enables dashboards and alarms without building a separate reporting system. Alternatives either rely on manual steps, require significant custom validation code, or add extra orchestration that increases operational overhead.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ AWS Glue Data Quality is designed for automated, rule-based validation and can be embedded directly into Glue jobs. The ruleset can enforce completeness and basic validity checks (such as required fields and non-empty strings). Failing the job prevents downstream FM inference on bad data, while quarantining isolates invalid records for later remediation. Emitting results to CloudWatch provides the required operational visibility with minimal custom code.<br/>• <strong>B</strong>: ❌ Athena can detect data issues through queries, but this approach requires additional orchestration and does not inherently integrate pass/fail enforcement into the ingestion workflow. It also adds operational complexity to translate query results into consistent validation outcomes and monitoring signals compared to a Glue job with Glue Data Quality and CloudWatch metrics.<br/>• <strong>C</strong>: ❌ Data Wrangler is well suited for interactive data preparation and exploration, but relying on manual inspection and correction does not provide an automated validation workflow for recurring nightly batches. This approach also increases ongoing operational overhead and does not inherently enforce or continuously report pass/fail rule evaluations as monitoring metrics.<br/>• <strong>D</strong>: ❌ While Lambda can perform basic checks, implementing and maintaining comprehensive validation logic and pass/fail reporting is custom work and increases operational overhead compared to using a managed data quality capability. Logging errors to CloudWatch Logs alone does not provide a standardized, rule-based validation workflow with explicit data quality results published as metrics.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/glue/latest/dg/data-quality-getting-started.html\">Getting started with AWS Glue Data Quality for the Data Catalog - AWS Glue (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-pyspark-transforms-EvaluateDataQuality.html\">EvaluateDataQuality class - AWS Glue (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/glue/latest/dg/dqdl.html\">Data Quality Definition Language (DQDL) reference - AWS Glue (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech support engineering team is building a customer chat assistant by using an FM in Amazon Bedrock. The assistant must consistently behave like a regulated customer support agent across multiple applications, must return responses in a fixed JSON structure that downstream systems can parse, and must prevent the FM from returning personally identifiable information (PII) or discussing restricted topics.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần hành vi agent nhất quán giữa nhiều app, output JSON cố định, chặn PII và topic bị cấm.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong> bằng managed feature.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Bedrock Prompt Management</strong> cho prompt template dùng chung (role + JSON schema), còn <strong>Amazon Bedrock Guardrails</strong> cung cấp topic filtering và PII masking sẵn có. Cả hai đều managed, không cần code tự dựng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fine-tune tốn công, không đảm bảo tuyệt đối JSON/PII, bỏ prompt làm mất kiểm soát.</li><li><strong>B</strong>: ✅ Đúng — template tái sử dụng + Guardrails, ít vận hành nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự quản lý prompt trên S3 và Lambda + Amazon Comprehend, nhiều thành phần phải vận hành.</li><li><strong>D</strong>: ❌ Sai — API Gateway chỉ validate request, không kiểm soát output hay PII/topic của FM.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>Guardrails (topic filter, PII masking)</li><li>Reusable prompt template</li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp yêu cầu prompt dùng chung + chặn PII/topic → nghĩ ngay đến <strong>Bedrock Prompt Management</strong> + <strong>Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 26,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>Fine-tune a Bedrock custom model on company support transcripts that always follow the JSON format and never includes PII. Deploy the fine-tuned model and remove all prompt instructions to reduce token usage.</p>",
              "correct": false,
              "feedback": "<p>Model customization is significantly higher operational effort and cost than using managed prompts and guardrails, and it does not provide strong, configurable runtime governance controls for restricted topics and PII handling. Additionally, removing prompt instructions reduces controllability and makes behavior harder to govern across applications.</p>"
            },
            {
              "choice": "<p>Create a reusable, parameterized prompt template in Amazon Bedrock Prompt Management that defines the agent role and includes explicit JSON output instructions (schema and example). Attach Amazon Bedrock Guardrails with topic filtering and PII masking, and invoke the managed prompt from all applications.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Prompt Management centralizes and versions the instruction framework (including consistent role definitions and response formatting expectations) so multiple applications can use the same governed template. Bedrock Guardrails add managed safety controls, including topic filtering and PII masking/removal, reducing the need for custom moderation code. Together, they control both FM behavior and output with minimal custom infrastructure.</p>"
            },
            {
              "choice": "<p>Store prompt text templates in an Amazon S3 bucket and have each application load and assemble prompts at runtime. Use AWS Lambda to call Amazon Comprehend for PII detection and redaction before and after each model invocation.</p>",
              "correct": false,
              "feedback": "<p>Although this can work, it increases operational overhead by requiring custom code to fetch, assemble, and version prompts, plus additional Lambda-based pre/post-processing logic and scaling considerations. It also duplicates governance responsibilities across multiple applications instead of using managed prompt governance and guardrails.</p>"
            },
            {
              "choice": "<p>Configure Amazon API Gateway request validation with a JSON Schema model and reject any Bedrock request that does not include the required output fields. Rely on the FM to comply with the schema and avoid restricted topics.</p>",
              "correct": false,
              "feedback": "<p>API Gateway request validation applies to incoming API requests to the application, not to enforcing an FM’s generated output structure or content safety. This approach does not provide a control mechanism for restricting unsafe model outputs such as PII or restricted topics.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 26,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The best approach is to centralize the instruction framework and governance so every application gets consistent behavior without duplicating logic. Amazon Bedrock Prompt Management provides a reusable prompt template to enforce a standard role and a consistent response format (such as a required JSON structure). Amazon Bedrock Guardrails add managed safety controls—such as topic filtering and PII masking/removal—so the system can block or sanitize unsafe outputs without building and operating custom moderation pipelines. Alternatives either rely on unmanaged prompt files and custom code, try to enforce constraints in the wrong layer (API request validation), or introduce unnecessary operational complexity through model customization.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Model customization is significantly higher operational effort and cost than using managed prompts and guardrails, and it does not provide strong, configurable runtime governance controls for restricted topics and PII handling. Additionally, removing prompt instructions reduces controllability and makes behavior harder to govern across applications.<br/>• <strong>B</strong>: ✅ Bedrock Prompt Management centralizes and versions the instruction framework (including consistent role definitions and response formatting expectations) so multiple applications can use the same governed template. Bedrock Guardrails add managed safety controls, including topic filtering and PII masking/removal, reducing the need for custom moderation code. Together, they control both FM behavior and output with minimal custom infrastructure.<br/>• <strong>C</strong>: ❌ Although this can work, it increases operational overhead by requiring custom code to fetch, assemble, and version prompts, plus additional Lambda-based pre/post-processing logic and scaling considerations. It also duplicates governance responsibilities across multiple applications instead of using managed prompt governance and guardrails.<br/>• <strong>D</strong>: ❌ API Gateway request validation applies to incoming API requests to the application, not to enforcing an FM’s generated output structure or content safety. This approach does not provide a control mechanism for restricting unsafe model outputs such as PII or restricted topics.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Construct and store reusable prompts with Prompt management in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Remove PII from conversations by using sensitive information filters (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An enterprise platform team at a financial institution is building a centralized “GenAI gateway” that internal applications must use to access Amazon Bedrock models. The gateway must enforce consistent request validation and throttling, record an audit trail of model access, and be deployed through an automated CI/CD pipeline that includes security checks. If a new release causes increased errors or latency, the deployment must automatically roll back.</p><p>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xây GenAI gateway tập trung: validate, throttling, audit trail, CI/CD có security check, tự động rollback khi lỗi/latency tăng.</li><li>Ưu tiên: <strong>serverless/managed</strong>, ít overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon API Gateway</strong> (validation + throttling) + AWS Lambda gọi Bedrock; CodePipeline + CodeBuild chạy test/scan; <strong>CodeDeploy canary</strong> trên Lambda alias kết hợp <strong>CloudWatch alarms</strong> tự rollback; CloudTrail/CloudWatch Logs để audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự vận hành proxy trên ECS, và bỏ test/security scan trái yêu cầu.</li><li><strong>B</strong>: ❌ Sai — không có gateway để validate/throttle, rollback thủ công.</li><li><strong>C</strong>: ✅ Đúng — đủ mọi requirement, toàn bộ managed.</li><li><strong>D</strong>: ❌ Sai — Step Functions không phải gateway, deploy bằng schedule + script, rollback thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway + Lambda</li><li>CodeDeploy canary + CloudWatch alarm</li><li>Automatic rollback</li><li>CodeBuild security scan</li><li>CloudTrail audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp deploy an toàn + tự động rollback cho Lambda → nghĩ ngay đến <strong>CodeDeploy canary/linear</strong> + <strong>CloudWatch alarms</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 27,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>Front the gateway with an Application Load Balancer that routes to Amazon ECS tasks running a custom proxy service. Use AWS CodePipeline to build and push container images to Amazon ECR. Perform blue/green deployments in the ECS service without automated tests or security scans to keep the pipeline simple.</p>",
              "correct": false,
              "feedback": "<p>While ECS blue/green can reduce deployment risk, omitting automated tests and security scans violates the security-check requirement. This option also adds operational overhead compared to a serverless API Gateway + Lambda approach for a gateway-style workload.</p>"
            },
            {
              "choice": "<p>Expose Amazon Bedrock directly to internal applications. Store prompt templates in Amazon S3 with versioning enabled. Use AWS CloudTrail to audit Bedrock API calls and rely on developers to manually roll back by reverting the S3 objects when a deployment causes issues.</p>",
              "correct": false,
              "feedback": "<p>This lacks a centralized gateway layer to consistently enforce request validation and throttling across applications. Manual rollback increases operational overhead and does not provide automated rollback based on runtime health signals.</p>"
            },
            {
              "choice": "<p>Deploy the gateway as Amazon API Gateway integrated with AWS Lambda that invokes Amazon Bedrock. Use AWS CodePipeline to orchestrate deployments from source control. Run automated tests and security scans in AWS CodeBuild, deploy with AWS CodeDeploy using canary traffic shifting for the Lambda alias, and configure CloudWatch alarms to trigger automatic rollback. Enable CloudTrail and CloudWatch Logs for auditing and observability.</p>",
              "correct": true,
              "feedback": "<p>API Gateway provides a centralized entry point with request validation and throttling. CodePipeline and CodeBuild provide a managed CI/CD workflow with automated testing and security scans. CodeDeploy can shift traffic gradually to a new Lambda version and automatically roll back when CloudWatch alarms detect elevated errors or latency. CloudTrail and CloudWatch Logs provide auditability and operational visibility with minimal custom operational work.</p>"
            },
            {
              "choice": "<p>Use AWS Step Functions to coordinate model invocations and error handling. Trigger Step Functions deployments by using Amazon EventBridge schedules that run AWS CLI scripts in AWS Lambda to update resources. Use CloudWatch Logs for troubleshooting and manually redeploy the previous version if problems occur.</p>",
              "correct": false,
              "feedback": "<p>This uses custom scripting for deployments instead of a managed CI/CD pipeline with automated security checks and rollback support. Manual redeployments increase operational overhead and do not meet the automatic rollback requirement.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 27,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A centralized GenAI gateway is best implemented with API Gateway in front of a Lambda layer that invokes Bedrock so the organization can standardize request validation, throttling, and access patterns. A managed CI/CD pipeline uses CodePipeline for orchestration and CodeBuild to run automated tests (for example, contract tests for request/response formats and prompt regression tests) and security scans before deployment. For safe releases, CodeDeploy can perform canary traffic shifting for a Lambda alias and automatically roll back when CloudWatch alarms detect increased error rates or latency. CloudTrail and CloudWatch Logs provide the audit trail and observability required for secure and compliant enterprise consumption patterns.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ While ECS blue/green can reduce deployment risk, omitting automated tests and security scans violates the security-check requirement. This option also adds operational overhead compared to a serverless API Gateway + Lambda approach for a gateway-style workload.<br/>• <strong>B</strong>: ❌ This lacks a centralized gateway layer to consistently enforce request validation and throttling across applications. Manual rollback increases operational overhead and does not provide automated rollback based on runtime health signals.<br/>• <strong>C</strong>: ✅ API Gateway provides a centralized entry point with request validation and throttling. CodePipeline and CodeBuild provide a managed CI/CD workflow with automated testing and security scans. CodeDeploy can shift traffic gradually to a new Lambda version and automatically roll back when CloudWatch alarms detect elevated errors or latency. CloudTrail and CloudWatch Logs provide auditability and operational visibility with minimal custom operational work.<br/>• <strong>D</strong>: ❌ This uses custom scripting for deployments instead of a managed CI/CD pipeline with automated security checks and rollback support. Manual redeployments increase operational overhead and do not meet the automatic rollback requirement.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html\">Throttle requests to your REST APIs for better throughput in API Gateway (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">Monitor Amazon Bedrock API calls using CloudTrail (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html\">Deploying serverless applications gradually with AWS SAM (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media streaming company is building a customer-facing GenAI chat feature by using Amazon Bedrock. The web client must display the model output incrementally as it is generated. The team also wants to prevent requests that exceed a configured prompt token budget before invoking the model to avoid failures and unnecessary cost. Occasionally, the Bedrock invocation experiences transient timeouts and must be retried automatically without requiring changes on the client.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hiển thị output theo từng phần (streaming), kiểm tra token budget trước khi gọi model, tự retry khi timeout thoáng qua mà không đổi client.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>WebSocket API cho phép đẩy chunk về client, <strong>CountTokens</strong> kiểm tra budget trước khi invoke, <strong>ConverseStream</strong> stream kết quả, và AWS SDK có sẵn exponential backoff retry.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ streaming, token check, retry, gọn.</li><li><strong>B</strong>: ❌ Sai — mapping template không đếm token đúng, throttling của API Gateway không phải retry cho Bedrock.</li><li><strong>C</strong>: ❌ Sai — SQS + polling S3 không streaming, thêm thành phần, UX chậm.</li><li><strong>D</strong>: ❌ Sai — InvokeModel trả toàn bộ response (không incremental); usage plan không kiểm soát prompt size hay retry.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ConverseStream</li><li>CountTokens API</li><li>WebSocket API</li><li>SDK exponential backoff</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp hiển thị output từng phần → nghĩ ngay đến <strong>ConverseStream/InvokeModelWithResponseStream</strong> + <strong>WebSocket</strong>; cần đếm token trước → <strong>CountTokens</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 28,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>Create an Amazon API Gateway WebSocket API that invokes an AWS Lambda function. In the Lambda function, call the Amazon Bedrock CountTokens API to validate the prompt against the token budget. If valid, invoke the model with the Amazon Bedrock ConverseStream API and send streamed chunks back to the client over the WebSocket connection. Configure the AWS SDK client in Lambda to use exponential backoff retries for transient timeouts.</p>",
              "correct": true,
              "feedback": "<p>A WebSocket API provides a straightforward way to push incremental updates to the browser in near real time. A Lambda function can enforce token budget checks before model invocation by calling CountTokens, and it can handle retries for transient Bedrock timeouts by using the AWS SDK retry configuration (exponential backoff). This design centralizes streaming, validation, and retry behavior in the API layer without requiring additional orchestration services.</p>"
            },
            {
              "choice": "<p>Create an Amazon API Gateway REST API with an AWS service integration directly to the Amazon Bedrock InvokeModelWithResponseStream API. Use API Gateway mapping templates to enforce the maximum token budget and configure API Gateway throttling to handle retries when Bedrock times out.</p>",
              "correct": false,
              "feedback": "<p>API Gateway mapping templates cannot calculate model token counts, so they cannot reliably enforce a token budget. Throttling protects backends from overuse but does not implement automatic retries for backend timeouts. Also, using direct service integration limits where you can implement token-aware validation and robust retry logic.</p>"
            },
            {
              "choice": "<p>Create an Amazon API Gateway REST API that sends requests to an Amazon SQS queue. Use AWS Lambda to poll the queue, call the model with Amazon Bedrock InvokeModel, and store the result in Amazon S3. Provide a second API method for the client to poll Amazon S3 for the final response. Implement retries by configuring the SQS redrive policy.</p>",
              "correct": false,
              "feedback": "<p>This asynchronous pattern does not provide real-time incremental streaming to the client because the user must poll for a completed response. Although SQS redrive policies can help with failure handling, this approach adds extra components and shifts the experience away from interactive chat.</p>"
            },
            {
              "choice": "<p>Create an Amazon API Gateway REST API that invokes a single AWS Lambda function. In the Lambda function, invoke the model with the Amazon Bedrock InvokeModel API and return the complete response to the client. Use API Gateway usage plans to prevent large prompts and to retry failed requests.</p>",
              "correct": false,
              "feedback": "<p>Returning a complete response does not meet the requirement to stream output incrementally. Usage plans and throttling can limit request rates but do not provide token-based prompt validation or automatic retries for model timeouts. A synchronous single-response pattern also increases perceived latency for chat experiences compared to streaming.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 28,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The requirements describe an interactive chat interface that needs token-by-token (or chunk-by-chunk) response delivery, prompt token budget enforcement before model invocation, and transparent retries for transient Bedrock timeouts. Using API Gateway with a WebSocket API enables server-to-client push for streaming updates. Adding Lambda provides a single place to implement token limit management by counting tokens before invoking the model and to implement resilient retry behavior (exponential backoff) when Bedrock calls intermittently time out, all without introducing additional workflow orchestration or polling mechanisms.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ A WebSocket API provides a straightforward way to push incremental updates to the browser in near real time. A Lambda function can enforce token budget checks before model invocation by calling CountTokens, and it can handle retries for transient Bedrock timeouts by using the AWS SDK retry configuration (exponential backoff). This design centralizes streaming, validation, and retry behavior in the API layer without requiring additional orchestration services.<br/>• <strong>B</strong>: ❌ API Gateway mapping templates cannot calculate model token counts, so they cannot reliably enforce a token budget. Throttling protects backends from overuse but does not implement automatic retries for backend timeouts. Also, using direct service integration limits where you can implement token-aware validation and robust retry logic.<br/>• <strong>C</strong>: ❌ This asynchronous pattern does not provide real-time incremental streaming to the client because the user must poll for a completed response. Although SQS redrive policies can help with failure handling, this approach adds extra components and shifts the experience away from interactive chat.<br/>• <strong>D</strong>: ❌ Returning a complete response does not meet the requirement to stream output incrementally. Usage plans and throttling can limit request rates but do not provide token-based prompt validation or automatic retries for model timeouts. A synchronous single-response pattern also increases perceived latency for chat experiences compared to streaming.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html\">ConverseStream - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_CountTokens.html\">CountTokens - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html\">Use @connections commands in your backend service - Amazon API Gateway (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A product team is building an internal chat assistant for customer support agents by using Amazon Bedrock. After launch, the team needs a user-centered way to continuously improve response quality by collecting per-response ratings and optional written feedback, and to later analyze feedback by model and prompt version. The team wants a solution that is serverless and requires the LEAST operational overhead.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập đánh giá trực tiếp của người dùng cho từng response và phân tích theo model/prompt version.</li><li>Ưu tiên: serverless, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Feedback của người dùng phải được thu thập tường minh. <strong>API Gateway + Lambda + DynamoDB</strong> là kiến trúc serverless đơn giản, lưu rating, comment và metadata (model ID, prompt version) để phân tích sau.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — thu thập rating thật và gắn metadata, serverless.</li><li><strong>B</strong>: ❌ Sai — CloudTrail chỉ ghi API call, không chứa mức độ hài lòng của người dùng.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ suy đoán gián tiếp từ câu hỏi lặp, không phải feedback thực.</li><li><strong>D</strong>: ❌ Sai — Ground Truth cần workforce con người đánh giá mọi response, tốn kém và không phải feedback của user thực.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>User-centered feedback</li><li>Per-response rating</li><li>DynamoDB + metadata</li><li>Serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'user feedback loop' → nghĩ ngay đến <strong>UI rating</strong> + <strong>API Gateway/Lambda/DynamoDB</strong>, không phải logs hay CloudTrail.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 29,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>Add a “Rate this answer” feature in the web UI that calls an Amazon API Gateway REST endpoint. Use an AWS Lambda function to validate the request and store the rating, free-text feedback, and metadata (model ID and prompt version) in an Amazon DynamoDB table for later analysis.</p>",
              "correct": true,
              "feedback": "<p>An API Gateway + Lambda + DynamoDB pattern provides a simple serverless feedback interface that can capture explicit user ratings and annotations at scale. DynamoDB is well-suited to store structured feedback records (including model ID and prompt version) so the team can later analyze user satisfaction and trends per configuration and use that information to iterate on prompts or model selection.</p>"
            },
            {
              "choice": "<p>Use AWS CloudTrail to record Amazon Bedrock InvokeModel API calls and export the events to Amazon S3. Use Amazon Athena queries to compute daily satisfaction scores per model version.</p>",
              "correct": false,
              "feedback": "<p>CloudTrail captures API activity for governance and auditing, not end-user satisfaction. It will not provide per-response ratings or user annotations, so it does not meet the requirement for a user-centered feedback mechanism.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock model invocation logging and send the logs to Amazon CloudWatch Logs. Use CloudWatch Logs Insights queries to infer user satisfaction by counting follow-up questions and re-prompts, and store the query results as dashboards.</p>",
              "correct": false,
              "feedback": "<p>This approach does not collect explicit user ratings or written feedback, and it attempts to infer satisfaction indirectly from behavior. It also makes it difficult to reliably associate feedback with a specific response and capture user-provided corrections, which are key user-centered evaluation mechanisms.</p>"
            },
            {
              "choice": "<p>Create an Amazon SageMaker Ground Truth labeling job that sends every assistant response to a human workforce for scoring and annotation. Store the labeled results in Amazon S3 and use the labels to decide which model to use.</p>",
              "correct": false,
              "feedback": "<p>While it can produce high-quality labels, routing every response through a labeling workflow adds significant operational overhead and cost and does not leverage direct in-app user feedback. It is not the least operationally complex way to continuously incorporate user experience signals.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 29,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A user-centered evaluation mechanism requires collecting explicit feedback from the people using the application (for example, thumbs up/down, star ratings, and optional comments or corrections) and persisting that feedback in a form that can be analyzed over time. A serverless feedback endpoint implemented with Amazon API Gateway and AWS Lambda can receive feedback events from the application UI and perform basic validation and enrichment (such as attaching the model ID and prompt version). Storing these records in Amazon DynamoDB keeps the solution fully managed and scalable with minimal operational burden, while enabling later analysis and continuous improvement cycles based on real user experience. Auditing and logging services can help troubleshoot and govern usage, but they do not replace direct user feedback, and a full human labeling pipeline for every response is typically excessive for ongoing, in-product iteration.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ An API Gateway + Lambda + DynamoDB pattern provides a simple serverless feedback interface that can capture explicit user ratings and annotations at scale. DynamoDB is well-suited to store structured feedback records (including model ID and prompt version) so the team can later analyze user satisfaction and trends per configuration and use that information to iterate on prompts or model selection.<br/>• <strong>B</strong>: ❌ CloudTrail captures API activity for governance and auditing, not end-user satisfaction. It will not provide per-response ratings or user annotations, so it does not meet the requirement for a user-centered feedback mechanism.<br/>• <strong>C</strong>: ❌ This approach does not collect explicit user ratings or written feedback, and it attempts to infer satisfaction indirectly from behavior. It also makes it difficult to reliably associate feedback with a specific response and capture user-provided corrections, which are key user-centered evaluation mechanisms.<br/>• <strong>D</strong>: ❌ While it can produce high-quality labels, routing every response through a labeling workflow adds significant operational overhead and cost and does not leverage direct in-app user feedback. It is not the least operationally complex way to continuously incorporate user experience signals.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html\">Tutorial: Using Lambda with API Gateway (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html\">Monitor model invocation using CloudWatch Logs and Amazon S3 - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">Monitor Amazon Bedrock API calls using CloudTrail - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media analytics team uses Amazon Bedrock to generate short summaries for hundreds of thousands of customer call transcripts every night. A Lambda function currently reads each transcript from Amazon S3 and invokes the model one request at a time. The team is frequently throttled during the batch window and the job does not finish by morning. The summaries can be generated asynchronously, and the output must be stored in Amazon S3 for downstream processing.</p><p>Which solution will increase throughput for this workload MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý hàng trăm nghìn transcript mỗi đêm, bị throttle, có thể bất đồng bộ, output vào S3.</li><li>Ưu tiên: tăng throughput với <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock batch inference</strong> được thiết kế cho workload offline lớn: input/output trên S3, không bị throttle theo từng request và giá thấp hơn on-demand (khoảng 50%).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — transcript khác nhau nên cache hầu như không hit, không tăng throughput.</li><li><strong>B</strong>: ✅ Đúng — batch inference, rẻ nhất và phù hợp async.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — provisioned throughput tính tiền theo giờ, đắt cho job chạy theo đêm.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tăng concurrency làm throttle nặng hơn, vẫn giá on-demand.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Batch inference</li><li>Asynchronous, offline</li><li>S3 input/output</li><li>Cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp khối lượng lớn, không cần real-time, output S3 → nghĩ ngay đến <strong>Bedrock batch inference</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 30,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>Put Amazon API Gateway in front of the Lambda function and enable API Gateway caching to reduce repeated model invocations for similar transcripts.</p>",
              "correct": false,
              "feedback": "<p>API caching is effective when identical requests repeat and responses can be reused. In transcript summarization, inputs are typically unique, so caching provides little benefit and does not address Bedrock throttling or throughput constraints.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock batch inference by writing the prompts to an input file in Amazon S3, submitting a batch inference job, and storing the batch output in Amazon S3 for downstream processing.</p>",
              "correct": true,
              "feedback": "<p>Batch inference is designed for high-throughput, asynchronous processing by submitting many prompts together and writing results back to Amazon S3. This reduces orchestration overhead from per-item invocations and is well suited for nightly jobs where results are not required in real time.</p>"
            },
            {
              "choice": "<p>Purchase Amazon Bedrock provisioned throughput for the model and continue invoking the model synchronously from the existing Lambda function for each transcript.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can increase available capacity, but it is generally an expensive way to address a nightly, asynchronous batch use case. It does not reduce the number of model invocations or per-request overhead, and it can lead to paying for capacity that is idle outside the batch window.</p>"
            },
            {
              "choice": "<p>Publish one SQS message per transcript and increase AWS Lambda reserved concurrency so more messages are processed in parallel. Add exponential backoff retries when Bedrock returns throttling errors.</p>",
              "correct": false,
              "feedback": "<p>Increasing concurrency can improve parallelism, but it also increases the chance of hitting Amazon Bedrock throughput limits during peak processing. This approach still performs a very large number of individual model invocations with per-request overhead and requires active management of concurrency, retries, and failure handling.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 30,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For large, offline GenAI workloads, optimizing throughput is primarily about reducing per-request overhead and efficiently managing how many model invocations are executed. Amazon Bedrock batch inference is intended for this pattern: prompts are placed in Amazon S3, a batch job processes them at scale, and the results are delivered back to Amazon S3 for later consumption. Approaches that rely on scaling Lambda concurrency or adding an API layer still generate a large number of individual invocations, which can amplify throttling and increase operational complexity. Provisioned throughput can help for sustained, predictable real-time demand, but it is usually not the most cost-effective choice for a nightly asynchronous batch pipeline.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ API caching is effective when identical requests repeat and responses can be reused. In transcript summarization, inputs are typically unique, so caching provides little benefit and does not address Bedrock throttling or throughput constraints.<br/>• <strong>B</strong>: ✅ Batch inference is designed for high-throughput, asynchronous processing by submitting many prompts together and writing results back to Amazon S3. This reduces orchestration overhead from per-item invocations and is well suited for nightly jobs where results are not required in real time.<br/>• <strong>C</strong>: ❌ Provisioned throughput can increase available capacity, but it is generally an expensive way to address a nightly, asynchronous batch use case. It does not reduce the number of model invocations or per-request overhead, and it can lead to paying for capacity that is idle outside the batch window.<br/>• <strong>D</strong>: ❌ Increasing concurrency can improve parallelism, but it also increases the chance of hitting Amazon Bedrock throughput limits during peak processing. This approach still performs a very large number of individual model invocations with per-request overhead and requires active management of concurrency, retries, and failure handling.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html\">Process multiple prompts with batch inference - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html\">Format and upload your batch inference data - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-create.html\">Create a batch inference job - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer support engineering team is building an agent-assist feature that uses Amazon Bedrock. For each incoming support ticket, the UI must display (1) a customer-ready response and (2) a short internal troubleshooting checklist. The team has found that generating both artifacts in a single prompt increases latency and cost. The team wants to use specialized foundation models (FMs) for each artifact and then combine the results into one JSON payload for the frontend.</p><p>Which solution will meet these requirements with the LOWEST end-to-end latency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tạo 2 artifact bằng 2 FM chuyên biệt rồi gộp thành một JSON.</li><li>Ưu tiên: <strong>LOWEST end-to-end latency</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Hai tác vụ độc lập nên chạy song song. <strong>Step Functions Parallel state</strong> gọi hai model cùng lúc, thời gian bằng nhánh chậm nhất, rồi Lambda gộp JSON.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — một prompt cho cả hai chính là vấn đề đã nêu (tăng latency/cost), không dùng model chuyên biệt.</li><li><strong>B</strong>: ❌ Sai — Intelligent Prompt Routing chọn một model cho mỗi request, không tạo hai artifact từ hai model.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — song song nhưng SQS, S3 và polling thêm độ trễ.</li><li><strong>D</strong>: ✅ Đúng — song song, đồng bộ, gộp kết quả.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Parallel state</li><li>Specialized FMs</li><li>Prompt chaining/parallel</li><li>Lowest latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp các tác vụ FM độc lập cần giảm latency → nghĩ ngay đến <strong>Step Functions Parallel</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 31,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>Invoke a single large FM in Amazon Bedrock and prompt it to return both the customer-ready response and the troubleshooting checklist in a single JSON response.</p>",
              "correct": false,
              "feedback": "<p>This uses only one FM call and does not coordinate specialized FMs. It also tends to increase token usage and latency because the model must generate both outputs in one completion.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock Intelligent Prompt Routing so Bedrock automatically selects the best model for each ticket and returns a single response that includes both artifacts.</p>",
              "correct": false,
              "feedback": "<p>Prompt routing selects a model for a request but does not coordinate multiple specialized models to produce multiple artifacts concurrently, and it does not provide an aggregation step to combine outputs from multiple model invocations.</p>"
            },
            {
              "choice": "<p>Send each ticket to an Amazon SQS queue and use two separate AWS Lambda consumers to invoke different Amazon Bedrock models. Store results in Amazon S3 and have the frontend poll for completion.</p>",
              "correct": false,
              "feedback": "<p>This design is asynchronous and introduces additional waiting and polling time, increasing end-to-end latency. It also shifts coordination complexity to the application layer instead of using an orchestration workflow designed for coordinated multi-model execution.</p>"
            },
            {
              "choice": "<p>Use AWS Step Functions with a Parallel state that invokes two different Amazon Bedrock models at the same time (one optimized for concise summaries and one optimized for detailed responses). Use a final AWS Lambda task to merge both outputs into a single JSON payload.</p>",
              "correct": true,
              "feedback": "<p>This implements a model coordination system: two specialized FMs run concurrently to minimize total wall-clock time, and a final aggregation step combines the outputs into one response. Step Functions provides managed orchestration and supports service integrations for invoking Bedrock models, while Lambda can implement the custom aggregation logic.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 31,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key requirement is coordinating multiple specialized FMs and combining their outputs while minimizing latency. Running the two model invocations in parallel reduces the critical path because both artifacts are generated at the same time. A final aggregation step (for example, a Lambda function) can deterministically assemble the customer-facing response and the internal checklist into a single JSON payload. Orchestrating this with Step Functions provides a managed coordination layer with built-in state management, error handling, and observability, which is well suited for multi-model “orchestrator + workers + synthesizer” patterns.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This uses only one FM call and does not coordinate specialized FMs. It also tends to increase token usage and latency because the model must generate both outputs in one completion.<br/>• <strong>B</strong>: ❌ Prompt routing selects a model for a request but does not coordinate multiple specialized models to produce multiple artifacts concurrently, and it does not provide an aggregation step to combine outputs from multiple model invocations.<br/>• <strong>C</strong>: ❌ This design is asynchronous and introduces additional waiting and polling time, increasing end-to-end latency. It also shifts coordination complexity to the application layer instead of using an orchestration workflow designed for coordinated multi-model execution.<br/>• <strong>D</strong>: ✅ This implements a model coordination system: two specialized FMs run concurrently to minimize total wall-clock time, and a final aggregation step combines the outputs into one response. Step Functions provides managed orchestration and supports service integrations for invoking Bedrock models, while Lambda can implement the custom aggregation logic.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/state-parallel.html\">Parallel workflow state - AWS Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-bedrock.html\">Invoke and customize Amazon Bedrock models with Step Functions - AWS Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/orchestrate-generative-ai-workflows-with-amazon-bedrock-and-aws-step-functions/\">Orchestrate generative AI workflows with Amazon Bedrock and AWS Step Functions | Artificial Intelligence (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineering team is reviewing an internal customer-support chatbot that uses an Amazon Bedrock agent with action groups (AWS Lambda tools) to look up account details and open support tickets. During a pilot, testers were able to craft prompts such as “ignore previous instructions” to attempt to override tool-use rules and to extract the agent’s hidden instructions. The team wants to add real-time protection against prompt injection and jailbreak attempts and also run automated adversarial tests whenever the team updates prompt templates, with the LEAST operational overhead.</p><p>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chống prompt injection/jailbreak theo thời gian thực cho Bedrock agent và tự động chạy adversarial test mỗi khi đổi prompt template.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong> nhưng phải phủ cả hai yêu cầu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Guardrails</strong> (<strong>prompt attack filter</strong>) + lớp Lambda tiền xử lý tạo defense-in-depth runtime; Step Functions chạy bộ adversarial prompt theo pipeline và cảnh báo qua CloudWatch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fine-tune tốn công, không bảo vệ tuyệt đối và không có test tự động.</li><li><strong>B</strong>: ❌ Sai — WAF/SQLi/XSS và schema validation không nhận diện prompt injection ngữ nghĩa.</li><li><strong>C</strong>: ✅ Đúng — bảo vệ runtime và kiểm thử đối kháng tự động.</li><li><strong>D</strong>: ❌ Sai — chỉ versioning/audit, điều tra thủ công, không bảo vệ real-time.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails prompt attack filter</li><li>Adversarial testing</li><li>Defense in depth</li><li>Step Functions pipeline</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt injection/jailbreak → nghĩ ngay đến <strong>Bedrock Guardrails</strong> + <strong>red-team test</strong> tự động.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 32,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>Fine-tune a custom foundation model to refuse requests that attempt to override instructions. Deploy the fine-tuned model and require all chatbot requests to use only the fine-tuned model.</p>",
              "correct": false,
              "feedback": "<p>This approach adds significant cost and operational effort, and it relies on model customization rather than implementing threat detection mechanisms and automated adversarial testing workflows around the application. Additionally, model development and training activities are not the focus for this exam role.</p>"
            },
            {
              "choice": "<p>Configure Amazon API Gateway request validation with a JSON Schema to enforce required fields and maximum request size. Enable AWS WAF managed rules for SQL injection and cross-site scripting (XSS) on the API Gateway endpoint.</p>",
              "correct": false,
              "feedback": "<p>API Gateway schema validation and AWS WAF managed rules help protect web APIs, but they do not reliably detect or mitigate LLM-specific threats such as prompt injection, jailbreak attempts, or instruction leakage. They also do not provide an automated adversarial testing workflow for prompt updates.</p>"
            },
            {
              "choice": "<p>Attach Amazon Bedrock Guardrails to the agent invocation. Add a Lambda pre-processing layer that sanitizes user input and detects common prompt-injection and jailbreak patterns (for example, with pattern matching and named entity recognition). Use AWS Step Functions to run a scheduled or pipeline-triggered adversarial prompt suite against the deployed prompts and publish failures to Amazon CloudWatch for alerting.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Guardrails provide a managed safety control plane for filtering and policy enforcement, and a Lambda pre-processing layer enables targeted detection and sanitization for adversarial prompt patterns before the request reaches the model or tools. Step Functions provides a serverless orchestration layer to automate adversarial testing (for example, running a curated set of jailbreak prompts against new prompt versions) and can integrate with CloudWatch for monitoring and alerting, minimizing operational overhead while adding defense-in-depth.</p>"
            },
            {
              "choice": "<p>Store prompts in Amazon Bedrock Prompt Management with versioning and approval workflows. Enable AWS CloudTrail and Amazon CloudWatch Logs for full request auditing and investigate suspicious prompts manually.</p>",
              "correct": false,
              "feedback": "<p>Prompt Management and audit logs improve governance and traceability, but they do not provide active, real-time detection and blocking of prompt injection and jailbreak attempts. Manual investigation does not satisfy the requirement for automated adversarial testing when prompts change.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 32,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The best approach combines managed safety controls with application-layer defenses and continuous validation. Bedrock Guardrails can be applied at invocation time to enforce content and policy controls consistently. A Lambda pre-processing step can sanitize and classify inputs to detect prompt-injection and jailbreak patterns before the agent executes tool calls, reducing the chance of adversarial instructions reaching the model or tools. A Step Functions workflow can then automate adversarial testing by replaying a known suite of attack prompts whenever prompts are updated (or on a schedule), and it can emit results to CloudWatch for alerting and regression monitoring. The other approaches either focus on generic API protections, provide only auditing without prevention, or shift to heavy model customization instead of implementing threat detection and testing workflows.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach adds significant cost and operational effort, and it relies on model customization rather than implementing threat detection mechanisms and automated adversarial testing workflows around the application. Additionally, model development and training activities are not the focus for this exam role.<br/>• <strong>B</strong>: ❌ API Gateway schema validation and AWS WAF managed rules help protect web APIs, but they do not reliably detect or mitigate LLM-specific threats such as prompt injection, jailbreak attempts, or instruction leakage. They also do not provide an automated adversarial testing workflow for prompt updates.<br/>• <strong>C</strong>: ✅ Bedrock Guardrails provide a managed safety control plane for filtering and policy enforcement, and a Lambda pre-processing layer enables targeted detection and sanitization for adversarial prompt patterns before the request reaches the model or tools. Step Functions provides a serverless orchestration layer to automate adversarial testing (for example, running a curated set of jailbreak prompts against new prompt versions) and can integrate with CloudWatch for monitoring and alerting, minimizing operational overhead while adding defense-in-depth.<br/>• <strong>D</strong>: ❌ Prompt Management and audit logs improve governance and traceability, but they do not provide active, real-time detection and blocking of prompt injection and jailbreak attempts. Manual investigation does not satisfy the requirement for automated adversarial testing when prompts change.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-injection.html\">Prompt injection security - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-test.html\">Test your guardrail - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-add.html\">Add an action group to your agent in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SaaS provider is building a customer-support chat application that uses the Amazon Bedrock Converse API with a single FM. The application stores full conversation history in Amazon DynamoDB and uses an Amazon Bedrock Knowledge Base for RAG. As usage grows, the company’s Bedrock spend increases sharply, and some requests fail when the prompt exceeds the model’s context window.</p><p>The company wants to reduce token-related costs while preserving answer quality.</p><p>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chi phí token tăng mạnh, request lỗi do vượt context window; cần giảm token mà vẫn giữ chất lượng.</li><li>Phải chọn đúng 2 hành động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>B kiểm soát đầu vào chủ động bằng <strong>CountTokens</strong>, cắt bớt lượt cũ/chunk RAG và theo dõi token trên CloudWatch. D nén lịch sử bằng summary nên prompt ngắn nhưng vẫn giữ ngữ cảnh, kèm giới hạn <strong>maxTokens</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — provisioned throughput và latency-optimized không giảm giá theo token và không chống tràn context.</li><li><strong>B</strong>: ✅ Đúng — đo và kiểm soát token budget, pruning, monitoring.</li><li><strong>C</strong>: ❌ Sai — chunk lớn hơn và bỏ metadata filter làm tăng token, giảm độ chính xác.</li><li><strong>D</strong>: ✅ Đúng — rolling summary giảm token, giữ turn gần nhất.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — caching giảm giá phần prefix, nhưng vẫn giữ nguyên lịch sử/chunk nên không giải quyết context overflow.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CountTokens</li><li>Conversation summarization</li><li>Token budget, maxTokens</li><li>Context window</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp token cost + context overflow → nghĩ ngay đến <strong>đếm token</strong>, <strong>cắt/tóm tắt lịch sử</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 33,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>Enable Amazon Bedrock provisioned throughput and use the latency-optimized performance configuration for the FM to reduce per-request token costs and prevent context-window overflow errors during peak traffic.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput and latency-optimized configurations address throughput and latency, not prompt size. They do not reduce the number of input or output tokens sent to the model and therefore do not directly fix context-window overflows caused by oversized prompts.</p>"
            },
            {
              "choice": "<p>Before each model invocation, call the Amazon Bedrock CountTokens API to estimate total input size. If the request exceeds a token budget, prune older conversation turns and reduce the number of retrieved chunks from the knowledge base. Publish input and output token counts to Amazon CloudWatch for ongoing tracking.</p>",
              "correct": true,
              "feedback": "<p>Using CountTokens provides a low-cost way to estimate token usage before inference. Pruning conversation history and limiting the number of retrieved RAG chunks reduces input tokens while still keeping the most relevant context. Tracking token counts in CloudWatch enables continuous optimization and quick detection of regressions in prompt size or response verbosity.</p>"
            },
            {
              "choice": "<p>Increase the knowledge base chunk size so that fewer chunks are retrieved, and disable metadata-based filtering to avoid excluding potentially relevant content. Send the larger chunks to the FM to preserve answer quality.</p>",
              "correct": false,
              "feedback": "<p>Increasing chunk size can increase the total number of tokens included per retrieved result, which can raise input token usage and worsen context-window overflow. Disabling metadata filtering can also introduce irrelevant context, reducing answer quality and increasing tokens spent on noise.</p>"
            },
            {
              "choice": "<p>Implement prompt compression by using a smaller FM to summarize older conversation history into a short running summary that is stored in DynamoDB. Include only the summary plus the most recent turns in each request and set maxTokens to limit response size.</p>",
              "correct": true,
              "feedback": "<p>Summarizing older chat history reduces the number of tokens that must be sent on every request while preserving key information needed for quality responses. Including only recent turns maintains conversational relevance. Setting maxTokens provides response size control to prevent unexpectedly large outputs from increasing cost.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock prompt caching for the application’s system prompt and few-shot examples so the cached prefix is discounted. Keep the full conversation history and the same number of retrieved RAG chunks in every request.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching can reduce costs for repeated static prompt prefixes, but it does not reduce the prompt’s token count. Keeping the full conversation history and large RAG context still risks context-window overflow and continues to send excessive dynamic tokens that cannot be cached.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 33,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most effective token-efficiency approaches reduce how many tokens are included in each request while preserving the information needed for accurate answers. Estimating tokens before invocation enables enforcing a token budget and applying deterministic reductions such as pruning conversation history and limiting retrieved RAG context. Prompt compression through summarization is another high-impact technique: it replaces long histories with a compact summary plus recent turns, and response limiting prevents large completions from driving up cost. Options focused on performance/throughput settings or on caching without reducing dynamic context do not reliably prevent context-window overflows or meaningfully lower token-driven spend for this workload.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Provisioned throughput and latency-optimized configurations address throughput and latency, not prompt size. They do not reduce the number of input or output tokens sent to the model and therefore do not directly fix context-window overflows caused by oversized prompts.<br/>• <strong>B</strong>: ✅ Using CountTokens provides a low-cost way to estimate token usage before inference. Pruning conversation history and limiting the number of retrieved RAG chunks reduces input tokens while still keeping the most relevant context. Tracking token counts in CloudWatch enables continuous optimization and quick detection of regressions in prompt size or response verbosity.<br/>• <strong>C</strong>: ❌ Increasing chunk size can increase the total number of tokens included per retrieved result, which can raise input token usage and worsen context-window overflow. Disabling metadata filtering can also introduce irrelevant context, reducing answer quality and increasing tokens spent on noise.<br/>• <strong>D</strong>: ✅ Summarizing older chat history reduces the number of tokens that must be sent on every request while preserving key information needed for quality responses. Including only recent turns maintains conversational relevance. Setting maxTokens provides response size control to prevent unexpectedly large outputs from increasing cost.<br/>• <strong>E</strong>: ❌ Prompt caching can reduce costs for repeated static prompt prefixes, but it does not reduce the prompt’s token count. Keeping the full conversation history and large RAG context still risks context-window overflow and continues to send excessive dynamic tokens that cannot be cached.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/count-tokens.html\">Monitor your token usage by counting tokens before running inference - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve.html\">Query a knowledge base and retrieve data - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/dotnet/building-context-aware-generative-ai-chatbot-using-amazon-bedrock-and-langchain-in-net/\">Build a .NET Context-Aware Generative AI Chatbot using Amazon Bedrock and LangChain | .NET on AWS Blog (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, D"
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is building a generative AI feature that summarizes long articles by using Amazon Bedrock. The team regularly runs Amazon Bedrock Model Evaluations on a fixed prompt dataset to compare two candidate FMs and track metrics such as correctness, helpfulness, and logical coherence over time. Product stakeholders want a recurring, easy-to-consume report that highlights trends and provides clear model comparison visualizations without requiring engineers to manually compile results each week.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Báo cáo định kỳ, dễ đọc cho stakeholder từ kết quả Bedrock Model Evaluations (correctness, helpfulness, coherence), có trend và so sánh model.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, không compile thủ công.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Kết quả evaluation nằm sẵn trên S3. Glue crawler + Data Catalog + Athena + <strong>Amazon QuickSight</strong> tạo dashboard/báo cáo tự cập nhật, serverless.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — metrics invocation của CloudWatch không chứa điểm evaluation; thêm Firehose/OpenSearch phải vận hành.</li><li><strong>B</strong>: ❌ Sai — Logs Insights chỉ cho latency/token, gửi screenshot thủ công.</li><li><strong>C</strong>: ✅ Đúng — S3 + Glue + Athena + QuickSight.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda tự parse, email SNS không có visualization và trend.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Evaluations output on S3</li><li>Glue Data Catalog + Athena</li><li>QuickSight dashboard</li><li>Stakeholder reporting</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp báo cáo/visualization từ dữ liệu trên S3 → nghĩ ngay đến <strong>Athena</strong> + <strong>QuickSight</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>Stream Amazon CloudWatch metrics for Bedrock invocations to Amazon Kinesis Data Firehose and index them into Amazon OpenSearch Service. Use OpenSearch Dashboards to create weekly model-comparison reports for stakeholders.</p>",
              "correct": false,
              "feedback": "<p>This approach focuses on operational telemetry and requires provisioning and managing search/analytics infrastructure (OpenSearch) and ingestion pipelines. It also does not directly address reporting on Bedrock Model Evaluations results and adds unnecessary operational complexity compared to a serverless analytics + BI reporting pattern.</p>"
            },
            {
              "choice": "<p>Use Amazon CloudWatch Logs Insights to query Amazon Bedrock invocation logs for latency and token usage. Create Amazon CloudWatch dashboards and have engineers share exported dashboard screenshots in a weekly email.</p>",
              "correct": false,
              "feedback": "<p>CloudWatch dashboards are useful for operational monitoring, but this approach requires manual compilation and distribution of results, which violates the requirement to avoid manual weekly reporting. It also does not inherently provide model evaluation comparison visualizations for stakeholder reporting.</p>"
            },
            {
              "choice": "<p>Store Bedrock model evaluation outputs in Amazon S3. Use an AWS Glue crawler to create/update table definitions in the AWS Glue Data Catalog. Query the results with Amazon Athena and publish stakeholder-facing dashboards and reports in Amazon QuickSight.</p>",
              "correct": true,
              "feedback": "<p>Bedrock evaluation results can be centrally stored in S3, then made queryable through the Glue Data Catalog and Athena. QuickSight is purpose-built for business analytics and provides shareable dashboards and reporting views that can clearly communicate trends and comparisons to non-engineering stakeholders. This design minimizes operational overhead by relying on managed, serverless services for storage, querying, and visualization.</p>"
            },
            {
              "choice": "<p>Create an AWS Lambda function that parses each evaluation output file and writes summarized metrics into Amazon DynamoDB. Use Amazon SNS to email the summarized metrics to stakeholders every week.</p>",
              "correct": false,
              "feedback": "<p>While this can automate distribution, it does not provide comprehensive, stakeholder-friendly visualization and model comparison reporting. It also introduces custom code and data modeling that is unnecessary when managed analytics and visualization services can present trends and comparisons more effectively.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 34,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-operations reporting system for FM implementations typically separates storage, analytics, and visualization. Amazon Bedrock Model Evaluations can produce structured outputs that are easy to store in Amazon S3. Registering that data through the AWS Glue Data Catalog makes it straightforward to query with Amazon Athena. Amazon QuickSight then provides the stakeholder-friendly layer for dashboards and reports, enabling clear model comparison visualizations and trend reporting without engineers manually assembling weekly summaries. Alternatives either add operational burden (building and operating ingestion/search stacks), rely on manual steps (sharing screenshots), or lack appropriate visualization and comparison capabilities (email-only summaries).<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach focuses on operational telemetry and requires provisioning and managing search/analytics infrastructure (OpenSearch) and ingestion pipelines. It also does not directly address reporting on Bedrock Model Evaluations results and adds unnecessary operational complexity compared to a serverless analytics + BI reporting pattern.<br/>• <strong>B</strong>: ❌ CloudWatch dashboards are useful for operational monitoring, but this approach requires manual compilation and distribution of results, which violates the requirement to avoid manual weekly reporting. It also does not inherently provide model evaluation comparison visualizations for stakeholder reporting.<br/>• <strong>C</strong>: ✅ Bedrock evaluation results can be centrally stored in S3, then made queryable through the Glue Data Catalog and Athena. QuickSight is purpose-built for business analytics and provides shareable dashboards and reporting views that can clearly communicate trends and comparisons to non-engineering stakeholders. This design minimizes operational overhead by relying on managed, serverless services for storage, querying, and visualization.<br/>• <strong>D</strong>: ❌ While this can automate distribution, it does not provide comprehensive, stakeholder-friendly visualization and model comparison reporting. It also introduces custom code and data modeling that is unnecessary when managed analytics and visualization services can present trends and comparisons more effectively.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-report-s3.html\">Understand how the results of your model evaluation job are saved in Amazon S3 - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html\">Using crawlers to populate the Data Catalog - AWS Glue (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/quicksight/latest/user/create-a-data-set-athena.html\">Creating a dataset using Amazon Athena data - Amazon QuickSight (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retailer is building a customer-facing chat experience that uses Amazon Bedrock LLMs. The team wants to route each user message to a low-latency model for simple requests and to a higher-quality model for complex requests. During traffic spikes, the higher-quality model occasionally experiences throttling, and the team wants requests to automatically fall back to the low-latency model when throttling or high latency is detected. The team also wants a clear audit trail of how each request was routed.</p><p>Which solution will meet these requirements with the LEAST custom application logic?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Định tuyến theo độ phức tạp, fallback tự động khi throttle/latency cao, có audit trail cho từng quyết định.</li><li>Ưu tiên: <strong>LEAST custom application logic</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions</strong> biểu diễn routing bằng workflow: bước phân loại, <strong>Choice state</strong>, Retry/Catch với nhánh fallback, execution history là audit trail sẵn có, không cần code điều phối.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — chạy được nhưng toàn bộ routing/retry/fallback là code tự viết.</li><li><strong>B</strong>: ❌ Sai — client tự chọn endpoint, không có fallback tự động khi throttle.</li><li><strong>C</strong>: ❌ Sai — cross-Region inference profile cân bằng tải, không chọn model theo độ phức tạp hay fallback sang model khác.</li><li><strong>D</strong>: ✅ Đúng — workflow managed, logic khai báo, có audit.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Choice state</li><li>Retry/Catch fallback</li><li>Execution history</li><li>Model routing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp routing + fallback + audit mà ít code → nghĩ ngay đến <strong>Step Functions</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>Implement all routing in application code inside a single AWS Lambda function. The function calls Amazon Bedrock, checks for throttling errors, retries with exponential backoff, and then calls a different model if throttling persists. Log routing decisions to Amazon CloudWatch Logs.</p>",
              "correct": false,
              "feedback": "<p>Although feasible, this approach requires more custom logic to implement orchestration, branching, retries, and audit semantics in code. It also provides a less structured audit trail than an orchestrated workflow that records state transitions and decisions.</p>"
            },
            {
              "choice": "<p>Create two Amazon API Gateway endpoints (for example, /fast and /accurate). Configure the client application to call the appropriate endpoint based on request complexity. Use separate AWS Lambda integrations to invoke the corresponding Bedrock model.</p>",
              "correct": false,
              "feedback": "<p>This pushes routing decisions to the client and does not provide automatic fallback based on throttling or latency conditions. It also increases client complexity and does not inherently provide a centralized, auditable routing workflow.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock cross-Region inference and create an inference profile so Bedrock automatically distributes requests. Use a single modelId in the application and rely on the inference profile to handle both complexity-based model selection and throttling fallback.</p>",
              "correct": false,
              "feedback": "<p>Cross-Region inference helps with distributing inference across Regions, but it does not implement content-based routing across different models for “simple vs complex” requests. It also does not provide an auditable routing workflow that shows why a different model was selected.</p>"
            },
            {
              "choice": "<p>Use Amazon API Gateway to invoke an AWS Step Functions state machine. In the state machine, run a classification step to determine request complexity, then use Choice states to route to the appropriate Amazon Bedrock InvokeModel task. Add retry logic and a fallback branch that routes to the low-latency model when throttling or latency thresholds are exceeded, and store routing outcomes in the execution history.</p>",
              "correct": true,
              "feedback": "<p>Step Functions provides a managed orchestration layer for dynamic, content-based model routing and can implement conditional branching, retries, and fallback behavior. The execution history provides an audit trail of routing decisions and outcomes with minimal custom code beyond small classification/threshold checks.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 35,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A good model-routing design needs two decision points: determine the best model for the request content (simple vs complex) and determine whether operational conditions require a fallback (for example, throttling or elevated latency). A Step Functions workflow is well-suited to this because it can orchestrate a classification step, branch to specialized model invocations, apply retries and fallback paths, and preserve an end-to-end record of decisions and outcomes through execution history. Client-driven routing does not satisfy automatic fallback requirements, a single Lambda-based router increases custom code and reduces structured traceability, and cross-Region inference addresses Regional capacity—not routing between different models based on content and runtime conditions.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Although feasible, this approach requires more custom logic to implement orchestration, branching, retries, and audit semantics in code. It also provides a less structured audit trail than an orchestrated workflow that records state transitions and decisions.<br/>• <strong>B</strong>: ❌ This pushes routing decisions to the client and does not provide automatic fallback based on throttling or latency conditions. It also increases client complexity and does not inherently provide a centralized, auditable routing workflow.<br/>• <strong>C</strong>: ❌ Cross-Region inference helps with distributing inference across Regions, but it does not implement content-based routing across different models for “simple vs complex” requests. It also does not provide an auditable routing workflow that shows why a different model was selected.<br/>• <strong>D</strong>: ✅ Step Functions provides a managed orchestration layer for dynamic, content-based model routing and can implement conditional branching, retries, and fallback behavior. The execution history provides an audit trail of routing decisions and outcomes with minimal custom code beyond small classification/threshold checks.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-bedrock.html\">Invoke and customize Amazon Bedrock models with Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html\">Handling errors in Step Functions workflows (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html\">Viewing execution details in the Step Functions console (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SaaS provider is building an internal GenAI assistant that must call existing operational tools through Model Context Protocol (MCP) so multiple agent frameworks can reuse the same tool interface. One tool is a simple, stateless lookup that returns small JSON responses. Another tool performs CPU-intensive document processing that relies on native libraries and requires a longer-running process. The team wants a design that uses MCP consistently while keeping operational overhead LOW.</p><p>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dùng MCP nhất quán cho nhiều agent framework, với hai tool khác tính chất: lookup nhẹ stateless và xử lý nặng cần native library, chạy lâu.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chọn compute phù hợp từng tool: <strong>Lambda</strong> cho tool nhẹ/stateless, <strong>ECS trên Fargate</strong> cho tool chạy lâu cần native libraries; cả hai đều serverless và cùng expose qua MCP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — EKS và operators là overhead rất lớn.</li><li><strong>B</strong>: ❌ Sai — bỏ MCP, trái yêu cầu dùng MCP nhất quán.</li><li><strong>C</strong>: ✅ Đúng — đúng compute cho từng tool, vẫn dùng MCP.</li><li><strong>D</strong>: ❌ Sai — một EC2 phải tự quản dependency, scale dọc, single point of failure.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Context Protocol (MCP)</li><li>Lambda MCP server</li><li>ECS Fargate</li><li>Right compute for the workload</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tool nhẹ → <strong>Lambda</strong>; tool nặng/chạy lâu/native lib → <strong>Fargate</strong>, vẫn qua MCP.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 36,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>Deploy both tools as MCP servers on Amazon EKS and use Kubernetes operators to manage scaling, upgrades, and networking for the MCP services.</p>",
              "correct": false,
              "feedback": "<p>EKS can host MCP servers, but it introduces significantly more operational overhead than Lambda and ECS with Fargate (cluster lifecycle management, add-ons, networking, and upgrades). This conflicts with the requirement to minimize operational overhead.</p>"
            },
            {
              "choice": "<p>Implement both tools as AWS Lambda functions that the agent invokes directly with the AWS SDK. Use shared utility code in the agent to normalize inputs and outputs instead of MCP.</p>",
              "correct": false,
              "feedback": "<p>This bypasses MCP, so the tools are not exposed through a standardized MCP interface. It also increases ongoing integration burden because each agent framework must implement and maintain custom invocation and schema-handling logic rather than relying on MCP client libraries.</p>"
            },
            {
              "choice": "<p>Implement the stateless lookup tool as a Lambda-based MCP server. Implement the document-processing tool as an MCP server running on Amazon ECS with AWS Fargate. Use MCP client libraries in each agent to call both MCP servers through a consistent interface.</p>",
              "correct": true,
              "feedback": "<p>A Lambda-based MCP server is well suited for lightweight, stateless tool access with minimal infrastructure management. A container-based MCP server on ECS (with Fargate) is better for complex tools that need native dependencies and longer-running execution. Using MCP client libraries in the agents standardizes access patterns across frameworks and avoids building custom per-tool integrations.</p>"
            },
            {
              "choice": "<p>Deploy a single MCP server on Amazon EC2 that hosts both tools and exposes them over HTTP streaming. Install and manage all dependencies on the EC2 instance and scale the instance vertically as demand grows.</p>",
              "correct": false,
              "feedback": "<p>While this could provide MCP access, it increases operational overhead (instance management, patching, scaling strategy, and dependency management). It also creates a single-host design that is harder to scale and operate compared to serverless and managed container options.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 36,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A practical MCP-based extension framework typically separates lightweight, stateless tools from complex tools with heavier runtime requirements. Stateless tools map well to AWS Lambda because there are no servers to manage and scaling is automatic. Tools that need native libraries, larger dependency trees, or longer-running execution are better packaged as containers and run on Amazon ECS with AWS Fargate to avoid managing EC2 hosts. Using MCP client libraries in the agents preserves a consistent, reusable access pattern across different agent frameworks and reduces custom integration work.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ EKS can host MCP servers, but it introduces significantly more operational overhead than Lambda and ECS with Fargate (cluster lifecycle management, add-ons, networking, and upgrades). This conflicts with the requirement to minimize operational overhead.<br/>• <strong>B</strong>: ❌ This bypasses MCP, so the tools are not exposed through a standardized MCP interface. It also increases ongoing integration burden because each agent framework must implement and maintain custom invocation and schema-handling logic rather than relying on MCP client libraries.<br/>• <strong>C</strong>: ✅ A Lambda-based MCP server is well suited for lightweight, stateless tool access with minimal infrastructure management. A container-based MCP server on ECS (with Fargate) is better for complex tools that need native dependencies and longer-running execution. Using MCP client libraries in the agents standardizes access patterns across frameworks and avoids building custom per-tool integrations.<br/>• <strong>D</strong>: ❌ While this could provide MCP access, it increases operational overhead (instance management, patching, scaling strategy, and dependency management). It also creates a single-host design that is harder to scale and operate compared to serverless and managed container options.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/devops/flexibility-to-framework-building-mcp-servers-with-controlled-tool-orchestration/\">Flexibility to Framework: Building MCP Servers with Controlled Tool Orchestration (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\">What is AWS Lambda? (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html\">Architect for AWS Fargate for Amazon ECS (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech startup is building a GenAI feature that is used by two clients: a mobile app and an internal microservice running on Amazon ECS. For short, interactive prompts, users must receive a response immediately. For long-running requests (such as summarizing multi-page documents), the startup is willing to let users retrieve the result later. The startup also wants a single, stable API in front of the solution that validates required JSON fields before the request is processed, with the LEAST operational overhead.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một API ổn định cho 2 client, validate JSON field trước khi xử lý, request ngắn trả ngay, request dài xử lý bất đồng bộ lấy kết quả sau.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>API Gateway</strong> có <strong>request validator</strong> + JSON schema model sẵn. Request ngắn đi Lambda đồng bộ; request dài vào <strong>SQS</strong>, trả job ID, worker Lambda xử lý và lưu kết quả để lấy sau.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ sync/async, validation managed, serverless.</li><li><strong>B</strong>: ❌ Sai — không có API tập trung, validate ở từng client, long-running gọi trực tiếp.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — ALB + ECS phải vận hành và tự viết validation.</li><li><strong>D</strong>: ❌ Sai — gọi trực tiếp từ client, ghép kết quả ở client, không có API ổn định để validate.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway request validator</li><li>JSON schema model</li><li>SQS + job ID</li><li>Sync vs async</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp validate request tại API + xử lý dài hạn → nghĩ ngay đến <strong>API Gateway validator</strong> + <strong>SQS/Lambda</strong> async.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 37,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>Create an Amazon API Gateway REST API with a request validator and JSON schema model. For synchronous requests, invoke an AWS Lambda function that calls the Amazon Bedrock Runtime (bedrock-runtime) API. For long-running requests, the Lambda function places a message on an Amazon SQS queue and returns a job ID. A second Lambda function polls the queue, invokes the Bedrock Runtime API, and stores the result for later retrieval.</p>",
              "correct": true,
              "feedback": "<p>API Gateway provides a single front door for multiple client types and can validate request payloads with a request validator and schema. Using Bedrock Runtime APIs from Lambda supports synchronous inference for interactive use cases. For long-running work, SQS decouples ingestion from processing, buffers bursts, and enables reliable asynchronous processing with a separate consumer Lambda that invokes Bedrock and stores results for later retrieval.</p>"
            },
            {
              "choice": "<p>Use Amazon Cognito to issue temporary credentials to the mobile app and the ECS service. Have both clients call the Amazon Bedrock Runtime (bedrock-runtime) API directly for all prompts, including long-running document summarization. Perform JSON field validation in each client application before invoking the model.</p>",
              "correct": false,
              "feedback": "<p>This does not provide a single stable API layer with centrally managed request validation; each client must implement validation logic independently. It also does not provide an asynchronous processing mechanism for long-running requests, which can lead to poor user experience and operational challenges during bursts.</p>"
            },
            {
              "choice": "<p>Create an Application Load Balancer (ALB) in front of an Amazon ECS service that validates requests and invokes the Amazon Bedrock Runtime API. For long-running requests, start an AWS Step Functions workflow that calls Bedrock and returns the final response when the workflow completes.</p>",
              "correct": false,
              "feedback": "<p>This approach adds operational overhead by introducing and operating an ECS service for request validation and orchestration logic. It also does not align with the requirement to let users retrieve results later; returning the final response only after the workflow completes is still a synchronous interaction pattern for the long-running path.</p>"
            },
            {
              "choice": "<p>Store prompt templates and model IDs in AWS AppConfig. Have the mobile app and the ECS service read the configuration at startup and then invoke the Amazon Bedrock Runtime API directly. Use Amazon SNS to trigger multiple Lambda functions to summarize different sections of each document in parallel and combine the results in the client.</p>",
              "correct": false,
              "feedback": "<p>AppConfig helps with dynamic configuration, but it does not provide a unified API surface with request validation. SNS fanout and client-side aggregation increases complexity and shifts orchestration responsibilities to clients instead of using a straightforward asynchronous queue-based processing pattern.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 37,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most flexible pattern for model interactions is to present a consistent, validated API surface to all callers while choosing synchronous or asynchronous execution based on the workload. API Gateway provides a stable endpoint and native request validation so malformed requests are rejected early. For immediate responses, a Lambda function can invoke Amazon Bedrock through the Bedrock Runtime APIs. For long-running jobs, placing work on Amazon SQS decouples ingestion from processing, absorbs traffic spikes, and lets a separate consumer invoke the model and persist results for later retrieval. Alternatives either force all calls to be synchronous, duplicate validation logic across clients, or introduce unnecessary operational complexity.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ API Gateway provides a single front door for multiple client types and can validate request payloads with a request validator and schema. Using Bedrock Runtime APIs from Lambda supports synchronous inference for interactive use cases. For long-running work, SQS decouples ingestion from processing, buffers bursts, and enables reliable asynchronous processing with a separate consumer Lambda that invokes Bedrock and stores results for later retrieval.<br/>• <strong>B</strong>: ❌ This does not provide a single stable API layer with centrally managed request validation; each client must implement validation logic independently. It also does not provide an asynchronous processing mechanism for long-running requests, which can lead to poor user experience and operational challenges during bursts.<br/>• <strong>C</strong>: ❌ This approach adds operational overhead by introducing and operating an ECS service for request validation and orchestration logic. It also does not align with the requirement to let users retrieve results later; returning the final response only after the workflow completes is still a synchronous interaction pattern for the long-running path.<br/>• <strong>D</strong>: ❌ AppConfig helps with dynamic configuration, but it does not provide a unified API surface with request validation. SNS fanout and client-side aggregation increases complexity and shifts orchestration responsibilities to clients instead of using a straightforward asynchronous queue-based processing pattern.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">Request validation for REST APIs in API Gateway - Amazon API Gateway (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html\">Using Lambda with Amazon SQS - AWS Lambda (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech company’s GenAI team is building an internal assistant that generates short compliance summaries by invoking an Amazon Bedrock text model. The assistant is called synchronously from an API, and users expect responses in near real time. During predictable weekday peaks, the team receives throttling errors from Bedrock and must increase available throughput while continuing to use the same model and keeping operational overhead low.</p><p>Which deployment approach will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bị throttle vào giờ cao điểm dự đoán được, cần tăng throughput, giữ nguyên model, gọi đồng bộ near real time.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Provisioned throughput</strong> cấp sẵn model units với throughput đảm bảo; chỉ cần đổi modelId sang provisioned model ARN, rất ít thay đổi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tăng throughput đảm bảo, đồng bộ, đổi tối thiểu.</li><li><strong>B</strong>: ❌ Sai — phải tự vận hành endpoint SageMaker, đổi kiến trúc.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — backoff giảm lỗi nhưng không tăng quota, vẫn throttle và tăng latency.</li><li><strong>D</strong>: ❌ Sai — batch inference là bất đồng bộ, không đáp ứng near real time.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Provisioned throughput</li><li>Model units</li><li>Provisioned model ARN</li><li>Predictable peak</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp throttling cho workload đồng bộ, peak dự đoán được → nghĩ ngay đến <strong>Provisioned Throughput</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 38,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>Purchase Amazon Bedrock provisioned throughput for the model and invoke the model by using the provisioned model ARN as the modelId during inference.</p>",
              "correct": true,
              "feedback": "<p>Provisioned throughput is designed to provide consistent, higher throughput for a specific Bedrock model with minimal operational overhead. The application continues to use the Bedrock API, but targets the provisioned model ARN to obtain the reserved capacity and reduce throttling during predictable peaks.</p>"
            },
            {
              "choice": "<p>Deploy a fine-tuned version of the model to an Amazon SageMaker AI real-time endpoint and update the application to invoke the SageMaker endpoint for all requests.</p>",
              "correct": false,
              "feedback": "<p>This introduces additional operational overhead to provision and manage an endpoint and changes the deployment approach away from using the same managed Bedrock model. It also requires the team to manage endpoint scaling and lifecycle rather than simply increasing Bedrock capacity.</p>"
            },
            {
              "choice": "<p>Keep using on-demand model invocation from AWS Lambda and implement exponential backoff and jitter in the AWS SDK client for Bedrock calls.</p>",
              "correct": false,
              "feedback": "<p>Retries can reduce transient failures but do not increase the available throughput for the model. During sustained peak demand, the application can still be throttled because on-demand capacity remains limited by account quotas and service capacity.</p>"
            },
            {
              "choice": "<p>Move summarization to Amazon Bedrock batch inference by uploading prompt files to Amazon S3 and retrieving results from S3 after the batch job completes.</p>",
              "correct": false,
              "feedback": "<p>Batch inference is intended for asynchronous processing and returning results later. It does not meet the near real-time, synchronous response requirement for an interactive assistant.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 38,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Provisioned throughput in Amazon Bedrock is the most direct way to increase and stabilize model throughput for predictable demand while keeping operations simple. It preserves the existing Bedrock integration pattern and avoids building and managing separate hosting infrastructure. Retry strategies help handle transient errors but cannot guarantee additional capacity, and batch inference is not suitable for synchronous interactive use cases. Hosting on SageMaker AI can be appropriate for hybrid or specialized deployments, but it typically introduces more operational responsibility than reserving Bedrock throughput for a managed model.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Provisioned throughput is designed to provide consistent, higher throughput for a specific Bedrock model with minimal operational overhead. The application continues to use the Bedrock API, but targets the provisioned model ARN to obtain the reserved capacity and reduce throttling during predictable peaks.<br/>• <strong>B</strong>: ❌ This introduces additional operational overhead to provision and manage an endpoint and changes the deployment approach away from using the same managed Bedrock model. It also requires the team to manage endpoint scaling and lifecycle rather than simply increasing Bedrock capacity.<br/>• <strong>C</strong>: ❌ Retries can reduce transient failures but do not increase the available throughput for the model. During sustained peak demand, the application can still be throttled because on-demand capacity remains limited by account quotas and service capacity.<br/>• <strong>D</strong>: ❌ Batch inference is intended for asynchronous processing and returning results later. It does not meet the near real-time, synchronous response requirement for an interactive assistant.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html\">Increase model invocation capacity with Provisioned Throughput in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html\">Use a Provisioned Throughput with an Amazon Bedrock resource (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/cli/latest/reference/bedrock-runtime/invoke-model.html\">invoke-model — AWS CLI 2.31.32 Command Reference (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer support SaaS provider is building an internal assistant that uses Amazon Bedrock to draft replies to incoming support tickets. Tickets are ingested from email and chat and often include noisy text such as email signatures, legal disclaimers, and inconsistent formatting. The assistant’s outputs are inconsistent because key details such as product names and case identifiers are not always clearly presented in the prompt.</p><p>The team wants to improve response quality and consistency by enhancing the input text before invoking the FM, without building a custom model. Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cải thiện chất lượng/độ nhất quán bằng cách xử lý input (nhiễu, thiếu thông tin rõ ràng) trước khi gọi FM, không build custom model.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Preprocessing với Lambda + <strong>Amazon Comprehend</strong> trích xuất entity, chuẩn hóa/redact; sau đó model Bedrock reformat ticket theo template chuẩn trước khi sinh reply.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fine-tune là custom model, trái yêu cầu và tốn công.</li><li><strong>B</strong>: ❌ Sai — Guardrails lo an toàn, không làm sạch hay chuẩn hóa input.</li><li><strong>C</strong>: ✅ Đúng — enhance input bằng entity extraction và reformat.</li><li><strong>D</strong>: ❌ Sai — đưa cả lịch sử làm tăng nhiễu và chi phí; temperature 0 không sửa chất lượng input.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Input enhancement</li><li>Amazon Comprehend entity extraction</li><li>Standardized template</li><li>Preprocessing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp input nhiễu cần làm sạch trước FM, không custom model → nghĩ ngay đến <strong>Comprehend</strong> + <strong>preprocessing</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 39,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>Create a fine-tuned Amazon Bedrock custom model by using labeled prompt-completion pairs from historical tickets so the model learns to ignore signatures and always extract product and case identifiers.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning is model customization and introduces significant cost and lifecycle management overhead. The requirement is to improve results without building a custom model.</p>"
            },
            {
              "choice": "<p>Apply Amazon Bedrock Guardrails with PII filtering and topic filters, and pass the raw ticket text directly to the model to ensure safe and compliant outputs.</p>",
              "correct": false,
              "feedback": "<p>Guardrails help filter unsafe content and can mask or remove sensitive data, but they do not reliably normalize the ticket structure or extract key entities to improve input clarity and consistency.</p>"
            },
            {
              "choice": "<p>Add an AWS Lambda preprocessing step that calls Amazon Comprehend to extract key entities (such as product names and case identifiers) and normalize or redact noisy/sensitive content. Then use an Amazon Bedrock text model to reformat the cleaned ticket into a standardized template (for example, consistent sections/fields) before invoking the primary FM to draft the reply.</p>",
              "correct": true,
              "feedback": "<p>This approach improves input data quality by extracting structured signal (entities) and normalizing the text before generation. Using Lambda for preprocessing keeps the integration lightweight, Amazon Comprehend provides consistent entity extraction, and Amazon Bedrock can reformat the cleaned content into a predictable structure, improving response quality and consistency without custom model training.</p>"
            },
            {
              "choice": "<p>Store the raw tickets in Amazon DynamoDB and include the entire ticket history in every prompt. Set the model temperature to 0 to reduce randomness and improve consistency.</p>",
              "correct": false,
              "feedback": "<p>Lowering temperature can reduce randomness, but it does not address poor input quality. Including entire histories increases token usage and can amplify noise (signatures/disclaimers), which can reduce response quality.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 39,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>When an FM receives inconsistent, noisy prompts, output quality and consistency often degrade because important details are buried in irrelevant text. A low-overhead way to address this is to add a preprocessing layer: use AWS Lambda to orchestrate input cleaning, use Amazon Comprehend to extract key entities and help normalize/redact problematic content, and then use an Amazon Bedrock model to rewrite the cleaned ticket into a standard structure. The primary FM then receives a clearer, more consistent prompt, which improves response quality without the additional complexity and cost of model customization.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Fine-tuning is model customization and introduces significant cost and lifecycle management overhead. The requirement is to improve results without building a custom model.<br/>• <strong>B</strong>: ❌ Guardrails help filter unsafe content and can mask or remove sensitive data, but they do not reliably normalize the ticket structure or extract key entities to improve input clarity and consistency.<br/>• <strong>C</strong>: ✅ This approach improves input data quality by extracting structured signal (entities) and normalizing the text before generation. Using Lambda for preprocessing keeps the integration lightweight, Amazon Comprehend provides consistent entity extraction, and Amazon Bedrock can reformat the cleaned content into a predictable structure, improving response quality and consistency without custom model training.<br/>• <strong>D</strong>: ❌ Lowering temperature can reduce randomness, but it does not address poor input quality. Including entire histories increases token usage and can amplify noise (signatures/disclaimers), which can reduce response quality.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectEntities.html\">DetectEntities - Amazon Comprehend API Reference (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\">What is AWS Lambda? - AWS Lambda (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A platform engineering team is building an internal “Ops Copilot” that autonomously troubleshoots application incidents. The team uses AWS Agent Squad to route each user request to one of several specialized Strands agents (for example, an incident triage agent and a runbook agent). Users expect the assistant to remember conversation context within a session and also retain longer-term preferences (for example, preferred service names and escalation rules) across multiple sessions. The team wants a serverless approach that minimizes the amount of custom state-management code they must build and operate.</p><p>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Multi-agent (Agent Squad + Strands) cần nhớ ngữ cảnh trong session và preference dài hạn qua nhiều session, serverless.</li><li>Ưu tiên: tối thiểu code quản lý state, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Bedrock <strong>AgentCore Runtime</strong> chạy agent serverless và <strong>AgentCore Memory</strong> là managed short-term + long-term memory, không phải tự dựng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — chạy được nhưng phải tự viết toàn bộ state logic.</li><li><strong>B</strong>: ❌ Sai — state trong filesystem container mất khi task thay đổi, không chia sẻ giữa các agent.</li><li><strong>C</strong>: ✅ Đúng — runtime + memory managed.</li><li><strong>D</strong>: ❌ Sai — Knowledge Bases dành cho retrieval tài liệu, không phải quản lý memory session.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AgentCore Runtime</li><li>AgentCore Memory</li><li>Short-term vs long-term memory</li><li>Strands agents, Agent Squad</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp agent cần memory session và dài hạn, ít code → nghĩ ngay đến <strong>AgentCore Memory</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 40,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>Store per-session conversation history in Amazon DynamoDB and store long-term preferences as separate DynamoDB items. Pass the session identifier between the routed agents so each agent can fetch and update the state as needed.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB can store chat history and preferences, but the team must design session/event schemas, implement read/write patterns, manage summarization or pruning, and coordinate consistency across multiple agents. This increases custom state-management logic and operational responsibility compared to a managed agent memory capability.</p>"
            },
            {
              "choice": "<p>Deploy the Strands agents on Amazon ECS with AWS Fargate and store state locally in the container file system so agents can reuse memory between requests. Use AWS Agent Squad only for routing decisions.</p>",
              "correct": false,
              "feedback": "<p>Container-local storage is not a durable or shared state store for a multi-agent, horizontally scaled system; tasks can be replaced at any time. This approach also introduces additional container operations compared to a managed, serverless agent runtime with built-in memory services.</p>"
            },
            {
              "choice": "<p>Deploy the routed Strands agents by using Amazon Bedrock AgentCore Agent Runtime and use AgentCore Memory to manage session context and long-term memory records for user preferences that the agents can read and update across sessions.</p>",
              "correct": true,
              "feedback": "<p>AgentCore provides serverless endpoints for agents and includes managed memory capabilities. AgentCore Memory supports session-oriented context (events within a session) and longer-term memory records (such as preferences and summaries), reducing the need to build and operate custom state stores and coordination logic across multiple specialized agents.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases as the system of record for both short-term and long-term memory by writing each conversation turn into the knowledge base and retrieving relevant history for each request.</p>",
              "correct": false,
              "feedback": "<p>Knowledge bases are designed for retrieval augmentation over curated documents and indexed content, not for maintaining structured conversational state and preferences with session semantics. Using a knowledge base for chat memory typically adds latency and requires additional ingestion and retrieval design that does not directly provide session and memory-record abstractions.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 40,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The core challenge is maintaining both short-term conversational state (what was said earlier in the current interaction) and durable long-term memory (user preferences and extracted insights) while coordinating that state across multiple specialized agents selected by a router. A managed agent runtime with built-in memory reduces custom engineering and operational burden because it provides purpose-built abstractions for sessions and long-term memory records, and it avoids building and maintaining bespoke storage schemas, pruning logic, and cross-agent synchronization. Alternatives such as using a general-purpose database, container-local storage, or a retrieval knowledge base can work in limited scenarios, but they either do not provide session semantics and durable multi-agent state management, or they significantly increase the amount of custom code and operations required.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ DynamoDB can store chat history and preferences, but the team must design session/event schemas, implement read/write patterns, manage summarization or pruning, and coordinate consistency across multiple agents. This increases custom state-management logic and operational responsibility compared to a managed agent memory capability.<br/>• <strong>B</strong>: ❌ Container-local storage is not a durable or shared state store for a multi-agent, horizontally scaled system; tasks can be replaced at any time. This approach also introduces additional container operations compared to a managed, serverless agent runtime with built-in memory services.<br/>• <strong>C</strong>: ✅ AgentCore provides serverless endpoints for agents and includes managed memory capabilities. AgentCore Memory supports session-oriented context (events within a session) and longer-term memory records (such as preferences and summaries), reducing the need to build and operate custom state stores and coordination logic across multiple specialized agents.<br/>• <strong>D</strong>: ❌ Knowledge bases are designed for retrieval augmentation over curated documents and indexed content, not for maintaining structured conversational state and preferences with session semantics. Using a knowledge base for chat memory typically adds latency and requires additional ingestion and retrieval design that does not directly provide session and memory-record abstractions.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-sessions.html\">Use isolated sessions for agents - Amazon Bedrock AgentCore (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-types.html\">Memory types - Amazon Bedrock AgentCore (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-ltm-rag.html\">Compare long-term memory with Retrieval-Augmented Generation - Amazon Bedrock AgentCore (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare provider operates hospitals in multiple European countries. Patient records must remain inside each hospital’s on-premises data center to satisfy data residency requirements. The provider wants to use an Amazon Bedrock FM to generate short discharge summaries, but the solution must ensure that raw patient records do not traverse the public internet and that only approved, de-identified text is sent to the FM.</p><p>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dữ liệu bệnh nhân phải ở on-premises, raw data không đi qua public internet, chỉ gửi text đã de-identify cho FM.</li><li>Ưu tiên: <strong>data residency</strong> + security, LEAST overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Outposts</strong> giữ dữ liệu và bước de-identify tại chỗ; chỉ text đã khử nhận dạng gọi Bedrock Runtime qua VPC interface endpoint (<strong>PrivateLink</strong>), không qua internet công cộng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Wavelength dành cho 5G edge, và lưu bệnh nhân trên S3 vi phạm residency.</li><li><strong>B</strong>: ❌ Sai — gửi raw record lên cloud, endpoint Regional không đảm bảo residency.</li><li><strong>C</strong>: ❌ Sai — replicate dữ liệu ra Region, vi phạm yêu cầu.</li><li><strong>D</strong>: ✅ Đúng — xử lý tại chỗ, chỉ gửi de-identified qua PrivateLink.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Outposts</li><li>Data residency</li><li>PrivateLink interface endpoint</li><li>De-identification</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp dữ liệu phải ở on-premises nhưng vẫn dùng dịch vụ AWS → nghĩ ngay đến <strong>Outposts</strong> + <strong>PrivateLink</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 41,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>Deploy the application on AWS Wavelength Zones near each hospital to reduce latency. Store patient records in an Amazon S3 bucket and call Amazon Bedrock from AWS App Runner running in the Wavelength Zone.</p>",
              "correct": false,
              "feedback": "<p>AWS Wavelength is designed for edge deployments and low-latency access patterns, but it does not address the requirement that patient records remain in each hospital’s on-premises data center. Storing patient records in Amazon S3 moves the data into AWS and can violate data residency constraints.</p>"
            },
            {
              "choice": "<p>Expose an Amazon API Gateway Regional endpoint that invokes Amazon Bedrock directly. Configure TLS for encryption in transit and rely on IAM authentication so hospitals can send patient records securely to the FM.</p>",
              "correct": false,
              "feedback": "<p>Encryption in transit and IAM authentication do not satisfy the requirement that raw patient records remain on premises, and this design does not ensure traffic avoids the public internet end-to-end. It also sends sensitive records directly to the FM without enforcing local preprocessing and de-identification in the hospital environment.</p>"
            },
            {
              "choice": "<p>Replicate the hospitals’ patient records from on premises into an Amazon S3 bucket in an AWS Region. Invoke Amazon Bedrock from an AWS Lambda function that reads the records from Amazon S3 and generates discharge summaries.</p>",
              "correct": false,
              "feedback": "<p>Replicating raw patient records into Amazon S3 violates the requirement that patient records remain in each hospital’s on-premises data center. This approach also increases compliance risk because the full sensitive dataset is moved into the cloud for processing.</p>"
            },
            {
              "choice": "<p>Deploy the application’s ingestion and preprocessing components on AWS Outposts in each hospital. Store patient records locally on Outposts and de-identify the text on Outposts. Use an Amazon VPC interface endpoint (AWS PrivateLink) to invoke the Amazon Bedrock Runtime API with only the de-identified text.</p>",
              "correct": true,
              "feedback": "<p>AWS Outposts enables running AWS compute and storage on premises for local data integration and residency. De-identifying on Outposts ensures only approved data is sent to the FM. Using a VPC interface endpoint (PrivateLink) provides private connectivity to the Bedrock Runtime API so requests do not traverse the public internet, meeting the secure routing requirement with minimal operational overhead because the provider does not manage model infrastructure.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 41,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key design objective is a cross-environment architecture where sensitive data stays local to satisfy residency rules, while still allowing controlled FM access. Running ingestion and preprocessing on AWS Outposts keeps patient records in the hospital data center and enables local enforcement of de-identification before any model invocation. Private connectivity to Amazon Bedrock through a VPC interface endpoint (AWS PrivateLink) helps ensure secure routing without traversing the public internet. Approaches that move raw records to Amazon S3 or send records directly to Bedrock fail the residency constraint, and edge deployments alone do not solve on-premises data integration and control requirements.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ AWS Wavelength is designed for edge deployments and low-latency access patterns, but it does not address the requirement that patient records remain in each hospital’s on-premises data center. Storing patient records in Amazon S3 moves the data into AWS and can violate data residency constraints.<br/>• <strong>B</strong>: ❌ Encryption in transit and IAM authentication do not satisfy the requirement that raw patient records remain on premises, and this design does not ensure traffic avoids the public internet end-to-end. It also sends sensitive records directly to the FM without enforcing local preprocessing and de-identification in the hospital environment.<br/>• <strong>C</strong>: ❌ Replicating raw patient records into Amazon S3 violates the requirement that patient records remain in each hospital’s on-premises data center. This approach also increases compliance risk because the full sensitive dataset is moved into the cloud for processing.<br/>• <strong>D</strong>: ✅ AWS Outposts enables running AWS compute and storage on premises for local data integration and residency. De-identifying on Outposts ensures only approved data is sent to the FM. Using a VPC interface endpoint (PrivateLink) provides private connectivity to the Bedrock Runtime API so requests do not traverse the public internet, meeting the secure routing requirement with minimal operational overhead because the provider does not manage model infrastructure.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html\">Use interface VPC endpoints (AWS PrivateLink) to create a private connection between your VPC and Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/outposts/latest/network-userguide/what-is-outposts.html\">What is AWS Outposts? - AWS Outposts (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/architecture/ensure-workload-resiliency-and-comply-with-data-residency-requirements-with-aws-outposts/\">Ensure Workload Resiliency and Comply with Data Residency Requirements with AWS Outposts | AWS Architecture Blog (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#42",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital claims team is building a GenAI workflow on AWS that produces a single, structured JSON “case packet” for an Amazon Bedrock multimodal model. Each claim includes a PDF form (with tables), several JPEG photos, an MP3 voicemail recording, and a CSV export of claim metadata from a legacy system. The team needs an AWS-managed processing workflow that can handle these mixed modalities and prepare model-ready JSON at scale with the LEAST operational overhead.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý dữ liệu đa phương thức (PDF, JPEG, MP3, CSV) thành một JSON case packet quy mô lớn.</li><li>Ưu tiên: workflow managed, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Bedrock Data Automation</strong> xử lý document, image, audio thành JSON có cấu trúc (async); CSV chuyển bằng Glue; Lambda gộp thành packet.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đúng công cụ managed cho từng loại dữ liệu.</li><li><strong>B</strong>: ❌ Sai — Knowledge Bases dùng cho retrieval, không trả một JSON gộp mọi file.</li><li><strong>C</strong>: ❌ Sai — Data Wrangler dành cho dữ liệu dạng bảng, không xử lý PDF/ảnh/audio.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Bedrock multimodal model thường không nhận MP3 trực tiếp, phải thêm Textract/Lambda tự parse.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Data Automation</li><li>Multimodal processing</li><li>Glue ETL</li><li>Structured JSON</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tài liệu/ảnh/audio/video → JSON có cấu trúc → nghĩ ngay đến <strong>Bedrock Data Automation</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 42,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Data Automation to asynchronously process the PDFs and JPEGs into structured JSON and to process the MP3 voicemails into transcripts and summaries. Use an AWS Glue ETL job to transform the CSV metadata into JSON. Store all outputs in Amazon S3, and use an AWS Lambda function to assemble a single JSON case packet for the Amazon Bedrock multimodal model.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Data Automation is designed to extract structured information from documents and images and to process audio into transcripts/summaries, producing model-ready JSON with minimal custom extraction logic. AWS Glue can reliably transform tabular CSV into normalized JSON. Lambda can then perform lightweight orchestration to assemble the final case packet for downstream Bedrock inference.</p>"
            },
            {
              "choice": "<p>Store the PDFs, JPEGs, MP3 files, and CSV files in Amazon S3. Configure Amazon Bedrock Knowledge Bases to ingest all files automatically and return a single structured JSON object that combines the extracted information from every file type for direct FM consumption.</p>",
              "correct": false,
              "feedback": "<p>Knowledge Bases are designed for retrieval augmentation over ingested content, not as a general-purpose multimodal ETL system that guarantees a single consolidated, structured JSON output across PDFs, images, audio, and tabular CSV. This option does not provide the required specialized processing steps (for example, dedicated audio transcription and deterministic tabular normalization into a case packet).</p>"
            },
            {
              "choice": "<p>Use Amazon SageMaker Data Wrangler in SageMaker Studio to import the PDFs, JPEGs, MP3 files, and CSV files. Apply transformations to standardize the data and export a single JSON file to Amazon S3 for the Bedrock model to consume.</p>",
              "correct": false,
              "feedback": "<p>Data Wrangler is oriented toward interactive data preparation workflows (primarily tabular and some image transformations) and requires operating within SageMaker Studio. It is not a purpose-built service for automated audio transcription and multimodal document-to-structured extraction at scale with low operational overhead.</p>"
            },
            {
              "choice": "<p>Use Amazon Textract to extract text and tables from the PDFs and to OCR the JPEGs. Use AWS Lambda to parse the Textract output and to merge it with the CSV data. Use Amazon Bedrock to directly ingest the MP3 voicemail as part of a multimodal prompt and generate the final JSON packet.</p>",
              "correct": false,
              "feedback": "<p>While Textract can extract text and tables from documents and images, directly passing MP3 audio to an LLM for transcription is not a reliable or standard processing step in this architecture. This option also requires significant custom parsing and merging logic in Lambda for multiple output formats (Textract JSON + CSV).</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 42,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key requirement is a scalable, low-operations pipeline that can transform mixed modalities into a structured, model-ready JSON payload. Amazon Bedrock Data Automation provides managed extraction for documents and images and managed audio processing (for transcripts/summaries) without requiring the team to build and maintain custom parsers for each format. AWS Glue is well suited for transforming CSV tabular data into a normalized JSON structure. Storing intermediate artifacts in Amazon S3 and using a small Lambda step to assemble the final “case packet” keeps the architecture serverless, modular, and operationally simple while producing an input format that a Bedrock multimodal model can consume consistently.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Bedrock Data Automation is designed to extract structured information from documents and images and to process audio into transcripts/summaries, producing model-ready JSON with minimal custom extraction logic. AWS Glue can reliably transform tabular CSV into normalized JSON. Lambda can then perform lightweight orchestration to assemble the final case packet for downstream Bedrock inference.<br/>• <strong>B</strong>: ❌ Knowledge Bases are designed for retrieval augmentation over ingested content, not as a general-purpose multimodal ETL system that guarantees a single consolidated, structured JSON output across PDFs, images, audio, and tabular CSV. This option does not provide the required specialized processing steps (for example, dedicated audio transcription and deterministic tabular normalization into a case packet).<br/>• <strong>C</strong>: ❌ Data Wrangler is oriented toward interactive data preparation workflows (primarily tabular and some image transformations) and requires operating within SageMaker Studio. It is not a purpose-built service for automated audio transcription and multimodal document-to-structured extraction at scale with low operational overhead.<br/>• <strong>D</strong>: ❌ While Textract can extract text and tables from documents and images, directly passing MP3 audio to an LLM for transcription is not a reliable or standard processing step in this architecture. This option also requires significant custom parsing and merging logic in Lambda for multiple output formats (Textract JSON + CSV).<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/bda-using-api.html\">Using the Bedrock Data Automation API (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format.html\">Data format options for inputs and outputs in AWS Glue for Spark (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html\">Process Amazon S3 event notifications with Lambda (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail operations team is building an internal troubleshooting assistant by using Amazon Bedrock and an Amazon OpenSearch Service vector index. The assistant retrieves chunks from repair manuals and incident reports. Engineers often search by exact error codes (for example, \"ERR-1042\") and also by natural language descriptions of symptoms. With the current semantic (vector-only) retrieval approach, searches sometimes miss the correct chunk that contains the exact code, and the returned top results are not consistently the most relevant.</p><p>Which solution will improve retrieval relevance and accuracy with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Vector-only search bỏ sót chunk chứa exact code (ERR-1042) và kết quả top chưa thật sự liên quan.</li><li>Ưu tiên: tăng relevance, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Hybrid search</strong> (keyword + vector) bắt được exact match và ngữ nghĩa; <strong>reranker</strong> model của Bedrock sắp xếp lại top chunk trước khi gửi cho FM.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — bỏ retrieval làm mất kiến thức nội bộ, dễ hallucination.</li><li><strong>B</strong>: ❌ Sai — vẫn vector-only nên không giải quyết exact match.</li><li><strong>C</strong>: ❌ Sai — tự build kNN trên DynamoDB không scale, tốn công.</li><li><strong>D</strong>: ✅ Đúng — hybrid + rerank.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Hybrid search</li><li>Keyword + vector</li><li>Reranker model</li><li>Exact identifiers</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tìm theo mã chính xác + ngữ nghĩa → nghĩ ngay đến <strong>hybrid search</strong> + <strong>reranker</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 43,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>Remove the retrieval layer and rely on a larger foundation model with improved prompt engineering and few-shot examples so the model can answer from its pretrained knowledge.</p>",
              "correct": false,
              "feedback": "<p>Removing retrieval reduces grounding in the team’s internal documents and increases the likelihood of incomplete or hallucinated answers, especially for organization-specific error codes and procedures. This does not improve the accuracy of retrieved context because no retrieval is performed.</p>"
            },
            {
              "choice": "<p>Increase the embedding dimensionality and switch the knowledge base to semantic chunking so that the vector-only search returns more granular and precise matches without using any keyword indexing.</p>",
              "correct": false,
              "feedback": "<p>Chunking strategy and embedding dimensionality can affect retrieval quality, but vector-only search can still fail to prioritize or return exact matches for error codes and other precise tokens. This does not address the core requirement of combining exact-term retrieval with semantic retrieval.</p>"
            },
            {
              "choice": "<p>Store embeddings in Amazon DynamoDB along with the source text and build a custom Lambda-based k-nearest neighbor search function that scans items and ranks them by cosine similarity.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB is not a vector search engine for k-nearest neighbor queries; implementing similarity search by scanning and scoring items in Lambda would be inefficient at scale and adds significant custom logic and operational overhead compared to using managed vector/hybrid search capabilities.</p>"
            },
            {
              "choice": "<p>Use an OpenSearch hybrid search approach that combines keyword matching on indexed fields (for example, errorCode and productId) with vector similarity search for semantic relevance. Then use an Amazon Bedrock reranker model to reorder the top retrieved chunks before sending the context to the FM.</p>",
              "correct": true,
              "feedback": "<p>Hybrid search helps ensure exact-term matches (such as error codes) are retrieved while still benefiting from semantic similarity for natural-language queries. A Bedrock reranker can then improve the ordering of the retrieved chunks without requiring the team to build and maintain a custom ranking model, improving relevance with minimal added operational burden.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 43,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most effective low-overhead way to improve retrieval for both exact identifiers (like error codes) and descriptive queries is to combine keyword retrieval with semantic vector retrieval, then rerank the resulting candidates for best relevance. Hybrid search improves recall and precision when exact tokens matter, while a managed reranker improves the ordering of the top results without requiring the team to design, train, and operate a bespoke ranking system or scoring pipeline.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Removing retrieval reduces grounding in the team’s internal documents and increases the likelihood of incomplete or hallucinated answers, especially for organization-specific error codes and procedures. This does not improve the accuracy of retrieved context because no retrieval is performed.<br/>• <strong>B</strong>: ❌ Chunking strategy and embedding dimensionality can affect retrieval quality, but vector-only search can still fail to prioritize or return exact matches for error codes and other precise tokens. This does not address the core requirement of combining exact-term retrieval with semantic retrieval.<br/>• <strong>C</strong>: ❌ DynamoDB is not a vector search engine for k-nearest neighbor queries; implementing similarity search by scanning and scoring items in Lambda would be inefficient at scale and adds significant custom logic and operational overhead compared to using managed vector/hybrid search capabilities.<br/>• <strong>D</strong>: ✅ Hybrid search helps ensure exact-term matches (such as error codes) are retrieved while still benefiting from semantic similarity for natural-language queries. A Bedrock reranker can then improve the ordering of the retrieved chunks without requiring the team to build and maintain a custom ranking model, improving relevance with minimal added operational burden.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-configure-neural-search.html\">Configure Neural Search and Hybrid Search on OpenSearch Serverless - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vector-search.html\">Vector search - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/rerank.html\">Improve the relevance of query responses with a reranker model in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech development team is building a customer-facing chat assistant that invokes an Amazon Bedrock text model through an AWS Lambda function. The assistant must block harmful user inputs (such as profanity and requests about disallowed topics) before they influence model behavior, and the team wants the simplest approach that can be applied consistently across the application.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chặn input có hại (từ tục, topic bị cấm) trước khi tác động model, áp dụng nhất quán toàn app.</li><li>Ưu tiên: đơn giản nhất, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Guardrails</strong> có topic filter và word filter tích hợp, gắn vào lời gọi model, tự trả message chặn chuẩn, không cần code thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed, áp dụng nhất quán.</li><li><strong>B</strong>: ❌ Sai — Prompt Management cho versioning, không lọc input người dùng; phê duyệt thủ công không scale.</li><li><strong>C</strong>: ❌ Sai — validator chỉ kiểm tra format; system prompt không chặn đáng tin cậy.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — regex WAF dễ bị bypass, không hiểu ngữ nghĩa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails</li><li>Topic filter, word filter</li><li>Input blocking</li><li>Consistent enforcement</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chặn nội dung/topic có hại ở input hoặc output → nghĩ ngay đến <strong>Bedrock Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 44,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock guardrail with topic filtering and word filtering. Attach the guardrail to the model invocation so that blocked inputs return a standard blocked message.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock guardrails provide managed input filtering capabilities (such as topic and word filtering) that can be applied directly during model invocation. This approach centralizes content safety controls, enforces consistent behavior across the application, and avoids building and operating a separate moderation pipeline.</p>"
            },
            {
              "choice": "<p>Store approved prompts in Amazon Bedrock Prompt Management and require a manual approval workflow for all prompts before the application can send them to the model.</p>",
              "correct": false,
              "feedback": "<p>Prompt Management governs reusable prompt templates and versions, but it does not provide real-time moderation of end-user inputs. A manual approval workflow is also not practical for interactive, customer-facing chat requests and adds significant operational burden.</p>"
            },
            {
              "choice": "<p>Use an Amazon API Gateway request validator with a JSON Schema model to enforce a strict request format. Add a system prompt telling the model to refuse any request that contains unsafe content.</p>",
              "correct": false,
              "feedback": "<p>Schema validation ensures the request is structurally correct, not that the content is safe. Relying on a system prompt alone is not a robust content safety control because user inputs can still attempt to override instructions (prompt injection) and produce unsafe behavior.</p>"
            },
            {
              "choice": "<p>Configure AWS WAF on Amazon API Gateway with regex pattern matching to detect harmful prompts and block requests that match those patterns before invoking the Lambda function.</p>",
              "correct": false,
              "feedback": "<p>AWS WAF can help block common web exploits and can match simple patterns, but it is not designed as a comprehensive content safety layer for GenAI prompts. It cannot reliably classify disallowed topics or nuanced harmful content in natural language the way a model-focused safety control can.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 44,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A managed input safety control that directly filters user prompts at invocation time is the most straightforward way to prevent harmful inputs from shaping model behavior. Bedrock guardrails are purpose-built for GenAI content filtering and can enforce policies like topic and word blocking while returning a consistent blocked response. Network-layer protections and schema validation can be useful complementary controls, but they do not provide reliable natural-language content moderation. Governance features for prompt templates help standardize developer-authored prompts, but they do not solve real-time user input safety requirements.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Amazon Bedrock guardrails provide managed input filtering capabilities (such as topic and word filtering) that can be applied directly during model invocation. This approach centralizes content safety controls, enforces consistent behavior across the application, and avoids building and operating a separate moderation pipeline.<br/>• <strong>B</strong>: ❌ Prompt Management governs reusable prompt templates and versions, but it does not provide real-time moderation of end-user inputs. A manual approval workflow is also not practical for interactive, customer-facing chat requests and adds significant operational burden.<br/>• <strong>C</strong>: ❌ Schema validation ensures the request is structurally correct, not that the content is safe. Relying on a system prompt alone is not a robust content safety control because user inputs can still attempt to override instructions (prompt injection) and produce unsafe behavior.<br/>• <strong>D</strong>: ❌ AWS WAF can help block common web exploits and can match simple patterns, but it is not designed as a comprehensive content safety layer for GenAI prompts. It cannot reliably classify disallowed topics or nuanced harmful content in natural language the way a model-focused safety control can.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use-converse-api.html\">Include a guardrail with the Converse API - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-denied-topics.html\">Block denied topics to help remove harmful content - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-word-filters.html\">Remove a specific list of words and phrases from conversations with word filters - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A compliance engineering team is building an internal summarization service that uses an Amazon Bedrock text FM to produce 1-paragraph summaries of long policy documents. The team needs an evaluation approach that can be rerun for every prompt template change to detect regressions. The approach must assess the quality of summaries across multiple dimensions, including relevance to the source content, factual accuracy, consistency across runs, and fluency, while keeping the evaluation process largely automated.</p><p>Which approach will meet these requirements with the LEAST manual effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đánh giá chất lượng summary tự động, chạy lại mỗi lần đổi prompt template, đo nhiều chiều (relevance, factual accuracy, consistency, fluency).</li><li>Ưu tiên: <strong>LEAST manual effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Model Evaluations</strong> với <strong>LLM-as-a-judge</strong> chấm tự động nhiều metric trên dataset trong S3, so sánh điểm giữa các phiên bản prompt để phát hiện regression.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tự động, đa chiều, so sánh được các phiên bản.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — ROUGE/BLEU chỉ đo overlap từ, không phản ánh factual accuracy hay fluency.</li><li><strong>C</strong>: ❌ Sai — Model Monitor phát hiện drift, không đo chất lượng summary.</li><li><strong>D</strong>: ❌ Sai — token và latency không phải chỉ số chất lượng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Evaluations</li><li>LLM-as-a-judge</li><li>Regression testing</li><li>Multi-dimensional metrics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đánh giá chất lượng text sinh ra, nhiều chiều, tự động → nghĩ ngay đến <strong>LLM-as-a-judge</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 45,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>Store a prompt dataset in Amazon S3 that includes source documents and reference summaries. Run Amazon Bedrock Model Evaluations using an LLM-as-a-judge configuration to score each generated summary on relevance, correctness (factual accuracy), consistency, and fluency. Compare scores across prompt template versions before deployment.</p>",
              "correct": true,
              "feedback": "<p>An automated evaluation workflow that uses a prompt dataset and an evaluator (judge) model can score outputs against multiple quality dimensions beyond traditional ML metrics. This approach supports repeatable regression testing for each prompt change and minimizes manual effort while still providing structured, multi-metric quality signals.</p>"
            },
            {
              "choice": "<p>Create a benchmark dataset of source documents and use ROUGE and BLEU scores to compare model-generated summaries to reference summaries. Use the combined score as the single quality signal for go/no-go decisions.</p>",
              "correct": false,
              "feedback": "<p>ROUGE and BLEU measure overlap and n-gram precision/recall-style similarity and can be helpful for certain summarization/translation comparisons, but they do not reliably capture factual accuracy (hallucination), consistency across runs, or fluency. Relying on them alone does not provide the comprehensive, multi-dimensional assessment requested.</p>"
            },
            {
              "choice": "<p>Enable Amazon SageMaker Model Monitor on the summarization workload to detect data drift and feature attribution drift. Block deployments when drift exceeds a predefined threshold.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Model Monitor is designed to monitor deployed model/data characteristics (for example, drift) rather than to directly evaluate the semantic quality of LLM-generated text for relevance, factual accuracy, consistency, and fluency. Drift signals alone cannot serve as a comprehensive text quality evaluation framework for FM outputs.</p>"
            },
            {
              "choice": "<p>Track Amazon CloudWatch metrics for the summarization endpoint, including InputTokenCount, OutputTokenCount, and model latency. Treat lower token usage and lower latency as indicators of higher summary quality.</p>",
              "correct": false,
              "feedback": "<p>Token counts and latency are useful operational metrics, but they do not evaluate output quality dimensions such as relevance, factual accuracy, consistency, or fluency. Optimizing only for speed or token usage can reduce quality and does not provide a comprehensive assessment framework.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 45,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A comprehensive FM output assessment framework needs explicit quality-oriented metrics (such as relevance, factual accuracy/correctness, consistency, and fluency) and must be repeatable for regression testing when prompts or configurations change. An automated evaluation workflow that uses a curated prompt dataset with reference outputs, and applies an LLM-as-a-judge evaluator to score multiple dimensions, provides actionable quality scores at scale with minimal manual effort. Operational metrics like latency and token counts support cost/performance optimization but do not measure output quality, and traditional n-gram overlap metrics alone are not sufficient to capture hallucinations, consistency, and fluency for generative outputs.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ An automated evaluation workflow that uses a prompt dataset and an evaluator (judge) model can score outputs against multiple quality dimensions beyond traditional ML metrics. This approach supports repeatable regression testing for each prompt change and minimizes manual effort while still providing structured, multi-metric quality signals.<br/>• <strong>B</strong>: ❌ ROUGE and BLEU measure overlap and n-gram precision/recall-style similarity and can be helpful for certain summarization/translation comparisons, but they do not reliably capture factual accuracy (hallucination), consistency across runs, or fluency. Relying on them alone does not provide the comprehensive, multi-dimensional assessment requested.<br/>• <strong>C</strong>: ❌ SageMaker Model Monitor is designed to monitor deployed model/data characteristics (for example, drift) rather than to directly evaluate the semantic quality of LLM-generated text for relevance, factual accuracy, consistency, and fluency. Drift signals alone cannot serve as a comprehensive text quality evaluation framework for FM outputs.<br/>• <strong>D</strong>: ❌ Token counts and latency are useful operational metrics, but they do not evaluate output quality dimensions such as relevance, factual accuracy, consistency, or fluency. Optimizing only for speed or token usage can reduce quality and does not provide a comprehensive assessment framework.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html\">Evaluate model performance using another LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-judge-create.html\">Create a model evaluation job that uses an LLM as a judge - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-metrics.html\">Use metrics to understand model performance - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SaaS provider runs an interactive RAG assistant for internal help desk agents. The request path is Amazon API Gateway to AWS Lambda, where the function performs a vector similarity search in Amazon OpenSearch Service and then calls an Amazon Bedrock FM by using the Converse API. Users report that responses feel slow, and profiling shows frequent connection setup overhead between Lambda and downstream services and high query fan-out across many OpenSearch shards during vector searches.</p><p>The provider wants to reduce p95 end-to-end latency for the chat experience without changing the FM or the underlying document corpus and with the LEAST operational overhead.</p><p>Which combination of actions should the provider take? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm p95 latency của RAG: overhead tạo kết nối từ Lambda và fan-out nhiều shard OpenSearch; không đổi FM hay corpus.</li><li>Phải chọn đúng 2 hành động, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>B xử lý connection setup (<strong>reuse client</strong>, keep-alive). E xử lý fan-out bằng cách <strong>ít shard</strong> lớn hơn nên giảm điều phối cross-shard khi chạy k-NN.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng ef_search/M tăng recall nhưng làm query chậm hơn và tốn bộ nhớ.</li><li><strong>B</strong>: ✅ Đúng — loại bỏ overhead kết nối lặp lại.</li><li><strong>C</strong>: ❌ Sai — context retrieve thay đổi theo từng query nên cache prefix ít hiệu quả, và không xử lý nguyên nhân đã nêu.</li><li><strong>D</strong>: ❌ Sai — global cross-Region inference nhắm tới availability/throughput, có thể tăng latency mạng, không giải quyết nguyên nhân.</li><li><strong>E</strong>: ✅ Đúng — giảm shard fan-out.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Connection reuse, keep-alive</li><li>Initialize outside handler</li><li>Shard fan-out</li><li>p95 latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp latency do kết nối lặp và nhiều shard → nghĩ ngay đến <strong>reuse client</strong> và <strong>ít shard hơn</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 46,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>Tune OpenSearch HNSW settings by increasing ef_search and M values to maximize recall for every query, even if memory usage increases.</p>",
              "correct": false,
              "feedback": "<p>Increasing ef_search and M can increase query time and memory consumption. The scenario’s primary problem is latency; maximizing recall at the expense of performance typically makes p95 latency worse and does not align with the goal.</p>"
            },
            {
              "choice": "<p>Refactor the Lambda function to reuse HTTP/AWS SDK clients across invocations (for example, initialize clients outside the handler) and configure connection pooling/keep-alive for calls to OpenSearch and Amazon Bedrock.</p>",
              "correct": true,
              "feedback": "<p>Reusing clients allows Lambda execution environments to keep connections open across invocations, reducing repeated TLS handshakes and connection setup time. This is a low-overhead change that improves service-to-service communication efficiency and directly reduces latency for GenAI request chains.</p>"
            },
            {
              "choice": "<p>Turn on Amazon Bedrock prompt caching by placing the retrieved OpenSearch context into the cached prompt prefix so future queries can reuse it.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching is most effective for a stable, reusable prompt prefix (for example, instructions and few-shot examples). Retrieved RAG context is dynamic per query, so caching it as the prefix will result in low cache reuse and can increase cache write overhead without addressing OpenSearch retrieval latency.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock global cross-Region inference to route all model invocations to the least busy Region for faster responses.</p>",
              "correct": false,
              "feedback": "<p>Cross-Region inference is primarily a resilience/throughput strategy and can add network latency when requests are served from a different Region. It also does not address the identified retrieval and connection setup bottlenecks.</p>"
            },
            {
              "choice": "<p>Reindex the OpenSearch vector index with fewer, larger shards sized for semantic search workloads to reduce cross-shard coordination during k-NN queries.</p>",
              "correct": true,
              "feedback": "<p>Vector search can be slowed by coordinating many shard-level searches and merging results. Using fewer, larger shards (appropriate shard sizing) reduces fan-out and coordination overhead, improving retrieval latency without changing the FM or the document set.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 46,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The largest latency gains come from optimizing the two proven bottlenecks in the workflow: service-to-service communication and vector retrieval execution. Reusing clients with connection pooling reduces repeated connection establishment overhead between Lambda and downstream services, lowering end-to-end latency without changing the FM or architecture. Separately, tuning OpenSearch for vector search by reducing shard fan-out (fewer, larger shards sized appropriately for semantic search) reduces coordination overhead and speeds retrieval, which is a major contributor to total RAG response time. Options that prioritize recall tuning, rely on cross-Region routing, or attempt to cache dynamic retrieved context either increase latency, fail to address the true bottleneck, or have low effectiveness for this workload.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Increasing ef_search and M can increase query time and memory consumption. The scenario’s primary problem is latency; maximizing recall at the expense of performance typically makes p95 latency worse and does not align with the goal.<br/>• <strong>B</strong>: ✅ Reusing clients allows Lambda execution environments to keep connections open across invocations, reducing repeated TLS handshakes and connection setup time. This is a low-overhead change that improves service-to-service communication efficiency and directly reduces latency for GenAI request chains.<br/>• <strong>C</strong>: ❌ Prompt caching is most effective for a stable, reusable prompt prefix (for example, instructions and few-shot examples). Retrieved RAG context is dynamic per query, so caching it as the prefix will result in low cache reuse and can increase cache write overhead without addressing OpenSearch retrieval latency.<br/>• <strong>D</strong>: ❌ Cross-Region inference is primarily a resilience/throughput strategy and can add network latency when requests are served from a different Region. It also does not address the identified retrieval and connection setup bottlenecks.<br/>• <strong>E</strong>: ✅ Vector search can be slowed by coordinating many shard-level searches and merging results. Using fewer, larger shards (appropriate shard sizing) reduces fan-out and coordination overhead, improving retrieval latency without changing the FM or the document set.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/codeguru/detector-library/java/aws-client-per-invocation/\">AWS Lambda client not reused | Amazon Q, Detector Library (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-reusing-connections.html\">Reuse connections with keep-alive in Node.js - AWS SDK for JavaScript (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp-sharding.html\">Choosing the number of shards - Amazon OpenSearch Service (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, E"
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech team is deploying an open-source LLM behind an Amazon SageMaker AI real-time inference endpoint by using a custom container image in Amazon ECR. The model artifacts in Amazon S3 are very large, and the container must download and load the weights into GPU memory during startup. During deployment, the endpoint repeatedly fails with container health check errors. Logs show the model is still downloading and initializing when the health check fails.</p><p>Which change will allow the team to deploy the LLM successfully while keeping the same real-time endpoint architecture with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Container SageMaker real-time endpoint cần thời gian tải/load model lớn nhưng health check fail trước khi xong.</li><li>Ưu tiên: giữ kiến trúc real-time, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Nguyên nhân là timeout, nên tăng <strong>container startup health check timeout</strong> và <strong>model download timeout</strong> trong endpoint configuration để container đủ thời gian khởi tạo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — sửa đúng nguyên nhân, đổi cấu hình tối thiểu.</li><li><strong>B</strong>: ❌ Sai — Lambda không phù hợp LLM lớn/GPU, tải model mỗi lần gọi.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — instance lớn hơn tốn kém, không bảo đảm vượt timeout.</li><li><strong>D</strong>: ❌ Sai — đổi sang async, trái yêu cầu giữ real-time endpoint.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ContainerStartupHealthCheckTimeoutInSeconds</li><li>ModelDataDownloadTimeoutInSeconds</li><li>SageMaker real-time endpoint</li><li>Large model startup</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp endpoint fail health check vì load model lớn → nghĩ ngay đến tăng <strong>startup health check/download timeout</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 47,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>Update the endpoint configuration to increase the container startup health check timeout and the model artifact download timeout so the container has enough time to download and load the model before being declared unhealthy.</p>",
              "correct": true,
              "feedback": "<p>Large language models often have very large weight files and longer initialization times than traditional ML models, especially when downloading artifacts from Amazon S3 and loading them into GPU memory. Increasing the container health check timeout and download timeout accommodates these LLM-specific startup characteristics without changing the architecture or adding additional services to operate.</p>"
            },
            {
              "choice": "<p>Move the model inference into an AWS Lambda function that downloads the model from Amazon S3 on each invocation and runs inference in the function runtime.</p>",
              "correct": false,
              "feedback": "<p>Lambda is not suitable for hosting large LLM artifacts that must be loaded into GPU memory, and downloading large model weights on every invocation would create excessive latency and operational risk. It also does not align with the container-based LLM deployment approach used for SageMaker AI endpoints.</p>"
            },
            {
              "choice": "<p>Increase the size of the GPU instance type for the endpoint so the container can load the model faster during startup.</p>",
              "correct": false,
              "feedback": "<p>A larger instance can help with memory pressure, but it does not directly address the root cause shown in the logs: the container fails health checks while it is still downloading and initializing the model. This option increases cost and may still fail if the health check and download timeout settings are not adjusted for large model startup times.</p>"
            },
            {
              "choice": "<p>Replace the real-time endpoint with a SageMaker Asynchronous Inference endpoint and have the application poll Amazon S3 for results.</p>",
              "correct": false,
              "feedback": "<p>Asynchronous inference is designed for workloads that can tolerate longer end-to-end latency and typically returns results via an output location such as Amazon S3. This changes the interaction pattern and does not meet the requirement to keep a real-time endpoint architecture.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 47,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Container-based LLM deployments frequently fail for reasons that are uncommon in traditional ML endpoints: large artifacts take longer to download, model initialization can be slower due to GPU memory setup, and the container may not pass health checks within default time limits. The most direct, low-overhead fix is to adjust the endpoint’s startup health check and model download timeout settings so the container can complete model loading before SageMaker evaluates it as unhealthy. Alternatives either change the required real-time interaction model, add significant cost without guaranteeing success, or use a compute environment that is not appropriate for large LLM inference.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Large language models often have very large weight files and longer initialization times than traditional ML models, especially when downloading artifacts from Amazon S3 and loading them into GPU memory. Increasing the container health check timeout and download timeout accommodates these LLM-specific startup characteristics without changing the architecture or adding additional services to operate.<br/>• <strong>B</strong>: ❌ Lambda is not suitable for hosting large LLM artifacts that must be loaded into GPU memory, and downloading large model weights on every invocation would create excessive latency and operational risk. It also does not align with the container-based LLM deployment approach used for SageMaker AI endpoints.<br/>• <strong>C</strong>: ❌ A larger instance can help with memory pressure, but it does not directly address the root cause shown in the logs: the container fails health checks while it is still downloading and initializing the model. This option increases cost and may still fail if the health check and download timeout settings are not adjusted for large model startup times.<br/>• <strong>D</strong>: ❌ Asynchronous inference is designed for workloads that can tolerate longer end-to-end latency and typically returns results via an output location such as Amazon S3. This changes the interaction pattern and does not meet the requirement to keep a real-time endpoint architecture.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference-hosting.html\">SageMaker AI endpoint parameters for large model inference - Amazon SageMaker AI (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html\">ProductionVariant - Amazon SageMaker (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html\">Custom Inference Code with Hosting Services - Amazon SageMaker AI (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare SaaS provider exposes an internal GenAI summarization service through Amazon API Gateway and an AWS Lambda function that invokes an Amazon Bedrock text model. The provider expects to switch between different Bedrock models over time as pricing and regional availability change. The provider must be able to change the model selection without modifying or redeploying the Lambda code, and must be able to roll out a model change gradually with the ability to roll back automatically if errors increase.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đổi model Bedrock mà không sửa/redeploy Lambda, rollout dần và tự rollback nếu lỗi tăng.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS AppConfig</strong> lưu cấu hình (modelId, inference settings) tách khỏi code, có <strong>deployment strategy</strong> (gradual) và tích hợp CloudWatch alarms để tự rollback.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — đổi được model nhưng không có rollout dần và rollback tự động, mỗi lần gọi thêm read DynamoDB.</li><li><strong>B</strong>: ✅ Đúng — config động + gradual rollout + auto rollback.</li><li><strong>C</strong>: ❌ Sai — stage variable đổi tức thì cho mọi request, không gradual, không tự rollback.</li><li><strong>D</strong>: ❌ Sai — phải redeploy, trái yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS AppConfig</li><li>Feature flag, configuration profile</li><li>Deployment strategy</li><li>CloudWatch alarm rollback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đổi config runtime + rollout dần + auto rollback → nghĩ ngay đến <strong>AWS AppConfig</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 48,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>Create an Amazon DynamoDB table that stores the current Bedrock modelId. Configure the Lambda function to read the modelId from DynamoDB on each invocation and call Bedrock with that value. Update the DynamoDB item to switch models.</p>",
              "correct": false,
              "feedback": "<p>While this can enable changing the model without redeploying code, it introduces unnecessary operational complexity and does not natively provide configuration validation, gradual rollout strategies, or automatic rollback mechanisms for configuration changes.</p>"
            },
            {
              "choice": "<p>Use AWS AppConfig to store a configuration profile (for example, a feature flag) that contains the Bedrock modelId and inference settings. Configure the Lambda function to retrieve the AppConfig configuration at runtime and invoke Bedrock based on the configuration. Use AppConfig deployment strategies and CloudWatch alarms to roll out changes and trigger rollback.</p>",
              "correct": true,
              "feedback": "<p>AppConfig is designed for dynamic configuration changes independent of code deployments. By reading model selection values at runtime, the Lambda code stays unchanged while model selection can be updated. AppConfig supports validation and progressive deployments with rollback based on CloudWatch alarms, which meets the gradual rollout and automatic rollback requirement with minimal operational effort.</p>"
            },
            {
              "choice": "<p>Configure Amazon API Gateway stage variables to store the Bedrock modelId and use a mapping template to pass the stage variable to the Lambda function for each request. Update the stage variable when switching models.</p>",
              "correct": false,
              "feedback": "<p>Although stage variables can externalize a value, switching models still requires updating the API Gateway stage/deployment configuration. This approach also lacks purpose-built configuration validation, progressive rollout controls, and automated rollback capabilities compared with AppConfig.</p>"
            },
            {
              "choice": "<p>Store the target Bedrock modelId as a Lambda environment variable. Update the environment variable value whenever the provider needs to switch models, and redeploy the Lambda function.</p>",
              "correct": false,
              "feedback": "<p>Updating environment variables requires a Lambda configuration update and redeployment of the function configuration. This does not provide controlled, gradual rollout or automatic rollback based on monitoring signals.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 48,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A flexible model-selection pattern separates the model choice from the application code so the team can switch FMs or providers without a code redeploy. AWS AppConfig is purpose-built for dynamic configuration management and supports validating configuration changes, deploying changes progressively, and rolling back when CloudWatch alarms indicate problems. By having the Lambda function retrieve model selection parameters from AppConfig at runtime, the API remains stable while the modelId and related settings can be changed safely and repeatedly with minimal operational overhead. Alternatives either require updating deployed components directly (Lambda or API Gateway) or use a general data store that lacks AppConfig’s deployment governance features.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ While this can enable changing the model without redeploying code, it introduces unnecessary operational complexity and does not natively provide configuration validation, gradual rollout strategies, or automatic rollback mechanisms for configuration changes.<br/>• <strong>B</strong>: ✅ AppConfig is designed for dynamic configuration changes independent of code deployments. By reading model selection values at runtime, the Lambda code stays unchanged while model selection can be updated. AppConfig supports validation and progressive deployments with rollback based on CloudWatch alarms, which meets the gradual rollout and automatic rollback requirement with minimal operational effort.<br/>• <strong>C</strong>: ❌ Although stage variables can externalize a value, switching models still requires updating the API Gateway stage/deployment configuration. This approach also lacks purpose-built configuration validation, progressive rollout controls, and automated rollback capabilities compared with AppConfig.<br/>• <strong>D</strong>: ❌ Updating environment variables requires a Lambda configuration update and redeployment of the function configuration. This does not provide controlled, gradual rollout or automatic rollback based on monitoring signals.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-integration-lambda-extensions-config.html\">Configuring the AWS AppConfig Agent Lambda extension - AWS AppConfig (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy-predefined.html\">Using predefined deployment strategies - AWS AppConfig (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/appconfig/latest/userguide/monitoring-deployments.html\">Monitoring deployments for automatic rollback - AWS AppConfig (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A compliance engineering team at a fintech is building a Retrieval Augmented Generation (RAG) assistant by using Amazon Bedrock Knowledge Bases. The team ingests long HR and benefits policy PDFs. Users often ask narrow questions such as eligibility exceptions and edge cases that appear in short paragraphs. With the current ingestion settings, the retrieval step frequently returns broad passages that bury the relevant clause, and the model sometimes answers without enough surrounding context to justify the result.</p><p>The team wants to improve retrieval precision while still providing sufficient context for grounded answers with the LEAST ingestion-time operational overhead and cost.</p><p>Which document segmentation approach should the team use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Câu hỏi hẹp cần chunk chính xác, nhưng model vẫn cần ngữ cảnh xung quanh để trả lời có căn cứ.</li><li>Ưu tiên: <strong>precision + context</strong>, ít overhead và chi phí ingestion.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Hierarchical chunking</strong> lập chỉ mục child chunk nhỏ để khớp chính xác, rồi trả về parent chunk lớn hơn làm context. Là tùy chọn có sẵn trong Knowledge Bases.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cả PDF là một chunk làm retrieval kém chính xác, có thể vượt context.</li><li><strong>B</strong>: ❌ Sai — chunk rất lớn và overlap cao làm loãng kết quả, tự build Lambda thêm overhead.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — semantic chunking tốn chi phí FM khi ingest và không đảm bảo trả thêm context.</li><li><strong>D</strong>: ✅ Đúng — child cho precision, parent cho context.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Hierarchical chunking</li><li>Parent/child chunks</li><li>Retrieval precision</li><li>Knowledge Bases chunking strategy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp cần tìm chính xác nhưng vẫn đủ ngữ cảnh → nghĩ ngay đến <strong>hierarchical chunking</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 49,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>Disable chunking so that each PDF is treated as a single chunk during ingestion, relying on the FM’s large context window to handle long documents.</p>",
              "correct": false,
              "feedback": "<p>Treating an entire document as one chunk typically reduces retrieval precision because a single embedding must represent many topics and sections. It can also increase the amount of irrelevant context passed to the FM, which worsens grounding and increases token usage.</p>"
            },
            {
              "choice": "<p>Implement fixed-size chunking in a Lambda preprocessor with very large chunks and high overlap to ensure relevant clauses always appear with nearby context.</p>",
              "correct": false,
              "feedback": "<p>Large fixed chunks and high overlap increase duplicated content across chunks, which inflates storage and embedding generation work and can reduce retrieval precision by returning overly broad passages. This also introduces extra custom processing to build, deploy, and maintain.</p>"
            },
            {
              "choice": "<p>Configure the knowledge base to use semantic chunking so a foundation model determines chunk boundaries based on meaning rather than token counts.</p>",
              "correct": false,
              "feedback": "<p>Semantic chunking can improve chunk boundaries, but it incurs additional cost because an FM is invoked during ingestion to create semantically derived chunks. This conflicts with the requirement to minimize ingestion-time cost and operational overhead.</p>"
            },
            {
              "choice": "<p>Configure the knowledge base to use hierarchical chunking so the retriever indexes smaller child chunks for precise matching and then returns the corresponding larger parent chunks to provide additional context.</p>",
              "correct": true,
              "feedback": "<p>Hierarchical chunking is designed to balance precision and context for RAG. Smaller child chunks improve semantic match quality for pinpoint clauses, and returning parent chunks provides the broader surrounding policy text needed for grounded, defensible answers. This is a managed capability of Bedrock Knowledge Bases and avoids building and operating a custom chunking pipeline.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 49,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Hierarchical chunking is purpose-built for RAG document segmentation when answers depend on small, specific passages but still require surrounding context. By indexing smaller child chunks, the retrieval step can match user questions to the most relevant fine-grained content. By returning the associated parent chunk, the system supplies additional surrounding text for grounding and justification. Alternatives either degrade retrieval precision by embedding entire documents, add ingestion-time FM cost through semantic chunking, or introduce extra custom processing and duplication through large fixed-size chunks with overlap.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Treating an entire document as one chunk typically reduces retrieval precision because a single embedding must represent many topics and sections. It can also increase the amount of irrelevant context passed to the FM, which worsens grounding and increases token usage.<br/>• <strong>B</strong>: ❌ Large fixed chunks and high overlap increase duplicated content across chunks, which inflates storage and embedding generation work and can reduce retrieval precision by returning overly broad passages. This also introduces extra custom processing to build, deploy, and maintain.<br/>• <strong>C</strong>: ❌ Semantic chunking can improve chunk boundaries, but it incurs additional cost because an FM is invoked during ingestion to create semantically derived chunks. This conflicts with the requirement to minimize ingestion-time cost and operational overhead.<br/>• <strong>D</strong>: ✅ Hierarchical chunking is designed to balance precision and context for RAG. Smaller child chunks improve semantic match quality for pinpoint clauses, and returning parent chunks provides the broader surrounding policy text needed for grounded, defensible answers. This is a managed capability of Bedrock Knowledge Bases and avoids building and operating a custom chunking pipeline.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html\">How content chunking works for knowledge bases - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-knowledge-bases-now-supports-advanced-parsing-chunking-and-query-reformulation-giving-greater-control-of-accuracy-in-rag-based-applications/\">Amazon Bedrock Knowledge Bases now supports advanced parsing, chunking, and query reformulation giving greater control of accuracy in RAG based applications (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/kb-custom-transformation.html\">Use a custom transformation Lambda function to define how your data is ingested - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is building an internal “chat with your documents” assistant by using Amazon Bedrock Knowledge Bases backed by Amazon OpenSearch Service. Source documents are stored in Amazon S3 and include multiple versions of policies written by different teams. Users frequently ask questions such as “What is the latest policy for content takedown?” and need the response to reflect the correct business unit and the most recent document.</p><p>The company wants to improve retrieval precision and give the FM better context (for example, document timestamps and authorship) with the LEAST operational overhead.</p><p>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Truy xuất đúng phiên bản mới nhất và đúng business unit, cung cấp timestamp/tác giả cho FM.</li><li>Ưu tiên: precision, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Định nghĩa <strong>metadata schema</strong> (business_unit, author, document_timestamp) và để Knowledge Base xem là metadata, không phải nội dung; dùng cho <strong>metadata filtering</strong> và ranking mà không phải xử lý lúc query.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — gọi FM mỗi query tốn chi phí, tăng latency và custom code.</li><li><strong>B</strong>: ❌ Sai — embedding lớn hơn không mã hóa được độ mới hay tác giả.</li><li><strong>C</strong>: ❌ Sai — chunk lớn hơn thêm nhiễu, tốn token, không bảo đảm đủ thông tin.</li><li><strong>D</strong>: ✅ Đúng — metadata có cấu trúc, managed.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Metadata filtering</li><li>Metadata schema</li><li>document_timestamp</li><li>Knowledge Bases</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp cần lọc theo phiên bản, tác giả, đơn vị → nghĩ ngay đến <strong>metadata</strong> và <strong>metadata filtering</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 50,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>Build a custom post-processing Lambda function that invokes an FM to extract author and timestamp from each retrieved chunk at query time and then reranks the results before sending them to the user.</p>",
              "correct": false,
              "feedback": "<p>This adds additional FM invocations and custom logic on every query, increasing cost and operational complexity. It is also less reliable than storing metadata once at ingestion time and using it consistently for retrieval and context.</p>"
            },
            {
              "choice": "<p>Regenerate embeddings with a larger vector dimensionality for the embedding model so the vector store can better distinguish older and newer versions of similar documents.</p>",
              "correct": false,
              "feedback": "<p>Increasing embedding dimensionality can increase storage and compute cost and does not directly solve the need to reliably identify and prefer the most recent version or the correct business unit. Versioning, timestamps, and ownership are better handled as explicit metadata rather than relying on semantic differences in embeddings.</p>"
            },
            {
              "choice": "<p>Increase the chunk size and overlap settings so each chunk contains the document cover page that lists the author and publication date, ensuring the FM always receives this context in the prompt.</p>",
              "correct": false,
              "feedback": "<p>Forcing cover-page details into every chunk increases token usage and introduces noise that can reduce retrieval quality. It also mixes metadata into the chunked content, making it harder to maintain and less reliable for precision retrieval compared to a structured metadata approach.</p>"
            },
            {
              "choice": "<p>Define a standardized metadata schema (for example, business_unit, author, document_timestamp, topic tags). Store timestamps and authorship as S3 object metadata or as extracted fields, and configure the knowledge base to treat these fields as metadata (not content) so retrieval can use them to improve ranking and context.</p>",
              "correct": true,
              "feedback": "<p>A metadata framework that separates content from metadata (such as timestamps, authorship, and domain tags) improves precision and context awareness without changing the core RAG architecture. Keeping metadata out of chunk text prevents it from being fragmented during chunking, while still making it available to retrieval and to the FM for grounding responses and selecting the most appropriate document version.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 50,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To improve retrieval precision for RAG, document attributes like timestamps, authorship, business unit ownership, and domain/topic tags should be captured as explicit metadata and kept separate from chunked text. This lets the retrieval layer use consistent, structured signals to select the right documents (especially among near-duplicates and multiple versions) while also providing the FM with better context for grounded responses. Approaches that try to “hide” metadata inside chunk text, increase embedding dimensionality, or perform query-time extraction add cost, noise, or operational burden without directly addressing versioning and ownership precision.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This adds additional FM invocations and custom logic on every query, increasing cost and operational complexity. It is also less reliable than storing metadata once at ingestion time and using it consistently for retrieval and context.<br/>• <strong>B</strong>: ❌ Increasing embedding dimensionality can increase storage and compute cost and does not directly solve the need to reliably identify and prefer the most recent version or the correct business unit. Versioning, timestamps, and ownership are better handled as explicit metadata rather than relying on semantic differences in embeddings.<br/>• <strong>C</strong>: ❌ Forcing cover-page details into every chunk increases token usage and introduces noise that can reduce retrieval quality. It also mixes metadata into the chunked content, making it harder to maintain and less reliable for precision retrieval compared to a structured metadata approach.<br/>• <strong>D</strong>: ✅ A metadata framework that separates content from metadata (such as timestamps, authorship, and domain tags) improves precision and context awareness without changing the core RAG architecture. Keeping metadata out of chunk text prevents it from being fragmented during chunking, while still making it available to retrieval and to the FM for grounding responses and selecting the most appropriate document version.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-metadata.html\">Include metadata in a data source to improve knowledge base query - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html\">Configure and customize queries and response generation - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/knowledge-bases-for-amazon-bedrock-now-supports-metadata-filtering-to-improve-retrieval-accuracy/\">Amazon Bedrock Knowledge Bases now supports metadata filtering to improve retrieval accuracy (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services engineering team is building an internal assistant that uses Amazon Bedrock to handle complex billing questions (for example, “Explain why I was charged a late fee, recalculate it based on these dates, and draft a customer response”). The assistant must break each request into structured reasoning steps and take actions by calling tools such as AWS Lambda functions that query Amazon DynamoDB. The team also needs a complete, auditable execution history with built-in retries and timeout controls, and wants to minimize custom orchestration code.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: agent theo mô hình ReAct (reasoning rồi acting) gọi tool Lambda/DynamoDB nhiều bước.</li><li>Requirement chính: lịch sử thực thi audit được, retry và timeout có sẵn, ít code orchestration.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Step Functions</strong> cho sẵn <strong>execution history</strong> từng bước, <strong>Retry/Catch</strong>, TimeoutSeconds và Choice state để lặp đến khi đủ kết quả. Không phải tự viết engine điều phối.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — state machine luân phiên InvokeModel và Lambda, có đủ audit, retry, timeout.</li><li><strong>B</strong>: ❌ Sai — chỉ một vòng request-response, không có vòng lặp nhiều bước, không có retry/audit.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — while-loop tự viết, tự xử lý retry/timeout, log CloudWatch không phải execution history có cấu trúc.</li><li><strong>D</strong>: ❌ Sai — EventBridge là event routing, không giữ trạng thái và không điều khiển vòng lặp suy luận.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ReAct loop</li><li>Execution history</li><li>Retry/Catch/Timeout</li><li>Choice state</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"multi-step reasoning + audit + built-in retry/timeout\" → nghĩ ngay đến <strong>AWS Step Functions</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 51,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>Implement an AWS Step Functions state machine that alternates between an Amazon Bedrock InvokeModel task to decide the next step (reasoning) and Lambda tasks to perform the selected action (acting). Use Choice states for branching and termination conditions, and use Step Functions error handling and retries for tool failures.</p>",
              "correct": true,
              "feedback": "<p>Step Functions is well-suited for implementing a ReAct-style loop: the model produces a structured “next action” decision, the workflow invokes the corresponding tool, then the result is fed back into the next model invocation until a stop condition is reached. Step Functions provides managed orchestration features (Choice branching, retries, timeouts, and execution history) that satisfy auditing and control requirements without requiring extensive custom orchestration code.</p>"
            },
            {
              "choice": "<p>Create an Amazon API Gateway REST API that uses mapping templates to call Amazon Bedrock, then calls DynamoDB, and then returns a final response in a single request-response cycle without additional orchestration services.</p>",
              "correct": false,
              "feedback": "<p>API Gateway mapping templates and request/response transformations are not designed to orchestrate multi-step, conditional reasoning and tool execution. This approach lacks a managed mechanism for iterative reasoning/acting loops, branching logic, and built-in retries across multiple steps.</p>"
            },
            {
              "choice": "<p>Build a single AWS Lambda function that runs a custom while-loop: call the Bedrock runtime API to generate a plan, invoke DynamoDB directly for needed data, and keep iterating until the model returns a final response. Log intermediate steps to Amazon CloudWatch Logs for troubleshooting.</p>",
              "correct": false,
              "feedback": "<p>Although this can implement an agent loop, it shifts orchestration, retries/timeouts, and state management into custom code. CloudWatch Logs provide observability, but they do not provide the same managed workflow execution history, branching control, and standardized retry/timeout semantics that Step Functions provides for multi-step orchestration.</p>"
            },
            {
              "choice": "<p>Use Amazon EventBridge rules to trigger a sequence of Lambda functions: one Lambda invokes the model to generate a plan, another Lambda queries DynamoDB, and a final Lambda calls the model again to generate the response.</p>",
              "correct": false,
              "feedback": "<p>EventBridge is effective for event-driven integration, but it does not provide a stateful, ordered, multi-step workflow with built-in branching and step-level retries/timeouts in the way Step Functions does. Coordinating a structured reasoning loop across multiple EventBridge-triggered functions would add complexity and reduce auditability of the end-to-end execution.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 51,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To give an FM the ability to break down a complex problem into structured steps, the architecture needs an explicit control plane that can repeatedly: (1) ask the model what to do next, (2) execute the chosen action with well-defined tool boundaries, and (3) feed observations back into the next reasoning step until completion. AWS Step Functions is designed for this kind of orchestration and can implement ReAct-style patterns by combining Bedrock model invocations with tool invocations, conditional branching, and termination logic. It also provides managed retries, timeout controls, and a full execution history that supports auditing. Approaches that rely on a single Lambda loop or loosely coordinated events can work functionally, but they increase custom code and reduce the quality and consistency of workflow control and traceability.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Step Functions is well-suited for implementing a ReAct-style loop: the model produces a structured “next action” decision, the workflow invokes the corresponding tool, then the result is fed back into the next model invocation until a stop condition is reached. Step Functions provides managed orchestration features (Choice branching, retries, timeouts, and execution history) that satisfy auditing and control requirements without requiring extensive custom orchestration code.<br/>• <strong>B</strong>: ❌ API Gateway mapping templates and request/response transformations are not designed to orchestrate multi-step, conditional reasoning and tool execution. This approach lacks a managed mechanism for iterative reasoning/acting loops, branching logic, and built-in retries across multiple steps.<br/>• <strong>C</strong>: ❌ Although this can implement an agent loop, it shifts orchestration, retries/timeouts, and state management into custom code. CloudWatch Logs provide observability, but they do not provide the same managed workflow execution history, branching control, and standardized retry/timeout semantics that Step Functions provides for multi-step orchestration.<br/>• <strong>D</strong>: ❌ EventBridge is effective for event-driven integration, but it does not provide a stateful, ordered, multi-step workflow with built-in branching and step-level retries/timeouts in the way Step Functions does. Coordinating a structured reasoning loop across multiple EventBridge-triggered functions would add complexity and reduce auditability of the end-to-end execution.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-bedrock.html\">Invoke and customize Amazon Bedrock models with Step Functions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html\">Handling errors in Step Functions workflows (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html\">Choosing workflow type in Step Functions (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services firm is building an internal policy assistant that answers employee questions by using an Amazon Bedrock text model. The source policy documents are stored in Amazon S3. During testing, users report that the assistant sometimes invents policy details that are not present in the source documents.</p><p>The firm needs a solution that grounds responses in the policy corpus, produces a machine-readable confidence signal that the application can use to return “insufficient evidence” when answers are not supported, and returns results in a consistent JSON structure for downstream processing. The firm wants the solution with the LEAST operational overhead.</p><p>Which approach meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chống hallucination cho trợ lý chính sách nội bộ.</li><li>Requirement: <strong>grounding vào tài liệu S3</strong>, có tín hiệu confidence dạng máy đọc được, output JSON nhất quán.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Knowledge Base</strong> quản lý toàn bộ RAG, <strong>Guardrails contextual grounding check</strong> cho điểm grounding/relevance để app quyết định trả \"insufficient evidence\", và response format cố định JSON.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed RAG, grounding score làm confidence signal, JSON có cấu trúc.</li><li><strong>B</strong>: ❌ Sai — so khớp entity không kiểm chứng được tính đúng của nội dung, không grounding.</li><li><strong>C</strong>: ❌ Sai — fine-tune không đảm bảo hết bịa, tốn công train, không có confidence signal; temperature 0 chỉ giảm ngẫu nhiên.</li><li><strong>D</strong>: ❌ Sai — DynamoDB không có nearest-neighbor search, phải tự dựng retrieval, không có grounding check.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Base</li><li>Contextual grounding check</li><li>Grounding score</li><li>Retrieve-and-generate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"hallucination + grounding + confidence/threshold\" → nghĩ ngay đến <strong>Knowledge Base</strong> + <strong>Guardrails contextual grounding</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 52,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base over the policy documents in Amazon S3. Use a retrieve-and-generate pattern so the FM answers only with retrieved context. Enable Amazon Bedrock Guardrails contextual grounding checks to score grounding and relevance, and enforce a JSON response structure (for example, with a response format template) that includes fields such as answer, citations, and confidence.</p>",
              "correct": true,
              "feedback": "<p>A Knowledge Base provides managed retrieval to ground responses in the firm’s policy documents, which reduces hallucinations by supplying authoritative context at generation time. Guardrails contextual grounding checks provide an automated way to assess whether the response is supported by the retrieved context and whether it is relevant to the query, enabling the application to return “insufficient evidence” when grounding is low. Enforcing a JSON structure ensures consistent downstream parsing and validation.</p>"
            },
            {
              "choice": "<p>Use Amazon Comprehend to extract entities from the user question and from the model’s draft response. Reject the response when it contains entities that are not present in a pre-approved entity dictionary derived from the policy documents.</p>",
              "correct": false,
              "feedback": "<p>Entity allow-listing can reduce certain classes of errors, but it does not verify factual correctness or ensure that claims are grounded in the source documents. It also does not provide an evidence-based confidence measure and can lead to false positives/negatives (for example, policies might mention valid entities not present in the dictionary).</p>"
            },
            {
              "choice": "<p>Create a Bedrock custom model by fine-tuning a supported FM on the policy documents stored in Amazon S3. Set temperature to 0 for inference and store the final prompt template in Amazon Bedrock Prompt Management.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning can help align style and domain language, but it does not provide retrieval-based grounding against the current document corpus at inference time. It also does not inherently produce an evidence-based confidence signal that the application can use to detect unsupported answers, and it adds operational and cost overhead compared to managed retrieval-based grounding.</p>"
            },
            {
              "choice": "<p>Use an AWS Lambda function to generate Amazon Titan embeddings for each policy document and store the vectors in Amazon DynamoDB. For each query, compute the query embedding and use a DynamoDB Query operation to retrieve the nearest vectors for prompt augmentation.</p>",
              "correct": false,
              "feedback": "<p>Amazon DynamoDB can store vectors as attributes, but it does not provide native vector similarity search to retrieve nearest neighbors. This approach would require additional services or custom similarity infrastructure to perform semantic search, increasing operational overhead and failing the stated design as written.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 52,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To reduce hallucinations, the most reliable pattern is to ground the FM on authoritative content at inference time and to verify that the response aligns with that content. Using an Amazon Bedrock Knowledge Base implements managed retrieval over the policy corpus so the model can answer using retrieved context instead of guessing. Adding Amazon Bedrock Guardrails contextual grounding checks provides an automated grounding/relevance signal that the application can interpret as a confidence indicator and use to return an “insufficient evidence” response when needed. Finally, enforcing a consistent JSON output format enables deterministic downstream processing and validation, which improves reliability for production workflows. Options that rely on fine-tuning, entity filtering, or unsupported vector search patterns do not provide the same end-to-end grounding and verification with minimal operational overhead.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ A Knowledge Base provides managed retrieval to ground responses in the firm’s policy documents, which reduces hallucinations by supplying authoritative context at generation time. Guardrails contextual grounding checks provide an automated way to assess whether the response is supported by the retrieved context and whether it is relevant to the query, enabling the application to return “insufficient evidence” when grounding is low. Enforcing a JSON structure ensures consistent downstream parsing and validation.<br/>• <strong>B</strong>: ❌ Entity allow-listing can reduce certain classes of errors, but it does not verify factual correctness or ensure that claims are grounded in the source documents. It also does not provide an evidence-based confidence measure and can lead to false positives/negatives (for example, policies might mention valid entities not present in the dictionary).<br/>• <strong>C</strong>: ❌ Fine-tuning can help align style and domain language, but it does not provide retrieval-based grounding against the current document corpus at inference time. It also does not inherently produce an evidence-based confidence signal that the application can use to detect unsupported answers, and it adds operational and cost overhead compared to managed retrieval-based grounding.<br/>• <strong>D</strong>: ❌ Amazon DynamoDB can store vectors as attributes, but it does not provide native vector similarity search to retrieve nearest neighbors. This approach would require additional services or custom similarity infrastructure to perform semantic search, increasing operational overhead and failing the stated design as written.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html\">Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html\">RetrieveAndGenerate - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html\">Use contextual grounding check to filter hallucinations in responses - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regulated digital bank is launching a GenAI feature that uses an FM to generate customer-facing explanations for lending decisions. During audits, the bank must demonstrate which model version produced each explanation, which approved data sources were used to generate the response, and provide an immutable record of the decision workflow for later review. The team wants to meet these compliance requirements with the LEAST operational overhead.</p><p>Which solution should the team implement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chứng minh cho auditor nguồn gốc (<strong>provenance</strong>) của từng giải thích do FM sinh ra.</li><li>Requirement: biết model version nào, data source được duyệt nào, có bản ghi workflow không thể sửa.</li><li>Ưu tiên: compliance với <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SageMaker model cards</strong> ghi nhận phiên bản model đã duyệt, <strong>Glue Data Catalog</strong> kèm tag cho lineage nguồn dữ liệu, còn decision log (model ID, prompt template version, source ID) vào <strong>CloudWatch Logs</strong> cho từng quyết định.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudTrail chỉ ghi API call, không cho biết data source đã dùng hay prompt version.</li><li><strong>B</strong>: ✅ Đúng — phủ đủ model version, data lineage và log quyết định, đều là dịch vụ managed.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự viết Lambda export và schema, thêm vận hành.</li><li><strong>D</strong>: ❌ Sai — wiki cập nhật thủ công, dễ sai và không phải bằng chứng bất biến.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model cards</li><li>Data lineage</li><li>Glue Data Catalog</li><li>Decision logs / provenance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chứng minh model version + data source + audit\" → nghĩ ngay đến <strong>model cards</strong> + <strong>Glue Data Catalog lineage</strong> + <strong>logging có cấu trúc</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 53,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>Enable AWS CloudTrail across all Regions and store CloudTrail logs in an Amazon S3 bucket. Use Amazon Athena to query the CloudTrail logs when auditors request evidence about model usage.</p>",
              "correct": false,
              "feedback": "<p>CloudTrail provides an audit trail of API activity, but it does not provide a complete compliance framework for FM outputs. It does not capture application-level decision context (such as retrieved sources, prompt templates, or response payloads) or provide standardized model documentation and data lineage.</p>"
            },
            {
              "choice": "<p>Create programmatic model cards in Amazon SageMaker AI for each approved model version and deployment. Use AWS Glue Data Catalog and metadata tagging to register and attribute approved data sources and transformations for lineage. Configure the application to write comprehensive decision logs (for example, model identifier, prompt template version, retrieved source identifiers, and response metadata) to Amazon CloudWatch Logs.</p>",
              "correct": true,
              "feedback": "<p>This approach directly addresses regulatory needs with AWS-native governance components: SageMaker AI model cards document model intent, limitations, and versioning; AWS Glue enables lineage and systematic data source attribution through cataloging and metadata tagging; and CloudWatch Logs provides centralized, queryable decision logs that capture the complete decision workflow beyond what API audit logs provide.</p>"
            },
            {
              "choice": "<p>Store prompts, model IDs, and retrieved document IDs in an Amazon DynamoDB table for each request. Write a custom AWS Lambda function that periodically exports these records to Amazon S3 with a JSON schema for auditors.</p>",
              "correct": false,
              "feedback": "<p>This approach adds significant operational overhead because the team must design and maintain a custom logging and governance solution. It also does not establish standardized model documentation (model cards) or automate data lineage tracking across ingestion and transformation workflows.</p>"
            },
            {
              "choice": "<p>Publish all model requests and responses to an Amazon OpenSearch Service domain and create OpenSearch Dashboards for auditors. Document model behavior in a shared wiki and require developers to manually update the wiki after each model change.</p>",
              "correct": false,
              "feedback": "<p>OpenSearch can store and search logs, but it does not provide standardized model documentation or automated lineage capabilities on its own. Relying on manual wiki updates for model documentation increases operational overhead and introduces compliance risk due to inconsistent and error-prone processes.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 53,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A practical compliance framework for FM deployments usually needs three complementary capabilities: standardized model documentation, traceability of data sources and transformations, and durable decision logs for audit review. Programmatic model cards provide an auditable record of model purpose and versioned deployment context. A data catalog with metadata tagging and lineage allows the organization to prove which governed data sources were used (and how they were processed) in support of outputs. Centralized decision logs capture the application-level context (such as prompt template version and retrieved source identifiers) that is typically required to reconstruct and defend decisions during audits. Using managed, AWS-native services for these tasks minimizes operational burden compared to building custom governance systems or relying on manual documentation.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ CloudTrail provides an audit trail of API activity, but it does not provide a complete compliance framework for FM outputs. It does not capture application-level decision context (such as retrieved sources, prompt templates, or response payloads) or provide standardized model documentation and data lineage.<br/>• <strong>B</strong>: ✅ This approach directly addresses regulatory needs with AWS-native governance components: SageMaker AI model cards document model intent, limitations, and versioning; AWS Glue enables lineage and systematic data source attribution through cataloging and metadata tagging; and CloudWatch Logs provides centralized, queryable decision logs that capture the complete decision workflow beyond what API audit logs provide.<br/>• <strong>C</strong>: ❌ This approach adds significant operational overhead because the team must design and maintain a custom logging and governance solution. It also does not establish standardized model documentation (model cards) or automate data lineage tracking across ingestion and transformation workflows.<br/>• <strong>D</strong>: ❌ OpenSearch can store and search logs, but it does not provide standardized model documentation or automated lineage capabilities on its own. Relying on manual wiki updates for model documentation increases operational overhead and introduces compliance risk due to inconsistent and error-prone processes.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html\">Amazon SageMaker Model Cards - Amazon SageMaker AI (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lake-formation/latest/dg/TBAC-assigning-tags.html\">Assigning LF-Tags to Data Catalog resources - AWS Lake Formation (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html\">What is Amazon CloudWatch Logs? - Amazon CloudWatch Logs (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An insurance technology team is building an interactive claims assistant. An AWS Lambda function reads a user’s conversation history from Amazon DynamoDB and streams responses from an Amazon Bedrock text model by using the ConverseStream API. The same Lambda function also invokes a custom text-classification model deployed on an Amazon SageMaker AI real-time endpoint to label each new user message before it is stored.</p><p>After a refactor, Bedrock returns a validation error indicating required fields are missing, and SageMaker returns a JSON parsing error. The team wants to correct the input formatting for both inference calls with the LEAST additional development effort.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: sửa định dạng input cho hai lời gọi inference sai khác nhau.</li><li>Requirement: Bedrock báo thiếu required field, SageMaker báo lỗi JSON parsing.</li><li>Ưu tiên: sửa nhanh, <strong>LEAST development effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ConverseStream</strong> yêu cầu mảng messages có role và content. Endpoint SageMaker cần body JSON đúng schema của model và <strong>Content-Type application/json</strong>. Mỗi API sửa đúng định dạng riêng của nó.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — plain text không phải messages structure, SageMaker vẫn gặp lỗi JSON.</li><li><strong>B</strong>: ❌ Sai — endpoint bedrock là control plane, không có inference; đúng là bedrock-runtime.</li><li><strong>C</strong>: ❌ Sai — Titan multimodal embedding không dùng để sinh text hay phân loại, và không \"chuẩn hóa\" được hai API.</li><li><strong>D</strong>: ✅ Đúng — đúng schema Converse và đúng JSON/Content-Type cho SageMaker.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ConverseStream messages (role, content)</li><li>bedrock-runtime</li><li>InvokeEndpoint</li><li>Content-Type application/json</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"validation error missing fields\" ở Converse → nghĩ ngay đến <strong>messages array role/content</strong>; SageMaker thì JSON đúng schema model.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 54,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>Change the Lambda function to concatenate the full conversation history into a single plain-text prompt and invoke the Bedrock InvokeModelWithResponseStream API. Send the same plain-text payload to the SageMaker endpoint for classification.</p>",
              "correct": false,
              "feedback": "<p>Bedrock streaming can be done with other APIs, but sending a single concatenated string does not address the model-specific request schema expected by ConverseStream. Additionally, SageMaker endpoints typically expect a specific structured request body (commonly JSON) defined by the model’s inference code, and SageMaker will not automatically parse an arbitrary plain-text payload into the expected schema.</p>"
            },
            {
              "choice": "<p>Invoke the Bedrock control plane endpoint (bedrock) instead of bedrock-runtime and pass the conversation history as a JSON string. Keep the SageMaker request unchanged.</p>",
              "correct": false,
              "feedback": "<p>The bedrock endpoint is for management operations, not for runtime inference. Inference requests must be sent to the runtime endpoint (bedrock-runtime). This also does not fix the SageMaker parsing issue.</p>"
            },
            {
              "choice": "<p>Base64-encode the conversation history and pass it as an inputImage field to a multimodal Amazon Titan embedding model to standardize the request format across Bedrock and SageMaker.</p>",
              "correct": false,
              "feedback": "<p>This uses an embedding model interface that is not intended for chat generation and does not match the required ConverseStream schema. It also does not address the SageMaker endpoint’s expected input format for the classification model.</p>"
            },
            {
              "choice": "<p>In the Lambda function, format the Bedrock request body as a ConverseStream messages structure that includes a messages array with role and content fields for each turn. Separately, send a SageMaker InvokeEndpoint request with a JSON body that matches the SageMaker model’s expected input schema (for example, a single field that contains the latest user text) and set the request Content-Type to application/json.</p>",
              "correct": true,
              "feedback": "<p>ConverseStream requires the conversation to be represented as structured JSON with a messages array where each message contains a role (for example, user or assistant) and content (for example, text). SageMaker endpoints do not transform inputs automatically; the caller must serialize the payload in the exact format required by the deployed model’s inference handler (commonly JSON) and provide the appropriate content type. Creating two correctly formatted request payloads aligns with each service’s model-specific inference requirements with minimal code changes.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 54,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key fix is to format inference inputs according to each target’s required schema. For Amazon Bedrock conversational inference, the Converse/ConverseStream APIs expect a structured JSON conversation format that explicitly represents each turn with role and content fields. For Amazon SageMaker AI endpoints, the model container defines the request schema, and SageMaker does not automatically adapt a Bedrock-style conversation payload; the application must construct the exact JSON shape (and content type) that the endpoint expects. Using separate, model-specific request bodies resolves both validation and parsing errors without redesigning the application.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Bedrock streaming can be done with other APIs, but sending a single concatenated string does not address the model-specific request schema expected by ConverseStream. Additionally, SageMaker endpoints typically expect a specific structured request body (commonly JSON) defined by the model’s inference code, and SageMaker will not automatically parse an arbitrary plain-text payload into the expected schema.<br/>• <strong>B</strong>: ❌ The bedrock endpoint is for management operations, not for runtime inference. Inference requests must be sent to the runtime endpoint (bedrock-runtime). This also does not fix the SageMaker parsing issue.<br/>• <strong>C</strong>: ❌ This uses an embedding model interface that is not intended for chat generation and does not match the required ConverseStream schema. It also does not address the SageMaker endpoint’s expected input format for the classification model.<br/>• <strong>D</strong>: ✅ ConverseStream requires the conversation to be represented as structured JSON with a messages array where each message contains a role (for example, user or assistant) and content (for example, text). SageMaker endpoints do not transform inputs automatically; the caller must serialize the payload in the exact format required by the deployed model’s inference handler (commonly JSON) and provide the appropriate content type. Creating two correctly formatted request payloads aligns with each service’s model-specific inference requirements with minimal code changes.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html\">ConverseStream - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-call.html\">Using the Converse API - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html\">InvokeEndpoint - Amazon SageMaker (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare platform team is enabling multiple product groups to build GenAI applications on AWS by using Amazon Bedrock. The applications will be deployed in different AWS accounts and environments (dev, test, and production). The platform team must provide a consistent, repeatable way for teams to implement GenAI architectures that align with organizational best practices across security, reliability, and cost.</p><p>Which approach will achieve this with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuẩn hóa kiến trúc GenAI cho nhiều team, nhiều account và môi trường.</li><li>Requirement: nhất quán, lặp lại được, theo best practice về security, reliability, cost.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Well-Architected Generative AI Lens</strong> định nghĩa best practice, <strong>Well-Architected Tool</strong> để review, và template CDK/CloudFormation tái sử dụng giúp deploy cùng một kiến trúc chuẩn ở mọi account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP chỉ chặn quyền, không cung cấp kiến trúc chuẩn; ép một FM cho mọi workload là phi thực tế.</li><li><strong>B</strong>: ❌ Sai — tự xây hệ thống review, thêm vận hành, trong khi đã có công cụ managed.</li><li><strong>C</strong>: ✅ Đúng — framework chuẩn cộng IaC tái sử dụng.</li><li><strong>D</strong>: ❌ Sai — playground chỉ để thử nghiệm, kiểm tra sau triển khai bằng CloudTrail là phản ứng muộn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Well-Architected Generative AI Lens</li><li>Well-Architected Tool</li><li>Reusable IaC (CDK/CloudFormation)</li><li>Multi-account</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"best practice nhất quán, lặp lại cho GenAI\" → nghĩ ngay đến <strong>Well-Architected GenAI Lens</strong> + <strong>IaC template</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 55,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>Use AWS Organizations service control policies (SCPs) to restrict which AWS Regions and services can be used, and require all teams to use the same foundation model for every GenAI workload.</p>",
              "correct": false,
              "feedback": "<p>SCPs can help with governance controls, but they do not provide standardized GenAI architectural components or a repeatable best-practices implementation approach. Enforcing a single model choice also does not ensure consistent architecture across deployments.</p>"
            },
            {
              "choice": "<p>Create a custom internal architecture review system by using AWS Lambda, Amazon DynamoDB, and Amazon API Gateway to enforce a proprietary checklist for every GenAI deployment.</p>",
              "correct": false,
              "feedback": "<p>Although it could standardize reviews, building and maintaining a custom governance and validation system increases operational overhead compared to using established Well-Architected mechanisms and a managed review workflow.</p>"
            },
            {
              "choice": "<p>Use the AWS Well-Architected Tool with the AWS Well-Architected Generative AI Lens to define and review a standard GenAI architecture. Provide approved reusable infrastructure-as-code components (for example, AWS CDK or AWS CloudFormation templates) that teams can deploy across accounts and environments.</p>",
              "correct": true,
              "feedback": "<p>The Generative AI Lens provides a consistent set of best practices aligned to the Well-Architected Framework pillars. Using the Well-Architected Tool establishes a repeatable review mechanism, and publishing reusable IaC components creates standardized technical building blocks that teams can apply across multiple deployment scenarios with minimal ongoing manual effort.</p>"
            },
            {
              "choice": "<p>Grant each product group permissions to use the Amazon Bedrock console playground to prototype their solution, and use AWS CloudTrail logs after deployment to verify that teams followed organizational standards.</p>",
              "correct": false,
              "feedback": "<p>Prototyping in the playground does not create standardized components or consistent implementation patterns. Auditing after deployment is reactive and does not provide a repeatable design and implementation standard for multiple teams and environments.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 55,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most effective low-overhead way to standardize GenAI implementations across many teams and deployment scenarios is to combine a repeatable architecture review process with reusable building blocks. The AWS Well-Architected Tool and the Generative AI Lens provide a consistent best-practices framework aligned to the Well-Architected pillars, and publishing approved infrastructure-as-code templates or constructs enables teams to deploy the same vetted patterns across accounts and environments. Other approaches either rely on post-hoc auditing, add significant custom tooling overhead, or focus on restrictive governance controls without standardizing how solutions are designed and implemented.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ SCPs can help with governance controls, but they do not provide standardized GenAI architectural components or a repeatable best-practices implementation approach. Enforcing a single model choice also does not ensure consistent architecture across deployments.<br/>• <strong>B</strong>: ❌ Although it could standardize reviews, building and maintaining a custom governance and validation system increases operational overhead compared to using established Well-Architected mechanisms and a managed review workflow.<br/>• <strong>C</strong>: ✅ The Generative AI Lens provides a consistent set of best practices aligned to the Well-Architected Framework pillars. Using the Well-Architected Tool establishes a repeatable review mechanism, and publishing reusable IaC components creates standardized technical building blocks that teams can apply across multiple deployment scenarios with minimal ongoing manual effort.<br/>• <strong>D</strong>: ❌ Prototyping in the playground does not create standardized components or consistent implementation patterns. Auditing after deployment is reactive and does not provide a repeatable design and implementation standard for multiple teams and environments.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html\">Generative AI Lens - AWS Well-Architected Framework (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/wellarchitected/latest/userguide/waf.html\">What is AWS Well-Architected Framework? - AWS Well-Architected Tool (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html\">Best practices for developing and deploying cloud infrastructure with the AWS CDK - AWS Cloud Development Kit (AWS CDK) v2 (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global HR SaaS provider is building a semantic search feature for internal policy documents by using a RAG architecture. The team will embed millions of document chunks and store the vectors in a vector database for similarity search. The solution must keep vector storage costs low while maintaining search relevance for the organization’s terminology, and the embedding generation process must efficiently handle nightly ingestion of large document batches.</p><p>Which combination of actions will meet these requirements MOST cost-effectively? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: RAG với hàng triệu chunk, cần <strong>vector store rẻ</strong> mà vẫn relevance tốt.</li><li>Requirement: chi phí lưu vector thấp, hợp thuật ngữ tổ chức, ingest batch hàng đêm hiệu quả.</li><li>Ưu tiên: <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Giảm số chiều embedding</strong> (sau khi kiểm chứng relevance) giảm trực tiếp dung lượng lưu trữ, batch hóa giúp ingest hiệu quả. <strong>POC so sánh nhiều embedding model</strong> đảm bảo chọn model hợp domain.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Titan hỗ trợ chọn dimension nhỏ hơn, cộng batch embedding.</li><li><strong>B</strong>: ❌ Sai — chỉ giữ nhãn topic và keyword search mất khả năng semantic search.</li><li><strong>C</strong>: ❌ Sai — DynamoDB PartiQL không có similarity search vector.</li><li><strong>D</strong>: ✅ Đúng — đánh giá top-k relevance trên dữ liệu thật để chọn model phù hợp domain và ngôn ngữ.</li><li><strong>E</strong>: ❌ Sai — dimension tối đa làm tăng chi phí lưu trữ, gọi từng chunk một kém hiệu quả.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Embedding dimension</li><li>Batch embedding</li><li>POC so sánh model</li><li>Top-k relevance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giảm chi phí vector storage\" → nghĩ ngay đến <strong>giảm dimension</strong> (có kiểm chứng) + <strong>chọn embedding model</strong> bằng đánh giá.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 56,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>Use an Amazon Titan embedding model and configure a smaller embedding vector dimension after validating that retrieval relevance remains acceptable for the policy-document domain. Use AWS Lambda to batch-generate embeddings for new chunks before writing them to the vector store.</p>",
              "correct": true,
              "feedback": "<p>Smaller embedding dimensionality reduces storage and indexing costs for large corpora, but should be validated to ensure it still captures the semantic detail needed for the domain. Batch generation with Lambda reduces per-item invocation overhead and improves ingestion efficiency for nightly loads.</p>"
            },
            {
              "choice": "<p>Use Amazon Comprehend to classify each document into topics and store only the topic labels. Use keyword search on the labels instead of generating embeddings to reduce cost.</p>",
              "correct": false,
              "feedback": "<p>Topic classification and keyword search do not provide the semantic similarity retrieval required for embedding-based vector search, and this approach would not meet the semantic search requirement for RAG-based retrieval.</p>"
            },
            {
              "choice": "<p>Store embeddings and chunk metadata in Amazon DynamoDB and use PartiQL queries to perform semantic similarity searches directly in DynamoDB.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB can store embedding vectors as attributes but does not provide native vector similarity search for k-nearest-neighbor retrieval, making it unsuitable as the primary semantic vector search engine for a RAG retriever.</p>"
            },
            {
              "choice": "<p>Run a proof of concept that generates embeddings for a representative set of documents and queries by using multiple Amazon Bedrock embedding models (for example, Amazon Titan embeddings and an alternative embedding model). Compare retrieval quality metrics (such as top-k relevance) and select the model that best fits the domain and language needs.</p>",
              "correct": true,
              "feedback": "<p>Embedding models can differ in how well they represent domain-specific concepts and multilingual content. Evaluating retrieval performance on representative queries is an effective way to select an embedding model that best aligns with the business use case.</p>"
            },
            {
              "choice": "<p>Configure the embedding model to use the maximum available vector dimension to improve accuracy. Invoke the embedding model from the application for each chunk individually to avoid batching complexity.</p>",
              "correct": false,
              "feedback": "<p>Always maximizing dimensionality can significantly increase storage and indexing costs and is not guaranteed to improve retrieval enough to justify the cost. Generating embeddings one chunk at a time increases invocation overhead and slows nightly ingestion compared to batching.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 56,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>To keep costs low at scale, the embedding strategy should reduce the size and number of vectors stored while preserving retrieval quality. Configuring an embedding model with an appropriately smaller vector dimension can materially reduce vector storage and indexing costs, but it must be validated against real queries to avoid harming relevance. Because different embedding models can behave differently across domains and languages, testing multiple Bedrock embedding model options on representative data is a reliable way to choose the best fit. Finally, batching embedding generation with Lambda improves ingestion throughput and reduces per-item overhead during large nightly loads.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Smaller embedding dimensionality reduces storage and indexing costs for large corpora, but should be validated to ensure it still captures the semantic detail needed for the domain. Batch generation with Lambda reduces per-item invocation overhead and improves ingestion efficiency for nightly loads.<br/>• <strong>B</strong>: ❌ Topic classification and keyword search do not provide the semantic similarity retrieval required for embedding-based vector search, and this approach would not meet the semantic search requirement for RAG-based retrieval.<br/>• <strong>C</strong>: ❌ DynamoDB can store embedding vectors as attributes but does not provide native vector similarity search for k-nearest-neighbor retrieval, making it unsuitable as the primary semantic vector search engine for a RAG retriever.<br/>• <strong>D</strong>: ✅ Embedding models can differ in how well they represent domain-specific concepts and multilingual content. Evaluating retrieval performance on representative queries is an effective way to select an embedding model that best aligns with the business use case.<br/>• <strong>E</strong>: ❌ Always maximizing dimensionality can significantly increase storage and indexing costs and is not guaranteed to improve retrieval enough to justify the cost. Generating embeddings one chunk at a time increases invocation overhead and slows nightly ingestion compared to batching.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html\">Amazon Titan Text Embeddings models - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/get-started-with-amazon-titan-text-embeddings-v2-a-new-state-of-the-art-embeddings-model-on-amazon-bedrock/\">Get started with Amazon Titan Text Embeddings V2: A new state-of-the-art embeddings model on Amazon Bedrock | Artificial Intelligence (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html\">Using Lambda with Amazon SQS - AWS Lambda (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, D"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional insurance provider wants to improve its claims handling workflow. Claims adjusters upload scanned PDFs and images (for example, incident photos and handwritten forms) to an Amazon S3 bucket from an internal web portal. The provider needs to extract a consistent set of fields (such as policy number, claimant name, and claim amount) into structured JSON, then update the corresponding record in an external CRM system by using an API call. The solution must be serverless and require the LEAST operational overhead as document formats evolve.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: trích xuất field từ PDF/ảnh scan thành JSON rồi cập nhật CRM.</li><li>Requirement: serverless, format tài liệu thay đổi vẫn ít phải sửa.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Bedrock Data Automation</strong> dùng <strong>blueprint</strong> định nghĩa field cần trích, xử lý đa phương thức (tài liệu, ảnh) ra JSON có cấu trúc. Step Functions và Lambda chỉ làm phần dán nối với CRM.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed, blueprint thích ứng format mới, workflow serverless.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Textract, Glue, Comprehend custom entity là pipeline nhiều thành phần, phải train và bảo trì khi format đổi.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — prompt thô cho InvokeModel, schema không được đảm bảo, tự xử lý PDF lớn, không có retry/orchestration.</li><li><strong>D</strong>: ❌ Sai — Q Business dành cho hỏi đáp, quy trình thủ công copy paste, không tự động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Data Automation</li><li>Blueprints</li><li>Structured JSON</li><li>Document/image extraction</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"trích field có cấu trúc từ tài liệu và ảnh, serverless\" → nghĩ ngay đến <strong>Bedrock Data Automation</strong> + <strong>blueprint</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 57,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>Configure an S3 event notification to start an AWS Step Functions workflow. In the workflow, invoke Amazon Bedrock Data Automation asynchronously by using a project that contains blueprints for the required fields. After the job completes, have a Lambda function read the JSON output and call the CRM API to update the claim record.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Data Automation is designed to extract structured data from documents and images, and blueprints provide a managed way to define and evolve required fields (including normalization) with minimal custom parsing. Step Functions provides durable orchestration for an asynchronous document-processing workflow, and Lambda can implement the CRM update logic without provisioning servers.</p>"
            },
            {
              "choice": "<p>Use Amazon Textract to perform OCR on the uploaded documents and store extracted text in Amazon S3. Run an AWS Glue ETL job to normalize the text and then use Amazon Comprehend custom entity recognition to extract the required fields. Use AWS Step Functions to orchestrate the pipeline and a Lambda function to update the CRM record.</p>",
              "correct": false,
              "feedback": "<p>Although this can work, it introduces substantially more operational overhead: building and maintaining multi-step OCR and ETL logic, plus creating and managing a custom entity recognizer. The requirement emphasizes minimizing operational overhead as document formats change, which is better addressed by a managed document extraction approach.</p>"
            },
            {
              "choice": "<p>Configure an S3 event notification to invoke an AWS Lambda function that calls the Amazon Bedrock InvokeModel API with a prompt instructing the FM to extract the required fields and output JSON. Have the same Lambda function call the CRM API to update the claim record.</p>",
              "correct": false,
              "feedback": "<p>This approach relies on prompt-based extraction that is less controlled for consistent, production-grade field extraction and typically requires additional custom preprocessing for scanned PDFs/images. It also lacks blueprint-driven extraction, normalization, and document-processing features that reduce operational overhead as formats change.</p>"
            },
            {
              "choice": "<p>Create an Amazon Q Business application with data connectors for the S3 bucket and the CRM system. Instruct employees to ask Q Business to extract the claim fields from uploaded documents and then manually paste the results into the CRM system.</p>",
              "correct": false,
              "feedback": "<p>Amazon Q Business is primarily an employee assistant for answering questions and summarizing information from connected data sources. This option does not implement an automated document-processing workflow or a programmatic CRM update path, and it relies on manual steps that do not meet the automation requirement.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 57,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The lowest-overhead serverless design is to orchestrate an asynchronous document-processing workflow that uses a managed extraction service purpose-built for multimodal inputs and structured outputs. Amazon Bedrock Data Automation can extract structured JSON from PDFs and images and can be configured with blueprints to define and evolve the required fields. AWS Step Functions provides reliable workflow orchestration (including waiting for asynchronous completion), and AWS Lambda can apply the extracted results by calling the CRM API. Alternatives either require significant custom OCR/ETL and model management or rely on manual, non-automated processes.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Amazon Bedrock Data Automation is designed to extract structured data from documents and images, and blueprints provide a managed way to define and evolve required fields (including normalization) with minimal custom parsing. Step Functions provides durable orchestration for an asynchronous document-processing workflow, and Lambda can implement the CRM update logic without provisioning servers.<br/>• <strong>B</strong>: ❌ Although this can work, it introduces substantially more operational overhead: building and maintaining multi-step OCR and ETL logic, plus creating and managing a custom entity recognizer. The requirement emphasizes minimizing operational overhead as document formats change, which is better addressed by a managed document extraction approach.<br/>• <strong>C</strong>: ❌ This approach relies on prompt-based extraction that is less controlled for consistent, production-grade field extraction and typically requires additional custom preprocessing for scanned PDFs/images. It also lacks blueprint-driven extraction, normalization, and document-processing features that reduce operational overhead as formats change.<br/>• <strong>D</strong>: ❌ Amazon Q Business is primarily an employee assistant for answering questions and summarizing information from connected data sources. This option does not implement an automated document-processing workflow or a programmatic CRM update path, and it relies on manual steps that do not meet the automation requirement.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/bda-using-api.html\">Using the Bedrock Data Automation API - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/bda-custom-output-idp.html\">Custom output and blueprints - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-cloudwatch-events-s3.html\">Starting a Step Functions workflow in response to events - AWS Step Functions (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company is building an internal GenAI assistant on AWS by using Amazon Bedrock and a RAG architecture. Engineering specifications are stored in a SharePoint Online document library, and design decision records are maintained in an Atlassian Confluence wiki. The customer support team maintains troubleshooting articles in Salesforce. For compliance reasons, a copy of the Salesforce articles must also be stored in Amazon S3.</p><p>The company wants to integrate these sources into a single retrieval layer with the LEAST operational overhead.</p><p>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: gom SharePoint, Confluence, Salesforce vào một retrieval layer cho RAG.</li><li>Requirement: một lớp retrieval chung, <strong>bản sao Salesforce</strong> phải nằm trong S3.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Knowledge Base</strong> có connector sẵn cho Confluence và SharePoint. Salesforce được <strong>Amazon AppFlow</strong> sao chép vào S3 (đáp ứng yêu cầu compliance), rồi cùng Knowledge Base ingest từ S3.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — scrape tự viết, DynamoDB scan rồi nhét vào prompt không scale, không semantic.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — pipeline tự xây, tự quản lý embedding và indexing, nhiều vận hành.</li><li><strong>C</strong>: ✅ Đúng — managed connector cho Confluence/SharePoint cùng managed vector store.</li><li><strong>D</strong>: ✅ Đúng — AppFlow đưa Salesforce vào S3, Knowledge Base ingest từ S3.</li><li><strong>E</strong>: ❌ Sai — Glue crawler chỉ lấy metadata schema, Athena không truy vấn semantic passage.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Base data source connectors</li><li>Amazon AppFlow</li><li>Salesforce to S3</li><li>Managed vector store</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"nhiều nguồn SaaS vào RAG, ít vận hành\" → nghĩ ngay đến <strong>Knowledge Base connector</strong> + <strong>AppFlow</strong> (nếu cần đệm S3).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 58,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>Create AWS Lambda functions to scrape Confluence and SharePoint content into Amazon DynamoDB tables. At query time, run DynamoDB scans and add the returned items directly into the FM prompt as context.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB scans are inefficient for retrieval and do not provide semantic search over embeddings. This approach also increases operational overhead by requiring custom scraping, storage logic, and retrieval logic.</p>"
            },
            {
              "choice": "<p>Build a custom ingestion pipeline that exports content from Confluence, SharePoint, and Salesforce, generates embeddings by calling the Amazon Bedrock Runtime API from application code, and indexes vectors directly into Amazon OpenSearch Service.</p>",
              "correct": false,
              "feedback": "<p>Although OpenSearch can be used as a vector store, this option requires building and operating custom connectors, embedding pipelines, and indexing workflows. It does not meet the requirement for the least operational overhead compared with managed Knowledge Base integrations and managed SaaS data transfer.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base and configure Confluence and SharePoint as data sources. Use an embedding model (for example, Amazon Titan embeddings) and a managed vector store integration to support semantic retrieval for the RAG application.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Knowledge Bases provide managed connectors for common enterprise content systems such as Confluence and SharePoint, and they manage ingestion, chunking/embedding, and retrieval integration for RAG with minimal custom integration code.</p>"
            },
            {
              "choice": "<p>Use Amazon AppFlow to replicate Salesforce knowledge articles into an Amazon S3 bucket on a schedule or on demand. Configure the Amazon Bedrock Knowledge Base to ingest the S3 content so the RAG application can retrieve from it.</p>",
              "correct": true,
              "feedback": "<p>AppFlow is a managed SaaS-to-AWS integration service that can move Salesforce data into S3, satisfying the compliance requirement to keep a copy in S3. Using S3 as a Knowledge Base data source then provides managed ingestion into the retrieval layer.</p>"
            },
            {
              "choice": "<p>Use AWS Glue crawlers to discover Confluence, SharePoint, and Salesforce schemas and store metadata in the AWS Glue Data Catalog. Query the sources with Amazon Athena at runtime to retrieve relevant passages for RAG.</p>",
              "correct": false,
              "feedback": "<p>Glue crawlers and Athena are designed for querying data in S3 and supported data sources using SQL and schema-on-read patterns, not as a direct integration mechanism for enterprise wiki/document systems for semantic retrieval. This also creates a brittle runtime dependency on ad hoc SQL retrieval rather than vector-based retrieval.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 58,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The lowest-operations approach is to use managed integration components rather than building custom crawlers and ingestion pipelines. Amazon Bedrock Knowledge Bases can connect directly to enterprise knowledge sources such as Confluence and SharePoint and provide a managed path from source documents to semantic retrieval for RAG. For Salesforce content, Amazon AppFlow provides a managed way to replicate SaaS data into Amazon S3 to satisfy the requirement to keep an S3 copy, and the Knowledge Base can then ingest from S3 to make that content available to the RAG application. The other approaches either rely on non-semantic retrieval methods, use services that are not designed for this type of enterprise-content integration, or require significant custom pipeline implementation and ongoing maintenance.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ DynamoDB scans are inefficient for retrieval and do not provide semantic search over embeddings. This approach also increases operational overhead by requiring custom scraping, storage logic, and retrieval logic.<br/>• <strong>B</strong>: ❌ Although OpenSearch can be used as a vector store, this option requires building and operating custom connectors, embedding pipelines, and indexing workflows. It does not meet the requirement for the least operational overhead compared with managed Knowledge Base integrations and managed SaaS data transfer.<br/>• <strong>C</strong>: ✅ Amazon Bedrock Knowledge Bases provide managed connectors for common enterprise content systems such as Confluence and SharePoint, and they manage ingestion, chunking/embedding, and retrieval integration for RAG with minimal custom integration code.<br/>• <strong>D</strong>: ✅ AppFlow is a managed SaaS-to-AWS integration service that can move Salesforce data into S3, satisfying the compliance requirement to keep a copy in S3. Using S3 as a Knowledge Base data source then provides managed ingestion into the retrieval layer.<br/>• <strong>E</strong>: ❌ Glue crawlers and Athena are designed for querying data in S3 and supported data sources using SQL and schema-on-read patterns, not as a direct integration mechanism for enterprise wiki/document systems for semantic retrieval. This also creates a brittle runtime dependency on ad hoc SQL retrieval rather than vector-based retrieval.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/data-source-connectors.html\">Connect a data source to your knowledge base - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/s3-data-source-connector.html\">Connect to Amazon S3 for your knowledge base - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/appflow/latest/userguide/salesforce.html\">Salesforce connector for Amazon AppFlow - Amazon AppFlow (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C, D"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media analytics company is building a RAG assistant on AWS by using Amazon Bedrock for text generation. For the retrieval layer, some workloads use Amazon OpenSearch Service for vector search, while other workloads use Amazon Aurora PostgreSQL with the pgvector extension for advanced metadata filtering. The GenAI team wants a single, consistent retrieval interface that Bedrock-based applications can use without being rewritten when the underlying vector store changes.</p><p>Which solution will provide the MOST seamless integration mechanism for retrieval augmentation across these vector stores?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: một giao diện retrieval thống nhất trên OpenSearch và Aurora pgvector.</li><li>Requirement: đổi vector store mà app Bedrock không phải viết lại.</li><li>Ưu tiên: tích hợp liền mạch (<strong>MOST seamless</strong>).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>MCP server stateless</strong> trên Lambda mở một tool <strong>vector_search</strong> với hợp đồng JSON ổn định. Việc route sang OpenSearch hay Aurora nằm bên trong, client/agent chỉ biết tool.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — logic điều kiện lặp ở từng app, đổi store là phải sửa code.</li><li><strong>B</strong>: ✅ Đúng — lớp trừu tượng chuẩn MCP, backend thay đổi không ảnh hưởng client.</li><li><strong>C</strong>: ❌ Sai — hai endpoint riêng, bắt model tự chọn endpoint qua prompt, thiếu tin cậy.</li><li><strong>D</strong>: ❌ Sai — S3 prefix/metadata filter không phải vector similarity search.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model Context Protocol (MCP)</li><li>Stable tool contract</li><li>Abstraction over vector stores</li><li>Stateless Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giao diện thống nhất, đổi backend không sửa app\" → nghĩ ngay đến <strong>MCP server</strong> làm lớp trừu tượng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>Implement separate retrieval modules in the application code: one that queries OpenSearch using its vector search APIs and another that queries Aurora using SQL with pgvector. Add conditional logic in each application to select the correct module.</p>",
              "correct": false,
              "feedback": "<p>This approach duplicates integration logic across applications and creates multiple access patterns. Switching vector store choices requires code changes and redeployments, which conflicts with the goal of a single, consistent retrieval interface.</p>"
            },
            {
              "choice": "<p>Create a stateless Model Context Protocol (MCP) server (for example, on AWS Lambda) that exposes a single tool such as \"vector_search\" with a stable JSON input/output contract. Use an MCP client library in the application/agent runtime to call this tool, and route the request internally to OpenSearch or Aurora as needed.</p>",
              "correct": true,
              "feedback": "<p>An MCP server plus an MCP client provides a standardized tool interface for vector queries. The stable contract abstracts away vendor- or engine-specific query details and lets the backend implementation change (OpenSearch vs Aurora pgvector) without changing how the FM-integrated application invokes retrieval.</p>"
            },
            {
              "choice": "<p>Create two Amazon API Gateway endpoints: one backed by an AWS Lambda function that queries OpenSearch and another backed by a different Lambda function that queries Aurora. Instruct the foundation model in the prompt to call the appropriate endpoint based on the user’s request.</p>",
              "correct": false,
              "feedback": "<p>Exposing multiple endpoints still results in inconsistent access patterns for the model and application. Relying on prompt instructions for endpoint selection is brittle and increases the chance of incorrect routing or malformed requests.</p>"
            },
            {
              "choice": "<p>Store embeddings and document chunks directly in Amazon S3 objects and retrieve relevant chunks by using S3 prefix filters and object metadata filters. Pass the retrieved objects as context to the model.</p>",
              "correct": false,
              "feedback": "<p>S3 prefix and metadata filtering is not a semantic (vector) retrieval mechanism and does not provide k-nearest-neighbor style similarity search. This does not meet the requirement for a consistent vector retrieval interface across vector stores.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 59,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A consistent access mechanism for retrieval augmentation is best achieved by placing a stable, tool-like contract in front of the retrieval layer and letting applications or agents invoke that contract in the same way regardless of which vector store is used. Using an MCP server to expose a single vector-query tool, combined with an MCP client in the runtime, standardizes how the FM-integrated system performs retrieval and returns normalized results (for example, chunks plus metadata). This approach prevents tight coupling to OpenSearch-specific or Aurora/SQL-specific query logic and avoids rewriting application integrations when the organization changes vector stores.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach duplicates integration logic across applications and creates multiple access patterns. Switching vector store choices requires code changes and redeployments, which conflicts with the goal of a single, consistent retrieval interface.<br/>• <strong>B</strong>: ✅ An MCP server plus an MCP client provides a standardized tool interface for vector queries. The stable contract abstracts away vendor- or engine-specific query details and lets the backend implementation change (OpenSearch vs Aurora pgvector) without changing how the FM-integrated application invokes retrieval.<br/>• <strong>C</strong>: ❌ Exposing multiple endpoints still results in inconsistent access patterns for the model and application. Relying on prompt instructions for endpoint selection is brittle and increases the chance of incorrect routing or malformed requests.<br/>• <strong>D</strong>: ❌ S3 prefix and metadata filtering is not a semantic (vector) retrieval mechanism and does not provide k-nearest-neighbor style similarity search. This does not meet the requirement for a consistent vector retrieval interface across vector stores.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html\">Deploy MCP servers in AgentCore Runtime - Amazon Bedrock AgentCore (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vector-search.html\">Vector search - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.VectorDB.html\">Using Aurora PostgreSQL as a Knowledge Base for Amazon Bedrock - Amazon Aurora (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare analytics team is building an internal GenAI assistant that uses Amazon Bedrock to summarize clinical case notes. The assistant retrieves supporting facts from a data lake in Amazon S3 by running Amazon Athena queries. The team must ensure that service-to-service traffic does not traverse the public internet and that the Bedrock invocation can access only approved columns (no PHI) from the data lake. The team also wants to monitor data access with minimal operational overhead.</p><p>Which solution meets these requirements MOST effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: GenAI đọc data lake qua Athena, dữ liệu y tế có PHI.</li><li>Requirement: traffic <strong>không đi qua public internet</strong>, chỉ truy cập cột được duyệt, giám sát ít vận hành.</li><li>Ưu tiên: security và <strong>MOST effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Interface VPC endpoint</strong> (PrivateLink) cho Bedrock/Athena và <strong>gateway endpoint</strong> cho S3 giữ traffic trong mạng AWS. <strong>Lake Formation</strong> áp column-level permission loại cột PHI. CloudWatch Logs để giám sát.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — NAT gateway ra public endpoint, S3 bucket policy không kiểm soát cấp cột.</li><li><strong>B</strong>: ✅ Đúng — private connectivity cộng column-level governance cộng monitoring.</li><li><strong>C</strong>: ❌ Sai — chuyển data sang OpenSearch là thay đổi lớn, vẫn gọi Bedrock qua public endpoint.</li><li><strong>D</strong>: ❌ Sai — mã hóa client-side và KMS không giới hạn theo cột, vẫn đi public endpoint.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS PrivateLink / interface VPC endpoint</li><li>S3 gateway endpoint</li><li>Lake Formation column-level (data filters)</li><li>No internet gateway</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"không qua public internet + giới hạn cột\" → nghĩ ngay đến <strong>VPC endpoints</strong> + <strong>Lake Formation</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 60,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>Place the AWS Lambda function in private subnets and use a NAT gateway for outbound access to Amazon Bedrock and Amazon Athena public endpoints. Restrict access to S3 objects by using S3 bucket policies and encrypt the bucket with SSE-KMS.</p>",
              "correct": false,
              "feedback": "<p>A NAT gateway still routes traffic to public service endpoints over the internet, which does not meet the requirement to avoid public internet paths. SSE-KMS and bucket policies help protect data at rest and control S3 access, but they do not provide the required private connectivity to Bedrock and Athena, nor do they provide column-level controls for query results.</p>"
            },
            {
              "choice": "<p>Create interface VPC endpoints (AWS PrivateLink) for Amazon Bedrock and Amazon Athena, and create a gateway VPC endpoint for Amazon S3. Run the Lambda function in private subnets with no internet gateway. Use AWS Lake Formation to apply column-level permissions (data filters) to the Athena tables. Grant the Lambda execution role least-privilege permissions to query only the governed tables. Send access and application logs to Amazon CloudWatch Logs for monitoring.</p>",
              "correct": true,
              "feedback": "<p>VPC endpoints keep service-to-service traffic on the AWS network without public internet exposure. Lake Formation can enforce granular (including column-level) access controls for Athena tables so the application cannot retrieve PHI columns. A least-privilege IAM role constrains what the Lambda function can query and access. CloudWatch provides centralized monitoring and logging for the application’s data access patterns with minimal added infrastructure.</p>"
            },
            {
              "choice": "<p>Store all clinical notes in Amazon OpenSearch Service with fine-grained access control. Configure the application to retrieve documents from OpenSearch and then invoke Amazon Bedrock over the public endpoint. Use OpenSearch Dashboards audit logs as the primary monitoring mechanism.</p>",
              "correct": false,
              "feedback": "<p>This design still invokes Bedrock over a public endpoint, which does not satisfy the private connectivity requirement. It also shifts the data lake access pattern away from Athena/Lake Formation governance and increases operational overhead by introducing and operating a separate search platform for the primary control objective.</p>"
            },
            {
              "choice": "<p>Use client-side encryption for all objects in Amazon S3 so that only the Lambda function can decrypt the data. Invoke Amazon Bedrock directly from Lambda over the public endpoint and rely on AWS KMS key policies to restrict which principals can use the keys.</p>",
              "correct": false,
              "feedback": "<p>Client-side encryption and KMS key policies can protect data confidentiality, but they do not ensure that traffic avoids the public internet when calling Bedrock or Athena. This approach also does not provide Lake Formation’s table/column governance for Athena query results and typically increases operational complexity due to key handling and client-side encryption workflows.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 60,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A protected AI environment for FM deployments typically combines private network connectivity, least-privilege access controls, and governed data access. Using VPC endpoints (PrivateLink) allows the application components in private subnets to call managed services without traversing the public internet. Lake Formation can enforce fine-grained permissions for Athena-accessed data in S3, including restricting sensitive columns such as PHI. IAM policies on the Lambda execution role restrict what queries and data resources the application can access. Finally, CloudWatch Logs provides centralized monitoring of the application’s access activity with low operational overhead.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ A NAT gateway still routes traffic to public service endpoints over the internet, which does not meet the requirement to avoid public internet paths. SSE-KMS and bucket policies help protect data at rest and control S3 access, but they do not provide the required private connectivity to Bedrock and Athena, nor do they provide column-level controls for query results.<br/>• <strong>B</strong>: ✅ VPC endpoints keep service-to-service traffic on the AWS network without public internet exposure. Lake Formation can enforce granular (including column-level) access controls for Athena tables so the application cannot retrieve PHI columns. A least-privilege IAM role constrains what the Lambda function can query and access. CloudWatch provides centralized monitoring and logging for the application’s data access patterns with minimal added infrastructure.<br/>• <strong>C</strong>: ❌ This design still invokes Bedrock over a public endpoint, which does not satisfy the private connectivity requirement. It also shifts the data lake access pattern away from Athena/Lake Formation governance and increases operational overhead by introducing and operating a separate search platform for the primary control objective.<br/>• <strong>D</strong>: ❌ Client-side encryption and KMS key policies can protect data confidentiality, but they do not ensure that traffic avoids the public internet when calling Bedrock or Athena. This approach also does not provide Lake Formation’s table/column governance for Athena query results and typically increases operational complexity due to key handling and client-side encryption workflows.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html\">Use interface VPC endpoints (AWS PrivateLink) to create a private connection between your VPC and Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/athena/latest/ug/interface-vpc-endpoint.html\">Connect to Amazon Athena using an interface VPC endpoint (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lake-formation/latest/dg/managing-filters.html\">Managing data filters - AWS Lake Formation (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services firm is building a customer-support chat experience by using Amazon Bedrock. An Amazon API Gateway endpoint invokes an AWS Lambda function that calls a text FM and stores the prompt/response transcript in an Amazon S3 bucket for audit purposes.</p><p>The firm must reduce the risk of exposing personally identifiable information (PII) in FM responses, must detect whether any PII is still being written to the S3 audit bucket, and must retain audit data for 90 days before automatically deleting it. Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giảm rủi ro lộ PII trong chat và audit log.</li><li>Requirement: giảm PII trong response của FM, phát hiện PII còn lọt vào S3, lưu 90 ngày rồi tự xóa.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrail</strong> che/loại PII ở cả prompt và response. <strong>Macie</strong> quét S3 để phát hiện PII còn sót và đẩy finding qua EventBridge. <strong>S3 Lifecycle</strong> xóa sau 90 ngày.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — workflow hậu xử lý tự dựng, nhân đôi bucket, không chặn PII ở response ngay lúc sinh.</li><li><strong>B</strong>: ❌ Sai — WAF khớp pattern ở request, không xử lý PII trong response, CloudTrail không ghi nội dung.</li><li><strong>C</strong>: ❌ Sai — mã hóa và IAM không phát hiện hay loại PII.</li><li><strong>D</strong>: ✅ Đúng — guardrail, Macie, Lifecycle đều managed, đáp ứng cả ba yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails PII masking</li><li>Amazon Macie</li><li>S3 Lifecycle expiration</li><li>EventBridge findings</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"PII trong response FM + phát hiện PII trong S3\" → nghĩ ngay đến <strong>Guardrails</strong> + <strong>Macie</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 61,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>Create a post-processing workflow that runs after each model invocation: store transcripts in S3, then run an Amazon Comprehend job to identify PII and write a redacted copy to a second S3 bucket. Keep both buckets for 90 days by using S3 Lifecycle rules.</p>",
              "correct": false,
              "feedback": "<p>This approach adds operational overhead (building and operating a custom redaction pipeline) and still stores unredacted transcripts for up to 90 days, which increases privacy risk. It also does not provide a managed continuous discovery service for PII in S3 comparable to Macie.</p>"
            },
            {
              "choice": "<p>Configure AWS WAF on the API Gateway endpoint to block requests that contain patterns that resemble PII. Use AWS CloudTrail to record model invocations and configure an S3 Lifecycle rule to expire objects after 90 days.</p>",
              "correct": false,
              "feedback": "<p>AWS WAF can help with web request filtering but is not a comprehensive PII detection/redaction control for FM prompts and responses. CloudTrail records API activity for auditing but does not inspect S3 object contents for PII or prevent PII from being included in model outputs.</p>"
            },
            {
              "choice": "<p>Encrypt the S3 audit bucket with SSE-KMS and restrict access to the bucket by using an IAM policy with least privilege. Configure an S3 Lifecycle rule to expire objects after 90 days.</p>",
              "correct": false,
              "feedback": "<p>Encryption and access control protect data at rest and limit who can view it, but they do not detect PII in stored objects or prevent the FM from returning PII in responses.</p>"
            },
            {
              "choice": "<p>Attach an Amazon Bedrock guardrail that masks or removes PII on both prompts and responses for the model invocation. Enable Amazon Macie to discover PII in the S3 audit bucket and send findings to Amazon EventBridge. Configure an S3 Lifecycle rule to expire audit objects after 90 days.</p>",
              "correct": true,
              "feedback": "<p>Bedrock guardrails provide a managed way to filter/mask PII in FM interactions, reducing the chance that responses contain sensitive data. Macie continuously discovers PII in S3 and can generate findings for investigation/automation. An S3 Lifecycle configuration enforces automatic retention and deletion without custom jobs.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 61,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-operations privacy-preserving design combines managed controls at the interaction layer, storage discovery, and retention enforcement. Bedrock guardrails can filter or mask PII in prompts and responses to reduce the likelihood of sensitive information being returned to users. Amazon Macie then provides automated discovery of PII in the S3 audit bucket so the security team can detect and respond if sensitive data is still being stored. Finally, an S3 Lifecycle configuration implements the required 90-day retention policy by automatically expiring audit objects without custom scheduling or maintenance.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach adds operational overhead (building and operating a custom redaction pipeline) and still stores unredacted transcripts for up to 90 days, which increases privacy risk. It also does not provide a managed continuous discovery service for PII in S3 comparable to Macie.<br/>• <strong>B</strong>: ❌ AWS WAF can help with web request filtering but is not a comprehensive PII detection/redaction control for FM prompts and responses. CloudTrail records API activity for auditing but does not inspect S3 object contents for PII or prevent PII from being included in model outputs.<br/>• <strong>C</strong>: ❌ Encryption and access control protect data at rest and limit who can view it, but they do not detect PII in stored objects or prevent the FM from returning PII in responses.<br/>• <strong>D</strong>: ✅ Bedrock guardrails provide a managed way to filter/mask PII in FM interactions, reducing the chance that responses contain sensitive data. Macie continuously discovers PII in S3 and can generate findings for investigation/automation. An S3 Lifecycle configuration enforces automatic retention and deletion without custom jobs.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Remove PII from conversations by using sensitive information filters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/macie/latest/user/findings-monitor-events-eventbridge.html\">Processing Macie findings with Amazon EventBridge - Amazon Macie (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html\">Expiring objects - Amazon Simple Storage Service (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare technology team is building a patient-facing virtual assistant that uses a text foundation model (FM) on Amazon Bedrock to answer questions about appointment scheduling. The assistant is exposed through a public API and has recently received user messages containing profanity, harassment, and attempts to override the assistant’s instructions (prompt injection). The team also must ensure that personally identifiable information (PII) such as phone numbers and social security numbers in user messages is masked before the FM processes the request.</p><p>Which solution will protect against harmful user inputs in real time with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bảo vệ input người dùng theo thời gian thực cho assistant công khai.</li><li>Requirement: chặn profanity, harassment, prompt injection, che PII (số điện thoại, SSN) trước khi FM xử lý.</li><li>Ưu tiên: <strong>real-time</strong> và <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Guardrails</strong> gộp content/word filter, denied topic, <strong>prompt attack filter</strong> và <strong>PII masking</strong> cho input, áp dụng ngay khi invoke, trả thông báo chặn chuẩn khi can thiệp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — human review không real-time và tốn vận hành.</li><li><strong>B</strong>: ❌ Sai — Macie quét S3 theo job, bất đồng bộ, không phải real-time.</li><li><strong>C</strong>: ✅ Đúng — một guardrail xử lý toàn bộ yêu cầu.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — WAF chỉ khớp chuỗi, bỏ sót prompt injection tinh vi và không che PII.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails</li><li>Prompt attack filter</li><li>PII masking</li><li>Real-time input protection</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chặn nội dung độc hại, prompt injection, che PII realtime\" → nghĩ ngay đến <strong>Bedrock Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 62,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>Create an AWS Step Functions workflow that sends each prompt to a human review queue for approval before invoking the Amazon Bedrock model. Reject prompts that contain harmful content or prompt injection attempts.</p>",
              "correct": false,
              "feedback": "<p>Human review adds substantial latency and operational overhead and does not meet a real-time conversational requirement for a patient-facing assistant. Step Functions is useful for custom moderation workflows, but requiring human approval for every prompt is not an efficient baseline control for high-volume real-time interactions.</p>"
            },
            {
              "choice": "<p>Store each user message in Amazon S3 and run an Amazon Macie discovery job to detect PII. After the discovery job completes, invoke the FM on Amazon Bedrock by using the sanitized text.</p>",
              "correct": false,
              "feedback": "<p>Macie is designed for discovering sensitive data in S3 using scheduled or batch analysis, not for real-time request filtering on a live chat experience. This design introduces significant latency and operational complexity and does not provide direct, real-time moderation of harmful prompt content.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail that uses topic and word filtering (including profanity) and input PII masking. Configure the application’s Bedrock model invocation to apply the guardrail and return a standard blocked message when the guardrail intervenes.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Guardrails provides managed, real-time filtering for prompts (inputs) and can mask PII directly as part of the model invocation. Topic and word filters can block harmful categories (such as harassment and profanity) and common prompt-injection patterns. Because the guardrail is applied by Bedrock during inference, this approach minimizes custom code and operational burden while enforcing consistent policy behavior.</p>"
            },
            {
              "choice": "<p>Use AWS WAF in front of Amazon API Gateway to block requests that contain profanity and common prompt-injection strings. Pass all remaining requests directly to Amazon Bedrock without additional safety controls.</p>",
              "correct": false,
              "feedback": "<p>AWS WAF can help block some requests at the web layer, but it is not a comprehensive FM input safety system and is not designed to provide GenAI-specific controls like integrated PII masking for model inputs. Relying only on WAF also leaves gaps because prompt-injection and harmful content can be subtle and can bypass simple string matching.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 62,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most effective low-ops approach is to enforce safety controls at the FM boundary by using Amazon Bedrock Guardrails. Guardrails can filter harmful user prompts with topic and word/profanity filters and can mask PII as part of the same real-time inference call, ensuring consistent enforcement without building and operating a separate moderation pipeline. Batch-oriented sensitive-data discovery and human-in-the-loop review introduce unacceptable latency for real-time chat, and generic web filtering alone does not provide comprehensive GenAI-focused protections such as integrated PII masking for model inputs.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Human review adds substantial latency and operational overhead and does not meet a real-time conversational requirement for a patient-facing assistant. Step Functions is useful for custom moderation workflows, but requiring human approval for every prompt is not an efficient baseline control for high-volume real-time interactions.<br/>• <strong>B</strong>: ❌ Macie is designed for discovering sensitive data in S3 using scheduled or batch analysis, not for real-time request filtering on a live chat experience. This design introduces significant latency and operational complexity and does not provide direct, real-time moderation of harmful prompt content.<br/>• <strong>C</strong>: ✅ Amazon Bedrock Guardrails provides managed, real-time filtering for prompts (inputs) and can mask PII directly as part of the model invocation. Topic and word filters can block harmful categories (such as harassment and profanity) and common prompt-injection patterns. Because the guardrail is applied by Bedrock during inference, this approach minimizes custom code and operational burden while enforcing consistent policy behavior.<br/>• <strong>D</strong>: ❌ AWS WAF can help block some requests at the web layer, but it is not a comprehensive FM input safety system and is not designed to provide GenAI-specific controls like integrated PII masking for model inputs. Relying only on WAF also leaves gaps because prompt-injection and harmful content can be subtle and can bypass simple string matching.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Detect and filter harmful content by using Amazon Bedrock Guardrails (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Remove PII from conversations by using sensitive information filters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/aws/guardrails-for-amazon-bedrock-now-available-with-new-safety-filters-and-privacy-controls/\">Guardrails for Amazon Bedrock now available with new safety filters and privacy controls (AWS Blog)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company runs a customer-support chatbot that calls an Amazon Bedrock text FM through the bedrock-runtime Converse API from an AWS Lambda function in us-east-1. During occasional regional service disruptions and quota spikes, the chatbot experiences timeouts and cannot respond to users. The company must keep the workload running even if the primary Region is impaired, and the company must keep inference within the United States for data residency requirements.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chatbot Bedrock bị timeout khi Region gặp sự cố hoặc quota spike.</li><li>Requirement: tiếp tục hoạt động khi Region chính suy giảm, <strong>inference ở lại Hoa Kỳ</strong>.</li><li>Ưu tiên: availability, data residency, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region Inference</strong> với <strong>geographic inference profile</strong> của US tự định tuyến request sang Region còn khả dụng trong US, vừa tăng khả năng chịu tải vừa giữ residency, app chỉ đổi sang gọi inference profile.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — provisioned throughput vẫn một Region, không chịu được sự cố Region.</li><li><strong>B</strong>: ✅ Đúng — failover/định tuyến tự động trong geography US, thay đổi tối thiểu.</li><li><strong>C</strong>: ❌ Sai — circuit breaker chỉ trả lỗi gọn hơn, chatbot vẫn không trả lời.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tự host FM trên hai endpoint SageMaker, chi phí và vận hành lớn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region Inference</li><li>Geographic inference profile (US)</li><li>Data residency</li><li>Automatic routing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Region lỗi/quota spike + dữ liệu phải ở trong một khu vực\" → nghĩ ngay đến <strong>geographic cross-Region inference profile</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 63,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock provisioned throughput for the FM in us-east-1 to eliminate throttling and timeouts, and keep all chatbot inference in the primary Region.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can help with steady high-volume capacity in a Region, but it does not provide cross-Region resilience when a Region is impaired. The requirement is continued operation during regional disruptions, which requires multi-Region inference capability.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock Cross-Region Inference by creating a geographic inference profile limited to the United States, and update the application to invoke the inference profile so Bedrock can automatically route requests to an available Region within that geography.</p>",
              "correct": true,
              "feedback": "<p>A geographic inference profile enables Bedrock to distribute and fail over inference requests across multiple AWS Regions within the allowed geography (United States). This provides resilience during regional disruptions or regional capacity constraints with minimal additional infrastructure to manage and only a small change to how the model is addressed (invoking the inference profile).</p>"
            },
            {
              "choice": "<p>Orchestrate the Lambda invocation in AWS Step Functions and add a circuit breaker that stops retries after repeated Bedrock failures, returning a generic error message to the user.</p>",
              "correct": false,
              "feedback": "<p>A circuit breaker can prevent runaway retries and can support graceful degradation, but it does not provide a way to continue successful inference when the primary Region is unavailable. Without cross-Region inference or a fallback model/Region, the chatbot will still be unable to respond during a regional impairment.</p>"
            },
            {
              "choice": "<p>Deploy the same FM behind two separate Amazon SageMaker AI real-time endpoints in us-east-1 and us-west-2, and use Amazon Route 53 failover routing to direct traffic to the healthy endpoint during outages.</p>",
              "correct": false,
              "feedback": "<p>This introduces significant operational overhead (multi-Region endpoint deployment, scaling, and model hosting management). It also changes the deployment approach away from managed Bedrock model invocation, which is unnecessary when the goal is resilient Bedrock inference.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 63,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Geographic Cross-Region Inference in Amazon Bedrock is designed to keep applications operating when a specific Region is disrupted or temporarily constrained by routing requests to another Region within an approved geography. Using an inference profile keeps the routing logic managed by Bedrock, which reduces the need to build and operate custom multi-Region failover infrastructure. Alternatives that rely only on capacity provisioning address throttling but not regional outages, and approaches that add orchestration or DNS failover typically increase operational burden and are not required for resilient Bedrock inference.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Provisioned throughput can help with steady high-volume capacity in a Region, but it does not provide cross-Region resilience when a Region is impaired. The requirement is continued operation during regional disruptions, which requires multi-Region inference capability.<br/>• <strong>B</strong>: ✅ A geographic inference profile enables Bedrock to distribute and fail over inference requests across multiple AWS Regions within the allowed geography (United States). This provides resilience during regional disruptions or regional capacity constraints with minimal additional infrastructure to manage and only a small change to how the model is addressed (invoking the inference profile).<br/>• <strong>C</strong>: ❌ A circuit breaker can prevent runaway retries and can support graceful degradation, but it does not provide a way to continue successful inference when the primary Region is unavailable. Without cross-Region inference or a fallback model/Region, the chatbot will still be unable to respond during a regional impairment.<br/>• <strong>D</strong>: ❌ This introduces significant operational overhead (multi-Region endpoint deployment, scaling, and model hosting management). It also changes the deployment approach away from managed Bedrock model invocation, which is unnecessary when the goal is resilient Bedrock inference.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/geographic-cross-region-inference.html\">Geographic cross-Region inference - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html\">Increase throughput with cross-Region inference - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html\">Converse - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare provider is building an internal “policy assistant” that answers employee questions by using Amazon Bedrock Agents with an Amazon Bedrock Knowledge Base that is populated from documents in Amazon S3. The compliance team requires the application to be transparent by showing users which policy sources were used for each answer and by providing auditors with a trace of how the agent reached the response (including knowledge base retrievals and action group calls). The operations team also wants a per-response confidence signal recorded in Amazon CloudWatch so they can investigate low-confidence answers.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: minh bạch cho Bedrock Agent kèm Knowledge Base.</li><li>Requirement: hiển thị nguồn chính sách, trace cho auditor (KB retrieval, action group), confidence ghi vào CloudWatch.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Agent tracing</strong> có sẵn trả về các bước suy luận, retrieval và action group call. <strong>Metadata tài liệu</strong> (title, S3 URI) cho source attribution. Điểm grounding/relevance đẩy thành <strong>custom metric CloudWatch</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự lưu prompt/context, lộ prompt cho user, kích thước context không phải độ tin cậy.</li><li><strong>B</strong>: ✅ Đúng — dùng tính năng native của agent cộng custom metric có ý nghĩa.</li><li><strong>C</strong>: ❌ Sai — Bedrock Agents đã tự điều phối, dựng lại bằng Step Functions là thừa, tỷ lệ transition thành công không phản ánh confidence.</li><li><strong>D</strong>: ❌ Sai — CloudTrail không chứa nội dung suy luận, tần suất request và lỗi không phải confidence.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Agent trace</li><li>Source attribution</li><li>Custom CloudWatch metric</li><li>Grounding/relevance score</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"agent transparency + trace cho auditor\" → nghĩ ngay đến <strong>Bedrock agent tracing</strong> + <strong>source attribution</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 64,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>Store the full prompt, retrieved context chunks, and action group parameters for each request in Amazon DynamoDB. Return the stored prompt and context to end users so they can verify the model’s reasoning and use the stored context size as a confidence metric in CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>Returning full prompts and retrieved context can leak sensitive internal instructions and data and is not an appropriate transparency mechanism. Context size is not a reliable confidence signal, and persisting full prompts and context for every request increases data handling risk and operational burden.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock agent tracing for the agent and log the returned trace payloads. Configure the application to include source attribution in the response by presenting the retrieved document metadata (for example, document title and S3 URI) as evidence. Publish a per-response confidence score to Amazon CloudWatch by emitting a custom metric derived from an automated grounding or relevance score collected during the request processing.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock agent tracing provides detailed reasoning traces that include how the agent orchestrated knowledge base retrievals and action group invocations. Presenting retrieved document metadata gives user-facing source attribution without exposing system prompts or full internal context. CloudWatch can store operational confidence signals as custom metrics so teams can dashboard and alert on low-confidence responses with minimal additional infrastructure.</p>"
            },
            {
              "choice": "<p>Orchestrate all agent steps with AWS Step Functions and implement each knowledge base lookup and action group call as separate AWS Lambda states. Display the Step Functions execution history to users as a reasoning display and use state transition success rates as the confidence signal in CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>Step Functions can provide deterministic workflow visibility, but it does not capture the agent’s reasoning trace (for example, how it interpreted the question or decided which tool to call). Showing state transitions also does not provide source attribution for the generated answer, and using workflow success rates is not a meaningful per-response confidence signal.</p>"
            },
            {
              "choice": "<p>Enable AWS CloudTrail logging for Amazon Bedrock API calls and export the CloudTrail logs to Amazon S3. Use Amazon Athena queries over the CloudTrail logs to reconstruct which tools the agent called and to compute a confidence score based on request frequency and error rates.</p>",
              "correct": false,
              "feedback": "<p>CloudTrail is an audit log of API activity and is not designed to provide model reasoning traces or evidence attribution for a specific answer. Reconstructing tool usage and “confidence” from CloudTrail events is indirect, brittle, and does not provide the agent’s orchestration-level trace required by auditors.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 64,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The lowest-overhead way to build transparency into an agent-based GenAI application is to use native agent tracing to obtain an auditable reasoning trace, while presenting evidence by surfacing the identifiers of the retrieved policy sources that informed the answer. Operational confidence should be captured as a metric in CloudWatch so it can be visualized and alarmed on; this is best done by emitting a per-request score produced during processing (for example, a grounding/relevance-style score) rather than trying to infer confidence from infrastructure logs or workflow success rates. Alternatives that rely on audit logs, workflow histories, or returning full prompts/context either fail to provide true reasoning traces and source attribution or introduce unnecessary security and operational risk.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Returning full prompts and retrieved context can leak sensitive internal instructions and data and is not an appropriate transparency mechanism. Context size is not a reliable confidence signal, and persisting full prompts and context for every request increases data handling risk and operational burden.<br/>• <strong>B</strong>: ✅ Amazon Bedrock agent tracing provides detailed reasoning traces that include how the agent orchestrated knowledge base retrievals and action group invocations. Presenting retrieved document metadata gives user-facing source attribution without exposing system prompts or full internal context. CloudWatch can store operational confidence signals as custom metrics so teams can dashboard and alert on low-confidence responses with minimal additional infrastructure.<br/>• <strong>C</strong>: ❌ Step Functions can provide deterministic workflow visibility, but it does not capture the agent’s reasoning trace (for example, how it interpreted the question or decided which tool to call). Showing state transitions also does not provide source attribution for the generated answer, and using workflow success rates is not a meaningful per-response confidence signal.<br/>• <strong>D</strong>: ❌ CloudTrail is an audit log of API activity and is not designed to provide model reasoning traces or evidence attribution for a specific answer. Reconstructing tool usage and “confidence” from CloudTrail events is indirect, brittle, and does not provide the agent’s orchestration-level trace required by auditors.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html\">Track agent's step-by-step reasoning process using trace - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve-generate.html\">Query a knowledge base and generate responses based off the retrieved data - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html\">Publish custom metrics - Amazon CloudWatch (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is building an internal GenAI assistant on Amazon Bedrock to help employees summarize meeting notes and answer policy questions. The application currently sends every user request to a high-capability (and higher-cost) model. Usage has grown, and most requests are simple summaries, while a smaller portion requires deeper reasoning and higher response quality.</p><p>The team wants to reduce ongoing inference costs while preserving high-quality answers for complex requests, with minimal custom routing logic to maintain.</p><p>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: mọi request đều đi model đắt tiền dù đa số là tóm tắt đơn giản.</li><li>Requirement: giảm chi phí inference, giữ chất lượng cho câu phức tạp, ít code routing.</li><li>Ưu tiên: <strong>MOST cost-effective</strong>, <strong>minimal custom routing</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Intelligent Prompt Routing</strong> tự dự đoán độ phức tạp prompt và chuyển giữa model rẻ và model mạnh, không cần tự viết router.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — router Lambda tự viết, gọi hai model khi lỗi, heuristic \"incomplete\" không đáng tin.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — prompt caching giảm chi phí phần prefix lặp lại nhưng vẫn dùng model đắt cho mọi request.</li><li><strong>C</strong>: ✅ Đúng — routing managed, giảm chi phí, giữ chất lượng.</li><li><strong>D</strong>: ❌ Sai — provisioned throughput là cam kết chi phí cố định, không giảm cost per request cho workload này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Intelligent Prompt Routing</li><li>Model cascading</li><li>Prompt complexity</li><li>Cost optimization</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"phần lớn request đơn giản, một phần phức tạp, ít code routing\" → nghĩ ngay đến <strong>Intelligent Prompt Routing</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 65,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>Implement an AWS Lambda router that invokes the lower-cost model first for every request and then invokes the higher-capability model only if the first response appears incomplete. Store responses in Amazon DynamoDB for future reuse.</p>",
              "correct": false,
              "feedback": "<p>Calling a lower-cost model first for every request often increases total cost and latency because many requests will incur two model invocations. Additionally, determining whether a response is “incomplete” requires extra evaluation logic and ongoing tuning, which increases operational overhead. While DynamoDB can store conversation history or cached results, it does not solve cost-effective model selection by query complexity on its own.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock prompt caching for the application’s system prompt and few-shot examples and continue using the same higher-capability model for all requests.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching can reduce cost and latency related to repeated prompt prefixes, but it does not implement tiered model usage. The higher-capability model is still invoked for all requests, so the primary cost driver (using an expensive model for simple work) remains.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock Intelligent Prompt Routing to route requests between a lower-cost model for simple requests and a higher-capability model for complex requests based on prompt complexity, and monitor token usage in Amazon CloudWatch.</p>",
              "correct": true,
              "feedback": "<p>A tiered model selection framework that routes simple requests to cheaper models and reserves more expensive models for complex requests is a direct way to reduce overall inference spend while maintaining quality where it matters. Using a managed routing feature minimizes custom logic and operational burden compared to building and maintaining your own classifier and routing service. CloudWatch token metrics help validate savings and support ongoing price-to-performance tuning.</p>"
            },
            {
              "choice": "<p>Purchase provisioned throughput for the higher-capability model so the application can handle growth more efficiently and reduce cost per request.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput is primarily a capacity and performance control mechanism; it does not implement query-based model selection. It can also increase costs if provisioned capacity is underutilized, and it does not address the goal of using cheaper models for simple requests.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 65,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The most cost-effective approach is to implement a tiered model selection strategy so that routine requests (like basic summaries) use a cheaper model while complex requests use a higher-capability model. This directly improves the price-to-performance ratio by matching model cost to task complexity. A managed routing capability minimizes the amount of custom logic the team must build and operate, while CloudWatch token metrics provide the telemetry needed to validate savings and iteratively tune the routing and model choices over time. Other approaches either continue to rely on the expensive model for all requests or risk increasing costs by adding extra model invocations and custom decision logic.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Calling a lower-cost model first for every request often increases total cost and latency because many requests will incur two model invocations. Additionally, determining whether a response is “incomplete” requires extra evaluation logic and ongoing tuning, which increases operational overhead. While DynamoDB can store conversation history or cached results, it does not solve cost-effective model selection by query complexity on its own.<br/>• <strong>B</strong>: ❌ Prompt caching can reduce cost and latency related to repeated prompt prefixes, but it does not implement tiered model usage. The higher-capability model is still invoked for all requests, so the primary cost driver (using an expensive model for simple work) remains.<br/>• <strong>C</strong>: ✅ A tiered model selection framework that routes simple requests to cheaper models and reserves more expensive models for complex requests is a direct way to reduce overall inference spend while maintaining quality where it matters. Using a managed routing feature minimizes custom logic and operational burden compared to building and maintaining your own classifier and routing service. CloudWatch token metrics help validate savings and support ongoing price-to-performance tuning.<br/>• <strong>D</strong>: ❌ Provisioned throughput is primarily a capacity and performance control mechanism; it does not implement query-based model selection. It can also increase costs if provisioned capacity is underutilized, and it does not address the goal of using cheaper models for simple requests.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-routing.html\">Understanding intelligent prompt routing in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/use-amazon-bedrock-intelligent-prompt-routing-for-cost-and-latency-benefits/\">Use Amazon Bedrock Intelligent Prompt Routing for cost and latency benefits | Artificial Intelligence (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-token-burndown.html\">How tokens are counted in Amazon Bedrock - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital banking team is building a customer-facing chat assistant that uses an Amazon Bedrock text model through AWS Lambda and Amazon API Gateway. Users frequently abandon sessions when they do not see any output quickly, but the team wants to avoid the added cost of provisioning dedicated capacity because traffic is bursty. The team needs the chat UI to start displaying the model’s answer as soon as possible while still allowing the backend team to benchmark latency improvements.</p><p>Which solution will provide the LOWEST perceived latency for end users with minimal additional cost?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: người dùng bỏ phiên vì chờ lâu mới thấy output.</li><li>Requirement: hiển thị câu trả lời sớm nhất, benchmark được latency, tránh chi phí capacity chuyên dụng vì traffic bursty.</li><li>Ưu tiên: <strong>LOWEST perceived latency</strong> với chi phí thêm tối thiểu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Streaming</strong> trả token ngay khi sinh ra nên time to first token thấp, <strong>latency-optimized inference</strong> giảm thêm độ trễ, <strong>CloudWatch metrics</strong> đo time to first token và end-to-end.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — provisioned throughput tốn chi phí cố định, trả về một lần nên người dùng vẫn chờ toàn bộ.</li><li><strong>B</strong>: ✅ Đúng — streaming cộng latency-optimized cộng đo lường.</li><li><strong>C</strong>: ❌ Sai — batch inference bất đồng bộ, latency cao nhất.</li><li><strong>D</strong>: ❌ Sai — gọi song song rồi gộp chỉ làm chờ lâu hơn, không hiển thị sớm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Streaming responses</li><li>Time to first token</li><li>Latency-optimized inference</li><li>Perceived latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"perceived latency, người dùng thấy output sớm\" → nghĩ ngay đến <strong>streaming</strong> + <strong>latency-optimized inference</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 66,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>Purchase Amazon Bedrock provisioned throughput for the model and invoke the model synchronously from AWS Lambda so the full completion is returned in a single response.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can improve consistency and throughput, but it adds steady cost that conflicts with bursty traffic and does not specifically minimize perceived latency because users still wait for the full response to be generated before anything is displayed.</p>"
            },
            {
              "choice": "<p>Update the application to use Amazon Bedrock streaming responses and stream tokens to the client (for example, by using API Gateway WebSockets or server-sent events). Enable Amazon Bedrock latency-optimized inference for the model and use Amazon CloudWatch metrics to benchmark time to first token and end-to-end latency.</p>",
              "correct": true,
              "feedback": "<p>Streaming responses allow the UI to render partial output immediately (minimizing perceived latency), and latency-optimized inference is designed to improve responsiveness metrics such as time to first token. This approach keeps the system on-demand for bursty traffic while still enabling benchmarking through CloudWatch.</p>"
            },
            {
              "choice": "<p>Write prompts to Amazon S3 and use Amazon Bedrock batch inference to generate responses asynchronously, then have the client poll for completion and download the final result.</p>",
              "correct": false,
              "feedback": "<p>Batch inference is intended for offline/asynchronous processing where users can wait. Polling for results increases perceived latency and provides a poorer interactive chat experience than streaming.</p>"
            },
            {
              "choice": "<p>Orchestrate parallel model invocations by using AWS Step Functions and combine the outputs into a single final response before returning it to the client application.</p>",
              "correct": false,
              "feedback": "<p>Parallel model calls increase cost and coordination overhead and still require waiting for all parallel branches to complete before returning a combined response. This does not minimize time to first visible output for the user.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 66,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For interactive chat experiences, the key user-perceived metric is how quickly the application can start showing a response. Streaming responses from Amazon Bedrock let the client render output incrementally instead of waiting for the full completion, which significantly improves perceived responsiveness without requiring dedicated capacity. Enabling latency-optimized inference targets faster responsiveness (such as improved time to first token) for time-sensitive interactions, and CloudWatch metrics provide a way to benchmark improvements. Alternatives that rely on batch processing or multi-step orchestration add delay or cost and are not optimized for immediate user feedback.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Provisioned throughput can improve consistency and throughput, but it adds steady cost that conflicts with bursty traffic and does not specifically minimize perceived latency because users still wait for the full response to be generated before anything is displayed.<br/>• <strong>B</strong>: ✅ Streaming responses allow the UI to render partial output immediately (minimizing perceived latency), and latency-optimized inference is designed to improve responsiveness metrics such as time to first token. This approach keeps the system on-demand for bursty traffic while still enabling benchmarking through CloudWatch.<br/>• <strong>C</strong>: ❌ Batch inference is intended for offline/asynchronous processing where users can wait. Polling for results increases perceived latency and provides a poorer interactive chat experience than streaming.<br/>• <strong>D</strong>: ❌ Parallel model calls increase cost and coordination overhead and still require waiting for all parallel branches to complete before returning a combined response. This does not minimize time to first visible output for the user.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html\">InvokeModelWithResponseStream - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/latency-optimized-inference.html\">Optimize model inference for latency - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/model-invocations.html\">Model Invocations - Amazon CloudWatch (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech engineering team is building an internal policy assistant that uses Retrieval Augmented Generation (RAG) with Amazon Bedrock. Policy documents are stored in Amazon S3. The team needs semantic search over the documents to provide relevant context to the foundation model (FM). The team wants a solution that requires the LEAST operational overhead to deploy and operate.</p><p>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: RAG trên tài liệu S3 cần semantic search.</li><li>Requirement: cung cấp context cho FM, triển khai và vận hành nhẹ nhất.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Knowledge Base</strong> tự lo chunking, embedding, lưu vào managed vector store và có <strong>RetrieveAndGenerate</strong>, nên không phải tự dựng pipeline hay lớp retrieval.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DynamoDB Query không hỗ trợ nearest-neighbor trên vector.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Aurora pgvector hoạt động nhưng phải quản lý cluster, ingestion và application layer.</li><li><strong>C</strong>: ✅ Đúng — fully managed từ ingestion đến generation.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — OpenSearch domain cộng pipeline Lambda và API retrieval tự viết, nhiều vận hành nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Knowledge Base</li><li>RetrieveAndGenerate</li><li>Managed vector store</li><li>Chunking</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"RAG trên S3, ít vận hành nhất\" → nghĩ ngay đến <strong>Bedrock Knowledge Base</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 67,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>Store document chunks and embedding vectors as items in Amazon DynamoDB. Use DynamoDB Query operations and filter expressions to retrieve the nearest-neighbor vectors for each user query and pass the results to Amazon Bedrock.</p>",
              "correct": false,
              "feedback": "<p>DynamoDB can store vectors as attributes, but it does not provide native vector similarity search (k-NN) for semantic retrieval. Query and filter expressions cannot perform vector distance calculations needed for semantic search.</p>"
            },
            {
              "choice": "<p>Create an Amazon Aurora PostgreSQL cluster with the pgvector extension enabled. Store each document chunk and embedding vector in tables. Implement similarity queries in SQL and build an application layer that injects the retrieved rows into prompts sent to Amazon Bedrock.</p>",
              "correct": false,
              "feedback": "<p>Aurora PostgreSQL with pgvector can support vector similarity search, but the team would still need to design schemas, implement chunking/embedding pipelines, tune and operate the database for retrieval workloads, and build the retrieval integration logic. This does not meet the goal of least operational overhead.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock Knowledge Base that uses the S3 bucket as a data source. Select an embedding model (for example, Amazon Titan Embeddings) and use a managed vector store option backed by Amazon OpenSearch Service. Configure chunking, then use the knowledge base RetrieveAndGenerate capability to augment FM prompts.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Knowledge Bases provide a managed approach to deploying semantic search for RAG: the service handles ingestion from S3, chunking, embedding generation with a selected embedding model, and storage/indexing in the configured vector store. This minimizes custom code and ongoing operational work while enabling semantic retrieval for FM augmentation.</p>"
            },
            {
              "choice": "<p>Provision an Amazon OpenSearch Service domain and create a k-NN vector index. Build a custom ingestion pipeline that uses AWS Lambda to invoke an embedding model in Amazon Bedrock, store embeddings in OpenSearch documents, and expose a custom retrieval API for the RAG application.</p>",
              "correct": false,
              "feedback": "<p>This approach can enable semantic search, but it requires building and operating the ingestion pipeline, embedding generation logic, index mappings, and a retrieval API. That increases operational overhead compared with using a managed knowledge base.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 67,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key requirement is to deploy and configure semantic retrieval with minimal operational burden. A managed knowledge base in Amazon Bedrock is purpose-built for RAG: it connects to an S3 data source, chunks content, generates embeddings with a chosen embedding model, and stores/indexes those embeddings in a managed vector store for semantic search. Alternatives that directly use OpenSearch or Aurora can achieve vector search, but they require the team to build and maintain ingestion pipelines, embedding generation, index/schema design, and retrieval integration. DynamoDB is not suitable as a semantic vector search engine because it lacks native vector similarity search capabilities.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ DynamoDB can store vectors as attributes, but it does not provide native vector similarity search (k-NN) for semantic retrieval. Query and filter expressions cannot perform vector distance calculations needed for semantic search.<br/>• <strong>B</strong>: ❌ Aurora PostgreSQL with pgvector can support vector similarity search, but the team would still need to design schemas, implement chunking/embedding pipelines, tune and operate the database for retrieval workloads, and build the retrieval integration logic. This does not meet the goal of least operational overhead.<br/>• <strong>C</strong>: ✅ Amazon Bedrock Knowledge Bases provide a managed approach to deploying semantic search for RAG: the service handles ingestion from S3, chunking, embedding generation with a selected embedding model, and storage/indexing in the configured vector store. This minimizes custom code and ongoing operational work while enabling semantic retrieval for FM augmentation.<br/>• <strong>D</strong>: ❌ This approach can enable semantic search, but it requires building and operating the ingestion pipeline, embedding generation logic, index mappings, and a retrieval API. That increases operational overhead compared with using a managed knowledge base.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build.html\">Build a knowledge base by connecting to a data source - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/s3-data-source-connector.html\">Connect to Amazon S3 for your knowledge base - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html\">Amazon Titan Text Embeddings models - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A product support team has built a public FAQ assistant that uses Amazon API Gateway and AWS Lambda to invoke an Amazon Bedrock text model. The assistant does not use user-specific context, and the team has configured the model with deterministic settings so the same question produces the same answer. Metrics show that a large percentage of requests are repeated verbatim across users, and the team wants to reduce Amazon Bedrock invocation costs and improve global response latency.</p><p>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: FAQ công khai, không có ngữ cảnh người dùng, cấu hình deterministic, nhiều <strong>request trùng nguyên văn</strong>.</li><li>Requirement: giảm chi phí invocation và giảm latency toàn cầu.</li><li>Ưu tiên: <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Câu trùng nguyên văn là <strong>cache hit hoàn hảo</strong>. <strong>CloudFront</strong> cache theo fingerprint tại edge nên giảm cả chi phí Bedrock lẫn latency toàn cầu, chỉ gọi model khi cache miss.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — edge caching chi phí thấp, tận dụng được request lặp và deterministic output.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — semantic cache cần MemoryDB, embedding mỗi request, có thể trả sai câu gần giống, chi phí và phức tạp cao, không giúp latency toàn cầu.</li><li><strong>C</strong>: ❌ Sai — provisioned throughput là cam kết chi phí, không giảm số lần gọi.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — prompt caching chỉ giảm chi phí phần prefix, vẫn gọi model mỗi request.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront edge cache</li><li>Request fingerprint (hash)</li><li>Deterministic output</li><li>Cache miss mới gọi Bedrock</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"câu hỏi lặp nguyên văn, không có ngữ cảnh người dùng, latency toàn cầu\" → nghĩ ngay đến <strong>cache ở CloudFront</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 68,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>Place Amazon CloudFront in front of the API. Create a deterministic request fingerprint (hash) from the normalized prompt and model configuration. Send requests as GET /ask?fingerprint=&lt;hash&gt; so CloudFront can cache and serve identical responses from the edge, invoking Bedrock only on a cache miss.</p>",
              "correct": true,
              "feedback": "<p>Edge caching with CloudFront can avoid unnecessary FM invocations entirely for repeated requests by serving cached responses at edge locations. Using a deterministic request hash (fingerprint) ensures that only truly identical requests map to the same cache key, and including model configuration in the fingerprint prevents incorrect reuse when settings change. This directly reduces Bedrock invocation volume and improves latency for global users.</p>"
            },
            {
              "choice": "<p>Implement semantic caching by storing embeddings of prompts and corresponding responses in Amazon MemoryDB. For each new prompt, generate an embedding and perform nearest-neighbor lookup. If the similarity score exceeds a threshold, return the cached response instead of invoking the FM.</p>",
              "correct": false,
              "feedback": "<p>Although semantic caching can reduce FM invocations for semantically similar prompts, it requires an embedding-generation step for each request and careful threshold tuning to prevent incorrect cache hits. This introduces more operational complexity than edge caching for verbatim repeated questions, and it may add latency and cost overhead compared to a simple deterministic cache key.</p>"
            },
            {
              "choice": "<p>Purchase Amazon Bedrock provisioned throughput for the model and increase the reserved concurrency of the Lambda function to improve performance during peak traffic.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput and increased Lambda concurrency can help handle higher traffic, but they do not reduce the number of FM invocations. This approach increases cost and does not address the core requirement of avoiding unnecessary invocations for repeated identical requests.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock prompt caching for the system prompt and few-shot examples. Keep the user question as the suffix so the prefix is reused across invocations.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching can reduce token processing cost and improve latency by reusing a cached prompt prefix, but it still invokes the FM for every request. It does not avoid unnecessary FM invocations when users ask the exact same question repeatedly.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 68,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Because many requests are exact repeats and the responses are deterministic, the best optimization is to avoid invoking the FM when a previous identical response already exists. Edge caching with CloudFront accomplishes this by serving cached responses from edge locations, improving latency for global users while reducing total Bedrock invocations. A deterministic request fingerprint provides a stable cache key and helps ensure cache correctness when prompts or model parameters change. Prompt caching improves token efficiency but still calls the model each time, and semantic caching adds embedding overhead and tuning complexity that is unnecessary when repetition is primarily verbatim. Provisioned throughput improves capacity but does not reduce invocation volume.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Edge caching with CloudFront can avoid unnecessary FM invocations entirely for repeated requests by serving cached responses at edge locations. Using a deterministic request hash (fingerprint) ensures that only truly identical requests map to the same cache key, and including model configuration in the fingerprint prevents incorrect reuse when settings change. This directly reduces Bedrock invocation volume and improves latency for global users.<br/>• <strong>B</strong>: ❌ Although semantic caching can reduce FM invocations for semantically similar prompts, it requires an embedding-generation step for each request and careful threshold tuning to prevent incorrect cache hits. This introduces more operational complexity than edge caching for verbatim repeated questions, and it may add latency and cost overhead compared to a simple deterministic cache key.<br/>• <strong>C</strong>: ❌ Provisioned throughput and increased Lambda concurrency can help handle higher traffic, but they do not reduce the number of FM invocations. This approach increases cost and does not address the core requirement of avoiding unnecessary invocations for repeated identical requests.<br/>• <strong>D</strong>: ❌ Prompt caching can reduce token processing cost and improve latency by reusing a cached prompt prefix, but it still invokes the FM for every request. It does not avoid unnecessary FM invocations when users ask the exact same question repeatedly.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html\">Use various origins with CloudFront distributions (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html\">Cache content based on query string parameters - Amazon CloudFront (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html\">Prompt caching for faster model inference - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security operations team is building a Retrieval Augmented Generation (RAG) assistant by using Amazon Bedrock. The team stores runbooks and incident reports in Amazon OpenSearch Service as a vector store. Engineers often search by exact identifiers (for example, CVE IDs and command names), but the assistant frequently retrieves semantically similar documents that do not contain the exact identifier. The team also observes increased retrieval latency as the OpenSearch index has grown.</p><p>Which solution will improve retrieval relevance and retrieval latency with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tìm theo định danh chính xác (<strong>CVE ID</strong>, tên lệnh) nhưng vector search trả tài liệu tương tự ngữ nghĩa.</li><li>Requirement: cải thiện relevance và giảm latency khi index lớn.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Hybrid search</strong> kết hợp vector với keyword match trên trường identifier giải quyết exact match. Gộp lại thành <strong>ít shard lớn hơn</strong> giảm chi phí điều phối cross-shard, cải thiện latency, tất cả trong OpenSearch sẵn có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — xử lý cả relevance (exact identifier) và latency (shard).</li><li><strong>B</strong>: ❌ Sai — tăng ef_search và M cải thiện recall vector nhưng không giúp exact match, còn làm latency tệ hơn.</li><li><strong>C</strong>: ❌ Sai — S3 Vectors rẻ nhưng không cải thiện exact keyword match, latency cao hơn.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — reranker sắp xếp lại top 50 nhưng nếu tài liệu có identifier không lọt top 50 thì vẫn mất, thêm latency.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Hybrid search</li><li>Keyword/metadata filter</li><li>Exact identifier</li><li>Shard consolidation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tìm theo ID/mã chính xác mà vector search trượt\" → nghĩ ngay đến <strong>hybrid search</strong> (vector + keyword).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 69,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>In Amazon OpenSearch Service, implement hybrid search that combines vector similarity with keyword matching on identifier fields. Preprocess queries to extract exact identifiers into keyword clauses or metadata filters, and reindex the corpus into fewer, larger shards to reduce cross-shard coordination overhead.</p>",
              "correct": true,
              "feedback": "<p>Hybrid search improves relevance by rewarding exact keyword matches (for identifiers) while still leveraging semantic similarity for natural-language queries. Simple query preprocessing (extracting identifiers into keyword clauses/filters) increases precision for identifier-driven lookups. Reindexing into fewer, larger shards reduces the amount of cross-shard fan-out and coordination work during vector and hybrid queries, improving latency. This approach stays within OpenSearch and does not add new services or complex model pipelines.</p>"
            },
            {
              "choice": "<p>Tune the OpenSearch approximate nearest neighbor (ANN) index for higher recall by increasing HNSW parameters (such as ef_search and M) so that more candidates are evaluated during vector search.</p>",
              "correct": false,
              "feedback": "<p>Increasing HNSW search parameters can increase recall, but it generally increases query latency and memory usage, which conflicts with the goal of reducing retrieval latency. It also does not directly address precision for exact identifier lookups, which are better handled with keyword matching and filtering.</p>"
            },
            {
              "choice": "<p>Migrate embeddings from OpenSearch to Amazon S3 Vectors and query S3 Vectors directly for the nearest neighbors to reduce cost and simplify the architecture.</p>",
              "correct": false,
              "feedback": "<p>S3 Vectors is positioned as a lower-cost and simpler vector store, but it is not optimized for performance-critical, low-latency retrieval compared with OpenSearch-based approaches. It also does not directly solve the need to incorporate keyword-based matching and custom scoring for exact identifiers.</p>"
            },
            {
              "choice": "<p>Configure an Amazon Bedrock reranker model to rerank the top 50 retrieved chunks from OpenSearch based on semantic relevance to the query before sending context to the FM.</p>",
              "correct": false,
              "feedback": "<p>Reranking can improve ordering of already-retrieved results, but it adds additional model inference work and typically increases end-to-end latency. It also cannot reliably fix cases where the initial retrieval set does not include documents containing the exact identifier.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 69,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Identifier-heavy queries (like CVE IDs and command names) are best served by combining semantic retrieval with exact matching. Hybrid search improves relevance by blending vector similarity with keyword scoring, and simple query preprocessing can reliably extract identifiers into keyword clauses or metadata filters. To address speed, index optimization in OpenSearch—such as reindexing into fewer, larger shards—reduces coordination overhead and improves query latency as the corpus grows. Other approaches either add extra inference latency, trade speed for recall, or prioritize cost over low-latency retrieval.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Hybrid search improves relevance by rewarding exact keyword matches (for identifiers) while still leveraging semantic similarity for natural-language queries. Simple query preprocessing (extracting identifiers into keyword clauses/filters) increases precision for identifier-driven lookups. Reindexing into fewer, larger shards reduces the amount of cross-shard fan-out and coordination work during vector and hybrid queries, improving latency. This approach stays within OpenSearch and does not add new services or complex model pipelines.<br/>• <strong>B</strong>: ❌ Increasing HNSW search parameters can increase recall, but it generally increases query latency and memory usage, which conflicts with the goal of reducing retrieval latency. It also does not directly address precision for exact identifier lookups, which are better handled with keyword matching and filtering.<br/>• <strong>C</strong>: ❌ S3 Vectors is positioned as a lower-cost and simpler vector store, but it is not optimized for performance-critical, low-latency retrieval compared with OpenSearch-based approaches. It also does not directly solve the need to incorporate keyword-based matching and custom scoring for exact identifiers.<br/>• <strong>D</strong>: ❌ Reranking can improve ordering of already-retrieved results, but it adds additional model inference work and typically increases end-to-end latency. It also cannot reliably fix cases where the initial retrieval set does not include documents containing the exact identifier.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/big-data/hybrid-search-with-amazon-opensearch-service/\">Hybrid Search with Amazon OpenSearch Service (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html\">k-Nearest Neighbor (k-NN) search in Amazon OpenSearch Service - Amazon OpenSearch Service (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp-sharding.html\">Choosing the number of shards - Amazon OpenSearch Service (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is building a customer-support assistant that uses an Amazon Bedrock FM to summarize chat conversations and propose next-step actions for agents. Customers frequently paste sensitive data (for example, names, email addresses, phone numbers, and account identifiers) into the chat. The company must prevent sensitive information from being sent to the FM or appearing in the model’s responses, while keeping the responses useful and contextually accurate.</p><p>Which combination of actions will meet these requirements with the LEAST loss of utility? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: khách dán dữ liệu nhạy cảm vào chat, FM xử lý và sinh phản hồi.</li><li>Requirement: không gửi dữ liệu nhạy cảm tới FM và không để lộ trong response, vẫn giữ response hữu ích và đúng ngữ cảnh.</li><li>Ưu tiên: <strong>LEAST loss of utility</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails</strong> che PII ở cả input và output. Bước tiền xử lý Lambda dùng <strong>Comprehend PII</strong> thay bằng <strong>placeholder nhất quán</strong> (&lt;NAME_1&gt;) giữ nguyên cấu trúc và quan hệ của hội thoại nên tóm tắt vẫn chính xác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Macie quét S3, xóa transcript làm mất dữ liệu nên mất utility.</li><li><strong>B</strong>: ✅ Đúng — masking hai chiều, áp dụng cho mọi invocation.</li><li><strong>C</strong>: ❌ Sai — bỏ cả message chứa entity làm mất ngữ cảnh.</li><li><strong>D</strong>: ❌ Sai — mã hóa at-rest không ngăn PII đi vào FM hay xuất hiện trong output.</li><li><strong>E</strong>: ✅ Đúng — placeholder nhất quán giữ ngữ cảnh mà không lộ PII.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails PII masking</li><li>Comprehend PII detection</li><li>Consistent placeholders</li><li>Utility preservation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chặn PII nhưng vẫn giữ ngữ cảnh\" → nghĩ ngay đến <strong>mask/thay placeholder</strong>, không xóa hay bỏ message.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 70,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>Use Amazon Macie to discover and classify PII in the Amazon S3 bucket that stores chat transcripts, and automatically delete objects that contain PII before invoking the Amazon Bedrock model.</p>",
              "correct": false,
              "feedback": "<p>Macie is designed to discover sensitive data in S3, not to provide real-time masking for interactive FM prompts and responses. Deleting objects after discovery does not reliably prevent PII from being included in the live prompt flow, and it can also remove important context needed to keep responses useful.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock Guardrails with PII masking enabled for both prompt input and model output, and apply the guardrail to all model invocations from the application.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Guardrails provide built-in protections that can filter or mask PII in both incoming prompts and outgoing responses. Using masking (instead of blocking) helps maintain the usefulness of responses while enforcing privacy controls consistently across requests.</p>"
            },
            {
              "choice": "<p>Build an Amazon Comprehend custom entity recognizer to detect customer identifiers and then discard any message that contains detected entities before invoking the FM.</p>",
              "correct": false,
              "feedback": "<p>Discarding entire messages whenever entities are detected removes critical context, which reduces FM utility and can degrade response accuracy. Additionally, training and maintaining a custom entity recognizer adds operational overhead when built-in PII detection and masking approaches can meet the requirement more effectively.</p>"
            },
            {
              "choice": "<p>Enable SSE-KMS encryption on the Amazon S3 buckets that store conversation transcripts and model outputs, and use AWS KMS key policies to restrict access to the encrypted data.</p>",
              "correct": false,
              "feedback": "<p>Encrypting stored transcripts and outputs protects data at rest, but it does not prevent PII from being transmitted to the FM during inference or from being returned in the FM response. This does not satisfy the requirement to prevent sensitive information from being sent to the FM or appearing in responses.</p>"
            },
            {
              "choice": "<p>Add an AWS Lambda pre-processing step that calls Amazon Comprehend PII detection on the user message and replaces detected PII with consistent placeholders (for example, &lt;NAME_1&gt;, &lt;PHONE_1&gt;) before invoking the Amazon Bedrock model.</p>",
              "correct": true,
              "feedback": "<p>Pre-processing with Amazon Comprehend can detect common PII types and mask them before the request reaches the FM. Using consistent placeholders preserves conversational structure and relationships (for example, the same person referenced multiple times), which helps maintain response quality while protecting privacy.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 70,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A privacy-focused GenAI design should prevent sensitive data exposure while keeping enough context for high-quality responses. Pre-processing user input with PII detection and placeholder-based masking reduces the chance that sensitive values reach the model while preserving conversational meaning. Applying Amazon Bedrock Guardrails with PII masking provides an additional enforcement layer that helps ensure sensitive data is not surfaced in outputs (and can also apply protections consistently across all invocations). Approaches that only encrypt stored data, rely on post hoc discovery, or discard messages containing entities either fail to prevent PII from reaching the FM in real time or significantly reduce the utility of the assistant.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Macie is designed to discover sensitive data in S3, not to provide real-time masking for interactive FM prompts and responses. Deleting objects after discovery does not reliably prevent PII from being included in the live prompt flow, and it can also remove important context needed to keep responses useful.<br/>• <strong>B</strong>: ✅ Bedrock Guardrails provide built-in protections that can filter or mask PII in both incoming prompts and outgoing responses. Using masking (instead of blocking) helps maintain the usefulness of responses while enforcing privacy controls consistently across requests.<br/>• <strong>C</strong>: ❌ Discarding entire messages whenever entities are detected removes critical context, which reduces FM utility and can degrade response accuracy. Additionally, training and maintaining a custom entity recognizer adds operational overhead when built-in PII detection and masking approaches can meet the requirement more effectively.<br/>• <strong>D</strong>: ❌ Encrypting stored transcripts and outputs protects data at rest, but it does not prevent PII from being transmitted to the FM during inference or from being returned in the FM response. This does not satisfy the requirement to prevent sensitive information from being sent to the FM or appearing in responses.<br/>• <strong>E</strong>: ✅ Pre-processing with Amazon Comprehend can detect common PII types and mask them before the request reaches the FM. Using consistent placeholders preserves conversational structure and relationships (for example, the same person referenced multiple times), which helps maintain response quality while protecting privacy.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Remove PII from conversations by using sensitive information filters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use-independent-api.html\">Use the ApplyGuardrail API in your application - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/comprehend/latest/dg/example_comprehend_DetectPiiEntities_section.html\">Use DetectPiiEntities with an AWS SDK or CLI - Amazon Comprehend (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, E"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare analytics team is building an internal chat application that uses Amazon Bedrock to answer questions by querying a reporting dataset in Amazon Athena. The team is concerned that the FM could occasionally generate inappropriate language in its answers or accidentally include sensitive information from retrieved context. The team also must ensure the application generates only read-only, deterministic SQL queries (SELECT statements) and never produces free-form SQL that could be unsafe.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chat hỏi đáp trên dữ liệu Athena, cần an toàn nội dung và an toàn SQL.</li><li>Requirement: lọc ngôn từ không phù hợp và dữ liệu nhạy cảm, <strong>chỉ SELECT</strong> và deterministic, không SQL tự do.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails</strong> lọc/che nội dung ở response, còn Lambda ánh xạ ý định người dùng vào <strong>template SELECT tham số hóa</strong> nên FM không bao giờ sinh SQL tự do, chỉ kết quả được đưa lại cho FM.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kết hợp Guardrails và template cố định, đáp ứng cả hai nhóm yêu cầu.</li><li><strong>B</strong>: ❌ Sai — fine-tune không đảm bảo tuyệt đối, tốn công train, không có cơ chế cưỡng chế SELECT-only.</li><li><strong>C</strong>: ❌ Sai — WAF chặn request đầu vào, không kiểm soát SQL và nội dung do FM sinh ra.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — hậu xử lý bằng Comprehend rồi re-prompt thêm latency và chi phí, không ngăn SQL tự do.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails</li><li>Parameterized query templates</li><li>SELECT-only</li><li>Text-to-SQL an toàn</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"FM chỉ được sinh SQL read-only, deterministic\" → nghĩ ngay đến <strong>template tham số hóa</strong>, không để FM sinh SQL tự do.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 71,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>Configure Amazon Bedrock Guardrails to filter and mask unsafe content in model responses. Use an AWS Lambda function to perform a text-to-SQL transformation by mapping user intent to a predefined set of parameterized SELECT-only query templates that are executed in Athena, and return only the query results to the FM for response generation.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Guardrails provide managed response filtering (for example, profanity/topic controls and sensitive information masking) to reduce harmful outputs. A Lambda-based text-to-SQL layer that maps intents to allowlisted, parameterized SELECT templates ensures deterministic, read-only queries and prevents free-form SQL generation, minimizing operational overhead compared to building and tuning multiple custom moderation and retry loops.</p>"
            },
            {
              "choice": "<p>Create a custom fine-tuned model in Amazon Bedrock that was trained to avoid harmful language and to output only SELECT statements. Invoke the custom model directly from the application without guardrails or query templating.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning can reduce undesired behavior but does not provide a strong, deterministic control layer for SQL safety (for example, enforcing SELECT-only, schema-allowed queries) and adds cost and lifecycle overhead. Without guardrails and deterministic text-to-SQL controls, harmful outputs and unsafe SQL generation can still occur.</p>"
            },
            {
              "choice": "<p>Place Amazon API Gateway in front of the application and enable AWS WAF managed rules to block profanity and SQL injection strings in incoming requests. Allow the FM to generate SQL and final answers without additional controls.</p>",
              "correct": false,
              "feedback": "<p>WAF can help protect the API from malicious inbound requests, but it does not provide a robust framework for preventing harmful model outputs or for guaranteeing deterministic, read-only SQL generation. This also does not prevent the FM from producing unsafe SQL in its output.</p>"
            },
            {
              "choice": "<p>Post-process every FM response with Amazon Comprehend to detect toxic language and PII. If Comprehend flags the response, re-prompt the FM to rewrite the answer and to regenerate the SQL query.</p>",
              "correct": false,
              "feedback": "<p>This approach adds custom orchestration and still relies on the FM to generate SQL directly, which is not deterministic and can still produce unsafe or malformed queries. Re-prompting also does not guarantee consistent compliance and increases latency and complexity.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 71,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The safest low-operations approach combines managed output controls with deterministic query generation. Amazon Bedrock Guardrails help prevent harmful responses by filtering or masking unsafe content in the model’s output. Separately, generating SQL through a controlled text-to-SQL transformation that maps user intent to allowlisted, parameterized SELECT templates prevents the FM from emitting arbitrary SQL and ensures the database interaction is deterministic and read-only. Approaches that rely on re-prompting, perimeter filtering, or fine-tuning alone do not provide the same deterministic guarantees and typically add more complexity or risk.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Bedrock Guardrails provide managed response filtering (for example, profanity/topic controls and sensitive information masking) to reduce harmful outputs. A Lambda-based text-to-SQL layer that maps intents to allowlisted, parameterized SELECT templates ensures deterministic, read-only queries and prevents free-form SQL generation, minimizing operational overhead compared to building and tuning multiple custom moderation and retry loops.<br/>• <strong>B</strong>: ❌ Fine-tuning can reduce undesired behavior but does not provide a strong, deterministic control layer for SQL safety (for example, enforcing SELECT-only, schema-allowed queries) and adds cost and lifecycle overhead. Without guardrails and deterministic text-to-SQL controls, harmful outputs and unsafe SQL generation can still occur.<br/>• <strong>C</strong>: ❌ WAF can help protect the API from malicious inbound requests, but it does not provide a robust framework for preventing harmful model outputs or for guaranteeing deterministic, read-only SQL generation. This also does not prevent the FM from producing unsafe SQL in its output.<br/>• <strong>D</strong>: ❌ This approach adds custom orchestration and still relies on the FM to generate SQL directly, which is not deterministic and can still produce unsafe or malformed queries. Re-prompting also does not guarantee consistent compliance and increases latency and complexity.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Remove PII from conversations by using sensitive information filters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters.html\">Block harmful words and conversations with content filters - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/athena/latest/ug/querying-with-prepared-statements.html\">Use parameterized queries - Amazon Athena (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#72",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A logistics company operates a legacy on-premises shipment tracking system that can send HTTPS webhooks but cannot use AWS SDKs. The company wants to add an Amazon Bedrock FM step that summarizes shipment exception notes and stores the summaries for downstream applications. During shift changes, exception events arrive in large bursts. The on-premises system must receive an immediate acknowledgment and must not be tightly coupled to Bedrock availability.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: hệ thống on-premises chỉ gửi <strong>HTTPS webhook</strong>, không dùng AWS SDK, event đến theo đợt lớn.</li><li>Requirement: nhận acknowledgment ngay, không bị ràng buộc chặt với availability của Bedrock.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>API Gateway</strong> nhận HTTPS và đẩy thẳng vào <strong>SQS</strong> (service integration) nên ack tức thì. <strong>Lambda</strong> đọc SQS làm đệm chịu burst, gọi Bedrock bất đồng bộ rồi lưu DynamoDB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — decoupling bằng queue, serverless, hấp thụ burst.</li><li><strong>B</strong>: ❌ Sai — đồng bộ, ràng buộc chặt với Bedrock, có thể timeout hoặc throttle khi burst.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — ECS và NLB tự quản lý, vẫn gọi Bedrock trực tiếp nên coupling.</li><li><strong>D</strong>: ❌ Sai — hệ thống không dùng được SDK/S3 trực tiếp, và ghi ngược về DB on-premises không đơn giản.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway to SQS integration</li><li>Decoupling</li><li>Burst buffering</li><li>Asynchronous processing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"webhook, ack ngay, burst, không phụ thuộc availability\" → nghĩ ngay đến <strong>API Gateway</strong> + <strong>SQS</strong> + <strong>Lambda</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 72,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>Configure an Amazon API Gateway REST API with an AWS service integration to Amazon SQS. Have the on-premises system send webhooks to the API. Configure an AWS Lambda function to poll the SQS queue, invoke the Amazon Bedrock model, and store the summaries in Amazon DynamoDB for downstream consumption.</p>",
              "correct": true,
              "feedback": "<p>API Gateway provides an HTTPS integration point for the legacy system and can immediately acknowledge requests. SQS decouples ingestion from processing and buffers burst traffic. Lambda scales to process messages asynchronously and can invoke Bedrock without coupling the legacy system to inference performance or availability. DynamoDB provides a simple, scalable store for downstream applications to retrieve summaries.</p>"
            },
            {
              "choice": "<p>Configure an Amazon API Gateway REST API that invokes an AWS Lambda function synchronously. In the Lambda function, call the Amazon Bedrock InvokeModel API and return the summary in the API response to the on-premises system.</p>",
              "correct": false,
              "feedback": "<p>Synchronous invocation couples the webhook response time to Bedrock latency and availability. Bursts can cause throttling and timeouts, and the on-premises system cannot wait for the full FM inference to complete.</p>"
            },
            {
              "choice": "<p>Deploy a containerized service on Amazon ECS behind a Network Load Balancer to receive webhooks, call Amazon Bedrock directly from the service, and store results in Amazon OpenSearch Service.</p>",
              "correct": false,
              "feedback": "<p>Running and scaling a container service introduces additional operational overhead (cluster/service management, scaling policies, patching, and deployment). It also still risks coupling webhook processing to inference unless additional buffering is implemented, and OpenSearch is unnecessary if the primary need is durable asynchronous processing and simple storage of summaries.</p>"
            },
            {
              "choice": "<p>Store exception notes in an Amazon S3 bucket from the on-premises system. Configure Amazon EventBridge to detect new objects and invoke an AWS Step Functions workflow that calls Amazon Bedrock and writes results back to the on-premises database.</p>",
              "correct": false,
              "feedback": "<p>This requires the legacy system to integrate directly with S3 uploads and adds workflow orchestration and a write-back path to on-premises systems, increasing integration complexity and operational overhead compared to a simple webhook ingestion pattern.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 72,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The key enterprise connectivity requirement is to integrate a legacy HTTPS webhook producer while keeping the FM invocation loosely coupled and resilient to burst traffic. Using an HTTPS front door with API Gateway allows the legacy system to send standard web requests and receive immediate acknowledgment. Placing SQS between ingestion and inference provides durable buffering and decoupling, so downstream processing can scale independently and tolerate temporary slowdowns or throttling. A Lambda consumer can then invoke the Bedrock model asynchronously and store outputs for downstream systems in a managed data store such as DynamoDB, minimizing the amount of infrastructure to operate.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ API Gateway provides an HTTPS integration point for the legacy system and can immediately acknowledge requests. SQS decouples ingestion from processing and buffers burst traffic. Lambda scales to process messages asynchronously and can invoke Bedrock without coupling the legacy system to inference performance or availability. DynamoDB provides a simple, scalable store for downstream applications to retrieve summaries.<br/>• <strong>B</strong>: ❌ Synchronous invocation couples the webhook response time to Bedrock latency and availability. Bursts can cause throttling and timeouts, and the on-premises system cannot wait for the full FM inference to complete.<br/>• <strong>C</strong>: ❌ Running and scaling a container service introduces additional operational overhead (cluster/service management, scaling policies, patching, and deployment). It also still risks coupling webhook processing to inference unless additional buffering is implemented, and OpenSearch is unnecessary if the primary need is durable asynchronous processing and simple storage of summaries.<br/>• <strong>D</strong>: ❌ This requires the legacy system to integrate directly with S3 uploads and adds workflow orchestration and a write-back path to on-premises systems, increasing integration complexity and operational overhead compared to a simple webhook ingestion pattern.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/prescriptive-guidance/latest/patterns/integrate-amazon-api-gateway-with-amazon-sqs-to-handle-asynchronous-rest-apis.html\">Integrate Amazon API Gateway with Amazon SQS to handle asynchronous REST APIs - AWS Prescriptive Guidance (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html\">Using Lambda with Amazon SQS - AWS Lambda (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel - Amazon Bedrock (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A platform engineering team is building an internal IT support assistant by using an Amazon Bedrock agent. The agent uses an Amazon Bedrock Knowledge Base for policy documents and multiple action groups backed by AWS Lambda functions to open and update tickets in a ticketing system. After a recent change to the agent instructions and tool descriptions, the team sees occasional multi-step loops (repeated tool calls) and wants a repeatable way to verify that the agent still completes tasks successfully while using tools efficiently.</p><p>Which combination of actions will create an agent performance framework with the LEAST operational overhead? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: agent bị loop gọi tool lặp sau khi đổi instruction và tool description.</li><li>Requirement: cách lặp lại được để kiểm tra agent hoàn thành task và dùng tool hiệu quả.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Agent evaluations</strong> chạy trên tập prompt đại diện để đo task completion và tool usage effectiveness theo thời gian. Trace trong <strong>CloudWatch Logs Insights</strong> đếm action group lặp lại và xem reasoning step.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — HTTP 200 và latency không nói lên task thành công hay tool dùng hiệu quả.</li><li><strong>B</strong>: ✅ Đúng — đánh giá managed cho đúng hai chỉ số cần đo.</li><li><strong>C</strong>: ❌ Sai — SageMaker Model Monitor không áp dụng cho Bedrock agent.</li><li><strong>D</strong>: ✅ Đúng — trace và Logs Insights phát hiện loop và đánh giá reasoning.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — pipeline LLM-as-judge tự xây tốn vận hành khi đã có managed evaluation.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Agent evaluations</li><li>Task completion rate</li><li>Agent trace</li><li>CloudWatch Logs Insights</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đánh giá agent, phát hiện loop tool\" → nghĩ ngay đến <strong>Agent evaluations</strong> + <strong>trace logging</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 73,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>Create Amazon CloudWatch Synthetics canaries that invoke the agent on a schedule and fail if the HTTP status code is not 200. Track only end-to-end latency as the primary success metric.</p>",
              "correct": false,
              "feedback": "<p>Synthetic canaries can detect availability and latency regressions, but they do not measure whether the agent actually completed the intended task or whether tool usage was effective (for example, repeated or unnecessary action group invocations).</p>"
            },
            {
              "choice": "<p>Run Amazon Bedrock Agent evaluations against a representative prompt dataset and use the results to track task completion rates and tool usage effectiveness over time.</p>",
              "correct": true,
              "feedback": "<p>Agent evaluations provide a managed way to assess whether an agent completes the target tasks and how effectively it uses tools, which directly addresses correctness and efficiency with minimal custom infrastructure.</p>"
            },
            {
              "choice": "<p>Enable Amazon SageMaker Model Monitor on the Bedrock agent to detect drift and set alarms when response quality falls below a baseline.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Model Monitor is used to monitor models deployed in SageMaker, and it is not the primary mechanism for evaluating Amazon Bedrock agent task completion and tool usage efficiency.</p>"
            },
            {
              "choice": "<p>Log the agent trace output for production and test invocations to Amazon CloudWatch Logs and use CloudWatch Logs Insights to measure repeated action group invocations per request and to review reasoning steps in multi-step workflows.</p>",
              "correct": true,
              "feedback": "<p>Agent traces show which knowledge bases and action groups were used and in what order, enabling objective measures such as tool invocation counts/loops and qualitative inspection of multi-step reasoning. Using CloudWatch Logs and Logs Insights keeps the operational burden low while still providing actionable metrics.</p>"
            },
            {
              "choice": "<p>Build a custom evaluation pipeline with AWS Step Functions that replays prompts, calls a separate foundation model as a judge, and stores scoring results in Amazon S3 for reporting.</p>",
              "correct": false,
              "feedback": "<p>This can work, but it introduces significant custom orchestration and maintenance overhead compared with using managed Bedrock agent evaluation capabilities and built-in tracing/observability.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 73,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-overhead agent performance framework should directly measure whether the agent completes tasks and how efficiently it uses tools. Using managed Amazon Bedrock Agent evaluations provides standardized scoring for agent task outcomes and tool effectiveness without building custom pipelines. Capturing agent traces and analyzing them in CloudWatch Logs provides concrete observability into multi-step behavior (such as repeated tool loops) and supports reasoning-quality assessment by showing the sequence of orchestration steps, knowledge base retrievals, and action group invocations. Approaches that only test endpoint availability/latency miss correctness and tool efficiency, while building a bespoke judge-and-orchestrate system increases operational complexity.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Synthetic canaries can detect availability and latency regressions, but they do not measure whether the agent actually completed the intended task or whether tool usage was effective (for example, repeated or unnecessary action group invocations).<br/>• <strong>B</strong>: ✅ Agent evaluations provide a managed way to assess whether an agent completes the target tasks and how effectively it uses tools, which directly addresses correctness and efficiency with minimal custom infrastructure.<br/>• <strong>C</strong>: ❌ SageMaker Model Monitor is used to monitor models deployed in SageMaker, and it is not the primary mechanism for evaluating Amazon Bedrock agent task completion and tool usage efficiency.<br/>• <strong>D</strong>: ✅ Agent traces show which knowledge bases and action groups were used and in what order, enabling objective measures such as tool invocation counts/loops and qualitative inspection of multi-step reasoning. Using CloudWatch Logs and Logs Insights keeps the operational burden low while still providing actionable metrics.<br/>• <strong>E</strong>: ❌ This can work, but it introduces significant custom orchestration and maintenance overhead compared with using managed Bedrock agent evaluation capabilities and built-in tracing/observability.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations.html\">Evaluate agent performance with Amazon Bedrock AgentCore Evaluations - Amazon Bedrock AgentCore (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html\">Track agent's step-by-step reasoning process using trace - Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html\">Analyzing log data with CloudWatch Logs Insights - Amazon CloudWatch Logs (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, D"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services engineering team has created a domain-specific LLM by applying a parameter-efficient fine-tuning technique (LoRA) in Amazon SageMaker AI. The team wants to deploy the customized model to production and frequently release improved LoRA versions. The team must maintain a clear version history and approval trail for each release, and must be able to roll back quickly if a newly deployed model increases error rates or produces unacceptable outputs.</p><p>Which combination of actions will meet these requirements with the LEAST operational overhead? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: triển khai model LoRA fine-tune từ SageMaker AI, phát hành phiên bản mới thường xuyên.</li><li>Requirement: lịch sử phiên bản và approval trail, rollback nhanh nếu lỗi tăng.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SageMaker Model Registry</strong> quản lý phiên bản kèm trạng thái approval. <strong>Deployment guardrails</strong> (canary/linear) trên endpoint tự rollback dựa vào CloudWatch alarm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Prompt Management version prompt, không phải model và không có deployment lifecycle.</li><li><strong>B</strong>: ✅ Đúng — version history cộng approval gate.</li><li><strong>C</strong>: ✅ Đúng — rollout dần và rollback tự động theo alarm.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — S3 versioning lưu được artifact nhưng không có approval trail hay rollback tự động, đổi config thủ công.</li><li><strong>E</strong>: ❌ Sai — hosting LLM trên Lambda không phù hợp (giới hạn kích thước và tài nguyên), và bỏ qua SageMaker.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SageMaker Model Registry</li><li>Approval status</li><li>Deployment guardrails (canary/linear)</li><li>Auto rollback with CloudWatch alarms</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"version + approval + rollback cho model SageMaker\" → nghĩ ngay đến <strong>Model Registry</strong> + <strong>deployment guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 74,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to version prompts and prompt variants for each release, and treat prompt version changes as the model deployment lifecycle.</p>",
              "correct": false,
              "feedback": "<p>Prompt Management governs prompts, not model artifacts and model deployments. It does not provide model versioning, model approvals, or rollback mechanisms for a SageMaker-hosted customized model.</p>"
            },
            {
              "choice": "<p>Register each LoRA-adapted model version in Amazon SageMaker Model Registry and require an approval step before promoting a version for production deployment.</p>",
              "correct": true,
              "feedback": "<p>SageMaker Model Registry provides centralized versioning and metadata for model artifacts, and supports an approval workflow to control which versions can be deployed. This creates an auditable promotion trail and simplifies lifecycle management across multiple model iterations.</p>"
            },
            {
              "choice": "<p>Deploy the model behind a SageMaker real-time endpoint that uses deployment guardrails (canary or linear) with automatic rollback based on Amazon CloudWatch alarms.</p>",
              "correct": true,
              "feedback": "<p>SageMaker deployment guardrails provide controlled traffic shifting to a new model version and can automatically roll back when CloudWatch alarms indicate failures or regressions. This minimizes downtime risk and reduces the need for custom rollback automation.</p>"
            },
            {
              "choice": "<p>Store each LoRA checkpoint in Amazon S3 with bucket versioning enabled. Update the application configuration to point to the new S3 object version to switch models.</p>",
              "correct": false,
              "feedback": "<p>S3 versioning helps track objects, but it does not provide model governance (approval status), deployment orchestration, or safe traffic shifting/rollback for inference endpoints. The team would still need to build custom controls and rollback logic.</p>"
            },
            {
              "choice": "<p>Deploy each model version to a separate AWS Lambda function version and use AWS CodeDeploy to perform canary deployments of Lambda aliases to roll back if errors increase.</p>",
              "correct": false,
              "feedback": "<p>Lambda alias traffic shifting applies to Lambda functions, not to SageMaker real-time inference endpoints hosting large model artifacts. This approach does not directly address model deployment and lifecycle management for SageMaker-hosted models.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 74,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A low-overhead, production-grade lifecycle for customized models requires both governance/versioning and safe release mechanisms. A model registry provides a controlled system of record for model versions (including approvals and deployment-ready artifacts). Deployment guardrails on the inference endpoint then handle progressive rollout and rollback when monitoring signals indicate a regression, avoiding custom traffic-splitting and rollback tooling. Alternatives that rely on object storage versioning, prompt versioning, or Lambda deployment features do not provide end-to-end model lifecycle management for SageMaker-hosted customized models.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Prompt Management governs prompts, not model artifacts and model deployments. It does not provide model versioning, model approvals, or rollback mechanisms for a SageMaker-hosted customized model.<br/>• <strong>B</strong>: ✅ SageMaker Model Registry provides centralized versioning and metadata for model artifacts, and supports an approval workflow to control which versions can be deployed. This creates an auditable promotion trail and simplifies lifecycle management across multiple model iterations.<br/>• <strong>C</strong>: ✅ SageMaker deployment guardrails provide controlled traffic shifting to a new model version and can automatically roll back when CloudWatch alarms indicate failures or regressions. This minimizes downtime risk and reduces the need for custom rollback automation.<br/>• <strong>D</strong>: ❌ S3 versioning helps track objects, but it does not provide model governance (approval status), deployment orchestration, or safe traffic shifting/rollback for inference endpoints. The team would still need to build custom controls and rollback logic.<br/>• <strong>E</strong>: ❌ Lambda alias traffic shifting applies to Lambda functions, not to SageMaker real-time inference endpoints hosting large model artifacts. This approach does not directly address model deployment and lifecycle management for SageMaker-hosted models.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-models.html\">Model Registry Models, Model Versions, and Model Groups - Amazon SageMaker AI (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-approve.html\">Update the Approval Status of a Model - Amazon SageMaker AI (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-blue-green.html\">Blue/Green Deployments - Amazon SageMaker AI (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, C"
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail platform is building a GenAI feature that helps sellers create product listing text by using Amazon Bedrock. Most requests are routine (for example, short rewrites and basic summaries), but a smaller percentage require more advanced reasoning and higher-quality copy. The team wants to reduce ongoing inference costs while still producing high-quality output for complex requests, and the solution must avoid managing GPU infrastructure.</p><p>Which deployment approach is the MOST cost-effective way to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: phần lớn request đơn giản, một phần cần reasoning mạnh.</li><li>Requirement: giảm chi phí inference, giữ chất lượng cho request phức tạp, <strong>không quản lý hạ tầng GPU</strong>.</li><li>Ưu tiên: <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Model cascading</strong> qua Bedrock API: request đơn giản vào model nhỏ rẻ, request phức tạp tự động lên model lớn (qua <strong>intelligent prompt routing</strong> hoặc logic phía app). Hoàn toàn serverless, không GPU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — trả tiền model lớn chỉ khi cần.</li><li><strong>B</strong>: ❌ Sai — phải quản lý endpoint GPU, trả tiền 24/7, trái yêu cầu \"tránh GPU\".</li><li><strong>C</strong>: ❌ Sai — dùng model lớn và provisioned throughput cho mọi request là tốn nhất.</li><li><strong>D</strong>: ❌ Sai — fine-tune model lớn tốn chi phí train và custom model hosting, vẫn trả giá model lớn cho request đơn giản.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Model cascading</li><li>Intelligent prompt routing</li><li>Small vs large model</li><li>Không quản lý GPU</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đa số request đơn giản, vài request phức tạp, giảm chi phí\" → nghĩ ngay đến <strong>cascading / routing</strong> giữa model nhỏ và lớn.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 75,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>Implement API-based model cascading in Amazon Bedrock: route routine listing requests to a smaller pre-trained model and automatically escalate complex requests to a larger model (for example, by using intelligent prompt routing or application-side routing logic).</p>",
              "correct": true,
              "feedback": "<p>Model cascading balances performance and resource requirements by using lower-cost, smaller models for routine requests and reserving larger models for complex prompts that need higher quality. Because inference remains in Amazon Bedrock, the team avoids managing GPU infrastructure while still optimizing ongoing cost.</p>"
            },
            {
              "choice": "<p>Deploy an open-source LLM on a GPU-backed Amazon SageMaker AI real-time endpoint and use the endpoint for all listing-generation requests to control performance.</p>",
              "correct": false,
              "feedback": "<p>This introduces GPU infrastructure management and operational overhead (endpoint sizing, scaling, model server operations). It also does not reduce costs for routine prompts because every request still uses the same heavyweight deployment.</p>"
            },
            {
              "choice": "<p>Use a single large text model in Amazon Bedrock for all requests. Purchase provisioned throughput to ensure consistent performance during peak traffic.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can improve consistent capacity, but using a large model for every request does not balance resource usage with request complexity and will keep inference costs high for routine queries.</p>"
            },
            {
              "choice": "<p>Fine-tune a large Amazon Bedrock custom model so it can handle both routine and complex listing requests with shorter prompts, then use that single custom model for all invocations.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning can improve task alignment, but it can be expensive and does not provide the same cost control as routing routine requests to a smaller pre-trained model. It also does not implement a cascading strategy to reserve higher-capability inference for the minority of complex requests.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 75,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A cost-optimized GenAI deployment often comes from matching model capability to request complexity. Routine tasks (rewrites, short summaries) typically do not require the most capable and expensive model. A cascading approach invokes a smaller, cheaper pre-trained model for the common case and escalates only when the request is complex or when additional capability is needed. Keeping the workflow within Amazon Bedrock preserves a managed, serverless inference experience and avoids the operational burden of hosting and scaling GPU-backed endpoints. Strategies that use a single large model for everything (even with provisioned throughput) or that require custom hosting do not provide the same cost-to-quality balance for mixed workloads.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Model cascading balances performance and resource requirements by using lower-cost, smaller models for routine requests and reserving larger models for complex prompts that need higher quality. Because inference remains in Amazon Bedrock, the team avoids managing GPU infrastructure while still optimizing ongoing cost.<br/>• <strong>B</strong>: ❌ This introduces GPU infrastructure management and operational overhead (endpoint sizing, scaling, model server operations). It also does not reduce costs for routine prompts because every request still uses the same heavyweight deployment.<br/>• <strong>C</strong>: ❌ Provisioned throughput can improve consistent capacity, but using a large model for every request does not balance resource usage with request complexity and will keep inference costs high for routine queries.<br/>• <strong>D</strong>: ❌ Fine-tuning can improve task alignment, but it can be expensive and does not provide the same cost control as routing routine requests to a smaller pre-trained model. It also does not implement a cascading strategy to reserve higher-capability inference for the minority of complex requests.<strong>📚 FURTHER READING</strong><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-routing.html\">Understanding intelligent prompt routing in Amazon Bedrock (AWS Documentation)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://aws.amazon.com/blogs/machine-learning/use-amazon-bedrock-intelligent-prompt-routing-for-cost-and-latency-benefits/\">Use Amazon Bedrock Intelligent Prompt Routing for cost and latency benefits (AWS Blog)</a><br/>• <a target=\"_blank\" rel=\"noopener\" href=\"https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/bedrock-pricing.html\">Amazon Bedrock pricing (AWS Documentation)</a>",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    }
  ]
}
