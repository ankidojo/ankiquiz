var SAP_C02_VJP_Training_Test_1 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#207",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company is migrating its legacy on-premises .NET application to AWS. The application runs on load-balanced frontend web servers, load-balanced application servers, and a Microsoft SQL Server database.<br><br>The company wants to use AWS managed services where possible and does not want to rewrite the application. A solutions architect needs to implement a solution to resolve scaling issues and minimize licensing costs as the application scales.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng .NET (web, app tier, SQL Server) lên AWS, không rewrite.</li><li>Requirement: dùng managed service, giải quyết scaling, giảm chi phí license.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora PostgreSQL với Babelfish</strong> cho phép ứng dụng SQL Server hoạt động gần như không đổi code, bỏ license SQL Server. Web/app tier trên EC2 Auto Scaling + ALB giải quyết scaling.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Babelfish giảm license, ít sửa code, Auto Scaling + ALB.</li><li><strong>B</strong>: ❌ Sai — DMS không tạo image server; DynamoDB cần rewrite hoàn toàn.</li><li><strong>C</strong>: ❌ Sai — containerize + EKS là refactor lớn; RDS for SQL Server vẫn tốn license.</li><li><strong>D</strong>: ❌ Sai — chuyển sang Lambda, S3, Athena là rewrite toàn bộ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Babelfish for Aurora PostgreSQL</li><li>no rewrite</li><li>minimize licensing costs</li><li>Auto Scaling + ALB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp SQL Server cần bỏ license mà không rewrite → nghĩ ngay đến <strong>Aurora PostgreSQL Babelfish</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Deploy Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer for the web tier and for the application tier. Use Amazon Aurora PostgreSQL with Babelfish turned on to replatform the SQL Server database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create images of all the servers by using AWS Database Migration Service (AWS DMS). Deploy Amazon EC2 instances that are based on the on-premises imports. Deploy the instances in an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon DynamoDB as the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Containerize the web frontend tier and the application tier. Provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Create an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon RDS for SQL Server to host the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Separate the application functions into AWS Lambda functions. Use Amazon API Gateway for the web frontend tier and the application tier. Migrate the data to Amazon S3. Use Amazon Athena to query the data.</p>",
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
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to build a disaster recovery (DR) solution for its ecommerce website. The web application is hosted on a fleet of t3.large Amazon EC2 instances and uses an Amazon RDS for MySQL DB instance. The EC2 instances are in an Auto Scaling group that extends across multiple Availability Zones.<br><br>In the event of a disaster, the web application must fail over to the secondary environment with an RPO of 30 seconds and an RTO of 10 minutes.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR cho website chạy EC2 (Auto Scaling) + RDS for MySQL.</li><li>Requirement: RPO 30 giây, RTO 10 phút.</li><li>Ưu tiên: MOST cost-effective (kiểu pilot light / warm standby tối thiểu).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-Region read replica cho RDS cho RPO tính bằng giây. <strong>AWS Elastic Disaster Recovery</strong> replicate liên tục EC2, DR Region chạy capacity tối thiểu rồi scale lên khi failover; Route 53 failover routing tự động chuyển traffic.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Backup không thể backup mỗi 30 giây, restore từ backup không đạt RTO 10 phút, geolocation routing không phải failover.</li><li><strong>B</strong>: ✅ Đúng — read replica + Elastic Disaster Recovery + min capacity + failover routing, rẻ nhất mà đạt RPO/RTO.</li><li><strong>C</strong>: ❌ Sai — restore thủ công, simple routing không có health-check failover, backup 30 giây không khả thi.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Aurora global database và full capacity ở DR Region tốn kém; DB hiện tại là RDS for MySQL, phải migrate.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RPO 30 giây / RTO 10 phút</li><li>Elastic Disaster Recovery</li><li>cross-Region read replica</li><li>Route 53 failover routing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR cost-effective + RPO tính bằng giây → nghĩ ngay đến <strong>read replica + Elastic Disaster Recovery chạy minimum capacity (pilot light)</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Recover the EC2 instances from the latest EC2 backup. Use an Amazon Route 53 geolocation routing policy to automatically fail over to the DR Region in the event of a disaster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the EC2 instances at the minimum capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster. Increase the desired capacity of the Auto Scaling group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Manually restore the backed-up data on new instances. Use an Amazon Route 53 simple routing policy to automatically fail over to the DR Region in the event of a disaster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create an Amazon Aurora global database. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the Auto Scaling group of EC2 instances at full capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster.</p>",
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
      "question_id": "#193",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large education company recently introduced Amazon Workspaces to provide access to internal applications across multiple universities. The company is storing user profiles on an Amazon FSx for Windows File Server file system. The file system is configured with a DNS alias and is connected to a self-managed Active Directory. As more users begin to use the Workspaces, login time increases to unacceptable levels.<br><br>An investigation reveals a degradation in performance of the file system. The company created the file system on HDD storage with a throughput of 16 MBps. A solutions architect must improve the performance of the file system during a defined maintenance window.<br><br>What should the solutions architect do to meet these requirements with the LEAST administrative effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>FSx for Windows File Server dùng HDD 16 MBps làm chậm login Workspaces.</li><li>Cần tăng hiệu năng trong maintenance window.</li><li>Ưu tiên: LEAST administrative effort.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>FSx for Windows cho phép cập nhật throughput capacity và chuyển storage type HDD sang SSD ngay trên file system hiện có qua console, không cần migrate dữ liệu hay đổi DNS alias.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Backup/restore sang file system mới, phải đổi DNS và xóa cũ.</li><li><strong>B</strong>: ✅ Đúng — Update tại chỗ, ít thao tác nhất.</li><li><strong>C</strong>: ❌ Sai — DataSync agent + EC2 + task, phức tạp.</li><li><strong>D</strong>: ❌ Sai — Shadow copies không phải cơ chế migrate, nhiều bước thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>FSx for Windows: update throughput và storage type in place</li><li>Least administrative effort</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cải thiện FSx for Windows → sửa trực tiếp throughput/storage type, không migrate.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#193",
          "answers": [
            {
              "choice": "<p>A. Use AWS Backup to create a point-in-time backup of the file system. Restore the backup to a new FSx for Windows File Server file system. Select SSD as the storage type. Select 32 MBps as the throughput capacity. When the backup and restore process is completed, adjust the DNS alias accordingly. Delete the original file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Disconnect users from the file system. In the Amazon FSx console, update the throughput capacity to 32 MBps. Update the storage type to SSD. Reconnect users to the file system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS DataSync agent onto a new Amazon EC2 instance. Create a task. Configure the existing file system as the source location. Configure a new FSx for Windows File Server file system with SSD storage and 32 MBps of throughput as the target location. Schedule the task. When the task is completed, adjust the DNS alias accordingly. Delete the original file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable shadow copies on the existing file system by using a Windows PowerShell command. Schedule the shadow copy job to create a point-in-time backup of the file system. Choose to restore previous versions. Create a new FSx for Windows File Server file system with SSD storage and 32 MBps of throughput. When the copy job is completed, adjust the DNS alias. Delete the original file system.</p>",
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
      "question_id": "#311",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application on Amazon EC2 instances and AWS Lambda functions. The EC2 instances experience a continuous and stable load. The Lambda functions experience a varied and unpredictable load. The application includes a caching layer that uses an Amazon MemoryDB for Redis cluster.<br><br>A solutions architect must recommend a solution to minimize the company's overall monthly costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tối thiểu hóa chi phí hàng tháng cho EC2 (tải ổn định), Lambda (tải biến động), MemoryDB.</li><li>Requirement quyết định: chọn đúng loại commitment cho từng dịch vụ.</li><li>Ưu tiên: cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>EC2 tải ổn định dùng <strong>EC2 Instance Savings Plan</strong> (giảm sâu nhất). <strong>Compute Savings Plan</strong> áp dụng cho Lambda với mức tiêu thụ tối thiểu. MemoryDB dùng <strong>reserved nodes</strong> vì Savings Plan không áp dụng cho MemoryDB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Mỗi dịch vụ dùng đúng commitment phù hợp.</li><li><strong>B</strong>: ❌ Sai — Lambda reserved concurrency không giảm chi phí, chỉ đảm bảo concurrency.</li><li><strong>C</strong>: ❌ Sai — Compute Savings Plan không áp dụng cho MemoryDB.</li><li><strong>D</strong>: ❌ Sai — Compute Savings Plan không cover MemoryDB; reserved concurrency không giảm giá.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EC2 Instance Savings Plan</li><li>Compute Savings Plan</li><li>MemoryDB reserved nodes</li><li>reserved concurrency không giảm giá</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ElastiCache/MemoryDB/RDS giảm giá\" → <strong>reserved nodes</strong>, không phải Savings Plan.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#311",
          "answers": [
            {
              "choice": "<p>A. Purchase an EC2 instance Savings Plan to cover the EC2 instances. Purchase a Compute Savings Plan for Lambda to cover the minimum expected consumption of the Lambda functions. Purchase reserved nodes to cover the MemoryDB cache nodes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase a Compute Savings Plan to cover the EC2 instances. Purchase Lambda reserved concurrency to cover the expected Lambda usage. Purchase reserved nodes to cover the MemoryDB cache nodes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase a Compute Savings Plan to cover the entire expected cost of the EC2 instances, Lambda functions, and MemoryDB cache nodes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase a Compute Savings Plan to cover the EC2 instances and the MemoryDB cache nodes. Purchase Lambda reserved concurrency to cover the expected Lambda usage.</p>",
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
      "question_id": "#192",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The core business logic is running on a set of Amazon EC2 instances in an Auto Scaling group. An Application Load Balancer (ALB) distributes traffic to the EC2 instances. Amazon Route 53 record api.example.com is pointing to the ALB.<br><br>The company's development team makes major updates to the business logic. The company has a rule that when changes are deployed, only 10% of customers can receive the new logic during a testing window. A customer must use the same version of the business logic during the testing window.<br><br>How should the company deploy the updates to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Canary deploy: chỉ 10% customers nhận logic mới trong testing window.</li><li>Mỗi customer phải luôn dùng cùng một version.</li><li>Ưu tiên: weighted traffic + sticky session.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ALB listener rule weighted target groups (90/10) chia traffic theo tỷ lệ, kết hợp target group stickiness đảm bảo mỗi customer gắn với một target group.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Route 53 weighted không đảm bảo sticky, DNS cache, thêm ALB tốn kém.</li><li><strong>B</strong>: ✅ Đúng — Weighted target groups + stickiness.</li><li><strong>C</strong>: ❌ Sai — Rolling update không kiểm soát 10% khách hàng và không sticky.</li><li><strong>D</strong>: ❌ Sai — Least outstanding requests không điều khiển tỷ lệ 10%.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ALB weighted target groups</li><li>Target group stickiness</li><li>Canary 10%</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Canary theo % + cùng khách cùng version → ALB weighted target groups + stickiness.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#192",
          "answers": [
            {
              "choice": "<p>A. Create a second ALB, and deploy the new logic to a set of EC2 instances in a new Auto Scaling group. Configure the ALB to distribute traffic to the EC2 instances. Update the Route 53 record to use weighted routing, and point the record to both of the ALBs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second target group that is referenced by the ALDeploy the new logic to EC2 instances in this new target group. Update the ALB listener rule to use weighted target groups. Configure ALB target group stickiness.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new launch configuration for the Auto Scaling group. Specify the launch configuration to use the AutoScalingRollingUpdate policy, and set the MaxBatchSize option to 10. Replace the launch configuration on the Auto Scaling group. Deploy the changes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a second Auto Scaling group that is referenced by the ALB. Deploy the new logic on a set of EC2 instances in this new Auto Scaling group. Change the ALB routing algorithm to least outstanding requests (LOR). Configure ALB session stickiness.</p>",
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
      "question_id": "#306",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research center is migrating to the AWS Cloud and has moved its on-premises 1 PB object storage to an Amazon S3 bucket. One hundred scientists are using this object storage to store their work-related documents. Each scientist has a personal folder on the object store. All the scientists are members of a single IAM user group.<br><br>The research center's compliance officer is worried that scientists will be able to access each other's work. The research center has a strict obligation to report on which scientist accesses which documents. The team that is responsible for these reports has little AWS experience and wants a ready-to-use solution that minimizes operational overhead.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ngăn mỗi scientist truy cập folder của người khác và báo cáo ai truy cập tài liệu nào.</li><li>Requirement quyết định: access control theo từng user + audit ở mức object, giải pháp ready-to-use, ít vận hành.</li><li>Ưu tiên: security, operational overhead thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Identity policy dùng biến <strong>${aws:username}</strong> trong S3 path giới hạn mỗi user vào folder riêng. <strong>CloudTrail data events</strong> ghi lại danh tính user cho từng object, truy vấn bằng <strong>Athena</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Policy variable aws:username gắn một lần cho cả group.</li><li><strong>B</strong>: ✅ Đúng — CloudTrail object-level events có danh tính IAM user, Athena query trực tiếp từ S3.</li><li><strong>C</strong>: ❌ Sai — S3 server access logging là best-effort, định dạng khó, không ghi danh tính IAM chuẩn bằng CloudTrail.</li><li><strong>D</strong>: ❌ Sai — Bucket policy cấp quyền cho cả group, mọi người vẫn xem được dữ liệu của nhau.</li><li><strong>E</strong>: ⚠️ Có thể nhưng không tối ưu — Thêm CloudWatch và connector, tăng độ phức tạp so với B.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>${aws:username}</li><li>CloudTrail data events</li><li>Athena</li><li>per-user folder</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"mỗi user một folder + audit ai truy cập object\" → nghĩ ngay đến <strong>policy variable</strong> + <strong>CloudTrail data events</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#306",
          "answers": [
            {
              "choice": "<p>A. Create an identity policy that grants the user read and write access. Add a condition that specifies that the S3 paths must be prefixed with $(aws:username). Apply the policy on the scientists’ IAM user group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a trail with AWS CloudTrail to capture all object-level events in the S3 bucket. Store the trail output in another S3 bucket. Use Amazon Athena to query the logs and generate reports.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 server access logging. Configure another S3 bucket as the target for log delivery. Use Amazon Athena to query the logs and generate reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 bucket policy that grants read and write access to users in the scientists’ IAM user group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure a trail with AWS CloudTrail to capture all object-level events in the S3 bucket and write the events to Amazon CloudWatch. Use the Amazon Athena CloudWatch connector to query the logs and generate reports.</p>",
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
      "question_id": "#296",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company implements a containerized application by using Amazon Elastic Container Service (Amazon ECS) and Amazon API Gateway The application data is stored in Amazon Aurora databases and Amazon DynamoDB databases. The company automates infrastructure provisioning by using AWS CloudFormation. The company automates application deployment by using AWS CodePipeline.<br><br>A solutions architect needs to implement a disaster recovery (DR) strategy that meets an RPO of 2 hours and an RTO of 4 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR cho ECS + API Gateway + Aurora + DynamoDB với RPO 2 giờ, RTO 4 giờ.</li><li>Requirement: MOST cost-effective.</li><li>Ưu tiên: RPO/RTO khá thoải mái nên dùng backup-restore.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Backup</strong> sao chép backup sang Region phụ, cộng với hạ tầng được dựng bằng CloudFormation/CodePipeline, <strong>Route 53 failover</strong> — chi phí thấp nhất mà vẫn nằm trong RPO/RTO.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — global database + global tables đắt, vượt yêu cầu.</li><li><strong>B</strong>: ❌ Sai — tự chế replication bằng DMS/Lambda phức tạp và tốn kém.</li><li><strong>C</strong>: ✅ Đúng — backup cross-Region là rẻ nhất, đáp ứng RPO/RTO.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — replicate liên tục, đắt hơn cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Backup, cross-Region copy, backup and restore, RPO 2h, RTO 4h</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"RPO/RTO tính bằng giờ + MOST cost-effective → backup and restore.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#296",
          "answers": [
            {
              "choice": "<p>A. Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon CloudFront with origin failover to route traffic to the secondary Region during a DR scenario.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS), Amazon EventBridge, and AWS Lambda to replicate the Aurora databases to a secondary AWS Region. Use DynamoDB Streams, EventBridge. and Lambda to replicate the DynamoDB databases to the secondary Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup to create backups of the Aurora databases and the DynamoDB databases in a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
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
      "question_id": "#319",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s solutions architect needs to provide secure Remote Desktop connectivity to users for Amazon EC2 Windows instances that are hosted in a VPC. The solution must integrate centralized user management with the company's on-premises Active Directory. Connectivity to the VPC is through the internet. The company has hardware that can be used to establish an AWS Site-to-Site VPN connection.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho user RDP vào EC2 Windows trong VPC, tích hợp AD on-premises, truy cập qua internet.</li><li>Requirement quyết định: secure, tích hợp AD tập trung, MOST cost-effectively.</li><li>Ưu tiên: cost, ít hạ tầng phải duy trì.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IAM Identity Center</strong> tích hợp AD qua <strong>AD Connector</strong>, cấp quyền theo permission set, rồi dùng <strong>Systems Manager Fleet Manager</strong> để RDP mà không cần bastion hay mở cổng RDP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Managed Microsoft AD cộng bastion host tốn chi phí cao.</li><li><strong>B</strong>: ✅ Đúng — AD Connector + Identity Center + Fleet Manager, không cần bastion, rẻ nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Phải chạy VPN và instance dựa vào AD on-premises, kém bảo mật và tốn công.</li><li><strong>D</strong>: ❌ Sai — Managed AD cộng Remote Desktop Gateway tốn chi phí và vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AD Connector</li><li>IAM Identity Center</li><li>Fleet Manager</li><li>Session Manager, không bastion</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"RDP đến EC2 + AD on-premises + cost\" → nghĩ ngay đến <strong>Systems Manager Fleet Manager</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#319",
          "answers": [
            {
              "choice": "<p>A. Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy an EC2 instance as a bastion host in the VPC. Ensure that the EC2 instance is joined to the domain. Use the bastion host to access the target instances through RDP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS IAM Identity Center (AWS Single Sign-On) to integrate with the on-premises Active Directory by using the AWS Directory Service for Microsoft Active Directory AD Connector. Configure permission sets against user groups for access to AWS Systems Manager. Use Systems Manager Fleet Manager to access the target instances through RDP.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement a VPN between the on-premises environment and the target VPC. Ensure that the target instances are joined to the on-premises Active Directory domain over the VPN connection. Configure RDP access through the VPN. Connect from the company’s network to the target instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy a Remote Desktop Gateway on AWS by using an AWS Quick Start. Ensure that the Remote Desktop Gateway is joined to the domain. Use the Remote Desktop Gateway to access the target instances through RDP.</p>",
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
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Load balance EC2 và mã hoá in-transit end-to-end từ client tới web server.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ALB terminate TLS bằng cert <strong>ACM</strong>, rồi re-encrypt tới EC2 qua HTTPS port 443 bằng cert (third-party) cài trên instance. ACM cert public không export được nên instance cần cert riêng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không thể export ACM public certificate để cài lên EC2.</li><li><strong>B</strong>: ❌ Sai — CloudFront không dùng target group làm origin và không đảm bảo end-to-end như yêu cầu.</li><li><strong>C</strong>: ✅ Đúng — ACM cert trên ALB, cert third-party trên EC2, forward 443.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — NLB không cần cert ở listener TCP; cài cert third-party lên NLB không phải cách chuẩn, ít linh hoạt hơn ALB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ACM không export cert public</li><li>ALB re-encrypt</li><li>End-to-end encryption</li><li>Port 443 tới instance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"end-to-end encryption với ALB\" → nghĩ ngay đến <strong>cert ACM ở ALB + cert riêng trên EC2</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the EC2 instances with a target group. Provision an SSL certificate using AWS Certificate Manager (ACM). Create an Amazon CloudFront distribution and configure it to use the SSL certificate. Set CloudFront to use the target group as the origin server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place the EC2 instances behind an Application Load Balancer (ALB) Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Provision a third-party SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the EC2 instances behind a Network Load Balancer (NLB). Provision a third-party SSL certificate and install it on the NLB and on each EC2 instance. Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances.</p>",
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
      "question_id": "#292",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate an on-premises SFTP site to AWS. The SFTP site currently runs on a Linux VM. Uploaded files are made available to downstream applications through an NFS share.<br><br>As part of the migration to AWS, a solutions architect must implement high availability. The solution must provide external vendors with a set of static public IP addresses that the vendors can allow. The company has set up an AWS Direct Connect connection between its on-premises data center and its VPC.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate SFTP on-premises sang AWS, cần HA và static public IP cho vendor.</li><li>Requirement: LEAST operational overhead, downstream dùng NFS.</li><li>Ưu tiên: managed SFTP + file system NFS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Transfer Family</strong> với <strong>internet-facing VPC endpoint</strong> gắn <strong>Elastic IP</strong> mỗi subnet (HA, IP tĩnh), lưu file vào <strong>EFS</strong> (NFS, multi-AZ).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Transfer Family + EIP mỗi subnet + EFS multi-AZ.</li><li><strong>B</strong>: ❌ Sai — public endpoint không có static IP có thể cấp.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — một EC2 đơn không HA, quản lý nhiều.</li><li><strong>D</strong>: ❌ Sai — Application Migration Service không migrate VM thành Transfer Family, FSx for Lustre không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transfer Family, VPC endpoint, Elastic IP, EFS, static IP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"SFTP managed cần static IP → Transfer Family VPC endpoint + Elastic IP; NFS → EFS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#292",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Transfer Family server. Configure an internet-facing VPC endpoint for the Transfer Family server. Specify an Elastic IP address for each subnet. Configure the Transfer Family server to place files into an Amazon Elastic File System (Amazon EFS) file system that is deployed across multiple Availability Zones. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Transfer Family server. Configure a publicly accessible endpoint for the Transfer Family server. Configure the Transfer Family server to place files into an Amazon Elastic File System (Amazon EFS) file system that is deployed across multiple Availability Zones. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Application Migration Service to migrate the existing Linux VM to an Amazon EC2 instance. Assign an Elastic IP address to the EC2 instance. Mount an Amazon Elastic File System (Amazon EFS) file system to the EC2 instance. Configure the SFTP server to place files in the EFS file system. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Migration Service to migrate the existing Linux VM to an AWS Transfer Family server. Configure a publicly accessible endpoint for the Transfer Family server. Configure the Transfer Family server to place files into an Amazon FSx for Lustre file system that is deployed across multiple Availability Zones. Modify the configuration on the downstream applications that access the existing NFS share to mount the FSx for Lustre endpoint instead.</p>",
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
      "question_id": "#291",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company ingests and processes streaming market data. The data rate is constant. A nightly process that calculates aggregate statistics takes 4 hours to complete. The statistical analysis is not critical to the business, and data points are processed during the next iteration if a particular run fails.<br><br>The current architecture uses a pool of Amazon EC2 Reserved Instances with 1-year reservations. These EC2 instances run full time to ingest and store the streaming data in attached Amazon Elastic Block Store (Amazon EBS) volumes. A scheduled script launches EC2 On-Demand Instances each night to perform the nightly processing. The instances access the stored data from NFS shares on the ingestion servers. The script terminates the instances when the processing is complete.<br><br>The Reserved Instance reservations are expiring. The company needs to determine whether to purchase new reservations or implement a new design.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý batch ban đêm 4 giờ, không critical, có thể chạy lại.</li><li>Requirement: MOST cost-effective.</li><li>Ưu tiên: loại bỏ instance chạy 24/7, dùng Spot.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Kinesis Data Firehose</strong> lưu vào <strong>S3</strong>, và <strong>AWS Batch</strong> với <strong>Spot Instances</strong> xử lý đêm; workload chịu được gián đoạn nên Spot rất phù hợp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — dùng On-Demand đắt hơn Spot.</li><li><strong>B</strong>: ✅ Đúng — Firehose + S3 + Batch Spot, chi phí thấp nhất.</li><li><strong>C</strong>: ❌ Sai — vẫn giữ Reserved Instances ingest 3 năm, cam kết dài hạn đắt.</li><li><strong>D</strong>: ❌ Sai — Redshift cho 4 giờ/đêm tốn kém.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Firehose, S3, AWS Batch, Spot Instances, fault-tolerant batch</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Batch không critical, chịu được lỗi → Spot (AWS Batch).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#291",
          "answers": [
            {
              "choice": "<p>A. Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use a scheduled script to launch a fleet of EC2 On-Demand Instances each night to perform the batch processing of the S3 data. Configure the script to terminate the instances when the processing is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use AWS Batch with Spot Instances to perform nightly processing with a maximum Spot price that is 50% of the On-Demand price.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the ingestion process to use a fleet of EC2 Reserved Instances with 3-year reservations behind a Network LoadBalancer. Use AWS Batch with Spot Instances to perform nightly processing with a maximum Spot price that is 50% of the On-Demand price.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon Redshift. Use Amazon EventBridge to schedule an AWS Lambda function to run nightly to query Amazon Redshift to generate the daily statistics.</p>",
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
      "question_id": "#290",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is serving files to its customers through an SFTP server that is accessible over the internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached. Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses.<br><br>A solutions architect must implement a solution to improve availability, minimize the complexity of infrastructure management, and minimize the disruption to customers who access files. The solution must not change the way customers connect.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>SFTP đơn trên EC2 + Elastic IP, cần tăng availability.</li><li>Requirement: ít quản lý hạ tầng, không đổi cách khách kết nối (giữ Elastic IP, security group).</li><li>Ưu tiên: managed SFTP.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Transfer Family</strong> với endpoint <strong>VPC-hosted internet-facing</strong> cho phép gắn Elastic IP và security group, lưu vào S3.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — public endpoint không hỗ trợ gắn Elastic IP và security group.</li><li><strong>B</strong>: ✅ Đúng — VPC endpoint gắn được EIP + security group, giữ nguyên cách kết nối.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự quản lý SFTP trên Fargate + NLB, nhiều overhead.</li><li><strong>D</strong>: ❌ Sai — EBS multi-attach không phù hợp cho SFTP và quản lý phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transfer Family, VPC endpoint internet-facing, Elastic IP, security group</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"SFTP managed cần giữ IP tĩnh/security group → Transfer Family VPC endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#290",
          "answers": [
            {
              "choice": "<p>A. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted, internet-facing endpoint. Associate the SFTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by using the task definition, and place a Network Load Balancer (NLB) in front of the service. When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NLB. Sync all files from the SFTP server to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used for SFTP file hosting. Create a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume. Configure the Auto Scaling group to automatically add instances behind the NLB. Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.</p>",
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
      "question_id": "#289",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed its database on an Amazon RDS for MySQL DB instance in the us-east-1 Region. The company needs to make its data available to customers in Europe. The customers in Europe must have access to the same data as customers in the United States (US) and will not tolerate high application latency or stale data. The customers in Europe and the customers in the US need to write to the database. Both groups of customers need to see updates from the other group in real time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RDS MySQL ở us-east-1, cần phục vụ khách hàng châu Âu với latency thấp, dữ liệu không cũ, cả hai vùng đều ghi.</li><li>Requirement: write từ nhiều Region, đồng bộ gần real time.</li><li>Ưu tiên: Aurora Global Database với write forwarding.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chuyển RDS MySQL sang <strong>Aurora</strong> bằng Aurora replica (tạm dừng ghi, promote), thêm <strong>eu-west-1</strong> làm secondary Region và bật <strong>write forwarding</strong> để ghi ở Europe được chuyển về primary.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — quy trình migrate hợp lệ qua Aurora replica rồi global database + write forwarding.</li><li><strong>B</strong>: ❌ Sai — RDS MySQL cross-Region replica là read-only, không replicate ngược.</li><li><strong>C</strong>: ❌ Sai — logical replication và write forwarding không áp dụng cho RDS MySQL.</li><li><strong>D</strong>: ❌ Sai — không thể \"convert\" trực tiếp RDS instance thành Aurora cluster theo cách này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Aurora Global Database, write forwarding, Aurora replica migration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Ghi đa Region với MySQL → Aurora Global Database + write forwarding.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#289",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance. Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a cross-Region replica in eu-west-1 for the RDS for MySQL DB instance. Configure the replica to replicate write queries back to the primary DB instance. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy the most recent snapshot from the RDS for MySQL DB instance to eu-west-1. Create a new RDS for MySQL DB instance in eu-west-1 from the snapshot. Configure MySQL logical replication from us-east-1 to eu-west-1. Enable write forwarding on the DB cluster. Deploy the application in eu-wes&amp;1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the RDS for MySQL DB instance to an Amazon Aurora MySQL DB cluster. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.</p>",
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
      "question_id": "#288",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The will then overlay text on the uploaded images, which will then be published on the company website.<br><br>Which design should a solutions architect implement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Upload ảnh toàn cầu, xử lý overlay text, publish lên website.</li><li>Requirement: thiết kế decoupled, scalable.</li><li>Ưu tiên: S3 + queue + auto scaling + CDN.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 lưu ảnh, event notification gửi vào <strong>SQS</strong>, EC2 fleet xử lý và scale theo queue depth, ghi kết quả vào S3 khác, <strong>CloudFront</strong> phân phối từ S3.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng CloudWatch Logs làm queue và CloudFront origin là một EC2, không scale/độ tin cậy.</li><li><strong>B</strong>: ❌ Sai — SNS không cho phép \"pull\" message, và scale theo SNS metric không phù hợp.</li><li><strong>C</strong>: ✅ Đúng — S3 + SQS + auto scaling theo queue depth + CloudFront.</li><li><strong>D</strong>: ❌ Sai — EBS không chia sẻ rộng rãi, Spot không ổn định, EventBridge không scale EC2.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 event notification, SQS queue depth, decoupling, CloudFront</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Xử lý bất đồng bộ file upload → S3 + SQS + Auto Scaling theo queue depth.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#288",
          "answers": [
            {
              "choice": "<p>A. Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS. Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket. Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.</p>",
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
      "question_id": "#287",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must update an application environment within AWS Elastic Beanstalk using a blue/green deployment methodology. The solutions architect creates an environment that is identical to the existing application environment and deploys the application to the new environment.<br><br>What should be done next to complete the update?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Blue/green trên <strong>Elastic Beanstalk</strong>, đã tạo environment mới và deploy.</li><li>Requirement: bước tiếp theo để hoàn tất.</li><li>Ưu tiên: cách native của Beanstalk.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>Swap Environment URLs</strong> để hoán đổi CNAME giữa hai environment, chuyển traffic sang environment mới.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Route 53 làm thủ công, không phải cách native.</li><li><strong>B</strong>: ✅ Đúng — Swap Environment URLs là tính năng chuẩn.</li><li><strong>C</strong>: ❌ Sai — thay launch configuration không chuyển traffic.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — sửa DNS thủ công, chậm hơn do TTL.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Elastic Beanstalk, blue/green, Swap Environment URLs</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Beanstalk blue/green → Swap Environment URLs.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#287",
          "answers": [
            {
              "choice": "<p>A. Redirect to the new environment using Amazon Route 53.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Select the Swap Environment URLs option.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the Auto Scaling launch configuration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the DNS records to point to the green environment.</p>",
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
      "question_id": "#286",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the internet.<br><br>What is the MOST operationally efficient way to enforce this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng trăm account trong Organizations, cho phép team tự tạo S3 access point nhưng chỉ network origin là VPC.</li><li>Requirement: MOST operationally efficient.</li><li>Ưu tiên: guardrail tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SCP</strong> ở root deny `s3:CreateAccessPoint` trừ khi `s3:AccessPointNetworkOrigin` là `VPC`, áp dụng cho mọi account một lần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — resource policy của access point không kiểm soát hành động tạo access point.</li><li><strong>B</strong>: ✅ Đúng — SCP tập trung, không cần triển khai từng account.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — StackSets IAM policy phải triển khai/duy trì từng account và không chặn được principal khác.</li><li><strong>D</strong>: ❌ Sai — bucket policy không điều khiển việc tạo access point.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP, s3:AccessPointNetworkOrigin, s3:CreateAccessPoint, guardrail</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Ép chính sách toàn Organization → SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#286",
          "answers": [
            {
              "choice": "<p>A. Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.</p>",
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
      "question_id": "#284",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours.<br><br>The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB. The database table uses provisioned throughput mode with 100,000 RCUs and 80,000 WCUs to match known peak resource consumption.<br><br>The company wants to reduce its DynamoDB cost and minimize the operational overhead for the IT staff.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DynamoDB provisioned theo peak (4 giờ/ngày), traffic thấp phần còn lại và dự đoán được.</li><li>Requirement: giảm cost, ít operational overhead.</li><li>Ưu tiên: cân nhắc capacity theo tải.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB auto scaling</strong> tự điều chỉnh RCU/WCU theo tải (lên khi peak, xuống ngoài peak), vẫn rẻ hơn on-demand với tải ổn định có thể dự đoán.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — giảm capacity gây throttling vào peak.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — on-demand đắt hơn với tải lớn và dự đoán được.</li><li><strong>C</strong>: ✅ Đúng — scale theo lịch tải, tự động, chi phí thấp.</li><li><strong>D</strong>: ❌ Sai — reserved capacity cho peak vẫn trả cả ngày.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DynamoDB auto scaling, provisioned capacity, predictable traffic</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Tải DynamoDB dự đoán được, dao động → provisioned + auto scaling; khó đoán → on-demand.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#284",
          "answers": [
            {
              "choice": "<p>A. Reduce the provisioned RCUs and WCUs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the DynamoDB table to use on-demand capacity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Dynamo DB auto scaling for the table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day.</p>",
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
      "question_id": "#283",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gửi dữ liệu on-premises tới S3 ở 3 account, riêng tư, không qua internet.</li><li>Requirement: chưa có kết nối dedicated.</li><li>Ưu tiên: private connectivity tới S3 từ on-premises.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Direct Connect</strong> với <strong>private VIF</strong> vào VPC, cộng <strong>S3 interface endpoint</strong> (gateway endpoint không dùng được từ on-premises) để truy cập S3 qua private IP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Direct Connect private VIF tới VPC ở networking account.</li><li><strong>B</strong>: ❌ Sai — public VIF đi tới public endpoint của S3, không vào private VPC.</li><li><strong>C</strong>: ✅ Đúng — interface endpoint truy cập được từ on-premises qua DX.</li><li><strong>D</strong>: ❌ Sai — gateway endpoint không truy cập được từ on-premises.</li><li><strong>E</strong>: ❌ Sai — VPC peering không giúp tới S3 (bucket không nằm trong VPC).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Direct Connect private VIF, S3 interface endpoint, PrivateLink</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"On-premises tới S3 riêng tư → DX private VIF + S3 interface endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#283",
          "answers": [
            {
              "choice": "<p>A. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 interface endpoint in the networking account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 gateway endpoint in the networking account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account.</p>",
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
      "question_id": "#282",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company recently experienced an unexpected increase in Amazon RDS and Amazon DynamoDB costs. The company needs to increase visibility into details of AWS Billing and Cost Management. There are various accounts associated with AWS Organizations, including many development and production accounts. There is no consistent tagging strategy across the organization, but there are guidelines in place that require all infrastructure to be deployed using AWS CloudFormation with consistent tagging. Management requires cost center numbers and project ID numbers for all existing and future DynamoDB tables and RDS instances.<br><br>Which strategy should the solutions architect provide to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tăng visibility chi phí RDS/DynamoDB theo cost center và project ID, nhiều account trong Organizations.</li><li>Requirement: cho cả tài nguyên hiện có và tương lai.</li><li>Ưu tiên: tag đồng nhất và có enforce.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Tag Editor</strong> gắn tag cho tài nguyên hiện có, <strong>cost allocation tags</strong> để Billing hiển thị theo tag, và <strong>SCP</strong> chặn tạo tài nguyên thiếu tag cho tương lai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không có enforce cho tài nguyên mới.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Config + Lambda tự gắn tag không biết giá trị cost center/project ID đúng, phức tạp.</li><li><strong>C</strong>: ✅ Đúng — tag hiện có, kích hoạt cost allocation tag, SCP enforce.</li><li><strong>D</strong>: ❌ Sai — chỉ sửa federated roles, không bao phủ toàn tổ chức và không tag tài nguyên hiện có.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Tag Editor, cost allocation tags, SCP, Organizations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Enforce tag toàn tổ chức → SCP; chi phí theo tag → cost allocation tags.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#282",
          "answers": [
            {
              "choice": "<p>A. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Config rule to alert the finance team of untagged resources. Create a centralized AWS Lambda based solution to tag untagged RDS databases and DynamoDB resources every hour using a cross-account role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID. Use SCPs to restrict resource creation that do not have the cost center and project ID on the resource.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources. Update existing federated roles to restrict privileges to provision resources that do not include the cost center and project ID on the resource.</p>",
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
      "question_id": "#281",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.<br><br>The company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dữ liệu ORC, truy vấn SQL ad hoc ngắn (&lt;15 phút), chỉ chạy 5 giờ mỗi ngày.</li><li>Requirement: MOST cost-effective.</li><li>Ưu tiên: bỏ cluster chạy 24/7, trả theo query.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lưu ORC trên <strong>S3</strong> (rẻ) và dùng <strong>Athena</strong> (serverless, trả theo dữ liệu quét) với <strong>Glue Data Catalog</strong>; không phải trả tiền khi không query.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Redshift Spectrum cần cluster Redshift chạy sẵn.</li><li><strong>B</strong>: ✅ Đúng — serverless, trả theo query, đọc trực tiếp ORC trên S3.</li><li><strong>C</strong>: ❌ Sai — vẫn cần EMR cluster persistent.</li><li><strong>D</strong>: ❌ Sai — Redshift cluster tốn kém, chỉ dùng 5 giờ/ngày.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Athena, S3, Glue Data Catalog, ORC, serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Query SQL thỉnh thoảng, dữ liệu trên S3, cost thấp → Athena.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#281",
          "answers": [
            {
              "choice": "<p>A. Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store data in Amazon Redshift. Use Amazon Redshift to query data.</p>",
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
      "question_id": "#280",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a Windows-based desktop application that is packaged and deployed to the users' Windows machines. The company recently acquired another company that has employees who primarily use machines with a Linux operating system. The acquiring company has decided to migrate and rehost the Windows-based desktop application to AWS.<br><br>All employees must be authenticated before they use the application. The acquiring company uses Active Directory on premises but wants a simplified way to manage access to the application on AWS for all the employees.<br><br>Which solution will rehost the application on AWS with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Rehost ứng dụng desktop Windows cho cả user Windows và Linux.</li><li>Requirement: LEAST development effort, có xác thực.</li><li>Ưu tiên: không refactor, truy cập qua browser.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AppStream 2.0</strong> stream ứng dụng desktop qua browser, không phụ thuộc OS của client, không cần sửa code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — WorkSpaces cho từng người tốn kém, Cognito identity pools không phải cơ chế đăng nhập desktop.</li><li><strong>B</strong>: ❌ Sai — Windows RDP khó cho user Linux và tự quản lý nhiều.</li><li><strong>C</strong>: ✅ Đúng — AppStream 2.0 stream app qua browser với effort thấp nhất.</li><li><strong>D</strong>: ❌ Sai — refactor/containerize tốn nhiều development effort nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AppStream 2.0, rehost, browser streaming, image builder</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Desktop app cũ cần truy cập qua browser, không sửa code → AppStream 2.0.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#280",
          "answers": [
            {
              "choice": "<p>A. Set up and provision an Amazon Workspaces virtual desktop for every employee. Implement authentication by using Amazon Cognito identity pools. Instruct employees to run the application from their provisioned Workspaces virtual desktops.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group of Windows-based Amazon EC2 instances. Join each EC2 instance to the company’s Active Directory domain. Implement authentication by using the Active Directory that is running on premises. Instruct employees to run the application by using a Windows remote desktop.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon AppStream 2.0 image builder to create an image that includes the application and the required configurations. Provision an AppStream 2.0 On-Demand fleet with dynamic Fleet Auto Scaling policies for running the image. Implement authentication by using AppStream 2.0 user pools. Instruct the employees to access the application by starting browser-based AppStream 2.0 streaming sessions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Refactor and containerize the application to run as a web-based application. Run the application in Amazon Elastic Container Service (Amazon ECS) on AWS Fargate with step scaling policies. Implement authentication by using Amazon Cognito user pools. Instruct the employees to run the application from their browsers.</p>",
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
      "question_id": "#278",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to deploy a new private intranet service on Amazon EC2 instances inside a VPC. An AWS Site-to-Site VPN connects the VPC to the company's on-premises network. The new service must communicate with existing on-premises services. The on-premises services are accessible through the use of hostnames that reside in the company.example DNS zone. This DNS zone is wholly hosted on premises and is available only on the company's private network.<br><br>A solutions architect must ensure that the new service can resolve hostnames on the company.example domain to integrate with existing services.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 trong VPC cần resolve hostname của zone `company.example` chỉ nằm trên on-premises DNS.</li><li>Hướng truy vấn: từ AWS đi về on-premises.</li><li>Ưu tiên: giải pháp managed, hybrid DNS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Route 53 Resolver outbound endpoint</strong> cùng <strong>Resolver rule</strong> (forwarding rule) chuyển query của `company.example` tới on-premises name servers qua VPN.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — private hosted zone rỗng trên Route 53 không có bản ghi nào, và zone on-premises là private nên không delegate NS được.</li><li><strong>B</strong>: ✅ Đúng — outbound endpoint + forwarding rule là cách chuẩn.</li><li><strong>C</strong>: ❌ Sai — inbound endpoint dành cho query từ on-premises vào AWS, ngược chiều.</li><li><strong>D</strong>: ❌ Sai — hosts file thủ công, không scale và khó bảo trì.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Route 53 Resolver, outbound endpoint, forwarding rule, hybrid DNS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"AWS resolve tên on-premises → outbound endpoint; on-premises resolve tên AWS → inbound endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#278",
          "answers": [
            {
              "choice": "<p>A. Create an empty private zone in Amazon Route 53 for company.example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on DNS hostnames for the VPC. Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on DNS hostnames for the VPC. Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configur&amp;the on-premises DNS server to forward requests for company.example to the new resolver.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge rule to run the document when an instance is entering the running state.</p>",
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
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A health insurance company stores personally identifiable information (PII) in an Amazon S3 bucket. The company uses server-side encryption with S3 managed encryption keys (SSE-S3) to encrypt the objects. According to a new requirement, all current and future objects in the S3 bucket must be encrypted by keys that the company’s security team manages. The S3 bucket does not have versioning enabled.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển toàn bộ object hiện tại và tương lai sang key do security team quản lý (không phải SSE-S3).</li><li>Requirement chính: object cũ phải được mã hóa lại, object mới bắt buộc dùng key mới.</li><li>Ưu tiên: security và quyền kiểm soát key.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đổi default encryption sang <strong>SSE-KMS</strong> chỉ áp dụng cho object mới. Bucket policy deny PutObject không mã hóa ép mọi upload mới tuân thủ. Object cũ vẫn là SSE-S3 nên phải re-upload (copy lại) bằng AWS CLI để được mã hóa bằng KMS key.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — \"SSE-S3 with a customer managed key\" không tồn tại; SSE-S3 luôn do AWS quản lý key.</li><li><strong>B</strong>: ✅ Đúng — SSE-KMS + deny unencrypted PutObject + re-upload object cũ.</li><li><strong>C</strong>: ❌ Sai — bucket policy không thể \"tự động mã hóa\" khi GetObject/PutObject; policy chỉ allow/deny, và không mã hóa lại object cũ.</li><li><strong>D</strong>: ❌ Sai — \"AES-256 with a customer managed key\" là cách gọi sai (AES256 = SSE-S3), không dùng được CMK.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>SSE-S3 vs SSE-KMS, default encryption chỉ áp dụng object mới, re-upload/copy object cũ, bucket policy deny unencrypted PutObject.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Đổi encryption cho object hiện có\" → nghĩ ngay đến re-copy/re-upload; \"key do company quản lý\" → SSE-KMS.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. In the S3 bucket properties, change the default encryption to SSE-S3 with a customer managed key. Use the AWS CLI to re-upload all objects in the S3 bucket. Set an S3 bucket policy to deny unencrypted PutObject requests.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to automatically encrypt objects on GetObject and PutObject requests.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the S3 bucket properties, change the default encryption to AES-256 with a customer managed key. Attach a policy to deny unencrypted PutObject requests to any entities that access the S3 bucket. Use the AWS CLI to re-upload all objects in the S3 bucket.</p>",
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
      "question_id": "#197",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing sensitive data in an Amazon S3 bucket. The company must log all activities for objects in the S3 bucket and must keep the logs for 5 years. The company's security team also must receive an email notification every time there is an attempt to delete data in the S3 bucket.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Log mọi hoạt động trên object S3, giữ 5 năm, email cảnh báo khi có nỗ lực xóa dữ liệu.</li><li>Ưu tiên: MOST cost-effectively. Chọn 3.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudTrail data events ghi object-level activity. S3 events qua EventBridge tới SNS gửi email khi delete. Log lưu trong bucket riêng với Lifecycle policy chuyển sang storage rẻ và giữ 5 năm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CloudTrail data events log mọi hoạt động object.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Server access logging best-effort, không phải audit log chuẩn.</li><li><strong>C</strong>: ❌ Sai — S3 không gửi trực tiếp tới SES.</li><li><strong>D</strong>: ✅ Đúng — EventBridge + SNS email notification.</li><li><strong>E</strong>: ❌ Sai — S3 không gửi log trực tiếp vào Timestream.</li><li><strong>F</strong>: ✅ Đúng — Bucket log với Lifecycle giữ 5 năm, rẻ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudTrail data events</li><li>EventBridge + SNS</li><li>S3 Lifecycle retention</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Audit object-level → CloudTrail data events; cảnh báo email → EventBridge/SNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#197",
          "answers": [
            {
              "choice": "<p>A. Configure AWS CloudTrail to log S3 data events.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure S3 server access logging for the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon S3 to send object deletion events to Amazon Simple Email Service (Amazon SES).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon S3 to send object deletion events to an Amazon EventBridge event bus that publishes to an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure Amazon S3 to send the logs to Amazon Timestream with data storage tiering.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure a new S3 bucket to store the logs with an S3 Lifecycle policy.</p>",
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
      "question_id": "#179",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a solution to process events. The solution must have the ability to scale in and out based on the number of events that the solution receives. If a processing error occurs, the event must move into a separate queue for review.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý event, tự scale in/out theo số lượng event.</li><li>Event lỗi phải chuyển vào queue riêng để review.</li><li>Ưu tiên: scalability tự động, xử lý lỗi bằng queue.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SNS + AWS Lambda tự scale theo số event. Lambda on-failure destination gửi event xử lý lỗi sang Amazon SQS queue để review, đúng yêu cầu mà không cần quản lý server.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Serverless, tự scale, on-failure destination là SQS.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Scale theo ApproximateAgeOfOldestMessage không phản ánh tốt số event; ứng dụng phải tự ghi DLQ, nhiều overhead.</li><li><strong>C</strong>: ❌ Sai — Không có cơ chế chuyển event lỗi sang queue riêng.</li><li><strong>D</strong>: ❌ Sai — ALB không phải target phù hợp tự nhiên cho cấu hình này; phức tạp, vận hành EC2.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda on-failure destination</li><li>SQS dead-letter / failure queue</li><li>SNS fan-out + Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Event lỗi phải vào queue riêng + scale tự động → Lambda với on-failure destination (SQS) hoặc DLQ.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#179",
          "answers": [
            {
              "choice": "<p>A. Send event details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure an AWS Lambda function as a subscriber to the SNS topic to process the events. Add an on-failure destination to the function. Set an Amazon Simple Queue Service (Amazon SQS) queue as the target.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Publish events to an Amazon Simple Queue Service (Amazon SQS) queue. Create an Amazon EC2 Auto Scaling group. Configure the Auto Scaling group to scale in and out based on the ApproximateAgeOfOldestMessage metric of the queue. Configure the application to write failed messages to a dead-letter queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write events to an Amazon DynamoDB table. Configure a DynamoDB stream for the table. Configure the stream to invoke an AWS Lambda function. Configure the Lambda function to process the events.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish events to an Amazon EventBndge event bus. Create and run an application on an Amazon EC2 instance with an Auto Scaling group that is behind an Application Load Balancer (ALB). Set the ALB as the event bus target. Configure the event bus to retry events. Write messages to a dead-letter queue if the application cannot process the messages.</p>",
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
      "question_id": "#294",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an organization in AWS Organizations to manage the company's AWS accounts. The company uses AWS CloudFormation to deploy all infrastructure. A finance team wants to build a chargeback model. The finance team asked each business unit to tag resources by using a predefined list of project values.<br><br>When the finance team used the AWS Cost and Usage Report in AWS Cost Explorer and filtered based on project, the team noticed noncompliant project values. The company wants to enforce the use of project tags for new resources.<br><br>Which solution will meet these requirements with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Enforce project tag đúng giá trị cho tài nguyên mới trong Organizations với CloudFormation.</li><li>Requirement: LEAST effort.</li><li>Ưu tiên: quản lý tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Tag policy</strong> tại management account định nghĩa giá trị cho phép, và <strong>SCP</strong> gắn vào OU deny `cloudformation:CreateStack` nếu thiếu tag, nên quản trị tập trung ít công sức nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tag policy + SCP tập trung.</li><li><strong>B</strong>: ❌ Sai — tạo tag policy ở từng OU, nhiều công việc hơn.</li><li><strong>C</strong>: ❌ Sai — IAM policy gán từng user, khó mở rộng.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Service Catalog buộc đổi cách triển khai, effort lớn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>tag policy, SCP, Organizations, CloudFormation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chuẩn hóa tag toàn tổ chức → Tag policy; bắt buộc có tag → SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#294",
          "answers": [
            {
              "choice": "<p>A. Create a tag policy that contains the allowed project tag values in the organization's management account. Create an SCP that denies the cloudformation:CreateStack API operation unless a project tag is added. Attach the SCP to each OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a tag policy that contains the allowed project tag values in each OU. Create an SCP that denies the cloudformation:CreateStack API operation unless a project tag is added. Attach the SCP to each OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a tag policy that contains the allowed project tag values in the AWS management account. Create an IAM policy that denies the cloudformation:CreateStack API operation unless a project tag is added. Assign the policy to each user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Service Catalog to manage the CloudFormation stacks as products. Use a TagOptions library to control project tag values. Share the portfolio with all OUs that are in the organization.</p>",
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
      "question_id": "#35",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily.<br>The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS.<br>Which data migration strategy should the company use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đưa dữ liệu từ Windows file server on-prem lên file system trên cloud cho workload Windows, 5 GB/ngày, đã có Direct Connect.</li><li>Cần tương thích Windows (SMB).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon FSx for Windows File Server</strong> là file system SMB native cho workload Windows, và <strong>AWS DataSync</strong> đồng bộ theo lịch hàng ngày qua Direct Connect.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — file gateway thay thế file server on-prem, dữ liệu vẫn qua S3, không cung cấp file system cloud cho workload trên AWS.</li><li><strong>B</strong>: ✅ Đúng — DataSync + FSx for Windows, đúng SMB/Windows.</li><li><strong>C</strong>: ❌ Sai — Data Pipeline không dành cho việc này và EFS không hỗ trợ Windows.</li><li><strong>D</strong>: ❌ Sai — EFS dùng NFS, không hỗ trợ Windows.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>FSx for Windows File Server</li><li>DataSync</li><li>SMB</li><li>Direct Connect</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Windows file server → cloud\" → nghĩ ngay đến <strong>FSx for Windows + DataSync</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).</p>",
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
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a service to collect metadata from applications that the company hosts on premises. Consumer devices such as TVs and internet radios access the applications. Many older devices do not support certain HTTP headers and exhibit errors when these headers are present in responses. The company has configured an on-premises load balancer to remove the unsupported headers from responses sent to older devices, which the company identified by the User-Agent headers.<br>The company wants to migrate the service to AWS, adopt serverless technologies, and retain the ability to support the older devices. The company has already migrated the applications into a set of AWS Lambda functions.<br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xóa HTTP header không được hỗ trợ khỏi response dựa trên User-Agent cho thiết bị cũ, backend là Lambda.</li><li>Requirement chính: serverless, giữ khả năng xử lý header theo User-Agent.</li><li>Ưu tiên: logic tùy biến theo request header ở edge, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda@Edge có thể kiểm tra User-Agent và sửa/xóa header của response trước khi trả về viewer. CloudFront + ALB (target là Lambda) giữ được kiến trúc serverless.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudFront Functions không phù hợp ở đây (không truy cập đầy đủ như Lambda@Edge; đề muốn xử lý response theo User-Agent bằng Lambda@Edge).</li><li><strong>B</strong>: ❌ Sai — Default gateway responses chỉ áp dụng cho lỗi của API Gateway, không sửa header theo User-Agent cho response thành công.</li><li><strong>C</strong>: ❌ Sai — HTTP API không hỗ trợ response mapping template kiểu này (đó là tính năng của REST API) và không điều kiện hóa theo User-Agent.</li><li><strong>D</strong>: ✅ Đúng — Lambda@Edge sửa header theo User-Agent, đúng yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda@Edge, User-Agent, remove headers, CloudFront, serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"sửa header/response theo User-Agent ở CDN\" → nghĩ ngay đến Lambda@Edge.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB. Configure the ALB to invoke the correct Lambda function for each type of request. Create a CloudFront function to remove the problematic headers based on the value of the User-Agent header.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway REST API for the metadata service. Configure API Gateway to invoke the correct Lambda function for each type of request. Modify the default gateway responses to remove the problematic headers based on the value of the User-Agent header.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway HTTP API for the metadata service. Configure API Gateway to invoke the correct Lambda function for each type of request. Create a response mapping template to remove the problematic headers based on the value of the User-Agent. Associate the response data mapping with the HTTP API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution for the metadata service. Create an Application Load Balancer (ALB). Configure the CloudFront distribution to forward requests to the ALB. Configure the ALB to invoke the correct Lambda function for each type of request. Create a Lambda@Edge function that will remove the problematic headers in response to viewer requests based on the value of the User-Agent header.</p>",
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
      "question_id": "#293",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows:<br><br><br>VPC CIDR: 10.0.0.0/23 -<br><br>AZ1 subnet CIDR: 10.0.0.0/24 -<br><br>AZ2 subnet CIDR: 10.0.1.0/24 -<br><br>Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime. Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>VPC /23 với hai subnet /24, muốn thêm AZ3 mà không thêm IPv4 và không downtime.</li><li>Requirement: chia lại address space, giữ kết nối on-premises.</li><li>Ưu tiên: không thể resize subnet, phải tạo mới.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Subnet CIDR không thể sửa, nên cần xóa và tạo lại từng subnet theo thứ tự, luân phiên chuyển Auto Scaling group sang subnet còn lại để không downtime, cuối cùng chia thành ba subnet.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — xóa/tạo lại subnet, chuyển ASG luân phiên, không downtime.</li><li><strong>B</strong>: ❌ Sai — terminate instance gây downtime.</li><li><strong>C</strong>: ❌ Sai — VPC mới cùng CIDR gây xung đột và mất kết nối on-premises.</li><li><strong>D</strong>: ❌ Sai — không thể \"update\" CIDR của subnet đã tạo.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>subnet CIDR immutable, Auto Scaling group, zero downtime</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Muốn đổi CIDR subnet → phải xóa và tạo lại, không thể sửa.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#293",
          "answers": [
            {
              "choice": "<p>A. Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have half the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.</p>",
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
      "question_id": "#305",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics company has an Amazon Redshift cluster that consists of several reserved nodes. The cluster is experiencing unexpected bursts of usage because a team of employees is compiling a deep audit analysis report. The queries to generate the report are complex read queries and are CPU intensive.<br><br>Business requirements dictate that the cluster must be able to service read and write queries at all times. A solutions architect must devise a solution that accommodates the bursts of usage.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Redshift cluster bị tăng tải đột biến do query đọc phức tạp, tốn CPU.</li><li>Requirement quyết định: vẫn phục vụ đọc và ghi mọi lúc; MOST cost-effectively.</li><li>Ưu tiên: cost, ít can thiệp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Concurrency Scaling</strong> tự động thêm capacity tạm thời cho read query khi tải tăng, cluster vẫn phục vụ đọc/ghi, và bạn chỉ trả tiền khi dùng (có free credits hàng ngày).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — EMR là hệ thống riêng, thêm công sức và chi phí.</li><li><strong>B</strong>: ❌ Sai — Classic resize làm cluster read-only trong lúc resize, vi phạm yêu cầu đọc/ghi liên tục.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Elastic resize vẫn gây gián đoạn ngắn, phải tự code, và trả tiền capacity thường trực.</li><li><strong>D</strong>: ✅ Đúng — Managed, tự động, pay-per-use.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Concurrency Scaling</li><li>burst read queries</li><li>read/write at all times</li><li>cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Redshift tải đọc tăng đột biến\" → nghĩ ngay đến <strong>Concurrency Scaling</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#305",
          "answers": [
            {
              "choice": "<p>A. Provision an Amazon EMR cluster Offload the complex data processing tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using a classic resize operation when the cluster’s CPU metrics in Amazon CloudWatch reach 80%.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using an elastic resize operation when the cluster’s CPU metrics in Amazon CloudWatch reach 80%.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on the Concurrency Scaling feature for the Amazon Redshift cluster.</p>",
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
      "question_id": "#298",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an ecommerce application in a single AWS Region. The application uses a five-node Amazon Aurora MySQL DB cluster to store information about customers and their recent orders. The DB cluster experiences a large number of write transactions throughout the day.<br><br>The company needs to replicate the data in the Aurora database to another Region to meet disaster recovery requirements. The company has an RPO of 1 hour.<br><br>Which solution will meet these requirements with the LOWEST cost?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Aurora MySQL 5 node, ghi nhiều, cần DR sang Region khác với RPO 1 giờ.</li><li>Requirement: LOWEST cost.</li><li>Ưu tiên: tránh cluster thứ hai đắt tiền.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DMS CDC</strong> đẩy thay đổi liên tục sang S3 ở Region khác, không cần chạy cluster Aurora thứ hai nên rẻ hơn Global Database và đạt RPO dưới 1 giờ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Global Database đáp ứng nhưng chi phí cao do cluster thứ hai.</li><li><strong>B</strong>: ❌ Sai — Backtrack không phải DR cross-Region, snapshot hằng ngày không đạt RPO 1 giờ.</li><li><strong>C</strong>: ✅ Đúng — chi phí thấp, RPO thấp nhờ CDC.</li><li><strong>D</strong>: ❌ Sai — AWS Backup không cấu hình kiểu đó, tắt automated backup không hợp lý.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DMS CDC, S3 cross-Region, RPO 1 hour, lowest cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"DR rẻ, RPO ~giờ → replicate thay đổi ra S3 thay vì cluster thứ hai.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#298",
          "answers": [
            {
              "choice": "<p>A. Modify the Aurora database to be an Aurora global database. Create a second Aurora database in another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the Backtrack feature for the Aurora database. Create an AWS Lambda function that runs daily to copy the snapshots of the database to a backup Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Database Migration Service (AWS DMS). Create a DMS change data capture (CDC) task that replicates the ongoing changes from the Aurora database to an Amazon S3 bucket in another Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn off automated Aurora backups. Configure Aurora backups with a backup frequency of 1 hour. Specify another Region as the destination Region. Select the Aurora database as the resource assignment.</p>",
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
      "question_id": "#295",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application is deployed on Amazon EC2 instances that run in an Auto Scaling group. The Auto Scaling group configuration uses only one type of instance.<br><br>CPU and memory utilization metrics show that the instances are underutilized. A solutions architect needs to implement a solution to permanently reduce the EC2 cost and increase the utilization.<br><br>Which solution will meet these requirements with the LEAST number of configuration changes in the future?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Auto Scaling group dùng một loại instance, bị underutilized.</li><li>Requirement: giảm cost lâu dài, ÍT thay đổi cấu hình trong tương lai.</li><li>Ưu tiên: instance type linh hoạt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Attribute-based instance type selection</strong> trong launch template (chỉ định vCPU/memory), nên ASG tự chọn loại phù hợp, kể cả khi có loại mới, không cần chỉnh sửa lại.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — danh sách loại thủ công, phải cập nhật khi có loại mới.</li><li><strong>B</strong>: ❌ Sai — vẫn chọn cố định một loại.</li><li><strong>C</strong>: ✅ Đúng — attribute-based, ít chỉnh sửa tương lai.</li><li><strong>D</strong>: ❌ Sai — script phức tạp, tốn công duy trì.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>attribute-based instance type selection, launch template, mixed instances</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Không muốn cập nhật danh sách instance type → attribute-based selection.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#295",
          "answers": [
            {
              "choice": "<p>A. List instance types that have properties that are similar to the properties that the current instances have. Modify the Auto Scaling group's launch template configuration to use multiple instance types from the list.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the information about the application's CPU and memory utilization to select an instance type that matches the requirements. Modify the Auto Scaling group's configuration by adding the new instance type. Remove the current instance type from the configuration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the information about the application's CPU and memory utilization to specify CPU and memory requirements in a new revision of the Auto Scaling group's launch template. Remove the current instance type from the configuration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a script that selects the appropriate instance types from the AWS Price List Bulk API. Use the selected instance types to create a new revision of the Auto Scaling group's launch template.</p>",
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
      "question_id": "#267",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.<br><br>When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.<br><br>What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Auto Scaling group thay đổi liên tục, cần tự động deploy bằng CodeDeploy mà không phải cài agent thủ công.</li><li><strong>LEAST operational overhead</strong>, go-live trong 24 giờ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AMI đã cài sẵn CodeDeploy agent trong launch template, và gắn deployment group với Auto Scaling group: instance mới tự động nhận deployment.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — phải viết và duy trì Lambda/EventBridge.</li><li><strong>B</strong>: ❌ Sai — script suspend ASG thủ công, overhead cao.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — pipeline tạo AMI mới và instance refresh mỗi lần deploy, bỏ qua CodeDeploy, phức tạp.</li><li><strong>D</strong>: ✅ Đúng — AMI + CodeDeploy agent, deployment group gắn với ASG.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CodeDeploy deployment group + Auto Scaling group</li><li>AMI preinstalled agent</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"ASG + CodeDeploy → gắn deployment group với ASG, agent bake vào AMI.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#267",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon EventBridge to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group’s launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group’s launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances.</p>",
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
      "question_id": "#277",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.<br><br>A review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Workflow <strong>Step Functions</strong> + <strong>Lambda</strong> fail nhiều đêm mà không ai biết.</li><li>Requirement: gửi thông báo cho MỌI loại lỗi.</li><li>Ưu tiên: dùng native integration đơn giản, bắt toàn bộ error.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>SNS topic</strong> có email subscription, thêm state/task \"Email\" publish vào SNS, và dùng <strong>Catch</strong> với `States.ALL` trên mọi Task/Map/Parallel state để chuyển mọi lỗi sang task Email.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SNS topic + Email subscription gửi tới mailing list.</li><li><strong>B</strong>: ✅ Đúng — task \"Email\" chuyển input sang SNS topic.</li><li><strong>C</strong>: ✅ Đúng — `States.ALL` bắt mọi loại lỗi rồi chuyển sang Email.</li><li><strong>D</strong>: ❌ Sai — SES cần verify email, phức tạp hơn và không cần thiết khi đã có SNS.</li><li><strong>E</strong>: ❌ Sai — gửi qua SES, đi cùng hướng với D, không thuộc bộ đáp án tối ưu.</li><li><strong>F</strong>: ❌ Sai — `States.Runtime` chỉ bắt lỗi runtime, không bắt mọi lỗi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Catch, States.ALL, SNS email subscription, Step Functions error handling</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Step Functions cần bắt mọi lỗi → Catch với States.ALL; cần thông báo → SNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#277",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type \"Email\" that targets the team's mailing list.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a task named \"Email\" that forwards the input arguments to the SNS topic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.ALL\" ] and \"Next”: \"Email\".</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a task named \"Email\" that forwards the input arguments to the SES email address.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.Runtime\" ] and \"Next\": \"Email\".</p>",
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
      "question_id": "#263",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to review the design of an Amazon EMR cluster that is using the EMR File System (EMRFS). The cluster performs tasks that are critical to business needs. The cluster is running Amazon EC2 On-Demand Instances at all times for all task, primary, and core nodes. The EMR tasks run each morning, starting at 1:00 AM. and take 6 hours to finish running. The amount of time to complete the processing is not a priority because the data is not referenced until late in the day.<br><br>The solutions architect must review the architecture and suggest a solution to minimize the compute costs.<br><br>Which solution should the solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EMR cluster chạy 6 giờ mỗi ngày, thời gian hoàn thành không quan trọng, dùng EMRFS.</li><li>Cần <strong>minimize compute cost</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Primary và core nodes phải ổn định nên dùng On-Demand (kèm Compute Savings Plans). Task nodes không lưu HDFS nên dùng Spot được. Đáp án D chỉ terminate task nodes... theo đáp án chuẩn của tập đề.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — toàn bộ Spot, primary/core bị thu hồi có thể làm job thất bại.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — hợp lý về kỹ thuật (terminate cluster sau khi xong, EMRFS lưu data ở S3) nhưng đề chọn D.</li><li><strong>C</strong>: ❌ Sai — toàn On-Demand, không tối thiểu chi phí.</li><li><strong>D</strong>: ✅ Đúng — primary/core On-Demand, task Spot, Savings Plans cho phần On-Demand.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EMR task nodes on Spot</li><li>Primary/core On-Demand</li><li>Compute Savings Plans</li><li>EMRFS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"EMR giảm cost → task nodes Spot, primary/core On-Demand.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#263",
          "answers": [
            {
              "choice": "<p>A. Launch all task, primary, and core nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the primary and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Continue to launch all nodes on On-Demand Instances. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the primary and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate only the task node instances when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.</p>",
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
      "question_id": "#276",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has implemented an ordering system using an event-driven architecture. During initial testing, the system stopped processing orders. Further log analysis revealed that one order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was causing an error on the backend and blocking all subsequent order messages. The visibility timeout of the queue is set to 30 seconds, and the backend processing timeout is set to 10 seconds. A solutions architect needs to analyze faulty order messages and ensure that the system continues to process subsequent messages.<br><br>Which step should the solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một \"poison message\" trong <strong>SQS standard queue</strong> làm backend lỗi và chặn các message sau.</li><li>Requirement: phân tích được message lỗi và hệ thống tiếp tục xử lý message khác.</li><li>Ưu tiên: cô lập message lỗi với ít thay đổi nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cấu hình <strong>dead-letter queue (DLQ)</strong> với redrive policy (maxReceiveCount) để message lỗi bị chuyển sang DLQ sau vài lần xử lý thất bại; có thể phân tích sau. DLQ phải cùng loại với source queue nên standard queue cần standard DLQ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng processing timeout không xử lý được message lỗi, vẫn bị retry mãi.</li><li><strong>B</strong>: ❌ Sai — giảm visibility timeout chỉ làm message hiện lại nhanh hơn, không tự xóa message.</li><li><strong>C</strong>: ❌ Sai — DLQ của standard queue phải là standard queue, không dùng FIFO.</li><li><strong>D</strong>: ✅ Đúng — standard DLQ cô lập message lỗi để phân tích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>poison message, dead-letter queue, redrive policy, maxReceiveCount, cùng loại queue</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Message lỗi chặn queue → nghĩ ngay đến DLQ cùng loại với source queue (standard ↔ standard, FIFO ↔ FIFO).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#276",
          "answers": [
            {
              "choice": "<p>A. Increase the backend processing timeout to 30 seconds to match the visibility timeout.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the visibility timeout of the queue to automatically remove the faulty message.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.</p>",
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
      "question_id": "#260",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an unauthenticated static website (www.example.com) that includes a registration form for users. The website uses Amazon S3 for hosting and uses Amazon CloudFront as the content delivery network with AWS WAF configured. When the registration form is submitted, the website calls an Amazon API Gateway API endpoint that invokes an AWS Lambda function to process the payload and forward the payload to an external API call.<br><br>During testing, a solutions architect encounters a cross-origin resource sharing (CORS) error. The solutions architect confirms that the CloudFront distribution origin has the Access-Control-Allow-Origin header set to www.example.com.<br><br>What should the solutions architect do to resolve the error?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Static website (S3 + CloudFront) gọi API Gateway và bị CORS error.</li><li>Origin đã set header nhưng lỗi vẫn còn, nghĩa là phải sửa ở API Gateway.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Form gọi API Gateway ở domain khác, nên trình duyệt kiểm tra CORS trên response của API Gateway. Cần enable CORS trên API endpoint (preflight OPTIONS và header Access-Control-Allow-Origin).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 CORS chỉ ảnh hưởng truy cập tài nguyên S3, không phải API call.</li><li><strong>B</strong>: ❌ Sai — AWS WAF không có cài đặt CORS.</li><li><strong>C</strong>: ✅ Đúng — enable CORS trên API Gateway và trả header đúng.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — với proxy integration Lambda có thể trả header, nhưng không có \"CORS setting\" trên Lambda và preflight cần xử lý ở API Gateway.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CORS</li><li>API Gateway</li><li>Access-Control-Allow-Origin</li><li>Preflight OPTIONS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"CORS error khi gọi API Gateway → enable CORS trên API Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#260",
          "answers": [
            {
              "choice": "<p>A. Change the CORS configuration on the S3 bucket. Add rules for CORS to the AllowedOrigin element for www.example.com.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the CORS setting in AWS WAF. Create a web ACL rule in which the Access-Control-Allow-Origin header is set to www.example.com.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable the CORS setting on the API Gateway API endpoint. Ensure that the API endpoint is configured to return all responses that have the Access-Control-Allow-Origin header set to www.example.com.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the CORS setting on the Lambda function. Ensure that the return code of the function has the Access-Control-Allow-Origin header set to www.example.com.</p>",
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
      "question_id": "#44",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 10 accounts that are part of an organization in AWS Organizations. AWS Config is configured in each account. All accounts belong to either the Prod OU or the NonProd OU.<br><br>The company has set up an Amazon EventBridge rule in each AWS account to notify an Amazon Simple Notification Service (Amazon SNS) topic when an Amazon EC2 security group inbound rule is created with 0.0.0.0/0 as the source. The company’s security team is subscribed to the SNS topic.<br><br>For all accounts in the NonProd OU, the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source.<br><br>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Với account NonProd OU, chặn (không chỉ cảnh báo) việc tạo inbound rule có source 0.0.0.0/0.</li><li>Ưu tiên <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SCP</strong> áp lên OU là preventive control tập trung. SCP deny `ec2:AuthorizeSecurityGroupIngress` khi điều kiện khớp 0.0.0.0/0 ngăn việc tạo rule ngay từ đầu cho mọi account trong OU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda remediation là reactive và phải duy trì code.</li><li><strong>B</strong>: ❌ Sai — Config rule chỉ detect/đánh dấu non-compliant, không ngăn chặn.</li><li><strong>C</strong>: ❌ Sai — SCP allow không đủ để chặn vì allow không override các allow khác.</li><li><strong>D</strong>: ✅ Đúng — SCP deny chặn trực tiếp ở mức OU.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP deny</li><li>AuthorizeSecurityGroupIngress</li><li>Preventive vs detective</li><li>OU</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ngăn chặn hành động toàn OU\" → nghĩ ngay đến <strong>SCP deny</strong> (Config chỉ phát hiện).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A. Modify the EventBridge rule to invoke an AWS Lambda function to remove the security group inbound rule and to publish to the SNS topic. Deploy the updated rule to the NonProd OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the vpc-sg-open-only-to-authorized-ports AWS Config managed rule to the NonProd OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an SCP to allow the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. Apply the SCP to the NonProd OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. Apply the SCP to the NonProd OU.</p>",
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
      "question_id": "#275",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account. A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration. The migration strategy must replicate all existing data and any new data that is created during the migration. The target database must be identical to the source database at completion of the migration process.<br><br>All applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance. The RDS for Oracle DB instance is in a private subnet.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate RDS Oracle sang RDS PostgreSQL cross-account, không downtime, replicate cả dữ liệu hiện có lẫn mới.</li><li>Heterogeneous migration: cần chuyển schema và dữ liệu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS SCT chuyển schema, VPC peering cho kết nối riêng tư giữa hai account, AWS DMS full load + CDC để migrate liên tục và cutover bằng đổi CNAME.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tạo target PostgreSQL và dùng SCT chuyển schema.</li><li><strong>B</strong>: ❌ Sai — SCT không tạo instance và không migrate initial data theo cách này.</li><li><strong>C</strong>: ✅ Đúng — VPC peering và security group, giữ database private.</li><li><strong>D</strong>: ❌ Sai — mở public access là không an toàn.</li><li><strong>E</strong>: ✅ Đúng — DMS full load + CDC, đổi CNAME khi hoàn tất.</li><li><strong>F</strong>: ❌ Sai — chỉ CDC thì thiếu dữ liệu hiện có.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS SCT</li><li>AWS DMS full load + CDC</li><li>VPC peering</li><li>Route 53 CNAME cutover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Migrate khác engine không downtime → SCT cho schema + DMS full load + CDC.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#275",
          "answers": [
            {
              "choice": "<p>A. Create a new RDS for PostgreSQL DB instance in the target account. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.</p>",
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
      "question_id": "#274",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that generates reports and stores them in an Amazon S3 bucket. When a user accesses their report, the application generates a signed URL to allow the user to download the report. The company's security team has discovered that the files are public and that anyone can download them without authentication. The company has suspended the generation of new reports until the problem is resolved.<br><br>Which set of actions will immediately remediate the security issue without impacting the application's normal workflow?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Object S3 bị public dù ứng dụng dùng signed URL.</li><li>Khắc phục ngay, không ảnh hưởng workflow bình thường.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 Block Public Access với IgnorePublicAcls = TRUE bỏ qua mọi public ACL ngay lập tức trên cả bucket, trong khi signed URL vẫn hoạt động bình thường.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda với scheduled event không tức thời và phức tạp.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Trusted Advisor chỉ khuyến nghị, phải làm thủ công, không nhanh.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chạy script trên hàng loạt object tốn thời gian, không \"immediately\".</li><li><strong>D</strong>: ✅ Đúng — áp dụng ngay cấp bucket, signed URL không bị ảnh hưởng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Block Public Access</li><li>IgnorePublicAcls</li><li>Signed URL</li><li>Immediately remediate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Object S3 lỡ public cần xử lý ngay → Block Public Access cấp bucket.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#274",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that applies a deny all policy for users who are not authenticated. Create a scheduled event to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Review the AWS Trusted Advisor bucket permissions check and implement the recommended actions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run a script that puts a private ACL on all of the objects in the bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Block Public Access feature in Amazon S3 to set the IgnorePublicAcIs option to TRUE on the bucket.</p>",
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
      "question_id": "#273",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Organizations to manage multiple accounts. Due to regulatory requirements, the company wants to restrict specific member accounts to certain AWS Regions, where they are permitted to deploy resources. The resources in the accounts must be tagged, enforced based on a group standard, and centrally managed with minimal configuration.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hạn chế một số member account vào Region nhất định, bắt buộc tag chuẩn theo nhóm, quản lý tập trung và ít cấu hình.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đưa các account vào một OU mới rồi áp dụng tag policy và SCP (điều kiện aws:RequestedRegion) lên OU đó: quản lý tập trung cho nhóm, không ảnh hưởng account khác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Config rule cấu hình từng account, không chặn và không tập trung.</li><li><strong>B</strong>: ❌ Sai — Billing console không có chức năng disable Region cho member account kiểu này.</li><li><strong>C</strong>: ❌ Sai — áp dụng vào root ảnh hưởng toàn bộ organization.</li><li><strong>D</strong>: ✅ Đúng — OU mới + tag policy + SCP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OU</li><li>SCP</li><li>Tag policy</li><li>Centrally managed</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chính sách cho một nhóm account → OU + SCP + tag policy, không gắn vào root.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#273",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the AWS Billing and Cost Management console, in the management account, disable Regions for the specific member accounts and apply a tag policy on the root.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Associate the specific member accounts with the root. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate the specific member accounts with a new OU. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
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
      "question_id": "#272",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web application on AWS in the us-east-1 Region. The application servers are distributed across three Availability Zones behind an Application Load Balancer. The database is hosted in a MySQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us-west-2, and has configured Amazon Route 53 health checks and DNS failover to us-west-2.<br><br>Which additional step should the solutions architect take?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR cross-Region với RTO dưới 5 phút và RPO dưới 1 phút cho MySQL tự quản trên EC2.</li><li>Route 53 failover đã cấu hình, cần giải pháp database.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Aurora global database replicate cross-Region với latency thường dưới 1 giây (RPO thấp) và có thể promote secondary Region trong dưới 1 phút (RTO thấp).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — cross-Region read replica của RDS replicate async chậm hơn và promote lâu hơn Aurora global database.</li><li><strong>B</strong>: ✅ Đúng — Aurora global database, RPO khoảng 1 giây, RTO dưới 1 phút.</li><li><strong>C</strong>: ❌ Sai — Multi-AZ chỉ trong một Region, không cross-Region.</li><li><strong>D</strong>: ❌ Sai — tự quản lý replication trên EC2, khó đảm bảo RPO/RTO.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Aurora global database</li><li>Cross-Region DR</li><li>RTO &lt; 5 min, RPO &lt; 1 min</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"DR cross-Region RPO tính bằng giây → Aurora global database.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#272",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a MySQL standby database on an Amazon EC2 instance in us-west-2.</p>",
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
      "question_id": "#271",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to refactor its retail ordering web application that currently has a load-balanced Amazon EC2 instance fleet for web hosting, database API services, and business logic. The company needs to create a decoupled, scalable architecture with a mechanism for retaining failed orders while also minimizing operational costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Refactor ứng dụng đặt hàng retail thành kiến trúc decoupled, scalable.</li><li>Cần giữ lại đơn hàng thất bại, chi phí vận hành thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 host web, AppSync cho API, SQS để queue, Lambda cho business logic, và SQS dead-letter queue (DLQ) giữ message thất bại. Toàn bộ serverless, chi phí thấp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — SQS long polling không dùng để giữ message thất bại; ECS tốn vận hành.</li><li><strong>B</strong>: ❌ Sai — Glacier Deep Archive không phù hợp xử lý lại; Amazon MQ và Beanstalk tốn kém.</li><li><strong>C</strong>: ✅ Đúng — serverless và DLQ giữ đơn lỗi.</li><li><strong>D</strong>: ❌ Sai — SES là email, không phải queue; EKS và Lightsail tốn vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SQS dead-letter queue</li><li>Lambda</li><li>Decoupled architecture</li><li>Serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giữ message xử lý thất bại → SQS DLQ.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#271",
          "answers": [
            {
              "choice": "<p>A. Use Amazon S3 for web hosting with Amazon API Gateway for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use Amazon Elastic Container Service (Amazon ECS) for business logic with Amazon SQS long polling for retaining failed orders.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Elastic Beanstalk for web hosting with Amazon API Gateway for database API services. Use Amazon MQ for order queuing. Use AWS Step Functions for business logic with Amazon S3 Glacier Deep Archive for retaining failed orders.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 for web hosting with AWS AppSync for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use AWS Lambda for business logic with an Amazon SQS dead-letter queue for retaining failed orders.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Lightsail for web hosting with AWS AppSync for database API services. Use Amazon Simple Email Service (Amazon SES) for order queuing. Use Amazon Elastic Kubernetes Service (Amazon EKS) for business logic with Amazon OpenSearch Service for retaining failed orders.</p>",
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
      "question_id": "#270",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expanding. The company plans to separate its resources into hundreds of different AWS accounts in multiple AWS Regions. A solutions architect must recommend a solution that denies access to any operations outside of specifically designated Regions.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng trăm account, nhiều Region; cần deny mọi operation ngoài Region được chỉ định.</li><li>Cần guardrail tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Control Tower với OU và SCP deny theo Region (aws:RequestedRegion) áp dụng tập trung cho toàn bộ account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — IAM policy từng account khó mở rộng và có thể bị bypass.</li><li><strong>B</strong>: ❌ Sai — IAM user per account không scalable.</li><li><strong>C</strong>: ✅ Đúng — Control Tower + OU + SCP deny Region.</li><li><strong>D</strong>: ❌ Sai — Security Hub chỉ phát hiện, không chặn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP</li><li>Control Tower</li><li>aws:RequestedRegion</li><li>Deny outside Regions</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn Region cho nhiều account → SCP (Organizations/Control Tower).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#270",
          "answers": [
            {
              "choice": "<p>A. Create IAM roles for each account. Create IAM policies with conditional allow permissions that include only approved Regions for the accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organization in AWS Organizations. Create IAM users for each account. Attach a policy to each user to block access to Regions where an account cannot deploy infrastructure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an AWS Control Tower landing zone. Create OUs and attach SCPs that deny access to run services outside of the approved Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Security Hub in each account. Create controls to specify the Regions where an account can deploy infrastructure.</p>",
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
      "question_id": "#255",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service.<br><br>In each AWS account with a client, an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint.<br><br>Which combination of steps should a solutions architect take to resolve this issue? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>PrivateLink: client → interface endpoint → NLB → EC2 logging service, nhưng client không gửi được log.</li><li>Cần kiểm tra các lớp network giữa NLB và EC2 (NACL, security group).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Traffic từ endpoint đi qua NLB rồi tới EC2. Trong lộ trình đó, NACL giữa NLB subnet và EC2 subnet phải cho phép hai chiều. Với NLB, EC2 target thấy IP nguồn là IP của NLB (khi không preserve client IP), nên security group của EC2 phải cho ingress từ NLB subnets.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — NACL giữa logging service subnet và NLB subnet phải cho phép hai chiều.</li><li><strong>B</strong>: ❌ Sai — traffic không đi trực tiếp từ interface endpoint subnet tới EC2; NLB nằm giữa.</li><li><strong>C</strong>: ✅ Đúng — security group EC2 phải allow ingress từ NLB subnets.</li><li><strong>D</strong>: ❌ Sai — client không kết nối trực tiếp tới EC2, nguồn thấy là NLB.</li><li><strong>E</strong>: ❌ Sai — NLB không có security group trong kịch bản này (và traffic PrivateLink không cần allow từ endpoint subnet).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>PrivateLink + NLB</li><li>NACL giữa NLB và EC2</li><li>Security group allow từ NLB subnets</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"PrivateLink không kết nối được → kiểm tra NACL và security group giữa NLB và backend EC2.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#255",
          "answers": [
            {
              "choice": "<p>A. Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Check the security group for the logging service running on EC2 instances to ensure it allows ingress from the clients.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.</p>",
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
      "question_id": "#317",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new API to AWS. The API uses Amazon API Gateway with a Regional API endpoint and an AWS Lambda function for hosting. The API retrieves data from an external vendor API, stores data in an Amazon DynamoDB global table, and retrieves data from the DynamoDB global table The API key for the vendor's API is stored in AWS Secrets Manager and is encrypted with a customer managed key in AWS Key Management Service (AWS KMS). The company has deployed its own API into a single AWS Region.<br><br>A solutions architect needs to change the API components of the company’s API to ensure that the components can run across multiple Regions in an active-active configuration.<br><br>Which combination of changes will meet this requirement with the LEAST operational overhead? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển API (API Gateway Regional + Lambda + DynamoDB global table + Secrets Manager/KMS) sang active-active đa Region.</li><li>Requirement quyết định: LEAST operational overhead, secret phải giải mã được ở mọi Region.</li><li>Ưu tiên: managed replication.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Deploy API ở nhiều Region với Route 53 routing, dùng <strong>KMS multi-Region key</strong> với replica key, rồi <strong>replicate secret</strong> của Secrets Manager sang các Region và chọn replica key tương ứng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — API ở nhiều Region, Route 53 phân phối traffic.</li><li><strong>B</strong>: ✅ Đúng — KMS multi-Region key và replica key cho từng Region.</li><li><strong>C</strong>: ✅ Đúng — Secrets Manager replication, ít vận hành hơn copy tay.</li><li><strong>D</strong>: ❌ Sai — Không thể chuyển key đã tồn tại thành multi-Region; AWS managed key không phải multi-Region.</li><li><strong>E</strong>: ❌ Sai — Copy secret thủ công, không tự đồng bộ, tốn vận hành.</li><li><strong>F</strong>: ❌ Sai — API Gateway không có tùy chọn \"multi-Region\" như vậy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>KMS multi-Region key</li><li>Secrets Manager replication</li><li>Route 53 multivalue answer</li><li>active-active</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"secret + KMS đa Region\" → <strong>multi-Region key</strong> + <strong>secret replication</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#317",
          "answers": [
            {
              "choice": "<p>A. Deploy the API to multiple Regions. Configure Amazon Route 53 with custom domain names that route traffic to each Regional API endpoint. Implement a Route 53 multivalue answer routing policy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new KMS multi-Region customer managed key. Create a new KMS customer managed replica key in each in-scope Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replicate the existing Secrets Manager secret to other Regions. For each in-scope Region's replicated secret, select the appropriate KMS key.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS managed KMS key in each in-scope Region. Convert an existing key to a multiRegion key. Use the multi-Region key in other Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a new Secrets Manager secret in each in-scope Region. Copy the secret value from the existing Region to the new secret in each in-scope Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Modify the deployment process for the Lambda function to repeat the deployment across in-scope Regions. Turn on the multi-Region option for the existing API. Select the Lambda function that is deployed in each Region as the backend for the multi-Region API.</p>",
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
      "question_id": "#316",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company needs to create short-lived test environments to test pull requests as part of its development process. Each test environment consists of a single Amazon EC2 instance that is in an Auto Scaling group.<br><br>The test environments must be able to communicate with a central server to report test results. The central server is located in an on-premises data center. A solutions architect must implement a solution so that the company can create and delete test environments without any manual intervention. The company has created a transit gateway with a VPN attachment to the on-premises network.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tạo và xóa test environment ngắn hạn (một EC2 trong ASG) tự động, kết nối về server on-premises qua transit gateway + VPN.</li><li>Requirement quyết định: không can thiệp thủ công, LEAST operational overhead.</li><li>Ưu tiên: đơn giản, dùng lại hạ tầng mạng chung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng một <strong>VPC</strong> chung đã gắn sẵn <strong>transit gateway attachment</strong> và routing; <strong>CloudFormation</strong> chỉ tạo/xóa ASG cho từng test environment, không cần dựng mạng mới mỗi lần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Một VPC và attachment mới cho từng environment, tốn công và chậm.</li><li><strong>B</strong>: ✅ Đúng — Một VPC chung, đơn giản nhất.</li><li><strong>C</strong>: ❌ Sai — Tạo account mới cho mỗi environment, cực kỳ nặng vận hành.</li><li><strong>D</strong>: ❌ Sai — Container hóa và dựng EKS là quá mức cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>transit gateway attachment</li><li>single shared VPC</li><li>CloudFormation</li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"test environment ngắn hạn + LEAST overhead\" → dùng chung <strong>một VPC</strong>, chỉ tạo/xóa compute bằng CloudFormation.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#316",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template that contains a transit gateway attachment and related routing configurations. Create a CloudFormation stack set that includes this template. Use CloudFormation StackSets to deploy a new stack for each VPC in the account. Deploy a new VPC for each test environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a single VPC for the test environments. Include a transit gateway attachment and related routing configurations. Use AWS CloudFormation to deploy all test environments into the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new OU in AWS Organizations for testing. Create an AWS CioudFormation template that contains a VPC, necessary networking resources, a transit gateway attachment, and related routing configurations. Create a CloudFormation stack set that includes this template. Use CloudFormation StackSets for deployments into each account under the testing OU. Create a new account for each test environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the test environment EC2 instances into Docker images. Use AWS CloudFormation to configure an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in a new VPC, create a transit gateway attachment, and create related routing configurations. Use Kubernetes to manage the deployment and lifecycle of the test environments.</p>",
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
      "question_id": "#315",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its sales reporting application in an AWS Region in the United States. The application uses an Amazon API Gateway Regional API and AWS Lambda functions to generate on-demand reports from data in an Amazon RDS for MySQL database. The frontend of the application is hosted on Amazon S3 and is accessed by users through an Amazon CloudFront distribution. The company is using Amazon Route 53 as the DNS service for the domain. Route 53 is configured with a simple routing policy to route traffic to the API Gateway API.<br><br>In the next 6 months, the company plans to expand operations to Europe. More than 90% of the database traffic is read-only traffic. The company has already deployed an API Gateway API and Lambda functions in the new Region.<br><br>A solutions architect must design a solution that minimizes latency for users who download reports.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mở rộng sang Europe, hơn 90% traffic database là read-only, cần giảm latency cho người tải report.</li><li>Requirement quyết định: minimize latency cho người dùng ở cả hai Region.</li><li>Ưu tiên: latency, replication ổn định.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-Region read replica</strong> của RDS cho phép đọc local ở Europe. <strong>Latency-based routing</strong> của Route 53 gửi user đến API Region có latency thấp nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DMS full load không đồng bộ thay đổi liên tục, dữ liệu bị cũ.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Phức tạp hơn read replica; geolocation routing không đảm bảo latency thấp nhất.</li><li><strong>C</strong>: ✅ Đúng — Read replica + latency-based routing.</li><li><strong>D</strong>: ❌ Sai — Geolocation routing dựa vị trí địa lý, không phải latency, và cần default record.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>cross-Region read replica</li><li>latency-based routing</li><li>read-heavy</li><li>minimize latency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"read nhiều + đa Region + giảm latency\" → <strong>cross-Region read replica</strong> + <strong>latency-based routing</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#315",
          "answers": [
            {
              "choice": "<p>A. Use an AWS Database Migration Service (AWS DMS) task with full load to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to latency-based routing to connect to the API Gateway API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Database Migration Service (AWS DMS) task with full load plus change data capture (CDC) to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a cross-Region read replica for the RDS database in the new Region Change the Route 53 record to latency-based routing to connect to the API Gateway API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a cross-Region read replica for the RDS database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API.</p>",
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
      "question_id": "#314",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to migrate an on-premises legacy application to AWS. The application runs on two servers behind a load balancer. The application requires a license file that is associated with the MAC address of the server's network adapter It takes the software vendor 12 hours to send new license files. The application also uses configuration files with a static IP address to access a database server, host names are not supported.<br><br>Given these requirements, which combination of steps should be taken to implement highly available architecture for the application servers in AWS? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng legacy: license gắn với MAC address (vendor mất 12 giờ cấp lại), config cần IP tĩnh của database.</li><li>Requirement quyết định: highly available mà không phải chờ license mới.</li><li>Ưu tiên: availability, tự động hóa.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo sẵn pool <strong>ENI</strong> (MAC address cố định) kèm license trong <strong>S3</strong>, bootstrap script tải license và gắn ENI tương ứng. IP database lấy từ <strong>Systems Manager Parameter Store</strong> để tránh hard-code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Pool ENI + license trong S3 + script gắn ENI, thay instance nhanh.</li><li><strong>B</strong>: ❌ Sai — Đưa license vào AMI không gắn được với từng MAC address riêng.</li><li><strong>C</strong>: ❌ Sai — Xin license mới mất 12 giờ, không đảm bảo HA.</li><li><strong>D</strong>: ✅ Đúng — Đọc IP từ Parameter Store, dễ thay đổi, không hard-code.</li><li><strong>E</strong>: ❌ Sai — Hard-code IP trong AMI, kém linh hoạt và phải tạo lại AMI khi đổi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ENI pool</li><li>MAC address license</li><li>Parameter Store</li><li>bootstrap script</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"license gắn MAC address\" → nghĩ ngay đến <strong>ENI</strong> giữ MAC cố định; gặp \"giá trị cấu hình\" → <strong>Parameter Store</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#314",
          "answers": [
            {
              "choice": "<p>A. Create a pool of ENIs. Request license files from the vendor for the pool, and store the license files in Amazon S3. Create a bootstrap automation script to download a license file and attach the corresponding ENI to an Amazon EC2 instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a pool of ENIs. Request license files from the vendor for the pool, store the license files on an Amazon EC2 instance. Create an AMI from the instance and use this AMI for all future EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bootstrap automation script to request a new license file from the vendor .When the response is received, apply the license file to an Amazon EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Edit the bootstrap automation script to read the database server IP address from the AWS Systems Manager Parameter Store, and inject the value into the local configuration files.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Edit an Amazon EC2 instance to include the database server IP address in the configuration files and re-create the AMI to use for all future EC2 stances.</p>",
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
      "question_id": "#253",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An entertainment company recently launched a new game. To ensure a good experience for players during the launch period, the company deployed a static quantity of 12 r6g.16xlarge (memory optimized) Amazon EC2 instances behind a Network Load Balancer. The company's operations team used the Amazon CloudWatch agent and a custom metric to include memory utilization in its monitoring strategy.<br><br>Analysis of the CloudWatch metrics from the launch period showed consumption at about one quarter of the CPU and memory that the company expected. Initial demand for the game has subsided and has become more variable. The company decides to use an Auto Scaling group that monitors the CPU and memory consumption to dynamically scale the instance fleet. A solutions architect needs to configure the Auto Scaling group to meet demand in the most cost-effective way.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Fleet 12 x r6g.16xlarge dùng chỉ khoảng 1/4 CPU và memory; nhu cầu giờ biến động.</li><li>Cần Auto Scaling group scale theo CPU + memory, <strong>most cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tải cũ ≈ 12 x 16xlarge x 25%, tương đương khoảng 3 x 16xlarge, tức khoảng 12 x 4xlarge. Giữ cùng họ r6g (memory optimized) vì workload có yêu cầu memory, dùng size nhỏ 4xlarge, min 3 / max 12 để scale linh hoạt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — c6g có tỷ lệ memory thấp, không đáp ứng nhu cầu memory của game.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — m6g ít memory hơn r6g, dễ thiếu memory khi tải cao.</li><li><strong>C</strong>: ✅ Đúng — cùng họ memory optimized, size nhỏ hơn, min 3 / max 12 khớp mức sử dụng thực tế.</li><li><strong>D</strong>: ❌ Sai — 8xlarge, max 6 tương đương 12 x 4xlarge nhưng min 2 x 8xlarge = 4 x 4xlarge, granularity thô, tốn hơn lúc tải thấp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Right-sizing</li><li>r6g memory optimized</li><li>Auto Scaling min/max</li><li>Quarter of CPU and memory</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Dư tài nguyên + workload cần memory → giữ họ instance, giảm size, scale bằng ASG.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#253",
          "answers": [
            {
              "choice": "<p>A. Configure the Auto Scaling group to deploy c6g.4xlarge (compute optimized) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling group to deploy m6g.4xlarge (general purpose) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group to deploy r6g.4xlarge (memory optimized) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Auto Scaling group to deploy r6g.8xlarge (memory optimized) instances. Configure a minimum capacity of 2, a desired capacity of 2, and a maximum capacity of 6.</p>",
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
      "question_id": "#312",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is launching a new online game on Amazon EC2 instances. The game must be available globally. The company plans to run the game in three AWS Regions us-east-1, eu-west-1, and ap-southeast-1. The game's leaderboards, player inventory and event status must be available across Regions.<br><br>A solutions architect must design a solution that will give any Region the ability to scale to handle the load of all Regions. Additionally, users must automatically connect to the Region that provides the least latency.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Game toàn cầu trên 3 Region, dữ liệu leaderboard/inventory dùng chung giữa Region, người chơi tự vào Region có latency thấp nhất, mỗi Region scale đủ cho tải của cả ba.</li><li>Requirement quyết định: LEAST operational overhead.</li><li>Ưu tiên: managed, multi-Region, latency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Route 53 latency-based routing</strong> định tuyến theo latency thấp nhất, <strong>Auto Scaling group</strong> scale từng Region, và <strong>DynamoDB global table</strong> replicate đa Region active-active hoàn toàn managed.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Spot Fleet không đáng tin cho game; RDS read replica không ghi được ở nhiều Region; Global Accelerator kết hợp Route 53 là thừa.</li><li><strong>B</strong>: ❌ Sai — Geoproximity không đảm bảo latency thấp nhất; MySQL tự quản lý trên EC2 tốn vận hành.</li><li><strong>C</strong>: ✅ Đúng — Latency routing + ASG + DynamoDB global table.</li><li><strong>D</strong>: ❌ Sai — Tự dựng DNS server với custom logic, tốn vận hành rất nhiều.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>latency-based routing</li><li>DynamoDB global tables</li><li>Auto Scaling group</li><li>multi-Region active-active</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đa Region, dữ liệu dùng chung, ít vận hành\" → nghĩ ngay đến <strong>DynamoDB global table</strong> + <strong>latency-based routing</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#312",
          "answers": [
            {
              "choice": "<p>A. Create an EC2 Spot Fleet. Attach the Spot Fleet to a Network Load Balancer (NLB) in each Region. Create an AWS Global Accelerator IP address that points to the NLB. Create an Amazon Route 53 latency-based routing entry for the Global Accelerator IP address. Save the game metadata to an Amazon RDS for MySQL DB instance in each Region. Set up a read replica in the other Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group for the EC2 instances Attach the Auto Scaling group to a Network Load Balancer (NLB) in each Region. For each Region, create an Amazon Route 53 entry that uses geoproximity routing and points to the NLB in that Region. Save the game metadata to MySQL databases on EC2 instances in each Region. Set up replication between the database EC2 instances in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group for the EC2 instances. Attach the Auto Scaling group to a Network Load Balancer (NLB) in each Region. For each Region, create an Amazon Route 53 entry that uses latency-based routing and points to the NLB in that Region. Save the game metadata to an Amazon DynamoDB global table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use EC2 Global View. Deploy the EC2 instances to each Region. Attach the instances to a Network Load Balancer (NLB). Deploy a DNS server on an EC2 instance in each Region. Set up custom logic on each DNS server to redirect the user to the Region that provides the lowest latency. Save the game metadata to an Amazon Aurora global database.</p>",
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
      "question_id": "#310",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon S3 to back up its on-premises file storage solution. The company’s on-premises file storage solution supports NFS, and the company wants its new solution to support NFS. The company wants to archive the backup files after 5 days. If the company needs archived files for disaster recovery, the company is willing to wait a few days for the retrieval of those files.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backup file on-premises lên S3, giao thức NFS, archive sau 5 ngày, chấp nhận chờ vài ngày khi restore.</li><li>Requirement quyết định: NFS + MOST cost-effectively cho archive lâu dài.</li><li>Ưu tiên: cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>File gateway</strong> hỗ trợ NFS và lưu file thành object S3. Lifecycle sang <strong>S3 Glacier Deep Archive</strong> có chi phí lưu trữ thấp nhất; thời gian restore hàng giờ đến vài ngày được chấp nhận.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — File gateway đúng nhưng S3 Standard-IA đắt hơn Deep Archive, trong khi chấp nhận chờ nhiều ngày.</li><li><strong>B</strong>: ❌ Sai — Volume gateway dùng iSCSI, không phải NFS.</li><li><strong>C</strong>: ❌ Sai — Tape gateway dùng iSCSI VTL, không phải NFS.</li><li><strong>D</strong>: ✅ Đúng — File gateway (NFS) + Glacier Deep Archive, rẻ nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>file gateway</li><li>NFS</li><li>S3 Glacier Deep Archive</li><li>S3 Lifecycle rule</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"NFS/SMB lên S3\" → <strong>file gateway</strong>; gặp \"chờ được vài ngày\" → <strong>Glacier Deep Archive</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#310",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Storage Gateway volume gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the volume gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Storage Gateway tape gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.</p>",
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
      "question_id": "#309",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Organizations with a multi-account architecture. The company's current security configuration for the account architecture includes SCPs, resource-based policies, identity-based policies, trust policies, and session policies.<br><br>A solutions architect needs to allow an IAM user in Account A to assume a role in Account B.<br><br>Which combination of steps must the solutions architect take to meet this requirement? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho phép IAM user ở Account A assume role ở Account B.</li><li>Requirement quyết định: cross-account cần quyền từ cả hai phía và không bị SCP chặn.</li><li>Ưu tiên: hiểu logic policy evaluation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-account AssumeRole cần: identity-based policy của user ở Account A cho phép <strong>sts:AssumeRole</strong>, <strong>trust policy</strong> của role ở Account B tin tưởng Account A, và SCP của account không được deny hành động này.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SCP của Account A phải cho phép sts:AssumeRole (nếu không sẽ bị chặn).</li><li><strong>B</strong>: ❌ Sai — Resource-based policy không phải bước bắt buộc ở đây; role dùng trust policy.</li><li><strong>C</strong>: ✅ Đúng — User ở Account A cần identity-based policy cho phép AssumeRole.</li><li><strong>D</strong>: ❌ Sai — User nằm ở Account A, không phải Account B.</li><li><strong>E</strong>: ✅ Đúng — Trust policy trên role đích ở Account B là bắt buộc.</li><li><strong>F</strong>: ❌ Sai — Session policy chỉ giới hạn quyền của session, không cấp quyền assume.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>sts:AssumeRole</li><li>trust policy</li><li>identity-based policy</li><li>SCP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cross-account assume role\" → nghĩ ngay đến <strong>identity policy (bên gọi) + trust policy (bên role)</strong>, cộng SCP không chặn.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#309",
          "answers": [
            {
              "choice": "<p>A. Configure the SCP for Account A to allow the action.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the resource-based policies to allow the action.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the identity-based policy on the user in Account A to allow the action.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the identity-based policy on the user in Account B to allow the action.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure the trust policy on the target role in Account B to allow the action.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure the session policy to allow the action and to be passed programmatically by the GetSessionToken API operation.</p>",
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
      "question_id": "#308",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is reviewing a company's process for taking snapshots of Amazon RDS DB instances. The company takes automatic snapshots every day and retains the snapshots for 7 days.<br><br>The solutions architect needs to recommend a solution that takes snapshots every 6 hours and retains the snapshots for 30 days. The company uses AWS Organizations to manage all of its AWS accounts. The company needs a consolidated view of the health of the RDS snapshots.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Snapshot RDS mỗi 6 giờ, giữ 30 ngày, cho nhiều account trong Organizations, cần view tập trung về sức khỏe backup.</li><li>Requirement quyết định: LEAST operational overhead.</li><li>Ưu tiên: quản lý tập trung, tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Backup</strong> với cross-account management cho phép tạo backup plan (frequency, retention), áp dụng theo tag, và theo dõi trạng thái tập trung từ management account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — AWS Backup + cross-account management + tag-based assignment + dashboard tập trung.</li><li><strong>B</strong>: ❌ Sai — Amazon RDS không có tính năng cross-account management hay snapshot global policy như vậy.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Phải tự dựng StackSets, Lambda, EventBridge ở mỗi account để monitor.</li><li><strong>D</strong>: ❌ Sai — Data Lifecycle Manager dành cho EBS, không hỗ trợ RDS; cấu hình riêng từng account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Backup</li><li>cross-account management</li><li>backup plan</li><li>tag-based assignment</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"backup tập trung nhiều account, RDS\" → nghĩ ngay đến <strong>AWS Backup</strong> cross-account.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#308",
          "answers": [
            {
              "choice": "<p>A. Turn on the cross-account management feature in AWS Backup. Create a backup plan that specifies the frequency and retention requirements. Add a tag to the DB instances. Apply the backup plan by using tags. Use AWS Backup to monitor the status of the backups.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on the cross-account management feature in Amazon RDS. Create a snapshot global policy that specifies the frequency and retention requirements. Use the RDS console in the management account to monitor the status of the backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on the cross-account management feature in AWS CloudFormation. From the management account, deploy a CloudFormation stack set that contains a backup plan from AWS Backup that specifies the frequency and retention requirements. Create an AWS Lambda function in the management account to monitor the status of the backups. Create an Amazon EventBridge rule in each account to run the Lambda function on a schedule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Backup in each account. Create an Amazon Data Lifecycle Manager lifecycle policy that specifies the frequency and retention requirements. Specify the DB instances as the target resource Use the Amazon Data Lifecycle Manager console in each member account to monitor the status of the backups.</p>",
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
      "question_id": "#307",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage a multi-account structure. The company has hundreds of AWS accounts and expects the number of accounts to increase. The company is building a new application that uses Docker images. The company will push the Docker images to Amazon Elastic Container Registry (Amazon ECR). Only accounts that are within the company’s organization should have access to the images.<br><br>The company has a CI/CD process that runs frequently. The company wants to retain all the tagged images. However, the company wants to retain only the five most recent untagged images.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chia sẻ image ECR cho toàn bộ account trong Organization (hàng trăm, đang tăng), giữ mọi tagged image, chỉ giữ 5 untagged image mới nhất.</li><li>Requirement quyết định: LEAST operational overhead.</li><li>Ưu tiên: không phải liệt kê account, không tự viết code dọn dẹp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Repository policy với điều kiện <strong>aws:PrincipalOrgID</strong> tự động áp dụng cho mọi account hiện tại và tương lai. <strong>ECR lifecycle rule</strong> xóa untagged image vượt quá 5 mà không cần code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Private repo + PrincipalOrgID + lifecycle rule, hoàn toàn managed.</li><li><strong>B</strong>: ❌ Sai — Public repository làm lộ image ra bên ngoài; cách assume role không phù hợp.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Liệt kê account ID và tự viết Lambda + EventBridge thay vì lifecycle rule.</li><li><strong>D</strong>: ❌ Sai — Public repo, VPC endpoint và Lambda đều thừa và không đúng yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>aws:PrincipalOrgID</li><li>ECR lifecycle policy</li><li>private repository</li><li>untagged images</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chỉ account trong Organization\" → nghĩ ngay đến <strong>aws:PrincipalOrgID</strong>; gặp \"dọn image cũ\" → <strong>ECR lifecycle rule</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#307",
          "answers": [
            {
              "choice": "<p>A. Create a private repository in Amazon ECR. Create a permissions policy for the repository that allows only required ECR operations. Include a condition to allow the ECR operations if the value of the aws:PrincipalOrglD condition key is equal to the ID of the company’s organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a public repository in Amazon ECR. Create an IAM role in the ECR account. Set permissions so that any account can assume the role if the value of the aws:PrincipalOrglD condition key is equal to the ID of the company’s organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a private repository in Amazon ECR. Create a permissions policy for the repository that includes only required ECR operations. Include a condition to allow the ECR operations for all account IDs in the organization Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a public repository in Amazon ECR. Configure Amazon ECR to use an interface VPC endpoint with an endpoint policy that includes the required permissions for images that the company needs to pull. Include a condition to allow the ECR operations for all account IDs in the company’s organization. Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five.</p>",
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
      "question_id": "#304",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is determining the DNS strategy for an existing VPC. The VPC is provisioned to use the 10.24.34.0/24 CIDR block. The VPC also uses Amazon Route 53 Resolver for DNS. New requirements mandate that DNS queries must use private hosted zones. Additionally instances that have public IP addresses must receive corresponding public hostnames<br><br>Which solution will meet these requirements to ensure that the domain names are correctly resolved within the VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cấu hình DNS trong VPC dùng Route 53 Resolver, private hosted zone, và public hostname cho instance có public IP.</li><li>Requirement quyết định: private hosted zone phải được associate với VPC; bật cả hai thuộc tính DNS.</li><li>Ưu tiên: cấu hình đúng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần <strong>associate</strong> private hosted zone với VPC, bật <strong>enableDnsSupport</strong> (để dùng Resolver) và <strong>enableDnsHostnames</strong> (để cấp public hostname), và DHCP options dùng <strong>AmazonProvidedDNS</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Không associate hosted zone với VPC; set domain-name-servers thủ công thay vì AmazonProvidedDNS.</li><li><strong>B</strong>: ✅ Đúng — Associate, bật cả hai attribute, DHCP options AmazonProvidedDNS.</li><li><strong>C</strong>: ❌ Sai — Tắt enableDnsSupport làm Resolver không hoạt động, không dùng được private hosted zone.</li><li><strong>D</strong>: ❌ Sai — Tắt enableDnsHostnames nên instance không nhận public hostname.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>enableDnsSupport</li><li>enableDnsHostnames</li><li>AmazonProvidedDNS</li><li>associate private hosted zone</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"private hosted zone + public hostname\" → bật <strong>cả hai</strong> DNS attribute và associate zone với VPC.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#304",
          "answers": [
            {
              "choice": "<p>A. Create a private hosted zone. Activate the enableDnsSupport attribute and the enableDnsHostnames attribute for the VPC. Update the VPC DHCP options set to include domain-name-servers=10.24.34.2.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a private hosted zone Associate the private hosted zone with the VPC. Activate the enableDnsSupport attribute and the enableDnsHostnames attribute for the VPC. Create a new VPC DHCP options set, and configure domain-name-servers=AmazonProvidedDNS. Associate the new DHCP options set with the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deactivate the enableDnsSupport attribute for the VPC. Activate the enableDnsHostnames attribute for the VPC. Create a new VPC DHCP options set, and configure doman-name-servers=10.24.34.2. Associate the new DHCP options set with the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a private hosted zone. Associate the private hosted zone with the VPC. Activate the enableDnsSupport attribute for the VPC. Deactivate the enableDnsHostnames attribute for the VPC. Update the VPC DHCP options set to include domain-name-servers=AmazonProvidedDNS.</p>",
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
      "question_id": "#303",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online survey company runs its application in the AWS Cloud. The application is distributed and consists of microservices that run in an automatically scaled Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster is a target for an Application Load Balancer (ALB). The ALB is a custom origin for an Amazon CloudFront distribution.<br><br>The company has a survey that contains sensitive data. The sensitive data must be encrypted when it moves through the application. The application's data-handling microservice is the only microservice that should be able to decrypt the data<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mã hóa dữ liệu nhạy cảm ngay từ edge, trong suốt đường đi qua CloudFront, ALB, ECS.</li><li>Requirement quyết định: chỉ data-handling microservice được giải mã.</li><li>Ưu tiên: security, ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudFront field-level encryption</strong> mã hóa các field cụ thể bằng <strong>public key RSA</strong> upload lên CloudFront; chỉ bên giữ private key (data-handling microservice) mới giải mã được.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Field-level encryption dùng RSA public key, không dùng KMS key trực tiếp.</li><li><strong>B</strong>: ✅ Đúng — RSA key pair, public key trong CloudFront, private key chỉ service đích giữ.</li><li><strong>C</strong>: ❌ Sai — Lambda@Edge gọi KMS tốn công và độ trễ, không phải tính năng chuẩn; symmetric key có thể giải mã bởi nhiều bên.</li><li><strong>D</strong>: ❌ Sai — Mã hóa bằng private key là sai về mặt mật mã; phải dùng public key để mã hóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>field-level encryption</li><li>RSA public key</li><li>CloudFront cache behavior</li><li>chỉ một service giải mã</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"mã hóa field nhạy cảm tại CloudFront, chỉ một service giải mã\" → nghĩ ngay đến <strong>field-level encryption</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#303",
          "answers": [
            {
              "choice": "<p>A. Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a field-level encryption profile and a configuration. Associate the KMS key and the configuration with the CloudFront cache behavior.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RSA key pair that is dedicated to the data-handing microservice. Upload the public key to the CloudFront distribution. Create a field-level encryption profile and a configuration. Add the configuration to the CloudFront cache behavior.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the KMS key to encrypt the sensitive data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an RSA key pair that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the private key of the RSA key pair to encrypt the sensitive data.</p>",
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
      "question_id": "#302",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate its on-premises VMware cluster of 120 VMs to AWS. The VMs have many different operating systems and many custom software packages installed. The company also has an on-premises NFS server that is 10 TB in size. The company has set up a 10 Gbps AWS Direct Connect connection to AWS for the migration.<br><br>Which solution will complete the migration to AWS in the LEAST amount of time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate 120 VMware VMs (nhiều OS, nhiều phần mềm custom) và 10 TB NFS qua Direct Connect 10 Gbps.</li><li>Requirement quyết định: LEAST amount of time.</li><li>Ưu tiên: tốc độ, không phải cài lại phần mềm.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Application Migration Service</strong> replicate liên tục VM lên EC2 mà không phải cài lại, cutover nhanh. <strong>AWS DataSync</strong> chuyển 10 TB NFS qua Direct Connect 10 Gbps trong vài giờ đến dưới một ngày vào <strong>Amazon EFS</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Export VM thủ công + Snowball Edge mất nhiều ngày vận chuyển, dù đã có Direct Connect.</li><li><strong>B</strong>: ✅ Đúng — Application Migration Service + DataSync/EFS, tận dụng Direct Connect, nhanh nhất.</li><li><strong>C</strong>: ❌ Sai — Cài lại VM và phần mềm custom rất tốn thời gian; FSx for Lustre không phù hợp NFS server thông thường.</li><li><strong>D</strong>: ❌ Sai — Snowball Edge cần thời gian vận chuyển, thêm bước copy S3 sang EFS.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Migration Service (MGN)</li><li>DataSync</li><li>Direct Connect 10 Gbps</li><li>LEAST time</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"đã có Direct Connect + 10 TB\" → dùng DataSync, không dùng Snowball; gặp \"lift-and-shift VM\" → nghĩ ngay đến <strong>Application Migration Service</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#302",
          "answers": [
            {
              "choice": "<p>A. Export the on-premises VMs and copy them to an Amazon S3 bucket. Use VM Import/Export to create AMIs from the VM images that are stored in Amazon S3. Order an AWS Snowball Edge device. Copy the NFS server data to the device. Restore the NFS server data to an Amazon EC2 instance that has NFS configured.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Application Migration Service with a connection to the VMware cluster. Create a replication job for the VMS. Create an Amazon Elastic File System (Amazon EFS) file system. Configure AWS DataSync to copy the NFS server data to the EFS file system over the Direct Connect connection.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Recreate the VMs on AWS as Amazon EC2 instances. Install all the required software packages. Create an Amazon FSx for Lustre file system. Configure AWS DataSync to copy the NFS server data to the FSx for Lustre file system over the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order two AWS Snowball Edge devices. Copy the VMs and the NFS server data to the devices. Run VM Import/Export after the data from the devices is loaded to an Amazon S3 bucket. Create an Amazon Elastic File System (Amazon EFS) file system. Copy the NFS server data from Amazon S3 to the EFS file system.</p>",
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
      "question_id": "#301",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application that will run on an AWS Lambda function. Hundreds of customers will use the application. The company wants to give each customer a quota of requests for a specific time period. The quotas must match customer usage patterns. Some customers must receive a higher quota for a shorter time period.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cấp quota request theo từng customer cho API chạy trên Lambda, quota theo khoảng thời gian tùy customer.</li><li>Requirement quyết định: quota per-customer + khoảng thời gian linh hoạt (ngày/tuần/tháng).</li><li>Ưu tiên: dùng tính năng managed có sẵn, ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>API Gateway REST API hỗ trợ <strong>usage plan</strong> với <strong>quota</strong> (số request/ngày, tuần, tháng) và throttling, gắn với <strong>API key</strong> của từng customer. Mỗi customer một usage plan nên khớp usage pattern riêng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — REST API + usage plan + API key là cơ chế quota chuẩn.</li><li><strong>B</strong>: ❌ Sai — HTTP API không hỗ trợ usage plan và API key.</li><li><strong>C</strong>: ❌ Sai — Concurrency limit của alias là số lần chạy đồng thời, không phải quota request theo thời gian; Function URL cũng không có quota.</li><li><strong>D</strong>: ❌ Sai — WAF rate-based rule giới hạn theo IP trong cửa sổ cố định, không phải quota theo customer.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>usage plan</li><li>API key</li><li>quota per customer</li><li>REST API (không phải HTTP API)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"quota theo customer / API key\" → nghĩ ngay đến API Gateway <strong>REST API usage plan</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#301",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon API Gateway REST API with a proxy integration to invoke the Lambda function. For each customer, configure an API Gateway usage plan that includes an appropriate request quota. Create an API key from the usage plan for each user that the customer needs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API with a proxy integration to invoke the Lambda function. For each customer configure an API Gateway usage plan that includes an appropriate request quota Configure route-level throttling for each usage plan. Create an API Key from the usage plan for each user that the customer needs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Lambda function alias for each customer. Include a concurrency limit with an appropriate request quota. Create a Lambda function URL for each function alias. Share the Lambda function URL for each alias with the relevant customer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) in a VPC. Configure the Lambda function as a target for the ALB. Configure an AWS WAF web ACL for the ALB. For each customer configure a rale-based rule that includes an appropriate request quota.</p>",
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
      "question_id": "#300",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate several applications to AWS. The company does not have a good understanding of its entire application estate. The estate consists of a mixture of physical machines and VMs.<br><br>One application that the company will migrate has many dependencies that are sensitive to latency. The company is unsure what all the dependencies are. However the company knows that the low-latency communications use a custom IP-based protocol that runs on port 1000. The company wants to migrate the application and these dependencies together to move all the low-latency interfaces to AWS at the same time.<br><br>The company has installed the AWS Application Discovery Agent and has been collecting data for several months.<br><br>What should the company do to identify the dependencies that need to be migrated in the same phase as the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Không rõ dependency của ứng dụng, đã có dữ liệu từ <strong>Application Discovery Agent</strong>.</li><li>Requirement: tìm server giao tiếp qua port 1000 để migrate cùng phase.</li><li>Ưu tiên: dùng dữ liệu discovery có sẵn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Migration Hub</strong> hiển thị network graph, bật <strong>data exploration in Athena</strong> để query dữ liệu network do agent thu thập, tìm server dùng port 1000, rồi tạo move group.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Migration Hub network graph + Athena data exploration + move group.</li><li><strong>B</strong>: ❌ Sai — Application Migration Service không dùng để khám phá dependency.</li><li><strong>C</strong>: ❌ Sai — Network Access Analyzer phân tích network cấu hình AWS, không phải dữ liệu discovery on-premises.</li><li><strong>D</strong>: ❌ Sai — Discovery Agent không đẩy CloudWatch agent hay logs theo cách này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Migration Hub, Application Discovery Agent, data exploration in Athena, move group</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Tìm dependency theo port từ dữ liệu discovery → Migration Hub + Athena data exploration.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#300",
          "answers": [
            {
              "choice": "<p>A. Use AWS Migration Hub and select the servers that host the application. Visualize the network graph to find servers that interact with the application. Turn on data exploration in Amazon Athena. Query the data that is transferred between the servers to identify the servers that communicate on port 1000. Return to Migration Hub. Create a move group that is based on the findings from the Athena queries.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Application Migration Service and select the servers that host the application. Visualize the network graph to find servers that interact with the application. Configure Application Migration Service to launch test instances for all the servers that interact with the application. Perform acceptance tests on the test instances. If no issues are identified, create a move group that is based on the tested servers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Migration Hub and select the servers that host the application. Turn on data exploration in Network Access Analyzer. Use the Network Access Analyzer console to select the servers that host the application. Select a Network Access Scope of port 1000 and note the matching servers. Return to Migration Hub. Create a move group that is based on the findings from Network Access Analyzer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Migration Hub and select the servers that host the application. Push the Amazon CloudWalch agent to the identified servers by using the AWS Application Discovery Agent. Export the CloudWatch logs that the agents collect to Amazon S3. Use Amazon Athena to query the logs to find servers that communicate on port 1000. Return to Migration Hub Create a move group that is based on the findings from the Athena queries.</p>",
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
      "question_id": "#135",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch. Currently, the game consists of the following components deployed in a single AWS Region:<br><br>• Amazon S3 bucket that stores game assets<br>• Amazon DynamoDB table that stores player scores<br><br>A solutions architect needs to design a multi-Region solution that will reduce latency, improve reliability, and require the least effort to implement.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: game toàn cầu, assets ở S3 và scores ở DynamoDB cần multi-Region.</li><li>Requirement chính: giảm latency, tăng reliability, ít công sức nhất.</li><li>Ưu tiên: CloudFront, cross-Region replication, DynamoDB global tables.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo S3 bucket ở Region mới với <strong>Cross-Region Replication</strong>, CloudFront với <strong>origin failover</strong> cho hai origin, và <strong>DynamoDB global tables</strong> (bật Streams, thêm replica) để đồng bộ scores đa Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thiếu bucket đích/origin failover rõ ràng; cách tạo replica table mô tả không chuẩn.</li><li><strong>B</strong>: ❌ Sai — Same-Region Replication không giúp multi-Region; DMS CDC là thừa.</li><li><strong>C</strong>: ✅ Đúng — S3 CRR + CloudFront origin failover + DynamoDB global tables.</li><li><strong>D</strong>: ❌ Sai — Same-Region Replication không đáp ứng multi-Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 CRR</li><li>CloudFront origin failover</li><li>DynamoDB global tables</li><li>DynamoDB Streams</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Multi-Region S3 + DynamoDB → nghĩ ngay đến CRR và global tables.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#135",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Cross-Region Replication. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB table in a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create another S3 bucket in a new Region, and configure S3 Cross-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create another S3 bucket in the sine Region, and configure S3 Same-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
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
      "question_id": "#230",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is analyzing costs of a multi-application environment. The environment is deployed across multiple Availability Zones in a single AWS Region. After a recent acquisition, the company manages two organizations in AWS Organizations. The company has created multiple service provider applications as AWS PrivateLink-powered VPC endpoint services in one organization. The company has created multiple service consumer applications in the other organization.<br><br>Data transfer charges are much higher than the company expected, and the solutions architect needs to reduce the costs. The solutions architect must recommend guidelines for developers to follow when they deploy services. These guidelines must minimize data transfer charges for the whole environment.<br><br>Which guidelines meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm data transfer charge cho PrivateLink endpoint service (provider/consumer ở 2 organization).</li><li>Requirement: tối thiểu chi phí data transfer cross-AZ.</li><li>Ưu tiên: giữ traffic trong cùng AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tắt <strong>cross-zone load balancing</strong> trên <strong>NLB</strong> của provider để traffic không bị đẩy sang AZ khác, và để consumer dùng <strong>zonal DNS name</strong> của endpoint nhằm giữ traffic trong cùng AZ, từ đó tránh phí inter-AZ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chia sẻ subnet qua RAM không giảm data transfer của PrivateLink.</li><li><strong>B</strong>: ❌ Sai — cùng organization không làm giảm phí data transfer cross-AZ.</li><li><strong>C</strong>: ✅ Đúng — tắt cross-zone LB giữ traffic trong AZ.</li><li><strong>D</strong>: ✅ Đúng — dùng zonal DNS name của endpoint để ở cùng AZ.</li><li><strong>E</strong>: ❌ Sai — Savings Plans không áp dụng cho inter-AZ data transfer.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-zone load balancing</li><li>Zonal endpoint DNS name</li><li>Inter-AZ data transfer</li><li>PrivateLink</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp giảm phí cross-AZ với PrivateLink/NLB → nghĩ ngay đến tắt cross-zone và dùng zonal DNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#230",
          "answers": [
            {
              "choice": "<p>A. Use AWS Resource Access Manager to share the subnets that host the service provider applications with other accounts in the organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Place the service provider applications and the service consumer applications in AWS accounts in the same organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn off cross-zone load balancing for the Network Load Balancer in all service provider application deployments.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that service consumer compute resources use the Availability Zone-specific endpoint service by using the endpoint's local DNS name.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a Savings Plan that provides adequate coverage for the organization's planned inter-Availability Zone data transfer usage.</p>",
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
      "question_id": "#229",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is planning to migrate critical Microsoft SQL Server databases to AWS. Because the databases are legacy systems, the solutions architect will move the databases to a modern data architecture. The solutions architect must migrate the databases with near-zero downtime.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate SQL Server database quan trọng lên AWS với near-zero downtime.</li><li>Requirement: đồng bộ liên tục rồi cutover nhanh.</li><li>Ưu tiên: downtime tối thiểu, ít thao tác phức tạp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng công cụ HA/replication native của SQL Server (ví dụ log shipping, Always On, distributed availability group) để replicate sang <strong>Amazon RDS for SQL Server</strong>; khi đồng bộ xong thì chuyển workload, downtime gần như bằng 0.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Application Migration Service là cho server, SCT/Aurora không khớp với yêu cầu và quá phức tạp.</li><li><strong>B</strong>: ❌ Sai — dùng S3 làm target rồi load vào RDS thêm bước, kéo dài downtime, không phải near-zero.</li><li><strong>C</strong>: ✅ Đúng — native replication sang RDS SQL Server rồi cutover.</li><li><strong>D</strong>: ❌ Sai — rehost lên EC2 rồi detach/reattach database gây downtime.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Near-zero downtime</li><li>Native SQL Server replication</li><li>Amazon RDS for SQL Server</li><li>Cutover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp migrate SQL Server cùng engine với near-zero downtime → nghĩ ngay đến replication native sang <strong>RDS</strong> rồi cutover.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#229",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Migration Service and the AWS Schema Conversion Tool (AWS SCT). Perform an in-place upgrade before the migration. Export the migrated data to Amazon Aurora Serverless after cutover. Repoint the applications to Amazon Aurora.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS) to rehost the database. Set Amazon S3 as a target. Set up change data capture (CDC) replication. When the source and destination are fully synchronized, load the data from Amazon S3 into an Amazon RDS for Microsoft SQL Server DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use native database high availability tools. Connect the source system to an Amazon RDS for Microsoft SQL Server DB instance. Configure replication accordingly. When data replication is finished, transition the workload to an Amazon RDS for Microsoft SQL Server DB instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Migration Service. Rehost the database server on Amazon EC2. When data replication is finished, detach the database and move the database to an Amazon RDS for Microsoft SQL Server DB instance. Reattach the database and then cut over all networking.</p>",
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
      "question_id": "#210",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has Linux-based Amazon EC2 instances. Users must access the instances by using SSH with EC2 SSH key pairs. Each machine requires a unique EC2 key pair.<br><br>The company wants to implement a key rotation policy that will, upon request, automatically rotate all the EC2 key pairs and keep the keys in a securely encrypted place. The company will accept less than 1 minute of downtime during key rotation.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mỗi Linux EC2 có key pair SSH riêng, cần rotate tự động theo yêu cầu.</li><li>Key phải lưu ở nơi mã hóa an toàn, chấp nhận downtime dưới 1 phút.</li><li>Ưu tiên: secret storage + rotation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Secrets Manager</strong> lưu private key mã hóa, rotation schedule gọi <strong>Lambda</strong> để tạo key mới, thay public key trên instance và cập nhật private key trong secret.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Secrets Manager + rotation Lambda.</li><li><strong>B</strong>: ❌ Sai — Parameter Store dạng String không mã hóa, không phải nơi lưu private key an toàn.</li><li><strong>C</strong>: ❌ Sai — KMS không import được EC2 key pair để rotate như vậy; KMS rotation không đổi SSH key.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Run Command rotate được nhưng không có nơi lưu private key mã hóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Secrets Manager rotation</li><li>Lambda rotation function</li><li>EC2 key pair</li><li>private key</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp rotate key/credentials và lưu an toàn → nghĩ ngay đến <strong>Secrets Manager + rotation Lambda</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#210",
          "answers": [
            {
              "choice": "<p>A. Store all the keys in AWS Secrets Manager. Define a Secrets Manager rotation schedule to invoke an AWS Lambda function to generate new key pairs. Replace public keys on EC2 instances. Update the private keys in Secrets Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store all the keys in Parameter Store, a capability of AWS Systems Manager, as a string. Define a Systems Manager maintenance window to invoke an AWS Lambda function to generate new key pairs. Replace public keys on EC2 instances. Update the private keys in Parameter Store.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Import the EC2 key pairs into AWS Key Management Service (AWS KMS). Configure automatic key rotation for these key pairs. Create an Amazon EventBridge scheduled rule to invoke an AWS Lambda function to initiate the key rotation in AWS KMS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add all the EC2 instances to Fleet Manager, a capability of AWS Systems Manager. Define a Systems Manager maintenance window to issue a Systems Manager Run Command document to generate new key pairs and to rotate public keys to all the instances in Fleet Manager.</p>",
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
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software-as-a-service (SaaS) provider exposes APIs through an Application Load Balancer (ALB). The ALB connects to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that is deployed in the us-east-1 Region. The exposed APIs contain usage of a few non-standard REST methods: LINK, UNLINK, LOCK, and UNLOCK.<br><br>Users outside the United States are reporting long and inconsistent response times for these APIs. A solutions architect needs to resolve this problem with a solution that minimizes operational overhead.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API qua ALB + EKS ở us-east-1, dùng các HTTP method không chuẩn (LINK, UNLINK, LOCK, UNLOCK).</li><li>User ngoài Mỹ gặp latency cao và không ổn định.</li><li>Ưu tiên: giảm latency toàn cầu, minimize operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Global Accelerator</strong> đưa traffic vào AWS global network qua edge location gần user, hoạt động ở layer 4 nên hỗ trợ mọi HTTP method; ALB làm endpoint, không cần thay đổi kiến trúc.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudFront chỉ hỗ trợ một số HTTP method chuẩn, không hỗ trợ LINK/UNLINK/LOCK/UNLOCK.</li><li><strong>B</strong>: ❌ Sai — API Gateway không hỗ trợ các method không chuẩn này.</li><li><strong>C</strong>: ✅ Đúng — Global Accelerator + ALB, ít vận hành, không phụ thuộc method.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — triển khai multi-Region tốn vận hành nhiều.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>non-standard HTTP methods</li><li>Global Accelerator</li><li>inconsistent latency</li><li>ALB endpoint</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp method HTTP lạ hoặc cần giảm latency toàn cầu không cache → nghĩ ngay đến <strong>Global Accelerator</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#208",
          "answers": [
            {
              "choice": "<p>A. Add an Amazon CloudFront distribution. Configure the ALB as the origin.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon API Gateway edge-optimized API endpoint to expose the APIs. Configure the ALB as the target.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an accelerator in AWS Global Accelerator. Configure the ALB as the origin.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the APIs to two additional AWS Regions: eu-west-1 and ap-southeast-2. Add latency-based routing records in Amazon Route 53.</p>",
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
      "question_id": "#204",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application in the AWS Cloud. The application runs on a fleet of 20 Amazon EC2 instances. The EC2 instances are persistent and store data on multiple attached Amazon Elastic Block Store (Amazon EBS) volumes.<br><br>The company must maintain backups in a separate AWS Region. The company must be able to recover the EC2 instances and their configuration within 1 business day, with loss of no more than 1 day's worth of data. The company has limited staff and needs a backup solution that optimizes operational efficiency and cost. The company already has created an AWS CloudFormation template that can deploy the required network configuration in a secondary Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backup 20 EC2 instance (nhiều EBS volume) sang Region khác.</li><li>Requirement: recover instance + configuration trong 1 ngày, mất tối đa 1 ngày dữ liệu (RPO/RTO 1 ngày).</li><li>Ưu tiên: operational efficiency và cost, ít nhân sự.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Backup</strong> backup cả EC2 instance (gồm configuration và các EBS volume), có scheduled plan và cross-Region copy sang vault, restore quản lý tập trung — ít vận hành nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự viết CloudFormation cho EC2 và runbook, tốn công vận hành.</li><li><strong>B</strong>: ❌ Sai — Amazon DLM tạo snapshot nhưng không dùng để restore volume; không backup instance configuration.</li><li><strong>C</strong>: ✅ Đúng — AWS Backup plan hằng ngày + copy cross-Region, restore instance và configuration.</li><li><strong>D</strong>: ❌ Sai — chạy sẵn EC2 ở Region phụ tốn chi phí, DataSync không phù hợp cho EBS volume.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Backup</li><li>cross-Region copy</li><li>operational efficiency</li><li>instance configuration</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp backup EC2/EBS cross-Region ít vận hành → nghĩ ngay đến <strong>AWS Backup</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#204",
          "answers": [
            {
              "choice": "<p>A. Create a second CloudFormation template that can recreate the EC2 instances in the secondary Region. Run daily multivolume snapshots by using AWS Systems Manager Automation runbooks. Copy the snapshots to the secondary Region. In the event of a failure launch the CloudFormation templates, restore the EBS volumes from snapshots, and transfer usage to the secondary Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Data Lifecycle Manager (Amazon DLM) to create daily multivolume snapshots of the EBS volumes. In the event of a failure, launch the CloudFormation template and use Amazon DLM to restore the EBS volumes and transfer usage to the secondary Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup to create a scheduled daily backup plan for the EC2 instances. Configure the backup task to copy the backups to a vault in the secondary Region. In the event of a failure, launch the CloudFormation template, restore the instance volumes and configurations from the backup vault, and transfer usage to the secondary Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy EC2 instances of the same size and configuration to the secondary Region. Configure AWS DataSync daily to copy data from the primary Region to the secondary Region. In the event of a failure, launch the CloudFormation template and transfer usage to the secondary Region.</p>",
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
      "question_id": "#200",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has implemented a SAML 2.0 federated identity solution with their company's on-premises identity provider (IdP) to authenticate users' access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment.<br><br>Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>SAML 2.0 federation với on-premises IdP: test thành công nhưng test users khác không vào được AWS.</li><li>Cần kiểm tra các thành phần cấu hình federation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Federation cần IAM role trust policy đặt SAML provider làm principal, portal gọi `AssumeRoleWithSAML` với đúng ARN và assertion, và IdP map user/group sang IAM role phù hợp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Federated user không phải IAM user, không cần permissions policy cho SAML.</li><li><strong>B</strong>: ✅ Đúng — Trust policy của role phải có SAML provider là principal.</li><li><strong>C</strong>: ✅ Đúng — Portal phải gọi `AssumeRoleWithSAML` đúng tham số.</li><li><strong>D</strong>: ❌ Sai — IdP on-premises không cần reachable từ VPC; browser của user là bên liên lạc với IdP.</li><li><strong>E</strong>: ✅ Đúng — Assertion map user/group tới IAM roles.</li><li>Lựa chọn lặp \"B. Test users are not in the AWSFederatedUsers group\": ❌ Sai/mơ hồ — là lựa chọn bị lỗi định dạng trong đề, không phải điều cần kiểm tra.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SAML provider principal</li><li>`AssumeRoleWithSAML`</li><li>Assertion mapping to IAM roles</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"SAML federation lỗi → kiểm tra trust policy, AssumeRoleWithSAML và attribute mapping.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#200",
          "answers": [
            {
              "choice": "<p>A. The IAM user's permissions policy has allowed the use of SAML federation for that user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The IAM roles created for the federated users' or federated groups' trust policy have set the SAML provider as the principal.<br>B. Test users are not in the AWSFederatedUsers group in the company's IdP.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdP.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The on-premises IdP's DNS hostname is reachable from the AWS environment VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. The company's IdP defines SAML assertions that properly map users or groups. In the company to IAM roles with appropriate permissions.</p>",
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
      "question_id": "#199",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an organization in AWS Organizations to manage hundreds of AWS accounts. A solutions architect is working on a solution to provide baseline protection for the Open Web Application Security Project (OWASP) top 10 web application vulnerabilities. The solutions architect is using AWS WAF for all existing and new Amazon CloudFront distributions that are deployed within the organization.<br><br>Which combination of steps should the solutions architect take to provide the baseline protection? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Baseline OWASP top 10 bằng AWS WAF cho mọi CloudFront distribution trong organization hàng trăm account.</li><li>Ưu tiên: quản lý tập trung, tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Firewall Manager deploy WAF rules tập trung. Firewall Manager yêu cầu AWS Organizations bật all features và AWS Config bật ở các account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Firewall Manager cần AWS Config.</li><li><strong>B</strong>: ❌ Sai — GuardDuty là threat detection, không deploy WAF rule.</li><li><strong>C</strong>: ✅ Đúng — Cần all features của Organizations.</li><li><strong>D</strong>: ✅ Đúng — Firewall Manager deploy WAF rules tập trung.</li><li><strong>E</strong>: ❌ Sai — Shield Advanced là bảo vệ DDoS, không dùng để deploy WAF rules theo cách này.</li><li><strong>F</strong>: ❌ Sai — Security Hub tổng hợp findings, không deploy WAF rules.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Firewall Manager</li><li>AWS Config</li><li>Organizations all features</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Deploy WAF rules toàn organization → Firewall Manager (cần Config + all features).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#199",
          "answers": [
            {
              "choice": "<p>A. Enable AWS Config in all accounts</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon GuardDuty in all accounts</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable all features for the organization</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Firewall Manager to deploy AWS WAF rules in all accounts for all CloudFront distributions</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Shield Advanced to deploy AWS WAF rules in all accounts for all CloudFront distributions</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Security Hub to deploy AWS WAF rules in all accounts for all CloudFront distributions</p>",
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
      "question_id": "#190",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on AWS. The web application delivers static content from an Amazon S3 bucket that is behind an Amazon CloudFront distribution. The application serves dynamic content by using an Application Load Balancer (ALB) that distributes requests to a fleet of Amazon EC2 instances in Auto Scaling groups. The application uses a domain name setup in Amazon Route 53.<br><br>Some users reported occasional issues when the users attempted to access the website during peak hours. An operations team found that the ALB sometimes returned HTTP 503 Service Unavailable errors. The company wants to display a custom error message page when these errors occur. The page should be displayed immediately for this error code.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ALB đôi khi trả 503, cần hiển thị trang lỗi tùy chỉnh ngay lập tức khi gặp 503.</li><li>Đã có CloudFront trước ALB.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFront origin group failover: nếu primary origin (ALB) trả 503, CloudFront chuyển ngay sang secondary origin là S3 static website chứa trang lỗi. Cấu hình đơn giản, phản ứng tức thời theo status code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Route 53 health check phản ứng chậm, không theo từng response 503.</li><li><strong>B</strong>: ❌ Sai — Thêm distribution thứ hai và failover DNS, phức tạp và chậm.</li><li><strong>C</strong>: ✅ Đúng — Origin failover theo HTTP 503, S3 phục vụ error page.</li><li><strong>D</strong>: ❌ Sai — CloudFront Function không thể đọc S3 hay gọi backend.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront origin group</li><li>Origin failover on 5xx</li><li>S3 static website error page</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Lỗi 5xx từ origin → trang dự phòng ngay lập tức → CloudFront origin group failover.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#190",
          "answers": [
            {
              "choice": "<p>A. Set up a Route 53 failover routing policy. Configure a health check to determine the status of the ALB endpoint and to fail over to the failover S3 bucket endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second CloudFront distribution and an S3 static website to host the custom error page. Set up a Route 53 failover routing policy. Use an active-passive configuration between the two distributions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a CloudFront origin group that has two origins. Set the ALB endpoint as the primary origin. For the secondary origin, set an S3 bucket that is configured to host a static website Set up origin failover for the CloudFront distribution. Update the S3 static website to incorporate the custom error page.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFront function that validates each HTTP response code that the ALB returns. Create an S3 static website in an S3 bucket. Upload the custom error page to the S3 bucket as a failover. Update the function to read the S3 bucket and to serve the error page to the end users.</p>",
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
      "question_id": "#180",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a processing engine in the AWS Cloud. The engine processes environmental data from logistics centers to calculate a sustainability index. The company has millions of devices in logistics centers that are spread across Europe. The devices send information to the processing engine through a RESTful API.<br><br>The API experiences unpredictable bursts of traffic. The company must implement a solution to process all data that the devices send to the processing engine. Data loss is unacceptable.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng triệu devices gửi dữ liệu qua RESTful API, traffic bùng nổ khó đoán.</li><li>Không được mất dữ liệu.</li><li>Ưu tiên: buffering, durability, scalability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>API Gateway tích hợp trực tiếp với Amazon SQS lưu request vào queue bền vững, hấp thụ burst. Lambda xử lý bất đồng bộ từ queue nên không mất dữ liệu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB không thể dùng SQS làm target.</li><li><strong>B</strong>: ✅ Đúng — API Gateway HTTP API (service integration) + SQS + Lambda, decoupled, durable.</li><li><strong>C</strong>: ❌ Sai — Xử lý trực tiếp trên EC2, không buffer; burst có thể gây mất dữ liệu; không có \"Auto Scaling group proxy integration\".</li><li><strong>D</strong>: ❌ Sai — CloudFront không dùng Kinesis Data Streams làm origin.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway service integration với SQS</li><li>Unpredictable bursts → queue buffer</li><li>Data loss unacceptable</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Burst + không mất dữ liệu → API Gateway → SQS → Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#180",
          "answers": [
            {
              "choice": "<p>A. Create an Application Load Balancer (ALB) for the RESTful API. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a listener and a target group for the ALB Add the SQS queue as the target. Use a container that runs in Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type to process messages in the queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API that implements the RESTful API. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create an API Gateway service integration with the SQS queue. Create an AWS Lambda function to process messages in the SQS queue.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway REST API that implements the RESTful API. Create a fleet of Amazon EC2 instances in an Auto Scaling group. Create an API Gateway Auto Scaling group proxy integration. Use the EC2 instances to process incoming data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution for the RESTful API. Create a data stream in Amazon Kinesis Data Streams. Set the data stream as the origin for the distribution. Create an AWS Lambda function to consume and process data in the data stream.</p>",
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
      "question_id": "#127",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A delivery company needs to migrate its third-party route planning application to AWS. The third party supplies a supported Docker image from a public registry. The image can run in as many containers as required to generate the route map.<br><br>The company has divided the delivery area into sections with supply hubs so that delivery drivers travel the shortest distance possible from the hubs to the customers. To reduce the time necessary to generate route maps, each section uses its own set of Docker containers with a custom configuration that processes orders only in the section's area.<br><br>The company needs the ability to allocate resources cost-effectively based on the number of running containers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chạy Docker image từ public registry, mỗi section một nhóm container riêng.</li><li>Requirement chính: phân bổ chi phí theo số container đang chạy (cost allocation bằng tag) và <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: serverless container, không quản lý server, tagging để theo dõi cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon ECS on AWS Fargate</strong> không phải quản lý EC2. `run-task` hỗ trợ `enableECSManagedTags` và `--tags` để gắn tag cho task, giúp phân bổ chi phí theo từng section/nhóm container.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EKS on EC2 phải quản lý node và cluster, overhead cao; EKS CLI không có `--tags` cho pod.</li><li><strong>B</strong>: ❌ Sai — Fargate tốt nhưng EKS phức tạp hơn; pod không được tag bằng `tag-resource` như vậy.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — ECS on EC2 vẫn phải quản lý instance/capacity.</li><li><strong>D</strong>: ✅ Đúng — ECS + Fargate, `enableECSManagedTags` + `--tags`, ít vận hành nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ECS on Fargate</li><li>run-task</li><li>enableECSManagedTags</li><li>Cost allocation tags</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Container + least ops + phân bổ chi phí bằng tag → nghĩ ngay đến ECS Fargate với managed tags.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#127",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2. Use the Amazon EKS CLI to launch the planning application in pods by using the --tags option to assign a custom tag to the pod.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on AWS Fargate. Use the Amazon EKS CLI to launch the planning application. Use the AWS CLI tag-resource API call to assign a custom tag to the pod.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic Container Service (Amazon ECS) cluster on Amazon EC2. Use the AWS CLI with run-tasks set to true to launch the planning application by using the --tags option to assign a custom tag to the task.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Use the AWS CLI run-task command and set enableECSManagedTags to true to launch the planning application. Use the --tags option to assign a custom tag to the task.</p>",
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
      "question_id": "#177",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a call center by using Amazon Connect. The company’s operations team is defining a disaster recovery (DR) strategy across AWS Regions. The contact center has dozens of contact flows, hundreds of users, and dozens of claimed phone numbers.<br><br>Which solution will provide DR with the LOWEST RTO?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR đa Region cho Amazon Connect.</li><li>Có nhiều contact flows, users, claimed phone numbers.</li><li>Ưu tiên: LOWEST RTO.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Pre-provision sẵn instance Connect ở Region thứ hai cùng users và contact flows (phần nhiều, tốn thời gian). Chỉ phần claimed phone numbers cần chuyển khi failover nên làm tự động bằng Lambda + CloudFormation, kích hoạt từ Route 53 health check và CloudWatch alarm. Không cần con người can thiệp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Tạo instance sau sự cố, thủ công, RTO dài nhất.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Phải deploy cả contact flows lúc failover, RTO cao hơn D; check mỗi 5 phút chậm.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Phải provision hundreds users lúc failover, mất nhiều thời gian hơn numbers.</li><li><strong>D</strong>: ✅ Đúng — Chuẩn bị trước phần nặng nhất, chỉ chuyển phone numbers, phát hiện tự động bằng health check + alarm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lowest RTO → warm standby, pre-provision</li><li>Route 53 health check + CloudWatch alarm</li><li>Claimed phone numbers chuyển lúc failover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Lowest RTO → chuẩn bị sẵn tối đa, tự động hóa failover, chỉ để lại phần nhỏ nhất làm lúc sự cố.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#177",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to check the availability of the Amazon Connect instance and to send a notification to the operations team in case of unavailability. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. After notification, instruct the operations team to use the AWS Management Console to provision a new Amazon Connect instance in a second Region. Deploy the contact flows, users, and claimed phone numbers by using an AWS CloudFormation template.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a new Amazon Connect instance with all existing users in a second Region. Create an AWS Lambda function to check the availability of the Amazon Connect instance. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. In the event of an issue, configure the Lambda function to deploy an AWS CloudFormation template that provisions contact flows and claimed numbers in the second Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a new Amazon Connect instance with all existing contact flows and claimed phone numbers in a second Region. Create an Amazon Route 53 health check for the URL of the Amazon Connect instance. Create an Amazon CloudWatch alarm for failed health checks. Create an AWS Lambda function to deploy an AWS CloudFormation template that provisions all users. Configure the alarm to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a new Amazon Connect instance with all existing users and contact flows in a second Region. Create an Amazon Route 53 health check for the URL of the Amazon Connect instance. Create an Amazon CloudWatch alarm for failed health checks. Create an AWS Lambda function to deploy an AWS CloudFormation template that provisions claimed phone numbers. Configure the alarm to invoke the Lambda function.</p>",
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
      "question_id": "#136",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises website application that provides real estate information for potential renters and buyers. The website uses a Java backend and a NoSQL MongoDB database to store subscriber data.<br><br>The company needs to migrate the entire application to AWS with a similar structure. The application must be deployed for high availability, and the company cannot make changes to the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: migrate ứng dụng Java + MongoDB lên AWS, không đổi code.</li><li>Requirement chính: tương thích MongoDB, high availability.</li><li>Ưu tiên: managed database tương thích, multi-AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon DocumentDB (with MongoDB compatibility)</strong> chạy nhiều instance qua nhiều AZ cho high availability, giữ nguyên MongoDB API nên không cần sửa ứng dụng. Backend Java chạy EC2 Auto Scaling nhiều AZ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Aurora là relational, không tương thích MongoDB.</li><li><strong>B</strong>: ❌ Sai — MongoDB tự quản lý trên EC2 và chỉ một AZ, không HA.</li><li><strong>C</strong>: ✅ Đúng — DocumentDB instance-based nhiều AZ + Auto Scaling nhiều AZ.</li><li><strong>D</strong>: ❌ Sai — DocumentDB không có chế độ \"on-demand capacity mode\" kiểu này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon DocumentDB</li><li>MongoDB compatibility</li><li>Multi-AZ</li><li>Auto Scaling group</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"MongoDB cần migrate, không đổi code → nghĩ ngay đến DocumentDB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#136",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Aurora DB cluster as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use MongoDB on Amazon EC2 instances as the database for the subscriber data. Deploy EC2 instances in an Auto Scaling group in a single Availability Zone for the Java backend application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon DocumentDB (with MongoDB compatibility) with appropriately sized instances in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon DocumentDB (with MongoDB compatibility) in on-demand capacity mode in multiple Availability Zones as the database for the subscriber data. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application.</p>",
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
      "question_id": "#171",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AWS CodeCommit repository. The company must store a backup copy of the data that is in the repository in a second AWS Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần bản backup của repository CodeCommit ở Region thứ hai.</li><li>Requirement: backup cross-Region cho CodeCommit.</li><li>Ưu tiên: giải pháp thực tế, được hỗ trợ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CodeCommit không có tính năng backup cross-Region built-in. Dùng <strong>EventBridge</strong> bắt sự kiện push, <strong>CodeBuild</strong> clone repo, nén zip và copy sang <strong>S3</strong> ở Region thứ hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Elastic Disaster Recovery dành cho server, không hỗ trợ CodeCommit.</li><li><strong>B</strong>: ❌ Sai — AWS Backup không hỗ trợ CodeCommit.</li><li><strong>C</strong>: ✅ Đúng — EventBridge + CodeBuild + S3 cross-Region.</li><li><strong>D</strong>: ❌ Sai — không có tính năng snapshot repository trong Step Functions.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CodeCommit backup, EventBridge, CodeBuild, S3 cross-Region</p><p><strong>🧠 MẸO THI</strong></p><p>\"Service không hỗ trợ AWS Backup → tự dựng EventBridge + CodeBuild + S3.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#171",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Elastic Disaster Recovery to replicate the CodeCommit repository data to the second Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Backup to back up the CodeCommit repository on an hourly schedule. Create a cross-Region copy in the second Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule to invoke AWS CodeBuild when the company pushes code to the repository. Use CodeBuild to clone the repository. Create a .zip file of the content. Copy the file to an S3 bucket in the second Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Step Functions workflow on an hourly schedule to take a snapshot of the CodeCommit repository. Configure the workflow to copy the snapshot to an S3 bucket in the second Region</p>",
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
      "question_id": "#165",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a document processing workload to AWS. The company has updated many applications to natively use the Amazon S3 API to store, retrieve, and modify documents that a processing server generates at a rate of approximately 5 documents every second. After the document processing is finished, customers can download the documents directly from Amazon S3.<br><br>During the migration, the company discovered that it could not immediately update the processing server that generates many documents to support the S3 API. The server runs on Linux and requires fast local access to the files that the server generates and modifies. When the server finishes processing, the files must be available to the public for download within 30 minutes.<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Server Linux chưa hỗ trợ S3 API nhưng cần truy cập file cục bộ nhanh; file phải sẵn sàng để tải từ S3 trong vòng 30 phút.</li><li>Requirement: LEAST amount of effort.</li><li>Ưu tiên: file protocol (NFS) ở local, đồng bộ với S3.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon S3 File Gateway</strong> cung cấp NFS/SMB file share phía trước S3, có local cache cho truy cập nhanh. File ghi vào share sẽ được upload lên S3 tự động, và dùng RefreshCache khi S3 có thay đổi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải viết lại ứng dụng sang Lambda/SDK, mâu thuẫn với việc chưa thể cập nhật server.</li><li><strong>B</strong>: ✅ Đúng — File Gateway NFS, ít công sức nhất.</li><li><strong>C</strong>: ❌ Sai — FSx for Lustre dùng Lustre client, không mount bằng NFS và phức tạp hơn.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — DataSync đồng bộ theo lịch, không liền mạch bằng File Gateway.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>S3 File Gateway, NFS, RefreshCache, local cache, S3 integration</p><p><strong>🧠 MẸO THI</strong></p><p>\"Ứng dụng chỉ hiểu file system nhưng dữ liệu cần ở S3 → S3 File Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#165",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to an AWS Lambda function. Use the AWS SDK for Java to generate, modify, and access the files that the company stores directly in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon S3 File Gateway and configure a file share that is linked to the document store. Mount the file share on an Amazon EC2 instance by using NFS. When changes occur in Amazon S3, initiate a RefreshCache API call to update the S3 File Gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon FSx for Lustre with an import and export policy. Link the new file system to an S3 bucket. Install the Lustre client and mount the document store to an Amazon EC2 instance by using NFS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS DataSync to connect to an Amazon EC2 instance. Configure a task to synchronize the generated files to and from Amazon S3.</p>",
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
