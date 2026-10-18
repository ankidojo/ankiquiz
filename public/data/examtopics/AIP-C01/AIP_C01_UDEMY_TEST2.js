var AIP_C01_UDEMY_TEST2 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming studio's player-support security team is releasing an Amazon Bedrock chat assistant behind an API. The assistant must reduce FM misuse by screening unsafe requests before inference when possible, detecting prompt attacks in both nonstreaming and streaming model calls, redacting sensitive user data, and validating generated responses before they are returned to clients. The team wants a defense-in-depth design rather than relying on a single safeguard.</p><p>Which implementation will best meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dựng defense-in-depth cho chatbot Bedrock: chặn input độc hại trước inference, phát hiện prompt attack ở cả streaming/nonstreaming, redact dữ liệu nhạy cảm, validate output.</li><li>Requirement then chốt: <strong>kiểm tra trước inference</strong>, và kiểm tra cả output trước khi trả client.</li><li>Ưu tiên: security nhiều lớp, không dựa vào một safeguard.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Preprocessor dùng Amazon Comprehend + <strong>ApplyGuardrail (source INPUT)</strong> chặn sớm; <strong>guardrail input tags</strong> giúp prompt attack filter hoạt động với InvokeModel; <strong>ApplyGuardrail (source OUTPUT)</strong> cộng Lambda validate trước khi trả response.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ gọi guardrail lúc model call nên không screen trước inference; ApplyGuardrail trả action NONE/GUARDRAIL_INTERVENED chứ không phải ALLOW/DENY.</li><li><strong>B</strong>: ❌ Sai — denied topics/word filters không phù hợp cho identifier; không dùng input tags nên không có prompt attack detection; chỉ check format.</li><li><strong>C</strong>: ✅ Đúng — đủ lớp pre-check, guardrail input tags, post-check output.</li><li><strong>D</strong>: ❌ Sai — contextual grounding check dùng cho response (grounding/relevance), không phải prompt attack; threshold 1 chặn gần như mọi thứ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ApplyGuardrail source INPUT/OUTPUT</li><li>Guardrail input tags</li><li>Prompt attack filter</li><li>Defense-in-depth</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp screen input trước inference và validate output → nghĩ ngay đến <strong>ApplyGuardrail (INPUT + OUTPUT)</strong> kèm <strong>guardrail input tags</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>Use API Gateway validation and throttling, invoke Bedrock Guardrails only during model calls, use sensitive information Mask to protect all logs and traces, read ApplyGuardrail action as ALLOW or DENY, and suppress unsafe responses in Lambda.</p>",
              "correct": false,
              "feedback": "<p>Sensitive information masking does not apply to model invocation logs, and guardrail trace output can contain the original PII value in the match field. ApplyGuardrail returns action values such as NONE and GUARDRAIL_INTERVENED, not ALLOW or DENY.</p>"
            },
            {
              "choice": "<p>Use API Gateway validation and throttling, configure Bedrock denied topics for customer identifiers and word filters for unsafe subjects, invoke Bedrock without guardrail input tags, and run Lambda formatting checks before returning responses.</p>",
              "correct": false,
              "feedback": "<p>Denied topics are for contextual topic blocking, not for capturing individual words, names, identifiers, or entity types. Omitting guardrail input tags can prevent prompt attack filtering from applying as intended for InvokeModel and InvokeModelWithResponseStream.</p>"
            },
            {
              "choice": "<p>Use API Gateway validation and throttling, run a Lambda preprocessor that uses Amazon Comprehend and ApplyGuardrail with source INPUT, invoke Bedrock with guardrail input tags, and run Lambda plus ApplyGuardrail with source OUTPUT before returning responses.</p>",
              "correct": true,
              "feedback": "<p>This design layers API controls, custom PII preprocessing, Bedrock Guardrails before and during model use, and output validation after generation. Using guardrail input tags is important for prompt attack filtering with InvokeModel and InvokeModelWithResponseStream.</p>"
            },
            {
              "choice": "<p>Use API Gateway validation and throttling, call ApplyGuardrail with source INPUT for prompt attack checks, run contextual grounding checks against the prompt before invocation, set grounding thresholds to 1, and return masked responses directly.</p>",
              "correct": false,
              "feedback": "<p>Contextual grounding checks require a grounding source, query, and model response, so they are output-oriented checks rather than prompt-only preprocessing controls. A grounding threshold of 1 is not a valid documented setting.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 1,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A strong <b>defense-in-depth</b> safety design places controls at multiple points in the request path: API edge controls, preprocessing, model invocation safeguards, and postprocessing. <code>ApplyGuardrail</code> can evaluate content independently of a foundation model by using <code>source</code> values of <code>INPUT</code> or <code>OUTPUT</code>, which makes it useful for rejecting or transforming content before paying for inference and for checking responses before release. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use-independent-api.html?utm_source=openai\">Use the ApplyGuardrail API</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ApplyGuardrail.html\">ApplyGuardrail API reference</a>.<br/><br/>Amazon Bedrock Guardrails provide configurable safeguards such as content filters, denied topics, word filters, sensitive information filters, contextual grounding checks, and Automated Reasoning checks. For prompt attack detection with <code>InvokeModel</code> and <code>InvokeModelWithResponseStream</code>, AWS documents that user input should be tagged with guardrail input tags, otherwise prompt attacks for those use cases will not be filtered. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Amazon Bedrock Guardrails</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-prompt-attack.html\">Prompt attack filter</a>.<br/><br/>The common anti-pattern is treating one guardrail feature as a complete security boundary. <b>Denied topics</b> are not a substitute for word filters or sensitive information filters, and sensitive information masking should not be assumed to sanitize every log or trace artifact. Contextual grounding is also not a prompt-only screen, because it requires the response content to evaluate against a grounding source and query. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-denied-topics.html\">Denied topics</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Sensitive information filters</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html\">Contextual grounding check</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Sensitive information masking does not apply to model invocation logs, and guardrail trace output can contain the original PII value in the match field. ApplyGuardrail returns action values such as NONE and GUARDRAIL_INTERVENED, not ALLOW or DENY.<br/>• <strong>B</strong>: ❌ Denied topics are for contextual topic blocking, not for capturing individual words, names, identifiers, or entity types. Omitting guardrail input tags can prevent prompt attack filtering from applying as intended for InvokeModel and InvokeModelWithResponseStream.<br/>• <strong>C</strong>: ✅ This design layers API controls, custom PII preprocessing, Bedrock Guardrails before and during model use, and output validation after generation. Using guardrail input tags is important for prompt attack filtering with InvokeModel and InvokeModelWithResponseStream.<br/>• <strong>D</strong>: ❌ Contextual grounding checks require a grounding source, query, and model response, so they are output-oriented checks rather than prompt-only preprocessing controls. A grounding threshold of 1 is not a valid documented setting.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online legal research provider's search AI team runs a customer-facing assistant by using Amazon Bedrock ConverseStream with a supported on-demand Claude model. Each request begins with the same long system instructions, citation rules, and jurisdiction taxonomy. The application then appends retrieved case snippets and the user's question, which vary for each request. Profiling shows that repeated processing of the shared prompt material is increasing initial response latency and input-token cost. The team wants to reduce latency and cost without changing models or building a separate response cache.</p><p>Which caching configuration will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giảm latency và input-token cost khi mỗi request lặp lại một prefix dài giống nhau (system instructions, citation rules, taxonomy).</li><li>Requirement quan trọng: không đổi model, <strong>không tự xây response cache</strong>.</li><li>Ưu tiên: cost và latency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock prompt caching</strong> cache theo prefix. Đặt <strong>cache checkpoint</strong> ngay sau phần tĩnh, giữ prefix không đổi và đủ số token tối thiểu của model thì các request sau đọc từ cache.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — checkpoint sau prefix tĩnh, prefix bất biến, kiểm tra minimum token theo model.</li><li><strong>B</strong>: ❌ Sai — checkpoint đặt sau phần thay đổi (snippets, câu hỏi) nên prefix khác nhau mỗi request, không bao giờ cache hit.</li><li><strong>C</strong>: ❌ Sai — batch inference là offline, không phải ConverseStream tương tác; mục tiêu là latency nên không hợp.</li><li><strong>D</strong>: ❌ Sai — có giới hạn số checkpoint mỗi request, và minimum token/hỗ trợ khác nhau theo model, không dùng chung layout được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt caching / cachePoint</li><li>Static prefix trước, dynamic sau</li><li>Minimum token theo model</li><li>TTL (5 phút mặc định)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt dài lặp lại, muốn giảm latency + cost → nghĩ ngay đến <strong>prompt cache checkpoint</strong> sau phần tĩnh.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 2,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>Add a Bedrock prompt cache checkpoint after the shared instructions, citation rules, and taxonomy, keep that prefix unchanged across requests, and verify it meets the model-specific minimum token count.</p>",
              "correct": true,
              "feedback": "<p>This uses Amazon Bedrock prompt caching on a supported on-demand model API and places the cache checkpoint at the reusable portion of the prompt. Because Bedrock caches a static contiguous prefix, keeping that prefix unchanged and meeting the model-specific minimum token requirement allows later requests to benefit from the cache.</p>"
            },
            {
              "choice": "<p>Add a Bedrock prompt cache checkpoint after the retrieved snippets and user question, keep the checkpoint ttl at 1h, and rely on Bedrock to reuse the earlier prompt material.</p>",
              "correct": false,
              "feedback": "<p>This places the checkpoint after retrieved snippets and user input, which are described as changing on each request. Changing the cached prefix in a later request causes a cache miss, so this configuration would provide little reuse for the repeated prompt material.</p>"
            },
            {
              "choice": "<p>Move the workload to Amazon Bedrock batch inference, add CachePointBlock objects to each request payload, and use response streaming only for user-visible follow-up requests.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching is not supported with the Amazon Bedrock batch inference API. Moving the interactive assistant flow to batch inference would not use the documented prompt-caching path for ConverseStream or the invoke APIs.</p>"
            },
            {
              "choice": "<p>Add cache checkpoints every 1,024 tokens throughout the full request, set each CachePointBlock type to default, and use the same checkpoint layout for every supported foundation model.</p>",
              "correct": false,
              "feedback": "<p>This assumes a universal checkpoint strategy across all supported foundation models. Bedrock prompt-cache limits are model-specific, and the current Claude table includes different minimum token requirements and a maximum checkpoint count per request.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 2,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock prompt caching</b> is designed for cases where many requests share the same leading prompt material, such as system instructions, policies, schemas, or long reference text. Bedrock caches a <i>static contiguous prompt prefix</i> at cache checkpoints, so the reusable content must appear before the changing content and must remain unchanged between requests. The feature can reduce inference latency and input-token cost for supported models when the checkpoint satisfies the model-specific requirements described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html?utm_source=openai\">Amazon Bedrock prompt caching</a>.<br/><br/>The checkpoint should not be placed after retrieved RAG snippets or user questions when those parts vary on every request. If the cached prefix changes, Bedrock records a cache miss rather than reusing only the matching subset. Engineers should also avoid hard-coding a universal minimum such as 1,024 tokens, because Bedrock prompt-cache limits vary by model and the documented table includes different minimum token thresholds and checkpoint limits.<br/><br/>A <code>CachePointBlock</code> defines reusable cached content for later API calls. Its required <code>type</code> currently supports <code>default</code>, and its optional <code>ttl</code> supports values such as <code>5m</code> and <code>1h</code>, as documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_CachePointBlock.html\">CachePointBlock</a>. Prompt caching is supported through APIs such as <code>Converse</code>, <code>ConverseStream</code>, <code>InvokeModel</code>, and <code>InvokeModelWithResponseStream</code> for supported on-demand models, but it is not supported with the batch inference API.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This uses Amazon Bedrock prompt caching on a supported on-demand model API and places the cache checkpoint at the reusable portion of the prompt. Because Bedrock caches a static contiguous prefix, keeping that prefix unchanged and meeting the model-specific minimum token requirement allows later requests to benefit from the cache.<br/>• <strong>B</strong>: ❌ This places the checkpoint after retrieved snippets and user input, which are described as changing on each request. Changing the cached prefix in a later request causes a cache miss, so this configuration would provide little reuse for the repeated prompt material.<br/>• <strong>C</strong>: ❌ Prompt caching is not supported with the Amazon Bedrock batch inference API. Moving the interactive assistant flow to batch inference would not use the documented prompt-caching path for ConverseStream or the invoke APIs.<br/>• <strong>D</strong>: ❌ This assumes a universal checkpoint strategy across all supported foundation models. Bedrock prompt-cache limits are model-specific, and the current Claude table includes different minimum token requirements and a maximum checkpoint count per request.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A professional sports league's officiating analytics team is validating a multi-step rules assistant built with Strands Agents. The assistant invokes statistics and rulebook tools, and the CI pipeline replays one synthetic session at a time from OpenTelemetry trace data before each deployment. The team needs caller-initiated scoring that returns results directly to the pipeline and compares the final agent response to an SME-approved expected response.</p><p>Which evaluation approach will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: CI pipeline replay từng session tổng hợp từ OpenTelemetry trace và chấm điểm so với expected response do SME duyệt.</li><li>Requirement quan trọng: <strong>caller-initiated</strong>, kết quả trả trực tiếp, so sánh final response với reference.</li><li>Ưu tiên: on-demand evaluation trong CI.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AgentCore Evaluations Evaluate API</strong> là on-demand, đồng bộ, nhận <strong>sessionSpans</strong> (OTel) và ground truth qua <strong>evaluationReferenceInputs</strong>; evaluator Builtin.Correctness dùng expectedResponse.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Evaluate API + sessionSpans + expectedResponse trong evaluationReferenceInputs.</li><li><strong>B</strong>: ❌ Sai — online evaluation giám sát liên tục traffic production, không phải caller-initiated cho một session replay.</li><li><strong>C</strong>: ❌ Sai — batch job chạy bất đồng bộ trên log, không trả kết quả trực tiếp cho pipeline.</li><li><strong>D</strong>: ❌ Sai — expectedResponse đặt sai chỗ (sessionMetadata); reference phải nằm trong evaluationReferenceInputs.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Evaluate API (on-demand)</li><li>sessionSpans</li><li>evaluationReferenceInputs</li><li>Builtin.Correctness</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp CI/CD gọi chấm điểm agent từng session, nhận kết quả ngay → nghĩ ngay đến <strong>AgentCore Evaluate API</strong> on-demand.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 3,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>Call the Amazon Bedrock AgentCore Evaluations Evaluate API with OpenTelemetry sessionSpans, set evaluatorId to Builtin.Correctness, and pass expectedResponse values in evaluationReferenceInputs.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the on-demand scoring path, which is synchronous and caller initiated for a single session. The Evaluate API accepts OpenTelemetry trace input through sessionSpans, and Builtin.Correctness uses expectedResponse as its ground-truth reference.</p>"
            },
            {
              "choice": "<p>Create an online Amazon Bedrock AgentCore Evaluations configuration from application traces, set evaluatorId to Builtin.Correctness, and pass expectedResponse values in evaluationReferenceInputs.</p>",
              "correct": false,
              "feedback": "<p>Online evaluation is intended for continuous, event-driven production monitoring rather than a caller-initiated CI check that returns synchronously. AWS documents that online evaluation does not support ground truth, so expectedResponse references do not fit this evaluation type.</p>"
            },
            {
              "choice": "<p>Start a batch Amazon Bedrock AgentCore Evaluations job over CloudWatch Logs, set evaluatorId to Builtin.Correctness, and pass expectedResponse values in evaluationReferenceInputs.</p>",
              "correct": false,
              "feedback": "<p>Batch evaluation is caller initiated but asynchronous and evaluates multiple sessions discovered from CloudWatch Logs. It is not the best fit for failing a pull request immediately, and AWS documents batch ground truth through sessionMetadata rather than evaluationReferenceInputs.</p>"
            },
            {
              "choice": "<p>Call the Amazon Bedrock AgentCore Evaluations Evaluate API with CloudWatch log events only, set evaluatorId to Builtin.Correctness, and pass expectedResponse values in sessionMetadata.</p>",
              "correct": false,
              "feedback": "<p>The on-demand Evaluate API requires sessionSpans containing spans and corresponding events, not only raw log events. For on-demand evaluation, reference data is supplied through evaluationReferenceInputs, while sessionMetadata is associated with batch evaluation ground truth.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 3,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock AgentCore Evaluations</b> provides several evaluation modes, and the correct mode depends on how the evaluation is triggered and how results are consumed. For a CI pipeline that submits one session and needs an immediate result, the <code>Evaluate</code> API is the right fit because it is the on-demand, synchronous scoring API for agent traces. The API requires a specified <code>evaluatorId</code>, accepts traces in OpenTelemetry format, and returns <code>evaluationResults</code> that can be used to pass or fail the pipeline. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_Evaluate.html\">Evaluate</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations.html\">Evaluate AI agent performance</a>.<br/><br/>The distinction among evaluation types is important. <i>Online</i> evaluation is continuous production monitoring and does not support ground truth, so it is not appropriate when the test needs to compare against an SME-approved expected answer. <i>Batch</i> evaluation is useful for asynchronous analysis across multiple sessions in CloudWatch Logs, but it is not designed to return a single-session score directly to a pull request workflow. AWS also documents that on-demand evaluation uses <code>evaluationReferenceInputs</code>, while batch evaluation uses <code>sessionMetadata</code> for inline ground truth. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/batch-evaluations.html\">Run batch evaluations</a>.<br/><br/>For this scenario, <code>Builtin.Correctness</code> is the relevant built-in evaluator because AWS maps it to trace-level evaluation with <code>expectedResponse</code> as the reference field. The input must include <code>sessionSpans</code> with both spans and corresponding events because AgentCore Evaluations scores agent behavior from trace and span data, not from unstructured logs alone. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-evaluators-overview.html\">Built-in evaluators overview</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/understanding-input-spans.html\">Understanding evaluation input spans</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses the on-demand scoring path, which is synchronous and caller initiated for a single session. The Evaluate API accepts OpenTelemetry trace input through sessionSpans, and Builtin.Correctness uses expectedResponse as its ground-truth reference.<br/>• <strong>B</strong>: ❌ Online evaluation is intended for continuous, event-driven production monitoring rather than a caller-initiated CI check that returns synchronously. AWS documents that online evaluation does not support ground truth, so expectedResponse references do not fit this evaluation type.<br/>• <strong>C</strong>: ❌ Batch evaluation is caller initiated but asynchronous and evaluates multiple sessions discovered from CloudWatch Logs. It is not the best fit for failing a pull request immediately, and AWS documents batch ground truth through sessionMetadata rather than evaluationReferenceInputs.<br/>• <strong>D</strong>: ❌ The on-demand Evaluate API requires sessionSpans containing spans and corresponding events, not only raw log events. For on-demand evaluation, reference data is supplied through evaluationReferenceInputs, while sessionMetadata is associated with batch evaluation ground truth.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial market data provider's AI platform team manages Amazon Bedrock prompts that are used by multiple internal applications. Developers currently copy prompt text into application repositories, which has caused inconsistent behavior and unclear ownership of production changes. The team needs reusable parameterized templates, controlled promotion of prompt changes, a stable versioned production reference for each approved prompt, auditability for prompt resource changes, and application-emitted access logs for troubleshooting.</p><p>Which approach will meet these requirements with the MOST appropriate governance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: quản trị prompt dùng chung: template có biến, version ổn định, promote có kiểm soát, audit thay đổi, application access logs.</li><li>Requirement quan trọng: <strong>Amazon Bedrock Prompt Management</strong> với variables và versions.</li><li>Ưu tiên: governance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Prompt Management</strong> cho template tham số hóa và <strong>immutable version</strong> làm tham chiếu production; CloudTrail audit API, còn access log do ứng dụng tự ghi vào CloudWatch Logs; approval thủ công cho promotion.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Flows là orchestration, không phải kho quản lý prompt; thêm phức tạp không cần thiết.</li><li><strong>B</strong>: ❌ Sai — Secrets Manager dành cho credential, không có prompt variables/versioning chuyên dụng.</li><li><strong>C</strong>: ✅ Đúng — Prompt Management + versions + approval + CloudTrail + CloudWatch app logs.</li><li><strong>D</strong>: ❌ Sai — load \"latest\" khi startup không có version ổn định; thiếu parameterized template và governance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>Prompt variables</li><li>Prompt version (immutable)</li><li>CloudTrail audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp quản lý prompt tập trung, version, tái sử dụng → nghĩ ngay đến <strong>Bedrock Prompt Management</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 4,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>Define each prompt as an Amazon Bedrock Flow node with input variables. Store the Flow JSON definitions in S3. Promote Flow aliases after review, audit Flow API calls with CloudTrail, and emit orchestration logs to CloudWatch Logs.</p>",
              "correct": false,
              "feedback": "<p>Bedrock Flows are useful for orchestrating multi-step generative AI workflows, including prompts, model calls, and conditions. Using a Flow for every reusable prompt adds unnecessary orchestration overhead and does not directly address centralized prompt template governance as cleanly as Prompt Management.</p>"
            },
            {
              "choice": "<p>Store each prompt template in AWS Secrets Manager with a separate secret for each environment. Rotate prompt secrets after approval, audit secret updates with CloudTrail, and emit application access metadata to CloudWatch Logs.</p>",
              "correct": false,
              "feedback": "<p>Secrets Manager is designed for credentials and sensitive configuration, not for governing reusable prompt templates. Secret rotation is not an appropriate promotion model for prompt content and does not provide Bedrock-native prompt version references for production applications.</p>"
            },
            {
              "choice": "<p>Create prompts in Amazon Bedrock Prompt Management with variables and versions. Store prompt source artifacts in a versioned S3 repository. Promote prompt versions through a manual deployment approval step, audit Bedrock API activity with CloudTrail, and write prompt access metadata from applications to CloudWatch Logs.</p>",
              "correct": true,
              "feedback": "<p>This approach uses Bedrock Prompt Management for reusable parameterized prompts and versioned production snapshots. S3 versioning, an external approval step, CloudTrail, and application-emitted CloudWatch Logs provide source control, promotion control, auditability, and operational visibility without requiring each application to manage raw prompt text.</p>"
            },
            {
              "choice": "<p>Store prompt templates as encrypted S3 objects with object tags for environments. Load the latest approved object at application startup. Track S3 object reads with CloudTrail data events, and emit application request metadata to CloudWatch Logs.</p>",
              "correct": false,
              "feedback": "<p>This approach can provide storage history and object-level auditing, but it does not use Bedrock prompt resources or managed prompt versions. Applications would still need custom template loading and parameter handling, which increases the chance of drift across teams.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 4,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Prompt Management</b> is the best fit when teams need centralized reusable prompt templates that include variables, model settings, and versions. A production application can reference an approved prompt version as a stable snapshot rather than copying raw prompt text into each codebase, which reduces drift and makes rollback and change ownership clearer.<br/><br/>A practical governance model usually combines Bedrock prompt resources with external release controls. Teams can keep prompt source artifacts or manifests in an <b>Amazon S3</b> bucket with versioning enabled, then promote a Bedrock prompt version through a manual approval step in a deployment workflow. <b>AWS CloudTrail</b> provides the audit trail for Bedrock API activity, while applications can write prompt name, prompt version, caller context, and request identifiers to <b>Amazon CloudWatch Logs</b> for troubleshooting access and usage patterns.<br/><br/>S3-only prompt storage can be workable for simple applications, but it shifts template rendering, validation, version selection, and consistency checks into custom application code. Bedrock Flows are valuable when the problem is workflow orchestration, but using a flow as the primary repository for every prompt is heavier than necessary. Secrets Manager protects secrets well, but prompt templates are governed content artifacts, not rotating credentials.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Amazon Bedrock Prompt Management</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">Logging Amazon Bedrock API calls with AWS CloudTrail</a>, <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html\">Using versioning in S3 buckets</a>, and <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html\">What is Amazon CloudWatch Logs?</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Bedrock Flows are useful for orchestrating multi-step generative AI workflows, including prompts, model calls, and conditions. Using a Flow for every reusable prompt adds unnecessary orchestration overhead and does not directly address centralized prompt template governance as cleanly as Prompt Management.<br/>• <strong>B</strong>: ❌ Secrets Manager is designed for credentials and sensitive configuration, not for governing reusable prompt templates. Secret rotation is not an appropriate promotion model for prompt content and does not provide Bedrock-native prompt version references for production applications.<br/>• <strong>C</strong>: ✅ This approach uses Bedrock Prompt Management for reusable parameterized prompts and versioned production snapshots. S3 versioning, an external approval step, CloudTrail, and application-emitted CloudWatch Logs provide source control, promotion control, auditability, and operational visibility without requiring each application to manage raw prompt text.<br/>• <strong>D</strong>: ❌ This approach can provide storage history and object-level auditing, but it does not use Bedrock prompt resources or managed prompt versions. Applications would still need custom template loading and parameter handling, which increases the chance of drift across teams.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A municipal benefits agency's caseworker platform team is building an Amazon Bedrock based assistant that summarizes eligibility case notes stored in Amazon S3 and accepts free text follow-up questions from staff. The case files and questions can include names, government identifiers, phone numbers, and bank account details. The agency requires a managed way to identify sensitive data in stored source files, redact sensitive entities from free text before any FM invocation, reduce the chance that sensitive values appear in generated answers, and delete prompt and response artifacts after 30 days. The team wants to avoid training or operating a custom PII model.</p><p>Which architecture best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý PII ở nhiều điểm: file nguồn trong S3, text người dùng trước FM, output của FM, và lưu trữ artifact.</li><li>Requirement quan trọng: dùng managed service, <strong>không tự train PII model</strong>; xóa sau 30 ngày.</li><li>Ưu tiên: compliance, operational overhead thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Macie</strong> phát hiện dữ liệu nhạy cảm trong S3; <strong>Amazon Comprehend</strong> PII redaction cho free text trước invocation; Bedrock guardrail sensitive information filter che PII ở response; <strong>S3 Lifecycle</strong> expiration xóa sau 30 ngày.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ bốn yêu cầu bằng managed service.</li><li><strong>B</strong>: ❌ Sai — Object Lock retention giữ object không bị xóa, ngược yêu cầu xóa sau 30 ngày.</li><li><strong>C</strong>: ❌ Sai — đảo vai trò: Macie findings không dùng để redact text runtime; Comprehend async job không phải discovery chuẩn cho S3 như Macie.</li><li><strong>D</strong>: ❌ Sai — API Gateway request validation chỉ kiểm tra schema, không redact PII; denied topics/word filters không mask PII.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Macie (S3 discovery)</li><li>Comprehend PII detection</li><li>Guardrail sensitive information filter</li><li>S3 Lifecycle expiration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tìm PII trong S3 → <strong>Macie</strong>; redact free text → <strong>Comprehend</strong>; mask output → <strong>Guardrails</strong>; xóa sau N ngày → <strong>Lifecycle</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 5,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>Configure Amazon Macie sensitive data discovery for source S3 buckets. Use a Lambda preprocessor with Amazon Comprehend PII detection to redact user text before invocation. Apply an Amazon Bedrock guardrail with sensitive information filters to mask PII in responses. Configure S3 Lifecycle expiration on prompt and response artifact buckets.</p>",
              "correct": true,
              "feedback": "<p>This approach uses managed services at the correct points in the data flow. Macie discovers sensitive data in S3, Comprehend supports PII detection for runtime text redaction, Bedrock guardrails can apply sensitive information filters to model interactions, and S3 Lifecycle expiration enforces the 30-day retention requirement.</p>"
            },
            {
              "choice": "<p>Configure Amazon Macie sensitive data discovery for source S3 buckets. Use a Lambda preprocessor with Amazon Comprehend PII detection to redact user text before invocation. Apply an Amazon Bedrock guardrail with sensitive information filters to mask PII in responses. Configure S3 Object Lock retention on prompt and response artifact buckets.</p>",
              "correct": false,
              "feedback": "<p>This design uses appropriate managed controls for S3 discovery, pre-invocation redaction, and response filtering. However, S3 Object Lock retention prevents deletion or overwrite during a retention period and does not automatically delete artifacts after 30 days.</p>"
            },
            {
              "choice": "<p>Configure Amazon Comprehend asynchronous analysis jobs for source S3 buckets. Use a Lambda preprocessor with Amazon Macie findings to redact user text before invocation. Apply an Amazon Bedrock guardrail with sensitive information filters to mask PII in responses. Configure S3 Lifecycle expiration on prompt and response artifact buckets.</p>",
              "correct": false,
              "feedback": "<p>Amazon Comprehend can analyze text, but Amazon Macie findings are generated from supported data sources such as S3 objects and are not an inline redaction mechanism for arbitrary user input. This design does not reliably redact free text before the FM invocation.</p>"
            },
            {
              "choice": "<p>Configure Amazon Macie sensitive data discovery for source S3 buckets. Use API Gateway request validation with a JSON schema to reject malformed user text before invocation. Apply an Amazon Bedrock guardrail with denied topics and word filters to mask PII in responses. Configure S3 Lifecycle expiration on prompt and response artifact buckets.</p>",
              "correct": false,
              "feedback": "<p>API Gateway request validation can enforce request shape, required fields, and schema constraints, but it does not perform named entity PII redaction. Denied topics and word filters are not the Bedrock guardrail feature designed to identify and mask sensitive information such as PII.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 5,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Privacy-preserving FM systems need controls at multiple stages because each stage exposes different risk. <b>Amazon Macie</b> is suited to discovering sensitive data in S3 source repositories before those files are ingested into a RAG or summarization workflow, while <b>Amazon Comprehend</b> can be used by application code to detect PII entities in runtime text so the application can redact or transform user input before sending it to a foundation model.<br/><br/><b>Amazon Bedrock guardrails</b> add a separate runtime safety control for model inputs and outputs. Sensitive information filters can help detect and mask or block configured sensitive information, but they should not be treated as a replacement for upstream data minimization when the requirement is to prevent sensitive free text from reaching the FM endpoint in the first place.<br/><br/>Retention is a storage governance problem, not a model safety problem. <b>S3 Lifecycle</b> expiration rules are the managed mechanism for deleting prompt and response artifacts after a defined retention period, while <b>S3 Object Lock</b> retention can prevent deletion for a period but does not by itself expire objects when that period ends. Bedrock also provides data protection controls for customer content, but the application owner still must decide what data to send, what to log, and how long to retain it.<br/><br/>For more information, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/discovery-jobs.html\">Discovering sensitive data with Amazon Macie</a>, <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html\">Detecting PII entities with Amazon Comprehend</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html\">Sensitive information filters in Amazon Bedrock guardrails</a>, <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html\">Managing your storage lifecycle</a>, <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html\">Using S3 Object Lock</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html\">Data protection in Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses managed services at the correct points in the data flow. Macie discovers sensitive data in S3, Comprehend supports PII detection for runtime text redaction, Bedrock guardrails can apply sensitive information filters to model interactions, and S3 Lifecycle expiration enforces the 30-day retention requirement.<br/>• <strong>B</strong>: ❌ This design uses appropriate managed controls for S3 discovery, pre-invocation redaction, and response filtering. However, S3 Object Lock retention prevents deletion or overwrite during a retention period and does not automatically delete artifacts after 30 days.<br/>• <strong>C</strong>: ❌ Amazon Comprehend can analyze text, but Amazon Macie findings are generated from supported data sources such as S3 objects and are not an inline redaction mechanism for arbitrary user input. This design does not reliably redact free text before the FM invocation.<br/>• <strong>D</strong>: ❌ API Gateway request validation can enforce request shape, required fields, and schema constraints, but it does not perform named entity PII redaction. Denied topics and word filters are not the Bedrock guardrail feature designed to identify and mask sensitive information such as PII.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A museum consortium's visitor-experience engineering team is adding a GenAI question-answering feature to an existing web application. The frontend will call an HTTPS microservice and can wait for a complete response. The team wants the least complex serverless integration that preserves a common conversation request pattern when switching among Amazon Bedrock text models that support messages. The API and integration will be deployed with AWS CloudFormation.</p><p>Which implementation best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: expose GenAI Q&amp;A qua HTTPS, frontend chờ response đầy đủ.</li><li>Requirement quan trọng: <strong>serverless ít phức tạp nhất</strong>, request pattern hội thoại dùng chung khi đổi model Bedrock.</li><li>Ưu tiên: simplicity, portability giữa model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Converse API</strong> cung cấp định dạng messages thống nhất giữa các model; <strong>HTTP API</strong> với Lambda proxy payload 2.0 đơn giản và nhẹ hơn REST API cho trường hợp này.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — REST API chạy được nhưng nhiều tính năng và phức tạp hơn HTTP API khi chỉ cần proxy.</li><li><strong>B</strong>: ❌ Sai — InvokeModel mỗi model có body riêng, không dùng chung một JSON body được.</li><li><strong>C</strong>: ✅ Đúng — HTTP API + Lambda proxy + Converse (bedrock:InvokeModel đủ cho Converse).</li><li><strong>D</strong>: ❌ Sai — không cần streaming vì frontend chờ response đầy đủ; Converse gọi qua bedrock-runtime, không phải \"service endpoint\" streaming permission.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Converse API (unified messages)</li><li>HTTP API payloadFormatVersion 2.0</li><li>Lambda proxy integration</li><li>bedrock:InvokeModel</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đổi model mà muốn giữ cùng request format → nghĩ ngay đến <strong>Converse API</strong>; gặp proxy đơn giản → <strong>HTTP API</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 6,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>Create an API Gateway REST API with a Lambda proxy integration and a stage deployment. Grant API Gateway permission to invoke the function, and have Lambda call Converse on bedrock-runtime with bedrock:InvokeModel permission.</p>",
              "correct": false,
              "feedback": "<p>This can front Lambda and call Amazon Bedrock correctly, but it is not the least complex fit for a lightweight RESTful endpoint. AWS positions REST APIs as more customizable and feature-rich, while HTTP APIs are the lower-latency lightweight option for this style of integration.</p>"
            },
            {
              "choice": "<p>Create an API Gateway HTTP API with a Lambda proxy integration that specifies payloadFormatVersion 2.0. Grant API Gateway permission to invoke the function, and have Lambda call InvokeModel with one shared JSON body for all selected models.</p>",
              "correct": false,
              "feedback": "<p>The HTTP API and Lambda integration pattern is suitable, but the inference call does not meet the common conversation interface requirement. InvokeModel uses model-specific inference parameters in the request body, so one JSON schema should not be assumed to work across all foundation models.</p>"
            },
            {
              "choice": "<p>Create an API Gateway HTTP API with a Lambda proxy integration that specifies payloadFormatVersion 2.0. Grant API Gateway permission to invoke the function, and have Lambda call Converse on bedrock-runtime with bedrock:InvokeModel permission.</p>",
              "correct": true,
              "feedback": "<p>This meets the requirement for a lightweight serverless HTTPS microservice while preserving a common message-style interface for supported Bedrock models. HTTP API Lambda proxy integrations created with CloudFormation must specify payloadFormatVersion, and API Gateway needs permission in the Lambda resource-based policy.</p>"
            },
            {
              "choice": "<p>Create an API Gateway HTTP API with a Lambda proxy integration that specifies payloadFormatVersion 2.0. Grant API Gateway permission to invoke the function, and have Lambda call Converse on the Amazon Bedrock service endpoint with streaming permission.</p>",
              "correct": false,
              "feedback": "<p>The API Gateway and Lambda portion is close, but Converse is available on the bedrock-runtime endpoint only. For a complete nonstreaming response through Converse, the required Bedrock permission is bedrock:InvokeModel, not the streaming-specific permission.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 6,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>API Gateway HTTP APIs</b> are the best match when an existing application needs a lightweight HTTPS front door for a Lambda-backed GenAI microservice. API Gateway invokes Lambda synchronously for this integration pattern, waits for the function response, and relays the result to the caller, which fits a web application that can wait for a complete answer. For HTTP API Lambda proxy integrations created through infrastructure as code, <code>payloadFormatVersion</code> controls the event and response shape and must be specified.<br/><br/>Inside the Lambda function, the most portable Bedrock choice for a conversational feature is the <b>Converse API</b>, because it provides a consistent message-style interface across models that support messages. The Converse operations are available on the <code>bedrock-runtime</code> endpoint only, and <code>Converse</code> requires <code>bedrock:InvokeModel</code>. By contrast, <code>InvokeModel</code> is the lower-level single-prompt API whose <code>body</code> contains model-specific inference parameters, so assuming one request body works for every model creates brittle integration logic.<br/><br/>See the AWS documentation for <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html\">using API Gateway with Lambda</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html\">HTTP API Lambda integrations</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html\">Amazon Bedrock conversation inference</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/inference-api.html\">Amazon Bedrock inference API operations</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This can front Lambda and call Amazon Bedrock correctly, but it is not the least complex fit for a lightweight RESTful endpoint. AWS positions REST APIs as more customizable and feature-rich, while HTTP APIs are the lower-latency lightweight option for this style of integration.<br/>• <strong>B</strong>: ❌ The HTTP API and Lambda integration pattern is suitable, but the inference call does not meet the common conversation interface requirement. InvokeModel uses model-specific inference parameters in the request body, so one JSON schema should not be assumed to work across all foundation models.<br/>• <strong>C</strong>: ✅ This meets the requirement for a lightweight serverless HTTPS microservice while preserving a common message-style interface for supported Bedrock models. HTTP API Lambda proxy integrations created with CloudFormation must specify payloadFormatVersion, and API Gateway needs permission in the Lambda resource-based policy.<br/>• <strong>D</strong>: ❌ The API Gateway and Lambda portion is close, but Converse is available on the bedrock-runtime endpoint only. For a complete nonstreaming response through Converse, the required Bedrock permission is bedrock:InvokeModel, not the streaming-specific permission.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An emergency roadside assistance network's digital dispatch team is adding an Amazon Bedrock based chat assistant to an API Gateway and Lambda application. Drivers may answer required questions over several turns, such as location, vehicle type, and service type. The front-end Lambda functions are stateless. The team has labeled historical chat utterances for supported intents such as towing, lockout, and fuel delivery. The solution must retain session context for about 30 days, route supported intents through auditable workflow states, ask deterministic follow-up questions when required values are missing, avoid managing model infrastructure, and avoid using the FM as the sole controller for workflow branching.</p><p>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chatbot nhiều lượt cần nhớ session ~30 ngày, route intent qua workflow có thể audit, hỏi lại giá trị thiếu một cách <strong>deterministic</strong>.</li><li>Requirement quan trọng: Lambda stateless, FM không là controller duy nhất của branching, có sẵn labeled utterances.</li><li>Ưu tiên: auditability, managed, deterministic.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB</strong> (key theo user/session, TTL) lưu context bền cho stateless Lambda; <strong>Comprehend custom classifier</strong> (dùng labeled data) + <strong>Step Functions</strong> cho routing deterministic và có audit trail.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Prompt Management lưu prompt template, không phải kho transcript theo session.</li><li><strong>B</strong>: ❌ Sai — dùng chính FM phân loại và Lambda check chuỗi tự do là kém deterministic, FM làm controller.</li><li><strong>C</strong>: ✅ Đúng — session store bền, TTL 30 ngày.</li><li><strong>D</strong>: ✅ Đúng — classifier train từ labeled utterances, Step Functions quản lý branch và follow-up.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — ElastiCache là cache, phải vận hành cluster, không phù hợp lưu 30 ngày bền như DynamoDB serverless.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DynamoDB TTL</li><li>Comprehend custom classification</li><li>Step Functions state machine</li><li>Stateless Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp session state cho Lambda stateless → <strong>DynamoDB</strong>; intent routing deterministic có audit → <strong>Step Functions</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 7,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>Store full transcripts as versions in Amazon Bedrock Prompt Management; select the prompt version by session ID before each Bedrock invocation.</p>",
              "correct": false,
              "feedback": "<p>Amazon Bedrock Prompt Management is intended for creating, storing, and versioning reusable prompt templates, not for maintaining per-user conversation history. Using prompt versions as session records would mix runtime state with template lifecycle management and would not provide a practical chat memory design.</p>"
            },
            {
              "choice": "<p>Classify utterances by prompting the same Bedrock FM for an intent label; route the free-form response through Lambda condition checks for clarification branches.</p>",
              "correct": false,
              "feedback": "<p>Using an FM to produce an intent label can be useful in some designs, but this scenario requires avoiding the FM as the sole controller for workflow branching. Free-form model output also adds parsing and consistency risk when required-field clarification needs predictable control flow.</p>"
            },
            {
              "choice": "<p>Persist session records in DynamoDB keyed by user ID and session ID; read recent turns, slot values, and TTL-controlled history before each Bedrock invocation.</p>",
              "correct": true,
              "feedback": "<p>DynamoDB provides durable, low-latency storage for conversation state across stateless Lambda invocations. A TTL attribute can mark old session records for best-effort expiration after the retention window, while the application retrieves the needed context before calling the FM.</p>"
            },
            {
              "choice": "<p>Classify utterances with an Amazon Comprehend custom classifier; route the intent and confidence through a Step Functions workflow that manages clarification branches.</p>",
              "correct": true,
              "feedback": "<p>Amazon Comprehend custom classification can use the labeled utterances to produce an intent signal without requiring the team to host model infrastructure. Step Functions can make the branching and clarification workflow explicit, auditable, and easier to operate than embedding workflow state entirely in prompts.</p>"
            },
            {
              "choice": "<p>Persist session records in ElastiCache for Valkey keyed by user ID and session ID; read recent turns, slot values, and cache expiration before each invocation.</p>",
              "correct": false,
              "feedback": "<p>ElastiCache can reduce latency for frequently accessed data, but it is not the best system of record for 30-day conversational history and auditable state. Cache eviction, node replacement, and operational cache behavior make it a poor primary store for durable session context.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 7,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a custom interactive chat application, treat the FM invocation as a stateless operation: the application decides what context to include, retrieves that context, and then sends it with the prompt. <b>DynamoDB</b> is well suited for durable session records because it supports single-digit millisecond access patterns at scale, flexible item attributes for slot values and turn summaries, and <code>Time to Live</code> for best-effort expiration of old records. See <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\">What is Amazon DynamoDB?</a> and <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html\">Using time to live (TTL) in DynamoDB</a>.<br/><br/><b>Step Functions</b> gives the workflow an explicit state machine, so missing required values can trigger controlled clarification branches, retries, and logging rather than relying on an FM to infer workflow state. <b>Amazon Comprehend custom classification</b> can use the team’s labeled utterances to provide a managed intent signal that is easier to route and audit than a free-form model response. See <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html\">What is AWS Step Functions?</a> and <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html\">Custom classification</a>.<br/><br/>ElastiCache is valuable as an acceleration layer, but it is not the right primary record for auditable, 30-day conversation memory. Bedrock Prompt Management stores reusable prompt templates and versions, not per-user transcripts or live session state, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Prompt management in Amazon Bedrock</a>. A common anti-pattern in regulated or operational workflows is letting the model’s generated text become the only source of truth for routing decisions when the application needs predictable state transitions.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Amazon Bedrock Prompt Management is intended for creating, storing, and versioning reusable prompt templates, not for maintaining per-user conversation history. Using prompt versions as session records would mix runtime state with template lifecycle management and would not provide a practical chat memory design.<br/>• <strong>B</strong>: ❌ Using an FM to produce an intent label can be useful in some designs, but this scenario requires avoiding the FM as the sole controller for workflow branching. Free-form model output also adds parsing and consistency risk when required-field clarification needs predictable control flow.<br/>• <strong>C</strong>: ✅ DynamoDB provides durable, low-latency storage for conversation state across stateless Lambda invocations. A TTL attribute can mark old session records for best-effort expiration after the retention window, while the application retrieves the needed context before calling the FM.<br/>• <strong>D</strong>: ✅ Amazon Comprehend custom classification can use the labeled utterances to produce an intent signal without requiring the team to host model infrastructure. Step Functions can make the branching and clarification workflow explicit, auditable, and easier to operate than embedding workflow state entirely in prompts.<br/>• <strong>E</strong>: ❌ ElastiCache can reduce latency for frequently accessed data, but it is not the best system of record for 30-day conversational history and auditable state. Cache eviction, node replacement, and operational cache behavior make it a poor primary store for durable session context.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C, D"
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A public-sector weather agency's citizen-services team runs a RAG assistant on Amazon Bedrock Knowledge Bases to answer storm-preparedness questions through an API. The team is changing the FM used for generation, but the retrieval source and application code are unchanged. Before each promotion, the team must exercise the deployed API path with production-like user journeys, check availability and latency, and automatically compare generated answers against an 850-prompt regression set stored in S3 as .jsonl. The regression set includes reference contexts, and no conversation has more than four turns. The team wants to catch answer drift and unsupported claims without building a separate evaluation platform.</p><p>Which validation design best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: trước khi promote FM mới cho RAG, cần test đường API thật (availability, latency) và so sánh chất lượng câu trả lời với regression set 850 prompt.</li><li>Requirement quan trọng: bắt answer drift và unsupported claims, không build <strong>nền tảng đánh giá riêng</strong>.</li><li>Ưu tiên: managed, tận dụng native service.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudWatch Synthetics canaries</strong> kiểm tra API path (availability, latency); Bedrock <strong>retrieve-and-generate RAG evaluation</strong> chấm chất lượng sinh câu trả lời (correctness, faithfulness...) bằng dataset .jsonl; cổng promotion dựa trên cả hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions tự dựng synthetic monitoring, thêm công sức; thiếu canary metrics và không gate theo availability/latency.</li><li><strong>B</strong>: ❌ Sai — retrieve-only chỉ đánh giá retrieval, không đánh giá câu trả lời của FM mới.</li><li><strong>C</strong>: ❌ Sai — model evaluation job không đánh giá RAG; faithfulness/correctness của RAG cần RAG evaluation.</li><li><strong>D</strong>: ✅ Đúng — canaries + retrieve-and-generate evaluation, gate bằng cả hai.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch Synthetics canaries</li><li>RAG evaluation retrieve-and-generate</li><li>Faithfulness / correctness</li><li>Gate promotion</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đổi generator model trong RAG → <strong>retrieve-and-generate evaluation</strong>; gặp synthetic check API → <strong>Synthetics canaries</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 8,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>Schedule a Step Functions workflow to invoke the API routes with representative prompts and store transcripts in S3. Run an Amazon Bedrock retrieve-and-generate evaluation job using the S3 .jsonl dataset, and gate promotion on built-in response-quality metrics.</p>",
              "correct": false,
              "feedback": "<p>This approach can validate generated RAG answers with a documented Bedrock retrieve-and-generate evaluation job. However, it recreates scheduled endpoint monitoring logic that CloudWatch Synthetics already provides for availability, latency, and customer-like API workflow checks.</p>"
            },
            {
              "choice": "<p>Schedule CloudWatch Synthetics canaries to invoke the API routes with representative prompts and scripted response checks. Run an Amazon Bedrock retrieve-only evaluation job using the S3 .jsonl dataset, and gate promotion on context relevance and coverage metrics.</p>",
              "correct": false,
              "feedback": "<p>Retrieve-only evaluation is useful when the validation target is retrieval quality, such as whether the retrieved context is relevant and complete. The changed component is the generation FM, so this approach does not directly evaluate the generated answers for unsupported claims or response drift.</p>"
            },
            {
              "choice": "<p>Schedule CloudWatch Synthetics canaries to invoke the API routes with representative prompts and scripted response checks. Run an Amazon Bedrock model evaluation job against the changed FM, and gate promotion on built-in correctness and faithfulness metrics.</p>",
              "correct": false,
              "feedback": "<p>This approach uses the right managed service for API-path validation and uses documented Bedrock evaluation metrics. However, a model evaluation job targets the model rather than the Knowledge Bases retrieve-and-generate RAG workflow, so it is less aligned to validating generated answers with retrieved context.</p>"
            },
            {
              "choice": "<p>Schedule CloudWatch Synthetics canaries to invoke the API routes with representative prompts and scripted response checks. Run an Amazon Bedrock retrieve-and-generate evaluation job using the S3 .jsonl dataset, and gate promotion on the canary results and built-in response-quality metrics.</p>",
              "correct": true,
              "feedback": "<p>This design validates both the deployed application path and the generated answer quality before promotion. CloudWatch Synthetics canaries cover availability, latency, and scripted workflow checks, while a retrieve-and-generate evaluation can score RAG answer quality with metrics such as faithfulness and correctness.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 8,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For deployment validation during FM updates, the reliable pattern is to separate <b>application-path validation</b> from <b>AI-specific quality validation</b>. <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html?utm_source=openai\">Amazon CloudWatch Synthetics canaries</a> are scheduled scripts that can exercise endpoints and APIs, follow customer-like routes, and measure availability and latency. They can include scripted checks, but they do not automatically understand hallucination, semantic drift, or faithfulness unless the script or a downstream evaluation workflow implements those checks.<br/><br/>For the RAG quality portion, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html?utm_source=openai\">Amazon Bedrock evaluations</a> provide managed evaluation jobs for models and knowledge bases. Because the assistant uses Amazon Bedrock Knowledge Bases and the validation target is generated answers, a <b>retrieve-and-generate</b> evaluation is the right fit. The documented RAG metrics include items such as <code>Builtin.Correctness</code>, <code>Builtin.Completeness</code>, <code>Builtin.Helpfulness</code>, <code>Builtin.LogicalCoherence</code>, and <code>Builtin.Faithfulness</code>, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-metrics.html?utm_source=openai\">Amazon Bedrock knowledge base evaluation metrics</a>.<br/><br/>The dataset constraints also align with the managed evaluation service. RAG prompt datasets must be stored in S3 as <code>.jsonl</code> files, each line must be valid JSON, and a job can use up to 1,000 prompts. Retrieve-and-generate jobs support conversations up to 5 turns, so an 850-prompt dataset with at most 4 turns fits the documented limits in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-prompt.html?utm_source=openai\">Amazon Bedrock knowledge base evaluation prompt datasets</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach can validate generated RAG answers with a documented Bedrock retrieve-and-generate evaluation job. However, it recreates scheduled endpoint monitoring logic that CloudWatch Synthetics already provides for availability, latency, and customer-like API workflow checks.<br/>• <strong>B</strong>: ❌ Retrieve-only evaluation is useful when the validation target is retrieval quality, such as whether the retrieved context is relevant and complete. The changed component is the generation FM, so this approach does not directly evaluate the generated answers for unsupported claims or response drift.<br/>• <strong>C</strong>: ❌ This approach uses the right managed service for API-path validation and uses documented Bedrock evaluation metrics. However, a model evaluation job targets the model rather than the Knowledge Bases retrieve-and-generate RAG workflow, so it is less aligned to validating generated answers with retrieved context.<br/>• <strong>D</strong>: ✅ This design validates both the deployed application path and the generated answer quality before promotion. CloudWatch Synthetics canaries cover availability, latency, and scripted workflow checks, while a retrieve-and-generate evaluation can score RAG answer quality with metrics such as faithfulness and correctness.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime logistics company's operations AI team runs an Amazon Bedrock Knowledge Bases RAG application that uses an Amazon S3 data source containing port regulations, vessel handling procedures, and safety bulletins. The S3 objects are updated by multiple upstream systems throughout the day. The team must keep the vector store current, minimize unnecessary embedding-model usage, detect failed refreshes, and avoid creating a second source of truth outside the S3 bucket.</p><p>Which combination of steps should the team implement? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giữ vector store của Knowledge Base đồng bộ với S3 thay đổi liên tục.</li><li>Requirement quan trọng: giảm dùng embedding model không cần thiết, phát hiện refresh lỗi, S3 vẫn là <strong>source of truth duy nhất</strong>.</li><li>Ưu tiên: freshness, cost, observability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>StartIngestionJob</strong> đồng bộ <strong>incremental</strong> (chỉ xử lý object mới/đổi/xóa), và theo dõi trạng thái ingestion job đến terminal status (COMPLETE/FAILED) để phát hiện lỗi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — ingestion job là cách sync chuẩn, incremental nên tiết kiệm embedding.</li><li><strong>B</strong>: ✅ Đúng — poll GetIngestionJob đến trạng thái kết thúc mới đánh dấu hoàn tất, bắt được FAILED.</li><li><strong>C</strong>: ❌ Sai — direct ingestion tạo nguồn dữ liệu thứ hai ngoài S3, trái yêu cầu một source of truth.</li><li><strong>D</strong>: ❌ Sai — chỉ sửa metadata sidecar vẫn cần ingestion để cập nhật; tag đổi không tự áp dụng nếu không sync.</li><li><strong>E</strong>: ❌ Sai — xóa/tạo lại vector store tốn embedding toàn bộ, ngược mục tiêu giảm cost.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>StartIngestionJob</li><li>Incremental sync</li><li>Ingestion job status</li><li>S3 là source of truth</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp KB S3 đổi liên tục → <strong>StartIngestionJob</strong> rồi kiểm tra status; không dùng direct ingestion nếu cần một source of truth.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 9,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>Run a refresh workflow that starts a data source ingestion job for the knowledge base after source changes are published.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Knowledge Bases data source sync is incremental, but it must be initiated after source content changes. A sync processes documents added, modified, or deleted since the previous sync instead of reprocessing unchanged documents.</p>"
            },
            {
              "choice": "<p>Track each refresh workflow until the ingestion job reaches a terminal successful status before marking the update complete.</p>",
              "correct": true,
              "feedback": "<p>The StartIngestionJob operation returns an ingestion job identifier that can be checked by using GetIngestionJob. Waiting for a completed job lets the system detect failures and prevents downstream validation from assuming that re-indexing has finished.</p>"
            },
            {
              "choice": "<p>Submit changed S3 documents by using direct document ingestion and run periodic data source syncs to reconcile the bucket later.</p>",
              "correct": false,
              "feedback": "<p>Direct ingestion is a separate mechanism from syncing an S3 data source, and directly indexed changes are not reflected back into the S3 bucket. Mixing the two approaches for the same S3-backed knowledge base can create drift between the vector store and the S3 source of truth.</p>"
            },
            {
              "choice": "<p>Modify only metadata sidecar files for CSV content when tags change so the next refresh avoids re-ingesting the documents.</p>",
              "correct": false,
              "feedback": "<p>Metadata-only optimization applies only in limited cases and does not apply to CSV files. When CSV metadata files are updated, the associated CSV files are re-ingested.</p>"
            },
            {
              "choice": "<p>Delete and recreate the knowledge base vector store on a schedule to guarantee that all removed and changed objects disappear.</p>",
              "correct": false,
              "feedback": "<p>Rebuilding the vector store is unnecessary operational overhead for routine data maintenance. Bedrock Knowledge Bases sync can remove deleted documents and re-index changed documents through its incremental data source processing.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 9,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an S3-backed <b>Amazon Bedrock Knowledge Bases</b> application, the maintenance pattern is to treat S3 as the source of truth and run controlled data source syncs after upstream updates. The documented sync behavior is incremental: Bedrock skips unchanged documents, ingests new documents, re-ingests modified documents, and removes deleted documents from the vector store, which is the right tradeoff for keeping RAG data current without rebuilding the index every time. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-data-source-sync-ingest.html\">Sync to ingest your data sources into your knowledge base</a>.<br/><br/>The operational workflow should call <code>StartIngestionJob</code> for the knowledge base data source and use the returned <code>ingestionJobId</code> with <code>GetIngestionJob</code> to observe the job until it reports <code>COMPLETE</code>. The job model also exposes failure states and document statistics, which makes it suitable for automated alerting and audit trails; see <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_IngestionJob.html\">IngestionJob</a>. Direct document ingestion is useful for specific Amazon S3 or custom data source cases, but it is a distinct path from data source sync; using it carelessly with an S3 sync workflow can separate the indexed corpus from the bucket contents, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-direct-ingestion.html\">Directly ingest documents into a knowledge base</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Amazon Bedrock Knowledge Bases data source sync is incremental, but it must be initiated after source content changes. A sync processes documents added, modified, or deleted since the previous sync instead of reprocessing unchanged documents.<br/>• <strong>B</strong>: ✅ The StartIngestionJob operation returns an ingestion job identifier that can be checked by using GetIngestionJob. Waiting for a completed job lets the system detect failures and prevents downstream validation from assuming that re-indexing has finished.<br/>• <strong>C</strong>: ❌ Direct ingestion is a separate mechanism from syncing an S3 data source, and directly indexed changes are not reflected back into the S3 bucket. Mixing the two approaches for the same S3-backed knowledge base can create drift between the vector store and the S3 source of truth.<br/>• <strong>D</strong>: ❌ Metadata-only optimization applies only in limited cases and does not apply to CSV files. When CSV metadata files are updated, the associated CSV files are re-ingested.<br/>• <strong>E</strong>: ❌ Rebuilding the vector store is unnecessary operational overhead for routine data maintenance. Bedrock Knowledge Bases sync can remove deleted documents and re-index changed documents through its incremental data source processing.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, B"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A renewable energy grid operator's GenAI enablement team uses Amazon Bedrock Prompt management for an incident-summary assistant. After several manual prompt edits, the team sees semantic drift and inconsistent output style across edge-case tickets. The team has 75 curated evaluation samples with expected behavior and wants an evaluation-driven way to refine one prompt template across three candidate models before promoting a production snapshot. The team must avoid custom orchestration and must not rely only on heuristic rewrites.</p><p>Which approach best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tinh chỉnh một prompt template qua nhiều model dựa trên 75 evaluation samples, tránh drift thủ công.</li><li>Requirement quan trọng: <strong>evaluation-driven</strong>, không custom orchestration, không chỉ rewrite heuristic.</li><li>Ưu tiên: managed, dựa trên dữ liệu đánh giá.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Advanced Prompt Optimization</strong> nhận JSONL với template, evaluationSamples và nhiều target model, tối ưu theo evaluation method, rồi lưu kết quả thành version trong <strong>Prompt Management</strong> để lên production.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — model evaluation job so sánh model/score, không tối ưu prompt; nhét 3 template vào dataset là sai mục đích.</li><li><strong>B</strong>: ❌ Sai — Compare variants chỉ so sánh thủ công, không dựa trên tập đánh giá; draft không phải snapshot production.</li><li><strong>C</strong>: ✅ Đúng — dùng 75 samples, 3 model, đánh giá tự động, rồi tạo prompt version.</li><li><strong>D</strong>: ❌ Sai — simple optimization là rewrite heuristic đơn lẻ, không dùng evaluation samples.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Advanced Prompt Optimization</li><li>evaluationSamples</li><li>Prompt Management version</li><li>Multi-model target</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp tối ưu prompt dựa trên dữ liệu đánh giá cho nhiều model → <strong>Advanced Prompt Optimization</strong>, rồi chốt bằng <strong>Prompt version</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 10,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>Create an automatic model evaluation job with a custom S3 JSONL prompt dataset. Put the three prompt templates in the dataset, compare the model report scores, and deploy the highest-scoring template.</p>",
              "correct": false,
              "feedback": "<p>Automatic model evaluation jobs require prompt datasets and can report metrics for retrieved model responses. They are designed to evaluate model outputs against prompts, not to optimize prompt templates and return refined prompt candidates across multiple target models.</p>"
            },
            {
              "choice": "<p>Use Prompt builder Compare variants mode with three variants and temporary test variables. Run each variant in the console, save the preferred variant as the draft, and use the draft in production.</p>",
              "correct": false,
              "feedback": "<p>Compare variants is useful for interactive testing, and it can compare up to three variants in the console. However, test variable values are temporary, and saving a variant as the draft is not the same as running an evaluation-driven optimization workflow or creating a production version.</p>"
            },
            {
              "choice": "<p>Create an Advanced Prompt Optimization JSONL input file for the template with 75 evaluationSamples and three target models. Select one evaluation method, review the optimized result, and create a Prompt management version for production.</p>",
              "correct": true,
              "feedback": "<p>This approach matches the requirement for evaluation-driven refinement across multiple candidate models. Advanced Prompt Optimization supports up to five models per job and allows 1 to 100 evaluation samples per template, so the stated sample count and model count are within documented limits.</p>"
            },
            {
              "choice": "<p>Run simple prompt optimization for the draft prompt separately for each candidate model. Compare the rewritten prompts in Prompt builder, save the best variant as the draft, and use the draft in production.</p>",
              "correct": false,
              "feedback": "<p>Simple prompt optimization is a fast heuristic rewrite for a single short prompt and one model, and it does not use evaluation data. It does not satisfy the need to use curated evaluation samples or systematically optimize across three candidate models.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 10,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Advanced Prompt Optimization</b> is the best fit when prompt troubleshooting has moved beyond manual wording changes and the team has evaluation samples that represent expected behavior. Its JSONL input is organized around prompt templates, each template can include <code>evaluationSamples</code>, and a job can target up to five models, which fits a three-model comparison without custom orchestration. The documentation describes this as evaluation-driven optimization, unlike simple prompt optimization, which is a heuristic rewrite for one model and does not use evaluation data. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompt-optimization-jobs.html\">Create an advanced prompt optimization job</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompt-optimization-quotas.html\">Advanced Prompt Optimization quotas</a>.<br/><br/><b>Prompt management</b> still matters after the optimization step because production use should rely on a controlled prompt artifact. In Amazon Bedrock, Prompt management lets teams create, save, reuse, and version prompts, while <code>Create version</code> creates a snapshot intended for production use. Console comparison features are valuable for inspecting variants and prompt versions, but they are not a substitute for an evaluation-driven optimization job when the requirement is systematic refinement against curated samples. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Prompt management in Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-test.html\">Test a prompt in Prompt management</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Automatic model evaluation jobs require prompt datasets and can report metrics for retrieved model responses. They are designed to evaluate model outputs against prompts, not to optimize prompt templates and return refined prompt candidates across multiple target models.<br/>• <strong>B</strong>: ❌ Compare variants is useful for interactive testing, and it can compare up to three variants in the console. However, test variable values are temporary, and saving a variant as the draft is not the same as running an evaluation-driven optimization workflow or creating a production version.<br/>• <strong>C</strong>: ✅ This approach matches the requirement for evaluation-driven refinement across multiple candidate models. Advanced Prompt Optimization supports up to five models per job and allows 1 to 100 evaluation samples per template, so the stated sample count and model count are within documented limits.<br/>• <strong>D</strong>: ❌ Simple prompt optimization is a fast heuristic rewrite for a single short prompt and one model, and it does not use evaluation data. It does not satisfy the need to use curated evaluation samples or systematically optimize across three candidate models.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical manufacturing platform team operates a generative AI service that creates regulated document summaries for several internal applications. The service currently invokes one Amazon Bedrock text model, but the team must support multiple Bedrock models and one approved external model provider. The team needs to change routing by document type, tenant, cost tier, or temporary provider outage without redeploying client applications or changing application code. The public request and response contract must remain stable across providers.</p><p>Which combination of steps will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đổi routing giữa nhiều Bedrock model và một external provider theo document type, tenant, cost tier, outage.</li><li>Requirement quan trọng: <strong>không redeploy client</strong>, không đổi application code, contract request/response ổn định.</li><li>Ưu tiên: flexibility, abstraction.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một <strong>Lambda provider adapter</strong> sau API Gateway chuẩn hóa request/response giữa các provider; <strong>AWS AppConfig</strong> chứa routing rules, endpoint, failover flag được validate và đổi lúc runtime không cần deploy.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — cấu hình động, validate, rollout an toàn.</li><li><strong>B</strong>: ❌ Sai — đổi environment variable cần publish version/deploy mới, không đạt dynamic.</li><li><strong>C</strong>: ❌ Sai — bắt client chọn stage làm lộ chi tiết backend và phải đổi client.</li><li><strong>D</strong>: ❌ Sai — Bedrock prompt routing chỉ route giữa model trong cùng family của Bedrock, không bao gồm external provider và không do client chọn provider.</li><li><strong>E</strong>: ✅ Đúng — adapter giữ contract ổn định.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS AppConfig</li><li>Provider adapter (abstraction layer)</li><li>Stable contract</li><li>Runtime configuration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp đổi routing/model không redeploy → <strong>AppConfig</strong>; gặp nhiều provider contract thống nhất → <strong>adapter Lambda</strong> sau API Gateway.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 11,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>Store provider endpoints, model identifiers, routing rules, and failover flags in AWS AppConfig, and have the Lambda adapter load validated configuration at runtime.</p>",
              "correct": true,
              "feedback": "<p>AWS AppConfig is designed for controlled runtime configuration changes, including validation and deployment strategies. Keeping routing and provider selection outside the code allows operators to change model choices without redeploying Lambda or client applications.</p>"
            },
            {
              "choice": "<p>Store provider choices in Lambda environment variables, and publish a new Lambda version whenever the selected model or endpoint changes.</p>",
              "correct": false,
              "feedback": "<p>Lambda environment variables are configuration, but changing them and publishing versions is still an operational deployment path for provider selection. This approach is less flexible for frequent routing, failover, or tenant-specific changes than runtime configuration managed through AppConfig.</p>"
            },
            {
              "choice": "<p>Configure separate API Gateway stages for each provider, and require client applications to select the stage that matches the desired model backend.</p>",
              "correct": false,
              "feedback": "<p>API Gateway stages can separate environments or configurations, but pushing provider selection to clients breaks the requirement for a stable provider-neutral contract. It also makes outage failover and tenant-specific routing dependent on client behavior rather than centralized policy.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock prompt routing for all requests, and pass the selected provider name from each client as the model identifier.</p>",
              "correct": false,
              "feedback": "<p>Bedrock prompt routing can help choose among supported Bedrock model options, but it does not provide a general abstraction for an external HTTPS model provider. Requiring clients to pass provider-specific identifiers also exposes backend selection details to applications.</p>"
            },
            {
              "choice": "<p>Front the inference service with Amazon API Gateway and route requests to an AWS Lambda provider adapter that normalizes provider-specific requests and responses.</p>",
              "correct": true,
              "feedback": "<p>API Gateway provides a stable public API contract while Lambda can encapsulate provider-specific invocation details behind that contract. This lets clients keep the same request and response schema even when the backend model or provider changes.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 11,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A robust dynamic model selection pattern separates the <b>public application contract</b> from the <b>provider invocation contract</b>. Amazon API Gateway can expose a stable HTTPS API, while AWS Lambda acts as an adapter that translates a common request into the provider-specific format required by Amazon Bedrock Runtime or an approved external provider, then normalizes the response before returning it to clients. This pattern keeps provider SDK choices, authentication, model IDs, and response-shape differences out of client applications.<br/><br/>AWS AppConfig is the right place for runtime routing configuration such as tenant rules, document-type mappings, cost tiers, failover flags, and model identifiers. AppConfig supports validators and controlled deployments, so teams can reduce the risk of pushing a bad routing rule while still avoiding application redeployments. Lambda can retrieve this configuration at runtime, typically with caching or the AppConfig agent/extension pattern, so switching from one model to another becomes an operational configuration change rather than a code change.<br/><br/>Stage-based or client-driven provider selection looks flexible at first, but it moves responsibility to every caller and makes centralized failover difficult. Lambda environment variables are useful for static settings, but using new function versions as the primary routing mechanism is too coarse for frequent dynamic model selection. Bedrock-native routing features can be useful within supported Bedrock scenarios, but they do not replace an application-level abstraction when the design must also support an external provider and preserve a provider-neutral API.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html\">Amazon API Gateway Developer Guide</a>, <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\">AWS Lambda Developer Guide</a>, <a href=\"https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html\">What is AWS AppConfig?</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html\">Run inference with Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ AWS AppConfig is designed for controlled runtime configuration changes, including validation and deployment strategies. Keeping routing and provider selection outside the code allows operators to change model choices without redeploying Lambda or client applications.<br/>• <strong>B</strong>: ❌ Lambda environment variables are configuration, but changing them and publishing versions is still an operational deployment path for provider selection. This approach is less flexible for frequent routing, failover, or tenant-specific changes than runtime configuration managed through AppConfig.<br/>• <strong>C</strong>: ❌ API Gateway stages can separate environments or configurations, but pushing provider selection to clients breaks the requirement for a stable provider-neutral contract. It also makes outage failover and tenant-specific routing dependent on client behavior rather than centralized policy.<br/>• <strong>D</strong>: ❌ Bedrock prompt routing can help choose among supported Bedrock model options, but it does not provide a general abstraction for an external HTTPS model provider. Requiring clients to pass provider-specific identifiers also exposes backend selection details to applications.<br/>• <strong>E</strong>: ✅ API Gateway provides a stable public API contract while Lambda can encapsulate provider-specific invocation details behind that contract. This lets clients keep the same request and response schema even when the backend model or provider changes.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, E"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime logistics provider's platform engineering team operates a centralized GenAI gateway that standardizes access to Amazon Bedrock prompts, guardrail checks, audit logging, and client throttling. Product teams submit prompt packages and gateway configuration through Git. The release process must run security, prompt regression, and guardrail integration tests before deployment, publish test results for each run, and automatically recover from a failed non-source deployment stage by returning to the last known good gateway configuration. The team wants to use native AWS CodePipeline and AWS CodeBuild capabilities with minimal custom orchestration and no unsupported rollback behavior.</p><p>Which implementation will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: CI/CD cho GenAI gateway: chạy test, publish test report mỗi lần, tự rollback khi stage không phải source thất bại.</li><li>Requirement quan trọng: dùng native CodePipeline và CodeBuild, không rollback không được hỗ trợ.</li><li>Ưu tiên: <strong>minimal custom orchestration</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CodeBuild report groups</strong> (giới hạn 1-5 trong buildspec) xuất test report; CodePipeline stage <strong>automatic rollback</strong> chỉ khả dụng khi đã có một execution thành công làm baseline và không áp dụng cho Source stage.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — report groups trong giới hạn, rollback sau baseline thành công.</li><li><strong>B</strong>: ❌ Sai — vượt giới hạn report groups, và rollback không thể sau failed execution đầu tiên vì chưa có known good.</li><li><strong>C</strong>: ❌ Sai — secondary artifacts không phải test report; cấu hình retry cùng onFailure rollback không phải cách đáp ứng yêu cầu.</li><li><strong>D</strong>: ❌ Sai — Source stage không hỗ trợ automatic rollback; upload JUnit lên S3 không tạo CodeBuild report.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CodeBuild report groups</li><li>Automatic stage rollback</li><li>Baseline successful execution</li><li>Không rollback Source stage</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp rollback tự động trong CodePipeline → cần <strong>execution thành công</strong> trước đó và không áp dụng cho Source stage.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 12,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>Create a CodePipeline with a source stage, a CodeBuild test action whose buildspec defines one to five report groups, and a deploy stage configured for automatic rollback after a successful baseline execution.</p>",
              "correct": true,
              "feedback": "<p>This uses CodeBuild test reporting in the supported buildspec-driven model, which creates reports for each build run when one to five report groups are configured. It also uses CodePipeline automatic rollback on a non-source stage after there has been a prior successful execution in that stage, which is required for rollback to a known good stage execution.</p>"
            },
            {
              "choice": "<p>Create a CodePipeline with a source stage, a CodeBuild test action whose buildspec defines six report groups, and a deploy stage configured for automatic rollback after the first failed execution.</p>",
              "correct": false,
              "feedback": "<p>CodeBuild test reporting supports one to five report groups per build project, so defining six report groups is outside the documented limit. Automatic rollback also requires a prior successful execution in the stage, so a first failed execution has no successful stage execution to roll back to.</p>"
            },
            {
              "choice": "<p>Create a CodePipeline with a source stage, a CodeBuild test action that emits secondary artifacts, and a deploy stage configured with both automatic retry and an onFailure rollback condition.</p>",
              "correct": false,
              "feedback": "<p>An onFailure condition can use a retry result or a rollback result, but stage failure handling cannot simultaneously use both retry and rollback as the same onFailure result. Secondary artifacts can be useful for packaging test outputs or deployment bundles, but they do not fix the incompatible failure handling configuration.</p>"
            },
            {
              "choice": "<p>Create a CodePipeline with a source stage configured for automatic rollback, a CodeBuild test action that uploads JUnit reports to S3, and a deploy stage that always reuses the current source revision.</p>",
              "correct": false,
              "feedback": "<p>CodePipeline does not support rolling back a source stage, so this design relies on unsupported rollback behavior. Uploading JUnit files to S3 can preserve files, but it does not by itself use CodeBuild report groups as the native test reporting mechanism described in the requirement.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 12,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A secure enterprise GenAI gateway often needs two separate control planes: <b>release validation</b> and <b>runtime control</b>. CodeBuild is a good fit for release validation because the buildspec can run prompt regression tests, security checks, and integration tests, then publish structured test reports as part of each build run. CodeBuild report groups are intentionally bounded, so the buildspec should stay within the documented one to five report group model rather than creating an unbounded reporting fanout.<br/><br/>CodePipeline rollback is a <i>stage-level</i> mechanism, not a whole-pipeline undo button. A rollback creates a new execution that uses the source revisions and variables from a prior successful execution in that stage, and source stages cannot be rolled back. For automatic rollback, the stage must already have had a successful execution after the rollback configuration exists, which is why a successful baseline deployment matters before relying on automatic recovery.<br/><br/>Stage conditions are also constrained by condition type. An onFailure condition can use a retry result or a rollback result, but the same failure-handling result cannot simultaneously perform both actions. This distinction matters in GenAI gateway releases because prompt packages, routing rules, and guardrail integration logic must be promoted and recovered through supported deployment semantics rather than custom assumptions that CodePipeline will not enforce.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/en_us/codepipeline/latest/userguide/stage-rollback.html\">Rollback a stage in CodePipeline</a>, <a href=\"https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-rollback-auto.html?utm_source=openai\">Configure automatic rollback for a stage</a>, <a href=\"https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html?utm_source=openai\">How do stage conditions work?</a>, and <a href=\"https://docs.aws.amazon.com/en_us/codebuild/latest/userguide/report-create.html\">Create test reports in CodeBuild</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This uses CodeBuild test reporting in the supported buildspec-driven model, which creates reports for each build run when one to five report groups are configured. It also uses CodePipeline automatic rollback on a non-source stage after there has been a prior successful execution in that stage, which is required for rollback to a known good stage execution.<br/>• <strong>B</strong>: ❌ CodeBuild test reporting supports one to five report groups per build project, so defining six report groups is outside the documented limit. Automatic rollback also requires a prior successful execution in the stage, so a first failed execution has no successful stage execution to roll back to.<br/>• <strong>C</strong>: ❌ An onFailure condition can use a retry result or a rollback result, but stage failure handling cannot simultaneously use both retry and rollback as the same onFailure result. Secondary artifacts can be useful for packaging test outputs or deployment bundles, but they do not fix the incompatible failure handling configuration.<br/>• <strong>D</strong>: ❌ CodePipeline does not support rolling back a source stage, so this design relies on unsupported rollback behavior. Uploading JUnit files to S3 can preserve files, but it does not by itself use CodeBuild report groups as the native test reporting mechanism described in the requirement.",
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
      "question_text": "<p>A university library consortium is building semantic search for scanned policy documents that have already been converted to cleaned text. A Lambda ingestion pipeline reads SQS message batches, splits text into document sections, and writes embeddings to a vector index. The production index is being created from the prototype with the same HNSW parameters and metadata schema, but the team can choose the vector dimension before first ingestion. The offline tests used the index's standard floating-point vector representation, and the launch window does not allow another relevance test or index rebuild after ingestion starts. The sections are all below 50,000 characters and below 8,192 tokens. The prototype used Amazon Titan Text Embeddings V2 default output dimensions. Offline testing produced these results relative to the prototype: 1,024 dimensions, nDCG@10 of 0.846 and 100% vector footprint; 512 dimensions, nDCG@10 of 0.845 and 50% vector footprint; 256 dimensions, nDCG@10 of 0.842 and 25% vector footprint. Production must meet nDCG@10 of at least 0.840, reduce vector storage footprint by at least 70%, and preserve section-level retrieval granularity and the Bedrock API based ingestion flow.</p><p>Which approach should the team use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chọn dimension/biểu diễn vector cho Titan Text Embeddings V2 sao cho nDCG@10 &gt;= 0.840 và giảm storage ít nhất 70%.</li><li>Requirement quan trọng: <strong>không còn thời gian test relevance</strong> hay rebuild index lại; offline test chỉ dùng floating-point.</li><li>Ưu tiên: đáp ứng ngưỡng bằng cấu hình đã được kiểm chứng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>256-dim float</strong> đo được nDCG 0.842 (&gt;= 0.840) và footprint 25% (giảm 75%), đều đã được test trên đúng biểu diễn float; Titan V2 cho chọn <strong>output dimension</strong> 256/512/1024 ngay khi gọi API.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chuyển binary chưa được test relevance, vi phạm điều kiện không test lại; 512 + binary không có số liệu.</li><li><strong>B</strong>: ✅ Đúng — số liệu đã kiểm chứng, giảm 75%, dùng Bedrock API ingestion.</li><li><strong>C</strong>: ❌ Sai — default 1,024 dimension + binary chưa kiểm chứng nDCG.</li><li><strong>D</strong>: ❌ Sai — half-precision trên 512 chỉ giảm khoảng 25% so với baseline, không đạt 70% và cũng chưa test.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Titan Text Embeddings V2 dimensions (256/512/1024)</li><li>nDCG@10</li><li>Vector footprint</li><li>Chỉ dùng cấu hình đã được test</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp không được test lại relevance → chọn <strong>cấu hình</strong> đã có số liệu đạt ngưỡng, không chọn kỹ thuật nén chưa kiểm chứng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 13,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>Configure Lambda ingestion workers to invoke amazon.titan-embed-text-v2:0 for each validated section and convert 512-dimensional embeddings to binary vectors before writing vectors.</p>",
              "correct": false,
              "feedback": "<p>This preserves section-level ingestion and could appear attractive because binary vectors can reduce storage footprint. However, it introduces an untested vector representation, so the measured nDCG@10 result for 512-dimensional floating-point vectors cannot be assumed to apply.</p>"
            },
            {
              "choice": "<p>Configure Lambda ingestion workers to invoke amazon.titan-embed-text-v2:0 for each validated section and request 256-dimensional floating-point embeddings before writing vectors.</p>",
              "correct": true,
              "feedback": "<p>This uses Amazon Titan Text Embeddings V2 with a supported output size that satisfies the measured relevance threshold and the storage reduction target. The approach also keeps the tested vector representation, section-level retrieval, and the existing Lambda-to-Bedrock ingestion pattern intact.</p>"
            },
            {
              "choice": "<p>Configure Lambda ingestion workers to invoke amazon.titan-embed-text-v2:0 for each validated section and convert default-dimensional embeddings to binary vectors before writing vectors.</p>",
              "correct": false,
              "feedback": "<p>This keeps the same model and document granularity while attempting to reduce storage through representation changes. However, the tested default-dimensional result used the prototype's floating-point representation, and changing to binary vectors would require validation before relying on the measured relevance result.</p>"
            },
            {
              "choice": "<p>Configure Lambda ingestion workers to invoke amazon.titan-embed-text-v2:0 for each validated section and apply half-precision quantization to 512-dimensional embeddings before writing vectors.</p>",
              "correct": false,
              "feedback": "<p>This is a plausible storage optimization because it preserves the section boundary and uses a supported Titan Text Embeddings V2 dimensionality. However, the offline test did not validate half-precision quantized vectors, so it adds relevance and index-compatibility risk during a launch window that does not allow another evaluation cycle.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 13,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Titan Text Embeddings V2</b>, model ID <code>amazon.titan-embed-text-v2:0</code>, converts text into vector representations for retrieval-oriented workloads such as semantic search, semantic similarity, and clustering. The model accepts inputs up to 8,192 tokens or 50,000 characters, outputs 1,024 dimensions by default, and supports 512 and 256 dimensions, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html\">Amazon Titan Embeddings models</a>.<br/><br/>The engineering tradeoff is that higher-dimensional vectors can provide more representational capacity, but they also increase index size, memory pressure, indexing work, and similarity search cost. In this scenario, the production index can choose its vector dimension before ingestion, and the measured 256-dimensional floating-point result meets the relevance threshold while reducing the vector footprint to 25% of the prototype.<br/><br/>Binary conversion and half-precision quantization are storage-oriented techniques, but they change the vector representation that was evaluated. When a launch constraint prevents another relevance test or an index rebuild, the safest production choice is the smallest supported Titan V2 dimension that has already been validated against the required retrieval metric. The 512-dimensional and default-dimensional alternatives may look cost efficient after compression, but their measured nDCG@10 values cannot be carried over to a different vector representation without retesting.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This preserves section-level ingestion and could appear attractive because binary vectors can reduce storage footprint. However, it introduces an untested vector representation, so the measured nDCG@10 result for 512-dimensional floating-point vectors cannot be assumed to apply.<br/>• <strong>B</strong>: ✅ This uses Amazon Titan Text Embeddings V2 with a supported output size that satisfies the measured relevance threshold and the storage reduction target. The approach also keeps the tested vector representation, section-level retrieval, and the existing Lambda-to-Bedrock ingestion pattern intact.<br/>• <strong>C</strong>: ❌ This keeps the same model and document granularity while attempting to reduce storage through representation changes. However, the tested default-dimensional result used the prototype's floating-point representation, and changing to binary vectors would require validation before relying on the measured relevance result.<br/>• <strong>D</strong>: ❌ This is a plausible storage optimization because it preserves the section boundary and uses a supported Titan Text Embeddings V2 dimensionality. However, the offline test did not validate half-precision quantized vectors, so it adds relevance and index-compatibility risk during a launch window that does not allow another evaluation cycle.",
          "upvote_count": "",
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
      "question_text": "<p>An online learning platform's tutoring engineering team is building autonomous tutor agents with Strands Agents and Amazon Bedrock AgentCore Memory. The tutors must keep the problem-solving context separate for each active browser tab, learn each learner's preferred explanation style for future sessions, and reduce memory write overhead by buffering multiple messages. Some tutoring chats end after only one or two turns, before the configured batch threshold is reached.</p><p>Which implementation will meet these requirements with the LEAST custom code while avoiding loss of state?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: agent Strands + AgentCore Memory: tách context theo từng tab, học preference của learner qua các session, buffer message để giảm write.</li><li>Requirement quan trọng: chat ngắn kết thúc trước khi đạt batch threshold; không mất state; <strong>ít code nhất</strong>.</li><li>Ưu tiên: correctness và least custom code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>User preference strategy</strong> tự trích xuất sở thích dài hạn theo actorId; <strong>sessionId</strong> riêng cho mỗi chat tách context từng tab; <strong>đóng memory session</strong> sẽ flush buffer còn lại nên không mất message.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không có long-term strategy thì không học được explanation style cho các session sau.</li><li><strong>B</strong>: ✅ Đúng — preference strategy, per-chat sessionId, close session để flush.</li><li><strong>C</strong>: ❌ Sai — một sessionId duy nhất cho mỗi learner làm trộn context các tab; dựa batch_size sẽ mất message chat ngắn.</li><li><strong>D</strong>: ❌ Sai — semantic strategy lưu facts, không phải preference; lưu summary kiểu OTHER không đúng cách cung cấp turn gốc.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AgentCore Memory user preference strategy</li><li>actorId / sessionId</li><li>batch_size flush</li><li>Close memory session</li></ul><p><strong>🧠MẸO THI</strong></p><p>Gặp học sở thích người dùng xuyên session → <strong>user preference strategy</strong>; gặp buffer message → nhớ <strong>đóng session</strong> để flush.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 14,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>Configure an AgentCore Memory resource with no long-term memory strategies, store USER and ASSISTANT turns with actorId and per-chat sessionId values, and close the Strands memory session after each chat.</p>",
              "correct": false,
              "feedback": "<p>This preserves short-term events for a session and handles the Strands buffering concern. However, AgentCore Memory does not extract long-term memory records unless memory strategies are configured, so learner preferences would not be generated for future sessions.</p>"
            },
            {
              "choice": "<p>Configure an AgentCore Memory user preference strategy, store USER and ASSISTANT turns with actorId and per-chat sessionId values, and close the Strands memory session after each chat.</p>",
              "correct": true,
              "feedback": "<p>This is correct because the user preference strategy extracts durable preferences across sessions, while events grouped by actorId and sessionId preserve short-term conversational context. Closing the Strands memory session, or using a context manager, flushes buffered messages that have not reached the batch threshold.</p>"
            },
            {
              "choice": "<p>Configure an AgentCore Memory user preference strategy, store USER and ASSISTANT turns with actorId and one persistent sessionId per learner, and rely on batch_size to flush messages automatically.</p>",
              "correct": false,
              "feedback": "<p>The user preference strategy is appropriate for learning explanation style, but one persistent sessionId per learner does not keep active browser-tab context separated as distinct continuous interactions. Relying only on the batch threshold can lose buffered messages when a chat ends before the threshold is reached.</p>"
            },
            {
              "choice": "<p>Configure an AgentCore Memory semantic strategy, store OTHER summaries with actorId and per-chat sessionId values, and close the Strands memory session after each chat.</p>",
              "correct": false,
              "feedback": "<p>Closing the session addresses the buffered-message issue, and per-chat sessionId values can separate active interactions. However, the documented semantic and user preference strategies process USER and ASSISTANT role messages, and semantic memory is oriented toward factual context rather than user preference extraction.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 14,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock AgentCore Memory</b> separates short-term and long-term state. Short-term memory is represented by immutable, timestamped events that are organized with <code>actorId</code> and <code>sessionId</code>, where the session groups a continuous interaction and the actor identifies the learner, agent, or system participant. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory.html\">AgentCore Memory</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-terminology.html?utm_source=openai\">AgentCore Memory terminology</a>.<br/><br/>For durable personalization, storing raw events is not enough. AgentCore Memory generates long-term memory asynchronously after events are stored, but it only extracts long-term records when memory strategies are configured. A <b>user preference memory strategy</b> is the direct fit for explanation style, choices, and preferences, while semantic memory is better suited to factual or contextual information. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-strategies.html\">Memory strategies</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/semantic-memory-strategy.html\">Semantic and user preference memory strategies</a>.<br/><br/>The Strands integration adds an operational wrinkle: buffering improves write efficiency, but when <code>batch_size &gt; 1</code>, messages below the threshold must still be flushed. The documented pattern is to use a <code>with</code> block or call <code>close()</code> when the session is complete, otherwise buffered messages can be lost. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/strands-sdk-memory.html\">Strands Agents SDK memory integration</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This preserves short-term events for a session and handles the Strands buffering concern. However, AgentCore Memory does not extract long-term memory records unless memory strategies are configured, so learner preferences would not be generated for future sessions.<br/>• <strong>B</strong>: ✅ This is correct because the user preference strategy extracts durable preferences across sessions, while events grouped by actorId and sessionId preserve short-term conversational context. Closing the Strands memory session, or using a context manager, flushes buffered messages that have not reached the batch threshold.<br/>• <strong>C</strong>: ❌ The user preference strategy is appropriate for learning explanation style, but one persistent sessionId per learner does not keep active browser-tab context separated as distinct continuous interactions. Relying only on the batch threshold can lose buffered messages when a chat ends before the threshold is reached.<br/>• <strong>D</strong>: ❌ Closing the session addresses the buffered-message issue, and per-chat sessionId values can separate active interactions. However, the documented semantic and user preference strategies process USER and ASSISTANT role messages, and semantic memory is oriented toward factual context rather than user preference extraction.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A municipal permitting office is replacing several spreadsheet-driven review steps with a generative AI portal for residents and permit reviewers. The office wants front-end teams to embed an accessible chat experience quickly, stream multi-turn responses from Amazon Bedrock foundation models, persist each user's conversation history without building custom storage, and scope access to each signed-in user. The office also wants non-developer process analysts to maintain a branching review workflow that can call prompts, a knowledge base, and Lambda functions, and developers must be able to inspect per-node inputs and outputs during testing.</p><p>Which TWO implementation steps meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: portal GenAI có chat UI nhanh, lưu history theo user, phân quyền theo user, và workflow phân nhánh cho analysts non-developer.</li><li>Requirement quan trọng: không build custom storage, developer xem được input/output từng node khi test.</li><li>Ưu tiên: <strong>low-code</strong>, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amplify AI Kit</strong> (Gen 2 conversation routes + UI primitives) cho chat streaming, lưu history trong backend được quản lý với owner-based authorization; <strong>Bedrock Flows</strong> là workflow trực quan có prompt, knowledge base, condition, Lambda nodes, và InvokeFlow trace xem được node input/output.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Flows không phải lớp lưu hội thoại; truyền lại flowOutputEvent là tự quản lý state.</li><li><strong>B</strong>: ✅ Đúng — chat UI có storage và owner auth tích hợp.</li><li><strong>C</strong>: ✅ Đúng — đủ loại node cần thiết và tracing để debug.</li><li><strong>D</strong>: ❌ Sai — gọi InvokeFlow từ browser lộ quyền; local storage không bền và không scoping theo user.</li><li><strong>E</strong>: ❌ Sai — một flow chỉ có một input node, không tách nhiều input node được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amplify AI Kit conversation</li><li>Owner-based authorization</li><li>Bedrock Flows nodes</li><li>InvokeFlow trace</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chat UI có history theo user → <strong>Amplify AI Kit</strong>; gặp workflow low-code cho analyst → <strong>Bedrock Flows</strong> kèm trace.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 15,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>Build the multi-turn clarification path with prompt and condition nodes in Amazon Bedrock Flows; resume user questions by passing prior flowOutputEvent content.</p>",
              "correct": false,
              "feedback": "<p>Multi-turn behavior in Amazon Bedrock Flows requires an Agent node connected to an Amazon Bedrock agent. Continuation calls must use the flow conversation executionId after an input-required response, not simply replay prior output content.</p>"
            },
            {
              "choice": "<p>Build the resident chat front end with Amplify Gen 2 AI conversation routes and Amplify UI primitives; configure owner-based authorization for each user's conversations.</p>",
              "correct": true,
              "feedback": "<p>This meets the chat interface requirements because Amplify Gen 2 AI conversation routes set up the AppSync and Lambda components for streaming multi-turn Bedrock interactions. The feature persists conversations and messages in DynamoDB, includes prior messages in LLM history, and supports owner-based authorization.</p>"
            },
            {
              "choice": "<p>Build the permitting review workflow in Amazon Bedrock Flows by linking input, prompt, knowledge base, condition, and Lambda nodes; test with InvokeFlow tracing enabled.</p>",
              "correct": true,
              "feedback": "<p>This meets the workflow requirements because Amazon Bedrock Flows supports visual or API-based composition of prompts, Bedrock features such as knowledge bases, and AWS services such as Lambda. Enabling trace during InvokeFlow testing provides visibility into per-node inputs, outputs, and condition results.</p>"
            },
            {
              "choice": "<p>Build the resident chat front end with Amplify UI primitives and call InvokeFlow from the browser; store conversation turns in local storage for each session.</p>",
              "correct": false,
              "feedback": "<p>Amplify UI primitives can help teams follow accessibility best practices, but this approach does not use the documented Amplify AI conversation route capability for streaming multi-turn Bedrock conversations. Local storage does not satisfy the requirement to persist conversation history with per-user access scoping without custom storage.</p>"
            },
            {
              "choice": "<p>Build the review workflow as an Amazon Bedrock Flow with separate flow input nodes for applicant details, parcel data, and uploaded document text.</p>",
              "correct": false,
              "feedback": "<p>Amazon Bedrock Flows require exactly one flow input node, and the flow must begin with that input node. Multiple input nodes for different form sections would fail the documented flow structure requirements.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amplify Gen 2 AI conversation routes</b> are designed for the application-facing part of this scenario. They create the AppSync API components and Lambda functions needed for streaming multi-turn interactions with Amazon Bedrock foundation models, persist conversations and messages in DynamoDB, automatically include prior messages in the model history, and scope access with owner-based authorization. Amplify UI components also provide accessible primitives that follow WCAG and WAI-ARIA best practices, although teams still must compose and test the finished application responsibly. See <a href=\"https://docs.amplify.aws/javascript/ai/conversation/\">Amplify AI conversation</a> and <a href=\"https://ui.docs.amplify.aws/react/getting-started/accessibility\">Amplify UI accessibility</a>.<br/><br/><b>Amazon Bedrock Flows</b> addresses the process-automation side of the requirement. A flow can link prompts, foundation models, Amazon Bedrock features such as Knowledge Bases, and AWS services such as Lambda, and it can be built visually in the console or managed through APIs. During testing, <code>InvokeFlow</code> returns a stream, and setting <code>enableTrace</code> to <code>TRUE</code> returns trace events alongside output events so developers can inspect node inputs, node outputs, and condition results. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html\">Amazon Bedrock Flows</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html\">Amazon Bedrock Flows nodes</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows-test.html\">Test a flow in Amazon Bedrock</a>.<br/><br/>The distracting designs are close, but each misses a documented constraint. Calling a flow directly from a browser and saving turns locally does not provide the managed multi-turn persistence and owner-scoped authorization described for Amplify AI conversations. A Bedrock Flow cannot have separate input nodes for separate form sections because every flow has only one flow input node. For a flow to ask for more user input and continue later, the documented pattern uses an Agent node and continuation with the conversation's <code>executionId</code>, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows-multi-turn-invocation.html\">Multi-turn flow invocation</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Multi-turn behavior in Amazon Bedrock Flows requires an Agent node connected to an Amazon Bedrock agent. Continuation calls must use the flow conversation executionId after an input-required response, not simply replay prior output content.<br/>• <strong>B</strong>: ✅ This meets the chat interface requirements because Amplify Gen 2 AI conversation routes set up the AppSync and Lambda components for streaming multi-turn Bedrock interactions. The feature persists conversations and messages in DynamoDB, includes prior messages in LLM history, and supports owner-based authorization.<br/>• <strong>C</strong>: ✅ This meets the workflow requirements because Amazon Bedrock Flows supports visual or API-based composition of prompts, Bedrock features such as knowledge bases, and AWS services such as Lambda. Enabling trace during InvokeFlow testing provides visibility into per-node inputs, outputs, and condition results.<br/>• <strong>D</strong>: ❌ Amplify UI primitives can help teams follow accessibility best practices, but this approach does not use the documented Amplify AI conversation route capability for streaming multi-turn Bedrock conversations. Local storage does not satisfy the requirement to persist conversation history with per-user access scoping without custom storage.<br/>• <strong>E</strong>: ❌ Amazon Bedrock Flows require exactly one flow input node, and the flow must begin with that input node. Multiple input nodes for different form sections would fail the documented flow structure requirements.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, C"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime insurance underwriter's claims AI platform team uses Amazon Bedrock Knowledge Bases for a RAG assistant. The team is tuning chunking and retrieval settings before connecting the retrieved content to a foundation model. The team needs a repeatable prerelease test that evaluates only the retrieval component against SME-written ground-truth answers, and the team also needs request-level troubleshooting for retrieval path latency without adding application-side timing code.</p><p>Which approach best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li><strong>Retrieval-only evaluation</strong>: kiểm thử riêng chất lượng retrieval trước khi đưa context vào Foundation Model, dựa trên ground truth do SME viết.</li><li>Request-level troubleshooting: theo dõi latency của từng request trên retrieval path mà không phải thêm timing code vào application.</li><li>Ưu tiên: đánh giá đúng retrieval + tracing chi tiết theo từng request. Đây là hai yêu cầu riêng biệt, mỗi yêu cầu cần đúng công cụ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>B dùng dataset .jsonl gồm prompt và <strong>referenceResponses</strong>, kết hợp Builtin.ContextRelevance và <strong>Builtin.ContextCoverage</strong> để đánh giá retrieval-only RAG. Theo AWS Documentation, Builtin.ContextCoverage cần ground truth nằm trong referenceResponses. <strong>AWS X-Ray</strong> nhận distributed traces cho thao tác Retrieve, giúp phân tích latency từng đoạn xử lý trong request mà không cần tự viết application-side timing code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Builtin.Correctness và Builtin.Completeness đánh giá câu trả lời được generate, không tập trung riêng vào retrieval.</li><li><strong>B</strong>: ✅ Đúng — dataset có referenceResponses đúng cho ContextCoverage, metric đúng cho retrieval-only, và X-Ray cho latency theo request.</li><li><strong>C</strong>: ❌ Sai — metric đúng nhưng dataset chỉ có referenceContexts, mà built-in metrics không dùng referenceContexts nên thiếu ground truth cho ContextCoverage. CloudWatch metrics chỉ là số liệu tổng hợp, không cho tracing chi tiết từng request như X-Ray.</li><li><strong>D</strong>: ❌ Sai — Retrieve-and-generate đánh giá cả generation; Faithfulness và CitationCoverage đo đầu ra generation, không phù hợp khi chỉ muốn kiểm thử retrieval.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Retrieve-only → đánh giá riêng retrieval.</li><li>ContextRelevance → độ liên quan của retrieved context.</li><li>ContextCoverage → mức bao phủ thông tin cần thiết, ground truth ở referenceResponses.</li><li>AWS X-Ray → request-level distributed tracing.</li><li>CloudWatch Metrics → metrics tổng hợp, không thay thế tracing.</li></ul><p><strong>🧠 MẸO THI</strong></p><ul><li>Gặp \"retrieval component only\" → nghĩ đến <strong>Retrieve-only RAG evaluation</strong>.</li><li>ContextCoverage → ground truth trong <strong>referenceResponses</strong>.</li><li>Gặp \"request-level latency, no application timing code\" → nghĩ đến <strong>AWS X-Ray</strong>.</li><li>Gặp \"Faithfulness / CitationCoverage\" → đánh giá đầu ra generation, không phải retrieval-only.</li></ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 16,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>Create an S3 .jsonl prompt dataset with single-turn records that include knowledgeBaseIdentifier and retrievedResults. Run a retrieve-only RAG evaluation with Builtin.Correctness and Builtin.Completeness. Use model-runtime CloudWatch metrics for latency analysis.</p>",
              "correct": false,
              "feedback": "<p>Precomputed retrieval results can be evaluated, but Correctness and Completeness are retrieve-and-generate metrics, not retrieve-only metrics. Model-runtime metrics apply to foundation model invocation behavior and should not be confused with Knowledge Base retrieval troubleshooting.</p>"
            },
            {
              "choice": "<p>Create an S3 .jsonl prompt dataset with single-turn records that include prompt and referenceResponses. Run a retrieve-only RAG evaluation with Builtin.ContextRelevance and Builtin.ContextCoverage. Use AWS X-Ray traces for Retrieve latency analysis.</p>",
              "correct": true,
              "feedback": "<p>Retrieve-only RAG evaluations are designed to evaluate retrieved data without evaluating generated answers, and the built-in retrieval metrics are ContextRelevance and ContextCoverage. ContextCoverage requires ground truth, and AWS X-Ray traces can be used to analyze internal steps and latency for the Retrieve operation.</p>"
            },
            {
              "choice": "<p>Create an S3 .jsonl prompt dataset with single-turn records that include prompt and referenceContexts. Run a retrieve-only RAG evaluation with Builtin.ContextRelevance and Builtin.ContextCoverage. Use KnowledgeBases CloudWatch metrics for latency analysis.</p>",
              "correct": false,
              "feedback": "<p>For a retrieve-only evaluation where Amazon Bedrock invokes the Knowledge Base, ContextCoverage uses referenceResponses as the ground truth, not referenceContexts. ReferenceContexts is used only for custom metrics in precomputed retrieval datasets, and the KnowledgeBases CloudWatch namespace is not the documented way to analyze request latency.</p>"
            },
            {
              "choice": "<p>Create an S3 .jsonl prompt dataset with up to five-turn records that include prompt and referenceResponses. Run a retrieve-and-generate RAG evaluation with Builtin.Faithfulness and Builtin.CitationCoverage. Use KnowledgeBases CloudWatch metrics for latency analysis.</p>",
              "correct": false,
              "feedback": "<p>Retrieve-and-generate evaluations assess both retrieval and generated responses, so they do not isolate the retrieval component. Managed Knowledge Bases publish operational CloudWatch metrics such as invocations and errors, but the documented metrics do not include a latency metric for this purpose.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Amazon Bedrock separates RAG evaluation into <b>retrieve-only</b> and <b>retrieve-and-generate</b> job types. When the goal is to test whether the retrieval layer is returning useful context before answer generation is added, retrieve-only is the better fit because it evaluates the retrieved data itself rather than the generated answer. The documented built-in metrics for retrieve-only jobs are <code>Builtin.ContextRelevance</code>, which checks whether retrieved text is relevant to the question, and <code>Builtin.ContextCoverage</code>, which checks how much the retrieved text covers the ground truth. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-kb.html\">Evaluate RAG applications using Amazon Bedrock Knowledge Bases</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-eval-retrieve.html\">Retrieve-only RAG evaluation jobs</a>.<br/><br/>The prompt dataset requirements matter because using the wrong ground-truth field changes what Bedrock can evaluate. For retrieve-only jobs where Bedrock invokes the Knowledge Base, the dataset is stored in Amazon S3 as JSON Lines with a <code>.jsonl</code> extension, uses single-turn prompts, and includes <code>prompt</code> and <code>referenceResponses</code>; <code>referenceResponses</code> represents the ground-truth end-to-end RAG response used by ContextCoverage. For latency investigation, CloudWatch Knowledge Base metrics are useful for operational health, such as errors and throttles, but the documented request-level tracing mechanism for runtime retrieval internals is <b>AWS X-Ray</b>, and traces are emitted for the <code>Retrieve</code> operation. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-prompt.html\">Prompt datasets for Knowledge Base evaluations</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-prompt-retrieve.html\">Retrieve-only prompt dataset requirements</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_KnowledgeBaseRetrievalResult.html\">KnowledgeBaseRetrievalResult API reference</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Precomputed retrieval results can be evaluated, but Correctness and Completeness are retrieve-and-generate metrics, not retrieve-only metrics. Model-runtime metrics apply to foundation model invocation behavior and should not be confused with Knowledge Base retrieval troubleshooting.<br/>• <strong>B</strong>: ✅ Retrieve-only RAG evaluations are designed to evaluate retrieved data without evaluating generated answers, and the built-in retrieval metrics are ContextRelevance and ContextCoverage. ContextCoverage requires ground truth, and AWS X-Ray traces can be used to analyze internal steps and latency for the Retrieve operation.<br/>• <strong>C</strong>: ❌ For a retrieve-only evaluation where Amazon Bedrock invokes the Knowledge Base, ContextCoverage uses referenceResponses as the ground truth, not referenceContexts. ReferenceContexts is used only for custom metrics in precomputed retrieval datasets, and the KnowledgeBases CloudWatch namespace is not the documented way to analyze request latency.<br/>• <strong>D</strong>: ❌ Retrieve-and-generate evaluations assess both retrieval and generated responses, so they do not isolate the retrieval component. Managed Knowledge Bases publish operational CloudWatch metrics such as invocations and errors, but the documented metrics do not include a latency metric for this purpose.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An industrial robotics manufacturer's GenAI platform team is building a RAG retrieval layer for maintenance manuals, safety notices, parts catalogs, and warranty procedures. The team will use managed Amazon OpenSearch Service as the vector database. Each corpus has different terminology, receives large nightly document revisions, and may need different embedding settings. The application uses pure semantic search with a moderate latency target, must return the top 20 matches for each query across the whole corpus, and must avoid a large reindexing effort after launch.</p><p>Which indexing and query design will best meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thiết kế index OpenSearch Service cho RAG nhiều corpus khác thuật ngữ, nightly revisions lớn, embedding settings có thể khác nhau.</li><li>Requirement quan trọng: top 20 trên toàn corpus, <strong>tránh reindex lớn</strong> sau launch.</li><li>Ưu tiên: scalability, vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Index riêng mỗi domain</strong> cho phép dimension/engine/refresh khác nhau; <strong>primary shard</strong> cố định lúc tạo nên phải chọn trước (khoảng 30-50 GiB mỗi shard) để khỏi reindex; truy vấn mọi index rồi merge top 20 toàn cục.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — shard sizing trước ingestion, knn_vector có dimension, fan-out và merge toàn cục.</li><li><strong>B</strong>: ❌ Sai — một index chung khó hỗ trợ embedding settings khác nhau; shard mặc định không tối ưu; filter làm thay đổi kết quả top-k.</li><li><strong>C</strong>: ❌ Sai — numeric array không phải knn_vector; quyết định shard sau ingestion buộc reindex; search thường không thực hiện vector kNN.</li><li><strong>D</strong>: ❌ Sai — nhiều shard nhỏ làm tăng overhead và latency fan-out; route theo domain không trả top 20 toàn corpus.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>knn_vector dimension</li><li>Shard size 10-50 GiB (khuyến nghị 30-50 cho search)</li><li>Index per domain</li><li>Global top-k merge</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp OpenSearch vector + tránh reindex → <strong>định cỡ primary shard</strong> trước khi ingest.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 17,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>Create one k-NN enabled index per domain, decide primary shard counts before ingestion to keep shards near 30-50 GiB, store embeddings in dimensioned knn_vector fields, fan out to every domain index, and globally merge the top 20 matches.</p>",
              "correct": true,
              "feedback": "<p>This design separates specialized domains so each index can be tuned independently while still searching the whole corpus for each request. It also plans primary shards before ingestion, uses the required OpenSearch k-NN index and field configuration, and uses a global merge so the final answer is the top 20 across domains.</p>"
            },
            {
              "choice": "<p>Create one k-NN enabled index for all domains, accept the managed service default shard layout, store the domain in metadata, use filtered vector queries, and set k to 20 without overriding size in k-NN queries.</p>",
              "correct": false,
              "feedback": "<p>A single shared index limits the team's ability to use different domain-specific tuning and can make shard planning harder for corpora that grow differently. Setting only k is not sufficient to control the final top 20 result set for a distributed k-NN query because the query should also set size for the desired overall hits.</p>"
            },
            {
              "choice": "<p>Create one index per domain after ingestion completes, resize primary shards as each domain grows, store embeddings as numeric arrays, route through aliases, and use standard search requests to return the top 20 vector matches.</p>",
              "correct": false,
              "feedback": "<p>Primary shard count should be planned before data is indexed because it is not easy to change afterward without disruptive work. Storing embeddings as ordinary numeric arrays does not configure the managed OpenSearch k-NN path, which requires a knn_vector field in a k-NN enabled index.</p>"
            },
            {
              "choice": "<p>Create one k-NN enabled index per domain, allocate many small 10-30 GiB shards to maximize fan-out, store embeddings in dimensioned knn_vector fields, route by domain metadata, and set k to 20 without size.</p>",
              "correct": false,
              "feedback": "<p>The multi-index and knn_vector choices are directionally reasonable, but creating many small shards is not the best fit for a workload with large nightly revisions and can increase CPU and memory pressure. The query also does not set size, so it does not ensure the intended number of final results for the overall query.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 17,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For managed Amazon OpenSearch Service vector search, the retrieval architecture has two separate design concerns: <b>how the corpus is partitioned</b> and <b>how each vector index is configured and queried</b>. Domain-specific corpora such as maintenance manuals and warranty procedures can benefit from a multi-index layout because each domain can have its own shard plan, mappings, and embedding-related settings.<br/><br/>The global retrieval requirement is the subtle constraint. A routing layer that selects only one domain would risk missing better matches in another domain, so the retrieval path must fan out to the domain indexes that make up the searchable corpus and then perform a final <b>global merge</b> of candidates. That preserves the operational benefits of specialized indexes without changing the user-visible semantics of returning the best 20 matches across the corpus.<br/><br/>Shard planning matters because primary shard count is not easy to change after data is indexed. Do not treat the service's default shard layout as a production capacity plan, especially for a large vector workload whose domains grow at different rates. AWS guidance is workload dependent: 10-30 GiB shards are commonly recommended when search latency is the key objective, while 30-50 GiB shards are appropriate for write-heavy workloads, and too many small shards can create CPU, memory, and out-of-memory pressure. See <a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp-sharding.html\">Sizing Amazon OpenSearch Service domains and shard strategy</a>.<br/><br/>The vector mapping must also be correct. Managed OpenSearch Service k-NN requires the index setting <code>index.knn</code> to be enabled and vector fields to use the <code>knn_vector</code> data type with a required <code>dimension</code> value. For top-k retrieval, <code>k</code> by itself is not enough to control the final number of overall hits in a distributed k-NN query, so the query should also set <code>size</code> to the desired result count before the application globally merges candidates across domain indexes. See <a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html\">k-nearest neighbor search in Amazon OpenSearch Service</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This design separates specialized domains so each index can be tuned independently while still searching the whole corpus for each request. It also plans primary shards before ingestion, uses the required OpenSearch k-NN index and field configuration, and uses a global merge so the final answer is the top 20 across domains.<br/>• <strong>B</strong>: ❌ A single shared index limits the team's ability to use different domain-specific tuning and can make shard planning harder for corpora that grow differently. Setting only k is not sufficient to control the final top 20 result set for a distributed k-NN query because the query should also set size for the desired overall hits.<br/>• <strong>C</strong>: ❌ Primary shard count should be planned before data is indexed because it is not easy to change afterward without disruptive work. Storing embeddings as ordinary numeric arrays does not configure the managed OpenSearch k-NN path, which requires a knn_vector field in a k-NN enabled index.<br/>• <strong>D</strong>: ❌ The multi-index and knn_vector choices are directionally reasonable, but creating many small shards is not the best fit for a workload with large nightly revisions and can increase CPU and memory pressure. The query also does not set size, so it does not ensure the intended number of final results for the overall query.",
          "upvote_count": "",
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
      "question_text": "<p>A global architectural design firm's knowledge management team is launching a generative AI assistant for employees. The assistant must answer questions from SharePoint, Amazon S3 project archives, and Jira, and must take actions in approved business systems. The firm uses an enterprise identity provider that is already connected to AWS IAM Identity Center. The security team requires per-user authorization to be enforced from the source systems where possible, centralized user and group assignment, and minimal custom code for access-control decisions.</p><p>Which implementation will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: trợ lý doanh nghiệp trả lời từ SharePoint, S3, Jira và thực hiện action trong hệ thống nghiệp vụ.</li><li>Requirement quan trọng: <strong>authorization theo user</strong> thực thi từ source system, gán user/group tập trung bằng IAM Identity Center, ít code access-control nhất.</li><li>Ưu tiên: security, minimal custom code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Q Business</strong> tích hợp <strong>IAM Identity Center</strong>, có data connectors (SharePoint, S3, Jira) đồng bộ ACL từ nguồn, và plugins để thực hiện action, nên không cần tự code kiểm soát truy cập.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự build, không có connector SharePoint/Jira và không thực thi ACL từ nguồn.</li><li><strong>B</strong>: ✅ Đúng — Q Business + Identity Center + connectors + plugins.</li><li><strong>C</strong>: ❌ Sai — tự lưu ACL làm metadata và filter từng request là custom code, dễ lệch ACL gốc.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Kendra hỗ trợ ACL nhưng phải tự ghép agent, Lambda actions và identity federation; nhiều thành phần hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Q Business</li><li>IAM Identity Center</li><li>Data connectors / ACL sync</li><li>Plugins (actions)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp assistant doanh nghiệp theo quyền từng user từ nhiều nguồn + Identity Center → nghĩ ngay đến <strong>Amazon Q Business</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>Deploy an API Gateway front end, authorize requests with IAM roles, invoke Amazon Bedrock directly from Lambda, and restrict source access with bucket policies.</p>",
              "correct": false,
              "feedback": "<p>This protects API access to the model, but it does not solve per-user authorization across SharePoint, Jira, and other enterprise systems. Bucket policies also do not represent document-level permissions from SaaS sources, so the design would need significant custom enforcement.</p>"
            },
            {
              "choice": "<p>Deploy an Amazon Q Business application, connect it to IAM Identity Center, configure supported data connectors and plugins, and assign access by users and groups.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Amazon Q Business is designed for enterprise assistants that use IAM Identity Center for workforce identity and supported connectors for business data sources. Its data source connectors can use access control information so responses are limited by what the signed-in user is authorized to access.</p>"
            },
            {
              "choice": "<p>Deploy an Amazon Bedrock agent, federate users through Amazon Cognito, store document ACLs as vector metadata, and apply retrieval filters in each request.</p>",
              "correct": false,
              "feedback": "<p>This can be built, but it requires custom ACL synchronization, custom request-time filtering logic, and careful handling of group changes across source systems. It does not provide the same managed enterprise authorization model and connector behavior required for minimal custom code.</p>"
            },
            {
              "choice": "<p>Deploy an Amazon Kendra index, federate users through a SAML identity provider, connect the index to a Bedrock agent, and implement actions through Lambda.</p>",
              "correct": false,
              "feedback": "<p>Amazon Kendra can support enterprise search patterns and user context filtering, but this design still requires more custom integration to create a full assistant with business actions. It is less aligned with the requirement for centralized assignment and minimal custom access-control decisions.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 18,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Q Business</b> is the best fit when the requirement is a managed workforce assistant that combines enterprise identity, data connectors, and business-system actions. It integrates with <b>AWS IAM Identity Center</b> so administrators can assign application access to users and groups from the organization's workforce identity source, and its connectors are intended to preserve authorization context from supported repositories where configured.<br/><br/>The key design principle is to avoid moving authorization logic into prompts, application code, or ad hoc metadata filters unless the application truly needs that level of customization. For enterprise assistants, access control must be enforced before retrieved content is used as model context, because once sensitive content is included in a prompt, the model can generate from it. Amazon Q Business addresses that pattern as a managed service, while custom Bedrock, Lambda, and vector-store designs require the developer to keep source-system ACLs, group membership, retrieval filtering, and tool permissions synchronized.<br/><br/>Amazon Bedrock agents, Knowledge Bases, API Gateway, Lambda, IAM, and Amazon Cognito are valid building blocks for custom applications, but they place more responsibility on the development team to implement least privilege and per-user retrieval authorization correctly. Amazon Kendra is a strong enterprise search service, but the scenario asks for a generative assistant with connectors, plugins, centralized workforce identity assignment, and minimal custom access-control code, which is the service boundary Amazon Q Business is designed to cover.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/what-is.html\">What is Amazon Q Business?</a>, <a href=\"https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/idc.html\">Using IAM Identity Center with Amazon Q Business</a>, and <a href=\"https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/connectors.html\">Amazon Q Business connectors</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This protects API access to the model, but it does not solve per-user authorization across SharePoint, Jira, and other enterprise systems. Bucket policies also do not represent document-level permissions from SaaS sources, so the design would need significant custom enforcement.<br/>• <strong>B</strong>: ✅ This is correct because Amazon Q Business is designed for enterprise assistants that use IAM Identity Center for workforce identity and supported connectors for business data sources. Its data source connectors can use access control information so responses are limited by what the signed-in user is authorized to access.<br/>• <strong>C</strong>: ❌ This can be built, but it requires custom ACL synchronization, custom request-time filtering logic, and careful handling of group changes across source systems. It does not provide the same managed enterprise authorization model and connector behavior required for minimal custom code.<br/>• <strong>D</strong>: ❌ Amazon Kendra can support enterprise search patterns and user context filtering, but this design still requires more custom integration to create a full assistant with business actions. It is less aligned with the requirement for centralized assignment and minimal custom access-control decisions.",
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
      "question_text": "<p>An industrial robotics vendor's field-service AI team runs a RAG assistant on Amazon Bedrock Knowledge Bases. The knowledge base is a custom knowledge base backed by Amazon OpenSearch Serverless, and the vector index stores each chunk's raw text in a filterable text field. Technicians search by using both natural-language symptoms and exact robot model numbers or error codes. API profiling shows that semantic retrieval often misses chunks that contain exact codes, and relevant chunks are sometimes ranked below less useful chunks. The team wants to improve relevance from Retrieve and RetrieveAndGenerate requests without replacing the vector store or building a custom retrieval service.</p><p>Which retrieval configuration should the team use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: semantic retrieval bỏ sót chunk chứa exact model number/error code, và ranking chưa tốt.</li><li>Requirement quan trọng: cải thiện relevance cho Retrieve/RetrieveAndGenerate mà <strong>không đổi vector store</strong> hay build retrieval service riêng.</li><li>Ưu tiên: relevance, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>HYBRID</strong> search (semantic + keyword, vì index có text field filterable) bắt được exact code; tăng numberOfResults rồi <strong>reranking model</strong> sắp xếp lại và giữ numberOfRerankedResults tốt nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — guardrails không dùng để xếp hạng/lọc relevance của retrieved references; không giải quyết ranking.</li><li><strong>B</strong>: ✅ Đúng — HYBRID cho exact match, reranking cho thứ tự.</li><li><strong>C</strong>: ❌ Sai — metadata filter cần attribute có sẵn và không cải thiện ranking; thay thế reranking là không giải quyết vấn đề.</li><li><strong>D</strong>: ❌ Sai — SEMANTIC vẫn bỏ sót exact code.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>overrideSearchType HYBRID</li><li>rerankingConfiguration</li><li>BEDROCK_RERANKING_MODEL</li><li>numberOfRerankedResults</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp miss exact keyword/code → <strong>HYBRID</strong>; gặp ranking kém → <strong>reranking model</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>Configure retrievalConfiguration.vectorSearchConfiguration with overrideSearchType HYBRID, keep numberOfResults at the default result count, and attach guardrails to filter irrelevant retrieved references before response generation.</p>",
              "correct": false,
              "feedback": "<p>HYBRID is appropriate for the exact-code retrieval issue, but leaving the default result count can limit the candidate set when more source chunks need to be considered. Guardrails do not apply to the source chunks retrieved from Knowledge Bases, so they are not a mechanism for filtering irrelevant references.</p>"
            },
            {
              "choice": "<p>Configure retrievalConfiguration.vectorSearchConfiguration with overrideSearchType HYBRID, set numberOfResults to a larger supported value, and add rerankingConfiguration with BEDROCK_RERANKING_MODEL and an appropriate numberOfRerankedResults.</p>",
              "correct": true,
              "feedback": "<p>The knowledge base uses a supported vector store for hybrid search and has a filterable text field, so HYBRID can combine vector similarity with raw-text matching for exact codes. Bedrock Knowledge Bases reranking can then reorder the retrieved chunks by using a Bedrock reranking model, which addresses the ranking problem without a custom retriever.</p>"
            },
            {
              "choice": "<p>Configure retrievalConfiguration.vectorSearchConfiguration with overrideSearchType HYBRID, set numberOfResults to a larger supported value, and add a metadata filter for model and error-code attributes instead of rerankingConfiguration.</p>",
              "correct": false,
              "feedback": "<p>A metadata filter can narrow retrieval when the application has structured metadata fields to filter on, but the scenario only states that each chunk's raw text is available as a filterable text field. This approach also omits reranking, so it does not address relevant chunks being ordered below less useful chunks.</p>"
            },
            {
              "choice": "<p>Configure retrievalConfiguration.vectorSearchConfiguration with overrideSearchType SEMANTIC, set numberOfResults to a larger supported value, and add rerankingConfiguration with BEDROCK_RERANKING_MODEL and an appropriate numberOfRerankedResults.</p>",
              "correct": false,
              "feedback": "<p>SEMANTIC uses vector embeddings only, so it does not add raw-text matching for exact model numbers or error codes. Reranking can improve ordering of retrieved chunks, but it cannot rerank chunks that were not retrieved in the first place.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a <b>custom Amazon Bedrock knowledge base</b>, retrieval tuning is performed under <code>retrievalConfiguration.vectorSearchConfiguration</code>. The <code>overrideSearchType</code> field can be set to <code>HYBRID</code> or <code>SEMANTIC</code>; <code>HYBRID</code> combines vector embeddings with raw-text search, while <code>SEMANTIC</code> uses embeddings only. AWS documents hybrid search support for Amazon RDS, Amazon OpenSearch Serverless, and MongoDB vector stores when the store contains a filterable text field, which matches this scenario.<br/><br/>The retrieval architecture should solve two different problems. Hybrid search helps retrieve chunks that contain exact identifiers such as model numbers and error codes, because those strings may not always be well represented by embedding similarity alone. Reranking then improves the ordering of the retrieved set by applying a Bedrock reranker model through <code>rerankingConfiguration</code> with the documented vector-search reranking type <code>BEDROCK_RERANKING_MODEL</code>.<br/><br/>The number of initial results matters because Amazon Bedrock returns up to five results by default, and <code>numberOfResults</code> can be increased within the supported API range when the application needs a larger retrieval set. <code>numberOfRerankedResults</code> also has a documented range, and if it exceeds <code>numberOfResults</code>, the returned results are generally capped by <code>numberOfResults</code>, so these values should be chosen intentionally rather than treated as independent knobs.<br/><br/>Metadata filters are useful when the application has explicit metadata attributes to constrain the search space, but they are not a replacement for combining raw-text search with vector search or for reranking the retrieved candidates. Bedrock guardrails apply to the input and generated response, not to the retrieved references or source chunks, so guardrails are not a substitute for retrieval tuning or reranking.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_KnowledgeBaseVectorSearchConfiguration.html\">KnowledgeBaseVectorSearchConfiguration API Reference</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html\">Configure and customize queries and response generation</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve.html\">Query a knowledge base and retrieve data</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ HYBRID is appropriate for the exact-code retrieval issue, but leaving the default result count can limit the candidate set when more source chunks need to be considered. Guardrails do not apply to the source chunks retrieved from Knowledge Bases, so they are not a mechanism for filtering irrelevant references.<br/>• <strong>B</strong>: ✅ The knowledge base uses a supported vector store for hybrid search and has a filterable text field, so HYBRID can combine vector similarity with raw-text matching for exact codes. Bedrock Knowledge Bases reranking can then reorder the retrieved chunks by using a Bedrock reranking model, which addresses the ranking problem without a custom retriever.<br/>• <strong>C</strong>: ❌ A metadata filter can narrow retrieval when the application has structured metadata fields to filter on, but the scenario only states that each chunk's raw text is available as a filterable text field. This approach also omits reranking, so it does not address relevant chunks being ordered below less useful chunks.<br/>• <strong>D</strong>: ❌ SEMANTIC uses vector embeddings only, so it does not add raw-text matching for exact model numbers or error codes. Reranking can improve ordering of retrieved chunks, but it cannot rerank chunks that were not retrieved in the first place.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An investment research publisher's AI governance team is validating a market commentary assistant before a production release. One candidate uses an Amazon Bedrock model, and another candidate runs outside Amazon Bedrock. For the external candidate, the team has already generated responses for a fixed prompt set with expert reference responses. The team needs an automated assessment that goes beyond lexical overlap by scoring qualities such as relevance, factual accuracy, helpfulness, and coherence; includes an explanation for each prompt and response; writes the full report to S3; and does not call the external model during evaluation.</p><p>Which approach will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đánh giá chất lượng model ngoài Bedrock bằng responses đã tạo sẵn, so với reference.</li><li>Requirement quan trọng: vượt qua lexical overlap, chấm relevance/factual accuracy/helpfulness/coherence, có giải thích, report S3, <strong>không gọi external model</strong>.</li><li>Ưu tiên: LLM-as-a-judge với bring-your-own inference.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>LLM-as-a-judge</strong> (ModelEvaluation) dùng judge model cho metric chất lượng và kèm explanation; với <strong>bring-your-own-inference</strong>, dataset JSONL chứa prompt và một precomputed response cho mỗi prompt nên không gọi model ngoài.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mỗi job chỉ cho một response ngoài mỗi prompt; trộn hai candidate với hai modelResponses không được hỗ trợ.</li><li><strong>B</strong>: ✅ Đúng — một response precomputed mỗi prompt, judge built-in metrics, output S3.</li><li><strong>C</strong>: ❌ Sai — RAG evaluation dành cho retrieval/generation của KB, nhét answer vào retrieved context là sai bản chất.</li><li><strong>D</strong>: ❌ Sai — automatic (programmatic) evaluation chỉ có metric như accuracy, robustness, toxicity theo task type; không chấm helpfulness/coherence kèm giải thích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>LLM-as-a-judge</li><li>Bring your own inference responses</li><li>Built-in judge metrics</li><li>Một response mỗi prompt</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chấm model ngoài Bedrock bằng response có sẵn, cần explanation → <strong>LLM-as-a-judge</strong> với precomputed responses.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 20,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>Create LLM-as-a-judge model evaluation jobs with applicationType ModelEvaluation. Store both candidates' responses in one JSON Lines file with two modelResponses per prompt, select built-in judge metrics, and configure the S3 output destination.</p>",
              "correct": false,
              "feedback": "<p>This uses the right evaluation mode but violates the prompt dataset constraints for bring-your-own inference responses. A model-as-judge evaluation job supports only one model response for each prompt and one unique modelIdentifier in a job.</p>"
            },
            {
              "choice": "<p>Create LLM-as-a-judge model evaluation jobs with applicationType ModelEvaluation. Store the prompt dataset and the external candidate's single precomputed response per prompt as JSON Lines in S3, select built-in judge metrics, and configure the S3 output destination.</p>",
              "correct": true,
              "feedback": "<p>An LLM-as-a-judge model evaluation uses a separate evaluator model to score generator responses and provide an explanation for each prompt and response pair. Amazon Bedrock can evaluate precomputed non-Bedrock responses directly, and the full report is written to the configured S3 destination.</p>"
            },
            {
              "choice": "<p>Create RAG evaluation jobs with applicationType RagEvaluation. Store each candidate answer as retrieved context in the prompt dataset, select retrieve-only metrics, and configure the S3 output destination.</p>",
              "correct": false,
              "feedback": "<p>RAG evaluation jobs are intended for knowledge bases or RAG sources, with retrieve-only metrics focused on retrieved context rather than standalone model answers. Treating generated answers as retrieved context would not produce the requested model-output assessment.</p>"
            },
            {
              "choice": "<p>Create automatic model evaluation jobs with applicationType ModelEvaluation. Store the prompt dataset and external candidate responses as JSON Lines in S3, select one task type per job, and configure the S3 output destination.</p>",
              "correct": false,
              "feedback": "<p>Automatic model evaluation jobs are task-based and use documented task and metric mappings such as BERTScore, F1, toxicity, robustness, or RWK rather than a judge model explanation for each response. They also require choosing one task type per job, which does not fit the requested multi-dimensional judge assessment.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 20,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock evaluations</b> support several evaluation modes, and the right mental model is to match the evaluation mechanism to the artifact being assessed. When the artifact is a generated answer and the team needs qualitative dimensions such as <code>Builtin.Correctness</code>, <code>Builtin.Relevance</code>, <code>Builtin.Helpfulness</code>, and <code>Builtin.Coherence</code>, an <i>LLM-as-a-judge</i> model evaluation is designed for that purpose. The evaluator model is separate from the generator model, and Bedrock stores the full evaluation report in the S3 bucket configured for the job. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html\">Evaluate model responses using LLM-as-a-judge in Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-metrics.html\">Model evaluation metrics</a>.<br/><br/>The external model requirement is the subtle constraint. Bedrock can evaluate <b>precomputed responses</b> from a non-Bedrock model, which lets the team avoid invoking that external model during the evaluation run. However, the bring-your-own response format supports only one model response per prompt and one unique <code>modelIdentifier</code> in a job, so comparing multiple candidates requires separate jobs or separate inputs rather than packing multiple responses into a single prompt record. Dataset and response-format requirements are documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets-judge.html\">Use prompt datasets for model evaluation jobs using LLM-as-a-judge</a>.<br/><br/>Traditional automatic evaluations are useful, but they are task-based and use metrics such as BERTScore, F1, toxicity, robustness, or RWK, so they do not satisfy the requirement for judge explanations across multiple qualitative dimensions. RAG evaluation is a different application type that assesses retrieval or retrieve-and-generate behavior for knowledge bases and RAG sources, not general standalone model-output comparison. The API shape for creating these jobs, including <code>applicationType</code> and S3 output configuration, is described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateEvaluationJob.html\">CreateEvaluationJob</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This uses the right evaluation mode but violates the prompt dataset constraints for bring-your-own inference responses. A model-as-judge evaluation job supports only one model response for each prompt and one unique modelIdentifier in a job.<br/>• <strong>B</strong>: ✅ An LLM-as-a-judge model evaluation uses a separate evaluator model to score generator responses and provide an explanation for each prompt and response pair. Amazon Bedrock can evaluate precomputed non-Bedrock responses directly, and the full report is written to the configured S3 destination.<br/>• <strong>C</strong>: ❌ RAG evaluation jobs are intended for knowledge bases or RAG sources, with retrieve-only metrics focused on retrieved context rather than standalone model answers. Treating generated answers as retrieved context would not produce the requested model-output assessment.<br/>• <strong>D</strong>: ❌ Automatic model evaluation jobs are task-based and use documented task and metric mappings such as BERTScore, F1, toxicity, robustness, or RWK rather than a judge model explanation for each response. They also require choosing one task type per job, which does not fit the requested multi-dimensional judge assessment.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A national news publisher's editorial AI team is building an internal assistant that prepares article briefs. Each request must run a sequence of FM prompts: extract entities, classify the article topic, generate a short summary, and then choose one of several style prompts based on the classification result. Editors frequently revise the prompt sequence, and the team wants a managed AWS-native implementation that minimizes custom orchestration code while allowing the workflow to be defined and reviewed as configuration.</p><p>Which implementation will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuỗi prompt FM tuần tự (extract, classify, summarize) rồi rẽ nhánh chọn style prompt.</li><li>Requirement quan trọng: managed AWS-native, <strong>ít code orchestration</strong>, workflow là configuration có thể review, editor sửa thường xuyên.</li><li>Ưu tiên: minimal custom orchestration code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Bedrock Flows</strong> là workflow visual/declarative với prompt nodes gọi model và condition nodes phân nhánh; định nghĩa flow là cấu hình, không cần code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — prompt node + condition node, ít code nhất.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions chạy được nhưng cần Lambda task và code gọi Bedrock; nhiều code hơn.</li><li><strong>C</strong>: ❌ Sai — Agent Squad là framework routing agents, không phải pipeline cố định, và là mã nguồn mở không phải managed.</li><li><strong>D</strong>: ❌ Sai — Strands là SDK code, cần viết và vận hành agent; không phải cấu hình.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Flows</li><li>Prompt node / Condition node</li><li>Declarative workflow</li><li>Minimal code</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chuỗi prompt cố định có rẽ nhánh, ít code → <strong>Bedrock Flows</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 21,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>Implement the workflow by using Amazon Bedrock Flows with prompt nodes that invoke models and condition nodes for branching.</p>",
              "correct": true,
              "feedback": "<p>This approach uses a managed Bedrock orchestration capability that is designed for chaining prompts, models, and conditional logic. It minimizes custom code while allowing the workflow to be created visually or represented as a JSON definition.</p>"
            },
            {
              "choice": "<p>Implement the workflow by using AWS Step Functions Standard Workflows with Lambda tasks that invoke Amazon Bedrock models.</p>",
              "correct": false,
              "feedback": "<p>Step Functions can orchestrate Lambda functions and service calls, so this design is viable for complex workflows. However, it requires more custom wrapper logic for prompt handoffs, conditional prompt routing, and workflow maintenance than the managed Bedrock workflow feature.</p>"
            },
            {
              "choice": "<p>Implement the workflow by using AWS Agent Squad to route each request among task-specific Bedrock agents.</p>",
              "correct": false,
              "feedback": "<p>Agent Squad is intended for orchestrating multiple agents and routing requests to the agent that best matches the task. The requirement is to execute a controlled prompt sequence with conditional branching, not to select one agent for an entire request.</p>"
            },
            {
              "choice": "<p>Implement the workflow by using Strands Agents with specialized agents for entity extraction, classification, and summarization.</p>",
              "correct": false,
              "feedback": "<p>Strands Agents is useful for building agentic systems with tools, specialized agents, and model interactions. For a frequently revised deterministic prompt chain, it adds application framework code and runtime orchestration that is unnecessary for the stated requirements.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Flows</b> is the best fit when the main problem is chaining GenAI steps together, passing outputs from one step to the next, and using conditions to choose later paths. A flow is composed of nodes and connections, and prompt nodes can invoke models without requiring developers to build a separate orchestration layer for every prompt handoff.<br/><br/><b>AWS Step Functions</b> remains a strong general-purpose workflow service, especially when a GenAI process needs durable orchestration across many AWS services, explicit retries, long-running state, or custom integration steps. In this scenario, the workflow is primarily prompt sequencing and conditional prompt routing, so Step Functions would work but would introduce more custom Lambda or SDK integration code than necessary. See <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html\">What is AWS Step Functions?</a>.<br/><br/>Agent frameworks such as <b>Strands Agents</b> and multi-agent routers such as <b>AWS Agent Squad</b> are better aligned to tool use, agent specialization, and request routing. They are useful when an agent must decide which tools or agents to use for an open-ended task. Here, the team needs a maintainable configured workflow for a known sequence of prompts, which is the tradeoff Bedrock Flows is designed to address. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html\">Automate tasks in your generative AI application using Amazon Bedrock Flows</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html\">Agents for Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses a managed Bedrock orchestration capability that is designed for chaining prompts, models, and conditional logic. It minimizes custom code while allowing the workflow to be created visually or represented as a JSON definition.<br/>• <strong>B</strong>: ❌ Step Functions can orchestrate Lambda functions and service calls, so this design is viable for complex workflows. However, it requires more custom wrapper logic for prompt handoffs, conditional prompt routing, and workflow maintenance than the managed Bedrock workflow feature.<br/>• <strong>C</strong>: ❌ Agent Squad is intended for orchestrating multiple agents and routing requests to the agent that best matches the task. The requirement is to execute a controlled prompt sequence with conditional branching, not to select one agent for an entire request.<br/>• <strong>D</strong>: ❌ Strands Agents is useful for building agentic systems with tools, specialized agents, and model interactions. For a frequently revised deterministic prompt chain, it adds application framework code and runtime orchestration that is unnecessary for the stated requirements.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical clinical operations team is preparing a generative AI assistant for regulated trial-document review. The assistant uses Amazon Bedrock for inference, SageMaker AI jobs for evaluation reports, and AWS Glue pipelines to prepare indexed document metadata. Auditors require a repeatable compliance evidence framework that records intended use and risk for each model release, preserves evaluation evidence, attributes outputs to governed data sources, and captures runtime model interaction evidence for supported Bedrock calls. The team wants to automate evidence collection without treating any single artifact as a legal compliance attestation.</p><p>Which implementation will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: khung bằng chứng compliance lặp lại cho trợ lý GenAI: ghi intended use/risk, giữ evaluation evidence, truy nguồn dữ liệu, ghi runtime interaction.</li><li>Requirement quan trọng: <strong>tự động thu thập evidence</strong>, không coi một artifact đơn lẻ là attestation pháp lý.</li><li>Ưu tiên: auditability, traceability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SageMaker Model Cards</strong> (JSON hợp schema) ghi intended use và risk; link evaluation reports trong S3; <strong>Glue Data Catalog lineage</strong> cho nguồn dữ liệu; <strong>Bedrock model invocation logging</strong> ghi runtime interaction cho các call được hỗ trợ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đặt Approved không đủ, báo cáo chỉ là S3 object không liên kết, và \"default\" invocation logging thực tế không bật sẵn.</li><li><strong>B</strong>: ❌ Sai — PDF không phải evidence có cấu trúc; thiếu catalog metadata làm mất lineage; CloudTrail không ghi nội dung prompt/response.</li><li><strong>C</strong>: ❌ Sai — attribution chỉ trong custom field, crawler schema không phải lineage; CloudTrail không phải decision log.</li><li><strong>D</strong>: ✅ Đúng — bao phủ đủ bốn nhu cầu bằng cơ chế native.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SageMaker Model Cards</li><li>Glue Data Catalog lineage</li><li>Bedrock model invocation logging</li><li>Evaluation evidence in S3</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp compliance evidence cho GenAI → <strong>Model Cards</strong> + <strong>Glue Catalog lineage</strong> + <strong>Bedrock invocation logging</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 22,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>Set SageMaker Model Cards to Approved for each release, store evaluation reports only as S3 objects, run AWS Glue crawlers for schema cataloging, and rely on default Bedrock invocation logging.</p>",
              "correct": false,
              "feedback": "<p>Approved is a valid model-card status, but approving a model card does not make it a legal compliance attestation by itself. Storing reports only as standalone S3 objects and relying on default Bedrock invocation logging leaves gaps because model-card evidence should reference the reports and invocation logging is disabled by default.</p>"
            },
            {
              "choice": "<p>Export SageMaker Model Cards to PDF after each deployment, tag S3 documents with source owners, update Glue ETL jobs without catalog metadata, and use CloudTrail only for Bedrock auditing.</p>",
              "correct": false,
              "feedback": "<p>PDF exports and S3 object tags can support review and attribution workflows, but they are not a substitute for versioned model-card content and Data Catalog lineage metadata. CloudTrail is useful for auditing API activity, but it does not capture the runtime model interaction evidence provided by Bedrock model invocation logging.</p>"
            },
            {
              "choice": "<p>Create SageMaker Model Cards with an Approved status, store source attribution only in card custom fields, use AWS Glue crawlers for schema snapshots, and use CloudTrail as the decision log.</p>",
              "correct": false,
              "feedback": "<p>Approved is a valid model-card status, and custom fields can add useful governance context. However, using only model-card custom fields and schema snapshots is weaker than maintaining governed Data Catalog lineage, and CloudTrail does not replace Bedrock model invocation logging for model input, output, and invocation metadata.</p>"
            },
            {
              "choice": "<p>Create SageMaker Model Cards with schema-valid JSON, link evaluation reports from S3, maintain AWS Glue Data Catalog lineage metadata, and enable Bedrock model invocation logging for supported runtime calls.</p>",
              "correct": true,
              "feedback": "<p>This approach combines model governance, evaluation evidence, data provenance, and runtime decision logging without overstating what any one service provides. SageMaker Model Cards document governance details, AWS Glue Data Catalog supports metadata and lineage, and Bedrock invocation logging captures supported runtime interactions when enabled.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 22,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A compliance evidence framework for FM deployments usually needs several coordinated controls, not one magic artifact. <b>SageMaker Model Cards</b> are designed to document governance information such as intended use, risk rating, training details, evaluation results, observations, considerations, recommendations, and custom information. They can be versioned and exported, but they should be treated as structured evidence, not as an automatic regulatory attestation. See <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html\">Amazon SageMaker Model Cards</a> and <a href=\"https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModelCard.html\">CreateModelCard</a>.<br/><br/>For provenance, the <b>AWS Glue Data Catalog</b> provides a centralized metadata repository that indexes data-source location, schema, runtime metrics, and lineage information. Crawlers infer and store metadata, while Glue ETL jobs can update schemas and partitions in the catalog. This supports auditability, but it should not be confused with moving or transforming the underlying data by the crawler itself. See <a href=\"https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html\">AWS Glue Data Catalog and crawlers</a>.<br/><br/>For runtime evidence, <b>Amazon Bedrock model invocation logging</b> must be enabled because it is disabled by default. It can collect invocation logs, model input data, model output data, and metadata for supported <code>bedrock-runtime</code> operations such as <code>Converse</code>, <code>ConverseStream</code>, <code>InvokeModel</code>, and <code>InvokeModelWithResponseStream</code>. CloudTrail remains valuable for API auditing, but it does not replace invocation logging when auditors need model interaction evidence.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Approved is a valid model-card status, but approving a model card does not make it a legal compliance attestation by itself. Storing reports only as standalone S3 objects and relying on default Bedrock invocation logging leaves gaps because model-card evidence should reference the reports and invocation logging is disabled by default.<br/>• <strong>B</strong>: ❌ PDF exports and S3 object tags can support review and attribution workflows, but they are not a substitute for versioned model-card content and Data Catalog lineage metadata. CloudTrail is useful for auditing API activity, but it does not capture the runtime model interaction evidence provided by Bedrock model invocation logging.<br/>• <strong>C</strong>: ❌ Approved is a valid model-card status, and custom fields can add useful governance context. However, using only model-card custom fields and schema snapshots is weaker than maintaining governed Data Catalog lineage, and CloudTrail does not replace Bedrock model invocation logging for model input, output, and invocation metadata.<br/>• <strong>D</strong>: ✅ This approach combines model governance, evaluation evidence, data provenance, and runtime decision logging without overstating what any one service provides. SageMaker Model Cards document governance details, AWS Glue Data Catalog supports metadata and lineage, and Bedrock invocation logging captures supported runtime interactions when enabled.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An electric utility's grid operations software team is enabling several product teams to build Amazon Bedrock applications, including outage summarization, maintenance procedure Q&amp;A, and regulatory report drafting. The product teams deploy independently in separate AWS accounts and sometimes use different RAG data sources, but the security office has found inconsistent IAM boundaries, guardrail use, logging, and retrieval patterns. The platform team must provide a reusable standard that teams can adopt without waiting for manual design approval, and must produce repeatable architecture review evidence for each deployment.</p><p>Which approach will meet these requirements MOST effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuẩn hóa nhiều team xây app Bedrock ở nhiều account với IAM, guardrail, logging, retrieval thống nhất.</li><li>Requirement quan trọng: <strong>reusable standard</strong> để team tự dùng không chờ duyệt thủ công, và có evidence review lặp lại.</li><li>Ưu tiên: governance ở quy mô lớn, self-service.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CDK constructs</strong> đóng gói pattern đã duyệt (IAM boundary, guardrail, logging) cho các team tự triển khai; <strong>Well-Architected Tool</strong> với Generative AI Lens cho review có cấu trúc, lặp lại, đúng đặc thù GenAI.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — stack tái sử dụng được nhưng checklist trong repo không phải review framework chuẩn, khó lặp lại.</li><li><strong>B</strong>: ❌ Sai — chỉ dùng pillar chuẩn thì bỏ sót rủi ro riêng GenAI.</li><li><strong>C</strong>: ❌ Sai — proxy tập trung tạo điểm nghẽn, team ở account khác không tự triển khai độc lập; log không phải architecture review.</li><li><strong>D</strong>: ✅ Đúng — construct tái sử dụng + Generative AI Lens.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS CDK constructs</li><li>Well-Architected Tool</li><li>Generative AI Lens</li><li>Self-service guardrails</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chuẩn hóa kiến trúc GenAI và review lặp lại → <strong>Well-Architected Generative AI Lens</strong> + construct tái sử dụng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 23,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>Publish reusable CloudFormation stacks for approved Bedrock integration patterns, and assess each deployment by storing checklist results in a shared repository.</p>",
              "correct": false,
              "feedback": "<p>Reusable CloudFormation can standardize infrastructure, but static checklist files do not provide the same structured workload review, risk tracking, and improvement planning workflow. This approach is more prone to drift and inconsistent evidence across independently deployed teams.</p>"
            },
            {
              "choice": "<p>Publish reusable AWS CDK constructs for approved Bedrock integration patterns, and assess each deployment in AWS Well-Architected Tool by applying only the standard pillars.</p>",
              "correct": false,
              "feedback": "<p>Reusable CDK constructs help standardize implementation, but using only the standard Well-Architected pillars misses GenAI-specific review considerations. The scenario requires consistent Bedrock, guardrail, logging, and retrieval implementation, which is better addressed by a GenAI-focused lens.</p>"
            },
            {
              "choice": "<p>Publish a shared Bedrock proxy service for approved Bedrock integration patterns, and assess each deployment by reviewing proxy invocation logs centrally.</p>",
              "correct": false,
              "feedback": "<p>A shared proxy can centralize some controls, but it can become a coupling point that limits teams using different RAG sources and deployment patterns. Invocation logs provide operational evidence, but they do not replace architecture review evidence or a reusable deployment standard.</p>"
            },
            {
              "choice": "<p>Publish reusable AWS CDK constructs for approved Bedrock integration patterns, and assess each deployment in AWS Well-Architected Tool by applying the Generative AI Lens.</p>",
              "correct": true,
              "feedback": "<p>This creates standardized technical components that product teams can reuse across different deployment scenarios while still allowing pattern-specific configuration. AWS Well-Architected Tool with the Generative AI Lens provides a repeatable way to document risks, decisions, and improvement plans for each workload.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a platform team, the strongest pattern is to combine <b>reusable implementation components</b> with a repeatable review mechanism. AWS CDK constructs let the platform team encode approved defaults for IAM roles, Amazon Bedrock integrations, logging, guardrails, knowledge base wiring, and other deployment conventions while still exposing configuration points for each product team.<br/><br/>The <b>AWS Well-Architected Tool</b> is designed to record workload reviews, identify risks, and generate improvement plans. Applying the <b>Generative AI Lens</b> adds GenAI-specific guidance across areas such as model selection, data integration, responsible AI controls, deployment, and continuous improvement, which a generic checklist or standard infrastructure template would not cover as consistently.<br/><br/>A shared proxy can be useful in some centralized platform designs, but it is not the best answer when teams need independent deployments and different retrieval architectures. The mental model is to standardize the <i>building blocks and review process</i>, not to force every workload through one runtime path.<br/><br/>For more information, see <a href=\"https://docs.aws.amazon.com/cdk/v2/guide/home.html\">AWS Cloud Development Kit Developer Guide</a>, <a href=\"https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html\">AWS Well-Architected Tool User Guide</a>, and <a href=\"https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/welcome.html\">AWS Well-Architected Framework Generative AI Lens</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Reusable CloudFormation can standardize infrastructure, but static checklist files do not provide the same structured workload review, risk tracking, and improvement planning workflow. This approach is more prone to drift and inconsistent evidence across independently deployed teams.<br/>• <strong>B</strong>: ❌ Reusable CDK constructs help standardize implementation, but using only the standard Well-Architected pillars misses GenAI-specific review considerations. The scenario requires consistent Bedrock, guardrail, logging, and retrieval implementation, which is better addressed by a GenAI-focused lens.<br/>• <strong>C</strong>: ❌ A shared proxy can centralize some controls, but it can become a coupling point that limits teams using different RAG sources and deployment patterns. Invocation logs provide operational evidence, but they do not replace architecture review evidence or a reusable deployment standard.<br/>• <strong>D</strong>: ✅ This creates standardized technical components that product teams can reuse across different deployment scenarios while still allowing pattern-specific configuration. AWS Well-Architected Tool with the Generative AI Lens provides a repeatable way to document risks, decisions, and improvement plans for each workload.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An aerospace manufacturer's engineering AI team is deploying a generative design assistant. The application runs in AWS Lambda functions attached to private subnets, invokes Amazon Bedrock foundation models, and reads proprietary CAD metadata through Amazon Athena from an Amazon S3 data lake registered in the AWS Glue Data Catalog. Regulations require model invocations and data retrieval to stay off the public internet, project teams to see only authorized datasets and columns, and security operations to alarm on unusual access attempts with minimal custom code.</p><p>Which design best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Lambda trong private subnet gọi Bedrock và Athena trên S3 data lake (Glue Catalog) mà không ra internet.</li><li>Requirement quan trọng: <strong>private connectivity</strong>, quyền theo dataset và cột, cảnh báo truy cập bất thường với ít code.</li><li>Ưu tiên: security, minimal custom code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Interface VPC endpoints</strong> (Bedrock Runtime, Athena, Glue) + <strong>S3 gateway endpoint</strong> giữ traffic trong mạng AWS; <strong>Lake Formation</strong> cấp quyền table/column; CloudTrail events vào CloudWatch Logs cùng metric filters và alarms để cảnh báo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — IAM trên S3 prefix không kiểm soát được quyền cấp cột; alarm từ log ứng dụng không bắt được truy cập bất thường ở tầng API.</li><li><strong>B</strong>: ❌ Sai — NAT gateway vẫn đi qua internet công cộng, trái yêu cầu.</li><li><strong>C</strong>: ❌ Sai — thiếu endpoint Athena/Glue, copy dữ liệu tạo thêm bản sao, không có column-level control.</li><li><strong>D</strong>: ✅ Đúng — private endpoints + Lake Formation + CloudTrail/CloudWatch alarms.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Interface VPC endpoint / S3 gateway endpoint</li><li>Lake Formation column-level</li><li>CloudTrail to CloudWatch Logs</li><li>Metric filters and alarms</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp không qua internet → <strong>VPC endpoints</strong> (không phải NAT); gặp quyền theo cột → <strong>Lake Formation</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 24,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>Configure interface VPC endpoints for Bedrock Runtime, Athena, and AWS Glue, add an S3 gateway endpoint with endpoint and bucket policies, enforce project access only with IAM policies on S3 prefixes, and publish Lambda application logs to CloudWatch alarms.</p>",
              "correct": false,
              "feedback": "<p>The VPC endpoint pattern is appropriate, but IAM policies on S3 prefixes do not provide the same table and column governance for Athena queries as Lake Formation. Lambda application logs can show application behavior, but they are not a complete audit source for AWS API and S3 data access attempts.</p>"
            },
            {
              "choice": "<p>Configure private subnets with NAT gateways for Bedrock Runtime, Athena, and AWS Glue, restrict egress with IAM and security group rules, grant table and column access with Lake Formation, and send relevant CloudTrail events to CloudWatch Logs for metric filters and alarms.</p>",
              "correct": false,
              "feedback": "<p>NAT gateways allow private subnet resources to reach public service endpoints, which does not satisfy the requirement to keep model invocation and data access off the public internet path. Lake Formation and CloudWatch monitoring help with authorization and visibility, but they do not compensate for the network isolation gap.</p>"
            },
            {
              "choice": "<p>Configure interface VPC endpoints for Bedrock Runtime and S3, copy authorized data into project-specific S3 buckets, grant bucket access with IAM policies, and monitor Amazon S3 request metrics with CloudWatch alarms.</p>",
              "correct": false,
              "feedback": "<p>Project-specific buckets can reduce accidental sharing, but copying governed data creates operational overhead and does not provide centralized column-level authorization for Athena. This design also omits private endpoints for the Athena and AWS Glue API calls made by the application.</p>"
            },
            {
              "choice": "<p>Configure interface VPC endpoints for Bedrock Runtime, Athena, and AWS Glue, add an S3 gateway endpoint with endpoint and bucket policies, grant table and column access with Lake Formation, and send relevant CloudTrail events to CloudWatch Logs for metric filters and alarms.</p>",
              "correct": true,
              "feedback": "<p>Interface VPC endpoints keep supported AWS API calls from the private subnets on private connectivity, and an S3 gateway endpoint can be combined with bucket and endpoint policies to restrict S3 access paths. Lake Formation provides fine-grained permissions for cataloged data used by Athena, and CloudTrail events can be delivered to CloudWatch Logs for metric filters and alarms.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 24,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a protected generative AI environment, separate the problem into <b>network isolation</b>, <b>authorization</b>, and <b>observability</b>. Interface VPC endpoints powered by AWS PrivateLink let workloads in private subnets call supported services such as Amazon Bedrock Runtime, Athena, and AWS Glue without using public IP routing, while an S3 gateway endpoint can keep S3 access inside the AWS network path and can be constrained with endpoint and bucket policies. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html\">Use interface VPC endpoints with Amazon Bedrock</a>, <a href=\"https://docs.aws.amazon.com/athena/latest/ug/interface-vpc-endpoint.html\">Access Athena using an interface VPC endpoint</a>, and <a href=\"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html\">Gateway endpoints for Amazon S3</a>.<br/><br/><b>AWS Lake Formation</b> is the right governance layer when Athena queries cataloged data and teams need fine-grained access to datasets, tables, and columns. IAM and S3 bucket policies are still important, especially to enforce least privilege and restrict access to approved VPC endpoints, but they are not a substitute for Lake Formation permissions on Data Catalog resources. For monitoring, CloudTrail records AWS API activity and can include S3 data events when enabled, and delivering those events to CloudWatch Logs enables metric filters and alarms without building a custom auditing pipeline. See <a href=\"https://docs.aws.amazon.com/lake-formation/latest/dg/managing-permissions.html\">Managing Lake Formation permissions</a> and <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html\">Sending CloudTrail events to CloudWatch Logs</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ The VPC endpoint pattern is appropriate, but IAM policies on S3 prefixes do not provide the same table and column governance for Athena queries as Lake Formation. Lambda application logs can show application behavior, but they are not a complete audit source for AWS API and S3 data access attempts.<br/>• <strong>B</strong>: ❌ NAT gateways allow private subnet resources to reach public service endpoints, which does not satisfy the requirement to keep model invocation and data access off the public internet path. Lake Formation and CloudWatch monitoring help with authorization and visibility, but they do not compensate for the network isolation gap.<br/>• <strong>C</strong>: ❌ Project-specific buckets can reduce accidental sharing, but copying governed data creates operational overhead and does not provide centralized column-level authorization for Athena. This design also omits private endpoints for the Athena and AWS Glue API calls made by the application.<br/>• <strong>D</strong>: ✅ Interface VPC endpoints keep supported AWS API calls from the private subnets on private connectivity, and an S3 gateway endpoint can be combined with bucket and endpoint policies to restrict S3 access paths. Lake Formation provides fine-grained permissions for cataloged data used by Athena, and CloudTrail events can be delivered to CloudWatch Logs for metric filters and alarms.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A precision agriculture startup's platform team is exposing existing diagnostic tools to autonomous agents by using Amazon Bedrock AgentCore Gateway. The tools are implemented in one shared AWS Lambda function, which currently dispatches to internal handlers by unprefixed names such as getSoilStatus and scheduleIrrigation. The team wants the tools to be MCP-compatible through Gateway, keep the existing handler names, and add defensive parameter validation in the Lambda code.</p><p>Which implementation will meet these requirements with the least custom integration code?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: expose Lambda dùng chung thành MCP tools qua AgentCore Gateway, giữ handler name hiện có (không prefix).</li><li>Requirement quan trọng: <strong>ít code tích hợp nhất</strong>, thêm validate tham số trong Lambda.</li><li>Ưu tiên: minimal integration code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda target dùng <strong>toolSchema</strong> (inputSchema mô tả tham số); tham số tool được truyền thẳng vào event, còn tên tool đến qua context <strong>bedrockAgentCoreToolName</strong> có dạng prefix target___tool, nên Lambda cần bỏ prefix rồi mới chọn handler.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tham số nằm trong event chứ không trong context metadata; outputSchema không thay thế toolSchema; không strip prefix.</li><li><strong>B</strong>: ❌ Sai — OpenAPI target dành cho REST API, không dùng để trỏ tới Lambda; Swagger 2.0 không hỗ trợ (cần OpenAPI 3.x).</li><li><strong>C</strong>: ✅ Đúng — toolSchema, validate event theo inputSchema, strip prefix.</li><li><strong>D</strong>: ❌ Sai — route trực tiếp bằng tên có prefix sẽ không khớp handler hiện có; đăng ký lại handler là thêm việc.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda target + toolSchema</li><li>bedrockAgentCoreToolName</li><li>Target-name prefix</li><li>MCP-compatible</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp Lambda target của AgentCore Gateway → tên tool có prefix target, nhớ <strong>strip</strong> trước khi dispatch.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 25,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>Create an AgentCore Gateway Lambda target with the Lambda ARN and outputSchema definitions for each tool. In the Lambda dispatcher, read tool arguments from the context metadata and route directly by bedrockAgentCoreToolName.</p>",
              "correct": false,
              "feedback": "<p>A Lambda tool definition requires name, description, and inputSchema, while outputSchema is optional. Tool arguments are delivered in the Lambda event object, and bedrockAgentCoreToolName can include the Gateway target-name prefix that would not match existing unprefixed handlers.</p>"
            },
            {
              "choice": "<p>Create an AgentCore Gateway OpenAPI target from a Swagger 2.0 document that describes the Lambda operations. In the Lambda dispatcher, map operationId values to handlers and validate request bodies after invocation.</p>",
              "correct": false,
              "feedback": "<p>AgentCore Gateway OpenAPI targets support OpenAPI 3.0 and 3.1, not Swagger 2.0. OpenAPI operationId values are used as MCP tool names for OpenAPI targets, but this approach does not use the documented Lambda target configuration for exposing the existing Lambda directly.</p>"
            },
            {
              "choice": "<p>Create an AgentCore Gateway Lambda target with the Lambda ARN and a toolSchema that defines each tool. In the Lambda dispatcher, validate the event fields from each inputSchema and strip the Gateway target-name prefix from bedrockAgentCoreToolName before selecting the handler.</p>",
              "correct": true,
              "feedback": "<p>AgentCore Gateway Lambda targets are designed to expose Lambda-backed tools through Gateway endpoints, and the Lambda event contains the inputSchema properties as values. Gateway-visible tool names are prefixed with the target name, so stripping that prefix lets the shared Lambda preserve its existing unprefixed handler dispatch.</p>"
            },
            {
              "choice": "<p>Create an AgentCore Gateway Lambda target with the Lambda ARN and a toolSchema that defines each tool. In the Lambda dispatcher, validate the event fields and route directly by bedrockAgentCoreToolName after registering handlers with Gateway-visible names.</p>",
              "correct": false,
              "feedback": "<p>This uses the correct Gateway target family and validates the event payload, but it couples the Lambda dispatcher to Gateway-visible prefixed names. The requirement is to keep the existing unprefixed handler names, so the dispatcher must account for the prefix rather than require handler registration by prefixed names.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 25,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock AgentCore Gateway</b> is the managed feature for turning APIs, Lambda functions, and existing services into <b>MCP-compatible tools</b> behind Gateway endpoints. For a Lambda target, AWS documents a target configuration that includes a <code>lambdaArn</code> and a <code>toolSchema</code>; each Lambda tool definition needs a <code>name</code>, <code>description</code>, and <code>inputSchema</code>, while <code>outputSchema</code> is optional. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html\">Amazon Bedrock AgentCore Gateway</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-add-target-lambda.html\">Add Lambda targets to an AgentCore Gateway</a>.<br/><br/>When Gateway invokes a Lambda target, the Lambda event is the map of input schema properties to values, so the Lambda function is the right place to perform defensive validation against the expected object-shaped schema. The Lambda context contains metadata, including <code>bedrockAgentCoreToolName</code>, but that field is metadata rather than the argument payload. AWS also documents that Gateway-visible tool names are prefixed as <code>${target_name}___${tool_name}</code>, so shared Lambda dispatchers that use existing unprefixed handler names must account for the naming discrepancy, often by stripping the prefix before routing. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-tool-naming.html\">Tool naming in AgentCore Gateway</a>.<br/><br/>Gateway OpenAPI targets are useful when an existing HTTP API is the integration point, but they have schema requirements that matter in production. Gateway supports OpenAPI 3.0 and 3.1 for OpenAPI targets, and every exposed operation must include an <code>operationId</code>; Swagger 2.0 is not supported for this target type. For this scenario, the Lambda target keeps the integration closest to the existing shared Lambda while still exposing the tools through Gateway. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-schema-openapi.html\">OpenAPI schema requirements for AgentCore Gateway</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ A Lambda tool definition requires name, description, and inputSchema, while outputSchema is optional. Tool arguments are delivered in the Lambda event object, and bedrockAgentCoreToolName can include the Gateway target-name prefix that would not match existing unprefixed handlers.<br/>• <strong>B</strong>: ❌ AgentCore Gateway OpenAPI targets support OpenAPI 3.0 and 3.1, not Swagger 2.0. OpenAPI operationId values are used as MCP tool names for OpenAPI targets, but this approach does not use the documented Lambda target configuration for exposing the existing Lambda directly.<br/>• <strong>C</strong>: ✅ AgentCore Gateway Lambda targets are designed to expose Lambda-backed tools through Gateway endpoints, and the Lambda event contains the inputSchema properties as values. Gateway-visible tool names are prefixed with the target name, so stripping that prefix lets the shared Lambda preserve its existing unprefixed handler dispatch.<br/>• <strong>D</strong>: ❌ This uses the correct Gateway target family and validates the event payload, but it couples the Lambda dispatcher to Gateway-visible prefixed names. The requirement is to keep the existing unprefixed handler names, so the dispatcher must account for the prefix rather than require handler registration by prefixed names.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical imaging equipment manufacturer's service AI team is extending an FM-based troubleshooting assistant with MCP tools. The team will deploy the MCP server to Amazon Bedrock AgentCore Runtime. One tool runs multi-step calibration simulations that can emit progress updates and can request missing parameter values during the same tool interaction. The team wants client integrations to remain portable across local testing and remote runtime invocation.</p><p>Which implementation approach will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Triển khai MCP server lên <strong>AgentCore Runtime</strong> cho tool chạy dài, cần gửi progress và yêu cầu thêm tham số (elicitation) ngay trong cùng một tương tác.</li><li>Requirement chính: client portable giữa local test và remote runtime.</li><li>Ưu tiên: <strong>đúng contract giao thức MCP</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Progress/elicitation cần session hai chiều nên phải dùng <strong>stateful streamable-HTTP</strong> tại 0.0.0.0:8000/mcp; dùng <strong>official mcp client</strong> session giúp cùng một code chạy được ở local lẫn AgentCore Runtime.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — path /tools không đúng contract (AgentCore yêu cầu /mcp), proxy thêm phức tạp.</li><li><strong>B</strong>: ❌ Sai — streamable HTTP dùng JSON/SSE, không ép application/x-ndjson, làm client không chuẩn.</li><li><strong>C</strong>: ❌ Sai — stateless mặc định không hỗ trợ progress/elicitation; tự tái dùng Mcp-Session-Id là sai hướng.</li><li><strong>D</strong>: ✅ Đúng — stateful + /mcp + official client session.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AgentCore Runtime, streamable-HTTP, 0.0.0.0:8000/mcp, stateful MCP, elicitation/progress</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp MCP tool cần progress hoặc hỏi lại tham số → nghĩ ngay đến <strong>stateful MCP server</strong> tại /mcp + <strong>official mcp client</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 26,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>Deploy a streamable-HTTP MCP server container to AgentCore Runtime, configure stateful MCP handling, listen on 0.0.0.0:8000/tools, and route MCP calls through a proxy.</p>",
              "correct": false,
              "feedback": "<p>Stateful MCP handling matches the tool behavior, but the endpoint path does not match the AgentCore Runtime requirement for MCP server containers. Runtime expects the server to listen at 0.0.0.0:8000/mcp when configured with the MCP protocol.</p>"
            },
            {
              "choice": "<p>Deploy a streamable-HTTP MCP server container to AgentCore Runtime, configure stateful MCP handling, listen on 0.0.0.0:8000/mcp, and require Accept: application/x-ndjson.</p>",
              "correct": false,
              "feedback": "<p>The server mode and runtime listening path align with the stateful MCP requirement. However, AWS notes that any Accept header used for remote AgentCore Runtime invocation must follow the MCP standard, such as application/json or text/event-stream.</p>"
            },
            {
              "choice": "<p>Deploy a streamable-HTTP MCP server container to AgentCore Runtime, keep default stateless MCP handling, listen on 0.0.0.0:8000/mcp, and reuse Mcp-Session-Id values.</p>",
              "correct": false,
              "feedback": "<p>Stateless MCP is the documented default and is recommended for basic servers, but it is not appropriate for capabilities that require retained MCP session state. Reusing or receiving an Mcp-Session-Id helps continuity to the same runtime session, but it does not make stateless mode suitable for elicitation or progress notifications.</p>"
            },
            {
              "choice": "<p>Deploy a streamable-HTTP MCP server container to AgentCore Runtime, configure stateful MCP handling, listen on 0.0.0.0:8000/mcp, and use the official mcp client session.</p>",
              "correct": true,
              "feedback": "<p>The tool requires retained MCP session state because it uses progress notifications and multi-turn elicitation, so stateful MCP handling is appropriate. AgentCore Runtime expects MCP server containers to listen on 0.0.0.0:8000/mcp, and the documented client pattern uses the official mcp package with a ClientSession.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 26,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Amazon Bedrock AgentCore Runtime can run <b>MCP servers</b> by using the streamable HTTP transport. When the runtime is configured for the MCP protocol, the container must expose the MCP endpoint at <code>0.0.0.0:8000/mcp</code>, which gives AgentCore Runtime a predictable place to send MCP traffic.<br/><br/>The key design choice is whether the MCP server should be <b>stateless</b> or <b>stateful</b>. Stateless HTTP is the default and is a good fit for simple, independent tool calls. However, tools that need multi-turn elicitation, LLM sampling, or progress notifications need retained MCP session state, so they should use stateful mode, configured as <code>stateless_http=False</code>.<br/><br/>For portable client integration, AWS documents using the official <code>mcp</code> package with <code>ClientSession</code>, <code>streamablehttp_client</code>, <code>session.initialize()</code>, and calls such as <code>session.list_tools()</code>. Remote runtime invocation can use a bearer token, and the <code>Accept</code> header must follow the MCP standard, for example <code>application/json</code> or <code>text/event-stream</code>, rather than an arbitrary streaming media type.<br/><br/>For more details, see <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html\">Host an MCP server in Amazon Bedrock AgentCore Runtime</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Stateful MCP handling matches the tool behavior, but the endpoint path does not match the AgentCore Runtime requirement for MCP server containers. Runtime expects the server to listen at 0.0.0.0:8000/mcp when configured with the MCP protocol.<br/>• <strong>B</strong>: ❌ The server mode and runtime listening path align with the stateful MCP requirement. However, AWS notes that any Accept header used for remote AgentCore Runtime invocation must follow the MCP standard, such as application/json or text/event-stream.<br/>• <strong>C</strong>: ❌ Stateless MCP is the documented default and is recommended for basic servers, but it is not appropriate for capabilities that require retained MCP session state. Reusing or receiving an Mcp-Session-Id helps continuity to the same runtime session, but it does not make stateless mode suitable for elicitation or progress notifications.<br/>• <strong>D</strong>: ✅ The tool requires retained MCP session state because it uses progress notifications and multi-turn elicitation, so stateful MCP handling is appropriate. AgentCore Runtime expects MCP server containers to listen on 0.0.0.0:8000/mcp, and the documented client pattern uses the official mcp package with a ClientSession.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An airline operations center's disruption-management AI team uses the Amazon Bedrock Converse API with Amazon Nova Pro to draft passenger rebooking explanations during irregular operations. Agents complain that full responses take too long, but the team must keep the same model and return partial text to the browser as soon as possible. Requests are interactive, not predictable enough for precomputed answers, and the team wants to benchmark first-token responsiveness and generation speed after deployment.</p><p>Which approach will best meet these requirements while preserving operational simplicity?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm độ trễ cảm nhận cho Nova Pro: giữ nguyên model, trả text từng phần cho browser, đo first-token và tốc độ sinh.</li><li>Ưu tiên: <strong>low latency</strong>, operational simplicity.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ConverseStream</strong> trả token ngay khi sinh ra; <strong>performanceConfig.latency = optimized</strong> giảm latency inference cho model hỗ trợ; metric TimeToFirstToken và InvocationLatency đúng với việc benchmark yêu cầu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vẫn synchronous nên người dùng phải chờ toàn bộ response, và không có TimeToFirstToken.</li><li><strong>B</strong>: ✅ Đúng — streaming + latency optimized + metric đúng.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — streaming được nhưng bỏ qua latency-optimized inference mà đề muốn nhanh nhất có thể.</li><li><strong>D</strong>: ❌ Sai — prompt caching giúp khi prefix lặp lớn, không phải cách chính cho first-token; thiếu TimeToFirstToken.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ConverseStream, performanceConfig.latency, TimeToFirstToken, InvocationLatency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'partial text sớm nhất' + 'benchmark first token' → nghĩ ngay đến <strong>ConverseStream</strong> + <strong>latency optimized</strong> + <strong>TimeToFirstToken</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 27,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>Keep the Converse calls synchronous, request performanceConfig.latency set to optimized, and monitor InvocationLatency and token counts in CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>Latency optimized inference can improve runtime latency for supported models, and Amazon Nova Pro is supported by the documented preview feature. However, synchronous Converse does not return partial text while the response is being generated, and it does not emit TimeToFirstToken for first-token benchmarking.</p>"
            },
            {
              "choice": "<p>Switch the client path to ConverseStream, request performanceConfig.latency set to optimized, and monitor TimeToFirstToken, InvocationLatency, and token counts in CloudWatch.</p>",
              "correct": true,
              "feedback": "<p>ConverseStream streams response chunks as they are generated, which improves perceived responsiveness for an interactive browser experience. Latency optimized inference is requested per invocation with performanceConfig.latency and does not require tuning or setup, while TimeToFirstToken is available for streaming traffic.</p>"
            },
            {
              "choice": "<p>Switch the client path to ConverseStream, use the default performanceConfig.latency route, and monitor TimeToFirstToken, InvocationLatency, and token counts in CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>ConverseStream would satisfy the partial-output requirement and provide the streaming metrics needed for first-token and generation-speed benchmarking. However, leaving the request on the default standard latency route misses the documented per-invocation latency optimization that is available for the same supported model.</p>"
            },
            {
              "choice": "<p>Switch the client path to ConverseStream, add prompt cache checkpoints to static instructions, and monitor InvocationLatency and cache token counts in CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>Prompt caching can reduce latency and input-token cost when a supported model reuses a static prompt prefix that meets checkpoint requirements. It does not replace requesting latency optimized inference, and monitoring only InvocationLatency and cache token counts does not directly benchmark TimeToFirstToken or output tokens per second.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 27,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an interactive assistant, the user experience often depends on <b>perceived latency</b>, not only total completion time. <code>ConverseStream</code> lets an application start rendering generated text before the full response is complete, and Amazon Bedrock emits <code>TimeToFirstToken</code> for streaming operations. The Bedrock runtime metrics documentation defines <code>InvocationLatency</code> as the time until the last token is received, so teams should track both first-token latency and full-response latency when benchmarking the experience. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html\">ConverseStream API Reference</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.html\">Monitor Amazon Bedrock runtime metrics</a>.<br/><br/><b>Latency Optimized Inference</b> is requested on individual runtime calls by setting <code>performanceConfig.latency</code> to <code>optimized</code>, with <code>standard</code> as the default route. It is a preview feature and currently supports a limited set of models, which includes Amazon Nova Pro, so it fits this scenario without model tuning or a separate deployment. If optimized capacity is unavailable, Bedrock attempts to serve the request with Standard latency, and the resolved latency configuration is observable in the response and logs. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/latency-optimized-inference.html\">Optimize latency for foundation models in Amazon Bedrock</a>.<br/><br/><b>Prompt caching</b> is useful when large static prompt prefixes are reused, but it is optional and depends on model support, cache checkpoints, and cache hit behavior. It can complement streaming and latency optimized inference, but it does not by itself satisfy the need to benchmark first-token responsiveness. For generation-speed benchmarking on streaming traffic, AWS documents output tokens per second as <code>OutputTokenCount / (InvocationLatency - TimeToFirstToken) * 1000</code>, which depends on <code>TimeToFirstToken</code>. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html\">Prompt caching for faster model inference</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-otps.html\">Monitor output tokens per second</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Latency optimized inference can improve runtime latency for supported models, and Amazon Nova Pro is supported by the documented preview feature. However, synchronous Converse does not return partial text while the response is being generated, and it does not emit TimeToFirstToken for first-token benchmarking.<br/>• <strong>B</strong>: ✅ ConverseStream streams response chunks as they are generated, which improves perceived responsiveness for an interactive browser experience. Latency optimized inference is requested per invocation with performanceConfig.latency and does not require tuning or setup, while TimeToFirstToken is available for streaming traffic.<br/>• <strong>C</strong>: ❌ ConverseStream would satisfy the partial-output requirement and provide the streaming metrics needed for first-token and generation-speed benchmarking. However, leaving the request on the default standard latency route misses the documented per-invocation latency optimization that is available for the same supported model.<br/>• <strong>D</strong>: ❌ Prompt caching can reduce latency and input-token cost when a supported model reuses a static prompt prefix that meets checkpoint requirements. It does not replace requesting latency optimized inference, and monitoring only InvocationLatency and cache token counts does not directly benchmark TimeToFirstToken or output tokens per second.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional court system's case-access technology team is building a generative AI assistant on Amazon Bedrock. The assistant answers questions from public court procedure documents by using an Amazon Bedrock Knowledge Base, and it uses an Amazon Bedrock agent for multi-step internal workflows that can call action groups. The compliance team requires user-facing evidence for generated answers and an auditable record of how each agent request selected knowledge bases, action groups, and follow-up steps. The solution must not depend on undocumented model confidence scores or assume that provider-internal reasoning is always available.</p><p>Which TWO actions should the team implement to meet these transparency requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Minh bạch cho trợ lý dùng Knowledge Base và Bedrock agent: bằng chứng cho người dùng cuối và <strong>audit trail</strong> các bước orchestration.</li><li>Ràng buộc: không dựa vào confidence score không có tài liệu hoặc reasoning nội bộ của model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Agent trace</strong> (enableTrace) ghi lại việc chọn KB, action group và các bước tiếp theo; <strong>citations</strong> của RetrieveAndGenerate cho người dùng thấy đoạn nguồn và vị trí hỗ trợ câu trả lời.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — trace là audit record của orchestration.</li><li><strong>B</strong>: ❌ Sai — Automated Reasoning kiểm tra tính hợp lệ logic theo policy, không phải bằng chứng minh bạch/citation cho từng câu trả lời.</li><li><strong>C</strong>: ❌ Sai — metric runtime (latency, invocation...) không phải confidence score.</li><li><strong>D</strong>: ❌ Sai — reasoningContent chỉ có ở một số model và không được thay thế citations hay trace.</li><li><strong>E</strong>: ✅ Đúng — citation spans + retrieved references cho phép kiểm chứng nguồn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>enableTrace, citations, retrieved references, audit trail</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'giải thích/kiểm toán agent' → <strong>trace</strong>; gặp 'bằng chứng cho câu trả lời RAG' → <strong>citations</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 28,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>Invoke the Bedrock agent with enableTrace set to true and persist trace events for audit review of orchestration steps and failures.</p>",
              "correct": true,
              "feedback": "<p>The InvokeAgent API supports request-controlled tracing by setting enableTrace to true. Agent traces provide visibility into orchestration, action group interactions, knowledge base activity, reasoning used for those steps, and failure reasons.</p>"
            },
            {
              "choice": "<p>Configure Guardrails Automated Reasoning checks to block invalid generations and evaluate retrieved Knowledge Base references before the response is returned.</p>",
              "correct": false,
              "feedback": "<p>Automated Reasoning checks operate as a validation layer that returns findings and feedback, not as a general-purpose blocking mechanism. Guardrails for Knowledge Bases are applied to the input and generated LLM response, not to retrieved references.</p>"
            },
            {
              "choice": "<p>Use AWS/Bedrock runtime metrics in CloudWatch as per-response confidence and uncertainty scores, and display them with generated answers.</p>",
              "correct": false,
              "feedback": "<p>The documented Bedrock runtime metrics in CloudWatch are operational metrics such as invocations, latency, errors, throttling, token counts, and prompt-cache metrics. They are not generic per-response model confidence, uncertainty, or faithfulness scores.</p>"
            },
            {
              "choice": "<p>Capture reasoningContent from supported Converse responses as supplemental debugging metadata and use reasoningText in place of citations and agent traces when present.</p>",
              "correct": false,
              "feedback": "<p>reasoningContent is available through supported Converse and ConverseStream content blocks, and providers can return redactedContent instead of visible reasoning text. It can be useful as supplemental metadata when available, but it cannot replace source citations for evidence or agent trace records for workflow auditability.</p>"
            },
            {
              "choice": "<p>Return the RetrieveAndGenerate citation spans and retrieved references with each answer so users can inspect supporting document content and locations.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Knowledge Bases can return generated responses with citations that associate answer spans with retrieved references. Those references can include source content, metadata, and document location information, which supports user-facing source attribution.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 28,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For transparent RAG answers, the most direct user-facing mechanism is <b>source attribution</b> from Amazon Bedrock Knowledge Bases. <code>RetrieveAndGenerate</code> can return citations that connect spans of generated text to retrieved references, including source content, metadata, and document location details, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve-generate.html\">test and use RetrieveAndGenerate with Amazon Bedrock Knowledge Bases</a>.<br/><br/>For agent workflows, transparency is a different concern: auditors need to understand the <i>orchestration path</i>, not just the final answer. Setting <code>enableTrace</code> on <code>InvokeAgent</code> allows the response stream to include trace information about agent steps, knowledge base queries, action group inputs and outputs, and failures, which aligns with <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html\">Amazon Bedrock agent trace events</a>.<br/><br/>CloudWatch is still important for operations, but the documented <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.html\">Amazon Bedrock runtime metrics</a> are not model confidence scores. Similarly, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html\">Automated Reasoning checks in Guardrails</a> return validation findings and have scope limits, while <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html\">reasoning content in the Converse API</a> can be useful only when supported and visible, not as a substitute for citations or agent traces.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ The InvokeAgent API supports request-controlled tracing by setting enableTrace to true. Agent traces provide visibility into orchestration, action group interactions, knowledge base activity, reasoning used for those steps, and failure reasons.<br/>• <strong>B</strong>: ❌ Automated Reasoning checks operate as a validation layer that returns findings and feedback, not as a general-purpose blocking mechanism. Guardrails for Knowledge Bases are applied to the input and generated LLM response, not to retrieved references.<br/>• <strong>C</strong>: ❌ The documented Bedrock runtime metrics in CloudWatch are operational metrics such as invocations, latency, errors, throttling, token counts, and prompt-cache metrics. They are not generic per-response model confidence, uncertainty, or faithfulness scores.<br/>• <strong>D</strong>: ❌ reasoningContent is available through supported Converse and ConverseStream content blocks, and providers can return redactedContent instead of visible reasoning text. It can be useful as supplemental metadata when available, but it cannot replace source citations for evidence or agent trace records for workflow auditability.<br/>• <strong>E</strong>: ✅ Amazon Bedrock Knowledge Bases can return generated responses with citations that associate answer spans with retrieved references. Those references can include source content, metadata, and document location information, which supports user-facing source attribution.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, E"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online brokerage's compliance engineering team uses a generative AI application to draft trade-surveillance case dispositions. Cases above a risk threshold must pause for up to 5 business days until a human reviewer approves or rejects the disposition. The reviewer portal runs in a separate AWS account, but it can call APIs in the workload account. The solution must resume the workflow after the decision, avoid custom polling workers, and keep callback completion within the workload account.</p><p>Which implementation will meet these requirements with the LEAST custom orchestration code?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Human-in-the-loop duyệt tối đa 5 ngày, workflow phải tự resume, <strong>không polling worker</strong>, callback hoàn tất trong workload account.</li><li>Ưu tiên: <strong>ít code orchestration nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Standard Step Functions</strong> hỗ trợ chạy tới 1 năm và có callback pattern (<strong>.waitForTaskToken</strong>): workflow dừng tới khi Lambda sau API Gateway gọi SendTaskSuccess/SendTaskFailure.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Express chỉ chạy tối đa 5 phút; Wait + Choice quanh DynamoDB là tự dựng polling.</li><li><strong>B</strong>: ✅ Đúng — callback Task state, không polling, ít code nhất.</li><li><strong>C</strong>: ❌ Sai — Bedrock human evaluation đánh giá chất lượng model, không phải approval workflow.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — activity task cần worker polling GetActivityTask, trái yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Standard workflow, waitForTaskToken, SendTaskSuccess, human approval</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'pause chờ người duyệt nhiều ngày, không polling' → nghĩ ngay đến <strong>Step Functions Standard</strong> + <strong>callback task token</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 29,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>Implement an Express Step Functions workflow with Wait and Choice states around a DynamoDB decision record. Send reviewer links to an API Gateway endpoint in the workload account that invokes Lambda to write the decision.</p>",
              "correct": false,
              "feedback": "<p>This uses valid Express Workflow states and a valid API-based decision path. However, Express Workflows are limited to 5 minutes, so they cannot support a review window of up to 5 business days.</p>"
            },
            {
              "choice": "<p>Implement a Standard Step Functions workflow with a callback Task state. Send reviewer links to an API Gateway endpoint in the workload account that invokes Lambda to call SendTaskSuccess or SendTaskFailure.</p>",
              "correct": true,
              "feedback": "<p>This uses the Step Functions callback pattern to pause the workflow until a human decision arrives. Keeping API Gateway, Lambda, and the Step Functions callback API call in the workload account satisfies the same-account task token requirement.</p>"
            },
            {
              "choice": "<p>Implement an Amazon Bedrock human model evaluation job with a work team. Store generated dispositions as a JSON Lines prompt dataset in S3 and use evaluator ratings as approvals.</p>",
              "correct": false,
              "feedback": "<p>Bedrock human evaluation jobs are for rating or comparing model responses, not for pausing and resuming an individual production workflow. They also require evaluation job inputs such as prompt datasets and work teams rather than acting as a transactional approval callback.</p>"
            },
            {
              "choice": "<p>Implement a Standard Step Functions workflow with an activity task. Use an activity worker in the workload account to obtain review tasks and call SendTaskSuccess after reviewer decisions.</p>",
              "correct": false,
              "feedback": "<p>A Standard Workflow can support the required duration, and activity tasks are a valid Step Functions integration pattern. However, this design adds a custom worker component, while the callback pattern lets the reviewer action resume the workflow through an API endpoint.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 29,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The best design is to use a <b>Standard Step Functions workflow</b> with a callback task that waits for a human decision. In Step Functions, the callback integration pattern uses <code>.waitForTaskToken</code>, and the workflow pauses until the token is returned with <code>SendTaskSuccess</code> or <code>SendTaskFailure</code>. AWS documents human approval as a primary use case for this pattern, and the task token must be returned by a principal in the same AWS account as the workflow, which is why the API endpoint and Lambda callback handler belong in the workload account.<br/><br/>The duration requirement matters. Standard Workflows can run for much longer review processes, while Express Workflows are limited to 5 minutes, which makes them unsuitable for a multi-day approval window. The callback output also remains subject to Step Functions payload limits, so production designs commonly keep large artifacts in durable storage and return only the decision metadata needed by the state machine.<br/><br/>Using an activity task can be made to work, but it shifts orchestration responsibility into custom worker logic. The callback pattern avoids that extra worker component because the reviewer action directly resumes the state machine through the Step Functions API. Amazon Bedrock human evaluation is useful for evaluating model quality with human workers, but it is not a per-case workflow approval mechanism for production transactions.<br/><br/>Relevant documentation: <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html\">Wait for a Callback with the Task Token</a>, <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/service-quotas.html\">AWS Step Functions quotas</a>, <a href=\"https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html\">SendTaskSuccess</a>, <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html\">Tutorial: Human approval project</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-type-human.html\">Model evaluation jobs that use human workers</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This uses valid Express Workflow states and a valid API-based decision path. However, Express Workflows are limited to 5 minutes, so they cannot support a review window of up to 5 business days.<br/>• <strong>B</strong>: ✅ This uses the Step Functions callback pattern to pause the workflow until a human decision arrives. Keeping API Gateway, Lambda, and the Step Functions callback API call in the workload account satisfies the same-account task token requirement.<br/>• <strong>C</strong>: ❌ Bedrock human evaluation jobs are for rating or comparing model responses, not for pausing and resuming an individual production workflow. They also require evaluation job inputs such as prompt datasets and work teams rather than acting as a transactional approval callback.<br/>• <strong>D</strong>: ❌ A Standard Workflow can support the required duration, and activity tasks are a valid Step Functions integration pattern. However, this design adds a custom worker component, while the callback pattern lets the reviewer action resume the workflow through an API endpoint.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime logistics firm's safety analytics team is building an Amazon Bedrock RAG assistant that answers questions from vessel maintenance manuals and incident procedures. The application uses a mix of knowledge base configurations, including managed knowledge bases, and must verify groundedness before returning answers to operations staff. The team wants to preserve source traceability and avoid treating retrieval metadata as a guaranteed factuality signal.</p><p>Which TWO implementation steps should the team take to reduce hallucinations while meeting these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm hallucination trong RAG với nhiều loại KB (có managed KB), kiểm tra <strong>groundedness</strong> trước khi trả lời.</li><li>Giữ source traceability, không coi retrieval metadata là bảo chứng factuality.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Với KB không managed, <strong>RetrieveAndGenerate</strong> cho citation gắn với span của response để so sánh và loại bỏ phần không được hỗ trợ; với managed KB dùng <strong>Retrieve</strong> rồi tự đánh giá chunk, relevance score và semantic similarity với câu trả lời.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kiểm tra span-reference và loại phần không có nguồn.</li><li><strong>B</strong>: ✅ Đúng — Retrieve + tự kiểm tra groundedness cho managed KB.</li><li><strong>C</strong>: ❌ Sai — chỉ cần có citation mà không so sánh span với reference thì không xác minh groundedness.</li><li><strong>D</strong>: ❌ Sai — session identifier không phải tín hiệu factuality.</li><li><strong>E</strong>: ❌ Sai — chunk top-ranked khớp query không chứng minh câu trả lời được sinh ra bám nguồn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>citations, response spans, Retrieve API, groundedness check</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'verify groundedness' → so sánh answer với <strong>retrieved content</strong>; metadata/score chỉ là gợi ý, không phải bằng chứng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 30,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>Use RetrieveAndGenerate for non-managed knowledge bases, inspect citations with generated response spans and retrieved references, and suppress unsupported answer segments.</p>",
              "correct": true,
              "feedback": "<p>This is correct because RetrieveAndGenerate can generate a response and return citations that connect response spans to retrieved source references. The citations provide structured grounding metadata that a verification layer can inspect before the application returns an answer.</p>"
            },
            {
              "choice": "<p>Use the Retrieve API for managed knowledge bases, evaluate returned chunks and relevance scores, and run semantic similarity checks against the retrieved content.</p>",
              "correct": true,
              "feedback": "<p>This is correct because the Retrieve API queries a knowledge base and returns retrievalResults that include content, location, metadata, and a relevance score. For managed knowledge bases, the RetrieveAndGenerate API reference directs developers to use AgenticRetrieveStream or Retrieve instead.</p>"
            },
            {
              "choice": "<p>Use RetrieveAndGenerate for non-managed knowledge bases, require at least one citation, and skip comparison between answer spans and retrieved references.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because citations are useful source traceability metadata, but their presence is not an automatic truth guarantee. A groundedness verification system should compare generated response parts with retrieved references rather than accepting any cited answer.</p>"
            },
            {
              "choice": "<p>Use RetrieveAndGenerate for managed knowledge bases, inspect output text and session identifiers, and approve answers when a session identifier is returned.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because RetrieveAndGenerate cannot be used with managed knowledge bases. A session identifier supports session continuity, but it does not verify that the generated answer is grounded in the retrieved sources.</p>"
            },
            {
              "choice": "<p>Use the Retrieve API for all knowledge bases, combine relevance scores with source metadata, and approve generated answers when top-ranked chunks match the query.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because KnowledgeBaseRetrievalResult.score is documented as the level of relevance of the result to the query, not as evidence that specific generated claims are supported. Relevance scores and metadata can help select candidate evidence, but the workflow still needs a groundedness comparison against the retrieved content.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 30,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Amazon Bedrock Knowledge Bases separates the mental model of <b>retrieval</b> from <b>generation</b>. The <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html\">Retrieve API</a> returns relevant source material in <code>retrievalResults</code>, while <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html\">RetrieveAndGenerate</a> retrieves context, invokes a foundation model or inference profile, and returns generated text with citations.<br/><br/>For managed knowledge bases, the documented caveat matters: <code>RetrieveAndGenerate</code> cannot be used, so a verification design must use <code>Retrieve</code> or <code>AgenticRetrieveStream</code> for those knowledge bases. The <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_KnowledgeBaseRetrievalResult.html?utm_source=openai\">KnowledgeBaseRetrievalResult</a> score should be handled as a <i>relevance</i> signal for retrieved chunks, not as a calibrated confidence score for factual correctness.<br/><br/>A robust hallucination-reduction pattern is to add an application verification layer that checks whether generated claims are supported by retrieved content. Citations from <code>RetrieveAndGenerate</code> can include generated response spans and retrieved references, which makes them valuable for source traceability and groundedness checks, but the application still needs to inspect the relationship between the answer and the source material before trusting the response.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This is correct because RetrieveAndGenerate can generate a response and return citations that connect response spans to retrieved source references. The citations provide structured grounding metadata that a verification layer can inspect before the application returns an answer.<br/>• <strong>B</strong>: ✅ This is correct because the Retrieve API queries a knowledge base and returns retrievalResults that include content, location, metadata, and a relevance score. For managed knowledge bases, the RetrieveAndGenerate API reference directs developers to use AgenticRetrieveStream or Retrieve instead.<br/>• <strong>C</strong>: ❌ This is incorrect because citations are useful source traceability metadata, but their presence is not an automatic truth guarantee. A groundedness verification system should compare generated response parts with retrieved references rather than accepting any cited answer.<br/>• <strong>D</strong>: ❌ This is incorrect because RetrieveAndGenerate cannot be used with managed knowledge bases. A session identifier supports session continuity, but it does not verify that the generated answer is grounded in the retrieved sources.<br/>• <strong>E</strong>: ❌ This is incorrect because KnowledgeBaseRetrievalResult.score is documented as the level of relevance of the result to the query, not as evidence that specific generated claims are supported. Relevance scores and metadata can help select candidate evidence, but the workflow still needs a groundedness comparison against the retrieved content.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, B"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A legal research publisher's editorial AI team runs a RAG assistant on Amazon Bedrock Knowledge Bases. The knowledge base is a custom knowledge base backed by a Pinecone vector store. After a large content migration, reviewers report that generated answers often cite paragraphs from the wrong jurisdiction. The team needs to determine whether the retrieval stage is returning poorly ranked chunks before changing prompts or generation settings. The team must keep the existing vector store during troubleshooting.</p><p>Which approach will MOST directly isolate the retrieval problem?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xác định retrieval có trả chunk xếp hạng kém không, trước khi đổi prompt/generation, giữ nguyên Pinecone.</li><li>Ưu tiên: cô lập lỗi ở <strong>tầng retrieval</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Retrieve</strong> trả thẳng retrievalResults (content, metadata, location, score) trên bộ prompt cố định, tách hẳn khỏi bước generation nên thấy ngay chunk sai jurisdiction và thứ hạng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — RetrieveAndGenerate trộn retrieval với generation; citations chỉ là phần chunk được dùng, chưa lộ ranking.</li><li><strong>B</strong>: ✅ Đúng — nhìn thẳng kết quả retrieval và score.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — filter che mất chunk sai nên không thấy vấn đề ranking gốc.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — đổi search type là thử giải pháp, chưa phải bước chẩn đoán trực tiếp (và custom KB có thể không hỗ trợ đầy đủ).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Retrieve API, retrievalResults, score, isolate retrieval</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'xem retrieval có tệ không' → gọi <strong>Retrieve</strong> (không phải RetrieveAndGenerate).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 31,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>Invoke the RetrieveAndGenerate operation and inspect the returned citations for each generated answer in the same fixed test prompt set.</p>",
              "correct": false,
              "feedback": "<p>RetrieveAndGenerate combines retrieval with model generation, so poor answers can come from retrieval quality, prompt behavior, or model synthesis. Citations are useful for traceability, but this path does not isolate the retrieval stage as directly as retrieving chunks and scores.</p>"
            },
            {
              "choice": "<p>Invoke the Retrieve operation with vectorSearchConfiguration and inspect retrievalResults content, metadata, location, and score for a fixed test prompt set.</p>",
              "correct": true,
              "feedback": "<p>Retrieve returns the source chunks without invoking a foundation model, so the team can evaluate retrieval ranking separately from generation behavior. The returned score, metadata, content, and location provide the evidence needed to diagnose whether the wrong jurisdiction is being retrieved or ranked too highly.</p>"
            },
            {
              "choice": "<p>Invoke the Retrieve operation with vectorSearchConfiguration metadata filters for jurisdiction and inspect only filtered chunks for the same prompt set.</p>",
              "correct": false,
              "feedback": "<p>Metadata filters can be useful when the application already knows the intended jurisdiction and wants to constrain retrieval. Applying a jurisdiction filter first would mask whether the unfiltered retrieval stage is ranking the wrong jurisdiction too highly after the migration.</p>"
            },
            {
              "choice": "<p>Invoke the Retrieve operation with overrideSearchType set to HYBRID and compare the returned chunks against semantic-only results for the same prompt set.</p>",
              "correct": false,
              "feedback": "<p>Hybrid search is documented for an Amazon OpenSearch Serverless vector store that contains a filterable text field. For other custom vector store configurations, such as the stated Pinecone-backed knowledge base, only semantic search is available.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 31,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>When troubleshooting a RAG system, separate <b>retrieval quality</b> from <b>generation quality</b> before changing prompts, models, or guardrails. Amazon Bedrock Knowledge Bases provides a <code>Retrieve</code> operation that returns source chunks or images as <code>retrievalResults</code>, including fields such as <code>content</code>, <code>metadata</code>, <code>location</code>, and <code>score</code>. AWS describes the score as a relevancy score that can be used to analyze result ranking, which makes it suitable for diagnosing whether migrated content is being embedded, filtered, or ranked incorrectly. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve.html\">Test a knowledge base using Retrieve</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-retrieval.html?utm_source=openai\">Retrieve data and generate AI responses with Knowledge Bases</a>.<br/><br/><code>RetrieveAndGenerate</code> is valuable for end-to-end validation because it performs retrieval and then invokes a model to produce a natural-language response with citations. However, that coupling makes it harder to determine whether the wrong jurisdiction came from retrieval ranking, prompt construction, or answer synthesis. For a custom knowledge base, retrieval tuning belongs under <code>vectorSearchConfiguration</code>. Also, <code>overrideSearchType</code> set to <code>HYBRID</code> is not generally available across all custom vector stores, AWS documents hybrid search only for an Amazon OpenSearch Serverless vector store that contains a filterable text field, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_KnowledgeBaseVectorSearchConfiguration.html\">KnowledgeBaseVectorSearchConfiguration</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ RetrieveAndGenerate combines retrieval with model generation, so poor answers can come from retrieval quality, prompt behavior, or model synthesis. Citations are useful for traceability, but this path does not isolate the retrieval stage as directly as retrieving chunks and scores.<br/>• <strong>B</strong>: ✅ Retrieve returns the source chunks without invoking a foundation model, so the team can evaluate retrieval ranking separately from generation behavior. The returned score, metadata, content, and location provide the evidence needed to diagnose whether the wrong jurisdiction is being retrieved or ranked too highly.<br/>• <strong>C</strong>: ❌ Metadata filters can be useful when the application already knows the intended jurisdiction and wants to constrain retrieval. Applying a jurisdiction filter first would mask whether the unfiltered retrieval stage is ranking the wrong jurisdiction too highly after the migration.<br/>• <strong>D</strong>: ❌ Hybrid search is documented for an Amazon OpenSearch Serverless vector store that contains a filterable text field. For other custom vector store configurations, such as the stated Pinecone-backed knowledge base, only semantic search is available.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A biomedical imaging software vendor's AI platform team is deploying a 70 GB open-weight LLM to a SageMaker real-time endpoint for interactive report drafting. The model artifact is stored in Amazon S3. Endpoint creation repeatedly fails before the model can serve traffic because downloading the artifact and passing the container startup health check take too long. The selected GPU instance configuration does not provide local instance storage large enough for the full model artifact. The team also wants a deployment pattern that is designed for LLM memory use, GPU utilization, and token processing capacity without building a custom serving stack.</p><p>Which deployment approach best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Deploy LLM 70 GB lên SageMaker real-time endpoint; endpoint fail do tải artifact và health check quá lâu, instance storage không đủ.</li><li>Cần pattern chuyên cho LLM, <strong>không tự xây serving stack</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>LMI container</strong> tối ưu cho LLM; <strong>ModelDataSource</strong> với S3 prefix không nén tải song song nhanh hơn tar.gz, và tăng VolumeSizeInGB, ModelDataDownloadTimeoutInSeconds, ContainerStartupHealthCheckTimeoutInSeconds giải quyết đúng hai nguyên nhân fail.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — LMI + uncompressed S3 + tăng volume/timeout.</li><li><strong>B</strong>: ❌ Sai — tar.gz 70 GB vẫn chậm, thêm instance hay client timeout không sửa lỗi lúc tạo endpoint.</li><li><strong>C</strong>: ❌ Sai — multi-model endpoint dành cho nhiều model nhỏ, không phải một LLM shard, và không đổi storage.</li><li><strong>D</strong>: ❌ Sai — custom container tải khi invoke đầu tiên là tự xây stack, vẫn dính timeout mặc định.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>LMI container, ModelDataSource, CompressionType None, VolumeSizeInGB, startup health check timeout</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'LLM lớn, endpoint creation timeout' → nghĩ ngay đến <strong>LMI</strong> + <strong>ModelDataSource</strong> + tăng timeout/volume.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 32,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>Deploy the model with a SageMaker LMI container. Reference the S3 prefix with `ModelDataSource` and `CompressionType` set to `None`; set `VolumeSizeInGB`, `ModelDataDownloadTimeoutInSeconds`, and `ContainerStartupHealthCheckTimeoutInSeconds` for the production variant.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the SageMaker Large Model Inference container family, which is specialized for LLM inference and related optimizations such as quantization, tensor parallelism, and continuous batching. It also addresses the documented startup constraints for large model artifacts by using uncompressed model deployment and configuring the production variant storage and timeout settings.</p>"
            },
            {
              "choice": "<p>Deploy the model with a standard SageMaker PyTorch inference container. Reference a `tar.gz` artifact with `ModelDataUrl`; increase endpoint instance count and set longer client-side read timeouts for invocations.</p>",
              "correct": false,
              "feedback": "<p>A standard inference container can host models, but it does not provide the SageMaker LMI container tooling that is designed specifically for LLM serving challenges. Increasing instance count and client timeouts does not solve failures that occur before the endpoint becomes healthy during model download and container startup.</p>"
            },
            {
              "choice": "<p>Deploy the model with a SageMaker multi-model endpoint. Store each shard as a separate S3 model artifact; rely on dynamic loading and leave the production variant storage settings unchanged.</p>",
              "correct": false,
              "feedback": "<p>Multi-model endpoints are useful for hosting multiple models on shared infrastructure, but this scenario is about reliably starting one very large LLM endpoint. Leaving the production variant storage and timeout settings unchanged does not address the model download and container health check failures.</p>"
            },
            {
              "choice": "<p>Deploy the model with a custom SageMaker inference container. Download the weights from S3 during the first invocation; keep the default model download and container startup settings for the endpoint.</p>",
              "correct": false,
              "feedback": "<p>Loading a very large model during the first request shifts the startup problem into the request path and is a poor fit for an interactive endpoint. Keeping the default download and startup settings also fails to address the documented timeout and storage considerations for large model artifacts.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 32,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>SageMaker Large Model Inference</b> is the best fit when the deployment challenge is specific to LLMs rather than ordinary model hosting. AWS describes LMI as specialized containers, libraries, and tooling for large model inference, including optimizations such as <i>quantization</i>, <i>tensor parallelism</i>, and <i>continuous batching</i>, as described in <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference.html\">Large Model Inference</a>.<br/><br/>For a 70 GB model, endpoint creation can fail before serving begins because SageMaker must obtain the model artifact and the container must become healthy. AWS documents the relevant LMI hosting controls for the endpoint production variant: <code>VolumeSizeInGB</code>, <code>ModelDataDownloadTimeoutInSeconds</code>, and <code>ContainerStartupHealthCheckTimeoutInSeconds</code>, with guidance to increase storage for models larger than 30 GB when the instance has no local disk and to increase the download timeout for models larger than 40 GB. For very large artifacts, AWS also recommends uncompressed model deployment by using <code>ModelDataSource</code> with an S3 data source, <code>CompressionType</code> set to <code>None</code>, and an S3 prefix, as covered in <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference-hosting.html\">Host large models for inference</a>.<br/><br/>The other approaches remain in the SageMaker hosting solution space, but they miss the LLM-specific failure mode. Generic containers, first-request lazy loading, or multi-model dynamic loading do not directly provide the LMI serving stack or the documented startup controls needed for a large artifact that must be ready before interactive traffic arrives.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses the SageMaker Large Model Inference container family, which is specialized for LLM inference and related optimizations such as quantization, tensor parallelism, and continuous batching. It also addresses the documented startup constraints for large model artifacts by using uncompressed model deployment and configuring the production variant storage and timeout settings.<br/>• <strong>B</strong>: ❌ A standard inference container can host models, but it does not provide the SageMaker LMI container tooling that is designed specifically for LLM serving challenges. Increasing instance count and client timeouts does not solve failures that occur before the endpoint becomes healthy during model download and container startup.<br/>• <strong>C</strong>: ❌ Multi-model endpoints are useful for hosting multiple models on shared infrastructure, but this scenario is about reliably starting one very large LLM endpoint. Leaving the production variant storage and timeout settings unchanged does not address the model download and container health check failures.<br/>• <strong>D</strong>: ❌ Loading a very large model during the first request shifts the startup problem into the request path and is a poor fit for an interactive endpoint. Keeping the default download and startup settings also fails to address the documented timeout and storage considerations for large model artifacts.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An auto insurance carrier's claims intelligence team is building a RAG application on Amazon Bedrock. The ingestion backlog includes photos of completed claim forms, PDF repair estimates with tables, recorded adjuster-customer calls, and CSV policy exports. The team must create structured artifacts in Amazon S3 for FM consumption, preserve table and layout context from documents, improve recognition of insurer-specific terms in calls, redact PII from call transcripts before indexing, and avoid maintaining custom OCR or ASR code. The team already has lightweight CSV normalization logic packaged in a Python container and wants to reuse it without building a Spark ETL pipeline.</p><p>Which workflow will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Pipeline ingest đa phương thức: ảnh form, PDF có bảng, audio cuộc gọi, CSV, đưa ra artifact có cấu trúc trong S3.</li><li>Cần giữ layout/table, nhận diện thuật ngữ riêng, redact PII, không tự viết OCR/ASR, tái dùng container Python cho CSV.</li><li>Ưu tiên: <strong>ít operational overhead nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Data Automation</strong> xử lý ảnh/PDF thành output có cấu trúc, <strong>Transcribe</strong> có custom vocabulary và PII redaction, và SageMaker Processing chạy lại đúng container sẵn có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — mỗi phần dùng managed service phù hợp, tái dùng container.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Glue Python job phải viết lại logic, không tái dùng container.</li><li><strong>C</strong>: ❌ Sai — Textract AnalyzeDocument không phải lựa chọn tổng quát cho ảnh/PDF đa dạng như BDA blueprints và tốn công ghép nối hơn.</li><li><strong>D</strong>: ❌ Sai — custom language model tốn công huấn luyện hơn custom vocabulary cho vài thuật ngữ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Data Automation, Transcribe custom vocabulary, PII redaction, SageMaker Processing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'tái dùng container, không Spark' → <strong>SageMaker Processing</strong>; 'thuật ngữ riêng trong audio' → <strong>custom vocabulary</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 33,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Data Automation blueprints for claim photos and PDF estimates, use Amazon Transcribe with custom vocabulary and PII redaction for calls, and run SageMaker Processing with the existing container for CSV policy extracts.</p>",
              "correct": true,
              "feedback": "<p>Bedrock Data Automation is designed to extract structured artifacts from documents and images for downstream GenAI workflows, including preserving useful document context. Amazon Transcribe custom vocabulary and PII redaction address the speech-specific requirements, while SageMaker Processing can run the existing containerized CSV normalization logic as a managed job.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Data Automation blueprints for claim photos and PDF estimates, use Amazon Transcribe with custom vocabulary and PII redaction for calls, and run an AWS Glue Python job for CSV policy extracts.</p>",
              "correct": false,
              "feedback": "<p>This workflow uses the right managed services for the document, image, and call inputs, and AWS Glue can process tabular data into S3. However, it adds an ETL service path for the CSV step instead of reusing the existing containerized normalization logic directly in a managed processing job.</p>"
            },
            {
              "choice": "<p>Use Amazon Textract AnalyzeDocument for claim photos and PDF estimates, use Amazon Transcribe with custom vocabulary and PII redaction for calls, and run SageMaker Processing with the existing container for CSV policy extracts.</p>",
              "correct": false,
              "feedback": "<p>Textract can extract text, forms, tables, and layout information from documents, so this is a plausible managed approach for the document inputs. However, the team would still need more post-processing to assemble FM-ready artifacts across claim photos and repair estimates than with Bedrock Data Automation blueprints.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock Data Automation blueprints for claim photos and PDF estimates, use Amazon Transcribe with a custom language model and PII redaction for calls, and run SageMaker Processing with the existing container for CSV policy extracts.</p>",
              "correct": false,
              "feedback": "<p>This workflow uses managed services for all modalities and can improve speech recognition, but a custom language model requires preparing suitable training data and managing a heavier customization lifecycle. For insurer-specific terms such as product names, acronyms, and claim terminology, a custom vocabulary usually meets the stated need with less operational overhead.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 33,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For multimodal ingestion, the lowest-overhead design usually routes each data type to the managed service that has the right native controls, then writes normalized artifacts to Amazon S3 for the RAG pipeline. <b>Amazon Bedrock Data Automation</b> uses blueprints to extract structured information from documents, images, audio, and video, and it can produce outputs such as JSON, HTML, markdown, and CSV for downstream generative AI workflows. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/bda.html\">Amazon Bedrock Data Automation</a>.<br/><br/><b>Amazon Transcribe</b> is the better fit for recorded calls when the workflow needs speech-specific controls with minimal customization. Custom vocabularies help recognition of domain terms, product names, and acronyms without the training lifecycle required by custom language models, and Transcribe can redact PII in transcripts before indexing. See <a href=\"https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html\">Custom vocabularies</a> and <a href=\"https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html\">Redacting PII in your batch job</a>.<br/><br/><b>Amazon Textract</b> remains a strong managed option for extracting text, forms, tables, and layout from documents, but using it directly often leaves the application team responsible for more document-specific assembly and normalization before FM consumption. Bedrock Data Automation is a higher-level fit when the goal is to create structured multimodal artifacts for generative AI ingestion rather than operate a document extraction pipeline one block at a time. See <a href=\"https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html\">AnalyzeDocument</a>.<br/><br/><b>SageMaker Processing</b> is appropriate for the tabular step because it can run a supplied processing container as a managed job and write curated outputs to S3. AWS Glue is also managed, but for this scenario it introduces an ETL job path when the team already has lightweight containerized normalization logic that can be reused directly. See <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html\">Process data</a> and <a href=\"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming.html\">Programming AWS Glue ETL scripts</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Bedrock Data Automation is designed to extract structured artifacts from documents and images for downstream GenAI workflows, including preserving useful document context. Amazon Transcribe custom vocabulary and PII redaction address the speech-specific requirements, while SageMaker Processing can run the existing containerized CSV normalization logic as a managed job.<br/>• <strong>B</strong>: ❌ This workflow uses the right managed services for the document, image, and call inputs, and AWS Glue can process tabular data into S3. However, it adds an ETL service path for the CSV step instead of reusing the existing containerized normalization logic directly in a managed processing job.<br/>• <strong>C</strong>: ❌ Textract can extract text, forms, tables, and layout information from documents, so this is a plausible managed approach for the document inputs. However, the team would still need more post-processing to assemble FM-ready artifacts across claim photos and repair estimates than with Bedrock Data Automation blueprints.<br/>• <strong>D</strong>: ❌ This workflow uses managed services for all modalities and can improve speech recognition, but a custom language model requires preparing suitable training data and managing a heavier customization lifecycle. For insurer-specific terms such as product names, acronyms, and claim terminology, a custom vocabulary usually meets the stated need with less operational overhead.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A European pharmaceutical manufacturer's lab automation team is building a generative AI assistant for researchers. Raw experiment records must be normalized inside the manufacturer's data center in Germany before any prompt is sent to Amazon Bedrock. Bedrock prompt processing may occur in AWS Regions within the EU geography, but not in Regions outside that geography. The data center has an AWS Outposts rack attached to a VPC with non-overlapping CIDR ranges, and the application does not require Provisioned Throughput. The design must avoid public internet paths for Bedrock API calls and must use supported routing between on-premises systems, the Outposts rack, and AWS services.</p><p>Which architecture will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tiền xử lý trên Outposts tại Đức, sau đó gọi Bedrock; xử lý chỉ trong EU, không đi public internet, dùng routing được hỗ trợ.</li><li>Ưu tiên: <strong>data residency</strong> và <strong>private connectivity</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Interface VPC endpoint</strong> cho Bedrock Runtime cho kết nối private; <strong>EU geographic inference profile</strong> giữ xử lý trong EU; local gateway định tuyến tới private IP của instance trong Outposts, còn instance gọi endpoint trong VPC.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — global inference profile có thể xử lý ngoài EU.</li><li><strong>B</strong>: ❌ Sai — NAT gateway đưa traffic qua đường internet, trái yêu cầu.</li><li><strong>C</strong>: ❌ Sai — LGW chỉ route tới instance private IP trong Outposts, không route tới endpoint ENI trong Region.</li><li><strong>D</strong>: ✅ Đúng — instance IP + interface endpoint + EU profile.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Outposts local gateway, interface VPC endpoint, geographic inference profile, EU</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'xử lý chỉ trong EU' → <strong>EU geographic inference profile</strong>, đừng chọn global.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>Run the preprocessing service on EC2 instances in an Outposts rack subnet. Use the rack local gateway with direct VPC routing to the instance private IPs, create a Bedrock Runtime interface VPC endpoint in the VPC, and invoke a global inference profile.</p>",
              "correct": false,
              "feedback": "<p>This design uses supported local gateway routing to the preprocessing instances and private VPC access to Bedrock. However, a global inference profile can route requests to supported commercial AWS Regions worldwide, which does not satisfy a requirement to keep Bedrock processing within the EU geography.</p>"
            },
            {
              "choice": "<p>Run the preprocessing service on EC2 instances in an Outposts rack subnet. Use the rack local gateway with direct VPC routing to the instance private IPs, route Bedrock Runtime API calls through a NAT gateway, and invoke an EU geographic inference profile.</p>",
              "correct": false,
              "feedback": "<p>This design uses a supported Outposts routing pattern and a valid Bedrock inference profile, but it sends Bedrock Runtime API traffic through a public service endpoint path. The scenario requires avoiding public internet paths for Bedrock API calls, so private access through an interface VPC endpoint is the better fit.</p>"
            },
            {
              "choice": "<p>Run the preprocessing service on EC2 instances in an Outposts rack subnet. Use the rack local gateway with direct VPC routing to the Bedrock endpoint ENI IPs, create a Bedrock Runtime interface VPC endpoint in the VPC, and invoke an EU geographic inference profile.</p>",
              "correct": false,
              "feedback": "<p>This design incorrectly depends on on-premises systems reaching the interface endpoint's requester-managed network interfaces through direct VPC routing. AWS documents that direct VPC routing for a local gateway is supported for instance network interfaces, not requester-managed interfaces such as VPC endpoint network interfaces.</p>"
            },
            {
              "choice": "<p>Run the preprocessing service on EC2 instances in an Outposts rack subnet. Use the rack local gateway with direct VPC routing to the instance private IPs, create a Bedrock Runtime interface VPC endpoint in the VPC, and invoke an EU geographic inference profile.</p>",
              "correct": true,
              "feedback": "<p>This design keeps the required preprocessing on the Outposts rack and uses direct VPC routing appropriately because the on-premises network reaches instance private IP addresses and the CIDRs do not overlap. The Bedrock Runtime interface endpoint provides private VPC access to Bedrock, and an EU geographic inference profile keeps cross-Region inference within the EU geography.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 34,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>AWS Outposts</b> is useful here because it places supported AWS infrastructure on the customer's premises for local processing and data residency needs, while still extending a VPC from an AWS Region to the Outpost. It is not an offline AWS Region, and it is designed to maintain a constant and consistent connection to its parent Region, as described in <a href=\"https://docs.aws.amazon.com/outposts/latest/network-userguide/what-is-outposts.html\">What is AWS Outposts?</a> and <a href=\"https://docs.aws.amazon.com/outposts/latest/network-userguide/how-outposts-works.html\">How AWS Outposts works</a>.<br/><br/>For an Outposts rack, the <b>local gateway</b> is the supported path for connectivity between the Outpost and the on-premises network. With <b>direct VPC routing</b>, on-premises systems can reach instance private IP addresses when CIDR ranges do not overlap, but they should not be designed to reach requester-managed network interfaces, such as VPC endpoint ENIs, through that route. This is why the preprocessing service should be the on-premises integration target, and the service can then call Bedrock privately from inside the VPC, as described in <a href=\"https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html\">Local gateways</a> and <a href=\"https://docs.aws.amazon.com/outposts/latest/network-userguide/routing.html\">Local gateway routing</a>.<br/><br/>Amazon Bedrock supports private access from a VPC by using <b>interface VPC endpoints</b> powered by AWS PrivateLink, including runtime endpoint services such as <code>bedrock-runtime</code>. That avoids requiring an internet gateway, NAT device, VPN connection, or Direct Connect connection for Bedrock API access from resources in the VPC, as documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html\">Use interface VPC endpoints with Amazon Bedrock</a>. Routing Bedrock Runtime calls through a NAT gateway can be a real connectivity pattern for public AWS service endpoints, but it does not meet a requirement to avoid public internet paths.<br/><br/>For the jurisdictional constraint, the important distinction is between <b>geographic</b> and <b>global</b> cross-Region inference profiles. A geographic profile such as an EU profile can route prompts and outputs outside the source Region but within the defined geography, whereas a global profile can route to supported commercial Regions worldwide and is inappropriate when processing must remain within a geography. Cross-Region inference is configured through inference profiles, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html\">Increase throughput with cross-Region inference</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/geographic-cross-region-inference.html\">Geography based cross-Region inference</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This design uses supported local gateway routing to the preprocessing instances and private VPC access to Bedrock. However, a global inference profile can route requests to supported commercial AWS Regions worldwide, which does not satisfy a requirement to keep Bedrock processing within the EU geography.<br/>• <strong>B</strong>: ❌ This design uses a supported Outposts routing pattern and a valid Bedrock inference profile, but it sends Bedrock Runtime API traffic through a public service endpoint path. The scenario requires avoiding public internet paths for Bedrock API calls, so private access through an interface VPC endpoint is the better fit.<br/>• <strong>C</strong>: ❌ This design incorrectly depends on on-premises systems reaching the interface endpoint's requester-managed network interfaces through direct VPC routing. AWS documents that direct VPC routing for a local gateway is supported for instance network interfaces, not requester-managed interfaces such as VPC endpoint network interfaces.<br/>• <strong>D</strong>: ✅ This design keeps the required preprocessing on the Outposts rack and uses direct VPC routing appropriately because the on-premises network reaches instance private IP addresses and the CIDRs do not overlap. The Bedrock Runtime interface endpoint provides private VPC access to Bedrock, and an EU geographic inference profile keeps cross-Region inference within the EU geography.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A university admissions office's AI platform team is standardizing retrieval access for several admissions assistants. The team uses Amazon Bedrock Managed Knowledge Bases as the retrieval source. Some assistants are MCP-compatible agents, while other assistants use Amazon Bedrock chat-style model integrations. The platform must provide a consistent retrieval tool interface, prevent application developers from passing knowledge base identifiers at runtime, and support both single-pass retrieval and multi-step retrieval for complex questions with minimal custom code.</p><p>Which implementation will best meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuẩn hóa truy cập retrieval cho Managed Knowledge Bases với cả MCP agent và chat-style integration.</li><li>Yêu cầu: tool interface nhất quán, developer <strong>không truyền KB id</strong> lúc runtime, hỗ trợ single-pass và multi-step retrieval, ít code.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AgentCore Gateway</strong> có target connector cho managed KB, bind sẵn KB và retrieval settings ở target, và cung cấp các tool Retrieve, <strong>AgenticRetrieveStream</strong> qua MCP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed connector, KB được bind ở target, hai kiểu retrieval.</li><li><strong>B</strong>: ❌ Sai — để model tự chạy retrieval, tool định nghĩa trong toolConfig không bind KB và không tạo interface MCP nhất quán.</li><li><strong>C</strong>: ❌ Sai — Lambda gateway tự code, chỉ single-pass Retrieve, guardrails không thay thế interface.</li><li><strong>D</strong>: ❌ Sai — RetrieveAndGenerate ép mọi request qua generation, không có multi-step retrieval và tốn code custom.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AgentCore Gateway, managed knowledge base connector, Retrieve, AgenticRetrieveStream</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'MCP tool interface cho KB, ít code' → nghĩ ngay đến <strong>AgentCore Gateway</strong> target.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock AgentCore Gateway target with the managed knowledge base connector, bind the managed knowledge base and retrieval settings to the target, and have clients invoke the target-prefixed Retrieve and AgenticRetrieveStream tools.</p>",
              "correct": true,
              "feedback": "<p>This is correct because the AgentCore Gateway managed knowledge base connector exposes MCP tools for Retrieve and AgenticRetrieveStream. The managed knowledge base identifier and retrieval settings are bound to the Gateway target, so clients do not normally pass the knowledge base ID at runtime.</p>"
            },
            {
              "choice": "<p>Create Converse API tool definitions for the retrieval operations, mirror the MCP-visible tool names in toolConfig, and have the model execute the retrieval calls directly.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because the common Bedrock tool-use pattern has the model request tool use, while application code executes the tool and returns a toolResult. Converse tool names also have documented length and character constraints, so directly mirroring MCP-visible names can create schema compatibility issues.</p>"
            },
            {
              "choice": "<p>Create a Lambda-backed MCP gateway that calls Retrieve for every query, bind the managed knowledge base mapping in Lambda configuration, and rely on knowledge base guardrails for retrieved references.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because Retrieve is a single retrieval API and does not provide the multi-step agentic retrieval behavior required for complex questions. Knowledge base guardrails apply to the input and generated response, but they do not filter retrieved references at runtime.</p>"
            },
            {
              "choice": "<p>Create a custom MCP server that wraps RetrieveAndGenerate, bind the managed knowledge base mapping in server configuration, and route every request through one retrieval-and-generation operation.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because RetrieveAndGenerate combines retrieval with model invocation and citations instead of exposing separate tools for source retrieval and agentic multi-step retrieval. A custom wrapper also adds maintenance and session-handling logic, including reusing the service-generated session ID for later turns.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 35,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock AgentCore Gateway</b> provides MCP-based tool discovery and invocation, which fits a platform requirement for a consistent retrieval interface across multiple agent implementations. For managed knowledge bases, the managed knowledge base connector exposes <code>Retrieve</code> and <code>AgenticRetrieveStream</code>, so clients can use a single-pass retrieval tool or a multi-step agentic retrieval tool without each application team building its own wrapper. See <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-using.html\">Use AgentCore Gateway</a> and <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-target-connector-managed-kb.html\">Managed Knowledge Base connector</a>.<br/><br/>The key design advantage is that the <b>Gateway target</b> binds the managed knowledge base identifier and retrieval configuration. By default, clients send only the exposed tool inputs, such as <code>messages</code> for <code>AgenticRetrieveStream</code> or <code>retrievalQuery.text</code> for <code>Retrieve</code>, unless an administrator exposes additional parameters with <code>parameterOverrides</code>. MCP-visible tool names are target-prefixed, for example <code>${target_name}___${tool_name}</code>, so application code must account for the Gateway naming convention described in <a href=\"https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-tool-naming.html\">AgentCore Gateway tool naming</a>.<br/><br/><code>RetrieveAndGenerate</code> is a Bedrock Knowledge Bases API for RAG flows that combines retrieval, model invocation, and citations, but it is not the same abstraction as exposing both <code>Retrieve</code> and <code>AgenticRetrieveStream</code> through the managed knowledge base Gateway connector. Its sessions are generated by Amazon Bedrock on the first request, and clients reuse the returned <code>sessionId</code> for later turns rather than explicitly setting it up front. The Knowledge Bases retrieval overview distinguishes <code>Retrieve</code>, <code>RetrieveAndGenerate</code>, <code>GenerateQuery</code>, and <code>AgenticRetrieveStream</code>, so choosing the API boundary matters for a standardized integration. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-retrieval.html\">Retrieve data and generate responses from Knowledge Bases</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html\">RetrieveAndGenerate API reference</a>.<br/><br/>For Bedrock chat-style integrations, the <b>Converse API</b> can define tools through <code>toolConfig</code> for models that support messages, but the common tool-use pattern still requires application code to execute the requested tool and return a <code>toolResult</code>. Converse tool specifications require a valid <code>name</code> and <code>inputSchema</code>, and the name must follow the documented constraints, which can make direct reuse of arbitrary MCP-visible names risky. Also, Knowledge Base guardrails do not filter retrieved references at runtime, so a design that depends on guardrails to sanitize retrieved chunks does not satisfy a retrieval-interface control requirement. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html\">Tool use with Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ToolSpecification.html\">ToolSpecification API reference</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This is correct because the AgentCore Gateway managed knowledge base connector exposes MCP tools for Retrieve and AgenticRetrieveStream. The managed knowledge base identifier and retrieval settings are bound to the Gateway target, so clients do not normally pass the knowledge base ID at runtime.<br/>• <strong>B</strong>: ❌ This is incorrect because the common Bedrock tool-use pattern has the model request tool use, while application code executes the tool and returns a toolResult. Converse tool names also have documented length and character constraints, so directly mirroring MCP-visible names can create schema compatibility issues.<br/>• <strong>C</strong>: ❌ This is incorrect because Retrieve is a single retrieval API and does not provide the multi-step agentic retrieval behavior required for complex questions. Knowledge base guardrails apply to the input and generated response, but they do not filter retrieved references at runtime.<br/>• <strong>D</strong>: ❌ This is incorrect because RetrieveAndGenerate combines retrieval with model invocation and citations instead of exposing separate tools for source retrieval and agentic multi-step retrieval. A custom wrapper also adds maintenance and session-handling logic, including reusing the service-generated session ID for later turns.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical device manufacturer's AI governance office already uses AWS Audit Manager for internal control evidence. The office is standardizing oversight for several FM applications that use Amazon Bedrock and Amazon SageMaker AI. The governance program must align with responsible AI principles, support automated and manually collected evidence, and avoid treating the assessment results as a formal compliance certification.</p><p>Which approach will meet these requirements with the LEAST custom governance implementation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Governance AI theo responsible AI trên Bedrock và SageMaker AI, dùng Audit Manager sẵn có.</li><li>Cần evidence tự động và thủ công, không coi kết quả là chứng nhận compliance chính thức.</li><li>Ưu tiên: <strong>ít công custom nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng framework dựng sẵn AWS <strong>Generative AI Best Practices Framework v2</strong> trong Audit Manager (phiên bản hiện hành), thu automated evidence khi hỗ trợ và đính manual evidence cho control thủ tục.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Guardrails là control kỹ thuật, blocked responses không đủ làm bằng chứng governance.</li><li><strong>B</strong>: ❌ Sai — framework custom và định nghĩa control thủ công là nhiều công sức nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — v1 là bản cũ hơn, v2 mới và bao phủ Bedrock cùng SageMaker AI tốt hơn.</li><li><strong>D</strong>: ✅ Đúng — framework dựng sẵn bản v2, kết hợp evidence tự động và thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Audit Manager, Generative AI Best Practices Framework v2, automated + manual evidence</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'governance AI + Audit Manager, ít custom' → dùng <strong>prebuilt GenAI framework</strong> (bản mới nhất), không tự dựng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 36,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>Create Amazon Bedrock Guardrails for each application, collect intervention results during inference, and use blocked responses as the primary governance evidence.</p>",
              "correct": false,
              "feedback": "<p>Guardrails can evaluate user inputs and model responses, but they are runtime safety controls rather than an organizational assessment framework. This approach does not provide the broader control sets, manual evidence support, or SageMaker AI evidence coverage required by the governance office.</p>"
            },
            {
              "choice": "<p>Create a custom AWS Audit Manager framework, define all responsible AI controls manually, and use application logs as the primary source for evidence collection.</p>",
              "correct": false,
              "feedback": "<p>A custom framework can be valid when no managed framework fits, but it creates more governance implementation work than required here. It also requires the team to recreate controls that are already available in the AWS-managed generative AI framework.</p>"
            },
            {
              "choice": "<p>Create an AWS Audit Manager assessment from the AWS Generative AI Best Practices Framework v1, collect automated evidence where supported, and attach manual evidence for procedural controls.</p>",
              "correct": false,
              "feedback": "<p>The earlier framework version is no longer supported for creating new assessments. Choosing it would not meet the requirement to standardize new governance assessments for current FM implementations.</p>"
            },
            {
              "choice": "<p>Create an AWS Audit Manager assessment from the AWS Generative AI Best Practices Framework v2, collect automated evidence where supported, and attach manual evidence for procedural controls.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the AWS-managed generative AI framework that supports evidence collection for Amazon Bedrock and Amazon SageMaker AI. It also accounts for the fact that some procedural controls require manual evidence and that the framework is not a compliance certification.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 36,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>AWS Audit Manager</b> can be used by existing customers to organize assessment evidence against a control framework, and AWS provides an <a href=\"https://docs.aws.amazon.com/audit-manager/latest/userguide/aws-generative-ai-best-practices.html\">AWS Generative AI Best Practices Framework</a> for generative AI workloads. The current v2 framework supports evidence collection for <b>Amazon Bedrock</b> and <b>Amazon SageMaker AI</b>, and it includes both automated and manual controls across responsible AI principles such as Responsible, Safe, Fair, Privacy, Accuracy, and Secure.<br/><br/>The important governance nuance is that the framework is an oversight and evidence collection tool, not a guarantee of regulatory compliance or audit success. Some controls are procedural and require manual evidence collection, so a mature governance implementation should combine automated evidence with uploaded or attached evidence for human review processes, policy approvals, and other nontechnical controls.<br/><br/><b>Amazon Bedrock Guardrails</b> remain important runtime safeguards, because they can evaluate both inputs and model responses and intervene based on configured filters, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-how.html\">How guardrails work</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-components.html\">Guardrail components</a>. However, guardrails are not a substitute for an organizational governance system because they do not by themselves provide a comprehensive assessment framework, manual control evidence, or coverage for all FM implementation governance obligations.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Guardrails can evaluate user inputs and model responses, but they are runtime safety controls rather than an organizational assessment framework. This approach does not provide the broader control sets, manual evidence support, or SageMaker AI evidence coverage required by the governance office.<br/>• <strong>B</strong>: ❌ A custom framework can be valid when no managed framework fits, but it creates more governance implementation work than required here. It also requires the team to recreate controls that are already available in the AWS-managed generative AI framework.<br/>• <strong>C</strong>: ❌ The earlier framework version is no longer supported for creating new assessments. Choosing it would not meet the requirement to standardize new governance assessments for current FM implementations.<br/>• <strong>D</strong>: ✅ This approach uses the AWS-managed generative AI framework that supports evidence collection for Amazon Bedrock and Amazon SageMaker AI. It also accounts for the fact that some procedural controls require manual evidence and that the framework is not a compliance certification.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A professional sports league's fan engagement AI team runs a public chatbot on Amazon Bedrock by calling the InvokeModel API directly from a backend service. The service builds each prompt from fixed system instructions, retrieved league policy content, and a free-form fan question. Recent red-team tests show attempts to override the system instructions, reveal hidden prompt text, and bypass safety behavior. The team wants runtime defenses that use managed Bedrock capabilities where possible and that block adversarial user input before it reaches the model.</p><p>Which combination of steps will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chatbot công khai gọi InvokeModel trực tiếp, bị tấn công override system prompt, lộ prompt, bypass safety.</li><li>Cần runtime defense dùng managed Bedrock, <strong>chặn input độc hại</strong> trước khi tới model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Với InvokeModel phải gắn guardrail id/version vào request và bọc input người dùng trong <strong>guardContent</strong>; guardrail cần cấu hình <strong>PROMPT_ATTACK</strong> filter với <strong>inputAction = BLOCK</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — guardrail được áp dụng, guardContent đánh dấu phần user input cần đánh giá.</li><li><strong>B</strong>: ❌ Sai — redact PII không ngăn jailbreak.</li><li><strong>C</strong>: ❌ Sai — test lúc release hữu ích nhưng production prompt không có guardContent nên không được bảo vệ runtime.</li><li><strong>D</strong>: ✅ Đúng — PROMPT_ATTACK filter chặn prompt injection ở input.</li><li><strong>E</strong>: ❌ Sai — denied topics/word filters không phải bộ phân loại prompt injection.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>guardContent, PROMPT_ATTACK, inputAction BLOCK, InvokeModel guardrail</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'jailbreak/prompt injection' → <strong>Guardrails Prompt Attack filter</strong>; với InvokeModel nhớ <strong>guardContent</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 37,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>Specify the configured guardrail identifier and version on each InvokeModel request, and wrap the fan question in Bedrock guardContent input tags.</p>",
              "correct": true,
              "feedback": "<p>The backend must apply the configured guardrail to the runtime request, such as by specifying the guardrail identifier and guardrail version. For InvokeModel and InvokeModelWithResponseStream, Bedrock also requires guardContent tags around user input for prompt attack filtering to apply.</p>"
            },
            {
              "choice": "<p>Redact PII from the fan question with Amazon Comprehend, and rely on the redacted prompt to prevent jailbreak behavior.</p>",
              "correct": false,
              "feedback": "<p>PII redaction is useful for privacy controls and input sanitization, but it does not classify prompt injection, jailbreak, or prompt leakage attempts. It may be part of a broader defense-in-depth design, but it does not satisfy the runtime adversarial input detection requirement by itself.</p>"
            },
            {
              "choice": "<p>Run adversarial prompt test cases in Step Functions during release validation, and send production prompts without guardContent tags.</p>",
              "correct": false,
              "feedback": "<p>Automated adversarial testing is valuable for finding regressions before deployment, but it is not a runtime blocking control for live traffic. Sending InvokeModel requests without guardContent tags prevents prompt attack filtering from being applied to the user input in this use case.</p>"
            },
            {
              "choice": "<p>Configure the stored guardrail content policy with a Standard tier PROMPT_ATTACK filter, set an appropriate inputStrength, and set inputAction to BLOCK.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Guardrails supports prompt attack detection for jailbreaks, prompt injection, and prompt leakage through a content policy filter of type PROMPT_ATTACK. Because detecting attempts to reveal hidden prompt text maps to prompt leakage, the prompt attack filter must use the Standard tier, and inputAction BLOCK blocks matching user input.</p>"
            },
            {
              "choice": "<p>Configure denied topics and word filters in the guardrail, and rely on those filters to classify prompt injection attempts.</p>",
              "correct": false,
              "feedback": "<p>Denied topics and word filters can help enforce content policies, but they are not the documented prompt attack detection mechanism. Prompt injection and jailbreak detection require the prompt attack filter rather than relying only on keyword or topic rules.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 37,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Amazon Bedrock treats <b>prompt injection prevention</b> as a shared application responsibility. Managed guardrails help, but the application still needs to validate and sanitize inputs, apply secure coding practices, and test adversarial cases as part of the overall design, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-injection.html\">Prompt injection prevention</a>.<br/><br/>For this scenario, the most direct managed runtime control is an Amazon Bedrock Guardrails content policy filter with <code>type: \"PROMPT_ATTACK\"</code>. The documented prompt attack categories are <b>Jailbreaks</b>, <b>Prompt Injection</b>, and <b>Prompt Leakage</b>, with prompt leakage detection supported in the <b>Standard</b> tier. Stored guardrails let you configure input filtering strength and an action such as <code>BLOCK</code>, and the strength setting controls which confidence classifications are filtered rather than representing the model's confidence score itself.<br/><br/>The subtle operational requirement is that the application uses <code>InvokeModel</code> directly. The configured guardrail must be applied to the runtime request, for example by specifying the guardrail identifier and guardrail version, and the user-controlled portion must be marked with tags such as <code>&lt;amazon-bedrock-guardrails-guardContent_xyz&gt;</code>. If the backend sends the assembled prompt without these tags, Bedrock does not apply prompt attack filtering for those user-input portions in this use case, even if the guardrail exists. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-prompt-attack.html\">Detect and filter prompt attacks with Amazon Bedrock Guardrails</a> for the supported attack types and tagging requirement.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ The backend must apply the configured guardrail to the runtime request, such as by specifying the guardrail identifier and guardrail version. For InvokeModel and InvokeModelWithResponseStream, Bedrock also requires guardContent tags around user input for prompt attack filtering to apply.<br/>• <strong>B</strong>: ❌ PII redaction is useful for privacy controls and input sanitization, but it does not classify prompt injection, jailbreak, or prompt leakage attempts. It may be part of a broader defense-in-depth design, but it does not satisfy the runtime adversarial input detection requirement by itself.<br/>• <strong>C</strong>: ❌ Automated adversarial testing is valuable for finding regressions before deployment, but it is not a runtime blocking control for live traffic. Sending InvokeModel requests without guardContent tags prevents prompt attack filtering from being applied to the user input in this use case.<br/>• <strong>D</strong>: ✅ Amazon Bedrock Guardrails supports prompt attack detection for jailbreaks, prompt injection, and prompt leakage through a content policy filter of type PROMPT_ATTACK. Because detecting attempts to reveal hidden prompt text maps to prompt leakage, the prompt attack filter must use the Standard tier, and inputAction BLOCK blocks matching user input.<br/>• <strong>E</strong>: ❌ Denied topics and word filters can help enforce content policies, but they are not the documented prompt attack detection mechanism. Prompt injection and jailbreak detection require the prompt attack filter rather than relying only on keyword or topic rules.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, D"
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A precision agriculture equipment manufacturer’s connected-equipment AI team is choosing Amazon Bedrock foundation models for a field-support assistant. The assistant must answer text questions, stream responses to mobile clients, call application tools when needed, run in approved production Regions, and avoid models that could create near-term migration risk. Executives want a defensible selection process that weighs business quality, operational fit, and cost instead of relying only on public benchmark rankings.</p><p>Which TWO actions should the team take to select foundation models that best align with these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chọn FM cho assistant cần text, streaming, tool use, Region được phê duyệt, tránh model sắp deprecate.</li><li>Quy trình chọn phải cân bằng chất lượng nghiệp vụ, tính phù hợp vận hành và chi phí, <strong>không chỉ benchmark công khai</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần cả hai nhánh: <strong>candidate matrix</strong> từ docs/discovery API (modality, API, Region, lifecycle) để loại model không phù hợp, rồi <strong>evaluation jobs</strong> trên dữ liệu thật kèm latency, throughput và giá cho shortlist.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ListFoundationModels chỉ là một nguồn, không đo chất lượng nghiệp vụ.</li><li><strong>B</strong>: ✅ Đúng — đo chất lượng bằng dữ liệu đại diện và cân với vận hành, chi phí.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ ưu tiên nhanh/rẻ, thiếu chất lượng nghiệp vụ.</li><li><strong>D</strong>: ❌ Sai — dựa benchmark công khai và chọn giá thấp nhất là điều đề muốn tránh.</li><li><strong>E</strong>: ✅ Đúng — loại sớm model không đủ năng lực, không sẵn Region, hoặc sắp hết vòng đời.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>evaluation jobs, candidate matrix, lifecycle status, Region availability</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'chọn FM có cơ sở' → lọc bằng <strong>năng lực/lifecycle</strong>, rồi đánh giá bằng <strong>dữ liệu thật</strong>, không chỉ benchmark.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 38,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>Use ListFoundationModels as the only selection source, then rank candidates by context window, service tier, quotas, and model-specific inference parameters.</p>",
              "correct": false,
              "feedback": "<p>ListFoundationModels is useful for programmatic discovery, but it does not return every selection criterion, such as all catalog details, quotas, service tiers, context windows, or full parameter guidance. Treating it as the only source would miss important compatibility and operating constraints.</p>"
            },
            {
              "choice": "<p>Run Bedrock evaluation jobs on representative prompt datasets, then compare evaluation results with measured latency, throughput needs, and pricing for the shortlisted models.</p>",
              "correct": true,
              "feedback": "<p>Bedrock evaluations provide a structured way to compare candidate models using automatic, human, or judge-based evaluation methods. Combining those quality results with operational measurements and pricing supports a balanced business and technical decision.</p>"
            },
            {
              "choice": "<p>Run a latency and token-cost bakeoff by using Converse-compatible prompts for models with tool use, then prioritize the fastest acceptable response profile.</p>",
              "correct": false,
              "feedback": "<p>Using a common Converse-based test can make part of the comparison more consistent for models that support it, and latency and token cost are valid considerations. However, this approach does not fully evaluate workload quality, approved Region availability, lifecycle risk, inference type fit, or model-specific request behavior.</p>"
            },
            {
              "choice": "<p>Use public benchmark results and Bedrock model cards to seed a shortlist, then choose the lowest priced model that supports text output and streaming.</p>",
              "correct": false,
              "feedback": "<p>Public benchmarks and model cards can help create an initial shortlist, but choosing mainly on price and basic response capability skips workload-specific quality validation. This approach can also miss tool-use support, approved Region constraints, lifecycle status, and throughput requirements that affect production fit.</p>"
            },
            {
              "choice": "<p>Build a candidate matrix from Bedrock model documentation and discovery APIs that compares modalities, API support, Region availability, inference types, and lifecycle status.</p>",
              "correct": true,
              "feedback": "<p>Bedrock model selection requires checking more than general quality rankings, including modalities, endpoints and APIs, Region availability, inference support, and lifecycle state. The discovery APIs help programmatically shortlist models, while the model catalog provides details that the API response does not include.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 38,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For professional model selection, the mental model is that a foundation model is both an <b>AI capability</b> and an <b>operational dependency</b>. The Amazon Bedrock model information should be reviewed for capabilities such as modalities, context window, tool use, supported APIs and endpoints, Region availability, cost and throughput options, and lifecycle information, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/models.html\">Foundation models in Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards.html\">Models at a glance</a>.<br/><br/><code>ListFoundationModels</code> and <code>GetFoundationModel</code> are useful for automation, especially for fields such as model ID, provider, modalities, streaming support, supported customization types, inference types, and <code>modelLifecycle</code>. However, <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListFoundationModels.html\">ListFoundationModels</a> is not a complete substitute for the catalog and model documentation, so a robust process combines API discovery with documented model-card review.<br/><br/>Lifecycle status matters because Bedrock model versions can be Active, Legacy, or End-of-Life, and EOL requests fail unless there is a private provider arrangement. Reviewing <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html\">Model lifecycle</a> helps avoid choosing a model that creates preventable migration risk.<br/><br/>After shortlisting, the team should use representative tasks and Bedrock evaluation capabilities to measure quality instead of assuming a public benchmark generalizes to the field-support workload. <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html\">Model evaluation</a> supports automatic, human-worker, and judge-model approaches, including built-in judge metrics such as <code>Builtin.Correctness</code>, <code>Builtin.Completeness</code>, <code>Builtin.Faithfulness</code>, <code>Builtin.Helpfulness</code>, and <code>Builtin.Relevance</code>. The final decision should also consider model-specific request parameters from <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html\">Inference request parameters and response fields for foundation models</a>, because request formats and supported parameters vary across models.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ ListFoundationModels is useful for programmatic discovery, but it does not return every selection criterion, such as all catalog details, quotas, service tiers, context windows, or full parameter guidance. Treating it as the only source would miss important compatibility and operating constraints.<br/>• <strong>B</strong>: ✅ Bedrock evaluations provide a structured way to compare candidate models using automatic, human, or judge-based evaluation methods. Combining those quality results with operational measurements and pricing supports a balanced business and technical decision.<br/>• <strong>C</strong>: ❌ Using a common Converse-based test can make part of the comparison more consistent for models that support it, and latency and token cost are valid considerations. However, this approach does not fully evaluate workload quality, approved Region availability, lifecycle risk, inference type fit, or model-specific request behavior.<br/>• <strong>D</strong>: ❌ Public benchmarks and model cards can help create an initial shortlist, but choosing mainly on price and basic response capability skips workload-specific quality validation. This approach can also miss tool-use support, approved Region constraints, lifecycle status, and throughput requirements that affect production fit.<br/>• <strong>E</strong>: ✅ Bedrock model selection requires checking more than general quality rankings, including modalities, endpoints and APIs, Region availability, inference support, and lifecycle state. The discovery APIs help programmatically shortlist models, while the model catalog provides details that the API response does not include.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, E"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime logistics firm's operations AI team runs an Amazon Bedrock assistant by using the Converse API through the bedrock-runtime endpoint. Each request contains small structured inputs and asks the model to return one of three short JSON decisions. During port congestion events, the workload receives token-based throttling even though most completed responses contain fewer than 150 tokens. The application sets maxTokens to 4,096 on every request to avoid truncation. The team must improve completed requests per minute while continuing to use the same model, the same Converse API integration, and on-demand throughput.</p><p>Which action will MOST directly improve throughput under these constraints?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bị token-based throttling dù response thực tế dưới 150 token, vì <strong>maxTokens</strong> luôn 4,096.</li><li>Cần tăng completed requests/phút, giữ nguyên model, Converse API và on-demand.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Quota token trừ theo lượng ước tính gồm <strong>maxTokens</strong>, nên đặt ceiling sát đầu ra thực tế (JSON ngắn) và cắt bớt context thừa giúp mỗi request tốn ít quota hơn, nhờ đó chạy được nhiều request hơn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — thêm concurrency khi đã throttle chỉ làm nặng hơn, backoff không giảm quota tiêu thụ.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — cross-Region có thể tăng capacity nhưng vẫn lãng phí với 4,096 token ceiling.</li><li><strong>C</strong>: ✅ Đúng — giảm lượng quota bị giữ cho mỗi request.</li><li><strong>D</strong>: ❌ Sai — streaming đổi cách trả kết quả, không thay đổi quota token.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>maxTokens, token quota, throttling, trim prompt context</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'throttle token-based, output ngắn' → hạ <strong>maxTokens</strong> sát thực tế và rút gọn prompt.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 39,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>Increase client-side concurrency for the Converse calls, and retry throttled requests with exponential backoff.</p>",
              "correct": false,
              "feedback": "<p>Retries with backoff are useful for resiliency when throttling occurs. Increasing concurrency can increase simultaneous token reservations and can make token-based throttling worse rather than improving sustained throughput.</p>"
            },
            {
              "choice": "<p>Use a cross-Region inference profile for the Converse calls, and keep the 4,096-token ceiling for every request.</p>",
              "correct": false,
              "feedback": "<p>Cross-Region inference can help supported on-demand traffic use model capacity across multiple Regions. It does not directly reduce the excessive token reservation created by the oversized maxTokens setting on each request.</p>"
            },
            {
              "choice": "<p>Set task-specific maxTokens ceilings for the short JSON responses, and trim oversized prompt context before invocation.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Amazon Bedrock reserves token quota when the request starts by considering the input tokens plus the configured max_tokens value. A large maxTokens setting can reduce admitted throughput even when the model usually generates short responses.</p>"
            },
            {
              "choice": "<p>Enable response streaming for the existing Converse calls, and keep the 4,096-token ceiling for every request.</p>",
              "correct": false,
              "feedback": "<p>Streaming can improve perceived responsiveness because users can receive output earlier. It does not remove the initial token quota reservation pressure caused by an unnecessarily high maxTokens value.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 39,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For Amazon Bedrock token quota management, do not reason only from the number of tokens that the model actually generated. Bedrock reserves quota at the start of a request based on the request's input tokens plus the configured <code>max_tokens</code> or equivalent output limit, then adjusts usage after processing. In this scenario, a 4,096-token ceiling on a task that normally returns short JSON decisions causes each request to reserve far more token capacity than it is likely to use.<br/><br/>The most direct optimization is to make the output ceiling match the task's bounded response shape and to avoid sending unnecessary prompt context. This increases the number of requests that can fit within the same on-demand token quota without changing the model or buying provisioned throughput. Streaming improves time to first visible output, retries help tolerate throttling, and cross-Region inference can be useful for supported on-demand traffic, but none of those actions fixes the oversized reservation created by the unchanged request shape. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/scaling-throughput-best-practices.html\">Scaling throughput best practices for Amazon Bedrock</a> for the documented throughput behavior and throughput optimization guidance.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Retries with backoff are useful for resiliency when throttling occurs. Increasing concurrency can increase simultaneous token reservations and can make token-based throttling worse rather than improving sustained throughput.<br/>• <strong>B</strong>: ❌ Cross-Region inference can help supported on-demand traffic use model capacity across multiple Regions. It does not directly reduce the excessive token reservation created by the oversized maxTokens setting on each request.<br/>• <strong>C</strong>: ✅ This is correct because Amazon Bedrock reserves token quota when the request starts by considering the input tokens plus the configured max_tokens value. A large maxTokens setting can reduce admitted throughput even when the model usually generates short responses.<br/>• <strong>D</strong>: ❌ Streaming can improve perceived responsiveness because users can receive output earlier. It does not remove the initial token quota reservation pressure caused by an unnecessarily high maxTokens value.",
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
      "question_text": "<p>A national insurance carrier's claims automation team is validating a generative AI assistant that drafts claim denial explanations. The team has two prompt templates stored as versions in Amazon Bedrock Prompt Management and uses the same foundation model for both templates. Before production release, the team must determine whether either prompt produces systematically different quality or tone for claimant cohorts represented in a test set, while minimizing custom model development and preserving operational metrics for compliance review.</p><p>Which approach will meet these requirements MOST effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>So sánh hai prompt version cùng model, xem có khác biệt chất lượng/tone có hệ thống giữa các cohort trong test set không.</li><li><strong>Ít công custom</strong> và giữ operational metrics cho compliance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock evaluation LLM-as-a-judge</strong> trên dataset <strong>stratified</strong> đảm bảo mỗi cohort đủ mẫu, và kết quả theo cohort phát hành lên CloudWatch phục vụ compliance review.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Clarify đo bias của dữ liệu nguồn, không đánh giá output của prompt version.</li><li><strong>B</strong>: ❌ Sai — chạy traffic thật trước khi release, và satisfaction tổng không cho thấy khác biệt từng cohort.</li><li><strong>C</strong>: ✅ Đúng — stratified + kết quả cấp cohort.</li><li><strong>D</strong>: ❌ Sai — dataset ngẫu nhiên và kết quả tổng hợp làm mất khác biệt giữa các cohort.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>LLM-as-a-judge, stratified dataset, cohort-level metrics, Prompt Management</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'khác biệt giữa các nhóm/cohort' → <strong>stratified dataset</strong> và báo cáo theo từng cohort.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 40,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>Run Amazon SageMaker Clarify bias reports on the claims source dataset, and select the prompt version with the lowest class imbalance metric.</p>",
              "correct": false,
              "feedback": "<p>SageMaker Clarify is useful for bias and explainability analysis in ML workflows, especially around datasets and model predictions. It does not directly compare free-form Bedrock outputs from two prompt versions for cohort-specific differences in generated explanations.</p>"
            },
            {
              "choice": "<p>Route live traffic between both prompt versions by using Amazon Bedrock Flows, and select the version with the highest overall user satisfaction score.</p>",
              "correct": false,
              "feedback": "<p>This is a plausible A/B testing pattern, but it evaluates production feedback rather than completing the required pre-release fairness validation. Overall satisfaction scores also do not reliably expose cohort-specific differences in tone or quality.</p>"
            },
            {
              "choice": "<p>Run an Amazon Bedrock evaluation with an LLM-as-a-judge on a stratified prompt dataset for both prompt versions, and publish cohort-level results as CloudWatch metrics.</p>",
              "correct": true,
              "feedback": "<p>This approach evaluates the actual generative outputs for both prompt versions across defined claimant cohorts. Using an LLM-as-a-judge and cohort-level metrics supports systematic fairness comparison without building a custom evaluation model.</p>"
            },
            {
              "choice": "<p>Run an Amazon Bedrock evaluation with an LLM-as-a-judge on a randomized prompt dataset for both prompt versions, and publish aggregate results as CloudWatch metrics.</p>",
              "correct": false,
              "feedback": "<p>This can compare overall output quality between prompt versions, but aggregate metrics can hide subgroup-specific disparities. A randomized dataset without cohort-level analysis does not satisfy the requirement to identify systematic differences across claimant cohorts.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 40,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Fairness validation for a generative AI application should evaluate the <b>outputs that users will actually receive</b>, not only the source data or aggregate application behavior. A stratified test dataset lets the team compare outputs across claimant cohorts, and an Amazon Bedrock evaluation that uses an LLM-as-a-judge can automate scoring of subjective output properties such as helpfulness, correctness, harmfulness, or other rubric-based criteria. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html\">Evaluate model performance using Amazon Bedrock</a>.<br/><br/><b>Amazon Bedrock Prompt Management</b> helps keep prompt variants versioned and reusable, which is important when comparing two prompt templates under controlled conditions. Publishing cohort-level evaluation results as <code>CloudWatch</code> custom metrics gives operations and compliance teams a durable way to monitor and review the evaluation evidence. Relevant documentation includes <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Prompt management in Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html\">Publish custom metrics</a>.<br/><br/>Production A/B testing and user feedback are valuable, but they are not a substitute for a pre-release fairness evaluation because aggregate ratings can mask differences for smaller groups. SageMaker Clarify can support bias analysis in broader ML workflows, but the stated problem is about comparing generated Bedrock responses from prompt versions, so output-level evaluation is the better fit.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ SageMaker Clarify is useful for bias and explainability analysis in ML workflows, especially around datasets and model predictions. It does not directly compare free-form Bedrock outputs from two prompt versions for cohort-specific differences in generated explanations.<br/>• <strong>B</strong>: ❌ This is a plausible A/B testing pattern, but it evaluates production feedback rather than completing the required pre-release fairness validation. Overall satisfaction scores also do not reliably expose cohort-specific differences in tone or quality.<br/>• <strong>C</strong>: ✅ This approach evaluates the actual generative outputs for both prompt versions across defined claimant cohorts. Using an LLM-as-a-judge and cohort-level metrics supports systematic fairness comparison without building a custom evaluation model.<br/>• <strong>D</strong>: ❌ This can compare overall output quality between prompt versions, but aggregate metrics can hide subgroup-specific disparities. A randomized dataset without cohort-level analysis does not satisfy the requirement to identify systematic differences across claimant cohorts.",
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
      "question_text": "<p>A telemedicine provider's clinical documentation AI team operates an internal note-drafting service. The API layer is an Amazon API Gateway REST API, AWS Lambda calls the Amazon Bedrock Converse API directly, and the Lambda function writes only unstructured error strings. Support engineers spend hours correlating reports of wrong output, validation exceptions, and latency spikes. The team must improve triage across prompt versions, model invocations, and API hops. The solution must avoid storing raw PHI in logs and must not introduce a separate observability data store.</p><p>Which TWO actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cải thiện triage giữa prompt version, lần gọi model và các API hop; <strong>không lưu raw PHI</strong>; không thêm observability data store riêng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Structured JSON logs</strong> đã làm sạch kèm correlation ID/prompt version/model ID/latency cho phép truy vấn bằng Logs Insights; <strong>X-Ray</strong> tracing từ API Gateway tới Lambda và Bedrock subsegment cho thấy các hop, và trace/correlation ID nối log với trace.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — lưu full payload trước rồi mask về sau vẫn lưu raw PHI trong logs.</li><li><strong>B</strong>: ✅ Đúng — log có cấu trúc, đã sanitize, dùng Logs Insights.</li><li><strong>C</strong>: ✅ Đúng — tracing end-to-end dùng X-Ray, không cần store mới.</li><li><strong>D</strong>: ❌ Sai — agent tracing chỉ áp dụng cho Bedrock Agents, không cho gọi Converse trực tiếp.</li><li><strong>E</strong>: ❌ Sai — CloudTrail là audit API, không chứa nội dung prompt/response và không phải nguồn latency chính.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>structured logging, correlation ID, X-Ray, CloudWatch Logs Insights, sanitized</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'triage nhiều hop, tránh PHI' → <strong>structured logs</strong> đã sanitize + <strong>X-Ray</strong>, không log raw payload.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 41,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>Enable Amazon Bedrock model invocation logging for full request and response payloads in CloudWatch Logs, then use CloudWatch Logs Insights queries to mask PHI values when engineers investigate incidents.</p>",
              "correct": false,
              "feedback": "<p>Query-time masking does not prevent raw PHI from being stored in CloudWatch Logs. Model invocation logging can be useful for debugging, but the requirement is to avoid storing sensitive raw prompt and response payloads in the first place.</p>"
            },
            {
              "choice": "<p>Emit structured JSON logs from the Lambda function with a correlation ID, prompt version, model ID, sanitized prompt and response attributes, latency, validation outcome, and Bedrock request metadata; analyze the fields with CloudWatch Logs Insights queries.</p>",
              "correct": true,
              "feedback": "<p>Structured application logs make prompt version, model choice, validation failures, and latency searchable without requiring a new data store. Sanitizing or summarizing prompt and response attributes before logging helps the team investigate behavior without storing raw PHI.</p>"
            },
            {
              "choice": "<p>Enable X-Ray tracing on API Gateway and Lambda, instrument the Lambda AWS SDK client to create downstream Bedrock subsegments, and include the trace or correlation ID in the structured application logs.</p>",
              "correct": true,
              "feedback": "<p>X-Ray helps identify where time is spent across API Gateway, Lambda, and downstream AWS SDK calls. Including the same trace or correlation identifier in logs lets engineers pivot between request traces and prompt-level troubleshooting details.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock agent tracing for preprocessing, orchestration, postprocessing, and guardrail traces, then use the traces to inspect every Lambda request without changing the direct FM invocation path.</p>",
              "correct": false,
              "feedback": "<p>Bedrock agent tracing is for requests processed through Agents for Amazon Bedrock, where the service performs orchestration and tool use. The application calls the Converse API directly from Lambda, so agent traces would not capture every request on that path.</p>"
            },
            {
              "choice": "<p>Centralize AWS CloudTrail Lake queries for API Gateway, Lambda, and Bedrock events, then use the audit events as the primary source for prompt content, model response, and latency analysis.</p>",
              "correct": false,
              "feedback": "<p>CloudTrail is designed for auditing API activity, such as who made a call and when, rather than serving as the main source for prompt bodies, model responses, or application-level quality signals. It complements observability, but it does not replace structured application logs and distributed tracing for this scenario.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an FM application that already runs through <b>API Gateway</b>, <b>Lambda</b>, and <b>Amazon Bedrock</b>, the most practical troubleshooting improvement is to make each request observable at two levels: searchable application facts and cross-service timing. Structured JSON logs give <code>CloudWatch Logs Insights</code> stable fields to query, such as prompt version, model ID, sanitized input category, validation result, latency, and Bedrock request metadata. X-Ray adds the service map and timing view, helping engineers distinguish Lambda processing time from downstream model invocation time.<br/><br/>The privacy constraint changes the logging design. Logging full prompts and responses, then trying to hide PHI later, is an anti-pattern because sensitive data has already been persisted. A safer approach is to redact, tokenize, hash, classify, or summarize sensitive content before it is emitted, while preserving enough diagnostic context to correlate incidents and compare prompt versions.<br/><br/><b>CloudTrail</b> and Bedrock agent traces are useful in the right context, but they solve different problems. CloudTrail supports auditability for Amazon Bedrock API activity, while agent tracing explains an agent's preprocessing, orchestration, action group use, and guardrail behavior. Neither is a substitute for instrumenting a direct Lambda-to-Bedrock application with structured logs and distributed traces. See <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html\">Analyze log data with CloudWatch Logs Insights</a>, <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html\">Using AWS X-Ray with Lambda</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enabling-xray.html\">Set up AWS X-Ray with API Gateway REST APIs</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html\">Monitor model invocation using invocation logging</a>, <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">Logging Amazon Bedrock API calls using AWS CloudTrail</a>, and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html\">Trace events in Agents for Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Query-time masking does not prevent raw PHI from being stored in CloudWatch Logs. Model invocation logging can be useful for debugging, but the requirement is to avoid storing sensitive raw prompt and response payloads in the first place.<br/>• <strong>B</strong>: ✅ Structured application logs make prompt version, model choice, validation failures, and latency searchable without requiring a new data store. Sanitizing or summarizing prompt and response attributes before logging helps the team investigate behavior without storing raw PHI.<br/>• <strong>C</strong>: ✅ X-Ray helps identify where time is spent across API Gateway, Lambda, and downstream AWS SDK calls. Including the same trace or correlation identifier in logs lets engineers pivot between request traces and prompt-level troubleshooting details.<br/>• <strong>D</strong>: ❌ Bedrock agent tracing is for requests processed through Agents for Amazon Bedrock, where the service performs orchestration and tool use. The application calls the Converse API directly from Lambda, so agent traces would not capture every request on that path.<br/>• <strong>E</strong>: ❌ CloudTrail is designed for auditing API activity, such as who made a call and when, rather than serving as the main source for prompt bodies, model responses, or application-level quality signals. It complements observability, but it does not replace structured application logs and distributed tracing for this scenario.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, C"
        }
      ]
    },
    {
      "question_id": "#42",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A maritime logistics provider's knowledge management team is building an Amazon Bedrock Knowledge Base from vessel maintenance manuals stored in Amazon S3. Users must ask natural language questions and optionally narrow retrieval by vessel class, manual revision date, subsystem, and document owner. The team wants vessel class and subsystem to contribute to semantic context, but revision date and owner must be available only for filtering and must not affect semantic similarity. The solution must avoid custom ingestion code and keep metadata associated with each source document.</p><p>Which implementation best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gắn metadata cho tài liệu trong KB: vessel class và subsystem tham gia ngữ nghĩa, revision date và owner <strong>chỉ dùng để filter</strong>.</li><li>Không code ingestion tùy chỉnh, metadata đi cùng từng document.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng file sidecar tên đúng <strong>fileName.extension.metadata.json</strong> (dưới 10 KB) cùng thư mục S3, và bật <strong>includeForEmbedding</strong> chỉ cho các trường ngữ nghĩa; trường còn lại chỉ phục vụ filter.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — bật embedding cho mọi trường, kể cả date và owner, làm nhiễu similarity.</li><li><strong>B</strong>: ❌ Sai — tách nhiều KB theo class/subsystem làm tăng vận hành và vẫn không kiểm soát được embedding.</li><li><strong>C</strong>: ✅ Đúng — đúng tên file, đúng giới hạn, embedding chọn lọc.</li><li><strong>D</strong>: ❌ Sai — sai quy ước tên (fileName.metadata.json thiếu extension gốc), Bedrock sẽ không nhận.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>metadata.json sidecar, includeForEmbedding, 10 KB, metadata filtering</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'metadata chỉ để filter, không ảnh hưởng embedding' → <strong>sidecar file</strong> với <strong>includeForEmbedding</strong> chọn lọc.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 42,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>Create per-document sidecar files in the same S3 location, name each fileName.extension.metadata.json, keep each file under 10 KB, and set includeForEmbedding for all metadata fields.</p>",
              "correct": false,
              "feedback": "<p>This approach uses the documented sidecar location and naming pattern, but it marks revision date and owner for embedding participation. Those attributes must remain available only for filtering and must not influence semantic similarity.</p>"
            },
            {
              "choice": "<p>Create separate Knowledge Bases for each vessel class and subsystem, store revision date and owner in sidecar files, and route retrieval to the selected Knowledge Base.</p>",
              "correct": false,
              "feedback": "<p>Separate Knowledge Bases are a real architecture, but this fragments a corpus that requires per-document metadata and optional narrowing across the maintenance library. It also moves vessel class and subsystem handling into application routing rather than using document metadata to improve semantic context during retrieval.</p>"
            },
            {
              "choice": "<p>Create per-document sidecar files in the same S3 location, name each fileName.extension.metadata.json, keep each file under 10 KB, and set includeForEmbedding only for semantic fields.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Knowledge Bases supports S3 document metadata through a separate sidecar file stored in the same S3 location as the source document and named with the source file name plus .metadata.json. Setting includeForEmbedding selectively lets vessel class and subsystem influence semantic similarity while keeping revision date and owner available as filter metadata only.</p>"
            },
            {
              "choice": "<p>Create per-document sidecar files in the same S3 location, name each fileName.metadata.json, keep each file under 10 KB, and set includeForEmbedding only for semantic fields.</p>",
              "correct": false,
              "feedback": "<p>The metadata sidecar file name must include the complete source document name, including the original file extension, followed by .metadata.json. Omitting the original extension does not follow the documented naming pattern even though the embedding configuration is otherwise aligned with the requirement.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an Amazon Bedrock Knowledge Base that uses Amazon S3 as a data source, the documented way to supply per-document metadata is a <b>metadata sidecar file</b>. The sidecar must be a separate JSON file stored in the same S3 location as the source document, using the naming pattern <code>fileName.extension.metadata.json</code>, and the metadata file must not exceed <code>10 KB</code>. This design keeps the metadata close to the object it describes without requiring a custom ingestion pipeline.<br/><br/>The key design choice is how to use <code>includeForEmbedding</code>. Metadata that is included for embedding can affect semantic similarity because it is incorporated into the representation used during retrieval. Metadata that is excluded from embedding can still be used for filtering, but it does not alter semantic matching. That makes vessel class and subsystem good candidates for embedding participation, while revision date and owner should remain filter-only attributes.<br/><br/>The close alternatives fail on subtle implementation details. A sidecar file with the wrong name will not match the documented S3 metadata pattern, including every field in embeddings violates the filter-only requirement for revision and owner, and splitting the corpus into many Knowledge Bases adds routing complexity instead of using document-level metadata. For the source connector behavior, use the format described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/s3-data-source-connector.html\">Amazon Bedrock Knowledge Bases S3 data source connector</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach uses the documented sidecar location and naming pattern, but it marks revision date and owner for embedding participation. Those attributes must remain available only for filtering and must not influence semantic similarity.<br/>• <strong>B</strong>: ❌ Separate Knowledge Bases are a real architecture, but this fragments a corpus that requires per-document metadata and optional narrowing across the maintenance library. It also moves vessel class and subsystem handling into application routing rather than using document metadata to improve semantic context during retrieval.<br/>• <strong>C</strong>: ✅ Amazon Bedrock Knowledge Bases supports S3 document metadata through a separate sidecar file stored in the same S3 location as the source document and named with the source file name plus .metadata.json. Setting includeForEmbedding selectively lets vessel class and subsystem influence semantic similarity while keeping revision date and owner available as filter metadata only.<br/>• <strong>D</strong>: ❌ The metadata sidecar file name must include the complete source document name, including the original file extension, followed by .metadata.json. Omitting the original extension does not follow the documented naming pattern even though the embedding configuration is otherwise aligned with the requirement.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A luxury hotel chain's guest experience platform team is enhancing its CRM with a generative AI summary for each guest-service interaction. The CRM integration writes a compact event containing the interaction ID and transcript pointer to an Amazon SQS queue. A Lambda function calls Amazon Bedrock, writes the summary back to the CRM, and completes well within the Lambda timeout. The CRM API supports an idempotency key. Traffic arrives in bursts, summaries do not need to be returned to the original CRM request, and the team must minimize operational overhead while preventing duplicate CRM updates.</p><p>Which implementation should the team use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tóm tắt bất đồng bộ từ SQS qua Lambda gọi Bedrock, ghi vào CRM; traffic dạng burst.</li><li>Phải ngăn cập nhật CRM trùng lặp với <strong>ít operational overhead nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SQS standard có ngữ nghĩa at-least-once nên có thể giao trùng; SQS event source mapping cho buffer/burst, và dùng interaction ID làm <strong>idempotency key</strong> của CRM API giúp mỗi lần ghi trùng không tạo cập nhật thứ hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — batch delivery không đảm bảo exactly-once, vẫn có thể ghi trùng.</li><li><strong>B</strong>: ✅ Đúng — queue buffer + idempotency chống trùng.</li><li><strong>C</strong>: ❌ Sai — async invoke của Lambda có retry, không idempotency sẽ ghi trùng.</li><li><strong>D</strong>: ❌ Sai — đồng bộ qua webhook không cần thiết (kết quả không trả về CRM request) và không buffer burst.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SQS event source mapping, at-least-once, idempotency key, burst buffering</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'SQS + Lambda + tránh trùng' → nghĩ ngay đến <strong>idempotency key</strong>, vì delivery là at-least-once.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 43,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>Configure an Amazon SQS event source mapping for the Lambda function. Treat batch delivery semantics as sufficient to prevent duplicate CRM summary writes.</p>",
              "correct": false,
              "feedback": "<p>An SQS event source mapping is appropriate for the queue-based workload, but its delivery semantics are at least once. Treating batch delivery as duplicate prevention is unsafe because the same record can be processed more than once.</p>"
            },
            {
              "choice": "<p>Configure an Amazon SQS event source mapping for the Lambda function. Use the interaction ID as the idempotency key when writing the CRM summary.</p>",
              "correct": true,
              "feedback": "<p>This fits an asynchronous queue-based integration where Lambda polls SQS and invokes the function with batches. Because event source mappings process records at least once, using the interaction ID as an idempotency key protects the external CRM update from duplicate processing.</p>"
            },
            {
              "choice": "<p>Invoke the Lambda function from the integration layer with InvocationType=Event. Write each generated summary to the CRM without an idempotency check.</p>",
              "correct": false,
              "feedback": "<p>InvocationType=Event is asynchronous, but this option bypasses the existing SQS queue polling pattern and ignores duplicate-safe CRM writes. The requirement is not merely to decouple processing, it is also to prevent duplicate CRM updates when records can be processed more than once.</p>"
            },
            {
              "choice": "<p>Invoke the Lambda function from the CRM webhook with InvocationType=RequestResponse. Return the generated summary through the CRM webhook response.</p>",
              "correct": false,
              "feedback": "<p>RequestResponse is a synchronous Lambda invocation mode, so it holds the webhook flow open until processing finishes. The scenario does not require an immediate response and already uses a queue to absorb bursts, so this approach is a poorer fit for the stated integration pattern.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 43,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a bursty CRM enhancement that does not need to return the generated summary in the original request path, an <b>Amazon SQS event source mapping</b> is the natural Lambda integration. Lambda polls the queue and invokes the function with batches, which lets the CRM integration hand off work without waiting for the Bedrock call and CRM write to finish. The Lambda documentation distinguishes this queue and stream polling model from direct synchronous and asynchronous invocation modes in <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html\">Invoking Lambda functions</a>.<br/><br/>The subtle production issue is duplicate processing. Lambda event source mappings for services such as SQS process events <i>at least once</i>, so a function that performs an external side effect, such as updating a CRM, should make that side effect idempotent. Using the stable interaction ID as the CRM idempotency key makes repeated processing converge on the same CRM update instead of creating duplicate summaries. This behavior is documented in <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html\">How Lambda processes records from stream and queue-based event sources</a>.<br/><br/>Direct <code>InvocationType=RequestResponse</code> is useful when the caller needs the function result immediately, but that adds coupling and does not use the queue already present for burst smoothing. Direct <code>InvocationType=Event</code> can decouple callers, but the option that omits an idempotency check fails the duplicate-update requirement. The most robust pattern is to combine asynchronous queue-based processing with idempotent writes at the system boundary where side effects occur.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ An SQS event source mapping is appropriate for the queue-based workload, but its delivery semantics are at least once. Treating batch delivery as duplicate prevention is unsafe because the same record can be processed more than once.<br/>• <strong>B</strong>: ✅ This fits an asynchronous queue-based integration where Lambda polls SQS and invokes the function with batches. Because event source mappings process records at least once, using the interaction ID as an idempotency key protects the external CRM update from duplicate processing.<br/>• <strong>C</strong>: ❌ InvocationType=Event is asynchronous, but this option bypasses the existing SQS queue polling pattern and ignores duplicate-safe CRM writes. The requirement is not merely to decouple processing, it is also to prevent duplicate CRM updates when records can be processed more than once.<br/>• <strong>D</strong>: ❌ RequestResponse is a synchronous Lambda invocation mode, so it holds the webhook flow open until processing finishes. The scenario does not require an immediate response and already uses a queue to absorb bursts, so this approach is a poorer fit for the stated integration pattern.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital banking platform's conversational AI team runs a customer-facing assistant on Amazon Bedrock. Red-team testing found harmful language in both user prompts and generated responses, plus jailbreak and prompt leakage attempts. Compliance requires blocking harmful content when the guardrail classification is MEDIUM or HIGH, but allowing LOW classifications to reduce false positives. The team also needs to observe prompt attack detections for 30 days before changing user-visible behavior, and must anonymize PII in text responses.</p><p>Which configuration will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Guardrail cho chatbot ngân hàng: chặn nội dung độc hại ở mức <strong>MEDIUM/HIGH</strong>, cho qua LOW, quan sát prompt attack 30 ngày trước khi đổi hành vi, ẩn danh PII.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Filter strength <strong>Medium</strong> chặn MEDIUM và HIGH nhưng cho LOW qua; áp dụng cho cả prompt và response; Prompt Attack = <strong>Detect</strong> chỉ ghi nhận không chặn; sensitive info <strong>Mask</strong> là ẩn danh PII.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — strength Low chặn cả LOW, và Prompt Attack Block đổi hành vi ngay.</li><li><strong>B</strong>: ❌ Sai — strength High chỉ chặn HIGH, jailbreak không là denied topic, và Block không phải anonymize.</li><li><strong>C</strong>: ❌ Sai — chỉ áp dụng cho prompt, bỏ response; Prompt Attack Block; word filters không phải cách che PII.</li><li><strong>D</strong>: ✅ Đúng — đúng strength, đúng phạm vi, Detect, Mask.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>filter strength Medium, Prompt Attack Detect, sensitive information Mask, prompts and responses</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'observe trước khi enforce' → <strong>Detect</strong>; 'ẩn danh PII' → <strong>Mask</strong>; 'block từ MEDIUM' → strength <strong>Medium</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 44,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock guardrail in the Standard tier. Set Hate, Insults, Sexual, Violence, and Misconduct filters to Low for prompts and responses, set Prompt Attack to Block, and set sensitive information filters to Mask.</p>",
              "correct": false,
              "feedback": "<p>Low filter strength blocks only HIGH classifications, so MEDIUM harmful content would not be blocked. Blocking Prompt Attack would also change user-visible behavior immediately rather than supporting an observation period.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail in the Standard tier. Set Hate, Insults, Sexual, Violence, and Misconduct filters to High for prompts and responses, add jailbreaks as denied topics, and set sensitive information filters to Block.</p>",
              "correct": false,
              "feedback": "<p>High filter strength blocks LOW, MEDIUM, and HIGH classifications, which is stricter than the stated tolerance and can increase false positives. Blocking sensitive information replaces content with blocked messaging rather than anonymizing PII with masking tags.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail in the Standard tier. Set Hate, Insults, Sexual, Violence, and Misconduct filters to Medium for prompts only, set Prompt Attack to Block, and configure word filters for PII values.</p>",
              "correct": false,
              "feedback": "<p>Filtering only prompts does not address harmful model responses, which are part of the stated risk. Word filters are not the same as sensitive information filters, and blocking Prompt Attack does not support observing detections before enforcement.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail in the Standard tier. Set Hate, Insults, Sexual, Violence, and Misconduct filters to Medium for prompts and responses, set Prompt Attack to Detect, and set sensitive information filters to Mask.</p>",
              "correct": true,
              "feedback": "<p>Medium filter strength blocks content classified at MEDIUM or HIGH while allowing LOW classifications. Prompt Attack detection is a Standard tier content filter capability, and Mask is the guardrail action that anonymizes detected PII in supported text outputs.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Guardrails</b> provide configurable safeguards that can apply to both prompts and model responses. Content filters cover the documented harmful-content categories <code>Hate</code>, <code>Insults</code>, <code>Sexual</code>, <code>Violence</code>, <code>Misconduct</code>, and <code>Prompt Attack</code>, with prompt attacks including jailbreaks, prompt injections, and prompt leakages. Prompt Attack filtering is available in the Standard tier, so a design that needs that capability must use that tier. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-components.html\">Guardrail components</a>.<br/><br/>The key tuning decision is the confidence threshold. Bedrock classifies content at <code>NONE</code>, <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. A filter strength of <code>Medium</code> blocks <code>MEDIUM</code> and <code>HIGH</code>, while still allowing <code>LOW</code>, which matches the stated balance between safety and false-positive reduction. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters-overview.html\">Content filters overview</a>.<br/><br/>Runtime actions matter because they are not interchangeable. <code>Detect</code> returns detections in the trace response without taking user-visible action, which is appropriate for measuring false positives and false negatives before enforcement. <code>Mask</code> is available only for sensitive information filters and anonymizes detected PII with tags such as <code>{NAME}</code> or <code>{EMAIL}</code>, which is different from blocking the whole response. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-harmful-content-handling-options.html\">Guardrail handling options</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Low filter strength blocks only HIGH classifications, so MEDIUM harmful content would not be blocked. Blocking Prompt Attack would also change user-visible behavior immediately rather than supporting an observation period.<br/>• <strong>B</strong>: ❌ High filter strength blocks LOW, MEDIUM, and HIGH classifications, which is stricter than the stated tolerance and can increase false positives. Blocking sensitive information replaces content with blocked messaging rather than anonymizing PII with masking tags.<br/>• <strong>C</strong>: ❌ Filtering only prompts does not address harmful model responses, which are part of the stated risk. Word filters are not the same as sensitive information filters, and blocking Prompt Attack does not support observing detections before enforcement.<br/>• <strong>D</strong>: ✅ Medium filter strength blocks content classified at MEDIUM or HIGH while allowing LOW classifications. Prompt Attack detection is a Standard tier content filter capability, and Mask is the guardrail action that anonymizes detected PII in supported text outputs.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A life sciences contract research organization's AI platform team is designing a generative AI gateway on Amazon Bedrock. Internal applications already use Bedrock-native request patterns for chat orchestration and tool use. A newly acquired product uses an OpenAI-compatible SDK and must be onboarded with minimal first-release code changes. The platform team also expects one regulated document-review workload to have steady high volume, while exploratory workloads will remain unpredictable. The architecture must avoid locking all workloads into a single API style and must account for model capability, Regional availability, and throughput planning before production rollout.</p><p>Which TWO actions should the team include in the architecture? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gateway Bedrock với workload native (chat, tool use) và một sản phẩm dùng OpenAI-compatible SDK, cần onboard <strong>ít đổi code</strong>, không khóa vào một API style.</li><li>Phải cân nhắc năng lực model, Region, throughput trước production.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>Bedrock-native APIs</strong> cho workload nội bộ và đường <strong>OpenAI-compatible</strong> có tài liệu cho sản phẩm mới; cộng với đánh giá FM theo modality, context window, tool use, endpoint API support, Region, và on-demand vs Provisioned Throughput.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mua Provisioned Throughput cho cả hệ thống là sớm; chỉ workload ổn định cao mới hợp.</li><li><strong>B</strong>: ❌ Sai — ép InvokeModel payload riêng provider và tự emulate là nhiều công sức.</li><li><strong>C</strong>: ✅ Đúng — không khóa một API style, onboard sản phẩm mới ít đổi code.</li><li><strong>D</strong>: ❌ Sai — adapter dịch OpenAI request là code custom không cần thiết.</li><li><strong>E</strong>: ✅ Đúng — tiêu chí chọn model và kế hoạch throughput đầy đủ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OpenAI-compatible API, Bedrock Runtime, endpoint API support, Provisioned Throughput</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'SDK OpenAI, ít đổi code' → dùng <strong>OpenAI-compatible endpoint</strong> của Bedrock, đừng tự dịch.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 45,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>Select the highest-quality text FM in the preferred Region, purchase Provisioned Throughput, and validate endpoint API support during integration testing.</p>",
              "correct": false,
              "feedback": "<p>Throughput planning should not be separated from model capability, endpoint compatibility, and Regional availability checks. A model that scores well in evaluation can still be unsuitable if it does not support the required API surface or deployment approach in the target Region.</p>"
            },
            {
              "choice": "<p>Route all traffic through InvokeModel with provider-specific payloads, and emulate any missing chat or OpenAI-compatible behaviors inside the gateway.</p>",
              "correct": false,
              "feedback": "<p>InvokeModel is useful for direct model invocation, but using it as the only integration style pushes API compatibility logic into custom gateway code. This increases maintenance overhead and does not align with the requirement to avoid locking every workload into one API style.</p>"
            },
            {
              "choice": "<p>Use Bedrock-native APIs through the Bedrock Runtime endpoint for internal workloads, and use a documented OpenAI-compatible Bedrock API path for the acquired product.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock supports different inference API surfaces, and AWS states that the Bedrock Runtime endpoint remains appropriate for Bedrock-native InvokeModel or Converse use cases. The same application can use both endpoint patterns when different clients need different API compatibility.</p>"
            },
            {
              "choice": "<p>Standardize every workload on the Converse API by building a gateway adapter that translates OpenAI-compatible requests before model invocation.</p>",
              "correct": false,
              "feedback": "<p>Converse is a Bedrock-native API and can be a strong choice for many applications, but forcing all OpenAI-compatible traffic through a custom translation layer adds first-release integration work. This also removes the benefit of using Bedrock's documented OpenAI-compatible API surface for clients that already depend on that style.</p>"
            },
            {
              "choice": "<p>Evaluate candidate FMs by modality, context window, tool-use support, endpoint API support, Region availability, and on-demand versus Provisioned Throughput needs.</p>",
              "correct": true,
              "feedback": "<p>AWS guidance for choosing Amazon Bedrock models includes considering capabilities, supported APIs, Regional availability, and cost or throughput characteristics. This prevents selecting a model that meets quality goals but cannot be used through the required API style or capacity model.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 45,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Professional Bedrock architecture starts with matching the workload to the <b>model and API surface together</b>, not treating model selection as an isolated quality benchmark. AWS documents that model selection should include capabilities such as modality, context window, and tool use, plus endpoint and API support, Region or cross-Region availability, and cost or throughput choices such as on-demand inference and <b>Provisioned Throughput</b>. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/models.html\">Supported foundation models in Amazon Bedrock</a>.<br/><br/>Amazon Bedrock also exposes more than one inference integration pattern. The Bedrock Runtime endpoint supports Bedrock-native APIs such as <code>InvokeModel</code> and <code>Converse</code>, while Bedrock also documents OpenAI-compatible API support for clients that need that contract. AWS explicitly notes that both endpoint patterns can be used in the same application, which is the key design tradeoff here: preserve native Bedrock features where they fit, while reducing migration work for clients that already use an OpenAI-compatible SDK. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html\">Amazon Bedrock endpoints</a>.<br/><br/>The tempting alternatives all centralize too much logic in the gateway or defer important compatibility checks until too late. Translating every OpenAI-style request into Converse, or emulating chat behavior over <code>InvokeModel</code>, may work technically but increases custom code, testing burden, and long-term API drift risk. Buying dedicated capacity before confirming model, Region, API, and workload fit reverses the decision order that a production design should follow.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Throughput planning should not be separated from model capability, endpoint compatibility, and Regional availability checks. A model that scores well in evaluation can still be unsuitable if it does not support the required API surface or deployment approach in the target Region.<br/>• <strong>B</strong>: ❌ InvokeModel is useful for direct model invocation, but using it as the only integration style pushes API compatibility logic into custom gateway code. This increases maintenance overhead and does not align with the requirement to avoid locking every workload into one API style.<br/>• <strong>C</strong>: ✅ Amazon Bedrock supports different inference API surfaces, and AWS states that the Bedrock Runtime endpoint remains appropriate for Bedrock-native InvokeModel or Converse use cases. The same application can use both endpoint patterns when different clients need different API compatibility.<br/>• <strong>D</strong>: ❌ Converse is a Bedrock-native API and can be a strong choice for many applications, but forcing all OpenAI-compatible traffic through a custom translation layer adds first-release integration work. This also removes the benefit of using Bedrock's documented OpenAI-compatible API surface for clients that already depend on that style.<br/>• <strong>E</strong>: ✅ AWS guidance for choosing Amazon Bedrock models includes considering capabilities, supported APIs, Regional availability, and cost or throughput characteristics. This prevents selecting a model that meets quality goals but cannot be used through the required API style or capacity model.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C, E"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A national tax advisory firm's digital products team is building a proof of concept for an Amazon Bedrock based assistant that answers questions about internal tax research notes. The team has three prompt variants, two foundation models, and a representative dataset of 400 SME-written questions with expected answers. The team must decide whether the assistant is feasible before any production integration, and must compare quality, latency, and cost with minimal custom evaluation infrastructure.</p><p>Which approach will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>PoC đánh giá khả thi: 3 prompt, 2 model, 400 câu hỏi SME có đáp án chuẩn, so quality/latency/cost.</li><li>Ưu tiên: <strong>ít hạ tầng đánh giá custom</strong> nhất, chưa tích hợp production.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bedrock <strong>evaluation jobs</strong> (managed) chạy dataset SME trên từng model/prompt và cho kết quả chất lượng cùng đặc điểm invocation (latency, token) để chọn cấu hình.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng Step Functions và chấm tay 400 câu là nhiều công sức.</li><li><strong>B</strong>: ❌ Sai — fine-tune trước khi biết khả thi là sớm và tốn kém.</li><li><strong>C</strong>: ✅ Đúng — managed evaluation, ít hạ tầng nhất.</li><li><strong>D</strong>: ❌ Sai — pilot với nhân viên cần production-like integration, thumbs-up không đo chuẩn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock evaluation jobs, custom dataset, feasibility PoC</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'so sánh model/prompt trên dataset, ít công' → <strong>Bedrock evaluation jobs</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 46,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>Build an AWS Step Functions workflow that invokes Amazon Bedrock for every dataset item. Store outputs in Amazon S3 and ask SMEs to manually score every generated answer.</p>",
              "correct": false,
              "feedback": "<p>This approach can produce comparison data, but it adds custom orchestration, storage, and manual scoring work that the scenario is trying to minimize. It is less repeatable and more operationally intensive than using a managed Bedrock evaluation workflow.</p>"
            },
            {
              "choice": "<p>Fine-tune one Amazon Bedrock supported model by using the SME dataset. Compare the fine-tuned model with a base model after deploying both through application endpoints.</p>",
              "correct": false,
              "feedback": "<p>Fine-tuning is a customization step that is usually considered after simpler approaches such as prompt and model evaluation show enough value. This option also narrows the comparison too early and introduces deployment work before the proof of concept has established feasibility.</p>"
            },
            {
              "choice": "<p>Create managed Amazon Bedrock evaluation jobs for the candidate models and prompt variants by using the SME dataset. Review the evaluation results and invocation characteristics before selecting a configuration.</p>",
              "correct": true,
              "feedback": "<p>This approach uses a managed evaluation workflow to compare candidate model and prompt configurations before production integration. It aligns with the need to validate quality and operational characteristics while avoiding a custom evaluation platform.</p>"
            },
            {
              "choice": "<p>Deploy each prompt variant behind an Amazon API Gateway endpoint that invokes Amazon Bedrock. Route employees to the endpoints and compare thumbs-up feedback after a pilot period.</p>",
              "correct": false,
              "feedback": "<p>This approach can collect useful business feedback, but it requires deploying user-facing endpoints before the feasibility decision. It also depends on production-like traffic and does not use the existing SME-labeled dataset as the primary repeatable evaluation mechanism.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 46,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>A proof of concept should reduce uncertainty before the team commits to application integration, endpoint design, or model customization. <b>Amazon Bedrock model evaluation</b> is designed for comparing models and configurations by using prompt datasets and evaluation criteria, which makes it a strong fit when the team already has SME-written questions and expected answers. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html\">Evaluate model performance using model evaluation</a>.<br/><br/>The important tradeoff is between <i>learning fast</i> and <i>building too much too soon</i>. A custom Step Functions harness or API Gateway pilot can be useful later, but those approaches add application code, operational surfaces, and manual review processes before the team has confirmed that the model and prompt choices are viable. Fine-tuning can be valuable for some use cases, but it is a heavier customization path and is not the best first validation step when prompt and model selection are still unresolved.<br/><br/>For a real implementation, the team could store prompt variants and variables in <b>Amazon Bedrock Prompt Management</b> so that candidate prompts are versioned and reusable during the experiment. That complements evaluation because it gives engineers a controlled way to compare prompt versions without losing traceability. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Prompt management in Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach can produce comparison data, but it adds custom orchestration, storage, and manual scoring work that the scenario is trying to minimize. It is less repeatable and more operationally intensive than using a managed Bedrock evaluation workflow.<br/>• <strong>B</strong>: ❌ Fine-tuning is a customization step that is usually considered after simpler approaches such as prompt and model evaluation show enough value. This option also narrows the comparison too early and introduces deployment work before the proof of concept has established feasibility.<br/>• <strong>C</strong>: ✅ This approach uses a managed evaluation workflow to compare candidate model and prompt configurations before production integration. It aligns with the need to validate quality and operational characteristics while avoiding a custom evaluation platform.<br/>• <strong>D</strong>: ❌ This approach can collect useful business feedback, but it requires deploying user-facing endpoints before the feasibility decision. It also depends on production-like traffic and does not use the existing SME-labeled dataset as the primary repeatable evaluation mechanism.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global architecture firm's design-knowledge team stores building codes, project standards, and design-review notes as unstructured files in Amazon S3. The team is building a RAG assistant with Amazon Bedrock. The solution must use a managed Knowledge Bases ingestion path that parses documents, chunks content, creates embeddings, and writes those embeddings to a supported vector index. The platform team has no existing vector database service, wants to minimize new operational ownership, and wants the initial design to remain production ready while the source repository stays in S3.</p><p>Which approach will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG managed với dữ liệu S3: Knowledge Bases tự parse, chunk, embed và ghi vector index.</li><li>Chưa có vector DB, giảm <strong>ownership vận hành</strong>, sẵn sàng production.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 data source là đường ingest managed; <strong>OpenSearch Serverless</strong> là vector store được Bedrock hỗ trợ, serverless nên ít vận hành nhất và hợp quick-create.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — MongoDB Atlas là dịch vụ bên ngoài, thêm ownership mới.</li><li><strong>B</strong>: ❌ Sai — RDS thông thường không phải storage type của Bedrock KB (cần Aurora với pgvector), và là hệ thống DB phải vận hành.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — custom data source cho dữ liệu đã ở S3 là dư thừa, bỏ mất ingest managed.</li><li><strong>D</strong>: ✅ Đúng — S3 + OpenSearch Serverless.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 data source, OPENSEARCH_SERVERLESS, managed ingestion, vector index</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'chưa có vector DB, ít vận hành' → <strong>OpenSearch Serverless</strong> (hoặc quick create), data source S3.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 47,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock knowledge base with an Amazon S3 data source and a MONGO_DB_ATLAS storage configuration for a vector index.</p>",
              "correct": false,
              "feedback": "<p>This uses a documented S3 data source and a valid Knowledge Bases vector store type. However, it introduces an external vector storage platform when the team has no existing vector database service to operate or integrate.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock knowledge base with an Amazon S3 data source and an RDS storage configuration for a dedicated vector index.</p>",
              "correct": false,
              "feedback": "<p>This uses a documented S3 data source and a valid Knowledge Bases vector store type. However, it introduces relational database infrastructure for vector storage, which is a poorer fit for minimizing new operational ownership.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock knowledge base with a custom data source that reads the S3 objects and an OPENSEARCH_SERVERLESS storage configuration.</p>",
              "correct": false,
              "feedback": "<p>This uses a valid Knowledge Bases storage type and can still rely on the managed embedding and indexing flow. However, using a custom data source adds source integration work when the documents already reside in a supported S3 repository.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock knowledge base with an Amazon S3 data source and an OPENSEARCH_SERVERLESS storage configuration for a dedicated vector index.</p>",
              "correct": true,
              "feedback": "<p>This uses the managed Knowledge Bases ingestion workflow with the existing S3 repository and a valid storage configuration type. OpenSearch Serverless avoids introducing a separately provisioned relational database or external vector platform for the initial release.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 47,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Knowledge Bases</b> is designed to remove much of the undifferentiated ingestion work in a RAG architecture. For unstructured data, the service can parse source documents, split them into chunks, convert those chunks into vector embeddings with the selected embedding model, and write the embeddings into the configured vector index. This makes it a strong fit when a team wants semantic retrieval without maintaining a custom parsing, chunking, and embedding pipeline.<br/><br/>The documented unstructured data source connectors include <b>Amazon S3</b>, Confluence (preview), Microsoft SharePoint (preview), Salesforce (preview), Web Crawler (preview), and custom data sources. Because the documents already reside in S3, using the S3 data source keeps the ingestion architecture simpler than wrapping the same repository behind a custom source. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-data.html\">How Amazon Bedrock Knowledge Bases processes data</a>.<br/><br/>The storage configuration is the key tradeoff. The Knowledge Bases API accepts specific vector store type values, including <code>OPENSEARCH_SERVERLESS</code>, <code>PINECONE</code>, <code>REDIS_ENTERPRISE_CLOUD</code>, <code>RDS</code>, <code>MONGO_DB_ATLAS</code>, and <code>NEPTUNE_ANALYTICS</code>. Several choices are technically valid, but <code>OPENSEARCH_SERVERLESS</code> best matches the stated need to minimize new operational ownership for an initial AWS-based production release. <code>RDS</code> and <code>MONGO_DB_ATLAS</code> can be valid in other designs, but they introduce database platform decisions that are unnecessary for this S3-backed Knowledge Bases deployment.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This uses a documented S3 data source and a valid Knowledge Bases vector store type. However, it introduces an external vector storage platform when the team has no existing vector database service to operate or integrate.<br/>• <strong>B</strong>: ❌ This uses a documented S3 data source and a valid Knowledge Bases vector store type. However, it introduces relational database infrastructure for vector storage, which is a poorer fit for minimizing new operational ownership.<br/>• <strong>C</strong>: ❌ This uses a valid Knowledge Bases storage type and can still rely on the managed embedding and indexing flow. However, using a custom data source adds source integration work when the documents already reside in a supported S3 repository.<br/>• <strong>D</strong>: ✅ This uses the managed Knowledge Bases ingestion workflow with the existing S3 repository and a valid storage configuration type. OpenSearch Serverless avoids introducing a separately provisioned relational database or external vector platform for the initial release.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional electric utility's grid reliability AI team is implementing an Amazon Bedrock based assistant that recommends restoration actions during outages. Each request can go through several plan, tool-call, and revise cycles. Tools are AWS Lambda functions that read operational APIs. Safety reviewers require the workflow to stop after a fixed maximum number of cycles or after a high-risk tool result, prevent the FM path from accessing anything except approved read APIs, and avoid repeatedly calling an unhealthy operational API for several minutes after consecutive failures. The team wants a serverless design with explicit execution history and minimal custom orchestration code.</p><p>Which implementation best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Workflow plan, tool-call, revise: dừng sau số vòng cố định hoặc khi tool trả kết quả rủi ro cao, giới hạn quyền chỉ read API, circuit breaker khi API lỗi liên tục.</li><li>Serverless, có execution history, <strong>ít custom orchestration</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions Standard</strong> có Choice/Fail state kiểm soát số vòng và risk flag, lưu execution history, IAM role tối thiểu cho từng adapter, và trạng thái circuit breaker lưu bền trong <strong>DynamoDB</strong> để nhớ qua nhiều execution.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Bedrock agent khó áp giới hạn số vòng cứng, không có circuit breaker rõ ràng và ít explicit history.</li><li><strong>B</strong>: ✅ Đúng — kiểm soát chính xác từng điều kiện dừng, lịch sử rõ, circuit breaker bền.</li><li><strong>C</strong>: ❌ Sai — loop in-memory trong Lambda mất state, role chung phá least privilege, không có history.</li><li><strong>D</strong>: ❌ Sai — Express lưu history hạn chế, Retry/Catch không phải circuit breaker nhiều phút, throttle bằng reserved concurrency không phải cơ chế đúng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Standard, Choice state, circuit breaker, DynamoDB, execution history</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'giới hạn vòng lặp + circuit breaker + history' → <strong>Step Functions Standard</strong> với state lưu ngoài.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 48,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>Build an Amazon Bedrock agent with action groups for each tool; define parameter schemas and confirmation prompts; invoke Lambda action handlers with configured timeouts; attach least-privilege IAM roles and enable Bedrock Guardrails.</p>",
              "correct": false,
              "feedback": "<p>Bedrock Agents action groups are appropriate for tool use, and guardrails can help control content, but this option does not provide deterministic workflow-level stopping after a fixed number of cycles. Guardrails also do not implement a downstream API circuit breaker based on consecutive operational failures.</p>"
            },
            {
              "choice": "<p>Build an AWS Step Functions Standard workflow that tracks cycle count and risk flags with Choice and Fail states; invoke Lambda tool adapters with configured timeouts; store circuit-breaker state in DynamoDB; apply least-privilege IAM roles to each adapter.</p>",
              "correct": true,
              "feedback": "<p>This approach uses Step Functions to make the planning loop explicit and to enforce deterministic stopping conditions through workflow state. Lambda timeouts bound individual tool calls, DynamoDB can hold shared circuit-breaker state across executions, and least-privilege IAM roles constrain each tool adapter.</p>"
            },
            {
              "choice": "<p>Build a Lambda orchestrator that maintains the plan and revise loop in memory; invoke the same tool adapters with configured timeouts; cache failed API names in the execution context; attach a shared read-only IAM role.</p>",
              "correct": false,
              "feedback": "<p>A Lambda orchestrator can implement loops, but the control logic and audit trail are hidden inside custom code rather than represented as workflow state transitions. The Lambda execution context is not a durable shared circuit-breaker store, and a shared role weakens per-tool resource boundaries.</p>"
            },
            {
              "choice": "<p>Build a Step Functions Express workflow that uses Retry and Catch handlers around each tool call; invoke Lambda adapters with configured timeouts; alarm on downstream failures in CloudWatch; throttle invocations by adjusting reserved concurrency.</p>",
              "correct": false,
              "feedback": "<p>Retry and Catch handlers are useful for transient failures, but they do not by themselves implement an open circuit that suppresses calls to one unhealthy downstream API for several minutes. Reserved concurrency throttles Lambda capacity broadly and does not enforce the stated maximum planning cycles or high-risk stop condition.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 48,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For safeguarded FM workflows, separate <b>model reasoning</b> from <b>workflow control</b>. AWS Step Functions is well suited for explicit orchestration because the state machine can carry a cycle counter, evaluate risk flags with <code>Choice</code> states, and terminate with <code>Fail</code> states when safety limits are reached. See the AWS documentation for <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html\">Step Functions state types</a> and <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html\">Step Functions error handling</a>.<br/><br/>Lambda remains useful as a narrow tool adapter, not as the place to hide the entire agent loop. Configuring <b>Lambda timeouts</b> bounds each operational API call, while per-adapter <b>least-privilege IAM</b> roles prevent the FM-driven path from reaching resources outside the approved tool surface. A durable store such as DynamoDB can hold circuit-breaker fields such as failure count and an open-until timestamp, so all workflow executions observe the same failure suppression window instead of relying on local process memory. Relevant AWS documentation includes <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html\">Configuring Lambda function timeout</a>, <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html\">IAM security best practices</a>, and <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\">What is Amazon DynamoDB</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Bedrock Agents action groups are appropriate for tool use, and guardrails can help control content, but this option does not provide deterministic workflow-level stopping after a fixed number of cycles. Guardrails also do not implement a downstream API circuit breaker based on consecutive operational failures.<br/>• <strong>B</strong>: ✅ This approach uses Step Functions to make the planning loop explicit and to enforce deterministic stopping conditions through workflow state. Lambda timeouts bound individual tool calls, DynamoDB can hold shared circuit-breaker state across executions, and least-privilege IAM roles constrain each tool adapter.<br/>• <strong>C</strong>: ❌ A Lambda orchestrator can implement loops, but the control logic and audit trail are hidden inside custom code rather than represented as workflow state transitions. The Lambda execution context is not a durable shared circuit-breaker store, and a shared role weakens per-tool resource boundaries.<br/>• <strong>D</strong>: ❌ Retry and Catch handlers are useful for transient failures, but they do not by themselves implement an open circuit that suppresses calls to one unhealthy downstream API for several minutes. Reserved concurrency throttles Lambda capacity broadly and does not enforce the stated maximum planning cycles or high-risk stop condition.",
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
      "question_text": "<p>A renewable energy grid operator's AI reliability team is evaluating a generative AI assistant that drafts incident summaries from operator notes. The team has three Amazon Bedrock foundation models and two prompt versions under consideration. The team must compare the candidates against the same benchmark dataset, include automated and human quality judgments, account for token usage and latency, and expose only a limited production cohort before choosing the final configuration.</p><p>Which evaluation strategy will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>So sánh 3 model x 2 prompt trên cùng benchmark, có đánh giá tự động và human, tính token và latency, chỉ mở cho nhóm production nhỏ trước khi chốt.</li><li>Ưu tiên: <strong>ít operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock model evaluation jobs</strong> hỗ trợ cả automated metrics lẫn human review, CountTokens và CloudWatch cung cấp dữ liệu price-performance, rồi canary giới hạn cohort đúng yêu cầu rollout hạn chế.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed evaluation + human + price-performance + canary.</li><li><strong>B</strong>: ❌ Sai — tự invoke thủ công, thiếu human quality judgments.</li><li><strong>C</strong>: ❌ Sai — A/B test trực tiếp trên production cho mọi tổ hợp, nhiều công và phơi bày nhiều rủi ro.</li><li><strong>D</strong>: ❌ Sai — deploy toàn bộ ngay, vi phạm yêu cầu chỉ expose nhóm giới hạn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>evaluation jobs, human review, CountTokens, canary</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'đánh giá offline rồi canary' → <strong>evaluation jobs</strong> trước, rollout hạn chế sau.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 49,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>Create Bedrock model evaluation jobs for each model and prompt on the shared dataset with automated metrics and human review, add CountTokens and CloudWatch measurements to score price performance, then canary the selected variant while capturing feedback.</p>",
              "correct": true,
              "feedback": "<p>This approach uses managed Bedrock evaluation capabilities to compare candidate models and prompts against the same dataset, including automated metrics and human evaluation. CountTokens and CloudWatch add token and latency data for price-performance analysis, and a canary limits production exposure while feedback is collected.</p>"
            },
            {
              "choice": "<p>Invoke each model and prompt against the shared benchmark dataset with Bedrock automated evaluation metrics, record CountTokens and CloudWatch latency data by variant, then canary the top variant while collecting clickstream feedback.</p>",
              "correct": false,
              "feedback": "<p>This approach uses the shared benchmark dataset, captures token and latency signals, and limits production exposure with a canary. It omits human quality judgments, which are important for subjective summary quality factors such as usefulness, tone, and operational suitability.</p>"
            },
            {
              "choice": "<p>Run an A/B test that samples a limited production cohort across all model and prompt combinations, collect user ratings with API Gateway and DynamoDB, use CloudWatch and CountTokens to rank price performance, then promote the best variant.</p>",
              "correct": false,
              "feedback": "<p>This approach provides real production feedback from a limited cohort and can capture cost and latency signals by variant. It does not provide the same controlled benchmark comparison with automated quality judgments before live exposure, so production traffic becomes the primary test mechanism.</p>"
            },
            {
              "choice": "<p>Create Bedrock model evaluation jobs for each model and prompt on the shared dataset with automated metrics and human review, add CountTokens and CloudWatch measurements to score price performance, then fully deploy the highest-scoring variant.</p>",
              "correct": false,
              "feedback": "<p>This approach satisfies the offline comparison, human judgment, and price-performance portions of the requirement with relatively low operational overhead. It is incomplete because it promotes a variant directly to full production instead of validating it with a limited production cohort first.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 49,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock model evaluation jobs</b> are designed for controlled model and prompt comparisons before a broader rollout. They let teams evaluate candidates by using prompt datasets and quality metrics, and they can include human evaluation when subjective factors such as usefulness, style, and domain suitability matter. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html\">Evaluate model performance using model evaluation jobs</a>.<br/><br/>For generative AI systems, quality alone is rarely enough. A strong evaluation system combines quality scores with <b>token efficiency</b>, latency, and business feedback so the team can reason about the tradeoff between cost and user value. Amazon Bedrock provides the <code>CountTokens</code> operation to estimate prompt token usage before invocation, and Amazon CloudWatch can monitor Bedrock runtime usage and latency metrics. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/count-tokens.html\">Count tokens before running inference</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html\">Monitor Amazon Bedrock with Amazon CloudWatch</a>.<br/><br/>A canary after offline evaluation is the safer deployment pattern because it limits exposure while validating real user outcomes. Offline evaluation without a canary can miss behavior that appears only in production workflows, while production-only A/B testing lacks the repeatability of a shared benchmark dataset. Logging and audit services such as <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html\">model invocation logging</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html\">AWS CloudTrail logging for Amazon Bedrock</a> are valuable for governance and troubleshooting, but they do not replace controlled model evaluation against a shared benchmark dataset.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses managed Bedrock evaluation capabilities to compare candidate models and prompts against the same dataset, including automated metrics and human evaluation. CountTokens and CloudWatch add token and latency data for price-performance analysis, and a canary limits production exposure while feedback is collected.<br/>• <strong>B</strong>: ❌ This approach uses the shared benchmark dataset, captures token and latency signals, and limits production exposure with a canary. It omits human quality judgments, which are important for subjective summary quality factors such as usefulness, tone, and operational suitability.<br/>• <strong>C</strong>: ❌ This approach provides real production feedback from a limited cohort and can capture cost and latency signals by variant. It does not provide the same controlled benchmark comparison with automated quality judgments before live exposure, so production traffic becomes the primary test mechanism.<br/>• <strong>D</strong>: ❌ This approach satisfies the offline comparison, human judgment, and price-performance portions of the requirement with relatively low operational overhead. It is incomplete because it promotes a variant directly to full production instead of validating it with a limited production cohort first.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A museum consortium's digital preservation team is building a RAG application with Amazon Bedrock Knowledge Bases. The team will use a customer-managed vector store because it must control vector index mappings. The embedding configuration stores binary vector embeddings to reduce storage footprint. The team wants the lowest operational burden while allowing Bedrock to ingest, index, and retrieve content from the vector store.</p><p>Which configuration will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Customer-managed vector store để kiểm soát index mapping, embedding dạng binary, ít vận hành nhất, Bedrock vẫn ingest/index/retrieve được.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>OpenSearch Serverless</strong> vector collection với index <strong>faiss</strong> (engine hỗ trợ binary vectors) định nghĩa vector, text, metadata field khớp dimension; serverless nên ít vận hành nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — serverless, faiss, mapping đầy đủ.</li><li><strong>B</strong>: ❌ Sai — Aurora pgvector lưu vector kiểu dense, không phải cấu hình binary embedding này, và tốn công vận hành DB.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — managed cluster phải vận hành (cluster, version, VPC), không phải lựa chọn ít burden nhất.</li><li><strong>D</strong>: ❌ Sai — nmslib không hỗ trợ binary vectors, và public access là rủi ro bảo mật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OpenSearch Serverless, faiss, binary embeddings, index mapping</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'binary embedding' → engine <strong>faiss</strong>; 'ít vận hành' → <strong>OpenSearch Serverless</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 50,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>Create an Amazon OpenSearch Serverless vector collection with a faiss vector index that defines the vector, text, and metadata fields and matches the embedding dimensions.</p>",
              "correct": true,
              "feedback": "<p>This configuration supports binary vector embeddings for Bedrock Knowledge Bases and avoids managing OpenSearch cluster capacity. Bedrock requires the OpenSearch Serverless vector index mapping to expose a vector field, raw text field, and metadata field with dimensions that match the embedding model.</p>"
            },
            {
              "choice": "<p>Create an Amazon Aurora PostgreSQL database with pgvector tables that store binary embeddings, document text, and metadata fields and configure Bedrock to use the tables.</p>",
              "correct": false,
              "feedback": "<p>Aurora with pgvector can be used as a vector store for Bedrock Knowledge Bases, but the documented binary-vector support for Bedrock Knowledge Bases is limited to OpenSearch Serverless and OpenSearch Managed clusters. This choice does not satisfy the stated binary embedding requirement.</p>"
            },
            {
              "choice": "<p>Create an Amazon OpenSearch Managed cluster in VPC-only mode with engine version 2.16 and a faiss k-NN index that stores binary vectors.</p>",
              "correct": false,
              "feedback": "<p>OpenSearch Managed clusters require engine version 2.16 or later for binary vector embeddings, and faiss is the supported engine for Bedrock Knowledge Bases. However, Bedrock Knowledge Bases do not support VPC-only OpenSearch Managed domains, so this configuration is not valid.</p>"
            },
            {
              "choice": "<p>Create an Amazon OpenSearch Managed cluster with public access and a k-NN index that uses the nmslib engine with vector, text, and metadata fields.</p>",
              "correct": false,
              "feedback": "<p>OpenSearch Managed clusters can be used with Bedrock Knowledge Bases when the documented requirements are met. However, Bedrock's OpenSearch Managed setup must use the faiss engine, and nmslib is not supported for this integration.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an Amazon Bedrock Knowledge Base that uses a customer-managed vector store and stores <b>binary vector embeddings</b>, the documented vector store choices are limited to <b>Amazon OpenSearch Serverless</b> and <b>Amazon OpenSearch Managed clusters</b>. Because the scenario also asks for the lowest operational burden, OpenSearch Serverless is the better fit than managing an OpenSearch cluster directly.<br/><br/>Bedrock's OpenSearch Serverless integration expects the vector index to provide specific mappings: a vector field, a raw text field, and a Bedrock-managed metadata field. The Bedrock setup fields include values such as <code>collectionArn</code>, <code>vectorIndexName</code>, <code>vectorField</code>, <code>textField</code>, and <code>metadataField</code>, and the index dimensions must match the embedding model. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html\">Set up a data source for your knowledge base</a>.<br/><br/>Aurora PostgreSQL with pgvector is a valid vector store option for some Bedrock Knowledge Base designs, but it is not one of the documented choices for binary vector embeddings in Bedrock Knowledge Bases. OpenSearch Managed clusters are plausible, but they add cluster administration and have strict integration requirements, including public access for the domain and the <code>faiss</code> engine rather than <code>nmslib</code>. For the broader Bedrock Knowledge Bases modes and responsibilities, see <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html\">Knowledge bases for Amazon Bedrock</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This configuration supports binary vector embeddings for Bedrock Knowledge Bases and avoids managing OpenSearch cluster capacity. Bedrock requires the OpenSearch Serverless vector index mapping to expose a vector field, raw text field, and metadata field with dimensions that match the embedding model.<br/>• <strong>B</strong>: ❌ Aurora with pgvector can be used as a vector store for Bedrock Knowledge Bases, but the documented binary-vector support for Bedrock Knowledge Bases is limited to OpenSearch Serverless and OpenSearch Managed clusters. This choice does not satisfy the stated binary embedding requirement.<br/>• <strong>C</strong>: ❌ OpenSearch Managed clusters require engine version 2.16 or later for binary vector embeddings, and faiss is the supported engine for Bedrock Knowledge Bases. However, Bedrock Knowledge Bases do not support VPC-only OpenSearch Managed domains, so this configuration is not valid.<br/>• <strong>D</strong>: ❌ OpenSearch Managed clusters can be used with Bedrock Knowledge Bases when the documented requirements are met. However, Bedrock's OpenSearch Managed setup must use the faiss engine, and nmslib is not supported for this integration.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital textbook platform's engineering productivity team is standardizing how developers build generative AI features that use AWS Lambda, AWS CDK, and Amazon Bedrock APIs. Developers work in Visual Studio Code and JetBrains IDEs. The team needs help with AWS SDK questions, code suggestions and refactoring in the IDE, repository coding guidance, and security issue identification before pull requests. The team wants the fastest path with the least custom integration.</p><p>Which approach will meet these requirements MOST effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Công cụ hỗ trợ developer ngay trong VS Code và JetBrains: hỏi đáp AWS SDK, gợi ý code, refactor, security scan.</li><li>Ưu tiên: <strong>nhanh nhất</strong>, ít custom integration nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Q Developer</strong> là coding assistant có sẵn plugin IDE, cung cấp chat, inline suggestions, refactoring, project guidance và security scan mà không cần xây thêm gì.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ mọi tính năng, cài đặt trực tiếp vào IDE.</li><li><strong>B</strong>: ❌ Sai — Amazon Q Business là trợ lý kiến thức doanh nghiệp, không phải công cụ coding trong IDE; còn phải tự làm custom plugin.</li><li><strong>C</strong>: ❌ Sai — tự xây Bedrock agent, knowledge base, action groups là custom integration nặng, không có inline suggestion trong IDE.</li><li><strong>D</strong>: ❌ Sai — Amazon Q Apps là app workflow nhẹ, không thay thế được code suggestion và security scan.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Q Developer</li><li>IDE (VS Code, JetBrains)</li><li>Inline suggestions, security scan</li><li>Least custom integration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp developer cần trợ giúp code trong IDE → nghĩ ngay đến <strong>Amazon Q Developer</strong>; gặp hỏi đáp dữ liệu doanh nghiệp → Amazon Q Business.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 51,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>Deploy Amazon Q Developer in the approved IDEs. Configure project guidance, and use chat, inline suggestions, refactoring support, and security scans during pull request preparation.</p>",
              "correct": true,
              "feedback": "<p>Amazon Q Developer is designed for developer workflows, including IDE-based chat, code suggestions, AWS API assistance, refactoring help, and security scans. Project guidance can help align generated or suggested code with repository conventions without requiring a custom assistant.</p>"
            },
            {
              "choice": "<p>Deploy Amazon Q Business for the engineering organization. Connect source repositories and AWS documentation, and expose custom plugins for pull request and build workflow actions.</p>",
              "correct": false,
              "feedback": "<p>Amazon Q Business is intended for employee question answering and task automation over enterprise knowledge and applications. It does not provide the same IDE-native code completion, refactoring, and security scanning workflow expected for developers.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock agent for the engineering organization. Index AWS documentation in a knowledge base, and use action groups to run lint, test, and build commands.</p>",
              "correct": false,
              "feedback": "<p>An Amazon Bedrock agent can orchestrate tools and knowledge bases, but this approach requires custom integration and ongoing maintenance. It also does not natively provide the IDE code suggestion and security scanning experience required by the development workflow.</p>"
            },
            {
              "choice": "<p>Create Amazon Q Apps for the engineering organization. Build reusable workflow apps for code review checklists, prompt templates, and issue tracking updates through approved plugins.</p>",
              "correct": false,
              "feedback": "<p>Amazon Q Apps helps users create productivity applications from natural language, typically for business workflows. It is not the best fit for IDE-based code generation, refactoring, AWS SDK assistance, or security scanning.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Q Developer</b> is the AWS service that targets the software development lifecycle directly. It integrates with supported IDEs such as Visual Studio Code and JetBrains IDEs, and it can provide code suggestions, chat-based AWS guidance, code transformation and refactoring assistance, and security scanning in the developer environment. See <a href=\"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html\">What is Amazon Q Developer?</a> and <a href=\"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-in-IDE.html\">Amazon Q Developer in the IDE</a>.<br/><br/>The important tradeoff is integration depth. A custom Amazon Bedrock agent could answer questions and invoke tools, but the team would need to build and maintain the IDE, repository, testing, and security workflow integrations. Amazon Q Business and Amazon Q Apps are useful for enterprise assistants and no-code productivity applications, but they are not optimized for inline developer assistance inside an IDE. For accelerating GenAI application development with minimal custom work, the purpose-built developer assistant is the best fit.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ Amazon Q Developer is designed for developer workflows, including IDE-based chat, code suggestions, AWS API assistance, refactoring help, and security scans. Project guidance can help align generated or suggested code with repository conventions without requiring a custom assistant.<br/>• <strong>B</strong>: ❌ Amazon Q Business is intended for employee question answering and task automation over enterprise knowledge and applications. It does not provide the same IDE-native code completion, refactoring, and security scanning workflow expected for developers.<br/>• <strong>C</strong>: ❌ An Amazon Bedrock agent can orchestrate tools and knowledge bases, but this approach requires custom integration and ongoing maintenance. It also does not natively provide the IDE code suggestion and security scanning experience required by the development workflow.<br/>• <strong>D</strong>: ❌ Amazon Q Apps helps users create productivity applications from natural language, typically for business workflows. It is not the best fit for IDE-based code generation, refactoring, AWS SDK assistance, or security scanning.",
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
      "question_text": "<p>A university's research administration AI team is building an Amazon Bedrock RAG assistant for grants staff. The source content is split between Atlassian Confluence spaces and Microsoft SharePoint sites, both updated daily. The assistant must use supported source integrations rather than a custom crawler, minimize ownership of ingestion, indexing, storage, and retrieval infrastructure, and respect document-level access boundaries during retrieval for each grants staff user. The team can pass required user context from the application to retrieval calls, can tolerate externally scheduled synchronization, but cannot allow deleted or modified source documents to remain indefinitely stale in retrieval results.</p><p>Which integration design best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG trên Confluence và SharePoint, dùng connector được hỗ trợ, không tự viết crawler.</li><li>Phải <strong>giảm tối đa việc vận hành</strong> hạ tầng và tôn trọng quyền truy cập ở mức document cho từng user.</li><li>Sync theo lịch bên ngoài được, nhưng dữ liệu xóa/sửa không được stale mãi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Managed Knowledge Base</strong> có data source connector Confluence/SharePoint, hỗ trợ <strong>document-level permissions</strong> khi truyền user context lúc retrieval, và recurring StartIngestionJob đồng bộ cả nội dung sửa/xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — connector có sẵn, hạ tầng do AWS quản lý, ACL ở retrieval, sync định kỳ.</li><li><strong>B</strong>: ❌ Sai — custom data source phải tự ingest, tự map ACL, tự xóa: nhiều code và vận hành, đi ngược yêu cầu \"supported integrations\".</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự quản vector store, tự quản filter, tăng ownership hạ tầng.</li><li><strong>D</strong>: ❌ Sai — là cách export qua S3, thực chất là crawler/pipeline tự làm; metadata filter không phải ACL đầy đủ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Managed Knowledge Base</li><li>Confluence / SharePoint data source</li><li>Document-level permissions</li><li>StartIngestionJob</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp RAG + SaaS source + ACL + ít vận hành → nghĩ ngay đến <strong>Managed Knowledge Base</strong> với connector có sẵn.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 52,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>Create a Managed Knowledge Base, add Confluence and SharePoint data sources, configure document-level permissions, pass user context during retrieval, and schedule recurring StartIngestionJob calls.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the managed knowledge base type, which is the documented option for Bedrock-managed ingestion, indexing, storage, and retrieval infrastructure. Confluence and SharePoint are supported unstructured-data connectors, document-level permissions are documented for managed knowledge bases, and recurring StartIngestionJob calls can synchronize source changes.</p>"
            },
            {
              "choice": "<p>Create a custom Bedrock data source, ingest Confluence and SharePoint documents with KnowledgeBaseDocuments APIs, map ACL metadata in recurring jobs, and delete removed documents.</p>",
              "correct": false,
              "feedback": "<p>A custom data source supports direct document ingestion, deletion, and metadata attachment through KnowledgeBaseDocuments API operations. However, it requires the team to build and maintain the extraction, permission mapping, and update logic from Confluence and SharePoint, which conflicts with the requirement to use supported source integrations with minimal operational ownership.</p>"
            },
            {
              "choice": "<p>Create a customer-managed Bedrock Knowledge Base, ingest Confluence and SharePoint content into a self-managed vector store, apply user filters during retrieval, and schedule recurring sync jobs.</p>",
              "correct": false,
              "feedback": "<p>This design could enforce access boundaries if the team correctly builds and maintains the permission metadata and retrieval filters. However, it shifts more RAG pipeline and vector-store-related infrastructure ownership to the team and does not best meet the requirement to minimize managed infrastructure ownership.</p>"
            },
            {
              "choice": "<p>Create a Bedrock Knowledge Base over S3 exports, copy Confluence and SharePoint content to S3, enable metadata filters, and schedule export and sync jobs.</p>",
              "correct": false,
              "feedback": "<p>Amazon S3 is a supported data source, and metadata filters can be useful when the application reliably supplies per-user filter criteria. However, this design replaces the native Confluence and SharePoint integrations with a separate export pipeline and additional permission-mapping logic.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 52,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Knowledge Bases</b> is the AWS integration feature for RAG applications that need to retrieve proprietary data and use it to augment foundation model responses. A knowledge base can retrieve relevant content, return citations, and supply context to prompts, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html\">Amazon Bedrock Knowledge Bases</a>.<br/><br/>The important design distinction is whether the team wants Bedrock to manage the RAG infrastructure or whether the team wants to own the pipeline. A <b>Managed Knowledge Base</b> is the best fit when the team wants managed ingestion, indexing, storage, and retrieval infrastructure. The Bedrock Knowledge Bases documentation also distinguishes capabilities that are available for managed knowledge bases, including third-party connectors and document-level permissions.<br/><br/>Confluence and Microsoft SharePoint are supported unstructured-data connectors in the Bedrock Knowledge Bases data source workflow, as shown in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/data-source-connectors.html\">Connect to data sources for your knowledge base</a>. When document-level access boundaries are part of the design, the application must account for the required runtime user context rather than treating access control as a generic vector search property.<br/><br/>Synchronization is also part of the integration design. For non-direct-ingestion data sources, source changes are not automatically reflected at query time. The team must run sync operations such as externally scheduled calls to <code>StartIngestionJob</code>, and Bedrock Knowledge Bases performs incremental sync for added, modified, or deleted documents, as documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-data-source-sync-ingest.html\">Sync your data with your Amazon Bedrock knowledge base</a>.<br/><br/>Customer-managed knowledge bases, S3 export pipelines, and custom data sources can be valid patterns when an organization intentionally needs custom retrieval behavior or custom ingestion control. In this scenario, those alternatives add unnecessary ownership of vector-store infrastructure, connector logic, permission mapping, or deletion handling compared with using the managed native connectors and scheduled ingestion jobs.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses the managed knowledge base type, which is the documented option for Bedrock-managed ingestion, indexing, storage, and retrieval infrastructure. Confluence and SharePoint are supported unstructured-data connectors, document-level permissions are documented for managed knowledge bases, and recurring StartIngestionJob calls can synchronize source changes.<br/>• <strong>B</strong>: ❌ A custom data source supports direct document ingestion, deletion, and metadata attachment through KnowledgeBaseDocuments API operations. However, it requires the team to build and maintain the extraction, permission mapping, and update logic from Confluence and SharePoint, which conflicts with the requirement to use supported source integrations with minimal operational ownership.<br/>• <strong>C</strong>: ❌ This design could enforce access boundaries if the team correctly builds and maintains the permission metadata and retrieval filters. However, it shifts more RAG pipeline and vector-store-related infrastructure ownership to the team and does not best meet the requirement to minimize managed infrastructure ownership.<br/>• <strong>D</strong>: ❌ Amazon S3 is a supported data source, and metadata filters can be useful when the application reliably supplies per-user filter criteria. However, this design replaces the native Confluence and SharePoint integrations with a separate export pipeline and additional permission-mapping logic.",
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
      "question_text": "<p>A municipal tax software provider runs a nightly generative AI classification workload on Amazon SageMaker AI. The workload reads millions of small JSON Lines records from Amazon S3 and writes the classification results back to Amazon S3. The current transform job sends one record per container request on GPU instances, and monitoring shows low GPU utilization even though GPU memory has significant headroom. The model container can process newline-delimited batches and return one result per input record. The provider wants the job to finish faster while keeping the existing offline processing pattern.</p><p>Which change will meet these requirements with the LEAST architectural change?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Batch Transform đang gửi 1 record/request nên GPU idle, GPU memory còn dư.</li><li>Cần chạy nhanh hơn, vẫn giữ mô hình offline, <strong>thay đổi kiến trúc ít nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chỉ cần đổi cấu hình Batch Transform: <strong>MultiRecord batching</strong> gom nhiều dòng JSON Lines vào một request, <strong>MaxConcurrentTransforms</strong> tăng song song, MaxPayloadInMB chỉnh theo container, nhờ vậy GPU được dùng hiệu quả hơn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — thêm instance nhưng vẫn 1 record/request, GPU utilization vẫn thấp, tốn tiền hơn.</li><li><strong>B</strong>: ✅ Đúng — tối ưu ngay trong Batch Transform, không đổi kiến trúc.</li><li><strong>C</strong>: ❌ Sai — Asynchronous Inference là endpoint mới, từng record một lời gọi, đổi pattern.</li><li><strong>D</strong>: ❌ Sai — real-time endpoint + Lambda workers là thay đổi kiến trúc lớn, không phù hợp workload offline.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Batch Transform</li><li>MultiRecord (BatchStrategy)</li><li>MaxConcurrentTransforms</li><li>MaxPayloadInMB</li><li>Least architectural change</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp Batch Transform GPU idle, record nhỏ → nghĩ ngay đến <strong>MultiRecord batching</strong> + <strong>tăng concurrency</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 53,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>Configure SageMaker Batch Transform to keep one record per request, increase the instance count, and keep per-instance concurrency unchanged.</p>",
              "correct": false,
              "feedback": "<p>This can add parallelism across more instances, but it does not address the underutilization within each GPU instance. It is likely to increase cost before improving the request batching and concurrency that the existing instances can already support.</p>"
            },
            {
              "choice": "<p>Configure SageMaker Batch Transform to use MultiRecord batching, increase MaxConcurrentTransforms, and tune MaxPayloadInMB for the container.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Batch Transform can send multiple records in each request when the container supports batched input and output. Increasing concurrent transforms and tuning payload size can raise per-instance utilization and throughput without replacing the offline S3-based workflow.</p>"
            },
            {
              "choice": "<p>Deploy a SageMaker Asynchronous Inference endpoint, submit each S3 record as an invocation, and collect the generated outputs in Amazon S3.</p>",
              "correct": false,
              "feedback": "<p>Asynchronous Inference is useful for queued inference requests and large payloads when responses are not immediate. For a finite offline job that already uses S3 inputs and outputs, it adds endpoint and invocation management instead of optimizing the existing batch transform path.</p>"
            },
            {
              "choice": "<p>Deploy a SageMaker real-time endpoint with target tracking scaling, invoke it from parallel Lambda workers, and store responses in Amazon S3.</p>",
              "correct": false,
              "feedback": "<p>A real-time endpoint is designed for low-latency online inference rather than an offline nightly batch job. Parallel Lambda workers can increase request volume, but this approach adds orchestration overhead and does not use Batch Transform's built-in batching controls.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 53,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>SageMaker Batch Transform</b> is designed for offline inference against data in Amazon S3, so it is the natural fit when the requirement is to keep a finite, non-interactive batch workflow. For small independent records, the main throughput bottleneck is often per-request overhead rather than raw accelerator capacity. Using <code>BatchStrategy=MultiRecord</code> lets SageMaker send multiple records to the container in one request when the container can parse and return multi-record results.<br/><br/>The two key tuning levers are <code>MaxConcurrentTransforms</code>, which controls how many transform requests can be sent in parallel to each instance, and <code>MaxPayloadInMB</code>, which controls request payload sizing. These settings should be tuned together with container memory behavior and model latency so the GPU stays busy without causing failures or excessive queuing inside the container. See the SageMaker documentation for <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html\">Batch Transform</a> and the <a href=\"https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html\">CreateTransformJob API</a>.<br/><br/>Adding more instances, using asynchronous endpoints, or invoking a real-time endpoint from Lambda can all increase parallel request volume, but they solve a different problem. They either increase cost before improving per-instance efficiency or replace a purpose-built offline mechanism with an online serving architecture. For resource utilization and throughput, tune batching and concurrency first, then scale out once each instance is efficiently used.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This can add parallelism across more instances, but it does not address the underutilization within each GPU instance. It is likely to increase cost before improving the request batching and concurrency that the existing instances can already support.<br/>• <strong>B</strong>: ✅ This is correct because Batch Transform can send multiple records in each request when the container supports batched input and output. Increasing concurrent transforms and tuning payload size can raise per-instance utilization and throughput without replacing the offline S3-based workflow.<br/>• <strong>C</strong>: ❌ Asynchronous Inference is useful for queued inference requests and large payloads when responses are not immediate. For a finite offline job that already uses S3 inputs and outputs, it adds endpoint and invocation management instead of optimizing the existing batch transform path.<br/>• <strong>D</strong>: ❌ A real-time endpoint is designed for low-latency online inference rather than an offline nightly batch job. Parallel Lambda workers can increase request volume, but this approach adds orchestration overhead and does not use Batch Transform's built-in batching controls.",
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
      "question_text": "<p>A clinical research consortium's patient engagement team is building a low-latency chat assistant with Amazon Bedrock Converse for English and Spanish messages. User prompts and model responses can contain names, email addresses, phone numbers, patient IDs, and study-specific identifiers that match internal patterns. The assistant must preserve utility by masking sensitive values rather than dropping whole conversations, must protect both user input and text responses, and must retain safety audit records without storing raw identifiers in model invocation logs or guardrail trace fields. Batch-only redaction is not acceptable.</p><p>Which implementation best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chat latency thấp với Bedrock Converse, che (<strong>mask</strong>) PII và identifier nội bộ ở cả input lẫn output.</li><li>Phải giữ audit record nhưng không lưu raw identifier trong invocation log hay guardrail trace.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrail</strong> với sensitive information filters + custom regex mask được cả prompt và response inline, không gọi thêm service. Tắt <strong>model invocation logging</strong> cho workload này và chỉ lưu audit field đã sanitize (không có match gốc) để không rò raw PII.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — bật invocation logging và lưu full guardrail trace sẽ chứa giá trị gốc, vi phạm yêu cầu.</li><li><strong>B</strong>: ✅ Đúng — masking inline, không log raw, audit field đã làm sạch.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự xử lý trong code, thêm latency, và logging bật vẫn lưu raw prompt.</li><li><strong>D</strong>: ❌ Sai — ContainsPiiEntities chỉ trả về nhãn, không có vị trí để mask; không dùng guardrail, log lại nội dung.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails sensitive information filters</li><li>Custom regex</li><li>Masking (không block)</li><li>Invocation logging off</li><li>Sanitized audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp mask PII realtime nhưng không được lưu raw → nghĩ ngay đến <strong>Guardrails masking</strong> + <strong>không bật log nội dung</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 54,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail with sensitive information filters and custom regex filters, apply masking during inference, enable model invocation logging for this workload, and archive complete guardrail traces for audit review.</p>",
              "correct": false,
              "feedback": "<p>Bedrock model invocation logging can collect request data, response data, and metadata when it is enabled, so it is not safe to assume guardrail masking removes all sensitive values from logs. Guardrail trace fields for PII matches can contain the original PII value, which conflicts with the requirement to avoid storing raw identifiers.</p>"
            },
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail with sensitive information filters and custom regex filters, apply masking during inference, keep model invocation logging disabled for this workload, and store sanitized audit fields that omit original matches.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock Guardrails can mask built-in PII and custom regex matches in user input and text model responses while preserving placeholders such as PII type names. Model invocation logging and guardrail trace match values require separate handling because guardrail masking does not sanitize those stored records.</p>"
            },
            {
              "choice": "<p>Call Amazon Comprehend DetectPiiEntities synchronously and custom regex filters before and after Converse, mask detected spans in application code, keep model invocation logging enabled, and store the logs for audit.</p>",
              "correct": false,
              "feedback": "<p>DetectPiiEntities returns offsets that can support real-time masking logic for supported text, and custom regex can cover internal identifiers. However, model invocation logging can still capture model response data before application post-processing, which conflicts with the requirement to avoid storing raw identifiers in logs.</p>"
            },
            {
              "choice": "<p>Call Amazon Comprehend ContainsPiiEntities synchronously for each user message, replace returned PII labels with placeholders, invoke the model without a guardrail, and log transformed prompts and responses for audit.</p>",
              "correct": false,
              "feedback": "<p>ContainsPiiEntities returns PII labels with scores, not offsets for each occurrence, so it is not sufficient to replace individual sensitive values in the text. This approach also does not apply the same protection to model responses unless additional processing is added.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 54,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Guardrails</b> are the best fit when an interactive Bedrock application needs privacy controls that run inline with inference. Sensitive information filters can block or mask PII in both user input and model text responses, and custom regex filters can supplement built-in PII detection for organization-specific identifiers. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html?utm_source=openai\">Sensitive information filters for Amazon Bedrock Guardrails</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-how.html?utm_source=openai\">Use guardrails for Amazon Bedrock</a>.<br/><br/>The subtle governance issue is that masking the content sent to and returned from the model is not the same as sanitizing every audit artifact. AWS documents that guardrail PII masking does not mask model invocation logs, and that the guardrail trace field <code>match</code> can contain the original PII value. For a privacy-focused design, keep model invocation logging disabled for sensitive workloads unless there is a separately approved redaction path, and store only sanitized audit fields that prove the guardrail acted without retaining raw identifiers.<br/><br/>Amazon Comprehend can be useful in privacy pipelines, but its APIs must be selected carefully. <code>DetectPiiEntities</code> returns offsets that can support custom redaction logic for real-time text within the documented input size, while <code>ContainsPiiEntities</code> returns labels rather than per-occurrence offsets. Comprehend managed redaction uses asynchronous jobs through <code>StartPiiEntitiesDetectionJob</code>, so it is not the right primary mechanism for a low-latency chat turn. See <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/pii.html?utm_source=openai\">Detecting PII entities</a>, <a href=\"https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectPiiEntities.html?utm_source=openai\">DetectPiiEntities</a>, and <a href=\"https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartPiiEntitiesDetectionJob.html\">StartPiiEntitiesDetectionJob</a>.<br/><br/>Model invocation logging is disabled by default, but when enabled it can capture full request data, response data, and metadata for supported Bedrock runtime operations. That makes it valuable for troubleshooting, but risky for regulated or high-sensitivity workloads unless the organization has an explicit sanitization and access-control strategy. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html?utm_source=openai\">Model invocation logging</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Bedrock model invocation logging can collect request data, response data, and metadata when it is enabled, so it is not safe to assume guardrail masking removes all sensitive values from logs. Guardrail trace fields for PII matches can contain the original PII value, which conflicts with the requirement to avoid storing raw identifiers.<br/>• <strong>B</strong>: ✅ Amazon Bedrock Guardrails can mask built-in PII and custom regex matches in user input and text model responses while preserving placeholders such as PII type names. Model invocation logging and guardrail trace match values require separate handling because guardrail masking does not sanitize those stored records.<br/>• <strong>C</strong>: ❌ DetectPiiEntities returns offsets that can support real-time masking logic for supported text, and custom regex can cover internal identifiers. However, model invocation logging can still capture model response data before application post-processing, which conflicts with the requirement to avoid storing raw identifiers in logs.<br/>• <strong>D</strong>: ❌ ContainsPiiEntities returns PII labels with scores, not offsets for each occurrence, so it is not sufficient to replace individual sensitive values in the text. This approach also does not apply the same protection to model responses unless additional processing is added.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An airline loyalty program's contact-center AI team wants to decide whether to replace an existing non-Bedrock answer generator with an Amazon Bedrock model. The team has prepared 750 representative customer prompts in Amazon S3. For each prompt, the dataset includes the existing system's response with modelIdentifier set to legacy-assistant-v1. The team has 45 senior agents who must independently rate the legacy response and the candidate model response for helpfulness and preference. At least three agents should review each prompt, and the team wants an AWS-managed workflow with results stored in S3 for later analysis.</p><p>Which approach meets these requirements with the least custom development?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>So sánh hệ thống legacy (ngoài Bedrock) với model Bedrock bằng đánh giá của con người.</li><li>Mỗi prompt ít nhất 3 agent, kết quả lưu S3, <strong>ít phát triển nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock human-based evaluation</strong> hỗ trợ <strong>bring-your-own inference response</strong>; tên response source phải khớp modelIdentifier trong dataset (legacy-assistant-v1). Chọn comparison rating và 3 workers per prompt là đủ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tên source \"production-baseline\" không khớp modelIdentifier trong dataset nên mapping lỗi.</li><li><strong>B</strong>: ❌ Sai — automatic evaluation là chấm bằng máy, không có 45 agent đánh giá độc lập.</li><li><strong>C</strong>: ✅ Đúng — human eval, BYO response khớp tên, comparison rating, 3 workers.</li><li><strong>D</strong>: ❌ Sai — thêm \"control response source\" không có trong dữ liệu; thêm cả legacy source dư thừa và không cần rank.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Human-based model evaluation</li><li>Bring-your-own inference responses</li><li>modelIdentifier khớp tên</li><li>Workers per prompt</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp so sánh model ngoài Bedrock với human reviewer → nghĩ ngay đến <strong>human eval</strong> + <strong>BYO response</strong>, tên khớp modelIdentifier.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 55,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>Create an Amazon Bedrock human-based model evaluation job with the candidate model and a bring-your-own response source named production-baseline. Use the S3 prompt dataset and an S3 output location, choose a comparison rating method, and set three workers per prompt.</p>",
              "correct": false,
              "feedback": "<p>Human-based evaluation is the right evaluation type, but the bring-your-own response source name must match the modelIdentifier in the prompt dataset. Using a different source name would not correctly identify the existing system's responses for the evaluation job.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock automatic model evaluation job with the candidate model and a bring-your-own response source named legacy-assistant-v1. Use the S3 prompt dataset and an S3 output location, choose a quality metric, and review the computed scores.</p>",
              "correct": false,
              "feedback": "<p>Automatic evaluations produce computed metrics, but they do not collect ratings and preferences from the senior agents. This approach would not satisfy the requirement for independent human review of each prompt.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock human-based model evaluation job with the candidate model and a bring-your-own response source named legacy-assistant-v1. Use the S3 prompt dataset and an S3 output location, choose a comparison rating method, and set three workers per prompt.</p>",
              "correct": true,
              "feedback": "<p>This meets the requirement to collect structured ratings and preferences from human reviewers without building a custom annotation workflow. The bring-your-own response source name matches the modelIdentifier in the dataset, the prompt count is within the documented custom dataset limit, and three workers per prompt provides independent reviews.</p>"
            },
            {
              "choice": "<p>Create an Amazon Bedrock human-based model evaluation job with the candidate model, the legacy response source, and a control response source. Use the S3 prompt dataset and an S3 output location, choose a comparison rank method, and set three workers per prompt.</p>",
              "correct": false,
              "feedback": "<p>Human-based model evaluation jobs support evaluating up to two inference sources. Adding a third response source exceeds that documented limit, even though a comparison ranking style can be a valid human rating method.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 5: Testing, Validation, and Troubleshooting",
      "discusstion": [
        {
          "id": 55,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock evaluations</b> support several evaluation modes, and the right mode depends on what the team is trying to measure. Automatic evaluations are useful when a computed score is sufficient, while <i>human-based evaluations</i> are designed for subjective judgments such as helpfulness, preference, tone, and user experience. The documentation describes these evaluation approaches in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html\">Evaluate model performance using Amazon Bedrock</a>.<br/><br/>For this scenario, the team needs senior agents to compare two outputs and provide human ratings, so an Amazon Bedrock human-based model evaluation job is the best fit. The custom prompt dataset and output location must be in Amazon S3, and the documented custom prompt dataset maximum in this creation flow is 1,000 prompts, so 750 prompts is within that boundary. When using bring-your-own inference responses, the source name must match the <code>modelIdentifier</code> in the prompt dataset, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-jobs-management-create-human.html\">Create a model evaluation job that uses human workers</a>.<br/><br/>Human evaluation workers are organized into a work team, and Amazon Bedrock lets the job creator choose the number of workers per prompt. After the configured number of reviews is reached, the prompt and responses are removed from circulation, and the final report includes the ratings from the workers. This worker model is documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/human-worker-evaluations.html\">Human worker model evaluations</a>, and the report result fields are described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-report-human-customer.html\">Human-based model evaluation job report</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Human-based evaluation is the right evaluation type, but the bring-your-own response source name must match the modelIdentifier in the prompt dataset. Using a different source name would not correctly identify the existing system's responses for the evaluation job.<br/>• <strong>B</strong>: ❌ Automatic evaluations produce computed metrics, but they do not collect ratings and preferences from the senior agents. This approach would not satisfy the requirement for independent human review of each prompt.<br/>• <strong>C</strong>: ✅ This meets the requirement to collect structured ratings and preferences from human reviewers without building a custom annotation workflow. The bring-your-own response source name matches the modelIdentifier in the dataset, the prompt count is within the documented custom dataset limit, and three workers per prompt provides independent reviews.<br/>• <strong>D</strong>: ❌ Human-based model evaluation jobs support evaluating up to two inference sources. Adding a third response source exceeds that documented limit, even though a comparison ranking style can be a valid human rating method.",
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
      "question_text": "<p>A national insurance carrier's claims integration team is modernizing an existing service bus that already exposes HTTPS APIs to internal claims systems. The team is adding Amazon Bedrock capabilities through a small adapter service. One integration path will support a claims-assistant chat experience and should make it easy to switch among Bedrock models that support message-style conversations. Another integration path will call specialized Bedrock models for image generation and embedding generation, and those calls must preserve model-specific request parameters. The adapter must avoid routing failures caused by using the wrong Bedrock endpoint or payload contract.</p><p>Which TWO implementation actions should the team take? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hai đường tích hợp: chat dễ đổi model, và model chuyên biệt (image, embedding) giữ tham số riêng.</li><li>Tránh lỗi route do sai endpoint hoặc sai payload contract.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Converse API</strong> cho schema message thống nhất, đổi model dễ; <strong>InvokeModel</strong> với body JSON đúng schema native của từng model giữ được tham số riêng cho image/embedding.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Chat Completions là payload contract kiểu OpenAI-compatible, không phải một contract duy nhất cho mọi traffic.</li><li><strong>B</strong>: ❌ Sai — body generic dùng chung cho mọi model không tồn tại; bỏ contentType gây lỗi.</li><li><strong>C</strong>: ❌ Sai — model image/embedding không dùng message schema của Converse.</li><li><strong>D</strong>: ✅ Đúng — Converse trên bedrock-runtime cho chat model hỗ trợ.</li><li><strong>E</strong>: ✅ Đúng — InvokeModel với application/json khớp schema từng model.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Converse API</li><li>InvokeModel</li><li>Model-specific request body</li><li>bedrock-runtime endpoint</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp chat đổi model dễ → <strong>Converse</strong>; gặp image/embedding cần tham số riêng → <strong>InvokeModel</strong> với <strong>native body</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 56,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>Route all adapter traffic to the regional bedrock-runtime endpoint by using Chat Completions as the single payload contract.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because using a real regional runtime endpoint does not make one API contract valid for every inference pattern. Chat Completions can support compatible chat integrations, but it does not replace InvokeModel when specialized models require model-specific image or embedding payloads.</p>"
            },
            {
              "choice": "<p>Route every request through InvokeModel with a generic cross-model JSON body and omit contentType when accept is JSON.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because InvokeModel request bodies are model-specific, so a generic body will not satisfy every selected model contract. The contentType header must be application/json for InvokeModel, while accept defaults to application/json if not specified.</p>"
            },
            {
              "choice": "<p>Route image and embedding requests through the Converse API so the adapter can use one message schema for every model.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because Converse is the consistent interface for models that support messages, not a universal schema for every inference workload. AWS documents Invoke API usage for direct text, image, and embedding generation when model-specific request and response formats are needed.</p>"
            },
            {
              "choice": "<p>Route message-style assistant requests to the regional bedrock-runtime endpoint by using the Converse API for supported chat models.</p>",
              "correct": true,
              "feedback": "<p>This is correct because the Converse API is documented as a consistent interface across Amazon Bedrock models that support messages. The bedrock-runtime regional endpoint supports Converse, so the adapter can use a stable chat contract while still selecting among supported models.</p>"
            },
            {
              "choice": "<p>Route specialized generation requests to InvokeModel with application/json request bodies that match each selected model schema.</p>",
              "correct": true,
              "feedback": "<p>This is correct because InvokeModel provides direct model access and uses model-specific request bodies. The InvokeModel operation requires contentType to be application/json, and the adapter should validate payload size and schema before sending requests from enterprise systems.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 56,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Enterprise integrations often fail at the boundary between an internal API contract and the model provider's inference contract. Amazon Bedrock gives developers multiple inference APIs, but they are not interchangeable in payload shape. The <b>Converse API</b> is the better fit for a chat-style abstraction across supported message-capable models because it is designed as a consistent interface for message interactions. The <b>InvokeModel</b> operation is the better fit when the adapter must preserve direct access to model-specific parameters, such as those used by image generation or embedding models.<br/><br/>The endpoint and API mapping still matters operationally. AWS documents the Bedrock inference APIs and identifies which APIs are supported by the runtime endpoint, including <code>Converse</code> and <code>InvokeModel</code>. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/apis.html\">Amazon Bedrock inference APIs</a> for the API behavior and integration guidance. For direct invocation, <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel</a> requires <code>contentType</code> to be <code>application/json</code>, uses model-specific request bodies, and has documented body length constraints, so validating requests in the adapter is a practical enterprise integration control.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This is incorrect because using a real regional runtime endpoint does not make one API contract valid for every inference pattern. Chat Completions can support compatible chat integrations, but it does not replace InvokeModel when specialized models require model-specific image or embedding payloads.<br/>• <strong>B</strong>: ❌ This is incorrect because InvokeModel request bodies are model-specific, so a generic body will not satisfy every selected model contract. The contentType header must be application/json for InvokeModel, while accept defaults to application/json if not specified.<br/>• <strong>C</strong>: ❌ This is incorrect because Converse is the consistent interface for models that support messages, not a universal schema for every inference workload. AWS documents Invoke API usage for direct text, image, and embedding generation when model-specific request and response formats are needed.<br/>• <strong>D</strong>: ✅ This is correct because the Converse API is documented as a consistent interface across Amazon Bedrock models that support messages. The bedrock-runtime regional endpoint supports Converse, so the adapter can use a stable chat contract while still selecting among supported models.<br/>• <strong>E</strong>: ✅ This is correct because InvokeModel provides direct model access and uses model-specific request bodies. The InvokeModel operation requires contentType to be application/json, and the adapter should validate payload size and schema before sending requests from enterprise systems.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D, E"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global insurance claims platform team runs an interactive claims-assistance application by using Amazon Bedrock Knowledge Bases and a supported foundation model. Users report slow first responses during normal traffic. Amazon CloudWatch shows rare throttling, but high input token counts and elevated time to first token. API profiling shows that most requests reuse a long static claims-handling policy prompt, while retrieval often returns many overlapping passages from prior policy versions.</p><p>Which combination of actions will improve performance while reducing unnecessary model work? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Time to first token cao do input token lớn, prompt tĩnh dài lặp lại, retrieval trả nhiều passage trùng.</li><li>Throttling hiếm, nên vấn đề không phải thiếu capacity.</li><li>Mục tiêu: nhanh hơn và bớt công việc thừa cho model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Prompt caching</strong> tái dùng phần prefix tĩnh (system instruction, policy) để giảm latency và chi phí. <strong>Tinh chỉnh retrieval</strong> để trả ít chunk hơn và bỏ ngữ cảnh dư/cũ giảm input token.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đổi sang model nhỏ nhưng vẫn gửi context dư, có thể giảm chất lượng, không xử lý gốc rễ.</li><li><strong>B</strong>: ❌ Sai — async inference tăng độ trễ cho ứng dụng tương tác.</li><li><strong>C</strong>: ❌ Sai — provisioned throughput giải quyết throttling, trong khi throttling hiếm, input vẫn lớn.</li><li><strong>D</strong>: ✅ Đúng — ít chunk có metadata filter, bỏ context dư.</li><li><strong>E</strong>: ✅ Đúng — cache phần tĩnh, đặt input thay đổi sau prefix.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt caching</li><li>Static prefix</li><li>Retrieval parameters</li><li>Time to first token</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt tĩnh dài lặp lại + TTFT cao → nghĩ ngay đến <strong>prompt caching</strong> và <strong>giảm context thừa</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 57,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>Route every request to a smaller foundation model with prompt routing, and keep the existing retrieved context in each request.</p>",
              "correct": false,
              "feedback": "<p>Using smaller models can improve cost and latency for simple tasks, but routing every request the same way ignores task complexity. Keeping the oversized retrieved context also preserves the high input token count that is contributing to latency.</p>"
            },
            {
              "choice": "<p>Move the workflow to a SageMaker asynchronous inference endpoint with SQS buffering, and have clients poll for generated answers.</p>",
              "correct": false,
              "feedback": "<p>Asynchronous inference is useful when users can wait for results and the application does not need an immediate response. This claims-assistance workflow is interactive, and polling would not directly reduce the repeated prompt and retrieval work.</p>"
            },
            {
              "choice": "<p>Buy Amazon Bedrock provisioned throughput for the current model, and leave retrieval depth and prompt construction unchanged.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can help when an application needs predictable reserved model capacity or is constrained by throughput. The stated symptoms point to prompt and retrieval inefficiency rather than throttling or insufficient request capacity, so this leaves the main bottlenecks in place.</p>"
            },
            {
              "choice": "<p>Tune Knowledge Bases retrieval parameters to return fewer metadata-filtered chunks, and use profiling results to remove redundant or obsolete context.</p>",
              "correct": true,
              "feedback": "<p>This is correct because excessive retrieved context increases input tokens and model processing time. Metadata filtering and smaller retrieval sets can reduce prompt size while improving relevance when older or duplicate policy passages are being included.</p>"
            },
            {
              "choice": "<p>Configure Amazon Bedrock prompt caching for reusable system instructions and shared policy context, and keep changing user input outside the cached prefix.</p>",
              "correct": true,
              "feedback": "<p>This is correct because prompt caching can reduce repeated processing for static prompt prefixes on supported models. Keeping volatile user content outside the cached portion preserves cache reuse while allowing each request to remain personalized.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 57,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The fastest GenAI systems usually avoid sending unnecessary tokens to the model in the first place. <b>Amazon Bedrock prompt caching</b> is designed for repeated prompt prefixes, such as stable system instructions, tool definitions, or shared context, so supported models can reuse cached processing for that portion of later requests. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html\">Prompt caching for faster model inference</a>.<br/><br/>For RAG workloads, retrieval quality and prompt size are tightly coupled. Returning too many chunks, especially overlapping or stale chunks, increases input token count and can increase time to first token without improving answer quality. Knowledge Bases retrieval configuration supports controls such as result count and metadata filtering, which are practical levers for reducing unnecessary context before invoking the model, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html\">Configure and customize queries and response generation</a>.<br/><br/>CloudWatch metrics help distinguish between capacity problems and inefficient request construction. If throttling is rare but input tokens and latency are high, provisioned throughput is unlikely to be the most direct fix because it reserves capacity for model invocation rather than making prompts smaller or retrieval cleaner. Bedrock monitoring guidance is available in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html\">Monitor Amazon Bedrock with Amazon CloudWatch</a>, and provisioned throughput behavior is described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html\">Increase model invocation capacity with Provisioned Throughput</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Using smaller models can improve cost and latency for simple tasks, but routing every request the same way ignores task complexity. Keeping the oversized retrieved context also preserves the high input token count that is contributing to latency.<br/>• <strong>B</strong>: ❌ Asynchronous inference is useful when users can wait for results and the application does not need an immediate response. This claims-assistance workflow is interactive, and polling would not directly reduce the repeated prompt and retrieval work.<br/>• <strong>C</strong>: ❌ Provisioned throughput can help when an application needs predictable reserved model capacity or is constrained by throughput. The stated symptoms point to prompt and retrieval inefficiency rather than throttling or insufficient request capacity, so this leaves the main bottlenecks in place.<br/>• <strong>D</strong>: ✅ This is correct because excessive retrieved context increases input tokens and model processing time. Metadata filtering and smaller retrieval sets can reduce prompt size while improving relevance when older or duplicate policy passages are being included.<br/>• <strong>E</strong>: ✅ This is correct because prompt caching can reduce repeated processing for static prompt prefixes on supported models. Keeping volatile user content outside the cached portion preserves cache reuse while allowing each request to remain personalized.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D, E"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail bank's digital channels AI team runs an Amazon Bedrock assistant that answers policy questions for branch employees. Several developers edit the same prompt frequently. Some prompt releases improve factual completeness, but other releases produce responses that downstream systems cannot parse. The bank wants to improve answer quality over time, preserve a traceable history of prompt changes, and avoid model customization.</p><p>Which approach best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều developer sửa prompt, một số bản làm output không parse được.</li><li>Cần cải thiện chất lượng theo thời gian, lưu lịch sử thay đổi, không customize model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Prompt Management</strong> quản lý version prompt, biến (variables), kèm JSON response contract. Gắn <strong>user rating</strong> vào từng prompt version tạo vòng phản hồi để so sánh bản nào tốt hơn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Guardrails dùng cho an toàn, không quản version prompt hay đảm bảo format; intervention count không đo chất lượng.</li><li><strong>B</strong>: ❌ Sai — prompt trong code không có lịch sử rõ ràng; độ dài response không phải chất lượng.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — repo và CI có history, nhưng so release notes không đo feedback thực tế, phải tự làm nhiều.</li><li><strong>D</strong>: ✅ Đúng — versioning, biến, JSON contract, liên kết rating với version.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>Prompt versions</li><li>Variables</li><li>JSON response contract</li><li>Feedback loop</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt cần version, truy vết, cải thiện dần → nghĩ ngay đến <strong>Bedrock Prompt Management</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 58,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>Apply Amazon Bedrock Guardrails to the existing prompt, configure denied topics and PII masking, validate JSON in application code, and use guardrail intervention counts as the feedback loop.</p>",
              "correct": false,
              "feedback": "<p>Guardrails are useful for safety, privacy, and policy controls, and application-side schema validation can reject malformed JSON. Guardrail intervention counts do not directly measure whether answers are complete, helpful, or consistently parseable across prompt releases.</p>"
            },
            {
              "choice": "<p>Keep the prompt in application code, lower temperature to zero, request step-by-step reasoning, and use average response length as the primary quality signal.</p>",
              "correct": false,
              "feedback": "<p>Lowering temperature can reduce variability, but it does not provide managed prompt versioning or a meaningful feedback loop. Average response length is a weak proxy for quality and does not measure factual completeness, parseability, or user usefulness.</p>"
            },
            {
              "choice": "<p>Store prompt templates in a source repository, run CI checks against sample outputs, inject policy context at runtime, and compare release notes after deployment.</p>",
              "correct": false,
              "feedback": "<p>A source repository and CI checks can provide general change control, but they do not provide Bedrock-native prompt management for reusable prompt resources and versions. Comparing release notes after deployment is weaker than correlating actual user feedback or reviewer judgments with the prompt version that produced each response.</p>"
            },
            {
              "choice": "<p>Store prompt releases in Amazon Bedrock Prompt Management, define variables for policy context and user intent, specify a JSON response contract, and correlate user ratings with prompt versions.</p>",
              "correct": true,
              "feedback": "<p>Prompt Management supports reusable prompts with variables and versioning, which helps teams track prompt changes and compare behavior across releases. Structured input components, output format specifications, and feedback tied to prompt versions create an iterative quality loop without model customization.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For this scenario, the strongest approach is to treat prompts as managed, versioned application artifacts and then use measurable feedback to decide which version performs best. <b>Amazon Bedrock Prompt Management</b> lets teams create reusable prompts, include variables, and manage prompt versions, which fits a multi-developer workflow better than embedding an unmanaged prompt directly in application code. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Prompt management in Amazon Bedrock</a>.<br/><br/>Structured prompting improves both model behavior and application integration. Separating inputs into fields such as policy context, user role, and user question reduces ambiguity, while an explicit <code>JSON</code> response contract makes downstream parsing more reliable. Because generative output can still vary, production systems should validate the returned structure instead of assuming that a format instruction is an absolute guarantee.<br/><br/>A feedback loop is what turns prompt engineering from one-time wording changes into an iterative engineering process. Capturing user ratings or reviewer judgments with the prompt version makes it possible to compare releases, identify regressions, and refine the prompt based on evidence. Amazon Bedrock also supports evaluation workflows that can help compare model or application behavior with datasets and metrics, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html\">Model evaluation in Amazon Bedrock</a>.<br/><br/>The other approaches each address only part of the problem. Deterministic settings and chain-of-thought style instructions can help some tasks, but they do not create traceable prompt releases or reliable quality metrics. A source repository with CI checks can add software delivery discipline, but it lacks the Bedrock-native prompt resource workflow and feedback correlation needed here. Guardrails are valuable for safety and compliance, but they do not replace prompt lifecycle management or response-quality measurement.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Guardrails are useful for safety, privacy, and policy controls, and application-side schema validation can reject malformed JSON. Guardrail intervention counts do not directly measure whether answers are complete, helpful, or consistently parseable across prompt releases.<br/>• <strong>B</strong>: ❌ Lowering temperature can reduce variability, but it does not provide managed prompt versioning or a meaningful feedback loop. Average response length is a weak proxy for quality and does not measure factual completeness, parseability, or user usefulness.<br/>• <strong>C</strong>: ❌ A source repository and CI checks can provide general change control, but they do not provide Bedrock-native prompt management for reusable prompt resources and versions. Comparing release notes after deployment is weaker than correlating actual user feedback or reviewer judgments with the prompt version that produced each response.<br/>• <strong>D</strong>: ✅ Prompt Management supports reusable prompts with variables and versioning, which helps teams track prompt changes and compare behavior across releases. Structured input components, output format specifications, and feedback tied to prompt versions create an iterative quality loop without model customization.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A national retail bank's digital servicing platform team is standardizing how internal applications interact with Amazon Bedrock models. The team needs one synchronous chat interface that can support multiple message-capable models while still allowing model-specific parameters when required. A second interface must support real-time streaming for selected models, but the implementation must avoid unsupported client tooling and must verify model capability before enabling streaming. The bank wants to use Bedrock-native inference endpoints rather than OpenAI-compatible compatibility APIs or provider-specific endpoint families.</p><p>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một interface chat đồng bộ đa model, cho phép tham số riêng model.</li><li>Một interface streaming, chỉ dùng tooling được hỗ trợ và kiểm tra capability trước.</li><li>Dùng endpoint Bedrock-native.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Converse</strong> trên bedrock-runtime là API thống nhất, <strong>additionalModelRequestFields</strong> chứa tham số riêng. Streaming phải kiểm tra <strong>responseStreamingSupported</strong> qua GetFoundationModel, rồi mới dùng ConverseStream hoặc InvokeModelWithResponseStream bằng SDK.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Converse + additionalModelRequestFields.</li><li><strong>B</strong>: ❌ Sai — Converse cần bedrock:InvokeModel; chỉ cấp InvokeModelWithResponseStream thì lời gọi đồng bộ bị từ chối.</li><li><strong>C</strong>: ❌ Sai — InvokeModel bắt mỗi app dùng body native của từng provider, không phải một interface thống nhất.</li><li><strong>D</strong>: ❌ Sai — AWS CLI không phù hợp để stream trong ứng dụng, và ConverseStream không hỗ trợ mọi model.</li><li><strong>E</strong>: ✅ Đúng — kiểm tra khả năng streaming trước khi bật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Converse / ConverseStream</li><li>additionalModelRequestFields</li><li>GetFoundationModel</li><li>responseStreamingSupported</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp unified chat + tham số riêng model → <strong>Converse</strong> + <strong>additionalModelRequestFields</strong>; gặp streaming → check <strong>responseStreamingSupported</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>Build the synchronous chat interface with the AWS SDK by calling the Converse API on the regional bedrock-runtime endpoint, and pass model-specific parameters through additionalModelRequestFields when needed.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Converse provides a consistent synchronous messages interface for supported message-capable models. The API supports model-specific request fields through additionalModelRequestFields and uses the Bedrock runtime endpoint family for Bedrock-native inference.</p>"
            },
            {
              "choice": "<p>Build the synchronous chat interface with the AWS SDK by calling Converse for supported message-capable models, and grant callers only bedrock:InvokeModelWithResponseStream permission.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because Converse requires bedrock:InvokeModel permission for authorization. Granting only the streaming invocation permission would not authorize the required synchronous Converse calls, even when the selected model supports messages.</p>"
            },
            {
              "choice": "<p>Build the synchronous chat interface with the AWS SDK by calling InvokeModel on the regional bedrock-runtime endpoint, and require each application to send the native request body for its chosen provider.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because InvokeModel is a valid Bedrock-native synchronous API, but it does not provide the unified messages abstraction required by the scenario. Requiring each application to use provider-specific request bodies pushes model-specific integration logic into clients instead of standardizing the chat interface.</p>"
            },
            {
              "choice": "<p>Build the streaming interface with the AWS CLI by calling ConverseStream for every selected chat model, and fall back to InvokeModelWithResponseStream when a stream fails.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because the AWS CLI does not support Bedrock streaming operations such as ConverseStream and InvokeModelWithResponseStream. It also relies on failure-based fallback rather than checking model streaming capability before enabling the interface.</p>"
            },
            {
              "choice": "<p>Build the streaming interface with an AWS SDK by calling ConverseStream or InvokeModelWithResponseStream only after checking GetFoundationModel for responseStreamingSupported on the selected model.</p>",
              "correct": true,
              "feedback": "<p>This is correct because streaming support is model-dependent in Amazon Bedrock. Checking the model metadata before enabling streaming prevents the integration layer from selecting a streaming operation for a model that does not support it.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 59,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>Amazon Bedrock exposes different runtime API patterns for different interaction styles. <code>Converse</code> is the practical fit for a synchronous chat abstraction because it gives applications a consistent messages interface across models that support messages, while <code>additionalModelRequestFields</code> preserves access to model-specific settings when the common schema is not enough. See the Amazon Bedrock model API compatibility guidance in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/models-api-compatibility.html\">Supported models and model features</a> and the <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html\">Converse API reference</a>.<br/><br/>For streaming, the important design point is that streaming is not universal. An integration layer should check model capability, specifically the documented <code>responseStreamingSupported</code> field returned by <code>GetFoundationModel</code>, before choosing <code>ConverseStream</code> or <code>InvokeModelWithResponseStream</code>. The <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html\">ConverseStream API reference</a> also notes that AWS CLI support is not available for Bedrock streaming operations, so production streaming clients should use an SDK or another supported runtime client.<br/><br/>The endpoint family is another subtle but important boundary. Bedrock-native APIs such as <code>InvokeModel</code> and <code>Converse</code> use the regional <code>bedrock-runtime</code> endpoint, while OpenAI-compatible APIs are documented separately from the native runtime API pattern. Keeping those client paths separate helps avoid brittle integrations, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html\">Amazon Bedrock endpoints and quotas</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This is correct because Converse provides a consistent synchronous messages interface for supported message-capable models. The API supports model-specific request fields through additionalModelRequestFields and uses the Bedrock runtime endpoint family for Bedrock-native inference.<br/>• <strong>B</strong>: ❌ This is incorrect because Converse requires bedrock:InvokeModel permission for authorization. Granting only the streaming invocation permission would not authorize the required synchronous Converse calls, even when the selected model supports messages.<br/>• <strong>C</strong>: ❌ This is incorrect because InvokeModel is a valid Bedrock-native synchronous API, but it does not provide the unified messages abstraction required by the scenario. Requiring each application to use provider-specific request bodies pushes model-specific integration logic into clients instead of standardizing the chat interface.<br/>• <strong>D</strong>: ❌ This is incorrect because the AWS CLI does not support Bedrock streaming operations such as ConverseStream and InvokeModelWithResponseStream. It also relies on failure-based fallback rather than checking model streaming capability before enabling the interface.<br/>• <strong>E</strong>: ✅ This is correct because streaming support is model-dependent in Amazon Bedrock. Checking the model metadata before enabling streaming prevents the integration layer from selecting a streaming operation for a model that does not support it.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, E"
        }
      ]
    },
    {
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international architecture firm's AI platform team is launching several internal design-assistant applications on Amazon Bedrock. The firm is not an existing AWS Audit Manager customer. The governance board has approved a standard Bedrock guardrail that includes denied topics and sensitive information filters. Application teams invoke Bedrock directly from their own production roles by using Converse, ConverseStream, InvokeModel, and InvokeModelWithResponseStream. The board wants a control that prevents production callers from bypassing the approved guardrail during inference, while preserving the existing Bedrock runtime APIs and avoiding a custom proxy layer.</p><p>Which approach best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần control ngăn production caller bỏ qua guardrail đã duyệt khi inference.</li><li>Giữ nguyên runtime API, không dùng custom proxy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>IAM policy với condition key <strong>bedrock:GuardrailIdentifier</strong> ép caller phải chỉ định đúng guardrail (kèm version) thì mới được gọi, đây là <strong>preventive control</strong> áp dụng cho Converse, ConverseStream, InvokeModel và InvokeModelWithResponseStream.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ là tài liệu và giám sát, không ngăn được bypass.</li><li><strong>B</strong>: ❌ Sai — Audit Manager thu thập bằng chứng tuân thủ, không phải cơ chế chặn lúc runtime; công ty chưa dùng Audit Manager.</li><li><strong>C</strong>: ✅ Đúng — enforce bằng IAM, preventive.</li><li><strong>D</strong>: ❌ Sai — invocation logs chỉ phát hiện sau sự việc, không phòng ngừa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>bedrock:GuardrailIdentifier</li><li>IAM condition key</li><li>Preventive control</li><li>Guardrail version</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp 'ngăn bypass guardrail' → nghĩ ngay đến <strong>IAM condition bedrock:GuardrailIdentifier</strong>, không phải monitoring.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 60,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>Publish the approved guardrail version and document it in the platform standards, then monitor application deployments for teams that omit the guardrail configuration.</p>",
              "correct": false,
              "feedback": "<p>Publishing and documenting a guardrail creates a standard, but it does not force callers to use that guardrail during inference. A caller can still invoke Bedrock without specifying the guardrail identifier and version unless permissions or application controls prevent that behavior.</p>"
            },
            {
              "choice": "<p>Create an AWS Audit Manager assessment from Generative AI Best Practices Framework v2, then use assessment evidence as the production approval mechanism.</p>",
              "correct": false,
              "feedback": "<p>AWS Audit Manager is no longer open to new customers, and the scenario states that the firm is not an existing customer. The Generative AI Best Practices Framework v2 helps collect evidence for governance activities, but AWS states that its controls do not verify compliance or guarantee audit success, and it is not a runtime enforcement mechanism.</p>"
            },
            {
              "choice": "<p>Apply IAM policies to production Bedrock roles that require the approved bedrock:GuardrailIdentifier on supported runtime APIs, and require applications to pass the guardrail version.</p>",
              "correct": true,
              "feedback": "<p>This approach enforces guardrail use at authorization time for the supported Bedrock runtime APIs in the scenario. Bedrock guardrails are applied during inference only when the request references the guardrail identifier and version, so requiring those values prevents direct callers from omitting the approved guardrail.</p>"
            },
            {
              "choice": "<p>Enable Bedrock model invocation logs for all production accounts, then review prompts and responses to identify teams that bypass the approved guardrail.</p>",
              "correct": false,
              "feedback": "<p>Model invocation logging can support after-the-fact monitoring, but it does not prevent a production request from bypassing the guardrail. The documentation also notes that blocked content can appear as plain text in model invocation logs when logging is enabled, so logging must be governed carefully.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For runtime governance of Bedrock applications, the key distinction is between a <b>standard</b> and an <b>enforced control</b>. A guardrail can contain policies such as denied topics and sensitive information filters, but Bedrock applies it to a model call only when the request references the guardrail identifier and version. The Bedrock runtime APIs support applying guardrails during inference, and the response can indicate whether the guardrail action was <code>INTERVENED</code> or <code>NONE</code> when the guardrail is used, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-test.html\">Test a guardrail in Amazon Bedrock</a>.<br/><br/>IAM is the right governance lever when application teams can call Bedrock directly and the organization wants to avoid a central proxy. By using the <code>bedrock:GuardrailIdentifier</code> condition key on the supported runtime APIs named in the scenario, the platform team can make authorization depend on use of the approved guardrail while preserving the native Bedrock invocation path. This complements the guardrail behavior documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-how.html\">How guardrails work in Amazon Bedrock</a> and the available policy types documented in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-components.html\">Guardrail components</a>.<br/><br/>Logging, written standards, and assessments are useful governance artifacts, but they do not replace preventive controls. Model invocation logs can help with monitoring and investigation, but they are reactive and can contain blocked content as plain text if enabled. AWS Audit Manager's <a href=\"https://docs.aws.amazon.com/audit-manager/latest/userguide/aws-generative-ai-best-practices.html\">AWS Generative AI Best Practices Framework v2</a> supports evidence collection for Bedrock and SageMaker AI for existing Audit Manager customers, but AWS states that the controls are not intended to verify compliance, cannot guarantee audit success, and do not automatically collect all procedural evidence.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Publishing and documenting a guardrail creates a standard, but it does not force callers to use that guardrail during inference. A caller can still invoke Bedrock without specifying the guardrail identifier and version unless permissions or application controls prevent that behavior.<br/>• <strong>B</strong>: ❌ AWS Audit Manager is no longer open to new customers, and the scenario states that the firm is not an existing customer. The Generative AI Best Practices Framework v2 helps collect evidence for governance activities, but AWS states that its controls do not verify compliance or guarantee audit success, and it is not a runtime enforcement mechanism.<br/>• <strong>C</strong>: ✅ This approach enforces guardrail use at authorization time for the supported Bedrock runtime APIs in the scenario. Bedrock guardrails are applied during inference only when the request references the guardrail identifier and version, so requiring those values prevents direct callers from omitting the approved guardrail.<br/>• <strong>D</strong>: ❌ Model invocation logging can support after-the-fact monitoring, but it does not prevent a production request from bypassing the guardrail. The documentation also notes that blocked content can appear as plain text in model invocation logs when logging is enabled, so logging must be governed carefully.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A live sports analytics provider runs a fan-facing commentary assistant on Amazon Bedrock. The assistant uses a specific foundation model that is available in only a subset of AWS Regions. During major events, the provider sees intermittent throttling and wants the assistant to keep generating fresh responses with the same model if the application's home Region has a temporary Bedrock capacity issue. The team must minimize routing logic and operational overhead.</p><p>Which solution best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Model chỉ có ở một số Region, thỉnh thoảng throttling lúc cao điểm.</li><li>Muốn tiếp tục sinh response mới bằng cùng model khi Region nhà thiếu capacity, <strong>ít logic routing</strong> và <strong>vận hành nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region inference profile</strong> tự động route request sang Region khác hỗ trợ cùng model khi bị giới hạn capacity; app chỉ đổi model ID thành profile ID trong lời gọi Bedrock runtime hiện có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự làm Route 53 health check và nhiều integration, nhiều logic và vận hành.</li><li><strong>B</strong>: ❌ Sai — circuit breaker trả cache nên không sinh response mới, thêm Step Functions phức tạp.</li><li><strong>C</strong>: ✅ Đúng — managed, thay đổi tối thiểu.</li><li><strong>D</strong>: ❌ Sai — provisioned throughput tốn kém, vẫn ở một Region, backoff không giải quyết Region thiếu capacity.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region inference profile</li><li>Inference profile ID</li><li>Throttling</li><li>Minimal routing logic</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp throttling/capacity Region + giữ cùng model → nghĩ ngay đến <strong>cross-Region inference profile</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 61,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>Create separate Amazon Bedrock model integrations in each supported Region, and use Route 53 health checks to direct runtime calls to the closest healthy endpoint.</p>",
              "correct": false,
              "feedback": "<p>This approach adds custom regional routing and operational complexity that the scenario asks to minimize. It also requires the team to manage regional endpoint selection itself instead of using Bedrock-managed routing for supported cross-Region profiles.</p>"
            },
            {
              "choice": "<p>Wrap each Bedrock runtime call in an AWS Step Functions circuit breaker, and return cached commentary until the home Region becomes healthy.</p>",
              "correct": false,
              "feedback": "<p>A circuit breaker with cached output is a valid graceful degradation pattern, but it does not meet the requirement to keep generating fresh responses with the same model. It also changes the user experience by serving stale content during the disruption.</p>"
            },
            {
              "choice": "<p>Invoke the model through an Amazon Bedrock cross-Region inference profile, and update the application to use the profile identifier in existing Bedrock runtime calls.</p>",
              "correct": true,
              "feedback": "<p>A cross-Region inference profile lets Amazon Bedrock route supported model invocations across configured destination Regions, which can improve resilience and throughput without custom regional routing. The application can use the profile identifier in Bedrock runtime calls while continuing to target the same supported model.</p>"
            },
            {
              "choice": "<p>Purchase Amazon Bedrock provisioned throughput for the model in the home Region, and increase exponential backoff settings for failed runtime calls.</p>",
              "correct": false,
              "feedback": "<p>Provisioned throughput can help when predictable capacity is needed in a Region, but it does not provide managed failover across Regions during a home-Region disruption. Longer backoff can reduce retry pressure, but it does not keep the assistant generating fresh responses when regional capacity remains unavailable.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 61,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock cross-Region inference</b> is designed for scenarios where an application needs more resilience or throughput than a single Region can provide for supported models. Instead of building custom health checks and regional routing, the application invokes an <b>inference profile</b>, and Bedrock routes the request to one of the profile's supported destination Regions. The AWS documentation describes this capability in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html\">Increase throughput with cross-Region inference</a> and explains inference profiles in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles.html\">Inference profiles</a>.<br/><br/>This pattern fits the scenario because the application must continue generating fresh responses with the same model while minimizing operational overhead. A profile-based invocation keeps the application in the Bedrock runtime API path, while avoiding a do-it-yourself multi-Region routing layer.<br/><br/>Provisioned throughput is useful for predictable capacity, but it is scoped to provisioned capacity for a model rather than being a regional disruption strategy. Step Functions circuit breakers and cached responses are useful graceful degradation techniques, but they trade freshness for continuity, which does not satisfy this workload's stated requirement.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach adds custom regional routing and operational complexity that the scenario asks to minimize. It also requires the team to manage regional endpoint selection itself instead of using Bedrock-managed routing for supported cross-Region profiles.<br/>• <strong>B</strong>: ❌ A circuit breaker with cached output is a valid graceful degradation pattern, but it does not meet the requirement to keep generating fresh responses with the same model. It also changes the user experience by serving stale content during the disruption.<br/>• <strong>C</strong>: ✅ A cross-Region inference profile lets Amazon Bedrock route supported model invocations across configured destination Regions, which can improve resilience and throughput without custom regional routing. The application can use the profile identifier in Bedrock runtime calls while continuing to target the same supported model.<br/>• <strong>D</strong>: ❌ Provisioned throughput can help when predictable capacity is needed in a Region, but it does not provide managed failover across Regions during a home-Region disruption. Longer backoff can reduce retry pressure, but it does not keep the assistant generating fresh responses when regional capacity remains unavailable.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional airline's contact center platform team uses Amazon Bedrock Runtime InvokeModel from a middleware service that receives a fixed internal request object from web and mobile clients. The middleware routes requests to multiple Bedrock model IDs, including base models from different providers and customized models. After adding an imported customized model, some requests fail validation and other requests complete but do not honor several generation settings. The team must keep the client contract unchanged and must continue using InvokeModel.</p><p>Which change should the team implement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>InvokeModel đến nhiều model (base khác provider, customized, imported) từ một request object cố định.</li><li>Lỗi validation và tham số bị bỏ qua vì body không khớp từng model.</li><li>Phải giữ client contract và vẫn dùng InvokeModel.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>InvokeModel nhận body theo <strong>schema native</strong> của từng model, nên middleware phải có <strong>lớp serialization</strong> nhận biết modelId, chuyển canonical request thành body documented cho model đó.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — gửi prompt kèm key không hỗ trợ gây lỗi hoặc bị bỏ qua.</li><li><strong>B</strong>: ❌ Sai — imported/customized model có thể không dùng body của model gốc, schema khác nhau.</li><li><strong>C</strong>: ❌ Sai — messages/system/maxTokens là schema kiểu Converse, không phải mọi model native đều chấp nhận.</li><li><strong>D</strong>: ✅ Đúng — model-aware, đúng body từng model.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>InvokeModel</li><li>Native request body</li><li>Model-aware serialization</li><li>contentType application/json</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp InvokeModel nhiều model, tham số bị lỗi/bỏ qua → nghĩ ngay đến <strong>body native theo từng modelId</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 62,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>Build a prompt-only serialization layer that sets contentType to application/json and sends prompt text plus all optional parameters, leaving unsupported keys in place.</p>",
              "correct": false,
              "feedback": "<p>Keeping unsupported keys in the payload does not make InvokeModel normalize or translate those parameters for the selected model. For imported customized models, unmatched parameters can be ignored, which conflicts with the requirement to honor generation settings.</p>"
            },
            {
              "choice": "<p>Build a source-model serialization layer that sets contentType to application/json and sends the original foundation model body to every customized or imported model.</p>",
              "correct": false,
              "feedback": "<p>Customized models use the inference parameters of the foundation model they were customized from, but that does not create one body shape for all routed models. Imported customized models ignore parameters that do not match documented parameters, so this approach can preserve the silent parameter loss.</p>"
            },
            {
              "choice": "<p>Build a shared serialization layer that sets contentType to application/json and sends the same messages, system, temperature, and maxTokens body to each modelId.</p>",
              "correct": false,
              "feedback": "<p>A JSON content type is necessary, but it is not sufficient because InvokeModel native request bodies are not universal across model providers. Sending one generic body to every model can still cause validation failures or ignored settings.</p>"
            },
            {
              "choice": "<p>Build a model-aware serialization layer that sets contentType to application/json and converts the canonical request into the documented native body for each modelId.</p>",
              "correct": true,
              "feedback": "<p>InvokeModel requires a JSON request body, but the JSON shape and inference parameters depend on the selected model. A middleware adapter can preserve the client contract while emitting the correct native payload for each model ID.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 62,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Runtime InvokeModel</b> accepts the request body as JSON, with <code>contentType</code> set to <code>application/json</code>, and the response <code>accept</code> value defaults to JSON. The body is not a single provider-neutral schema for native invocation. It must contain the prompt and inference parameters in the JSON format required by the model being invoked, and the request body has a documented maximum size of 25,000,000 bytes. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel API reference</a>.<br/><br/>The key design point is to separate the application’s stable internal contract from the Bedrock native wire format. A model-aware adapter lets clients send one canonical object while the service maps that object into the correct payload for the selected <code>modelId</code>. This is especially important when routing across providers or model families, because Bedrock native inference parameters depend on the model, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html\">Inference request parameters and response fields for foundation models</a>.<br/><br/>For customized models, the parameter set follows the foundation model that the customization was based on. For imported customized models, parameters that do not match the documented parameters are ignored, so adding extra keys is an anti-pattern when the application expects those controls to take effect. The safest middleware pattern is explicit serialization and validation per selected model, not a universal JSON body that happens to be syntactically valid.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Keeping unsupported keys in the payload does not make InvokeModel normalize or translate those parameters for the selected model. For imported customized models, unmatched parameters can be ignored, which conflicts with the requirement to honor generation settings.<br/>• <strong>B</strong>: ❌ Customized models use the inference parameters of the foundation model they were customized from, but that does not create one body shape for all routed models. Imported customized models ignore parameters that do not match documented parameters, so this approach can preserve the silent parameter loss.<br/>• <strong>C</strong>: ❌ A JSON content type is necessary, but it is not sufficient because InvokeModel native request bodies are not universal across model providers. Sending one generic body to every model can still cause validation failures or ignored settings.<br/>• <strong>D</strong>: ✅ InvokeModel requires a JSON request body, but the JSON shape and inference parameters depend on the selected model. A middleware adapter can preserve the client contract while emitting the correct native payload for each model ID.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional pharmacy benefits manager's clinical AI team is standardizing an Amazon Bedrock assistant that drafts prior authorization summaries. Three internal applications will call the same chat model by using the Converse API. The team must centralize reusable role instructions, support runtime substitution of case details, keep JSON formatting guidance consistent across applications, maintain prompt versions for controlled rollout, and enforce responsible AI controls outside the prompt text.</p><p>Which implementation will meet these requirements with the LEAST duplication?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ba ứng dụng dùng chung một chat prompt: role instruction tập trung, thay biến lúc chạy, hướng dẫn JSON thống nhất, có version, safety nằm ngoài prompt.</li><li>Ưu tiên: <strong>ít trùng lặp nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một chat prompt có version trong <strong>Prompt Management</strong> với system instruction, biến {{caseSummary}} và hướng dẫn JSON. Gọi qua <strong>prompt ARN</strong> với Converse, truyền <strong>promptVariables</strong>, dùng Guardrail riêng cho responsible AI.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — một prompt không thể kết hợp cả chat và text template; không cần và gây nhầm.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — không truyền promptVariables, lại ghi đè cấu hình từng app gây trùng lặp, không có Guardrail.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — 25 biến làm template phức tạp, khó bảo trì, không cần thiết.</li><li><strong>D</strong>: ✅ Đúng — gọn, tái sử dụng, đủ promptVariables và Guardrail.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>Chat prompt version</li><li>promptVariables</li><li>Guardrail ngoài prompt</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp prompt dùng chung nhiều app, có version → <strong>Prompt Management</strong> + <strong>prompt ARN</strong> + <strong>promptVariables</strong>; safety → <strong>Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 63,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>Create a versioned managed prompt in Prompt Management with both chat and text PromptTemplateConfiguration sections, and select the needed template in each request. Invoke the prompt ARN with Converse by passing promptVariables, and enforce safety with a separate Guardrail.</p>",
              "correct": false,
              "feedback": "<p>PromptTemplateConfiguration is a union, so a managed prompt template configuration can specify only one of chat or text. This design tries to combine both template types in the same configuration, which does not match the documented API structure.</p>"
            },
            {
              "choice": "<p>Create a versioned chat prompt in Prompt Management with system instructions, messages that use {{caseSummary}} variables, and JSON formatting instructions. Invoke the prompt ARN with Converse, and override inferenceConfig and additionalModelRequestFields per application.</p>",
              "correct": false,
              "feedback": "<p>This approach centralizes the prompt, but it misuses the Converse request when invoking a managed prompt by ARN. When using a Prompt Management prompt with Converse, fields such as inferenceConfig and additionalModelRequestFields should not be included in the request.</p>"
            },
            {
              "choice": "<p>Create a versioned chat prompt in Prompt Management with system instructions, messages that define 25 inputVariables for all policy fields and response sections, and JSON formatting instructions. Invoke the prompt ARN with Converse, and enforce safety with a separate Guardrail.</p>",
              "correct": false,
              "feedback": "<p>This is close to the required pattern, but it exceeds the documented limit for inputVariables in a chat prompt template. A ChatPromptTemplateConfiguration supports inputVariables with a maximum of 20, so the variable design must be consolidated or split.</p>"
            },
            {
              "choice": "<p>Create a versioned chat prompt in Prompt Management with system instructions, messages that use {{caseSummary}} variables, and JSON formatting instructions. Invoke the prompt ARN with Converse by passing promptVariables, and enforce safety with a separate Bedrock Guardrail.</p>",
              "correct": true,
              "feedback": "<p>This uses Prompt Management for the reusable instruction framework, including versioning, variables, system behavior, and response formatting guidance. It also keeps safety enforcement separate by using Bedrock Guardrails rather than relying on prompt wording as the control mechanism.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Prompt Management</b> is the right place to centralize reusable prompt assets such as role instructions, prompt versions, variants, variables, model configuration, and response formatting guidance. It lets multiple applications refer to a managed prompt rather than copying prompt text into each codebase, which reduces drift and makes controlled rollout easier. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html\">Amazon Bedrock Prompt Management</a>.<br/><br/>For runtime substitution, Prompt Management variables use double curly braces such as <code>{{caseSummary}}</code>, and callers provide values through <code>promptVariables</code> when invoking the managed prompt. Prompt text can include instructions that guide the model to format responses as JSON, but Prompt Management does not by itself create a safety filter or a first-class JSON schema enforcement boundary. The prompt creation details are described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html\">Create prompts in Amazon Bedrock Prompt Management</a>.<br/><br/>For chat prompts, the template can include <code>system</code> content that describes how the model should behave, along with required <code>messages</code> and optional variables. The API shape matters: <code>PromptTemplateConfiguration</code> is a union, so only <code>chat</code> or <code>text</code> can be specified, and chat prompt templates have documented limits on <code>inputVariables</code>. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptTemplateConfiguration.html\">PromptTemplateConfiguration</a>.<br/><br/>Prompt instructions can guide behavior and formatting, but they are not a responsible AI enforcement boundary. Controls such as filtering unsafe content or applying policy restrictions should be implemented with <b>Amazon Bedrock Guardrails</b> or application logic in the inference path.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ PromptTemplateConfiguration is a union, so a managed prompt template configuration can specify only one of chat or text. This design tries to combine both template types in the same configuration, which does not match the documented API structure.<br/>• <strong>B</strong>: ❌ This approach centralizes the prompt, but it misuses the Converse request when invoking a managed prompt by ARN. When using a Prompt Management prompt with Converse, fields such as inferenceConfig and additionalModelRequestFields should not be included in the request.<br/>• <strong>C</strong>: ❌ This is close to the required pattern, but it exceeds the documented limit for inputVariables in a chat prompt template. A ChatPromptTemplateConfiguration supports inputVariables with a maximum of 20, so the variable design must be consolidated or split.<br/>• <strong>D</strong>: ✅ This uses Prompt Management for the reusable instruction framework, including versioning, variables, system behavior, and response formatting guidance. It also keeps safety enforcement separate by using Bedrock Guardrails rather than relying on prompt wording as the control mechanism.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional airline's customer care team is deploying a generative AI assistant that drafts responses to passenger complaints. The assistant uses a supported text foundation model in Amazon Bedrock through the Converse API. The airline's responsible AI policy requires inline enforcement before any draft is shown to an agent: disallowed compensation advice must be blocked, profanity and unsafe content must be filtered, PII in generated drafts must be masked, and the selected FM's intended use, limitations, and evaluation results must be documented for governance review. The solution must minimize custom ML development and must fail closed when automated compliance checks do not pass.</p><p>Which implementation best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bắt buộc enforcement inline: chặn compensation advice, lọc profanity/unsafe, mask PII, ghi tài liệu model (intended use, limitations, evaluation).</li><li>Ít custom ML, fail closed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrail</strong> xử lý denied topics, content filters, PII masking inline. <strong>Model card</strong> (SageMaker Model Cards) dùng để ghi intended use, limitations và kết quả evaluation, Lambda wrapper chặn draft khi kiểm tra fail.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — scorecard chỉ là kết quả đánh giá, không phải tài liệu governance về intended use và limitations.</li><li><strong>B</strong>: ❌ Sai — Comprehend + regex chỉ xử lý PII, không phủ denied topics và content filters.</li><li><strong>C</strong>: ❌ Sai — prompt template không phải enforcement chắc chắn.</li><li><strong>D</strong>: ✅ Đúng — guardrail đủ các control, model card cho governance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails</li><li>Denied topics, content filters, PII masking</li><li>Model card</li><li>Fail closed</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp responsible AI inline + tài liệu model → nghĩ ngay đến <strong>Guardrails</strong> + <strong>Model Card</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 64,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail for production invocations, record evaluation scorecards for the approved FM, and use a Lambda wrapper to block drafts that fail validation.</p>",
              "correct": false,
              "feedback": "<p>This approach uses inline guardrail enforcement and fail-closed release logic, but evaluation scorecards alone do not satisfy the governance documentation requirement. The policy requires intended use and limitations to be documented with evaluation results, which is the role of a model card or equivalent governance artifact.</p>"
            },
            {
              "choice": "<p>Configure inline Comprehend PII detection and regex filters for production Converse API calls, maintain a model card for the approved FM, and use a Lambda wrapper to block drafts that fail validation.</p>",
              "correct": false,
              "feedback": "<p>Amazon Comprehend PII detection and regex filters can support inline checks for some sensitive strings and known policy phrases. They do not provide the full set of managed Bedrock guardrail controls for denied topics, harmful content categories, word filters, and sensitive information handling across supported model interactions.</p>"
            },
            {
              "choice": "<p>Configure policy-focused prompt templates for production Converse API calls, maintain a model card for the approved FM, and use a Lambda wrapper to block drafts that fail validation.</p>",
              "correct": false,
              "feedback": "<p>Prompt instructions can reduce unwanted behavior, but they are not a reliable enforcement boundary for prohibited topics, unsafe content, profanity, or PII handling. The Lambda wrapper can block detected failures, but without guardrails or equivalent managed policy controls it must implement too much of the responsible AI policy itself.</p>"
            },
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail for production invocations, maintain a model card for the approved FM, and use a Lambda wrapper to block drafts that fail validation.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock guardrails provide inline controls for denied topics, content filtering, word filtering, and sensitive information handling for supported model invocations. A model card documents intended use, limitations, and evaluation results, while Lambda can enforce fail-closed application logic before a draft is released.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock Guardrails</b> are designed to apply policy controls directly around supported foundation model interactions, including invocations through supported runtime APIs such as <code>Converse</code>. They can evaluate inputs and outputs for configured denied topics, content categories, word filters, and sensitive information handling, which is a better fit for inline responsible AI enforcement than relying only on prompt wording or custom regex checks. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Amazon Bedrock Guardrails</a>.<br/><br/>A <b>model card</b> is a governance artifact that documents intended use, risk considerations, limitations, evaluation results, and other model details that reviewers need before approving a model for production. AWS provides managed support for this pattern with <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html\">Amazon SageMaker Model Cards</a>, and teams can use the same responsible AI documentation practice when approving FMs for application use. Recording evaluation scores without the intended-use and limitation context leaves governance reviewers without the information needed to make a policy decision.<br/><br/>The Lambda wrapper is useful because guardrails are policy controls, while the application still needs deterministic release logic. A function can inspect validation outcomes, verify required structured fields, prevent storage or display of drafts that fail checks, and return a safe failure response. This matches a <i>fail closed</i> posture, whereas prompt-only controls, partial PII filters, or incomplete governance artifacts do not satisfy all stated policy requirements. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\">AWS Lambda</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach uses inline guardrail enforcement and fail-closed release logic, but evaluation scorecards alone do not satisfy the governance documentation requirement. The policy requires intended use and limitations to be documented with evaluation results, which is the role of a model card or equivalent governance artifact.<br/>• <strong>B</strong>: ❌ Amazon Comprehend PII detection and regex filters can support inline checks for some sensitive strings and known policy phrases. They do not provide the full set of managed Bedrock guardrail controls for denied topics, harmful content categories, word filters, and sensitive information handling across supported model interactions.<br/>• <strong>C</strong>: ❌ Prompt instructions can reduce unwanted behavior, but they are not a reliable enforcement boundary for prohibited topics, unsafe content, profanity, or PII handling. The Lambda wrapper can block detected failures, but without guardrails or equivalent managed policy controls it must implement too much of the responsible AI policy itself.<br/>• <strong>D</strong>: ✅ Amazon Bedrock guardrails provide inline controls for denied topics, content filtering, word filtering, and sensitive information handling for supported model invocations. A model card documents intended use, limitations, and evaluation results, while Lambda can enforce fail-closed application logic before a draft is released.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online legal research platform's AI operations team runs a RAG assistant by using Amazon Bedrock managed knowledge bases backed by Amazon OpenSearch Serverless. The team must detect retrieval throttling and failures, identify OpenSearch Serverless indexing and search issues, and trace ingestion failures back to individual source documents while inspecting chunk creation, deletion, and failure statistics. The team wants to use managed AWS observability features and minimize custom instrumentation.</p><p>Which operational management approach will BEST meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quan sát RAG dùng Bedrock Knowledge Bases + OpenSearch Serverless: phát hiện throttling/failure khi retrieve, vấn đề indexing/search, trace lỗi ingestion theo từng document và thống kê chunk.</li><li>Dùng tính năng managed, <strong>ít instrumentation tùy chỉnh</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Metrics AWS/Bedrock/KnowledgeBases</strong> cho Retrieve, metrics AWS/AOSS cho ingestion và search, còn <strong>ingestion log delivery</strong> cho trạng thái từng document và thống kê chunk (tạo, xóa, lỗi).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — StorageUsedInS3 và SearchOCU chỉ là capacity/storage, không cho thấy document status hay lỗi retrieval.</li><li><strong>B</strong>: ✅ Đúng — đủ ba lớp: Retrieve, AOSS, ingestion logs.</li><li><strong>C</strong>: ❌ Sai — thiếu metrics Bedrock; suy từ app logs là custom và không chính xác.</li><li><strong>D</strong>: ❌ Sai — thiếu AOSS; job summary không chi tiết đến từng document.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS/Bedrock/KnowledgeBases</li><li>AWS/AOSS metrics</li><li>Knowledge base ingestion logs</li><li>Chunk statistics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp debug ingestion theo từng document → nghĩ ngay đến <strong>knowledge base ingestion log delivery</strong>, kèm <strong>CloudWatch metrics</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 65,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>Configure CloudWatch dashboards and alarms for AWS/AOSS StorageUsedInS3 and SearchOCU metrics, and compare StorageUsedInS3 with index size reports to validate document ingestion and logical index growth.</p>",
              "correct": false,
              "feedback": "<p>OpenSearch Serverless StorageUsedInS3 reflects physical S3 storage usage, including replication, metadata, and internal indexing overhead. It is not a reliable measure of logical index size or document ingestion correctness.</p>"
            },
            {
              "choice": "<p>Configure CloudWatch dashboards and alarms for AWS/Bedrock/KnowledgeBases Retrieve metrics and AWS/AOSS ingestion and search metrics, and enable knowledge base ingestion log delivery to inspect document status and chunk statistics.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the documented runtime metrics for Bedrock managed knowledge bases and the documented CloudWatch metrics for OpenSearch Serverless. It also enables ingestion log delivery, which is required to inspect per-document crawl, sync, and index status, along with chunk statistics and document processing errors.</p>"
            },
            {
              "choice": "<p>Configure CloudWatch dashboards and alarms for AWS/AOSS ingestion and search request metrics only, and use application request logs to infer Bedrock retrieval throttling and failures.</p>",
              "correct": false,
              "feedback": "<p>OpenSearch Serverless metrics are useful for indexing and search operations, but they do not replace Bedrock knowledge base runtime metrics for managed Retrieve calls. Application request logs can show symptoms, but they do not provide the managed Bedrock throttle and error metrics or document-level ingestion lifecycle details.</p>"
            },
            {
              "choice": "<p>Configure CloudWatch dashboards and alarms for AWS/Bedrock/KnowledgeBases Retrieve metrics only, and use ingestion job summary statistics to infer document status and chunk failures.</p>",
              "correct": false,
              "feedback": "<p>Bedrock managed knowledge base runtime metrics can detect Retrieve invocations, errors, and throttles, but they do not identify OpenSearch Serverless indexing or search path issues. Ingestion job summary statistics do not provide the per-document lifecycle status and chunk statistics that managed ingestion logs provide.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a Bedrock managed knowledge base, operational visibility is split across the <b>Bedrock knowledge base runtime</b>, the <b>vector store</b>, and the <b>ingestion pipeline</b>. Bedrock publishes runtime CloudWatch metrics in the <code>AWS/Bedrock/KnowledgeBases</code> namespace, including invocations, client errors, server errors, and throttles, with dimensions such as <code>Operation</code> and, for <code>Retrieve</code>, <code>KnowledgeBaseId</code>. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-observability.html\">Monitor resources for Amazon Bedrock Knowledge Bases</a>.<br/><br/>OpenSearch Serverless emits its own operational metrics in the <code>AWS/AOSS</code> namespace. Metrics such as <code>SearchRequestLatency</code>, <code>SearchRequestErrors</code>, <code>IngestionDocumentErrors</code>, and <code>IngestionRequestErrors</code> help distinguish query path issues from indexing path issues, which is essential for a RAG system whose quality depends on retrieval reliability. See <a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/monitoring-cloudwatch.html\">Monitoring OpenSearch Serverless with Amazon CloudWatch</a>.<br/><br/>Ingestion observability for Bedrock managed knowledge bases is log-based, so it must be configured for delivery to a destination such as CloudWatch Logs, Amazon S3, or Amazon Data Firehose. Those logs include per-document lifecycle fields such as <code>crawl_status</code>, <code>sync_status</code>, and <code>index_status</code>, plus <code>chunk_statistics</code> and an <code>error_message</code> only when document processing fails. The important nuance is that the documented chunk visibility is statistical, such as created chunks, deleted chunks, and chunk failures, rather than a guaranteed trace record for every individual chunk.<br/><br/>Several near misses fail because they use an incomplete mental model. Bedrock knowledge base runtime metrics alone do not show OpenSearch Serverless indexing and search health, and OpenSearch Serverless request metrics alone do not show Bedrock managed retrieval throttles and errors. Similarly, physical storage usage is not the same thing as logical index size, so a reliable operations system must monitor both service-level metrics and document-level ingestion signals.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ OpenSearch Serverless StorageUsedInS3 reflects physical S3 storage usage, including replication, metadata, and internal indexing overhead. It is not a reliable measure of logical index size or document ingestion correctness.<br/>• <strong>B</strong>: ✅ This approach uses the documented runtime metrics for Bedrock managed knowledge bases and the documented CloudWatch metrics for OpenSearch Serverless. It also enables ingestion log delivery, which is required to inspect per-document crawl, sync, and index status, along with chunk statistics and document processing errors.<br/>• <strong>C</strong>: ❌ OpenSearch Serverless metrics are useful for indexing and search operations, but they do not replace Bedrock knowledge base runtime metrics for managed Retrieve calls. Application request logs can show symptoms, but they do not provide the managed Bedrock throttle and error metrics or document-level ingestion lifecycle details.<br/>• <strong>D</strong>: ❌ Bedrock managed knowledge base runtime metrics can detect Retrieve invocations, errors, and throttles, but they do not identify OpenSearch Serverless indexing or search path issues. Ingestion job summary statistics do not provide the per-document lifecycle status and chunk statistics that managed ingestion logs provide.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global media streaming platform's personalization team operates an Amazon Bedrock FM feature that uses Converse and ConverseStream through the bedrock-runtime endpoint in us-east-1 and eu-west-1. The team must build observability that supports operational dashboards for latency, token use, throttles, errors, and streaming responsiveness. The team also must preserve forensic records with per-request product, tenant, and experiment identifiers. Logs must remain in the same account and Region where inference occurs, and the team wants to avoid parsing attribution values from prompt text.</p><p>Which combination of steps will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dashboard vận hành (latency, token, throttle, error, TTFT) và forensic record có product/tenant/experiment ID.</li><li>Log nằm cùng account và Region với inference, không parse attribution từ prompt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS/Bedrock runtime metrics</strong> (CloudWatch) cung cấp số liệu vận hành gồm TimeToFirstToken. <strong>Model invocation logging</strong> ở từng Region ghi request đầy đủ, còn <strong>requestMetadata</strong> mang attribution ID có cấu trúc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — metrics chỉ là số tổng hợp, không chứa prompt/response hay attribution; export tập trung còn vi phạm ý đồ log cùng Region.</li><li><strong>B</strong>: ✅ Đúng — invocation logging + requestMetadata.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự ghi và tự correlate, không đảm bảo forensic record đầy đủ.</li><li><strong>D</strong>: ❌ Sai — CloudTrail không có token count, TTFT hay latency chuẩn.</li><li><strong>E</strong>: ✅ Đúng — metrics runtime cho dashboard và alarm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS/Bedrock metrics</li><li>TimeToFirstToken</li><li>Model invocation logging</li><li>requestMetadata</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp dashboard → <strong>CloudWatch metrics</strong>; gặp forensic + attribution → <strong>invocation logging</strong> + <strong>requestMetadata</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 66,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>Export AWS/Bedrock metrics from both Regions to a central dashboard, and use the metric records as the forensic source for prompts, responses, and attribution.</p>",
              "correct": false,
              "feedback": "<p>This option is incorrect because AWS/Bedrock metrics are appropriate for operational dashboards but are not invocation payload records. Metrics do not provide the request and response data or caller-supplied requestMetadata that model invocation logging can capture.</p>"
            },
            {
              "choice": "<p>Enable Amazon Bedrock model invocation logging in each inference Region to CloudWatch Logs or S3, and send attribution values by using requestMetadata.</p>",
              "correct": true,
              "feedback": "<p>This option is correct because model invocation logging is configured per account and Region, and supported destinations must be in the same account and Region. requestMetadata is the documented caller-supplied mechanism for adding per-request attribution to invocation log records for Converse and ConverseStream.</p>"
            },
            {
              "choice": "<p>Record product, tenant, and experiment IDs in application logs with Bedrock request IDs, and correlate those logs to invocation records during investigations.</p>",
              "correct": false,
              "feedback": "<p>This option is incorrect because application-side correlation can be useful but does not populate the documented requestMetadata field in Bedrock invocation log records. Relying on separate application logs increases investigation complexity and does not provide the same per-request attribution inside the Bedrock logging schema.</p>"
            },
            {
              "choice": "<p>Create CloudWatch dashboards and alarms from CloudTrail API events for invocation volume, latency, token counts, errors, throttles, and TimeToFirstToken.</p>",
              "correct": false,
              "feedback": "<p>This option is incorrect because CloudTrail is an audit source for API activity, not the native Bedrock runtime metrics stream. It does not replace AWS/Bedrock metrics for latency, token usage, throttling, errors, and streaming responsiveness dashboards.</p>"
            },
            {
              "choice": "<p>Create CloudWatch dashboards and alarms from AWS/Bedrock runtime metrics for invocation volume, latency, token counts, errors, throttles, and TimeToFirstToken.</p>",
              "correct": true,
              "feedback": "<p>This option is correct because Amazon Bedrock publishes bedrock-runtime metrics in the AWS/Bedrock namespace. These metrics support operational views of usage, latency, token consumption, throttling, errors, and streaming responsiveness without requiring prompt parsing.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B, E<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an FM application, observability usually needs two complementary layers: <b>metrics</b> for operational health and <b>invocation records</b> for investigation, attribution, and audit. Amazon Bedrock publishes bedrock-runtime metrics in the <code>AWS/Bedrock</code> namespace, including metrics for invocations, latency, token consumption, throttles, errors, and streaming responsiveness such as <code>TimeToFirstToken</code>. These metrics are the right source for dashboards and alarms because they are structured operational signals rather than values inferred from prompt content. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.html\">Monitor runtime metrics for Amazon Bedrock</a>.<br/><br/>For forensic traceability, <b>model invocation logging</b> captures supported bedrock-runtime calls, including <code>Converse</code> and <code>ConverseStream</code>, and can include request data, response data, metadata, and token counts. The logging configuration is not global: it is disabled by default and must be enabled for the account in each Region, with CloudWatch Logs or S3 destinations in the same account and Region. Large or binary payloads can be referenced through S3 rather than being fully inline, so engineers should design downstream log analysis with that storage behavior in mind. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html\">Model invocation logging</a>.<br/><br/><code>requestMetadata</code> is the documented way to add caller-supplied attribution such as tenant, product, workflow, or experiment identifiers. For <code>Converse</code> and <code>ConverseStream</code>, the metadata is sent in the request body, and it appears in invocation logs only when model invocation logging is enabled in that Region. This avoids the anti-pattern of embedding operational attribution in prompts or relying only on external log correlation, both of which make investigations more brittle. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/cost-mgmt-request-metadata.html\">Track Amazon Bedrock usage by request metadata</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This option is incorrect because AWS/Bedrock metrics are appropriate for operational dashboards but are not invocation payload records. Metrics do not provide the request and response data or caller-supplied requestMetadata that model invocation logging can capture.<br/>• <strong>B</strong>: ✅ This option is correct because model invocation logging is configured per account and Region, and supported destinations must be in the same account and Region. requestMetadata is the documented caller-supplied mechanism for adding per-request attribution to invocation log records for Converse and ConverseStream.<br/>• <strong>C</strong>: ❌ This option is incorrect because application-side correlation can be useful but does not populate the documented requestMetadata field in Bedrock invocation log records. Relying on separate application logs increases investigation complexity and does not provide the same per-request attribution inside the Bedrock logging schema.<br/>• <strong>D</strong>: ❌ This option is incorrect because CloudTrail is an audit source for API activity, not the native Bedrock runtime metrics stream. It does not replace AWS/Bedrock metrics for latency, token usage, throttling, errors, and streaming responsiveness dashboards.<br/>• <strong>E</strong>: ✅ This option is correct because Amazon Bedrock publishes bedrock-runtime metrics in the AWS/Bedrock namespace. These metrics support operational views of usage, latency, token consumption, throttling, errors, and streaming responsiveness without requiring prompt parsing.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B, E"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical clinical operations platform ingests partner trial-site notes as JSON into Amazon S3, normalizes them, and then creates embeddings for an Amazon Bedrock RAG application. The incoming JSON contains nested structs and lists, and the team must quarantine records that fail completeness and uniqueness checks before the curated dataset is loaded for embedding. The workflow must publish rule pass and fail counts to Amazon CloudWatch for alarms and minimize custom validation code.</p><p>Which validation design best meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Kiểm tra completeness và uniqueness trên JSON lồng nhau trước khi tạo embedding, cách ly record lỗi.</li><li>Phát hành số rule pass/fail lên CloudWatch, ít code validation tùy chỉnh.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Trong Glue ETL, flatten field lồng nhau, dùng <strong>EvaluateDataQuality.processRows</strong> (hoặc Glue Studio row-level output) với <strong>DQDL</strong>, bật CloudWatch metrics, rồi tách record pass/fail ra curated và quarantine.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Data Catalog DQ cho score cấp dataset, không tách từng record để quarantine; JSON lồng nhau cần flatten.</li><li><strong>B</strong>: ✅ Đúng — row-level output, flatten, metrics, split.</li><li><strong>C</strong>: ❌ Sai — chạy sau khi đã ghi curated, record lỗi đã lọt vào dữ liệu sạch.</li><li><strong>D</strong>: ❌ Sai — chỉ có failed row percentage không đủ để cách ly từng record; không bật publishing metrics.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Glue Data Quality</li><li>EvaluateDataQuality.processRows</li><li>DQDL</li><li>Row-level pass/fail</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp quarantine từng record + metrics → nghĩ ngay đến <strong>Glue ETL EvaluateDataQuality</strong> row-level.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 67,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>Configure AWS Glue Data Quality in the Data Catalog on the raw JSON table, generate recommended rules for completeness and uniqueness, publish the catalog run results, and use the resulting score to quarantine failing records before embedding.</p>",
              "correct": false,
              "feedback": "<p>The Data Catalog entry point is useful for evaluating cataloged datasets and can recommend rules, but it is not the right path for identifying failed records in an ETL flow. The data quality score is the percentage of rules that pass, not a row-level pass percentage for quarantine decisions.</p>"
            },
            {
              "choice": "<p>Build an AWS Glue ETL validation stage that flattens nested fields, uses EvaluateDataQuality.processRows or Glue Studio row-level output with case-sensitive DQDL, enables CloudWatch metrics, and splits pass and fail records for curated and quarantine writes.</p>",
              "correct": true,
              "feedback": "<p>This design uses the AWS Glue ETL job entry point, which is appropriate for validating and filtering data before it is loaded for downstream FM consumption. It also accounts for nested data preparation, DQDL case sensitivity, row-level quarantine, and the need to explicitly enable CloudWatch metrics publishing.</p>"
            },
            {
              "choice": "<p>Configure AWS Glue Data Quality in the Data Catalog after the ETL job writes the curated table, generate recommended completeness and uniqueness rules, enable scheduled evaluations, and quarantine records by interpreting failed-rule results.</p>",
              "correct": false,
              "feedback": "<p>Running Data Catalog evaluations after the curated table is written does not validate and filter records before the embedding dataset is loaded. Data Catalog evaluations also do not provide the failed-record identification capability needed for an automated quarantine workflow.</p>"
            },
            {
              "choice": "<p>Build an AWS Glue ETL validation stage that reads the raw nested JSON, runs EvaluateDataQuality with a lowercase dqdl rules list, leaves default publishing options unchanged, and writes records with failed row percentages to quarantine.</p>",
              "correct": false,
              "feedback": "<p>DQDL documents are case sensitive and require a capitalized Rules list and case-sensitive rule names such as IsComplete and IsUnique. CloudWatch metrics publishing is disabled by default for EvaluateDataQuality, so leaving the defaults unchanged does not satisfy the monitoring requirement.</p>"
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
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For validation that must occur <i>inside the ingestion path</i>, the AWS Glue Data Quality ETL job entry point is the better fit. AWS documents separate entry points for <b>AWS Glue Data Quality</b>: Data Catalog evaluations are aimed at cataloged datasets, while ETL jobs support proactive validation and filtering before data is loaded. Because the source contains nested structs and lists, the ETL job should first flatten or otherwise prepare the data before evaluating rules, since AWS Glue Data Quality does not directly evaluate arbitrary nested or list-type sources without preparation. See <a href=\"https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html?utm_source=openai\">AWS Glue Data Quality</a>.<br/><br/>The important distinction is that standard rule-outcome evaluation is not enough when the workflow must quarantine individual records. A row-level data quality workflow, such as <code>EvaluateDataQuality.processRows</code> or the equivalent AWS Glue Studio data quality transform output, lets the job separate rows that pass the rules from rows that fail the rules. The curated rows can continue to the embedding pipeline, while failed rows are written to quarantine for inspection or remediation.<br/><br/>The ruleset must be written in case-sensitive <b>DQDL</b>, for example a capitalized <code>Rules</code> list with rule types such as <code>IsComplete</code> and <code>IsUnique</code>. CloudWatch metric publishing must be explicitly enabled because <code>enableDataQualityCloudWatchMetrics</code> defaults to <code>False</code>; when enabled, rule count metrics include <code>glue.data.quality.rules.passed</code> and <code>glue.data.quality.rules.failed</code>. See <a href=\"https://docs.aws.amazon.com/glue/latest/dg/dqdl.html?utm_source=openai\">Data Quality Definition Language</a> and <a href=\"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-pyspark-transforms-EvaluateDataQuality.html?utm_source=openai\">EvaluateDataQuality transform</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ The Data Catalog entry point is useful for evaluating cataloged datasets and can recommend rules, but it is not the right path for identifying failed records in an ETL flow. The data quality score is the percentage of rules that pass, not a row-level pass percentage for quarantine decisions.<br/>• <strong>B</strong>: ✅ This design uses the AWS Glue ETL job entry point, which is appropriate for validating and filtering data before it is loaded for downstream FM consumption. It also accounts for nested data preparation, DQDL case sensitivity, row-level quarantine, and the need to explicitly enable CloudWatch metrics publishing.<br/>• <strong>C</strong>: ❌ Running Data Catalog evaluations after the curated table is written does not validate and filter records before the embedding dataset is loaded. Data Catalog evaluations also do not provide the failed-record identification capability needed for an automated quarantine workflow.<br/>• <strong>D</strong>: ❌ DQDL documents are case sensitive and require a capitalized Rules list and case-sensitive rule names such as IsComplete and IsUnique. CloudWatch metrics publishing is disabled by default for EvaluateDataQuality, so leaving the defaults unchanged does not satisfy the monitoring requirement.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online education platform's tutoring team runs a browser-based writing coach. The current API Gateway REST API invokes an AWS Lambda function that calls Amazon Bedrock synchronously, so students wait until the full answer is generated before seeing any feedback. The browser client already supports server-sent events, and the team must preserve the REST API contract without moving to a WebSocket protocol. The solution must reduce time to first byte and stream partial model output as it is generated.</p><p>Which implementation will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển REST API + Lambda đồng bộ sang streaming response SSE, giữ REST contract, không dùng WebSocket.</li><li>Giảm time to first byte.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>API Gateway REST API hỗ trợ response streaming với Lambda proxy integration ở chế độ <strong>STREAM</strong>, dùng URI <strong>/response-streaming-invocations</strong>. Lambda gọi Bedrock ConverseStream và ghi SSE frame khi delta đến.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng URI invocation chuẩn thì không stream được.</li><li><strong>B</strong>: ❌ Sai — API Gateway không chuyển event-stream của Bedrock sang SSE bằng VTL.</li><li><strong>C</strong>: ✅ Đúng — STREAM mode đúng URI, ConverseStream.</li><li><strong>D</strong>: ❌ Sai — BUFFERED vẫn đợi đủ response mới trả.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>REST API response streaming</li><li>STREAM mode</li><li>/response-streaming-invocations</li><li>ConverseStream</li><li>Server-sent events</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp REST API + stream Bedrock qua Lambda → nghĩ ngay đến <strong>STREAM mode</strong> + <strong>response-streaming-invocations URI</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 68,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>Configure an API Gateway REST API AWS_PROXY Lambda integration in STREAM mode with the standard Lambda invocation URI. Have Lambda call Bedrock ConverseStream and write SSE frames as deltas arrive.</p>",
              "correct": false,
              "feedback": "<p>STREAM mode is the right response transfer mode for REST API response streaming, and AWS_PROXY is a supported integration type. However, Lambda proxy response streaming requires the Lambda integration URI that ends in /response-streaming-invocations, not the standard Lambda invocation URI.</p>"
            },
            {
              "choice": "<p>Configure an API Gateway REST API non-proxy HTTP integration in STREAM mode with VTL response templates. Have API Gateway convert Bedrock event-stream chunks into SSE frames.</p>",
              "correct": false,
              "feedback": "<p>API Gateway REST API response streaming works only with HTTP_PROXY or AWS_PROXY integrations, not a non-proxy HTTP integration. STREAM mode also does not support response features that require full-response buffering, including VTL response transformation.</p>"
            },
            {
              "choice": "<p>Configure an API Gateway REST API AWS_PROXY Lambda integration in STREAM mode with the /response-streaming-invocations URI. Have Lambda call Bedrock ConverseStream and write SSE frames as deltas arrive.</p>",
              "correct": true,
              "feedback": "<p>API Gateway REST API response streaming supports STREAM mode with AWS_PROXY integrations, and Lambda proxy response streaming uses the Lambda InvokeWithResponseStream path ending in /response-streaming-invocations. Bedrock ConverseStream returns incremental response events, which the Lambda function can translate into server-sent event frames for the existing REST client.</p>"
            },
            {
              "choice": "<p>Configure an API Gateway REST API AWS_PROXY Lambda integration in BUFFERED mode with the standard Lambda invocation URI. Have Lambda call Bedrock ConverseStream and return one SSE-formatted response.</p>",
              "correct": false,
              "feedback": "<p>BUFFERED mode causes API Gateway to wait for the complete integration response before sending data to the client, which does not reduce time to first byte. Calling ConverseStream inside Lambda does not help if the function concatenates the stream and returns the complete response at the end.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 68,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For a REST-based real-time text experience, the key design is to keep the request path open while bytes are produced by the model. <b>Amazon Bedrock <code>ConverseStream</code></b> returns an event stream rather than a single final text field, with events such as <code>contentBlockDelta</code>, <code>messageStop</code>, and <code>metadata</code>. The application code must consume those events incrementally and emit a client-friendly stream format, such as server-sent events, rather than waiting for the final message. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html\">ConverseStream</a>.<br/><br/><b>API Gateway response streaming</b> is the API layer feature that prevents API Gateway from buffering the entire integration response before sending it to the client. For REST APIs, this is configured with response transfer mode <code>STREAM</code>, and AWS documents server-sent events and generative AI chatbot time to first byte reduction as use cases. With Lambda proxy integration, API Gateway uses the Lambda streaming invocation path ending in <code>/response-streaming-invocations</code>, so using the standard buffered Lambda invoke path would lose the streaming benefit. See <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/response-transfer-mode.html\">Response payload streaming for REST APIs in API Gateway</a> and <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/response-transfer-mode-lambda.html\">Response streaming with Lambda proxy integrations for REST APIs in API Gateway</a>.<br/><br/>A near-correct REST design can still fail if any layer buffers the response or uses an integration path that does not invoke Lambda response streaming. VTL response transformation is also not a fit because streaming mode excludes features that require full-response buffering.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ STREAM mode is the right response transfer mode for REST API response streaming, and AWS_PROXY is a supported integration type. However, Lambda proxy response streaming requires the Lambda integration URI that ends in /response-streaming-invocations, not the standard Lambda invocation URI.<br/>• <strong>B</strong>: ❌ API Gateway REST API response streaming works only with HTTP_PROXY or AWS_PROXY integrations, not a non-proxy HTTP integration. STREAM mode also does not support response features that require full-response buffering, including VTL response transformation.<br/>• <strong>C</strong>: ✅ API Gateway REST API response streaming supports STREAM mode with AWS_PROXY integrations, and Lambda proxy response streaming uses the Lambda InvokeWithResponseStream path ending in /response-streaming-invocations. Bedrock ConverseStream returns incremental response events, which the Lambda function can translate into server-sent event frames for the existing REST client.<br/>• <strong>D</strong>: ❌ BUFFERED mode causes API Gateway to wait for the complete integration response before sending data to the client, which does not reduce time to first byte. Calling ConverseStream inside Lambda does not help if the function concatenates the stream and returns the complete response at the end.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global airline's disruption-management team is building a generative AI service that classifies passenger messages and generates responses by using several Amazon Bedrock foundation models. Simple itinerary questions should use a low-cost model, policy disputes should use a model tuned for reasoning, and multilingual rebooking requests should use a model with stronger language support. Existing clients send only free-form text, locale, and account tier, and the team does not want clients to choose models. The solution must keep an auditable routing path, allow routing rules to change without redeploying clients, and invoke only one generation model for each request to control cost.</p><p>Which implementation will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chọn model theo loại tin nhắn (đơn giản, tranh chấp policy, đa ngôn ngữ) khi client chỉ gửi text, locale, account tier.</li><li>Cần routing có thể kiểm toán, đổi rule không redeploy client, chỉ gọi một generation model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bước phân loại nhẹ xác định loại tin nhắn, <strong>Step Functions Choice state</strong> route theo kết quả, rồi Lambda task gọi đúng một model. Execution history của Step Functions giúp audit, sửa workflow không cần đổi client.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ route theo locale và tier, không phân biệt được tin nhắn đơn giản hay tranh chấp policy.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — rule trong code Lambda khó audit và thay đổi phải deploy, từ khóa trong text không đủ chính xác.</li><li><strong>C</strong>: ✅ Đúng — phân loại + Choice + audit.</li><li><strong>D</strong>: ❌ Sai — prompt routing chỉ chọn trong cùng model family, không áp dụng rule tùy chỉnh, không auditable.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Choice state</li><li>Lightweight classification</li><li>Auditable routing</li><li>One generation model</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp routing model theo ý định, cần audit → nghĩ ngay đến <strong>classify</strong> + <strong>Step Functions Choice</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 69,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>Use API Gateway to start a Step Functions workflow. Route with Choice states based on locale and account tier, and invoke the mapped Bedrock model from a Lambda task.</p>",
              "correct": false,
              "feedback": "<p>This approach uses the right workflow service and can preserve an execution history while invoking a single model. It does not reliably classify the free-form message content, so it can misroute policy disputes and itinerary questions that share the same locale or account tier.</p>"
            },
            {
              "choice": "<p>Use API Gateway to validate requests and invoke a Lambda function. Evaluate routing rules in Lambda from the message text, select a Bedrock model, and emit routing metrics to CloudWatch.</p>",
              "correct": false,
              "feedback": "<p>This approach can keep model selection server-side and can invoke only one model, so it is a plausible design. However, a Lambda-only rules engine provides less explicit workflow-level auditability than Step Functions execution history and makes branching behavior harder to inspect and govern.</p>"
            },
            {
              "choice": "<p>Use API Gateway to validate requests and start a Step Functions workflow. Run a lightweight classification step, use Choice states for routing, and invoke the selected Bedrock model from a Lambda task.</p>",
              "correct": true,
              "feedback": "<p>This approach centralizes model selection behind the API and bases routing on request content rather than client choice. Step Functions provides visible execution history and Choice states, while invoking only the selected model controls generation cost.</p>"
            },
            {
              "choice": "<p>Use Amazon Bedrock prompt routing as the primary selector. Configure supported model choices for cost and capability tradeoffs, and send each airline message through one shared generation prompt.</p>",
              "correct": false,
              "feedback": "<p>This approach can help optimize model selection when the supported routing behavior matches the workload. It is weaker for explicit airline business categories because it does not give the same application-controlled classification step and branch-level audit trail required for policy, itinerary, and rebooking decisions.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 69,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>The best design separates <b>routing</b> from <b>generation</b>. A lightweight classifier, which can be application code or a smaller model invocation, determines the passenger message category. Then <code>Choice</code> states in AWS Step Functions route the workflow to the single Lambda task that invokes the selected Amazon Bedrock model. This keeps model choice server-side, gives operators an execution history for the decision path, and avoids paying for multiple generation calls.<br/><br/>API Gateway is useful at the boundary for request validation, authentication, throttling, and transformations, but it is not the best place to own semantic routing decisions by itself. A Lambda-only router can work for simpler systems, but as routing paths and business categories grow, Step Functions makes the decision graph more explicit and easier to audit through workflow executions.<br/><br/>Prompt routing and static metadata routing are both plausible optimization techniques, but they solve narrower problems than the scenario requires. Bedrock prompt routing can be valuable when its supported model-routing behavior matches the application need, while routing only on locale or account tier misses the semantic distinction among itinerary questions, policy disputes, and rebooking requests. For business-controlled routing, the classifier should examine the message content and the workflow should record the selected path.<br/><br/>For implementation details, see the AWS Step Functions documentation for <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html\">Choice workflow state</a>, the API Gateway documentation for <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">request validation</a>, and the Amazon Bedrock Runtime documentation for <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html\">InvokeModel</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This approach uses the right workflow service and can preserve an execution history while invoking a single model. It does not reliably classify the free-form message content, so it can misroute policy disputes and itinerary questions that share the same locale or account tier.<br/>• <strong>B</strong>: ❌ This approach can keep model selection server-side and can invoke only one model, so it is a plausible design. However, a Lambda-only rules engine provides less explicit workflow-level auditability than Step Functions execution history and makes branching behavior harder to inspect and govern.<br/>• <strong>C</strong>: ✅ This approach centralizes model selection behind the API and bases routing on request content rather than client choice. Step Functions provides visible execution history and Choice states, while invoking only the selected model controls generation cost.<br/>• <strong>D</strong>: ❌ This approach can help optimize model selection when the supported routing behavior matches the workload. It is weaker for explicit airline business categories because it does not give the same application-controlled classification step and branch-level audit trail required for policy, itinerary, and rebooking decisions.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A precision agriculture robotics vendor's field-support AI team is building a diagnostic assistant for field technicians. The assistant must follow a structured reasoning loop: call an Amazon Bedrock model to choose the next diagnostic action, invoke existing tool APIs for observations, branch based on the results, and stop safely when a repair recommendation is unsafe. Some repair recommendations require a human engineer to approve the next step, and the approval can take several hours. A single diagnostic session can last several days, and compliance auditors must be able to review the workflow path after completion.</p><p>Which combination of implementation choices will meet these requirements? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Vòng reasoning có tool call, rẽ nhánh, dừng an toàn, human approval mất nhiều giờ, session kéo dài nhiều ngày, auditor xem lại đường đi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Step Functions <strong>Standard workflow</strong> viết bằng ASL: Task cho model/tool, Choice điều khiển vòng lặp, Fail cho kết quả không an toàn. Phê duyệt dùng <strong>callback task</strong> với task token, hệ thống bên ngoài gọi SendTaskSuccess/SendTaskFailure sau review.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — callback task chờ lâu, tới 1 năm với Standard.</li><li><strong>B</strong>: ✅ Đúng — ASL Task/Choice/Fail mô hình hóa đúng vòng lặp.</li><li><strong>C</strong>: ❌ Sai — Express chỉ chạy tối đa 5 phút, không hợp với nhiều ngày và approval nhiều giờ.</li><li><strong>D</strong>: ❌ Sai — Request Response không chờ kết quả bên ngoài, luồng đi tiếp ngay.</li><li><strong>E</strong>: ❌ Sai — .sync không áp dụng cho mọi bước, và dừng execution không tự cancel mọi downstream work.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Standard workflow</li><li>Callback task token ($$.Task.Token)</li><li>SendTaskSuccess / SendTaskFailure</li><li>Choice state</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp human approval chờ lâu + chạy nhiều ngày → nghĩ ngay đến <strong>Standard workflow</strong> + <strong>waitForTaskToken</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 70,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>Implement manual approval as a callback task that passes $$.Task.Token to a same-account component that calls SendTaskSuccess or SendTaskFailure after review.</p>",
              "correct": true,
              "feedback": "<p>This is correct because the callback integration pattern pauses a Standard workflow until Step Functions receives the task token through SendTaskSuccess or SendTaskFailure. The same-account condition is important because task tokens must be returned by principals in the same AWS account.</p>"
            },
            {
              "choice": "<p>Implement the reasoning loop as an ASL state machine that uses Task states for model and tool calls, Choice states for loop control, and Fail states for unsafe terminal outcomes.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Amazon States Language provides the state types needed to make the reasoning, action, observation, and stopping logic explicit. Task states perform work, Choice states decide the next transition, and Fail states stop an execution with an error.</p>"
            },
            {
              "choice": "<p>Implement the workflow as an Express state machine with CloudWatch Logs enabled, and run model calls, tool calls, and manual approvals from the same ASL definition.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because Express Workflows can run for up to 5 minutes, which does not fit diagnostic sessions that can last several days. Express Workflows also support only Request Response service integrations, so they do not meet the callback approval requirement.</p>"
            },
            {
              "choice": "<p>Implement manual approval as a Request Response task that returns an acknowledgement immediately and lets the external approval process finish before the next model call.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because the Request Response pattern continues after the initial HTTP response and does not wait for the underlying job or approval process to finish. The workflow could advance without the human approval outcome that is needed for the next reasoning step.</p>"
            },
            {
              "choice": "<p>Implement every model and approval step with the .sync pattern, and rely on Step Functions to cancel downstream work whenever an execution is stopped.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because the callback pattern, not .sync, is the appropriate integration pattern when an external human review must return a task token. The .sync pattern also has polling and event side effects, and Step Functions cancellation of an integrated task is best effort rather than guaranteed.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 2: Implementation and Integration",
      "discusstion": [
        {
          "id": 70,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A, B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For an advanced FM problem-solving workflow, Step Functions is useful because it makes the reasoning loop explicit instead of hiding it inside application code. <b>Amazon States Language</b> defines the workflow as JSON, and state types such as <code>Task</code>, <code>Choice</code>, and <code>Fail</code> map naturally to model invocation, tool execution, branching, and controlled termination. See <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html?utm_source=openai\">Amazon States Language</a> for the documented state model.<br/><br/>The long-running and auditable nature of the scenario points to <b>Standard Workflows</b>. Standard Workflows are durable and auditable, can run up to 1 year, and retain full execution history for up to 90 days after completion, while Express Workflows can run for up to 5 minutes and do not capture Step Functions execution history unless CloudWatch Logs are enabled. The workflow type tradeoffs are documented in <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html?utm_source=openai\">Choosing workflow type</a>.<br/><br/>The approval step needs the <b>callback</b> integration pattern. With <code>.waitForTaskToken</code>, Step Functions pauses the task until an approved component calls <code>SendTaskSuccess</code> or <code>SendTaskFailure</code> with the token from <code>$$.Task.Token</code>, and the token must be returned from the same AWS account. Request Response would move on after the initial response, and <code>.sync</code> is a job-completion pattern with polling and cancellation limitations, as described in <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html\">Integrating services with Step Functions</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This is correct because the callback integration pattern pauses a Standard workflow until Step Functions receives the task token through SendTaskSuccess or SendTaskFailure. The same-account condition is important because task tokens must be returned by principals in the same AWS account.<br/>• <strong>B</strong>: ✅ This is correct because Amazon States Language provides the state types needed to make the reasoning, action, observation, and stopping logic explicit. Task states perform work, Choice states decide the next transition, and Fail states stop an execution with an error.<br/>• <strong>C</strong>: ❌ This is incorrect because Express Workflows can run for up to 5 minutes, which does not fit diagnostic sessions that can last several days. Express Workflows also support only Request Response service integrations, so they do not meet the callback approval requirement.<br/>• <strong>D</strong>: ❌ This is incorrect because the Request Response pattern continues after the initial HTTP response and does not wait for the underlying job or approval process to finish. The workflow could advance without the human approval outcome that is needed for the next reasoning step.<br/>• <strong>E</strong>: ❌ This is incorrect because the callback pattern, not .sync, is the appropriate integration pattern when an external human review must return a task token. The .sync pattern also has polling and event side effects, and Step Functions cancellation of an integrated task is best effort rather than guaranteed.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A, B"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A regional energy utility's grid operations AI team runs a multi-tenant incident-analysis assistant on Amazon Bedrock. Each request can include a small alert or several pages of retrieved outage history, so requests per minute has not correlated with throttling or cost. The team needs to allocate per-tenant capacity before model invocation, defer work that would exceed each tenant's minute-level token budget, and avoid paying for capacity-estimation calls.</p><p>Which approach will meet these requirements with the MOST accurate resource allocation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Multi-tenant, kích thước request chênh lệch lớn nên request rate không phản ánh tải.</li><li>Cần phân bổ capacity theo token <strong>trước khi invoke</strong>, trì hoãn việc vượt budget token mỗi phút, không tốn phí ước lượng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CountTokens</strong> trả số input token chính xác cho model đã chọn và không tính phí. Cộng với giới hạn output rồi đưa qua <strong>token bucket</strong> theo tenant để admit hoặc trì hoãn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — chính xác, miễn phí, token-based.</li><li><strong>B</strong>: ❌ Sai — tokenizer chung không khớp tokenizer model, dùng average kém chính xác, request-rate bucket không đo token.</li><li><strong>C</strong>: ❌ Sai — chỉ phản ứng sau khi throttle, vẫn dùng request rate.</li><li><strong>D</strong>: ❌ Sai — gọi model nhỏ để tóm tắt tốn tiền và độ dài summary không phản ánh input token thật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CountTokens</li><li>Token bucket per tenant</li><li>Tokens per minute</li><li>Free estimation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp ước lượng token trước khi invoke → nghĩ ngay đến <strong>CountTokens API</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 71,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>Call CountTokens for the selected model with the planned request shape, combine the estimate with the output limit, and admit requests through per-tenant token buckets.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the model-specific token estimator before inference, which aligns allocation with the actual selected model and request format. Combining estimated input tokens with an output limit gives the admission controller a practical upper bound for minute-level token budgeting.</p>"
            },
            {
              "choice": "<p>Calculate tokens with a shared tokenizer library, combine the estimate with historical averages, and admit requests through per-tenant request-rate buckets.</p>",
              "correct": false,
              "feedback": "<p>A shared tokenizer can be inaccurate because tokenization is model-specific in Amazon Bedrock. Request-rate buckets also miss the key driver in this scenario, which is highly variable prompt and context length.</p>"
            },
            {
              "choice": "<p>Send requests directly with a reduced maxTokens value during busy periods, track throttling responses, and adjust per-tenant request-rate buckets afterward.</p>",
              "correct": false,
              "feedback": "<p>Reducing the output limit can control completion size, but it does not estimate the prompt and retrieved-context tokens before invocation. Relying on throttling feedback is reactive and does not defer work before model invocation as required.</p>"
            },
            {
              "choice": "<p>Invoke a smaller Bedrock model to summarize each request, combine the summary length with the output limit, and admit requests through per-tenant token buckets.</p>",
              "correct": false,
              "feedback": "<p>Summarizing before admission adds an inference call and cost before the system decides whether the tenant has capacity. The summary token length also does not accurately represent the token usage of the original request sent to the selected model.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 71,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For FM workloads, capacity planning should be based on <b>tokens</b>, not only request counts, because one request can contain a short prompt while another can contain a large RAG context. Amazon Bedrock provides <code>CountTokens</code> to estimate token usage for a request before running inference, and the documentation states that using it does not incur charges. The estimator is <i>model-specific</i> and accepts inputs shaped like <code>InvokeModel</code> or <code>Converse</code> requests, so it is a better fit than a generic tokenizer or a different model's behavior.<br/><br/>A practical allocator uses the selected model and planned request shape to estimate input tokens, then combines that estimate with an explicit output cap such as <code>maxTokens</code>. That gives the application a conservative budget to compare against tenant-level token buckets or queues before invoking the model. This design aligns admission control with the actual scarcity being managed, model-level token processing capacity, while avoiding unnecessary inference calls for requests that should be delayed.<br/><br/>The other approaches are close but fail on an important operational dimension. Generic tokenizers and request-rate buckets ignore model-specific tokenization and variable context size. Summarizing first may reduce later cost, but it spends inference capacity before admission control. Reactive throttling control can be useful as feedback, but it does not satisfy the requirement to make allocation decisions before invoking the FM. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/count-tokens.html?utm_source=openai\">Count tokens for Amazon Bedrock models</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach uses the model-specific token estimator before inference, which aligns allocation with the actual selected model and request format. Combining estimated input tokens with an output limit gives the admission controller a practical upper bound for minute-level token budgeting.<br/>• <strong>B</strong>: ❌ A shared tokenizer can be inaccurate because tokenization is model-specific in Amazon Bedrock. Request-rate buckets also miss the key driver in this scenario, which is highly variable prompt and context length.<br/>• <strong>C</strong>: ❌ Reducing the output limit can control completion size, but it does not estimate the prompt and retrieved-context tokens before invocation. Relying on throttling feedback is reactive and does not defer work before model invocation as required.<br/>• <strong>D</strong>: ❌ Summarizing before admission adds an inference call and cost before the system decides whether the tenant has capacity. The summary token length also does not accurately represent the token usage of the original request sent to the selected model.",
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
      "question_text": "<p>A biotech lab's regulatory submissions team built an Amazon Bedrock agent that searches internal SOP knowledge bases and invokes Lambda-backed action groups to draft answers for auditors. During a pilot, reviewers see only the final natural-language responses and cannot reconstruct why the agent chose a knowledge base, invoked an action group, or stopped after a failed step. The team wants per-request transparency for reviewers without adding a separate orchestration framework. The team does not need to expose provider-internal foundation model chain-of-thought.</p><p>Which implementation will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Reviewer cần thấy vì sao Bedrock agent chọn knowledge base, gọi action group hoặc dừng khi lỗi.</li><li>Không thêm orchestration framework, không cần lộ chain-of-thought của model.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>InvokeAgent với <strong>enableTrace=true</strong> trả các trace event của orchestration (rationale, knowledge base lookup, action group invocation, lỗi). Lưu trace riêng khỏi final response trong chunk.bytes để làm bằng chứng cho reviewer.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ConverseStream không phải agent workflow, reasoningContent là suy luận của model và đề không cần.</li><li><strong>B</strong>: ❌ Sai — Automated Reasoning checks xác thực chính sách, không giải thích hành vi agent.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — log chứa model I/O thô, không có cấu trúc bước của agent như knowledge base hay action group.</li><li><strong>D</strong>: ✅ Đúng — trace events đúng cho transparency.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>InvokeAgent</li><li>enableTrace</li><li>Trace events</li><li>chunk.bytes</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp cần giải thích hành động của Bedrock Agent → nghĩ ngay đến <strong>enableTrace</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 72,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>Call ConverseStream for the agent workflow. Persist returned reasoningContent blocks for each request and present reasoningText values as the reviewer trace.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because reasoningContent is a content block for Converse and ConverseStream model conversations, not an agent orchestration trace. Reasoning content can also be redacted by the model provider, so it should not be treated as a reliable source for reviewer-visible agent step explanations.</p>"
            },
            {
              "choice": "<p>Attach Automated Reasoning checks to a guardrail. Persist returned findings for each request and present policy-rule feedback as the reviewer trace.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because Automated Reasoning checks validate outputs against policy rules and return findings in detect mode. They can provide policy-grounded verification feedback, but they do not trace why an agent selected a knowledge base, called an action group, or encountered a failure.</p>"
            },
            {
              "choice": "<p>Enable Bedrock model invocation logging to CloudWatch Logs. Persist the logged payloads for each request and present the logged model outputs as the reviewer trace.</p>",
              "correct": false,
              "feedback": "<p>This is incorrect because model invocation logging is for supported bedrock-runtime operations, such as Converse and InvokeModel, and is not a replacement for Bedrock agent traces. Invocation logs can help with audit and troubleshooting when enabled, but they do not provide the agent orchestration trace needed to reconstruct knowledge base and action group decisions.</p>"
            },
            {
              "choice": "<p>Call InvokeAgent with enableTrace set to true. Persist returned trace events with each request and present the final response from chunk.bytes separately from the reviewer trace.</p>",
              "correct": true,
              "feedback": "<p>This is correct because Amazon Bedrock agent tracing is controlled on the InvokeAgent request by setting enableTrace to true. The trace can show agent orchestration, action group activity, knowledge base steps, and failures, while the final response is returned separately in the chunk object's bytes field.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 72,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: D<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock agent tracing</b> is the fit when the transparency question is about an agent's orchestration, not the foundation model's internal reasoning. For <code>InvokeAgent</code>, setting <code>enableTrace</code> to <code>true</code> allows the response stream to include trace information about the agent's steps, and the final user response remains in the <code>bytes</code> field of the <code>chunk</code> object. See the <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html\">InvokeAgent API Reference</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html\">Amazon Bedrock agent trace events</a>.<br/><br/>Agent traces are designed to expose the workflow-level path: orchestration decisions, action group inputs and outputs, knowledge base queries and results, and failure reasons. That makes them suitable for reviewer or auditor transparency when users need to understand <i>what the agent did</i> and why a step succeeded or failed. This is different from provider-internal chain-of-thought, which should not be assumed to be available or safe to display.<br/><br/>Bedrock <code>reasoningContent</code> belongs to the Converse and ConverseStream content model, and it can contain either visible reasoning text or provider-redacted content. It is useful only for supported models and APIs, and it is not a universal agent trace. The details are documented in the <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html\">Amazon Bedrock conversation inference guide</a>.<br/><br/>Model invocation logging and Automated Reasoning checks are useful governance tools, but they answer different questions. Invocation logging must be enabled and applies to documented runtime operations, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html\">Amazon Bedrock model invocation logging</a>. Automated Reasoning checks can produce policy-rule validation findings, but they operate as a verification layer rather than an agent decision trace, as described in <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html\">Automated Reasoning checks in Amazon Bedrock Guardrails</a>.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This is incorrect because reasoningContent is a content block for Converse and ConverseStream model conversations, not an agent orchestration trace. Reasoning content can also be redacted by the model provider, so it should not be treated as a reliable source for reviewer-visible agent step explanations.<br/>• <strong>B</strong>: ❌ This is incorrect because Automated Reasoning checks validate outputs against policy rules and return findings in detect mode. They can provide policy-grounded verification feedback, but they do not trace why an agent selected a knowledge base, called an action group, or encountered a failure.<br/>• <strong>C</strong>: ❌ This is incorrect because model invocation logging is for supported bedrock-runtime operations, such as Converse and InvokeModel, and is not a replacement for Bedrock agent traces. Invocation logs can help with audit and troubleshooting when enabled, but they do not provide the agent orchestration trace needed to reconstruct knowledge base and action group decisions.<br/>• <strong>D</strong>: ✅ This is correct because Amazon Bedrock agent tracing is controlled on the InvokeAgent request by setting enableTrace to true. The trace can show agent orchestration, action group activity, knowledge base steps, and failures, while the final response is returned separately in the chunk object's bytes field.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global video game studio's trust and safety team is building a real-time NPC chat feature by using Amazon Bedrock. The feature must block harmful player prompts before they reach the foundation model, mask sensitive information in model responses, enforce studio-specific banned topics, and send only ambiguous moderation cases to a human review process. Normal conversations must stay on the synchronous request path with minimal added latency.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chat NPC real-time: chặn prompt độc hại trước FM, mask thông tin nhạy cảm ở response, banned topics riêng, chỉ ca mơ hồ mới vào human review.</li><li>Giữ đường đồng bộ, latency thấp, <strong>ít vận hành nhất</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock guardrail</strong> áp dụng cho cả prompt và response (content filters, denied topics, sensitive information masking) ngay inline. Step Functions chỉ chạy ở luồng human review ngoại lệ nên không làm chậm hội thoại bình thường.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — guardrail chỉ ở response, prompt phải tự code Lambda, dư vận hành.</li><li><strong>B</strong>: ❌ Sai — Express workflow cho mỗi turn thêm latency và overhead không cần thiết.</li><li><strong>C</strong>: ✅ Đúng — guardrail cả hai chiều, Step Functions chỉ cho ngoại lệ.</li><li><strong>D</strong>: ❌ Sai — tự làm moderation service, Comprehend, mask, nhiều custom code nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails (input + output)</li><li>Denied topics</li><li>Sensitive information masking</li><li>Human review exceptions</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp moderation realtime ít vận hành → nghĩ ngay đến <strong>Guardrails inline</strong>, workflow chỉ cho ca ngoại lệ.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 73,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>Apply an Amazon Bedrock guardrail only to model responses in the gateway Lambda, add Lambda checks for player prompts, and start Step Functions only for human review exceptions.</p>",
              "correct": false,
              "feedback": "<p>This preserves an exception-only review path, but it does not use managed guardrail evaluation for prompts before they reach the foundation model. Relying on custom prompt checks for the primary input safety control increases operational overhead and weakens coverage compared with applying guardrails to both inputs and outputs.</p>"
            },
            {
              "choice": "<p>Run each chat turn through a Step Functions Express workflow, invoke Lambda pre-checks, apply a Bedrock guardrail during inference, and branch to human review for ambiguous cases.</p>",
              "correct": false,
              "feedback": "<p>Step Functions Express workflows can support synchronous orchestration, and this design still uses Bedrock guardrails. However, putting every normal chat turn through a workflow adds orchestration complexity and latency compared with keeping only exception handling in Step Functions.</p>"
            },
            {
              "choice": "<p>Apply an Amazon Bedrock guardrail to prompts and responses in the gateway Lambda, add Lambda checks for studio-specific policies, and start Step Functions only for human review exceptions.</p>",
              "correct": true,
              "feedback": "<p>Amazon Bedrock guardrails provide managed filtering for harmful content, denied topics, word filters, and sensitive information handling across inputs and outputs. Lambda can add narrow custom checks that guardrails do not cover, while Step Functions is reserved for exception workflows so normal requests remain synchronous.</p>"
            },
            {
              "choice": "<p>Run a custom Lambda moderation service before Bedrock, use Amazon Comprehend for entity detection, mask responses in Lambda, and start Step Functions only for low-confidence cases.</p>",
              "correct": false,
              "feedback": "<p>This can implement a moderation path, but it shifts broad harmful-content filtering, topic controls, and output safety handling into custom logic. That increases development and tuning overhead compared with using managed Bedrock guardrails inline.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 3: AI Safety, Security, and Governance",
      "discusstion": [
        {
          "id": 73,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: C<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/><b>Amazon Bedrock guardrails</b> are designed to sit directly in the model interaction path and evaluate both user inputs and model outputs. They can apply content filters, denied topics, word filters, and sensitive information filters, which makes them the managed control plane for common GenAI safety requirements. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html\">Guardrails for Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use.html\">Use a guardrail</a>.<br/><br/>For requirements that are unique to the game studio, such as custom slang, franchise-specific banned topics, or internal escalation rules, <b>AWS Lambda</b> is an appropriate lightweight extension point around the Bedrock call. <b>AWS Step Functions</b> is a better fit for the asynchronous human review path because it can coordinate multi-step exception handling without forcing every normal chat message through a workflow. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\">What is AWS Lambda?</a> and <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html\">What is AWS Step Functions?</a>.<br/><br/>Custom moderation services, Comprehend-based entity detection, and synchronous orchestration can be useful supporting controls, but they increase the amount of safety logic the team must build and maintain. A practical safety system combines managed guardrails for broad content categories with targeted custom checks, then escalates only the cases that need human judgment.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ This preserves an exception-only review path, but it does not use managed guardrail evaluation for prompts before they reach the foundation model. Relying on custom prompt checks for the primary input safety control increases operational overhead and weakens coverage compared with applying guardrails to both inputs and outputs.<br/>• <strong>B</strong>: ❌ Step Functions Express workflows can support synchronous orchestration, and this design still uses Bedrock guardrails. However, putting every normal chat turn through a workflow adds orchestration complexity and latency compared with keeping only exception handling in Step Functions.<br/>• <strong>C</strong>: ✅ Amazon Bedrock guardrails provide managed filtering for harmful content, denied topics, word filters, and sensitive information handling across inputs and outputs. Lambda can add narrow custom checks that guardrails do not cover, while Step Functions is reserved for exception workflows so normal requests remain synchronous.<br/>• <strong>D</strong>: ❌ This can implement a moderation path, but it shifts broad harmful-content filtering, topic controls, and output safety handling into custom logic. That increases development and tuning overhead compared with using managed Bedrock guardrails inline.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A telehealth triage platform's clinical operations team uses a single Amazon Bedrock text model to generate structured intake summaries from nurse chat transcripts. The downstream system rejects summaries when required JSON fields are missing or when the same transcript produces materially different field values across repeated runs. The team has 2,000 reviewed transcripts with expected summaries and must choose inference settings for production without building a custom experimentation service.</p><p>Which approach will best meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Output JSON phải đủ field và ổn định giữa các lần chạy cùng transcript.</li><li>Có 2.000 transcript đã review, chọn inference settings mà không xây experimentation service.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Độ lặp lại phụ thuộc cả <strong>temperature thấp</strong> và sampling hẹp (top_p, top_k). Dùng <strong>Bedrock Evaluations</strong> trên các tổ hợp này với dataset có sẵn, chọn cấu hình được hỗ trợ và đạt ngưỡng chất lượng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ đổi temperature, chọn theo điểm cao nhất mà không xét schema và độ lặp lại.</li><li><strong>B</strong>: ✅ Đúng — thử low temperature và narrow sampling, so với ngưỡng.</li><li><strong>C</strong>: ❌ Sai — giữ sampling nguyên nên không giải quyết biến thiên giữa các lần chạy; maxTokens và template không kiểm soát tính ngẫu nhiên.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — top_p rất thấp có thể giảm biến thiên nhưng bỏ qua temperature, và có thể cắt chất lượng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Evaluations</li><li>Temperature thấp</li><li>top_p / top_k</li><li>Repeatability</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp output cần ổn định, lặp lại → <strong>temperature thấp</strong> + <strong>sampling hẹp</strong>, kiểm chứng bằng <strong>Evaluations</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 74,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>Run Amazon Bedrock Evaluations across temperature-only candidates, then deploy the configuration with the highest semantic correctness score.</p>",
              "correct": false,
              "feedback": "<p>Temperature tuning is relevant, but it is not the only sampling control that can affect repeatability for supported models. A semantic correctness score alone can miss required-field omissions or repeated-run differences that cause downstream rejection.</p>"
            },
            {
              "choice": "<p>Run Amazon Bedrock Evaluations across low-temperature and narrower-sampling candidates, then deploy the supported configuration that meets the quality thresholds.</p>",
              "correct": true,
              "feedback": "<p>This approach uses the reviewed transcript dataset to compare inference configurations before production rollout. Lower temperature and narrower sampling settings generally reduce randomness for extraction-style workloads, while evaluation verifies that the chosen settings still meet the required quality thresholds.</p>"
            },
            {
              "choice": "<p>Run Amazon Bedrock Evaluations across maxTokens and JSON-template candidates while keeping sampling unchanged, then deploy the configuration that passes schema checks.</p>",
              "correct": false,
              "feedback": "<p>JSON templates and response length controls can help reduce malformed or incomplete output, but they do not directly address randomness from unchanged sampling parameters. A configuration can pass schema checks and still produce materially different field values across repeated runs.</p>"
            },
            {
              "choice": "<p>Run Amazon Bedrock Evaluations across very low top_p candidates, then deploy the configuration that best satisfies repeatability checks.</p>",
              "correct": false,
              "feedback": "<p>Restricting nucleus sampling can reduce variability, but setting it too aggressively can make outputs brittle or reduce answer quality. Optimizing repeatability without also validating schema completeness and expected field values does not meet all production requirements.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 4: Operational Efficiency and Optimization for GenAI Applications",
      "discusstion": [
        {
          "id": 74,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: B<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For structured extraction and operational workflows, inference settings should be selected with the task objective in mind. Parameters such as <code>temperature</code>, nucleus sampling, and top-k sampling affect how much randomness the model uses when choosing tokens, and the available controls are model specific. Lower randomness is typically a better starting point for repeatable JSON-style outputs, but the final choice should be validated rather than assumed.<br/><br/><b>Amazon Bedrock Evaluations</b> provides a managed way to compare model outputs against a prompt dataset, using automatic, human, or LLM-based evaluation methods depending on the evaluation type. That fits the requirement to use the reviewed transcript dataset without building a separate experimentation service. The important distinction is that the evaluation must reflect the application’s actual acceptance criteria, including expected field values, required JSON fields, and stability across repeated runs. See <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html\">Evaluate model performance in Amazon Bedrock</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html\">Inference parameters for foundation models</a>.<br/><br/>Controls such as <code>maxTokens</code> and JSON-oriented prompt templates are useful for cost, verbosity, and output-shape management, but they do not replace sampling-parameter selection. Similarly, tuning only one parameter or optimizing only for repeatability can miss failures in completeness or correctness. The best operational pattern is to test supported candidate parameter configurations on representative examples, then promote the configuration that meets the application’s quality threshold.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ❌ Temperature tuning is relevant, but it is not the only sampling control that can affect repeatability for supported models. A semantic correctness score alone can miss required-field omissions or repeated-run differences that cause downstream rejection.<br/>• <strong>B</strong>: ✅ This approach uses the reviewed transcript dataset to compare inference configurations before production rollout. Lower temperature and narrower sampling settings generally reduce randomness for extraction-style workloads, while evaluation verifies that the chosen settings still meet the required quality thresholds.<br/>• <strong>C</strong>: ❌ JSON templates and response length controls can help reduce malformed or incomplete output, but they do not directly address randomness from unchanged sampling parameters. A configuration can pass schema checks and still produce materially different field values across repeated runs.<br/>• <strong>D</strong>: ❌ Restricting nucleus sampling can reduce variability, but setting it too aggressively can make outputs brittle or reduce answer quality. Optimizing repeatability without also validating schema completeness and expected field values does not meet all production requirements.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A museum archive's digital preservation team is building a RAG assistant by using Amazon Bedrock Knowledge Bases. Researchers often submit multi-intent questions that compare preservation guidance across several media types. Profiling shows that a single semantic retrieval call often returns strong results for one part of the question but misses evidence for the other parts. The application already performs final answer generation with a separate Amazon Bedrock model invocation because it must inject a strict JSON response schema and human review metadata.</p><p>Which approach will improve retrieval effectiveness while preserving application control over final generation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Câu hỏi nhiều ý, <strong>một lần semantic retrieval</strong> bỏ sót bằng chứng cho các ý còn lại.</li><li>Phải cải thiện retrieval nhưng vẫn kiểm soát bước generation cuối (JSON schema, human review metadata).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tách query thành subquery, gọi <strong>Retrieve</strong> cho từng subquery rồi gộp context vào prompt generation có sẵn. Retrieve chỉ trả context, nên app giữ quyền kiểm soát generation.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — decomposition + Retrieve từng phần, giữ generation riêng.</li><li><strong>B</strong>: ❌ Sai — RetrieveAndGenerate sinh câu trả lời trung gian, mất kiểm soát và làm nhiễu bước generation cuối.</li><li><strong>C</strong>: ❌ Sai — gộp thành một query rộng hơn vẫn là một retrieval, dễ bỏ sót một số ý.</li><li><strong>D</strong>: ❌ Sai — RetrieveAndGenerate sinh câu trả lời luôn; post-process JSON không thay thế việc inject schema và metadata vào prompt.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Query decomposition</li><li>Retrieve vs RetrieveAndGenerate</li><li>Multi-intent</li><li>Step Functions</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp câu hỏi multi-intent + muốn tự generate → nghĩ ngay đến <strong>decompose query</strong> và <strong>Retrieve từng subquery</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 75,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>Use Step Functions to invoke a Lambda function that decomposes the query, call the Knowledge Bases Retrieve operation for each subquery, and pass merged contexts to the existing generation prompt.</p>",
              "correct": true,
              "feedback": "<p>This approach separates query understanding from final response generation, which preserves the application's existing prompt, schema, and review metadata. Calling Retrieve for each focused subquery improves coverage for multi-intent questions because each part can retrieve its own relevant evidence before the application performs synthesis.</p>"
            },
            {
              "choice": "<p>Use Step Functions to invoke a Lambda function that decomposes the query, call the Knowledge Bases RetrieveAndGenerate operation for each subquery, and pass generated answers to the existing generation prompt.</p>",
              "correct": false,
              "feedback": "<p>This can answer each subquery, but it adds generation before the application's required final generation step. It also passes model-generated text instead of raw retrieved context, which reduces control over grounding and can make final synthesis harder to audit.</p>"
            },
            {
              "choice": "<p>Use a Lambda function to expand the original query into a single broader query, call the Knowledge Bases Retrieve operation once, and pass the returned contexts to the existing generation prompt.</p>",
              "correct": false,
              "feedback": "<p>Query expansion can help recall, but a single retrieval call can still be dominated by the most semantically prominent part of a multi-intent question. The scenario requires improving coverage across separate comparison targets, so decomposed retrieval is a better fit.</p>"
            },
            {
              "choice": "<p>Use the Knowledge Bases RetrieveAndGenerate operation with query transformation enabled, return the generated response, and apply the JSON schema in a post-processing Lambda function.</p>",
              "correct": false,
              "feedback": "<p>RetrieveAndGenerate combines retrieval with response generation, so it does not preserve the application's existing final generation control point. A post-processing Lambda can reshape output, but it cannot provide the same control as generating directly with the required schema and metadata in the prompt.</p>"
            }
          ]
        }
      ],
      "topic_name": "Content Domain 1: Foundation Model Integration, Data Management, and Compliance",
      "discusstion": [
        {
          "id": 75,
          "date": "",
          "username": "Udemy",
          "content": "<strong>✅ CORRECT ANSWER</strong>: A<br/><br/><strong>💡 OVERALL EXPLANATION</strong><br/><br/>For complex RAG questions, a useful mental model is to separate <b>query planning</b>, <b>retrieval</b>, and <b>answer synthesis</b>. A multi-intent comparison query is often better handled by decomposing it into focused subqueries, retrieving evidence for each subquery, then merging and deduplicating the contexts before the final FM call. This avoids letting one high-similarity topic crowd out other required evidence.<br/><br/>Amazon Bedrock Knowledge Bases expose distinct runtime operations. <code>Retrieve</code> retrieves relevant information from a knowledge base and returns retrieval results for the application to use. <code>RetrieveAndGenerate</code> retrieves information and uses an FM to generate a response, which is useful when Bedrock should own the answer synthesis step. In this scenario, the application must keep final generation because it injects a strict JSON schema and human review metadata, so <code>Retrieve</code> is the better primitive. See the Amazon Bedrock Agent Runtime API references for <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html\">Retrieve</a> and <a href=\"https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html\">RetrieveAndGenerate</a>.<br/><br/><b>AWS Lambda</b> and <b>AWS Step Functions</b> are appropriate orchestration components when the query handling logic needs to be explicit. Lambda can implement decomposition, expansion, normalization, and result merging logic. Step Functions can coordinate multiple retrieval calls, including parallel branches, retries, and downstream synthesis, while keeping the final Bedrock model invocation inside the application's controlled generation path.<br/><br/><strong>⚡ OPTION ANALYSIS</strong><br/>• <strong>A</strong>: ✅ This approach separates query understanding from final response generation, which preserves the application's existing prompt, schema, and review metadata. Calling Retrieve for each focused subquery improves coverage for multi-intent questions because each part can retrieve its own relevant evidence before the application performs synthesis.<br/>• <strong>B</strong>: ❌ This can answer each subquery, but it adds generation before the application's required final generation step. It also passes model-generated text instead of raw retrieved context, which reduces control over grounding and can make final synthesis harder to audit.<br/>• <strong>C</strong>: ❌ Query expansion can help recall, but a single retrieval call can still be dominated by the most semantically prominent part of a multi-intent question. The scenario requires improving coverage across separate comparison targets, so decomposed retrieval is a better fit.<br/>• <strong>D</strong>: ❌ RetrieveAndGenerate combines retrieval with response generation, so it does not preserve the application's existing final generation control point. A post-processing Lambda can reshape output, but it cannot provide the same control as generating directly with the required schema and metadata in the prompt.",
          "upvote_count": "",
          "selected_answers": "Selected Answer:A"
        }
      ]
    }
  ]
}
