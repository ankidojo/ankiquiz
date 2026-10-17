var SAP_C02_VJP_Training_Test_3 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video processing company wants to build a machine learning (ML) model by using 600 TB of compressed data that is stored as thousands of files in the company's on-premises network attached storage system. The company does not have the necessary compute resources on premises for ML experiments and wants to use AWS.<br><br>The company needs to complete the data transfer to AWS within 3 weeks. The data transfer will be a one-time transfer. The data must be encrypted in transit. The measured upload speed of the company's internet connection is 100 Mbps. and multiple departments share the connection.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển 600 TB một lần trong 3 tuần với internet 100 Mbps dùng chung.</li><li>Requirement chính: hoàn thành trong 3 tuần, mã hóa in transit, MOST cost-effective.</li><li>Ưu tiên: tính khả thi về thời gian và chi phí.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>100 Mbps cần nhiều năm để chuyển 600 TB; AWS Snowball Edge Storage Optimized chuyển offline, dữ liệu được mã hóa, rẻ nhất cho one-time transfer.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — nhiều Snowball Edge, one-time, mã hóa.</li><li><strong>B</strong>: ❌ Sai — Direct Connect cần vài tuần để provision, tốn kém cho one-time transfer.</li><li><strong>C</strong>: ❌ Sai — VPN trên 100 Mbps không kịp 3 tuần.</li><li><strong>D</strong>: ❌ Sai — Storage Gateway vẫn đi qua internet 100 Mbps, không kịp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Snowball Edge Storage Optimized</li><li>600 TB one-time</li><li>100 Mbps</li><li>3 weeks</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp hàng trăm TB + băng thông thấp + deadline ngắn → nghĩ ngay đến Snowball.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>A. Order several AWS Snowball Edge Storage Optimized devices by using the AWS Management Console. Configure the devices with a destination S3 bucket. Copy the data to the devices. Ship the devices back to AWS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPN connection between the on-premises network attached storage and the nearest AWS Region. Transfer the data over the VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway file gateway on premises. Configure the file gateway with a destination S3 bucket. Copy the data to the file gateway.</p>",
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
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company’s data center.<br>The system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA. The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed.<br>A solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs.<br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển hệ thống 12 server sang EC2, scheduled job (65%) có SLA chặt, user job (35%) chịu được delay.</li><li>Requirement chính: HA, không ảnh hưởng SLA khi lỗi, không cam kết dài hạn.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần 65% dung lượng (khoảng 8 instance) đảm bảo kể cả khi mất một AZ. Với 3 AZ, 9 On-Demand có Capacity Reservation (3 mỗi AZ) vẫn còn 6 sau khi mất 1 AZ, cộng Spot cho phần còn lại.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Chỉ 4 On-Demand, không đủ 65% cho scheduled job.</li><li><strong>B</strong>: ❌ Sai — Dồn 4 On-Demand vào một AZ, mất AZ đó thì mất toàn bộ capacity đảm bảo.</li><li><strong>C</strong>: ❌ Sai — Savings Plan là cam kết dài hạn, trái yêu cầu.</li><li><strong>D</strong>: ✅ Đúng — Capacity Reservation phân bố 3 AZ, đảm bảo SLA, dùng Spot cho phần còn lại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>On-Demand Capacity Reservation, Spot Instances, multi-AZ, no long-term commitment</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đảm bảo capacity, không cam kết dài hạn\" → nghĩ ngay đến On-Demand Capacity Reservation (không phải Savings Plan).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance.</p>",
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
      "question_id": "#196",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an application to accept timesheet entries from employees on their mobile devices. Timesheets will be submitted weekly, with most of the submissions occurring on Friday. The data must be stored in a format that allows payroll administrators to run monthly reports. The infrastructure must be highly available and scale to match the rate of incoming data and reporting requests.<br><br>Which combination of steps meets these requirements while minimizing operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App nhận timesheet từ mobile, tải cao vào thứ Sáu, báo cáo hàng tháng.</li><li>Cần highly available, scale theo tải.</li><li>Ưu tiên: minimize operational overhead. Chọn 2.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 + CloudFront + API Gateway + Lambda là serverless, tự scale, multi-AZ. Lưu dữ liệu ở S3, query bằng Athena và QuickSight, không cần quản lý server hay cluster.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EC2 và scheduled scaling cần vận hành.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — ECS vẫn nhiều vận hành hơn serverless.</li><li><strong>C</strong>: ✅ Đúng — Serverless front end và backend.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Redshift cluster tốn chi phí và quản lý.</li><li><strong>E</strong>: ✅ Đúng — S3 + Athena + QuickSight, serverless reporting.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway + Lambda</li><li>S3 + Athena + QuickSight</li><li>Minimize operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Ít vận hành + tải bùng nổ → serverless; báo cáo ad hoc trên S3 → Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#196",
          "answers": [
            {
              "choice": "<p>A. Deploy the application to Amazon EC2 On-Demand Instances with load balancing across multiple Availability Zones. Use scheduled Amazon EC2 Auto Scaling to add capacity before the high volume of submissions on Fridays.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application in a container using Amazon Elastic Container Service (Amazon ECS) with load balancing across multiple Availability Zones. Use scheduled Service<br>Auto Scaling to add capacity before the high volume of submissions on Fridays.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application front end to an Amazon S3 bucket served by Amazon CloudFront. Deploy the application backend using Amazon API Gateway with an AWS Lambda proxy integration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the timesheet submission data in Amazon Redshift. Use Amazon QuickSight to generate the reports using Amazon Redshift as the data source.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Store the timesheet submission data in Amazon S3. Use Amazon Athena and Amazon QuickSight to generate the reports using Amazon S3 as the data source.</p>",
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
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to improve an application that is hosted in the AWS Cloud. The application uses an Amazon Aurora MySQL DB instance that is experiencing overloaded connections. Most of the application’s operations insert records into the database. The application currently stores credentials in a text-based configuration file.<br><br>The solutions architect needs to implement a solution so that the application can handle the current connection load. The solution must keep the credentials secure and must provide the ability to rotate the credentials automatically on a regular basis.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Aurora MySQL bị quá tải connection do nhiều thao tác insert, credentials đang lưu trong file text.</li><li>Requirement: xử lý được connection load, bảo mật credentials và tự động rotate.</li><li>Ưu tiên: connection pooling + secret rotation tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon RDS Proxy</strong> gom và tái sử dụng connection (connection pooling) nên giảm tải connection cho DB. <strong>AWS Secrets Manager</strong> hỗ trợ lưu secret và automatic rotation, tích hợp trực tiếp với RDS Proxy.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — RDS Proxy xử lý connection, Secrets Manager rotate tự động.</li><li><strong>B</strong>: ❌ Sai — Parameter Store không có automatic rotation tích hợp.</li><li><strong>C</strong>: ❌ Sai — Aurora Replica chỉ phục vụ read, workload chủ yếu là insert (write) nên không giải quyết được connection overload.</li><li><strong>D</strong>: ❌ Sai — Replica không giúp write và Parameter Store không tự rotate.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>overloaded connections</li><li>RDS Proxy</li><li>Secrets Manager rotation</li><li>write-heavy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp quá nhiều connection tới RDS/Aurora + cần rotate credentials → nghĩ ngay đến <strong>RDS Proxy + Secrets Manager</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon RDS Proxy layer. In front of the DB instance. Store the connection credentials as a secret in AWS Secrets Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials in AWS Systems Manager Parameter Store</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora Replica. Store the connection credentials as a secret in AWS Secrets Manager</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Aurora Replica. Store the connection credentials in AWS Systems Manager Parameter Store.</p>",
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
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a microservice as an AWS Lambda function. The microservice writes data to an on-premises SQL database that supports a limited number of concurrent connections. When the number of Lambda function invocations is too high, the database crashes and causes application downtime. The company has an AWS Direct Connect connection between the company's VPC and the on-premises data center. The company wants to protect the database from crashes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda ghi vào SQL database on-premises có giới hạn concurrent connection, quá tải thì crash.</li><li>Có Direct Connect tới on-premises.</li><li>Ưu tiên: bảo vệ database bằng cách giới hạn tải.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon SQS</strong> làm buffer, Lambda đọc từ queue với <strong>reserved concurrency</strong> nhỏ hơn số connection tối đa của DB, nên số connection đồng thời được kiểm soát.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SQS buffer + reserved concurrency giới hạn connection.</li><li><strong>B</strong>: ❌ Sai — Migrate sang Aurora Serverless không phù hợp (DataSync không migrate DB) và đổi cả hệ thống.</li><li><strong>C</strong>: ❌ Sai — RDS Proxy chỉ dành cho RDS/Aurora, không dùng với database on-premises.</li><li><strong>D</strong>: ❌ Sai — SNS không buffer, provisioned concurrency chỉ giảm cold start, không giới hạn tải.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SQS buffer</li><li>reserved concurrency</li><li>limited connections</li><li>on-premises database</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Lambda làm quá tải backend có giới hạn → nghĩ ngay đến <strong>SQS + reserved concurrency</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>A. Write the data to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda function to read from the queue and write to the existing database. Set a reserved concurrency limit on the Lambda function that is less than the number of connections that the database supports.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon Aurora Serverless DB cluster. Use AWS DataSync to migrate the data from the existing database to Aurora Serverless. Reconfigure the Lambda function to write to Aurora.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon RDS Proxy DB instance. Attach the RDS Proxy DB instance to the Amazon RDS DB instance. Reconfigure the Lambda function to write to the RDS Proxy DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write the data to an Amazon Simple Notification Service (Amazon SNS) topic. Invoke the Lambda function to write to the existing database when the topic receives new messages. Configure provisioned concurrency for the Lambda function to be equal to the number of connections that the database supports.</p>",
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
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate its customer transactions database from on premises to AWS. The database resides on an Oracle DB instance that runs on a Linux server. According to a new security requirement, the company must rotate the database password each year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate Oracle DB lên AWS, phải rotate password hằng năm.</li><li>Ưu tiên: LEAST operational overhead.</li><li>Giữ engine Oracle, tránh chuyển đổi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon RDS for Oracle</strong> là managed DB, <strong>AWS Secrets Manager</strong> có automatic rotation với lịch rotation tùy chọn (yearly).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chuyển Oracle sang DynamoDB (SQL sang NoSQL) phức tạp, rotation tự viết Lambda.</li><li><strong>B</strong>: ✅ Đúng — RDS for Oracle + Secrets Manager rotation.</li><li><strong>C</strong>: ❌ Sai — tự quản lý Oracle trên EC2, rotation tự viết.</li><li><strong>D</strong>: ❌ Sai — Neptune là graph DB, không phù hợp, rotation tự viết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS for Oracle</li><li>Secrets Manager automatic rotation</li><li>rotation schedule</li><li>least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp rotate DB password ít vận hành → nghĩ ngay đến <strong>RDS + Secrets Manager automatic rotation</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#214",
          "answers": [
            {
              "choice": "<p>A. Convert the database to Amazon DynamoDB by using the AWS Schema Conversion Tool (AWS SCT). Store the password in AWS Systems Manager Parameter Store. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function for yearly passtard rotation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon RDS for Oracle. Store the password in AWS Secrets Manager. Turn on automatic rotation. Configure a yearly rotation schedule.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Amazon EC2 instance. Use AWS Systems Manager Parameter Store to keep and rotate the connection string by using an AWS Lambda function on a yearly schedule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon Neptune by using the AWS Schema Conversion Tool (AWS SCT). Create an Amazon CloudWatch alarm to invoke an AWS Lambda function for yearly password rotation.</p>",
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
      "question_id": "#243",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.<br><br>To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.<br><br>Which combination of steps should the solutions architect take to implement this solution? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Data lake S3 cho hàng trăm ứng dụng ở nhiều account.</li><li>Requirement: không truy cập qua internet công cộng, least privilege cho từng app.</li><li>Ưu tiên: dùng S3 access point giới hạn theo VPC.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>access point</strong> cho từng ứng dụng trong account sở hữu bucket, giới hạn theo VPC, và bucket policy yêu cầu truy cập qua access point. Dùng <strong>gateway endpoint</strong> trong VPC của ứng dụng với endpoint policy cho phép access point và cấu hình route table.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — access point trong account bucket, giới hạn VPC, bucket policy ủy quyền.</li><li><strong>B</strong>: ❌ Sai — \"VPC gateway attachment\" cho interface endpoint không đúng.</li><li><strong>C</strong>: ✅ Đúng — gateway endpoint + endpoint policy + route table.</li><li><strong>D</strong>: ❌ Sai — access point được tạo ở account sở hữu bucket, không phải mỗi account.</li><li><strong>E</strong>: ❌ Sai — endpoint ở VPC của data lake không phục vụ VPC của ứng dụng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 access point</li><li>VPC restriction</li><li>Gateway endpoint</li><li>Endpoint policy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp S3 private + quyền riêng từng app → nghĩ ngay đến <strong>S3 access point + gateway endpoint</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#243",
          "answers": [
            {
              "choice": "<p>A. Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application’s VPC. Update the bucket policy to require access from an access point.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an interface endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a gateway endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a gateway endpoint for Amazon S3 in the data lake's VPC. Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket.</p>",
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
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company’s business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: IaC triển khai multi-Region, multi-account.</li><li>Requirement chính: deploy một template cho nhiều account/Region.</li><li>Ưu tiên: quản lý tập trung, ít công sức vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS CloudFormation StackSets kết hợp AWS Organizations triển khai stack đồng loạt đến nhiều account và Region từ một nơi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — IAM policy không thực hiện deploy đa account; phải làm thủ công từng Region/account.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Control Tower là governance cho landing zone, không phải cơ chế deploy template chính.</li><li><strong>C</strong>: ✅ Đúng — StackSets + Organizations.</li><li><strong>D</strong>: ❌ Sai — nested stacks chỉ tái sử dụng template trong một Region/account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFormation StackSets</li><li>Multi-account multi-Region</li><li>AWS Organizations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp IaC multi-account + multi-Region → nghĩ ngay đến CloudFormation StackSets.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.</p>",
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
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.<br><br>The company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag.<br><br>The company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quét CVE cho image mới trong Amazon ECR.</li><li>Tự động xóa image tag có finding Critical/High và thông báo dev team.</li><li>Ưu tiên: event-driven, ít thành phần.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Scan on push</strong> của ECR quét ngay khi push; <strong>EventBridge</strong> nhận event scan complete và kích hoạt <strong>Step Functions</strong> xóa tag và gửi <strong>SNS</strong> thông báo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — scan on push + EventBridge + Step Functions + SNS.</li><li><strong>B</strong>: ❌ Sai — ECR không đẩy scan result trực tiếp vào SQS; scan result dùng EventBridge.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — quét thủ công mỗi giờ thay vì scan on push, chậm và tốn công.</li><li><strong>D</strong>: ❌ Sai — periodic scan không phản ứng kịp image mới và ECR không gửi kết quả vào SQS.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ECR scan on push</li><li>EventBridge</li><li>Step Functions</li><li>SNS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp quét lỗ hổng image ECR + phản ứng tự động → <strong>scan on push + EventBridge</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#224",
          "answers": [
            {
              "choice": "<p>A. Configure scan on push on the repository. Use Amazon EventBridge to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SQS queue. Use the Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
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
      "question_id": "#232",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to establish a connection from its on-premises data center to AWS. The company needs to connect all of its VPCs that are located in different AWS Regions with transitive routing capabilities between VPC networks. The company also must reduce network outbound traffic costs, increase bandwidth throughput, and provide a consistent network experience for end users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Kết nối on-premises với VPC nhiều Region, có transitive routing.</li><li>Requirement: giảm chi phí outbound, tăng bandwidth, trải nghiệm mạng nhất quán.</li><li>Ưu tiên: Direct Connect + Transit Gateway.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Direct Connect</strong> cho bandwidth cao, chi phí data out thấp, độ trễ nhất quán. <strong>Transit VIF</strong> kết nối <strong>Direct Connect gateway</strong> tới <strong>Transit Gateway</strong> ở mỗi Region, cho phép transitive routing giữa các VPC.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — VPN qua internet, VPC peering không hỗ trợ transitive routing.</li><li><strong>B</strong>: ✅ Đúng — DX + transit VIF + DX gateway + TGW mỗi Region.</li><li><strong>C</strong>: ❌ Sai — VPN không đáp ứng bandwidth/chi phí/độ nhất quán, và TGW trong một Region không tự nối nhiều Region theo mô tả.</li><li><strong>D</strong>: ❌ Sai — VPN giữa các VPC và peering không có transitive routing.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Direct Connect gateway</li><li>Transit VIF</li><li>Transit Gateway</li><li>Transitive routing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp on-premises nối nhiều VPC/Region + transitive + giảm cost → nghĩ ngay đến <strong>DX + transit VIF + DX gateway + TGW</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#232",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC. Create VPC peering connections that initiate from the central VPC to all other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Direct Connect connection between the on-premises data center and AWS. Provision a transit VIF, and connect it to a Direct Connect gateway. Connect the Direct Connect gateway to all the other VPCs by using a transit gateway in each Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC. Use a transit gateway with dynamic routing. Connect the transit gateway to all other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Direct Connect connection between the on-premises data center and AWS. Establish an AWS Site-to-Site VPN connection between all VPCs in each Region. Create VPC peering connections that initiate from the central VPC to all other VPCs.</p>",
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
      "question_id": "#242",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>During an audit, a security team discovered that a development team was putting IAM user secret access keys in their code and then committing it to an AWS CodeCommit repository. The security team wants to automatically find and remediate instances of this security vulnerability.<br><br>Which solution will ensure that the credentials are appropriately secured automatically?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Developer commit IAM secret access key vào CodeCommit.</li><li>Requirement: tự động phát hiện và khắc phục.</li><li>Ưu tiên: automation theo sự kiện.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CodeCommit trigger</strong> gọi <strong>Lambda</strong> mỗi lần có commit mới để quét credential; nếu có thì vô hiệu hóa key trong <strong>IAM</strong> và thông báo người dùng, xử lý ngay theo thời gian thực.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — quét trên EC2 instance thay vì repository, và Secrets Manager rotate không phù hợp.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — quét theo lịch, và lưu credential mới vào KMS là sai (KMS không lưu secret).</li><li><strong>C</strong>: ❌ Sai — Macie quét S3, không quét CodeCommit.</li><li><strong>D</strong>: ✅ Đúng — trigger + Lambda + vô hiệu hóa key trong IAM.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CodeCommit trigger</li><li>Lambda</li><li>Disable IAM access key</li><li>Automatic remediation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phát hiện secret trong CodeCommit → nghĩ ngay đến <strong>CodeCommit trigger + Lambda</strong>; Macie chỉ cho S3.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#242",
          "answers": [
            {
              "choice": "<p>A. Run a script nightly using AWS Systems Manager Run Command to search for credentials on the development instances. If found, use AWS Secrets Manager to rotate the credentials</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a scheduled AWS Lambda function to download and scan the application code from CodeCommit. If credentials are found, generate new credentials and store them in AWS KMS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon Macie to scan for credentials in CodeCommit repositories. If credentials are found, trigger an AWS Lambda function to disable the credentials and notify the user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a CodeCommit trigger to invoke an AWS Lambda function to scan new code submissions for credentials. If credentials are found, disable them in AWS IAM and notify the user.</p>",
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
      "question_id": "#244",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a hybrid solution between its data center and AWS. The company uses Amazon VPC and Amazon EC2 instances that send application logs to Amazon CloudWatch. The EC2 instances read data from multiple relational databases that are hosted on premises.<br><br>The company wants to monitor which EC2 instances are connected to the databases in near-real time. The company already has a monitoring solution that uses Splunk on premises. A solutions architect needs to determine how to send networking traffic to Splunk.<br><br>How should the solutions architect meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gửi network traffic của EC2 (kết nối database on-premises) sang Splunk gần real-time.</li><li>Requirement: near-real-time, tích hợp Splunk.</li><li>Ưu tiên: giải pháp managed, đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bật <strong>VPC Flow Logs</strong> gửi vào CloudWatch Logs, dùng <strong>subscription filter</strong> đẩy sang <strong>Kinesis Data Firehose</strong> có Splunk là destination, Lambda tiền xử lý để tách log events.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — export định kỳ qua S3 không near-real-time, dùng access key bất an.</li><li><strong>B</strong>: ✅ Đúng — Flow Logs + subscription filter + Firehose to Splunk.</li><li><strong>C</strong>: ❌ Sai — log mọi request ở database, quy trình batch phức tạp.</li><li><strong>D</strong>: ❌ Sai — phân tích anomaly không phải yêu cầu, thêm Kinesis Data Analytics không cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC Flow Logs</li><li>CloudWatch Logs subscription filter</li><li>Kinesis Data Firehose</li><li>Splunk destination</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp đưa log AWS sang Splunk near-real-time → nghĩ ngay đến <strong>Firehose với Splunk destination</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#244",
          "answers": [
            {
              "choice": "<p>A. Enable VPC flows logs, and send them to CloudWatch. Create an AWS Lambda function to periodically export the CloudWatch logs to an Amazon S3 bucket by using the pre-defined export function. Generate ACCESS_KEY and SECRET_KEY AWS credentials. Configure Splunk to pull the logs from the S3 bucket by using those credentials.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Kinesis Data Firehose delivery stream with Splunk as the destination. Configure a pre-processing AWS Lambda function with a Kinesis Data Firehose stream processor that extracts individual log events from records sent by CloudWatch Logs subscription filters. Enable VPC flows logs, and send them to CloudWatch. Create a CloudWatch Logs subscription that sends log events to the Kinesis Data Firehose delivery stream.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ask the company to log every request that is made to the databases along with the EC2 instance IP address. Export the CloudWatch logs to an Amazon S3 bucket. Use Amazon Athena to query the logs grouped by database name. Export Athena results to another S3 bucket. Invoke an AWS Lambda function to automatically send any new file that is put in the S3 bucket to Splunk.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Send the CloudWatch logs to an Amazon Kinesis data stream with Amazon Kinesis Data Analytics for SQL Applications. Configure a 1-minute sliding window to collect the events. Create a SQL query that uses the anomaly detection template to monitor any networking traffic anomalies in near-real time. Send the result to an Amazon Kinesis Data Firehose delivery stream with Splunk as the destination.</p>",
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
      "question_id": "#247",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company runs workloads in VPCs that are deployed across hundreds of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connectivity to the internet from the private subnets.<br><br>A solutions architect is working on a hub-and-spoke design. All private subnets in the spoke VPCs must route traffic to the internet through an egress VPC. The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account.<br><br>Which set of additional steps should the solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hub-and-spoke: private subnet ở spoke VPC ra internet qua NAT gateway ở egress VPC.</li><li>Requirement: kết nối hàng trăm account VPC tới egress VPC.</li><li>Ưu tiên: scale, định tuyến tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>Transit Gateway</strong>, chia sẻ bằng <strong>AWS RAM</strong> cho các account, attach các VPC và egress VPC, cấu hình route để traffic internet đi qua NAT gateway ở egress VPC.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — VPC peering không hỗ trợ transitive, không thể dùng NAT gateway của VPC peer.</li><li><strong>B</strong>: ✅ Đúng — TGW chia sẻ + attach VPC + routing.</li><li><strong>C</strong>: ❌ Sai — TGW ở mọi account là sai mô hình, và NAT gateway không attach vào TGW.</li><li><strong>D</strong>: ❌ Sai — PrivateLink không dùng để route internet egress.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway</li><li>Egress VPC</li><li>NAT gateway</li><li>AWS RAM</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp hub-and-spoke nhiều account + egress tập trung → nghĩ ngay đến <strong>Transit Gateway + RAM</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#247",
          "answers": [
            {
              "choice": "<p>A. Create peering connections between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway, and share it with the existing AWS accounts. Attach existing VPCs to the transit gateway. Configure the required routing to allow access to the internet.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway in every account. Attach the NAT gateway to the transit gateways. Configure the required routing to allow access to the internet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS PrivateLink connection between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.</p>",
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
      "question_id": "#248",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service (Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the application's authentication service. All the failed login attempts originate from about 500 different IP addresses that change each week. A solutions architect must prevent the failed login attempts from overwhelming the authentication service.<br><br>Which solution meets these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chặn login thất bại từ ~500 IP thay đổi hằng tuần, bảo vệ authentication service.</li><li>Requirement: tự động xử lý IP thay đổi.</li><li>Ưu tiên: MOST operational efficiency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS WAF rate-based rule</strong> tự động chặn các IP vượt ngưỡng request, không cần cập nhật danh sách IP hằng tuần. Gắn web ACL vào <strong>ALB</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — security group chỉ có allow, không deny; Firewall Manager không giải quyết IP thay đổi.</li><li><strong>B</strong>: ✅ Đúng — rate-based rule tự động theo IP.</li><li><strong>C</strong>: ❌ Sai — allow-list CIDR không khả thi với sinh viên toàn cầu.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — IP set tĩnh phải cập nhật thủ công mỗi tuần.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF</li><li>Rate-based rule</li><li>ALB web ACL</li><li>IP thay đổi</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp brute force/request flood từ IP thay đổi → nghĩ ngay đến <strong>WAF rate-based rule</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#248",
          "answers": [
            {
              "choice": "<p>A. Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the ALB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIDR ranges.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the ALB.</p>",
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
      "question_id": "#249",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates an on-premises software-as-a-service (SaaS) solution that ingests several files daily. The company provides multiple public SFTP endpoints to its customers to facilitate the file transfers. The customers add the SFTP endpoint IP addresses to their firewall allow list for outbound traffic. Changes to the SFTP endpoint IP addresses are not permitted.<br><br>The company wants to migrate the SaaS solution to AWS and decrease the operational overhead of the file transfer service.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Di chuyển dịch vụ SFTP lên AWS, giữ nguyên IP public mà khách hàng đã whitelist.</li><li>Requirement: giữ IP, giảm vận hành.</li><li>Ưu tiên: managed, BYOIP.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đăng ký dải IP bằng <strong>BYOIP</strong>, tạo <strong>Elastic IP</strong> từ pool, gán cho endpoint <strong>AWS Transfer Family (SFTP)</strong> (VPC endpoint internet-facing) lưu file vào S3. Managed hoàn toàn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — BYOIP + EIP + Transfer for SFTP + S3.</li><li><strong>B</strong>: ❌ Sai — tự vận hành FTP trên EC2, ALB không hỗ trợ giao thức SFTP/TCP phù hợp, lưu EBS.</li><li><strong>C</strong>: ❌ Sai — Route 53 không đăng ký dải IP, tự quản lý EC2 FTP.</li><li><strong>D</strong>: ❌ Sai — S3 không có endpoint SFTP kiểu này, VPC endpoint không gán EIP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Transfer Family</li><li>BYOIP</li><li>Elastic IP</li><li>SFTP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp SFTP managed + IP cố định/whitelist → nghĩ ngay đến <strong>Transfer Family + Elastic IP (BYOIP)</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#249",
          "answers": [
            {
              "choice": "<p>A. Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a subnet containing the customer-owned block of IP addresses to a VPC. Create Elastic IP addresses from the address pool and assign them to an Application Load Balancer (ALB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the ALStore the files in attached Amazon Elastic Block Store (Amazon EBS) volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Register the customer-owned block of IP addresses with Amazon Route 53. Create alias records in Route 53 that point to a Network Load Balancer (NLB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the NLB. Store the files in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Register the customer-owned block of IP addresses in the company’s AWS account. Create Elastic IP addresses from the address pool and assign them to an Amazon S3 VPC endpoint. Enable SFTP support on the S3 bucket.</p>",
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
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security:<br>The database must use strong, randomly generated passwords stored in a secure AWS managed service.<br>The application resources must be deployed through AWS CloudFormation.<br>The application must rotate credentials for the database every 90 days.<br>A solutions architect will generate a CloudFormation template to deploy the application.<br>Which resources specified in the CloudFormation template will meet the security engineer’s requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lưu password DB ngẫu nhiên trong dịch vụ managed, deploy bằng CloudFormation, tự động rotate mỗi 90 ngày.</li><li>Ưu tiên <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Secrets Manager</strong> sinh password ngẫu nhiên và có sẵn cơ chế rotation. Resource `AWS::SecretsManager::RotationSchedule` gắn Lambda rotation và đặt chu kỳ 90 ngày ngay trong template, không cần thêm thành phần nào khác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Secrets Manager + Lambda rotation + RotationSchedule, native và ít việc nhất.</li><li><strong>B</strong>: ❌ Sai — Parameter Store không có resource RotationSchedule.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — dùng EventBridge rule tự trigger Lambda, thêm resource và phải tự quản lý, trong khi RotationSchedule đã làm sẵn.</li><li><strong>D</strong>: ❌ Sai — AppSync DataSource không dùng để rotate password.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Secrets Manager</li><li>RotationSchedule</li><li>Automatic rotation</li><li>SecureString không có rotation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"rotate credentials DB tự động\" → nghĩ ngay đến <strong>AWS Secrets Manager</strong> (không phải Parameter Store).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.</p>",
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
      "question_id": "#265",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage more than 1,000 AWS accounts. The company has created a new developer organization. There are 540 developer member accounts that must be moved to the new developer organization. All accounts are set up with all the required information so that each account can be operated as a standalone account.<br><br>Which combination of steps should a solutions architect take to move all of the developer accounts to the new developer organization? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển 540 account từ organization cũ sang organization mới.</li><li>Quy trình chuẩn: remove khỏi org cũ, invite từ org mới, accept.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Account chỉ thuộc một organization nên phải remove khỏi org cũ (từ management account), sau đó org mới gửi invitation và mỗi account chấp nhận.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — API MoveAccount chỉ di chuyển giữa OU trong cùng organization.</li><li><strong>B</strong>: ✅ Đúng — management account gỡ từng account (RemoveAccountFromOrganization).</li><li><strong>C</strong>: ❌ Sai — remove từ chính account là thao tác thủ công, cần đủ thông tin; đề chọn cách từ management account.</li><li><strong>D</strong>: ❌ Sai — placeholder account không cần.</li><li><strong>E</strong>: ✅ Đúng — org mới gửi InviteAccountToOrganization.</li><li><strong>F</strong>: ✅ Đúng — mỗi account chấp nhận invitation.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RemoveAccountFromOrganization</li><li>InviteAccountToOrganization</li><li>Accept handshake</li><li>MoveAccount chỉ trong cùng org</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chuyển account giữa organization → remove, invite, accept.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#265",
          "answers": [
            {
              "choice": "<p>A. Call the MoveAccount operation in the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the management account, remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. From each developer account, remove the account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Call the InviteAccountToOrganization operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Have each developer sign in to their account and confirm to join the new developer organization.</p>",
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
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video processing company has an application that downloads images from an Amazon S3 bucket, processes the images, stores a transformed image in a second S3 bucket, and updates metadata about the image in an Amazon DynamoDB table. The application is written in Node.js and runs by using an AWS Lambda function. The Lambda function is invoked when a new image is uploaded to Amazon S3.<br><br>The application ran without incident for a while. However, the size of the images has grown significantly. The Lambda function is now failing frequently with timeout errors. The function timeout is set to its maximum value. A solutions architect needs to refactor the application’s architecture to prevent invocation failures. The company does not want to manage the underlying infrastructure.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda timeout do ảnh lớn; Lambda tối đa 15 phút.</li><li>Requirement chính: chạy job dài hơn, không quản lý hạ tầng.</li><li>Ưu tiên: serverless/managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Container hóa ứng dụng, đẩy lên <strong>ECR</strong>, chạy bằng <strong>ECS on Fargate</strong> (không giới hạn 15 phút, không quản lý server). Lambda chỉ làm trigger gọi ECS task.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Docker image lên ECR là bước cần để chạy trên ECS.</li><li><strong>B</strong>: ✅ Đúng — Fargate task, không quản lý hạ tầng.</li><li><strong>C</strong>: ❌ Sai — Step Functions Parallel và provisioned concurrency không giải quyết giới hạn thời gian.</li><li><strong>D</strong>: ❌ Sai — ECS EC2 launch type phải quản lý EC2 instance.</li><li><strong>E</strong>: ❌ Sai — EFS và RDS không giải quyết timeout, thêm phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda 15 phút, ECS Fargate, ECR, no infrastructure management.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Lambda timeout + không muốn quản lý server\" → nghĩ ngay đến Fargate.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. Modify the application deployment by building a Docker image that contains the application code. Publish the image to Amazon Elastic Container Registry (Amazon ECR).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of AWS Fargate. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Step Functions state machine with a Parallel state to invoke the Lambda function. Increase the provisioned concurrency of the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of Amazon EC2. Configure the task definition to use the new image in Amazon Elastic Container Registry (Amazon ECR). Adjust the Lambda function to invoke an ECS task by using the ECS task definition when a new file arrives in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the application to store images on Amazon Elastic File System (Amazon EFS) and to store metadata on an Amazon RDS DB instance. Adjust the Lambda function to mount the EFS file share.</p>",
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
      "question_id": "#122",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has purchased appliances from different vendors. The appliances all have IoT sensors. The sensors send status information in the vendors' proprietary formats to a legacy application that parses the information into JSON. The parsing is simple, but each vendor has a unique format. Once daily, the application parses all the JSON records and stores the records in a relational database for analysis.<br><br>The company needs to design a new data analysis solution that can deliver faster and optimize costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>IoT sensors nhiều vendor, format riêng, hiện parse mỗi ngày một lần vào relational DB.</li><li>Requirement chính: phân tích nhanh hơn, tối ưu chi phí.</li><li>Ưu tiên: serverless, pay-per-use.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> nhận dữ liệu, rule gọi <strong>Lambda</strong> parse và lưu lên <strong>S3</strong>; <strong>Glue + Athena + QuickSight</strong> phân tích serverless, gần real time và rẻ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kiến trúc serverless đầy đủ.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Fargate và Redshift tốn chi phí.</li><li><strong>C</strong>: ❌ Sai — phải sửa code sensor, SFTP không phù hợp IoT.</li><li><strong>D</strong>: ❌ Sai — Snowball Edge không phù hợp thu thập dữ liệu sensor liên tục, tốn kém.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS IoT Core rules</li><li>Lambda parsing</li><li>S3 + Glue + Athena</li><li>serverless analytics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"IoT sensors + phân tích chi phí thấp → IoT Core + S3 + Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#122",
          "answers": [
            {
              "choice": "<p>A. Connect the IoT sensors to AWS IoT Core. Set a rule to invoke an AWS Lambda function to parse the information and save a .csv file to Amazon. S3 Use AWS Glue to catalog the files. Use Amazon Athena and Amazon QuickSight for analysis.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application server to AWS Fargate, which will receive the information from IoT sensors and parse the information into a relational format. Save the parsed information to Amazon Redshlft for analysis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Transfer for SFTP server. Update the IoT sensor code to send the information as a .csv file through SFTP to the server. Use AWS Glue to catalog the files. Use Amazon Athena for analysis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Snowball Edge to collect data from the IoT sensors directly to perform local analysis. Periodically collect the data into Amazon Redshift to perform global analysis.</p>",
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
      "question_id": "#113",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.<br><br>Which actions should a solutions architect lake to resolve the problem and prevent it from happening in the future? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một số EC2 thiếu tag Project để phân bổ chi phí, nhiều account trong Organizations.</li><li>Requirement chính: tìm resource thiếu tag và ngăn tái diễn.</li><li>Ưu tiên: giải pháp tập trung và chủ động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Config rule</strong> phát hiện thiếu tag, <strong>Config aggregator</strong> tổng hợp toàn organization, <strong>SCP</strong> deny `ec2:RunInstances` nếu thiếu tag Project để ngăn tái diễn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Config rule (required-tags) tìm resource thiếu tag.</li><li><strong>B</strong>: ✅ Đúng — SCP áp dụng toàn organization, ngăn từ gốc.</li><li><strong>C</strong>: ❌ Sai — Inspector quét lỗ hổng, không kiểm tra tag.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — IAM policy từng account, khó quản lý.</li><li><strong>E</strong>: ✅ Đúng — aggregator xem tập trung nhiều account.</li><li><strong>F</strong>: ❌ Sai — Security Hub không dùng để kiểm tag EC2.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Config required-tags</li><li>Config aggregator</li><li>SCP deny RunInstances</li><li>cost allocation tag</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Thiếu tag + ngăn tái diễn đa account → Config (+ aggregator) và SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#113",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule in each account to find resources with missing tags.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP in the organization with a deny action for ec2:RunInstances if the Project tag is missing.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Inspector in the organization to find resources with missing tags.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy in each account with a deny action for ec2:RunInstances if the Project tag is missing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.</p>",
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
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An adventure company has launched a new feature on its mobile app. Users can use the feature to upload their hiking and rafting photos and videos anytime. The photos and videos are stored in Amazon S3 Standard storage in an S3 bucket and are served through Amazon CloudFront.<br><br>The company needs to optimize the cost of the storage. A solutions architect discovers that most of the uploaded photos and videos are accessed infrequently after 30 days. However, some of the uploaded photos and videos are accessed frequently after 30 days. The solutions architect needs to implement a solution that maintains millisecond retrieval availability of the photos and videos at the lowest possible cost.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tối ưu chi phí S3 khi pattern truy cập không đoán trước được sau 30 ngày.</li><li>Requirement chính: millisecond retrieval, lowest cost.</li><li>Ưu tiên: cost tự động mà không mất truy cập nhanh.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 Intelligent-Tiering tự di chuyển object giữa các tier theo pattern truy cập, vẫn millisecond latency, không phí retrieval.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tự động tối ưu chi phí cho access pattern không rõ ràng.</li><li><strong>B</strong>: ❌ Sai — Glacier Deep Archive retrieval mất hàng giờ, không đạt millisecond.</li><li><strong>C</strong>: ❌ Sai — EFS đắt hơn S3 nhiều, không phù hợp lưu media.</li><li><strong>D</strong>: ❌ Sai — Cache-Control chỉ ảnh hưởng caching, không giảm chi phí lưu trữ S3.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Intelligent-Tiering</li><li>Unpredictable access pattern</li><li>Millisecond retrieval</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp access pattern không đoán trước + cần truy cập nhanh → nghĩ ngay đến S3 Intelligent-Tiering.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>A. Configure S3 Intelligent-Tiering on the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 Lifecycle policy to transition image objects and video objects from S3 Standard to S3 Glacier Deep Archive after 30 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace Amazon S3 with an Amazon Elastic File System (Amazon EFS) file system that is mounted on Amazon EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a Cache-Control: max-age header to the S3 image objects and S3 video objects. Set the header to 30 days.</p>",
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
      "question_id": "#145",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient’s signature or a photo of the package with the recipient. The driver’s handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.<br><br>As the company expands, drivers report that the system is rejecting connections. The FTP server is having problems because of dropped connections and memory issues in response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes. The billing team reports that files are not always in the archive and that the central system is not always updated.<br><br>A solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated. The handheld devices cannot be modified, so the company cannot deploy a new application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: FTP server đơn lẻ trên EC2 bị quá tải, mất file; thiết bị không sửa được.</li><li>Requirement chính: scale tối đa, luôn đẩy file vào archive và cập nhật hệ thống.</li><li>Ưu tiên: giữ giao thức FTP, serverless, đáng tin cậy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Transfer Family</strong> cung cấp FTP managed, lưu thẳng vào <strong>S3</strong>; S3 event kích hoạt <strong>Lambda</strong> thêm metadata và cập nhật hệ thống. Không cần sửa thiết bị.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — ASG + ALB vẫn quản lý server, FTP khó cân bằng tải.</li><li><strong>B</strong>: ❌ Sai — vẫn dựa vào EC2 đơn lẻ để xử lý.</li><li><strong>C</strong>: ✅ Đúng — Transfer Family (FTP) + S3 + Lambda.</li><li><strong>D</strong>: ❌ Sai — yêu cầu sửa thiết bị, trái đề bài.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Transfer Family</li><li>FTP</li><li>S3 event notification</li><li>Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"FTP cũ cần migrate, không sửa client → nghĩ ngay đến AWS Transfer Family.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#145",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.</p>",
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
      "question_id": "#262",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to manage the costs associated with a group of 20 applications that are infrequently used, but are still business-critical, by migrating to AWS. The applications are a mix of Java and Node.js spread across different instance clusters. The company wants to minimize costs while standardizing by using a single deployment methodology.<br><br>Most of the applications are part of month-end processing routines with a small number of concurrent users, but they are occasionally run at other times. Average application memory consumption is less than 1 GB. though some applications use as much as 2.5 GB of memory during peak processing. The most important application in the group is a billing report written in Java that accesses multiple data sources and often runs for several hours.<br><br>Which is the MOST cost-effective solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>20 ứng dụng Java/Node.js ít dùng, memory tới 2.5 GB, một job billing chạy nhiều giờ.</li><li>Cần <strong>MOST cost-effective</strong> và một phương pháp deploy thống nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Container ECS trên EC2 chuẩn hóa deploy cho cả Java lẫn Node.js, không giới hạn runtime. Bin-packing nhiều task lên cùng cluster tiết kiệm chi phí.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda tối đa 15 phút, job billing chạy hàng giờ không phù hợp.</li><li><strong>B</strong>: ✅ Đúng — ECS on EC2 với task scaling, chạy được job dài, tiết kiệm nhờ co-locate.</li><li><strong>C</strong>: ❌ Sai — một Beanstalk environment mỗi app tạo nhiều tài nguyên, đắt.</li><li><strong>D</strong>: ❌ Sai — cluster cố định cùng Reserved Instance 3 năm cho max size, lãng phí với app ít dùng và không chuẩn hóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ECS on EC2</li><li>Long-running job</li><li>Lambda 15 min limit</li><li>Single deployment methodology</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Job chạy nhiều giờ + nhiều app khác runtime → container (ECS), không phải Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#262",
          "answers": [
            {
              "choice": "<p>A. Deploy a separate AWS Lambda function for each application. Use AWS CloudTrail logs and Amazon CloudWatch alarms to verify completion of critical jobs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Amazon ECS containers on Amazon EC2 with Auto Scaling configured for memory utilization of 75%. Deploy an ECS task for each application being migrated with ECS task scaling. Monitor services and hosts by using Amazon CloudWatch.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS Elastic Beanstalk for each application with Auto Scaling to ensure that all requests have sufficient resources. Monitor each AWS Elastic Beanstalk deployment by using CloudWatch alarms.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new Amazon EC2 instance cluster that co-hosts all applications by using EC2 Auto Scaling and Application Load Balancers. Scale cluster size based on a custom metric set on instance memory utilization. Purchase 3-year Reserved Instance reservations equal to the GroupMaxSize parameter of the Auto Scaling group.</p>",
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
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a new application as a static website in Amazon S3. The company has deployed the application to a production AWS account and uses Amazon CloudFront to deliver the website. The website calls an Amazon API Gateway REST API. An AWS Lambda function backs each API method.<br><br>The company wants to create a CSV report every 2 weeks to show each API Lambda function’s recommended configured memory, recommended cost, and the price difference between current configurations and the recommendations. The company will store the reports in an S3 bucket.<br><br>Which solution will meet these requirements with the LEAST development time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Báo cáo CSV định kỳ 2 tuần về memory khuyến nghị, chi phí khuyến nghị, chênh lệch giá của Lambda function.</li><li>Requirement chính: lấy recommendation của Lambda.</li><li>Ưu tiên: LEAST development time.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Compute Optimizer</strong> đã có recommendation cho Lambda. API `ExportLambdaFunctionRecommendations` xuất thẳng CSV ra S3; chỉ cần một Lambda nhỏ gọi API và EventBridge rule lên lịch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tự tính từ CloudWatch Logs, tốn nhiều development.</li><li><strong>B</strong>: ✅ Đúng — Compute Optimizer + export API + EventBridge schedule, code tối thiểu.</li><li><strong>C</strong>: ❌ Sai — Compute Optimizer console không có tính năng lên lịch export định kỳ.</li><li><strong>D</strong>: ❌ Sai — Trusted Advisor không có scheduled export như vậy và không cho memory recommendation chi tiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Compute Optimizer, ExportLambdaFunctionRecommendations, EventBridge schedule, S3 CSV.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Recommend memory/size cho Lambda\" → nghĩ ngay đến Compute Optimizer.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>A. Create a Lambda function that extracts metrics data for each API Lambda function from Amazon CloudWatch Logs for the 2-week period. Collate the data into tabular format. Store the data as a .csv file in an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Opt in to AWS Compute Optimizer. Create a Lambda function that calls the ExportLambdaFunctionRecommendations operation. Export the .csv file to an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Opt in to AWS Compute Optimizer. Set up enhanced infrastructure metrics. Within the Compute Optimizer console, schedule a job to export the Lambda recommendations to a .csv file. Store the file in an S3 bucket every 2 weeks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase the AWS Business Support plan for the production account. Opt in to AWS Compute Optimizer for AWS Trusted Advisor checks. In the Trusted Advisor console, schedule a job to export the cost optimization checks to a .csv file. Store the file in an S3 bucket every 2 weeks.</p>",
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
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has IoT sensors that monitor traffic patterns throughout a large city. The company wants to read and collect data from the sensors and perform aggregations on the data.<br><br>A solutions architect designs a solution in which the IoT devices are streaming to Amazon Kinesis Data Streams. Several applications are reading from the stream. However, several consumers are experiencing throttling and are periodically encountering a ReadProvisionedThroughputExceeded error.<br><br>Which actions should the solutions architect take to resolve this issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều consumer đọc Kinesis Data Streams, gặp `ReadProvisionedThroughputExceeded`.</li><li>Cần 3 hành động để giải quyết throttling phía đọc.</li><li>Ưu tiên: tăng read throughput.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Thêm shard (A) tăng throughput đọc; <strong>enhanced fan-out</strong> (C) cho mỗi consumer 2 MB/s riêng; retry với <strong>exponential backoff</strong> (E) xử lý throttling.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — reshard tăng số shard, tăng read capacity.</li><li><strong>B</strong>: ❌ Sai — KPL dành cho producer, không giải quyết lỗi đọc.</li><li><strong>C</strong>: ✅ Đúng — enhanced fan-out cho mỗi consumer throughput riêng.</li><li><strong>D</strong>: ❌ Sai — giảm shard làm giảm capacity.</li><li><strong>E</strong>: ✅ Đúng — retry + exponential backoff.</li><li><strong>F</strong>: ❌ Sai — dynamic partitioning là tính năng của Firehose, không phải Data Streams.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ReadProvisionedThroughputExceeded</li><li>resharding</li><li>enhanced fan-out</li><li>exponential backoff</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp nhiều consumer bị throttle trên Kinesis → <strong>thêm shard + enhanced fan-out + backoff</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#220",
          "answers": [
            {
              "choice": "<p>A. Reshard the stream to increase the number of shards in the stream.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Kinesis Producer Library (KPL). Adjust the polling frequency.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use consumers with the enhanced fan-out feature.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reshard the stream to reduce the number of shards in the stream.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use an error retry and exponential backoff mechanism in the consumer logic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure the stream to use dynamic partitioning.</p>",
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
      "question_id": "#115",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company’s applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets.<br><br>A solutions architect must review the infrastructure. The solution architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high. A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chi phí NAT gateway (NatGateway-Bytes) cao do workload private đọc/ghi Kinesis Data Streams.</li><li>Requirement chính: giảm chi phí, giữ chức năng ứng dụng.</li><li>Ưu tiên: cost optimization.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Interface VPC endpoint</strong> cho Kinesis giúp traffic đi qua mạng AWS, không qua NAT gateway. Endpoint policy cần cho phép traffic từ các ứng dụng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ phân tích, không giải quyết nguyên nhân.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — nhấn vào IAM permissions, trong khi cần endpoint policy cho phép traffic.</li><li><strong>C</strong>: ❌ Sai — Detective là điều tra bảo mật, không giảm chi phí.</li><li><strong>D</strong>: ✅ Đúng — interface endpoint + endpoint policy cho phép traffic.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>NatGateway-Bytes</li><li>interface VPC endpoint</li><li>Kinesis Data Streams</li><li>VPC endpoint policy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"NAT cost cao do gọi AWS service → VPC endpoint (S3/DynamoDB dùng gateway, còn lại interface).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#115",
          "answers": [
            {
              "choice": "<p>A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that the VPC endpoint policy allows traffic from the applications.</p>",
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
      "question_id": "#105",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand.<br><br>Which of the following actions would allow the database to handle the month-end load with the LEAST impact on performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Self-managed MySQL trên EC2 chậm vào cuối tháng do I/O nặng từ báo cáo.</li><li>Requirement chính: database chịu được tải đột biến theo chu kỳ.</li><li>Ưu tiên: ít ảnh hưởng hiệu năng, ít công sức vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chuyển sang <strong>Amazon RDS</strong> và dùng nhiều read replica để gánh tải báo cáo (read-heavy) cuối tháng, tách khỏi database chính.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — pre-warm ELB không liên quan DB; GP2 không phải lựa chọn I/O cao nhất.</li><li><strong>B</strong>: ✅ Đúng — read replica offload truy vấn báo cáo, managed service.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự động hóa phức tạp, volume modification có giới hạn tần suất và ảnh hưởng hiệu năng.</li><li><strong>D</strong>: ❌ Sai — thao tác thủ công, snapshot và revert rủi ro, tốn kém.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>read replica</li><li>Amazon RDS</li><li>month-end reporting</li><li>offload read traffic</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Tải đọc/báo cáo làm chậm DB → nghĩ ngay đến read replica.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#105",
          "answers": [
            {
              "choice": "<p>A. Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/O per second by taking snapshots before the end of the month and reverting back afterwards.</p>",
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
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company’s engineers rely heavily on SSH access to the instances for troubleshooting.<br><br>The company’s existing architecture includes the following:<br><br>• A VPC with private and public subnets, and a NAT gateway.<br>• Site-to-Site VPN for connectivity with the on-premises environment.<br>• EC2 security groups with direct SSH access from the on-premises environment.<br><br>The company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.<br><br>Which strategy should a solutions architect use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tăng bảo mật SSH và audit lệnh engineer chạy trên EC2 ở private subnet.</li><li>Requirement chính: kiểm soát truy cập + ghi log lệnh.</li><li>Ưu tiên: security và auditing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Session Manager</strong> không cần mở port 22, truy cập qua IAM, và có thể ghi session log vào S3/CloudWatch Logs. Cần role AmazonSSMManagedInstanceCore và gỡ rule SSH.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EC2 Instance Connect không ghi lại lệnh đã chạy.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — vẫn mở port 22, audit log OS không đầy đủ lệnh.</li><li><strong>C</strong>: ❌ Sai — chỉ kiểm soát security group, không audit lệnh.</li><li><strong>D</strong>: ✅ Đúng — Session Manager, không cần port 22, có audit logging.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Session Manager, AmazonSSMManagedInstanceCore, no port 22, session logging.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Audit lệnh SSH / bỏ port 22\" → Session Manager.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>A. Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer’s devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer’s devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role with the AmazonSSMManagedInstanceCore managed policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager.</p>",
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
      "question_id": "#216",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only into a single AWS Region.<br><br>The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hơn 100 account, dùng chung Transit Gateway, mỗi account có IGW và NAT gateway riêng.</li><li>Cần rule-based filtering tập trung cho outbound traffic, peak 25 Gbps mỗi AZ.</li><li>Ưu tiên: centralized, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo egress VPC tập trung nối Transit Gateway, dùng <strong>AWS Network Firewall</strong> (managed, scale tới 100 Gbps mỗi AZ) với endpoint ở mỗi AZ và đổi default route về đó.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — proxy open-source tự quản lý, vận hành nặng.</li><li><strong>B</strong>: ✅ Đúng — central egress VPC + Network Firewall.</li><li><strong>C</strong>: ❌ Sai — Network Firewall ở từng account không tập trung, tốn chi phí.</li><li><strong>D</strong>: ❌ Sai — proxy ở mỗi account, không tập trung.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>centralized egress</li><li>AWS Network Firewall</li><li>Transit Gateway</li><li>rule-based filtering</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp lọc outbound tập trung nhiều account → nghĩ ngay đến <strong>Network Firewall trong egress VPC + Transit Gateway</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>A. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy's Auto Scaling group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Use an AWS Network Firewall firewall for rule-based filtering. Create Network Firewall endpoints in each Availability Zone. Modify all default routes to point to the Network Firewall endpoints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Network Firewall firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering. Modify all default routes to point to the proxy's Auto Scaling group.</p>",
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
      "question_id": "#133",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.<br><br>The company wants to process each URL in other Regions to compare possible differences in site localization. URLs must be published from the existing Region. Results must be written to the existing S3 bucket in the current Region.<br><br>Which combination of changes will produce multi-Region deployment that meets these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý URL ở nhiều Region, nhưng URL phải publish từ Region hiện tại và kết quả ghi về S3 hiện tại.</li><li>Requirement chính: fan-out SNS sang SQS cross-Region, giữ SNS và S3 ở Region gốc.</li><li>Ưu tiên: kiến trúc multi-Region đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Deploy <strong>SQS queue + Lambda</strong> ở các Region khác để xử lý tại chỗ, và <strong>subscribe các SQS queue đó vào SNS topic</strong> ở Region gốc (SNS hỗ trợ cross-Region subscription tới SQS). Lambda ghi kết quả về S3 bucket gốc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SQS + Lambda ở mỗi Region để xử lý URL.</li><li><strong>B</strong>: ❌ Sai — SNS subscribe vào SQS là sai chiều; SQS là subscriber của SNS.</li><li><strong>C</strong>: ✅ Đúng — SQS mỗi Region subscribe vào SNS topic ở Region gốc.</li><li><strong>D</strong>: ❌ Sai — SQS không publish được sang SNS.</li><li><strong>E</strong>: ❌ Sai — deploy SNS ở Region khác trái yêu cầu publish từ Region hiện tại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SNS fan-out</li><li>Cross-Region subscription</li><li>SQS subscribe SNS</li><li>Lambda event source</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"SNS → nhiều Region → nghĩ ngay đến SQS ở từng Region subscribe vào SNS topic.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. Deploy the SQS queue with the Lambda function to other Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subscribe the SNS topic in each Region to the SQS queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Subscribe the SQS queue in each Region to the SNS topic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the SQS queue to publish URLs to SNS topics in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the SNS topic and the Lambda function to other Regions.</p>",
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
      "question_id": "#181",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing its network configuration in the AWS Cloud. The company uses AWS Organizations to manage a multi-account setup. The company has three OUs. Each OU contains more than 100 AWS accounts. Each account has a single VPC, and all the VPCs in each OU are in the same AWS Region.<br><br>The CIDR ranges for all the AWS accounts do not overlap. The company needs to implement a solution in which VPCs in the same OU can communicate with each other but cannot communicate with VPCs in other OUs.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hơn 300 VPC chia 3 OU; VPC trong cùng OU thông nhau, khác OU thì cô lập.</li><li>Cùng Region, CIDR không trùng.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mỗi OU một transit gateway, share qua AWS RAM, attach VPC. Mỗi TGW là một miền routing riêng nên cô lập giữa các OU tự nhiên, không cần mesh peering.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Full-mesh peering với hơn 100 VPC mỗi OU quá nhiều kết nối, không scale.</li><li><strong>B</strong>: ❌ Sai — Peering không transitive, hub-spoke qua shared VPC không cho các VPC nói chuyện với nhau; vẫn nhiều peering.</li><li><strong>C</strong>: ✅ Đúng — Hub-and-spoke, transitive routing, tách theo OU bằng TGW riêng.</li><li><strong>D</strong>: ❌ Sai — VPN + third-party routing tốn vận hành nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway + AWS RAM</li><li>Hundreds of VPCs</li><li>Isolation per OU</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Hàng trăm VPC cần kết nối → Transit Gateway, không dùng VPC peering mesh.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#181",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation stack set that establishes VPC peering between accounts in each OU. Provision the stack set in each OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In each OU, create a dedicated networking account that has a single VPC. Share this VPC with all the other accounts in the OU by using AWS Resource Access Manager (AWS RAM). Create a VPC peering connection between the networking account and each account in the OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a transit gateway in an account in each OU. Share the transit gateway across the organization by using AWS Resource Access Manager (AWS RAM). Create transit gateway VPC attachments for each VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In each OU, create a dedicated networking account that has a single VPC. Establish a VPN connection between the networking account and the other accounts in the OU. Use third-party routing software to route transitive traffic between the VPCs.</p>",
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
      "question_id": "#259",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that is deployed on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling group. The application has unpredictable workloads and frequently scales out and in. The company’s development team wants to analyze application logs to find ways to improve the application's performance. However, the logs are no longer available after instances scale in.<br><br>Which solution will give the development team the ability to view the application logs after a scale-in event?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Log ứng dụng trên EC2 trong Auto Scaling group mất khi instance scale in.</li><li>Cần xem lại application logs sau scale-in.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Unified CloudWatch agent đẩy application logs lên CloudWatch Logs liên tục, nên log tồn tại độc lập với vòng đời instance.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB access logs là log request, không phải application logs.</li><li><strong>B</strong>: ✅ Đúng — CloudWatch agent publish log lên CloudWatch Logs.</li><li><strong>C</strong>: ❌ Sai — step scaling không liên quan tới lưu log.</li><li><strong>D</strong>: ❌ Sai — X-Ray là tracing, không thay thế application logs.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch agent</li><li>CloudWatch Logs</li><li>Scale-in</li><li>Application logs</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Log mất khi instance bị terminate → đẩy log ra CloudWatch Logs.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#259",
          "answers": [
            {
              "choice": "<p>A. Enable access logs for the ALB. Store the logs in an Amazon S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the EC2 instances to publish logs to Amazon CloudWatch Logs by using the unified CloudWatch agent.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the Auto Scaling group to use a step scaling policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Instrument the application with AWS X-Ray tracing.</p>",
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
      "question_id": "#258",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application in an on-premises data center. The application gives users the ability to upload media files. The files persist in a file server. The web application has many users. The application server is overutilized, which causes data uploads to fail occasionally. The company frequently adds new storage to the file server. The company wants to resolve these challenges by migrating the application to AWS.<br><br>Users from across the United States and Canada access the application. Only authenticated users should have the ability to access the application to upload files. The company will consider a solution that refactors the application, and the company needs to accelerate application development.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng upload media, quá tải server, storage liên tục thêm.</li><li>Có thể refactor, cần xác thực người dùng, tăng tốc phát triển, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amplify Hosting + CloudFront phục vụ website tĩnh, S3 lưu file không giới hạn, Cognito xác thực. Hoàn toàn serverless/managed, không quản lý EC2.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — vẫn quản lý EC2, ASG, ALB nên overhead cao.</li><li><strong>B</strong>: ❌ Sai — IAM Identity Center dành cho workforce, không phải end user ứng dụng; vẫn dùng EC2.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — AppSync + Lambda resolver phức tạp và tự xây nhiều hơn Amplify.</li><li><strong>D</strong>: ✅ Đúng — Amplify, S3, Cognito: serverless, phát triển nhanh nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Amplify</li><li>Cognito</li><li>Refactor, accelerate development</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Refactor + web app + authenticated users + ít vận hành → Amplify + S3 + Cognito.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#258",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Migration Service to migrate the application server to Amazon EC2 instances. Create an Auto Scaling group for the EC2 instances. Use an Application Load Balancer to distribute the requests. Modify the application to use Amazon S3 to persist the files. Use Amazon Cognito to authenticate users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Application Migration Service to migrate the application server to Amazon EC2 instances. Create an Auto Scaling group for the EC2 instances. Use an Application Load Balancer to distribute the requests. Set up AWS IAM Identity Center (AWS Single Sign-On) to give users the ability to sign in to the application. Modify the application to use Amazon S3 to persist the files.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a static website for uploads of media files. Store the static assets in Amazon S3. Use AWS AppSync to create an API. Use AWS Lambda resolvers to upload the media files to Amazon S3. Use Amazon Cognito to authenticate users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Amplify to create a static website for uploads of media files. Use Amplify Hosting to serve the website through Amazon CloudFront. Use Amazon S3 to store the uploaded media files. Use Amazon Cognito to authenticate users.</p>",
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
      "question_id": "#211",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate to AWS. The company is running thousands of VMs in a VMware ESXi environment. The company has no configuration management database and has little knowledge about the utilization of the VMware portfolio.<br><br>A solutions architect must provide the company with an accurate inventory so that the company can plan for a cost-effective migration.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng nghìn VM VMware ESXi, chưa có CMDB, thiếu thông tin utilization.</li><li>Cần inventory chính xác để lên kế hoạch migrate tiết kiệm.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Migration Evaluator agentless collector</strong> triển khai một lần trên hypervisor để thu thập inventory và utilization của mọi VM, không cần cài agent từng máy; kết quả đưa vào <strong>AWS Migration Hub</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải deploy agent lên từng VM qua Patch Manager, tốn công; loại server utilization cao là sai logic.</li><li><strong>B</strong>: ❌ Sai — export thủ công CSV và kiểm tra từng server; AWS SMS đã cũ.</li><li><strong>C</strong>: ✅ Đúng — agentless collector, ít vận hành.</li><li><strong>D</strong>: ❌ Sai — Application Migration Service agent dùng để replicate, không phải assessment; Redshift/QuickSight dư thừa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Migration Evaluator</li><li>agentless collector</li><li>Migration Hub</li><li>inventory</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp đánh giá inventory/utilization VMware ít công sức → nghĩ ngay đến <strong>Migration Evaluator agentless collector</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#211",
          "answers": [
            {
              "choice": "<p>A. Use AWS Systems Manager Patch Manager to deploy Migration Evaluator to each VM. Review the collected data in Amazon QuickSight. Identify servers that have high utilization. Remove the servers that have high utilization from the migration list. Import the data to AWS Migration Hub.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the VMware portfolio to a .csv file. Check the disk utilization for each server. Remove servers that have high utilization. Export the data to AWS Application Migration Service. Use AWS Server Migration Service (AWS SMS) to migrate the remaining servers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the Migration Evaluator agentless collector to the ESXi hypervisor. Review the collected data in Migration Evaluator. Identify inactive servers. Remove the inactive servers from the migration list. Import the data to AWS Migration Hub.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the AWS Application Migration Service Agent to each VM. When the data is collected, use Amazon Redshift to import and analyze the data. Use Amazon QuickSight for data visualization.</p>",
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
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. The company needs a list of all its Amazon EC2 instances that have underutilized CPU or memory usage. The company also needs recommendations for how to downsize these underutilized instances.<br><br>Which solution will meet these requirements with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Danh sách EC2 underutilized (CPU/memory) trên nhiều account Organizations, kèm gợi ý downsize.</li><li>Ưu tiên: LEAST effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cài <strong>CloudWatch agent</strong> (qua Systems Manager) để có memory metric, rồi dùng <strong>Cost Explorer resource optimization recommendations</strong> ở management account xem được toàn organization.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — công cụ Marketplace và script tự viết tốn công.</li><li><strong>B</strong>: ✅ Đúng — management account xem recommendation cho cả organization.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải xem từng account, tốn công hơn.</li><li><strong>D</strong>: ❌ Sai — Lambda, S3, Athena tự xây, nhiều công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cost Explorer resource optimization</li><li>CloudWatch agent (memory metric)</li><li>management account</li><li>underutilized</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp gợi ý rightsizing EC2 toàn Organizations → <strong>Cost Explorer ở management account</strong> (hoặc Compute Optimizer).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>A. Install a CPU and memory monitoring tool from AWS Marketplace on all the EC2 instances. Store the findings in Amazon S3. Implement a Python script to identify underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in the organization’s management account. Use the recommendations to downsize underutilized instances in all accounts of the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in each account of the organization. Use the recommendations to downsize underutilized instances in all accounts of the organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Create an AWS Lambda function to extract CPU and memory usage from all the EC2 instances. Store the findings as files in Amazon S3. Use Amazon Athena to find underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.</p>",
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
      "question_id": "#169",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a critical stateful web application on two Linux Amazon EC2 instances behind an Application Load Balancer (ALB) with an Amazon RDS for MySQL database. The company hosts the DNS records for the application in Amazon Route 53. A solutions architect must recommend a solution to improve the resiliency of the application.<br><br>The solution must meet the following objectives:<br><br>• Application tier: RPO of 2 minutes. RTO of 30 minutes<br>• Database tier: RPO of 5 minutes. RTO of 30 minutes<br><br>The company does not want to make significant changes to the existing application architecture. The company must ensure optimal latency after a failover.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App stateful 2 EC2 + ALB + RDS MySQL, cần DR sang Region khác.</li><li>Requirement: RPO app 2 phút, DB 5 phút, RTO 30 phút, ít thay đổi kiến trúc, latency tối ưu sau failover.</li><li>Ưu tiên: RPO thấp, failover nhanh.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Elastic Disaster Recovery</strong> replicate liên tục cho EC2 (RPO tính bằng giây), <strong>cross-Region read replica</strong> cho RDS đạt RPO thấp, <strong>Global Accelerator</strong> giúp failover nhanh và tối ưu latency.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Elastic DR + read replica + Global Accelerator, đáp ứng mọi RPO/RTO.</li><li><strong>B</strong>: ❌ Sai — snapshot và backup định kỳ không đạt RPO 2 và 5 phút.</li><li><strong>C</strong>: ❌ Sai — AWS Backup replication không đạt RPO; CloudFront không phải giải pháp failover.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — DLM snapshot không đạt RPO 2 phút và thiếu bước cập nhật DNS.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Elastic Disaster Recovery, cross-Region read replica, Global Accelerator, RPO/RTO, continuous replication</p><p><strong>🧠 MẸO THI</strong></p><p>\"RPO tính bằng phút cho EC2 → Elastic Disaster Recovery; DB → cross-Region read replica.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#169",
          "answers": [
            {
              "choice": "<p>A. Configure the EC2 instances to use AWS Elastic Disaster Recovery. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Configure RDS automated backups. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a backup plan in AWS Backup for the EC2 instances and RDS DB instance. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Configure an Amazon CloudFront distribution in front of the ALB. Update DNS records to point to CloudFront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs.</p>",
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
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS Organizations allows developers to experiment on AWS. As part of the landing zone that the company has deployed, developers use their company email address to request an account. The company wants to ensure that developers are not launching costly services or running services unnecessarily. The company must give developers a fixed monthly budget to limit their AWS costs.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giới hạn chi phí sandbox account của developer theo ngân sách cố định hàng tháng.</li><li>Requirement chính: chặn dịch vụ đắt và dừng khi vượt ngân sách.</li><li>Ưu tiên: kiểm soát chi phí tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Budgets</strong> tạo budget cho từng account; <strong>SCP</strong> deny dịch vụ đắt; khi vượt ngưỡng, Budgets action gửi SNS và kích hoạt <strong>Lambda</strong> để dừng/terminate tài nguyên.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP không thể đặt usage limit theo tiền.</li><li><strong>B</strong>: ✅ Đúng — budget cố định cho mỗi account.</li><li><strong>C</strong>: ✅ Đúng — SCP deny dịch vụ đắt, áp dụng cho cả account.</li><li><strong>D</strong>: ❌ Sai — IAM policy không áp dụng ở cấp account cho mọi principal và không đồng bộ khi account tạo mới.</li><li><strong>E</strong>: ❌ Sai — Budgets action không thể terminate mọi dịch vụ trực tiếp.</li><li><strong>F</strong>: ✅ Đúng — SNS + Lambda để terminate khi vượt ngân sách.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Budgets, SCP deny, SNS + Lambda, sandbox account.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn chi phí account\" → Budgets + SCP + automation Lambda.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>A. Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Budgets to create a fixed monthly budget for each developer’s account as part of the account creation process.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP to deny access to costly services and components. Apply the SCP to the developer accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy to deny access to costly services and components. Apply the IAM policy to the developer accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Budgets alert action to terminate services when the budgeted amount is reached. Configure the action to terminate all services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services.</p>",
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
      "question_id": "#164",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a compute workload by using Amazon EC2 Spot Instances that are in an Auto Scaling group. The launch template uses two placement groups and a single instance type.<br><br>Recently, a monitoring system reported Auto Scaling instance launch failures that correlated with longer wait times for system users. The company needs to improve the overall reliability of the workload.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Spot Auto Scaling group dùng một instance type và hai placement groups, gặp lỗi launch.</li><li>Requirement: tăng độ tin cậy.</li><li>Ưu tiên: đa dạng hóa capacity pools của Spot.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lỗi launch Spot thường do thiếu capacity cho một instance type. <strong>Attribute-based instance type selection</strong> trong launch template cho phép ASG chọn nhiều instance type phù hợp, tăng khả năng có capacity.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — launch configuration không hỗ trợ attribute-based instance type selection và đã bị deprecated.</li><li><strong>B</strong>: ✅ Đúng — launch template version mới với attribute-based selection, đa dạng instance types.</li><li><strong>C</strong>: ❌ Sai — thêm placement groups không giải quyết thiếu capacity của một instance type.</li><li><strong>D</strong>: ❌ Sai — instance type lớn hơn vẫn là một pool đơn lẻ, thậm chí khó có capacity hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Spot Instances, attribute-based instance type selection, launch template, capacity pools, diversification</p><p><strong>🧠 MẸO THI</strong></p><p>\"Spot launch failure → đa dạng instance types (attribute-based selection) trong launch template.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#164",
          "answers": [
            {
              "choice": "<p>A. Replace the launch template with a launch configuration to use an Auto Scaling group that uses attribute-based instance type selection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new launch template version that uses attribute-based instance type selection. Configure the Auto Scaling group to use the new launch template version.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the launch template Auto Scaling group to increase the number of placement groups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the launch template to use a larger instance type.</p>",
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
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment.<br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dùng Transit Gateway nối VPC của 50 account và tự động tạo VPC + attachment khi có account mới.</li><li>Cần chia sẻ TGW và tự động hoá triển khai.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS RAM</strong> chia sẻ transit gateway với các member account; <strong>CloudFormation StackSets</strong> tự động tạo VPC và VPC attachment trong account mới, trỏ tới TGW ID.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — RAM là cách chia sẻ TGW.</li><li><strong>B</strong>: ❌ Sai — SCP chỉ giới hạn quyền, không chia sẻ resource.</li><li><strong>C</strong>: ✅ Đúng — StackSets tạo VPC và VPC attachment tự động.</li><li><strong>D</strong>: ❌ Sai — peering attachment dùng nối TGW với TGW khác, không phải gắn VPC.</li><li><strong>E</strong>: ❌ Sai — Service Catalog không dùng để share TGW.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway</li><li>AWS RAM</li><li>StackSets</li><li>VPC attachment</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"share TGW giữa nhiều account\" → nghĩ ngay đến <strong>AWS RAM</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. From the management account, share the transit gateway with member accounts by using AWS Resource Access Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the management account, share the transit gateway with member accounts by using an AWS Organizations SCP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the management account by using the transit gateway ID.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the management account by using a transit gateway service-linked role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. From the management account, share the transit gateway with member accounts by using AWS Service Catalog.</p>",
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
      "question_id": "#194",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on AWS. The application reads and writes objects that are stored in a single Amazon S3 bucket. The company must modify the application to deploy the application in two AWS Regions.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App đọc/ghi một S3 bucket, cần deploy ở hai Region.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bucket thứ hai ở Region khác, bidirectional CRR giữ đồng bộ, Multi-Region Access Point cho app một endpoint toàn cục tự route. App ghi/đọc ở cả hai Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudFront và Global Accelerator không phải cách ghi/đọc S3 đa Region đồng bộ.</li><li><strong>B</strong>: ✅ Đúng — Two-way CRR + Multi-Region Access Point.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — CRR một chiều, app ghi ở Region 2 không đồng bộ ngược.</li><li><strong>D</strong>: ❌ Sai — Gateway endpoint chỉ là kết nối trong VPC, không tạo bucket đa Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Multi-Region Access Point</li><li>Bidirectional CRR</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"S3 active-active 2 Region → CRR hai chiều + Multi-Region Access Point.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#194",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon CloudFront distribution with the S3 bucket as an origin. Deploy the application to a second Region Modify the application to use the CloudFront distribution. Use AWS Global Accelerator to access the data in the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new S3 bucket in a second Region. Set up bidirectional S3 Cross-Region Replication (CRR) between the original S3 bucket and the new S3 bucket. Configure an S3 Multi-Region Access Point that uses both S3 buckets. Deploy a modified application to both Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new S3 bucket in a second Region Deploy the application in the second Region. Configure the application to use the new S3 bucket. Set up S3 Cross-Region Replication (CRR) from the original S3 bucket to the new S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an S3 gateway endpoint with the S3 bucket as an origin. Deploy the application to a second Region. Modify the application to use the new S3 gateway endpoint. Use S3 Intelligent-Tiering on the S3 bucket.</p>",
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
      "question_id": "#155",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global media company is planning a multi-Region deployment of an application. Amazon DynamoDB global tables will back the deployment to keep the user experience consistent across the two continents where users are concentrated. Each deployment will have a public Application Load Balancer (ALB). The company manages public DNS internally. The company wants to make the application available through an apex domain.<br><br>Which solution will meet these requirements with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Multi-Region, mỗi Region có public ALB, DNS public do công ty tự quản lý, cần dùng apex domain.</li><li>Requirement: LEAST effort.</li><li>Ưu tiên: ít công sức, vẫn route theo Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Apex domain không thể dùng CNAME, và DNS đang quản lý nội bộ. <strong>AWS Global Accelerator</strong> cung cấp <strong>static anycast IP</strong>, có endpoint groups cho nhiều Region nên chỉ cần tạo A record trỏ vào IP tĩnh trong DNS hiện tại, không cần migrate DNS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CNAME không dùng được ở apex domain và phải migrate DNS sang Route 53.</li><li><strong>B</strong>: ❌ Sai — vẫn dùng CNAME ở apex; thêm NLB và migrate DNS, nhiều công sức hơn.</li><li><strong>C</strong>: ✅ Đúng — static IP, multiple endpoint groups, không cần đổi DNS provider.</li><li><strong>D</strong>: ❌ Sai — API Gateway + Lambda round robin phức tạp, thêm single Region dependency và vẫn dùng CNAME ở apex.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>apex domain, CNAME không dùng được, Global Accelerator, static anycast IP, endpoint groups</p><p><strong>🧠 MẸO THI</strong></p><p>\"Apex domain + multi-Region + cần IP tĩnh → nghĩ ngay đến Global Accelerator.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. Migrate public DNS to Amazon Route 53. Create CNAME records for the apex domain to point to the ALB. Use a geolocation routing policy to route traffic based on user location.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Place a Network Load Balancer (NLB) in front of the ALMigrate public DNS to Amazon Route 53. Create a CNAME record for the apex domain to point to the NLB’s static IP address. Use a geolocation routing policy to route traffic based on user location.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Global Accelerator accelerator with multiple endpoint groups that target endpoints in appropriate AWS Regions. Use the accelerator’s static IP address to create a record in public DNS for the apex domain.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.</p>",
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
      "question_id": "#147",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company receives a regular data feed from its credit card servicing partner. Approximately 5,000 records are sent every 15 minutes in plaintext, delivered over HTTPS directly into an Amazon S3 bucket with server-side encryption. This feed contains sensitive credit card primary account number (PAN) data. The company needs to automatically mask the PAN before sending the data to another S3 bucket for additional internal processing. The company also needs to remove and merge specific fields, and then transform the record into JSON format. Additionally, extra feeds are likely to be added in the future, so any design needs to be easily expandable.<br><br>Which solutions will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: mask PAN, xóa/gộp field, chuyển sang JSON cho feed định kỳ.</li><li>Requirement chính: tự động, dễ mở rộng thêm feed.</li><li>Ưu tiên: ETL managed, serverless.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Glue</strong> (crawler + ETL job) là dịch vụ ETL serverless xử lý biến đổi dữ liệu và xuất JSON. Lambda chỉ cần trigger Glue job khi file đến; thêm feed mới chỉ cần thêm crawler/job.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chuỗi nhiều Lambda + SQS phức tạp, khó mở rộng.</li><li><strong>B</strong>: ❌ Sai — Fargate tự xây logic xử lý, phức tạp.</li><li><strong>C</strong>: ✅ Đúng — Glue crawler + ETL job, Lambda trigger.</li><li><strong>D</strong>: ❌ Sai — Athena không dùng để khởi chạy EMR job; EMR nặng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Glue ETL</li><li>Glue crawler</li><li>Data masking</li><li>Serverless ETL</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Transform dữ liệu S3 theo lô, dễ mở rộng → nghĩ ngay đến AWS Glue.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#147",
          "answers": [
            {
              "choice": "<p>A. Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Invoke another Lambda function when new messages arrive in the SQS queue to process the records, writing the results to a temporary location in Amazon S3. Invoke a final Lambda function once the SQS queue is empty to transform the records into JSON format and send the results to another S3 bucket for internal processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Configure an AWS Fargate container application to automatically scale to a single instance when the SQS queue contains messages. Have the application process each record, and transform the record into JSON format. When the queue is empty, send the results to another S3 bucket for internal processing and scale down the AWS Fargate instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Glue crawler and custom classifier based on the data feed formats and build a table definition to match. Invoke an AWS Lambda function on file delivery to start an AWS Glue ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, have the ETL job send the results to another S3 bucket for internal processing.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Glue crawler and custom classifier based upon the data feed formats and build a table definition to match. Perform an Amazon Athena query on file delivery to start an Amazon EMR ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, send the results to another S3 bucket for internal processing and scale down the EMR cluster.</p>",
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
      "question_id": "#150",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a latency-sensitive trading platform that uses Amazon DynamoDB as a storage backend. The company configured the DynamoDB table to use on-demand capacity mode. A solutions architect needs to design a solution to improve the performance of the trading platform. The new solution must ensure high availability for the trading platform.<br><br>Which solution will meet these requirements with the LEAST latency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: nền tảng trading nhạy latency dùng DynamoDB.</li><li>Requirement chính: <strong>LEAST latency</strong> và <strong>high availability</strong>.</li><li>Ưu tiên: cache microsecond cho đọc, cluster nhiều node.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DAX</strong> cache đọc ở mức microsecond; cluster tối thiểu <strong>3 node</strong> (nhiều AZ) cho HA. Đọc qua DAX, ghi trực tiếp vào DynamoDB để tránh thêm độ trễ ghi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — chỉ 2 node và ghi qua DAX thêm hop.</li><li><strong>B</strong>: ✅ Đúng — 3 node, đọc qua DAX, ghi thẳng DynamoDB.</li><li><strong>C</strong>: ❌ Sai — đọc trực tiếp DynamoDB mất lợi ích cache.</li><li><strong>D</strong>: ❌ Sai — single-node không HA.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DAX</li><li>3-node cluster</li><li>Read caching</li><li>Write-through</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"DynamoDB cần latency microsecond + HA → nghĩ ngay đến DAX 3 node, đọc qua DAX.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#150",
          "answers": [
            {
              "choice": "<p>A. Create a two-node DynamoDB Accelerator (DAX) cluster. Configure an application to read and write data by using DAX.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data directly from the DynamoDB table and to write data by using DAX.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a single-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.</p>",
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
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning a one-time migration of an on-premises MySQL database to Amazon Aurora MySQL in the us-east-1 Region. The company's current internet connection has limited bandwidth. The on-premises MySQL database is 60 TB in size. The company estimates that it will take a month to transfer the data to AWS over the current internet connection. The company needs a migration solution that will migrate the database more quickly.<br><br>Which solution will migrate the database in the LEAST amount of time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate một lần MySQL 60 TB on-premises sang Aurora MySQL, băng thông internet hạn chế.</li><li>Requirement: thời gian migrate NGẮN NHẤT.</li><li>Ưu tiên: tốc độ truyền dữ liệu lớn offline.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Snowball Edge</strong> vận chuyển 60 TB offline nhanh hơn Direct Connect (cần thời gian provisioning) hay internet. Dữ liệu vào S3 rồi dùng <strong>AWS DMS</strong> để load vào Aurora MySQL.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Direct Connect 1 Gbps mất nhiều tuần để thiết lập và truyền 60 TB cũng lâu.</li><li><strong>B</strong>: ❌ Sai — DataSync qua internet hạn chế vẫn chậm; Application Migration Service dùng cho server, không phải migrate database sang Aurora.</li><li><strong>C</strong>: ✅ Đúng — Snowball Edge + S3 + DMS từ S3 sang Aurora MySQL.</li><li><strong>D</strong>: ❌ Sai — Application Migration Service không migrate dữ liệu từ S3 vào Aurora; Snowball (không Edge) và S3 Adapter là cách cũ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>60 TB, limited bandwidth</li><li>Snowball Edge</li><li>DMS từ S3</li><li>one-time migration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp dữ liệu hàng chục TB + băng thông hạn chế → nghĩ ngay đến <strong>Snowball Edge</strong>; DB sang Aurora → <strong>DMS</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#203",
          "answers": [
            {
              "choice": "<p>A. Request a 1 Gbps AWS Direct Connect connection between the on-premises data center and AWS. Use AWS Database Migration Service (AWS DMS) to migrate the on-premises MySQL database to Aurora MySQL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync with the current internet connection to accelerate the data transfer between the on-premises data center and AWS. Use AWS Application Migration Service to migrate the on-premises MySQL database to Aurora MySQL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order an AWS Snowball Edge device. Load the data into an Amazon S3 bucket by using the S3 interface. Use AWS Database Migration Service (AWS DMS) to migrate the data from Amazon S3 to Aurora MySQL.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order an AWS Snowball device. Load the data into an Amazon S3 bucket by using the S3 Adapter for Snowball. Use AWS Application Migration Service to migrate the data from Amazon S3 to Aurora MySQL.</p>",
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
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company’s business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: IaC triển khai multi-Region, multi-account.</li><li>Requirement chính: deploy một template cho nhiều account/Region.</li><li>Ưu tiên: quản lý tập trung, ít công sức vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS CloudFormation StackSets kết hợp AWS Organizations triển khai stack đồng loạt đến nhiều account và Region từ một nơi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — IAM policy không thực hiện deploy đa account; phải làm thủ công từng Region/account.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Control Tower là governance cho landing zone, không phải cơ chế deploy template chính.</li><li><strong>C</strong>: ✅ Đúng — StackSets + Organizations.</li><li><strong>D</strong>: ❌ Sai — nested stacks chỉ tái sử dụng template trong một Region/account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFormation StackSets</li><li>Multi-account multi-Region</li><li>AWS Organizations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp IaC multi-account + multi-Region → nghĩ ngay đến CloudFormation StackSets.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.</p>",
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
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently completed the migration from an on-premises data center to the AWS Cloud by using a replatforming strategy. One of the migrated servers is running a legacy Simple Mail Transfer Protocol (SMTP) service that a critical application relies upon. The application sends outbound email messages to the company’s customers. The legacy SMTP server does not support TLS encryption and uses TCP port 25. The application can use SMTP only.<br><br>The company decides to use Amazon Simple Email Service (Amazon SES) and to decommission the legacy SMTP server. The company has created and validated the SES domain. The company has lifted the SES limits.<br><br>What should the company do to modify the application to send email messages from Amazon SES?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chuyển ứng dụng chỉ nói SMTP (port 25, không TLS) sang Amazon SES.</li><li>Requirement chính: app chỉ dùng được SMTP, không đổi sang API/SDK.</li><li>Ưu tiên: tương thích, bảo mật xác thực với SES.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon SES SMTP interface hỗ trợ STARTTLS và yêu cầu SMTP credentials riêng (suy ra từ IAM user); app dùng SMTP chuẩn nên chỉ cần đổi endpoint và credentials.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SMTP không dùng IAM role của EC2 để xác thực; phải dùng SMTP credentials. Ngoài ra TLS Wrapper khó với app không hỗ trợ TLS.</li><li><strong>B</strong>: ✅ Đúng — STARTTLS + Amazon SES SMTP credentials.</li><li><strong>C</strong>: ❌ Sai — app chỉ dùng SMTP, không dùng SES API; IAM role không phải \"service role for SES\".</li><li><strong>D</strong>: ❌ Sai — dùng AWS SDK nghĩa là sửa code, trái với \"SMTP only\".</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SES SMTP interface</li><li>STARTTLS</li><li>SES SMTP credentials</li><li>SMTP only</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp app chỉ SMTP + SES → nghĩ ngay đến SMTP endpoint, STARTTLS và SMTP credentials.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the IAM role to an Amazon EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials. Use the credentials to authenticate with Amazon SES.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the application to use the SES API to send email messages. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Use the IAM role as a service role for Amazon SES.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the application to use AWS SDKs to send email messages. Create an IAM user for Amazon SES. Generate API access keys. Use the access keys to authenticate with Amazon SES.</p>",
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
      "question_id": "#40",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting an image-processing service on AWS in a VPC. The VPC extends across two Availability Zones. Each Availability Zone contains one public subnet and one private subnet.<br><br>The service runs on Amazon EC2 instances in the private subnets. An Application Load Balancer in the public subnets is in front of the service. The service needs to communicate with the internet and does so through two NAT gateways. The service uses Amazon S3 for image storage. The EC2 instances retrieve approximately 1 ТВ of data from an S3 bucket each day.<br><br>The company has promoted the service as highly secure. A solutions architect must reduce cloud expenditures as much as possible without compromising the service’s security posture or increasing the time spent on ongoing operations.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm chi phí khi EC2 private subnet kéo ~1 TB/ngày từ S3 qua NAT gateway, không giảm bảo mật và không tăng công vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 gateway VPC endpoint</strong> miễn phí, traffic S3 đi qua mạng AWS không qua NAT gateway, loại bỏ phí xử lý dữ liệu NAT; vẫn private và bảo mật.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — NAT instance tăng công vận hành.</li><li><strong>B</strong>: ❌ Sai — đưa EC2 ra public subnet làm giảm bảo mật.</li><li><strong>C</strong>: ✅ Đúng — gateway endpoint không tốn phí, giảm NAT data processing.</li><li><strong>D</strong>: ❌ Sai — đổi sang EFS tăng chi phí và công sức migrate, không giải quyết NAT.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 gateway endpoint</li><li>NAT gateway data processing</li><li>Private subnet</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"EC2 private tải nhiều từ S3/DynamoDB, giảm phí NAT\" → nghĩ ngay đến <strong>gateway VPC endpoint</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. Replace the NAT gateways with NAT instances. In the VPC route table, create a route from the private subnets to the NAT instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the EC2 instances to the public subnets. Remove the NAT gateways.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an S3 gateway VPC endpoint in the VPC. Attach an endpoint policy to the endpoint to allow the required actions on the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach an Amazon Elastic File System (Amazon EFS) volume to the EC2 instances. Host the images on the EFS volume.</p>",
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
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts.<br>A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks. Trusted access has been enabled in Organizations.<br>What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Deploy SNS topic bằng StackSets tới mọi member account, đã bật trusted access.</li><li>Cần cách deploy đúng và tự động cho cả account mới.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>stack set</strong> ở <strong>management account</strong> với <strong>service-managed permissions</strong>, deploy tới organization và bật <strong>automatic deployment</strong> để account mới cũng tự nhận stack.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tạo stack set trong member account, và drift detection không phải để triển khai.</li><li><strong>B</strong>: ❌ Sai — tạo stack (không phải stack set) và self-service permissions.</li><li><strong>C</strong>: ✅ Đúng — management account, service-managed, automatic deployment.</li><li><strong>D</strong>: ❌ Sai — tạo stack thay vì stack set, drift detection không deploy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>StackSets</li><li>Service-managed permissions</li><li>Automatic deployment</li><li>Management account</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"deploy toàn Organization kể cả account mới\" → nghĩ ngay đến <strong>StackSets service-managed + automatic deployment</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create stacks in the Organizations member accounts. Use self-service permissions. Set deployment options to deploy to an organization. Enable the CloudFormation StackSets automatic deployment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a stack set in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create stacks in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.</p>",
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
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has created an OU in AWS Organizations for each of its engineering teams. Each OU owns multiple AWS accounts. The organization has hundreds of AWS accounts.<br>A solutions architect must design a solution so that each OU can view a breakdown of usage costs across its AWS accounts.<br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mỗi OU xem được breakdown chi phí theo account.</li><li>Hàng trăm account, cần giải pháp tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CUR</strong> tạo ở <strong>management account</strong> gồm chi phí của mọi account trong Organization. Dùng <strong>QuickSight</strong> để trực quan hoá và lọc theo OU/account cho từng team.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — RAM không dùng để tạo CUR.</li><li><strong>B</strong>: ✅ Đúng — CUR từ management account tổng hợp tất cả account, QuickSight để xem.</li><li><strong>C</strong>: ❌ Sai — CUR ở từng member account chỉ có cost của account đó, hàng trăm báo cáo rời rạc.</li><li><strong>D</strong>: ❌ Sai — Systems Manager không tạo CUR.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cost and Usage Report</li><li>Management account</li><li>QuickSight</li><li>Consolidated billing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chi phí toàn Organization theo OU/account\" → nghĩ đến <strong>CUR ở management account + QuickSight</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Cost and Usage Report (CUR) for each OU by using AWS Resource Access Manager. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Cost and Usage Report (CUR) in each AWS Organizations member account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Cost and Usage Report (CUR) by using AWS Systems Manager. Allow each team to visualize the CUR through Systems Manager OpsCenter dashboards.</p>",
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
      "question_id": "#170",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect wants to cost-optimize and appropriately size Amazon EC2 instances in a single AWS account. The solutions architect wants to ensure that the instances are optimized based on CPU, memory, and network metrics.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Right-size EC2 dựa trên CPU, memory và network metrics.</li><li>Requirement: có dữ liệu memory vì CloudWatch mặc định không có.</li><li>Ưu tiên: right-sizing chính xác.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Compute Optimizer</strong> phân tích metrics và đưa ra khuyến nghị right-size. Memory không có mặc định nên cần <strong>CloudWatch agent</strong> để thu thập memory metrics cho Compute Optimizer.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Support plan không giúp right-size.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Trusted Advisor chỉ báo low utilization, không đủ phân tích memory/network.</li><li><strong>C</strong>: ✅ Đúng — cần CloudWatch agent để thu memory metrics.</li><li><strong>D</strong>: ✅ Đúng — Compute Optimizer đưa ra khuyến nghị.</li><li><strong>E</strong>: ❌ Sai — Savings Plan là mua cam kết, không phải right-sizing.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Compute Optimizer, CloudWatch agent, memory metrics, right-sizing</p><p><strong>🧠 MẸO THI</strong></p><p>\"Right-size EC2 gồm cả memory → Compute Optimizer + CloudWatch agent.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#170",
          "answers": [
            {
              "choice": "<p>A. Purchase AWS Business Support or AWS Enterprise Support for the account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on AWS Trusted Advisor and review any “Low Utilization Amazon EC2 Instances” recommendations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the Amazon CloudWatch agent and configure memory metric collection on the EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Compute Optimizer in the AWS account to receive findings and optimization recommendations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an EC2 Instance Savings Plan for the AWS Regions, instance families, and operating systems of interest.</p>",
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
      "question_id": "#60",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Canary release cho Lambda đã deploy bằng CloudFormation.</li><li>Requirement chính: chia traffic phần trăm giữa hai version.</li><li>Ưu tiên: giảm rủi ro khi release.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda <strong>alias</strong> hỗ trợ weighted routing giữa hai version qua `routing-config`. Dùng `update-alias` để chuyển dần traffic sang version mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — alias + routing-config để chia traffic.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — stack mới + Route 53 weighted tốn tài nguyên, không phải cách chuẩn cho Lambda.</li><li><strong>C</strong>: ❌ Sai — `update-function-configuration` không có tham số routing-config; chỉ alias có.</li><li><strong>D</strong>: ❌ Sai — OneAtATime là cấu hình cho EC2/on-prem, không phải canary.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda alias, weighted alias, routing-config, canary.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Canary cho Lambda\" → nghĩ ngay đến alias weighted (hoặc CodeDeploy canary).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>A. Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.</p>",
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
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has developed a web application that uses an Amazon API Gateway Regional endpoint and an AWS Lambda function. The consumers of the web application are all close to the AWS Region where the application will be deployed. The Lambda function only queries an Amazon Aurora MySQL database. The solutions architect has configured the database to have three read replicas.<br><br>During testing, the application does not meet performance requirements. Under high load, the application opens a large number of database connections. The solutions architect must improve the application’s performance.<br><br>Which actions should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda mở quá nhiều DB connection tới Aurora MySQL khi tải cao, cần cải thiện hiệu năng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>RDS Proxy</strong> gộp connection (pooling) tới reader endpoint, và khởi tạo connection <strong>bên ngoài handler</strong> để tái sử dụng giữa các lần invoke trong cùng execution environment.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cluster endpoint trỏ writer, không giải quyết vấn đề connection, lại không tận dụng read replica.</li><li><strong>B</strong>: ✅ Đúng — RDS Proxy pool connection tới reader endpoint.</li><li><strong>C</strong>: ❌ Sai — Provisioned Concurrency giảm cold start, không giảm số connection.</li><li><strong>D</strong>: ✅ Đúng — tái sử dụng connection giữa các invocation.</li><li><strong>E</strong>: ❌ Sai — user gần Region, edge-optimized không giúp ích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy</li><li>Connection pooling</li><li>Reader endpoint</li><li>Connection ngoài handler</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda quá nhiều DB connection\" → nghĩ ngay đến <strong>RDS Proxy</strong> và <strong>khởi tạo connection ngoài handler</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Use the cluster endpoint of the Aurora database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Lambda Provisioned Concurrency feature.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the code for opening the database connection in the Lambda function outside of the event handler.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Change the API Gateway endpoint to an edge-optimized endpoint.</p>",
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
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company consists or two separate business units. Each business unit has its own AWS account within a single organization in AWS Organizations. The business units regularly share sensitive documents with each other. To facilitate sharing, the company created an Amazon S3 bucket in each account and configured low-way replication between the S3 buckets. The S3 buckets have millions of objects.<br><br>Recently, a security audit identified that neither S3 bucket has encryption at rest enabled. Company policy requires that all documents must be stored with encryption at rest. The company wants to implement server-side encryption with Amazon S3 managed encryption keys (SSE-S3).<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bật encryption at rest (SSE-S3) cho hai bucket có hàng triệu object, replication hai chiều.</li><li>Requirement chính: MOST operationally efficient.</li><li>Ưu tiên: mã hóa cả object hiện có ở quy mô lớn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bật SSE-S3 cho bucket (mới) và dùng S3 Batch Operations để copy tại chỗ, mã hóa object hiện có ở quy mô lớn, tự động và có báo cáo.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SSE-S3 + S3 Batch Operations copy cho hàng triệu object.</li><li><strong>B</strong>: ❌ Sai — dùng SSE-KMS không cần thiết (yêu cầu là SSE-S3), copy bằng CLI không hiệu quả ở quy mô lớn.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — SSE-S3 đúng nhưng copy bằng CLI cho hàng triệu object rất chậm, kém hiệu quả.</li><li><strong>D</strong>: ❌ Sai — dùng KMS thay vì SSE-S3 như yêu cầu, thêm quản lý khóa/cross-account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SSE-S3</li><li>S3 Batch Operations</li><li>Copy in place</li><li>Millions of objects</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp mã hóa lại hàng triệu object S3 → nghĩ ngay đến S3 Batch Operations.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#91",
          "answers": [
            {
              "choice": "<p>A. Turn on SSE-S3 on both S3 buckets. Use S3 Batch Operations to copy and encrypt the objects in the same location.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Key Management Service (AWS KMS) key in each account. Turn on server-side encryption with AWS KMS keys (SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account. Encrypt the existing objects by using an S3 copy command in the AWS CLI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on SSE-S3 on both S3 buckets. Encrypt the existing objects by using an S3 copy command in the AWS CLI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Key Management Service, (AWS KMS) key in each account. Turn on server-side encryption with AWS KMS keys (SSE-KMS) on each S3 bucket by using the corresponding KMS key in that AWS account. Use S3 Batch Operations to copy the objects into the same location.</p>",
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
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a three-tier web application in an on-premises environment. Due to a recent surge in traffic that resulted in downtime and a significant financial impact, company management has ordered that the application be moved to AWS. The application is written in .NET and has a dependency on a MySQL database. A solutions architect must design a scalable and highly available solution to meet the demand of 200,000 daily users.<br>Which steps should the solutions architect take to design an appropriate solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển ứng dụng .NET 3 tầng với MySQL lên AWS, scalable và highly available cho 200,000 user/ngày.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ALB</strong> + <strong>Auto Scaling group</strong> trên 3 AZ cho web tier, <strong>Aurora MySQL Multi-AZ</strong> cho DB, <strong>Route 53 alias</strong> tới ALB; CloudFormation giúp triển khai lặp lại.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Beanstalk với NLB (L4) không phù hợp web app bằng ALB.</li><li><strong>B</strong>: ✅ Đúng — ALB + ASG 3 AZ + Aurora Multi-AZ, Retain bảo vệ DB.</li><li><strong>C</strong>: ❌ Sai — Beanstalk một environment không span hai Region, quá phức tạp so với yêu cầu.</li><li><strong>D</strong>: ❌ Sai — Spot instance không đảm bảo HA, snapshot policy không đủ cho DB production.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ALB + Auto Scaling</li><li>Aurora Multi-AZ</li><li>Route 53 alias</li><li>Retain deletion policy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"web app HA/scalable với MySQL\" → nghĩ đến <strong>ALB + ASG đa AZ + Aurora</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A. Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MySQL Multi-AZ DB instance. The environment should launch a Network Load Balancer (NLB) in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company’s domain to the NLB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company’s domain to the ALB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two separate Regions with an Application Load Balancer (ALB) in each Region. Create a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a cross-Region read replica. Use Amazon Route 53 with a geoproximity routing policy to route traffic between the two Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon ECS cluster of Spot instances spanning three Availability Zones. The stack should launch an Amazon RDS MySQL DB instance with a Snapshot deletion policy. Use an Amazon Route 53 alias record to route traffic from the company’s domain to the ALB.</p>",
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
      "question_id": "#228",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to containerize a multi-tier web application and move the application from an on-premises data center to AWS. The application includes web. application, and database tiers. The company needs to make the application fault tolerant and scalable. Some frequently accessed data must always be available across application servers. Frontend web servers need session persistence and must scale to meet increases in traffic.<br><br>Which solution will meet these requirements with the LEAST ongoing operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Container hóa ứng dụng 3 tầng, cần fault tolerant, scalable.</li><li>Requirement: dữ liệu dùng chung luôn sẵn sàng giữa các app server, web cần session persistence.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đáp án D chạy trên <strong>Amazon EKS</strong> với managed node groups và Kubernetes Deployments, lưu session trong <strong>Amazon DynamoDB</strong> (managed, scale tốt, bền vững) và dùng <strong>Amazon EFS</strong> làm shared storage mount cho mọi pod, đáp ứng cả hai nhu cầu dữ liệu chung và session.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SQS là hàng đợi, không phù hợp để lưu session persistence.</li><li><strong>B</strong>: ❌ Sai — EBS Multi-Attach chỉ trong một AZ (và io1/io2), không chia sẻ qua nhiều AZ; ECS on EC2 tốn vận hành hơn.</li><li><strong>C</strong>: ❌ Sai — dùng EFS để lưu session là không phù hợp/không tối ưu và ReplicaSets trực tiếp không phải cách chuẩn.</li><li><strong>D</strong>: ✅ Đúng — EKS managed node groups + DynamoDB session + EFS shared.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Session persistence</li><li>DynamoDB session store</li><li>Amazon EFS shared data</li><li>EKS managed node groups</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp session store cần scale/bền + shared file giữa container → nghĩ ngay đến <strong>DynamoDB</strong> (session) và <strong>EFS</strong> (shared data).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#228",
          "answers": [
            {
              "choice": "<p>A. Run the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Use Amazon Elastic File System (Amazon EFS) for data that is frequently accessed between the web and application tiers. Store the frontend web server session data in Amazon Simple Queue Service (Amazon SQS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Run the application on Amazon Elastic Container Service (Amazon ECS) on Amazon EC2. Use Amazon ElastiCache for Redis to cache frontend web server session data. Use Amazon Elastic Block Store (Amazon EBS) with Multi-Attach on EC2 instances that are distributed across multiple Availability Zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run the application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure Amazon EKS to use managed node groups. Use ReplicaSets to run the web servers and applications. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system across all EKS pods to store frontend web server session data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure Amazon EKS to use managed node groups. Run the web servers and application as Kubernetes deployments in the EKS cluster. Store the frontend web server session data in an Amazon DynamoDB table. Create an Amazon Elastic File System (Amazon EFS) volume that all applications will mount at the time of deployment.</p>",
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
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new website that hosts static content. The website will give users the ability to upload and download large files. According to company requirements, all data must be encrypted in transit and at rest. A solutions architect is building the solution by using Amazon S3 and Amazon CloudFront.<br><br>Which combination of steps will meet the encryption requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Website static dùng S3 + CloudFront, upload/download file lớn.</li><li>Requirement: mã hóa in transit và at rest.</li><li>Chọn 3 bước đáp ứng cả hai.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>At rest: bật S3 server-side encryption (A) và bucket policy deny thao tác không mã hóa (C). In transit: CloudFront redirect HTTP sang HTTPS (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 SSE mã hóa dữ liệu at rest.</li><li><strong>B</strong>: ❌ Sai — `aws:SecureTransport` là condition của bucket policy, không đặt trong ACL.</li><li><strong>C</strong>: ✅ Đúng — bucket policy deny unencrypted operations ép tuân thủ mã hóa.</li><li><strong>D</strong>: ❌ Sai — CloudFront không có tùy chọn SSE-KMS at rest cho cache theo cách này.</li><li><strong>E</strong>: ✅ Đúng — redirect HTTP to HTTPS đảm bảo encryption in transit.</li><li><strong>F</strong>: ❌ Sai — presigned URL không có option \"RequireSSL\".</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 SSE</li><li>bucket policy</li><li>aws:SecureTransport</li><li>Viewer protocol policy: redirect HTTP to HTTPS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp encryption at rest S3 → <strong>SSE + bucket policy</strong>; in transit CloudFront → <strong>redirect HTTP to HTTPS</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>A. Turn on S3 server-side encryption for the S3 bucket that the web application uses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a policy attribute of \"aws:SecureTransport\": \"true\" for read and write operations in the S3 ACLs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bucket policy that denies any unencrypted operations in the S3 bucket that the web application uses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure encryption at rest on CloudFront by using server-side encryption with AWS KMS keys (SSE-KMS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure redirection of HTTP requests to HTTPS requests in CloudFront.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use the RequireSSL option in the creation of presigned URLs for the S3 bucket that the web application uses.</p>",
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
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A telecommunications company is running an application on AWS. The company has set up an AWS Direct Connect connection between the company's on-premises data center and AWS. The company deployed the application on Amazon EC2 instances in multiple Availability Zones behind an internal Application Load Balancer (ALB). The company's clients connect from the on-premises network by using HTTPS. The TLS terminates in the ALB. The company has multiple target groups and uses path-based routing to forward requests based on the URL path.<br><br>The company is planning to deploy an on-premises firewall appliance with an allow list that is based on IP address. A solutions architect must develop a solution to allow traffic flow to AWS from the on-premises network so that the clients can continue to access the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Client on-premises qua Direct Connect truy cập internal ALB, path-based routing; firewall on-premises dùng allow list theo IP.</li><li>Requirement: có IP tĩnh để allow list nhưng vẫn giữ path-based routing/TLS termination tại ALB.</li><li>Ưu tiên: static IP, giữ kiến trúc hiện tại.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ALB không có static IP. Đặt <strong>NLB</strong> (static IP mỗi AZ) phía trước, dùng <strong>ALB-type target group</strong> trỏ vào ALB hiện có nên vẫn giữ path-based routing và TLS termination.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB không hỗ trợ gán static IP.</li><li><strong>B</strong>: ✅ Đúng — NLB static IP + ALB làm target, giữ nguyên routing ở ALB.</li><li><strong>C</strong>: ❌ Sai — xóa ALB mất path-based routing và TLS termination layer 7; NLB không route theo URL path.</li><li><strong>D</strong>: ❌ Sai — GWLB dùng cho virtual appliance, không phải load balancing ứng dụng web.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>NLB static IP, ALB-type target group, path-based routing, allow list, Direct Connect</p><p><strong>🧠 MẸO THI</strong></p><p>\"Cần static IP nhưng giữ ALB features → NLB phía trước ALB (ALB-type target group).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#161",
          "answers": [
            {
              "choice": "<p>A. Configure the existing ALB to use static IP addresses. Assign IP addresses in multiple Availability Zones to the ALB. Add the ALB IP addresses to the firewall appliance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Network Load Balancer (NLB). Associate the NLB with one static IP addresses in multiple Availability Zones. Create an ALB-type target group for the NLB and add the existing ALAdd the NLB IP addresses to the firewall appliance. Update the clients to connect to the NLB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB). Associate the LNB with one static IP addresses in multiple Availability Zones. Add the existing target groups to the NLB. Update the clients to connect to the NLB. Delete the ALB Add the NLB IP addresses to the firewall appliance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Gateway Load Balancer (GWLB). Assign static IP addresses to the GWLB in multiple Availability Zones. Create an ALB-type target group for the GWLB and add the existing ALB. Add the GWLB IP addresses to the firewall appliance. Update the clients to connect to the GWLB.</p>",
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
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its workloads from on premises to AWS. The workloads run on Linux and Windows. The company has a large on-premises infrastructure that consists of physical machines and VMs that host numerous applications.<br><br>The company must capture details about the system configuration, system performance, running processes, and network connections of its on-premises workloads. The company also must divide the on-premises applications into groups for AWS migrations. The company needs recommendations for Amazon EC2 instance types so that the company can run its workloads on AWS in the most cost-effective manner.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập cấu hình, hiệu năng, process, network connection của server on-prem, nhóm thành application và gợi ý EC2 instance type tiết kiệm nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Application Discovery Agent</strong> thu thập dữ liệu chi tiết (gồm process và network). <strong>Migration Hub</strong> nhóm server thành application và đưa ra recommendation về instance type kèm chi phí.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Discovery Agent thu thập đủ loại dữ liệu cần thiết.</li><li><strong>B</strong>: ❌ Sai — SSM Agent không phải công cụ discovery cho mục đích này.</li><li><strong>C</strong>: ❌ Sai — Application Manager không dùng để nhóm server cho migration.</li><li><strong>D</strong>: ✅ Đúng — Migration Hub nhóm server thành application.</li><li><strong>E</strong>: ✅ Đúng — Migration Hub đưa ra recommendation EC2 và cost.</li><li><strong>F</strong>: ❌ Sai — Trusted Advisor không nhận import dữ liệu server.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Discovery Agent</li><li>Migration Hub</li><li>Instance recommendations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"discover server on-prem + group + right-size\" → nghĩ đến <strong>Discovery Agent + Migration Hub</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Assess the existing applications by installing AWS Application Discovery Agent on the physical machines and VMs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Assess the existing applications by installing AWS Systems Manager Agent on the physical machines and VMs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Group servers into applications for migration by using AWS Systems Manager Application Manager.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Group servers into applications for migration by using AWS Migration Hub.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Generate recommended instance types and associated costs by using AWS Migration Hub.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Import data about server sizes into AWS Trusted Advisor. Follow the recommendations for cost optimization.</p>",
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
      "question_id": "#237",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has more than 10,000 sensors that send data to an on-premises Apache Kafka server by using the Message Queuing Telemetry Transport (MQTT) protocol. The on-premises Kafka server transforms the data and then stores the results as objects in an Amazon S3 bucket.<br><br>Recently, the Kafka server crashed. The company lost sensor data while the server was being restored. A solutions architect must create a new design on AWS that is highly available and scalable to prevent a similar occurrence.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hơn 10.000 sensor gửi dữ liệu MQTT, Kafka on-premises bị crash gây mất dữ liệu.</li><li>Requirement: highly available, scalable.</li><li>Ưu tiên: managed/serverless, vận hành thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> hỗ trợ MQTT và scale tự động, kết nối <strong>Kinesis Data Firehose</strong> để ghi vào S3, dùng <strong>Lambda</strong> để transform. Toàn bộ là managed, HA.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tự vận hành Kafka trên EC2, nhiều quản lý.</li><li><strong>B</strong>: ❌ Sai — MSK không nhận MQTT trực tiếp, NLB trỏ vào broker không phù hợp.</li><li><strong>C</strong>: ✅ Đúng — IoT Core + Firehose + Lambda.</li><li><strong>D</strong>: ❌ Sai — vẫn một EC2 Kafka đơn lẻ, không HA.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS IoT Core</li><li>MQTT</li><li>Kinesis Data Firehose</li><li>Lambda transformation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp thiết bị IoT dùng MQTT → nghĩ ngay đến <strong>AWS IoT Core</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#237",
          "answers": [
            {
              "choice": "<p>A. Launch two Amazon EC2 instances to host the Kafka server in an active/standby configuration across two Availability Zones. Create a domain name in Amazon Route 53. Create a Route 53 failover policy. Route the sensors to send the data to the domain name.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the on-premises Kafka server to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create a Network Load Balancer (NLB) that points to the Amazon MSK broker. Enable NLB health checks. Route the sensors to send the data to the NLB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS IoT Core, and connect it to an Amazon Kinesis Data Firehose delivery stream. Use an AWS Lambda function to handle data transformation. Route the sensors to send the data to AWS IoT Core.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy AWS IoT Core, and launch an Amazon EC2 instance to host the Kafka server. Configure AWS IoT Core to send the data to the EC2 instance. Route the sensors to send the data to AWS IoT Core.</p>",
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
      "question_id": "#134",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instances. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM, and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to 20 minutes. A solutions architect wants to revise the architecture for the solution.<br><br>Which strategy should the solutions architect use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chạy binary Linux không sửa được code, single-thread, CPU-intensive, 20 phút mỗi 4 giờ.</li><li>Requirement chính: kiến trúc mới phù hợp batch ngắn, theo lịch.</li><li>Ưu tiên: managed, không cần server luôn chạy, chạy được binary tùy ý.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đóng gói binary trong container chạy <strong>AWS Fargate</strong>, trigger bằng <strong>Amazon EventBridge</strong> schedule. Không giới hạn 15 phút như Lambda, không quản lý server, trả tiền theo thời gian chạy.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda tối đa 15 phút (job chạy 20 phút); CloudWatch Logs không dùng để schedule.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — AWS Batch + Step Functions phức tạp hơn cần thiết.</li><li><strong>C</strong>: ✅ Đúng — Fargate + EventBridge schedule, đơn giản, serverless.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Spot có thể bị interrupt, CodeDeploy không phải công cụ schedule.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Fargate</li><li>EventBridge schedule</li><li>Lambda 15-minute limit</li><li>Container hóa binary</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Job &gt; 15 phút, theo lịch, không sửa code → nghĩ ngay đến Fargate + EventBridge.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#134",
          "answers": [
            {
              "choice": "<p>A. Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours.</p>",
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
      "question_id": "#107",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an asynchronous HTTP application that is hosted as an AWS Lambda function. A public Amazon API Gateway endpoint invokes the Lambda function. The Lambda function and the API Gateway endpoint reside in the us-east-1 Region. A solutions architect needs to redesign the application to support failover to another AWS Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng Lambda + API Gateway ở us-east-1 cần failover sang Region khác.</li><li>Requirement chính: failover đa Region thật sự.</li><li>Ưu tiên: high availability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Deploy cả Lambda và API Gateway vào us-west-2, dùng <strong>Route 53 failover routing</strong> để chuyển traffic khi Region chính lỗi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — API Gateway mới vẫn gọi Lambda ở us-east-1, không độc lập Region.</li><li><strong>B</strong>: ❌ Sai — SQS không giải quyết failover Region.</li><li><strong>C</strong>: ❌ Sai — Global Accelerator với ALB không route tới API Gateway theo cách này, quá phức tạp.</li><li><strong>D</strong>: ✅ Đúng — stack đầy đủ ở hai Region và Route 53 failover.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>multi-Region failover</li><li>Route 53 failover routing</li><li>regional API Gateway + Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Failover đa Region cho serverless API → nhân bản stack + Route 53 failover.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#107",
          "answers": [
            {
              "choice": "<p>A. Create an API Gateway endpoint in the us-west-2 Region to direct traffic to the Lambda function in us-east-1. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure API Gateway to direct traffic to the SQS queue instead of to the Lambda function. Configure the Lambda function to pull messages from the queue for processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the Lambda function to the us-west-2 Region. Create an API Gateway endpoint in us-west-2 10 direct traffic to the Lambda function in us-west-2. Configure AWS Global Accelerator and an Application Load Balancer to manage traffic across the two API Gateway endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the Lambda function and an API Gateway endpoint to the us-west-2 Region. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.</p>",
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
      "question_id": "#111",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is auditing the security setup or an AWS Lambda function for a company. The Lambda function retrieves, the latest changes from an Amazon Aurora database. The Lambda function and the database run in the same VPC. Lambda environment variables are providing the database credentials to the Lambda function.<br><br>The Lambda function aggregates data and makes the data available in an Amazon S3 bucket that is configured for server-side encryption with AWS KMS managed encryption keys (SSE-KMS). The data must not travel across the Internet. If any database credentials become compromised, the company needs a solution that minimizes the impact of the compromise.<br><br>What should the solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda truy cập Aurora bằng credentials trong environment variables, ghi dữ liệu ra S3 SSE-KMS.</li><li>Requirement chính: dữ liệu không đi qua Internet; giảm tác động nếu lộ credentials.</li><li>Ưu tiên: security.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IAM database authentication</strong> dùng token tạm thời (15 phút) nên không có credentials dài hạn để lộ. <strong>Gateway VPC endpoint cho S3</strong> giữ traffic trong mạng AWS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — token tạm thời và gateway endpoint cho S3 (private).</li><li><strong>B</strong>: ❌ Sai — HTTPS vẫn đi qua Internet nếu không có VPC endpoint.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Parameter Store không hỗ trợ rotation tự động.</li><li><strong>D</strong>: ❌ Sai — Secrets Manager rotation tốt nhưng HTTPS không ngăn traffic đi Internet.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM database authentication</li><li>gateway VPC endpoint S3</li><li>not traverse Internet</li><li>temporary credentials</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Traffic S3 không qua Internet → gateway VPC endpoint; giảm rủi ro lộ password → IAM auth.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#111",
          "answers": [
            {
              "choice": "<p>A. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.</p>",
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
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances. A solutions architect is designing VPC infrastructure in an AWS Region where the application needs to access an Amazon Aurora DB Cluster. The EC2 instances are all associated with the same security group. The DB cluster is associated with its own security group.<br><br>The solutions architect needs to add rules to the security groups to provide the application with least privilege access to the DB Cluster.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cấu hình security group cho EC2 truy cập Aurora.</li><li>Requirement chính: least privilege.</li><li>Ưu tiên: dùng security group làm source/destination, chỉ mở port Aurora.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần inbound ở DB SG cho phép EC2 SG trên port Aurora (C) và outbound ở EC2 SG tới DB SG trên port đó (B) để theo đúng least privilege (không dùng default allow-all outbound).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — inbound trên EC2 SG không liên quan đến việc EC2 kết nối ra DB.</li><li><strong>B</strong>: ✅ Đúng — outbound của EC2 SG tới DB SG theo port Aurora.</li><li><strong>C</strong>: ✅ Đúng — inbound của DB SG từ EC2 SG theo port Aurora.</li><li><strong>D</strong>: ❌ Sai — security group là stateful, không cần outbound rule ở DB SG cho response.</li><li><strong>E</strong>: ❌ Sai — không cần mở ephemeral ports vì SG là stateful.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Security group stateful</li><li>Reference SG as source</li><li>Least privilege</li><li>Default Aurora port</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp EC2 → DB với least privilege → nghĩ ngay đến outbound ở EC2 SG + inbound ở DB SG, tham chiếu SG.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>A. Add an inbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the source over the default Aurora port.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the default Aurora port.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the ephemeral ports.</p>",
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
      "question_id": "#166",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A delivery company is running a serverless solution in the AWS Cloud. The solution manages user data, delivery information, and past purchase details. The solution consists of several microservices. The central user service stores sensitive data in an Amazon DynamoDB table. Several of the other microservices store a copy of parts of the sensitive data in different storage services.<br><br>The company needs the ability to delete user information upon request. As soon as the central user service deletes a user, every other microservice must also delete its copy of the data immediately.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Microservices serverless, central user service xóa user thì mọi service khác phải xóa bản sao dữ liệu ngay.</li><li>Requirement: một sự kiện, nhiều consumer độc lập (fan-out).</li><li>Ưu tiên: decoupling, nhiều subscriber.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EventBridge</strong> custom event bus cho phép service trung tâm publish một event, mỗi microservice có rule riêng match pattern và nhận event, đúng pattern event-driven fan-out.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SQS queue đơn chỉ giao mỗi message cho một consumer, không fan-out.</li><li><strong>B</strong>: ❌ Sai — DynamoDB không có tính năng event notification trực tiếp tới SNS.</li><li><strong>C</strong>: ✅ Đúng — EventBridge bus + rule cho từng microservice.</li><li><strong>D</strong>: ❌ Sai — SQS không có event filter trên queue và vẫn chỉ một consumer nhận mỗi message.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>EventBridge, custom event bus, event pattern, fan-out, decoupling</p><p><strong>🧠 MẸO THI</strong></p><p>\"Một event cần nhiều service khác nhau xử lý → EventBridge (hoặc SNS fan-out), không dùng SQS đơn.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#166",
          "answers": [
            {
              "choice": "<p>A. Activate DynamoDB Streams on the DynamoDB table. Create an AWS Lambda trigger for the DynamoDB stream that will post events about user deletion in an Amazon Simple Queue Service (Amazon SQS) queue. Configure each microservice to poll the queue and delete the user from the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up DynamoDB event notifications on the DynamoDB table. Create an Amazon Simple Notification Service (Amazon SNS) topic as a target for the DynamoDB event notification. Configure each microservice to subscribe to the SNS topic and to delete the user from the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the central user service to post an event on a custom Amazon EventBridge event bus when the company deletes a user. Create an EventBridge rule for each microservice to match the user deletion event pattern and invoke logic in the microservice to delete the user from the DynamoDB table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the central user service to post a message on an Amazon Simple Queue Service (Amazon SQS) queue when the company deletes a user. Configure each microservice to create an event filter on the SQS queue and to delete the user from the DynamoDB table.</p>",
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
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an IoT application in the AWS Cloud. The company has millions of sensors that collect data from houses in the United States. The sensors use the MQTT protocol to connect and send data to a custom MQTT broker. The MQTT broker stores the data on a single Amazon EC2 instance. The sensors connect to the broker through the domain named iot.example.com. The company uses Amazon Route 53 as its DNS service. The company stores the data in Amazon DynamoDB.<br><br>On several occasions, the amount of data has overloaded the MQTT broker and has resulted in lost sensor data. The company must improve the reliability of the solution.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng triệu sensor gửi MQTT tới custom broker trên một EC2, bị quá tải và mất dữ liệu.</li><li>Requirement: cải thiện reliability.</li><li>Ưu tiên: managed, scalable, hỗ trợ MQTT.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> là managed MQTT broker scale tới hàng triệu thiết bị; custom domain cho phép giữ `iot.example.com`, <strong>IoT rule</strong> ghi dữ liệu vào DynamoDB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB không hỗ trợ MQTT thuần (TCP), và broker tự quản lý vẫn phức tạp.</li><li><strong>B</strong>: ✅ Đúng — IoT Core + custom domain + IoT rule.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — NLB + Global Accelerator, nhưng broker custom vẫn phải tự quản lý và multivalue record phức tạp.</li><li><strong>D</strong>: ❌ Sai — Greengrass là edge runtime, không phải endpoint nhận dữ liệu của hàng triệu sensor.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>MQTT</li><li>AWS IoT Core</li><li>custom domain</li><li>IoT rule</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp MQTT + hàng triệu thiết bị → nghĩ ngay đến <strong>AWS IoT Core</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#209",
          "answers": [
            {
              "choice": "<p>A. Create an Application Load Balancer (ALB) and an Auto Scaling group for the MQTT broker. Use the Auto Scaling group as the target for the ALB. Update the DNS record in Route 53 to an alias record. Point the alias record to the ALB. Use the MQTT broker to store the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS IoT Core to receive the sensor data. Create and configure a custom domain to connect to AWS IoT Core. Update the DNS record in Route 53 to point to the AWS IoT Core Data-ATS endpoint. Configure an AWS IoT rule to store the data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB). Set the MQTT broker as the target. Create an AWS Global Accelerator accelerator. Set the NLB as the endpoint for the accelerator. Update the DNS record in Route 53 to a multivalue answer record. Set the Global Accelerator IP addresses as values. Use the MQTT broker to store the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up AWS IoT Greengrass to receive the sensor data. Update the DNS record in Route 53 to point to the AWS IoT Greengrass endpoint. Configure an AWS IoT rule to invoke an AWS Lambda function to store the data.</p>",
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
      "question_id": "#168",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a few AWS accounts for development and wants to move its production application to AWS. The company needs to enforce Amazon Elastic Block Store (Amazon EBS) encryption at rest current production accounts and future production accounts only. The company needs a solution that includes built-in blueprints and guardrails.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bắt buộc EBS encryption cho các production account hiện tại và tương lai, không áp dụng cho development.</li><li>Requirement: solution có sẵn blueprints và guardrails.</li><li>Ưu tiên: governance theo OU, tự động cho account mới.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Control Tower</strong> landing zone phải tạo ở management account, có OU production/development. Đưa các account hiện có vào <strong>AWS Organizations</strong> (invite) và áp guardrail cho production OU để phủ cả account hiện tại và tương lai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — StackSets + Config rules không có blueprints/guardrails built-in và không tự áp cho account mới.</li><li><strong>B</strong>: ❌ Sai — landing zone không tạo trong developer account.</li><li><strong>C</strong>: ✅ Đúng — landing zone tại management account với production/development OU.</li><li><strong>D</strong>: ✅ Đúng — mời account hiện có vào Organizations và dùng SCPs để enforce.</li><li><strong>E</strong>: ❌ Sai — guardrail ở management account sẽ áp cho mọi account, kể cả development.</li><li><strong>F</strong>: ✅ Đúng — guardrail gắn vào production OU, chỉ phạm vi production.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Control Tower, landing zone, guardrails, OU, SCP</p><p><strong>🧠 MẸO THI</strong></p><p>\"Cần blueprints và guardrails theo OU → Control Tower ở management account.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#168",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation StackSets to deploy AWS Config rules on production accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Control Tower landing zone in an existing developer account. Create OUs for accounts. Add production and development accounts to production and development OUs, respectively.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS Control Tower landing zone in the company’s management account. Add production and development accounts to production and development OUs. respectively.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invite existing accounts to join the organization in AWS Organizations. Create SCPs to ensure compliance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a guardrail from the management account to detect EBS encryption.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a guardrail for the production OU to detect EBS encryption.</p>",
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
      "question_id": "#195",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming company needs to rehost its gaming platform on AWS. The company's gaming application requires high performance computing (HPC) processing and has a leaderboard that changes frequently. An Ubuntu instance that is optimized for compute generation hosts a Node.js application for game display. Game state is tracked in an on-premises Redis instance.<br><br>The company needs a migration strategy that optimizes application performance.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Rehost game platform cần HPC, leaderboard thay đổi thường xuyên, Redis on-premises tracking game state.</li><li>Ưu tiên: tối ưu application performance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>c5 là compute optimized đáp ứng HPC. On-Demand cho hiệu năng ổn định, không bị gián đoạn. ElastiCache for Redis tương thích Redis và phù hợp leaderboard (sorted sets).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — m5 là general purpose, Spot có thể bị thu hồi.</li><li><strong>B</strong>: ❌ Sai — OpenSearch không phù hợp leaderboard, Spot không ổn định.</li><li><strong>C</strong>: ✅ Đúng — c5 On-Demand + ElastiCache for Redis.</li><li><strong>D</strong>: ❌ Sai — m5 không tối ưu compute, DynamoDB không thay thế Redis leaderboard cho cùng độ trễ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>c5 compute optimized</li><li>ElastiCache for Redis sorted sets</li><li>On-Demand cho performance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Leaderboard/Redis → ElastiCache for Redis; HPC/compute → c-family.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#195",
          "answers": [
            {
              "choice": "<p>A. Create an Auto Scaling group of m5.large Amazon EC2 Spot Instances behind an Application Load Balancer. Use an Amazon ElastlCache for Redis cluster to maintain the leaderboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group of c5.large Amazon EC2 Spot Instances behind an Application Load Balancer. Use an Amazon OpenSearch Service cluster to maintain the leaderboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group of c5.large Amazon EC2 On-Demand Instances behind an Application Load Balancer. Use an Amazon ElastiCache for Redis cluster to maintain the leaderboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group of m5.large Amazon EC2 On-Demand Instances behind an Application Load Balancer. Use an Amazon DynamoDB table to maintain the leaderboard.</p>",
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
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Example Corp. has an on-premises data center and a VPC named VPC A in the Example Corp. AWS account. The on-premises network connects to VPC A through an AWS Site-To-Site VPN. The on-premises servers can properly access VPC A. Example Corp. just acquired AnyCompany, which has a VPC named VPC B. There is no IP address overlap among these networks. Example Corp. has peered VPC A and VPC B.<br><br>Example Corp. wants to connect from its on-premise servers to VPC B. Example Corp. has properly set up the network ACL and security groups.<br><br>Which solution will meet this requirement with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: on-premises qua Site-to-Site VPN vào VPC A cần truy cập thêm VPC B (đã peer với VPC A).</li><li>Requirement chính: LEAST operational effort.</li><li>Lưu ý: VPC peering không hỗ trợ transitive routing (edge-to-edge), nên VPN không thể đi xuyên VPC A sang VPC B.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Transit Gateway làm hub trung tâm: attach VPN và cả hai VPC, cập nhật route table là mọi mạng thông nhau, dễ mở rộng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Transit Gateway nối VPN, VPC A, VPC B; chỉ cần cấu hình route.</li><li><strong>B</strong>: ❌ Sai — \"authorization rule\" là khái niệm của Client VPN, không áp dụng cho Site-to-Site VPN/TGW; thêm VPN mới là thừa.</li><li><strong>C</strong>: ❌ Sai — BGP propagation không vượt qua giới hạn non-transitive của VPC peering.</li><li><strong>D</strong>: ❌ Sai — virtual private gateway chỉ attach được một VPC, không thể \"chia\" router giữa hai VPC.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway</li><li>VPC peering non-transitive</li><li>Site-to-Site VPN attachment</li><li>LEAST operational effort</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp on-premises cần nói chuyện với nhiều VPC → nghĩ ngay đến Transit Gateway; peering không transitive.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to add IP range routes for all other networks.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway. Create a Site-to-Site VPN connection between the on-premises network and VPC B, and connect the VPN connection to the transit gateway. Add a route to direct traffic to the peered VPCs, and add an authorization rule to give clients access to the VPCs A and B.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the route tables for the Site-to-Site VPN and both VPCs for all three networks. Configure BGP propagation for all three networks. Wait for up to 5 minutes for BGP propagation to finish.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Site-to-Site VPN’s virtual private gateway definition to include VPC A and VPC B. Split the two routers of the virtual private getaway between the two VPCs.</p>",
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
      "question_id": "#173",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to audit the security posture of a newly acquired AWS account. The company’s data security team requires a notification only when an Amazon S3 bucket becomes publicly exposed. The company has already established an Amazon Simple Notification Service (Amazon SNS) topic that has the data security team's email address subscribed.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần thông báo chỉ khi S3 bucket bị public.</li><li>Requirement: phát hiện exposure và gửi qua SNS.</li><li>Ưu tiên: đúng tín hiệu, không nhiễu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IAM Access Analyzer</strong> tạo finding khi bucket có thể truy cập public (isPublic: true). EventBridge rule bắt finding này và gửi tới SNS topic.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 không có event notification kiểu isPublic.</li><li><strong>B</strong>: ✅ Đúng — Access Analyzer finding với filter isPublic, EventBridge tới SNS.</li><li><strong>C</strong>: ❌ Sai — PutBucketPolicy xảy ra cả khi policy không public, gây thông báo nhiễu.</li><li><strong>D</strong>: ❌ Sai — rule cloudtrail-s3-dataevents-enabled kiểm tra data events logging, không phát hiện bucket public.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>IAM Access Analyzer, isPublic, EventBridge, SNS, public S3 bucket</p><p><strong>🧠 MẸO THI</strong></p><p>\"Phát hiện S3 bucket public → Access Analyzer + EventBridge.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#173",
          "answers": [
            {
              "choice": "<p>A. Create an S3 event notification on all S3 buckets for the isPublic event. Select the SNS topic as the target for the event notifications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an analyzer in AWS Identity and Access Management Access Analyzer. Create an Amazon EventBridge rule for the event type “Access Analyzer Finding” with a filter for “isPublic: true.” Select the SNS topic as the EventBridge rule target.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule for the event type “Bucket-Level API Call via CloudTrail” with a filter for “PutBucketPolicy.” Select the SNS topic as the EventBridge rule target.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Activate AWS Config and add the cloudtrail-s3-dataevents-enabled rule. Create an Amazon EventBridge rule for the event type “Config Rules Re-evaluation Status” with a filter for “NON_COMPLIANT.” Select the SNS topic as the EventBridge rule target.</p>",
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
      "question_id": "#114",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.<br><br>The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes:<br>• Managed AWS services to minimize operational complexity.<br>• A buffer that automatically scales to match the throughput of data and requires no ongoing administration.<br>• A visualization tool to create dashboards to observe events in near-real time.<br>• Support for semi-structured JSON data and dynamic schemas.<br><br>Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thay PostgreSQL on-prem quá tải bằng giải pháp hybrid managed.</li><li>Requirement chính: buffer tự scale không cần quản trị, dashboard near-real-time, JSON dynamic schema.</li><li>Ưu tiên: managed, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Kinesis Data Firehose</strong> là buffer tự scale không cần quản trị. <strong>Amazon ES + Kibana</strong> lưu JSON schema linh hoạt và có dashboard near-real-time.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Firehose tự scale, không quản shard.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Kinesis data stream phải quản lý shard.</li><li><strong>C</strong>: ❌ Sai — Aurora PostgreSQL schema cứng, không hợp JSON dynamic.</li><li><strong>D</strong>: ✅ Đúng — Elasticsearch hỗ trợ JSON và Kibana dashboard.</li><li><strong>E</strong>: ❌ Sai — Neptune là graph database, không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Kinesis Data Firehose</li><li>Amazon Elasticsearch + Kibana</li><li>semi-structured JSON</li><li>automatically scales</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Buffer không quản trị + JSON dashboard near-real-time → Firehose + Elasticsearch/Kibana.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#114",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.</p>",
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
      "question_id": "#157",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company is building an inspection solution for its factory. The company has IP cameras at the end of each assembly line. The company has used Amazon SageMaker to train a machine learning (ML) model to identify common defects from still images.<br><br>The company wants to provide local feedback to factory workers when a defect is detected. The company must be able to provide this feedback even if the factory’s internet connectivity is down. The company has a local Linux server that hosts an API that provides local feedback to the workers.<br><br>How should the company deploy the ML model to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Model ML đã train trên SageMaker, cần phát hiện lỗi từ ảnh camera tại nhà máy.</li><li>Requirement: phản hồi cục bộ kể cả khi mất internet, gọi API trên local Linux server.</li><li>Ưu tiên: edge inference, hoạt động offline.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Greengrass</strong> chạy trên local server, deploy model và component chụp ảnh, chạy inference tại chỗ rồi gọi local API, không phụ thuộc internet.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phụ thuộc cloud (Kinesis, S3, Lambda), mất internet là không hoạt động.</li><li><strong>B</strong>: ✅ Đúng — Greengrass chạy inference tại edge, gọi local API, hoạt động offline.</li><li><strong>C</strong>: ❌ Sai — Snowball quá nặng cho use case này; SageMaker endpoint không chạy trên Snowball theo cách này.</li><li><strong>D</strong>: ❌ Sai — Amazon Monitron dành cho giám sát máy móc (vibration/temperature), không chạy custom ML model từ ảnh.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS IoT Greengrass, edge inference, offline, local API, SageMaker model deployment</p><p><strong>🧠 MẸO THI</strong></p><p>\"ML inference tại edge, phải chạy khi mất internet → nghĩ ngay đến IoT Greengrass.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Kinesis video stream from each IP camera to AWS. Use Amazon EC2 instances to take still images of the streams. Upload the images to an Amazon S3 bucket. Deploy a SageMaker endpoint with the ML model. Invoke an AWS Lambda function to call the inference endpoint when new images are uploaded. Configure the Lambda function to call the local API when a defect is detected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy AWS IoT Greengrass on the local server. Deploy the ML model to the Greengrass server. Create a Greengrass component to take still images from the cameras and run inference. Configure the component to call the local API when a defect is detected.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order an AWS Snowball device. Deploy a SageMaker endpoint the ML model and an Amazon EC2 instance on the Snowball device. Take still images from the cameras. Run inference from the EC2 instance. Configure the instance to call the local API when a defect is detected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy Amazon Monitron devices on each IP camera. Deploy an Amazon Monitron Gateway on premises. Deploy the ML model to the Amazon Monitron devices. Use Amazon Monitron health state alarms to call the local API from an AWS Lambda function when a defect is detected.</p>",
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
      "question_id": "#42",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours.<br><br>What is the MOST cost-effective migration recommendation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Di chuyển ứng dụng xử lý file media (tối đa 1 giờ/file), tải cao giờ hành chính, giảm sau đó.</li><li>Ưu tiên <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda có giới hạn 15 phút nên không xử lý được job 1 giờ. <strong>SQS</strong> + <strong>EC2 Auto Scaling</strong> theo độ dài queue co giãn theo tải, lưu kết quả ở <strong>S3</strong> rẻ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda timeout tối đa 15 phút, không đủ cho 1 giờ.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Amazon MQ đắt hơn SQS, tạo/xoá EC2 thủ công, EFS đắt hơn S3.</li><li><strong>C</strong>: ❌ Sai — Lambda không đủ thời gian và MQ/EFS tốn kém.</li><li><strong>D</strong>: ✅ Đúng — SQS + ASG theo queue length + S3.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SQS</li><li>Auto Scaling theo queue length</li><li>Lambda 15 phút</li><li>S3</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"job dài hơn 15 phút, tải biến động\" → nghĩ đến <strong>SQS + EC2 Auto Scaling</strong> (không phải Lambda).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>A. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.</p>",
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
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is subject to regulatory audits of its financial information. External auditors who use a single AWS account need access to the company's AWS account. A solutions architect must provide the auditors with secure, read-only access to the company's AWS account. The solution must comply with AWS security best practices.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: auditor ở account khác cần read-only access.</li><li>Requirement chính: secure, đúng best practice của AWS.</li><li>Ưu tiên: cross-account role, temporary credentials.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>IAM role</strong> có read-only policy, trust account của auditor, với <strong>external ID</strong> trong trust policy. Auditor assume role để lấy temporary credentials, không cần long-term credentials.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — resource policy cho mọi resource không khả thi và không phải best practice; external ID không dùng ở đây.</li><li><strong>B</strong>: ✅ Đúng — cross-account IAM role + external ID.</li><li><strong>C</strong>: ❌ Sai — chia sẻ access keys là bad practice.</li><li><strong>D</strong>: ❌ Sai — tạo IAM user cho từng auditor, tăng long-term credentials.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account IAM role</li><li>External ID</li><li>Read-only access</li><li>Temporary credentials</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Bên ngoài/audit cần truy cập account → nghĩ ngay đến cross-account IAM role.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#149",
          "answers": [
            {
              "choice": "<p>A. In the company's AWS account, create resource policies for all resources in the account to grant access to the auditors' AWS account. Assign a unique external ID to the resource policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the company's AWS account, create an IAM role that trusts the auditors' AWS account. Create an IAM policy that has the required permissions. Attach the policy to the role. Assign a unique external ID to the role's trust policy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the company's AWS account, create an IAM user. Attach the required IAM policies to the IAM user. Create API access keys for the IAM user. Share the access keys with the auditors.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the company's AWS account, create an IAM group that has the required permissions. Create an IAM user in the company's account for each auditor. Add the IAM users to the IAM group.</p>",
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
      "question_id": "#139",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a content management application on a single Windows Amazon EC2 instance in a development environment. The application reads and writes static content to a 2 TB Amazon Elastic Block Store (Amazon EBS) volume that is attached to the instance as the root device. The company plans to deploy this application in production as a highly available and fault-tolerant solution that runs on at least three EC2 instances across multiple Availability Zones.<br><br>A solutions architect must design a solution that joins all the instances that run the application to an Active Directory domain. The solution also must implement Windows ACLs to control access to file contents. The application always must maintain exactly the same content on all running instances at any given point in time.<br><br>Which solution will meet these requirements with the LEAST management overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ứng dụng Windows, 3 instance multi-AZ, join Active Directory, dùng Windows ACL, nội dung giống hệt nhau.</li><li>Requirement chính: shared file system hỗ trợ SMB/ACL/AD, <strong>LEAST management overhead</strong>.</li><li>Ưu tiên: managed, tương thích Windows.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon FSx for Windows File Server</strong> là shared storage SMB, hỗ trợ Windows ACL và tích hợp AD, multi-AZ. Instance dùng <strong>seamless domain join</strong> và mount FSx.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EFS dùng NFS, không hỗ trợ Windows ACL, không dùng cho Windows.</li><li><strong>B</strong>: ❌ Sai — FSx for Lustre là Linux, không hỗ trợ Windows.</li><li><strong>C</strong>: ✅ Đúng — FSx for Windows File Server + seamless domain join.</li><li><strong>D</strong>: ❌ Sai — EFS không hỗ trợ Windows instance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>FSx for Windows File Server</li><li>SMB</li><li>Windows ACL</li><li>Seamless domain join</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Windows + SMB + ACL + AD → nghĩ ngay đến FSx for Windows File Server.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#139",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file share. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to install the application, join the instance to the AD domain, and mount the EFS file share.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AMI from the current EC2 Instance that is running. Create an Amazon FSx for Lustre file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to join the instance to the AD domain and mount the FSx for Lustre file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three instances. Implement a user data script to install the application and mount the FSx for Windows File Server file system. Perform a seamless domain join to join the instance to the AD domain.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AMI from the current EC2 instance that is running. Create an Amazon Elastic File System (Amazon EFS) file system. Create an Auto Scaling group that extends across three Availability Zones and maintains a minimum size of three Instances. Perform a seamless domain join to join the instance to the AD domain.</p>",
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
      "question_id": "#138",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on-premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed. The research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days.<br><br>The company has a high-speed AWS Direct Connect connection. Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity. The end result will be stored in Amazon S3. The company is expecting 10-15 job requests each day.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xử lý genomics bằng Docker, 200 GB mỗi genome, job chạy vài giờ, 10-15 job/ngày, có Direct Connect.</li><li>Requirement chính: scale theo workload, giảm turnaround.</li><li>Ưu tiên: chuyển dữ liệu tự động qua Direct Connect, batch container.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DataSync</strong> chuyển dữ liệu qua Direct Connect lên S3; S3 event kích hoạt Lambda khởi <strong>Step Functions</strong> workflow, và <strong>AWS Batch</strong> chạy container từ <strong>ECR</strong>. Phù hợp job nhiều giờ và scale theo nhu cầu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Snowball không cần khi đã có Direct Connect; Lambda giới hạn 15 phút.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Data Pipeline cũ, tự quản lý EC2 Auto Scaling.</li><li><strong>C</strong>: ✅ Đúng — DataSync + Step Functions + Batch + ECR.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — file gateway dùng được nhưng thiếu workflow orchestration.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS DataSync</li><li>AWS Batch</li><li>Step Functions</li><li>ECR</li><li>Direct Connect</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Job container dài hạn, theo hàng đợi → nghĩ ngay đến AWS Batch; chuyển dữ liệu on-prem → DataSync.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#138",
          "answers": [
            {
              "choice": "<p>A. Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data.</p>",
              "correct": false,
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
