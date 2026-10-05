var AIP_C01_001_100 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has a generative AI (GenAI) product recommendation application that uses Amazon Bedrock. The application suggests products to customers based on browsing history and demographics. The company needs to implement fairness evaluation across multiple demographic groups to detect and measure bias in recommendations between two prompt approaches. The company wants to collect and monitor fairness metrics in real time. The company must receive an alert if the fairness metrics show a discrepancy of more than 15% between demographic groups. The company must receive weekly reports that compare the performance of the two prompt approaches.<br/>Which solution will meet these requirements with the LEAST custom development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đo bias/fairness giữa các nhóm nhân khẩu học cho 2 prompt approach, theo dõi real time, cảnh báo khi lệch &gt;15%, báo cáo hàng tuần.</li><li>Ưu tiên: <strong>LEAST custom development effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon SageMaker Clarify</strong> là công cụ managed có sẵn các bias metric; publish sang <strong>CloudWatch</strong> thì có thể đặt alarm theo ngưỡng 15% và dựng dashboard so sánh mà gần như không phải tự viết logic tính fairness.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải tự viết Lambda post-processing và custom metric, tốn nhiều development nhất.</li><li><strong>B</strong>: ❌ Sai — Guardrails content filter và InvocationsIntervened không đo fairness giữa các nhóm nhân khẩu học.</li><li><strong>C</strong>: ✅ Đúng — Clarify cung cấp bias metric sẵn, đẩy sang CloudWatch để alarm và dashboard.</li><li><strong>D</strong>: ❌ Sai — model evaluation job không phải giám sát real time và InvocationsIntervened không phản ánh fairness theo nhóm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SageMaker Clarify</li><li>bias / fairness metrics</li><li>CloudWatch alarm</li><li>LEAST custom development</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"bias / fairness metrics\" → nghĩ ngay đến <strong>SageMaker Clarify</strong>, không phải Guardrails.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>Configure an Amazon CloudWatch dashboard to display default metrics from Amazon Bedrock API calls. Create custom metrics based on model outputs. Set up Amazon EventBridge rules to invoke AWS lambda functions that perform post-processing analysis on model responses and publish custom fairness metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create the two prompt variants in Amazon Bedrock Prompt Management. Use Amazon Bedrock Flows to deploy the prompt variants with defined traffic allocation. Configure Amazon Bedrock guardrails that have content filters to monitor demographic fairness. Set up Amazon CloudWatch alarms on the GuardrailContentSource dimension that use InvocationsIntervened metrics to detect recommendation discrepancy threshold violations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon SageMaker Clarify to analyze model outputs. Publish fairness metrics to Amazon CloudWatch. Create CloudWatch composite alarms that combine SageMaker Clarify bias metrics with Amazon Bedrock latency metrics to provide a comprehensive fairness evaluation dashboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock model evaluation job to compare fairness between the two prompt variants. Enable model invocation logging in Amazon CloudWatch. Set up CloudWatch alarms for InvocationsIntervened metrics with a dimension for each demographic group.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 1 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1718588,
          "date": "Tue 03 Mar 2026 21:14",
          "username": "GiorgioGss",
          "content": "A - Too Much Custom Development<br>B - Guardrails Are Not Fairness Evaluation Tools<br>D - Model Evaluation Jobs Are Not Continuous Monitoring<br>https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-measure-data-bias.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1758486,
          "date": "Tue 19 May 2026 12:18",
          "username": "Gaparod",
          "content": "D. Bedrock Model Evaluation Jobs<br>Model evaluation jobs are useful for offline comparisons, but:<br>They are not designed for continuous real-time monitoring<br>InvocationsIntervened metrics are tied to Guardrails, not fairness<br>They do not provide operational bias alerts by demographic group<br>cleared my exam, and the updated questions on CertsTopic helped me feel more confident.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1754983,
          "date": "Sat 09 May 2026 21:23",
          "username": "AWSCer1937",
          "content": "D. Bedrock Model Evaluation Jobs<br>Model evaluation jobs are useful for offline comparisons, but:<br>They are not designed for continuous real-time monitoring<br>InvocationsIntervened metrics are tied to Guardrails, not fairness<br>They do not provide operational bias alerts by demographic group",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1751127,
          "date": "Mon 27 Apr 2026 00:08",
          "username": "teashoppe",
          "content": "Clarify doesn't do real-time nor integrate with Bedrock.  Hard to choose, since A is valid but is a do it yourself solution and they want the least customer development.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1749513,
          "date": "Tue 21 Apr 2026 15:36",
          "username": "awstaro",
          "content": "Has anyone taken this exam recently? How much of the material was covered?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1743953,
          "date": "Tue 07 Apr 2026 05:23",
          "username": "AmyJoy",
          "content": "Real-time monitoring is a hard requirement that Bedrock evaluation jobs don't fully address<br>Production monitoring vs. evaluation jobs are different use cases<br>The maturity and specialization of SageMaker Clarify for this exact scenario",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721611,
          "date": "Sun 15 Mar 2026 13:18",
          "username": "jainparag1",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1720252,
          "date": "Tue 10 Mar 2026 00:38",
          "username": "Thirukj",
          "content": "Use Amazon SageMaker Clarify to evaluate fairness across demographic groups and publish metrics to CloudWatch for monitoring and alarms.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1720206,
          "date": "Mon 09 Mar 2026 20:16",
          "username": "eesa",
          "content": "Clarify puede generar análisis y reportes exportables, lo que encaja mejor con la comparación periódica entre dos enfoques de prompt. La parte de “latency” en la opción C no es estrictamente necesaria para fairness, pero sigue siendo la alternativa que más se alinea con el requerimiento general y con menos desarrollo a medida",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1720116,
          "date": "Mon 09 Mar 2026 11:55",
          "username": "hedykim",
          "content": "Bedrock Guardrails is a tool for the 'safety' of content, not for measuring 'statistical fairness'.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1719812,
          "date": "Sun 08 Mar 2026 05:34",
          "username": "xyztest",
          "content": "Correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1719720,
          "date": "Sat 07 Mar 2026 15:29",
          "username": "eCosinus",
          "content": "Clarify computes fairness metrics automatically<br>Metrics can be published to CloudWatch<br>CloudWatch alarms can trigger alerts when metrics exceed thresholds (like &gt;15% discrepancy)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1719656,
          "date": "Sat 07 Mar 2026 04:40",
          "username": "Piddi",
          "content": "Option C sounds appealing because SageMaker Clarify is actually built for bias detection. However, combining Clarify bias metrics with Bedrock latency metrics in a \"composite alarm\" doesn't make logical sense — latency has nothing to do with fairness. Also, SageMaker Clarify is typically used for traditional ML model bias (pre/post-training), and integrating it with Bedrock GenAI outputs in real time would require significant custom work, which goes against the \"least custom development effort\" requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719655,
          "date": "Sat 07 Mar 2026 04:39",
          "username": "Piddi",
          "content": "Option D can be eliminated first. Bedrock model evaluation jobs are designed to compare models, not prompt variants for ongoing fairness monitoring. They're also batch jobs, not real-time monitoring solutions. The InvocationsIntervened metric is related to guardrails, not model evaluation jobs.<br>Option B has issues too. Bedrock guardrails with content filters are designed to block harmful/toxic content, not to measure statistical fairness discrepancies across demographic groups. The InvocationsIntervened metric tells you how often a guardrail intervened, not whether recommendations are biased across demographics. This doesn't genuinely measure fairness in the way the question requires.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719653,
          "date": "Sat 07 Mar 2026 04:37",
          "username": "Piddi",
          "content": "Option A is the most practical answer. Here's why:<br>CloudWatch dashboards provide real-time monitoring<br>EventBridge rules with Lambda functions can perform post-processing analysis on Bedrock responses as they happen, extracting fairness metrics per demographic group<br>Custom CloudWatch metrics can capture the specific fairness discrepancies (the 15% threshold can be set as a CloudWatch alarm)<br>Weekly reports can be generated from CloudWatch data<br>While it does involve Lambda functions for post-processing, this is a well-established, relatively lightweight pattern using managed AWS services. The other options either misuse services (B, D) or propose illogical combinations (C).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718668,
          "date": "Wed 04 Mar 2026 06:06",
          "username": "Piddi",
          "content": "Option B leverages native Amazon Bedrock capabilities end-to-end. Bedrock Prompt Management handles the two prompt variants, Bedrock Flows manages traffic allocation between them (enabling A/B comparison), and Bedrock Guardrails with content filters can be configured to monitor outputs for demographic fairness issues. CloudWatch alarms on the guardrail metrics (InvocationsIntervened with the GuardrailContentSource dimension) provide the real-time alerting when discrepancies exceed the threshold. Weekly reports can be generated from CloudWatch dashboards comparing the two variants. This approach uses managed services with minimal custom code.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718627,
          "date": "Tue 03 Mar 2026 22:54",
          "username": "apcertification",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company is developing an AI assistant to help clients plan investments and manage their portfolios. The company identifies several high-risk conversation patterns such as requests for specific stock recommendations or guaranteed returns. High-risk conversation patterns could lead to regulatory violations if the company cannot implement appropriate controls.<br/>The company must ensure that the AI assistant does not provide inappropriate financial advice, generate content about competitors, or make claims that are not factually grounded in the company's approved financial guidance. The company wants to use Amazon Bedrock Guardrails to implement a solution.<br/>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dùng <strong>Amazon Bedrock Guardrails</strong> để chặn tư vấn tài chính rủi ro, chặn nội dung về đối thủ, và chặn claim không có căn cứ.</li><li>Cần chọn đúng 3 cấu hình tương ứng 3 yêu cầu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Denied topics</strong> chặn các chủ đề cụ thể (khuyến nghị cổ phiếu, lợi nhuận đảm bảo). <strong>Word filters</strong> chặn chính xác tên đối thủ ở cả input và output. <strong>Contextual grounding check</strong> với threshold cao buộc câu trả lời phải bám sát nguồn đã được duyệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — denied topics phù hợp để chặn các conversation pattern rủi ro.</li><li><strong>B</strong>: ❌ Sai — content filter dành cho nhóm hate, insults, violence..., không dùng để chặn chủ đề tùy biến.</li><li><strong>C</strong>: ❌ Sai — content filter không lọc theo tên đối thủ.</li><li><strong>D</strong>: ✅ Đúng — custom word filter cho tên đối thủ, block cả input và output.</li><li><strong>E</strong>: ❌ Sai — threshold thấp cho phép nhiều nội dung kém grounded lọt qua.</li><li><strong>F</strong>: ✅ Đúng — threshold cao chỉ cho phép câu trả lời bám sát nguồn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>denied topics</li><li>word filters</li><li>contextual grounding check</li><li>grounding threshold cao = nghiêm ngặt</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chủ đề cấm\" → denied topics; \"tên cụ thể\" → word filter; \"hallucination/grounded\" → grounding threshold cao.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>Add the high-risk conversation patterns to a denied topics guardrail.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a content filter guardrail to filter prompts that contain the high-risk conversation patterns.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a content filter guardrail to filter prompts that contain competitor names.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the names of competitors as custom word filters. Set the input and output actions to block.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set a low grounding score threshold.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set a high grounding score threshold.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 2 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752736,
          "date": "Fri 01 May 2026 18:22",
          "username": "Chibuzo1",
          "content": "The answers are A, D, and F because they use the three distinct and correctly matched guardrail mechanisms: denied topics for semantic blocking of high-risk financial conversation patterns, custom word filters for precise competitor name blocking in both directions, and a high grounding score threshold to enforce factual accuracy against the company's approved financial guidance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1720460,
          "date": "Tue 10 Mar 2026 14:29",
          "username": "czzhyt",
          "content": "Anwser is ADF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1719721,
          "date": "Sat 07 Mar 2026 15:33",
          "username": "eCosinus",
          "content": "A, D, F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1718681,
          "date": "Wed 04 Mar 2026 08:34",
          "username": "Feanorich",
          "content": "A, D, F",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1718590,
          "date": "Tue 03 Mar 2026 21:18",
          "username": "GiorgioGss",
          "content": "BC - out from the start<br>E - out because low grounding makes it easier for content to pass",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1717492,
          "date": "Fri 27 Feb 2026 02:31",
          "username": "eclipse_hunter",
          "content": "A. High-risk conversations (e.g., stock recommendations, guaranteed returns) are among the most important regulatory prohibitions.<br>Reject Topic Guardrails are ideal for blocking these \"absolutely unacceptable\" responses.<br>D. To prevent content creation related to competitors, a custom word filter that detects specific words and blocks their input and output is the most direct and reliable method.<br>It offers more granular control than a content filter and is well-suited for handling company-specific prohibited words.<br>F. AI-provided financial guidance must be strictly checked for factual accuracy.<br>A higher threshold can more effectively suppress unfounded claims and delusional responses.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:ADF"
        },
        {
          "id": 1717491,
          "date": "Fri 27 Feb 2026 02:30",
          "username": "eclipse_hunter",
          "content": "A, D, and F.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:ADF"
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an AI assistant as a React application that uses AWS Amplify, an AWS AppSync GraphQL API, and Amazon Bedrock Knowledge Bases. The application uses the GraphQL API to call the Amazon Bedrock RetrieveAndGenerate API for knowledge base interactions. The company configures an AWS Lambda resolver to use the RequestResponse invocation type.<br/>Application users report frequent timeouts and slow response times. Users report these problems more frequently for complex questions that require longer processing.<br/>The company needs a solution to fix these performance issues and enhance the user experience.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App React + Amplify + AppSync gọi RetrieveAndGenerate qua Lambda resolver kiểu RequestResponse nên bị timeout và chậm với câu hỏi phức tạp.</li><li>Cần cải thiện hiệu năng và trải nghiệm người dùng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amplify AI Kit</strong> hỗ trợ streaming response qua AppSync GraphQL, người dùng thấy token ngay khi được sinh ra nên không còn chờ toàn bộ response, đồng thời tránh timeout của chế độ đồng bộ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — streaming qua GraphQL bằng AI Kit, thay đổi tối thiểu và cải thiện UX.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — tăng timeout và retry không giảm độ trễ cảm nhận được, còn làm chờ lâu hơn.</li><li><strong>C</strong>: ❌ Sai — SQS thêm độ phức tạp, không có streaming, AppSync không poll queue.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — bỏ RetrieveAndGenerate (mất knowledge base RAG) và phải thêm WebSocket API, phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amplify AI Kit</li><li>streaming response</li><li>AppSync GraphQL</li><li>RetrieveAndGenerate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"timeout/chậm với câu trả lời dài\" trong Amplify + AppSync → nghĩ ngay đến <strong>streaming</strong> bằng Amplify AI Kit.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>Use AWS Amplify AI Kit to implement streaming responses from the GraphQL API and to optimize client-side rendering.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the timeout value of the Lambda resolver. Implement retry logic with exponential backoff.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the application to send an API request to an Amazon SQS queue. Update the AWS AppSync resolver to poll and process the queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the RetrieveAndGenerate API to the InvokeModelWithResponseStream API. Update the application to use an Amazon API Gateway WebSocket API to support the streaming response.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 3 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752738,
          "date": "Fri 01 May 2026 18:26",
          "username": "Chibuzo1",
          "content": "The answer is A because AWS Amplify AI Kit is specifically designed to add streaming response capability to the exact technology stack the company already uses — React, Amplify, AppSync GraphQL, and Amazon Bedrock — resolving both timeout and slow response issues by delivering progressive token streaming to the client without replacing any existing architectural components, while optimizing client-side rendering for the best possible user experience with the least implementation effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746347,
          "date": "Sat 11 Apr 2026 15:54",
          "username": "vsi00",
          "content": "AWS Amplify AI Kit is designed for this exact pattern: a React app using AppSync and Bedrock, where long-running model responses hurt user experience. Its streaming model sends incremental updates to the browser over an AWS AppSync WebSocket subscription instead of making the frontend wait for one large synchronous response. AWS documents that Amplify AI Kit streaming works by having Lambda call Bedrock with a streaming API request, then forward chunks through AppSync to the client. That directly addresses the “timeouts and slow response times,” especially for longer answers, by improving time-to-first-response and perceived responsiveness.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722196,
          "date": "Wed 18 Mar 2026 00:15",
          "username": "Andorkien",
          "content": "It’s D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721779,
          "date": "Mon 16 Mar 2026 04:33",
          "username": "ArunRav",
          "content": "Streaming delivers the tokens as they are generated and there by reduce the latency. Rest of the options doesnt fit the use case.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1720450,
          "date": "Tue 10 Mar 2026 13:11",
          "username": "czzhyt",
          "content": "anwser is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1720254,
          "date": "Tue 10 Mar 2026 00:43",
          "username": "Tanle",
          "content": "AWS Amplify AI Kit is specifically designed to solve this exact problem — it replaces the synchronous RequestResponse Lambda resolver pattern with a streaming architecture over AppSync WebSocket subscriptions, eliminating timeout issues for long-running Knowledge Base queries.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718596,
          "date": "Tue 03 Mar 2026 21:33",
          "username": "GiorgioGss",
          "content": "https://builder.aws.com/content/2h2bFxVed2TfqVB3symJaJVZ5fk/streaming-a-response-from-bedrock-knowledge-base",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company operates a global product recommendation system that needs to switch between multiple foundation models (FM) in Amazon Bedrock based on regulations, cost optimization, and performance requirements. The company must apply custom controls based on proprietary business logic, including dynamic cost thresholds, AWS Region-specific compliance rules, and real-time A/B testing across multiple FMs. The system must be able to switch between FMs without deploying new code. The system must route user requests based on complex rules including user tier, transaction value, regulatory zone, and real-time cost metrics that change hourly and require immediate propagation across thousands of concurrent requests.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển đổi FM linh hoạt không cần deploy code, routing theo logic phức tạp (user tier, vùng pháp lý, cost thay đổi hàng giờ), propagate tức thì cho hàng nghìn request đồng thời.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS AppConfig</strong> (Agent) cho phép cập nhật cấu hình động, cache cục bộ và propagate nhanh mà không cần deploy. Logic nghiệp vụ phức tạp chạy trong <strong>Lambda</strong>, chọn FM cho từng request qua một endpoint duy nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — sửa environment variable cần cập nhật function, không phù hợp cho thay đổi hàng giờ và rule phức tạp.</li><li><strong>B</strong>: ❌ Sai — mapping template và stage variable không thể hiện logic phức tạp, đổi stage variable phải redeploy stage.</li><li><strong>C</strong>: ✅ Đúng — AppConfig Agent + Lambda logic tùy biến, không cần deploy code.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda authorizer không phải nơi đúng để routing, thêm nhiều Lambda theo model gây phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS AppConfig</li><li>dynamic configuration</li><li>feature flags / A/B testing</li><li>no code deploy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đổi config runtime không deploy code\" → nghĩ ngay đến <strong>AppConfig</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>Deploy an AWS Lambda function that uses environment variables to store routing rules and Amazon Bedrock FM IDs. Use the Lambda console to update the environment variables when business requirements change. Configure an Amazon API Gateway REST API to read request parameters to make routing decisions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon API Gateway REST API request transformation templates to implement routing logic based on request attributes. Store Amazon Bedrock FM endpoints as REST API stage variables. Update the variables when the system switches between models.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to fetch routing configurations from the AWS AppConfig Agent for each user request. Run business logic in the Lambda function to select the appropriate FM for each request. Expose the FM through a single Amazon API Gateway REST API endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda authorizers for an Amazon API Gateway REST API to evaluate routing rules that are stored in AWS AppConfig. Return authorization contexts based on business logic. Route requests to model-specific Lambda functions for each Amazon Bedrock FM.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 4 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722197,
          "date": "Wed 18 Mar 2026 00:17",
          "username": "Andorkien",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721780,
          "date": "Mon 16 Mar 2026 05:05",
          "username": "ArunRav",
          "content": "Running the logic for selecting the FM in lambda and swtiching based on that as the other options are not fit for the purpose.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718602,
          "date": "Tue 03 Mar 2026 21:44",
          "username": "GiorgioGss",
          "content": "\"without deploying new code.\" - Appconfig basic definition -https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html",
          "upvote_count": "1",
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
      "question_text": "<p>A company is developing an internal generative AI (GenAI) assistant that uses Amazon Bedrock to summarize corporate documents for multiple business units. The GenAI assistant must generate responses in a consistent format that includes a document summary, classification of business risks, and terms that are flagged for review. The GenAI assistant must adapt the tone of responses for each user's business unit, such as legal, human resources, or finance. The GenAI assistant must block hate speech, inappropriate topics, and sensitive information such as personal health information.<br/>The company needs a solution to centrally manage prompt variants across business units and teams. The company wants to minimize ongoing orchestration efforts and maintenance for post-processing logic. The company also wants to have the ability to adjust content moderation criteria for the GenAI assistant over time.<br/>Which solution will meet these requirements with the LEAST maintenance overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quản lý tập trung prompt variant theo business unit, tone khác nhau, chặn hate speech và PHI, điều chỉnh moderation theo thời gian.</li><li>Ưu tiên: <strong>LEAST maintenance overhead</strong>, ít orchestration và post-processing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Prompt Management</strong> cung cấp template và variant tái sử dụng, còn <strong>Bedrock Guardrails</strong> (category filters + sensitive information/term lists) chặn nội dung ngay trong luồng, không cần code hậu xử lý.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — hoàn toàn managed, tập trung, chỉnh guardrail dễ dàng.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — \"audience-based threshold tuning\" và internal administration API là phần phải tự xây và bảo trì.</li><li><strong>C</strong>: ❌ Sai — DynamoDB, Step Functions, Comprehend là nhiều thành phần tự quản lý.</li><li><strong>D</strong>: ❌ Sai — template trong DynamoDB, hai Lambda và Comprehend làm tăng overhead.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>prompt variants</li><li>Guardrails</li><li>LEAST maintenance overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"quản lý prompt tập trung + moderation\" → <strong>Prompt Management + Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to configure reusable templates and business unit-specific prompt variants. Apply Amazon Bedrock guardrails that have category filters and sensitive term lists to block prohibited content.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to define base templates. Enforce business unit-specific tone by using system prompt variables. Configure Amazon Bedrock guardrails to apply audience-based threshold tuning. Manage the guardrails by using an internal administration API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock with business unit-based instruction injection in API calls. Store response formatting rules in Amazon DynamoDB. Use AWS Step functions to validate responses. Use Amazon Comprehend to apply content filters after the GenAI assistant generates responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock with custom prompt templates that are stored in Amazon DynamoDB. Create one AWS Lambda function to select business unit-specific prompts. Create a second Lambda function to call Amazon Comprehend to filter prohibited content from responses.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 5 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752846,
          "date": "Sat 02 May 2026 12:20",
          "username": "Chibuzo1",
          "content": "The answer is A because Bedrock Prompt Management with variants handles business-unit-specific tone through managed configuration, Bedrock Guardrails handles content moderation adjustably without code changes, and together they eliminate all custom orchestration infrastructure — delivering the required capabilities with the least maintenance overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722217,
          "date": "Wed 18 Mar 2026 03:18",
          "username": "ArunRav",
          "content": "A to be used as it has reusable templates as an option and bedrock guardrails which can be set to avoid the maintenance overhead compared to the other options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722198,
          "date": "Wed 18 Mar 2026 00:20",
          "username": "Andorkien",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718603,
          "date": "Tue 03 Mar 2026 21:50",
          "username": "GiorgioGss",
          "content": "guardrails are meant to block - so A<br>CD out - comprehend is not suited here<br>B out - audience based tuning cannot be made with guardrails",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company is building a customer support application that retrieves relevant financial regulation documents from a database based on semantic similarities to user queries. The application must integrate with Amazon Bedrock to generate responses. The application must be able to search documents that are in English, Spanish, and Portuguese. The application must filter documents by metadata such as publication date, regulatory agency, and document type.<br/>The database stores approximately 10 million document embeddings. To minimize operational overhead, the company wants a solution that minimizes management and maintenance effort. The application must provide low-latency responses for real-time customer interactions.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Semantic search đa ngôn ngữ cho khoảng 10 triệu embedding, filter theo metadata, tích hợp Bedrock, độ trễ thấp.</li><li>Ưu tiên: minimal operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>OpenSearch Serverless</strong> tự scale, hỗ trợ vector search và metadata filtering, độ trễ thấp, và là vector store được <strong>Bedrock Knowledge Bases</strong> hỗ trợ trực tiếp để làm RAG.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — serverless, managed, filter và low latency, tích hợp KB.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Aurora pgvector phải quản lý instance, index, tự viết pipeline RAG.</li><li><strong>C</strong>: ❌ Sai — dùng non-filterable metadata nên không lọc được theo metadata như yêu cầu; S3 Vectors cũng thiên về chi phí hơn là độ trễ thấp.</li><li><strong>D</strong>: ❌ Sai — Neptune Analytics cho graph, không phù hợp use case này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OpenSearch Serverless</li><li>vector search + metadata filtering</li><li>Bedrock Knowledge Bases</li><li>low latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"vector search + filter + ít vận hành + low latency\" → <strong>OpenSearch Serverless + Knowledge Bases</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>Use Amazon OpenSearch Serverless to provide vector search capabilities and metadata filtering. Connect to Amazon Bedrock Knowledge Bases to enable Retrieval Augmented Generation (RAG) capabilities that use an Anthropic Claude foundation model (FM).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon Aurora PostgreSQL database with the pgvector extension. Define tables to store embeddings and metadata. Use SQL queries to perform similarity searches. Send retrieved documents to Amazon Bedrock to generate responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 Vectors to configure a vector index and non-filterable metadata fields. Integrate S3 Vectors with Amazon Bedrock to enable Retrieval Augmented Generation (RAG) capabilities.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon Neptune Analytics graph database. Configure a vector index that has appropriate dimensionality to store document embeddings. Use Amazon Bedrock to perform graph-based retrieval and to generate responses.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 6 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752891,
          "date": "Sat 02 May 2026 18:43",
          "username": "Chibuzo1",
          "content": "The answer is A because OpenSearch Serverless with Amazon Bedrock Knowledge Bases is the purpose-built, fully managed stack for exactly this scenario — multilingual semantic search at 10 million vector scale, metadata filtering, RAG with a Claude FM, and minimal operational overhead with no cluster management, no capacity planning, and no custom integration code.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722218,
          "date": "Wed 18 Mar 2026 03:19",
          "username": "ArunRav",
          "content": "Opensearch serverless for low latency and low maintenance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722199,
          "date": "Wed 18 Mar 2026 00:21",
          "username": "Andorkien",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718607,
          "date": "Tue 03 Mar 2026 21:54",
          "username": "GiorgioGss",
          "content": "\"semantic search\" = opensearch",
          "upvote_count": "1",
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
      "question_text": "<p>A medical company is building a generative AI (GenAI) application that uses RAG to provide evidence-based medical information. The application uses Amazon OpenSearch Service to retrieve vector embeddings. Users report that searches frequently miss results that contain exact medical terms and acronyms and return too many semantically similar but irrelevant documents. The company needs to improve retrieval quality and maintain low end user latency, even as the document collection grows to millions of documents.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Vector search bỏ sót exact term và acronym y khoa, trả về quá nhiều kết quả tương tự về ngữ nghĩa nhưng không liên quan.</li><li>Ưu tiên: cải thiện chất lượng, low latency khi scale, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Hybrid search</strong> kết hợp vector similarity (ngữ nghĩa) và keyword/BM25 (khớp chính xác thuật ngữ, acronym) ngay trong <strong>OpenSearch Service</strong>, chỉ cần cấu hình, không thêm thành phần mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — giải quyết cả hai vấn đề, thay đổi tối thiểu.</li><li><strong>B</strong>: ❌ Sai — tăng dimension tăng chi phí và độ trễ, Lambda filter thêm latency, không giải quyết exact match.</li><li><strong>C</strong>: ❌ Sai — thay toàn bộ hệ thống tốn công, query expansion là xử lý thủ công.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — re-ranking cải thiện độ liên quan nhưng không bắt được term bị bỏ sót, thêm endpoint SageMaker phải vận hành và tăng latency.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>hybrid search</li><li>keyword + vector</li><li>exact term / acronym</li><li>OpenSearch Service</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"miss exact terms/acronyms\" → nghĩ ngay đến <strong>hybrid search</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>Configure hybrid search by combining vector similarity with keyword matching to improve semantic understanding and exact term and acronym matching.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the dimensions of the vector embeddings from 384 to 1536. Use a post-processing AWS Lambda function to filter out irrelevant results after retrieval.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace OpenSearch Service with Amazon Kendra. Use query expansion to handle medical acronyms and terminology variants during pre-processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a two-stage retrieval architecture in which initial vector search results are re-ranked by an ML model that is hosted on Amazon SageMaker AI.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 7 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722219,
          "date": "Wed 18 Mar 2026 03:21",
          "username": "ArunRav",
          "content": "Using hybrid search in opensearch can help to solve this.Option C was an option if the operational overhead was not a criteria.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718609,
          "date": "Tue 03 Mar 2026 21:58",
          "username": "GiorgioGss",
          "content": "\" Using hybrid search, you get best-of-all-worlds retrieval.\" - https://aws.amazon.com/blogs/big-data/supercharge-your-rag-applications-with-amazon-opensearch-service-and-aryn-docparse/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a generative AI (GenAI)-powered summarization application in an application AWS account that uses Amazon Bedrock. The application architecture includes an Amazon API Gateway REST API that forwards requests to AWS Lambda functions that are attached to private VPC subnets. The application summarizes sensitive customer records that the company stores in a governed data lake in a centralized data storage account. The company has enabled Amazon S3, Amazon Athena, and AWS Glue in the data storage account.<br/>The company must ensure that calls that the application makes to Amazon Bedrock use only private connectivity between the company's application VPC and Amazon Bedrock. The company's data lake must provide fine-grained column-level access across the company's AWS accounts.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda trong private subnet gọi Bedrock chỉ qua private connectivity; data lake cross-account cần quyền fine-grained cấp column.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Interface VPC endpoint</strong> (AWS PrivateLink) cho <strong>bedrock-runtime</strong> giữ traffic trong mạng AWS. <strong>AWS Lake Formation</strong> LF-tag-based access control cho phép cấp quyền table và column cross-account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — PrivateLink cho Bedrock và Lake Formation LF-tags cấp quyền column cross-account.</li><li><strong>B</strong>: ❌ Sai — NAT gateway đi qua internet, S3 bucket policy và ACL không cấp quyền column.</li><li><strong>C</strong>: ❌ Sai — gọi Bedrock qua public endpoint và chỉ cấp quyền cấp database.</li><li><strong>D</strong>: ❌ Sai — IAM path-based không cấp quyền column, cho phép public fallback vi phạm private connectivity.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>interface VPC endpoint (PrivateLink)</li><li>Lake Formation LF-tag</li><li>column-level cross-account</li><li>private connectivity</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"private connectivity tới Bedrock\" → VPC endpoint; \"column-level\" → <strong>Lake Formation</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>In the application account, create interface VPC endpoints for Amazon Bedrock runtimes. Run Lambda functions in private subnets. Use IAM conditions on inference and data-plane policies to allow calls only to approved endpoints and roles. In the data storage account, use AWS Lake Formation LF-tag-based access control to create table and column-level cross-account grants.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run Lambda functions in private subnets. Configure a NAT gateway to provide access to Amazon Bedrock and the data lake. Use S3 bucket policies and ACLs to manage permissions. Export AWS CloudTrail logs to Amazon S3 to perform weekly reviews.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a gateway endpoint only for Amazon S3 in the application account. Invoke Amazon Bedrock through public endpoints. Use database-level grants in AWS Lake Formation to manage data access. Stream AWS CloudTrail logs to Amazon CloudWatch Logs. Do not set up metric filters or alarms.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use VPC endpoints to provide access to Amazon Bedrock and Amazon S3 in the application account. Use only IAM path-based policies to manage data lake access. Send AWS CloudTrail logs to Amazon CloudWatch Logs. Periodically create dashboards and allow public fallback for cross-Region reads to reduce setup time.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 8 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752893,
          "date": "Sat 02 May 2026 18:45",
          "username": "Chibuzo1",
          "content": "The answer is A because interface VPC endpoints with IAM source VPC conditions are the only mechanism that enforces exclusively private connectivity to Amazon Bedrock, while Lake Formation LF-tag-based cross-account column grants are the only mechanism among the options that delivers fine-grained, column-level data lake access control across the application and data storage accounts — both requirements are satisfied with purpose-built AWS services and no public network fallback.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722220,
          "date": "Wed 18 Mar 2026 03:29",
          "username": "ArunRav",
          "content": "A is the only place where connectivity is not publice.B and C using public connectivity. D is is lacking the column level access with lake formation provide.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718612,
          "date": "Tue 03 Mar 2026 22:03",
          "username": "GiorgioGss",
          "content": "besides the fact BCD are going public there is also this key: \"must provide fine-grained column-level access\" - only possible with LakeFormation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717504,
          "date": "Fri 27 Feb 2026 03:24",
          "username": "duo_duo",
          "content": "a is right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company must use Amazon Bedrock to implement a robust governance process for AI-generated content. The company needs to manage hundreds of prompt templates. Multiple teams use the templates across multiple AWS Regions to generate content. The solution must provide version control with approval workflows that include notifications for pending reviews. The solution must also provide detailed audit trails that document prompt activities and consistent prompt parameterization to enforce quality standards.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Governance cho hàng trăm prompt template, nhiều team và Region: version control, approval workflow, audit trail, tham số hóa nhất quán.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Prompt Management</strong> hỗ trợ versioning và template có variable; <strong>CloudTrail</strong> ghi audit; <strong>IAM policies</strong> kiểm soát ai được duyệt/publish. Đây là phương án managed phù hợp nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Bedrock Studio không phải giải pháp governance, phải tự viết Lambda cho approval.</li><li><strong>B</strong>: ✅ Đúng — Prompt Management + CloudTrail + IAM + variables đủ các yêu cầu.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng bằng S3 tags và Step Functions, version control thô sơ, nhiều việc vận hành.</li><li><strong>D</strong>: ❌ Sai — SageMaker Canvas, CloudFormation, AWS Config không phải công cụ quản lý prompt/approval.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management</li><li>prompt versioning</li><li>CloudTrail audit</li><li>prompt variables</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"quản lý prompt template + version + audit\" → <strong>Prompt Management + CloudTrail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>Configure Amazon Bedrock Studio prompt templates. Use Amazon CloudWatch to create dashboards that display prompt usage metrics. Store the approval status of content in Amazon DynamoDB. Use AWS Lambda functions to enforce approvals.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to implement version control. Configure AWS CloudTrail for audit logging. Use IAM policies to control approval permissions. Create parameterized prompt templates by specifying variables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions to create an approval workflow. Store prompts as documents in Amazon S3. Use tags to implement version control. Use Amazon EventBridge to send notifications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon SageMaker Canvas with prompt templates that are stored in Amazon S3. Use AWS CloudFormation to implement version control. Use AWS Config to enforce approval policies.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 9 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752928,
          "date": "Sun 03 May 2026 03:17",
          "username": "Chibuzo1",
          "content": "The answer is B because Amazon Bedrock Prompt Management is the only purpose-built, managed service for prompt template governance — providing native versioning, IAM-controlled approval gates, parameterized templates for quality enforcement, and full CloudTrail audit coverage — without requiring any custom infrastructure, custom code, or workarounds for what the service delivers out of the box.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1742210,
          "date": "Tue 31 Mar 2026 15:28",
          "username": "2d5eb96",
          "content": "Prompt management for version control, audit cloudtrail and permission management IAM",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1722221,
          "date": "Wed 18 Mar 2026 03:45",
          "username": "ArunRav",
          "content": "Option B gives you the right version control option which is there.Option D gives CF as a version control option which is not the correct option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719884,
          "date": "Sun 08 Mar 2026 14:22",
          "username": "Anvith",
          "content": "Prompt Management gives versioning and parameterized templates; CloudTrail provides audit trails; IAM controls approvals. Fits “hundreds of templates, multi Region, approvals, audit”.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718613,
          "date": "Tue 03 Mar 2026 22:09",
          "username": "GiorgioGss",
          "content": "Leaving aside that only B has the cloudtrail in it to satisfy the \"audit trails\". <br>With BPM (bedrock prompt management) you can version your prompts native.<br>https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717498,
          "date": "Fri 27 Feb 2026 03:20",
          "username": "duo_duo",
          "content": "b is right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a customer support application that uses Amazon Bedrock foundation models (FMs) to provide real-time AI assistance to the company's employees. The application must display AI-generated responses character by character as the responses are generated. The application needs to support thousands of concurrent users with minimal latency. The responses typically take 15 to 45 seconds to finish.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hiển thị phản hồi từng ký tự khi đang sinh, hàng nghìn user đồng thời, độ trễ thấp, phản hồi kéo dài 15-45 giây.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>InvokeModelWithResponseStream</strong> trả token theo luồng; <strong>API Gateway WebSocket API</strong> đẩy các phần này tới client qua kết nối hai chiều, bền vững và scale tốt cho thời gian xử lý dài.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — streaming + WebSocket đúng yêu cầu real-time.</li><li><strong>B</strong>: ❌ Sai — InvokeModel chờ trọn response, polling 100 ms gây tải và độ trễ.</li><li><strong>C</strong>: ❌ Sai — IAM user credentials nhúng ở frontend là rủi ro bảo mật nghiêm trọng.</li><li><strong>D</strong>: ❌ Sai — cache và phân trang GET không phải streaming.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>InvokeModelWithResponseStream</li><li>API Gateway WebSocket API</li><li>streaming</li><li>real-time</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"hiển thị từng ký tự/token real time\" → <strong>streaming API + WebSocket</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>Configure an Amazon API Gateway WebSocket API with an AWS Lambda integration. Configure the WebSocket API to invoke the Amazon Bedrock InvokeModelWithResponseStream API and stream partial responses through WebSocket connections.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway REST API with an AWS Lambda integration. Configure the REST API to invoke the Amazon Bedrock standard InvokeModel API and implement frontend client-side polling every 100 ms for complete response chunks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement direct frontend client connections to Amazon Bedrock by using IAM user credentials and the InvokeModelWithResponseStream API without any intermediate gateway or proxy layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway HTTP API with an AWS Lambda integration. Configure the HTTP API to cache complete responses in an Amazon DynamoDB table and serve the responses through multiple paginated GET requests to frontend clients.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 10 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752929,
          "date": "Sun 03 May 2026 03:23",
          "username": "Chibuzo1",
          "content": "The answer is A because WebSocket connections with InvokeModelWithResponseStream is the purpose-built architecture for real-time AI response streaming — tokens flow from Bedrock through Lambda to the WebSocket connection to the client as they are generated, API Gateway handles massive concurrent connection scaling automatically, and the persistent connection model is well-suited for the 15-45 second response durations without timeout or polling overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718615,
          "date": "Tue 03 Mar 2026 22:15",
          "username": "GiorgioGss",
          "content": "https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html<br>C - \"The application needs to support thousands of concurrent users\"<br>D - caching defeats real-time streaming<br>B is the most obvious why is wrong.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717497,
          "date": "Fri 27 Feb 2026 03:11",
          "username": "duo_duo",
          "content": "a is right",
          "upvote_count": "3",
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
      "question_text": "<p>A company is using Amazon Bedrock to design an application to help researchers apply for grants. The application is based on an Amazon Nova Pro foundation model (FM). The application contains four required inputs and must provide responses in a consistent text format. The company wants to receive a notification in Amazon Bedrock if a response contains bullying language. However, the company does not want to block all flagged responses.<br/>The company creates an Amazon Bedrock flow that takes an input prompt and sends it to the Amazon Nova Pro FM. The Amazon Nova Pro FM provides a response.<br/>Which additional steps must the company take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Flow Bedrock dùng Nova Pro cần: 4 input bắt buộc, format đầu ra nhất quán, và được thông báo khi có ngôn từ bắt nạt nhưng <strong>không block</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Prompt Management</strong> định nghĩa variable đầu vào và output format, thêm vào prompts node. <strong>Guardrail</strong> với content filter <strong>insults</strong> ở chế độ <strong>detect</strong> chỉ phát hiện và báo (không block).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — variables và output format qua Prompt Management.</li><li><strong>B</strong>: ❌ Sai — action block sẽ chặn phản hồi, trái yêu cầu không block.</li><li><strong>C</strong>: ❌ Sai — prompt router dùng để chọn model theo prompt, không để định nghĩa input và format.</li><li><strong>D</strong>: ✅ Đúng — insults filter chế độ detect, chỉ thông báo.</li><li><strong>E</strong>: ❌ Sai — inference profile dùng để theo dõi chi phí/routing, không định nghĩa input hay format.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt Management variables</li><li>guardrail detect mode</li><li>insults content filter</li><li>prompts node</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"thông báo nhưng không block\" → guardrail action <strong>detect</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Prompt Management to specify the required inputs as variables. Select an Amazon Nova Pro FM. Specify the output format for the response. Add the prompt to the prompts node of the flow.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail that applies the hate content filter. Set the filter response to block. Add the guardrail to the prompts node of the flow.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock prompt router. Specify an Amazon Nova Pro FM. Add the required inputs as variables to the input node of the flow. Add the prompt router to the prompts node. Add the output format to the output node.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock guardrail that applies the insults content filter. Set the filter response to detect. Add the guardrail to the prompts node of the flow.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock application inference profile that specifies an Amazon Nova Pro FM. Specify the output format for the response in the description. Include a tag for each of the input variables. Add the profile to the prompts node of the flow.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 11 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1719746,
          "date": "Sat 07 Mar 2026 18:47",
          "username": "Bansel",
          "content": "We need:<br>Prompt variables → enforce required inputs<br>Output formatting → consistent structure<br>Guardrails with detection only → notification without blocking.<br>A. Use Amazon Bedrock Prompt Management<br>D. Create a Bedrock Guardrail with insult detection",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AD"
        },
        {
          "id": 1718616,
          "date": "Tue 03 Mar 2026 22:22",
          "username": "GiorgioGss",
          "content": "B - guardrail will block and we need it to pass<br>C - used for routing between multiple models<br>E - mainly for model selection and metadata",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AD"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company is using Amazon Bedrock to build a Retrieval Augmented Generation (RAG) application that helps practitioners make clinical decisions. The application must achieve high accuracy for patient information retrievals, identify hallucinations in generated content, and reduce human review costs.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG y tế cần độ chính xác retrieval cao, phát hiện hallucination, giảm chi phí human review.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Kết hợp <strong>LLM-as-a-judge</strong> để sàng lọc tự động với human review chỉ cho edge case, cùng <strong>Bedrock built-in evaluation</strong> đo retrieval precision và hallucination rate, nên vừa chính xác vừa giảm chi phí con người.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Comprehend trích entity y tế, không phát hiện hallucination.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — tự fine-tune và chạy judge cho mọi response tốn kém, không có human review cho edge case.</li><li><strong>C</strong>: ❌ Sai — Synthetics chỉ kiểm tra câu hỏi biết trước đáp án, không đánh giá hallucination thực tế.</li><li><strong>D</strong>: ✅ Đúng — hybrid automated + human và Bedrock evaluation.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>LLM-as-a-judge</li><li>Bedrock evaluation (RAG)</li><li>hybrid human review</li><li>hallucination rate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giảm chi phí human review + phát hiện hallucination\" → <strong>LLM-as-a-judge + human cho edge case</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>Use Amazon Comprehend to analyze and classify RAG responses and to extract medical entities and relationships. Use AWS Step Functions to orchestrate automated evaluations. Configure Amazon CloudWatch metrics to track entity recognition confidence scores. Configure CloudWatch to send an alert when accuracy falls below specified thresholds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement automated large language model (LLM)-based evaluations that use a specialized model that is fine-tuned for medical content to assess all responses. Deploy AWS Lambda functions to parallelize evaluations. Publish results to Amazon CloudWatch metrics that track relevance and factual accuracy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudWatch Synthetics to generate test queries that have known answers on a regular schedule, and track model success rates. Set up dashboards that compare synthetic test results against expected outcomes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a hybrid evaluation system that uses an automated LLM-as-a-judge evaluation to initially screen responses and targeted human reviews for edge cases. Use Amazon SageMaker Feature Store to maintain evaluation datasets. Use a built-in Amazon Bedrock evaluation to track retrieval precision and hallucination rates.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 12 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1733828,
          "date": "Tue 24 Mar 2026 22:42",
          "username": "awsguruji",
          "content": "D is the correct answer. \"Human\" is involved to gain high accuracy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718617,
          "date": "Tue 03 Mar 2026 22:29",
          "username": "GiorgioGss",
          "content": "A - Comprehend excels at NER but misses hallucination detection and RAG-specific metrics<br>B - High risk for false negatives in critical healthcare scenarios<br>C - CloudWatch Synthetics tests endpoints, not LLM output quality<br>D - https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1717496,
          "date": "Fri 27 Feb 2026 03:10",
          "username": "duo_duo",
          "content": "d is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Company configures a landing zone in AWS Control Tower. The company handles sensitive data that must remain within the European Union. The company must use only the eu-central-1 Region. The company uses SCPs to enforce data residency policies. GenAI developers at the company are assigned IAM roles that have full permissions for Amazon Bedrock.<br/>The company must ensure that GenAI developers can use the Amazon Nova Pro model through Amazon Bedrock only by using cross-Region inference (CRI) and only in eu-central-1. The company enables model access for the GenAI developer IAM roles in Amazon Bedrock. However, when a GenAI developer attempts to invoke the model through the Amazon Bedrock Chat/Text playground, the GenAI developer receives the following error.<br/>User: arn:aws:sts::123456789012:assumed-role/AssumedDevRole/DevUserName<br/>Action: bedrock:InvokeModelWithResponseStream<br/>On resource(s): arn:aws:bedrock:eu-west-3::foundation-model/amazon.nova-pro-v1:0<br/>Context: a service control policy explicitly denies the action<br/>The company needs a solution to resolve the error. The solution must retain the company's existing governance controls and must provide precise access control. The solution must comply with the company's existing data residency policies.<br/>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cross-Region inference (CRI) với Nova Pro cho EU, SCP đang chặn vì request được route sang eu-west-3 (Region khác eu-central-1).</li><li>Cần giữ governance, kiểm soát chính xác, tuân thủ data residency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mở rộng SCP <strong>chỉ</strong> cho inference profile <strong>eu.amazon.nova-pro-v1:0</strong> (chính xác, giữ residency trong EU), và đảm bảo IAM role của developer có quyền gọi profile đó tại mọi Region EU có thể phục vụ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AdministratorAccess không vượt được SCP deny và quá rộng.</li><li><strong>B</strong>: ✅ Đúng — SCP cho phép riêng inference profile EU của Nova Pro.</li><li><strong>C</strong>: ❌ Sai — bật model access ở eu-west-3 đi ngược yêu cầu chỉ dùng eu-central-1 và không gỡ SCP deny.</li><li><strong>D</strong>: ✅ Đúng — IAM cần quyền với profile và foundation model ở các Region EU đích.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — mở cho mọi eu.* profile quá rộng, thiếu precise access control.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>cross-Region inference profile</li><li>SCP explicit deny</li><li>eu.amazon.nova-pro-v1:0</li><li>least privilege</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"SCP explicit deny với CRI\" → cho phép <strong>đúng inference profile</strong>, không mở rộng quá mức.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>Add an AdministratorAccess policy to the GenAI developer IAM role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Extend the existing SCPs to enable CRI for the eu.amazon.nova-pro-v1:0 inference profile.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon Bedrock model access for Amazon Nova Pro in the eu-west-3 Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Validate that the GenAI developer IAM roles have permissions to invoke Amazon Nova Pro through the eu.amazon.nova-pro.v1:0 inference profile on all European Union AWS Regions that can serve the model.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Extend the existing SCP to enable CRI for the eu.* inference profile.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 13 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746547,
          "date": "Mon 13 Apr 2026 01:42",
          "username": "de1612d",
          "content": "Answer is B&amp;D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1741447,
          "date": "Sun 29 Mar 2026 12:00",
          "username": "a9fb7b2",
          "content": "The error shows the request is being routed to eu-west-3 and is being blocked by an SCP. With Amazon Bedrock cross-Region inference, if any destination Region in the selected inference profile is blocked by SCPs, the request fails. AWS says you must allow the Bedrock invoke actions in all destination Regions that belong to the chosen inference profile.<br>Also, for geographic cross-Region inference in the EU, the IAM role needs permission for:<br>1. the EU inference profile,<br>2. the foundation model in the source Region, and<br>3. the foundation model in all destination Regions in that EU profile. AWS also recommends using the specific inference profile ARN for granular control.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1717821,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "This feels like a 50/50 between two options. I'll go with B.",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company is developing a customer service AI assistant by using Amazon Bedrock. The AI assistant must not discuss investment advice with users. The AI assistant must block harmful content, mask personally identifiable information (PII), and maintain audit trails for compliance reporting. The AI assistant must apply content filtering to both user inputs and model responses based on content sensitivity.<br/>The company requires an Amazon Bedrock guardrail configuration that will effectively enforce policies with minimal false positives. The solution must provide multiple handling strategies for multiple types of sensitive content.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một guardrail hiệu quả: chặn investment advice, chặn harmful content, mask PII, audit trail, áp dụng cả input và output, ít false positive, nhiều chiến lược xử lý.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một guardrail duy nhất với content filter mức <strong>medium</strong> (giảm false positive), <strong>denied topics</strong> có định nghĩa và sample phrase, sensitive information filter <strong>mask</strong> PII ở response và <strong>block</strong> ở input, đánh giá cả input và output.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — filter high cho mọi category dễ false positive, block mọi PII không có chiến lược mask.</li><li><strong>B</strong>: ❌ Sai — nhiều guardrail phân tầng, phức tạp và không cần thiết.</li><li><strong>C</strong>: ✅ Đúng — cấu hình cân bằng, nhiều hành động xử lý, input + output.</li><li><strong>D</strong>: ❌ Sai — chain bằng Step Functions là over-engineering, một guardrail đã gom được các policy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>denied topics</li><li>sensitive information filter (mask/block)</li><li>content filter strength medium</li><li>input + output evaluation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ít false positive + nhiều chiến lược\" → <strong>một guardrail</strong>, mức medium, kết hợp mask và block.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>Configure a single guardrail and set content filters to high for all categories. Set up denied topics for investment advice and include sample phrases to block. Set up sensitive information filters that apply the block action for all PII entities. Apply the guardrail to all model inference calls.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure multiple guardrails by using tiered policies. Create one guardrail and set content filters to high. Configure the guardrail to block PII for public interactions. Configure a second guardrail and set content filters to medium. Configure the second guardrail to mask PII for internal use. Configure multiple topic-specific guardrails to block investment advice and set up contextual grounding checks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a guardrail and set content filters to medium for harmful content. Set up denied topics for investment advice and include clear definitions and sample phrases to block. Configure sensitive information filters to mask PII in responses and to block financial information in inputs. Enable both input and output evaluations that use custom blocked messages for audits.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate guardrail for each use case. Create one guardrail that applies a harmful content filter. Create a guardrail to apply topic filters for investment advice. Create a guardrail to apply sensitive information filters to block PII. Use AWS Step Functions to chain the guardrails together sequentially. Use conditional logic based on content classification.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 14 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744634,
          "date": "Wed 08 Apr 2026 01:04",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717825,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I'd bet my certification on C. It's the only logical solution presented.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is developing a generative AI (GenAI) solution that uses Amazon Bedrock with Anthropic Claude to recommend products to customers. Customers report that some of the recommended products are not available for sale on the website or are not relevant to the customer. Customers also report that the solutions takes a long time to generate some recommendations.<br/>The company investigates the issues and finds that most interactions between customers and the product recommendation solution are unique. The company confirms that the solutions recommends products that are not in the company's product catalog. The company must resolve these issues.<br/>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Model gợi ý sản phẩm không có trong catalog hoặc không liên quan (thiếu grounding), phản hồi chậm; tương tác đa phần là duy nhất (cache không hiệu quả).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Knowledge base + RAG</strong> ground câu trả lời vào catalog thật, và <strong>PerformanceConfigLatency = optimized</strong> dùng latency-optimized inference giảm độ trễ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Automated Reasoning checks không phù hợp, provisioned throughput không đảm bảo giảm độ trễ và tốn kém.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — prompt engineering không đảm bảo chỉ gợi ý sản phẩm có thật, streaming chỉ giảm độ trễ cảm nhận.</li><li><strong>C</strong>: ✅ Đúng — RAG giải quyết hallucination, latency optimized giải quyết chậm.</li><li><strong>D</strong>: ❌ Sai — validate sau và caching vô ích vì tương tác duy nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Bases + RAG</li><li>grounding</li><li>PerformanceConfigLatency optimized</li><li>unique interactions (không cache)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"gợi ý ngoài catalog\" → <strong>RAG</strong>; \"interactions duy nhất\" → loại phương án caching.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>Increase grounding within Amazon Bedrock Guardrails. Enable Automated Reasoning checks. Set up provisioned throughput.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use prompt engineering to restrict the model responses to relevant products. Use streaming techniques such as the InvokeModelWithResponseStream action to reduce perceived latency for the customers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock knowledge base. Implement Retrieval Augmented Generation (RAG). Set the PerformanceConfigLatency parameter to optimized.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store product catalog data in Amazon OpenSearch Service. Validate the model's product recommendations against the product catalog. Use Amazon DynamoDB to implement response caching.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 15 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1742617,
          "date": "Thu 02 Apr 2026 10:32",
          "username": "2d5eb96",
          "content": "RAG will solve the issue around recommending product that are only available, the Option C also adress the time to generate recommendations (RAG are fast and PerformanceConfigLatency)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717812,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "I'm arriving at C by process of elimination.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Lambda and REST APIs to build a reasoning agent to automate support workflows. The system must preserve memory across interactions, share the relevant agent state, and support event-driven invocation and synchronous invocation. The system must also enforce access control and session-based permissions.<br/>Which combination of steps provides the MOST scalable solution? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Reasoning agent cần giữ memory, chia sẻ state, hỗ trợ event-driven và synchronous, kiểm soát truy cập và quyền theo session.</li><li>Ưu tiên: <strong>MOST scalable</strong>, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock AgentCore</strong> cung cấp memory, session, identity, observability sẵn có, và có thể gọi Lambda/REST API làm tool qua API Gateway/EventBridge mà không cần code orchestration tùy biến.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — AgentCore quản lý memory, session, identity, event handling.</li><li><strong>B</strong>: ✅ Đúng — tích hợp Lambda/REST API làm tool, hỗ trợ cả sync và event-driven.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions, SQS, DynamoDB tự quản lý state, nhiều orchestration.</li><li><strong>D</strong>: ❌ Sai — container ECS và Aurora tự vận hành, kém scalable và managed.</li><li><strong>E</strong>: ❌ Sai — RAG pipeline tùy biến, state lưu trong S3 không phù hợp session/identity.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock AgentCore</li><li>memory + session</li><li>identity</li><li>tool integration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"agent cần memory, identity, session managed\" → <strong>AgentCore</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock AgentCore to manage memory and session-aware reasoning. Deploy the agent with built-in identity support, event handling, and observability.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Register the Lambda functions and the REST APIs as actions by using Amazon API Gateway and Amazon EventBridge. Enable Amazon Bedrock AgentCore to invoke the Lambda functions and the REST APIs without custom orchestration code.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Agents for reasoning and conversation management. Use AWS Step Functions and Amazon SQS queues for orchestration. Store the agent state in Amazon DynamoDB to maintain memory between steps.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the reasoning logic as a container on Amazon ECS behind Amazon API Gateway. Use Amazon Aurora to store memory data and identity data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Build a custom RAG pipeline by using Amazon Kendra and Amazon Bedrock. Use AWS Lambda to orchestrate tool invocations. Store the agent state in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 16 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744636,
          "date": "Wed 08 Apr 2026 01:10",
          "username": "de1612d",
          "content": "I think A and B are the correct answers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1742618,
          "date": "Thu 02 Apr 2026 10:42",
          "username": "2d5eb96",
          "content": "Option A and B, because the solution needs to be scalable and Agent core allow to have persistance &amp; scalability and monitoring. <br>Option C doesn't meet the goal because steps function &amp; sqs doesn't provide right level or orchestration as some event may be missed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1718826,
          "date": "Wed 04 Mar 2026 19:16",
          "username": "GiorgioGss",
          "content": "A because AgentCore is just the right tool here<br>B because CDE are just wrong",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1717826,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "Going with A, but I'm open to being convinced otherwise.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is developing a Retrieval Augmented Generation (RAG) application to help investment analysts query complex financial relationships across multiple investment vehicles, market sectors, and regulatory environments. The dataset contains highly interconnected entities that have multi-hop relationships. The analysts must be able to examine the relationships holistically to provide accurate investment guidance. The application must deliver comprehensive answers that capture indirect relationships between financial entities. The application must produce responses in less than 3 seconds.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG trên dữ liệu có quan hệ multi-hop giữa nhiều thực thể, cần nhìn tổng thể quan hệ gián tiếp, phản hồi dưới 3 giây.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock Knowledge Bases với GraphRAG</strong> dùng <strong>Amazon Neptune Analytics</strong> tự động xây graph và truy vấn quan hệ multi-hop, managed hoàn toàn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — GraphRAG managed, xử lý multi-hop quan hệ.</li><li><strong>B</strong>: ❌ Sai — truy vấn vector tuần tự bằng Lambda tự viết, chậm và khó bảo trì.</li><li><strong>C</strong>: ❌ Sai — manual relationship mapping trên EC2 tốn vận hành.</li><li><strong>D</strong>: ❌ Sai — index tùy chỉnh trên DynamoDB không phù hợp quan hệ graph.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>GraphRAG</li><li>Neptune Analytics</li><li>multi-hop relationships</li><li>Knowledge Bases</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"multi-hop relationships giữa các thực thể\" → <strong>GraphRAG + Neptune Analytics</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases with Graph RAG and Amazon Neptune Analytics to store the financial data. Analyze the multi-hop relationships between entities and automatically identify related information across documents.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases and an Amazon OpenSearch Service vector store to implement custom relationship identification logic that uses AWS Lambda functions to query multiple vector embeddings in sequence.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon OpenSearch Serverless vector database with k-nearest neighbor (k-NN) searches. Implement manual relationship mapping in an application layer that runs in an Amazon EC2 Auto Scaling group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon DynamoDB to store financial data in a custom indexing system. Use an AWS Lambda function to query relevant records based on input questions. Use Amazon SageMaker AI to generate responses.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 17 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744638,
          "date": "Wed 08 Apr 2026 01:19",
          "username": "de1612d",
          "content": "Since graph-based inference is required, I think the answer is A.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718827,
          "date": "Wed 04 Mar 2026 19:20",
          "username": "GiorgioGss",
          "content": "LEAST operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717803,
          "date": "Sat 28 Feb 2026 14:49",
          "username": "67bdb19",
          "content": "Feels like A is the intended answer here. The wording is tricky.",
          "upvote_count": "1",
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
      "question_text": "<p>A healthcare company uses Amazon Bedrock to deploy an application that generates summaries of clinical documents. The application experiences inconsistent response quality with occasional factual hallucinations. Monthly costs exceed the company's projections by 40%. A GenAI developer must implement a near real-time monitoring solution to detect hallucinations, identify abnormal token consumption, and provide early warnings of cost anomalies. The solution must require minimal custom development work and maintenance overhead.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giám sát near real-time: phát hiện hallucination, token bất thường, cảnh báo sớm chi phí.</li><li>Ưu tiên: ít custom development và bảo trì.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails contextual grounding check</strong> phát hiện hallucination ngay lúc chạy, <strong>model invocation logging</strong> ghi nhận chi tiết, <strong>CloudWatch anomaly detection alarms</strong> trên token metrics cảnh báo bất thường mà không cần code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — phát hiện hallucination bằng Glue + Athena là offline, phải tự phân tích.</li><li><strong>B</strong>: ❌ Sai — evaluation job là batch, không near real-time, thêm Lambda tùy biến.</li><li><strong>C</strong>: ✅ Đúng — grounding check + logging + anomaly detection, managed.</li><li><strong>D</strong>: ❌ Sai — CloudTrail không chứa token usage, QuickSight và Model Monitor không phù hợp để phát hiện hallucination.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>contextual grounding check</li><li>CloudWatch anomaly detection</li><li>model invocation logging</li><li>token usage metrics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"hallucination near real-time\" → <strong>contextual grounding check</strong>; \"chi phí bất thường\" → <strong>CloudWatch anomaly detection</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>Configure Amazon CloudWatch alarms to monitor InputTokenCount and OutputTokenCount metrics to detect anomalies. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue and Amazon Athena to identify potential hallucinations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run Amazon Bedrock evaluation jobs that use LLM-based judgments to detect hallucinations. Configure Amazon CloudWatch to track token usage. Create an AWS Lambda function to process CloudWatch metrics. Configure the Lambda function to send usage pattern notifications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock to store model invocation logs in an Amazon S3 bucket. Enable text output logging. Configure Amazon Bedrock guardrails to run contextual grounding checks to detect hallucinations. Create Amazon CloudWatch anomaly detection alarms for token usage metrics.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudTrail to log all Amazon Bedrock API calls. Create a custom dashboard in Amazon QuickSight to visualize token usage patterns. Use Amazon SageMaker Model Monitor to detect quality drift in generated summaries.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 18 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744639,
          "date": "Wed 08 Apr 2026 01:22",
          "username": "de1612d",
          "content": "The answer is C, as it is a design focused on minimum operational observability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1742620,
          "date": "Thu 02 Apr 2026 10:55",
          "username": "2d5eb96",
          "content": "\"require minimal custom development work\" option B require more operations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1741451,
          "date": "Sun 29 Mar 2026 12:40",
          "username": "a9fb7b2",
          "content": "C is correct . B uses Bedrock evaluation jobs plus a custom Lambda notification pipeline, which adds more development and is less suited to near real-time monitoring.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718828,
          "date": "Wed 04 Mar 2026 19:25",
          "username": "GiorgioGss",
          "content": "\" minimal custom development work and maintenance overhead\" - Only C fits here.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717823,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "Locked in on B. The other choices are clearly distractors.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is building a generative AI (GenAI) application that produces content based on a variety of internal and external data sources. The company wants to ensure that the generated output is fully traceable. The application must support data source registration and enable metadata tagging to attribute content to its original source. The application must also maintain audit logs of data access and usage throughout the pipeline.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Truy vết nguồn của nội dung sinh ra: đăng ký data source, gắn metadata để attribute nguồn, audit log truy cập và sử dụng xuyên suốt pipeline.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Glue Data Catalog</strong> đăng ký toàn bộ data source và gắn metadata/tag attribution; <strong>CloudTrail</strong> ghi audit log hoạt động trên nhiều service, đáp ứng cả ba yêu cầu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Lake Formation tập trung vào kiểm soát truy cập, tag gắn trực tiếp trên S3 giới hạn ở S3.</li><li><strong>B</strong>: ❌ Sai — CloudWatch Logs không phải audit trail truy cập dữ liệu.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ bao phủ S3, không đăng ký các nguồn khác.</li><li><strong>D</strong>: ✅ Đúng — Glue Data Catalog + metadata tags + CloudTrail xuyên service.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Glue Data Catalog</li><li>metadata tagging</li><li>data source registration</li><li>CloudTrail audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"data lineage/traceability + audit\" → <strong>Glue Data Catalog + CloudTrail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>Use AWS Lake Formation to catalog data sources and control access. Apply metadata tags directly in Amazon S3. Use AWS CloudTrail to monitor API activity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue Data Catalog to register and tag data sources. Use Amazon CloudWatch Logs to monitor access patterns and application behavior.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store data in Amazon S3 and use object tagging for attribution. Use AWS Glue Data Catalog to manage schema information. Use AWS CloudTrail to log access to S3 buckets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue Data Catalog to register all data sources. Apply metadata tags to attribute data sources. Use AWS CloudTrail to log access and activity across services.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 19 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744640,
          "date": "Wed 08 Apr 2026 01:31",
          "username": "de1612d",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1741452,
          "date": "Sun 29 Mar 2026 12:44",
          "username": "a9fb7b2",
          "content": "D is correct. <br>C uses S3 object tags, which can help with individual objects, but it does not address registering all data sources as comprehensively as the Glue Data Catalog.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718830,
          "date": "Wed 04 Mar 2026 19:30",
          "username": "GiorgioGss",
          "content": "A - Lake Formation excels at access control, not GenAI data source registration/metadata attribution<br>B - Cw Logs track application behavior, not data lineage or source attribution<br>C - S3 tagging works for objects, fails for structured/relational sources<br>D - Complete coverage: registration + metadata + audit trails.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1717810,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "C is the textbook answer for this situation.",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company needs to build a document analysis system that uses Amazon Bedrock to process quarterly reports. The system must analyze financial data, perform sentiment analysis, and validate compliance across batches of reports. Each batch contains 5 reports. Each report requires multiple foundation model (FM) calls. The solution must finish the analysis within 10 seconds for each batch. Current sequential processing takes 45 seconds for each batch.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mỗi batch gồm 5 report, mỗi report cần nhiều FM call; phải xong trong 10 giây, trong khi xử lý tuần tự mất 45 giây.</li><li>Yêu cầu quyết định: <strong>song song hóa</strong> các analysis.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions Parallel state</strong> gọi đồng thời nhiều Lambda cho từng loại phân tích, rút ngắn tổng thời gian xuống gần thời gian của nhánh chậm nhất, đồng thời dễ theo dõi bằng CloudWatch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vẫn tuần tự, provisioned concurrency chỉ giảm cold start.</li><li><strong>B</strong>: ✅ Đúng — Parallel state chạy đồng thời, giảm đáng kể thời gian.</li><li><strong>C</strong>: ❌ Sai — mỗi Lambda vẫn xử lý tuần tự các khía cạnh, SQS thêm độ trễ.</li><li><strong>D</strong>: ❌ Sai — container xử lý tuần tự từng report, scale theo CPU không giải quyết latency.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions Parallel state</li><li>parallel processing</li><li>latency reduction</li><li>Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tuần tự quá chậm, cần giảm thời gian\" → <strong>Parallel state</strong> (song song).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda functions with provisioned concurrency to process each analysis type sequentially. Configure the Lambda function timeouts to 10 seconds. Configure automatic retries with exponential backoff.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions with a Parallel state to invoke separate AWS Lambda functions for each analysis type simultaneously. Configure Amazon Bedrock client timeouts. Use Amazon CloudWatch metrics to track execution time and model inference latency.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon SQS queue to buffer analysis requests. Deploy multiple AWS Lambda functions with reserved concurrency. Configure each Lambda function to process different aspects of each report sequentially and then combine the results.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon ECS cluster that runs containers that process each report sequentially. Use a load balancer to distribute batch workloads. Configure an auto-scaling policy based on CPU utilization to handle demand fluctuations.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 20 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744642,
          "date": "Wed 08 Apr 2026 01:35",
          "username": "de1612d",
          "content": "I want to parallelize batch processing, so the answer is B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1741455,
          "date": "Sun 29 Mar 2026 12:48",
          "username": "a9fb7b2",
          "content": "Step Functions workflow can invoke separate Lambda functions in parallel for different analysis tasks, which is exactly what this batch pattern needs. Can also monitor execution time and Bedrock/model latency with CloudWatch metrics, which helps verify the system stays under the 10-second target. Amazon Bedrock exposes monitoring through CloudWatch, and CloudWatch generative AI observability includes latency views for model invocations.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1720989,
          "date": "Thu 12 Mar 2026 20:16",
          "username": "eesa",
          "content": "AWS Step Functions con Parallel state (Opción B) - MEJOR SOLUCIÓN:<br>✅ Paralelización efectiva: Procesa múltiples análisis (financiero, sentimiento, compliance) simultáneamente en lugar de secuencialmente<br>✅ Reduce tiempo drásticamente: De 45s a ~10s al ejecutar tareas en paralelo<br>✅ Orquestación robusta: Step Functions maneja la coordinación de múltiples Lambda functions<br>✅ Monitoreo integrado: CloudWatch metrics para tracking de latencia y tiempos<br>✅ Manejo de errores: Retry logic y error handling nativos<br>✅ Escalabilidad: Cada tipo de análisis escala independientemente",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1720689,
          "date": "Wed 11 Mar 2026 14:54",
          "username": "Neos03",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718838,
          "date": "Wed 04 Mar 2026 20:03",
          "username": "GiorgioGss",
          "content": "ACD fail because it ads latency.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717819,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "Feels like C is the one. Does anyone disagree?",
          "upvote_count": "1",
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
      "question_text": "<p>A company is using Amazon Bedrock to build a customer-facing AI assistant to handle sensitive customer inquiries. The company must use defense-in-depth safety controls to block sophisticated prompt injection attacks. The company must keep audit logs of all safety interventions. The AI assistant must have cross-Region failover capabilities.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chặn prompt injection nhiều lớp (defense-in-depth), có audit log cho mọi safety intervention, và failover cross-Region.</li><li>Ưu tiên: dùng tính năng native của Amazon Bedrock Guardrails.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Guardrails content filter (Prompt Attack) mức high chặn injection, guardrail profile cho cross-Region guardrail inference (failover), và CloudWatch Logs + custom metrics ghi chi tiết từng intervention.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ 3 yêu cầu: filter, cross-Region profile, log intervention chi tiết.</li><li><strong>B</strong>: ❌ Sai — AWS WAF không hiểu prompt injection, CloudTrail chỉ log API call, không có cross-Region.</li><li><strong>C</strong>: ❌ Sai — Comprehend custom classification tự dựng, tốn công, không có cross-Region failover.</li><li><strong>D</strong>: ❌ Sai — \"cross-Region guardrail replication\" không tồn tại; word filter chỉ chặn pattern đã biết; CloudTrail không ghi intervention.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Guardrails content filter - prompt attack</li><li>Guardrail profile - cross-Region inference</li><li>CloudWatch Logs - intervention events</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Prompt injection + failover cross-Region + audit intervention → Guardrails (high) + guardrail profile + CloudWatch Logs.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use a guardrail profile to implement cross-Region guardrail inference. Use Amazon CloudWatch Logs with custom metrics to capture detailed guardrail intervention events.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use AWS WAF to block suspicious inputs. Use AWS CloudTrail to log API calls for audits.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon Comprehend custom classification to detect prompt injection attacks. Use Amazon API Gateway to validate requests. Use Amazon CloudWatch Logs with custom metrics to capture detailed intervention events.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to use custom content filters to protect against harmful content. Set the content filters to high. Use word filters to protect against known attack patterns. Configure cross-Region guardrail replication to provide failover capabilities. Store logs in AWS CloudTrail for compliance auditing.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 21 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1755130,
          "date": "Mon 11 May 2026 02:23",
          "username": "Chibuzo1",
          "content": "The correct answer is A.<br>Analysis<br>The question has four distinct requirements to satisfy:<br>Defense-in-depth safety controls against prompt injection<br>Audit logs of all safety interventions<br>Cross-Region failover capabilities<br>Uses Amazon Bedrock as the core platform",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1748992,
          "date": "Sat 18 Apr 2026 20:23",
          "username": "minime",
          "content": "D. Guardrails + word filters + cross-Region + CloudTrail",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1744643,
          "date": "Wed 08 Apr 2026 01:38",
          "username": "de1612d",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722263,
          "date": "Wed 18 Mar 2026 07:07",
          "username": "ArunRav",
          "content": "Guardrail and Cloudwatch is the choice. WAF and comprehend cant be used here.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721976,
          "date": "Tue 17 Mar 2026 04:12",
          "username": "AM_aws",
          "content": "https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-bedrock-guardrails-cross-region-inference/<br>https://aws.amazon.com/blogs/security/protect-your-generative-ai-applications-against-encoding-based-attacks-with-amazon-bedrock-guardrails/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721960,
          "date": "Tue 17 Mar 2026 00:42",
          "username": "ryo1998",
          "content": "its correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:回"
        },
        {
          "id": 1720132,
          "date": "Mon 09 Mar 2026 13:59",
          "username": "Tanle",
          "content": "Choose A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719814,
          "date": "Sun 08 Mar 2026 05:43",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718840,
          "date": "Wed 04 Mar 2026 20:12",
          "username": "GiorgioGss",
          "content": "B - WAF operates at the HTTP layer and doesn't understand semantic prompt<br>C - Comprehend is for different purpose<br>D - only with word filters you cannot protect against \"sophisticated\" attacks.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717813,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Could be wrong, but I’m backing B. It just clicks.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is designing a canary deployment strategy for a payment processing API. The system must support automated gradual traffic shifting between multiple Amazon Bedrock models based on real-time inference metrics, historical traffic patterns, and service health. The solution must be able to gradually increase traffic to new model versions. The system must increase traffic if metrics remain healthy and decrease traffic if the performance degrades below acceptable thresholds.<br/>The company needs to comprehensively monitor inference latency and error rates during the deployment phase. The company must also be able to halt deployments and revert to a previous model version without any manual intervention.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Canary deployment tự động giữa các model Bedrock: tăng traffic khi healthy, giảm/rollback khi tệ đi.</li><li>Phải giám sát latency và error rate, rollback không cần can thiệp thủ công.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Step Functions điều phối từng stage (shift, wait, check metrics bằng Lambda từ CloudWatch, tăng hoặc rollback) hoàn toàn tự động, EventBridge kích hoạt khi có version mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — workflow tự động, có vòng kiểm tra metric và rollback.</li><li><strong>B</strong>: ❌ Sai — API Gateway stage variables không hỗ trợ weighted routing kiểu canary theo model; cần \"external logic\" thủ công.</li><li><strong>C</strong>: ❌ Sai — SageMaker endpoint variants không đại diện cho Bedrock model.</li><li><strong>D</strong>: ❌ Sai — OpenSearch không điều khiển traffic; Bedrock không có \"model endpoint\" để SSM cập nhật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions - staged traffic shift</li><li>CloudWatch metrics + Lambda check</li><li>Automated rollback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Canary/gradual shift + tự rollback theo metric → Step Functions + CloudWatch + Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock with provisioned throughput to host the versions of the model. Configure an Amazon EventBridge rule to invoke an AWS Step Functions workflow when a new model version is released. Configure the workflow to shift traffic in stages, wait for a specified time period, and invoke an AWS Lambda function to check Amazon CloudWatch performance metrics. Configure the workflow to increase traffic if the metrics meet thresholds and to trigger a traffic rollback if performance metrics fall below thresholds.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to invoke various Amazon Bedrock model versions. Use an Amazon API Gateway HTTP API with stage variables and weighted routing to shift traffic gradually to new model versions. Use Amazon CloudWatch to monitor performance metrics. Use external logic to adjust traffic between model versions and to roll back if performance falls below thresholds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker AI endpoint variants to represent multiple Amazon Bedrock model versions. Use variant weights to shift traffic. Use Amazon CloudWatch to monitor performance metrics. Use SageMaker Model Monitor to trigger AWS Lambda functions to roll back a model deployment if performance drops below a specified threshold. Configure an Amazon EventBridge rule to roll back model deployments if an anomaly is detected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Service to track inference logs. Configure OpenSearch Service to invoke an AWS Systems Manager Automation runbook to update Amazon Bedrock model endpoints to shift traffic based on the inference logs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 22 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744644,
          "date": "Wed 08 Apr 2026 01:40",
          "username": "de1612d",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722264,
          "date": "Wed 18 Mar 2026 07:09",
          "username": "ArunRav",
          "content": "Step function will help stepwise shifting.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722085,
          "date": "Tue 17 Mar 2026 14:50",
          "username": "AM_aws",
          "content": "https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html - why C is not correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718841,
          "date": "Wed 04 Mar 2026 20:17",
          "username": "GiorgioGss",
          "content": "B is to complex and only with A you can \"gradually increase traffic\".",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717811,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Leaning toward C, but I'd be interested to hear arguments for the others.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company uses an AI application to process financial documents by using Amazon Bedrock. During business hours, the application handles approximately 10,000 requests each hour, which requires consistent throughput.<br/>The company uses the CreateProvisionedModelThroughput API to purchase provisioned throughput. Amazon CloudWatch metrics show that the provisioned capacity is unused while on-demand requests are being throttled. The company finds the following code in the application: python response = bedrock_runtime.invoke_model(modelId=\"anthropic.claude-v2\", body=json.dumps(payload))<br/>The company needs the application to use the provisioned throughput and to resolve the throttling issues.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Provisioned throughput đã mua nhưng không được dùng, request on-demand vẫn bị throttle.</li><li>Nguyên nhân nằm ở code: đang gọi bằng base model ID.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Để dùng provisioned throughput phải truyền ARN của provisioned model (do CreateProvisionedModelThroughput trả về) vào modelId; nếu dùng model ID thường thì request đi qua on-demand.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng MU khi capacity hiện tại còn chưa được dùng là vô nghĩa.</li><li><strong>B</strong>: ✅ Đúng — dùng ARN của provisioned model để route request vào capacity đã mua.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — retry giảm lỗi nhưng vẫn không dùng provisioned capacity.</li><li><strong>D</strong>: ❌ Sai — InvokeModelWithResponseStream không đổi việc dùng provisioned hay on-demand.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Provisioned model ARN</li><li>modelId</li><li>Provisioned unused + on-demand throttled</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Provisioned throughput không được dùng → modelId phải là provisioned model ARN.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>Increase the number of model units (MUs) in the provisioned throughput configuration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the model ID parameter with the ARN of the provisioned model that the CreateProvisionedModelThroughput API returns.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add exponential backoff retry logic to handle throttling exceptions during peak hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the application to use the InvokeModelWithResponseStream API instead of the InvokeModel API.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 23 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1755151,
          "date": "Mon 11 May 2026 10:01",
          "username": "Chibuzo1",
          "content": "The application purchased provisioned throughput but is still routing every request to the on-demand endpoint by using the base model ID string. Provisioned capacity sits idle while on-demand requests pile up and get throttled — exactly what CloudWatch confirms.<br>The application purchased provisioned throughput but is still routing every request to the on-demand endpoint by using the base model ID string. Provisioned capacity sits idle while on-demand requests pile up and get throttled — exactly what CloudWatch confirms.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1722272,
          "date": "Wed 18 Mar 2026 08:14",
          "username": "ArunRav",
          "content": "",
          "upvote_count": "0",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an AI advisory application by using Amazon Bedrock. The application will provide recommendations to customers. The company needs the application to explain its reasoning process and cite specific sources for data. The application must retrieve information from company data sources and show step-by-step reasoning for recommendations. The application must also link data claims to source documents and maintain response latency under 3 seconds.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng tư vấn cần retrieve từ data công ty, trích dẫn nguồn, thể hiện reasoning, latency dưới 3 giây.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Bedrock Knowledge Bases là RAG managed, có sẵn source attribution (citations), kết hợp Claude Messages API; lưu reasoning và citations vào Amazon S3 để audit là đơn giản.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — managed RAG, citation sẵn, ít vận hành.</li><li><strong>B</strong>: ❌ Sai — extended thinking không retrieve data công ty, không có citation nguồn; thinking budget 4,000 token dễ vượt 3 giây.</li><li><strong>C</strong>: ❌ Sai — SageMaker AI + RDS + Lambda là overhead lớn nhất.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự làm custom retrieval tracking.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge Bases - source attribution</li><li>RAG - citations</li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần trích dẫn nguồn từ data công ty, ít vận hành → Bedrock Knowledge Bases.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases with source attribution enabled. Use the Anthropic Claude Messages API with RAG to set high-relevance thresholds for source documents. Store reasoning and citations in Amazon S3 for auditing purposes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock with Anthropic Claude models and extended thinking. Configure a 4,000-token thinking budget. Store reasoning traces and citations in Amazon DynamoDB for auditing purposes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon SageMaker AI with a custom Anthropic Claude model. Use the model's reasoning parameter and AWS Lambda to process responses. Add source citations from a separate Amazon RDS database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock with Anthropic Claude models and chain-of-thought reasoning. Configure custom retrieval tracking with the Amazon Bedrock Knowledge Bases API. Use Amazon CloudWatch to monitor response latency metrics.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 24 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1759093,
          "date": "Sat 23 May 2026 06:48",
          "username": "bonds",
          "content": "I'd go with either B or D. A is not the correct answer. <br>D could be it because CoT <br>B is likely because of extended thinking which is something Claude models do.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1744625,
          "date": "Wed 08 Apr 2026 00:10",
          "username": "potters7",
          "content": "I dont think any answer is perfect. Without least operational overhead I'd go with D as A lacks \"explain its reasoning process\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1742599,
          "date": "Wed 01 Apr 2026 23:58",
          "username": "potters7",
          "content": "I believe A addresses the most req. I did think B but with 4k token thinking + response that might not address the response times.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1722275,
          "date": "Wed 18 Mar 2026 08:20",
          "username": "ArunRav",
          "content": "Amazon Bedrock Knowledge Bases is a fully managed capability hence we can use it for this use case as it need minimal operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1720991,
          "date": "Thu 12 Mar 2026 20:19",
          "username": "eesa",
          "content": "Opción A - MEJOR SOLUCIÓN:<br>✅ Source attribution nativa: Knowledge Bases proporciona citaciones automáticas a documentos fuente<br>✅ RAG integrado: Recupera información de fuentes de datos de la empresa automáticamente<br>✅ Baja latencia: Optimizado para respuestas rápidas (&lt;3s)<br>✅ Mínimo overhead operacional: Servicio completamente administrado<br>✅ Razonamiento con Claude: El modelo explica su proceso de pensamiento naturalmente<br>✅ Auditoría simple: S3 para almacenamiento de logs es straightforward",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718843,
          "date": "Wed 04 Mar 2026 20:27",
          "username": "GiorgioGss",
          "content": "\"link data claims to source documents\" - RAG aka Knowledge base",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717818,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "If I had to guess, I’d pick B based on the wording of the question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company uses multiple foundation models (FMs) through Amazon Bedrock for its generative AI (GenAI) applications. To comply with a new regulation for GenAI use with sensitive financial data, the company needs a token management solution.<br/>The token management solution must proactively alert when applications approach model-specific token limits. The solution must also process more than 5,000 requests each minute and maintain token usage metrics to allocate costs across business units.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quản lý token cho nhiều FM: cảnh báo chủ động khi gần giới hạn, xử lý trên 5,000 request/phút, lưu metric để phân bổ chi phí theo business unit.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Ước lượng token trước khi gọi bằng tokenizer riêng từng model (proactive), publish metric lên Amazon CloudWatch kèm alarm, và lưu chi tiết usage vào Amazon DynamoDB để chargeback.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — proactive, theo model-specific, có metric và dữ liệu cost allocation.</li><li><strong>B</strong>: ❌ Sai — Guardrails không có \"token quota policy\"; chỉ xem request bị từ chối là reactive.</li><li><strong>C</strong>: ❌ Sai — dựa vào DLQ và lỗi là reactive, không cảnh báo trước.</li><li><strong>D</strong>: ❌ Sai — API Gateway usage plan tính theo request, không đếm token nên không chặn theo token limit.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Proactive token estimation</li><li>Model-specific tokenizer</li><li>CloudWatch metrics + DynamoDB</li><li>Cost allocation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cảnh báo trước khi chạm token limit + phân bổ chi phí → đếm token trước, metric CloudWatch, lưu DynamoDB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>Develop model-specific tokenizers in an AWS Lambda function. Configure the Lambda function to estimate token usage before sending requests to Amazon Bedrock. Configure the Lambda function to publish metrics to Amazon CloudWatch and trigger alarms when requests approach thresholds. Store detailed token usage in Amazon DynamoDB to report costs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement Amazon Bedrock Guardrails with token quota policies. Capture metrics on rejected requests. Configure Amazon EventBridge rules to trigger notifications based on Amazon Bedrock Guardrails metrics. Use Amazon CloudWatch dashboards to visualize token usage trends across models.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon SQS dead-letter queue for failed requests. Configure an AWS Lambda function to analyze token-related failures. Use Amazon CloudWatch Logs Insights to generate reports on token usage patterns based on error logs from Amazon Bedrock API responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway to create a proxy for all Amazon Bedrock API calls. Configure request throttling based on custom usage plans with predefined token quotas. Configure API Gateway to reject requests that will exceed token limits.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 25 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722276,
          "date": "Wed 18 Mar 2026 08:23",
          "username": "ArunRav",
          "content": "B doesnt monitor token usage,C-only track failed reqeusts,D- amazon API Gateway cant track the token usage",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718846,
          "date": "Wed 04 Mar 2026 20:35",
          "username": "GiorgioGss",
          "content": "B - guardrails do not have token quota policies.<br>C - sqs is reactive. after something is failing.<br>D - throttling is based on request count, not token count",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717806,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "D. Final answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is developing a customer service application that must process 10,000 daily queries about products, orders, and warranties. The application must be able to respond to queries about 50,000 product documents that are updated every day. The application must integrate with an order management API to check the status of orders and to help process returns. The application must maintain context throughout multi-turn interactions with customers. The company must collect complete audit trails for application responses.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chatbot chăm sóc khách hàng: trả lời từ 50,000 tài liệu cập nhật hằng ngày, gọi order API, giữ context multi-turn, có audit trail.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Bedrock Agents là managed: action groups gọi order API, knowledge base làm RAG (dữ liệu cập nhật bằng sync), agent tự giữ session context, và trace events cho audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fine-tune từng category rất tốn công và không cập nhật hằng ngày được.</li><li><strong>B</strong>: ❌ Sai — continued pre-training không phù hợp dữ liệu đổi mỗi ngày, tốn kém.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — SageMaker containers, Kendra, Step Functions: tự quản lý nhiều thành phần.</li><li><strong>D</strong>: ✅ Đúng — agent + action group + knowledge base + trace, đủ mọi yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Agents - action groups</li><li>Knowledge base - RAG</li><li>Trace events - audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gọi API + tra cứu tài liệu + multi-turn → Bedrock Agent + action group + knowledge base.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>Deploy a fine-tuned Amazon Bedrock Anthropic Claude model for each product category. Create AWS Lambda functions to connect each model to the order management API. Store conversation history in Amazon DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom model that uses continued pre-training on Amazon Bedrock to handle all product documentation. Set up an Amazon API Gateway REST API that uses AWS Lambda functions to connect the model to the order management API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker AI with containers to deploy models. Use Amazon Kendra to search product documents. Use AWS Step Functions to orchestrate calls to the order management API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Bedrock agent with action groups to integrate with the order management API. Associate an Amazon Bedrock knowledge base with the agent to search product documentation by using Retrieval Augmentation Generation (RAG). Enable trace events to capture audit trails.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 26 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722279,
          "date": "Wed 18 Mar 2026 08:26",
          "username": "ArunRav",
          "content": "The option is suited for the least operational over head.Every other options has some customer development/Operational over head.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718848,
          "date": "Wed 04 Mar 2026 20:39",
          "username": "GiorgioGss",
          "content": "multi-turn context + API integration + searching documents  = Amazon Bedrock Agents with Knowledge Bases",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1717807,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Pretty sure it's A. This pattern is very common.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is using Amazon Bedrock to build a generative AI (GenAI) application. The application uses AWS Step Functions to orchestrate a multi-agent workflow to produce detailed product descriptions. The workflow consists of three sequential states: a description generator, a technical specifications validator, and a brand voice consistency checker. Each state produces intermediate reasoning traces and outputs that are passed to the next state. The application uses an Amazon S3 bucket for process storage and to store outputs.<br/>During testing, the company discovers that outputs between Step Functions states frequently exceed the 256 KB quota and cause workflow failures.<br/>A GenAI Developer needs to revise the application architecture to efficiently handle the Step Functions 256 KB quota and maintain workflow observability. The revised architecture must preserve the existing multi-agent reasoning and acting (ReAct) pattern.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Output giữa các state của Step Functions vượt quota 256 KB.</li><li>Cần xử lý hiệu quả, giữ observability, giữ pattern ReAct, ít vận hành nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng S3 URI làm input cho Bedrock integration và dùng ResultPath/ResultSelector để chỉ truyền reference S3 giữa các state; giữ nguyên workflow tuần tự, tận dụng bucket đã có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thêm DynamoDB và Map state không cần thiết (Map dùng cho lặp, không phải bước tuần tự).</li><li><strong>B</strong>: ✅ Đúng — pass-by-reference qua S3, ít thay đổi nhất.</li><li><strong>C</strong>: ❌ Sai — nén/giải nén bằng Lambda phức tạp, không đảm bảo luôn dưới 256 KB.</li><li><strong>D</strong>: ❌ Sai — tách nhiều state machine + EventBridge làm tăng overhead và giảm observability.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>256 KB quota</li><li>S3 reference (pass by reference)</li><li>ResultPath / ResultSelector</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Step Functions payload quá 256 KB → lưu S3, truyền reference.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>Store intermediate outputs in Amazon DynamoDB. Pass only references between states. Create a Map state that retrieves the complete data from DynamoDB when required for each agent's processing step.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Bedrock integration to use the S3 bucket URI in the input parameter for large outputs. Use the ResultPath field and the ResultSelector field to route S3 references between the agent steps while maintaining the sequential validation workflow.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to compress outputs to less than 256 KB before each agent state. Configure each agent task to decompress the outputs before processing and to compress results before passing them to the next state.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a separate Step Functions state machine to handle each agent's processing. Use Amazon EventBridge to coordinate the execution flow between state machines. Use S3 references for the outputs as event data.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 27 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722280,
          "date": "Wed 18 Mar 2026 08:31",
          "username": "ArunRav",
          "content": "A need additional development,C needs development work by lambda,D also need additional work for development.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1720992,
          "date": "Thu 12 Mar 2026 20:22",
          "username": "eesa",
          "content": "Opción B - MEJOR SOLUCIÓN:<br>✅ Integración nativa: Bedrock soporta S3 URIs directamente en parámetros de entrada/salida<br>✅ Mínimo overhead: No requiere Lambda, DynamoDB adicional, ni múltiples state machines<br>✅ Mantiene workflow secuencial: Preserva el patrón ReAct existente<br>✅ Observabilidad: ResultPath y ResultSelector permiten tracking del flujo<br>✅ Manejo elegante de datos grandes: Pasa referencias S3 en lugar de datos completos<br>✅ Ya usa S3: Aprovecha la infraestructura existente",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718851,
          "date": "Wed 04 Mar 2026 20:49",
          "username": "GiorgioGss",
          "content": "LEAST operational overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717820,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I’m leaning heavily toward A on this one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides a service that helps users from around the world discover new restaurants. The service has 50 million monthly active users. The company wants to implement a semantic search solution across a database that contains 20 million restaurants and 200 million reviews. The company currently stores the data in a PostgresQL database.<br/>The solution must support complex natural language queries and return results for at least 95% of queries within 500 ms. The solution must maintain data freshness for restaurant details that update hourly. The solution must also scale cost-effectively during peak usage periods.<br/>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Semantic search cho 20 triệu nhà hàng và 200 triệu review, query ngôn ngữ tự nhiên, 95% trong 500 ms, dữ liệu cập nhật hằng giờ, scale tiết kiệm.</li><li>Ưu tiên: LEAST development effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon OpenSearch Service có k-NN vector search quy mô lớn, độ trễ thấp, scale tốt; dùng embedding từ Bedrock FM cho semantic search và cập nhật index theo giờ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — keyword search, không phải semantic.</li><li><strong>B</strong>: ✅ Đúng — vector embeddings + k-NN trên OpenSearch, đáp ứng scale và latency.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — pgvector trên PostgreSQL khó đạt 500 ms ở 200 triệu vector với 50 triệu user.</li><li><strong>D</strong>: ❌ Sai — Knowledge Base thiên về RAG, cần custom ingestion pipeline, không tối ưu cho tìm kiếm scale này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OpenSearch k-NN</li><li>Bedrock embeddings</li><li>Semantic search - low latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Semantic search quy mô lớn, latency thấp → OpenSearch vector (k-NN) + embeddings.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>Migrate the restaurant data to Amazon OpenSearch Service. Implement keyword-based search rules that use custom analyzers and relevance tuning to find restaurants based on attributes such as cuisine type, feature, and location. Create Amazon API Gateway HTTP API endpoints to transform user queries into structured search parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the restaurant data to Amazon OpenSearch Service. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant descriptions, reviews, and menu items. When users submit natural language queries, convert the queries to embeddings by using the same FM. Perform k-nearest neighbors (k-NN) searches to find semantically similar results.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the restaurant data in PostgresQL and implement a pgvector extension. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant data. Store the vector embeddings directly in PostgreSQL. Create an AWS Lambda function to convert natural language queries to vector representations by using the same FM. Configure the Lambda function to perform similarity searches within the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate restaurant data to an Amazon Bedrock knowledge base by using a custom ingestion pipeline. Configure the knowledge base to automatically generate embeddings from restaurant information. Use the Amazon Bedrock Retrieve API with built-in vector search capabilities to query the knowledge base directly by using natural language input.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 28 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1740716,
          "date": "Fri 27 Mar 2026 13:35",
          "username": "eCosinus",
          "content": "least development effort + meets requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1722289,
          "date": "Wed 18 Mar 2026 08:45",
          "username": "ArunRav",
          "content": "Option B considering the latency and semantic search requirement. A says about keyword search which is not the requirement, C cant handle the load and latency  requirement. D is not the correct fit for the high scale semantic search",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718852,
          "date": "Wed 04 Mar 2026 20:52",
          "username": "GiorgioGss",
          "content": "semantic search = Opensearch and between A and B the Least effort is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717808,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Leaning toward A, but I'd be interested to hear arguments for the others.",
          "upvote_count": "1",
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
      "question_text": "<p>A medical company uses Amazon Bedrock to power a clinical documentation summarization system. The system produces inconsistent summaries when handling complex clinical documents. The system performed well on simple clinical documents.<br/>The company needs a solution that diagnoses inconsistencies, compares prompt performance against established metrics, and maintains historical records of prompt versions.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tóm tắt không ổn định với tài liệu lâm sàng phức tạp.</li><li>Cần chẩn đoán nguyên nhân, so sánh prompt theo metric chuẩn, lưu lịch sử version prompt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Version control cho prompt + bộ test chứa tài liệu phức tạp + metric định lượng + framework test tự động cho phép so sánh version và ghi lại pattern hiệu năng, đúng 3 yêu cầu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — test thủ công và chỉ trên tài liệu đơn giản, không chẩn đoán được ca phức tạp.</li><li><strong>B</strong>: ✅ Đúng — test suite có ca phức tạp, metric định lượng, lịch sử version.</li><li><strong>C</strong>: ❌ Sai — chia traffic production cho bản prompt chưa kiểm chứng, rủi ro với dữ liệu y tế.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Comprehend Medical không đo chất lượng tóm tắt, không có version history.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Prompt version control</li><li>Test suite - complex documents</li><li>Quantifiable evaluation metrics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"So sánh prompt theo metric + lưu lịch sử → version control + automated test suite.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>Create multiple prompt variants by using Prompt management in Amazon Bedrock. Manually test the prompts with simple clinical documents. Deploy the highest performing version by using the Amazon Bedrock console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement version control for prompts in a code repository with a test suite that contains complex clinical documents and quantifiable evaluation metrics. Use an automated testing framework to compare prompt versions and document performance patterns.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy each new prompt version to separate Amazon Bedrock API endpoints. Split production traffic between the endpoints. Configure Amazon CloudWatch to capture response metrics and user feedback for automatic version selection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom prompt evaluation flow in Amazon Bedrock Flows that applies the same clinical document inputs to different prompt variants. Use Amazon Comprehend Medical to analyze and score the factual accuracy of each version.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 29 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722291,
          "date": "Wed 18 Mar 2026 08:49",
          "username": "ArunRav",
          "content": "D seems to be correct -",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1722097,
          "date": "Tue 17 Mar 2026 15:49",
          "username": "AM_aws",
          "content": "version control, metrics like BLEU, ROGUE, automation",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1720995,
          "date": "Thu 12 Mar 2026 20:24",
          "username": "eesa",
          "content": "Opción B - MEJOR SOLUCIÓN:<br>✅ Diagnóstico de inconsistencias: Test suite con documentos complejos identifica problemas específicos<br>✅ Métricas establecidas: Framework de evaluación con métricas cuantificables<br>✅ Historial completo: Version control mantiene registro de todas las versiones de prompts<br>✅ Comparación sistemática: Automated testing compara rendimiento entre versiones<br>✅ Reproducibilidad: Mismos tests aplicados consistentemente<br>✅ CI/CD ready: Se integra con pipelines de desarrollo<br>✅ Documentación de patrones: Registra qué funciona y qué no",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719816,
          "date": "Sun 08 Mar 2026 05:49",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718853,
          "date": "Wed 04 Mar 2026 20:57",
          "username": "GiorgioGss",
          "content": "Code repository version control maintains full audit trail of every prompt iteration",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717822,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I'm thinking A. Can anyone confirm this?",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses Amazon Bedrock to generate technical content for customers. The company has recently experienced a surge in hallucination outputs when the company's model generates summaries of long technical documents. The model outputs include inaccurate or fabricated details. The company's current solution uses a large foundation model (FM) with a basic one-shot prompt that includes the full document in a single input.<br/>The company needs a solution that will reduce hallucinations and meet factual accuracy goals. The solution must process more than 1,000 documents each hour and deliver summaries within 3 seconds for each document.<br/>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm hallucination khi tóm tắt tài liệu dài, tăng độ chính xác.</li><li>Throughput trên 1,000 doc mỗi giờ, 3 giây mỗi doc.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>RAG với Knowledge Base (semantic chunking, tuned embeddings) neo câu trả lời vào nội dung nguồn; zero-shot CoT với bước kiểm tra fact giúp model tự xác minh trước khi tóm tắt, không tăng nhiều latency.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CoT + fact verification giảm bịa chi tiết.</li><li><strong>B</strong>: ✅ Đúng — RAG neo vào nguồn, giảm hallucination.</li><li><strong>C</strong>: ❌ Sai — Guardrails không phát hiện hallucination bằng pattern.</li><li><strong>D</strong>: ❌ Sai — tăng temperature làm hallucination tệ hơn.</li><li><strong>E</strong>: ❌ Sai — một lần cho cả tài liệu dài chính là nguyên nhân hiện tại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RAG - grounding</li><li>Semantic chunking</li><li>Chain-of-thought (CoT)</li><li>Temperature thấp giảm hallucination</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giảm hallucination → grounding (RAG) + prompt xác minh; không tăng temperature.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>Implement zero-shot chain-of-thought (CoT) instructions that require step-by-step reasoning with explicit fact verification before the model generates each summary.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base. Apply semantic chunking and tuned embeddings to ground summaries in source content.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to block any generated output that matches patterns that are associated with hallucinated content.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the temperature parameter in Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Prompt the Amazon Bedrock model to summarize each full document in one pass.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 30 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1749509,
          "date": "Tue 21 Apr 2026 15:21",
          "username": "ssnei",
          "content": "Hallucinations in long-document summarization are best solved by:<br>RAG (grounding) +<br>Structured reasoning (verification)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1722294,
          "date": "Wed 18 Mar 2026 08:53",
          "username": "ArunRav",
          "content": "A and B seems to be the correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1720996,
          "date": "Thu 12 Mar 2026 20:30",
          "username": "eesa",
          "content": "✅ Reduce alucinaciones: Razonamiento paso a paso mejora precisión factual<br>✅ Verificación explícita: El modelo verifica hechos antes de generar<br>✅ Cumple latencia: Zero-shot CoT añade tokens pero mantiene &lt;3s<br>✅ Escalable: Procesa 1,000+ docs/hora sin infraestructura adicional<br>✅ Grounding en fuente: Ancla respuestas en contenido real del documento<br>✅ Semantic chunking: Maneja documentos largos eficientemente<br>✅ Reduce alucinaciones: RAG proporciona contexto verificable<br>✅ Cumple latencia: Knowledge Bases optimizado para respuestas rápidas",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1720150,
          "date": "Mon 09 Mar 2026 15:45",
          "username": "Tanle",
          "content": "Agree choose A, B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1719817,
          "date": "Sun 08 Mar 2026 05:51",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1719086,
          "date": "Thu 05 Mar 2026 05:55",
          "username": "anttan",
          "content": "The correct answers are A and B.<br>A is correct because zero-shot chain-of-thought (CoT) instructions force the model to reason step-by-step and verify facts before generating the final summary. This reduces hallucinations by guiding the model to check each piece of information against the input content.<br>B is correct because Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base allows the model to generate summaries grounded in source content. Semantic chunking and tuned embeddings ensure the model references accurate portions of the document, improving factual accuracy while enabling processing of long documents efficiently.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:AB"
        },
        {
          "id": 1718854,
          "date": "Wed 04 Mar 2026 21:04",
          "username": "GiorgioGss",
          "content": "A - most probably will add more time and exceed 3 seconds<br>D - increasing temperature will increase hallucination<br>E - this is the current issue they try to solve",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1717809,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "The answer is C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a recommendation system. The system's applications run on Amazon EC2 instances. The applications make API calls to Amazon Bedrock foundation models (FMs) to analyze customer behavior and generate personalized product recommendations.<br/>The system is experiencing intermittent issues. Some recommendations do not match customer preferences. The company needs an observability solution to monitor operational metrics and detect patterns of operational performance degradation compared to established baselines. The solution must also generate alerts with correlation data within 10 minutes when FM behavior deviates from expected patterns.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Observability cho app EC2 gọi Bedrock: phát hiện suy giảm so với baseline và cảnh báo kèm correlation trong 10 phút khi hành vi FM lệch.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudWatch anomaly detection tự học baseline trên custom metrics (chất lượng recommendation, token, latency qua EMF), Application Insights tương quan vấn đề, Logs Insights phân tích log pattern.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Container Insights không phù hợp EC2, alarm theo ngưỡng cố định, không có baseline.</li><li><strong>B</strong>: ❌ Sai — X-Ray, CloudTrail, QuickSight không phát hiện anomaly theo baseline.</li><li><strong>C</strong>: ✅ Đúng — anomaly detection + Application Insights + EMF + Logs Insights.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng pipeline Kinesis + OpenSearch, nhiều vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch anomaly detection</li><li>Application Insights</li><li>Embedded metric format (EMF)</li><li>Baseline</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Phát hiện lệch so với baseline → CloudWatch anomaly detection trên custom metrics.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>Configure Amazon CloudWatch Container Insights for the application infrastructure. Set up CloudWatch alarms for latency thresholds. Add custom metrics for token counts by using the CloudWatch embedded metric format. Create CloudWatch dashboards to visualize the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement AWS X-Ray to trace requests through the application components. Enable CloudWatch Logs Insights for error pattern detection. Set up AWS CloudTrail to monitor all API calls to Amazon Bedrock. Create custom dashboards in Amazon QuickSight.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon CloudWatch Application Insights for the application resources. Create custom metrics for recommendation quality, token usage, and response latency by using the CloudWatch embedded metric format with dimensions for request types and user segments. Configure CloudWatch anomaly detection on the model metrics. Establish log pattern analysis by using CloudWatch Logs Insights.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Service with the Observability plugin. Ingest model metrics and logs by using Amazon Kinesis. Create custom Piped Processing Language (PPL) queries to analyze model behavior patterns. Establish operational dashboards to visualize anomalies in real time.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 31 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722297,
          "date": "Wed 18 Mar 2026 08:58",
          "username": "ArunRav",
          "content": "CloudWatch anomaly detection uses machine learning to detect performance deviations<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718855,
          "date": "Wed 04 Mar 2026 21:08",
          "username": "GiorgioGss",
          "content": "A - container insights is wrong for EC2<br>B - xray is for different purpose<br>D - opensearch is the most obvious wrong answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717815,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Could be wrong, but I’m backing B. It just clicks.",
          "upvote_count": "1",
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
      "question_text": "<p>An enterprise application uses an Amazon Bedrock foundation model (FM) to process and analyze 50 to 200 pages of technical documents. Users are experiencing inconsistent responses and receiving truncated outputs when processing documents that exceed the FM's context window limits.<br/>Which solution will resolve this problem?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tài liệu 50-200 trang vượt context window gây output cắt cụt và không nhất quán.</li><li>Cần giải pháp chọn đoạn liên quan thay vì nhồi toàn bộ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Semantic chunking giữ nguyên ngữ nghĩa, và RetrieveAndGenerate chọn động các chunk liên quan nhất theo embedding similarity, nên input luôn nằm trong context window.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — nối chunk cho tới đầy 200,000 token vẫn gây vượt giới hạn và cắt cụt.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — hierarchical chunking có thể dùng, nhưng parent chunk lớn 8,000 token và bài hỏi về semantic retrieval; không tối ưu bằng C.</li><li><strong>C</strong>: ✅ Đúng — semantic chunking + chọn chunk liên quan theo similarity.</li><li><strong>D</strong>: ❌ Sai — xử lý từng đoạn độc lập mất ngữ cảnh, kết quả không nhất quán.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Semantic chunking</li><li>RetrieveAndGenerate</li><li>Context window</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Tài liệu vượt context window → chunk + retrieve đoạn liên quan (RetrieveAndGenerate).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>Configure fixed-size chunking at 4,000 tokens for each chunk with 20% overlap. Use application-level logic to link multiple chunks sequentially until the FM's maximum context window of 200,000 tokens is reached before making inference calls.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use hierarchical chunking with parent chunks of 8,000 tokens and child chunks of 2,000 tokens. Use Amazon Bedrock Knowledge Bases built-in retrieval to automatically select relevant parent chunks based on query context. Configure overlap tokens to maintain semantic continuity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use semantic chunking with a breakpoint percentile threshold of 95% and a buffer size of 3 sentences. Use the Amazon Bedrock RetrieveAndGenerate API call to dynamically select the most relevant chunks based on embedding similarity scores.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a pre-processing AWS Lambda function that analyzes document token count by using the FM's tokenizer. Configure the lambda function to split documents into equal segments that fit within 80% of the context window. Configure the Lambda function to process each segment independently before aggregating the results.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 32 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758549,
          "date": "Tue 19 May 2026 21:27",
          "username": "AWSCer1937",
          "content": "Option B provides:<br>Managed chunking<br>Managed retrieval<br>Parent-child contextual expansion<br>Minimal operational overhead<br>This is the most robust and AWS-native approach.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1741528,
          "date": "Sun 29 Mar 2026 21:37",
          "username": "a9fb7b2",
          "content": "Amazon Bedrock Knowledge Bases supports semantic chunking, which splits text based on meaning rather than fixed size. That helps improve retrieval quality when users ask about specific parts of technical documents. Then RetrieveAndGenerate retrieves only the most relevant chunks for the query instead of trying to fit large sections into the model context window, which helps avoid truncation and inconsistent",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1740597,
          "date": "Thu 26 Mar 2026 20:59",
          "username": "Kraftzman",
          "content": "Semantic Chunking uses an embedding model to \"look\" at the meaning of sentences. It only creates a \"breakpoint\" when the semantic meaning changes significantly (controlled by the percentile threshold). The buffer size ensures that surrounding sentences are kept together, preserving the technical context necessary for an accurate summary.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1722299,
          "date": "Wed 18 Mar 2026 09:02",
          "username": "ArunRav",
          "content": "Child chunks ensure fine‑grained relevance where as Parent chunks  ensure the model receives sufficient context without exceeding limits.<br>https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html<br><div>Replies:</div><ul><li>Changing to C.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1733870,
          "date": "Wed 25 Mar 2026 06:43",
          "username": "ArunRav",
          "content": "Changing to C.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1718860,
          "date": "Wed 04 Mar 2026 21:16",
          "username": "GiorgioGss",
          "content": "C should be",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717824,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I'm thinking D. Can anyone confirm this?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a generative AI (GenAI) application that analyzes customer service calls in real-time and generates suggested responses for human customer service agents. The application must process 500,000 concurrent calls during peak hours with less than 200 ms end-to-end latency for each suggestion. The company uses existing architecture to transcribe customer call audio streams. The application must not exceed a pre-defined monthly compute budget and must maintain auto scaling capabilities.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gợi ý phản hồi real-time cho 500,000 call đồng thời, dưới 200 ms, trong ngân sách cố định, có auto scaling.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Model nhẹ tối ưu low-latency trên Amazon Bedrock cho phản hồi nhanh; provisioned throughput cho hiệu năng ổn định và chi phí dự đoán được; automatic scaling policies đáp ứng peak.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — reasoning model lớn và batch processing, không đạt 200 ms.</li><li><strong>B</strong>: ✅ Đúng — low-latency model + provisioned throughput + auto scaling.</li><li><strong>C</strong>: ❌ Sai — LLM lớn trên GPU dedicated vừa chậm vừa vượt ngân sách.</li><li><strong>D</strong>: ❌ Sai — serverless endpoint tối ưu batch, có cold start, không hợp real-time.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Low-latency model</li><li>Provisioned throughput</li><li>Auto scaling</li><li>Fixed budget</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Real-time dưới 200 ms + ngân sách cố định → model nhỏ low-latency + provisioned throughput.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>Deploy a large, complex reasoning model on Amazon Bedrock. Purchase provisioned throughput and optimize for batch processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a low-latency, real-time optimized model on Amazon Bedrock. Purchase provisioned throughput and set up automatic scaling policies.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a large language model (LLM) on an Amazon SageMaker AI real-time endpoint that uses dedicated GPU instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a mid-sized language model on an Amazon SageMaker AI serverless endpoint that is optimized for batch processing.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 33 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752667,
          "date": "Fri 01 May 2026 14:01",
          "username": "Gagg",
          "content": "Bad question.<br>B) Bedrock is serverless and does not have  automatic scaling policies<br>The correct answer should be A or C, but both have issues:<br>- Option A: Complex reasoning models are not optimized for &lt;200ms latency<br>- Option C: SageMaker real-time endpoints can provide auto-scaling but may exceed budget<br>Most likely correct answer: C - SageMaker real-time endpoints with auto-scaling provide the best result.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1722305,
          "date": "Wed 18 Mar 2026 09:07",
          "username": "ArunRav",
          "content": "low-latency, real-time optimized model on Amazon Bedrock along with provisioned throughput will be the right fit as it meets all the requirement.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718863,
          "date": "Wed 04 Mar 2026 21:21",
          "username": "GiorgioGss",
          "content": "B is built for this constraint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717814,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "Looks like B fits best.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is building an internal platform to develop generative AI applications by using Amazon Bedrock foundation models (FMs). Developers need to select models based on evaluations that are aligned to ecommerce use cases. The platform must display accuracy metrics for text generation and summarization in dashboards. The company has custom ecommerce datasets to use as standardized evaluation inputs.<br/>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nền tảng đánh giá FM theo dataset ecommerce riêng, hiển thị accuracy cho text generation và summarization trên dashboard.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dataset đưa vào S3 kèm IAM + CORS cho Bedrock model evaluation job truy cập; Lambda tạo evaluation job Bedrock native (RWK, BERT Score) theo lịch rồi đẩy log/dashboard lên CloudWatch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 + IAM + CORS là cách cấp quyền cho Bedrock evaluation job đọc dataset.</li><li><strong>B</strong>: ❌ Sai — VPC endpoint không phải cấu hình cần thiết cho evaluation job.</li><li><strong>C</strong>: ✅ Đúng — dùng Bedrock model evaluation managed với metric phù hợp.</li><li><strong>D</strong>: ❌ Sai — SageMaker Clarify và word error rate (dùng cho speech) không phù hợp, toxicity không đo accuracy.</li><li><strong>E</strong>: ❌ Sai — notebook tự gọi InvokeModel và tự viết đánh giá, nhiều vận hành; toxicity không phải accuracy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock model evaluation jobs</li><li>RWK, BERT Score</li><li>S3 + CORS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đánh giá FM với dataset riêng, ít vận hành → Bedrock model evaluation job (managed).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and cross-origin resource sharing (CORS) permissions to give the evaluation jobs access to the datasets.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and a VPC endpoint configuration to give the evaluation jobs access to the datasets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to create model evaluation jobs on a schedule in the Amazon Bedrock console. Provide the URI of the S3 bucket that contains the datasets as an input. Configure the evaluation jobs to measure the real world knowledge (RWK) score for text generation and BERT Score for summarization. Configure a second Lambda function to check the status of the jobs and publish custom logs to Amazon CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker Clarify on a schedule to create model evaluation jobs. Use open source frameworks to create and run standardized evaluations. Publish results to Amazon CloudWatch namespaces. Use the word error rate score for text generation and toxicity for summarization as metrics for accuracy. Configure an AWS Lambda function to check the status of the jobs and publish custom logs to CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run an Amazon SageMaker AI notebook job on a schedule by using the fmevals or ragas framework to run evaluations that use the datasets in the S3 bucket. Write Python code in the notebook that makes direct InvokeModel API calls to the FMs and processes their responses for evaluation. Publish job status and results to Amazon CloudWatch Logs to measure the real world knowledge (RWK) score for text generation and toxicity for summarization as metrics for accuracy. Create a custom CloudWatch Logs Insights dashboard.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 34 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1740601,
          "date": "Thu 26 Mar 2026 21:10",
          "username": "Kraftzman",
          "content": "answer is A &amp; C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1722306,
          "date": "Wed 18 Mar 2026 09:10",
          "username": "ArunRav",
          "content": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security-cors.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1721061,
          "date": "Fri 13 Mar 2026 01:31",
          "username": "taka5094",
          "content": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security-cors.html<br>&gt; All console-based model evaluation jobs require Cross Origin Resource Sharing (CORS) permissions to be enabled on any Amazon S3 buckets specified in the model evaluation job.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1720999,
          "date": "Thu 12 Mar 2026 20:35",
          "username": "eesa",
          "content": "Opción A (S3 + IAM + CORS) - CORRECTA:<br>✅ Mínimo overhead: S3 es el almacenamiento estándar para datasets<br>✅ IAM permissions: Control de acceso nativo de AWS<br>✅ CORS: Necesario para que Bedrock console acceda a los datasets<br>✅ Simple y directo: No requiere configuración compleja<br>✅ Compatible con Bedrock evaluations: Formato esperado por el servicio<br>Opción C (Lambda + Bedrock evaluations nativas) - CORRECTA:<br>✅ Usa capacidades nativas de Bedrock: Model evaluation jobs integrados<br>✅ Métricas apropiadas:<br>RWK (Real World Knowledge) para text generation ✅<br>BERT Score para summarization ✅<br>✅ Mínimo overhead: Usa servicios managed (Lambda + Bedrock)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1719818,
          "date": "Sun 08 Mar 2026 05:54",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1718871,
          "date": "Wed 04 Mar 2026 21:30",
          "username": "GiorgioGss",
          "content": "B because \"internal platform\"<br>C because native metrics",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1717827,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I’d roll with C — seems like the most solid choice.",
          "upvote_count": "1",
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
      "question_text": "<p>An elevator service company has developed an AI assistant application by using Amazon Bedrock. The application generates elevator maintenance recommendations to support the company's elevator technicians. The company uses Amazon Kinesis Data Streams to collect the elevator sensor data.<br/>New regulatory rules require that a human technician must review all AI-generated recommendations. The company needs to establish human oversight workflows to review and approve AI recommendations. The company must store all human technician review decisions for audit purposes.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Human-in-the-loop: kỹ thuật viên phải duyệt mọi khuyến nghị AI, lưu quyết định để audit.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Step Functions với waitForTaskToken (callback pattern) tạm dừng workflow đến khi người duyệt, Lambda gọi SendTaskSuccess với quyết định, kết quả lưu Amazon DynamoDB để audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng workflow với Lambda và SQS, nhiều code, khó theo dõi trạng thái.</li><li><strong>B</strong>: ✅ Đúng — pattern chuẩn cho human approval.</li><li><strong>C</strong>: ❌ Sai — AWS Glue workflow là ETL, không có SendTaskSuccess hay human approval.</li><li><strong>D</strong>: ❌ Sai — Glue jobs và ElastiCache (cache, không bền vững) không phù hợp audit.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>waitForTaskToken</li><li>SendTaskSuccess</li><li>Human approval</li><li>DynamoDB audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần người duyệt trong workflow → Step Functions waitForTaskToken.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>Create a custom approval workflow by using AWS Lambda functions and Amazon SQS queues for human review of AI recommendations. Store all review decisions in Amazon DynamoDB for audit purposes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions workflow that has a human approval step that uses the waitForTaskToken API to pause execution. After a human technician completes a review, use an AWS Lambda function to call the SendTaskSuccess API that has the approval decision. Store all review decisions in Amazon DynamoDB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Glue workflow that has a human approval step. After the human technician review, integrate the application with an AWS Lambda function that calls the SendTaskSuccess API. Store all human technician review decisions in Amazon DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EventBridge rules with custom event patterns to route AI recommendations to human technicians for review. Create AWS Glue jobs to process human technician approval queues. Use Amazon ElastiCache to cache all human technician review decisions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 35 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1722308,
          "date": "Wed 18 Mar 2026 09:12",
          "username": "ArunRav",
          "content": "Option B https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1721000,
          "date": "Thu 12 Mar 2026 20:36",
          "username": "eesa",
          "content": "✅ Human-in-the-loop nativo: Step Functions diseñado específicamente para workflows con aprobación humana<br>✅ waitForTaskToken: Pausa la ejecución hasta que el humano complete la revisión<br>✅ SendTaskSuccess API: Reanuda el workflow con la decisión de aprobación<br>✅ Auditoría completa: DynamoDB almacena todas las decisiones para compliance<br>✅ Trazabilidad: Step Functions mantiene historial completo de ejecuciones<br>✅ Manejo de timeouts: Puede configurar límites de tiempo para revisiones<br>✅ Escalable y managed: Sin infraestructura que mantener",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718874,
          "date": "Wed 04 Mar 2026 21:35",
          "username": "GiorgioGss",
          "content": "B - stepfunction is the key",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717804,
          "date": "Sat 28 Feb 2026 14:49",
          "username": "67bdb19",
          "content": "Not super confident, but I’ll go with A.",
          "upvote_count": "1",
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
      "question_text": "<p>A bank is building a generative AI (GenAI) application that uses Amazon Bedrock to assess loan applications by using scanned financial documents. The application must extract structured data from the documents. The application must redact personally identifiable information (PII) before inference. The application must use foundation models (FMs) to generate approvals. The application must route low-confidence document extraction results to human reviewers who are within the same AWS Region as the loan applicant.<br/>The company must ensure that the application complies with strict Regional data residency and auditability requirements. The application must be able to scale to handle 25,000 applications each day and provide 99.9% availability.<br/>Which combination of solutions will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đánh giá hồ sơ vay từ tài liệu scan: extract dữ liệu, redact PII trước inference, FM đưa quyết định, low-confidence chuyển human reviewer cùng Region.</li><li>Yêu cầu data residency, auditability, 25,000 đơn mỗi ngày, availability 99.9%.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Textract + Amazon A2I cùng Region xử lý extract và human review; Lambda redact PII, Guardrails và IAM Region-specific; Step Functions điều phối review và prompt cho Bedrock.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Textract trích xuất, A2I chuyển low-confidence cho người duyệt cùng Region.</li><li><strong>B</strong>: ✅ Đúng — redact PII, Guardrails và IAM giữ residency.</li><li><strong>C</strong>: ❌ Sai — Kendra và OpenSearch không phải công cụ extract field từ scan.</li><li><strong>D</strong>: ❌ Sai — IAM policy không \"lưu\" dữ liệu theo Region; tagging chỉ phục vụ audit, không đủ.</li><li><strong>E</strong>: ✅ Đúng — Glue Data Quality validate, Step Functions orchestrate, chuẩn bị prompt cho Bedrock.</li><li><strong>F</strong>: ❌ Sai — Clarify bias report không nằm trong yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Textract + A2I</li><li>PII redaction</li><li>Region-specific IAM</li><li>Step Functions orchestration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Scan document + low-confidence cho người duyệt → Textract + A2I.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>Deploy Amazon Textract and Amazon Augmented AI (Amazon A2I) within the same Region to extract relevant data from the scanned documents. Route low-confidence pages to human reviewers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to detect and redact PII from submitted documents before inference. Apply Amazon Bedrock guardrails to prevent inappropriate or unauthorized content in model outputs. Configure Region-specific IAM roles to enforce data residency requirements and to control access to the extracted data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kendra and Amazon OpenSearch Service to extract field level values semantically from the uploaded documents before inference.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store uploaded documents in Amazon S3 and apply object metadata. Configure IAM policies to store original documents within the same Region as each applicant. Enable object tagging for future audits.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue Data Quality to validate the structured document data. Use AWS Step Functions to orchestrate a review workflow that includes a prompt engineering step that transforms validated data into optimized prompts before invoking Amazon Bedrock to assess loan applications.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker Clarify to generate fairness and bias reports based on model scoring decisions that Amazon Bedrock makes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 36 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1751894,
          "date": "Wed 29 Apr 2026 16:44",
          "username": "AndreyShne24",
          "content": "Although D is a good answer as well to be ADE but only B is handling the PII requirement, so my vote goes to ABE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:ABE"
        },
        {
          "id": 1750373,
          "date": "Thu 23 Apr 2026 22:50",
          "username": "jakie22332",
          "content": "this is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:ABE"
        },
        {
          "id": 1749002,
          "date": "Sat 18 Apr 2026 23:00",
          "username": "SankarKumar",
          "content": "Scalable orchestration<br>High availability (99.9%)<br>Clean input → better FM output",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADE"
        },
        {
          "id": 1744832,
          "date": "Thu 09 Apr 2026 01:53",
          "username": "de1612d",
          "content": "A: Use Amazon Textract with Amazon Augmented AI to extract structured data from scanned documents and route low-confidence results to human reviewers.<br>D: Store documents in Amazon S3 with region-specific controls and object tagging to ensure data residency compliance and auditability.<br>E: Use AWS Step Functions and AWS Glue Data Quality to orchestrate the workflow, validate extracted data, and invoke Amazon Bedrock for loan",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ADE"
        },
        {
          "id": 1718879,
          "date": "Wed 04 Mar 2026 21:40",
          "username": "GiorgioGss",
          "content": "C - Kendra/OpenSearch for semantic search, not structured field extraction<br>E - Glue Data Quality validates data schemas, not loan decision workflows<br>F - SageMaker Clarify for ML bias (not Bedrock FM outputs)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:ABD"
        },
        {
          "id": 1717816,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "This is a tough one. My best educated guess is B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company is using Amazon Q Business to build an AI assistant that allows employees to access company information and personal information by using natural language prompts. The company stores this information in an Amazon S3 bucket.<br/>Each department in the company has a dedicated prefix in the S3 bucket. Each object name includes the S3 prefix of the department that it belongs to. Each department can belong to only a single group in AWS IAM Identity Center. Each employee belongs to a single department.<br/>The company configures Amazon Q Business to access data stored in an S3 bucket as a data source. The company needs to ensure that the AI assistant respects access controls based on the user's IAM Identity Center group membership.<br/>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Amazon Q Business với S3 data source phải tôn trọng quyền truy cập theo nhóm IAM Identity Center.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một file acl.json duy nhất ở top-level bucket ánh xạ mỗi prefix phòng ban với group IAM Identity Center, khai báo vị trí trong mục Access Control của data source; không cần file riêng cho từng thư mục.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — nhiều acl.json cho từng thư mục, nhiều file phải bảo trì.</li><li><strong>B</strong>: ✅ Đúng — một file ACL duy nhất, ánh xạ prefix với group.</li><li><strong>C</strong>: ❌ Sai — permission set của IAM Identity Center không điều khiển ACL của Amazon Q Business.</li><li><strong>D</strong>: ❌ Sai — metadata.json dùng cho metadata của tài liệu, không phải cấu hình ACL ở mức data source.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>acl.json</li><li>Access Control (data source settings)</li><li>IAM Identity Center group</li><li>Amazon Q Business</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Q Business S3 theo group quyền → một acl.json top-level.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>Create a JSON file named acl.json in each department folder. In each file, create access control entries that specify the IAM Identity Center group that should have access to that department's data. Indicate the location of the JSON file in the Access Control section of the data source settings.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a single JSON file named acl.json at the top level of the S3 bucket. Add access control entries that map each department's S3 prefix to its corresponding IAM Identity Center group. Indicate the location of the JSON file in the Access Control section of the data source settings.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>For each IAM Identity Center group, create a separate permissions set that denies access to all prefixes in the S3 bucket. Add a StringNotEquals condition key to the permissions set for each group that specifies the department each group is associated with. Attach the permissions sets to the Identity Center groups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a metadata file named metadata.json at the top level of the S3 bucket. Add an AccessControlList object to the file that specifies the S3 path of each department's prefix. Specify the IAM Identity Center group that should have access to each department's prefix. Reference the file location in the data source metadata settings.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 37 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1721001,
          "date": "Thu 12 Mar 2026 20:52",
          "username": "eesa",
          "content": "✅ Mínimo overhead operacional: Un solo archivo ACL centralizado<br>✅ Fácil mantenimiento: Todas las reglas de acceso en un lugar<br>✅ Integración nativa: Amazon Q Business soporta ACL files en data source settings<br>✅ Mapeo directo: Prefijos S3 → IAM Identity Center groups<br>✅ Escalable: Agregar nuevos departamentos solo requiere editar un archivo<br>✅ Gestión centralizada: Administradores pueden ver/modificar todos los permisos fácilmente",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718880,
          "date": "Wed 04 Mar 2026 21:43",
          "username": "GiorgioGss",
          "content": "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/s3-user-management.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717817,
          "date": "Sat 28 Feb 2026 14:50",
          "username": "67bdb19",
          "content": "This is a core concept for this certification. The answer has to be B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company is using Amazon Bedrock to build a system to help practitioners make clinical decisions. The system must provide treatment recommendations to physicians based only on approved medical documentation and must cite specific sources. The system must not hallucinate or produce factually incorrect information.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hệ thống hỗ trợ lâm sàng: chỉ dùng tài liệu y khoa đã duyệt, phải trích dẫn nguồn, không hallucinate.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bedrock Knowledge Base kết nối tài liệu đã duyệt, RetrieveAndGenerate trả về câu trả lời kèm citations sẵn có, nên không cần viết logic bổ sung.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Kendra và post-processing tự viết, tốn công.</li><li><strong>B</strong>: ✅ Đúng — managed RAG, citation tích hợp.</li><li><strong>C</strong>: ❌ Sai — Comprehend Medical trích entity, không grounding hay trích dẫn nguồn.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Retrieve + InvokeModel + tự viết verification, nhiều code.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge base</li><li>RetrieveAndGenerate</li><li>Citations</li><li>Grounding</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chỉ dùng tài liệu đã duyệt + cite nguồn → Knowledge Base + RetrieveAndGenerate.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>Integrate Amazon Bedrock with Amazon Kendra to retrieve approved documents. Implement custom post-processing to compare generated responses against source documents and to include citations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon Bedrock knowledge base and connect it to approved clinical source documents. Use the Amazon Bedrock RetrieveAndGenerate API to return citations from the knowledge base.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock and Amazon Comprehend Medical to extract medical entities. Implement verification logic against a medical terminology database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Bedrock knowledge base with Retrieve API calls and InvokeModel API calls to retrieve approved clinical source documents. Implement verification logic to compare against retrieved sources and to cite sources.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 38 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758349,
          "date": "Mon 18 May 2026 04:32",
          "username": "Chibuzo1",
          "content": "Why B is correct<br>The RetrieveAndGenerate API is a fully managed, single API call that handles the entire RAG pipeline automatically:<br>Retrieves relevant chunks from the knowledge base<br>Grounds the response in those retrieved documents only<br>Returns citations natively — no custom code needed<br>Reduces hallucination by anchoring answers to approved source documents",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718883,
          "date": "Wed 04 Mar 2026 21:53",
          "username": "GiorgioGss",
          "content": "The most 'safe' from hallucination is B.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717828,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "My best guess is C right now, but I need to study this area more.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is developing a real-time generative AI (GenAI) assistant to support human call center agents. The GenAI assistant must transcribe live customer speech, analyze context, and provide incremental suggestions to call center agents while a customer is still speaking. To preserve responsiveness, the GenAI assistant must maintain end-to-end latency under 1 second from speech to initial response display. The architecture must use only managed AWS services and must support bidirectional streaming to ensure that call center agents receive updates in real time.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trợ lý real-time cho call center: transcribe live, gợi ý tăng dần khi khách còn nói, latency dưới 1 giây, chỉ dùng managed service, streaming hai chiều.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Transcribe streaming với partial results cho text ngay khi đang nói, InvokeModelWithResponseStream trả token dần, API Gateway WebSocket đẩy kết quả real-time đến agent.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thêm Comprehend, DynamoDB và InvokeModel không streaming, tăng latency.</li><li><strong>B</strong>: ✅ Đúng — partial results, response streaming, WebSocket.</li><li><strong>C</strong>: ❌ Sai — batch transcription không real-time; Lex không phải kênh phù hợp.</li><li><strong>D</strong>: ❌ Sai — Titan Embeddings không sinh gợi ý; SNS không streaming hai chiều.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transcribe partial results</li><li>InvokeModelWithResponseStream</li><li>API Gateway WebSocket</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Real-time streaming dưới 1 giây → Transcribe streaming + response streaming + WebSocket.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>Use the Amazon Transcribe streaming API to transcribe calls. Pass the text to Amazon Comprehend to perform sentiment analysis. Feed the results to Anthropic Claude on Amazon Bedrock by using the InvokeModel API. Store results in Amazon DynamoDB. Use a WebSocket API to display the results.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Transcribe streaming with partial results enabled to deliver fragments of transcribed text before customers finish speaking. Forward text fragments to Amazon Bedrock by using the InvokeModelWithResponseStream API. Stream responses to call center agents through an Amazon API Gateway WebSocket API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Transcribe batch processing to convert calls to text. Pass complete transcripts to Anthropic Claude on Amazon Bedrock by using the ConverseStream API. Return responses through an Amazon Lex chatbot interface that call center agents can access from their work computers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Transcribe streaming API with an AWS Lambda function to transcribe each audio segment. Configure the Lambda function to call the Amazon Titan Embeddings model on Amazon Bedrock by using the InvokeModel API. Configure the Lambda function to publish results to an Amazon SNS topic. Subscribe the call center agents to the SNS topic.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 39 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758350,
          "date": "Mon 18 May 2026 04:35",
          "username": "Chibuzo1",
          "content": "Show more<br>11:34 PM<br>Answer: B<br>Amazon Transcribe Streaming (partial results) + InvokeModelWithResponseStream + API Gateway WebSocket is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1721003,
          "date": "Thu 12 Mar 2026 20:58",
          "username": "eesa",
          "content": "✅ Latencia ultra-baja (&lt;1s): Streaming end-to-end sin esperar a que termine el habla<br>✅ Partial results: Transcribe entrega fragmentos mientras el cliente habla<br>✅ Bidirectional streaming: WebSocket API permite comunicación bidireccional en tiempo real<br>✅ InvokeModelWithResponseStream: Bedrock streaming para respuestas incrementales<br>✅ Real-time updates: Agentes reciben sugerencias mientras el cliente habla<br>✅ Solo servicios managed: Transcribe + Bedrock + API Gateway<br>✅ Arquitectura optimizada: Cada componente diseñado para streaming",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718885,
          "date": "Wed 04 Mar 2026 21:56",
          "username": "GiorgioGss",
          "content": "B - \"provide incremental suggestions to call center agents while a customer is still speaking\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is launching a platform that allows thousands of users every hour to upload images and text content. The platform uses Amazon Bedrock to process the uploaded content to generate creative compositions.<br/>The company needs a solution to ensure that the platform does not process or produce inappropriate content. The platform must not expose personally identifiable information (PII) in the compositions. The solution must integrate with the company's existing Amazon S3 storage workflow.<br/>Which solution will meet these requirements with the LEAST infrastructure management overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nền tảng nhận ảnh và text từ người dùng: chặn nội dung không phù hợp, không lộ PII, tích hợp luồng S3.</li><li>Ưu tiên: LEAST infrastructure management overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Step Functions điều phối các dịch vụ managed: Bedrock Guardrails lọc nội dung, Comprehend PII detection xử lý PII, Rekognition image moderation kiểm duyệt ảnh; không cần quản lý hạ tầng hay train model.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — \"Enhanced Monitoring\" và CloudWatch alarm không lọc traffic hay nội dung.</li><li><strong>B</strong>: ❌ Sai — API Gateway validation không kiểm duyệt nội dung; xây model riêng trên SageMaker AI tốn vận hành.</li><li><strong>C</strong>: ❌ Sai — Cognito pre-authentication không phù hợp kiểm duyệt upload; Textract để OCR, không phải moderation.</li><li><strong>D</strong>: ✅ Đúng — toàn bộ dịch vụ managed, đáp ứng đủ yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails</li><li>Comprehend PII detection</li><li>Rekognition image moderation</li><li>Step Functions</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Moderation text + ảnh + PII, ít vận hành → Guardrails + Comprehend PII + Rekognition.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>Enable the Enhanced Monitoring tool. Use an Amazon CloudWatch alarm to filter traffic to the platform. Use Amazon Comprehend PII detection to pre-process the data. Create a CloudWatch alarm to monitor for Amazon Comprehend PII detection events. Create an AWS Step Functions workflow that includes an Amazon Rekognition image moderation step.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon API Gateway HTTP API with request validation templates to screen content before storing the uploaded content in Amazon S3. Use Amazon SageMaker AI to build custom content moderation models that process content before sending the processed content to Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Cognito user pool that uses pre-authentication AWS Lambda functions to run content moderation checks. Use Amazon Textract to filter text content and Amazon Rekognition to filter image content before allowing users to upload content to the platform.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions workflow that uses built-in Amazon Bedrock guardrails to filter content. Use Amazon Comprehend PII detection to pre-process the content. Use Amazon Rekognition image moderation.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 40 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758352,
          "date": "Mon 18 May 2026 04:40",
          "username": "Chibuzo1",
          "content": "Show more<br>11:40 PM<br>Answer: D<br>Step Functions + Bedrock Guardrails + Comprehend PII detection + Rekognition image moderation is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721004,
          "date": "Thu 12 Mar 2026 21:00",
          "username": "eesa",
          "content": "✅ Mínimo overhead de infraestructura: Servicios completamente managed<br>✅ Bedrock guardrails nativos: Filtrado de contenido inapropiado en inputs/outputs<br>✅ Amazon Comprehend: Detección y redacción de PII en texto<br>✅ Amazon Rekognition: Moderación de imágenes (contenido inapropiado)<br>✅ Step Functions: Orquestación managed del workflow completo<br>✅ Integración con S3: Se integra naturalmente con el workflow existente<br>✅ Escalable: Maneja miles de usuarios/hora sin gestión de infraestructura",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718886,
          "date": "Wed 04 Mar 2026 21:59",
          "username": "GiorgioGss",
          "content": "D is the only one with guardrails.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has set up Amazon Q Developer Pro licenses for all developers at the company. The company maintains a list of approved resources that developers must use when developing applications. The approved resources include internal libraries, proprietary algorithmic techniques, and sample code with approved styling.<br/>A new team of developers is using Amazon Q Developer to develop a new Java-based application. The company must ensure that the new developer team uses the company's approved resources. The company does not want to make project-level modifications.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ép Amazon Q Developer gợi ý code dựa trên internal libraries, thuật toán độc quyền, sample code của công ty.</li><li>Requirement quan trọng nhất: áp dụng cho cả team mà <strong>không sửa project-level</strong>.</li><li>Ưu tiên: tính nhất quán toàn tổ chức, ít thay đổi trên từng project.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Q Developer <strong>customization</strong> (Pro tier) kết nối data sources nội bộ (repo code) để Q gợi ý theo code chuẩn của công ty. Cấu hình ở cấp tổ chức, developer chỉ cần chọn customization, không phải thêm file vào project.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải thêm repo vào workspace (thay đổi project) và phụ thuộc developer tự dùng @workspace.</li><li><strong>B</strong>: ❌ Sai — `.amazonq/rules` nằm trong project root, là project-level; chủ yếu để định hướng coding rules, không phải nguồn code nội bộ để học.</li><li><strong>C</strong>: ❌ Sai — folder `rules` tự đặt tên không được Amazon Q nhận diện, vẫn là project-level.</li><li><strong>D</strong>: ✅ Đúng — customization dùng approved data sources, áp dụng không đụng project.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Q Developer <strong>customization</strong></li><li>Pro tier</li><li>Không project-level modification</li><li>Internal libraries / proprietary code</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Muốn Q Developer gợi ý theo code nội bộ của cả tổ chức mà không sửa project → nghĩ ngay đến <strong>customization</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>Create a Git repository that contains all of the approved internal libraries, algorithms, and code samples. Include this Git repository in the application project locally as part of the workspace. Ensure that the developers use the @workspace context to retrieve suggestions from the Git repository.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the project root folder, create a folder named .amazonq/rules. Add the approved internal libraries, algorithms, and code samples to the folder.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a folder in the application project named rules. Store the guidelines and code in the folder for Amazon Q Developer to reference product code suggestions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Q Developer customization that includes the approved data sources. Ensure that the developers use the customization to develop the application.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 41 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1721005,
          "date": "Thu 12 Mar 2026 21:01",
          "username": "eesa",
          "content": "✅ Amazon Q Developer Customizations: Característica nativa diseñada específicamente para este caso de uso<br>✅ Sin modificaciones de proyecto: La customization es a nivel de organización/cuenta, no requiere cambios en cada proyecto<br>✅ Centralizado: Una sola customization para todos los desarrolladores<br>✅ Approved data sources: Puede incluir repositorios internos, documentación, código de ejemplo<br>✅ Consistencia: Todos los desarrolladores obtienen sugerencias basadas en los mismos recursos aprobados<br>✅ Gestión simplificada: Administradores controlan qué recursos están aprobados<br>✅ Escalable: Funciona para múltiples equipos y proyectos",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1718887,
          "date": "Wed 04 Mar 2026 22:03",
          "username": "GiorgioGss",
          "content": "https://aws.amazon.com/blogs/devops/managing-amazon-q-developer-profiles-and-customizations-in-large-organizations/",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company is using Amazon Bedrock to build a customer service AI assistant. The AI assistant needs to process over 50,000 customer inquiries every day. The AI assistant occasionally experiences traffic spikes of up to 150,000 inquiries every day during promotional events. Analysis shows that 40% of inquiries follow similar patterns that share the same context.<br/>A GenAI developer must design a solution that will ensure low latency and consistent performance for the AI assistant during traffic spikes.<br/>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: AI assistant trên Amazon Bedrock cần low latency, hiệu năng ổn định khi traffic tăng gấp 3 lần.</li><li>Có 40% request dùng chung context lặp lại.</li><li>Ưu tiên: <strong>MOST cost-effective</strong>, ít thay đổi kiến trúc.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Latency-optimized inference</strong> giảm latency ngay trên Bedrock, kết hợp <strong>prompt caching</strong> cho phần context lặp lại giúp giảm cost và latency, không cần mua capacity cố định hay dựng thêm hạ tầng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — latency-optimized + prompt caching, on-demand nên trả theo dùng, tận dụng 40% context trùng lặp.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Provisioned Throughput cho peak 150K tốn chi phí cố định lớn lúc bình thường, thêm ElastiCache phải vận hành.</li><li><strong>C</strong>: ❌ Sai — Agents/knowledge bases thêm độ trễ; cross-Region inference không giải quyết caching ngữ cảnh lặp lại.</li><li><strong>D</strong>: ❌ Sai — Lambda + DynamoDB caching tự xây, thêm overhead, không tối ưu latency của model.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>latency-optimized inference</strong></li><li><strong>prompt caching</strong></li><li>Traffic spikes</li><li>MOST cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Context lặp lại + cần giảm latency/cost trên Bedrock → nghĩ ngay đến <strong>prompt caching</strong>, tránh Provisioned Throughput nếu đề nhấn cost.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>Configure latency-optimized inference by setting the latency parameter to optimized in the performance configuration of the request to Amazon Bedrock. Use prompt caching to handle the repetitive inquiries.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase provisioned throughput and model units (MUs) that are sized to handle peak traffic loads. Use Amazon ElastiCache (Redis OSS) to cache repetitive inquiries.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Agents and custom knowledge bases to pre-process customer inquiries. Configure cross-Region inference to distribute traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to pre-process requests by using a custom prompt routing mechanism. Use Amazon DynamoDB as a caching layer to handle frequently asked questions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 42 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744838,
          "date": "Thu 09 Apr 2026 02:33",
          "username": "de1612d",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721006,
          "date": "Thu 12 Mar 2026 21:02",
          "username": "eesa",
          "content": "✅ Prompt caching: Reduce costos hasta 90% para el 40% de consultas repetitivas<br>✅ Latency-optimized inference: Mejora rendimiento sin provisionar capacidad<br>✅ Pay-per-use: Solo pagas por lo que usas, no por capacidad ociosa<br>✅ Maneja spikes: Escala automáticamente sin sobre-provisionar<br>✅ Bajo overhead: Configuración simple sin infraestructura adicional",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718889,
          "date": "Wed 04 Mar 2026 22:06",
          "username": "GiorgioGss",
          "content": "cost-effective = cache",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1717831,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "I'm voting for B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A legal research company has a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock and Amazon OpenSearch Service. The application stores 768-dimensional vector embeddings for 15 million legal documents, including statutes, court rulings, and case summaries.<br/>The company's current chunking strategy segments text into fixed-length blocks of 500 tokens. The current chunking strategy often splits contextually linked information such as legal arguments, court opinions, or statute references across separate chunks. Researchers report that generated outputs frequently omit key context or cite outdated legal information.<br/>Recent application logs show a 40% increase in response times. The p95 latency metric exceeds 2 seconds. The company expects storage needs for the application to grow from 90 GB to 360 GB within a year.<br/>The company needs a solution to improve retrieval relevance and system performance at scale.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: RAG pháp lý bị mất ngữ cảnh vì chunk cố định 500 tokens cắt ngang lập luận.</li><li>Cần cải thiện <strong>retrieval relevance</strong> và hiệu năng khi dữ liệu tăng 90 GB lên 360 GB.</li><li>Nguyên nhân gốc: chiến lược chunking.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chunking theo <strong>semantic boundaries</strong> (lập luận, điều khoản, section) giữ trọn ngữ cảnh pháp lý nên retrieval chính xác hơn, ít chunk thừa/nhiễu hơn, từ đó cải thiện cả chất lượng lẫn hiệu năng. Cần regenerate embeddings cho khớp chunk mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng dimension lên 4,096 làm tăng storage và latency, không sửa vấn đề chunking.</li><li><strong>B</strong>: ❌ Sai — summary tĩnh bỏ dynamic retrieval, dễ lỗi thời, mất độ chính xác pháp lý.</li><li><strong>C</strong>: ✅ Đúng — xử lý đúng gốc rễ: chunk mất ngữ cảnh.</li><li><strong>D</strong>: ❌ Sai — DynamoDB keyword index không có semantic/vector search, giảm relevance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>semantic chunking</strong></li><li>Fixed-length chunk splits context</li><li>Regenerate embeddings</li><li>Retrieval relevance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"RAG trả lời thiếu ngữ cảnh do cắt chunk → nghĩ ngay đến sửa <strong>chunking strategy</strong> (semantic/hierarchical), không phải tăng dimension.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>Increase the embedding vector dimensionality from 768 to 4,096 without changing the existing chunking or pre-processing strategy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace dynamic retrieval with static, pre-written summaries that are stored in Amazon S3. Use Amazon CloudFront to serve the summaries to reduce compute demand and improve predictability.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the chunking strategy to use semantic boundaries such as complete legal arguments, clauses, or sections rather than fixed token limits. Regenerate vector embeddings to align with the new chunk structure.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate from OpenSearch Service to Amazon DynamoDB. Implement keyword-based indexes to enable faster lookups for legal concepts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 43 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1762555,
          "date": "Sun 31 May 2026 18:07",
          "username": "7554604",
          "content": "Is C because the fixed-length chunking is the root cause of every problem.<br>Why the others fail:<br>A — Increasing dimensionality from 768 to 4,096 does not fix split context. It also multiplies storage and computation costs (4,096/768 ≈ 5.3× larger vectors), worsening latency and the storage growth problem simultaneously.<br>B — Static pre-written summaries in S3/CloudFront eliminate dynamic retrieval entirely — directly contradicting the requirement for up-to-date legal information and undermining the entire RAG architecture.<br>D — DynamoDB is a key-value/document store with no native vector similarity capability. Keyword indexes find exact matches, not semantic relevance. Migrating to keyword search would regress retrieval quality, not improve it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718890,
          "date": "Wed 04 Mar 2026 22:10",
          "username": "GiorgioGss",
          "content": "A - Higher dimensionality (4,096) increases compute/storage costs 5x without fixing poor chunking; latency worsens due to larger vectors.<br>B - Static S3 summaries eliminate RAG capabilities entirely<br>D - DynamoDB lacks native vector search",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a generative AI (GenAI)-powered customer support application that uses Amazon Bedrock foundation models (FMs). The application must maintain conversational context across multiple interactions with the same user. The application must run clarification workflows to handle ambiguous user queries. The company must store encrypted records of each user conversation to use for personalization. The application must be able to handle thousands of concurrent users while responding to each user quickly.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chatbot hỗ trợ khách hàng giữ ngữ cảnh hội thoại, chạy clarification workflow, lưu lịch sử mã hóa.</li><li>Phải xử lý hàng nghìn user đồng thời, phản hồi nhanh.</li><li>Ưu tiên: workflow có trạng thái, lưu trữ scalable và encrypted.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions Standard</strong> hỗ trợ workflow chạy lâu và pattern <strong>Wait for a Callback</strong> (chờ user làm rõ). <strong>DynamoDB</strong> on-demand scale theo số user đồng thời, truy vấn nhanh theo session, hỗ trợ server-side encryption.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Express workflow tối đa 5 phút, không hỗ trợ callback pattern; RDS khó scale cho hàng nghìn session đồng thời.</li><li><strong>B</strong>: ✅ Đúng — Standard + callback cho clarification, DynamoDB on-demand + encryption.</li><li><strong>C</strong>: ❌ Sai — mỗi interaction một file JSON trên S3 cho truy xuất ngữ cảnh chậm, không có orchestration clarification.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — SQS không quản lý state workflow; ElastiCache không phải nơi lưu bền vững cho personalization.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions <strong>Standard</strong></li><li><strong>Wait for a Callback</strong></li><li>DynamoDB on-demand</li><li>Server-side encryption</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Workflow cần chờ phản hồi người dùng → nghĩ ngay đến Step Functions <strong>Standard + callback</strong>; lưu session scale lớn → <strong>DynamoDB</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>Use an AWS Step Functions Express workflow to orchestrate conversation flow. Invoke AWS Lambda functions to run clarification logic. Store conversation history in Amazon RDS and use session IDs as the primary key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Step Functions Standard workflow to orchestrate clarification workflows. Include Wait for a Callback patterns to manage the workflows. Store conversation history in Amazon DynamoDPurchase on-demand capacity and configure server-side encryption.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application by using an Amazon API Gateway REST API to route user requests to an AWS Lambda function to update and retrieve conversation context. Store conversation history in Amazon S3 and configure server-side encryption. Save each interaction as a separate JSON file.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to call Amazon Bedrock inference APIs. Use Amazon SQS queues to orchestrate clarification steps. Store conversation history in an Amazon ElastiCache (Redis OSS) cluster. Configure encryption at rest.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 44 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758364,
          "date": "Mon 18 May 2026 06:15",
          "username": "nebulane",
          "content": "B isn't correct since<br>Higher latency<br>Not suited for real-time chat",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746587,
          "date": "Mon 13 Apr 2026 08:59",
          "username": "de1612d",
          "content": "Gemini answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1740637,
          "date": "Fri 27 Mar 2026 01:02",
          "username": "Kraftzman",
          "content": ". Express vs. Standard Workflows<br>The requirement to handle thousands of concurrent users and respond quickly is the deciding factor between Step Functions types.<br>Express Workflows: Designed for high-volume, short-duration (up to 5 minutes) events. They can handle over 100,000 events per second, making them ideal for a busy customer support API.<br>Standard Workflows (Option B): These are intended for long-running, auditable processes (up to a year). They have much lower throughput limits and higher costs per execution, which would struggle with the \"thousands of concurrent users\" and \"responding quickly\" requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718891,
          "date": "Wed 04 Mar 2026 22:14",
          "username": "GiorgioGss",
          "content": "standard workflow fits the purpose",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717830,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "Well, [Option A] and [Option C] are definitely wrong. Between the other two, D is the better fit.",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company needs to pre-process unstructured data such as customer transcripts, financial reports, and documentation. The company stores the unstructured data in Amazon S3 to support an Amazon Bedrock application.<br/>The company must validate data quality, create auditable metadata, monitor data metrics, and customize text chunking to optimize foundation model (FM) performance.<br/>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tiền xử lý dữ liệu phi cấu trúc trên S3 cho ứng dụng Bedrock.</li><li>Cần validate data quality, tạo metadata có thể audit, monitor metrics, tùy chỉnh chunking.</li><li>Ưu tiên: <strong>LEAST development effort</strong>, dùng managed service.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Glue</strong> gom đủ: crawler/Data Catalog tạo metadata audit được, ETL job chạy script chunking tùy chỉnh, <strong>Glue Data Quality</strong> validate và monitor chất lượng, đều là managed service tích hợp sẵn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Data Wrangler phù hợp dữ liệu có cấu trúc/ML prep, phải viết thêm Lambda và cấu hình CloudWatch.</li><li><strong>B</strong>: ✅ Đúng — Glue crawler + ETL + Data Quality, ít code nhất.</li><li><strong>C</strong>: ❌ Sai — Comprehend chỉ trích entity, Athena không phải công cụ validate chất lượng chuyên dụng, nhiều thành phần tự ghép.</li><li><strong>D</strong>: ❌ Sai — EC2 + code tùy chỉnh tốn effort; Model Monitor dành cho model, không phải data quality của tài liệu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>AWS Glue Data Quality</strong></li><li>Glue crawler / Data Catalog</li><li>Auditable metadata</li><li>LEAST development effort</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần validate data quality + metadata catalog + ETL tùy chỉnh với ít effort → nghĩ ngay đến <strong>AWS Glue</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>Use Amazon SageMaker Data Wrangler to create a data flow. Configure Amazon CloudWatch metrics and alarms to monitor data quality. Use a custom AWS Lambda function to pre-process the data. Load processed data into Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Glue crawler to catalog data sources. Create AWS Glue ETL jobs to run custom transformation scripts. Use AWS Glue Data Quality to validate and monitor data quality. Load processed data into Amazon Bedrock.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Comprehend to extract entities. Create an AWS Lambda function to chunk text. Run Amazon Athena to query and validate data quality. Load processed data into Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions workflow to orchestrate data pre-processing tasks. Run custom code on Amazon EC2 instances to process the data. Use Amazon SageMaker Model Monitor to monitor data quality. Load processed data into Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 45 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744844,
          "date": "Thu 09 Apr 2026 04:18",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718894,
          "date": "Wed 04 Mar 2026 22:17",
          "username": "GiorgioGss",
          "content": "The only valid option - \"AWS Glue Data Quality\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Bedrock to build a Retrieval Augmented Generation (RAG) system. The RAG system uses an Amazon Bedrock knowledge base that is based on an Amazon S3 bucket as the data source for emergency news video content. The system retrieves transcripts, archived reports, and related documents from the S3 bucket.<br/>The RAG system uses state-of-the-art embedding models and a high-performing retrieval setup. However, users report slow responses and irrelevant results, which cause decreased user satisfaction. The company notices that vector searches are evaluating too many documents across too many content types and over long periods of time.<br/>The company determines that the underlying models will not benefit from additional fine tuning. The company must improve retrieval accuracy by applying smarter constraints. The company wants a solution that requires minimal changes to the existing architecture.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: vector search quét quá nhiều document, nhiều loại nội dung, nhiều thời kỳ nên chậm và kém liên quan.</li><li>Embedding và model đã tốt, không fine-tune thêm.</li><li>Ưu tiên: thu hẹp phạm vi tìm kiếm với <strong>minimal changes</strong> kiến trúc.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bedrock Knowledge Bases hỗ trợ <strong>metadata filtering</strong> từ S3 object metadata (loại nội dung, ngày tháng...), giúp giới hạn phạm vi tìm kiếm ngay trong knowledge base hiện có mà không đổi kiến trúc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đề đã nói model/embedding không cần cải thiện; vấn đề là phạm vi tìm kiếm.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — migrate sang OpenSearch là thay đổi kiến trúc lớn, trái yêu cầu minimal changes.</li><li><strong>C</strong>: ✅ Đúng — bật metadata filtering ngay trong knowledge base, thay đổi tối thiểu.</li><li><strong>D</strong>: ❌ Sai — chuyển sang Amazon Q Business là đổi hẳn kiến trúc.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Metadata filtering</strong></li><li>Knowledge Bases</li><li>S3 object metadata</li><li>Minimal changes</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Search quét quá rộng, cần thu hẹp phạm vi mà không đổi kiến trúc → nghĩ ngay đến <strong>metadata filtering</strong> của Knowledge Bases.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>Enhance embeddings by using a domain-adapted model that is specifically trained on emergency news content for improved vector similarity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate to Amazon OpenSearch Service. Use vector fields and metadata filters to define the scope of results retrieval.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable metadata-aware filtering within the Amazon Bedrock knowledge base by indexing S3 object metadata.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate to an Amazon Q Business index to perform structured metadata filtering and document categorization during retrieval.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 46 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758815,
          "date": "Thu 21 May 2026 16:47",
          "username": "Naaser",
          "content": "\"minimal changes\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1746588,
          "date": "Mon 13 Apr 2026 09:04",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718896,
          "date": "Wed 04 Mar 2026 22:20",
          "username": "GiorgioGss",
          "content": "\"minimal changes\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717834,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "I’m going with B. The other options seem overly complicated or don't fit the requirements.<br><div>Replies:</div><ul><li>Do a little bit of research before answering. It will make others confused.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1741536,
          "date": "Sun 29 Mar 2026 22:52",
          "username": "a9fb7b2",
          "content": "Do a little bit of research before answering. It will make others confused.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is creating a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock to generate summaries of market activities. The application relies on a vector database that stores a small proprietary dataset that has a low index count. The application must perform similarity searches. The Amazon Bedrock model's responses must maximize accuracy and maintain high performance.<br/>The company needs to configure the vector database and integrate it with the application.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chọn vector database cho RAG với dataset nhỏ, số index thấp.</li><li>Cần similarity search <strong>chính xác tối đa</strong> và hiệu năng cao.</li><li>Ưu tiên: độ chính xác (exact search) trên dataset nhỏ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon MemoryDB</strong> (in-memory) có vector search độ trễ thấp. Thuật toán <strong>Flat</strong> là brute-force, cho kết quả exact 100%, phù hợp dataset nhỏ nơi chi phí quét toàn bộ chấp nhận được.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — MemoryDB + Flat cho exact nearest neighbor, độ chính xác tối đa, scale ngang theo metrics.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — HNSW là approximate, hy sinh một phần accuracy và chỉ có ích cho dataset lớn.</li><li><strong>C</strong>: ❌ Sai — IVFFlat là approximate, Aurora latency cao hơn in-memory.</li><li><strong>D</strong>: ❌ Sai — IVFFlat approximate; DocumentDB không tối ưu cho yêu cầu accuracy tối đa ở scale nhỏ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>MemoryDB</strong> vector search</li><li><strong>Flat</strong> = exact search</li><li>HNSW / IVFFlat = approximate</li><li>Small dataset, low index count</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Dataset nhỏ + cần accuracy tối đa → nghĩ ngay đến <strong>Flat</strong> (exact); dataset lớn cần tốc độ → <strong>HNSW</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>Launch an Amazon MemoryDB cluster and configure the index by using the Flat algorithm. Configure a horizontal scaling policy based on performance metrics.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon MemoryDB cluster and configure the index by using the Hierarchical Navigable Small World (HNSW) algorithm. Configure a vertical policy based on performance metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon Aurora PostgresSQL cluster and configure the index by using the Inverted File with Flat Compression (IVFFlat) algorithm. Configure the instance class to scale to a larger size when the load increases.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon DocumentDB cluster that has an Inverted File with Flat Compression (IVFFlat) index and a high probe value. Configure connections to the cluster as a replica set Distribute reads to replica instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 47 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758817,
          "date": "Thu 21 May 2026 16:51",
          "username": "Naaser",
          "content": "Flat Algorithm for Small Datasets: For a small proprietary dataset and a low index count, using the Flat (brute-force) algorithm is highly effective. Because the dataset is small, the performance penalty is negligible, and the Flat algorithm guarantees 100% recall accuracy for exact nearest-neighbor searches. High Performance: Amazon MemoryDB operates entirely in-memory. This provides incredibly fast read and write operations, minimizing latency and ensuring high performance and accuracy for RAG applications. Horizontal Scaling: MemoryDB allows you to scale horizontally by adding or removing shards based on performance and traffic metrics.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746589,
          "date": "Mon 13 Apr 2026 09:06",
          "username": "de1612d",
          "content": "Answer the A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1741563,
          "date": "Mon 30 Mar 2026 07:24",
          "username": "eCosinus",
          "content": "HNSW = best accuracy + latency tradeoff",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718897,
          "date": "Wed 04 Mar 2026 22:25",
          "username": "GiorgioGss",
          "content": "Flat algorithm performs exact similarity search — 100% recall, no approximation",
          "upvote_count": "2",
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
      "question_text": "<p>A GenAI developer is building a Retrieval Augmented Generation (RAG)-based customer support application that uses Amazon Bedrock foundation models (FMs). The application needs to process 50 GB of historical customer conversations that are stored in an Amazon S3 bucket as JSON files. The application must use the processed data as its retrieval corpus. The application's data processing workflow must extract relevant data from customer support documents, remove customer personally identifiable information (PII), and generate embeddings for vector storage. The processing workflow must be cost-effective and must finish within 4 hours.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý 50 GB JSON trên S3: trích xuất dữ liệu, loại bỏ PII, tạo embeddings, lưu vector.</li><li>Phải cost-effective, hoàn tất trong 4 giờ.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, ưu tiên serverless/managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions</strong> orchestrate pipeline serverless, <strong>Comprehend</strong> phát hiện PII, <strong>Bedrock</strong> tạo embeddings, và <strong>OpenSearch Serverless</strong> lưu vector với similarity search, không phải quản lý cluster hay capacity.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda tự quản lý concurrency, timeout 15 phút, không có orchestration/retry tập trung, chưa có nơi lưu vector.</li><li><strong>B</strong>: ❌ Sai — Glue + SageMaker Processing + OpenSearch provisioned, nhiều thành phần phải vận hành.</li><li><strong>C</strong>: ❌ Sai — EMR cluster và Aurora pgvector tốn vận hành nhất.</li><li><strong>D</strong>: ✅ Đúng — toàn bộ serverless/managed, tích hợp trực tiếp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions orchestration</li><li><strong>Comprehend</strong> PII detection</li><li><strong>OpenSearch Serverless</strong></li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Pipeline xử lý dữ liệu + PII + embeddings với ít vận hành → nghĩ ngay đến <strong>Step Functions + Comprehend + Bedrock + OpenSearch Serverless</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda and Amazon Comprehend to process files in parallel, remove PII, and call Amazon Bedrock APIs to generate vectors. Configure Lambda concurrency limits and memory settings to optimize throughput.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Glue ETL job to run PII detection scripts on the data. Use Amazon SageMaker Processing to run the HuggingFaceProcessor to generate embeddings by using a pre-trained model. Store the embeddings in Amazon OpenSearch Service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon EMR cluster that runs Apache Spark with user-defined functions (UDFs) that call Amazon Comprehend to detect PII. Use Amazon Bedrock APIs to generate vectors. Store outputs in Amazon Aurora PostgreSQL with the pgvector extension.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a data processing pipeline that uses AWS Step Functions to orchestrate a workload that uses Amazon Comprehend to detect PII and Amazon Bedrock to generate embeddings. Directly integrate the workflow with Amazon OpenSearch Serverless to store vectors and provide similarity search capabilities.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 48 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746590,
          "date": "Mon 13 Apr 2026 09:08",
          "username": "de1612d",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1741564,
          "date": "Mon 30 Mar 2026 07:27",
          "username": "eCosinus",
          "content": "ChatGTP goes for B but I like D I do not know what is the good answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1723895,
          "date": "Wed 18 Mar 2026 16:13",
          "username": "AM_aws",
          "content": "A has much more overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721073,
          "date": "Fri 13 Mar 2026 04:40",
          "username": "taka5094",
          "content": "Step Functions' Distributed Map state allows to automatically scan millions of objects in an S3 bucket and run up to 10,000 parallel workflows. This makes it easy to process 50 GB of data within a 4-hour time limit.<br>## Why Other Options Are Inappropriate<br>A (Lambda Only):<br>Managing 50 GB of data with a single or simple parallel Lambda execution would require you to code all the timeout (15 minutes) handling and API rate limiting yourself, resulting in significant operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1719823,
          "date": "Sun 08 Mar 2026 06:34",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1718898,
          "date": "Wed 04 Mar 2026 22:29",
          "username": "GiorgioGss",
          "content": "least effort and within 4 hours = D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is developing a generative AI (GenAI) application that serves both premium customers and standard customers. The application uses AWS Lambda functions behind an Amazon API Gateway REST API to process requests. The company needs to dynamically switch between AI models based on which customer tier each user belongs to. The company also wants to perform A/B testing for new features without redeploying code. The company needs to validate model parameters like temperature and maximum token limits before applying changes.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đổi model theo tier khách hàng, A/B test tính năng mới mà không redeploy.</li><li>Phải validate tham số (temperature, max tokens) trước khi áp dụng.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS AppConfig</strong> hỗ trợ sẵn <strong>feature flags</strong> cho A/B testing, <strong>JSON schema validation</strong> cho tham số, deploy dần và rollback. <strong>AppConfig Agent</strong> cache cấu hình cho Lambda, không cần code custom.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Parameter Store phải poll và trigger redeploy, không có feature flag hay schema validation.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — DynamoDB lưu config được nhưng validation và A/B phải tự code, query mỗi request.</li><li><strong>C</strong>: ✅ Đúng — feature flags + schema validation + Agent, đúng cả 3 yêu cầu.</li><li><strong>D</strong>: ❌ Sai — ElastiCache phải tự quản lý cluster, validation tự viết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>AWS AppConfig</strong></li><li><strong>Feature flags</strong></li><li>JSON schema validation</li><li>AppConfig Agent (Lambda extension)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đổi config runtime + feature flag + validate + rollback → nghĩ ngay đến <strong>AWS AppConfig</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>Create an AWS Systems Manager Parameter Store parameters for each configuration. Use Lambda functions to poll for parameter updates. Use Amazon EventBridge events to trigger redeployments when configurations change.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store model configurations in Amazon DynamoDB tables. Optimize access patterns to retrieve configurations according to customer tier. Configure Lambda functions to query DynamoDB at the beginning of each request to determine which model to use.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS AppConfig to manage model configurations. Use feature flags to perform A/B testing. Define JSON schema validation rules for model parameters. Configure Lambda functions to retrieve configurations by using the AWS AppConfig Agent.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ElastiCache (Redis OSS) cluster to store model configurations. Set short TTL values. Run custom validation logic in Lambda functions. Use Amazon CloudWatch metrics to monitor configuration usage.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 49 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746591,
          "date": "Mon 13 Apr 2026 09:10",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1718899,
          "date": "Wed 04 Mar 2026 22:30",
          "username": "GiorgioGss",
          "content": "\"without redeploying code\" = appconfig",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Bedrock and Anthropic Claude 3 Haiku to develop an AI assistant. The AI assistant normally processes 10,000 requests each hour but experiences surges of up 30,000 requests each hour during peak usage periods. The AI assistant must respond within 2 seconds while operating across multiple AWS Regions.<br/>The company observes that during peak usage periods, the AI assistant experiences throughput bottlenecks that cause increased latency and occasional request timeouts. The company must resolve the performance issues.<br/>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Claude 3 Haiku bị nghẽn throughput khi tải tăng gấp 3 (10K lên 30K requests/giờ), gây timeout.</li><li>Phải phản hồi dưới 2 giây, chạy multi-Region.</li><li>Ưu tiên: tăng throughput, giữ latency thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region inference profiles</strong> tự động phân phối traffic sang nhiều Region có capacity, tăng throughput và tránh throttling. Token batching giảm overhead mỗi request.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ một Region, retry không tăng capacity; không tận dụng multi-Region.</li><li><strong>B</strong>: ✅ Đúng — cross-Region inference phân phối tải tự động, quản lý bởi Bedrock.</li><li><strong>C</strong>: ❌ Sai — round-robin client-side tự quản lý, 1 MU làm backup không đủ.</li><li><strong>D</strong>: ❌ Sai — batch inference là bất đồng bộ, không đáp ứng yêu cầu 2 giây.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Cross-Region inference profiles</strong></li><li>Throughput bottleneck</li><li>Multi-Region</li><li>Latency under 2 seconds</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Throttling/throughput bottleneck khi traffic spike trên Bedrock → nghĩ ngay đến <strong>cross-Region inference</strong>; batch inference chỉ cho tác vụ không real-time.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>Purchase provisioned throughput and sufficient model units (MUs) in a single Region. Configure the application to retry failed requests with exponential backoff.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement token batching to reduce API overhead. Use cross-Region inference profiles to automatically distribute traffic across available Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up auto scaling AWS Lambda functions in each Region. Implement client-side round-robin request distribution. Purchase one model unit (MU) of provisioned throughput as a backup.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement batch inference for all requests by using Amazon S3 buckets across multiple Regions. Use Amazon SQS to set up an asynchronous retrieval process.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 50 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746592,
          "date": "Mon 13 Apr 2026 09:11",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1718900,
          "date": "Wed 04 Mar 2026 22:33",
          "username": "GiorgioGss",
          "content": "Cross-Region Inference (CRI) is specifically designed to handle traffic spikes and high-throughput requirements by intelligently routing requests across multiple AWS Regions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717832,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "My answer: B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Bedrock to develop an AI assistant to provide customer support. Analysis shows that 40% of customer queries use varied phrasing or wording to ask the same questions.<br/>The company wants a solution to reduce redundant model calls. The solution must ensure that semantically equivalent questions receive consistent answers. The solution must ensure low latency.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C (theo file; xem lưu ý)</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: 40% câu hỏi cùng ý nghĩa nhưng diễn đạt khác nhau, cần giảm model call dư thừa.</li><li>Cần trả lời nhất quán cho câu hỏi tương đương ngữ nghĩa, latency thấp.</li><li>Ưu tiên: <strong>semantic cache</strong> bằng vector similarity.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Semantic caching cần embeddings và <strong>k-NN similarity search</strong> thay vì khớp chính xác chuỗi. OpenSearch Service với k-NN và approximate k-NN tìm query tương tự và trả response đã lưu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DAX chỉ cache key-value chính xác, không có toán tử LIKE hay tìm kiếm ngữ nghĩa.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — MemoryDB vector search là hướng hợp lý về latency, nhưng đáp án dùng \"RANGE query\" kém rõ ràng so với k-NN.</li><li><strong>C</strong>: ✅ Đúng — vector k-NN tìm câu hỏi tương đương ngữ nghĩa.</li><li><strong>D</strong>: ❌ Sai — stemming chỉ xử lý biến thể từ, không bắt được paraphrase.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Semantic cache</strong></li><li>Embeddings + <strong>k-NN</strong></li><li>Semantically equivalent</li><li>Giảm redundant model calls</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cùng ý nghĩa nhưng khác cách diễn đạt → nghĩ ngay đến <strong>vector embeddings + k-NN</strong>, không phải key-value cache.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon DynamoDB Accelerator (DAX) cluster as an in-memory cache. Specify the query text as the partition key and the model response text as the sort key. Query the cache by using a filter expression with the LIKE operator.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock to generate embeddings from customer queries. Use Amazon MemoryDB for Valkey to store hash sets of vector embeddings and model responses. Use a RANGE query to find similar queries and their responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon OpenSearch Service that has k-nearest neighbor (k-NN) capabilities to store query-response text pairs. Use an approximate k-NN technique to find similar queries and their responses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a caching solution by using Amazon DynamoDB to create a global secondary index on the normalized query text. Apply stemming to incoming queries. Query the index of cached customer queries.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 51 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746937,
          "date": "Tue 14 Apr 2026 00:15",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1744902,
          "date": "Thu 09 Apr 2026 11:58",
          "username": "Aninina",
          "content": "The problem is about semantically equivalent questions with different wording. Vector similarity search is built for that.<br>You can generate embeddings for incoming queries and retrieve the most similar cached past query/response, which helps return consistent answers for equivalent questions.<br>Approximate k-NN is designed for low-latency nearest-neighbor retrieval at scale",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Lambda functions to build an AI agent solution. A GenAI developer must set up a Model Context Protocol (MCP) server that accesses user information. The GenAI developer must also configure the AI agent to use the new MCP server. The GenAI developer must ensure that only authorized users can access the MCP server.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dựng MCP server truy cập thông tin user trên Lambda, AI agent kết nối tới đó.</li><li>Requirement quyết định: <strong>chỉ user được ủy quyền</strong> mới truy cập MCP server.</li><li>Cần transport phù hợp cho remote server.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Remote MCP server dùng <strong>Streamable HTTP transport</strong> qua API Gateway HTTP API, và xác thực/ủy quyền bằng <strong>OAuth 2.1</strong> với Amazon Cognito, đúng chuẩn MCP authorization.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ dùng IAM invoke, không có xác thực người dùng; gọi bất đồng bộ không phù hợp MCP.</li><li><strong>B</strong>: ❌ Sai — STDIO transport dành cho process local, không dùng được với Lambda từ xa; không có authorization người dùng.</li><li><strong>C</strong>: ✅ Đúng — Streamable HTTP + API Gateway + Cognito OAuth 2.1.</li><li><strong>D</strong>: ❌ Sai — Lambda layer không phải process để chạy làm server; truyền credentials qua environment variables là kém an toàn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>MCP <strong>Streamable HTTP</strong> transport</li><li><strong>OAuth 2.1</strong> + Amazon Cognito</li><li>API Gateway HTTP API</li><li>STDIO = local only</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"MCP server remote cần bảo mật → nghĩ ngay đến <strong>Streamable HTTP + OAuth 2.1</strong>; STDIO chỉ cho local.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent's MCP client to invoke the MCP server asynchronously.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent to use the STDIO transport with the MCP server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Lambda function to host the MCP server. Create an Amazon API Gateway HTTP API that proxies requests to the Lambda function. Configure the AI agent solution to use the Streamable HTTP transport to make requests through the HTTP API. Use Amazon Cognito to enforce OAuth 2.1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Lambda layer to host the MCP server. Add the Lambda layer to the AI agent Lambda functions. Configure the agentic AI solution to use the STDIO transport to send requests to the MCP server. In the AI agent's MCP configuration, specify the Lambda layer ARN as the command. Specify the user credentials as environment variables.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 52 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1744904,
          "date": "Thu 09 Apr 2026 12:38",
          "username": "Aninina",
          "content": "Amazon API Gateway HTTP API can be invoked over Streamable HTTP, which is the right transport for a remote MCP server. Putting API Gateway in front of Lambda also gives you a clean place to enforce authentication and authorization. Amazon Cognito can provide the OAuth-based access control so only authorized users can access the MCP server.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1740580,
          "date": "Thu 26 Mar 2026 18:13",
          "username": "awsguruji",
          "content": "Question is about grant access to authorized users only \"only authorized users can access the MCP server\"<br>Cogneto is the best solution. (C)<br>D will not work -- do not want to save creds.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create an annual rewards program for its customers. The rewards that customers earn vary based on different parameters such as the categories of the items ordered and the customers' purchase history.<br/>The company needs a generative AI (GenAI) solution that uses three Amazon Bedrock agents to help customers during online catalog browsing. The agents must use knowledge bases and action groups to handle the search, recommendation, and order modules. The modules must operate sequentially. An AWS Lambda function must calculate estimated rewards for each recommended item. The solution must provide graceful degradation during service disruptions.<br/>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: 3 Bedrock agents (search, recommendation, order) chạy tuần tự, cộng Lambda tính rewards.</li><li>Cần <strong>graceful degradation</strong> khi dịch vụ gián đoạn.</li><li>Ưu tiên: <strong>MOST operational efficiency</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions</strong> tích hợp trực tiếp với Bedrock agents và Lambda, orchestrate tuần tự bằng state machine, có <strong>Retry/Catch</strong> sẵn cho từng bước để fallback, không cần code orchestration.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — thêm API Gateway cho từng agent và Lambda orchestrator tự viết, nhiều thành phần dư thừa.</li><li><strong>B</strong>: ✅ Đúng — 4 task trực tiếp, retry/catch cho mỗi bước.</li><li><strong>C</strong>: ❌ Sai — retry/fallback cấu hình riêng từng agent và orchestration bằng code, phức tạp.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions chỉ bọc một Lambda nên retry/catch không chi tiết theo từng bước.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions <strong>Retry / Catch</strong></li><li>Sequential orchestration</li><li>Graceful degradation</li><li>MOST operational efficiency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chạy tuần tự nhiều agent/Lambda + cần retry/fallback → nghĩ ngay đến <strong>Step Functions</strong> với từng task riêng.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>Define an Amazon API Gateway REST API behind each agent. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Configure the second Lambda function with a retry/fallback mechanism.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions state machine with four tasks that run the agents and the rewards Lambda function. Set up retry and catch branches for each of the task steps.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each agent with a separate retry/fallback mechanism. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Define an Amazon API Gateway REST API behind the second Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Create an AWS Step Functions state machine with one task that runs the second Lambda function. Set up retry and catch branches for the task step.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 53 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746938,
          "date": "Tue 14 Apr 2026 00:20",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1740642,
          "date": "Fri 27 Mar 2026 01:48",
          "username": "Kraftzman",
          "content": "AWS Step Functions is the native AWS orchestrator designed exactly for this. It allows you to define a declarative workflow (ASL) where the output of one agent (e.g., Search) becomes the input for the next (e.g., Recommendation).<br>Using Step Functions is more operationally efficient than writing a \"Manager\" Lambda function (Options A, C, and D). In a \"Lambda-lith\" orchestrator, you have to write custom code for state management, error handling, and parallel waiting, all while paying for the Lambda's idle time while it waits for Bedrock agents to respond.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719321,
          "date": "Thu 05 Mar 2026 20:06",
          "username": "GiorgioGss",
          "content": "\"The modules must operate sequentially.\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a workflow to review customer-facing communications before the company sends the communications. The company uses a pre-defined message template to generate the communications and stores the communications in an Amazon S3 bucket. The workflow needs to capture a specific portion from the template and send it to an Amazon Bedrock model. The workflow must store model responses back to the original S3 bucket.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: workflow đọc communication từ S3, trích xuất một phần theo template, gửi vào Bedrock model, lưu kết quả về S3.</li><li>Đây là pipeline xác định (deterministic) các bước cố định.</li><li>Ưu tiên: dùng integration trực tiếp, đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Step Functions</strong> có service integration trực tiếp với S3 (GetObject/PutObject) và Bedrock (InvokeModel), cùng intrinsic functions để parse dữ liệu, nên dựng được toàn bộ workflow không cần agent hay Lambda.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Bedrock Flows không có \"S3 action node\" và \"agent step\" như mô tả theo cách này; cấu hình không chính xác.</li><li><strong>B</strong>: ✅ Đúng — S3 GetObject, intrinsic function parse, Bedrock InvokeModel, S3 PutObject.</li><li><strong>C</strong>: ❌ Sai — agent là non-deterministic, action group không tự truy cập S3 và invoke model nếu không có Lambda.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — dùng agent cho tác vụ cố định là thừa, tốn 3 Lambda.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Step Functions <strong>optimized integrations</strong></li><li>Bedrock <strong>InvokeModel</strong> task</li><li>S3 GetObject / PutObject</li><li>Intrinsic functions</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Pipeline cố định S3 → Bedrock → S3 → nghĩ ngay đến <strong>Step Functions</strong> với SDK integrations, không cần agent.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>Create a flow in Amazon Bedrock Flows. Configure S3 action nodes at the beginning and end of the flow to retrieve and store the communications and the model responses. In the middle of the flow, configure an expression to parse each communication. Configure an agent step to send the parsed input to the model for review.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions Express workflow state machine. Use an Amazon S3 integration GetObject step to retrieve the original communications. Use an intrinsic function Pass step to parse the communications and to pass the results to an Amazon Bedrock InvokeModel step. Configure an Amazon S3 integration PutObject step to store the model responses back to the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock agent that has an action group. Configure instructions to define how the agent should parse the communications. Configure the action group to retrieve the communications from the S3 bucket, invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Bedrock agent that has a single action group. Configure three AWS Lambda functions in the action group. Configure the functions to retrieve the communications from the S3 bucket, parse the communications and invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 54 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758822,
          "date": "Thu 21 May 2026 17:41",
          "username": "Naaser",
          "content": "Correct solution is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1750379,
          "date": "Fri 24 Apr 2026 00:10",
          "username": "jakie22332",
          "content": "Amazon Bedrock Flows does not have S3 action nodes for reading/writing objects. Bedrock Flows supports prompt nodes, condition nodes, and other flow-specific nodes, but it's not designed for direct S3 object",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1747347,
          "date": "Tue 14 Apr 2026 14:50",
          "username": "AWS_SkillBuilder",
          "content": "While AWS Step Functions can orchestrate AWS services, \"intrinsic functions\" in a Pass state are very limited. They are designed for basic JSON manipulation, not for parsing complex message templates. To do this effectively in Step Functions, you would usually need an AWS Lambda function, which increases complexity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746939,
          "date": "Tue 14 Apr 2026 00:24",
          "username": "de1612d",
          "content": "Gemini answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721008,
          "date": "Thu 12 Mar 2026 21:11",
          "username": "eesa",
          "content": "✅ Step Functions: Orquestación nativa para workflows secuenciales<br>✅ 4 tasks separados: Search agent → Recommendation agent → Order agent → Rewards Lambda<br>✅ Retry/catch por task: Graceful degradation granular en cada paso<br>✅ Visual workflow: Fácil de monitorear y debuggear<br>✅ Managed service: Sin código de orquestación custom<br>✅ Error handling nativo: Retry, catch, fallback integrados<br>✅ Máxima eficiencia operacional: Configuración declarativa vs. código custom",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719570,
          "date": "Fri 06 Mar 2026 17:06",
          "username": "xyztest",
          "content": "correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719324,
          "date": "Thu 05 Mar 2026 20:11",
          "username": "GiorgioGss",
          "content": "Fully meets requirements with minimal components.",
          "upvote_count": "2",
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
      "question_text": "<p>A financial technology company is using Amazon Bedrock to build an assessment system for the company's customer service AI assistant. The AI assistant must provide financial recommendations that are factually accurate, compliant with financial regulations, and conversationally appropriate. The company needs to combine automated quality evaluations at scale with targeted human reviews of critical interactions.<br/>What solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đánh giá AI assistant tài chính về độ chính xác, tuân thủ quy định, giao tiếp phù hợp.</li><li>Cần kết hợp đánh giá tự động quy mô lớn với human review có chọn lọc cho các tương tác quan trọng.</li><li>Ưu tiên: scale + human-in-the-loop có mục tiêu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Bedrock evaluations</strong> với <strong>LLM-as-a-judge</strong> chấm tự động ở quy mô lớn, <strong>Guardrails</strong> kiểm tra tuân thủ chính sách tài chính, và <strong>Amazon A2I</strong> đưa các tương tác bị flag cho con người duyệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chấm thủ công toàn bộ không scale.</li><li><strong>B</strong>: ✅ Đúng — tự động + guardrails + A2I human review có chọn lọc.</li><li><strong>C</strong>: ❌ Sai — Lex và compliance database tĩnh không đánh giá được chất lượng hội thoại, không phải giải pháp evaluation.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — CloudWatch chỉ giám sát pattern, không đánh giá accuracy hay chất lượng nội dung.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock <strong>model evaluation</strong> (LLM-as-a-judge)</li><li><strong>Guardrails</strong></li><li><strong>Amazon A2I</strong></li><li>Human-in-the-loop</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đánh giá tự động quy mô lớn + người duyệt ca quan trọng → nghĩ ngay đến <strong>Bedrock evaluations + Guardrails + A2I</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>Configure a pipeline in which financial experts manually score all responses for accuracy, compliance, and conversational quality. Use Amazon SageMaker notebooks to analyze results to identify improvement areas.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock evaluations that use Anthropic Claude Sonnet as a judge model to assess response accuracy and appropriateness. Configure custom Amazon Bedrock guardrails to check responses for compliance with financial policies. Add Amazon Augmented AI (Amazon A2I) human reviews for flagged critical interactions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Lex bot to manage the customer service interactions. Configure AWS Lambda functions to check responses against a static compliance database. Configure intents in the bot that call the Lambda functions to check the responses. Add an additional intent to collect end-user reviews.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudWatch to monitor response patterns from the AI assistant. Configure CloudWatch alerts for potential compliance violations. Establish a team of human evaluators to review flagged interactions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 55 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1740645,
          "date": "Fri 27 Mar 2026 01:53",
          "username": "awsguruji",
          "content": "\"D\" has Human in loop but Bedrock is not used. Hence, B is right choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1721009,
          "date": "Thu 12 Mar 2026 21:13",
          "username": "eesa",
          "content": "✅ Bedrock evaluations con judge model: Evaluación automatizada a escala de accuracy y appropriateness<br>✅ Claude Sonnet como judge: Modelo avanzado para evaluar calidad de respuestas<br>✅ Bedrock guardrails custom: Compliance con políticas financieras (automático)<br>✅ Amazon A2I: Human-in-the-loop para interacciones críticas flagged<br>✅ Escalable: Automatización + revisión humana targeted<br>✅ Compliance integrado: Guardrails validan regulaciones financieras<br>✅ Combinación óptima: Automated at scale + human reviews críticos",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company is using Amazon Bedrock to develop a real-time patient care AI assistant to respond to queries for separate departments that handle clinical inquiries, insurance verification, appointment scheduling, and insurance claims. The company wants to use a multi-agent architecture.<br/>The company must ensure that the AI assistant is scalable and can onboard new features for patients. The AI assistant must be able to handle thousands of parallel patient interactions. The company must ensure that patients receive appropriate domain-specific responses to queries.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: multi-agent cho bệnh viện với các phòng ban clinical, insurance verification, scheduling, claims.</li><li>Cần scalable, dễ thêm tính năng, xử lý hàng nghìn tương tác song song, trả lời đúng domain.</li><li>Ưu tiên: kiến trúc <strong>supervisor + collaborator</strong> rõ ràng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một <strong>supervisor agent</strong> phân loại intent và route tới các <strong>collaborator agents</strong> chuyên biệt, mỗi agent dùng RAG với knowledge base riêng của phòng ban. Thêm phòng ban mới chỉ cần thêm collaborator.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — supervisor routing + collaborator có KB riêng, dễ mở rộng.</li><li><strong>B</strong>: ❌ Sai — nhiều supervisor và handoff thủ công, không phù hợp real-time, khó scale.</li><li><strong>C</strong>: ❌ Sai — một agent chung với rule-based routing, khó mở rộng và kém chuyên biệt domain.</li><li><strong>D</strong>: ❌ Sai — nhiều supervisor độc lập, KB dùng chung làm mất cô lập domain, cần routing ngoài tự viết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Supervisor agent</strong> + collaborator agents</li><li>Multi-agent collaboration</li><li>Domain-specific knowledge base</li><li>Intent classification</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Nhiều domain chuyên biệt, cần mở rộng → nghĩ ngay đến <strong>một supervisor + nhiều collaborator agents</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>Isolate data for each agent by using separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a supervisor agent to perform natural language intent classification on patient inquiries. Configure the supervisor agent to route queries to specialized collaborator agents to respond to department-specific queries. Configure each specialized collaborator agent to use Retrieval Augmented Generation (RAG) with the agent's department-specific knowledge base.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate supervisor agent for each department. Configure individual collaborator agents to perform natural language intent classification for each specialty domain within each department. Integrate each collaborator agent with department-specific knowledge bases only. Implement manual handoff processes between the supervisor agents.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Isolate data for each department in separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a single general-purpose agent. Configure multiple action groups within the general-purpose agent to perform specific department functions. Implement rule-based routing logic within the general-purpose agent instructions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement multiple independent supervisor agents that run in parallel to respond to patient inquiries for each department. Configure multiple collaborator agents for each supervisor agent. Integrate all agents with the same knowledge base. Use external routing logic to merge responses from multiple supervisor agents.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 56 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1740648,
          "date": "Fri 27 Mar 2026 01:59",
          "username": "awsguruji",
          "content": "RAG is the main dominance here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721010,
          "date": "Thu 12 Mar 2026 21:14",
          "username": "eesa",
          "content": "✅ Multi-agent architecture: Supervisor + specialized collaborators<br>✅ Separate knowledge bases: Aislamiento de datos por departamento<br>✅ IAM filtering: Control de acceso seguro<br>✅ NL intent classification: Supervisor enruta inteligentemente<br>✅ Domain-specific responses: Cada collaborator especializado en su dominio<br>✅ RAG por agent: Respuestas basadas en knowledge base específico<br>✅ Escalable: Fácil agregar nuevos departamentos/features<br>✅ Parallel interactions: Bedrock agents escalan automáticamente",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AI assistant application to summarize the company's website content and provide information to customers. The company plans to use Amazon Bedrock to give the application access to a foundation model (FM).<br/>The company needs to deploy the AI assistant application to a development environment and a production environment. The solution must integrate the environments with the FM. The company wants to test the effectiveness of various FMs in each environment. The solution must provide product owners with the ability to easily switch between FMs for testing purposes in each environment.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: triển khai app lên dev và production, tích hợp Bedrock FM, thử nhiều FM ở mỗi môi trường.</li><li>Product owner phải dễ dàng đổi FM để test.</li><li>Ưu tiên: một codebase, cấu hình theo môi trường, tự động hóa.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một <strong>CDK app</strong> dùng `FoundationModel.fromFoundationModelId()` (on-demand, đổi model chỉ cần đổi ID), một <strong>CodePipeline</strong> có deployment stage cho từng môi trường, đảm bảo nhất quán và dễ chuyển FM.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — `ProvisionedModel` gắn với provisioned throughput, khó đổi FM để test, nhiều pipeline.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — mỗi môi trường một CDK app và pipeline riêng gây trùng lặp, dễ lệch cấu hình.</li><li><strong>C</strong>: ✅ Đúng — một app, một pipeline, nhiều stage, FM theo ID.</li><li><strong>D</strong>: ❌ Sai — dev tạo thủ công, không nhất quán, không tự động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>`FoundationModel.fromFoundationModelId()`</li><li>Một CDK app, nhiều stage</li><li>CodePipeline</li><li>Dễ đổi FM</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần đổi FM dễ dàng giữa các môi trường → nghĩ ngay đến <strong>fromFoundationModelId()</strong> và một pipeline nhiều stage; ProvisionedModel thì bị khóa vào capacity.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>Create one AWS CDK application. Create multiple pipelines in AWS CodePipeline. Configure each pipeline to have its own settings for each FM. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate AWS CDK application for each environment. Configure the applications to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a separate pipeline in AWS CodePipeline for each environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one AWS CDK application. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a pipeline in AWS CodePipeline pipeline that has a deployment stage for each environment that uses AWS CodeBuild deploy actions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create one AWS CDK application for the production environment. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method. Create a pipeline in AWS CodePipeline. Configure the pipeline to deploy to the production environment by using an AWS CodeBuild deploy action. For the development environment, manually recreate the resources by referring to the production application code.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 57 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758826,
          "date": "Thu 21 May 2026 17:51",
          "username": "Naaser",
          "content": "Correct answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721011,
          "date": "Thu 12 Mar 2026 21:15",
          "username": "eesa",
          "content": "✅ Un CDK application: DRY principle, código reutilizable<br>✅ fromFoundationModelId(): Permite cambiar FMs fácilmente por ID<br>✅ Un pipeline con múltiples stages: Dev y Prod en mismo pipeline<br>✅ CodeBuild deploy actions: Flexibilidad para configurar FMs por environment<br>✅ Fácil switching: Cambiar model ID en configuración por environment<br>✅ No provisioned models: Usa on-demand FMs (más flexible para testing)<br>✅ Product owners: Pueden cambiar FMs sin modificar código",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hotel company wants to enhance a legacy Java-based property management system (PMS) by adding AI capabilities. The company wants to use Amazon Bedrock Knowledge Bases to provide staff with room availability information and hotel-specific details. The solution must maintain separate access controls for each hotel that the company manages. The solution must provide room availability information in near real time and must maintain consistent performance during peak usage periods.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thêm AI vào PMS cho nhiều khách sạn bằng Bedrock Knowledge Bases.</li><li>Cần tách biệt access control từng khách sạn, room availability gần real-time, hiệu năng ổn định lúc cao điểm.</li><li>Ưu tiên: <strong>isolation</strong> + dữ liệu mới nhanh.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mỗi khách sạn có <strong>một knowledge base riêng</strong> trong cấu trúc multi-account, cô lập quyền truy cập tự nhiên. <strong>Direct data ingestion</strong> cập nhật room availability gần real-time, dữ liệu ít quan trọng thì sync theo lịch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — một KB chung trộn dữ liệu, chỉ audit bằng CloudTrail chứ không kiểm soát truy cập từng khách sạn.</li><li><strong>B</strong>: ❌ Sai — KB tập trung, resource policy khó tách quyền theo khách sạn, EventBridge không trực tiếp ingest vào KB.</li><li><strong>C</strong>: ✅ Đúng — KB riêng từng khách sạn, direct ingestion cho dữ liệu near real-time.</li><li><strong>D</strong>: ❌ Sai — agent tập trung với IAM Identity Center permission sets không cô lập dữ liệu theo KB, không đảm bảo real-time.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Knowledge base <strong>per tenant</strong></li><li><strong>Direct data ingestion</strong></li><li>Multi-account isolation</li><li>Near real-time</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần tách biệt access từng tenant + dữ liệu near real-time → nghĩ ngay đến <strong>KB riêng từng tenant + direct ingestion</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>Deploy a single Amazon Bedrock knowledge base that contains combined data for all hotels. Configure AWS Lambda functions to synchronize data from each hotel's PMS database through direct API connections. Implement AWS CloudTrail logging with hotel-specific filters to audit access logs for each hotel's data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge rule for each hotel that is invoked by changes to the PMS database for each hotel. Configure the rule to send updates to a centralized Amazon Bedrock knowledge base in a management AWS account. Configure resource-based policies to enforce hotel-specific access controls for hotel staff.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement one Amazon Bedrock knowledge base for each hotel in a multi-account structure. Use direct data ingestion to provide real-time room availability information. Schedule regular synchronization for less critical information.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Build a centralized Amazon Bedrock agent that uses multiple knowledge bases. Implement AWS IAM Identity Center with hotel-specific permission sets to control hotel staff data access.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 58 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1746942,
          "date": "Tue 14 Apr 2026 00:31",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1740700,
          "date": "Fri 27 Mar 2026 12:18",
          "username": "Kraftzman",
          "content": "When designing for multi-tenancy in Amazon Bedrock, remember the \"100 KB per account\" quota. If the company manages more than 100 hotels, a multi-account strategy isn't just a security choice—it's an architectural necessity to stay within service limits",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a serverless inference API by using AWS Lambda. The API will dynamically invoke multiple AI models hosted on Amazon Bedrock. The company needs to design a solution that can switch between model providers without modifying or redeploying Lambda code in real time. The design must include safe rollout of configuration changes and validation and rollback capabilities.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Lambda gọi nhiều model Bedrock, đổi provider mà không sửa hay redeploy code, theo thời gian thực.</li><li>Cần rollout an toàn, validation, rollback.</li><li>Ưu tiên: quản lý cấu hình có kiểm soát.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS AppConfig</strong> cung cấp deployment strategy (gradual rollout), validators, và tự động rollback theo CloudWatch alarm. Lambda đọc cấu hình lúc runtime nên không cần redeploy.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Parameter Store lưu giá trị nhưng không có rollout dần, validation, hay rollback.</li><li><strong>B</strong>: ✅ Đúng — AppConfig có safe rollout, validation, rollback.</li><li><strong>C</strong>: ❌ Sai — hardcode model và đổi integration thủ công, không real-time, không rollback tự động.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — lưu file JSON trên S3 rồi tham chiếu qua AppConfig thêm bước thừa, AppConfig tự lưu hosted configuration.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>AWS AppConfig</strong></li><li>Gradual rollout / rollback</li><li>Validators</li><li>Không redeploy code</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đổi config runtime an toàn + validate + rollback → nghĩ ngay đến <strong>AWS AppConfig</strong>, không phải Parameter Store.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>Store the active model provider in AWS Systems Manager Parameter Store. Configure a Lambda function to read the parameter at runtime to determine which model to invoke.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the active model provider in AWS AppConfig. Configure a Lambda function to read the configuration at runtime to determine which model to invoke.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway REST API to route requests to separate Lambda functions. Hardcode each Lambda function to a specific model provider. Switch the integration target manually.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the active model provider in a JSON file hosted on Amazon S3. Use AWS AppConfig to reference the S3 file as a hosted configuration source. Configure a Lambda function to read the file through AppConfig at runtime to determine which model to invoke.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 59 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1749448,
          "date": "Mon 20 Apr 2026 21:00",
          "username": "devilman222",
          "content": "First,  I read this and thought appconfig.  2 answers with app config.  Which one?<br>B works.  D Works,  but having the s3 is really unnecessary,  thats what app config does for you.  So its B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1744854,
          "date": "Thu 09 Apr 2026 06:19",
          "username": "de1612d",
          "content": "chatgpt says the answer is d, but what do you think?<br><div>Replies:</div><ul><li>Jemini answer is B….</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1746943,
          "date": "Tue 14 Apr 2026 00:35",
          "username": "de1612d",
          "content": "Jemini answer is B….",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1721012,
          "date": "Thu 12 Mar 2026 21:17",
          "username": "eesa",
          "content": "AWS AppConfig está diseñado específicamente para:<br>Safe rollout: Deployment gradual (ej: 10% → 25% → 50% → 100%)<br>Validation: Validators integrados (JSON schema, Lambda validators)<br>Rollback automático: Si detecta errores, revierte cambios automáticamente<br>Real-time switching: Cambios sin redeploy de Lambda<br>Caching: AppConfig Agent cachea configs para baja latencia",
          "upvote_count": "2",
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
      "question_text": "<p>A company is building a generative AI (GenAI) application that uses Amazon Bedrock APIs to process complex customer inquiries. During peak usage periods, the application experiences intermittent API timeouts that cause issues such as broken response chunks and delayed data delivery. The application struggles to ensure that prompts remain within token limits when handling complex customer inquiries of varying lengths. Users have reported truncated inputs and incomplete responses. The company has also observed foundation model (FM) invocation failures.<br/>The company needs a retry strategy that automatically handles transient service errors and prevents overwhelming Amazon Bedrock during peak usage periods. The strategy must also adapt to changing service availability and support response streaming and token-aware request handling.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Bedrock API timeout lúc cao điểm, response stream bị đứt, prompt vượt token limit, FM invocation lỗi.</li><li>Cần retry tự động cho lỗi tạm thời, không làm quá tải Bedrock, thích ứng theo tình trạng dịch vụ, hỗ trợ streaming và token-aware.</li><li>Ưu tiên: resilience toàn diện.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Kết hợp <strong>adaptive retry với exponential backoff + jitter</strong>, <strong>circuit breaker</strong> để tránh dồn tải khi lỗi nhiều, và streaming handler có buffer cho phép <strong>resume từ chunk cuối</strong> khi kết nối lại.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fixed delay 1 giây gây retry đồng loạt, restart stream làm mất dữ liệu, cap token cứng.</li><li><strong>B</strong>: ✅ Đúng — adaptive retry + circuit breaker + streaming resume, thích ứng tình trạng dịch vụ.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — standard mode không adaptive, không có circuit breaker, token limit toàn cục thô.</li><li><strong>D</strong>: ❌ Sai — timeout 30 giây cố định, token cap tĩnh, load shedding không thích ứng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Exponential backoff with jitter</strong></li><li><strong>Circuit breaker</strong></li><li>Adaptive retry</li><li>Resume streaming từ chunk cuối</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Lỗi tạm thời + tránh quá tải khi peak → nghĩ ngay đến <strong>backoff + jitter + circuit breaker</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>Implement a standard retry strategy that uses a 1-second fixed delay between attempts and a 3-retry maximum for all errors. Handle streaming response timeouts by restarting streams. Cap token usage for each session.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an adaptive retry strategy that uses exponential backoff with jitter and a circuit breaker pattern that temporarily disables retries when error rates exceed a predefined threshold. Implement a streaming response handler that monitors for chunk delivery timeouts. Configure the handler to buffer successfully received chunks and intelligently resume streaming from the last received chunk when connections are re-established.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS SDK to configure a retry strategy in standard mode. Wrap Amazon Bedrock API calls in try-catch blocks that handle timeout exceptions. Return cached completions for failed streaming requests. Enforce a global token limit for all users. Add jitter-based retry logic and lightweight token trimming for each request. Resume broken streams by requesting only the missing chunks from the point of failure. Maintain a small in-memory buffer of the most recent chunks to minimize redundant data transfer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set Amazon Bedrock client request timeouts to 30 seconds. Implement client-side load shedding. Buffer partial results and stop new requests when the application performance begins to degrade. Set static token usage caps for all requests. Configure exponential backoff retries, dynamic chunk sizing, and context-aware token limits.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 60 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1759133,
          "date": "Sat 23 May 2026 15:47",
          "username": "nocinfra",
          "content": "Exponential backoff with jitter — handles transient errors without thundering herd, adapts to service conditions<br>Circuit breaker — prevents overwhelming Bedrock during peak by pausing retries when error rates spike<br>Chunk-level streaming resume — buffers received chunks and resumes from last successful chunk, avoiding wasted tokens and broken responses",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1758829,
          "date": "Thu 21 May 2026 17:58",
          "username": "Naaser",
          "content": "SDK Native Support: The AWS SDK’s standard mode retry strategy is built specifically to handle transient service errors and throttling.Token-Aware Handling: Implementing lightweight token trimming addresses the \"varying length\" and \"truncated input\" issues by ensuring prompts fit within FM limits before the API call is even made.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1751834,
          "date": "Wed 29 Apr 2026 07:40",
          "username": "Chibuzo1",
          "content": "The answer is B because it combines the three pillars of resilient distributed systems design: adaptive retry (exponential backoff + jitter) to handle transient errors gracefully, a circuit breaker to prevent cascading failures during sustained issues, and intelligent stream resumption to handle the streaming-specific challenges — all of which adapt dynamically rather than relying on static thresholds.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1746944,
          "date": "Tue 14 Apr 2026 00:38",
          "username": "de1612d",
          "content": "Gemini answer is C",
          "upvote_count": "1",
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
      "question_text": "<p>A bank is developing a generative AI (GenAI)-powered AI assistant that uses Amazon Bedrock to assist the bank's website users with account inquiries and financial guidance. The bank must ensure that the AI assistant does not reveal any personally identifiable information (PII) in customer interactions.<br/>The AI assistant must not send PII in prompts to the GenAI model. The AI assistant must not respond to customer requests to provide investment advice. The bank must collect audit logs of all customer interactions, including any images or documents that are transmitted during customer interactions.<br/>Which solution will meet these requirements with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chặn PII trước khi gửi vào model, chặn chủ đề investment advice, và audit log mọi tương tác (gồm cả image/document).</li><li>Ưu tiên: <strong>LEAST operational effort</strong> → dùng tính năng managed có sẵn của Amazon Bedrock.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bedrock guardrails có <strong>sensitive information policy</strong> (PII) và <strong>denied topic policy</strong> áp dụng cho cả input lẫn output. Model invocation logging với delivery và image logging tới Amazon S3 đáp ứng yêu cầu audit mà không cần code tự xây.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Amazon Macie quét dữ liệu tĩnh trong S3, không xử lý PII trong prompt realtime; AWS CloudTrail chỉ ghi API call, không ghi nội dung hội thoại.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda + Comprehend phải tự xây; topic modeling không dùng để chặn chủ đề; CloudWatch custom metrics không lưu nội dung hội thoại/ảnh.</li><li><strong>C</strong>: ✅ Đúng — Guardrails (PII + topic policy) + invocation logging/image logging vào S3, ít vận hành nhất.</li><li><strong>D</strong>: ❌ Sai — regex dễ sót PII, prompt engineering không đảm bảo chặn investment advice, vận hành nhiều hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails, sensitive information policy, denied topic, model invocation logging, image logging</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"lọc PII + chặn chủ đề + least effort\" → nghĩ ngay đến <strong>Bedrock Guardrails</strong> + <strong>invocation logging to S3</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>Use Amazon Macie to detect and redact PII in user inputs and in the model responses. Apply prompt engineering techniques to force the model to avoid investment advice topics. Use AWS CloudTrail to capture conversation logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function and Amazon Comprehend to detect and redact PII. Use Amazon Comprehend topic modeling to prevent the AI assistant from discussing investment advice topics. Set up custom metrics in Amazon CloudWatch to capture customer conversations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to apply a sensitive information policy to detect and filter PII. Set up a topic policy to ensure that the AI assistant avoids investment advice topics. Use the Converse API to log model invocations. Enable delivery and image logging to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use regex controls to match patterns for PII. Apply prompt engineering techniques to avoid returning PII or investment advice topics to customers. Enable model invocation logging, delivery logging, and image logging to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 61 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1751835,
          "date": "Wed 29 Apr 2026 07:44",
          "username": "Chibuzo1",
          "content": "Amazon Bedrock Guardrails is the purpose-built, fully managed solution for exactly this use case — PII filtering, topic denial, and comprehensive audit logging including multimedia content — all configured declaratively within the Bedrock console with zero custom code and zero additional services to operate.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1750898,
          "date": "Sat 25 Apr 2026 20:05",
          "username": "minime",
          "content": "This is exactly what Bedrock Guardrails + native logging are designed for:<br>- PII protection<br>- Policy enforcement<br>- Audit logging",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company is developing a customer service AI assistant application that uses a foundation model (FM) in Amazon Bedrock. The application must provide transparent responses by documenting reasoning and by citing sources that are used for Retrieval Augmented Generation (RAG). The application must capture comprehensive audit trails for all responses to users. The application must be able to serve up to 10,000 concurrent users and must respond to each customer inquiry within 2 seconds.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: trợ lý RAG minh bạch (lý do + trích dẫn nguồn), audit trail đầy đủ, 10.000 concurrent users, phản hồi dưới 2 giây.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong> → managed services.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Agent tracing ghi lại reasoning, Bedrock knowledge bases cung cấp RAG managed kèm citation, còn Multi-AZ + API Gateway + Lambda + CloudFront đáp ứng scale và latency.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tracing + managed knowledge bases + kiến trúc serverless scale được, ít vận hành nhất.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — custom RAG pipeline trên Amazon OpenSearch Service phải tự xây/quản lý, tăng overhead.</li><li><strong>C</strong>: ❌ Sai — chỉ có monitoring, không có RAG citation thật sự; prompt nhúng cứng, không có reasoning trace; RDS khó scale cho 10.000 users.</li><li><strong>D</strong>: ❌ Sai — chỉ là báo cáo compliance định kỳ, không phục vụ trả lời realtime trong 2 giây.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Agent tracing, Knowledge Bases, citation, Multi-AZ, API Gateway + Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"RAG + cite sources + reasoning + least overhead\" → nghĩ ngay đến <strong>Bedrock Knowledge Bases + Agent tracing</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>Enable tracing for Amazon Bedrock agents. Configure structured prompts that direct the FM to provide evidence presentations. Integrate Amazon Bedrock knowledge bases with data sources to enable RAG. Configure the application to reference and cite authoritative content. Deploy the application in a Multi-AZ architecture. Use Amazon API Gateway and AWS Lambda functions to scale the application. Use Amazon CloudFront to provide low-latency delivery.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable tracing for Amazon Bedrock agents. Integrate a custom RAG pipeline with Amazon OpenSearch Service to retrieve and cite sources. Configure structured prompts to present retrieved evidence. Deploy the application behind an Amazon API Gateway REST API. Use AWS Lambda functions and Amazon CloudFront to scale the application and to provide low latency. Store logs in Amazon S3 and use AWS CloudTrail to capture audit trails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch to monitor latency and error rates. Embed model prompts directly in the application backend to cite sources. Store application interactions with users in Amazon RDS for audits.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store generated responses and supporting evidence in an Amazon S3 bucket. Enable versioning on the bucket for audits. Use AWS Glue to catalog retrieved documents. Process the retrieved documents in Amazon Athena to generate periodic compliance reports.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 62 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1751836,
          "date": "Wed 29 Apr 2026 07:48",
          "username": "Chibuzo1",
          "content": "because it leverages the full Bedrock-native stack — Knowledge Bases for managed RAG with automatic citations, agent tracing for comprehensive audit trails, and the standard serverless scaling pattern (API Gateway + Lambda + CloudFront + Multi-AZ) for performance — all with minimal operational overhead since every component is a managed service requiring configuration rather than custom engineering.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746951,
          "date": "Tue 14 Apr 2026 01:52",
          "username": "de1612d",
          "content": "Gemini Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1746596,
          "date": "Mon 13 Apr 2026 10:37",
          "username": "2d5eb96",
          "content": "B is clearly bringing operational overhead",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company is developing a document management system that stores medical research papers in an Amazon S3 bucket. The company needs to build a comprehensive metadata framework that will improve search precision for a generative AI (GenAI) application that analyzes the research papers. The metadata framework must include document timestamps, author information, and research domain classifications.<br/>The solution must maintain a consistent metadata structure across all uploaded documents. The solution must give foundation models (FMs) the ability to understand document context without accessing the full content.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xây metadata framework nhất quán (timestamp, author, domain) cho tài liệu trong Amazon S3 để FM hiểu ngữ cảnh mà không đọc toàn bộ nội dung.</li><li>Ưu tiên: dùng đúng loại metadata của S3 cho đúng mục đích.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 system metadata tự động giữ timestamp (Last-Modified), S3 object tags phù hợp cho phân loại domain (có thể sửa và query), còn user-defined metadata lưu author theo cặp key-value tùy chỉnh.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — mỗi loại metadata dùng đúng chỗ: system metadata, object tags, user-defined metadata.</li><li><strong>B</strong>: ❌ Sai — S3 Object Lock/legal hold dùng cho bảo vệ dữ liệu, không để theo dõi timestamp; S3 access points là cơ chế truy cập, không phải phân loại domain.</li><li><strong>C</strong>: ❌ Sai — S3 Inventory là báo cáo, S3 Storage Lens là dashboard phân tích dung lượng, không lưu author.</li><li><strong>D</strong>: ❌ Sai — Object Lock retention không phải timestamp; S3 Event Notifications chỉ kích hoạt sự kiện, không phân loại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 system metadata, user-defined metadata, object tags, metadata per object</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"metadata gắn theo object trong S3\" → nghĩ ngay đến <strong>system metadata + user-defined metadata + object tags</strong>; Object Lock/access points/Inventory là bẫy.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>Store document timestamps in Amazon S3 system metadata. Use S3 object tags to implement domain classification. Implement custom user-defined metadata to store author information.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up S3 Object Lock with legal holds to track document timestamps. Use S3 object tags to store author information. Implement S3 access points for domain classification.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Inventory reports to track document timestamps. Create S3 access points to implement domain classification. Store author information in S3 Storage Lens dashboards.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use custom user-defined metadata to store author information. Use S3 Object Lock retention periods to track document timestamps. Use S3 Event Notifications to implement domain classification.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 63 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1751837,
          "date": "Wed 29 Apr 2026 07:52",
          "username": "Chibuzo1",
          "content": "Because it correctly maps each metadata requirement to the appropriate S3 metadata mechanism: system metadata for automatic timestamps, object tags for categorical classification, and user-defined metadata for descriptive attributes — all of which are native, consistent, and directly accessible to FMs without requiring full document access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1744870,
          "date": "Thu 09 Apr 2026 08:33",
          "username": "de1612d",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Example Corp provides a personalized video generation service that millions of enterprise customers use. Customers generate marketing videos by submitting prompts to the company's proprietary generative AI (GenAI) model. To improve output relevance and personalization, Example Corp wants to enhance the prompts by using customer-specific context such as product preferences, customer attributes, and business history.<br/>The customers have strict data governance requirements. The customers must retain full ownership and control over their own data. The customers do not require real-time access. However, semantic accuracy must be high and retrieval latency must remain low to support customer experience use cases.<br/>Example Corp wants to minimize architectural complexity in its integration pattern. Example Corp does not want to deploy and manage services in each customer's environment unless necessary.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: làm giàu prompt bằng dữ liệu riêng của từng customer, nhưng customer giữ quyền sở hữu và kiểm soát dữ liệu.</li><li>Ưu tiên: data governance, semantic accuracy cao, latency thấp, ít phức tạp, không phải deploy/quản lý service trong môi trường customer. Không cần realtime.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Q Business index do customer sở hữu, customer chỉ định Example Corp là <strong>data accessor</strong> để truy xuất qua secure API. Dữ liệu vẫn nằm ở customer, retrieval có semantic search, không cần deploy gì.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — data accessor + index của customer, quản trị chặt, ít phức tạp.</li><li><strong>B</strong>: ❌ Sai — deploy MCP server realtime cho từng customer là đúng thứ đề muốn tránh, và đề không cần realtime.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — cross-account query knowledge base làm tăng độ phức tạp quản lý quyền, không có cơ chế accessor chuẩn.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Amazon Kendra không có cơ chế chia sẻ index chéo account đơn giản; phải crawl và quản lý crawler, ownership kém rõ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Q Business, data accessor, customer-owned index, enrich prompts</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"bên thứ ba truy xuất dữ liệu của customer, customer giữ quyền kiểm soát\" → nghĩ ngay đến <strong>Q Business data accessor</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>Ensure that each customer sets up an Amazon Q Business index that includes the customer's internal data. Ensure that each customer designates Example Corp as a data accessor to allow Example Corp to retrieve relevant content by using a secure API to enrich prompts at runtime.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use federated search with Model Context Protocol (MCP) by deploying real-time MCP servers for each customer. Retrieve data in real time during prompt generation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that each customer configures an Amazon Bedrock knowledge base. Allow cross-account querying so Example Corp can retrieve structured data for prompt augmentation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Kendra to crawl customer data sources. Share the resulting indexes across accounts so Example Corp can query each customer's Amazon Kendra index to retrieve augmentation data.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 64 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1731688,
          "date": "Fri 20 Mar 2026 19:02",
          "username": "AM_aws",
          "content": "https://aws.amazon.com/blogs/machine-learning/enhance-enterprise-productivity-for-your-llm-solution-by-becoming-an-amazon-q-business-data-accessor/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1758831,
          "date": "Thu 21 May 2026 18:07",
          "username": "Naaser",
          "content": "Lowest Architectural Complexity: Amazon Bedrock Knowledge Bases provide a fully managed RAG (Retrieval-Augmented Generation) workflow. Example Corp doesn't need to manage vector databases or complex indexing logic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1751838,
          "date": "Wed 29 Apr 2026 07:57",
          "username": "Chibuzo1",
          "content": "Amazon Bedrock Knowledge Bases are the purpose-built managed service for RAG with high semantic accuracy, low retrieval latency, and minimal operational overhead. The cross-account querying model keeps data ownership with customers while giving Example Corp a simple, uniform integration pattern across its customer base — no per-customer infrastructure to deploy or manage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1750902,
          "date": "Sat 25 Apr 2026 20:30",
          "username": "minime",
          "content": "Customer data ownership preserved (data stays in their account)<br>Low latency + high accuracy (managed vector retrieval)<br>No real-time ingestion requirement (pre-indexed KB)<br>Minimal complexity for Example Corp (no per-customer infra to manage)<br>Native Bedrock integration → simpler GenAI pipeline",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1750844,
          "date": "Sat 25 Apr 2026 07:57",
          "username": "Gagg",
          "content": "A - Amazon Q Business is an internal enterprise assistant, not designed for cross-organization data retrieval by external companies.<br>- B - Deploying MCP servers per customer = maximum complexity and contradicts \"don't deploy services in each customer's environment.\"<br>- D - Kendra requires crawling raw data sources (more invasive), is heavier/costlier, and is being superseded by Bedrock Knowledge Bases.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1746954,
          "date": "Tue 14 Apr 2026 02:02",
          "username": "de1612d",
          "content": "Gemini answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721813,
          "date": "Mon 16 Mar 2026 10:33",
          "username": "StelSen",
          "content": "Bedrock Knowledge Base per customer:<br>- Each customer creates a Bedrock Knowledge Base<br>- Data remains inside the customer's account<br>- Example Corp performs cross-account querying.<br>But, Amazon Q Business is an end-user AI assistant product, not a RAG backend.<br>Q Business is not intended to expose retrieval APIs for external GenAI models.<br>It introduces another AI assistant layer, which is unnecessary.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721013,
          "date": "Thu 12 Mar 2026 21:22",
          "username": "eesa",
          "content": "✅ Customer data ownership: Knowledge base en cuenta del cliente<br>✅ Full control: Cliente gestiona sus propios datos<br>✅ Cross-account querying: Example Corp accede vía IAM sin gestionar infraestructura en cuenta del cliente<br>✅ Semantic accuracy: Vector embeddings para búsqueda semántica<br>✅ Low latency: Knowledge bases optimizado para retrieval rápido<br>✅ No real-time required: Knowledge base es asíncrono (indexing separado de querying)<br>✅ Minimal complexity: Bedrock managed service, sin despliegues custom<br>✅ No deployment in customer env: Example Corp solo query, no despliega servicio",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719575,
          "date": "Fri 06 Mar 2026 17:31",
          "username": "xyztest",
          "content": "correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a legal research AI assistant that uses Amazon Bedrock with an Anthropic Claude foundation model (FM). The AI assistant must retrieve highly relevant case law documents to augment the FM's responses. The AI assistant must identify semantic relationships between legal concepts, specific legal terminology, and citations. The AI assistant must perform quickly and return precise results.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: retrieval case law cần cả ngữ nghĩa (semantic) lẫn khớp chính xác thuật ngữ pháp lý và citation, nhanh và chính xác.</li><li>Ưu tiên: precision + semantic + keyword.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Hybrid search</strong> trên Amazon OpenSearch Service kết hợp vector search (hiểu quan hệ khái niệm) với keyword search (khớp thuật ngữ, citation), rồi dùng <strong>reranker model</strong> của Bedrock để tinh chỉnh độ liên quan.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — default vector search yếu với citation/thuật ngữ chính xác; query expansion không thay thế được keyword matching.</li><li><strong>B</strong>: ✅ Đúng — hybrid (vector + keyword) + reranker cho kết quả chính xác và nhanh.</li><li><strong>C</strong>: ❌ Sai — query suggestion chỉ gợi ý truy vấn cho người dùng; post-processing bằng LLM chậm và không cải thiện retrieval.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda tự merge với RDS filter là phức tạp, chậm, khó bảo trì.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Hybrid search, vector + keyword, reranker, OpenSearch, Titan embeddings</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"thuật ngữ/citation chính xác + semantic\" → nghĩ ngay đến <strong>hybrid search + reranker</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Bedrock knowledge base to use a default vector search configuration. Use Amazon Bedrock to expand queries to improve retrieval for legal documents based on specific terminology and citations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch service to deploy a hybrid search architecture that combines vector search with keyword search. Apply an Amazon Bedrock reranker model to optimize result relevance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable the Amazon Kendra query suggestion feature for end users. Use Amazon Bedrock to perform post-processing of search results to identify semantic similarity in the documents and to produce precise results.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Service with vector search and Amazon Bedrock Titan embeddings to index and search legal documents. Use custom AWS Lambda functions to merge results with keyword-based filters that are stored in an Amazon RDS database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 65 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1755219,
          "date": "Tue 12 May 2026 01:06",
          "username": "Kimzia",
          "content": "Amazon Bedrock reranker model to optimize result relevance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1740706,
          "date": "Fri 27 Mar 2026 12:55",
          "username": "awsguruji",
          "content": "B -&gt; relevant == reranker",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1721015,
          "date": "Thu 12 Mar 2026 21:23",
          "username": "eesa",
          "content": "✅ Hybrid search: Vector (semantic) + keyword (exact terminology/citations)<br>✅ Vector search: Identifica semantic relationships entre conceptos legales<br>✅ Keyword search: Captura specific legal terminology y citations exactas<br>✅ Bedrock reranker: Optimiza relevancia de resultados<br>✅ Fast performance: OpenSearch optimizado para búsquedas rápidas<br>✅ Precise results: Reranker mejora precisi",
          "upvote_count": "2",
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
      "question_text": "<p>A company deploys multiple Amazon Bedrock based generative AI (GenAI) applications across multiple business units for customer service, content generation, and document analysis. Some applications show unpredictable token consumption patterns. The company requires a comprehensive observability solution that provides real-time visibility into token usage patterns across multiple models. The observability solution must support custom dashboards for multiple stakeholder groups and provide alerting capabilities for token consumption across all the foundational models that the company's applications use.<br/>Which combination of solutions will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: observability cho token usage của nhiều ứng dụng/model, dashboard tùy chỉnh cho nhiều nhóm, alerting.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong> → dùng dịch vụ native của CloudWatch, chọn đủ 2 đáp án.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>C dùng metric native của Bedrock trong CloudWatch dashboards + alarms để có real-time visibility và alert. B bổ sung Logs Insights trên invocation logs để phân tích usage theo application.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Amazon QuickSight thêm dịch vụ phải quản lý, không phải real-time và không có alerting.</li><li><strong>B</strong>: ✅ Đúng — Logs Insights cho attribution theo application, log widgets trên dashboard.</li><li><strong>C</strong>: ✅ Đúng — native metrics + CloudWatch alarms cho ngưỡng token.</li><li><strong>D</strong>: ❌ Sai — không có zero-ETL integration kiểu này giữa Bedrock và Amazon Managed Grafana; thêm dịch vụ cần vận hành.</li><li><strong>E</strong>: ❌ Sai — pipeline EventBridge, Firehose, OpenSearch Serverless quá nhiều thành phần, overhead cao.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch metrics, CloudWatch alarms, Logs Insights, invocation logs, token usage</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"token usage + dashboard + alarm + least overhead\" → nghĩ ngay đến <strong>CloudWatch native metrics + Logs Insights</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudWatch metrics as data sources to create custom Amazon QuickSight dashboards that show token usage trends and usage patterns across FMs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch Logs Insights to analyze Amazon Bedrock invocation logs for token consumption patterns and usage attribution by application. Create custom queries to identify high-usage scenarios. Add log widgets to dashboards to enable continuous monitoring.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create custom Amazon CloudWatch dashboards that combine native Amazon Bedrock token and invocation CloudWatch metrics. Set up CloudWatch alarms to monitor token usage thresholds.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create dashboards that show token usage trends and patterns across the company's FMs by using an Amazon Bedrock zero-ETL integration with Amazon Managed Grafana.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement Amazon EventBridge rules to capture Amazon Bedrock model invocation events. Route token usage data to an Amazon Data Firehose delivery stream that targets Amazon OpenSearch Serverless. Use OpenSearch dashboards to analyze usage patterns.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 66 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1731689,
          "date": "Fri 20 Mar 2026 19:22",
          "username": "AM_aws",
          "content": "CloudWatch --&gt; GenAI Observability<br><div>Replies:</div><ul><li>BC - not only B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1731690,
          "date": "Fri 20 Mar 2026 19:23",
          "username": "AM_aws",
          "content": "BC - not only B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1721814,
          "date": "Mon 16 Mar 2026 10:43",
          "username": "StelSen",
          "content": "Option-C: is the cleanest way to get near real-time visibility and alerting with the least overhead. Amazon Bedrock publishes native CloudWatch runtime metrics such as InputTokenCount and OutputTokenCount, and can graph them in CloudWatch and set alarms on thresholds.<br>Option-B: complements that by giving deeper usage-pattern analysis and attribution by application from Bedrock model invocation logs in CloudWatch Logs. Bedrock invocation logging can send request/response data and metadata to CloudWatch Logs, and CloudWatch Logs Insights can query those logs and its results can be added as log widgets to dashboards.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1721098,
          "date": "Fri 13 Mar 2026 07:56",
          "username": "taka5094",
          "content": "D: Bedrock's zero-ETL integration and Managed Grafana requires the configuration and management of additional services, increasing operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1721018,
          "date": "Thu 12 Mar 2026 21:26",
          "username": "eesa",
          "content": "✅ Native Bedrock metrics: CloudWatch metrics automáticos sin configuración<br>✅ Custom dashboards: Soporte para múltiples stakeholders<br>✅ CloudWatch alarms: Alerting nativo para thresholds<br>✅ Real-time visibility: Métricas en tiempo real<br>✅ Mínimo overhead: Servicios managed, sin ETL<br>✅ CloudWatch Logs Insights: Análisis detallado de invocation logs<br>✅ Usage attribution: Identifica consumo por aplicación<br>✅ Custom queries: Flexible para high-usage scenarios<br>✅ Log widgets: Integración con dashboards<br>✅ Continuous monitoring: Queries programadas",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1719576,
          "date": "Fri 06 Mar 2026 17:36",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:CD"
        },
        {
          "id": 1719345,
          "date": "Thu 05 Mar 2026 21:08",
          "username": "GiorgioGss",
          "content": "Closest to the requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BC"
        }
      ]
    },
    {
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a solution that uses foundation models (FMs) to support multiple AI workloads. Some FMs must be invoked on demand and in real time. Other FMs require consistent high-throughput access for batch processing.<br/>The solution must support hybrid deployment patterns and run workloads across cloud infrastructure and on-premises infrastructure to comply with data residency and compliance requirements.<br/>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: workload on-demand realtime + batch cần throughput ổn định, và phải chạy hybrid (cloud + on-premises) vì data residency.</li><li>Ưu tiên: throughput nhất quán và hybrid deployment. Chọn 2 đáp án.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>B (<strong>provisioned throughput</strong>) đảm bảo throughput nhất quán cho batch lớn. C triển khai FM bằng SageMaker AI với edge deployment (SageMaker Neo) để chạy ở on-premises, đáp ứng hybrid.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — asynchronous endpoint không phải low-latency realtime, và không giải quyết on-premises.</li><li><strong>B</strong>: ✅ Đúng — provisioned throughput cho hiệu năng ổn định, high-volume.</li><li><strong>C</strong>: ✅ Đúng — edge/hybrid deployment đáp ứng data residency.</li><li><strong>D</strong>: ❌ Sai — auto-scaling xử lý traffic đột biến, không giải quyết hybrid/on-premises hay throughput nhất quán.</li><li><strong>E</strong>: ❌ Sai — SageMaker JumpStart chỉ host trên AWS, không đáp ứng hybrid on-premises.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Provisioned throughput, hybrid deployment, SageMaker Neo, edge, data residency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"throughput ổn định\" → <strong>provisioned throughput</strong>; gặp \"on-premises/data residency\" → <strong>edge/hybrid deployment</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda to orchestrate low-latency FM inference by invoking FMs hosted on Amazon SageMaker AI asynchronous endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure provisioned throughput in Amazon Bedrock to ensure consistent performance for high-volume workloads.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy FMs to Amazon SageMaker AI endpoints with support for edge deployment by using Amazon SageMaker Neo. Orchestrate the FMs by using AWS Lambda to support hybrid deployment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock with auto-scaling to handle unpredictable traffic surges.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker JumpStart to host and invoke the FMs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 67 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758833,
          "date": "Thu 21 May 2026 18:12",
          "username": "Naaser",
          "content": "Choice B (High Throughput &amp; Consistency): Amazon Bedrock Provisioned Throughput is specifically designed for workloads requiring consistent, high-volume access. It provides dedicated capacity for a foundation model, ensuring that batch processing or heavy real-time traffic is not subject to the rate limits or latency fluctuations of the on-demand shared pool.Choice C (Hybrid &amp; On-Premises Deployment): To meet data residency and compliance requirements that demand on-premises processing, Amazon SageMaker Neo is the key. Neo optimizes models for specific hardware and allows them to be deployed at the edge or on local infrastructure. AWS Lambda (specifically via AWS IoT Greengrass) can then orchestrate these models in a hybrid environment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1751839,
          "date": "Wed 29 Apr 2026 08:17",
          "username": "Chibuzo1",
          "content": "Bedrock provisioned throughput for consistent batch processing (B) + SageMaker with edge deployment for hybrid cloud/on-premises patterns with data residency compliance (C). The two services complement each other — Bedrock handles the high-throughput cloud workloads, SageMaker handles the hybrid deployment flexibility.compliance — together covering every stated requirement across both deployment patterns.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BC"
        },
        {
          "id": 1745049,
          "date": "Fri 10 Apr 2026 01:59",
          "username": "de1612d",
          "content": "C is not correct because **Amazon SageMaker Neo is designed for edge deployment optimization, not for managing hybrid cloud/on-prem FM workloads or real-time and high-throughput inference. It does not address the core requirements of scalability, throughput consistency, or hybrid infrastructure execution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1721019,
          "date": "Thu 12 Mar 2026 21:27",
          "username": "eesa",
          "content": "✅ Consistent high-throughput: Provisioned throughput garantiza capacidad para batch processing<br>✅ Batch processing: Ideal para workloads predecibles de alto volumen<br>✅ Cloud infrastructure: Bedrock es servicio cloud managed<br>✅ On-demand real-time: SageMaker endpoints para invocación en tiempo real<br>✅ Hybrid deployment: SageMaker Neo compila modelos para edge/on-premises<br>✅ Data residency: Deployment on-premises cumple compliance<br>✅ Lambda orchestration: Coordina workloads híbridos",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BC"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to deploy multiple generative AI (GenAI) applications to five independent business units that operate in multiple countries in Europe and the Americas. Each application uses Amazon Bedrock Retrieval Augmented Generation (RAG) patterns with business unit-specific knowledge bases that store terabytes of unstructured data.<br/>The company must establish well-architected, standardized components for security controls, observability practices, and deployment patterns across all the GenAI applications. The components must be reusable, versioned, and governed consistently.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuẩn hóa security, observability, deployment pattern cho nhiều business unit; component phải reusable, versioned, governed nhất quán.</li><li>Ưu tiên: IaC + version control + enforcement tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFormation templates theo Well-Architected Generative AI Lens, lưu trong repository có version control, và CI/CD pipeline tích hợp <strong>CloudFormation Guard</strong> để enforce policy trước khi deploy, đảm bảo nhất quán và lặp lại được.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Guard chạy sau deployment (phát hiện muộn), không có versioning/repository chuẩn.</li><li><strong>B</strong>: ✅ Đúng — template + version control + CI/CD + Guard enforce trước khi deploy.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Service Catalog có versioned product nhưng bắt dùng console, thiếu automation/CI/CD và không linh hoạt cho nhiều Region.</li><li><strong>D</strong>: ❌ Sai — tài liệu và Amazon Macie không enforce deployment; giao hết cho từng BU thì không nhất quán.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFormation templates, CloudFormation Guard, version control, CI/CD, Well-Architected Generative AI Lens</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"reusable + versioned + governed\" → nghĩ ngay đến <strong>IaC templates + repo + CI/CD với policy-as-code (Guard)</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>Configure Amazon API Gateway REST API endpoints for the GenAI applications. Deploy common security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens in standardized AWS CloudFormation templates. Use CloudFormation Guard after the deployment to validate policy compliance in each business unit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create standardized AWS CloudFormation templates to implement security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Establish a centralized repository that performs version control. Integrate a CI/CD pipeline with CloudFormation Guard to enforce consistent and repeatable deployments across business units.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Service Catalog to define standardized portfolios and versioned products for each business unit. Use the portfolios to enforce security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Require the business units to use the Service Catalog console to deploy resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Document security controls, observability requirements, and RAG patterns based on the AWS Well-Architected Generative AI Lens in a shared design document. Use Amazon Macie to enforce deployment. Delegate implementation responsibility to each business unit.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 68 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1751841,
          "date": "Wed 29 Apr 2026 08:23",
          "username": "Chibuzo1",
          "content": "It delivers the complete governance lifecycle: standardized templates encode best practices, a centralized repository provides version control and reusability, and a CI/CD pipeline with CloudFormation Guard provides preventive, automated enforcement — ensuring every business unit across every country deploys consistent, compliant GenAI infrastructure without manual intervention.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1751100,
          "date": "Sun 26 Apr 2026 18:24",
          "username": "minime",
          "content": "CloudFormation = building blocks<br>CI/CD = delivery<br>Service Catalog = governance + standardization at scale",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721020,
          "date": "Thu 12 Mar 2026 21:29",
          "username": "eesa",
          "content": "✅ Standardized CloudFormation templates: Componentes reusables y versionados<br>✅ Centralized repository: Version control (Git) para governance<br>✅ CI/CD pipeline: Deployments automatizados y consistentes<br>✅ CloudFormation Guard: Policy enforcement ANTES del deployment<br>✅ Well-Architected GenAI Lens: Best practices incorporadas<br>✅ Repeatable: Mismo template para todas las business units<br>✅ Governed consistently: CI/CD + Guard garantiza compliance",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719577,
          "date": "Fri 06 Mar 2026 17:39",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company upgraded its Amazon Bedrock powered foundation model (FM) that supports a multilingual customer service assistant. After the upgrade, the assistant exhibited inconsistent behavior across languages. The assistant began generating different responses in some languages when presented with identical questions.<br/>The company needs a solution to detect and address similar problems for future updates. The evaluation must be completed within 45 minutes for all supported languages. The evaluation must process at least 15,000 test conversations in parallel. The evaluation process must be fully automated and integrated into the CI/CD pipeline. The solution must block deployment if quality thresholds are not met.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: phát hiện hành vi không nhất quán giữa các ngôn ngữ sau khi nâng cấp FM.</li><li>Requirement: xong trong 45 phút, 15.000 test conversation song song, tự động hóa trong CI/CD, chặn deploy nếu không đạt ngưỡng chất lượng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bộ test đa ngôn ngữ cùng ý nghĩa chạy song song bằng <strong>Amazon Bedrock model evaluation jobs</strong>, áp ngưỡng similarity và hallucination, tích hợp CI/CD để chặn release khi không đạt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — load testing đo latency/throughput, không đo chất lượng/nhất quán ngôn ngữ.</li><li><strong>B</strong>: ❌ Sai — multi-Region và audit hàng tuần là hậu kiểm, không tự động, không chặn deploy.</li><li><strong>C</strong>: ❌ Sai — chuẩn hóa input che mất lỗi đa ngôn ngữ, rule-based khó phát hiện hallucination và không có quality gate.</li><li><strong>D</strong>: ✅ Đúng — đánh giá tự động, song song, có threshold và chặn release trong CI/CD.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock model evaluation jobs, quality threshold, CI/CD gate, multilingual test set</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đánh giá chất lượng FM + block deployment\" → nghĩ ngay đến <strong>model evaluation jobs + CI/CD quality gate</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>Create a distributed traffic simulation framework that sends translation-heavy workloads to the assistant in multiple languages simultaneously. Use Amazon CloudWatch metrics to monitor latency, concurrency, and throughput. Run simulations before production releases to identify infrastructure bottlenecks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the assistant in multiple AWS Regions with Amazon Route 53 latency-based routing and AWS Global Accelerator to improve global performance. Store multilingual conversation logs in Amazon S3. Perform weekly post-deployment audits to review consistency.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a pre-processing pipeline that normalizes all incoming messages into a consistent format before sending the messages to the assistant. Apply rule-based checks to flag potential hallucinations in the outputs. Focus the evaluation on the normalized text to simplify testing across languages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up standardized multilingual test conversations with identical meaning. Run the test conversations in parallel by using Amazon Bedrock model evaluation jobs. Apply similarity and hallucination thresholds. Integrate the process into the CI/CD pipeline to block releases that fail.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 69 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752058,
          "date": "Wed 29 Apr 2026 23:39",
          "username": "Chibuzo1",
          "content": "D , directly addresses the root problem (cross-language semantic inconsistency) with the right methodology (standardized multilingual test cases + similarity metrics), the right infrastructure (Bedrock model evaluation jobs for parallel batch processing), and the right operational integration (CI/CD pipeline with automated quality gates that block deployment on failure).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1746958,
          "date": "Tue 14 Apr 2026 02:46",
          "username": "de1612d",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application has several custom tool integrations. The application has experienced unexpected token consumption surges despite consistent user traffic.<br/>The company needs a solution that uses Amazon Bedrock model invocation logging to monitor InputTokenCount metrics and OutputTokenCount metrics. The solution must detect unusual patterns in tool usage and identify which specific tool integrations cause abnormal token consumption. The solution must also automatically adjust thresholds as traffic patterns change.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: phát hiện token consumption bất thường và truy ra tool integration nào gây ra, từ invocation logs.</li><li>Requirement quyết định: <strong>tự động điều chỉnh ngưỡng</strong> theo traffic thay đổi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Metric filters trích xuất metric theo từng tool từ logs trong CloudWatch Logs, rồi <strong>CloudWatch anomaly detection alarms</strong> tự học baseline và điều chỉnh ngưỡng động.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — static alarm với ngưỡng cố định không tự thích nghi.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Athena báo cáo theo lịch, không gần realtime, không có alarm tự điều chỉnh.</li><li><strong>C</strong>: ✅ Đúng — metric filter theo tool + anomaly detection tự động điều chỉnh baseline.</li><li><strong>D</strong>: ❌ Sai — cập nhật threshold thủ công, tốn vận hành, không tự động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch anomaly detection, metric filters, invocation logging, InputTokenCount/OutputTokenCount</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ngưỡng tự điều chỉnh theo traffic\" → nghĩ ngay đến <strong>CloudWatch anomaly detection alarm</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch dashboards based on InputTokenCount metrics and OutputTokenCount metrics. Configure static CloudWatch alarms with fixed thresholds for each tool integration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store model invocation logs in an Amazon S3 bucket. Use AWS Glue to catalog the logs. Analyze token consumption patterns by using scheduled Amazon Athena queries that generate reports on tool usage trends.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch metric filters to extract tool-specific invocation patterns. Apply CloudWatch anomaly detection alarms that adjust baselines for each tool's metrics.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store model invocation logs in an Amazon S3 bucket. Create an AWS Lambda function to process logs in real time. Manually update Amazon CloudWatch alarm thresholds based on token consumption trends that the Lambda function identifies.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 70 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752060,
          "date": "Wed 29 Apr 2026 23:43",
          "username": "Chibuzo1",
          "content": "CloudWatch Logs for capture, metric filters for tool-level granularity, and anomaly detection alarms for intelligent, self-adjusting baselines — all within a single managed service with zero custom infrastructure and fully automatic threshold adaptation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1751099,
          "date": "Sun 26 Apr 2026 18:01",
          "username": "AndreyShne24",
          "content": "C is the only answer that provides Anomaly detection, the question states dynamic adjustments to traffic patterns, CloudWatch Anomaly detection learns from your usual metric patterns and triggers when it reads an abnormality in the metrics.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1745051,
          "date": "Fri 10 Apr 2026 02:20",
          "username": "de1612d",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721021,
          "date": "Thu 12 Mar 2026 21:31",
          "username": "eesa",
          "content": "✅ CloudWatch Logs: Captura model invocation logs automáticamente<br>✅ Metric filters: Extrae tool-specific patterns de logs<br>✅ Anomaly detection: Detecta unusual patterns automáticamente<br>✅ Auto-adjusting thresholds: Baselines se ajustan con traffic patterns<br>✅ Tool-specific monitoring: Identifica qué tool causa consumo anormal<br>✅ Real-time detection: CloudWatch alarms en tiempo real",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1717829,
          "date": "Sat 28 Feb 2026 14:51",
          "username": "67bdb19",
          "content": "I’d roll with D — seems like the most solid choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Bedrock to develop an AI-powered application that uses a foundation model (FM) that supports cross-Region inference and provisioned throughput. The application must serve users in Europe and North America with consistently low latency. The application must comply with data residency regulations that require European user data to remain within Europe-based AWS Regions.<br/>During testing, the application experiences service degradation when Regional traffic spikes reach service quotas. The company needs a solution that maintains application resilience and minimizes operational complexity.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ứng dụng phục vụ Europe và North America, dữ liệu EU phải ở trong Europe, chịu được traffic spike chạm quota.</li><li>Ưu tiên: resilience và <strong>minimize operational complexity</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region inference profiles</strong> theo geography (ví dụ prefix EU / US) tự động phân phối traffic giữa các Region trong cùng địa lý, tăng throughput và giữ data residency. Chỉ cần route người dùng tới đúng profile.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — custom routing và cảnh báo email không tự xử lý quota, tốn vận hành.</li><li><strong>B</strong>: ✅ Đúng — geographic inference profile, ít phức tạp, giữ dữ liệu trong khu vực.</li><li><strong>C</strong>: ❌ Sai — failover sang Region phụ \"gần nhất\" có thể vi phạm data residency, tự code retry/routing phức tạp.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — provisioned throughput nhiều Region tốn kém, failover tự code phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region inference profile, geographic code, data residency, quota</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chạm quota + data residency theo vùng\" → nghĩ ngay đến <strong>geographic cross-Region inference profile</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>Deploy separate Amazon Bedrock instances in North American and European Regions. Use a custom routing layer that directs traffic based on user location. Configure Amazon CloudWatch alarms to monitor Regional service usage. Use Amazon SNS to send email alerts to the company when usage approaches specified thresholds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock cross-Region inference profiles by specifying geographical codes in profile IDs when the application calls the InvokeModel API. Configure separate Amazon API Gateway HTTP APIs to direct European and North American users to the appropriate Regional endpoints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a multi-Region Amazon API Gateway HTTP API and AWS Lambda functions that implement retry logic to handle throttling. Configure the Lambda functions to call the FM in the nearest secondary Region when the application reaches service quotas in the primary Region. Use intelligent routing to ensure compliance with data residency requirements.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure provisioned throughput for Amazon Bedrock in multiple Regions. Implement failover logic in the application code to switch between Regions when throttling occurs. Use AWS Global Accelerator to route traffic to the appropriate endpoints based on user location.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 71 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1745052,
          "date": "Fri 10 Apr 2026 02:27",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1721024,
          "date": "Thu 12 Mar 2026 21:32",
          "username": "eesa",
          "content": "✅ Cross-Region inference profiles: Feature nativo de Bedrock para multi-región<br>✅ Geographical codes: Garantiza data residency (EU data en EU regions)<br>✅ Automatic load distribution: Bedrock distribuye carga entre regiones<br>✅ Low latency: Routing geográfico optimizado<br>✅ Resilience: Failover automático entre regiones<br>✅ Minimal complexity: Usa capacidades nativas de Bedrock<br>✅ Compliance: Separate endpoints garantizan data residency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#72",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international company is building an AI assistant that uses RAG. The company wants the AI assistant to have near real-time, low-latency performance. The AI assistant must provide service to several geographic areas. The company's customers will use proprietary data with the AI assistant. The proprietary data must not leave the company's immediate geographic area.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: RAG assistant đa vùng địa lý, low-latency, dữ liệu proprietary không rời khỏi khu vực địa lý của công ty.</li><li>Ưu tiên: data residency + latency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Triển khai Bedrock model, Knowledge Bases (vector DB) và S3 ngay trong từng Region, kèm cross-Region inference profile giới hạn trong địa lý, vừa giữ dữ liệu cục bộ vừa low latency, dùng toàn managed service.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — cross-Region profile không giới hạn địa lý có thể đưa prompt/dữ liệu ra khỏi khu vực; thêm Kendra + Lambda tự ghép.</li><li><strong>B</strong>: ✅ Đúng — mọi thành phần nằm trong từng khu vực, managed, đáp ứng residency.</li><li><strong>C</strong>: ❌ Sai — model ở Region trung tâm làm dữ liệu rời khỏi vùng; Outposts phức tạp và không cần thiết.</li><li><strong>D</strong>: ❌ Sai — tự host LLM trên EC2 ở Local Zones rất phức tạp, tốn kém, không dùng Bedrock.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Data residency, Bedrock Knowledge Bases, regional deployment, inference profile</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"dữ liệu không rời khỏi khu vực + RAG\" → nghĩ ngay đến <strong>Knowledge Bases + S3 theo từng Region</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon Bedrock model with a cross-Region model inference profile. Create Amazon S3 buckets in each AWS Region the company operates in. Store a knowledge base in each respective S3 bucket. In each Region, configure Amazon Kendra to interact with the respective knowledge base. In each Region, configure an AWS Lambda function that uses Kendra and Amazon Bedrock to process AI assistant prompts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon Bedrock model in each AWS Region the company operates in. Configure an Amazon Bedrock cross-Region model inference profile. Configure a vector database that uses Amazon Bedrock Knowledge Bases. Store the knowledge bases in Amazon S3 in each Region the company operates in.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Outposts to deploy an outpost in each AWS Region the company operates in. Create Amazon S3 buckets to store knowledge bases in each corresponding Region. Deploy Amazon RDS configured as a vector database to each outpost. Deploy an Amazon Bedrock model with a cross-Region inference profile in a central Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a knowledge base stored in the Amazon S3 Express One Zone storage class in each AWS Local Zone the company operates in. Use Amazon RDS to deploy a vector database in each Local Zone the company operates in. Deploy a large language model (LLM) to Amazon EC2 instances in each Local Zone. Configure the AI assistant to route prompts to the model in the respective Local Zone.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 72 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1759676,
          "date": "Tue 26 May 2026 04:31",
          "username": "HarryNZ1982",
          "content": "D is the correct answer as that is the only option that meets the following <br>Data residency: S3 Express One Zone + RDS vector DB + EC2 LLMs are all deployed per Local Zone. Proprietary data and prompts never leave that Local Zone.<br>Low latency: Local Zones place compute/storage very close to end users. S3 Express One Zone is designed for single-digit ms latency.<br>No cross-region inference: The LLM runs locally on EC2, so no data goes to Bedrock in another region.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1758741,
          "date": "Thu 21 May 2026 08:17",
          "username": "jyrajan69",
          "content": "D is the right answer, all others break the strict data sovereign rule, Deploys everything within each AWS Local Zone:",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721027,
          "date": "Thu 12 Mar 2026 21:40",
          "username": "eesa",
          "content": "La pregunta menciona \"AI assistant that uses RAG\"<br>En el contexto de AWS, RAG + AI assistant → Amazon Bedrock Knowledge Bases es la solución nativa y recomendada<br>Opción B usa Bedrock Knowledge Bases (patrón correcto)<br>Opción D usa LLM en EC2 (sale del scope de Bedrock)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719356,
          "date": "Thu 05 Mar 2026 21:37",
          "username": "GiorgioGss",
          "content": "meets low latency, RAG requirements, multi-region support, and strict data residency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a generative AI (GenAI) application that processes financial reports and provides summaries for analysts. The application must run two compute environments. In one environment, AWS Lambda function must use the Python SDK to analyze reports on demand. In the second environment, Amazon EKS containers must use the JavaScript SDK to batch process multiple reports on a schedule. The application must maintain conversational context throughout multi-tum interactions, use the same foundation model (FM) across environments, and ensure consistent authentication.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cùng FM dùng trong Lambda (Python SDK) và EKS (JavaScript SDK), cần giữ ngữ cảnh hội thoại multi-turn và authentication nhất quán.</li><li>Ưu tiên: API thống nhất, đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Converse API</strong> có giao diện thống nhất cho mọi model, hỗ trợ multi-turn qua messages array. IAM roles cho authentication nhất quán ở cả Lambda và EKS, mỗi môi trường dùng SDK riêng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — InvokeModel buộc format riêng từng model, mỗi môi trường auth khác nhau, trái yêu cầu nhất quán.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Converse + IAM đúng, nhưng thêm ElastiCache và wrapper riêng theo ngôn ngữ là thừa.</li><li><strong>C</strong>: ❌ Sai — lưu lịch sử trong process memory sẽ mất ngữ cảnh; API Gateway + InvokeModel thêm phức tạp.</li><li><strong>D</strong>: ✅ Đúng — Converse API + IAM roles + truyền lịch sử trong messages array.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Converse API, IAM roles, messages array, multi-turn, unified interface</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"multi-turn + nhiều môi trường/ngôn ngữ + cùng model\" → nghĩ ngay đến <strong>Converse API</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>Use the Amazon Bedrock InvokeModel API with a separate authentication method for each environment. Store conversation states in Amazon DynamoDB. Use custom I/O formatting logic for each programming language.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Bedrock Converse API directly in both environments with a common authentication mechanism that uses IAM roles. Store conversation states in Amazon ElastiCache. Creating programming language-specific wrappers for model parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a centralized Amazon API Gateway REST API endpoint that handles all model interactions by using the InvokeModel API. Store interaction history in application process memory in each Lambda function or EKS container. Use environment variables to configure model parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Bedrock Converse API and IAM roles for authentication. Pass previous messages in the request messages array to maintain conversational context. Use programming language-specific SDKs to establish consistent API interfaces.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 73 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752070,
          "date": "Thu 30 Apr 2026 02:34",
          "username": "Chibuzo1",
          "content": "Converse API was designed precisely for this scenario — a unified interface across programming languages and FMs, with built-in multi-turn context management via the messages array, and IAM roles providing consistent authentication across Lambda and EKS without any custom code or external state infrastructure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747635,
          "date": "Wed 15 Apr 2026 12:53",
          "username": "2d5eb96",
          "content": "Option D is the only solution that fully satisfies all requirements through:<br>Native Converse API support in both Python and JavaScript SDKs<br>Consistent IAM role-based authentication<br>Stateless conversational context via message array<br>Model-agnostic API ensuring FM consistency<br>No unnecessary infrastructure complexity",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721029,
          "date": "Thu 12 Mar 2026 21:42",
          "username": "eesa",
          "content": "Dos entornos diferentes: Lambda (Python SDK) + EKS (JavaScript SDK)<br>Mantener contexto conversacional en interacciones multi-turn<br>Mismo FM en ambos entornos<br>Autenticación consistente",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1719357,
          "date": "Thu 05 Mar 2026 21:40",
          "username": "GiorgioGss",
          "content": "Could be also B but storing message outside is not needed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a serverless application that uses AWS Lambda functions to help students around the world summarize notes. The application uses Anthropic Claude through Amazon Bedrock. The company observed that most of the traffic occurs during evenings in each time zone. Users report experiencing throttling errors during peak usage times in their times zones.<br/>The company needs to resolve the throttling issues by ensuring continuous operation of the application. The solution must maintain application performance quality. The company needs a solution that does not require a fixed hourly cost during low traffic periods.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: throttling vào giờ cao điểm theo múi giờ, cần hoạt động liên tục, giữ chất lượng.</li><li>Ràng buộc quyết định: <strong>không có chi phí cố định theo giờ</strong> khi traffic thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region inference</strong> phân phối request qua nhiều Region, tận dụng quota lớn hơn, tính phí on-demand nên không có chi phí cố định. Monitor Invocation Throttles để theo dõi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — provisioned throughput tính phí cố định theo giờ, trái yêu cầu.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — failover tự xây phản ứng sau khi lỗi, tăng phức tạp.</li><li><strong>C</strong>: ✅ Đúng — cross-Region inference giảm throttling, không tốn phí cố định.</li><li><strong>D</strong>: ❌ Sai — phiên bản khác của cùng model không tăng quota; metric theo dõi không giải quyết throttling.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region inference, Invocation Throttles, on-demand, no fixed hourly cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"throttling + không muốn phí cố định\" → nghĩ ngay đến <strong>cross-Region inference</strong> (không phải provisioned throughput).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>Create custom Amazon CloudWatch metrics to monitor model errors. Set provisioned throughput to a value that is safely higher than the peak traffic observed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create custom Amazon CloudWatch metrics to monitor model errors. Set up a failover mechanism to redirect invocations to a backup AWS Region when the errors exceed a specified threshold.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable invocation logging in Amazon Bedrock. Monitor key metrics such as Invocations, InputTokenCount, OutputTokenCount, and Invocation Throttles. Distribute traffic across cross-Region inference endpoints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable invocation logging in Amazon Bedrock. Monitor InvocationLatency, InvocationClientErrors, and InvocationServerErrors metrics. Distribute traffic across multiple versions of the same model.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 74 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752072,
          "date": "Thu 30 Apr 2026 02:38",
          "username": "Chibuzo1",
          "content": "Cross-Region inference profiles are purpose-built for exactly this scenario — globally distributed traffic with rolling peak windows across time zones — providing on-demand, pay-per-use load distribution across AWS Regions without any fixed hourly reservation cost.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1719359,
          "date": "Thu 05 Mar 2026 21:42",
          "username": "GiorgioGss",
          "content": "cross-Region inference handle peak traffic",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new AI-powered application that needs to integrate with various specialized tools. These tools currently run as Model Context Protocol (MCP) servers on the local machines of developers and do not maintain states between invocations. The company plans to deploy each MCP server as an AWS Lambda function to support the company's production application.<br/>The solution must be accessible to both internal applications and authorized third-party partners. The solution must use strict authentication and authorization controls.<br/>Which additional steps will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển MCP server (stateless) lên AWS Lambda, cho internal app và third-party partners truy cập với authentication/authorization chặt.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, vẫn giữ giao thức MCP.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda function URLs</strong> với Streamable HTTP transport và <strong>SigV4/IAM auth</strong> (quyền InvokeFunctionUrl) cho truy cập bảo mật mà không cần thêm dịch vụ nào, phù hợp MCP stateless.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — custom transport qua Invoke API không theo chuẩn MCP HTTP, khó cho partner bên ngoài.</li><li><strong>B</strong>: ❌ Sai — API keys không phải authentication chặt, bỏ giao thức MCP.</li><li><strong>C</strong>: ✅ Đúng — function URL + Streamable HTTP + SigV4, ít thành phần nhất.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — API Gateway HTTP API + Cognito OAuth hoạt động nhưng thêm nhiều dịch vụ cần cấu hình/vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda function URLs, Streamable HTTP, SigV4, InvokeFunctionUrl, MCP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"MCP server trên Lambda + IAM auth + least overhead\" → nghĩ ngay đến <strong>function URL + SigV4</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>Create a custom Lambda invocation transport by using the Lambda Invoke API. Implement IAM authentication and grant InvokeFunction permissions to authorized users and roles.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Expose the Lambda functions through Amazon API Gateway REST API endpoints. Implement API keys for authentication. Configure the applications that need to access the MCP servers to use standard HTTP requests instead of the MCP protocol.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Lambda function URLs and enable a custom Streamable HTTP transport and SigV4. Implement AWS IAM authentication. Grant InvokeFunctionUrl permissions to authorized users and roles.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Expose the Lambda function through Amazon API Gateway HTTP API endpoints with the Streamable HTTP transport. Use Amazon Cognito to implement OAuth authentication. Configure API Gateway to validate OAuth tokens.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 75 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758838,
          "date": "Thu 21 May 2026 18:31",
          "username": "Naaser",
          "content": "Lowest Operational Overhead: Lambda Function URLs are a simpler way to provide dedicated HTTP(S) endpoints compared to managing Amazon API Gateway.MCP Compatibility: The Streamable HTTP transport is a core part of the Model Context Protocol. It allows for long-running connections or chunked data transfer, which is necessary for the protocol's communication patterns.Strong Security: Using AWS IAM (SigV4) authentication is the most robust way to secure the endpoint. It ensures that only specifically authorized AWS users, roles, or third-party partners (via cross-account roles) can invoke the tools.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1758460,
          "date": "Tue 19 May 2026 05:19",
          "username": "Kimzia",
          "content": "it uses the native Lambda Invoke API to access the stateless MCP servers directly, while IAM authentication and InvokeFunction permissions provide strict access control for both internal applications and authorized third-party partners with the least operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1751098,
          "date": "Sun 26 Apr 2026 17:39",
          "username": "AndreyShne24",
          "content": "I think D is the answer since the question states to support third-party partners, Cognito is good for these types of situations, C for example is good if it is AWS to AWS only in which the question doesn't explicitly say",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1741045,
          "date": "Fri 27 Mar 2026 18:56",
          "username": "Kraftzman",
          "content": "To fulfill the requirements with the least operational overhead while providing strict security for your Model Context Protocol (MCP) servers, the most efficient solution is to leverage Lambda Function URLs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1721030,
          "date": "Thu 12 Mar 2026 21:46",
          "username": "eesa",
          "content": "MCP servers stateless → Lambda es ideal<br>Accesible a aplicaciones internas Y partners externos<br>Autenticación y autorización estrictas<br>LEAST operational overhead<br>Mantener compatibilidad con MCP protocol",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1719360,
          "date": "Thu 05 Mar 2026 21:46",
          "username": "GiorgioGss",
          "content": "\"LEAST operational overhead\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a generative AI (GenAI) application that uses Amazon Bedrock to provide real-time responses to customer queries. The company has noticed intermittent failures with API calls to foundation models (FMs) during peak traffic periods.<br/>The company needs a solution to handle transient errors and provide detailed observability into FM performance. The solution must prevent cascading failures during throttling events and provide distributed tracing across service boundaries to identify latency contributors. The solution must also enable correlation of performance issues with specific FM characteristics.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý lỗi tạm thời khi gọi FM lúc cao điểm, tránh cascading failure khi throttling, cần distributed tracing và liên hệ hiệu năng với đặc tính FM.</li><li>Ưu tiên: retry thông minh + tracing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SDK <strong>standard retry mode</strong> với <strong>exponential backoff + jitter</strong> tránh retry dồn dập gây cascading failure. <strong>AWS X-Ray</strong> tracing với annotations cho distributed tracing và lọc theo đặc tính FM (model ID, v.v.).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — fixed delay 1 giây gây retry đồng loạt (thundering herd); CloudWatch không có distributed tracing.</li><li><strong>B</strong>: ✅ Đúng — backoff + jitter và X-Ray annotations.</li><li><strong>C</strong>: ❌ Sai — cache toàn bộ response không xử lý lỗi tạm thời; logging tự viết không phải distributed tracing.</li><li><strong>D</strong>: ❌ Sai — AWS CloudTrail ghi audit API call, không có distributed tracing.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Exponential backoff with jitter, AWS X-Ray, annotations, distributed tracing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"transient errors + tracing xuyên service\" → nghĩ ngay đến <strong>backoff + jitter</strong> và <strong>X-Ray</strong> (CloudTrail không phải tracing).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
          "answers": [
            {
              "choice": "<p>Implement a custom retry mechanism with a fixed delay of 1 second between retries. Configure Amazon CloudWatch alarms to monitor the application's error rates and latency metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the AWS SDK with standard retry mode and exponential backoff with jitter. Use AWS X-Ray tracing with annotations to identify and filter service components.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement client-side caching of all FM responses. Add custom logging statements in the application code to record API call durations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the AWS SDK with adaptive retry mode. Use AWS CloudTrail distributed tracing to monitor throttling events.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 76 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758839,
          "date": "Thu 21 May 2026 18:35",
          "username": "Naaser",
          "content": "Handling Transient Errors: The AWS SDK standard retry mode with exponential backoff and jitter is the AWS-recommended way to handle transient errors and throttling. Jitter prevents \"thundering herd\" issues where multiple clients retry at the exact same time, further overwhelming the service.Distributed Tracing: AWS X-Ray provides end-to-back visibility across service boundaries (e.g., from an API Gateway to Lambda to Amazon Bedrock). It allows you to see exactly where delays or failures occur in the request lifecycle.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1752075,
          "date": "Thu 30 Apr 2026 02:52",
          "username": "Chibuzo1",
          "content": "The answer is B because exponential backoff with jitter is the AWS-recommended pattern for preventing cascading failures during throttling, and X-Ray with annotations is the native distributed tracing solution that spans service boundaries and enables correlation of performance issues with specific FM characteristics — together addressing every stated requirement with managed AWS services and minimal custom code.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1745059,
          "date": "Fri 10 Apr 2026 02:57",
          "username": "de1612d",
          "content": "Answer is D<br><div>Replies:</div><ul><li>Not D,Answer B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1745060,
          "date": "Fri 10 Apr 2026 02:57",
          "username": "de1612d",
          "content": "Not D,Answer B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1719362,
          "date": "Thu 05 Mar 2026 21:48",
          "username": "GiorgioGss",
          "content": "Could be D but it is incomplete.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1717835,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "Pretty sure it's A. This pattern is very common.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a video analysis platform on AWS. The platform will analyze a large video archive by using Amazon Rekognition and Amazon Bedrock. The platform must comply with predefined privacy standards. The platform must also use secure model I/O, control foundation model (FM) access patterns, and provide an audit of who accessed what and when.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: nền tảng phân tích video bằng Amazon Rekognition và Bedrock, cần tuân thủ privacy, secure model I/O, kiểm soát truy cập FM và audit \"ai truy cập gì, khi nào\".</li><li>Ưu tiên: access control + audit toàn diện.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>IAM ABAC với condition keys ép GuardrailIdentifier và ModelId kiểm soát truy cập FM, VPC endpoints bảo mật I/O, còn CloudTrail (management + data events cho S3 và KMS) gửi vào CloudTrail Lake kèm S3 server access logging cho audit đầy đủ, CloudWatch alarms cho cảnh báo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — có guardrails/mã hóa nhưng thiếu kiểm soát truy cập theo IAM và audit ai-truy-cập-gì từ CloudTrail.</li><li><strong>B</strong>: ✅ Đúng — kiểm soát truy cập chi tiết + audit đầy đủ.</li><li><strong>C</strong>: ❌ Sai — VPC endpoint policy và AWS Config chưa cho audit người dùng/hành vi truy cập FM.</li><li><strong>D</strong>: ❌ Sai — Insights và Amazon Macie phát hiện bất thường/phân loại, không kiểm soát truy cập FM.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM condition keys, GuardrailIdentifier, CloudTrail Lake, VPC endpoints, audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ai truy cập gì, khi nào\" → nghĩ ngay đến <strong>CloudTrail (data events) + IAM condition keys</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>Configure VPC endpoints for Amazon Bedrock model API calls. Implement Amazon Bedrock Guardrails to filter harmful or unauthorized content in prompts and responses. Use Amazon Bedrock trace events to track all agent and model invocations for auditing purposes. Export the traces to Amazon CloudWatch Logs as an audit record of model usage. Store all prompts and outputs in Amazon S3 with server-side encryption with AWS KMS keys (SSE-KMS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define access control by using IAM with attribute-based controls to map departments to specific permissions. Configure VPC endpoints for Amazon Bedrock model API calls. Use IAM condition keys to enforce specific GuardrailIdentifier and ModelId values. Configure AWS CloudTrail to capture management and data events for S3 objects and KMS key usage activities. Enable S3 server access logging to record detailed file-level interactions with the video archives. Send all CloudTrail logs to AWS CloudTrail Lake. Set up Amazon CloudWatch alarms to detect and alert on unexpected activity from Amazon Bedrock, Amazon Rekognition, and AWS KMS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Restrict access to services by using VPC endpoint policies. Use AWS Config to track resource changes and compliance with security rules. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt data at rest. Store the model's I/O in separate Amazon S3 buckets. Enable S3 server access logging to track file-level interactions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS CloudTrail Insights to analyze API call patterns across accounts and detect anomalous activity in Amazon Bedrock, Amazon Rekognition, Amazon S3, and AWS KMS. Deploy Amazon Macie to scan and classify the video archive. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all stored data. Configure CloudTrail to capture KMS API usage events for audit purposes. Configure Amazon EventBridge rules to process CloudTrail Insights anomalies and Macie findings. Use CloudWatch alarms to trigger automated notifications and security responses when potential security issues are detected.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 77 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758840,
          "date": "Thu 21 May 2026 18:37",
          "username": "Naaser",
          "content": "Strict Access Patterns: Using IAM condition keys to enforce specific GuardrailIdentifier and ModelId ensures that users can only interact with approved models and that every request must pass through a security guardrail.Secure Model I/O: Implementing VPC endpoints ensures that traffic to Amazon Bedrock and Rekognition stays within the AWS network, never traversing the public internet.Comprehensive Audit Trail: Sending CloudTrail management and data events to CloudTrail Lake provides a centralized, immutable, and queryable audit record of \"who accessed what and when,\" including specific interactions with sensitive video data in S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719364,
          "date": "Thu 05 Mar 2026 21:51",
          "username": "GiorgioGss",
          "content": "B is the most complete answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An insurance company uses existing Amazon SageMaker AI infrastructure to support a web-based application that allows customers to predict what their insurance premiums will be. The company stores customer data that is used to train the SageMaker AI model in an Amazon S3 bucket. The dataset is growing rapidly. The company wants a solution to continuously re-train the model. The solution must automatically re-train and re-deploy the model to the application when an employee uploads a new customer data file to the S3 bucket.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tự động re-train và re-deploy model SageMaker AI mỗi khi có file dữ liệu mới được upload lên S3.</li><li>Ưu tiên: workflow tự động, đáng tin cậy, orchestrate được pipeline.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Step Functions <strong>Standard</strong> workflow điều phối: Lambda phản ứng với sự kiện upload, rồi chạy <strong>SageMaker Pipelines</strong> để re-train và re-deploy. Standard phù hợp quy trình chạy lâu như training.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Glue ETL không re-train model; gọi endpoint inference không re-deploy.</li><li><strong>B</strong>: ❌ Sai — webhook handlers và event bus lấy Lambda làm nguồn/ pipeline làm đích lộn xộn, không phải cách trigger chuẩn từ S3.</li><li><strong>C</strong>: ❌ Sai — Express workflow giới hạn 5 phút, không phù hợp quy trình training dài; Autopilot không phải cách re-deploy hạ tầng sẵn có.</li><li><strong>D</strong>: ✅ Đúng — Standard workflow (chạy lâu) + SageMaker Pipelines để retrain/redeploy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SageMaker Pipelines, Step Functions Standard, S3 upload trigger, re-train và re-deploy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"retrain model khi có data mới\" → nghĩ ngay đến <strong>SageMaker Pipelines</strong> điều phối bằng <strong>Step Functions Standard</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>Use AWS Glue to run an ETL job on each uploaded file. Configure the ETL job to use the AWS SDK to invoke the Sage Maker AI model endpoint. Use real-time inference with the endpoint to re-deploy the model after it is re-trained on the updated customer dataset.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function and webhook handlers to generate an event when an employee uploads a new file. Configure SageMaker Pipelines to re-deploy the model after it is re-trained on the updated customer dataset. Use Amazon EventBridge to create an event bus. Set the Lambda function event as the source and SageMaker Pipelines as the target.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions Express workflow with AWS SDK integrations to retrieve the customer data from the S3 bucket when an employee uploads a new file to the S3 bucket. Use a SageMaker Data Wrangler flow to export the data from the S3 bucket to SageMaker Autopilot. Use SageMaker Autopilot to re-deploy the model after it has been re-trained on the updated customer dataset.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions Standard workflow. Configure the first state to call an AWS Lambda function to respond when an employee uploads a new file to the S3 bucket. Use a pipeline in SageMaker Pipelines to re-deploy the model after it has been re-trained on the updated customer dataset. Use the next state in the workflow to run the pipeline when the first state receives a response.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 78 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1741569,
          "date": "Mon 30 Mar 2026 10:24",
          "username": "michele_scar",
          "content": "B mentions webhook and not standard S3 event. Why reinvent the wheel?<br>Lambda as event source for EventBridge - This is backwards; Lambda would be the target, not the source",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1741098,
          "date": "Sat 28 Mar 2026 01:35",
          "username": "Kraftzman",
          "content": "option B describes a \"webhook\" and \"event bus\" setup that is unnecessarily complex. While EventBridge is great, the description of \"Lambda function and webhook handlers\" to generate an event for an S3 upload is redundant because S3 can send events to EventBridge natively. It also lacks a central orchestrator for the retraining logic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1733897,
          "date": "Wed 25 Mar 2026 09:52",
          "username": "ArunRav",
          "content": "S3 automatic triggering lambda, Sagemaker pipelines for model training and deployment, Step function to orchestration is the right approach.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1721032,
          "date": "Thu 12 Mar 2026 21:50",
          "username": "eesa",
          "content": "Trigger automático cuando se sube archivo a S3<br>Re-train model con nuevos datos<br>Re-deploy model automáticamente después del entrenamiento<br>Continuous retraining (proceso repetible)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719586,
          "date": "Fri 06 Mar 2026 18:22",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1719366,
          "date": "Thu 05 Mar 2026 21:57",
          "username": "GiorgioGss",
          "content": "It's B or D... hard one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Bedrock to implement a Retrieval Augmented Generation (RAG)-based system to serve medical information to users. The company needs to compare multiple chunking strategies, evaluate the generation quality of two foundation models (FMs), and enforce quality thresholds for deployment.<br/>Which Amazon Bedrock evaluation configuration will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đánh giá hệ thống RAG của Bedrock: so sánh nhiều chunking strategy, đánh giá chất lượng generation của 2 FM, áp ngưỡng chất lượng cho deployment.</li><li>Ưu tiên: một cấu hình đánh giá toàn bộ pipeline (retrieval + generation).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Retrieve-and-generate evaluation job</strong> đánh giá cả retrieval lẫn generation. Custom metric precision at k cho retrieval, LLM-as-a-judge thang 1-5 cho chất lượng, đưa từng chunking strategy vào dataset và dùng Claude Sonnet làm evaluator cho cả hai FM.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — retrieve-only không đánh giá generation của FM; ngưỡng deployment tách rời.</li><li><strong>B</strong>: ✅ Đúng — retrieve-and-generate, có metric định lượng, so sánh chunking và 2 FM.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — nhiều job riêng lẻ, review thủ công, không enforce ngưỡng tự động.</li><li><strong>D</strong>: ❌ Sai — retrieve-only không đo generation, chia job rời rạc, phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Retrieve-and-generate evaluation, LLM-as-a-judge, precision at k, chunking strategy, quality threshold</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đánh giá RAG cả retrieval lẫn generation\" → nghĩ ngay đến <strong>retrieve-and-generate evaluation job</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>Create a retrieve-only evaluation job that uses a supported version of Anthropic Claude Sonnet as the evaluator model. Configure metrics for context relevance and context coverage. Define deployment thresholds in a separate CI/CD pipeline.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a retrieve-and-generate evaluation job that uses custom precision at k metrics and an LLM-as-a-judge metric that uses a scale of 1-5. Include each chunking strategy in the evaluation dataset. Use a supported version of Anthropic Claude Sonnet to evaluate responses from both FMs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate evaluation job for each chunking strategy and FM combination. Use Amazon Bedrock built-in metrics for correctness and completeness. Manually review scores before deployment approval.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a pipeline that uses multiple retrieve-only evaluation jobs to assess retrieval quality. Create separate evaluation jobs for both FMs that use Amazon Nova Pro as the LLM-as-a-judge model. Evaluate based on faithfulness and citation precision metrics.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 79 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752088,
          "date": "Thu 30 Apr 2026 05:55",
          "username": "Chibuzo1",
          "content": "The answer is B because a single retrieve-and-generate evaluation job with chunking strategies embedded in the dataset, LLM-as-a-judge scoring on a quantitative scale, and Claude Sonnet as the evaluator covers all three requirements — chunking strategy comparison, dual-FM generation quality evaluation, and enforceable numerical deployment thresholds — in one cohesive, minimal-overhead configuration.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719367,
          "date": "Thu 05 Mar 2026 22:00",
          "username": "GiorgioGss",
          "content": "benchmarks often favor Claude as a judge",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A wildlife conservation agency operates zoos globally. The agency uses various sensors, trackers, and audiovisual recorders to monitor animal behavior. The agency wants to launch a generative AI (GenAI) assistant that can ingest multimodal data to study animal behavior.<br/>The GenAI assistant must support natural language queries, avoid speculative behavioral interpretations, and maintain audit logs for ethical research audits.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: GenAI assistant xử lý dữ liệu đa phương thức (sensor, video, audio), hỗ trợ truy vấn ngôn ngữ tự nhiên, tránh diễn giải suy đoán, có audit logs cho kiểm toán đạo đức.</li><li>Ưu tiên: pre-processing đa phương thức, chặn speculation, audit.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SageMaker Processing và Amazon Transcribe tiền xử lý dữ liệu đa phương thức, nạp vào Bedrock RAG knowledge base, <strong>Bedrock guardrails</strong> hạn chế đầu ra mang tính suy đoán, AppConfig quản lý prompt, CloudTrail ghi audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — prompt template cơ bản, không có cơ chế chặn speculation.</li><li><strong>B</strong>: ✅ Đúng — pipeline đa phương thức + guardrails + AppConfig + CloudTrail.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Comprehend chỉ xử lý text, thiếu cơ chế kiểm soát speculation.</li><li><strong>D</strong>: ❌ Sai — Amazon Q Business không federate trực tiếp các nguồn đó; lọc output bằng Lambda tự viết thay vì guardrails.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Bedrock Guardrails, multimodal pre-processing, RAG knowledge base, AWS AppConfig, CloudTrail audit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tránh suy đoán/ngăn output không mong muốn\" → nghĩ ngay đến <strong>Bedrock Guardrails</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>Ingest raw videos into Amazon Rekognition to detect animal postures and expressions. Use Amazon Data Firehose to stream sensor and GPS data into an Amazon S3 data lake. Prompt an Amazon Bedrock foundation model (FM) by using basic templates that are stored in AWS Systems Manager Parameter Store. Use IAM policies to control access. Use AWS CloudTrail for audit logging.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker Processing and Amazon Transcribe to pre-process multimodal data. Ingest summaries into an Amazon Bedrock Retrieval Augmented Generation (RAG) knowledge base. Apply Amazon Bedrock guardrails to restrict speculative outputs. Use AWS AppConfig to manage prompt templates. Use AWS CloudTrail to log research activity for audits.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Serverless to index behavioral logs and telemetry events. Use Amazon Comprehend to extract entities. Use Amazon Bedrock to build a layer to answer questions. Embed study summaries into OpenSearch Serverless documents. Use IAM to control access. Use AWS CloudTrail to log user interactions with the AI assistant.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Q Business to federate data across Amazon S3, Amazon Kinesis, and Amazon SageMaker Feature Store. Configure Amazon EventBridge to invoke data ingestion jobs. Use custom AWS Lambda functions to filter large language model (LLM) outputs for ethical compliance before returning results to users.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 80 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752089,
          "date": "Thu 30 Apr 2026 06:15",
          "username": "Chibuzo1",
          "content": "The answer is B because it is the only option that addresses all three requirements with purpose-built AWS services: SageMaker + Transcribe for multimodal preprocessing, Bedrock RAG for grounded natural language querying, Bedrock Guardrails as an enforceable control against speculative outputs (the most discriminating requirement), and CloudTrail for immutable ethical audit logging.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719368,
          "date": "Thu 05 Mar 2026 22:02",
          "username": "GiorgioGss",
          "content": "For all info you will need a RAG",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an organization in AWS Organizations with all features enabled to manage multiple AWS accounts. Employees use Amazon Bedrock across multiple accounts. The company must prevent specific topics and proprietary information from being included in prompts to Amazon Bedrock models. The company must ensure that employees can use only approved Amazon Bedrock models. The company centrally manages IAM roles for employees.<br/>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quản trị tập trung nhiều account: chỉ cho dùng model được duyệt và chặn topic/thông tin độc quyền trong prompt.</li><li>Requirement chính: guardrail bắt buộc + giới hạn model ở cấp Organization.</li><li>Ưu tiên: central governance, enforcement không thể bị bypass.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP vừa giới hạn model được duyệt, vừa bắt buộc có guardrail identifier (condition key `bedrock:GuardrailIdentifier`) khi gọi model. Guardrail dùng <strong>block</strong> filtering policy triển khai bằng CloudFormation StackSets để mọi account có cùng guardrail.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — permissions boundary phải gắn cho từng role, khó quản lý tập trung và dễ sót.</li><li><strong>B</strong>: ✅ Đúng — một SCP vừa giới hạn model vừa ép guardrail identifier.</li><li><strong>C</strong>: ❌ Sai — vẫn phải tạo permissions boundary trên từng role, tốn công và không tập trung.</li><li><strong>D</strong>: ✅ Đúng — guardrail <strong>block</strong> chặn topic/thông tin cấm, StackSets deploy đồng nhất.</li><li><strong>E</strong>: ❌ Sai — <strong>mask</strong> chỉ che nội dung, không chặn hẳn topic bị cấm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>SCP, `bedrock:GuardrailIdentifier`, Guardrails block, StackSets, Organizations.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Ép guardrail + giới hạn model đa account\" → nghĩ ngay đến SCP + StackSets guardrail.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>Create an IAM permissions boundary for each employee's IAM role. Configure the permissions boundary to require an approved Amazon Bedrock guardrail identifier to invoke Amazon Bedrock models. Create an SCP that allows employees to use only approved models.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP that allows employees to use only approved models. Configure the SCP to require employees to specify a guardrail identifier in calls to invoke an approved model.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP that prevents an employee from invoking a model if a centrally deployed guardrail identifier is not specified in a call to the model. Create a permissions boundary on each employee's IAM role that allows each employee to invoke only approved models.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a block filtering policy. Use stack sets to deploy the guardrail to each account in the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a mask filtering policy. Use stack sets to deploy the guardrail to each account in the organization.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 81 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752090,
          "date": "Thu 30 Apr 2026 06:20",
          "username": "Chibuzo1",
          "content": "The answers are B and D because the SCP enforces both model approval and mandatory guardrail usage at the organization level, while CloudFormation StackSets deploys a consistent block-filtering guardrail across all accounts — together providing centralized, enforceable content governance and model access control across the entire AWS organization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1741636,
          "date": "Mon 30 Mar 2026 14:40",
          "username": "Kraftzman",
          "content": "Why the other options are incorrect:<br>A &amp; C (Permissions Boundaries): While Permissions Boundaries can restrict what a user can do, they must be applied to each IAM role individually. In a multi-account environment where you already have AWS Organizations, SCPs are the more scalable and standard method for central governance.<br>E (Masking Policy): As mentioned, masking is better for PII redaction in responses. Blocking is the appropriate mechanism for enforcing company policy on what can be sent to the model.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1721037,
          "date": "Thu 12 Mar 2026 22:01",
          "username": "eesa",
          "content": "Simplicidad: Un mecanismo (SCP) vs dos (SCP + Boundary)<br>Best practice AWS: SCP para controles organizacionales<br>Menor overhead: No necesitas gestionar boundaries en cada rol",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1719820,
          "date": "Sun 08 Mar 2026 06:16",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1719371,
          "date": "Thu 05 Mar 2026 22:06",
          "username": "GiorgioGss",
          "content": "\"The company must prevent\" - D because E only mask.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:BD"
        },
        {
          "id": 1717833,
          "date": "Sat 28 Feb 2026 14:52",
          "username": "67bdb19",
          "content": "Gotta say, D makes the most sense. It directly addresses the problem statement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an API for a generative AI (GenAI) application that uses a foundation model (FM) that is hosted on a managed model service. The API must stream responses to reduce latency, enforce token limits to manage compute resource usage, and implement retry logic to handle model timeouts and partial responses.<br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API cho GenAI cần streaming, giới hạn token và retry khi timeout.</li><li>Requirement chính: streaming thật sự, ít phải tự vận hành.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>API Gateway <strong>REST API</strong> hỗ trợ tích hợp <strong>Lambda response streaming</strong>, Lambda gọi Bedrock streaming API, kiểm soát token (`maxTokens`) và retry ngay trong code. Toàn bộ serverless, không phải quản lý hạ tầng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — HTTP API không hỗ trợ response streaming từ Lambda theo cách này, nên không đáp ứng streaming.</li><li><strong>B</strong>: ❌ Sai — polling chỉ giả lập streaming, token limit ở frontend dễ bị bypass, API Gateway không retry kiểu đó.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — WebSocket + ECS chạy được nhưng phải quản lý container, overhead rất cao.</li><li><strong>D</strong>: ✅ Đúng — serverless, streaming thật, token limit và retry trong Lambda.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda response streaming, REST API, InvokeModelWithResponseStream, maxTokens.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Stream response + ít vận hành\" → nghĩ ngay đến API Gateway REST API + Lambda response streaming.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>Integrate an Amazon API Gateway HTTP API with an AWS Lambda function to invoke Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic for model timeouts by using Lambda and API Gateway timeout configurations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect an Amazon API Gateway HTTP API directly to Amazon Bedrock. Simulate streaming by using client-side polling. Enforce token limits on the frontend. Configure retry behavior by using API Gateway integration settings.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect an Amazon API Gateway WebSocket API to an Amazon ECS service that hosts a containerized inference server. Stream responses by using the WebSocket protocol. Enforce token limits within Amazon ECS. Handle model timeouts by using ECS task lifecycle hooks and restart policies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Integrate an Amazon API Gateway REST API with an AWS Lambda function that invokes Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic by using Lambda and API Gateway timeout configurations.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 82 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758846,
          "date": "Thu 21 May 2026 18:53",
          "username": "Naaser",
          "content": "Managed Services: Amazon Bedrock is a fully managed service for foundation models, eliminating the need to manage infrastructure (unlike the ECS option in C).Response Streaming: Lambda response streaming (introduced for Node.js and Python) allows the API Gateway HTTP API to push partial payloads to the client as they are generated, satisfying the low-latency requirement.Least Operational Overhead: HTTP APIs are simpler and cheaper than REST APIs (Option D) and integrate seamlessly with Lambda for event-driven scaling.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1755139,
          "date": "Mon 11 May 2026 06:39",
          "username": "Kimzia",
          "content": "Response streaming is only supported for REST APIs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747363,
          "date": "Tue 14 Apr 2026 16:25",
          "username": "Wardove",
          "content": "only (D) uses REST API + Lambda response streaming, this IS valid as of November 2025. REST API is the ONLY API Gateway type that supports Lambda response streaming<br>https://aws.amazon.com/about-aws/whats-new/2025/11/api-gateway-response-streaming-rest-apis/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1741099,
          "date": "Sat 28 Mar 2026 01:59",
          "username": "Kraftzman",
          "content": "Option A (HTTP API): While HTTP APIs are often faster/cheaper, native payload response streaming is currently a feature exclusive to REST APIs in API Gateway. Attempting this with an HTTP API would require a Lambda Function URL proxy, adding an extra layer of configuration.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1732065,
          "date": "Sun 22 Mar 2026 19:04",
          "username": "attila9778",
          "content": "Amazon API Gateway HTTP API - does not support streaming, while REST supports progressive delivery",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1731900,
          "date": "Sat 21 Mar 2026 18:13",
          "username": "Tanle",
          "content": "Correct ansswer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721782,
          "date": "Mon 16 Mar 2026 05:50",
          "username": "taka5094",
          "content": "D: REST API does not natively support streaming responses. <br>A: The HTTP API is more suitable for streaming use cases and can meet requirements with lower latency and lower cost.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721038,
          "date": "Thu 12 Mar 2026 22:02",
          "username": "eesa",
          "content": "Stream responses para reducir latencia<br>Enforce token limits para gestionar recursos<br>Implement retry logic para timeouts y respuestas parciales<br>LEAST operational overhead",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719821,
          "date": "Sun 08 Mar 2026 06:17",
          "username": "xyztest",
          "content": "Correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1719372,
          "date": "Thu 05 Mar 2026 22:09",
          "username": "GiorgioGss",
          "content": "\"LEAST operational overhead\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is using Amazon Bedrock to develop a customer service AI assistant. Analysis shows that 70% of customer inquiries are simple product questions that a smaller model can effectively handle. However, 30% of inquiries are complex return policy questions that require advanced reasoning. The company wants to implement a cost-effective model selection framework to automatically route customer inquiries to appropriate models based on inquiry complexity. The framework must maintain high customer satisfaction and minimize response latency.<br/>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tự động route câu hỏi đơn giản sang model nhỏ, câu phức tạp sang model lớn.</li><li>Requirement chính: tiết kiệm chi phí, giữ chất lượng, latency thấp.</li><li>Ưu tiên: LEAST implementation effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Bedrock <strong>intelligent prompt routing</strong> là tính năng managed, tự dự đoán độ phức tạp của prompt và chọn model phù hợp trong cùng một family, không cần code routing.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — làm được nhưng phải tự xây classifier + Lambda, thêm một lần gọi model nên tăng latency và effort.</li><li><strong>B</strong>: ✅ Đúng — managed, cấu hình tối thiểu, cân bằng cost và quality.</li><li><strong>C</strong>: ❌ Sai — một model cho tất cả không tối ưu chi phí và chất lượng.</li><li><strong>D</strong>: ❌ Sai — rule dựa keyword kém chính xác, provisioned throughput tốn kém, phải tự duy trì.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Intelligent prompt routing, model routing, cost-effective, least effort.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Route theo độ phức tạp, ít effort nhất\" → nghĩ ngay đến Bedrock intelligent prompt routing.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>Create a multi-stage architecture that uses a small foundation model (FM) to classify the complexity of each inquiry. Route simple inquiries to a smaller, more cost-effective model. Route complex inquiries to a larger, more capable model. Use AWS Lambda functions to handle the routing logic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock intelligent prompt routing to automatically analyze inquiries. Route simple product inquiries to smaller models, and route complex return policy inquiries to more capable larger models.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a single-model solution that uses an Amazon Bedrock mid-sized foundation model (FM) with on-demand pricing. Include special instructions in model prompts to handle both simple and complex inquiries by using the same model.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate Amazon Bedrock endpoints for simple and complex inquiries. Implement a rule-based routing system based on keyword detection. Use on-demand pricing for the smaller model and provisioned throughput for the larger model.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 83 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1747847,
          "date": "Thu 16 Apr 2026 07:40",
          "username": "2d5eb96",
          "content": "Bedrock Prompt routing is the best approach for cost and LEAST operations : https://aws.amazon.com/bedrock/intelligent-prompt-routing/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1719373,
          "date": "Thu 05 Mar 2026 22:12",
          "username": "GiorgioGss",
          "content": "https://aws.amazon.com/blogs/machine-learning/multi-llm-routing-strategies-for-generative-ai-applications-on-aws/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A specialty coffee company has a mobile app that generates personalized coffee roast profiles by using Amazon Bedrock with a three-stage prompt chain. The prompt chain converts user inputs into structured metadata, retrieves relevant logs for coffee roasts, and generates a personalized roast recommendation for each customer.<br/>Users in multiple AWS Regions report inconsistent roast recommendations for identical inputs, slow inference during the retrieval step, and unsafe recommendations such as brewing at excessively high temperatures. The company must improve the stability of outputs for repeated inputs. The company must also improve app performance and the safety of the app's outputs. The updated solution must ensure 99.5% output consistency for identical inputs and achieve inference latency of less than 1 second. The solution must also block unsafe or hallucinated recommendations by using validated safety controls.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Prompt chain cho kết quả không nhất quán, retrieval chậm, có output không an toàn.</li><li>Requirement chính: ổn định output, latency dưới 1 giây, chặn nội dung unsafe/hallucinated bằng safety control đã được kiểm chứng.</li><li>Ưu tiên: consistency, latency, safety.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Provisioned throughput</strong> cho latency ổn định, <strong>Guardrails</strong> (denied topics, contextual grounding) chặn unsafe/hallucinated output, <strong>Prompt Management</strong> có version và approval workflow giúp prompt nhất quán giữa các Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — giải quyết đủ cả ba nhóm: latency, safety, quản lý prompt nhất quán.</li><li><strong>B</strong>: ❌ Sai — logging và A/B testing chỉ quan sát, không chặn output unsafe.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — cache và X-Ray cải thiện hiệu năng nhưng không có safety control.</li><li><strong>D</strong>: ❌ Sai — Kendra, DynamoDB, Step Functions không xử lý safety/hallucination.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Provisioned throughput, Guardrails, Prompt Management, approval workflow.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Chặn unsafe + latency ổn định + prompt nhất quán\" → nghĩ ngay đến Guardrails + Provisioned throughput + Prompt Management.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>Deploy Amazon Bedrock with provisioned throughput to stabilize inference latency. Apply Amazon Bedrock guardrails that have semantic denial rules to block unsafe outputs. Use Amazon Bedrock Prompt Management to manage prompts by using approval workflows.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Agents to manage chaining. Log model inputs and outputs to Amazon CloudWatch Logs. Use logs from Amazon CloudWatch to perform A/B testing for prompt versions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Cache prompt results in Amazon ElastiCache. Use AWS Lambda functions to pre-process metadata and to trace end-to-end latency. Use AWS X-Ray to identify and remediate performance bottlenecks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kendra to improve roast log retrieval accuracy. Store normalized prompt metadata within Amazon DynamoDB. Use AWS Step Functions to orchestrate multistep prompts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 84 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752537,
          "date": "Thu 30 Apr 2026 18:17",
          "username": "Chibuzo1",
          "content": "The answer is A because it is the only option that directly addresses all three requirements with purpose-built Amazon Bedrock native capabilities: Prompt Management with approval workflows for consistent, governed prompt execution; Provisioned Throughput for guaranteed sub-second latency; and Guardrails with semantic denial rules for validated, enforceable safety controls that block unsafe or hallucinated recommendations before they reach users.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1747848,
          "date": "Thu 16 Apr 2026 07:46",
          "username": "2d5eb96",
          "content": "Only option which include Guardrails which is one of the requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1721039,
          "date": "Thu 12 Mar 2026 22:05",
          "username": "eesa",
          "content": "High consistency + low latency + safety controls + prompt chain → Provisioned Throughput + Bedrock Guardrails (semantic denial) + Prompt Management<br>✅ Garantiza latency &lt; 1s (provisioned throughput)<br>✅ Logra 99.5% consistency (low temp + provisioned + versioning)<br>✅ Bloquea unsafe outputs (guardrails con semantic denial)<br>✅ Gestiona prompts profesionalmente (approval workflows)<br>✅ Usa features nativas de Bedrock (menos complejidad)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1719375,
          "date": "Thu 05 Mar 2026 22:16",
          "username": "GiorgioGss",
          "content": "Other options are either overhead or add latency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a generative AI (GenAI) application by using Amazon Bedrock. The application will analyze patterns and relationships in the company's data. The application will process millions of new data points daily across AWS Regions in Europe, North America, and Asia before storing the data in Amazon S3.<br/>The application must comply with local data protection and storage regulations. Data residency and processing must occur within the same continent. The application must also maintain audit trails of the application's decision-making processes and provide data classification capabilities.<br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý dữ liệu đa Region, bắt buộc data residency và processing trong cùng châu lục.</li><li>Requirement chính: audit trail cho quyết định AI và phân loại dữ liệu.</li><li>Ưu tiên: compliance, data residency, auditability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Pre-process theo vùng địa lý trước khi gửi vào Bedrock giữ dữ liệu trong đúng châu lục, <strong>S3 Object Lock</strong> bảo vệ lưu trữ, <strong>Macie</strong> phân loại dữ liệu, <strong>CloudTrail</strong> immutable logs cho audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cross-Region inference có thể đẩy dữ liệu ra ngoài châu lục, CloudWatch không phải audit trail bất biến, theo dõi compliance thủ công.</li><li><strong>B</strong>: ❌ Sai — không có data classification, import custom model từng Region nặng vận hành.</li><li><strong>C</strong>: ✅ Đúng — đủ residency, classification (Macie), audit (CloudTrail).</li><li><strong>D</strong>: ❌ Sai — báo cáo thủ công, không có data classification tự động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Data residency, Amazon Macie, S3 Object Lock, CloudTrail, cross-Region inference.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Phân loại dữ liệu nhạy cảm\" → nghĩ ngay đến Macie; \"audit bất biến\" → CloudTrail.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>Deploy the application in each Region with local IAM policies. Use Amazon Bedrock cross-Region inference to distribute the workload. Use Amazon CloudWatch to log AI decision-making processes and data processing activities. Manually track compliance certifications across Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use SCPs with AWS Organizations to manage location-specific permissions. Use AWS CloudTrail immutable logs to audit the decision-making processes. Import a custom model into Amazon Bedrock and deploy the model to each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 Object Lock with Region-specific S3 bucket policies. Pre-process the data points within the Region based on geographic origin before sending the data points to Amazon Bedrock. Use Amazon Macie to classify the data. Use AWS CloudTrail immutable logs to audit the decision-making processes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate AWS accounts for each Region with individual compliance frameworks. Use Amazon SageMaker AI with custom monitoring to track model performance and compliance with data residency requirements. Create manual reports for each regulatory jurisdiction.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 85 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1721041,
          "date": "Thu 12 Mar 2026 22:08",
          "username": "eesa",
          "content": "Data residency: Datos deben permanecer en el mismo continente<br>Local data protection regulations (GDPR Europa, etc.)<br>Millions of data points daily en múltiples regiones<br>Audit trails de decision-making processes<br>Data classification capabilities<br>Processing within same continent",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1719376,
          "date": "Thu 05 Mar 2026 22:21",
          "username": "GiorgioGss",
          "content": "A - Bedrock cross-Region inference explicitly routes requests across regions<br>B - operational complexity with no clear benefit<br>D - separate accounts per region with manual compliance reports is the highest-overhead solution possible",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is deploying a generative AI (GenAI) application that uses Amazon Bedrock to assist customer service representatives to provide personalized investment advice to customers. The company must implement a comprehensive governance solution that follows responsible AI practices and meets regulatory requirements.<br/><br/>The solution must detect and prevent hallucinations in recommendations. The solution must have safety controls for customer interactions. The solution must also monitor model behavior drift in real time and maintain audit trails of all prompt-response pairs for regulatory review.<br/><br/>The company must deploy the solution within 60 days. The solution must integrate with the company's existing compliance dashboard and respond to customers within 200 ms.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Governance cho GenAI tư vấn đầu tư: chống hallucination, safety control, theo dõi drift, lưu audit prompt-response.</li><li>Requirement chính: triển khai trong 60 ngày, tích hợp compliance dashboard, phản hồi dưới 200 ms.</li><li>Ưu tiên: LEAST operational overhead bằng dịch vụ managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Guardrails</strong> cho content filter, <strong>Model Evaluation</strong> đánh giá hallucination, <strong>DynamoDB</strong> lưu prompt-response với độ trễ thấp, <strong>CloudWatch</strong> custom metrics tích hợp dashboard hiện có. Toàn bộ managed, nhẹ vận hành.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — dùng chủ yếu dịch vụ managed, đáp ứng độ trễ và tích hợp dashboard.</li><li><strong>B</strong>: ❌ Sai — Lambda validation tự viết, không có cơ chế phát hiện hallucination/drift.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — nhiều thành phần (Agents, KB, OpenSearch, QuickSight), overhead cao và khó kịp 60 ngày.</li><li><strong>D</strong>: ❌ Sai — SageMaker Model Monitor không dành cho Bedrock FM, WAF không lọc content AI.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Guardrails, Model Evaluation, CloudWatch custom metrics, audit trail, least overhead.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Safety + audit + ít vận hành\" → nghĩ ngay đến Guardrails + dịch vụ managed (DynamoDB, CloudWatch).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#86",
          "answers": [
            {
              "choice": "<p>Configure Amazon Bedrock guardrails to apply custom content filters and toxicity detection. Use Amazon Bedrock Model Evaluation to detect hallucinations. Store prompt-response pairs in Amazon DynamoDB to capture audit trails and set a TTL. Integrate Amazon CloudWatch custom metrics with the existing compliance dashboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon Bedrock and use AWS PrivateLink to access the application securely. Use AWS Lambda functions to implement custom prompt validation. Store prompt-response pairs in an Amazon S3 bucket and configure S3 Lifecycle policies. Create custom Amazon CloudWatch dashboards to monitor model performance metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Agents and Amazon Bedrock Knowledge Bases to ground responses. Use Amazon Bedrock Guardrails to enforce content safety. Use Amazon OpenSearch Service to store and index prompt-responses pairs. Integrate OpenSearch Service with Amazon QuickSight to create compliance reports and to detect model behavior drift.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker Model Monitor to detect model behavior drift. Use AWS WAF to filter content. Store customer interactions in an encrypted Amazon RDS database. Use Amazon API Gateway to create custom HTTP APIs to integrate with the compliance dashboard.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 86 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752575,
          "date": "Fri 01 May 2026 02:03",
          "username": "Chibuzo1",
          "content": "The answer is A because it exclusively uses Amazon Bedrock-native services — Guardrails, Model Evaluation, CloudWatch — paired with DynamoDB's serverless, low-latency storage. Every component is fully managed, configurable without custom code, deployable within weeks rather than months, and purpose-built for the specific requirements: hallucination detection, safety controls, drift monitoring, audit trails, sub-200ms latency, and compliance dashboard integration.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1751469,
          "date": "Mon 27 Apr 2026 21:30",
          "username": "jakie22332",
          "content": "C is only option that meets all requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1747851,
          "date": "Thu 16 Apr 2026 08:37",
          "username": "2d5eb96",
          "content": "C is close but doesn't meet the 200ms , using RAG+Opensearch+Agent Orchestration",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1747441,
          "date": "Tue 14 Apr 2026 23:41",
          "username": "de1612d",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1747368,
          "date": "Tue 14 Apr 2026 16:39",
          "username": "Wardove",
          "content": "C wins because Bedrock Knowledge Bases grounds responses to prevent hallucinations at generation time (A only detects them afterward via batch Model Evaluation), OpenSearch retains audit data indefinitely (A's DynamoDB TTL deletes it), and OpenSearch+QuickSight<br>  provides real-time drift detection (A's CloudWatch metrics don't).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Lake Formation to set up a data lake that contains databases and tables for multiple business units across multiple AWS Regions. The company wants to use a foundation model (FM) through Amazon Bedrock to perform fraud detection. The FM must ingest sensitive financial data from the data lake. The data includes some customer personally identifiable information (PM).<br/><br/>The company must design an access control solution that prevents PI I from appearing in a production environment. The FM must access only authorized data subsets that have PH redacted from specific data columns. The company must capture audit trails for all data access.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>FM đọc dữ liệu tài chính từ Lake Formation đa business unit và Region, có PII.</li><li>Requirement chính: chỉ truy cập tập con được phép, che cột PII, có audit trail.</li><li>Ưu tiên: fine-grained access control tập trung, auditability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lake Formation</strong> với <strong>LF-Tag</strong> (tag-based access control) phân quyền theo business unit/Region trên database, table, cột, quản lý tập trung và mở rộng tốt. Truy cập qua IAM role, <strong>CloudTrail</strong> ghi audit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tách bucket cho từng tổ hợp khó scale, không kiểm soát mức cột, S3 access logs yếu.</li><li><strong>B</strong>: ✅ Đúng — LF-Tag kiểm soát chi tiết ở mức column, CloudTrail audit.</li><li><strong>C</strong>: ❌ Sai — grant trực tiếp khó mở rộng, phải tự viết lớp ứng dụng lọc dữ liệu.</li><li><strong>D</strong>: ❌ Sai — presigned URL bypass Lake Formation, không có kiểm soát cột.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lake Formation, LF-Tag (LF-TBAC), column-level security, CloudTrail.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Data lake + quyền theo cột/nhiều BU\" → nghĩ ngay đến Lake Formation LF-Tags.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>Create a separate dataset in a separate Amazon S3 bucket for each business unit and Region combination. Configure S3 bucket policies to control access based on IAM roles that are assigned to FM training instances. Use S3 access logs to track data access.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the FM to authenticate by using IAM roles and Lake Formation permissions based on LF-Tag expressions. Define business units and Regions as LF-Tags that are assigned to databases and tables. Use AWS CloudTrail to collect comprehensive audit trails of data access.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use direct IAM principal grants on specific databases and tables in Lake Formation. Create a custom application layer that logs access requests and further filters sensitive columns before sending data to the FM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the FM to request temporary credentials from AWS STS. Access the data by using presigned S3 URLs that are generated by an API that applies business unit and Regional filters. Use AWS CloudTrail to collect comprehensive audit trails of data access.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 87 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752576,
          "date": "Fri 01 May 2026 02:08",
          "username": "Chibuzo1",
          "content": "The answer is B because AWS Lake Formation with LF-Tag expressions is purpose-built for exactly this use case — scalable, tag-driven access control across multi-dimensional data lake architectures with native column-level PII protection, no custom application code required, and full CloudTrail integration for the immutable audit trails that financial services regulators require.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1747442,
          "date": "Tue 14 Apr 2026 23:43",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock Knowledge Bases to perform regulatory compliance queries. The application uses the RetrieveAndGenerateStream API. The application retrieves relevant documents from a knowledge base that contains more than 50,000 regulatory documents, legal precedents, and policy updates.<br/><br/>The RAG application is producing suboptimal responses because the initial retrieval often returns semantically similar but contextually irrelevant documents. The poor responses are causing model hallucinations and incorrect regulatory guidance. The company needs to improve the performance of the RAG application so it returns more relevant documents.<br/><br/>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RAG trên Bedrock Knowledge Bases trả về tài liệu giống về ngữ nghĩa nhưng sai ngữ cảnh.</li><li>Requirement chính: cải thiện độ liên quan của tài liệu truy xuất.</li><li>Ưu tiên: LEAST operational overhead, giữ nguyên `RetrieveAndGenerateStream`.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Knowledge Bases hỗ trợ cấu hình <strong>reranking</strong> trực tiếp (reranker model của Amazon/Cohere) ngay trong request, nên không cần thay đổi kiến trúc hay tự vận hành.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải tự host, huấn luyện và vận hành SageMaker endpoint + API Gateway.</li><li><strong>B</strong>: ❌ Sai — Comprehend, Textract, Neptune không phù hợp để rerank, rất phức tạp.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — làm được nhưng phải tách pipeline Retrieve + Rerank + InvokeModel, tăng effort.</li><li><strong>D</strong>: ✅ Đúng — bật reranking configuration, giữ nguyên API đang dùng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Reranking configuration, Knowledge Bases, RetrieveAndGenerateStream, reranker model.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Retrieval đúng nghĩa nhưng sai ngữ cảnh\" → nghĩ ngay đến reranker trong Knowledge Bases.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon SageMaker endpoint to run a fine-tuned ranking model. Use an Amazon API Gateway REST API to route requests. Configure the application to make requests through the REST API to rerank the results.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Comprehend to classify documents and apply relevance scores. Integrate the RAG application’s reranking process with Amazon Textract to run document analysis. Use Amazon Neptune to perform graph-based relevance calculations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a retrieval pipeline that uses the Amazon Bedrock Knowledge Bases Retrieve API to perform initial document retrieval. Call the Amazon Bedrock Rerank API to rerank the results. Invoke the InvokeModelWithResponseStream operation to generate responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the latest Amazon reranker model through the reranking configuration within Amazon Bedrock Knowledge Bases. Use the model to improve document relevance scoring and to reorder results based on contextual assessments.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 88 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1747445,
          "date": "Tue 14 Apr 2026 23:45",
          "username": "de1612d",
          "content": "Answer is D!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#89",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a customer communication platform that uses an AI assistant powered by an Amazon Bedrock foundation model (FM). The AI assistant summarizes customer messages and generates initial response drafts.<br/><br/>The company wants to use Amazon Comprehend to implement layered content filtering. The layered content filtering must prevent sharing of offensive content, protect customer privacy, and detect potential inappropriate advice solicitation. Inappropriate advice solicitation includes requests for unethical practices, harmful activities, or manipulative behaviors. The solution must maintain acceptable overall response times, so all pre-processing filters must finish before the content reaches the FM.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lọc nhiều lớp bằng Amazon Comprehend: nội dung xúc phạm, quyền riêng tư, yêu cầu tư vấn không phù hợp.</li><li>Requirement chính: mọi pre-processing phải xong trước khi tới FM, nhưng vẫn giữ response time chấp nhận được.</li><li>Ưu tiên: đủ ba lớp bảo vệ, latency thấp (song song).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Toxicity detection</strong> cho nội dung xúc phạm, <strong>prompt safety classification</strong> cho yêu cầu không phù hợp, <strong>PII detection with redaction</strong> bảo vệ privacy. Chạy song song để giảm latency.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — PII detection không redact thì không bảo vệ được quyền riêng tư.</li><li><strong>B</strong>: ❌ Sai — custom classification phải huấn luyện, PII chỉ chạy khi qua classifier (tuần tự).</li><li><strong>C</strong>: ❌ Sai — tuần tự nhiều bước làm tăng latency, PII streaming mode không phù hợp, thêm human review EventBridge không được yêu cầu.</li><li><strong>D</strong>: ✅ Đúng — đủ ba lớp, chạy song song, có redaction.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Toxicity detection, prompt safety classification, PII redaction, parallel processing.</p><p><strong>🧠MẸO THI</strong></p><p>\"Lọc nhiều lớp mà vẫn nhanh\" → nghĩ ngay đến chạy song song các Comprehend filter + redaction.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>Use parallel processing with asynchronous API calls. Use toxicity detection for offensive content. Use prompt safety classification for inappropriate advice solicitation. Use personally identifiable information (PII) detection without redaction.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use custom classification to build an FM that detects offensive content and inappropriate advice solicitation. Apply personally identifiable information (PII) detection as a secondary filter only when messages pass the custom classifier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a multi-stage process. Configure the process to use prompt safety classification first, then toxicity detection on safe prompts only, and finally personally identifiable information (PII) detection in streaming mode. Route flagged messages through Amazon EventBridge for human review.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use toxicity detection with thresholds configured to 0.5 for all categories. Use parallel processing for both prompt safety classification and personally identifiable information (PII) detection with entity redaction. Apply Amazon CloudWatch alarms to filter metrics.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 89 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1758848,
          "date": "Thu 21 May 2026 19:11",
          "username": "Naaser",
          "content": "Lowest Latency: Using parallel processing with asynchronous API calls ensures that all three Amazon Comprehend filters (Toxicity, Prompt Safety, and PII) run simultaneously. This prevents cumulative \"sequential\" latency, meeting the requirement for acceptable response times.Complete Coverage:Toxicity Detection: Directly addresses the requirement to filter offensive content.Prompt Safety Classification: Specifically designed to detect inappropriate advice solicitation (unethical, harmful, or manipulative requests).PII Detection: Protects customer privacy by identifying sensitive data before it reaches the foundation model.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1752618,
          "date": "Fri 01 May 2026 09:07",
          "username": "jyrajan69",
          "content": "Option D is not the right answer as it required hard coding the 0.5 as toxicity thresh hold, better option is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1752592,
          "date": "Fri 01 May 2026 06:56",
          "username": "Chibuzo1",
          "content": "The answer is D because it correctly pairs all three required Comprehend capabilities with the right configurations — toxicity detection with a calibrated threshold, prompt safety classification, and PII detection with entity redaction — running in parallel to minimize pre-processing latency, ensuring all filters complete before the FM receives any content, and maintaining operational visibility through CloudWatch alarms.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747446,
          "date": "Tue 14 Apr 2026 23:47",
          "username": "de1612d",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software as a service (SaaS) company is building a recommendation model that uses Amazon SageMaker AI to support an application that recommends airline cabin upgrades to customers. The company will host SageMaker AI models on Amazon Bedrock by using Amazon Bedrock Custom Model Import. Airline companies will use the application to send customized offers to customers.<br/><br/>The model must examine the travel history of customers to help make more relevant recommendations. The company stores customer travel history data in an Amazon RDS database. The company must ensure that the application delivers consistent, relevant, and accurate results across multiple airlines and customer populations.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Model khuyến nghị nâng hạng cabin dựa trên lịch sử du lịch lưu trong Amazon RDS.</li><li>Requirement chính: kết quả nhất quán, liên quan, chính xác cho nhiều hãng bay và nhóm khách.</li><li>Ưu tiên: độ chính xác dữ liệu có cấu trúc, giảm hallucination.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dữ liệu nằm trong RDS (có cấu trúc), nên <strong>text-to-SQL</strong> kèm SQL validation lấy chính xác lịch sử, ưu tiên, loyalty. <strong>Guardrails</strong> lọc nội dung, <strong>Step Functions + Lambda</strong> điều phối validation workflow giảm hallucination một cách xác định.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — RAG với Knowledge Bases cho tìm kiếm ngữ nghĩa, không chính xác bằng truy vấn trực tiếp dữ liệu có cấu trúc.</li><li><strong>B</strong>: ✅ Đúng — truy vấn chính xác + validation workflow xác định.</li><li><strong>C</strong>: ❌ Sai — vector search chỉ gần đúng, cần dựng embedding, confidence scoring không bảo đảm tính nhất quán.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — text-to-SQL đúng nhưng confidence scoring và semantic similarity kém tin cậy hơn validation workflow.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Text-to-SQL, SQL validation, structured data, Step Functions validation, Guardrails.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Dữ liệu có cấu trúc trong RDS cần chính xác\" → nghĩ ngay đến text-to-SQL, không phải vector search.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases to implement a RAG architecture to analyze customer travel history data to give the application semantic search capabilities. Use the semantic search capabilities to retrieve relevant booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Service to implement vector searches of customer travel history embeddings. Use the vector searches to give the application the ability to perform similarity-based retrieval of booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 90 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752593,
          "date": "Fri 01 May 2026 07:05",
          "username": "Chibuzo1",
          "content": "The answer is D because it correctly matches the data architecture — text-to-SQL for structured RDS relational data with SQL validation for query correctness — applies Bedrock guardrails for content safety, and uses confidence scoring with semantic similarity as lightweight, purpose-built hallucination reduction mechanisms that require no additional infrastructure, delivering consistent, accurate recommendations across all airline customer populations with the least operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747926,
          "date": "Thu 16 Apr 2026 15:27",
          "username": "2d5eb96",
          "content": "- Consistency <br>- Text-to-SQL <br>- Hallucination",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1747447,
          "date": "Tue 14 Apr 2026 23:50",
          "username": "de1612d",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1747372,
          "date": "Tue 14 Apr 2026 16:53",
          "username": "Wardove",
          "content": "B wins because structured RDS data requires deterministic SQL validation via Step Functions + Lambda, while D's \"confidence scoring and semantic similarity searches\" are vector/unstructured retrieval techniques that make no sense applied to factual tabular query results.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Bedrock to develop a customer support AI assistant. The AI assistant must respond to customer questions about their accounts. The AI assistant must not expose personal information in responses. The company must comply with data residency policies by ensuring that all processing occurs within the same AWS Region where each customer is located.<br/><br/>The company wants to evaluate how effective the AI assistant is at preventing the exposure of personal information before the company makes the AI assistant available to customers.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trợ lý hỗ trợ khách hàng không được lộ thông tin cá nhân, xử lý phải nằm trong cùng Region của khách hàng.</li><li>Requirement chính: đánh giá hiệu quả chống lộ PII trước khi phát hành, và tuân thủ data residency.</li><li>Ưu tiên: PII protection, không dùng cross-Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>sensitive information filters</strong> của Guardrails. Chế độ <strong>mask</strong> khi dev/test giúp quan sát việc phát hiện PII, rồi chuyển sang <strong>block</strong> cho production. Guardrail triển khai riêng ở từng Region để dữ liệu không rời Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cross-Region guardrail có thể xử lý ngoài Region, vi phạm data residency.</li><li><strong>B</strong>: ✅ Đúng — filter PII đúng loại, mask rồi block, guardrail trong từng Region.</li><li><strong>C</strong>: ❌ Sai — content/topic filter không phải PII, tắt invocation logging làm mất khả năng đánh giá.</li><li><strong>D</strong>: ❌ Sai — cross-Region, content và word filter không bảo vệ PII.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Sensitive information filters, mask vs block, data residency, regional guardrail.</p><p><strong>🧠 MẸO THI</strong></p><p>\"PII + residency\" → nghĩ ngay đến sensitive information filter và guardrail theo từng Region (không cross-Region).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#91",
          "answers": [
            {
              "choice": "<p>Configure a cross-Region Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to detect mode during development and testing. Switch to block mode for production deployment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to mask mode during development and testing. Switch to block mode for production deployment. Deploy a copy of the guardrail to each Region where the company operates.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Bedrock guardrail to apply content and topic filters. Set the guardrail to detect mode during development, testing, and production. Disable invocation logging for the Amazon Bedrock model.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a cross-Region Amazon Bedrock guardrail to apply a set of content and word filters. Set the guardrail to detect mode during development and testing. Switch to mask mode for production deployment.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 91 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752594,
          "date": "Fri 01 May 2026 07:16",
          "username": "Chibuzo1",
          "content": "The answer is B because it is the only option that: uses sensitive information filters (the correct filter type for PII), applies mask mode during development (enabling meaningful effectiveness evaluation), switches to block mode for production (maximum protection), and deploys Region-specific guardrail copies (satisfying data residency by ensuring all processing stays within each customer's local Region).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1745080,
          "date": "Fri 10 Apr 2026 06:52",
          "username": "de1612d",
          "content": "And is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#92",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A university recently digitized a collection of archival documents, academic journals, and manuscripts. The university stores the digital files in an AWS Lake Formation data lake.<br/><br/>The university hires a GenAI developer to build a solution to allow users to search the digital files by using text queries. The solution must return journal abstracts that are semantically similar to a user's query. Users must be able to search the digitized collection based on text and metadata that is associated with the journal abstracts. The metadata of the digitized files does not contain keywords. The solution must match similar abstracts to one another based on the similarity of their text. The data lake contains fewer than 1 million files.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tìm kiếm ngữ nghĩa abstract tài liệu học thuật và lọc theo metadata.</li><li>Requirement chính: tương đồng ngữ nghĩa, dưới 1 triệu file, metadata không có keyword.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Titan Embeddings</strong> (managed) tạo vector, lưu trong <strong>Aurora PostgreSQL Serverless với pgvector</strong> vừa tìm vector vừa lọc metadata bằng SQL. Quy mô dưới 1 triệu file phù hợp, Serverless tự scale.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — OpenSearch chạy được nhưng quản lý cluster nặng hơn cho quy mô nhỏ.</li><li><strong>B</strong>: ❌ Sai — extract topic/keyword không cho tìm kiếm tương đồng ngữ nghĩa.</li><li><strong>C</strong>: ❌ Sai — tự deploy và vận hành model trên SageMaker AI, overhead cao.</li><li><strong>D</strong>: ✅ Đúng — embedding managed, pgvector + SQL cho metadata, Serverless ít vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Titan Embeddings, pgvector, Aurora Serverless, semantic search, metadata.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Semantic search quy mô vừa, ít vận hành\" → nghĩ ngay đến Titan Embeddings + Aurora pgvector.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in the OpenSearch Neural Plugin for Amazon OpenSearch Service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Comprehend to extract topics from the digitized files. Store the topics and file metadata in an Amazon Aurora PostgreSQL database. Query the abstract metadata against the data in the Aurora database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker AI to deploy a sentence-transformer model. Use the model to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL database that has the pgvector extension.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL Serverless database that has the pgvector extension.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 92 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752595,
          "date": "Fri 01 May 2026 07:26",
          "username": "Chibuzo1",
          "content": "The answer is D because it pairs Amazon Bedrock's fully managed Titan Embeddings API (zero infrastructure for embedding generation) with Aurora PostgreSQL Serverless and pgvector (zero infrastructure management for vector storage and search) — delivering complete semantic similarity search across text and metadata for a sub-million document collection with the absolute minimum operational overhead, while naturally handling the absence of keywords through semantic vector representations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747927,
          "date": "Thu 16 Apr 2026 15:40",
          "username": "2d5eb96",
          "content": "Least operational overhead definitely",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1746436,
          "date": "Sun 12 Apr 2026 08:28",
          "username": "de1612d",
          "content": "Gemini answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company wants to use Amazon Bedrock foundation models (FMs) to analyze call center recordings. When calls end, the call center stores recordings as MP3 files in an Amazon S3 bucket. The company needs to generate summaries and sentiment analysis for the recordings in a structured format as soon as new files are created. The recordings average 20 MB in size.<br/><br/>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phân tích file ghi âm MP3 trong S3: tóm tắt và sentiment ở định dạng có cấu trúc ngay khi file mới xuất hiện.</li><li>Requirement chính: trigger tự động theo sự kiện và pipeline transcribe rồi phân tích.</li><li>Ưu tiên: event-driven, đúng tích hợp được hỗ trợ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 gửi event qua <strong>EventBridge</strong> để khởi chạy <strong>Step Functions</strong> (S3 không thể gửi notification trực tiếp tới Step Functions). Workflow dùng <strong>Transcribe</strong> rồi Lambda tạo prompt gọi <strong>Bedrock</strong> để sinh output có cấu trúc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — gần giống C nhưng mô tả Lambda chỉ xử lý text, không nhấn mạnh việc tạo prompt có cấu trúc nên kém chính xác hơn C.</li><li><strong>B</strong>: ❌ Sai — gọi trực tiếp Bedrock không đảm bảo định dạng JSON có cấu trúc nếu không có bước dựng prompt.</li><li><strong>C</strong>: ✅ Đúng — Lambda dựng prompt chuẩn để Bedrock trả kết quả có cấu trúc.</li><li><strong>D</strong>: ✅ Đúng — S3 → EventBridge → Step Functions là mô hình trigger đúng.</li><li><strong>E</strong>: ❌ Sai — S3 notification không hỗ trợ đích Step Functions.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>S3 to EventBridge, Step Functions, Transcribe, prompt construction, structured output.</p><p><strong>🧠 MẸO THI</strong></p><p>\"S3 object created kích hoạt Step Functions\" → nghĩ ngay đến EventBridge rule.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to process the text by using Amazon Bedrock FMs to generate structured analysis output.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to directly invoke Amazon Bedrock FMs to generate summaries and sentiment analysis in JSON format.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to create a prompt to invoke Amazon Bedrock FMs to generate structured analysis output.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the source S3 bucket to send events to Amazon EventBridge. Create an EventBridge rule to invoke the Step Functions workflow when an object is created in the bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the source S3 bucket to send notifications to the Step Functions workflow when an object is created in the bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 93 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752596,
          "date": "Fri 01 May 2026 07:40",
          "username": "Chibuzo1",
          "content": "The answers are C and D because together they form a complete, production-ready solution: EventBridge detects new MP3 files and triggers Step Functions (D), which orchestrates Transcribe for audio-to-text conversion, uses Lambda to construct a structured prompt from the transcript, and invokes Bedrock FMs to generate consistent JSON-formatted summaries and sentiment analysis (C) — all fully event-driven with proper async job handling and no manual intervention.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:CD"
        },
        {
          "id": 1749612,
          "date": "Wed 22 Apr 2026 08:18",
          "username": "Oldgun99",
          "content": "Amazon Transcribe produces raw transcript text<br>Raw transcript text cannot be directly passed to Bedrock FMs and reliably produce structured output — it requires a carefully engineered prompt",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:CD"
        },
        {
          "id": 1748108,
          "date": "Thu 16 Apr 2026 15:48",
          "username": "2d5eb96",
          "content": "Option A provides complete orchestration with Lambda for prompt engineering, Bedrock invocation, and structured output processing<br>Option D uses EventBridge for reliable, scalable event routing from S3 to Step Functions with advanced filtering capabilities",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AD"
        },
        {
          "id": 1747374,
          "date": "Tue 14 Apr 2026 17:12",
          "username": "Wardove",
          "content": "CD wins because Transcribe outputs JSON with metadata (not a ready Bedrock prompt) and transcripts from 20 MB MP3s exceed Step Functions' 256 KiB state payload limit — so Lambda is required to read the transcript from S3, craft a proper prompt, and invoke Bedrock<br>   internally (C), while S3 must route events through EventBridge since Step Functions isn't a direct S3 notification destination (D).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:CD"
        },
        {
          "id": 1746437,
          "date": "Sun 12 Apr 2026 08:37",
          "username": "de1612d",
          "content": "Gemini answer is A,D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AD"
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical device company wants to feed reports of medical procedures that used the company's devices into an AI assistant. To protect patient privacy, the AI assistant must expose patient personally identifiable information (PII) only to surgeons. The AI assistant must redact PII for engineers. The AI assistant must reference only medical reports that are less than 3 years old.<br/><br/>The company stores reports in an Amazon S3 bucket as soon as each report is published. The company has already set up an Amazon Bedrock knowledge base. The AI assistant uses Amazon Cognito to authenticate users.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Trợ lý AI chỉ lộ PII cho surgeon, redact PII cho engineer, chỉ tham chiếu report dưới 3 năm.</li><li>Requirement chính: kiểm soát PII theo nhóm Cognito và giữ dữ liệu cũ ngoài knowledge base.</li><li>Ưu tiên: đơn giản, dùng dịch vụ managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Lifecycle</strong> xóa report quá 3 năm, Lambda sync định kỳ cập nhật knowledge base. Khi runtime, chọn <strong>ApplyGuardrail</strong> theo Cognito group để redact PII đúng người dùng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — redact PII ngay trong S3 làm surgeon cũng không thấy PII, Lambda tự xóa tài liệu là thừa.</li><li><strong>B</strong>: ❌ Sai — Comprehend redact trong luồng riêng phức tạp, không tích hợp trực tiếp vào phản hồi của assistant.</li><li><strong>C</strong>: ✅ Đúng — Lifecycle + sync + guardrail theo nhóm người dùng.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — hai knowledge base nhân đôi dữ liệu, tốn chi phí và vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>ApplyGuardrail, Cognito user group, S3 Lifecycle, knowledge base sync, PII redaction.</p><p><strong>🧠 MẸO THI</strong></p><p>\"PII hiển thị khác nhau theo vai trò\" → nghĩ ngay đến Guardrail theo Cognito group, không nhân đôi dữ liệu.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>Enable Amazon Macie PII detection on the S3 bucket. Use an S3 trigger to invoke an AWS Lambda function that redacts PII from the reports. Configure the Lambda function to delete outdated documents from the bucket and to invoke knowledge base syncing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Invoke an AWS Lambda function to sync the S3 bucket and the knowledge base when a new report is uploaded to the bucket. Use a second Lambda function to invoke Amazon Comprehend to detect and redact PII if a user is part of the engineer Cognito user group. Set up an S3 Lifecycle configuration to remove reports that are older than 3 years from the bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Schedule an AWS Lambda function to run daily syncs between the bucket and the knowledge base. When users interact with the AI assistant, call the ApplyGuardrail configuration that matches the user's Cognito user group to redact PII from the agent’s responses if appropriate.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second knowledge base. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Invoke an AWS Lambda function that syncs the bucket with the original knowledge base when a new report is uploaded to the bucket. Use Amazon Comprehend to detect and redact PII before syncing the bucket with the second knowledge base. When a user interacts with the AI assistant, redirect the model to the appropriate knowledge base depending on the user’s Cognito user group.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 94 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1749614,
          "date": "Wed 22 Apr 2026 08:29",
          "username": "Oldgun99",
          "content": "the user's Cognito user group to redact PII from the agent’s responses if appropriate.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1748257,
          "date": "Thu 16 Apr 2026 15:53",
          "username": "2d5eb96",
          "content": "ApplyGuardrail is the logic here,",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1746438,
          "date": "Sun 12 Apr 2026 08:41",
          "username": "de1612d",
          "content": "Gemini answer is D<br><div>Replies:</div><ul><li>Sorry, it seems the correct answer is c.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747469,
          "date": "Wed 15 Apr 2026 02:17",
          "username": "de1612d",
          "content": "Sorry, it seems the correct answer is c.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large ecommerce company has deployed a foundation model (FM) to generate product descriptions. The company's engineering team monitors technical metrics such as token usage, latency, and error rates by using Amazon CloudWatch. The company's marketing team tracks business metrics such as conversion rates and revenue impact in its own systems.<br/><br/>The company needs a unified observability solution that correlates technical performance with business outcomes. The solution must provide automatic alerts to stakeholders when operational metrics indicate degradation. The solution must provide comprehensive visibility across both technical and business metrics.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quan sát hợp nhất giữa technical metrics (CloudWatch) và business metrics (hệ thống marketing).</li><li>Requirement chính: tương quan hai loại metric, cảnh báo tự động khi chất lượng suy giảm.</li><li>Ưu tiên: visibility toàn diện, phát hiện bất thường.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudWatch dashboards kèm business metrics đã import, <strong>composite alarms</strong> kết hợp nhiều tín hiệu và <strong>anomaly detection</strong> phát hiện bất thường mà không cần ngưỡng cố định, rồi <strong>SNS</strong> thông báo stakeholder.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — dùng composite alarm nhưng thiếu anomaly detection nên khó nhận diện suy giảm.</li><li><strong>B</strong>: ❌ Sai — tập trung remediate tự động bằng Lambda, không có thông báo stakeholder theo yêu cầu.</li><li><strong>C</strong>: ❌ Sai — metric streams, S3, QuickSight là pipeline phân tích, không phải cảnh báo thời gian thực.</li><li><strong>D</strong>: ✅ Đúng — dashboard hợp nhất, composite alarm với anomaly detection, SNS thông báo.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudWatch composite alarms, anomaly detection, custom metrics, SNS.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Tương quan nhiều metric và cảnh báo\" → nghĩ ngay đến composite alarms + anomaly detection.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>Create CloudWatch dashboards that include technical metrics and imported business metrics. Configure CloudWatch composite alarms that combine technical data and business data. Use Amazon SNS to set up notifications to stakeholders.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Managed Grafana to visualize technical metrics from CloudWatch with business metrics from external sources. Configure Amazon Managed Grafana alerts to invoke AWS Lambda functions. Configure the Lambda functions to remediate issues automatically when metrics exceed predefined thresholds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Stream CloudWatch metrics to Amazon S3 by using CloudWatch metric streams. Create Amazon QuickSight dashboards to visualize the combined technical metrics and business metrics. Set up Amazon EventBridge rules to send notifications to stakeholders when metrics exceed predefined thresholds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudWatch custom dashboards that integrate operational metrics with imported business metrics. Set up CloudWatch composite alarms with anomaly detection. Use Amazon SNS to create alarm actions to notify stakeholders when correlated metrics indicate performance issues.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 95 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752600,
          "date": "Fri 01 May 2026 08:23",
          "username": "Chibuzo1",
          "content": "The answer is D because it delivers all three requirements — unified dashboards correlating technical and imported business metrics, composite alarms with anomaly detection for intelligent correlated alerting, and SNS for stakeholder notifications — entirely within the CloudWatch ecosystem that the engineering team already uses, requiring minimal new infrastructure, no new services to operate, and no custom code while providing the most sophisticated alerting capability (anomaly detection + composite alarms) of all options presented.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1748608,
          "date": "Sat 18 Apr 2026 15:47",
          "username": "AWS_SkillBuilder",
          "content": "Proactive Monitoring: Incorporating Anomaly Detection allows CloudWatch to learn the \"normal\" patterns of your business (e.g., higher traffic on weekends) and only trigger alerts when a metric deviates from its expected baseline, reducing false positives.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1747476,
          "date": "Wed 15 Apr 2026 02:24",
          "username": "de1612d",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1746439,
          "date": "Sun 12 Apr 2026 08:44",
          "username": "de1612d",
          "content": "Gemini answer is A<br><div>Replies:</div><ul><li>Delete please</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1747478,
          "date": "Wed 15 Apr 2026 02:25",
          "username": "de1612d",
          "content": "Delete please",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A GenAI developer is evaluating Amazon Bedrock foundation models (FMs) to enhance a Europe-based company's internal business application. The company has a multi-account landing zone in AWS Control Tower. The company uses SCPs to allow its accounts to use only the eu-north-1 Region and the eu-west-1 Region. All customer data must remain in private networks within the approved AWS Regions.<br/><br/>The GenAI developer selects an FM based on analysis and testing and hosts the model in the eu-central-1 Region and the eu-west-3 Region. The GenAI developer must enable access to the FM for the company’s employees. The GenAI developer must ensure that requests to the FM are private and remain with the same Regions as the FM.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho nhân viên dùng FM trong eu-central-1 và eu-west-3 trong khi SCP chỉ cho eu-north-1, eu-west-1.</li><li>Requirement chính: request private, nằm trong châu Âu.</li><li>Ưu tiên: private network, data residency theo châu lục.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region inference profile</strong> với prefix `eu.` giữ request trong các Region châu Âu. <strong>Bedrock VPC endpoint</strong> (PrivateLink) giữ traffic private, SCP được mở rộng cho inference profile ở các Region châu Âu liên quan.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không thể tạo VPC endpoint riêng cho từng FM, thiết kế lệch với cách Bedrock hoạt động.</li><li><strong>B</strong>: ❌ Sai — FM Bedrock không deploy lên EC2, cấu hình sai bản chất dịch vụ.</li><li><strong>C</strong>: ✅ Đúng — `eu.` inference profile + VPC endpoint + SCP mở rộng.</li><li><strong>D</strong>: ❌ Sai — đổi sang SageMaker AI, không phải FM đã chọn trong Bedrock và nằm ngoài Region của FM.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Cross-Region inference, `eu.` inference profile, Bedrock VPC endpoint, SCP, data residency.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Giữ trong châu lục + private\" → nghĩ ngay đến geographic inference profile + VPC endpoint.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#96",
          "answers": [
            {
              "choice": "<p>Deploy an AWS Lambda function that is exposed by a private Amazon API Gateway REST API to a VPC in eu-north-1. Create a VPC endpoint for the selected FM in eu-central-1 and eu-west-3. Extend existing SCPs to allow employees to use the FM. Integrate the REST API with the business application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the FM on Amazon EC2 instances in eu-north-1. Deploy a private Amazon API Gateway REST API in front of the EC2 instances. Configure an Amazon Bedrock VPC endpoint. Integrate the REST API with the business application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the FM to use cross-Region inference through an eu.amazon.* endpoint to ensure that all calls remain within Europe. Configure an Amazon Bedrock VPC endpoint. Extend existing SCPs to allow employees to use the FM through inference profiles in Europe-based Regions where the FM is available. Use an inference profile to integrate Amazon Bedrock with the business application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the FM in Amazon SageMaker AI in eu-north-1. Configure a SageMaker AI VPC endpoint. Extend existing SCPs to allow employees to use the SageMaker AI endpoint. Integrate the FM in SageMaker AI with the business application.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 96 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1752714,
          "date": "Fri 01 May 2026 17:16",
          "username": "Chibuzo1",
          "content": "The answer is C because it is the only option that works with the FM as already deployed in eu-central-1 and eu-west-3, uses the native Bedrock mechanism designed for exactly this scenario (cross-Region inference profiles with eu.* endpoints keeping traffic within Europe), ensures private network connectivity through a Bedrock VPC endpoint, and resolves the SCP constraint through a targeted policy extension for inference profiles — without rebuilding the architecture, abandoning Bedrock, or creating Regional access violations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1746440,
          "date": "Sun 12 Apr 2026 08:54",
          "username": "de1612d",
          "content": "Gemini answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    }
  ]
}