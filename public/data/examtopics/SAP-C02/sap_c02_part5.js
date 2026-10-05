var SAP_C02_Part5 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#401",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to design a disaster recovery (DR) solution for an application that runs in the company’s data center. The application writes to an SMB file share and creates a copy on a second file share. Both file shares are in the data center. The application uses two types of files: metadata files and image files.<br><br>The company wants to store the copy on AWS. The company needs the ability to use SMB to access the data from either the data center or AWS if a disaster occurs. The copy of the data is rarely accessed but must be available within 5 minutes.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: backup bản copy của SMB file share lên AWS cho DR, truy cập được bằng SMB từ on-premises hoặc AWS.</li><li>Requirement quyết định: dữ liệu hiếm khi truy cập nhưng phải sẵn sàng trong vòng 5 phút.</li><li>Ưu tiên: chi phí thấp nhưng vẫn đáp ứng thời gian truy xuất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon S3 File Gateway</strong> cung cấp giao thức SMB và lưu file dưới dạng object trong Amazon S3. <strong>S3 Standard-IA</strong> rẻ cho dữ liệu ít truy cập và truy xuất tức thì (milliseconds), nên đáp ứng yêu cầu 5 phút.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Outposts và EC2 file server tốn kém, phức tạp, không cần thiết cho bản copy DR.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — FSx for Windows Multi-AZ SSD hỗ trợ SMB nhưng rất đắt cho dữ liệu hiếm truy cập.</li><li><strong>C</strong>: ❌ Sai — S3 Glacier Deep Archive mất khoảng 12 giờ để restore, không đạt 5 phút.</li><li><strong>D</strong>: ✅ Đúng — S3 File Gateway (SMB) + S3 Standard-IA: rẻ và truy xuất tức thì.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SMB + S3 → S3 File Gateway</li><li>Rarely accessed → Standard-IA</li><li>Within 5 minutes → không dùng Glacier Deep Archive</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp SMB/NFS on-premises cần lưu vào S3 → nghĩ ngay đến S3 File Gateway; cần truy xuất nhanh → tránh Deep Archive.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#401",
          "answers": [
            {
              "choice": "<p>A. Deploy AWS Outposts with Amazon S3 storage. Configure a Windows Amazon EC2 instance on Outposts as a file server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon FSx File Gateway. Configure an Amazon FSx for Windows File Server Multi-AZ file system that uses SSD storage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Amazon S3 File Gateway. Configure the S3 File Gateway to use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the metadata files and to use S3 Glacier Deep Archive for the image files.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon S3 File Gateway. Configure the S3 File Gateway to use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the metadata files and image files.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#402",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a solution that can move 400 employees into a remote working environment in the event of an unexpected disaster. The user desktops have a mix of Windows and Linux operating systems. Multiple types of software, such as web browsers and mail clients, are installed on each desktop.<br><br>A solutions architect needs to implement a solution that can be integrated with the company’s on-premises Active Directory to allow employees to use their existing identity credentials. The solution must provide multifactor authentication (MFA) and must replicate the user experience from the existing desktops.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cung cấp desktop từ xa cho 400 nhân viên khi có thảm họa, gồm cả Windows và Linux.</li><li>Requirement quan trọng: tích hợp on-premises Active Directory, có MFA, tái tạo trải nghiệm desktop đầy đủ.</li><li>Ưu tiên: full desktop experience, dùng lại identity hiện có.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon WorkSpaces</strong> cung cấp desktop đầy đủ (Windows/Linux). <strong>AD Connector</strong> proxy xác thực về on-premises AD qua VPN, và MFA được thực hiện qua <strong>RADIUS server</strong> (AD Connector hỗ trợ RADIUS MFA).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — MFA của WorkSpaces không bật trực tiếp bằng console mà phải dùng RADIUS (AD Connector) trong directory settings.</li><li><strong>B</strong>: ❌ Sai — AppStream 2.0 stream ứng dụng, không thay thế đầy đủ desktop; cấu hình AD FS không phải cách đáp ứng MFA yêu cầu.</li><li><strong>C</strong>: ✅ Đúng — WorkSpaces + AD Connector + RADIUS MFA.</li><li><strong>D</strong>: ❌ Sai — AppStream 2.0 chỉ stream app, không replicate đầy đủ desktop.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>WorkSpaces + AD Connector</li><li>RADIUS MFA</li><li>Replicate desktop experience</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp virtual desktop + on-premises AD + MFA → nghĩ ngay đến WorkSpaces + AD Connector + RADIUS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#402",
          "answers": [
            {
              "choice": "<p>A. Use Amazon WorkSpaces for the cloud desktop service. Set up a VPN connection to the on-premises network. Create an AD Connector, and connect to the on-premises Active Directory. Activate MFA for Amazon WorkSpaces by using the AWS Management Console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon AppStream 2.0 as an application streaming service. Configure Desktop View for the employees. Set up a VPN connection to the on-premises network. Set up Active Directory Federation Services (AD FS) on premises. Connect the VPC network to AD FS through the VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon WorkSpaces for the cloud desktop service. Set up a VPN connection to the on-premises network. Create an AD Connector, and connect to the on-premises Active Directory. Configure a RADIUS server for MFA.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon AppStream 2.0 as an application streaming service. Set up Active Directory Federation Services on premises. Configure MFA to grant users access on AppStream 2.0.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#403",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an Amazon Connect contact center. Contact center agents are reporting large numbers of computer-generated calls. The company is concerned about the cost and productivity effects of these calls. The company wants a solution that will allow agents to flag the call as spam and automatically block the numbers from going to an agent in the future.<br><br>What is the MOST operationally efficient solution to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: agent đánh dấu cuộc gọi là spam và tự động chặn số đó về sau.</li><li>Requirement quan trọng: agent chủ động flag; hệ thống tự block.</li><li>Ưu tiên: MOST operationally efficient, ít thay đổi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Thêm nút flag vào <strong>Contact Control Panel (CCP)</strong> gọi <strong>AWS Lambda</strong> với <strong>UpdateContactAttributes</strong>; số spam lưu trong <strong>Amazon DynamoDB</strong>, contact flow kiểm tra attribute và tra DynamoDB để chặn lần sau.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — agent flag trực tiếp trong CCP, DynamoDB lưu số, contact flow chặn tự động.</li><li><strong>B</strong>: ❌ Sai — Contact Lens rule phân tích nội dung, không phải cơ chế agent tự flag cuộc gọi spam.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — transfer qua quick connect là workaround, tốn thao tác và tạo cuộc transfer không cần thiết.</li><li><strong>D</strong>: ❌ Sai — bắt caller nhập input gây phiền cho khách thật và agent không flag được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Connect CCP customization</li><li>UpdateContactAttributes</li><li>DynamoDB blocklist</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp agent flag cuộc gọi trong Amazon Connect → nghĩ ngay đến CCP tùy chỉnh + Lambda + contact attributes.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#403",
          "answers": [
            {
              "choice": "<p>A. Customize the Contact Control Panel (CCP) by adding a flag call button that will invoke an AWS Lambda function that calls the UpdateContactAttributes API. Use an Amazon DynamoDB table to store the spam numbers. Modify the contact flows to look for the updated attribute and to use a Lambda function to read and write to the DynamoDB table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a Contact Lens for Amazon Connect rule that will look for spam calls. Use an Amazon DynamoDB table to store the spam numbers. Modify the contact flows to look for the rule and to invoke an AWS Lambda function to read and write to the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon DynamoDB table to store the spam numbers. Create a quick connect that the agents can transfer the spam call to from the Contact Control Panel (CCP). Modify the quick connect contact flow to invoke an AWS Lambda function to write to the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the initial contact flow to ask for caller input. If the agent does not receive input, the agent should mark the caller as spam. Use an Amazon DynamoDB table to store the spam numbers. Use an AWS Lambda function to read and write to the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#404",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has mounted sensors to collect information about environmental parameters such as humidity and light throughout all the company's factories. The company needs to stream and analyze the data in the AWS Cloud in real time. If any of the parameters fall out of acceptable ranges, the factory operations team must receive a notification immediately.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: stream dữ liệu sensor, phân tích real time và thông báo ngay khi vượt ngưỡng.</li><li>Requirement quan trọng: real time + notification tức thì.</li><li>Ưu tiên: dùng service managed, đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Kinesis Data Streams</strong> nhận dữ liệu real time, <strong>AWS Lambda</strong> consume và kiểm tra ngưỡng, rồi <strong>Amazon SNS</strong> gửi thông báo ngay cho operations team.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Firehose có buffer (độ trễ) và là dịch vụ delivery, Step Functions không consume trực tiếp từ Firehose.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Amazon MSK + Fargate phức tạp, MSK không có trigger trực tiếp kiểu này; SES là email, không phù hợp alert.</li><li><strong>C</strong>: ✅ Đúng — Kinesis Data Streams + Lambda + SNS, real time và đơn giản.</li><li><strong>D</strong>: ❌ Sai — Kinesis Data Analytics không chuyển dữ liệu cho ECS như mô tả, kiến trúc rườm rà; SES không phải kênh alert.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Real time streaming → Kinesis Data Streams</li><li>Lambda consumer</li><li>SNS notification</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp stream real time + alert ngay → nghĩ ngay đến Kinesis Data Streams + Lambda + SNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#404",
          "answers": [
            {
              "choice": "<p>A. Stream the data to an Amazon Kinesis Data Firehose delivery stream. Use AWS Step Functions to consume and analyze the data in the Kinesis Data Firehose delivery stream. Use Amazon Simple Notification Service (Amazon SNS) to notify the operations team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stream the data to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster. Set up a trigger in Amazon MSK to invoke an AWS Fargate task to analyze the data. Use Amazon Simple Email Service (Amazon SES) to notify the operations team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stream the data to an Amazon Kinesis data stream. Create an AWS Lambda function to consume the Kinesis data stream and to analyze the data. Use Amazon Simple Notification Service (Amazon SNS) to notify the operations team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stream the data to an Amazon Kinesis Data Analytics application. Use an automatically scaled and containerized service in Amazon Elastic Container Service (Amazon ECS) to consume and analyze the data. Use Amazon Simple Email Service (Amazon SES) to notify the operations team.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#405",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is preparing to deploy an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for a workload. The company expects the cluster to support an unpredictable number of stateless pods. Many of the pods will be created during a short time period as the workload automatically scales the number of replicas that the workload uses.<br><br>Which solution will MAXIMIZE node resilience?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: EKS cluster chạy nhiều stateless pods, scale đột biến.</li><li>Requirement quan trọng: MAXIMIZE node resilience.</li><li>Ưu tiên: high availability, chịu được lỗi node/AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Topology spread constraints</strong> theo Availability Zone phân bố pods đều qua nhiều AZ, nên lỗi một node hoặc một AZ chỉ ảnh hưởng một phần replicas.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — control plane do EKS quản lý, không deploy bằng launch template riêng.</li><li><strong>B</strong>: ❌ Sai — ít node group và instance lớn làm tăng blast radius, giảm resilience.</li><li><strong>C</strong>: ❌ Sai — để capacity underprovisioned làm pod pending khi scale, giảm resilience.</li><li><strong>D</strong>: ✅ Đúng — spread pods qua AZ tăng khả năng chịu lỗi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>topologySpreadConstraints</li><li>Availability Zone spread</li><li>Blast radius nhỏ</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp resilience cho pods trên EKS → nghĩ ngay đến topology spread constraints theo AZ và nhiều instance nhỏ.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#405",
          "answers": [
            {
              "choice": "<p>A. Use a separate launch template to deploy the EKS control plane into a second cluster that is separate from the workload node groups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the workload node groups. Use a smaller number of node groups and larger instances in the node groups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Kubernetes Cluster Autoscaler to ensure that the compute capacity of the workload node groups stays underprovisioned.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the workload to use topology spread constraints that are based on Availability Zone.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#406",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement a disaster recovery (DR) plan for a web application. The application runs in a single AWS Region.<br><br>The application uses microservices that run in containers. The containers are hosted on AWS Fargate in Amazon Elastic Container Service (Amazon ECS). The application has an Amazon RDS for MySQL DB instance as its data layer and uses Amazon Route 53 for DNS resolution. An Amazon CloudWatch alarm invokes an Amazon EventBridge rule if the application experiences a failure.<br><br>A solutions architect must design a DR solution to provide application recovery to a separate Region. The solution must minimize the time that is necessary to recover from a failure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DR sang Region khác cho ứng dụng ECS Fargate + RDS for MySQL.</li><li>Requirement quan trọng: MINIMIZE thời gian recovery (RTO thấp).</li><li>Ưu tiên: standby sẵn sàng, tự động failover.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chạy sẵn ECS cluster ở Region thứ hai và dùng <strong>cross-Region read replica</strong> của RDS. Khi lỗi, Lambda promote replica và cập nhật <strong>Amazon Route 53</strong>, nên recovery nhanh (warm standby).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — snapshot, copy và restore lúc failover rất chậm, và không thể snapshot khi primary đã lỗi.</li><li><strong>B</strong>: ❌ Sai — tạo cả ECS cluster lúc failover cộng thêm restore snapshot, RTO cao nhất.</li><li><strong>C</strong>: ✅ Đúng — read replica cross-Region, promote nhanh.</li><li><strong>D</strong>: ❌ Sai — không thể chuyển RDS snapshot thành DynamoDB global table.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region read replica</li><li>Warm standby</li><li>Promote replica + Route 53</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR RDS cross-Region RTO thấp → nghĩ ngay đến cross-Region read replica rồi promote.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#406",
          "answers": [
            {
              "choice": "<p>A. Setup a second ECS cluster and ECS service on Fargate in the separate Region. Create an AWS Lambda function to perform the following actions: take a snapshot of the RDS DB instance, copy the snapshot to the separate Region, create a new RDS DB instance from the snapshot, and update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function that creates a second ECS cluster and ECS service in the separate Region. Configure the Lambda function to perform the following actions: take a snapshot of the RDS DB instance, copy the snapshot to the separate Region, create a new RDS DB instance from the snapshot, and update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup a second ECS cluster and ECS service on Fargate in the separate Region. Create a cross-Region read replica of the RDS DB instance in the separate Region. Create an AWS Lambda function to promote the read replica to the primary database. Configure the Lambda function to update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Setup a second ECS cluster and ECS service on Fargate in the separate Region. Take a snapshot of the RDS DB instance. Convert the snapshot to an Amazon DynamoDB global table. Create an AWS Lambda function to update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#407",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has AWS accounts that are in an organization in AWS Organizations. The company wants to track Amazon EC2 usage as a metric. The company’s architecture team must receive a daily alert if the EC2 usage is more than 10% higher the average EC2 usage from the last 30 days.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cảnh báo hằng ngày khi usage EC2 cao hơn 10% so với trung bình 30 ngày.</li><li>Requirement quan trọng: ngưỡng usage cụ thể, kỳ daily, ở cấp organization.</li><li>Ưu tiên: dùng đúng công cụ theo dõi usage với ngưỡng cố định.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Budgets</strong> (usage budget) ở management account với usage type EC2 running hours, period daily, ngưỡng bằng trung bình + 10% lấy từ <strong>Cost Explorer</strong>, kèm alert notification.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — usage budget daily với ngưỡng đặt sẵn và alert.</li><li><strong>B</strong>: ❌ Sai — Cost Anomaly Detection dùng ML và theo dõi cost, không đặt được ngưỡng 10% so với trung bình 30 ngày.</li><li><strong>C</strong>: ❌ Sai — Trusted Advisor không có alert tuỳ biến theo usage kiểu này.</li><li><strong>D</strong>: ❌ Sai — Amazon Detective phục vụ điều tra security, không theo dõi EC2 usage.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Budgets usage budget</li><li>EC2 running hours</li><li>Daily period</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp alert theo ngưỡng usage/cost cố định → nghĩ ngay đến AWS Budgets.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#407",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Budgets in the organization's management account. Specify a usage type of EC2 running hours. Specify a daily period. Set the budget amount to be 10% more than the reported average usage for the last 30 days from AWS Cost Explorer. Configure an alert to notify the architecture team if the usage threshold is met</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Cost Anomaly Detection in the organization's management account. Configure a monitor type of AWS Service. Apply a filter of Amazon EC2. Configure an alert subscription to notify the architecture team if the usage is 10% more than the average usage for the last 30 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS Trusted Advisor in the organization's management account. Configure a cost optimization advisory alert to notify the architecture team if the EC2 usage is 10% more than the reported average usage for the last 30 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Detective in the organization's management account. Configure an EC2 usage anomaly alert to notify the architecture team if Detective identifies a usage anomaly of more than 10%.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#408",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An e-commerce company is revamping its IT infrastructure and is planning to use AWS services. The company’s CIO has asked a solutions architect to design a simple, highly available, and loosely coupled order processing application. The application is responsible for receiving and processing orders before storing them in an Amazon DynamoDB table. The application has a sporadic traffic pattern and should be able to scale during marketing campaigns to process the orders with minimal delays.<br><br>Which of the following is the MOST reliable approach to meet the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý đơn hàng, lưu vào Amazon DynamoDB, traffic bất thường.</li><li>Requirement quan trọng: simple, highly available, loosely coupled, scale nhanh.</li><li>Ưu tiên: MOST reliable, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon SQS</strong> tách rời (decouple) nhận và xử lý đơn, lưu message bền vững; <strong>AWS Lambda</strong> tự scale theo queue, phù hợp traffic sporadic.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — database trên EC2 và EC2 xử lý là tightly coupled, khó scale, vận hành nhiều.</li><li><strong>B</strong>: ✅ Đúng — SQS + Lambda, serverless, loosely coupled, scale tự động.</li><li><strong>C</strong>: ❌ Sai — Step Functions không phải điểm nhận đơn hàng; thêm ECS phức tạp.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Kinesis Data Streams cần quản lý shard và EC2 xử lý, không đơn giản và không serverless.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Loosely coupled → SQS</li><li>Sporadic traffic → Lambda</li><li>Serverless, highly available</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp loosely coupled + order processing + scale đột biến → nghĩ ngay đến SQS + Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#408",
          "answers": [
            {
              "choice": "<p>A. Receive the orders in an Amazon EC2-hosted database and use EC2 instances to process them.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Receive the orders in an Amazon SQS queue and invoke an AWS Lambda function to process them.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Receive the orders using the AWS Step Functions program and launch an Amazon ECS container to process them.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Receive the orders in Amazon Kinesis Data Streams and use Amazon EC2 instances to process them.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#409",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying AWS Lambda functions that access an Amazon RDS for PostgreSQL database. The company needs to launch the Lambda functions in a QA environment and in a production environment.<br><br>The company must not expose credentials within application code and must rotate passwords automatically.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Lambda truy cập RDS PostgreSQL ở QA và production, không để lộ credentials.</li><li>Requirement quan trọng: không hard-code credentials và tự động rotate password.</li><li>Ưu tiên: security, automation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Secrets Manager</strong> lưu credentials riêng cho từng môi trường và hỗ trợ <strong>automatic rotation</strong> native cho RDS; Lambda tham chiếu secret qua environment variable.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Parameter Store lưu được nhưng không có rotation tự động tích hợp cho RDS.</li><li><strong>B</strong>: ✅ Đúng — Secrets Manager có rotation, tách theo môi trường.</li><li><strong>C</strong>: ❌ Sai — AWS KMS quản lý encryption key, không lưu credentials.</li><li><strong>D</strong>: ❌ Sai — lưu credentials trong Amazon S3 không an toàn và không có rotation.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Secrets Manager</li><li>Automatic rotation</li><li>Không hard-code credentials</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp credentials DB + rotate tự động → nghĩ ngay đến AWS Secrets Manager.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#409",
          "answers": [
            {
              "choice": "<p>A. Store the database credentials for both environments in AWS Systems Manager Parameter Store. Encrypt the credentials by using an AWS Key Management Service (AWS KMS) key. Within the application code of the Lambda functions, pull the credentials from the Parameter Store parameter by using the AWS SDK for Python (Boto3). Add a role to the Lambda functions to provide access to the Parameter Store parameter.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the database credentials for both environments in AWS Secrets Manager with distinct key entry for the QA environment and the production environment. Turn on rotation. Provide a reference to the Secrets Manager key as an environment variable for the Lambda functions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database credentials for both environments in AWS Key Management Service (AWS KMS). Turn on rotation. Provide a reference to the credentials that are stored in AWS KMS as an environment variable for the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create separate S3 buckets for the QA environment and the production environment. Turn on server-side encryption with AWS KMS keys (SSE-KMS) for the S3 buckets. Use an object naming pattern that gives each Lambda function’s application code the ability to pull the correct credentials for the function's corresponding environment. Grant each Lambda function's execution role access to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#410",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Control Tower to manage AWS accounts in an organization in AWS Organizations. The company has an OU that contains accounts. The company must prevent any new or existing Amazon EC2 instances in the OU's accounts from gaining a public IP address.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ngăn EC2 mới và hiện có trong OU nhận public IP.</li><li>Requirement quan trọng: preventive guardrail áp dụng cho cả instance mới lẫn hiện có.</li><li>Ưu tiên: enforce ở cấp OU, không thể bị bypass.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SCP</strong> gắn vào OU là preventive control cứng: chặn launch instance có public IP và chặn thao tác gán public IP (ví dụ associate Elastic IP, modify network interface) cho instance hiện có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Systems Manager Automation chỉ phản ứng sau, cần cấu hình trên từng instance.</li><li><strong>B</strong>: ❌ Sai — proactive control kiểm tra CloudFormation template, không áp dụng cho instance hiện có hoặc launch ngoài CloudFormation.</li><li><strong>C</strong>: ✅ Đúng — SCP trên OU chặn cả hai trường hợp.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — AWS Config + remediation là detective, chỉ xử lý sau khi đã có public IP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP trên OU</li><li>Preventive vs detective</li><li>Proactive control chỉ cho CloudFormation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ngăn chặn hành động ở cấp OU/organization → nghĩ ngay đến SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#410",
          "answers": [
            {
              "choice": "<p>A. Configure all instances in each account in the OU to use AWS Systems Manager. Use a Systems Manager Automation runbook to prevent public IP addresses from being attached to the instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement the AWS Control Tower proactive control to check whether instances in the OU's accounts have a public IP address. Set the AssociatePublicIpAddress property to False. Attach the proactive control to the OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP that prevents the launch of instances that have a public IP address. Additionally, configure the SCP to prevent the attachment of a public IP address to existing instances. Attach the SCP to the OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config custom rule that detects instances that have a public IP address. Configure a remediation action that uses an AWS Lambda function to detach the public IP addresses from the instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#411",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a third-party web application on AWS. The application is packaged as a Docker image. The company has deployed the Docker image as an AWS Fargate service in Amazon Elastic Container Service (Amazon ECS). An Application Load Balancer (ALB) directs traffic to the application.<br><br>The company needs to give only a specific list of users the ability to access the application from the internet. The company cannot change the application and cannot integrate the application with an identity provider. All users must be authenticated through multi-factor authentication (MFA).<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giới hạn danh sách user truy cập app qua ALB, bắt buộc MFA.</li><li>Requirement quan trọng: không sửa app, không tích hợp IdP bên ngoài.</li><li>Ưu tiên: authentication ở tầng load balancer.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ALB</strong> hỗ trợ listener rule authenticate với <strong>Amazon Cognito user pool</strong>; user pool chứa danh sách user và bật MFA, nên không cần sửa ứng dụng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Cognito user pool có MFA + ALB authenticate action.</li><li><strong>B</strong>: ❌ Sai — IAM user không dùng để xác thực end user web qua ALB, và Fargate không có resource policy kiểu này.</li><li><strong>C</strong>: ❌ Sai — IAM Identity Center không có \"resource protection rule\" cho ALB.</li><li><strong>D</strong>: ❌ Sai — Amplify không có user pool riêng và ALB không tích hợp Amplify hosted UI (Amplify dùng Cognito phía sau).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ALB authenticate-cognito</li><li>Cognito user pool + MFA</li><li>Không đổi code ứng dụng</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp xác thực user cho app không sửa được sau ALB → nghĩ ngay đến ALB + Cognito user pool.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#411",
          "answers": [
            {
              "choice": "<p>A. Create a user pool in Amazon Cognito. Configure the pool for the application. Populate the pool with the required users. Configure the pool to require MFConfigure a listener rule on the ALB to require authentication through the Amazon Cognito hosted UI.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the users in AWS Identity and Access Management (IAM). Attach a resource policy to the Fargate service to require users to use MFA. Configure a listener rule on the ALB to require authentication through IAM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the users in AWS Identity and Access Management (IAM). Enable AWS IAM Identity Center (AWS Single Sign-On). Configure resource protection for the ALB. Create a resource protection rule to require users to use MFA.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a user pool in AWS Amplify. Configure the pool for the application. Populate the pool with the required users. Configure the pool to require MFA. Configure a listener rule on the ALB to require authentication through the Amplify hosted UI.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#412",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is preparing to deploy a new security tool into several previously unused AWS Regions. The solutions architect will deploy the tool by using an AWS CloudFormation stack set. The stack set's template contains an IAM role that has a custom name. Upon creation of the stack set, no stack instances are created successfully.<br><br>What should the solutions architect do to deploy the stacks successfully?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: stack set triển khai vào Region chưa dùng, template có IAM role tên tùy chỉnh, nhưng không tạo được stack instance nào.</li><li>Requirement quan trọng: nguyên nhân thất bại ở Region mới và custom IAM name.</li><li>Ưu tiên: khắc phục đúng nguyên nhân gốc.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Region mới (opt-in Regions) phải được <strong>enable</strong> trong các account liên quan, và IAM role có custom name bắt buộc capability <strong>CAPABILITY_NAMED_IAM</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — enable Region + CAPABILITY_NAMED_IAM xử lý cả hai vấn đề.</li><li><strong>B</strong>: ❌ Sai — quota stack không phải nguyên nhân, và CAPABILITY_IAM không đủ cho named role.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — có capability đúng nhưng không enable Region, và SELF_MANAGED không giải quyết lỗi.</li><li><strong>D</strong>: ❌ Sai — CAPABILITY_IAM không đủ cho IAM role có custom name; administration role không giải quyết vấn đề Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CAPABILITY_NAMED_IAM</li><li>Opt-in Regions</li><li>CloudFormation StackSets</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp IAM resource có tên tùy chỉnh trong CloudFormation → nghĩ ngay đến CAPABILITY_NAMED_IAM.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#412",
          "answers": [
            {
              "choice": "<p>A. Enable the new Regions in all relevant accounts. Specify the CAPABILITY_NAMED_IAM capability during the creation of the stack set.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Service Quotas console to request a quota increase for the number of CloudFormation stacks in each new Region in all relevant accounts. Specify the CAPABILITY_IAM capability during the creation of the stack set.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Specify the CAPABILITY_NAMED_IAM capability and the SELF_MANAGED permissions model during the creation of the stack set.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Specify an administration role ARN and the CAPABILITY_IAM capability during the creation of the stack set.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#413",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses an Amazon Aurora PostgreSQL DB cluster for the application's database. The DB cluster contains one small primary instance and three larger replica instances. The application runs on an AWS Lambda function. The application makes many short-lived connections to the database's replica instances to perform read-only operations.<br><br>During periods of high traffic, the application becomes unreliable and the database reports that too many connections are being established. The frequency of high-traffic periods is unpredictable.<br><br>Which solution will improve the reliability of the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Lambda tạo nhiều short-lived connections tới Aurora PostgreSQL replicas gây quá tải connection.</li><li>Requirement quan trọng: cải thiện reliability khi traffic không dự đoán được.</li><li>Ưu tiên: connection pooling, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon RDS Proxy</strong> gom và tái sử dụng connections, phù hợp Lambda; tạo <strong>read-only endpoint</strong> của proxy để các truy vấn đọc đi vào replicas.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — RDS Proxy + read-only endpoint, giải quyết connection exhaustion.</li><li><strong>B</strong>: ❌ Sai — tăng max_connections chỉ là giải pháp tạm; replica nhỏ hơn bị áp lực, và cluster endpoint trỏ về writer nhỏ.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — scale theo metric phản ứng chậm, không xử lý gốc rễ là số lượng connection.</li><li><strong>D</strong>: ❌ Sai — \"read-only endpoint cho Aurora Data API trên proxy\" không tồn tại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy</li><li>Lambda many short-lived connections</li><li>Read-only endpoint</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Lambda + too many connections tới RDS/Aurora → nghĩ ngay đến RDS Proxy.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#413",
          "answers": [
            {
              "choice": "<p>A. Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the proxy. Update the Lambda function to connect to the proxy endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the max_connections setting on the DB cluster's parameter group. Reboot all the instances in the DB cluster. Update the Lambda function to connect to the DB cluster endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure instance scaling for the DB cluster to occur when the DatabaseConnections metric is close to the max connections setting. Update the Lambda function to connect to the Aurora reader endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the Aurora Data API on the proxy. Update the Lambda function to connect to the proxy endpoint.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#414",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is mounting IoT sensors in all of its stores worldwide. During the manufacturing of each sensor, the company’s private certificate authority (CA) issues an X.509 certificate that contains a unique serial number. The company then deploys each certificate to its respective sensor.<br><br>A solutions architect needs to give the sensors the ability to send data to AWS after they are installed. Sensors must not be able to send data to AWS until they are installed.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: sensor có certificate X.509 từ private CA, chỉ được gửi dữ liệu sau khi lắp đặt.</li><li>Requirement quan trọng: validate serial number, tự động provision khi sensor kết nối lần đầu.</li><li>Ưu tiên: không cần thao tác thủ công khi cài đặt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>just-in-time provisioning (JITP)</strong>: đăng ký CA với <strong>AWS IoT Core</strong>, bật auto-registration và gắn provisioning template với <strong>pre-provisioning hook</strong> (Lambda) kiểm tra SerialNumber. Thiết bị chỉ được provision khi lần đầu kết nối sau lắp đặt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — gọi RegisterThing lúc manufacturing nghĩa là đã được phép trước khi lắp đặt.</li><li><strong>B</strong>: ❌ Sai — Step Functions không phải hook hợp lệ cho provisioning template, và StartThingRegistrationTask là bulk registration.</li><li><strong>C</strong>: ✅ Đúng — JITP với CA, auto-registration và Lambda hook.</li><li><strong>D</strong>: ❌ Sai — claim certificate là mô hình fleet provisioning, không dùng certificate đã cấp bởi CA riêng cho từng thiết bị; không có validation bằng Lambda.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Just-in-time provisioning</li><li>Pre-provisioning hook</li><li>Register CA + auto-registration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp device có cert từ private CA, provision khi kết nối lần đầu → nghĩ ngay đến JITP trong AWS IoT Core.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#414",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Add the Lambda function as a pre-provisioning hook. During manufacturing, call the RegisterThing API operation and specify the template and parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Step Functions state machine that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Specify the Step Functions state machine to validate parameters. Call the StartThingRegistrationTask API operation during installation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Add the Lambda function as a pre-provisioning hook. Register the CA with AWS IoT Core, specify the provisioning template, and set the allow-auto-registration parameter.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Include parameter validation in the template. Provision a claim certificate and a private key for each device that uses the CA. Grant AWS IoT Core service permissions to update AWS IoT things during provisioning.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#415",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company recently migrated a large ecommerce website to AWS. The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The DevOps team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue.<br><br>The software engineers have decided to use AWS CodePipeline to manage their build and deployment process.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: CI/CD với GitHub, Jenkins, CodePipeline.</li><li>Requirement quan trọng: thông báo build lỗi, zero downtime, rollback dễ.</li><li>Ưu tiên: deployment an toàn, không gián đoạn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>GitHub <strong>webhooks</strong> kích hoạt pipeline, plugin Jenkins cho <strong>AWS CodeBuild</strong> chạy unit test, <strong>Amazon SNS</strong> báo build lỗi, và <strong>blue/green deployment</strong> với <strong>AWS CodeDeploy</strong> cho zero downtime và rollback.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — \"GitHub websockets\" không phải cơ chế trigger, và in-place all-at-once gây downtime.</li><li><strong>B</strong>: ✅ Đúng — webhooks + CodeBuild + SNS + blue/green.</li><li><strong>C</strong>: ❌ Sai — websockets sai và AWS X-Ray là tracing, không dùng để unit test.</li><li><strong>D</strong>: ❌ Sai — X-Ray không dùng để unit test; in-place all-at-once gây downtime.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>GitHub webhooks</li><li>Blue/green CodeDeploy</li><li>Zero downtime + rollback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp zero downtime và rollback dễ → nghĩ ngay đến blue/green deployment.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#415",
          "answers": [
            {
              "choice": "<p>A. Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#416",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software as a service (SaaS) company has developed a multi-tenant environment. The company uses Amazon DynamoDB tables that the tenants share for the storage layer. The company uses AWS Lambda functions for the application services.<br><br>The company wants to offer a tiered subscription model that is based on resource consumption by each tenant. Each tenant is identified by a unique tenant ID that is sent as part of each request to the Lambda functions. The company has created an AWS Cost and Usage Report (AWS CUR) in an AWS account. The company wants to allocate the DynamoDB costs to each tenant to match that tenant's resource consumption.<br><br>Which solution will provide a granular view of the DynamoDB cost for each tenant with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chia chi phí DynamoDB dùng chung bảng cho từng tenant.</li><li>Requirement quan trọng: granular theo mức tiêu thụ thực của tenant.</li><li>Ưu tiên: LEAST operational effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda ghi lại tenant ID cùng số RCU/WCU tiêu thụ cho mỗi transaction vào <strong>CloudWatch Logs</strong>, rồi một Lambda theo lịch tính chi phí từng tenant theo tỷ lệ capacity với tổng chi phí từ <strong>Cost Explorer API</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tag gắn trên bảng dùng chung không phân tách được chi phí theo tenant.</li><li><strong>B</strong>: ✅ Đúng — đo mức tiêu thụ thực theo tenant và phân bổ chi phí.</li><li><strong>C</strong>: ❌ Sai — đếm số item không phản ánh mức tiêu thụ capacity, và đổi partition key rất tốn công.</li><li><strong>D</strong>: ❌ Sai — response size và duration không phản ánh RCU/WCU; Pricing Calculator không cho chi phí thực.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Shared DynamoDB table</li><li>RCU/WCU per tenant</li><li>Cost Explorer API</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phân bổ chi phí theo tenant trên tài nguyên dùng chung → nghĩ ngay đến đo mức tiêu thụ theo tenant, không phải tag.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#416",
          "answers": [
            {
              "choice": "<p>A. Associate a new tag that is named tenant ID with each table in DynamoDB. Activate the tag as a cost allocation tag in the AWS Billing and Cost Management console. Deploy new Lambda function code to log the tenant ID in Amazon CloudWatch Logs. Use the AWS CUR to separate DynamoDB consumption cost for each tenant ID.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Lambda functions to log the tenant ID and the number of RCUs and WCUs consumed from DynamoDB for each transaction to Amazon CloudWatch Logs. Deploy another Lambda function to calculate the tenant costs by using the logged capacity units and the overall DynamoDB cost from the AWS Cost Explorer API. Create an Amazon EventBridge rule to invoke the calculation Lambda function on a schedule.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new partition key that associates DynamoDB items with individual tenants. Deploy a Lambda function to populate the new column as part of each transaction. Deploy another Lambda function to calculate the tenant costs by using Amazon Athena to calculate the number of tenant items from DynamoDB and the overall DynamoDB cost from the AWS CUR. Create an Amazon EventBridge rule to invoke the calculation Lambda function on a schedule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a Lambda function to log the tenant ID, the size of each response, and the duration of the transaction call as custom metrics to Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query the custom metrics for each tenant. Use AWS Pricing Calculator to obtain the overall DynamoDB costs and to calculate the tenant costs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#417",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that stores data in a single Amazon S3 bucket. The company must keep all data for 1 year. The company’s security team is concerned that an attacker could gain access to the AWS account through leaked long-term credentials.<br><br>Which solution will ensure that existing and future objects in the S3 bucket are protected?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bảo vệ object trong S3 khỏi kẻ tấn công có long-term credentials bị lộ.</li><li>Requirement quan trọng: giữ dữ liệu 1 năm, bảo vệ cả object hiện có và tương lai.</li><li>Ưu tiên: bảo vệ không thể bị xóa dù account bị xâm nhập.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo account mới chỉ truy cập qua assumed role, bật <strong>S3 Versioning + S3 Object Lock</strong> với default retention 1 năm, replicate dữ liệu mới và dùng <strong>S3 Batch Replication</strong> cho dữ liệu cũ. Kẻ tấn công vào account gốc không xóa được bản sao.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tách account + Object Lock retention, bảo vệ cả dữ liệu cũ và mới.</li><li><strong>B</strong>: ❌ Sai — MFA Delete cần root credentials và không bật được bằng Lambda; Lifecycle xóa sau 1 năm không bảo vệ.</li><li><strong>C</strong>: ❌ Sai — chỉ kiểm soát việc tạo bucket, không bảo vệ object hiện có.</li><li><strong>D</strong>: ❌ Sai — GuardDuty chỉ phát hiện, không ngăn xóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Object Lock</li><li>Separate account</li><li>S3 Batch Replication</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp dữ liệu phải giữ nguyên và chống xóa dù credentials bị lộ → nghĩ ngay đến S3 Object Lock trong account tách biệt.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#417",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS account that is accessible only to the security team through an assumed role. Create an S3 bucket in the new account. Enable S3 Versioning and S3 Object Lock. Configure a default retention period of 1 year. Set up replication from the existing S3 bucket to the new S3 bucket. Create an S3 Batch Replication job to copy all existing data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the s3-bucket-versioning-enabled AWS Config managed rule. Configure an automatic remediation action that uses an AWS Lambda function to enable S3 Versioning and MFA Delete on noncompliant resources. Add an S3 Lifecycle rule to delete objects after 1 year.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Explicitly deny bucket creation from all users and roles except for an AWS Service Catalog launch constraint role. Define a Service Catalog product for the creation of the S3 bucket to force S3 Versioning and MFA Delete to be enabled. Authorize users to launch the product when they need to create an S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Amazon GuardDuty with the S3 protection feature for the account and the AWS Region. Add an S3 Lifecycle rule to delete objects after 1 year.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#418",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to improve the security of its web-based application on AWS. The application uses Amazon CloudFront with two custom origins. The first custom origin routes requests to an Amazon API Gateway HTTP API. The second custom origin routes traffic to an Application Load Balancer (ALB). The application integrates with an OpenID Connect (OIDC) identity provider (IdP) for user management.<br><br>A security audit shows that a JSON Web Token (JWT) authorizer provides access to the API. The security audit also shows that the ALB accepts requests from unauthenticated users.<br><br>A solutions architect must design a solution to ensure that all backend services respond to only authenticated users.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ALB phía sau CloudFront đang nhận request từ user chưa xác thực.</li><li>Requirement quan trọng: mọi backend chỉ phản hồi user đã authenticated.</li><li>Ưu tiên: dùng IdP OIDC sẵn có, ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ALB</strong> hỗ trợ authenticate action tích hợp trực tiếp với OIDC IdP, nên chỉ request đã xác thực mới đến backend, tương tự JWT authorizer ở API Gateway.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — ALB authenticate-oidc với IdP.</li><li><strong>B</strong>: ❌ Sai — signed URLs với policy permissive cho phép mọi request, không xác thực user.</li><li><strong>C</strong>: ❌ Sai — AWS WAF không biết request đã authenticated hay chưa theo OIDC.</li><li><strong>D</strong>: ❌ Sai — CloudTrail và Lambda chỉ phát hiện sau, không chặn theo thời gian thực.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ALB authenticate-oidc</li><li>JWT authorizer</li><li>Authenticated users only</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ALB cần xác thực user bằng OIDC/Cognito → nghĩ ngay đến ALB listener authentication action.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#418",
          "answers": [
            {
              "choice": "<p>A. Configure the ALB to enforce authentication and authorization by integrating the ALB with the IdP. Allow only authenticated users to access the backend services.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the CloudFront configuration to use signed URLs. Implement a permissive signing policy that allows any request to access the backend services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS WAF web ACL that filters out unauthenticated requests at the ALB level. Allow only authenticated traffic to reach the backend services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS CloudTrail to log all requests that come to the ALB. Create an AWS Lambda function to analyze the logs and block any requests that come from unauthenticated users.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#419",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates an AWS Control Tower landing zone to manage and govern a multi-account AWS environment. The company's security team will deploy preventive controls and detective controls to monitor AWS services across all the accounts. The security team needs a centralized view of the security state of all the accounts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Control Tower landing zone cần cái nhìn tập trung về trạng thái security của các account.</li><li>Requirement quan trọng: centralized view cho preventive và detective controls.</li><li>Ưu tiên: dùng dịch vụ tổng hợp findings đa account.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Security Hub</strong> tổng hợp findings và kết quả compliance (kể cả từ AWS Config) từ mọi account, bật cho organization với một <strong>delegated administrator</strong> để có dashboard tập trung.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — conformance pack triển khai rules nhưng không cho central view tổng hợp security posture.</li><li><strong>B</strong>: ❌ Sai — Amazon Detective dùng để điều tra, không phải dashboard posture.</li><li><strong>C</strong>: ❌ Sai — vẫn là Detective, không đáp ứng central security state.</li><li><strong>D</strong>: ✅ Đúng — Security Hub với delegated administrator.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Security Hub</li><li>Delegated administrator</li><li>Centralized security view</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp centralized view security state nhiều account → nghĩ ngay đến AWS Security Hub.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#419",
          "answers": [
            {
              "choice": "<p>A. From the AWS Control Tower management account, use AWS CloudFormation StackSets to deploy an AWS Config conformance pack to all accounts in the organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon Detective for the organization in AWS Organizations. Designate one AWS account as the delegated administrator for Detective.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. From the AWS Control Tower management account, deploy an AWS CloudFormation stack set that uses the automatic deployment option to enable Amazon Detective for the organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Security Hub for the organization in AWS Organizations. Designate one AWS account as the delegated administrator for Security Hub.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#420",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that develops consumer electronics with offices in Europe and Asia has 60 TB of software images stored on premises in Europe. The company wants to transfer the images to an Amazon S3 bucket in the ap-northeast-1 Region. New software images are created daily and must be encrypted in transit. The company needs a solution that does not require custom development to automatically transfer all existing and new software images to Amazon S3.<br><br>What is the next step in the transfer process?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển 60 TB image từ on-premises ở Europe sang S3 ở ap-northeast-1, và đồng bộ ảnh mới hằng ngày.</li><li>Requirement quan trọng: mã hóa in transit, không custom development, tự động.</li><li>Ưu tiên: managed, minimal effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DataSync</strong> agent chuyển dữ liệu tự động theo lịch, mã hóa in transit (TLS), phù hợp cả migration ban đầu lẫn incremental hằng ngày mà không cần code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — DataSync agent và task theo lịch.</li><li><strong>B</strong>: ❌ Sai — Kinesis Data Firehose không dùng để chuyển file on-premises, và không dùng được kiểu này với S3 Transfer Acceleration.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Snowball chỉ chuyển một lần, không tự động đồng bộ ảnh mới hằng ngày.</li><li><strong>D</strong>: ❌ Sai — cần custom script multipart upload qua VPN, không đạt yêu cầu no custom development.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS DataSync</li><li>Scheduled task</li><li>Encrypted in transit</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp chuyển dữ liệu on-premises sang S3 liên tục và không code → nghĩ ngay đến DataSync.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#420",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Amazon Kinesis Data Firehose to transfer the images using S3 Transfer Acceleration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Snowball device to transfer the images with the S3 bucket as the target.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Transfer the images over a Site-to-Site VPN connection using the S3 API with multipart upload.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#421",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that uses Amazon API Gateway. AWS Lambda, and Amazon DynamoDB. A recent marketing campaign has increased demand. Monitoring software reports that many requests have significantly longer response times than before the marketing campaign.<br><br>A solutions architect enabled Amazon CloudWatch Logs for API Gateway and noticed that errors are occurring on 20% of the requests. In CloudWatch, the Lambda function Throttles metric represents 1% of the requests and the Errors metric represents 10% of the requests. Application logs indicate that, when errors occur, there is a call to DynamoDB.<br><br>What change should the solutions architect make to improve the current response times as the web application becomes more popular?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: response chậm và lỗi tăng sau campaign; lỗi xảy ra khi gọi DynamoDB.</li><li>Requirement quan trọng: cải thiện response time khi app phổ biến hơn.</li><li>Ưu tiên: scalability của tầng dữ liệu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Throttle Lambda chỉ 1% nhưng Errors 10% với call DynamoDB, nên bottleneck là throughput của bảng. <strong>DynamoDB auto scaling</strong> tăng RCU/WCU theo tải.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda throttle chỉ 1%, không phải nút thắt chính.</li><li><strong>B</strong>: ✅ Đúng — auto scaling xử lý throttling do thiếu capacity trên DynamoDB.</li><li><strong>C</strong>: ❌ Sai — API Gateway không phải nguyên nhân lỗi.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tái tạo bảng tốn công và không có bằng chứng về hot partition.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DynamoDB auto scaling</li><li>Throttling RCU/WCU</li><li>Errors khi gọi DynamoDB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp lỗi và chậm khi gọi DynamoDB lúc traffic tăng → nghĩ ngay đến DynamoDB auto scaling (hoặc on-demand).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#421",
          "answers": [
            {
              "choice": "<p>A. Increase the concurrency limit of the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement DynamoDB auto scaling on the table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the API Gateway throttle limit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Re-create the DynamoDB table with a better-partitioned primary index.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#422",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that has a web frontend. The application runs in the company's on-premises data center and requires access to file storage for critical data. The application runs on three Linux VMs for redundancy. The architecture includes a load balancer with HTTP request-based routing.<br><br>The company needs to migrate the application to AWS as quickly as possible. The architecture on AWS must be highly available.<br><br>Which solution will meet these requirements with the FEWEST changes to the architecture?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: migrate app có 3 Linux VMs, file storage dùng chung và load balancer HTTP routing sang AWS.</li><li>Requirement quan trọng: nhanh nhất, highly available, FEWEST changes.</li><li>Ưu tiên: lift-and-shift tương đương kiến trúc cũ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Giữ nguyên mô hình VM với <strong>Amazon EC2</strong> ở 3 AZ, dùng <strong>Amazon EFS</strong> làm shared file storage (POSIX/Linux) và <strong>Application Load Balancer</strong> cho HTTP request-based routing.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chuyển sang container là thay đổi lớn, S3 không phải file system, NLB không routing HTTP.</li><li><strong>B</strong>: ✅ Đúng — EC2 + EFS + ALB, thay đổi ít nhất.</li><li><strong>C</strong>: ❌ Sai — EKS là thay đổi lớn, FSx for Lustre không phù hợp, NLB không routing HTTP.</li><li><strong>D</strong>: ❌ Sai — 3 Regions không cần thiết, EBS không chia sẻ giữa instances và không có CRR cho EBS.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Fewest changes → lift-and-shift</li><li>EFS shared file system</li><li>ALB HTTP routing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp migrate nhanh, ít thay đổi, cần shared file Linux → nghĩ ngay đến EC2 + EFS + ALB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#422",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type in three Availability Zones. Use Amazon S3 to provide file storage for all three containers. Use a Network Load Balancer to direct traffic to the containers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application to Amazon EC2 instances in three Availability Zones. Use Amazon Elastic File System (Amazon EFS) for file storage. Mount the file storage on all three EC2 instances. Use an Application Load Balancer to direct traffic to the EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application to Amazon Elastic Kubernetes Service (Amazon EKS) containers that use the Fargate launch type in three Availability Zones. Use Amazon FSx for Lustre to provide file storage for all three containers. Use a Network Load Balancer to direct traffic to the containers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application to Amazon EC2 instances in three AWS Regions. Use Amazon Elastic Block Store (Amazon EBS) for file storage. Enable Cross-Region Replication (CRR) for all three EC2 instances. Use an Application Load Balancer to direct traffic to the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#423",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an on-premises data center to AWS. The company currently hosts the data center on Linux-based VMware VMs. A solutions architect must collect information about network dependencies between the VMs. The information must be in the form of a diagram that details host IP addresses, hostnames, and network connection information.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thu thập network dependencies giữa các VMware VM Linux để lập diagram.</li><li>Requirement quan trọng: diagram gồm host IP, hostname và network connection.</li><li>Ưu tiên: dùng công cụ discovery đúng loại.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Network diagram trong <strong>AWS Migration Hub</strong> cần dữ liệu connection từ <strong>AWS Application Discovery Agent</strong> cài trên server; đồng thời cấp quyền cho Application Discovery Service dùng Migration Hub network diagrams.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Discovery Agent thu thập network connection, hiển thị diagram trong Migration Hub.</li><li><strong>B</strong>: ❌ Sai — Agentless Collector không thu thập network dependencies/connection, và không export diagram .png theo cách này.</li><li><strong>C</strong>: ❌ Sai — Application Migration Service agent dùng để replicate, không dùng để discovery.</li><li><strong>D</strong>: ❌ Sai — cùng lý do, và CloudWatch dashboard không tạo network diagram.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Discovery Agent</li><li>Migration Hub network diagram</li><li>Network dependencies</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp network dependency diagram trước migration → nghĩ ngay đến Application Discovery Agent + Migration Hub.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#423",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Discovery Service. Select an AWS Migration Hub home AWS Region. Install the AWS Application Discovery Agent on the on-premises servers for data collection. Grant permissions to Application Discovery Service to use the Migration Hub network diagrams.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Application Discovery Service Agentless Collector for server data collection. Export the network diagrams from the AWS Migration Hub in .png format.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the AWS Application Migration Service agent on the on-premises servers for data collection. Use AWS Migration Hub data in Workload Discovery on AWS to generate network diagrams.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install the AWS Application Migration Service agent on the on-premises servers for data collection. Export data from AWS Migration Hub in .csv format into an Amazon CloudWatch dashboard to generate network diagrams.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#424",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a software-as-a-service (SaaS) application on AWS. The application consists of AWS Lambda functions and an Amazon RDS for MySQL Multi-AZ database. During market events, the application has a much higher workload than normal. Users notice slow response times during the peak periods because of many database connections. The company needs to improve the scalable performance and availability of the database.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: SaaS dùng Lambda và RDS MySQL chậm lúc peak vì nhiều database connections.</li><li>Requirement quan trọng: cải thiện scalable performance và availability của database.</li><li>Ưu tiên: scale đọc và quản lý connection.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Aurora</strong> với <strong>Aurora Replica</strong> scale đọc và tăng availability (failover nhanh), còn <strong>Amazon RDS Proxy</strong> pool và chia sẻ connections từ Lambda, giải quyết gốc rễ vấn đề connection.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thêm read replica theo alarm phản ứng chậm và không xử lý connections.</li><li><strong>B</strong>: ❌ Sai — connection pool ngoài handler chỉ tái sử dụng trong một execution environment, không gom chung giữa nhiều Lambda.</li><li><strong>C</strong>: ❌ Sai — Route 53 weighted records không cân bằng connection hiệu quả và không quản lý pool.</li><li><strong>D</strong>: ✅ Đúng — Aurora Replica + RDS Proxy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy</li><li>Lambda many connections</li><li>Aurora Replica</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Lambda + nhiều connection DB → nghĩ ngay đến RDS Proxy; cần scale đọc → thêm Aurora Replica.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#424",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm action that triggers a Lambda function to add an Amazon RDS for MySQL read replica when resource utilization hits a threshold.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon Aurora, and add a read replica. Add a database connection pool outside of the Lambda handler function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon Aurora, and add a read replica. Use Amazon Route 53 weighted records.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon Aurora, and add an Aurora Replica. Configure Amazon RDS Proxy to manage database connection pools.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#425",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application’s underlying data storage to AWS. The application data is stored on a shared file system on premises, and the application servers connect to the shared file system through SMB.<br><br>A solutions architect must implement a solution that uses an Amazon S3 bucket for shared storage. Until the application is fully migrated and code is rewritten to use native Amazon S3 APIs, the application must continue to have access to the data through SMB. The solutions architect must migrate the application data to AWS to its new location while still allowing the on-premises application to access the data.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: di chuyển dữ liệu shared file (SMB) lên S3 mà app on-premises vẫn truy cập qua SMB.</li><li>Requirement quan trọng: dùng S3 bucket, giữ SMB access cho đến khi app được viết lại.</li><li>Ưu tiên: hybrid access trong giai đoạn chuyển tiếp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Storage Gateway (S3 File Gateway)</strong> triển khai trên VM on-premises, cung cấp SMB file share lưu data vào <strong>Amazon S3</strong>; copy dữ liệu vào gateway vừa migrate vừa giữ truy cập SMB cho app.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — FSx for Windows File Server không dùng S3 bucket làm shared storage như yêu cầu.</li><li><strong>B</strong>: ❌ Sai — copy thẳng vào S3 làm app mất SMB access.</li><li><strong>C</strong>: ❌ Sai — AWS SMS di chuyển server sang EC2, không dùng S3 và không giữ SMB on-premises.</li><li><strong>D</strong>: ✅ Đúng — S3 File Gateway với SMB share.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 File Gateway</li><li>SMB + S3</li><li>Hybrid migration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp app on-premises cần SMB/NFS nhưng data ở S3 → nghĩ ngay đến S3 File Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#425",
          "answers": [
            {
              "choice": "<p>A. Create a new Amazon FSx for Windows File Server file system. Configure AWS DataSync with one location for the on-premises file share and one location for the new Amazon FSx file system. Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 bucket for the application. Copy the data from the on-premises storage to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the file storage server from on premises to an Amazon EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 bucket for the application. Deploy a new AWS Storage Gateway file gateway on an on-premises VM. Create a new file share that stores data in the S3 bucket and is associated with the file gateway. Copy the data from the on-premises storage to the new file gateway endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#426",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company has a mobile app that displays ticket barcodes. Customers use the tickets on the mobile app to attend live events. Event scanners read the ticket barcodes and call a backend API to validate the barcode data against data in a database. After the barcode is scanned, the backend logic writes to the database's single table to mark the barcode as used.<br><br>The company needs to deploy the app on AWS with a DNS name of api.example.com. The company will host the database in three AWS Regions around the world.<br><br>Which solution will meet these requirements with the LOWEST latency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Validate barcode toàn cầu, mỗi lần scan phải đọc và ghi vào database ở 3 Region.</li><li>Requirement chính: <strong>LOWEST latency</strong>.</li><li>Ưu tiên: chạy logic càng gần user càng tốt, database multi-Region có thể ghi ở mọi Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB global tables</strong> cho phép ghi (multi-active) tại Region gần nhất, kết hợp <strong>Lambda@Edge</strong> chạy logic backend ngay tại edge location của <strong>CloudFront</strong> nên độ trễ thấp nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Aurora global database</strong> chỉ có 1 writer Region, thao tác ghi từ Region khác phải đi xa nên latency cao.</li><li><strong>B</strong>: ❌ Sai — cùng vấn đề single-writer của Aurora; CloudFront trước EKS cũng không giảm latency ghi.</li><li><strong>C</strong>: ❌ Sai — <strong>CloudFront Functions</strong> không gọi được network/DynamoDB và không có backend logic phức tạp.</li><li><strong>D</strong>: ✅ Đúng — Lambda@Edge gọi được DynamoDB global tables, ghi multi-Region gần user.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>DynamoDB global tables, Lambda@Edge, CloudFront, multi-active write, lowest latency</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ghi dữ liệu toàn cầu + lowest latency → nghĩ ngay đến DynamoDB global tables + Lambda@Edge\" (CloudFront Functions không truy cập network).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#426",
          "answers": [
            {
              "choice": "<p>A. Host the database on Amazon Aurora global database clusters. Host the backend on three Amazon Elastic Container Service (Amazon ECS) clusters that are in the same Regions as the database. Create an accelerator in AWS Global Accelerator to route requests to the nearest ECS cluster. Create an Amazon Route 53 record that maps api.example.com to the accelerator endpoint</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host the database on Amazon Aurora global database clusters. Host the backend on three Amazon Elastic Kubernetes Service (Amazon EKS) clusters that are in the same Regions as the database. Create an Amazon CloudFront distribution with the three clusters as origins. Route requests to the nearest EKS cluster. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the database on Amazon DynamoDB global tables. Create an Amazon CloudFront distribution. Associate the CloudFront distribution with a CloudFront function that contains the backend logic to validate the barcodes. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the database on Amazon DynamoDB global tables. Create an Amazon CloudFront distribution. Associate the CloudFront distribution with a Lambda@Edge function that contains the backend logic to validate the barcodes. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#427",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical company is running a REST API on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group behind an Application Load Balancer (ALB). The ALB runs in three public subnets, and the EC2 instances run in three private subnets. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin.<br><br>Which solution should a solutions architect recommend to enhance the origin security?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bảo vệ origin (ALB) để chỉ traffic đi qua CloudFront mới vào được.</li><li>Requirement chính: enhance origin security, ngăn người dùng truy cập trực tiếp ALB.</li><li>Ưu tiên: security, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>custom HTTP header bí mật</strong> do CloudFront chèn vào origin request, <strong>AWS WAF</strong> trên ALB chỉ cho phép request có header đúng; secret lưu và tự động rotate bằng <strong>AWS Secrets Manager</strong> + Lambda.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — header secret + WAF string match + Secrets Manager rotation là pattern chuẩn.</li><li><strong>B</strong>: ❌ Sai — ALB chuyển vào private subnet thì CloudFront không truy cập được (ALB internet-facing cần public subnet); IP range thay đổi.</li><li><strong>C</strong>: ❌ Sai — <strong>Parameter Store</strong> không có automatic rotation; ALB không tự kiểm tra header để block (cần WAF).</li><li><strong>D</strong>: ❌ Sai — <strong>Shield Advanced</strong> không dùng \"security group policy\" kiểu này; không phải cách giới hạn origin.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Custom header, origin security, WAF string match, Secrets Manager rotation, CloudFront-only access</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp khóa ALB chỉ cho CloudFront truy cập → nghĩ ngay đến secret custom header + WAF rule\" (hoặc managed prefix list của CloudFront).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#427",
          "answers": [
            {
              "choice": "<p>A. Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the web ACL with the ALMove the ALB into the three private subnets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Shield Advanced Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#428",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To abide by industry regulations, a solutions architect must design a solution that will store a company's critical data in multiple public AWS Regions, including in the United States, where the company's headquarters is located. The solutions architect is required to provide access to the data stored in AWS to the company’s global WAN network. The security team mandates that no traffic accessing this data should traverse the public internet.<br><br>How should the solutions architect design a highly available solution that meets the requirements and is cost-effective?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Truy cập dữ liệu ở nhiều Region từ WAN công ty mà không qua public internet.</li><li>Requirement chính: private connectivity, <strong>highly available</strong>, <strong>cost-effective</strong>.</li><li>Ưu tiên: HA + chi phí thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Hai kết nối <strong>Direct Connect</strong> (HA) tới một Region, rồi dùng <strong>Direct Connect Gateway</strong> để tiếp cận VPC ở các Region khác trên backbone AWS, không cần DX riêng cho từng Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DX riêng cho mọi Region tốn kém, và chỉ một đường mỗi Region nên không HA.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — inter-region VPC peering có thể hoạt động nhưng không scale/quản lý tốt bằng DX Gateway; không phải đáp án chuẩn.</li><li><strong>C</strong>: ❌ Sai — <strong>transit VPC</strong> tự quản lý, tốn chi phí và vận hành, thường dùng VPN.</li><li><strong>D</strong>: ✅ Đúng — DX Gateway kết nối nhiều VPC ở nhiều Region qua một DX, rẻ và HA.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Direct Connect Gateway, no public internet, multi-Region, HA (2 DX), cost-effective</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp một DX cần đến nhiều Region → nghĩ ngay đến Direct Connect Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#428",
          "answers": [
            {
              "choice": "<p>A. Establish AWS Direct Connect connections from the company headquarters to all AWS Regions in use. Use the company WAN to send traffic over to the headquarters and then to the respective DX connection to access the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use inter-region VPC peering to access the data in other AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use an AWS transit VPC solution to access data in other AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use Direct Connect Gateway to access data in other AWS Regions.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#429",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed an application that is running Windows Server on VMware vSphere VMs that the company hosts on premises. The application data is stored in a proprietary format that must be read through the application. The company manually provisioned the servers and the application.<br><br>As part of its disaster recovery plan, the company wants the ability to host its application on AWS temporarily if the company's on-premises environment becomes unavailable. The company wants the application to return to on-premises hosting after a disaster recovery event is complete. The RPO is 5 minutes.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR cho VM Windows trên VMware on-premises sang AWS, rồi failback.</li><li>Requirement chính: RPO 5 phút, dữ liệu định dạng proprietary, <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: dịch vụ DR managed hỗ trợ failback.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Elastic Disaster Recovery</strong> replicate liên tục ở mức block (RPO tính bằng giây/phút), tự launch EC2 khi sự cố và hỗ trợ failback về on-premises.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>DataSync</strong> là transfer file theo lịch, không replicate liên tục để đạt RPO 5 phút, phải tự dựng bằng CloudFormation.</li><li><strong>B</strong>: ✅ Đúng — Elastic Disaster Recovery, continuous replication, ít vận hành.</li><li><strong>C</strong>: ❌ Sai — <strong>Storage Gateway file gateway</strong> + <strong>AWS Backup</strong> là file-level, restore thủ công, không đạt RPO 5 phút.</li><li><strong>D</strong>: ❌ Sai — <strong>FSx for Windows</strong> chỉ cho file share; app server/provisioning vẫn thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Elastic Disaster Recovery, VMware, RPO 5 phút, failback, least operational overhead</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR cho server on-premises + RPO thấp + failback → nghĩ ngay đến AWS Elastic Disaster Recovery.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#429",
          "answers": [
            {
              "choice": "<p>A. Configure AWS DataSync. Replicate the data to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and attach the EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Elastic Disaster Recovery. Replicate the data to replication Amazon EC2 instances that are attached to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use Elastic Disaster Recovery to launch EC2 instances that use the replicated volumes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an AWS Storage Gateway file gateway. Replicate the data to an Amazon S3 bucket. When the on-premises environment is unavailable, use AWS Backup to restore the data to Amazon Elastic Block Store (Amazon EBS) volumes and launch Amazon EC2 instances from these EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an Amazon FSx for Windows File Server file system on AWS. Replicate the data to the file system. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and use AWS::CloudFormation::Init commands to mount the Amazon FSx file shares.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#430",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a highly available data collection application on Amazon EC2 in the eu-north-1 Region. The application collects data from end-user devices and writes records to an Amazon Kinesis data stream and a set of AWS Lambda functions that process the records. The company persists the output of the record processing to an Amazon S3 bucket in eu-north-1. The company uses the data in the S3 bucket as a data source for Amazon Athena.<br><br>The company wants to increase its global presence. A solutions architect must launch the data collection capabilities in the sa-east-1 and ap-northeast-1 Regions. The solutions architect deploys the application, the Kinesis data stream, and the Lambda functions in the two new Regions. The solutions architect keeps the S3 bucket in eu-north-1 to meet a requirement to centralize the data analysis.<br><br>During testing of the new setup, the solutions architect notices a significant lag on the arrival of data from the new Regions to the S3 bucket.<br><br>Which solution will improve this lag time the MOST?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda ở sa-east-1 và ap-northeast-1 ghi vào S3 ở eu-north-1 bị trễ.</li><li>Requirement chính: giảm lag <strong>MOST</strong>, vẫn giữ phân tích tập trung ở eu-north-1.</li><li>Ưu tiên: latency khi ghi dữ liệu cross-Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Ghi vào S3 bucket <strong>local</strong> mỗi Region (nhanh), sau đó <strong>S3 Cross-Region Replication</strong> đẩy bất đồng bộ về eu-north-1 trên backbone AWS, nên ứng dụng không phải chờ truyền xa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>S3 gateway endpoint</strong> chỉ hoạt động cho S3 cùng Region, không giảm lag cross-Region.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>S3 Transfer Acceleration</strong> có cải thiện nhưng vẫn là ghi đồng bộ xa; local write + CRR hiệu quả hơn.</li><li><strong>C</strong>: ✅ Đúng — ghi local rồi CRR.</li><li><strong>D</strong>: ❌ Sai — tăng memory/multipart không giải quyết độ trễ mạng giữa các Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>S3 Cross-Region Replication, local bucket, centralize, cross-Region latency</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ghi S3 cross-Region bị lag + cần tập trung dữ liệu → nghĩ ngay đến bucket local + CRR.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#430",
          "answers": [
            {
              "choice": "<p>A. In each of the two new Regions, set up the Lambda functions to run in a VPC. Set up an S3 gateway endpoint in that VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on S3 Transfer Acceleration on the S3 bucket in eu-north-1. Change the application to use the new S3 accelerated endpoint when the application uploads data to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 bucket in each of the two new Regions. Set the application in each new Region to upload to its respective S3 bucket. Set up S3 Cross-Region Replication to replicate data to the S3 bucket in eu-north-1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the memory requirements of the Lambda functions to ensure that they have multiple cores available. Use the multipart upload feature when the application uploads data to Amazon S3 from Lambda.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#431",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability.<br><br>Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only.<br><br>Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho tối đa 10 VPC của business unit truy cập ứng dụng sau NLB ở shared VPC.</li><li>Requirement chính: <strong>CIDR chồng lấn</strong>, chỉ VPC được ủy quyền mới kết nối.</li><li>Ưu tiên: kết nối one-way tới service, kiểm soát truy cập.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS PrivateLink</strong> (VPC endpoint service trên NLB) không yêu cầu CIDR khác nhau, và bật <strong>endpoint acceptance</strong> để chỉ chấp nhận VPC được ủy quyền.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Transit Gateway</strong> không hỗ trợ CIDR chồng lấn.</li><li><strong>B</strong>: ✅ Đúng — PrivateLink + require acceptance, chịu được overlapping CIDR.</li><li><strong>C</strong>: ❌ Sai — <strong>VPC peering</strong> không dùng được với CIDR chồng lấn.</li><li><strong>D</strong>: ❌ Sai — <strong>Site-to-Site VPN</strong> giữa VPC không giải quyết CIDR trùng, và phức tạp (customer gateway cho VPC không hợp lý).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>PrivateLink, endpoint service, NLB, overlapping CIDR, acceptance required</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp CIDR chồng lấn + expose service cho nhiều VPC → nghĩ ngay đến PrivateLink (NLB + endpoint service).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#431",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC peering connection from each business unit VPC to the shared VPC. Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC. Configure VPC routing tables to send traffic to the VPN connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#432",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its website to AWS. The website uses microservices and runs on containers that are deployed in an on-premises, self-managed Kubernetes cluster. All the manifests that define the deployments for the containers in the Kubernetes deployment are in source control.<br><br>All data for the website is stored in a PostgreSQL database. An open source container image repository runs alongside the on-premises environment.<br><br>A solutions architect needs to determine the architecture that the company will use for the website on AWS.<br><br>Which solution will meet these requirements with the LEAST effort to migrate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate website microservices đang chạy trên Kubernetes tự quản lý sang AWS.</li><li>Requirement chính: <strong>LEAST effort to migrate</strong>; manifest đã nằm trong source control.</li><li>Ưu tiên: tái dùng manifest Kubernetes, giảm vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EKS</strong> chạy Kubernetes chuẩn nên deploy lại manifest nguyên trạng; copy image sang <strong>Amazon ECR</strong>; PostgreSQL chuyển sang <strong>Aurora PostgreSQL</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>App Runner</strong> không chạy Kubernetes manifest.</li><li><strong>B</strong>: ✅ Đúng — EKS + ECR + Aurora PostgreSQL, ít thay đổi nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>ECS</strong> phải viết lại task definition/service cho mỗi deployment, tốn effort.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tự quản lý Kubernetes/registry/DB trên EC2, nhiều vận hành, không tận dụng managed service.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Amazon EKS, Kubernetes manifests, ECR, Aurora PostgreSQL, least effort</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp migrate Kubernetes tự quản lý sang AWS → nghĩ ngay đến Amazon EKS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#432",
          "answers": [
            {
              "choice": "<p>A. Create an AWS App Runner service. Connect the App Runner service to the open source container image repository. Deploy the manifests from on premises to the App Runner service. Create an Amazon RDS for PostgreSQL database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that has managed node groups. Copy the application containers to a new Amazon Elastic Container Registry (Amazon ECR) repository. Deploy the manifests from on premises to the EKS cluster. Create an Amazon Aurora PostgreSQL DB cluster.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic Container Service (Amazon ECS) cluster that has an Amazon EC2 capacity pool. Copy the application containers to a new Amazon Elastic Container Registry (Amazon ECR) repository. Register each container image as a new task definition. Configure ECS services for each task definition to match the original Kubernetes deployments. Create an Amazon Aurora PostgreSQL DB cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Rebuild the on-premises Kubernetes cluster by hosting the cluster on Amazon EC2 instances. Migrate the open source container image repository to the EC2 instances. Deploy the manifests from on premises to the new cluster on AWS. Deploy an open source PostgreSQL database on the new cluster.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#433",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a mobile app on AWS to run online contests. The company selects a winner at random at the end of each contest. The contests run for variable lengths of time. The company does not need to retain any data from a contest after the contest is finished.<br><br>The company uses custom code that is hosted on Amazon EC2 instances to process the contest data and select a winner. The EC2 instances run behind an Application Load Balancer and store contest entries on Amazon RDS DB instances. The company must design a new architecture to reduce the cost of running the contests.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng contest có thời gian chạy biến đổi, không cần giữ dữ liệu sau contest.</li><li>Requirement chính: <strong>MOST cost-effectively</strong>.</li><li>Ưu tiên: trả theo mức dùng, tự dọn dữ liệu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB</strong> (on-demand) + <strong>Lambda</strong> là serverless, chỉ trả khi dùng; <strong>DynamoDB TTL</strong> tự xóa entry hết hạn, không tốn công và không tốn phí xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>DAX</strong> cluster và <strong>Fargate</strong> chạy liên tục tốn thêm chi phí.</li><li><strong>B</strong>: ❌ Sai — <strong>Amazon Redshift</strong> không phù hợp workload này và đắt.</li><li><strong>C</strong>: ❌ Sai — vẫn giữ RDS và thêm <strong>ElastiCache</strong>, tăng chi phí; không giảm cost.</li><li><strong>D</strong>: ✅ Đúng — DynamoDB + Lambda + TTL, rẻ nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>DynamoDB TTL, Lambda, serverless, cost-effective, variable workload</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp dữ liệu tạm thời + workload thất thường + rẻ nhất → nghĩ ngay đến DynamoDB + Lambda + TTL.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#433",
          "answers": [
            {
              "choice": "<p>A. Migrate storage of the contest entries to Amazon DynamoDB. Create a DynamoDB Accelerator (DAX) cluster. Rewrite the code to run as Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type. At the end of the contest, delete the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the storage of the contest entries to Amazon Redshift. Rewrite the code as AWS Lambda functions. At the end of the contest, delete the Redshift cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon ElastiCache for Redis cluster in front of the RDS DB instances to cache the contest entries. Rewrite the code to run as Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type. Set the ElastiCache TTL attribute on each entry to expire each entry at the end of the contest.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the storage of the contest entries to Amazon DynamoDB. Rewrite the code as AWS Lambda functions. Set the DynamoDB TTL attribute on each entry to expire each entry at the end of the contest.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#434",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has implemented a new security requirement. According to the new requirement, the company must scan all traffic from corporate AWS instances in the company's VPC for violations of the company's security policies. As a result of these scans, the company can block access to and from specific IP addresses.<br><br>To meet the new requirement, the company deploys a set of Amazon EC2 instances in private subnets to serve as transparent proxies. The company installs approved proxy server software on these EC2 instances. The company modifies the route tables on all subnets to use the corresponding EC2 instances with proxy software as the default route. The company also creates security groups that are compliant with the security policies and assigns these security groups to the EC2 instances.<br><br>Despite these configurations, the traffic of the EC2 instances in their private subnets is not being properly forwarded to the internet.<br><br>What should a solutions architect do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 làm transparent proxy, route table trỏ default route về proxy nhưng traffic không ra internet.</li><li>Requirement chính: tìm nguyên nhân cấu hình thiếu.</li><li>Ưu tiên: kỹ thuật chuyển tiếp traffic của EC2.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mặc định EC2 chỉ nhận traffic có đích là chính nó (<strong>source/destination check</strong>). Proxy/NAT instance phải <strong>tắt source/destination check</strong> để forward traffic.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — disable source/destination check trên các proxy instance.</li><li><strong>B</strong>: ❌ Sai — security group nội bộ không giải quyết việc forward traffic.</li><li><strong>C</strong>: ❌ Sai — DHCP option set chỉ liên quan DNS, không phải route traffic.</li><li><strong>D</strong>: ❌ Sai — thêm ENI không cần thiết; vấn đề là source/destination check.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Source/destination check, transparent proxy, NAT instance, route table default route</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp EC2 làm proxy/NAT/firewall appliance không forward được traffic → nghĩ ngay đến tắt source/destination check.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#434",
          "answers": [
            {
              "choice": "<p>A. Disable source/destination checks on the EC2 instances that run the proxy software.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a rule to the security group that is assigned to the proxy EC2 instances to allow all traffic between instances that have this security group. Assign this security group to all EC2 instances in the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the VPCs DHCP options set. Set the DNS server options to point to the addresses of the proxy EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign one additional elastic network interface to each proxy EC2 instance. Ensure that one of these network interfaces has a route to the private subnets. Ensure that the other network interface has a route to the internet.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#435",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running its solution on AWS in a manually created VPC. The company is using AWS CloudFormation to provision other parts of the infrastructure. According to a new requirement, the company must manage all infrastructure in an automatic way.<br><br>What should the company do to meet this new requirement with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>VPC tạo thủ công cần được quản lý bằng IaC.</li><li>Requirement chính: <strong>LEAST effort</strong>, đã dùng <strong>AWS CloudFormation</strong>.</li><li>Ưu tiên: ít thay đổi, không tạo lại VPC.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudFormation resource import</strong> cho phép đưa tài nguyên có sẵn vào stack bằng template mô tả đúng cấu hình hiện tại, không tạo lại và không thêm công cụ mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>AWS CDK</strong> import được nhưng phải chuyển sang công cụ mới, nhiều effort hơn.</li><li><strong>B</strong>: ❌ Sai — <strong>StackSets</strong> dùng để triển khai multi-account/Region, không phải để import.</li><li><strong>C</strong>: ✅ Đúng — template + \"Import existing resources\" trong CloudFormation.</li><li><strong>D</strong>: ❌ Sai — <strong>AWS SAM</strong> không dùng để import VPC.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFormation import, existing resources, least effort, IaC</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp tài nguyên tạo thủ công cần đưa vào IaC → nghĩ ngay đến CloudFormation resource import.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#435",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS Cloud Development Kit (AWS CDK) stack that strictly provisions the existing VPC resources and configuration. Use AWS CDK to import the VPC into the stack and to manage the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFormation stack set that creates the VPC. Use the stack set to import the VPC into the stack.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudFormation template that strictly provisions the existing VPC resources and configuration. From the CloudFormation console, create a new stack by importing the Existing resources.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new CloudFormation template that creates the VPC. Use the AWS Serverless Application Model (AWS SAM) CLI to import the VPC.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#436",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a new release of a popular video game and wants to make it available for public download. The new release package is approximately 5 GB in size. The company provides downloads for existing releases from a Linux-based, publicly facing FTP site hosted in an on-premises data center. The company expects the new release will be downloaded by users worldwide. The company wants a solution that provides improved download performance and low transfer costs, regardless of a user's location.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phân phối file game 5 GB cho người dùng toàn cầu.</li><li>Requirement chính: tốc độ download tốt và <strong>chi phí truyền thấp</strong> ở mọi nơi.</li><li>Ưu tiên: performance + cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon S3</strong> lưu file, <strong>Amazon CloudFront</strong> cache tại edge location giúp tải nhanh và giảm chi phí data transfer; <strong>Route 53</strong> cho domain.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EC2 + EBS + FTP tốn chi phí, không có edge caching, vận hành nhiều.</li><li><strong>B</strong>: ❌ Sai — <strong>EFS</strong> + EC2 đắt hơn và cũng không có CDN.</li><li><strong>C</strong>: ✅ Đúng — S3 + CloudFront.</li><li><strong>D</strong>: ❌ Sai — <strong>Requester Pays</strong> chuyển phí cho người tải, không cải thiện hiệu năng và không phù hợp public download.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFront, S3, edge caching, global download, low transfer cost</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phân phối file lớn toàn cầu + giảm chi phí → nghĩ ngay đến S3 + CloudFront.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#436",
          "answers": [
            {
              "choice": "<p>A. Store the game files on Amazon EBS volumes mounted on Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the game files on Amazon EFS volumes that are attached to Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on each of the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Use Amazon CloudFront for the website. Publish the game download URL for users to download the package.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Set Requester Pays for the S3 bucket. Publish the game download URL for users to download the package.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#437",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email. Data is stored in a MySQL database running on an Amazon EC2 instance. The database is running in a VPC with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC.<br><br>The website has suffered several outages during the last month due to high traffic.<br><br>Which actions should a solutions architect take to increase the reliability of the application? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Website chạy trên một EC2 Tomcat, một public subnet, DB MySQL trên EC2 tự quản lý, bị outage khi traffic cao.</li><li>Requirement chính: tăng <strong>reliability</strong>, chọn 3 hành động.</li><li>Ưu tiên: loại bỏ single point of failure ở web tier, DB tier và network.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Web tier dùng <strong>Auto Scaling + ALB</strong>; DB chuyển sang <strong>Aurora</strong> có replica (HA, failover); thêm public subnet ở AZ khác để ALB và ASG trải đa AZ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Auto Scaling group + ALB loại bỏ single web server.</li><li><strong>B</strong>: ❌ Sai — thêm peering connection không tăng reliability (peering là redundant sẵn bởi AWS).</li><li><strong>C</strong>: ✅ Đúng — Aurora với replica cho HA và failover.</li><li><strong>D</strong>: ❌ Sai — NAT gateway trong DB VPC không liên quan outage.</li><li><strong>E</strong>: ❌ Sai — di chuyển Tomcat vào DB VPC không tăng reliability (VPC chỉ có private subnet).</li><li><strong>F</strong>: ✅ Đúng — subnet ở AZ khác cho ALB/ASG đa AZ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Auto Scaling, ALB, Aurora Replica, Multi-AZ, single point of failure</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp outage do traffic cao + single instance → nghĩ ngay đến ASG + ALB + Multi-AZ + Aurora.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#437",
          "answers": [
            {
              "choice": "<p>A. Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an additional VPC peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the MySQL database to Amazon Aurora with one Aurora Replica.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision two NAT gateways in the database VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Move the Tomcat server to the database VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an additional public subnet in a different Availability Zone in the website VPC.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#438",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB. Static content is cached. Amazon Route 53 is used to host all public zones.<br><br>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB. The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.<br><br>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.<br><br>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ALB thỉnh thoảng trả 502, cần hiển thị trang lỗi tùy chỉnh thay trang mặc định của ALB.</li><li>Requirement chính: <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: dùng tính năng có sẵn của CloudFront, không viết automation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lưu trang lỗi trên <strong>Amazon S3</strong> (static website) và cấu hình <strong>CloudFront custom error response</strong> để trả trang đó khi origin trả 502.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 chứa trang lỗi tĩnh.</li><li><strong>B</strong>: ❌ Sai — dùng CloudWatch + Lambda sửa listener rule phức tạp, và 502 tạm thời không do health check.</li><li><strong>C</strong>: ❌ Sai — Route 53 health check/DNS failover không phù hợp lỗi 502 thoáng qua và tốn công.</li><li><strong>D</strong>: ❌ Sai — cùng vấn đề phức tạp như B.</li><li><strong>E</strong>: ✅ Đúng — CloudFront custom error page.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFront custom error response, S3 static website, 502 Bad Gateway, least operational overhead</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp muốn trang lỗi tùy chỉnh với CloudFront trước origin → nghĩ ngay đến CloudFront custom error response + S3.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#438",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to host a static webpage. Upload the custom error pages to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Target.FailedHealthChecks is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing Amazon Route 53 records by adding health checks. Configure a fallback target if the health check fails. Modify DNS records to point to a publicly accessible webpage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Elb.InternalError is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a public accessible web server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add a custom error response by configuring a CloudFront custom error page. Modify DNS records to point to a publicly accessible web page.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#439",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an Amazon Aurora MySQL DB cluster from an existing AWS account to a new AWS account in the same AWS Region. Both accounts are members of the same organization in AWS Organizations.<br><br>The company must minimize database service interruption before the company performs DNS cutover to the new database.<br><br>Which migration strategy will meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate Aurora MySQL sang account khác cùng Region, cùng organization.</li><li>Requirement chính: <strong>minimize downtime</strong> trước khi DNS cutover.</li><li>Ưu tiên: chọn 2 cách di chuyển hợp lệ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chia sẻ <strong>snapshot</strong> sang account mới rồi restore tạo cluster; hoặc dùng <strong>AWS DMS</strong> để replicate (CDC) giữa hai Aurora cluster.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — share snapshot với account mới và restore.</li><li><strong>B</strong>: ✅ Đúng — DMS đồng bộ liên tục giữa hai cluster.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — AWS Backup cross-account được nhưng đề chọn A và B làm hai cách chuẩn.</li><li><strong>D</strong>: ❌ Sai — <strong>AWS Application Migration Service</strong> dành cho server (lift-and-shift), không migrate DB Aurora.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Aurora snapshot share, AWS DMS, cross-account, minimal downtime</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp migrate Aurora cross-account → nghĩ ngay đến share snapshot hoặc DMS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#439",
          "answers": [
            {
              "choice": "<p>A. Take a snapshot of the existing Aurora database. Share the snapshot with the new AWS account. Create an Aurora DB cluster in the new account from the snapshot.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Aurora DB cluster in the new AWS account. Use AWS Database Migration Service (AWS DMS) to migrate data between the two Aurora DB clusters.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup to share an Aurora database backup from the existing AWS account to the new AWS account. Create an Aurora DB cluster in the new AWS account from the snapshot.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Aurora DB cluster in the new AWS account. Use AWS Application Migration Service to migrate data between the two Aurora DB clusters.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#440",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software as a service (SaaS) company provides a media software solution to customers. The solution is hosted on 50 VPCs across various AWS Regions and AWS accounts. One of the VPCs is designated as a management VPC. The compute resources in the VPCs work independently.<br><br>The company has developed a new feature that requires all 50 VPCs to be able to communicate with each other. The new feature also requires one-way access from each customer's VPC to the company's management VPC. The management VPC hosts a compute resource that validates licenses for the media software solution.<br><br>The number of VPCs that the company will use to host the solution will continue to increase as the solution grows.<br><br>Which combination of steps will provide the required VPC connectivity with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>50 VPC phải nối với nhau, và VPC khách hàng truy cập một chiều vào management VPC.</li><li>Requirement chính: <strong>LEAST operational overhead</strong>, số VPC sẽ tăng.</li><li>Ưu tiên: dễ mở rộng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Transit Gateway</strong> kết nối hub-and-spoke cho mọi VPC của công ty, còn <strong>PrivateLink</strong> (NLB + endpoint service) cho khách hàng truy cập một chiều vào service license.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Transit Gateway scale tốt cho nhiều VPC.</li><li><strong>B</strong>: ❌ Sai — full-mesh peering giữa 50 VPC phức tạp, không scale.</li><li><strong>C</strong>: ✅ Đúng — PrivateLink cho truy cập một chiều.</li><li><strong>D</strong>: ❌ Sai — VPN appliance ở mỗi khách hàng tốn vận hành.</li><li><strong>E</strong>: ❌ Sai — peering với từng khách hàng cho truy cập hai chiều, không scale, CIDR có thể trùng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Transit Gateway, PrivateLink, one-way access, hub-and-spoke, scalable</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp nhiều VPC nối với nhau + service one-way cho bên ngoài → nghĩ ngay đến Transit Gateway + PrivateLink.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#440",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway. Attach all the company's VPCs and relevant subnets to the transit gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create VPC peering connections between all the company's VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB) that points to the compute resource for license validation. Create an AWS PrivateLink endpoint service that is available to each customer's VPC. Associate the endpoint service with the NLB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPN appliance in each customer's VPC. Connect the company's management VPC to each customer's VPC by using AWS Site-to-Site VPN.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a VPC peering connection between the company's management VPC and each customer's VPC.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#441",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple lines of business (LOBs) that roll up to the parent company. The company has asked its solutions architect to develop a solution with the following requirements:<br>• Produce a single AWS invoice for all of the AWS accounts used by its LOBs.<br>• The costs for each LOB account should be broken out on the invoice.<br>• Provide the ability to restrict services and features in the LOB accounts, as defined by the company's governance policy.<br>• Each LOB account should be delegated full administrator permissions, regardless of the governance policy.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều LOB account cần một hóa đơn gộp, tách chi phí từng account, hạn chế service theo policy.</li><li>Requirement chính: governance bằng guardrail nhưng account vẫn có quyền admin.</li><li>Ưu tiên: quản lý tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một <strong>AWS Organization</strong> duy nhất (consolidated billing có sẵn, hóa đơn tách theo account) và <strong>SCP</strong> giới hạn service/feature mà không ảnh hưởng quyền admin trong account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mỗi LOB một organization sẽ không có hóa đơn gộp duy nhất.</li><li><strong>B</strong>: ✅ Đúng — một organization, mời các account vào.</li><li><strong>C</strong>: ❌ Sai — <strong>service quotas</strong> giới hạn số lượng, không phải quyền sử dụng service.</li><li><strong>D</strong>: ✅ Đúng — <strong>SCP</strong> allow-list service được duyệt.</li><li><strong>E</strong>: ❌ Sai — consolidated billing đã tự bật khi tạo Organization, không phải bước riêng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Organizations, SCP, consolidated billing, single invoice, governance</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp hạn chế service ở nhiều account → nghĩ ngay đến Organizations + SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#441",
          "answers": [
            {
              "choice": "<p>A. Use AWS Organizations to create an organization in the parent account for each LOB. Then invite each LOB account to the appropriate organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations to create a single organization in the parent account. Then, invite each LOB's AWS account to join the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement service quotas to define the services and features that are permitted and apply the quotas to each LOB. as appropriate.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP that allows only approved services and features, then apply the policy to the LOB accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable consolidated billing in the parent account's billing console and link the LOB accounts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#442",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has deployed a web application that serves users across two AWS Regions under a custom domain. The application uses Amazon Route 53 latency-based routing. The solutions architect has associated weighted record sets with a pair of web servers in separate Availability Zones for each Region.<br><br>The solutions architect runs a disaster recovery scenario. When all the web servers in one Region are stopped, Route 53 does not automatically redirect users to the other Region.<br><br>Which of the following are possible root causes of this issue? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Route 53 latency-based + weighted record, tắt hết web server ở một Region nhưng không failover.</li><li>Requirement chính: tìm nguyên nhân khiến failover không xảy ra.</li><li>Ưu tiên: health check và target health.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Failover cần <strong>Evaluate Target Health</strong> trên latency alias record và <strong>health check</strong> gắn cho các weighted record; thiếu một trong hai thì Route 53 không biết server đã chết.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — weight chỉ phân chia traffic giữa các record trong cùng Region, không chặn failover.</li><li><strong>B</strong>: ❌ Sai — server lỗi ở Region *thứ cấp* không giải thích việc Region đã tắt không failover.</li><li><strong>C</strong>: ❌ Sai — latency và weighted có thể kết hợp (nested records).</li><li><strong>D</strong>: ✅ Đúng — thiếu Evaluate Target Health trên latency alias.</li><li><strong>E</strong>: ✅ Đúng — thiếu health check cho weighted records.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Route 53 health check, Evaluate Target Health, latency-based routing, weighted records</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Route 53 không failover → nghĩ ngay đến thiếu health check hoặc Evaluate Target Health.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#442",
          "answers": [
            {
              "choice": "<p>A. The weight for the Region where the web servers were stopped is higher than the weight for the other Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. One of the web servers in the secondary Region did not pass its HTTP health check.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency resource record sets cannot be used in combination with weighted resource record sets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The setting to evaluate target health is not turned on for the latency alias resource record set that is associated with the domain in the Region where the web servers were stopped.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. An HTTP health check has not been set up for one or more of the weighted resource record sets associated with the stopped web servers.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#443",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A flood monitoring agency has deployed more than 10,000 water-level monitoring sensors. Sensors send continuous data updates, and each update is less than 1 MB in size. The agency has a fleet of on-premises application servers. These servers receive updates from the sensors, convert the raw data into a human readable format, and write the results to an on-premises relational database server. Data analysts then use simple SQL queries to monitor the data.<br><br>The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks. These maintenance tasks, which include updates and patches to the application servers, cause downtime. While an application server is down, data is lost from sensors because the remaining servers cannot handle the entire workload.<br><br>The agency wants a solution that optimizes operational overhead and costs. A solutions architect recommends the use of AWS IoT Core to collect the sensor data.<br><br>What else should the solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập dữ liệu sensor qua IoT Core, chuyển đổi và cho analyst query SQL.</li><li>Requirement chính: tăng availability, giảm maintenance, tối ưu <strong>operational overhead và cost</strong>.</li><li>Ưu tiên: serverless, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Kinesis Data Firehose</strong> + <strong>Lambda</strong> chuyển sang <strong>Parquet</strong> lưu <strong>S3</strong>, analyst query bằng <strong>Athena</strong> (SQL serverless) nên không còn server để patch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Aurora MySQL</strong> DB instance vẫn phải quản lý và tốn chi phí hơn.</li><li><strong>B</strong>: ✅ Đúng — Firehose + Lambda + Parquet + S3 + Athena, serverless.</li><li><strong>C</strong>: ❌ Sai — Managed Service for Apache Flink + Aurora tốn chi phí và vận hành.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Flink chạy liên tục tốn kém hơn Firehose + Lambda cho bài toán đơn giản.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>IoT Core, Kinesis Data Firehose, Parquet, Athena, serverless</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp dữ liệu stream + query SQL + ít vận hành → nghĩ ngay đến Firehose + S3 + Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#443",
          "answers": [
            {
              "choice": "<p>A. Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to .csv format, and insert it into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to Apache Parquet format, and save it to an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Send the sensor data to an Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) application to convert the data to .csv format and store it in an Amazon S3 bucket. Import the data into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Send the sensor data to an Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) application to convert the data to Apache Parquet format and store it in an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#444",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A public retail web application uses an Application Load Balancer (ALB) in front of Amazon EC2 instances running across multiple Availability Zones (AZs) in a Region backed by an Amazon RDS MySQL Multi-AZ deployment. Target group health checks are configured to use HTTP and pointed at the product catalog page. Auto Scaling is configured to maintain the web fleet size based on the ALB health check.<br><br>Recently, the application experienced an outage. Auto Scaling continuously replaced the instances during the outage. A subsequent investigation determined that the web server metrics were within the normal range, but the database tier was experiencing high load, resulting in severely elevated query response times.<br><br>Which of the following changes together would remediate these issues while improving monitoring capabilities for the availability and functionality of the entire application stack for future growth? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Health check ALB trỏ vào trang catalog phụ thuộc DB, DB quá tải khiến Auto Scaling thay instance liên tục.</li><li>Requirement chính: khắc phục và cải thiện monitoring toàn stack.</li><li>Ưu tiên: tách health check web tier khỏi DB, giảm tải DB.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Target group health check dùng <strong>trang HTML đơn giản</strong>, còn <strong>Route 53 health check</strong> kiểm tra trang product để đánh giá toàn bộ chức năng; thêm <strong>ElastiCache</strong> giảm tải database.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>RDS MySQL</strong> không có \"single reader endpoint\" cho read replica (khác Aurora).</li><li><strong>B</strong>: ✅ Đúng — health check đơn giản + Route 53 health check + CloudWatch alarm.</li><li><strong>C</strong>: ❌ Sai — chỉ check TCP không đủ xác nhận web server hoạt động tốt.</li><li><strong>D</strong>: ❌ Sai — recover là hành động cho lỗi hardware instance, không giải quyết load cao.</li><li><strong>E</strong>: ✅ Đúng — ElastiCache giảm tải DB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Health check, Route 53 health check, ElastiCache, shallow vs deep health check, CloudWatch alarm</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ASG thay instance liên tục vì DB chậm → nghĩ ngay đến shallow health check cho ALB + deep check ở Route 53 + cache.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#444",
          "answers": [
            {
              "choice": "<p>A. Configure read replicas for Amazon RDS MySQL and use the single reader endpoint in the web application to reduce the load on the backend database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the target group health check to point at a simple HTML page instead of a product catalog page and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the target group health check to use a TCP check of the Amazon EC2 web server and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon CloudWatch alarm for Amazon RDS with an action to recover a high-load, impaired RDS instance in the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure an Amazon ElastiCache cluster and place it between the web application and RDS MySQL instances to reduce the load on the backend database tier.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#445",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises data center and is using Kubernetes to develop a new solution on AWS. The company uses Amazon Elastic Kubernetes Service (Amazon EKS) clusters for its development and test environments.<br><br>The EKS control plane and data plane for production workloads must reside on premises. The company needs an AWS managed solution for Kubernetes management.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Control plane và data plane production EKS phải nằm on-premises, cần giải pháp Kubernetes do AWS quản lý.</li><li>Requirement chính: <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: managed, local control plane.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Outposts</strong> với <strong>EKS local cluster</strong> chạy cả control plane và worker nodes on-premises, do AWS quản lý.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EKS local cluster trên Outposts, control plane on-premises.</li><li><strong>B</strong>: ❌ Sai — <strong>EKS Anywhere</strong> là bản tự vận hành trên phần cứng của công ty, không phải managed bởi AWS.</li><li><strong>C</strong>: ❌ Sai — <strong>extended cluster</strong> đặt control plane ở AWS Region, không thỏa yêu cầu control plane on-premises.</li><li><strong>D</strong>: ❌ Sai — EKS Anywhere trên Outposts không được hỗ trợ cách này và tự quản lý.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Outposts, EKS local cluster, control plane on-premises, extended cluster</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp EKS control plane phải ở on-premises + AWS managed → nghĩ ngay đến Outposts local cluster.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#445",
          "answers": [
            {
              "choice": "<p>A. Install an AWS Outposts server in the on-premises data center. Deploy Amazon EKS by using a local cluster configuration on the Outposts server for the production workloads.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install Amazon EKS Anywhere on the company's hardware in the on-premises data center. Deploy the production workloads on an EKS Anywhere cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install an AWS Outposts server in the on-premises data center. Deploy Amazon EKS by using an extended cluster configuration on the Outposts server for the production workloads.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install an AWS Outposts server in the on-premises data center. Install Amazon EKS Anywhere on the Outposts server. Deploy the production workloads on an EKS Anywhere cluster.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#446",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its development environment. Each development team at the company has its own AWS account. Each account has a single VPC and CIDR blocks that do not overlap.<br><br>The company has an Amazon Aurora DB cluster in a shared services account. All the development teams need to work with live data from the DB cluster.<br><br>Which solution will provide the required connectivity to the DB cluster with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều account dev (VPC, CIDR không chồng lấn) cần kết nối private tới Aurora ở shared services account.</li><li>Requirement chính: <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: kết nối mạng đa account, dễ mở rộng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chia sẻ <strong>Transit Gateway</strong> bằng <strong>AWS RAM</strong> để mọi VPC dev gắn vào và truy cập Aurora; CIDR không chồng lấn nên phù hợp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — RAM không chia sẻ trực tiếp được DB cluster để kết nối mạng như vậy.</li><li><strong>B</strong>: ✅ Đúng — Transit Gateway + RAM, scale tốt.</li><li><strong>C</strong>: ❌ Sai — ALB không trỏ trực tiếp được vào IP của DB và cần NLB cho PrivateLink; phức tạp.</li><li><strong>D</strong>: ❌ Sai — VPN + phần mềm Marketplace tốn vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Transit Gateway, AWS RAM, multi-account, shared services, non-overlapping CIDR</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp nhiều account cần truy cập tài nguyên chung + CIDR không trùng → nghĩ ngay đến Transit Gateway + RAM.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#446",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Resource Access Manager (AWS RAM) resource share for the DB cluster. Share the DB cluster with all the development accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway in the shared services account. Create an AWS Resource Access Manager (AWS RAM) resource share for the transit gateway. Share the transit gateway with all the development accounts. Instruct the developers to accept the resource share. Configure networking.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Application Load Balancer (ALB) that points to the IP address of the DB cluster. Create an AWS PrivateLink endpoint service that uses the ALB. Add permissions to allow each development account to connect to the endpoint service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Site-to-Site VPN connection in the shared services account. Configure networking. Use AWS Marketplace VPN software in each development account to connect to the Site-to-Site VPN connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#447",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company used AWS CloudFormation to create all new infrastructure in its AWS member accounts. The resources rarely change and are properly sized for the expected load. The monthly AWS bill is consistent.<br><br>Occasionally, a developer creates a new resource for testing and forgets to remove the resource when the test is complete. Most of these tests last a few days before the resources are no longer needed.<br><br>The company wants to automate the process of finding unused resources. A solutions architect needs to design a solution that determines whether the cost in the AWS bill is increasing. The solution must help identify resources that cause an increase in cost and must automatically notify the company's operations team.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tự động phát hiện chi phí tăng do tài nguyên test bị bỏ quên và thông báo cho operations.</li><li>Requirement chính: xác định tài nguyên gây tăng chi phí, tự động notify.</li><li>Ưu tiên: ít vận hành, chi tiết đến service/tài nguyên.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Cost Anomaly Detection</strong> với monitor loại <strong>AWS services</strong> phát hiện bất thường theo từng service và chỉ ra nguyên nhân gốc, kèm subscription để thông báo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — alarm tổng ngưỡng cố định không chỉ ra tài nguyên gây tăng.</li><li><strong>B</strong>: ❌ Sai — cũng chỉ là tổng ước tính, không xác định tài nguyên.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — monitor <strong>Linked account</strong> theo dõi theo account, ít chi tiết hơn theo service.</li><li><strong>D</strong>: ✅ Đúng — monitor AWS services, xác định service/tài nguyên tăng chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Cost Anomaly Detection, cost monitor, AWS services, root cause, subscription</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phát hiện chi phí bất thường + tìm tài nguyên gây ra → nghĩ ngay đến Cost Anomaly Detection.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#447",
          "answers": [
            {
              "choice": "<p>A. Turn on billing alerts. Use AWS Cost Explorer to determine the costs for the past month. Create an Amazon CloudWatch alarm for total estimated charges. Specify a cost threshold that is higher than the costs that Cost Explorer determined. Add a notification to alert the operations team if the alarm threshold is breached.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on billing alerts. Use AWS Cost Explorer to determine the average monthly costs for the past 3 months. Create an Amazon CloudWatch alarm for total estimated charges. Specify a cost threshold that is higher than the costs that Cost Explorer determined. Add a notification to alert the operations team if the alarm threshold is breached.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Cost Anomaly Detection to create a cost monitor that has a monitor type of Linked account. Create a subscription to send daily AWS cost summaries to the operations team. Specify a threshold for cost variance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Cost Anomaly Detection to create a cost monitor that has a monitor type of AWS services. Create a subscription to send daily AWS cost summaries to the operations team. Specify a threshold for cost variance.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#448",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new web-based application and needs a storage solution for the Linux application servers. The company wants to create a single location for updates to application data for all instances. The active dataset will be up to 100 GB in size. A solutions architect has determined that peak operations will occur for 3 hours daily and will require a total of 225 MiBps of read throughput.<br><br>The solutions architect must design a Multi-AZ solution that makes a copy of the data available in another AWS Region for disaster recovery (DR). The DR copy has an RPO of less than 1 hour.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Storage dùng chung cho Linux server, 100 GB, peak 225 MiBps đọc, Multi-AZ, DR Region RPO dưới 1 giờ.</li><li>Requirement chính: shared file system đáp ứng throughput và DR.</li><li>Ưu tiên: Multi-AZ, replication cross-Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EFS</strong> là file system dùng chung Multi-AZ, throughput cấu hình được (bursting/provisioned) và có <strong>EFS Replication</strong> sang Region khác (RPO tính theo phút).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EFS Multi-AZ + replication sang DR Region.</li><li><strong>B</strong>: ❌ Sai — <strong>FSx for Lustre</strong> dùng cho HPC; backup cross-Region không đảm bảo RPO dưới 1 giờ.</li><li><strong>C</strong>: ❌ Sai — <strong>EBS Multi-Attach</strong> không phải shared file system cho nhiều instance Multi-AZ; EBS chỉ trong một AZ.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>FSx for OpenZFS</strong> + DataSync tự dựng, nhiều vận hành hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Amazon EFS, Multi-AZ, EFS Replication, shared file system, RPO</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp shared file system cho Linux + Multi-AZ + DR cross-Region → nghĩ ngay đến EFS + replication.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#448",
          "answers": [
            {
              "choice": "<p>A. Deploy a new Amazon Elastic File System (Amazon EFS) Multi-AZ file system. Configure the file system for 75 MiBps of provisioned throughput. Implement replication to a file system in the DR Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a new Amazon FSx for Lustre file system. Configure Bursting Throughput mode for the file system. Use AWS Backup to back up the file system to the DR Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume with 225 MiBps of throughput. Enable Multi-Attach for the EBS volume. Use AWS Elastic Disaster Recovery to replicate the EBS volume to the DR Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon FSx for OpenZFS file system in both the production Region and the DR Region. Create an AWS DataSync scheduled task to replicate the data from the production file system to the DR file system every 10 minutes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#449",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to gather data from an experiment in a remote location that does not have internet connectivity. During the experiment, sensors that are connected to a local network will generate 6 TB of data in a proprietary format over the course of 1 week. The sensors can be configured to upload their data files to an FTP server periodically, but the sensors do not have their own FTP server. The sensors also do not support other protocols. The company needs to collect the data centrally and move the data to object storage in the AWS Cloud as soon as possible after the experiment.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Vùng không có internet, sensor chỉ upload qua FTP, 6 TB dữ liệu trong 1 tuần, cần chuyển lên object storage ASAP sau thí nghiệm.</li><li>Requirement chính: có FTP server tại chỗ, dữ liệu cuối cùng nằm trong <strong>Amazon S3</strong>.</li><li>Ưu tiên: offline transfer.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Snowcone</strong> chạy được EC2 instance để cài <strong>FTP server</strong>, sensor upload vào đó; trả thiết bị cho AWS để nạp dữ liệu vào S3.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — sensor chỉ hỗ trợ FTP, không phải NFS; DataSync không phù hợp việc này.</li><li><strong>B</strong>: ❌ Sai — sensor không thể bị script kéo dữ liệu, và dữ liệu lên dạng EBS volume chứ không phải object storage.</li><li><strong>C</strong>: ✅ Đúng — FTP server trên EC2 trong Snowcone, dữ liệu vào S3.</li><li><strong>D</strong>: ❌ Sai — Snowcone không hỗ trợ FSx và kết quả là EBS, không phải S3.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Snowcone, EC2 on device, FTP server, offline, S3</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp site không có internet + sensor chỉ FTP → nghĩ ngay đến Snow device chạy EC2 làm FTP server.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#449",
          "answers": [
            {
              "choice": "<p>A. Order an AWS Snowball Edge Compute Optimized device. Connect the device to the local network. Configure AWS DataSync with a target bucket name, and unload the data over NFS to the device. After the experiment, return the device to AWS so that the data can be loaded into Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Order an AWS Snowcone device, including an Amazon Linux 2 AMI. Connect the device to the local network. Launch an Amazon EC2 instance on the device. Create a shell script that periodically downloads data from each sensor. After the experiment, return the device to AWS so that the data can be loaded as an Amazon Elastic Block Store (Amazon EBS) volume.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order an AWS Snowcone device, including an Amazon Linux 2 AMI. Connect the device to the local network. Launch an Amazon EC2 instance on the device. Install and configure an FTP server on the EC2 instance. Configure the sensors to upload data to the EC2 instance. After the experiment, return the device to AWS so that the data can be loaded into Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order an AWS Snowcone device. Connect the device to the local network. Configure the device to use Amazon FSx. Configure the sensors to upload data to the device. Configure AWS DataSync on the device to synchronize the uploaded data with an Amazon S3 bucket. Return the device to AWS so that the data can be loaded as an Amazon Elastic Block Store (Amazon EBS) volume.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#450",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that has multiple business units is using AWS Organizations with all features enabled. The company has implemented an account structure in which each business unit has its own AWS account. Administrators in each AWS account need to view detailed cost and utilization data for their account by using Amazon Athena.<br><br>Each business unit can have access to only its own cost and utilization data. The IAM policies that govern the ability to set up AWS Cost and Usage Reports are in place. A central Cost and Usage Report that contains all data for the organization is already available in an Amazon S3 bucket.<br><br>Which solution will meet these requirements with the LEAST operational complexity?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mỗi business unit chỉ xem được chi phí của account mình bằng Athena từ một CUR tập trung.</li><li>Requirement chính: phân quyền theo account, <strong>LEAST operational complexity</strong>.</li><li>Ưu tiên: cô lập dữ liệu CUR theo từng member account.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda kích hoạt bởi S3 event tách dữ liệu của từng member account vào <strong>prefix</strong> riêng trong <strong>Amazon S3</strong>, bucket policy cho từng account truy cập prefix của mình, rồi dùng Athena.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>AWS RAM</strong> không chia sẻ được dữ liệu CUR trong S3.</li><li><strong>B</strong>: ✅ Đúng — tách dữ liệu theo account vào prefix + bucket policy.</li><li><strong>C</strong>: ❌ Sai — <strong>Cost Explorer</strong> saved report không cho query bằng Athena.</li><li><strong>D</strong>: ❌ Sai — tạo CUR riêng ở mỗi member account làm mỗi account thấy dữ liệu không đủ chi tiết/cần cấu hình lặp, phức tạp hơn và không dùng CUR trung tâm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Cost and Usage Report, Athena, S3 prefix, bucket policy, per-account access</p><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp CUR tập trung cần chia dữ liệu theo account → nghĩ ngay đến tách prefix S3 + bucket policy.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#450",
          "answers": [
            {
              "choice": "<p>A. In the organization's management account, use AWS Resource Access Manager (AWS RAM) to share the Cost and Usage Report data with each member account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the organization's management account, configure an S3 event to invoke an AWS Lambda function each time a new file arrives in the S3 bucket that contains the central Cost and Usage Report. Configure the Lambda function to extract each member account’s data and to place the data in Amazon S3 under a separate prefix. Modify the S3 bucket policy to allow each member account to access its own prefix.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each member account, access AWS Cost Explorer. Create a new report that contains relevant cost information for the account. Save the report in Cost Explorer. Provide instructions that the account administrators can use to access the saved report.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In each member account, create a new S3 bucket to store Cost and Usage Report data. Set up a Cost and Usage Report to deliver the data to the new S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#451",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an AWS environment for a manufacturing application. The application has been successful with customers, and the application's user base has increased. The company has connected the AWS environment to the company's on-premises data center through a 1 Gbps AWS Direct Connect connection. The company has configured BGP for the connection.<br><br>The company must update the existing network connectivity solution to ensure that the solution is highly available, fault tolerant, and secure.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Direct Connect 1 Gbps đang là single point of failure, cần HA, fault tolerant và secure.</li><li>Requirement chính: có đường dự phòng và mã hóa, <strong>MOST cost-effectively</strong>.</li><li>Ưu tiên: cost thấp nhất mà vẫn đạt resilience + security.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Site-to-Site VPN (IPsec) qua internet làm backup cho Direct Connect rẻ hơn nhiều so với connection thứ hai, đồng thời mã hóa dữ liệu khi truyền. Static VPN đơn giản và không có yêu cầu đặc biệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — MACsec chỉ hỗ trợ dedicated connection 10/100 Gbps, không dùng được với 1 Gbps; private IP VPN còn cần transit VIF.</li><li><strong>B</strong>: ❌ Sai — Connection thứ hai đắt, MACsec không hỗ trợ 1 Gbps.</li><li><strong>C</strong>: ❌ Sai — Nhiều VIF vẫn chạy trên cùng một connection vật lý, không tăng resilience và không mã hóa.</li><li><strong>D</strong>: ✅ Đúng — VPN backup rẻ, mã hóa IPsec, tạo đường dự phòng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Direct Connect backup bằng Site-to-Site VPN</li><li>MACsec chỉ 10/100 Gbps</li><li>MOST cost-effectively</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Direct Connect HA + cost-effective\" → nghĩ ngay đến <strong>Site-to-Site VPN làm backup</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#451",
          "answers": [
            {
              "choice": "<p>A. Add a dynamic private IP AWS Site-to-Site VPN as a secondary path to secure data in transit and provide resilience for the Direct Connect connection. Configure MACsec to encrypt traffic inside the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision another Direct Connect connection between the company's on-premises data center and AWS to increase the transfer speed and provide resilience. Configure MACsec to encrypt traffic inside the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure multiple private VIFs. Load balance data across the VIFs between the on-premises data center and AWS to provide resilience.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a static AWS Site-to-Site VPN as a secondary path to secure data in transit and to provide resilience for the Direct Connect connection.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#452",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to modernize an application and migrate the application to AWS. The application stores user profile data as text in a single table in an on-premises MySQL database.<br><br>After the modernization, users will use the application to upload video files that are up to 4 GB in size. Other users must be able to download the video files from the application. The company needs a video storage solution that provides rapid scaling. The solution must not affect application performance.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: lưu video tới 4 GB và dữ liệu profile dạng text sau khi modernize.</li><li>Requirement chính: storage scale nhanh, không ảnh hưởng performance ứng dụng.</li><li>Ưu tiên: scalability, dùng đúng loại storage cho đúng loại dữ liệu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Video là object lớn nên để ở Amazon S3 (scale gần như không giới hạn, hỗ trợ object tới 5 TB), metadata/profile để ở Amazon DynamoDB cùng S3 key. DMS + SCT hỗ trợ chuyển MySQL sang DynamoDB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lưu video base64 trong cột TEXT làm phình DB, giảm performance.</li><li><strong>B</strong>: ✅ Đúng — Video lên S3, DynamoDB giữ profile và S3 key.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Keyspaces dùng được nhưng không phải đích chuẩn cho migrate bảng MySQL đơn giản, kém phổ biến hơn DynamoDB.</li><li><strong>D</strong>: ❌ Sai — DynamoDB giới hạn item 400 KB, không chứa nổi video 4 GB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Large objects → Amazon S3</li><li>DynamoDB item limit 400 KB</li><li>Lưu S3 key trong database</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"file lớn (video/ảnh) cần lưu\" → nghĩ ngay đến <strong>S3 + lưu pointer/key trong DB</strong>, không bao giờ nhét blob vào DB.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#452",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon Aurora PostgreSQL by using AWS Database Migration Service (AWS DMS). Store the videos as base64-encoded strings in a TEXT column in the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS) with the AWS Schema Conversion Tool (AWS SCT). Store the videos as objects in Amazon S3. Store the S3 key in the corresponding DynamoDB item.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon Keyspaces (for Apache Cassandra) by using AWS Database Migration Service (AWS DMS) with the AWS Schema Conversion Tool (AWS SCT). Store the videos as objects in Amazon S3. Store the S3 object identifier in the corresponding Amazon Keyspaces entry.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS) with the AWS Schema Conversion Tool (AWS SCT). Store the videos as base64-encoded strings in the corresponding DynamoDB item.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#453",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores and manages documents in an Amazon Elastic File System (Amazon EFS) file system. The file system is encrypted with an AWS Key Management Service (AWS KMS) key. The file system is mounted to an Amazon EC2 instance that runs proprietary software.<br><br>The company has enabled automatic backups for the file system. The automatic backups use the AWS Backup default backup plan.<br><br>A solutions architect must ensure that deleted documents can be recovered within an RPO of 100 minutes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: khôi phục tài liệu bị xóa trên EFS với RPO 100 phút.</li><li>Requirement chính: tần suất backup đủ dày (&lt; 100 phút) và backup phải dùng được KMS key mã hóa file system.</li><li>Ưu tiên: đáp ứng RPO, quyền KMS đúng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Default backup plan chỉ chạy hằng ngày nên không đạt RPO. Tạo backup plan mới với lịch hourly (60 phút &lt; 100 phút), role dùng để backup phải được cấp quyền trên KMS key.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Backup plan mới hourly đạt RPO, role được cấp quyền KMS key.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Mỗi 30 phút cũng đạt RPO nhưng thường tốn chi phí hơn mức cần thiết; đề chọn A làm đáp án.</li><li><strong>C</strong>: ❌ Sai — Continuous backup (PITR) không hỗ trợ cho EFS.</li><li><strong>D</strong>: ❌ Sai — EFS Replication không phục hồi file bị xóa vì xóa cũng được replicate; backup plan mặc định vẫn daily.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Backup plan schedule</li><li>RPO 100 phút → hourly</li><li>KMS key policy cho backup role</li><li>Replication ≠ backup</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"recover deleted files + RPO\" → nghĩ ngay đến <strong>AWS Backup với tần suất ngắn hơn RPO</strong>, không dùng replication.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#453",
          "answers": [
            {
              "choice": "<p>A. Create a new IAM role. Create a new backup plan. Use the new IAM role to create backups. Update the KMS key policy to allow the new IAM role to use the key. Implement an hourly backup schedule for the file system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new backup plan. Update the KMS key policy to allow the AWSServiceRoleForBackup IAM role to use the key. Implement a custom cron expression to run a backup of the file system every 30 minutes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new IAM role. Use the existing backup plan. Update the KMS key policy to allow the new IAM role to use the key. Enable continuous backups for point-in-time recovery.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the existing backup plan. Update the KMS key policy to allow the AWSServiceRoleForBackup IAM role to use the key. Enable Cross-Region Replication for the file system.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#454",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must provide a secure way for a team of cloud engineers to use the AWS CLI to upload objects into an Amazon S3 bucket. Each cloud engineer has an IAM user, IAM access keys, and a virtual multi-factor authentication (MFA) device. The IAM users for the cloud engineers are in a group that is named S3-access. The cloud engineers must use MFA to perform any actions in Amazon S3.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bắt buộc MFA khi dùng AWS CLI để thao tác S3.</li><li>Requirement chính: IAM policy deny nếu không có MFA, và CLI phải có credentials mang MFA context.</li><li>Ưu tiên: security.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Long-term access keys không mang MFA, nên phải gọi `sts get-session-token` với MFA code để lấy temporary credentials, rồi dùng trong profile. Group policy deny khi `aws:MultiFactorAuthPresent` không true.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Bucket policy không \"prompt\" MFA được; access key thường không có MFA.</li><li><strong>B</strong>: ❌ Sai — Group không có trust policy và không thể \"assume group\".</li><li><strong>C</strong>: ❌ Sai — Access key thông thường luôn bị deny vì không có MFA context, CLI không dùng được.</li><li><strong>D</strong>: ✅ Đúng — Deny without MFA + STS temporary credentials có MFA.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>aws:MultiFactorAuthPresent</li><li>sts get-session-token</li><li>Temporary credentials</li><li>CLI + MFA</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"CLI phải dùng MFA\" → nghĩ ngay đến <strong>STS GetSessionToken + deny policy điều kiện MFA</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#454",
          "answers": [
            {
              "choice": "<p>A. Attach a policy to the S3 bucket to prompt the IAM user for an MFA code when the IAM user performs actions on the S3 bucket. Use IAM access keys with the AWS CLI to call Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the trust policy for the S3-access group to require principals to use MFA when principals assume the group. Use IAM access keys with the AWS CLI to call Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach a policy to the S3-access group to deny all S3 actions unless MFA is present. Use IAM access keys with the AWS CLI to call Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach a policy to the S3-access group to deny all S3 actions unless MFA is present. Request temporary credentials from AWS Security Token Service (AWS STS). Attach the temporary credentials in a profile that Amazon S3 will reference when the user performs actions in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#455",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate 60 on-premises legacy applications to AWS. The applications are based on the NET Framework and run on Windows.<br><br>The company needs a solution that minimizes migration time and requires no application code changes. The company also does not want to manage the infrastructure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: migrate 60 ứng dụng .NET Framework trên Windows.</li><li>Requirement chính: nhanh, không đổi code, không quản lý infrastructure.</li><li>Ưu tiên: minimum migration time, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Windows Web Application Migration Assistant đưa ứng dụng IIS lên AWS Elastic Beanstalk (managed) mà không đổi code, giảm tối đa việc vận hành.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Refactor/containerize tốn thời gian; .NET Framework không chạy trên Linux container Fargate dễ dàng.</li><li><strong>B</strong>: ✅ Đúng — Migration Assistant + Elastic Beanstalk, managed, không đổi code.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Chạy được nhưng phải tự quản lý EC2.</li><li><strong>D</strong>: ❌ Sai — Refactor tốn thời gian và EKS phức tạp hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Windows Web Application Migration Assistant</li><li>Elastic Beanstalk</li><li>No code change</li><li>Managed infrastructure</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"migrate IIS/.NET web app, no code change, no infra management\" → nghĩ ngay đến <strong>Migration Assistant + Elastic Beanstalk</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#455",
          "answers": [
            {
              "choice": "<p>A. Refactor the applications and containerize them by using AWS Toolkit for NET Refactoring. Use Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type to host the containerized applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Windows Web Application Migration Assistant to migrate the applications to AWS Elastic Beanstalk. Use Elastic Beanstalk to deploy and manage the applications.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Windows Web Application Migration Assistant to migrate the applications to Amazon EC2 instances. Use the EC2 instances to deploy and manage the applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Refactor the applications and containerize them by using AWS Toolkit for NET Refactoring. Use Amazon Elastic Kubernetes Service (Amazon EKS) with the Fargate launch type to host the containerized applications.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#456",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to run large batch-processing jobs on data that is stored in an Amazon S3 bucket. The jobs perform simulations. The results of the jobs are not time sensitive, and the process can withstand interruptions.<br><br>Each job must process 15-20 GB of data when the data is stored in the S3 bucket. The company will store the output from the jobs in a different Amazon S3 bucket for further analysis.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: batch simulation đọc 15-20 GB từ S3.</li><li>Requirement chính: không gấp, chịu được gián đoạn, <strong>MOST cost-effectively</strong>.</li><li>Ưu tiên: cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Workload chịu gián đoạn và không time sensitive là trường hợp lý tưởng cho Spot Instances. AWS Batch quản lý job và SPOT_CAPACITY_OPTIMIZED giảm khả năng bị interrupt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda giới hạn 15 phút và provisioned capacity đắt, không hợp job dài.</li><li><strong>B</strong>: ✅ Đúng — Batch + Spot-only, rẻ nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — On-Demand thêm chi phí không cần thiết.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — EKS vận hành phức tạp, có On-Demand nên đắt hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Batch</li><li>Spot Instances</li><li>SPOT_CAPACITY_OPTIMIZED</li><li>Interruption tolerant</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"batch, không time sensitive, chịu gián đoạn, cost\" → nghĩ ngay đến <strong>AWS Batch + Spot</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#456",
          "answers": [
            {
              "choice": "<p>A. Create a serverless data pipeline. Use AWS Step Functions for orchestration. Use AWS Lambda functions with provisioned capacity to process the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Batch compute environment that includes Amazon EC2 Spot Instances. Specify the SPOT_CAPACITY_OPTIMIZED allocation strategy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Batch compute environment that includes Amazon EC2 On-Demand Instances and Spot Instances. Specify the SPOT_CAPACITY_OPTIMIZED allocation strategy for the Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Elastic Kubernetes Service (Amazon EKS) to run the processing jobs. Use managed node groups that contain a combination of Amazon EC2 On-Demand Instances and Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#457",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that analyzes and stores image data on premises. The application receives millions of new image files every day. Files are an average of 1 MB in size. The files are analyzed in batches of 1 GB. When the application analyzes a batch, the application zips the images together. The application then archives the images as a single file in an on-premises NFS server for long-term storage.<br><br>The company has a Microsoft Hyper-V environment on premises and has compute capacity available. The company does not have storage capacity and wants to archive the images on AWS. The company needs the ability to retrieve archived data within 1 week of a request.<br><br>The company has a 10 Gbps AWS Direct Connect connection between its on-premises data center and AWS. The company needs to set bandwidth limits and schedule archived images to be copied to AWS during non-business hours.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: archive batch ảnh đã zip (1 GB) từ NFS on-premises lên AWS.</li><li>Requirement chính: retrieve trong 1 tuần, giới hạn bandwidth, lên lịch ngoài giờ, có compute on-prem (Hyper-V).</li><li>Ưu tiên: cost thấp nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>DataSync agent chạy dạng Hyper-V VM on-premises hỗ trợ bandwidth throttling và scheduling, ghi thẳng vào S3 Glacier Deep Archive (rẻ nhất, retrieve trong 12-48 giờ, đạt yêu cầu 1 tuần).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Agent không chạy trên EC2 GPU để đọc NFS on-prem hợp lý; Glacier Instant Retrieval đắt hơn mức cần.</li><li><strong>B</strong>: ✅ Đúng — Agent Hyper-V VM, Deep Archive rẻ nhất.</li><li><strong>C</strong>: ❌ Sai — Qua S3 Standard rồi lifecycle tốn thêm chi phí và agent trên EC2 không cần thiết.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Tape Gateway chạy được nhưng phức tạp hơn và không có bandwidth scheduling tiện như DataSync.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DataSync agent on Hyper-V</li><li>S3 Glacier Deep Archive</li><li>Bandwidth throttling + schedule</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"archive, retrieve vài ngày, giới hạn bandwidth/lịch\" → nghĩ ngay đến <strong>DataSync + Glacier Deep Archive</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#457",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS DataSync agent on a new GPU-based Amazon EC2 instance. Configure the DataSync agent to copy the batch of files from the NFS on-premises server to Amazon S3 Glacier Instant Retrieval. After the successful copy, delete the data from the on-premises storage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS DataSync agent as a Hyper-V VM on premises. Configure the DataSync agent to copy the batch of files from the NFS on-premises server to Amazon S3 Glacier Deep Archive. After the successful copy, delete the data from the on-premises storage.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS DataSync agent on a new general purpose Amazon EC2 instance. Configure the DataSync agent to copy the batch of files from the NFS on-premises server to Amazon S3 Standard. After the successful copy, delete the data from the on-premises storage. Create an S3 Lifecycle rule to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 day.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway Tape Gateway on premises in the Hyper-V environment. Connect the Tape Gateway to AWS. Use automatic tape creation. Specify an Amazon S3 Glacier Deep Archive pool. Eject the tape after the batch of images is copied.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#458",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to record key performance indicators (KPIs) from its application as part of a strategy to convert to a user-based licensing schema. The application is a multi-tier application with a web-based UI. The company saves all log files to Amazon CloudWatch by using the CloudWatch agent. All logins to the application are saved in a log file.<br><br>As part of the new license schema, the company needs to find out how many unique users each client has on a daily basis, weekly basis, and monthly basis.<br><br>Which solution will provide this information with the LEAST change to the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: đếm số unique user theo client theo ngày/tuần/tháng từ log login trong CloudWatch Logs.</li><li>Requirement chính: <strong>LEAST change to the application</strong>.</li><li>Ưu tiên: không sửa code ứng dụng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda subscribe vào CloudWatch Logs có thể parse log, trích user name/client name và đẩy custom metric với dimension tương ứng mà không đổi code ứng dụng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Metric filter không tạo được metric với dimension động từ nội dung log (user name/client name) kiểu này.</li><li><strong>B</strong>: ❌ Sai — Phải sửa application logic, vi phạm \"least change\".</li><li><strong>C</strong>: ❌ Sai — CloudWatch agent không trích metric từ nội dung log theo kiểu này.</li><li><strong>D</strong>: ✅ Đúng — Lambda xử lý log stream, không đổi ứng dụng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch Logs subscription</li><li>Lambda custom metric</li><li>Dimensions</li><li>LEAST change</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"xử lý log tùy biến, không sửa app\" → nghĩ ngay đến <strong>CloudWatch Logs subscription + Lambda</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#458",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon CloudWatch Logs metric filter that saves each successful login as a metric. Configure the user name and client name as dimensions for the metric.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the application logic to make each successful login generate a call to the AWS SDK to increment a custom metric that records user name and client name dimensions in CloudWatch.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the CloudWatch agent to extract successful login metrics from the logs. Additionally, configure the CloudWatch agent to save the successful login metrics as a custom metric that uses the user name and client name as dimensions for the metric.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an AWS Lambda function to consume an Amazon CloudWatch Logs stream of the application logs. Additionally, configure the Lambda function to increment a custom metric in CloudWatch that uses the user name and client name as dimensions for the metric.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#459",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using GitHub Actions to run a CI/CD pipeline that accesses resources on AWS. The company has an IAM user that uses a secret key in the pipeline to authenticate to AWS. An existing IAM role with an attached policy grants the required permissions to deploy resources.<br><br>The company’s security team implements a new requirement that pipelines can no longer use long-lived secret keys. A solutions architect must replace the secret key with a short-lived solution.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thay IAM user secret key trong GitHub Actions bằng credential ngắn hạn.</li><li>Requirement chính: không dùng long-lived key.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>GitHub hỗ trợ OIDC native. Tạo IAM OIDC IdP + role với trust policy `sts:AssumeRoleWithWebIdentity`, pipeline nhận temporary credentials, không cần quản lý secret.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — GitHub Actions không dùng SAML cho pipeline; cấu hình phức tạp.</li><li><strong>B</strong>: ✅ Đúng — OIDC provider cho GitHub, ít vận hành nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Thêm Cognito identity pool là thành phần thừa.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — IAM Roles Anywhere cần PKI/Private CA và quản lý certificate, overhead cao.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>GitHub OIDC</li><li>AssumeRoleWithWebIdentity</li><li>Short-lived credentials</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"CI/CD (GitHub/GitLab) truy cập AWS, bỏ access key\" → nghĩ ngay đến <strong>IAM OIDC identity provider + role</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#459",
          "answers": [
            {
              "choice": "<p>A. Create an IAM SAML 2.0 identity provider (IdP) in AWS Identity and Access Management (IAM). Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRole API call. Attach the existing IAM policy to the new IAM role. Update GitHub to use SAML authentication for the pipeline.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM OpenID Connect (OIDC) identity provider (IdP) in AWS Identity and Access Management (IAM). Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRoleWithWebIdentity API call from the GitHub OIDC IdP. Update GitHub to assume the role for the pipeline.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Cognito identity pool. Configure the authentication provider to use GitHub. Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRoleWithWebIdentity API call from the GitHub authentication provider. Configure the pipeline to use Cognito as its authentication provider.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a trust anchor to AWS Private Certificate Authority. Generate a client certificate to use with AWS IAM Roles Anywhere. Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRole API call. Attach the existing IAM policy to the new IAM role. Configure the pipeline to use the credential helper tool and to reference the client certificate public key to assume the new IAM role.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#460",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web-crawling process on a list of target URLs to obtain training documents for machine learning training algorithms. A fleet of Amazon EC2 t2.micro instances pulls the target URLs from an Amazon Simple Queue Service (Amazon SQS) queue. The instances then write the result of the crawling algorithm as a .csv file to an Amazon Elastic File System (Amazon EFS) volume. The EFS volume is mounted on all instances of the fleet.<br><br>A separate system adds the URLs to the SQS queue at infrequent rates. The instances crawl each URL in 10 seconds or less.<br><br>Metrics indicate that some instances are idle when no URLs are in the SQS queue. A solutions architect needs to redesign the architecture to optimize costs.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: fleet EC2 t2.micro crawl URL từ SQS, thỉnh thoảng idle, ghi csv vào EFS.</li><li>Requirement chính: tối ưu chi phí; mỗi URL xử lý dưới 10 giây, tần suất thấp.</li><li>Ưu tiên: cost, pay-per-use.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Task ngắn và không đều hợp với AWS Lambda (chỉ trả khi chạy, trigger từ SQS). Lưu kết quả ở Amazon S3 rẻ hơn EFS rất nhiều.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Instance lớn hơn vẫn idle, tốn kém hơn.</li><li><strong>B</strong>: ✅ Đúng — Lambda + SQS, không trả tiền khi idle.</li><li><strong>C</strong>: ❌ Sai — Neptune là graph DB, đắt và không phù hợp lưu file csv.</li><li><strong>D</strong>: ❌ Sai — Aurora Serverless không cần thiết cho file csv, đắt hơn S3.</li><li><strong>E</strong>: ✅ Đúng — S3 là nơi lưu object rẻ nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda + SQS event source</li><li>Idle instances → serverless</li><li>S3 thay EFS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"task ngắn, rời rạc, instance idle\" → nghĩ ngay đến <strong>Lambda</strong>; \"lưu file rẻ\" → <strong>S3</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#460",
          "answers": [
            {
              "choice": "<p>A. Use m5.8xlarge instances instead of t2.micro instances for the web-crawling process. Reduce the number of instances in the fleet by 50%.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the web-crawling process into an AWS Lambda function. Configure the Lambda function to pull URLs from the SQS queue.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the web-crawling process to store results in Amazon Neptune.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the web-crawling process to store results in an Amazon Aurora Serverless MySQL instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the web-crawling process to store results in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#461",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate its website from an on-premises data center to AWS. The website consists of a load balancer, a content management system (CMS) that runs on a Linux operating system, and a MySQL database.<br><br>The CMS requires persistent NFS-compatible storage for a file system. The new solution on AWS must be able to scale from 2 Amazon EC2 instances to 30 EC2 instances in response to unpredictable traffic increases. The new solution also must require no changes to the website and must prevent data loss.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: migrate CMS Linux cần NFS shared storage, scale 2 đến 30 EC2.</li><li>Requirement chính: không đổi website, không mất dữ liệu, scale với traffic bất định.</li><li>Ưu tiên: HA, managed, scalability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon EFS là NFS shared giữa nhiều instance. Elastic Beanstalk + ALB + Auto Scaling quản lý scale, Aurora MySQL tách riêng để database không bị mất khi environment bị xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EFS + Beanstalk + ALB + ASG, Aurora tách riêng.</li><li><strong>B</strong>: ❌ Sai — EBS Multi-Attach không phải NFS, giới hạn số instance và cùng AZ; RDS trong Beanstalk environment dễ mất dữ liệu.</li><li><strong>C</strong>: ❌ Sai — Mount EFS bằng scale-in lifecycle hook là sai (phải là launch/user data).</li><li><strong>D</strong>: ❌ Sai — EBS Multi-Attach không phải NFS; ElastiCache không thay thế MySQL.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>NFS-compatible → EFS</li><li>Aurora tách khỏi Beanstalk</li><li>EBS Multi-Attach limits</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"shared NFS cho nhiều EC2\" → nghĩ ngay đến <strong>Amazon EFS</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#461",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file system. Deploy the CMS to AWS Elastic Beanstalk with an Application Load Balancer and an Auto Scaling group. Use .ebextensions to mount the EFS file system to the EC2 instances. Create an Amazon Aurora MySQL database that is separate from the Elastic Beanstalk environment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Block Store (Amazon EBS) Multi-Attach volume. Deploy the CMS to AWS Elastic Beanstalk with a Network Load Balancer and an Auto Scaling group. Use .ebextensions to mount the EBS volume to the EC2 instances. Create an Amazon RDS for MySQL database in the Elastic Beanstalk environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic File System (Amazon EFS) file system. Create a launch template and an Auto Scaling group to launch EC2 instances to support the CMS. Create a Network Load Balancer to distribute traffic. Create an Amazon Aurora MySQL database. Use an EC2 Auto Scaling scale-in lifecycle hook to mount the EFS file system to the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Elastic Block Store (Amazon EBS) Multi-Attach volume. Create a launch template and an Auto Scaling group to launch EC2 instances to support the CMS. Create an Application Load Balancer to distribute traffic. Create an Amazon ElastiCache for Redis cluster to support the MySQL database. Use EC2 user data to attach the EBS volume to the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#462",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement disaster recovery for a critical application that runs in a single AWS Region. The application's users interact with a web frontend that is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application writes to an Amazon RDS for MySQL DB instance. The application also outputs processed documents that are stored in an Amazon S3 bucket.<br><br>The company’s finance team directly queries the database to run reports. During busy periods, these queries consume resources and negatively affect application performance.<br><br>A solutions architect must design a solution that will provide resiliency during a disaster. The solution must minimize data loss and must resolve the performance problems that result from the finance team's queries.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DR cho app trên EC2/ALB/RDS MySQL/S3 và giảm tải do query của finance team.</li><li>Requirement chính: resilient khi thảm họa, minimize data loss, giải quyết performance.</li><li>Ưu tiên: cross-Region DR hợp lý về chi phí.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-Region read replica vừa phục vụ finance query vừa dùng promote khi DR; S3 CRR bảo vệ document; AMI copy cho phép dựng lại frontend (pilot light) khi cần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Chuyển sang DynamoDB đòi hỏi viết lại app, Lambda sync S3 thay vì CRR.</li><li><strong>B</strong>: ❌ Sai — Không thể add instance Region khác vào ALB hiện có (ALB là regional).</li><li><strong>C</strong>: ✅ Đúng — Read replica + S3 CRR + AMI copy.</li><li><strong>D</strong>: ❌ Sai — Snapshot hourly gây mất dữ liệu nhiều hơn; ElastiCache không giải quyết đầy đủ query báo cáo.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region read replica</li><li>S3 CRR</li><li>AMI copy / pilot light</li><li>ALB là regional</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"DR + giảm tải reporting trên RDS\" → nghĩ ngay đến <strong>cross-Region read replica</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#462",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon DynamoDB and use DynamoDB global tables. Instruct the finance team to query a global table in a separate Region. Create an AWS Lambda function to periodically synchronize the contents of the original S3 bucket to a new S3 bucket in the separate Region. Launch EC2 instances and create an ALB in the separate Region. Configure the application to point to the new S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch additional EC2 instances that host the application in a separate Region. Add the additional instances to the existing ALIn the separate Region, create a read replica of the RDS DB instance. Instruct the finance team to run queries against the read replica. Use S3 Cross-Region Replication (CRR) from the original S3 bucket to a new S3 bucket in the separate Region. During a disaster, promote the read replica to a standalone DB instance. Configure the application to point to the new S3 bucket and to the newly promoted read replica.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica of the RDS DB instance in a separate Region. Instruct the finance team to run queries against the read replica. Create AMIs of the EC2 instances that host the application frontend. Copy the AMIs to the separate Region. Use S3 Cross-Region Replication (CRR) from the original S3 bucket to a new S3 bucket in the separate Region. During a disaster, promote the read replica to a standalone DB instance. Launch EC2 instances from the AMIs and create an ALB to present the application to end users. Configure the application to point to the new S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create hourly snapshots of the RDS DB instance. Copy the snapshots to a separate Region. Add an Amazon ElastiCache cluster in front of the existing RDS database. Create AMIs of the EC2 instances that host the application frontend. Copy the AMIs to the separate Region. Use S3 Cross-Region Replication (CRR) from the original S3 bucket to a new S3 bucket in the separate Region. During a disaster, restore the database from the latest RDS snapshot. Launch EC2 instances from the AMIs and create an ALB to present the application to end users. Configure the application to point to the new S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#463",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an IPSec VPN. The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cung cấp dịch vụ on-premises cho các công ty khác dùng AWS.</li><li>Requirement chính: dữ liệu nhạy cảm, không đi qua internet.</li><li>Ưu tiên: private connectivity (PrivateLink).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>VPC Endpoint Service (AWS PrivateLink) phải đặt sau Network Load Balancer để consumer kết nối riêng tư, không qua internet; traffic tới on-prem đi qua DX.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Endpoint service sau NLB, TCP, qua DX.</li><li><strong>B</strong>: ❌ Sai — Endpoint service không đặt sau ALB.</li><li><strong>C</strong>: ❌ Sai — Internet gateway làm traffic đi qua internet.</li><li><strong>D</strong>: ❌ Sai — NAT gateway chỉ cho outbound, không expose dịch vụ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>PrivateLink</li><li>VPC Endpoint Service + NLB</li><li>Không qua internet</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"expose service cho account khác, private\" → nghĩ ngay đến <strong>PrivateLink + NLB</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#463",
          "answers": [
            {
              "choice": "<p>A. Create a VPC Endpoint Service that accepts TCP traffic, host it behind a Network Load Balancer, and make the service available over DX.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC Endpoint Service that accepts HTTP or HTTPS traffic, host it behind an Application Load Balancer, and make the service available over DX.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach a NAT gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#464",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. A solutions architect must design a solution in which only administrator roles are allowed to use IAM actions. However, the solutions architect does not have access to all the AWS accounts throughout the company.<br><br>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chỉ admin role được dùng IAM actions trên toàn organization.</li><li>Requirement chính: không có quyền truy cập mọi account; LEAST operational overhead.</li><li>Ưu tiên: central governance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP áp dụng ở root OU là cách quản lý tập trung. SCP không cấp quyền mà chỉ giới hạn, nên dùng explicit Deny IAM actions với điều kiện loại trừ admin role.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP Allow không cấp quyền và không chặn được ai (cần FullAWSAccess); không đạt mục tiêu.</li><li><strong>B</strong>: ❌ Sai — CloudTrail + Lambda chỉ phản ứng sau sự việc, vận hành nặng.</li><li><strong>C</strong>: ✅ Đúng — SCP Deny ngoại trừ admin, áp ở root OU.</li><li><strong>D</strong>: ❌ Sai — Permissions boundary phải gắn từng role ở từng account, không có quyền truy cập các account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP Deny with exception</li><li>Root OU</li><li>Guardrails</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giới hạn quyền toàn org mà không vào từng account\" → nghĩ ngay đến <strong>SCP (deny + condition)</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#464",
          "answers": [
            {
              "choice": "<p>A. Create an SCP that applies to all the AWS accounts to allow IAM actions only for administrator roles. Apply the SCP to the root OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS CloudTrail to invoke an AWS Lambda function for each event that is related to IAM actions. Configure the function to deny the action if the user who invoked the action is not an administrator.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP that applies to all the AWS accounts to deny IAM actions for all users except for those with administrator roles. Apply the SCP to the root OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set an IAM permissions boundary that allows IAM actions. Attach the permissions boundary to every administrator role across all the AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#465",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company hosts some applications in a VPC in the company's shared services account.<br><br>The company has attached a transit gateway to the VPC in the shared services account.<br><br>The company is developing a new capability and has created a development environment that requires access to the applications that are in the shared services account. The company intends to delete and recreate resources frequently in the development account. The company also wants to give a development team the ability to recreate the team's connection to the shared services account as required.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dev account cần kết nối tới shared services qua transit gateway.</li><li>Requirement chính: team dev tự tạo lại connection khi cần, resource bị xóa/tạo lại thường xuyên.</li><li>Ưu tiên: self-service, ít thao tác thủ công.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chia sẻ transit gateway bằng AWS RAM, bật auto-accept attachments để dev team tự tạo attachment mà không cần team shared services duyệt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Peering thêm TGW thứ hai tốn chi phí và cấu hình không cần thiết.</li><li><strong>B</strong>: ✅ Đúng — RAM share + auto-accept + attachment.</li><li><strong>C</strong>: ❌ Sai — VPC endpoint không liên quan đến TGW attachment.</li><li><strong>D</strong>: ❌ Sai — Network Manager không dùng để share TGW; Lambda thừa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS RAM share Transit Gateway</li><li>Auto accept shared attachments</li><li>Self-service</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"share transit gateway cho account khác\" → nghĩ ngay đến <strong>AWS RAM + auto-accept</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#465",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway in the development account. Create a transit gateway peering request to the shared services account. Configure the shared services transit gateway to automatically accept peering connections.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on automatic acceptance for the transit gateway in the shared services account. Use AWS Resource Access Manager (AWS RAM) to share the transit gateway resource in the shared services account with the development account. Accept the resource in the development account. Create a transit gateway attachment in the development account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on automatic acceptance for the transit gateway in the shared services account. Create a VPC endpoint. Use the endpoint policy to grant permissions on the VPC endpoint for the development account. Configure the endpoint service to automatically accept connection requests. Provide the endpoint details to the development team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge rule to invoke an AWS Lambda function that accepts the transit gateway attachment when the development account makes an attachment request. Use AWS Network Manager to share the transit gateway in the shared services account with the development account. Accept the transit gateway in the development account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#466",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate virtual Microsoft workloads from an on-premises data center to AWS. The company has successfully tested a few sample workloads on AWS. The company also has created an AWS Site-to-Site VPN connection to a VPC. A solutions architect needs to generate a total cost of ownership (TCO) report for the migration of all the workloads from the data center.<br><br>Simple Network Management Protocol (SNMP) has been enabled on each VM in the data center. The company cannot add more VMs in the data center and cannot install additional software on the VMs. The discovery data must be automatically imported into AWS Migration Hub.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tạo TCO report cho migrate VM Microsoft.</li><li>Requirement chính: không thêm VM tại on-prem, không cài software lên VM, dữ liệu discovery tự import vào Migration Hub.</li><li>Ưu tiên: agentless discovery.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Migration Evaluator agentless collector cài trên EC2 (qua VPN, SNMP thu thập dữ liệu), dùng Migration Evaluator tạo business case/TCO report, dữ liệu đồng bộ sang Migration Hub.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Application Migration Service là công cụ migrate, không tạo TCO.</li><li><strong>B</strong>: ✅ Đúng — Collector + Migration Evaluator tạo TCO.</li><li><strong>C</strong>: ❌ Sai — Migration Hub không tạo TCO report.</li><li><strong>D</strong>: ❌ Sai — Migration Readiness Assessment là đánh giá mức sẵn sàng, không phải TCO.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Migration Evaluator</li><li>Agentless collector</li><li>TCO report</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"TCO / business case migrate\" → nghĩ ngay đến <strong>Migration Evaluator</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#466",
          "answers": [
            {
              "choice": "<p>A. Use the AWS Application Migration Service agentless service and the AWS Migration Hub Strategy Recommendations to generate the TCO report.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch a Windows Amazon EC2 instance. Install the Migration Evaluator agentless collector on the EC2 instance. Configure Migration Evaluator to generate the TCO report.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a Windows Amazon EC2 instance. Install the Migration Evaluator agentless collector on the EC2 instance. Configure Migration Hub to generate the TCO report.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Migration Readiness Assessment tool inside the VPC. Configure Migration Evaluator to generate the TCO report.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#467",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that is developing a mobile game is making game assets available in two AWS Regions. Game assets are served from a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in each Region. The company requires game assets to be fetched from the closest Region. If game assets become unavailable in the closest Region, they should be fetched from the other Region.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: game assets ở 2 Region, mỗi Region có ALB.</li><li>Requirement chính: lấy từ Region gần nhất, nếu lỗi thì lấy từ Region còn lại.</li><li>Ưu tiên: low latency + failover.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Route 53 latency-based routing đưa user tới Region gần nhất; health check + Evaluate Target Health loại bỏ endpoint không khỏe, tự failover sang Region kia.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Origin group chỉ failover theo primary/secondary, không chọn theo Region gần nhất.</li><li><strong>B</strong>: ❌ Sai — Failover routing là active-passive, không chọn gần nhất.</li><li><strong>C</strong>: ❌ Sai — Failover routing, 2 distribution không cần thiết.</li><li><strong>D</strong>: ✅ Đúng — Latency alias + health check.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Latency routing</li><li>Evaluate Target Health</li><li>Health check</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Region gần nhất + failover sang Region khác\" → nghĩ ngay đến <strong>Route 53 latency routing + health checks</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#467",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution. Create an origin group with one origin for each ALB. Set one of the origins as primary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Route 53 health check for each ALCreate a Route 53 failover routing record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two Amazon CloudFront distributions, each with one ALB as the origin. Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions. Set the Evaluate Target Health value to Yes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Route 53 health check for each ALB. Create a Route 53 latency alias record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#468",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys workloads in multiple AWS accounts. Each account has a VPC with VPC flow logs published in text log format to a centralized Amazon S3 bucket. Each log file is compressed with gzip compression. The company must retain the log files indefinitely.<br><br>A security engineer occasionally analyzes the logs by using Amazon Athena to query the VPC flow logs. The query performance is degrading over time as the number of ingested logs is growing. A solutions architect must improve the performance of the log analysis and reduce the storage space that the VPC flow logs use.<br><br>Which solution will meet these requirements with the LARGEST performance improvement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Athena query VPC flow logs text gzip ngày càng chậm.</li><li>Requirement chính: tăng performance tối đa và giảm storage.</li><li>Ưu tiên: query performance, storage size.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Parquet là columnar, nén tốt và Athena chỉ đọc các cột cần; partition theo giờ giúp Athena bỏ qua dữ liệu không liên quan, giảm scan và cải thiện performance mạnh nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — bzip2 không giúp query nhanh hơn đáng kể, thêm Lambda vận hành.</li><li><strong>B</strong>: ❌ Sai — Transfer Acceleration và Intelligent-Tiering không cải thiện query performance.</li><li><strong>C</strong>: ✅ Đúng — Parquet + partition.</li><li><strong>D</strong>: ❌ Sai — Workgroup/engine version không giải quyết lượng dữ liệu scan.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Apache Parquet</li><li>Partitioning</li><li>Athena scan less data</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Athena chậm + lưu trữ lớn\" → nghĩ ngay đến <strong>Parquet + partition</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#468",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to decompress the gzip files and to compress the files with bzip2 compression. Subscribe the Lambda function to an s3:ObjectCreated:Put S3 event notification for the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable S3 Transfer Acceleration for the S3 bucket. Create an S3 Lifecycle configuration to move files to the S3 Intelligent-Tiering storage class as soon as the files are uploaded.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the VPC flow log configuration to store the files in Apache Parquet format. Specify hourly partitions for the log files.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Athena workgroup without data usage control limits. Use Athena engine version 2.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#469",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to establish a dedicated connection between its on-premises infrastructure and AWS. The company is setting up a 1 Gbps AWS Direct Connect connection to its account VPC. The architecture includes a transit gateway and a Direct Connect gateway to connect multiple VPCs and the on-premises infrastructure.<br><br>The company must connect to VPC resources over a transit VIF by using the Direct Connect connection.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: kết nối on-prem với VPC qua transit VIF, Direct Connect gateway và transit gateway.</li><li>Requirement chính: routing hai chiều qua BGP.</li><li>Ưu tiên: đúng các bước cấu hình route.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Qua transit VIF, on-prem quảng bá prefix của mình qua BGP và Direct Connect gateway quảng bá prefix VPC về on-prem, nhờ đó có kết nối hai chiều.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Transit VIF hỗ trợ cho 1 Gbps; không cần nâng băng thông.</li><li><strong>B</strong>: ✅ Đúng — On-prem advertise prefix qua transit VIF.</li><li><strong>C</strong>: ✅ Đúng — DX gateway advertise VPC prefix về on-prem.</li><li><strong>D</strong>: ❌ Sai — MACsec là mã hóa, không cần cho kết nối và không hỗ trợ 1 Gbps.</li><li><strong>E</strong>: ❌ Sai — CKN/CAK dành cho MACsec, không liên quan yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit VIF</li><li>Direct Connect gateway</li><li>BGP advertise prefixes</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"transit VIF\" → nghĩ ngay đến <strong>BGP advertise hai chiều qua DX gateway + TGW</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#469",
          "answers": [
            {
              "choice": "<p>A. Update the 1 Gbps Direct Connect connection to 10 Gbps.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Advertise the on-premises network prefixes over the transit VIF.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Advertise the VPC prefixes from the Direct Connect gateway to the on-premises network over the transit VIF.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Direct Connect connection's MACsec encryption mode attribute to must_encrypt.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Associate a MACsec Connection Key Name/Connectivity Association Key (CKN/CAK) pair with the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#470",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with Clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.<br><br>Which solution meets these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giới hạn truy cập WorkSpaces chỉ từ văn phòng chi nhánh.</li><li>Requirement chính: dễ thêm chi nhánh mới sau này.</li><li>Ưu tiên: MOST operational efficiency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>WorkSpaces IP access control groups cho phép liệt kê public IP được phép, gắn vào directory; thêm chi nhánh chỉ cần cập nhật IP list.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — IP access control group trên directory, dễ cập nhật.</li><li><strong>B</strong>: ❌ Sai — WAF/Firewall Manager web ACL không gắn vào WorkSpaces directory.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Certificate quản lý từng thiết bị, overhead cao và không giới hạn theo vị trí.</li><li><strong>D</strong>: ❌ Sai — Custom image với Windows Firewall khó quản lý và cập nhật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>WorkSpaces IP access control group</li><li>Public IP allow list</li><li>Operational efficiency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giới hạn WorkSpaces theo IP/office\" → nghĩ ngay đến <strong>IP access control groups</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#470",
          "answers": [
            {
              "choice": "<p>A. Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Firewall Manager to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#471",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. The company runs two firewall appliances in a centralized networking account. Each firewall appliance runs on a manually configured highly available Amazon EC2 instance. A transit gateway connects the VPC from the centralized networking account to VPCs of member accounts. Each firewall appliance uses a static private IP address that is then used to route traffic from the member accounts to the internet.<br><br>During a recent incident, a badly configured script initiated the termination of both firewall appliances. During the rebuild of the firewall appliances, the company wrote a new script to configure the firewall appliances at startup.<br><br>The company wants to modernize the deployment of the firewall appliances. The firewall appliances need the ability to scale horizontally to handle increased traffic when the network expands. The company must continue to use the firewall appliances to comply with company policy. The provider of the firewall appliances has confirmed that the latest version of the firewall code will work with all AWS services.<br><br>Which combination of steps should the solutions architect recommend to meet these requirements MOST cost-effectively? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: modernize firewall appliance tự quản lý trên EC2 để scale ngang, vẫn dùng appliance của vendor.</li><li>Requirement chính: scale horizontally, tự động cấu hình, route traffic từ member account.</li><li>Ưu tiên: MOST cost-effectively.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Gateway Load Balancer (GWLB) + endpoint service phân phối traffic tới nhóm firewall; Auto Scaling group + launch template với user data tự cấu hình; GWLB endpoint tạo tập trung ở networking account, các route table member trỏ tới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — GWLB là chuẩn cho firewall/inspection appliance.</li><li><strong>B</strong>: ❌ Sai — NLB không dùng cho inspection transparent kiểu GWLB.</li><li><strong>C</strong>: ✅ Đúng — ASG + launch template + user data, target type instance.</li><li><strong>D</strong>: ❌ Sai — Launch Wizard không dùng cho trường hợp này.</li><li><strong>E</strong>: ❌ Sai — Tạo endpoint ở từng member account tốn chi phí và vận hành.</li><li><strong>F</strong>: ✅ Đúng — Endpoint tập trung ở networking account (qua TGW), cập nhật route.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Gateway Load Balancer</li><li>GWLB endpoint</li><li>Auto Scaling group + user data</li><li>Centralized inspection</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"scale third-party firewall appliance\" → nghĩ ngay đến <strong>Gateway Load Balancer</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#471",
          "answers": [
            {
              "choice": "<p>A. Deploy a Gateway Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a Network Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group and a launch template that uses the new script as user data to configure the firewall appliances. Create a target group that uses the instance target type.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group. Configure an AWS Launch Wizard deployment that uses the new script as user data to configure the firewall appliances. Create a target group that uses the IP target type.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create VPC endpoints in each member account. Update the route tables to point to the VPC endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create VPC endpoints in the centralized networking account. Update the route tables in each member account to point to the VPC endpoints.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#472",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must implement a multi-Region architecture for an Amazon RDS for PostgreSQL database that supports a web application. The database launches from an AWS CloudFormation template that includes AWS services and features that are present in both the primary and secondary Regions.<br><br>The database is configured for automated backups, and it has an RTO of 15 minutes and an RPO of 2 hours. The web application is configured to use an Amazon Route 53 record to route traffic to the database.<br><br>Which combination of steps will result in a highly available architecture that meets all the requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: multi-Region HA cho RDS PostgreSQL.</li><li>Requirement chính: RTO 15 phút, RPO 2 giờ.</li><li>Ưu tiên: failover nhanh, tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-Region read replica có thể promote nhanh (đạt RTO 15 phút, replication lag nhỏ đạt RPO), Route 53 failover routing chuyển DNS sang endpoint Region phụ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Read replica + Lambda promote.</li><li><strong>B</strong>: ❌ Sai — Restore từ snapshot mất lâu, không đạt RTO 15 phút.</li><li><strong>C</strong>: ❌ Sai — Chỉ copy backup, không đạt RTO; restore tốn thời gian.</li><li><strong>D</strong>: ✅ Đúng — Route 53 failover routing cho DNS record.</li><li><strong>E</strong>: ❌ Sai — RDS không có \"hot standby\" kiểu này; restore backup chậm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region read replica</li><li>Promote replica</li><li>Route 53 failover routing</li><li>RTO 15 phút</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"RDS multi-Region RTO ngắn\" → nghĩ ngay đến <strong>cross-Region read replica + Route 53 failover</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#472",
          "answers": [
            {
              "choice": "<p>A. Create a cross-Region read replica of the database in the secondary Region. Configure an AWS Lambda function in the secondary Region to promote the read replica during a failover event.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the primary Region, create a health check on the database that will invoke an AWS Lambda function when a failure is detected. Program the Lambda function to recreate the database from the latest database snapshot in the secondary Region and update the Route 53 host records for the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to copy the latest automated backup to the secondary Region every 2 hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a failover routing policy in Route 53 for the database DNS record. Set the primary and secondary endpoints to the endpoints in each Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a hot standby database in the secondary Region. Use an AWS Lambda function to restore the secondary database to the latest RDS automatic backup in the event that the primary database fails.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#473",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs an application on AWS. The application has an Amazon API Gateway API that invokes an AWS Lambda function. The data is stored in an Amazon RDS for PostgreSQL DB instance.<br><br>During the company’s most recent flash sale, a sudden increase in API calls negatively affected the application's performance. A solutions architect reviewed the Amazon CloudWatch metrics during that time and noticed a significant increase in Lambda invocations and database connections. The CPU utilization also was high on the DB instance.<br><br>What should the solutions architect recommend to optimize the application's performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Lambda tăng đột biến kéo theo quá nhiều database connections và CPU cao trên RDS PostgreSQL.</li><li>Requirement chính: tối ưu performance trong flash sale.</li><li>Ưu tiên: connection management.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>RDS Proxy pool và chia sẻ connection, giảm số connection thực tới database và giảm CPU do mở/đóng connection, tích hợp trực tiếp với Lambda.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Tăng memory và đóng connection không giải quyết số lượng connection đồng thời.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — ElastiCache giảm đọc nhưng không giải quyết connection storm.</li><li><strong>C</strong>: ✅ Đúng — RDS Proxy connection pooling.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Reuse connection trong từng execution environment, nhưng nhiều environment đồng thời vẫn tạo nhiều connection.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy</li><li>Connection pooling</li><li>Lambda + RDS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda + RDS, quá nhiều connections\" → nghĩ ngay đến <strong>RDS Proxy</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#473",
          "answers": [
            {
              "choice": "<p>A. Increase the memory of the Lambda function. Modify the Lambda function to close the database connections when the data is retrieved.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon ElastiCache for Redis cluster to store the frequently accessed data from the RDS database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an RDS proxy by using the Lambda console. Modify the Lambda function to use the proxy endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Lambda function to connect to the database outside of the function's handler. Check for an existing database connection before creating a new connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#474",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company wants to improve its application architecture. The company's applications register new orders, handle returns of merchandise, and provide analytics. The applications store retail data in a MySQL database and an Oracle OLAP analytics database. All the applications and databases are hosted on Amazon EC2 instances.<br><br>Each application consists of several components that handle different parts of the order process. These components use incoming data from different sources. A separate ETL job runs every week and copies data from each application to the analytics database.<br><br>A solutions architect must redesign the architecture into an event-driven solution that uses serverless services. The solution must provide updated analytics in near real time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển sang kiến trúc event-driven, serverless, analytics near real time.</li><li>Requirement chính: serverless + event-driven + near real-time analytics.</li><li>Ưu tiên: serverless services.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>EKS/Fargate cho compute không cần quản lý server, Aurora Serverless cho OLTP, Redshift Serverless cho analytics và EventBridge để định tuyến sự kiện, tạo kiến trúc event-driven serverless.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Giữ MySQL trên EC2 không serverless; Neptune là graph DB không hợp analytics.</li><li><strong>B</strong>: ❌ Sai — EC2 Auto Scaling không serverless; Aurora MySQL không thay thế OLAP.</li><li><strong>C</strong>: ✅ Đúng — Fargate + Aurora Serverless + Redshift Serverless + EventBridge.</li><li><strong>D</strong>: ❌ Sai — AppStream 2.0 là streaming ứng dụng desktop; IoT Core không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EventBridge</li><li>Aurora Serverless</li><li>Redshift Serverless</li><li>Fargate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"event-driven + serverless + analytics\" → nghĩ ngay đến <strong>EventBridge + Redshift Serverless</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#474",
          "answers": [
            {
              "choice": "<p>A. Migrate the individual applications as microservices to Amazon Elastic Container Service (Amazon ECS) containers that use AWS Fargate. Keep the retail MySQL database on Amazon EC2. Move the analytics database to Amazon Neptune. Use Amazon Simple Queue Service (Amazon SQS) to send all the incoming data to the microservices and the analytics database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group for each application. Specify the necessary number of EC2 instances in each Auto Scaling group. Migrate the retail MySQL database and the analytics database to Amazon Aurora MySQL. Use Amazon Simple Notification Service (Amazon SNS) to send all the incoming data to the correct EC2 instances and the analytics database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the individual applications as microservices to Amazon Elastic Kubernetes Service (Amazon EKS) containers that use AWS Fargate. Migrate the retail MySQL database to Amazon Aurora Serverless MySQL. Migrate the analytics database to Amazon Redshift Serverless. Use Amazon EventBridge to send all the incoming data to the microservices and the analytics database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the individual applications as microservices to Amazon AppStream 2.0. Migrate the retail MySQL database to Amazon Aurora MySQL. Migrate the analytics database to Amazon Redshift Serverless. Use AWS IoT Core to send all the incoming data to the microservices and the analytics database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#475",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning a migration from an on-premises data center to the AWS Cloud. The company plans to use multiple AWS accounts that are managed in an organization in AWS Organizations. The company will create a small number of accounts initially and will add accounts as needed. A solutions architect must design a solution that turns on AWS CloudTrail in all AWS accounts.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bật CloudTrail cho mọi account trong organization, có account mới thêm dần.</li><li>Requirement chính: tự động áp dụng cho account hiện tại và tương lai.</li><li>Ưu tiên: MOST operationally efficient.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Organization trail tạo ở management account tự động log cho tất cả account hiện có và account mới, không cần thao tác thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda theo lịch là giải pháp tự chế, tốn vận hành.</li><li><strong>B</strong>: ✅ Đúng — Organization trail tự áp dụng cho mọi account.</li><li><strong>C</strong>: ❌ Sai — Phải tạo trail thủ công mỗi account mới.</li><li><strong>D</strong>: ❌ Sai — Systems Manager Automation phức tạp và không tự động cho account mới.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Organization trail</li><li>Management account</li><li>Tự động cho account mới</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"CloudTrail cho toàn organization\" → nghĩ ngay đến <strong>organization trail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#475",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that creates a new CloudTrail trail in all AWS accounts in the organization. Invoke the Lambda function daily by using a scheduled action in Amazon EventBridge.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CloudTrail trail in the organization's management account. Configure the trail to log all events for all AWS accounts in the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudTrail trail in all AWS accounts in the organization. Create new trails whenever a new account is created. Define an SCP that prevents deletion or modification of trails. Apply the SCP to the root OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Systems Manager Automation runbook that creates a CloudTrail trail in all AWS accounts in the organization. Invoke the automation by using Systems Manager State Manager.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#476",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on an Amazon EC2 instance. The company's security policy states that all internal, nonpublic services that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Engineer làm remote cần truy cập dịch vụ nội bộ trong VPC qua VPN, bắt buộc có MFA.</li><li>Danh tính nằm ở AD DS chạy trên EC2.</li><li>Ưu tiên: remote-user VPN + tích hợp AD + MFA.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Client VPN</strong> là VPN dành cho từng người dùng remote. Nó xác thực qua <strong>AD Connector</strong> (proxy tới AD DS), và MFA bật được trên AD Connector (qua RADIUS MFA), nên thỏa cả hai yêu cầu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Site-to-Site VPN</strong> nối mạng với mạng, không dành cho từng user remote; WorkSpaces client không phải VPN client.</li><li><strong>B</strong>: ✅ Đúng — Client VPN + AD Connector + MFA.</li><li><strong>C</strong>: ❌ Sai — <strong>VPN CloudHub</strong> nối nhiều site, và AWS Copilot là công cụ cho containers, không tạo VPN.</li><li><strong>D</strong>: ❌ Sai — <strong>Amazon WorkLink</strong> là dịch vụ truy cập web nội bộ từ mobile (đã ngừng), không tích hợp kiểu này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Remote engineers, VPN, MFA, AD DS</li><li>Client VPN endpoint, AD Connector</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"remote users + VPN + Active Directory + MFA\" → nghĩ ngay đến <strong>AWS Client VPN + AD Connector</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#476",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon WorkSpaces client with MFA support enabled to establish a VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Client VPN endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create multiple AWS Site-to-Site VPN connections by using AWS VPN CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#477",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a three-tier web application in an on-premises data center. The frontend is served by an Apache web server, the middle tier is a monolithic Java application, and the storage tier is a PostgreSQL database.<br><br>During a recent marketing promotion, customers could not place orders through the application because the application crashed. An analysis showed that all three tiers were overloaded. The application became unresponsive, and the database reached its capacity limit because of read operations. The company already has several similar promotions scheduled in the near future.<br><br>A solutions architect must develop a plan for migration to AWS to resolve these issues. The solution must maximize scalability and must minimize operational effort<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng 3 tầng quá tải khi có promotion; DB bị nghẽn vì read.</li><li>Cần chọn 3 bước migrate sang AWS.</li><li>Ưu tiên: <strong>maximize scalability</strong> và <strong>minimize operational effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Frontend tĩnh đưa lên <strong>S3 + CloudFront</strong> (gần như không phải vận hành), Java app lên <strong>Elastic Beanstalk</strong> có auto scaling (rehost ít công sức), DB chuyển sang <strong>Aurora PostgreSQL</strong> với <strong>Aurora Auto Scaling</strong> cho read replicas để giải quyết nghẽn đọc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 + CloudFront scale tốt, ít vận hành.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — EC2 + ASG + EFS chạy được nhưng vận hành nhiều hơn S3/CloudFront.</li><li><strong>C</strong>: ✅ Đúng — <strong>Elastic Beanstalk</strong> có auto scaling, rehost ít effort.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — refactor sang container + <strong>Fargate</strong> tốn effort phát triển hơn.</li><li><strong>E</strong>: ✅ Đúng — <strong>DMS</strong> sang <strong>Aurora</strong> + read replica auto scaling xử lý tải đọc.</li><li><strong>F</strong>: ❌ Sai — một EC2 DB không scale, vẫn nghẽn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Maximize scalability, minimize operational effort</li><li>S3 + CloudFront, Elastic Beanstalk, Aurora Auto Scaling</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"DB nghẽn đọc + PostgreSQL + ít vận hành\" → nghĩ ngay đến <strong>Aurora + read replicas auto scaling</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#477",
          "answers": [
            {
              "choice": "<p>A. Refactor the frontend so that static assets can be hosted on Amazon S3. Use Amazon CloudFront to serve the frontend to customers. Connect the frontend to the Java application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Rehost the Apache web server of the frontend on Amazon EC2 instances that are in an Auto Scaling group. Use a load balancer in front of the Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) to host the static assets that the Apache web server needs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Rehost the Java application in an AWS Elastic Beanstalk environment that includes auto scaling.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Refactor the Java application, Develop a Docker container to run the Java application. Use AWS Fargate to host the container.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Database Migration Service (AWS DMS) to replatform the PostgreSQL database to an Amazon Aurora PostgreSQL database. Use Aurora Auto Scaling for read replicas.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Rehost the PostgreSQL database on an Amazon EC2 instance that has twice as much memory as the on-premises server.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#478",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new application on AWS. The application consists of an Amazon Elastic Kubernetes Service (Amazon EKS) cluster and an Amazon Elastic Container Registry (Amazon ECR) repository. The EKS cluster has an AWS managed node group.<br><br>The company's security guidelines state that all resources on AWS must be continuously scanned for security vulnerabilities.<br><br>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần quét lỗ hổng liên tục cho EKS managed node group (EC2) và ECR repository.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Inspector</strong> là dịch vụ managed, quét liên tục lỗ hổng cho EC2 và container images trong ECR chỉ bằng cách kích hoạt, không cần cài tool hay tự quản lý.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Security Hub</strong> chỉ tổng hợp findings, bản thân nó không quét lỗ hổng.</li><li><strong>B</strong>: ✅ Đúng — Inspector quét liên tục EC2 nodes và ECR.</li><li><strong>C</strong>: ❌ Sai — tự quản lý EC2 + tool Marketplace, overhead cao; basic scan on push không liên tục.</li><li><strong>D</strong>: ❌ Sai — <strong>CloudWatch agent</strong> thu thập metrics/logs, không quét lỗ hổng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Continuously scanned, vulnerabilities</li><li>Amazon Inspector, ECR, EC2</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"quét lỗ hổng liên tục EC2/ECR/Lambda\" → nghĩ ngay đến <strong>Amazon Inspector</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#478",
          "answers": [
            {
              "choice": "<p>A. Activate AWS Security Hub. Configure Security Hub to scan the EKS nodes and the ECR repository.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate Amazon Inspector to scan the EKS nodes and the ECR repository.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a new Amazon EC2 instance and install a vulnerability scanning tool from AWS Marketplace. Configure the EC2 instance to scan the EKS nodes. Configure Amazon ECR to perform a basic scan on push.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install the Amazon CloudWatch agent on the EKS nodes. Configure the CloudWatch agent to scan continuously. Configure Amazon ECR to perform a basic scan on push.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#479",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to improve the reliability of its ticketing application. The application runs on an Amazon Elastic Container Service (Amazon ECS) cluster. The company uses Amazon CloudFront to serve the application. A single ECS service of the ECS cluster is the CloudFront distribution’s origin.<br><br>The application allows only a specific number of active users to enter a ticket purchasing flow. These users are identified by an encrypted attribute in their JSON Web Token (JWT). All other users are redirected to a waiting room module until there is available capacity for purchasing.<br><br>The application is experiencing high loads. The waiting room module is working as designed, but load on the waiting room is disrupting the applications availability.<br>This disruption is negatively affecting the application's ticket sale transactions.<br><br>Which solution will provide the MOST reliability for ticket sale transactions during periods of high load?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Waiting room bị tải cao làm sập cả ứng dụng, ảnh hưởng giao dịch mua vé.</li><li>Cần cách ly waiting room khỏi luồng ticketing.</li><li>Ưu tiên: <strong>MOST reliability</strong> cho ticket sale.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tách waiting room thành <strong>ECS service riêng</strong> với scaling riêng, và dùng <strong>CloudFront Function</strong> đọc JWT để định tuyến ngay tại edge. Request của waiting room không bao giờ chạm vào ticketing service, nên tải cao không ảnh hưởng giao dịch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — request vẫn đi qua ticketing service trước rồi mới forward, nên ticketing vẫn chịu tải.</li><li><strong>B</strong>: ❌ Sai — chuyển sang EKS tốn effort, StatefulSet không giải quyết bài toán, ticketing pod vẫn nhận mọi request.</li><li><strong>C</strong>: ✅ Đúng — định tuyến ở edge, cách ly hoàn toàn.</li><li><strong>D</strong>: ❌ Sai — <strong>App Mesh</strong> + mTLS phức tạp, không chặn tải trước ticketing pod.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Waiting room, JWT, CloudFront Functions</li><li>Separate service, separate scaling</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cách ly tải + định tuyến theo header/JWT trước origin\" → nghĩ ngay đến <strong>CloudFront Function/edge routing</strong> và tách service.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#479",
          "answers": [
            {
              "choice": "<p>A. Create a separate service in the ECS cluster for the waiting room. Use a separate scaling configuration. Ensure that the ticketing service uses the JWT information and appropriately forwards requests to the waiting room service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Split the waiting room module into a pod that is separate from the ticketing pod. Make the ticketing pod part of a StatefulSet. Ensure that the ticketing pod uses the JWT information and appropriately forwards requests to the waiting room pod.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a separate service in the ECS cluster for the waiting room. Use a separate scaling configuration. Create a CloudFront function that inspects the JWT information and appropriately forwards requests to the ticketing service or the waiting room service.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Split the waiting room module into a pod that is separate from the ticketing pod. Use AWS App Mesh by provisioning the App Mesh controller for Kubernetes. Enable mTLS authentication and service-to-service authentication for communication between the ticketing pod and the waiting room pod. Ensure that the ticketing pod uses the JWT information and appropriately forwards requests to the waiting room pod.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#480",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating an AWS CloudFormation template from an existing manually created non-production AWS environment. The CloudFormation template can be destroyed and recreated as needed. The environment contains an Amazon EC2 instance. The EC2 instance has an instance profile that the EC2 instance uses to assume a role in a parent account.<br><br>The solutions architect recreates the role in a CloudFormation template and uses the same role name. When the CloudFormation template is launched in the child account, the EC2 instance can no longer assume the role in the parent account because of insufficient permissions<br><br>What should the solutions architect do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Role tạo lại bằng CloudFormation trùng tên nhưng EC2 không assume được role ở parent account.</li><li>Nguyên nhân gốc: <strong>trust policy/ARN</strong> ở parent account.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>IAM role mới tạo lại có <strong>unique ID/ARN</strong> mới (principal ID khác) dù trùng tên. Trust policy ở parent account còn tham chiếu principal cũ (đã bị xóa) nên bị từ chối. Cần sửa lại trust policy để ARN trỏ đúng role mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — sửa/xác nhận lại ARN trong statement `sts:AssumeRole` của trust policy ở parent account.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — cho root của child account assume thì quá rộng, vi phạm least privilege.</li><li><strong>C</strong>: ❌ Sai — capability chỉ cho phép CloudFormation tạo IAM resource, không sửa trust ở parent.</li><li><strong>D</strong>: ❌ Sai — cũng chỉ là capability; role đã tạo được rồi, lỗi nằm ở trust.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Trust policy, sts:AssumeRole, cross-account</li><li>Role recreated, principal ID</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"role bị xóa và tạo lại cùng tên, cross-account assume lỗi\" → nghĩ ngay đến <strong>cập nhật trust policy</strong> ở account đích.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#480",
          "answers": [
            {
              "choice": "<p>A. In the parent account, edit the trust policy for the role that the EC2 instance needs to assume. Ensure that the target role ARN in the existing statement that allows the sts:AssumeRole action is correct. Save the trust policy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the parent account, edit the trust policy for the role that the EC2 instance needs to assume. Add a statement that allows the sts:AssumeRole action for the root principal of the child account. Save the trust policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the CloudFormation stack again. Specify only the CAPABILITY_NAMED_IAM capability.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFormation stack again. Specify the CAPABILITY_IAM capability and the CAPABILITY_NAMED_IAM capability.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#481",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's web application has reliability issues. The application serves customers globally. The application runs on a single Amazon EC2 instance and performs read-intensive operations on an Amazon RDS for MySQL database.<br><br>During high load, the application becomes unresponsive and requires a manual restart of the EC2 instance. A solutions architect must improve the application's reliability.<br><br>Which solution will meet this requirement with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một EC2 đơn lẻ là single point of failure; DB RDS MySQL bị đọc nhiều.</li><li>Cần tăng reliability.</li><li>Ưu tiên: <strong>LEAST development effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Auto Scaling group + ELB</strong> loại bỏ single point of failure ở tầng app và tự phục hồi, còn <strong>Aurora (MySQL-compatible) + Aurora Replicas</strong> chia tải đọc mà ít phải sửa code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — standby của <strong>Multi-AZ</strong> RDS không phục vụ đọc; EC2 vẫn đơn lẻ.</li><li><strong>B</strong>: ✅ Đúng — ASG + ELB + Aurora Replicas, ít sửa code.</li><li><strong>C</strong>: ❌ Sai — <strong>Global Accelerator</strong> không sửa EC2 đơn lẻ; standby không đọc được.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — chuyển sang <strong>Lambda</strong> phải viết lại app, tốn effort nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Single EC2, read-intensive</li><li>Auto Scaling group, ELB, Aurora Replicas</li><li>Least development effort</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"read-intensive + MySQL + reliability\" → nghĩ ngay đến <strong>Aurora Replicas</strong>; \"Multi-AZ standby\" thì không đọc được.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#481",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution. Specify the EC2 instance as the distribution’s origin. Configure a Multi-AZ deployment for the RDS for MySQL database. Use the standby DB instance for the read-intensive operations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Run the application on EC2 instances that are in an Auto Scaling group. Place the EC2 instances behind an Elastic Load Balancing (ELB) load balancer. Replace the database service with Amazon Aurora. Use Aurora Replicas for the read-intensive operations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS Global Accelerator. Configure a Multi-AZ deployment for the RDS for MySQL database. Use the standby DB instance for the read-intensive operations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application to AWS Lambda functions. Create read replicas for the RDS for MySQL database. Use the read replicas for the read-intensive operations.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#482",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to use an AWS Transfer Family SFTP-enabled server with an Amazon S3 bucket to receive updates from a third-party data supplier. The data is encrypted with Pretty Good Privacy (PGP) encryption. The company needs a solution that will automatically decrypt the data after the company receives the data.<br>A solutions architect will use a Transfer Family managed workflow. The company has created an IAM service role by using an IAM policy that allows access to AWS Secrets Manager and the S3 bucket. The role’s trust relationship allows the transfer amazonaws.com service to assume the role.<br><br>What should the solutions architect do next to complete the solution for automatic decryption?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tự động giải mã file PGP nhận qua <strong>AWS Transfer Family SFTP</strong> vào S3.</li><li>Dùng managed workflow, service role đã có quyền Secrets Manager và S3.</li><li>Bước còn thiếu: key nào, step nào, gắn vào đâu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Giải mã cần <strong>private key</strong> (public key chỉ dùng để mã hóa), lưu trong <strong>Secrets Manager</strong>. Step giải mã thuộc <strong>nominal step</strong> (luồng chính) và workflow được gắn với <strong>Transfer Family server</strong> để áp dụng cho dữ liệu nhận về.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng public key thì không giải mã được.</li><li><strong>B</strong>: ❌ Sai — exception-handling step chỉ chạy khi lỗi, và là tham số \"encryption\".</li><li><strong>C</strong>: ✅ Đúng — private key + nominal step + decryption parameters + gắn vào server.</li><li><strong>D</strong>: ❌ Sai — public key và exception handler đều sai.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>PGP decryption, private key</li><li>Secrets Manager, nominal step</li><li>Transfer Family managed workflow</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giải mã PGP trong Transfer Family\" → nghĩ ngay đến <strong>private key trong Secrets Manager + decrypt step (nominal)</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#482",
          "answers": [
            {
              "choice": "<p>A. Store the PGP public key in Secrets Manager. Add a nominal step in the Transfer Family managed workflow to decrypt files. Configure PGP encryption parameters in the nominal step. Associate the workflow with the Transfer Family server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the PGP private key in Secrets Manager. Add an exception-handling step in the Transfer Family managed workflow to decrypt files. Configure PGP encryption parameters in the exception handler. Associate the workflow with the SFTP user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the PGP private key in Secrets Manager. Add a nominal step in the Transfer Family managed workflow to decrypt files. Configure PGP decryption parameters in the nominal step. Associate the workflow with the Transfer Family server.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the PGP public key in Secrets Manager. Add an exception-handling step in the Transfer Family managed workflow to decrypt files. Configure PGP decryption parameters in the exception handler. Associate the workflow with the SFTP user.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#483",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating infrastructure for its massive multiplayer game to AWS. The game’s application features a leaderboard where players can see rankings in real time. The leaderboard requires microsecond reads and single-digit-millisecond write latencies. The datasets are single-digit terabytes in size and must be available to accept writes in less than a minute if a primary node failure occurs.<br><br>The company needs a solution in which data can persist for further analytical processing through a data pipeline.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Leaderboard real-time cần đọc microsecond, ghi single-digit ms, dữ liệu vài TB.</li><li>Failover ghi &lt; 1 phút, dữ liệu persist để phân tích.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon MemoryDB for Redis</strong> là in-memory database managed, đọc microsecond, ghi single-digit ms, có <strong>Multi-AZ</strong> failover nhanh và durability nhờ transaction log, nên dữ liệu bền vững cho pipeline phân tích.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>DynamoDB</strong> đọc single-digit ms (không có DAX thì không đạt microsecond).</li><li><strong>B</strong>: ❌ Sai — <strong>RDS</strong> có độ trễ ms, không đạt microsecond.</li><li><strong>C</strong>: ✅ Đúng — MemoryDB Multi-AZ, microsecond read, durable.</li><li><strong>D</strong>: ❌ Sai — Redis tự quản lý trên EC2, overhead cao, backup S3 không bằng durability của MemoryDB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Microsecond reads, leaderboard</li><li>MemoryDB for Redis, Multi-AZ</li><li>Durable in-memory</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"microsecond read + persist + managed\" → nghĩ ngay đến <strong>MemoryDB</strong> (ElastiCache không bền như vậy).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#483",
          "answers": [
            {
              "choice": "<p>A. A. (Amazon DynamoDB with Global Secondary Index): DynamoDB delivers single-digit millisecond latency for both reads and writes, but the requirement is microsecond reads. While DynamoDB is fully managed and supports leaderboards, MemoryDB is the only one that meets the strict microsecond read latency.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ROS database with a read replica. Configure the application to point writes to the writer endpoint. Configure the application to point reads to the reader endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon MemoryDB for Redis cluster in Muit-AZ mode Configure the application to interact with the primary node.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create multiple Redis nodes on Amazon EC2 instances that are spread across multiple Availability Zones. Configure backups to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#484",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several applications in the AWS Cloud. The applications are specific to separate business units in the company. The company is running the components of the applications in several AWS accounts that are in an organization in AWS Organizations.<br><br>Every cloud resource in the company’s organization has a tag that is named BusinessUnit. Every tag already has the appropriate value of the business unit name.<br><br>The company needs to allocate its cloud costs to different business units. The company also needs to visualize the cloud costs for each business unit.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phân bổ và trực quan hóa chi phí theo business unit qua tag <strong>BusinessUnit</strong> trên nhiều account trong Organizations.</li><li>Cần cấu hình ở mức tổ chức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cost allocation tag</strong> kích hoạt ở <strong>management account</strong> áp dụng cho cả organization. <strong>CUR</strong> tập trung ở management account, query bằng <strong>Athena</strong> và trực quan hóa bằng <strong>QuickSight</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — management account làm tất cả, Athena + QuickSight.</li><li><strong>B</strong>: ❌ Sai — member account không cần kích hoạt tag riêng; <strong>CloudWatch dashboard</strong> không phù hợp để trực quan hóa CUR.</li><li><strong>C</strong>: ❌ Sai — CUR ở mỗi member account không có ý nghĩa (CUR tổng hợp ở management); dùng CloudWatch dashboard.</li><li><strong>D</strong>: ❌ Sai — tag và CUR ở từng member account phân mảnh, không đúng mô hình Organizations.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cost allocation tag, management account</li><li>AWS CUR, Athena, QuickSight</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cost theo tag nhiều account\" → nghĩ ngay đến <strong>cost allocation tag ở management account + CUR + Athena + QuickSight</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#484",
          "answers": [
            {
              "choice": "<p>A. In the organization's management account, create a cost allocation tag that is named BusinessUnit. Also in the management account, create an Amazon S3 bucket and an AWS Cost and Usage Report (AWS CUR). Configure the S3 bucket as the destination for the AWS CUR. From the management account, query the AWS CUR data by using Amazon Athena. Use Amazon QuickSight for visualization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In each member account, create a cost allocation tag that is named BusinessUnit. In the organization’s management account, create an Amazon S3 bucket and an AWS Cost and Usage Report (AWS CUR). Configure the S3 bucket as the destination for the AWS CUR. Create an Amazon CloudWatch dashboard for visualization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the organization's management account, create a cost allocation tag that is named BusinessUnit. In each member account, create an Amazon S3 bucket and an AWS Cost and Usage Report (AWS CUR). Configure each S3 bucket as the destination for its respective AWS CUR. In the management account, create an Amazon CloudWatch dashboard for visualization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In each member account, create a cost allocation tag that is named BusinessUnit. Also in each member account, create an Amazon S3 bucket and an AWS Cost and Usage Report (AWS CUR). Configure each S3 bucket as the destination for its respective AWS CUR. From the management account, query the AWS CUR data by using Amazon Athena. Use Amazon QuickSight for visualization.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#485",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A utility company wants to collect usage data every 5 minutes from its smart meters to facilitate time-of-use metering. When a meter sends data to AWS, the data is sent to Amazon API Gateway, processed by an AWS Lambda function. and stored in an Amazon DynamoDB table. During the pilot phase, the Lambda functions took from 3 to 5 seconds to complete.<br><br>As more smart meters are deployed, the engineers notice the Lambda functions are taking from 1 to 2 minutes to complete. The functions are also increasing in duration as new types of metrics are collected from the devices. There are many ProvisionedThroughputExceededException errors while performing PUT operations on DynamoDB, and there are also many TooManyRequestsException errors from Lambda.<br><br>Which combination of changes will resolve these issues? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda chậm dần, DynamoDB <strong>ProvisionedThroughputExceededException</strong>, Lambda <strong>TooManyRequestsException</strong> (throttle).</li><li>Cần chọn 2 thay đổi để giải quyết cả quá tải DB lẫn Lambda concurrency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tăng <strong>WCU</strong> xử lý lỗi ghi DynamoDB. Chèn <strong>Kinesis Data Streams</strong> vào giữa để đệm và xử lý theo <strong>batch</strong>, giảm số lần gọi Lambda nên hết throttle.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tăng WCU xử lý ProvisionedThroughputExceeded.</li><li><strong>B</strong>: ❌ Sai — thêm memory không xử lý lỗi throttle của DynamoDB/Lambda concurrency.</li><li><strong>C</strong>: ❌ Sai — payload lớn hơn làm Lambda chạy lâu hơn, tệ hơn.</li><li><strong>D</strong>: ✅ Đúng — Kinesis đệm và batch, giảm concurrency Lambda.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — SQS FIFO xử lý từng message, throughput thấp, không batch hiệu quả bằng Kinesis cho luồng dữ liệu lớn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ProvisionedThroughputExceededException</li><li>TooManyRequestsException</li><li>Kinesis batch, WCU</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda throttle + DynamoDB throttle khi ingest nhiều\" → nghĩ ngay đến <strong>tăng WCU + stream/queue đệm có batch</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#485",
          "answers": [
            {
              "choice": "<p>A. Increase the write capacity units to the DynamoDB table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the memory available to the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the payload size from the smart meters to send more data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#486",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently completed a successful proof of concept of Amazon WorkSpaces. A solutions architect needs to make the solution highly available across two AWS Regions. Amazon WorkSpaces is deployed in a failover Region, and a hosted zone is deployed in Amazon Route 53.<br><br>What should the solutions architect do to configure high availability for the solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cấu hình HA cho <strong>Amazon WorkSpaces</strong> qua 2 Region với <strong>cross-Region redirection</strong>.</li><li>Failover Region đã có WorkSpaces, Route 53 hosted zone đã có.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-Region redirection cần <strong>connection alias</strong> ở mỗi Region, mỗi alias gắn với directory ở Region tương ứng, và Route 53 <strong>failover routing</strong> với <strong>Evaluate Target Health = Yes</strong> để chuyển hướng khi primary lỗi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — alias + directory mỗi Region, failover routing, health evaluation.</li><li><strong>B</strong>: ❌ Sai — cả hai alias gắn vào directory primary; multivalue không phải failover.</li><li><strong>C</strong>: ❌ Sai — chỉ có alias ở primary, weighted không phải failover.</li><li><strong>D</strong>: ❌ Sai — alias primary gắn vào directory của failover Region là sai cặp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>WorkSpaces cross-Region redirection</li><li>Connection alias, failover routing</li><li>Evaluate Target Health</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"WorkSpaces multi-Region HA\" → nghĩ ngay đến <strong>connection alias mỗi Region + Route 53 failover</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#486",
          "answers": [
            {
              "choice": "<p>A. Create a connection alias in the primary Region and in the failover Region. Associate the connection aliases with a directory in each Region. Create a Route 53 failover routing policy. Set Evaluate Target Health to Yes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a connection alias in the primary Region and in the failover Region. Associate the connection aliases with a directory in the primary Region. Create a Route 53 multivalue answer routing policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a connection alias in the primary Region. Associate the connection alias with a directory in the primary Region. Create a Route 53 weighted routing policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a connection alias in the primary Region Associate the connection alias with a directory in the failover Region. Create a Route 53 failover routing policy. Set Evaluate Target Health to Yes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#487",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to migrate many VMs from an on-premises environment to AWS. The company requires an initial assessment of the on-premises environment before the migration, a visualization of the dependencies between applications that run on the VMs, and a report that provides an assessment of the on-premises environment.<br><br>To get this information, the company has initiated a Migration Evaluator assessment request. The company has the ability to install collector software in its on-premises environment without any constraints<br><br>Which solution will provide the company with the required information with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đánh giá môi trường on-premises trước migrate: dependency giữa các ứng dụng và báo cáo assessment.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Application Discovery Agent</strong> cài trên từng VM thu thập dữ liệu và dependency, rồi xem trong <strong>Migration Hub</strong>; báo cáo <strong>Quick Insights</strong> tải trực tiếp, ít bước trung gian nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — agent + Migration Hub xem dependency + tải Quick Insights, ít bước nhất.</li><li><strong>B</strong>: ❌ Sai — Migration Evaluator Collector không cung cấp dependency visualization; thêm QuickSight không cần thiết.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Agentless Collector không đủ dữ liệu dependency, lại phải export/upload thủ công sang Migration Evaluator.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — dùng cả hai collector, dư thừa và thêm vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Discovery Agent, Migration Hub</li><li>Dependency visualization, Quick Insights</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"application dependency mapping khi migrate\" → nghĩ ngay đến <strong>Application Discovery Agent + Migration Hub</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#487",
          "answers": [
            {
              "choice": "<p>A. Install the AWS Application Discovery Agent on each on-premises VM. After the data collection period ends, use AWS Migration Hub to view the application dependencies. Download the Quick insights assessment report from Migration Hub.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Migration Evaluator Collector on each on-premises VM. After the data collection period ends, use Migration Evaluator to view the application dependencies. Download and export the discovered server list from Migration Evaluator. Upload the list to Amazon QuickSight When the QuickSight report is generated, download the Quick Insights assessment report.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup the AWS Application Discovery Service Agentless Collector in the on-premises environment. After the data collection period ends, use AWS Migration Hub to view the application dependencies. Export the discovered server list from Application Discovery Service. Upload the list to Migration Evaluator. When the Migration Evaluator report is generated, download the Quick Insights assessment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up the Migration Evaluator Collector in the on-premises environment. Install the AWS Application Discovery Agent on each VM. After the data collection period ends, use AWS Migration Hub to view the application dependencies. Download the Quick Insights assessment report from Migration Evaluator.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#488",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its primary API on AWS by using an Amazon API Gateway API and AWS Lambda functions that contain the logic for the API methods. The company’s internal applications use the API for core functionality and business logic. The company’s customers use the API to access data from their accounts. Several customers also have access to a legacy API that is running on a single standalone Amazon EC2 instance.<br><br>The company wants to increase the security for these APIs to better prevent denial of service (DoS) attacks, check for vulnerabilities, and guard against common exploits.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bảo vệ 2 API (API Gateway và legacy EC2) khỏi DoS, quét lỗ hổng, chống exploit phổ biến.</li><li>Phải phân biệt chức năng đúng của WAF, Inspector, GuardDuty.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS WAF</strong> gắn được vào API Gateway; <strong>Amazon Inspector</strong> quét lỗ hổng EC2 (legacy API); <strong>GuardDuty</strong> chỉ <strong>phát hiện/monitor</strong>, không chặn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — WAF không gắn trực tiếp vào EC2 đơn lẻ (cần ALB/CloudFront).</li><li><strong>B</strong>: ❌ Sai — Inspector không phân tích API Gateway/Lambda theo cách này; GuardDuty không block.</li><li><strong>C</strong>: ✅ Đúng — WAF cho API Gateway, Inspector cho EC2, GuardDuty monitor.</li><li><strong>D</strong>: ❌ Sai — Inspector quét chứ không \"protect\", GuardDuty không block.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF, Amazon Inspector, GuardDuty</li><li>Monitor vs block</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chống exploit web\" → <strong>WAF</strong>; \"quét lỗ hổng EC2\" → <strong>Inspector</strong>; \"phát hiện threat\" → <strong>GuardDuty</strong> (không block).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#488",
          "answers": [
            {
              "choice": "<p>A. Use AWS WAF to protect both APIs. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze both APIs. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS WAF to protect the API Gateway AP! Configure Amazon Inspector to protect the legacy API. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#489",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a serverless ecommerce application on AWS. The application uses Amazon API Gateway to invoke AWS Lambda Java functions. The Lambda functions connect to an Amazon RDS for MySQL database to store data.<br><br>During a recent sale event, a sudden increase in web traffic resulted in poor API performance and database connection failures. The company needs to implement a solution to minimize the latency for the Lambda functions and to support bursts in traffic.<br><br>Which solution will meet these requirements with the LEAST amount of change to the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda Java + RDS MySQL gặp lỗi connection khi traffic tăng đột biến và latency cao.</li><li>Ưu tiên: giảm latency, chịu burst, <strong>LEAST change to application</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>RDS Proxy</strong> gom và tái sử dụng connection nên chống cạn connection DB. <strong>Provisioned concurrency</strong> loại bỏ cold start Java, giúp latency thấp khi burst.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mở connection ngoài handler không chống được cạn connection khi nhiều instance; phải sửa code.</li><li><strong>B</strong>: ✅ Đúng — RDS Proxy + provisioned concurrency.</li><li><strong>C</strong>: ❌ Sai — tăng `max_connections` cần reboot, không giải quyết cold start; reserved concurrency không giảm latency.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — RDS Proxy đúng nhưng <strong>reserved concurrency</strong> chỉ giới hạn/đảm bảo, không loại cold start.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy, connection pooling</li><li>Provisioned concurrency vs reserved concurrency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda + RDS hết connection\" → <strong>RDS Proxy</strong>; \"giảm cold start\" → <strong>provisioned concurrency</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#489",
          "answers": [
            {
              "choice": "<p>A. Update the code of the Lambda functions so that the Lambda functions open the database connection outside of the function handler. Increase the provisioned concurrency for the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS Proxy endpoint for the database. Store database secrets in AWS Secrets Manager. Set up the required IAM permissions. Update the Lambda functions to connect to the RDS Proxy endpoint. Increase the provisioned concurrency for the Lambda functions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a custom parameter group. Increase the value of the max_connections parameter. Associate the custom parameter group with the RDS DB instance and schedule a reboot. Increase the reserved concurrency for the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an RDS Proxy endpoint for the database. Store database secrets in AWS Secrets Manager. Set up the required IAM permissions. Update the Lambda functions to connect to the RDS Proxy endpoint. Increase the reserved concurrency for the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#490",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS Public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints.<br><br>Which step should the solutions architect take to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Interface endpoint đã tạo nhưng tên service vẫn resolve ra public IP.</li><li>Cần DNS resolve ra private IP của endpoint.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bật <strong>Private DNS</strong> cho interface endpoint (cùng VPC attributes <strong>enableDnsSupport</strong> và <strong>enableDnsHostnames</strong>) để tên service mặc định resolve sang private IP của endpoint.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — interface endpoint dùng ENI, không cần route trong route table (đó là gateway endpoint).</li><li><strong>B</strong>: ✅ Đúng — bật private DNS.</li><li><strong>C</strong>: ❌ Sai — security group không ảnh hưởng chuyện resolve ra public IP.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>Route 53 private hosted zone</strong> làm được thủ công nhưng dư thừa so với private DNS option.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Interface endpoint, Private DNS</li><li>enableDnsSupport, enableDnsHostnames</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"endpoint resolve ra public IP\" → nghĩ ngay đến <strong>bật Private DNS</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#490",
          "answers": [
            {
              "choice": "<p>A. Update the subnet route table with a route to the interface endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the private DNS option on the VPC attributes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the security group on the interface endpoint to allow connectivity to the AWS services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#491",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a latency-sensitive application. Part of the application includes several AWS Lambda functions that need to initialize as quickly as possible. The Lambda functions are written in Java and contain initialization code outside the handlers to load libraries, initialize classes, and generate unique IDs.<br><br>Which solution will meet the startup performance requirement MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda Java cần khởi động nhanh, init code nằm ngoài handler (load libs, tạo unique ID).</li><li>Ưu tiên: <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda SnapStart</strong> cho Java giảm cold start rất nhiều mà không tốn phí provisioned concurrency. Unique ID tạo lúc init sẽ bị chụp trong snapshot và trùng lặp, nên cần pre-snapshot hook và chuyển phần sinh ID vào handler. SnapStart chỉ áp dụng cho <strong>published versions</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SnapStart không hỗ trợ `$LATEST`; chuyển hết init vào handler làm mất lợi ích.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>Provisioned concurrency</strong> hiệu quả nhưng tốn chi phí liên tục.</li><li><strong>C</strong>: ❌ Sai — SnapStart và provisioned concurrency không dùng chung được.</li><li><strong>D</strong>: ✅ Đúng — SnapStart + published version + xử lý unique ID đúng cách.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda SnapStart, Java</li><li>Published version, unique ID uniqueness</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Java Lambda cold start + cost-effective\" → <strong>SnapStart</strong> (published version), nhớ vấn đề tính duy nhất của dữ liệu sinh lúc init.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#491",
          "answers": [
            {
              "choice": "<p>A. Move all the initialization code to the handlers for each Lambda function. Activate Lambda SnapStart for each Lambda function. Configure SnapStart to reference the $LATEST version of each Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Publish a version of each Lambda function. Create an alias for each Lambda function. Configure each alias to point to its corresponding version. Set up a provisioned concurrency configuration for each Lambda function to point to the corresponding alias.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Publish a version of each Lambda function. Set up a provisioned concurrency configuration for each Lambda function to point to the corresponding version. Activate Lambda SnapStar for the published versions of the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Lambda functions to add a pre-snapshot hook. Move the code that generates unique IDs into the handlers. Publish a version of each Lambda function. Activate Lambda SnapStart for the published versions of the Lambda functions.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#492",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is importing a VM from an on-premises environment by using the Amazon EC2 VM Import feature of AWS Import/Export. The solutions architect has created an AMI and has provisioned an Amazon EC2 instance that is based on that AMI. The EC2 instance runs inside a public subnet in a VPC and has a public IP address assigned.<br><br>The EC2 instance does not appear as a managed instance in the AWS Systems Manager console.<br><br>Which combination of steps should the solutions architect take to troubleshoot this issue? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 import từ VM, nằm ở public subnet, có public IP nhưng không xuất hiện là managed instance trong <strong>Systems Manager</strong>.</li><li>Cần chọn 2 bước troubleshoot.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Managed instance cần <strong>SSM Agent</strong> đang chạy (VM import có thể chưa cài) và <strong>instance profile</strong> có quyền Systems Manager (ví dụ AmazonSSMManagedInstanceCore). Public subnet đã có đường ra internet nên không cần VPC endpoint.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — thiếu/không chạy SSM Agent.</li><li><strong>B</strong>: ✅ Đúng — thiếu IAM role phù hợp.</li><li><strong>C</strong>: ❌ Sai — public subnet có public IP đã ra được internet, không bắt buộc VPC endpoint.</li><li><strong>D</strong>: ❌ Sai — <strong>Application Discovery Agent</strong> không liên quan tới SSM.</li><li><strong>E</strong>: ❌ Sai — service-linked role không phải nguyên nhân thường gặp cho managed instance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Managed instance, SSM Agent</li><li>Instance profile, AmazonSSMManagedInstanceCore</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"EC2 không hiện trong Systems Manager\" → kiểm tra <strong>SSM Agent + IAM instance profile</strong> trước, rồi mới đến mạng.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#492",
          "answers": [
            {
              "choice": "<p>A. Verify that Systems Manager Agent is installed on the instance and is running.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Verify that the instance is assigned an appropriate IAM role for Systems Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify the existence of a VPC endpoint on the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Verity that the AWS Application Discovery Agent is configured.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Verify the correct configuration of service-linked roles for Systems Manager.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#493",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CloudFormation as its deployment tool for all applications. It stages all application binaries and templates within Amazon S3 buckets with versioning enabled. Developers have access to an Amazon EC2 instance that hosts the integrated development environment (IDE). The developers download the application binaries from Amazon S3 to the EC2 instance, make changes, and upload the binaries to an S3 bucket after running the unit tests locally. The developers want to improve the existing deployment mechanism and implement CI/CD using AWS CodePipeline.<br><br>The developers have the following requirements:<br>• Use AWS CodeCommit for source control.<br>• Automate unit testing and security scanning.<br>• Alert the developers when unit tests fail.<br>• Turn application features on and off, and customize deployment dynamically as part of CI/CD.<br>• Have the lead developer provide approval before deploying an application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xây CI/CD với <strong>CodePipeline</strong> + <strong>CodeCommit</strong>: tự động unit test/security scan, cảnh báo khi test fail, bật/tắt feature động, lead developer phê duyệt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CodeBuild</strong> chạy test và scan; <strong>EventBridge + SNS</strong> gửi cảnh báo khi fail; <strong>CDK</strong> với manifest file bật/tắt feature; <strong>manual approval stage</strong> cho lead duyệt, đúng các dịch vụ native của pipeline.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CodeBuild, EventBridge + SNS, CDK manifest, manual approval.</li><li><strong>B</strong>: ❌ Sai — Lambda không phù hợp chạy test, Amplify plugins và SES không phải cơ chế approval.</li><li><strong>C</strong>: ❌ Sai — dùng Jenkins ngoài yêu cầu, SES alert và Lambda approval không chuẩn.</li><li><strong>D</strong>: ❌ Sai — <strong>CodeDeploy</strong> là dịch vụ deploy, không chạy unit test/scan.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CodeBuild, EventBridge, SNS</li><li>CDK manifest, manual approval stage</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"test + scan trong CodePipeline\" → <strong>CodeBuild</strong>; \"lead duyệt\" → <strong>manual approval action</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#493",
          "answers": [
            {
              "choice": "<p>A. Use AWS CodeBuild to run unit tests and security scans. Use an Amazon EventBridge rule to send Amazon SNS alerts to the developers when unit tests fail. Write AWS Cloud Development Kit (AWS CDK) constructs for different solution features, and use a manifest file to tum features on and off in the AWS CDK application. Use a manual approval stage in the pipeline to allow the lead developer to approve applications.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Lambda to run unit tests and security scans. Use Lambda in a subsequent stage in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Write AWS Amplify plugins for different solution features and utilize user prompts to tum features on and off. Use Amazon SES in the pipeline to allow the lead developer to approve applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Jenkins to run unit tests and security scans. Use an Amazon EventBridge rule in the pipeline to send Amazon SES alerts to the developers when unit tests fail Use AWS CloudFormation nested stacks for different solution features and parameters to turn features on and off. Use AWS Lambda in the pipeline to allow the lead developer to approve applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodeDeploy to run unit tests and security scans. Use an Amazon CloudWatch alarm in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Use Docker images for different solution features and the AWS CLI to turn features on and off. Use a manual approval stage in the pipeline to allow the lead developer to approve applications.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#494",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global ecommerce company has many data centers around the world. With the growth of its stored data, the company needs to set up a solution to provide scalable storage for legacy on-premises file applications. The company must be able to take point-in-time copies of volumes by using AWS Backup and must retain low-latency access to frequently accessed data. The company also needs to have storage volumes that can be mounted as Internet Small Computer System Interface (iSCSI) devices from the company’s on-premises application servers.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lưu trữ scale cho ứng dụng file on-premises, mount dạng <strong>iSCSI</strong>, giữ low-latency cho dữ liệu hay truy cập.</li><li>Cần point-in-time copies bằng <strong>AWS Backup</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Storage Gateway Volume Gateway</strong> cung cấp volume iSCSI; <strong>cached mode</strong> giữ dữ liệu thường dùng cục bộ (low latency) và lưu toàn bộ lên S3. Volume được <strong>AWS Backup</strong> hỗ trợ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Tape Gateway</strong> mô phỏng tape (VTL), không phải volume.</li><li><strong>B</strong>: ❌ Sai — <strong>FSx File Gateway</strong> và <strong>S3 File Gateway</strong> dùng SMB/NFS, không phải iSCSI.</li><li><strong>C</strong>: ✅ Đúng — Volume Gateway cached mode, iSCSI, AWS Backup.</li><li><strong>D</strong>: ❌ Sai — <strong>File Gateway</strong> dùng NFS/SMB, không có iSCSI volume.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>iSCSI, Volume Gateway</li><li>Cached mode, AWS Backup</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"iSCSI\" → nghĩ ngay đến <strong>Volume Gateway</strong> (cached = giữ hot data cục bộ).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#494",
          "answers": [
            {
              "choice": "<p>A. Provision an AWS Storage Gateway tape gateway. Configure the tape gateway to store data in an Amazon S3 bucket. Deploy AWS Backup to take point-in-time copies of the volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an Amazon FSx File Gateway and an Amazon S3 File Gateway. Deploy AWS Backup to take point-in-time copies of the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an AWS Storage Gateway volume gateway in cache mode. Back up the on-premises Storage Gateway volumes with AWS Backup.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an AWS Storage Gateway file gateway in cache mode. Deploy AWS Backup to take point-in-time copies of the volumes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#495",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses AWS Key Management Service (AWS KMS) to encrypt and decrypt data. The application stores data in an Amazon S3 bucket in an AWS Region. Company security policies require the data to be encrypted before the data is placed into the S3 bucket. The application must decrypt the data when the application reads files from the S3 bucket.<br><br>The company replicates the S3 bucket to other Regions. A solutions architect must design a solution so that the application can encrypt and decrypt data across Regions. The application must use the same key to decrypt the data in each Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mã hóa phía client trước khi lên S3, replicate sang nhiều Region, cần cùng một key để giải mã ở mọi Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>KMS multi-Region keys</strong> là các key có cùng key ID và key material ở nhiều Region. Tạo primary key rồi <strong>replica key</strong> ở Region khác, nên dữ liệu mã hóa ở Region này giải mã được ở Region khác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — multi-Region primary + replica keys.</li><li><strong>B</strong>: ❌ Sai — key riêng mỗi Region có key material khác nhau, không giải mã chéo được.</li><li><strong>C</strong>: ❌ Sai — <strong>AWS Private CA</strong> để cấp chứng chỉ, không dùng mã hóa dữ liệu theo cách này.</li><li><strong>D</strong>: ❌ Sai — KMS key material không thể export; vi phạm bảo mật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>KMS multi-Region key, replica key</li><li>Client-side encryption, cross-Region</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cùng key giải mã nhiều Region\" → nghĩ ngay đến <strong>KMS multi-Region keys</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#495",
          "answers": [
            {
              "choice": "<p>A. Create a KMS multi-Region primary key. Use the KMS multi-Region primary key to create a KMS multi-Region replica key in each additional Region where the application is running. Update the application code to use the specific replica key in each Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new customer managed KMS key in each additional Region where the application is running. Update the application code to use the specific KMS key in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Private Certificate Authority to create a new certificate authority (CA) in the primary Region. Issue a new private certificate from the CA for the application’s website URL. Share the CA with the additional Regions by using AWS Resource Access Manager (AWS RAM). Update the application code to use the shared CA certificates in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Parameter Store to create a parameter in each additional Region where the application is running. Export the key material from the KMS key in the primary Region. Store the key material in the parameter in each Region. Update the application code to use the key data from the parameter in each Region.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#496",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application that uses several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). During the initial startup of the EC2 instances, the EC2 instances run user data scripts to download critical content for the application from an Amazon S3 bucket.<br><br>The EC2 instances are launching correctly. However, after a period of time, the EC2 instances are terminated with the following error message: “An instance was taken out of service in response to an ELB system health check failure.” EC2 instances continue to launch and be terminated because of Auto Scaling events in an endless loop.<br><br>The only recent change to the deployment is that the company added a large amount of critical content to the S3 bucket. The company does not want to alter the user data scripts in production.<br><br>What should a solutions architect do so that the production environment can deploy successfully?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Instance bị terminate do ELB health check fail trong lúc user data còn đang tải nhiều nội dung từ S3.</li><li>Không được sửa user data.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Nội dung tăng nên instance cần nhiều thời gian khởi tạo hơn. Tăng <strong>health check grace period</strong> của Auto Scaling group cho instance đủ thời gian hoàn tất user data trước khi bị đánh giá health.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng kích thước instance không đảm bảo khởi tạo xong trước khi health check.</li><li><strong>B</strong>: ❌ Sai — health check timeout là thời gian chờ phản hồi mỗi lần, không phải thời gian khởi động.</li><li><strong>C</strong>: ❌ Sai — đổi path không giải quyết việc app chưa sẵn sàng.</li><li><strong>D</strong>: ✅ Đúng — tăng grace period.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Health check grace period</li><li>ELB health check, Auto Scaling group</li><li>User data</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"instance bị terminate vòng lặp vì ELB health check lúc khởi động\" → nghĩ ngay đến <strong>tăng health check grace period</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#496",
          "answers": [
            {
              "choice": "<p>A. Increase the size of the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the health check timeout for the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the health check path for the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the health check grace period for the Auto Scaling group.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#497",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to move some on-premises Oracle databases to AWS. The company has chosen to keep some of the databases on premises for business compliance reasons.<br><br>The on-premises databases contain spatial data and run cron jobs for maintenance. The company needs to connect to the on-premises systems directly from AWS to query data as a foreign table.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate Oracle sang AWS, giữ một phần on-premises, có dữ liệu spatial và cron jobs.</li><li>Cần truy vấn trực tiếp DB on-premises như <strong>foreign table</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>RDS for PostgreSQL</strong> hỗ trợ spatial qua <strong>PostGIS</strong>, chạy cron (pg_cron) và foreign table qua <strong>foreign data wrapper</strong> (oracle_fdw). Dùng <strong>SCT + DMS</strong> để chuyển đổi và migrate, <strong>Direct Connect</strong> để kết nối riêng tới on-premises.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>DynamoDB</strong> không hỗ trợ spatial/foreign table.</li><li><strong>B</strong>: ❌ Sai — SQL Server + Redshift + Glue crawlers không cung cấp foreign table đúng nghĩa.</li><li><strong>C</strong>: ❌ Sai — chạy Oracle trên EC2 tốn vận hành; internet gateway không phải kết nối an toàn cho foreign table.</li><li><strong>D</strong>: ✅ Đúng — PostgreSQL, PostGIS, pg_cron, Direct Connect.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Foreign table, spatial data</li><li>RDS for PostgreSQL, SCT + DMS</li><li>Direct Connect</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Oracle sang AWS + spatial + foreign table\" → nghĩ ngay đến <strong>RDS PostgreSQL (PostGIS, FDW)</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#497",
          "answers": [
            {
              "choice": "<p>A. Create Amazon DynamoDB global tables with auto scaling enabled. Use the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS) to move the data from on premises to DynamoDB. Create an AWS Lambda function to move the spatial data to Amazon S3. Query the data by using Amazon Athena. Use Amazon EventBridge to schedule jobs in DynamoDB for maintenance. Use Amazon API Gateway for foreign table support.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon RDS for Microsoft SQL Server DB instance. Use native replication to move the data from on premises to the DB instance. Use the AWS Schema Conversion Tool (AWS SCT) to modify the SQL Server schema as needed after replication. Move the spatial data to Amazon Redshift. Use stored procedures for system maintenance. Create AWS Glue crawlers to connect to the on-premises Oracle databases for foreign table support.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch Amazon EC2 instances to host the Oracle databases. Place the EC2 instances in an Auto Scaling group. Use AWS Application Migration Service to move the data from on premises to the EC2 instances and for real-time bidirectional change data capture (CDC) synchronization. Use Oracle native spatial data support. Create an AWS Lambda function to run maintenance jobs as part of an AWS Step Functions workflow. Create an internet gateway for foreign table support.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon RDS for PostgreSQL DB instance. Use the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS) to move the data from on premises to the DB instance. Use PostgreSQL native spatial data support. Run cron jobs on the DB instance for maintenance. Use AWS Direct Connect to connect the DB instance to the on-premises environment for foreign table support.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#498",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Accompany runs an application on Amazon EC2 and AWS Lambda. The application stores temporary data in Amazon S3. The S3 objects are deleted after 24 hours.<br><br>The company deploys new versions of the application by launching AWS CloudFormation stacks. The stacks create the required resources. After validating a new version, the company deletes the old stack. The deletion of an old development stack recently failed. A solutions architect needs to resolve this issue without major architecture changes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xóa stack CloudFormation thất bại vì S3 bucket còn chứa object.</li><li>Cần xử lý mà không đổi kiến trúc lớn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFormation không xóa được <strong>S3 bucket không rỗng</strong>. Dùng <strong>custom resource</strong> (Lambda) để xóa object khi stack bị xóa, kèm <strong>DependsOn</strong> để custom resource bị xóa trước bucket, giúp bucket rỗng trước khi bị xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — custom resource dọn bucket, DependsOn đảm bảo thứ tự.</li><li><strong>B</strong>: ❌ Sai — `Delete` là mặc định, không giải quyết bucket không rỗng.</li><li><strong>C</strong>: ❌ Sai — <strong>Snapshot</strong> không áp dụng cho S3 bucket.</li><li><strong>D</strong>: ❌ Sai — đổi sang <strong>EFS</strong> là thay đổi kiến trúc lớn, trái yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Stack deletion failed, non-empty bucket</li><li>Custom resource, DependsOn</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"xóa stack lỗi vì S3 không rỗng\" → nghĩ ngay đến <strong>Lambda-backed custom resource dọn bucket</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#498",
          "answers": [
            {
              "choice": "<p>A. Create a Lambda function to delete objects from an S3 bucket. Add the Lambda function as a custom resource in the CloudFormation stack with a DependsOn attribute that points to the S3 bucket resource.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the CloudFormation stack to attach a DeletionPolicy attribute with a value of Delete to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the CloudFormation stack to add a DeletionPolicy attribute with a value of Snapshot for the S3 bucket resource</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFormation template to create an Amazon Elastic File System (Amazon EFS) file system to store temporary files instead of Amazon S3. Configure the Lambda functions to run in the same VPC as the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#499",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that stores user-uploaded videos in an Amazon S3 bucket that uses S3 Standard storage. Users access the videos frequently in the first 180 days after the videos are uploaded. Access after 180 days is rare. Named users and anonymous users access the videos.<br><br>Most of the videos are more than 100 MB in size. Users often have poor internet connectivity when they upload videos, resulting in failed uploads. The company uses multipart uploads for the videos.<br><br>A solutions architect needs to optimize the S3 costs of the application.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tối ưu chi phí S3: video được truy cập thường xuyên trong 180 ngày đầu, sau đó hiếm.</li><li>Upload nhiều lần thất bại, dùng multipart nên để lại phần dư.</li><li>Ưu tiên: <strong>cost optimization</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lifecycle rule <strong>abort/expire incomplete multipart uploads</strong> dọn các part dư đang bị tính phí. Chuyển object sang <strong>S3 Standard-IA</strong> sau 180 ngày khớp với mẫu truy cập hiếm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Requester Pays</strong> không phù hợp với anonymous users (cần xác thực).</li><li><strong>B</strong>: ❌ Sai — <strong>Transfer Acceleration</strong> tăng chi phí, không giảm.</li><li><strong>C</strong>: ✅ Đúng — dọn incomplete multipart uploads.</li><li><strong>D</strong>: ❌ Sai — chuyển sang Glacier IR sau 1 ngày khi người dùng truy cập thường xuyên trong 180 ngày thì tốn phí retrieval.</li><li><strong>E</strong>: ✅ Đúng — Standard-IA sau 180 ngày.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Incomplete multipart uploads</li><li>S3 Lifecycle, Standard-IA</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"multipart upload hay fail\" → nghĩ ngay đến <strong>lifecycle rule xóa incomplete multipart uploads</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#499",
          "answers": [
            {
              "choice": "<p>A. Configure the S3 bucket to be a Requester Pays bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use S3 Transfer Acceleration to upload the videos to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 Lifecycle configuration o expire incomplete multipart uploads 7 days after initiation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 Lifecycle configuration to transition objects to S3 Glacier Instant Retrieval after 1 day.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an S3 Lifecycle configuration to transition objects to S3 Standard-infrequent Access (S3 Standard- IA) after 180 days.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#500",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an ecommerce web application on AWS. The web application is hosted as a static website on Amazon S3 with Amazon CloudFront for content delivery. An Amazon API<br>Gateway API invokes AWS Lambda functions to handle user requests and order processing for the web application The Lambda functions store data in an Amazon ROS for MySQL DB cluster that uses On-Demand instances. The DB cluster usage has been consistent in the past 12 months.<br><br>Recently, the website has experienced SQL injection and web exploit attempts. Customers also report that order processing time has increased during periods of peak usage. During these periods, the Lambda functions often have cold starts. As the company grows, the company needs to ensure scalability and low-latency access during traffic peaks. The company also must optimize the database costs and add protection against the SQL injection and web exploit attempts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Web app chịu tấn công SQL injection/web exploit, Lambda cold start khi peak, cần scale và độ trễ thấp.</li><li>Tối ưu chi phí DB (usage ổn định 12 tháng).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Provisioned concurrency</strong> loại cold start; <strong>RDS Reserved Instances</strong> giảm chi phí cho tải ổn định; <strong>AWS WAF</strong> tích hợp CloudFront chặn SQL injection và web exploit.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng timeout không giải quyết cold start; <strong>Shield Advanced</strong> chống DDoS, không chặn SQL injection.</li><li><strong>B</strong>: ❌ Sai — <strong>Redshift</strong> không phù hợp OLTP; <strong>Inspector</strong> không bảo vệ chống exploit tại CloudFront.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>Aurora Serverless</strong> hợp tải biến thiên hơn là ổn định, và Shield Advanced không chặn SQL injection.</li><li><strong>D</strong>: ✅ Đúng — provisioned concurrency + Reserved Instances + WAF.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Provisioned concurrency, cold start</li><li>RDS Reserved Instances (usage ổn định)</li><li>AWS WAF, SQL injection</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"SQL injection\" → <strong>AWS WAF</strong>; \"usage ổn định lâu dài\" → <strong>Reserved Instances</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#500",
          "answers": [
            {
              "choice": "<p>A. Configure the Lambda functions to have an increased timeout value during peak periods. Use RDS Reserved Instances for the database. Use CloudFront and subscribe to AWS Shield Advanced to protect against the SQL injection and web exploit attempts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the memory of the Lambda functions, Transition to Amazon Redshift for the database. Integrate Amazon Inspector with CloudFront to protect against the SQL injection and web exploit attempts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Lambda functions with provisioned concurrency for compute during peak periods, Transition to Amazon Aurora Serverless for the database. Use CloudFront and subscribe to AWS Shield Advanced to protect against the SQL injection and web exploit attempts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Lambda functions with provisioned concurrency for compute during peak periods. Use RDS Reserved Instances for the database. Integrate AWS WAF with CloudFront to protect against the SQL injection and web exploit attempts.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    }
  ]
};
