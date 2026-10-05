var SAP_C02_Part6 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#501",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on a single Amazon EC2 instance. End users experience slow application performance during times of peak usage, when CPU utilization is consistently more than 95%.<br><br>A user data script installs required custom packages on the EC2 instance. The process of launching the instance takes several minutes.<br><br>The company is creating an Auto Scaling group that has mixed instance groups, varied CPUs, and a maximum capacity limit. The Auto Scaling group will use a launch template for various configuration options. The company needs to decrease application latency when new instances are launched during auto scaling.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Auto Scaling group khởi chạy instance mất vài phút vì user data cài package, làm tăng latency khi scale out.</li><li>Requirement chính: giảm thời gian instance mới sẵn sàng phục vụ.</li><li>Ưu tiên: latency khi scale.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Warm pool</strong> giữ sẵn các instance đã được pre-initialize (đã chạy user data), nên khi scale out chỉ cần chuyển sang In-service. <strong>Lifecycle hooks</strong> cho phép hoàn tất việc chạy user data trước khi instance vào warm pool. <strong>Dynamic scaling</strong> phản ứng với CPU thực tế.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — instance maintenance policy dùng để thay thế instance, không chạy user data; warmup 0 không giảm thời gian khởi chạy.</li><li><strong>B</strong>: ❌ Sai — không có warm pool nên vẫn phải khởi tạo từ đầu; warmup 0 giây chỉ khiến metric bị tính sớm.</li><li><strong>C</strong>: ❌ Sai — instance maintenance policy không dùng để chạy user data.</li><li><strong>D</strong>: ✅ Đúng — warm pool + lifecycle hooks + dynamic scaling giảm thời gian launch.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Warm pools</li><li>Lifecycle hooks</li><li>Pre-initialized instances</li><li>Dynamic scaling</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Instance khởi động lâu khi scale out → nghĩ ngay đến Warm Pool + lifecycle hook.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#501",
          "answers": [
            {
              "choice": "<p>A. Use a predictive scaling policy. Use an instance maintenance policy to run the user data script. Set the default instance warmup time to 0 seconds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a dynamic scaling policy. Use lifecycle hooks to run the user data script. Set the default instance warmup time to 0 seconds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a predictive scaling policy. Enable warm pools for the Auto Scaling group. Use an instance maintenance policy to run the user data script.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a dynamic scaling policy. Enable warm pools for the Auto Scaling group. Use lifecycle hooks to run the user data script.</p>",
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
      "question_id": "#502",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate its on-premises database fleet to Amazon RDS. The company is currently using a mixture of Microsoft SQL Server, MySQL, and Oracle databases. Some of the databases have custom schemas and stored procedures.<br><br>Which combination of steps should the company take for the migration? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate nhiều loại database (SQL Server, MySQL, Oracle) sang Amazon RDS, có custom schema và stored procedure.</li><li>Cần bước phân tích/convert schema và bước di chuyển dữ liệu.</li><li>Chọn đúng 2 bước.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS SCT</strong> phân tích source DB, đánh giá và convert schema, stored procedure. <strong>AWS DMS</strong> thực hiện migrate dữ liệu sang RDS (hỗ trợ cả heterogeneous và homogeneous).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Migration Evaluator Quick Insights dùng để ước tính TCO, không phân tích stored procedure.</li><li><strong>B</strong>: ❌ Sai — AWS Application Migration Service là lift-and-shift server, không dành cho phân tích database.</li><li><strong>C</strong>: ✅ Đúng — SCT phân tích schema và code cần thay đổi.</li><li><strong>D</strong>: ✅ Đúng — DMS di chuyển dữ liệu sang RDS.</li><li><strong>E</strong>: ❌ Sai — AWS DataSync dùng cho file/object, không migrate database.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS SCT</li><li>AWS DMS</li><li>Stored procedures</li><li>Heterogeneous migration</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Migrate DB có schema/stored procedure → nghĩ ngay đến SCT (convert) + DMS (migrate data).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#502",
          "answers": [
            {
              "choice": "<p>A. Use Migration Evaluator Quick Insights to analyze the source databases and to identify the stored procedures that need to be migrated.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Application Migration Service to analyze the source databases and to identify the stored procedures that need to be migrated.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool (AWS SCT) to analyze the source databases for changes that are required</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Database Migration Service (AWS DMS) to migrate the source databases to Amazon RDS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS DataSync to migrate the data from the source databases to Amazon RDS.</p>",
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
      "question_id": "#503",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its blog platform to AWS. The company's on-premises servers connect to AWS through an AWS Site-to-Site VPN connection. The blog content is updated several times a day by multiple authors and is served from a file share on a network-attached storage (NAS) server.<br><br>The company needs to migrate the blog platform without delaying the content updates. The company has deployed Amazon EC2 instances across multiple Availability Zones to run the blog platform behind an Application Load Balancer. The company also needs to move 200 TB of archival data from its on-premises servers to Amazon S3 as soon as possible.<br><br>Which combination of stops will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Blog được cập nhật nhiều lần mỗi ngày từ NAS, cần chia sẻ nội dung cho nhiều EC2 qua nhiều AZ mà không trì hoãn cập nhật.</li><li>Đồng thời chuyển 200 TB dữ liệu archive lên S3 càng nhanh càng tốt.</li><li>Ưu tiên: không delay cập nhật, tốc độ chuyển dữ liệu lớn.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EFS</strong> là shared file system đa AZ, mount được từ on-premises qua VPN, nên content update xuất hiện ngay cho các EC2. 200 TB qua VPN rất chậm, nên dùng <strong>Snowball Edge Storage Optimized</strong> (80 TB mỗi thiết bị, dùng nhiều thiết bị).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cron hàng tuần gây trễ cập nhật.</li><li><strong>B</strong>: ❌ Sai — EBS Multi-Attach chỉ trong một AZ và đồng bộ hàng tuần gây trễ.</li><li><strong>C</strong>: ✅ Đúng — EFS chia sẻ realtime cho mọi EC2 ở nhiều AZ.</li><li><strong>D</strong>: ✅ Đúng — Snowball Edge phù hợp cho hàng trăm TB.</li><li><strong>E</strong>: ❌ Sai — Snowcone SSD chỉ có khoảng 14 TB, không đủ cho 200 TB.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon EFS shared storage</li><li>Snowball Edge Storage Optimized</li><li>200 TB</li><li>Multi-AZ</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Hàng trăm TB, băng thông hạn chế → nghĩ ngay đến Snowball Edge; shared file multi-AZ → EFS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#503",
          "answers": [
            {
              "choice": "<p>A. Create a weekly cron job in Amazon EventBridge. Use the cron job to invoke an AWS Lambda function to update the EC2 instances from the NAS server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon Elastic Block Store (Amazon EBS) Multi-Attach volume for the EC2 instances to share for content access. Write code to synchronize the EBS volume with the NAS server weekly.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Mount an Amazon Elastic File System (Amazon EFS) file system to the on-premises servers to act as the NAS server. Copy the blog data to the EFS file system. Mount the EFS file system to the C2 instances to serve the content.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order an AWS Snowball Edge Storage Optimized device. Copy the static data artifacts to the device. Ship the device to AWS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Order an AWS Snowcons SSD device. Copy the static data artifacts to the device. Ship the device to AWS.</p>",
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
      "question_id": "#504",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to migrate a legacy on-premises application to AWS. The application is a Java web application that runs on Apache Tomcat with a PostgreSQL database.<br><br>The company does not have access to the source code but can deploy the application Java Archive (JAR) files. The application has increased traffic at the end of each month.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng Java/Tomcat legacy, không có source code, chỉ deploy được JAR.</li><li>Có traffic tăng cuối tháng, cần scale.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Elastic Beanstalk</strong> hỗ trợ Tomcat với auto scaling đa AZ, tự quản lý provisioning, load balancer. Database dùng <strong>Amazon RDS for PostgreSQL</strong> (managed), không cần sửa code.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự cài Tomcat/PostgreSQL trên EC2, dùng Step Functions để scale là nặng vận hành.</li><li><strong>B</strong>: ❌ Sai — EKS multi-Region phức tạp, chạy DB trong container.</li><li><strong>C</strong>: ❌ Sai — refactor sang Python/Lambda nhưng không có source code.</li><li><strong>D</strong>: ✅ Đúng — Beanstalk + RDS + ALB/CloudFront, ít vận hành nhất.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Elastic Beanstalk Tomcat</li><li>No source code</li><li>RDS for PostgreSQL</li><li>Least operational overhead</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Deploy app Java/Tomcat có sẵn, ít vận hành → nghĩ ngay đến Elastic Beanstalk + RDS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#504",
          "answers": [
            {
              "choice": "<p>A. Launch Amazon EC2 instances in multiple Availability Zones. Deploy Tomcat and PostgreSQL to all the instances by using Amazon Elastic File System (Amazon EFS) mount points. Use AWS Step Functions to deploy additional EC2 instances to scale for increased traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision Amazon Elastic Kubernetes Service (Amazon EKS) in an Auto Scaling group across multiple AWS Regions. Deploy Tomcat and PostgreSQL in the container images. Use a Network Load Balancer to scale for increased traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Refactor the Java application into Python-based containers. Use AWS Lambda functions for the application logic. Store application data in Amazon DynamoDB global tables. Use AWS Storage Gateway and Lambda concurrency to scale for increased traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk to deploy the Tomcat servers with auto scaling in multiple Availability Zones. Store application data in an Amazon RDS for PostgreSQL database. Deploy Amazon CloudFront and an Application Load Balancer to scale for increased traffic.</p>",
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
      "question_id": "#505",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its on-premises IoT platform to AWS. The platform consists of the following components:<br><br>• A MongoDB cluster as a data store for all collected and processed IoT data.<br>• An application that uses Message Queuing Telemetry Transport (MQTT) to connect to IoT devices every 5 minutes to collect data.<br>• An application that runs jobs periodically to generate reports from the IoT data. The jobs take 120-600 seconds to finish running.<br>• A web application that runs on a web server. End users use the web application to generate reports that are accessible to the general public.<br><br>The company needs to migrate the platform to AWS to reduce operational overhead while maintaining performance.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate nền tảng IoT: MongoDB, ứng dụng MQTT, job báo cáo 120-600 giây, web app báo cáo công khai.</li><li>Chọn 3 bước.</li><li>Ưu tiên: LEAST operational overhead, giữ performance.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> hỗ trợ MQTT managed, rule gọi <strong>Lambda</strong> để lưu dữ liệu. <strong>Amazon DocumentDB</strong> tương thích MongoDB và là managed. Báo cáo chạy bằng <strong>Step Functions + Lambda</strong> (dưới 15 phút), lưu <strong>S3</strong> và phân phối qua <strong>CloudFront</strong>.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Serverless, phù hợp báo cáo tĩnh công khai.</li><li><strong>B</strong>: ❌ Sai — Lambda tự kết nối thiết bị MQTT và Lambda layer không lưu tạm message.</li><li><strong>C</strong>: ❌ Sai — EKS trên EC2 nặng vận hành.</li><li><strong>D</strong>: ✅ Đúng — IoT Core + IoT rule + Lambda.</li><li><strong>E</strong>: ✅ Đúng — DocumentDB managed, tương thích MongoDB.</li><li><strong>F</strong>: ❌ Sai — MongoDB tự quản lý trên EC2 tốn vận hành.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS IoT Core</li><li>IoT rule</li><li>DocumentDB (MongoDB compatibility)</li><li>S3 + CloudFront</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"MQTT/IoT devices → IoT Core; MongoDB managed → DocumentDB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#505",
          "answers": [
            {
              "choice": "<p>A. Create AWS Step Functions state machines with AUS Lambda tasks to prepare the reports and to write the reports to Amazon S3. Configure an Amazon CloudFront distribution that has an S3 origin to serve the reports</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function. Program the Lambda function to connect to the IoT devices. process the data, and write the data to the data store. Configure a Lambda layer to temporarily store messages for processing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with Amazon EC2 instances to prepare the reports. Create an ingress controller on the EKS cluster to serve the reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Connect the IoT devices to AWS IoT Core to publish messages. Create an AWS IoT rule that runs when a message is received. Configure the rule to call an AWS Lambda function. Program the Lambda function to parse, transform, and store device message data to the data store.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Migrate the MongoDB cluster to Amazon DocumentDB (with MongoDB compatibility).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Migrate the MongoDB cluster to Amazon EC2 instances.</p>",
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
      "question_id": "#506",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates an Amazon API Gateway API and shares the API with an external development team. The API uses AWS Lambda functions and is deployed to a stage that is named Production.<br><br>The external development team is the sole consumer of the API. The API experiences sudden increases of usage at specific times, leading to concerns about increased costs. The company needs to limit cost and usage without reworking the Lambda functions.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API Gateway chỉ có một consumer bên ngoài, usage tăng đột biến gây lo ngại chi phí.</li><li>Cần giới hạn cost và usage mà không sửa Lambda.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Usage plan</strong> với <strong>API key</strong> cho phép đặt throttling limits (rate/burst) và quota theo consumer, gắn vào stage Production, không tốn thêm chi phí và không sửa code.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải sửa Lambda để đọc từ SQS, thêm chi phí.</li><li><strong>B</strong>: ❌ Sai — provisioned concurrency tăng chi phí, không giới hạn usage.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — WAF rate-based rule tốn phí thêm và không có quota.</li><li><strong>D</strong>: ✅ Đúng — Usage plan + API key, rẻ và đúng mục đích.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Usage plan</li><li>API key</li><li>Throttling và quota</li><li>Single consumer</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Giới hạn usage/cost theo client của API Gateway → nghĩ ngay đến Usage Plan + API Key.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#506",
          "answers": [
            {
              "choice": "<p>A. Configure the API to send requests to Amazon Simple Queue Service (Amazon SQS) queues instead of directly to the Lambda functions. Update the Lambda functions to consume messages from the queues and to process the requests. Set up the queues to invoke the Lambda functions when new messages arrive.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure provisioned concurrency for each Lambda function. Use AWS Application Auto Scaling to register the Lambda functions as targets. Set up scaling schedules to increase and decrease capacity to match changes in API usage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an API Gateway API key and an AWS WAF Regional web ACL. Associate the web ACL with the Production stage. Add a rate-based rule to the web ACL. In the rule, specify the rate limit and a custom request aggregation that uses the X-API-Key header. Share the API key with the external development team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an API Gateway API Key and usage plan. Define throttling limits and quotas in the usage plan. Associate the usage plan with the Production stage and the API key. Share the API key with the external development team.</p>",
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
      "question_id": "#507",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An entertainment company hosts a ticketing service on a fleet of Linux Amazon EC2 instances that are in an Auto Scaling group. The ticketing service uses a pricing file. The pricing file is stored in an Amazon S3 bucket that has S3 Standard storage. A central pricing solution that is hosted by a third party updates the pricing file.<br><br>The pricing file is updated every 1-15 minutes and has several thousand line items. The pricing file is downloaded to each EC2 instance when the instance launches.<br><br>The EC2 instances occasionally use outdated pricing information that can result in incorrect charges for customers.<br><br>Which solution will resolve this problem MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Pricing file trên S3 cập nhật mỗi 1-15 phút, nhưng EC2 chỉ tải khi launch nên dùng giá cũ.</li><li>Cần các EC2 luôn đọc bản mới nhất.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Mountpoint for Amazon S3</strong> mount bucket như file system, đọc trực tiếp object trên S3 nên luôn là bản mới, không cần Lambda hay storage bổ sung, rất rẻ.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thêm Lambda và DynamoDB, phải sửa ứng dụng, tốn chi phí hơn.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — EFS tốn chi phí cao hơn và cần Lambda đồng bộ.</li><li><strong>C</strong>: ✅ Đúng — đọc trực tiếp từ S3, đơn giản và rẻ nhất.</li><li><strong>D</strong>: ❌ Sai — EBS Multi-Attach bị giới hạn (một AZ, tối đa 16 instance), phức tạp.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Mountpoint for Amazon S3</li><li>Always latest data</li><li>Most cost-effective</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"EC2 cần đọc file S3 như file system, dữ liệu luôn mới → nghĩ ngay đến Mountpoint for Amazon S3.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#507",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to update an Amazon DynamoDB table with new prices each time the pricing file is updated. Update the ticketing service to use DynramoDB to look up pricing</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to update an Amazon Elastic File System (Amazon EFS) file share with the pricing file each time the file is updated. Update the ticketing service to use Amazon EFS to access the pricing file.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Load Mountpoint for Amazon S3 onto the AMI of the EC2 instances. Configure Mountpoint for Amazon S3 to mount the S3 bucket that contains the pricing file. Update the ticketing service to point to the mount point and path to access the $3 object,</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS Multi-Attach to attach the volume to every EC2 instance. When a new EC2 instance launches, configure the new instance to update the pricing file on the EBS volume. Update the ticketing service to point to the new local source.</p>",
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
      "question_id": "#508",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses Amazon EC2 instances in an Auto Scaling group. The quality assurance (QA) department needs to launch a large number of short-lived environments to test the application. The application environments are currently launched by the manager of the department using an AWS CloudFormation template. To launch the stack, the manager uses a role with permission to use CloudFormation, EC2, and Auto Scaling APIs. The manager wants to allow testers to launch their own environments, but does not want to grant broad permissions to each user.<br><br>Which set up would achieve these goals?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho tester tự launch môi trường từ CloudFormation template mà không cấp quyền rộng.</li><li>Requirement: self-service với least privilege.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Service Catalog</strong> với <strong>launch constraint</strong> dùng role đã có để provision, user chỉ cần quyền Service Catalog, không cần quyền CloudFormation/EC2/Auto Scaling.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cho assume role của manager là cấp quyền quá rộng.</li><li><strong>B</strong>: ✅ Đúng — Service Catalog + launch constraint.</li><li><strong>C</strong>: ❌ Sai — user cần quyền tạo resource trực tiếp, khó giới hạn.</li><li><strong>D</strong>: ❌ Sai — Beanstalk không phải công cụ phù hợp cho template CloudFormation và vẫn truyền role.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Service Catalog</li><li>Launch constraint</li><li>Self-service</li><li>Least privilege</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"User tự provision từ template mà không cần quyền rộng → nghĩ ngay đến Service Catalog launch constraint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#508",
          "answers": [
            {
              "choice": "<p>A. Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to assume the manager’s role and add a policy that restricts the permissions to the template and the resources it creates. Train users to launch the template from the CloudFormation console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Service Catalog product from the environment template. Add a launch constraint to the product with the existing role. Give users in the QA department permission to use AWS Service Catalog APIs only. Train users to launch the template from the AWS Service Catalog console.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to use CloudFormation and S3 APIs, with conditions that restrict the permissions to the template and the resources it creates. Train users to launch the template from the CloudFormation console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Elastic Beanstalk application from the environment template. Give users in the QA department permission to use Elastic Beanstalk permissions only. Train users to launch Elastic Beanstalk environments with the Elastic Beanstalk CLI, passing the existing role to the environment as a service role.</p>",
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
      "question_id": "#509",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a single AWS Region for its ecommerce website. The website includes a web application that runs on several Amazon EC2 instances behind an Application Load Balancer (ALB). The website also includes an Amazon DynamoDB table. A custom domain name in Amazon Route 53 is linked to the ALB. The company created an SSL/TLS certificate in AWS Certificate Manager (ACM) and attached the certificate to the ALB. The company is not using a content delivery network as part of its design.<br><br>The company wants to replicate its entire application stack in a second Region to provide disaster recovery, plan for future growth, and provide improved access time to users. A solutions architect needs to implement a solution that achieves these goals and minimizes administrative overhead.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhân bản stack sang Region thứ hai để DR, growth và giảm latency cho user.</li><li>Chọn 3 bước.</li><li>Ưu tiên: giảm administrative overhead.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudFormation</strong> với parameter giúp lặp lại hạ tầng nhất quán. <strong>Latency-based routing</strong> của Route 53 đưa user đến Region gần nhất. <strong>DynamoDB global table</strong> nâng cấp trực tiếp từ bảng hiện có bằng cách bật Streams và thêm Region.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — IaC, tái sử dụng.</li><li><strong>B</strong>: ❌ Sai — làm thủ công qua Console dễ sai sót, tốn công.</li><li><strong>C</strong>: ❌ Sai — weighted 50/50 không cải thiện access time.</li><li><strong>D</strong>: ✅ Đúng — latency-based routing.</li><li><strong>E</strong>: ✅ Đúng — thêm Region vào bảng hiện có để tạo global table.</li><li><strong>F</strong>: ⚠️ Có thể nhưng không tối ưu — tạo bảng mới và copy dữ liệu thủ công, tốn công.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFormation parameters</li><li>Latency-based routing</li><li>DynamoDB global tables</li><li>DR</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Multi-Region giảm latency → Route 53 latency routing + DynamoDB global tables + IaC.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#509",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template for the current infrastructure design. Use parameters for important system values, including Region. Use the CloudFormation template to create the new infrastructure in the second Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Management Console to document the existing infrastructure design in the first Region and to create the new infrastructure in the second Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Route 53 hosted zone record for the application to use weighted routing. Send 50% of the traffic to the ALB in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Route 53 hosted zone record for the application to use latency-based routing. Send traffic to the ALB in each Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the configuration of the existing DynamoDB table by enabling DynamoDB Streams. Add the second Region to create a global table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a new DynamoDB table. Enable DynamoDB Streams for the new table. Add the second Region to create a global table. Copy the data from the existing DynamoDB table to the new table as a one-time operation.</p>",
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
      "question_id": "#510",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create a single Amazon S3 bucket for its data scientists to store work-related documents. The company uses AWS IAM Identity Center to authenticate all users. A group for the data scientists was created.<br><br>The company wants to give the data scientists access to only their own work. The company also wants to create monthly reports that show which documents each user accessed.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một S3 bucket chung, mỗi data scientist chỉ truy cập dữ liệu của mình, dùng IAM Identity Center.</li><li>Cần báo cáo hàng tháng về tài liệu mà mỗi user truy cập.</li><li>Cần phân quyền theo user và audit truy cập object.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Permission set</strong> dùng condition `${aws:PrincipalTag/userName}/*` để giới hạn theo prefix của từng user. <strong>CloudTrail S3 data events</strong> ghi lại truy cập object, truy vấn bằng <strong>Athena</strong> để tạo báo cáo.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — giới hạn theo prefix bằng principal tag.</li><li><strong>B</strong>: ❌ Sai — cấp read/write cho cả group, không tách theo user.</li><li><strong>C</strong>: ✅ Đúng — data events + Athena.</li><li><strong>D</strong>: ❌ Sai — management events không ghi truy cập object.</li><li><strong>E</strong>: ❌ Sai — EMRFS không liên quan, S3 Select không dùng để query log theo cách này.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>PrincipalTag</li><li>Permission set</li><li>CloudTrail data events</li><li>Athena</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Audit ai truy cập object S3 → CloudTrail data events + Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#510",
          "answers": [
            {
              "choice": "<p>A. Create a custom IAM Identity Center permission set to grant the data scientists access to an S3 bucket prefix that matches their username tag. Use a policy to limit access to paths with the ${aws:PrincipalTag/userName}/* condition.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM Identity Center role for the data scientists group that has Amazon S3 read access and write access. Add an S3 bucket policy that allows access to the IAM Identity Center role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS CloudTrail to log S3 data events and deliver the logs to an S3 bucket. Use Amazon Athena to run queries on the CloudTrail logs in Amazon S3 and generate reports.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS CloudTrail to log S3 management events to CloudWatch. Use Amazon Athena’s CloudWatch connector to query the logs and generate reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable S3 access logging to EMR File System (EMRFS). Use Amazon S3 Select to query logs and generate reports.</p>",
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
      "question_id": "#511",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a data-processing application on Amazon EC2 instances. The application polls an Amazon Elastic File System (Amazon EFS) file system for newly uploaded files. When a new file is detected, the application extracts data from the file and runs logic to select a Docker container image to process the file. The application starts the appropriate container image and passes the file location as a parameter.<br><br>The data processing that the container performs can take up to 2 hours. When the processing is complete, the code that runs inside the container writes the file back to Amazon EFS and exits.<br><br>The company needs to refactor the application to eliminate the EC2 instances that are running the containers.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Refactor ứng dụng để bỏ EC2 chạy container; xử lý tối đa 2 giờ, file trên EFS.</li><li>Cần trigger khi có file mới và chạy container dài.</li><li>Requirement: serverless/không còn EC2.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>EFS không có event notification, nên chuyển file sang <strong>S3</strong> để dùng <strong>S3 event notification</strong> gọi <strong>Lambda</strong> chọn container, rồi chạy bằng <strong>Fargate task</strong> (không giới hạn 15 phút).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EventBridge không bắt được sự kiện file mới trên EFS.</li><li><strong>B</strong>: ❌ Sai — EFS không có event notification.</li><li><strong>C</strong>: ✅ Đúng — S3 event + Lambda + Fargate task.</li><li><strong>D</strong>: ❌ Sai — Lambda tối đa 15 phút, không đủ cho 2 giờ.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 event notification</li><li>Fargate tasks</li><li>Lambda 15 phút</li><li>EFS không có event</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Xử lý dài hơn 15 phút, không muốn EC2 → nghĩ ngay đến Fargate; trigger file → S3 event.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#511",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an Amazon EventBridge rule that starts the appropriate Fargate task. Configure the EventBridge rule to run when files are added to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Update and containerize the container selection logic to run as a Fargate service that starts the appropriate Fargate task. Configure an EFS event notification to invoke the Fargate service when files are added to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an AWS Lambda function that starts the appropriate Fargate task. Migrate the storage of file uploads to an Amazon S3 bucket. Update the processing code to use Amazon S3. Configure an S3 event notification to invoke the Lambda function when objects are created.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create AWS Lambda container images for the processing. Configure Lambda functions to use the container images. Extract the container selection logic to run as a decision Lambda function that invokes the appropriate Lambda processing function. Migrate the storage of file uploads to an Amazon S3 bucket. Update the processing code to use Amazon S3. Configure an S3 event notification to invoke the decision Lambda function when objects are created.</p>",
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
      "question_id": "#512",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company has a 30-T8 repository of digital news videos. These videos are stored on tape in an on-premises tape library and referenced by a Media Asset Management (MAM) system. The company wants to enrich the metadata for these videos in an automated fashion and put them into a searchable catalog by using a MAM feature. The company must be able to search based on information in the video, such as objects, scenery items, or people’s faces. A catalog is available that contains faces of people who have appeared in the videos that include an image of each person. The company would like to migrate these videos to AWS.<br><br>The company has a high-speed AWS Direct Connect connection with AWS and would like to move the MAM solution video content directly from its current file system.<br><br>How can these requirements be met by using the LEAST amount of ongoing management overhead and causing MINIMAL disruption to the existing system?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate 30 TB video từ tape lên AWS qua Direct Connect, làm giàu metadata (đối tượng, cảnh, khuôn mặt).</li><li>MAM đọc từ file system hiện tại.</li><li>Ưu tiên: ít vận hành, ít ảnh hưởng hệ thống cũ.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 File Gateway</strong> cho MAM đẩy file như file share, video nằm trên S3. <strong>Amazon Rekognition</strong> (collection khuôn mặt) phân tích video trên S3 và Lambda trả metadata về MAM.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — File Gateway + Rekognition + Lambda.</li><li><strong>B</strong>: ❌ Sai — Tape gateway lưu vào archive, Rekognition không xử lý video trực tiếp trong đó.</li><li><strong>C</strong>: ❌ Sai — Kinesis Video Streams dành cho video streaming, thay đổi nhiều hệ thống.</li><li><strong>D</strong>: ❌ Sai — OpenCV trên EC2 tự quản lý, tốn vận hành.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 File Gateway</li><li>Amazon Rekognition collection</li><li>Face search</li><li>Minimal disruption</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Nhận diện khuôn mặt/đối tượng trong video lưu S3 → Rekognition; đưa file on-prem lên S3 → File Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#512",
          "answers": [
            {
              "choice": "<p>A. Set up an AWS Storage Gateway, file gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the file gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Rekognition pull the video from the Amazon S3 files backing the file gateway, retrieve the required metadata, and push the metadata into the MAM solution.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an AWS Storage Gateway, tape gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the tape gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video in the tape gateway, retrieve the required metadata, and push the metadata into the MAM solution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a video ingestion stream by using Amazon Kinesis Video Streams. Use the catalog of faces to build a collection in Amazon Rekognition. Stream the videos from the MAM solution into Kinesis Video Streams. Configure Amazon Rekognition to process the streamed videos. Then, use a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Configure the stream to store the videos in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon EC2 instance that runs the OpenCV libraries. Copy the videos, images, and face catalog from the on-premises library into an Amazon EBS volume mounted on this EC2 instance. Process the videos to retrieve the required metadata, and push the metadata into the MAM solution, while also copying the video files to an Amazon S3 bucket.</p>",
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
      "question_id": "#513",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to optimize the cost of an AWS environment that contains multiple accounts in an organization in AWS Organizations. The company conducted cost optimization activities 3 years ago and purchased Amazon EC2 Standard Reserved Instances that recently expired.<br><br>The company needs EC2 instances for 3 more years. Additionally, the company has deployed a new serverless workload.<br><br>Which strategy will provide the company with the MOST cost savings?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Reserved Instances hết hạn, cần EC2 thêm 3 năm, có thêm workload serverless.</li><li>Ưu tiên: MOST cost savings.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>RI 3 năm All Upfront cho mức giảm giá cao nhất cho EC2 ổn định, kết hợp <strong>Compute Savings Plan</strong> 3 năm All Upfront ở management account cover phần compute bổ sung (bao gồm Lambda/Fargate) trên toàn organization.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — 3 năm All Upfront cho mức tiết kiệm lớn nhất, phủ cả serverless.</li><li><strong>B</strong>: ❌ Sai — 1 năm No Upfront tiết kiệm ít nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — No Upfront tiết kiệm ít hơn All Upfront.</li><li><strong>D</strong>: ❌ Sai — EC2 Instance Savings Plan không phủ serverless và mua theo từng member account kém linh hoạt.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>3-year All Upfront</li><li>Compute Savings Plan</li><li>Management account</li><li>Serverless coverage</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Tiết kiệm nhiều nhất → 3 năm + All Upfront; có Lambda/Fargate → Compute Savings Plan.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#513",
          "answers": [
            {
              "choice": "<p>A. Purchase the same Reserved Instances for an additional 3-year term with All Upfront payment. Purchase a 3-year Compute Savings Plan with All Upfront payment in the management account to cover any additional compute costs</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase a 1-year Compute Savings Plan with No Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the Compute Savings Plan.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase a 3-year EC2 Instance Savings Plan with No Upfront payment in the management account to cover EC2 costs in each AWS Region. Purchase a 3-year Compute Savings Plan with No Upfront payment in the management account to cover any additional compute costs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase a 3-year EC2 Instance Savings Plan with All Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the EC2 Instance Savings Plan.</p>",
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
      "question_id": "#514",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a static content distribution platform that serves customers globally. The customers consume content from their own AWS accounts.<br><br>The company serves its content from an Amazon S3 bucket. The company uploads the content from its on-premises environment to the S3 bucket by using an S3 File Gateway.<br><br>The company wants to improve the platform’s performance and reliability by serving content from the AWS Region that is geographically closest to customers. The company must route the on-premises data to Amazon S3 with minimal latency and without public internet exposure.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phân phối nội dung tĩnh toàn cầu từ Region gần khách hàng nhất; dữ liệu on-premises vào S3 độ trễ thấp, không qua internet công cộng.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Multi-Region Access Points</strong> tự route request đến Region gần nhất với một endpoint global. Kết nối riêng, độ trễ ổn định qua <strong>Direct Connect + PrivateLink</strong> đến Multi-Region Access Point.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Multi-Region Access Point tự route.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — CRR là cơ chế sao chép, không tự route và cần cấu hình thêm.</li><li><strong>C</strong>: ❌ Sai — Lambda tự theo dõi routing tốn vận hành.</li><li><strong>D</strong>: ❌ Sai — VPN đi qua internet công cộng, độ trễ biến động.</li><li><strong>E</strong>: ✅ Đúng — Direct Connect + PrivateLink, riêng tư, độ trễ thấp.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Multi-Region Access Points</li><li>Direct Connect</li><li>PrivateLink</li><li>No public internet</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"S3 đa Region + route theo gần nhất → Multi-Region Access Point; không qua internet → Direct Connect + PrivateLink.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#514",
          "answers": [
            {
              "choice": "<p>A. Implement S3 Multi-Region Access Points</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use S3 Cross-Region Replication (CRR) to copy content to different Regions</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that tracks the routing of clients to Regions</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Site-to-Site VPN connection to connect to a Multi-Region Access Point.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS PrivateLink and AWS Direct Connect to connect to a Multi-Region Access Point.</p>",
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
      "question_id": "#515",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its data center to the AWS Cloud and needs to complete the migration as quickly as possible. The company has many applications that are running on hundreds of VMware VMs in the data center. Each VM is configured with a shared Windows folder that contains common shared files. The file share is larger than 100 GB in size.<br><br>The company’s compliance team requires a change request to be fled and approved for every software installation and modification to each VM. The company has an AWS Direct Connect connection with 10 GB of bandwidth between AWS and the data center.<br><br>Which set of steps should the company take to complete the migration in the LEAST amount of time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate hàng trăm VMware VM nhanh nhất; compliance yêu cầu change request cho mỗi lần cài đặt/sửa VM.</li><li>Có Direct Connect 10 Gbps, file share Windows hơn 100 GB.</li><li>Ưu tiên: ít thời gian nhất, không cài gì lên từng VM.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Application Migration Service agentless</strong> (vCenter) replicate VM mà không cài agent lên từng VM, tránh change request. <strong>Amazon FSx for Windows File Server</strong> thay thế Windows file share (SMB).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng VM Import/Export từng VM chậm, EFS không phù hợp SMB Windows.</li><li><strong>B</strong>: ❌ Sai — Discovery chỉ khám phá, không migrate.</li><li><strong>C</strong>: ✅ Đúng — agentless, FSx for Windows.</li><li><strong>D</strong>: ❌ Sai — agent trên hypervisor không phải mô hình hỗ trợ.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Migration Service agentless</li><li>vCenter</li><li>FSx for Windows File Server</li><li>Change request</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Migrate VMware không được cài agent lên VM → nghĩ ngay đến agentless MGN; Windows file share → FSx for Windows.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#515",
          "answers": [
            {
              "choice": "<p>A. Use VM ImporvExport to create images of each VM. Use AWS Application Migration Service to manage and view the images. Copy the Windows file share data to an Amazon Elastic File System (Amazon EFS) file system. After migration, remap the file share to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the AWS Application Discovery Service agentless appliance to VMware vCenter. Review the portfolio of discovered VMs in AWS Migration Hub.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the AWS Application Migration Service agentless appliance to VMware vCenter. Copy the Windows file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the AWS Application Discovery Service Agent and the AWS Application Migration Service Agent onto each VMware hypervisor directly. Review the portfolio in AWS Migration Hub. Copy each VM’s file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.</p>",
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
      "question_id": "#516",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts that are in an organization in AWS Organizations. The company needs to store AWS account activity and query the data from a central location by using SQL.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lưu activity của nhiều account trong Organization và query tập trung bằng SQL.</li><li>Requirement: tập trung, SQL.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudTrail Lake</strong> là data store hỗ trợ query SQL, có thể tạo từ delegated administrator và bật cho toàn bộ organization.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — CloudWatch Logs Insights không phải SQL và phải cấu hình từng account.</li><li><strong>B</strong>: ✅ Đúng — CloudTrail Lake cho organization, query SQL.</li><li><strong>C</strong>: ❌ Sai — Event history không query SQL tập trung.</li><li><strong>D</strong>: ❌ Sai — data store riêng từng account, không tập trung.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudTrail Lake</li><li>Delegated administrator</li><li>Organization</li><li>SQL query</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Query SQL trực tiếp trên CloudTrail events cho cả organization → CloudTrail Lake.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#516",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudTraii trail in each account. Specify CloudTrail management events for the trail. Configure CloudTrail to send the events to Amazon CloudWatch Logs. Configure CloudWatch cross-account observability. Query the data in CloudWatch Logs Insights.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a delegated administrator account to create an AWS CloudTrail Lake data store. Specify CloudTrail management events for the data store. Enable the data store for all accounts in the organization. Query the data in CloudTrail Lake.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a delegated administrator account to create an AWS CloudTral trail. Specify CloudTrail management events for the trail. Enable the trail for all accounts in the organization. Keep all other settings as default. Query the CloudTrail data from the CloudTrail event history page.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation StackSets to deploy AWS CloudTrail Lake data stores in each account. Specify CloudTrail management events for the data stores. Keep all other settings as default, Query the data in CloudTrail Lake.</p>",
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
      "question_id": "#517",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS to develop and manage its production web application. The application includes an Amazon API Gateway HTTP API that invokes an AWS Lambda function. The Lambda function processes and then stores data in a database.<br><br>The company wants to implement user authorization for the web application in an integrated way. The company already uses a third-party identity provider that issues OAuth tokens for the company’s other applications.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>HTTP API trên API Gateway gọi Lambda, cần user authorization tích hợp với identity provider bên thứ ba dùng OAuth token.</li><li>Requirement: validate token từ IdP hiện có.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda authorizer</strong> của API Gateway validate token từ IdP bên ngoài; web app lấy token từ IdP rồi gửi trong header Authorization.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Lambda authorizer cho token của IdP.</li><li><strong>B</strong>: ❌ Sai — Directory Service không phải API Gateway authorizer.</li><li><strong>C</strong>: ❌ Sai — API Gateway không có zero-configuration với IAM Identity Center, STS token không đúng cơ chế này.</li><li><strong>D</strong>: ❌ Sai — IAM users không phù hợp cho end-user của web app.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda authorizer</li><li>OAuth token</li><li>Third-party IdP</li><li>Authorization header</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Validate token từ IdP bên thứ ba cho API Gateway → Lambda authorizer (hoặc JWT authorizer).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#517",
          "answers": [
            {
              "choice": "<p>A. Integrate the company’s third-party identity provider with API Gateway. Configure an API Gateway Lambda authorizer to validate tokens from the identity provider. Require the Lambda authorizer on all API routes. Update the web application to get tokens from the identity provider and include the tokens in the Authorization header when calling the API Gateway HTTP API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Integrate the company's third-party identity provider with AWS Directory Service. Configure Directory Service as an API Gateway authorizer to validate tokens from the identity provider. Require the Directory Service authorizer on all API routes. Configure AWS IAM Identity Center as a SAML 2.0 identity Provider. Configure the web application as a custom SAML 2.0 application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Integrate the company’s third-party identity provider with AWS IAM Identity Center. Configure API Gateway to use IAM Identity Center for zero-configuration authentication and authorization. Update the web application to retrieve AWS Security Token Service (AWS STS) tokens from IAM Identity Center and include the tokens in the Authorization header when calling the API Gateway HTTP API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Integrate the company’s third-party identity provider with AWS IAM Identity Center. Configure IAM users with permissions to call the API Gateway HTTP API. Update the web application to extract request parameters from the IAM users and include the parameters in the Authorization header when calling the API Gateway HTTP API.</p>",
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
      "question_id": "#518",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed applications to thousands of Amazon EC2 instances in an AWS account. A security audit discovers that several unencrypted Amazon Elastic Block Store (Amazon EBS) volumes are attached to the EC2 instances. The company’s security policy requires the EBS volumes to be encrypted.<br><br>The company needs to implement an automated solution to encrypt the EBS volumes. The solution also must prevent development teams from creating unencrypted EBS volumes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng nghìn EC2 có EBS volume chưa mã hóa; cần tự động mã hóa và ngăn tạo volume mới không mã hóa.</li><li>Requirement: remediation tự động + prevention.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Config</strong> rule phát hiện volume chưa mã hóa và auto-remediation bằng <strong>Systems Manager Automation</strong> runbook. Bật <strong>EBS encryption by default</strong> ở account setting để mọi volume mới đều được mã hóa.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — key policy không thể chặn tạo volume không mã hóa.</li><li><strong>B</strong>: ❌ Sai — Fleet Manager không tạo danh sách volume; SCP thuộc về organization và không tự mã hóa.</li><li><strong>C</strong>: ❌ Sai — Fleet Manager không liệt kê EBS volume chưa mã hóa.</li><li><strong>D</strong>: ✅ Đúng — Config rule + remediation + encryption by default.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Config managed rule</li><li>Auto remediation</li><li>Systems Manager Automation</li><li>EBS encryption by default</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Ép mọi EBS volume mới mã hóa → bật EBS encryption by default; sửa volume cũ → Config + SSM Automation.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#518",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an AWS Key Management Service (AWS KMS) customer managed key. In the key policy, include a statement to deny the creation of unencrypted EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes, Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an SCP to deny the creation of unencrypted EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes. Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.</p>",
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
      "question_id": "#519",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a large containerized workload in the AWS Cloud. The workload consists of approximately 100 different services. The company uses Amazon Elastic Container Service (Amazon ECS) to orchestrate the workload.<br><br>Recently the company’s development team started using AWS Fargate instead of Amazon EC2 instances in the ECS cluster. In the past, the workload has come close to running the maximum number of EC2 instances that are available in the account.<br><br>The company is worried that the workload could reach the maximum number of ECS tasks that are allowed. A solutions architect must implement a solution that will notify the development team when Fargate reaches 80% of the maximum number of tasks.<br><br>What should the solutions architect do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần cảnh báo khi số Fargate task đạt 80% quota.</li><li>Requirement: monitor service quota và notify.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudWatch publish usage metrics trong namespace <strong>AWS/Usage</strong>. Dùng math expression `metric/SERVICE_QUOTA(metric)*100`, đặt alarm trên 80 và gửi qua <strong>SNS</strong>.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Sample Count của service không phản ánh quota Fargate.</li><li><strong>B</strong>: ✅ Đúng — AWS/Usage + SERVICE_QUOTA + SNS.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda tự polling, tốn vận hành.</li><li><strong>D</strong>: ❌ Sai — AWS Config rule không đánh giá quota theo cách này.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS/Usage namespace</li><li>SERVICE_QUOTA()</li><li>CloudWatch alarm</li><li>SNS</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Cảnh báo gần chạm service quota → CloudWatch AWS/Usage + SERVICE_QUOTA math.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#519",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to poll detailed metrics from the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon Simple Email Service (Amazon SES) to notify the development team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.</p>",
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
      "question_id": "#520",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has several AWS Lambda functions written in Python. The functions are deployed with the .zip package deployment type. The functions use a Lambda layer that contains common libraries and packages in a .zip file. The Lambda .zip packages and Lambda layer .zip file are stored in an Amazon S3 bucket.<br><br>The company must implement automatic scanning of the Lambda functions and the Lambda layer to identify CVEs. A subset of the Lambda functions must receive automated code scans to detect potential data leaks and other vulnerabilities. The code scans must occur only for selected Lambda functions, not all the Lambda functions.<br><br>Which combination of actions will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Scan CVE cho Lambda function và layer, đồng thời code scan chỉ cho một số function chọn lọc.</li><li>Chọn 3 bước.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Inspector</strong> kích hoạt, bật Lambda standard scanning (CVE) và Lambda code scanning. Để loại function không cần code scan, dùng tag `InspectorCodeExclusion` với value `LambdaCodeScanning`.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kích hoạt Inspector.</li><li><strong>B</strong>: ✅ Đúng — standard scan và code scan.</li><li><strong>C</strong>: ❌ Sai — GuardDuty Lambda Protection dò mối đe dọa runtime, không scan CVE/code.</li><li><strong>D</strong>: ❌ Sai — không có thiết lập như vậy trong Monitor settings của Lambda.</li><li><strong>E</strong>: ✅ Đúng — tag loại trừ code scan.</li><li><strong>F</strong>: ❌ Sai — Inspector không scan S3 bucket chứa zip.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Inspector</li><li>Lambda standard scanning</li><li>Lambda code scanning</li><li>InspectorCodeExclusion tag</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Scan CVE và code Lambda → Amazon Inspector; loại trừ code scan → tag InspectorCodeExclusion.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#520",
          "answers": [
            {
              "choice": "<p>A. Activate Amazon Inspector. Start automated CVE scans.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate Lambda standard scanning and Lambda code scanning in Amazon Inspector.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon GuardDuty. Enable the Lambda Protection feature in GuardDuty.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable scanning in the Monitor settings of the Lambda functions that need code scans.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Tag Lambda functions that do not need code scans. In the tag, include a key of InspectorCodeExclusion and a value of LambdaCodeScanning.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon Inspector to scan the 3 bucket that contains the Lambda .zip packages and the Lambda layer .zip file for code scans.</p>",
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
      "question_id": "#521",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is changing the way that it handles patching of Amazon EC2 instances in its application account. The company currently patches instances over the internet by using a NAT gateway in a VPC in the application account.<br><br>The company has EC2 instances set up as a patch source repository in a dedicated private VPC in a core account. The company wants to use AWS Systems Manager Patch Manager and the patch source repository in the core account to patch the EC2 instances in the application account. The company must prevent all EC2 instances in the application account from accessing the internet.<br><br>The EC2 instances in the application account need to access Amazon S3, where the application data is stored. These EC2 instances need connectivity to Systems Manager and to the patch source repository in the private VPC in the core account.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 trong application account không được ra internet nhưng cần S3, Systems Manager và patch repository ở VPC private của core account.</li><li>Requirement: kết nối private.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>VPC endpoints</strong> cho Systems Manager và S3, xóa <strong>NAT gateway</strong>, và dùng <strong>VPC peering</strong> để truy cập patch source repository trong core account, cập nhật route table hai phía.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự quản lý VPN server, phức tạp, NACL không phải giải pháp.</li><li><strong>B</strong>: ❌ Sai — private VIF dùng cho Direct Connect, không dùng cho Systems Manager/S3.</li><li><strong>C</strong>: ✅ Đúng — VPC endpoints + VPC peering.</li><li><strong>D</strong>: ❌ Sai — chỉ có NACL và TGW, không có endpoint cho Systems Manager/S3.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC endpoints</li><li>VPC peering</li><li>Remove NAT gateway</li><li>Patch Manager</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Không ra internet nhưng dùng AWS service → VPC endpoints; nối 2 VPC private → peering.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#521",
          "answers": [
            {
              "choice": "<p>A. Create a network ACL that blocks outbound traffic on port 80. Associate the network ACL with all subnets in the application account. In the application account and the core account, deploy one EC2 instance that runs a custom VPN server. Create a VPN tunnel to access the private VPC. Update the route table in the application account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create private VIFs for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route table in the core account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create VPC endpoints for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a VPC peering connection to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a network ACL that blocks inbound traffic on port 80. Associate the network ACL with all subnets in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.</p>",
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
      "question_id": "#522",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company in the United States (US) has acquired a company in Europe. Both companies use the AWS Cloud. The US company has built a new application with a microservices architecture. The US company is hosting the application across five VPCs in the us-east-2 Region. The application must be able to access resources in one VPC in the eu-west-1 Region.<br>However, the application must not be able to access any other VPCs.<br><br>The VPCs in both Regions have no overlapping CIDR ranges. All accounts are already consolidated in one organization in AWS Organizations.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>5 VPC ở us-east-2 cần truy cập 1 VPC ở eu-west-1, nhưng không được truy cập VPC khác.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Inter-Region VPC peering</strong> từng VPC us-east-2 với VPC eu-west-1 chỉ cho phép đúng các kết nối cần thiết, không tốn phí hourly như Transit Gateway, và peering không transitive nên cô lập tốt.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — transit gateway không thể attach VPC của Region khác trực tiếp.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — 2 transit gateway và peering tốn kém hơn.</li><li><strong>C</strong>: ❌ Sai — full mesh cho phép truy cập các VPC khác, vi phạm requirement.</li><li><strong>D</strong>: ✅ Đúng — peering từng VPC, rẻ và đúng phạm vi.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Inter-Region VPC peering</li><li>Non-transitive</li><li>Most cost-effective</li><li>Isolation</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Chỉ vài VPC cần kết nối, cần cô lập và rẻ → VPC peering, không dùng Transit Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#522",
          "answers": [
            {
              "choice": "<p>A. Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables for each subnet so that the traffic is routed through the regional transit gateway. Peer the two transit gateways.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
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
      "question_id": "#523",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần logging cho Amazon SES để troubleshoot delivery và tìm kiếm theo recipient, subject, thời gian gửi.</li><li>Chọn 2 bước.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SES configuration set</strong> với event destination <strong>Amazon Data Firehose</strong> đẩy log email event vào <strong>S3</strong>, sau đó dùng <strong>Athena</strong> query theo recipient, subject, time.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — configuration set + Firehose + S3.</li><li><strong>B</strong>: ❌ Sai — CloudTrail chỉ ghi API call, không có thông tin delivery của email.</li><li><strong>C</strong>: ✅ Đúng — Athena query log trên S3.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — SES không gửi log trực tiếp vào log group theo cách này (dùng event destination CloudWatch chỉ cho metric).</li><li><strong>E</strong>: ❌ Sai — Athena không query trực tiếp log trong CloudWatch Logs cho mục đích này.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SES configuration set</li><li>Event destination</li><li>Data Firehose</li><li>Athena</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Log chi tiết email SES để search → configuration set + Firehose → S3 + Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#523",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon SES configuration set with Amazon Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.</p>",
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
      "question_id": "#524",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated to AWS and uses AWS Business Support. The company wants to monitor the cost-effectiveness of Amazon EC2 instances across AWS accounts. The EC2 instances have tags for department, business unit, and environment. Development EC2 instances have high cost but low utilization.<br><br>The company needs to detect and stop any underutilized development EC2 instances. Instances are underutilized if they had 10% or less average daily CPU utilization and 5 MB or less network I/O for at least 4 of the past 14 days.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phát hiện và dừng EC2 development dùng thấp (CPU 10% hoặc thấp hơn, network 5 MB hoặc thấp hơn, 4 trên 14 ngày).</li><li>Có AWS Business Support.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Trusted Advisor</strong> (Business Support) có check <strong>Low Utilization Amazon EC2 Instances</strong> đúng tiêu chí này. EventBridge bắt kết quả và Lambda lọc theo tag rồi stop instance.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dashboard không tự phát hiện theo tiêu chí.</li><li><strong>B</strong>: ❌ Sai — Systems Manager không theo dõi utilization theo cách này.</li><li><strong>C</strong>: ✅ Đúng — Trusted Advisor + EventBridge + Lambda.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — tự xây pipeline, nhiều vận hành.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Trusted Advisor</li><li>Low Utilization EC2 Instances</li><li>EventBridge</li><li>Business Support</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"EC2 dùng thấp theo tiêu chí 10% CPU, 14 ngày → Trusted Advisor Low Utilization check.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#524",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon CloudWatch dashboards to monitor EC2 instance utilization based on tags for department, business unit, and environment. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Systems Manager to track EC2 instance utilization and report underutilized instances to Amazon CloudWatch. Filter the CloudWatch data by tags for department, business unit, and environment. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule to detect low utilization of EC2 instances reported by AWS Trusted Advisor. Configure the rule to invoke an AWS Lambda function that filters the data by tags for department, business unit, and environment and stops underutilized development EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function to run daily to retrieve utilization data for all EC2 instances. Save the data to an Amazon DynamoDB table. Create an Amazon QuickSight dashboard that uses the DynamoDB table as a data source to identify and stop underutilized development EC2 instances.</p>",
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
      "question_id": "#525",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting an application on AWS for a project that will run for the next 3 years. The application consists of 20 Amazon EC2 On-Demand Instances that are registered in a target group for a Network Load Balancer (NLB). The instances are spread across two Availability Zones. The application is stateless and runs 24 hours a day, 7 days a week.<br><br>The company receives reports from users who are experiencing slow responses from the application. Performance metrics show that the instances are at 10% CPU utilization during normal application use. However, the CPU utilization increases to 100% at busy times, which typically last for a few hours.<br><br>The company needs a new architecture to resolve the problem of slow responses from the application.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>20 EC2 On-Demand chạy 24/7, CPU 10% bình thường nhưng 100% khi cao điểm vài giờ, gây chậm.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Auto Scaling group</strong> với min 4, max 28 co giãn theo tải; mua <strong>Reserved Instances</strong> cho phần baseline 4 instance chạy liên tục, phần còn lại On-Demand khi cần.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — min 20 và desired 28 vẫn tốn chi phí cao khi tải thấp.</li><li><strong>B</strong>: ❌ Sai — Spot Fleet type request không scale, không gắn trực tiếp NLB.</li><li><strong>C</strong>: ❌ Sai — Spot không phù hợp tính ổn định, bỏ NLB.</li><li><strong>D</strong>: ✅ Đúng — scale theo nhu cầu, RI cho baseline.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Auto Scaling group</li><li>Reserved Instances baseline</li><li>Minimum 4</li><li>Cost-effective</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Tải ổn định thấp, thỉnh thoảng cao → ASG min nhỏ, RI cho baseline, On-Demand cho burst.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#525",
          "answers": [
            {
              "choice": "<p>A. Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 20 and the desired capacity to 28. Purchase Reserved Instances for 20 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Spot Fleet that has a request type of request. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to On-Demand. Specify the NLB when creating the Spot Fleet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Spot Fleet that has a request type of maintain. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to Spot. Replace the NLB with an Application Load Balancer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 4 and the maximum capacity to 28. Purchase Reserved Instances for four instances.</p>",
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
      "question_id": "#526",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Accompany is building an application to collect and transmit sensor data from a factory. The application will use AWS IoT Core to send data from hundreds of devices to an Amazon S3 data lake. The company must enrich the data before loading the data into Amazon S3.<br><br>The application will transmit the sensor data every 5 seconds. New sensor data must be available in Amazon S3 less than 30 minutes after the application collects the data. No other applications are processing the sensor data from AWS IoT Core.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dữ liệu IoT mỗi 5 giây từ hàng trăm thiết bị, cần enrich rồi vào S3 trong vòng dưới 30 phút.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IoT Basic Ingest</strong> không tính phí messaging. <strong>Kinesis Data Firehose</strong> buffer 900 giây (15 phút), gom nhiều record, gọi Lambda enrich theo batch và ghi S3, giảm số lần gọi Lambda và PutObject.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda gọi cho từng message và ghi S3 từng object, tốn chi phí.</li><li><strong>B</strong>: ✅ Đúng — Basic Ingest + Firehose buffer + Lambda.</li><li><strong>C</strong>: ❌ Sai — thêm Timestream và Lambda đọc, tốn kém.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Kinesis Data Streams tốn chi phí shard và không cần realtime.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IoT Basic Ingest</li><li>Firehose buffering</li><li>Batch</li><li>Under 30 minutes</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"IoT đến S3 chấp nhận độ trễ phút, rẻ nhất → Basic Ingest + Firehose buffering.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#526",
          "answers": [
            {
              "choice": "<p>A. Create a topic in AWS IoT Core to ingest the sensor data. Create an AWS Lambda function to enrich the data and to write the data to Amazon S3. Configure an AWS IoT rule action to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS IoT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Firehose. Set the Kinesis Data Firehose buffering interval to 900 seconds. Use Kinesis Data Firehose to invoke an AWS Lambda function to enrich the data, Configure Kinesis Data Firehose to deliver the data to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a topic in AWS IoT Core to ingest the sensor data. Configure an AWS IoT rule action to send the data to an Amazon Timestream table. Create an AWS Lambda, function to read the data from Timestream. Configure the Lambda function to enrich the data and to write the data to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS loT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Streams. Create a consumer AWS Lambda function to process the data from Kinesis Data Streams and to enrich the data. Call the S3 PutObject API operation from the Lambda function to write the data to Amazon S3.</p>",
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
      "question_id": "#527",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is collecting data from a large set of IoT devices. The data is stored in an Amazon S3 data lake. Data scientists perform analytics on Amazon EC2 instances that run in two public subnets in a VPC in a separate AWS account.<br><br>The data scientists need access to the data lake from the EC2 instances. The EC2 instances already have an assigned role with permissions to access Amazon S3.<br>According to company policies, only authorized networks are allowed to have access to the IoT data.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 ở account khác cần truy cập S3 data lake, chỉ network được ủy quyền mới được truy cập.</li><li>Requirement: kiểm soát truy cập theo network/access point.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>S3 access point</strong> cho data lake, và <strong>bucket policy</strong> chỉ cho phép `s3:GetObject` khi `s3:DataAccessPointArn` hợp lệ. Cách này ép mọi truy cập đi qua access point có kiểm soát.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — gateway endpoint hữu ích nhưng không đủ để giới hạn truy cập.</li><li><strong>B</strong>: ✅ Đúng — access point.</li><li><strong>C</strong>: ❌ Sai — policy trên role không kiểm soát phía bucket.</li><li><strong>D</strong>: ❌ Sai — route table không thể route đến access point.</li><li><strong>E</strong>: ✅ Đúng — bucket policy ủy quyền qua access point.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 access point</li><li>s3:DataAccessPointArn</li><li>Bucket policy</li><li>Authorized networks</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Kiểm soát truy cập S3 theo network/ứng dụng → access point + bucket policy với DataAccessPointArn.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#527",
          "answers": [
            {
              "choice": "<p>A. Create a gateway VPC endpoint for Amazon S3 in the data scientists’ VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 access point in the data scientists' AWS account for the data lake.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the EC2 instance role. Add a policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the VPC route table to route S3 traffic to an S3 access point.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an S3 bucket policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.</p>",
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
      "question_id": "#528",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its website to AWS. The website uses containers that are deployed in an on-premises, self-managed Kubernetes cluster. All data for the website is stored in an on-premises PostgreSQL database.<br><br>The company has decided to migrate the on-premises Kubernetes cluster to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster will use EKS managed node groups with a static number of nodes. The company will also migrate the on-premises database to an Amazon RDS for PostgreSQL database.<br><br>A solutions architect needs to estimate the total cost of ownership (TCO) for this workload before the migration.<br><br>Which solution will provide the required TCO information?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ước tính TCO cho workload trước khi migrate Kubernetes và PostgreSQL sang EKS và RDS.</li><li>Requirement: công cụ cho ra thông tin TCO.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Migration Evaluator</strong> thu thập dữ liệu on-premises (Collector), tạo scenario và xuất <strong>Quick Insights</strong> report có TCO.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Migration Evaluator cho TCO.</li><li><strong>B</strong>: ❌ Sai — DMS assessment đánh giá tương thích, không phải TCO.</li><li><strong>C</strong>: ❌ Sai — Application Migration Service không xuất TCO report.</li><li><strong>D</strong>: ❌ Sai — Cloud Economics Center chỉ là tài liệu, không tạo Cost and Usage Report từ đó.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Migration Evaluator</li><li>TCO</li><li>Collector</li><li>Quick Insights</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Ước tính TCO/business case trước migration → Migration Evaluator.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#528",
          "answers": [
            {
              "choice": "<p>A. Request access to Migration Evaluator. Run the Migration Evaluator Collector and import the data. Configure a scenario. Export a Quick Insights report from Migration Evaluator.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch AWS Database Migration Service (AWS DMS) for the on-premises database. Generate an assessment report. Create an estimate in AWS Pricing Calculator for the costs of the EKS migration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Initialize AWS Application Migration Service. Add the on-premises servers as source servers. Launch a test instance. Output a TCO report from Application Migration Service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Access the AWS Cloud Economics Center webpage to assess the AWS Cloud Value Framework. Create an AWS Cost and Usage report from the Cloud Value Framework.</p>",
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
      "question_id": "#529",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An events company runs a ticketing platform on AWS. The company’s customers configure and schedule their events on the platform. The events result in large increases of traffic to the platform. The company knows the date and time of each customer’s events.<br><br>The company runs the platform on an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster consists of Amazon EC2 On-Demand Instances that are in an Auto Scaling group. The Auto Scaling group uses a predictive scaling policy.<br><br>The ECS cluster makes frequent requests to an Amazon S3 bucket to download ticket assets. The ECS cluster and the S3 bucket are in the same AWS Region and the same AWS account. Traffic between the ECS cluster and the S3 bucket flows across a NAT gateway.<br><br>The company needs to optimize the cost of the platform without decreasing the platform's availability.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tối ưu chi phí nền tảng ticketing mà không giảm availability; biết trước thời gian các sự kiện; traffic S3 đi qua NAT gateway.</li><li>Ưu tiên: cost optimization.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Gateway VPC endpoint</strong> cho S3 miễn phí, loại bỏ phí NAT gateway data processing. <strong>Scheduled scaling</strong> dựa trên lịch sự kiện đã biết hiệu quả hơn predictive scaling, tránh over-provision.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — gateway endpoint cắt chi phí NAT.</li><li><strong>B</strong>: ❌ Sai — Spot có thể bị thu hồi, ảnh hưởng availability.</li><li><strong>C</strong>: ❌ Sai — Capacity Reservations tăng chi phí.</li><li><strong>D</strong>: ❌ Sai — Transfer Acceleration tăng chi phí, không cần cho cùng Region.</li><li><strong>E</strong>: ✅ Đúng — scheduled scaling khớp lịch sự kiện đã biết.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Gateway VPC endpoint S3</li><li>NAT gateway cost</li><li>Scheduled scaling</li><li>Known event times</li></ul><p>6. <strong>🧠 MẸO THI</strong></p><p>\"EC2 trong VPC tải nhiều từ S3 qua NAT → gateway endpoint; thời điểm tải đã biết → scheduled scaling.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#529",
          "answers": [
            {
              "choice": "<p>A. Create a gateway VPC endpoint for the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add another ECS capacity provider that uses an Auto Scaling group of Spot Instances. Configure the new capacity provider strategy to have the same weight as the existing capacity provider strategy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create On-Demand Capacity Reservations for the applicable instance type for the time period of the scheduled scaling policies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Transfer Acceleration on the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replace the predictive scaling policy with scheduled scaling policies for the scheduled events.</p>",
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
