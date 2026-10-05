var SAP_C02_Part3 = 
{
  "msg": "Quiz Questions",
  "data": [
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
      "question_id": "#206",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a serverless architecture by using AWS Lambda functions that need to access a Microsoft SQL Server DB instance on Amazon RDS. The company has separate environments for development and production, including a clone of the database system.<br><br>The company's developers are allowed to access the credentials for the development database. However, the credentials for the production database must be encrypted with a key that only members of the IT security team's IAM user group can access. This key must be rotated on a regular basis.<br><br>What should a solutions architect do in the production environment to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda truy cập SQL Server trên RDS, credentials production phải mã hóa bằng key chỉ IT security team truy cập.</li><li>Key phải được rotate định kỳ.</li><li>Ưu tiên: bảo mật, rotation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Secrets Manager</strong> gắn với KMS customer managed key, giới hạn access cho IT security team, và hỗ trợ rotate secret/credentials tự động; Lambda lấy qua IAM role.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Parameter Store SecureString mã hóa được nhưng không có rotation credentials tự động.</li><li><strong>B</strong>: ❌ Sai — dùng default Lambda key, credentials trong environment variable, không kiểm soát được key.</li><li><strong>C</strong>: ❌ Sai — environment variables vẫn bị lộ cho người xem cấu hình Lambda, không có rotation.</li><li><strong>D</strong>: ✅ Đúng — Secrets Manager + customer managed KMS key + IAM role cho Lambda.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Secrets Manager</li><li>customer managed key</li><li>rotate</li><li>IAM role</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp credentials DB cần rotation + key riêng → nghĩ ngay đến <strong>Secrets Manager + KMS CMK</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. Store the database credentials in AWS Systems Manager Parameter Store by using a SecureString parameter that is encrypted by an AWS Key Management Service (AWS KMS) customer managed key. Attach a role to each Lambda function to provide access to the SecureString parameter. Restrict access to the SecureString parameter and the customer managed key so that only the IT security team can access the parameter and the key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Encrypt the database credentials by using the AWS Key Management Service (AWS KMS) default Lambda key. Store the credentials in the environment variables of each Lambda function. Load the credentials from the environment variables in the Lambda code. Restrict access to the KMS key so that only the IT security team can access the key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database credentials in the environment variables of each Lambda function. Encrypt the environment variables by using an AWS Key Management Service (AWS KMS) customer managed key. Restrict access to the customer managed key so that only the IT security team can access the key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the database credentials in AWS Secrets Manager as a secret that is associated with an AWS Key Management Service (AWS KMS) customer managed key. Attach a role to each Lambda function to provide access to the secret. Restrict access to the secret and the customer managed key so that only the IT security team can access the secret and the key.</p>",
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
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a Grafana data visualization solution that runs on a single Amazon EC2 instance to monitor the health of the company's AWS workloads. The company has invested time and effort to create dashboards that the company wants to preserve. The dashboards need to be highly available and cannot be down for longer than 10 minutes. The company needs to minimize ongoing maintenance.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Grafana chạy trên một EC2, muốn giữ dashboards hiện có.</li><li>Cần highly available, downtime tối đa 10 phút.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Managed Grafana</strong> là managed service, HA sẵn có; dashboards export/import từ Grafana hiện tại và dùng CloudWatch data source.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải tạo lại dashboards, mất công và có thể mất tính năng Grafana.</li><li><strong>B</strong>: ✅ Đúng — Managed Grafana, import dashboards, ít vận hành.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — vẫn tự quản lý AMI, EFS, ASG, ALB.</li><li><strong>D</strong>: ❌ Sai — restore mỗi giờ từ snapshot chậm, tốn vận hành và có thể vượt 10 phút.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Managed Grafana</li><li>preserve dashboards</li><li>least operational overhead</li><li>highly available</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Grafana tự host cần HA, ít vận hành → nghĩ ngay đến <strong>Amazon Managed Grafana</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>A. Migrate to Amazon CloudWatch dashboards. Recreate the dashboards to match the existing Grafana dashboards. Use automatic dashboards where possible.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Managed Grafana workspace. Configure a new Amazon CloudWatch data source. Export dashboards from the existing Grafana instance. Import the dashboards into the new workspace.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AMI that has Grafana pre-installed. Store the existing dashboards in Amazon Elastic File System (Amazon EFS). Create an Auto Scaling group that uses the new AMI. Set the Auto Scaling group's minimum, desired, and maximum number of instances to one. Create an Application Load Balancer that serves at least two Availability Zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Backup to back up the EC2 instance that runs Grafana once each hour. Restore the EC2 instance from the most recent snapshot in an alternate Availability Zone when required.</p>",
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
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an AWS account structure for a company that consists of multiple teams. All the teams will work in the same AWS Region. The company needs a VPC that is connected to the on-premises network. The company expects less than 50 Mbps of total traffic to and from the on-premises network.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều team, cùng Region, cần một VPC kết nối on-premises.</li><li>Traffic dưới 50 Mbps.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo một VPC ở shared services account và share subnets qua <strong>AWS RAM</strong> (B) để các team dùng chung một VPC. Traffic thấp nên <strong>Site-to-Site VPN</strong> (D) rẻ hơn Direct Connect.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mỗi account một VPC, không phải một VPC chung.</li><li><strong>B</strong>: ✅ Đúng — shared VPC qua RAM.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Transit Gateway thêm chi phí, không cần cho một VPC.</li><li><strong>D</strong>: ✅ Đúng — VPN rẻ và đủ cho dưới 50 Mbps.</li><li><strong>E</strong>: ❌ Sai — Direct Connect đắt, thừa cho 50 Mbps.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC sharing</li><li>AWS RAM</li><li>Site-to-Site VPN</li><li>less than 50 Mbps</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp nhiều account dùng chung 1 VPC → <strong>RAM subnet sharing</strong>; băng thông thấp → <strong>Site-to-Site VPN</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#215",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to each AWS account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to a shared services account. Share the subnets by using AWS Resource Access Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transit Gateway along with an AWS Site-to-Site VPN for connectivity to the on-premises network. Share the transit gateway by using AWS Resource Access Manager.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Site-to-Site VPN for connectivity to the on-premises network.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Direct Connect for connectivity to the on-premises network.</p>",
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
      "question_id": "#217",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements:<br><br>• Inbound requests must be filtered for common vulnerability attacks.<br>• Rejected requests must be sent to a third-party auditing application.<br>• All resources should be highly available.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Re-architect ứng dụng trên EC2 một AZ.</li><li>Requirement: lọc request tấn công, gửi request bị từ chối tới hệ thống auditing bên thứ ba, HA.</li><li>Ưu tiên: WAF + logging + Multi-AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Multi-AZ Auto Scaling group + ALB đảm bảo HA; <strong>AWS WAF</strong> với <strong>AWS Managed Rules</strong> lọc lỗ hổng phổ biến; WAF logging qua <strong>Kinesis Data Firehose</strong> gửi thẳng tới đích bên thứ ba.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Amazon Inspector không giám sát traffic/lọc request.</li><li><strong>B</strong>: ❌ Sai — không Multi-AZ/Auto Scaling, WAF log không đi qua CloudWatch Logs tới third-party theo cách này.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — có WAF + Firehose nhưng không HA (không Auto Scaling Multi-AZ).</li><li><strong>D</strong>: ✅ Đúng — Multi-AZ ASG + ALB + WAF managed rules + Firehose.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF</li><li>Managed Rules</li><li>WAF logging to Kinesis Data Firehose</li><li>Multi-AZ Auto Scaling</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp lọc tấn công web + log tới bên thứ ba → nghĩ ngay đến <strong>WAF + Kinesis Data Firehose</strong>; HA → <strong>Multi-AZ ASG</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#217",
          "answers": [
            {
              "choice": "<p>A. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB. Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Application Load Balancer (ALB) and add the EC2 instances as targets. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs. Use an AWS Lambda function to frequently push the logs to the third-party auditing application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Application Load Balancer (ALB) along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF. Create an AWS WAF using the WebACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.</p>",
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
      "question_id": "#218",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application consists of microservices that run on a fleet of Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer. The company recently added a new REST API that was implemented in Amazon API Gateway. Some of the older microservices that run on EC2 instances need to call this new API.<br><br>The company does not want the API to be accessible from the public internet and does not want proprietary data to traverse the public internet.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 microservices gọi REST API trên API Gateway.</li><li>Không muốn API public, không muốn dữ liệu đi qua public internet.</li><li>Ưu tiên: private connectivity.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Private API endpoint</strong> của API Gateway, truy cập qua <strong>interface VPC endpoint</strong> (PrivateLink), kèm resource policy giới hạn từ VPC endpoint — traffic đi trong mạng AWS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Site-to-Site VPN không kết nối tới API Gateway; API key không phải kiểm soát mạng.</li><li><strong>B</strong>: ✅ Đúng — private API + interface VPC endpoint + resource policy.</li><li><strong>C</strong>: ❌ Sai — API Gateway không \"move vào VPC\"; IAM auth không làm API private.</li><li><strong>D</strong>: ❌ Sai — Global Accelerator không kết nối tới API Gateway theo cách này, API vẫn public.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>private API</li><li>interface VPC endpoint</li><li>PrivateLink</li><li>resource policy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp API Gateway không public → nghĩ ngay đến <strong>Private API + interface VPC endpoint</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#218",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection between the VPC and the API Gateway. Use API Gateway to generate a unique API Key for each microservice. Configure the API methods to require the key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an interface VPC endpoint for API Gateway, and set an endpoint policy to only allow access to the specific API. Add a resource policy to API Gateway to only allow access from the VPC endpoint. Change the API Gateway endpoint type to private.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the API Gateway to use IAM authentication. Update the IAM policy for the IAM role that is assigned to the EC2 instances to allow access to the API Gateway. Move the API Gateway into a new VPC. Deploy a transit gateway and connect the VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an accelerator in AWS Global Accelerator, and connect the accelerator to the API Gateway. Update the route table for all VPC subnets with a route to the created Global Accelerator endpoint IP address. Add an API key for each service to use for authentication.</p>",
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
      "question_id": "#219",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has set up its entire infrastructure on AWS. The company uses Amazon EC2 instances to host its ecommerce website and uses Amazon S3 to store static data. Three engineers at the company handle the cloud administration and development through one AWS account. Occasionally, an engineer alters an EC2 security group configuration of another engineer and causes noncompliance issues in the environment.<br><br>A solutions architect must set up a system that tracks changes that the engineers make. The system must send alerts when the engineers make noncompliant changes to the security settings for the EC2 instances.<br><br>What is the FASTEST way for the solutions architect to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Theo dõi thay đổi security group EC2 và gửi cảnh báo khi thay đổi không tuân thủ.</li><li>Ba engineer dùng chung một account.</li><li>Ưu tiên: FASTEST để thiết lập.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Config</strong> theo dõi cấu hình security group và đánh giá compliance bằng Config rules, có sẵn managed rules; gửi alert qua <strong>SNS</strong>. Thiết lập nhanh nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP là guardrail phòng ngừa, không track/alert; một account không cần Organizations.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — CloudTrail ghi lại thay đổi nhưng không đánh giá compliance, phải tự tạo rule phức tạp.</li><li><strong>C</strong>: ❌ Sai — SCP không gửi alert.</li><li><strong>D</strong>: ✅ Đúng — AWS Config + managed rules + SNS.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Config</li><li>Config rules</li><li>noncompliant changes</li><li>SNS alert</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp theo dõi cấu hình và compliance → nghĩ ngay đến <strong>AWS Config</strong>; hành động API (ai làm gì) → CloudTrail.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>A. Set up AWS Organizations for the company. Apply SCPs to govern and track noncompliant security group changes that are made to the AWS account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS CloudTrail to capture the changes to EC2 security groups. Enable Amazon CloudWatch rules to provide alerts when noncompliant security settings are detected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable SCPs on the AWS account to provide alerts when noncompliant security group changes are made to the environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Config on the EC2 security groups to track any noncompliant changes. Send the changes as alerts through an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
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
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run a custom network analysis software package to inspect traffic as traffic leaves and enters a VPC. The company has deployed the solution by using AWS CloudFormation on three Amazon EC2 instances in an Auto Scaling group. All network routing has been established to direct traffic to the EC2 instances.<br><br>Whenever the analysis software stops working, the Auto Scaling group replaces an instance. The network routes are not updated when the instance replacement occurs.<br><br>Which combination of steps will resolve this issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phần mềm phân tích traffic chạy trên EC2 Auto Scaling; khi instance bị thay, network route không cập nhật.</li><li>Cần phát hiện lỗi phần mềm (không chỉ status check) và cập nhật route tự động.</li><li>Ưu tiên: tự động hóa failover.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudWatch agent</strong> gửi process metrics của ứng dụng (B); alarm trên custom metric publish tới <strong>SNS</strong> (D); <strong>Lambda</strong> xử lý SNS để đưa instance ra khỏi service và cập nhật route (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — status check chỉ thấy lỗi instance, không thấy phần mềm ngừng chạy.</li><li><strong>B</strong>: ✅ Đúng — CloudWatch agent gửi process metrics.</li><li><strong>C</strong>: ❌ Sai — SSM Agent không gửi process metrics.</li><li><strong>D</strong>: ✅ Đúng — alarm custom metric + SNS.</li><li><strong>E</strong>: ✅ Đúng — Lambda cập nhật route.</li><li><strong>F</strong>: ❌ Sai — condition của CloudFormation chỉ đánh giá lúc deploy stack, không chạy khi instance thay thế.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch agent process metrics</li><li>custom metric alarm</li><li>SNS + Lambda</li><li>update routes</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cần giám sát process ứng dụng + hành động tự động → <strong>CloudWatch agent + alarm + SNS + Lambda</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#222",
          "answers": [
            {
              "choice": "<p>A. Create alarms based on EC2 status check metrics that will cause the Auto Scaling group to replace the failed instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the CloudFormation template to install the Amazon CloudWatch agent on the EC2 instances. Configure the CloudWatch agent to send process metrics for the application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the CloudFormation template to install AWS Systems Manager Agent on the EC2 instances. Configure Systems Manager Agent to send process metrics for the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an alarm for the custom metric in Amazon CloudWatch for the failure scenarios. Configure the alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Lambda function that responds to the Amazon Simple Notification Service (Amazon SNS) message to take the instance out of service. Update the network routes to point to the replacement instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. In the CloudFormation template, write a condition that updates the network routes when a replacement instance is launched.</p>",
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
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new on-demand video application that is based on microservices. The application will have 5 million users at launch and will have 30 million users after 6 months. The company has deployed the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. The company developed the application by using ECS services that use the HTTPS protocol.<br><br>A solutions architect needs to implement updates to the application by using blue/green deployments. The solution must distribute traffic to each ECS service through a load balancer. The application must automatically adjust the number of tasks in response to an Amazon CloudWatch alarm.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ECS on Fargate, service dùng HTTPS, cần blue/green deployment qua load balancer.</li><li>Phải tự động scale số task theo CloudWatch alarm.</li><li>Ưu tiên: đúng loại load balancer và scaling.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ALB hỗ trợ HTTPS/layer 7 và tích hợp ECS/CodeDeploy blue/green; <strong>ECS Service Auto Scaling</strong> (Application Auto Scaling) scale số task theo CloudWatch alarm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — NLB không phù hợp HTTPS layer 7 ở đây; tăng quota không phải auto scaling.</li><li><strong>B</strong>: ❌ Sai — Cluster Autoscaler là của Kubernetes, không dùng cho ECS Fargate.</li><li><strong>C</strong>: ❌ Sai — ASG/Cluster Autoscaler không áp dụng cho Fargate task.</li><li><strong>D</strong>: ✅ Đúng — ALB + Service Auto Scaling.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ECS blue/green</li><li>Application Load Balancer</li><li>Service Auto Scaling</li><li>Fargate</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp scale task ECS/Fargate theo alarm → nghĩ ngay đến <strong>ECS Service Auto Scaling</strong>; Cluster Autoscaler là của EKS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#223",
          "answers": [
            {
              "choice": "<p>A. Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Request increases to the service quota for tasks per service to meet the demand.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Implement Auto Scaling group for each ECS service by using the Cluster Autoscaler.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement an Auto Scaling group for each ECS service by using the Cluster Autoscaler.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement Service Auto Scaling for each ECS service.</p>",
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
      "question_id": "#225",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs many workloads on AWS and uses AWS Organizations to manage its accounts. The workloads are hosted on Amazon EC2. AWS Fargate. and AWS Lambda. Some of the workloads have unpredictable demand. Accounts record high usage in some months and low usage in other months.<br><br>The company wants to optimize its compute costs over the next 3 years. A solutions architect obtains a 6-month average for each of the accounts across the organization to calculate usage.<br><br>Which solution will provide the MOST cost savings for all the organization's compute usage?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Workloads chạy EC2, Fargate, Lambda trên nhiều account, nhu cầu biến động.</li><li>Tối ưu chi phí compute trong 3 năm.</li><li>Ưu tiên: MOST savings cho toàn bộ compute.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Compute Savings Plan</strong> áp dụng cho EC2, Fargate, Lambda, linh hoạt theo instance family/Region; mua ở management account được chia sẻ cho cả organization và dùng recommendation ở mức organization.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Reserved Instances chỉ cho EC2, không bao gồm Fargate/Lambda và kém linh hoạt.</li><li><strong>B</strong>: ✅ Đúng — Compute Savings Plan ở management account bao phủ EC2, Fargate, Lambda.</li><li><strong>C</strong>: ❌ Sai — RI cho từng account, chỉ EC2.</li><li><strong>D</strong>: ❌ Sai — EC2 Instance Savings Plan chỉ cho EC2 và gắn instance family/Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Compute Savings Plan</li><li>EC2 + Fargate + Lambda</li><li>management account</li><li>unpredictable demand</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp tiết kiệm cho EC2 + Fargate + Lambda → nghĩ ngay đến <strong>Compute Savings Plan</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#225",
          "answers": [
            {
              "choice": "<p>A. Purchase Reserved Instances for the organization to match the size and number of the most common EC2 instances from the member accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase a Compute Savings Plan for the organization from the management account by using the recommendation at the management account level.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase Reserved Instances for each member account that had high EC2 usage according to the data from the last 6 months.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase an EC2 Instance Savings Plan for each member account from the management account based on EC2 usage data from the last 6 months.</p>",
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
      "question_id": "#226",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hundreds of AWS accounts. The company uses an organization in AWS Organizations to manage all the accounts. The company has turned on all features.<br><br>A finance team has allocated a daily budget for AWS costs. The finance team must receive an email notification if the organization's AWS costs exceed 80% of the allocated budget. A solutions architect needs to implement a solution to track the costs and deliver the notifications.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Theo dõi chi phí toàn organization theo ngày và gửi email khi vượt 80% ngân sách.</li><li>Requirement chính: budget theo ngày + alert threshold 80% + thông báo email.</li><li>Ưu tiên giải pháp managed, ít công sức vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Budgets</strong> tạo trong management account (đã bật all features) theo dõi chi phí của toàn organization, hỗ trợ budget period daily, alert threshold 80% và gửi thông báo qua <strong>Amazon SNS</strong>/email. Đây là công cụ native cho đúng nhu cầu này.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — AWS Budgets daily + threshold 80% + SNS.</li><li><strong>B</strong>: ❌ Sai — Trusted Advisor organizational view là báo cáo khuyến nghị, không có cảnh báo theo % budget.</li><li><strong>C</strong>: ❌ Sai — Control Tower guardrail là kiểm soát governance, không phải budget alert theo chi phí.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — CUR + Athena + EventBridge + CloudWatch tự xây phức tạp, Athena không tự gửi alert.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Budgets</li><li>Management account</li><li>Daily budget</li><li>Alert threshold</li><li>Amazon SNS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cảnh báo khi chi phí vượt ngưỡng % budget → nghĩ ngay đến <strong>AWS Budgets</strong> (alert + SNS).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#226",
          "answers": [
            {
              "choice": "<p>A. In the organization's management account, use AWS Budgets to create a budget that has a daily period. Add an alert threshold and set the value to 80%. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the organization’s management account, set up the organizational view feature for AWS Trusted Advisor. Create an organizational view report for cost optimization. Set an alert threshold of 80%. Configure notification preferences. Add the email addresses of the finance team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Register the organization with AWS Control Tower. Activate the optional cost control (guardrail). Set a control (guardrail) parameter of 80%. Configure control (guardrail) notification preferences. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the member accounts to save a daily AWS Cost and Usage Report to an Amazon S3 bucket in the organization's management account. Use Amazon EventBridge to schedule a daily Amazon Athena query to calculate the organization’s costs. Configure Athena to send an Amazon CloudWatch alert if the total costs are more than 80% of the allocated budget. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.</p>",
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
      "question_id": "#227",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides auction services for artwork and has users across North America and Europe. The company hosts its application in Amazon EC2 instances in the us-east-1 Region. Artists upload photos of their work as large-size. high-resolution image files from their mobile phones to a centralized Amazon S3 bucket created in the us-east-1 Region. The users in Europe are reporting slow performance for their image uploads.<br><br>How can a solutions architect improve the performance of the image upload process?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Người dùng châu Âu upload file ảnh lớn lên bucket S3 ở us-east-1 bị chậm.</li><li>Requirement: tăng tốc upload từ xa qua khoảng cách địa lý lớn.</li><li>Ưu tiên: hiệu năng upload với thay đổi tối thiểu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Transfer Acceleration</strong> dùng các edge location của CloudFront để đưa dữ liệu vào mạng backbone của AWS, giúp upload đường dài nhanh hơn rõ rệt. Chỉ cần bật trên bucket và dùng accelerated endpoint.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — multipart upload giúp song song hóa file lớn nhưng không giải quyết độ trễ mạng đường dài.</li><li><strong>B</strong>: ❌ Sai — CloudFront với custom origin là tối ưu cho download/cache, không phải upload qua ứng dụng EC2.</li><li><strong>C</strong>: ✅ Đúng — Transfer Acceleration cho upload cross-region.</li><li><strong>D</strong>: ❌ Sai — Auto Scaling xử lý tải compute, không liên quan độ trễ mạng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Transfer Acceleration</li><li>Edge location</li><li>Long-distance upload</li><li>Large files</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp upload file lớn từ người dùng ở xa Region của bucket → nghĩ ngay đến <strong>S3 Transfer Acceleration</strong> (có thể kết hợp multipart).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#227",
          "answers": [
            {
              "choice": "<p>A. Redeploy the application to use S3 multipart uploads.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution and point to the application as a custom origin.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the buckets to use S3 Transfer Acceleration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group for the EC2 instances and create a scaling policy.</p>",
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
      "question_id": "#231",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đưa backup SQL Server hằng đêm (200 GB) từ on-premises lên S3.</li><li>Requirement: có SMB share local ghi được, lưu cuối cùng ở S3, có Direct Connect.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 File Gateway</strong> cung cấp SMB file share và lưu file thành object trong S3, rẻ nhất và đơn giản cho việc ghi backup nightly qua Direct Connect.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — File Gateway SMB ghi trực tiếp ra S3, chi phí thấp.</li><li><strong>B</strong>: ❌ Sai — FSx for Windows Single-AZ tốn kém hơn và dữ liệu không nằm trong S3.</li><li><strong>C</strong>: ❌ Sai — FSx Multi-AZ còn đắt hơn và không cần HA cho việc này.</li><li><strong>D</strong>: ❌ Sai — Volume Gateway dùng iSCSI, không có SMB file share, và lưu dạng EBS snapshot, không phải S3 object trực tiếp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 File Gateway</li><li>SMB</li><li>Direct Connect</li><li>MOST cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp file share SMB/NFS on-premises lưu vào S3 → nghĩ ngay đến <strong>Storage Gateway File Gateway</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#231",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server Multi-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new S3 bucket. Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share on the volume gateway, and automate copies of this data to an S3 bucket.</p>",
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
      "question_id": "#233",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is linked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>IAM user ở management account cần stop/terminate tài nguyên ở 2 member account.</li><li>Requirement: truy cập cross-account theo least privilege.</li><li>Ưu tiên: đúng mô hình IAM cross-account.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Role phải được tạo ở <strong>account chứa tài nguyên</strong> (member accounts) với least privilege, trust policy tin cậy IAM user ở management account; user sau đó <strong>AssumeRole</strong> vào từng member account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — role tạo ở management account không cấp quyền lên tài nguyên member accounts.</li><li><strong>B</strong>: ❌ Sai — tạo user ở từng member account và role ở management là ngược hướng, không đáp ứng yêu cầu.</li><li><strong>C</strong>: ❌ Sai — IAM group không thể chứa user của account khác.</li><li><strong>D</strong>: ✅ Đúng — role ở member accounts, trust user ở management account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account role</li><li>AssumeRole</li><li>Trust policy</li><li>Least privilege</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp truy cập tài nguyên ở account khác → nghĩ ngay đến role ở account đích + trust policy cho account nguồn.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#233",
          "answers": [
            {
              "choice": "<p>A. Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the roles by using a trust policy.</p>",
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
      "question_id": "#234",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use AWS for disaster recovery for an on-premises application. The company has hundreds of Windows-based servers that run the application. All the servers mount a common share.<br><br>The company has an RTO of 15 minutes and an RPO of 5 minutes. The solution must support native failover and fallback capabilities.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR cho hàng trăm server Windows và file share dùng chung.</li><li>Requirement: RTO 15 phút, RPO 5 phút, có failover và failback native.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Elastic Disaster Recovery</strong> replicate liên tục (RPO tính bằng giây/phút), khởi chạy nhanh (RTO phút) và hỗ trợ failback native. <strong>FSx for Windows File Server</strong> + <strong>DataSync</strong> xử lý file share Windows.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — backup hằng ngày không đạt RPO 5 phút / RTO 15 phút.</li><li><strong>B</strong>: ❌ Sai — dựng lại bằng CloudFormation khi sự cố quá chậm, EFS không phù hợp Windows share.</li><li><strong>C</strong>: ❌ Sai — active-active đắt đỏ và S3 sync không hỗ trợ failover native.</li><li><strong>D</strong>: ✅ Đúng — Elastic Disaster Recovery + FSx for Windows + DataSync.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Elastic Disaster Recovery</li><li>RTO/RPO</li><li>FSx for Windows File Server</li><li>Failback</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR server on-premises với RPO/RTO thấp, có failback → nghĩ ngay đến <strong>AWS Elastic Disaster Recovery</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#234",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Storage Gateway File Gateway. Schedule daily Windows server backups. Save the data to Amazon S3. During a disaster, recover the on-premises servers from the backup. During tailback, run the on-premises servers on Amazon EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a set of AWS CloudFormation templates to create infrastructure. Replicate all data to Amazon Elastic File System (Amazon EFS) by using AWS DataSync. During a disaster, use AWS CodePipeline to deploy the templates to restore the on-premises servers. Fail back the data by using DataSync.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Cloud Development Kit (AWS CDK) pipeline to stand up a multi-site active-active environment on AWS. Replicate data into Amazon S3 by using the s3 sync command. During a disaster, swap DNS endpoints to point to AWS. Fail back the data by using the s3 sync command.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Disaster Recovery to replicate the on-premises servers. Replicate data to an Amazon FSx for Windows File Server file system by using AWS DataSync. Mount the file system to AWS servers. During a disaster, fail over the on-premises servers to AWS. Fail back to new or existing servers by using Elastic Disaster Recovery.</p>",
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
      "question_id": "#235",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has built a high performance computing (HPC) cluster in AWS for a tightly coupled workload that generates a large number of shared files stored in Amazon EFS. The cluster was performing well when the number of Amazon EC2 instances in the cluster was 100. However, when the company increased the cluster size to 1.000 EC2 instances, overall performance was well below expectations.<br><br>Which collection of design choices should a solutions architect make to achieve the maximum performance from the HPC cluster? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>HPC cluster tightly coupled mất hiệu năng khi tăng từ 100 lên 1.000 EC2.</li><li>Requirement: tối đa throughput và độ trễ thấp cho shared files.</li><li>Ưu tiên: hiệu năng HPC.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chạy trong một AZ (cluster placement) giảm độ trễ, <strong>EFA</strong> cho giao tiếp node-to-node tốc độ cao, và <strong>Amazon FSx for Lustre</strong> là file system song song hiệu năng cao cho HPC thay cho EFS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — một AZ giảm latency giữa các node.</li><li><strong>B</strong>: ❌ Sai — số ENI theo bội số 4 không phải tối ưu HPC.</li><li><strong>C</strong>: ✅ Đúng — EFA cho tightly coupled workload.</li><li><strong>D</strong>: ❌ Sai — nhiều AZ tăng latency.</li><li><strong>E</strong>: ❌ Sai — EBS RAID không chia sẻ được cho 1.000 instance.</li><li><strong>F</strong>: ✅ Đúng — FSx for Lustre cho shared HPC storage.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Elastic Fabric Adapter</li><li>FSx for Lustre</li><li>Single AZ / cluster placement group</li><li>Tightly coupled HPC</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp HPC tightly coupled → nghĩ ngay đến <strong>EFA + FSx for Lustre + single AZ</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#235",
          "answers": [
            {
              "choice": "<p>A. Ensure the HPC cluster is launched within a single Availability Zone.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the EC2 instances and attach elastic network interfaces in multiples of four.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Select EC2 instance types with an Elastic Fabric Adapter (EFA) enabled.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure the cluster is launched across multiple Availability Zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replace Amazon EFS with multiple Amazon EBS volumes in a RAID array.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Replace Amazon EFS with Amazon FSx for Lustre.</p>",
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
      "question_id": "#236",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an AWS Organizations structure. The company wants to standardize a process to apply tags across the entire organization. The company will require tags with specific values when a user creates a new resource. Each of the company's OUs will have unique tag values.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuẩn hóa tag toàn organization, bắt buộc tag khi tạo resource.</li><li>Requirement: mỗi OU có giá trị tag riêng.</li><li>Ưu tiên: kết hợp enforcement và giá trị tag.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>SCP</strong> deny việc tạo resource thiếu tag bắt buộc; <strong>tag policy</strong> định nghĩa giá trị tag hợp lệ và gắn vào từng <strong>OU</strong> để mỗi OU có giá trị riêng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SCP deny + tag policy gắn vào từng OU.</li><li><strong>B</strong>: ❌ Sai — gắn tag policy vào management account không áp dụng giá trị riêng cho từng OU.</li><li><strong>C</strong>: ❌ Sai — SCP allow-only không phù hợp để ép tag, dễ chặn nhầm.</li><li><strong>D</strong>: ❌ Sai — chỉ định nghĩa list tag, không kiểm soát giá trị tag theo OU.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP deny</li><li>Tag policy</li><li>OU</li><li>Required tags</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp bắt buộc tag + giá trị tag chuẩn → nghĩ ngay đến <strong>SCP (ép có tag) + tag policy (giá trị tag)</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#236",
          "answers": [
            {
              "choice": "<p>A. Use an SCP to deny the creation of resources that do not have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the OUs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an SCP to deny the creation of resources that do not have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the organization's management account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an SCP to allow the creation of resources only when the resources have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the OUs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an SCP to deny the creation of resources that do not have the required tags. Define the list of tags. Attach the SCP to the OUs.</p>",
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
      "question_id": "#238",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently started hosting new application workloads in the AWS Cloud. The company is using Amazon EC2 instances. Amazon Elastic File System (Amazon EFS) file systems, and Amazon RDS DB instances.<br><br>To meet regulatory and business requirements, the company must make the following changes for data backups:<br><br>• Backups must be retained based on custom daily, weekly, and monthly requirements.<br>• Backups must be replicated to at least one other AWS Region immediately after capture.<br>• The backup solution must provide a single source of backup status across the AWS environment.<br>• The backup solution must send immediate notifications upon failure of any resource backup.<br><br>Which combination of steps will meet these requirements with the LEAST amount of operational overhead? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backup EC2, EFS, RDS theo retention daily/weekly/monthly.</li><li>Requirement: replicate cross-Region ngay, một nơi xem trạng thái, thông báo khi lỗi.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Backup</strong> tập trung hóa: backup rule cho từng retention, copy sang Region khác trong plan, và <strong>SNS</strong> thông báo các job không hoàn thành thành công.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — backup plan với rule theo retention.</li><li><strong>B</strong>: ✅ Đúng — cross-Region copy trong backup plan.</li><li><strong>C</strong>: ❌ Sai — Lambda tự viết tăng vận hành.</li><li><strong>D</strong>: ✅ Đúng — SNS thông báo job lỗi.</li><li><strong>E</strong>: ❌ Sai — DLM chỉ cho EBS, không bao phủ EFS/RDS, không có cái nhìn tập trung.</li><li><strong>F</strong>: ❌ Sai — RDS snapshot riêng lẻ không có trạng thái tập trung.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Backup plan</li><li>Cross-Region copy</li><li>SNS notifications</li><li>Centralized backup</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp backup nhiều dịch vụ, tập trung, cross-Region → nghĩ ngay đến <strong>AWS Backup</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#238",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Backup plan with a backup rule for each of the retention requirements.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Backup plan to copy backups to another Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to replicate backups to another Region and send notification if a failure occurs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon Simple Notification Service (Amazon SNS) topic to the backup plan to send a notification for finished jobs that have any status except BACKUP_JOB_COMPLETED.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Data Lifecycle Manager (Amazon DLM) snapshot lifecycle policy for each of the retention requirements.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Set up RDS snapshots on each database.</p>",
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
      "question_id": "#239",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a gene reporting device that will collect genomic information to assist researchers with collecting large samples of data from a diverse population. The device will push 8 KB of genomic data every second to a data platform that will need to process and analyze the data and provide information back to researchers. The data platform must meet the following requirements:<br><br>• Provide near-real-time analytics of the inbound genomic data<br>• Ensure the data is flexible, parallel, and durable<br>• Deliver results of processing to a data warehouse<br><br>Which strategy should a solutions architect use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập 8 KB dữ liệu mỗi giây từ thiết bị, phân tích near-real-time.</li><li>Requirement: flexible, parallel, durable; kết quả đưa vào data warehouse.</li><li>Ưu tiên: streaming + Redshift.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Kinesis Data Streams</strong> cho ingest streaming bền vững, xử lý song song bằng Kinesis clients, kết quả đưa vào <strong>Amazon Redshift</strong> (data warehouse).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Firehose là delivery, không phù hợp để phân tích bằng Kinesis clients, và RDS không phải data warehouse.</li><li><strong>B</strong>: ✅ Đúng — Data Streams + Kinesis clients + Redshift.</li><li><strong>C</strong>: ❌ Sai — S3 làm thu thập không near-real-time.</li><li><strong>D</strong>: ❌ Sai — API Gateway + SQS + Lambda không tối ưu cho streaming phân tích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Kinesis Data Streams</li><li>Near-real-time</li><li>Amazon Redshift</li><li>Parallel processing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ingest streaming near-real-time rồi vào data warehouse → nghĩ ngay đến <strong>Kinesis Data Streams + Redshift</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#239",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Kinesis Data Firehose to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon RDS instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Kinesis Data Streams to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon Redshift cluster using Amazon EMR.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 to collect the inbound device data, analyze the data from Amazon SQS with Kinesis, and save the results to an Amazon Redshift cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon API Gateway to put requests into an Amazon SQS queue, analyze the data with an AWS Lambda function, and save the results to an Amazon Redshift cluster using Amazon EMR.</p>",
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
      "question_id": "#240",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to define a reference architecture for a solution for three-tier applications with web. application, and NoSQL data layers. The reference architecture must meet the following requirements:<br><br>• High availability within an AWS Region<br>• Able to fail over in 1 minute to another AWS Region for disaster recovery<br>• Provide the most efficient solution while minimizing the impact on the user experience<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Kiến trúc 3 tầng HA trong Region, failover sang Region khác trong 1 phút.</li><li>Requirement: NoSQL data sẵn sàng ở 2 Region, tác động người dùng tối thiểu.</li><li>Ưu tiên: hiệu quả chi phí, RTO 1 phút.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Route 53 <strong>failover routing</strong> với TTL ngắn (30 giây) cho chuyển hướng nhanh, <strong>DynamoDB global tables</strong> để dữ liệu có ở cả hai Region, và <strong>hot standby</strong> nhiều AZ với Reserved Instances cho tải tối thiểu.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — TTL 1 giờ làm failover chậm.</li><li><strong>B</strong>: ✅ Đúng — failover routing, TTL 30 giây.</li><li><strong>C</strong>: ✅ Đúng — global table nhân bản đa Region.</li><li><strong>D</strong>: ❌ Sai — backup 60 phút rồi import thủ công không đạt RTO 1 phút.</li><li><strong>E</strong>: ✅ Đúng — hot standby, multi-AZ, Reserved + On-Demand.</li><li><strong>F</strong>: ❌ Sai — Spot không đảm bảo capacity cho workload quan trọng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Route 53 failover routing</li><li>Low TTL</li><li>DynamoDB global tables</li><li>Hot standby</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp failover đa Region trong 1 phút → nghĩ ngay đến <strong>Route 53 failover + TTL thấp + DynamoDB global tables + hot standby</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#240",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.</p>",
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
      "question_id": "#241",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manufactures smart vehicles. The company uses a custom application to collect vehicle data. The vehicles use the MQTT protocol to connect to the application. The company processes the data in 5-minute intervals. The company then copies vehicle telematics data to on-premises storage. Custom applications analyze this data to detect anomalies.<br><br>The number of vehicles that send data grows constantly. Newer vehicles generate high volumes of data. The on-premises storage solution is not able to scale for peak traffic, which results in data loss. The company must modernize the solution and migrate the solution to AWS to resolve the scaling challenges.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập telemetry xe qua MQTT, lưu trữ và phát hiện bất thường, cần scale.</li><li>Requirement: thay thế on-premises storage không scale.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> nhận MQTT (managed, scale), rules chuyển dữ liệu tới <strong>Kinesis Data Firehose</strong> ghi vào S3, và <strong>Kinesis Data Analytics</strong> phân tích phát hiện bất thường. Toàn bộ managed.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự quản lý Kafka, tăng vận hành.</li><li><strong>B</strong>: ✅ Đúng — IoT Core + Firehose + Kinesis Data Analytics, managed.</li><li><strong>C</strong>: ❌ Sai — IoT FleetWise phục vụ thu thập dữ liệu xe nhưng kết hợp Glue ML transforms không phù hợp để phát hiện anomaly.</li><li><strong>D</strong>: ❌ Sai — Amazon MQ for RabbitMQ không phù hợp ingest MQTT quy mô lớn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS IoT Core</li><li>MQTT</li><li>Kinesis Data Firehose</li><li>Kinesis Data Analytics</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp thiết bị MQTT cần scale + ít vận hành → nghĩ ngay đến <strong>IoT Core + Firehose</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#241",
          "answers": [
            {
              "choice": "<p>A. Use AWS IoT Greengrass to send the vehicle data to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create an Apache Kafka application to store the data in Amazon S3. Use a pretrained model in Amazon SageMaker to detect anomalies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS IoT Core to receive the vehicle data. Configure rules to route data to an Amazon Kinesis Data Firehose delivery stream that stores the data in Amazon S3. Create an Amazon Kinesis Data Analytics application that reads from the delivery stream to detect anomalies.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS IoT FleetWise to collect the vehicle data. Send the data to an Amazon Kinesis data stream. Use an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use the built-in machine learning transforms in AWS Glue to detect anomalies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon MQ for RabbitMQ to collect the vehicle data. Send the data to an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use Amazon Lookout for Metrics to detect anomalies.</p>",
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
      "question_id": "#245",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has five development teams that have each created five AWS accounts to develop and host applications. To track spending, the development teams log in to each account every month, record the current cost from the AWS Billing and Cost Management console, and provide the information to the company's finance team.<br><br>The company has strict compliance requirements and needs to ensure that resources are created only in AWS Regions in the United States. However, some resources have been created in other Regions.<br><br>A solutions architect needs to implement a solution that gives the finance team the ability to track and consolidate expenditures for all the accounts. The solution also must ensure that the company can create resources only in Regions in the United States.<br><br>Which combination of steps will meet these requirements in the MOST operationally efficient way? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Gộp theo dõi chi phí 25 account và giới hạn resource chỉ ở Region Hoa Kỳ.</li><li>Requirement: hợp nhất chi phí, ép giới hạn Region.</li><li>Ưu tiên: MOST operationally efficient.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>AWS Organizations</strong> (all features) để consolidated billing, <strong>SCP deny</strong> Region ngoài Hoa Kỳ áp vào OU, và IAM role ở management account cho finance team xem <strong>Cost Explorer</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CUR đơn thuần không giải quyết quản lý account và Region restriction.</li><li><strong>B</strong>: ✅ Đúng — Organizations all features, mời các account.</li><li><strong>C</strong>: ❌ Sai — SCP allow-list áp vào OU không thay thế FullAWSAccess, dễ chặn nhầm.</li><li><strong>D</strong>: ✅ Đúng — SCP deny Region ngoài US.</li><li><strong>E</strong>: ✅ Đúng — role ở management account xem chi phí hợp nhất.</li><li><strong>F</strong>: ❌ Sai — role ở từng account tăng vận hành, không hợp nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Organizations</li><li>Consolidated billing</li><li>SCP deny Region</li><li>Cost Explorer</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp giới hạn Region + hợp nhất chi phí nhiều account → nghĩ ngay đến <strong>Organizations + SCP deny + Cost Explorer</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#245",
          "answers": [
            {
              "choice": "<p>A. Create a new account to serve as a management account. Create an Amazon S3 bucket for the finance team. Use AWS Cost and Usage Reports to create monthly reports and to store the data in the finance team's S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new account to serve as a management account. Deploy an organization in AWS Organizations with all features enabled. Invite all the existing accounts to the organization. Ensure that each account accepts the invitation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an OU that includes all the development teams. Create an SCP that allows the creation of resources only in Regions that are in the United States. Apply the SCP to the OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an OU that includes all the development teams. Create an SCP that denies the creation of resources in Regions that are outside the United States. Apply the SCP to the OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM role in the management account. Attach a policy that includes permissions to view the Billing and Cost Management console. Allow the finance team users to assume the role. Use AWS Cost Explorer and the Billing and Cost Management console to analyze cost.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an IAM role in each AWS account. Attach a policy that includes permissions to view the Billing and Cost Management console. Allow the finance team users to assume the role.</p>",
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
      "question_id": "#246",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to create and manage multiple AWS accounts for a number of departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team.<br><br>How should a solutions architect meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Security team cần quyền read-only vào mọi account từ account riêng của họ.</li><li>Requirement: truy cập cross-account, read-only.</li><li>Ưu tiên: đúng cơ chế IAM role.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>OrganizationAccountAccessRole</strong> tạo <strong>IAM role</strong> read-only ở mỗi member account, trust account của security team; họ <strong>AssumeRole</strong> vào role đó.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — trust relationship gắn với role, không phải policy.</li><li><strong>B</strong>: ✅ Đúng — role read-only ở mỗi member account, trust security account.</li><li><strong>C</strong>: ❌ Sai — role trong management account cho quyền admin, không phải read-only và không vào member accounts.</li><li><strong>D</strong>: ❌ Sai — OrganizationAccountAccessRole cho quyền quản trị đầy đủ, không read-only.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OrganizationAccountAccessRole</li><li>Cross-account IAM role</li><li>Trust relationship</li><li>Read-only</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp read-only cross-account → nghĩ ngay đến <strong>IAM role ở account đích + trust account nguồn</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#246",
          "answers": [
            {
              "choice": "<p>A. Use the OrganizationAccountAccessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the OrganizationAccountAccessRole IAM role to create a new IAM role with read-only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the management account from the security account. Use the generated temporary credentials to gain access.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access.</p>",
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
      "question_id": "#250",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new application that needs to run on five Amazon EC2 instances in a single AWS Region. The application requires high-throughput, low-latency network connections between all of the EC2 instances where the application will run. There is no requirement for the application to be fault tolerant.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>5 EC2 instance cần network throughput cao, độ trễ thấp giữa các instance.</li><li>Requirement: không cần fault tolerant.</li><li>Ưu tiên: hiệu năng mạng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cluster placement group</strong> đặt các instance gần nhau trong một AZ để có độ trễ thấp và throughput cao; kết hợp instance type hỗ trợ <strong>enhanced networking</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — cluster placement group + enhanced networking.</li><li><strong>B</strong>: ❌ Sai — Auto Scaling và ENI phụ không đảm bảo độ trễ thấp.</li><li><strong>C</strong>: ❌ Sai — partition placement group dùng cho workload phân tán lớn, cô lập lỗi.</li><li><strong>D</strong>: ❌ Sai — spread placement group tách rời phần cứng, không tối ưu độ trễ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cluster placement group</li><li>Enhanced networking</li><li>Low latency</li><li>High throughput</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp low-latency high-throughput giữa các instance → nghĩ ngay đến <strong>cluster placement group</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#250",
          "answers": [
            {
              "choice": "<p>A. Launch five new EC2 instances into a cluster placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch five new EC2 instances into an Auto Scaling group in the same Availability Zone. Attach an extra elastic network interface to each EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch five new EC2 instances into a partition placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch five new EC2 instances into a spread placement group. Attach an extra elastic network interface to each EC2 instance.</p>",
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
      "question_id": "#251",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a REST API to share information with six of its partners based in the United States. The company has created an Amazon API Gateway Regional endpoint. Each of the six partners will access the API once per day to post daily sales figures.<br><br>After initial deployment, the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet and wants to secure its API while minimizing cost.<br><br>Which approach should the company take to secure its API?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bảo vệ API Gateway Regional endpoint khỏi botnet (500 IP toàn cầu) trong khi chỉ có 6 partner ở Mỹ, mỗi partner gọi 1 lần/ngày.</li><li>Requirement chính: chặn traffic lạ, giới hạn request, <strong>minimize cost</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS WAF web ACL gắn trực tiếp vào API Gateway cho phép chỉ allow IP của 6 partner, chặn botnet. Usage plan + API key giới hạn request rate/quota cho từng client, không cần thêm CloudFront nên rẻ nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — thêm CloudFront tốn phí; OAI chỉ dùng cho S3 origin, không áp dụng cho API Gateway; rule 5 request/ngày không thực tế.</li><li><strong>B</strong>: ❌ Sai — thêm CloudFront không cần thiết, tăng cost; không allow-list IP partner nên botnet vẫn lọt qua CloudFront.</li><li><strong>C</strong>: ❌ Sai — resource policy không có \"request limit\"; giới hạn request thuộc về usage plan.</li><li><strong>D</strong>: ✅ Đúng — WAF allow-list IP + usage plan (request limit) + API key, đơn giản và rẻ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF IP allow-list</li><li>API Gateway usage plan + API key</li><li>Regional endpoint</li><li>Minimize cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn request theo client trên API Gateway → nghĩ ngay đến usage plan + API key; chặn IP lạ → WAF trên API.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#251",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Configure CloudFront with an origin access identity (OAI) and associate it with the distribution. Configure API Gateway to ensure only the OAI can run the POST method.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Add a custom header to the CloudFront distribution populated with an API key. Configure the API to require an API key on the POST method.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a resource policy with a request limit and associate it with the API. Configure the API to require an API key on the POST method.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to the usage plan.</p>",
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
      "question_id": "#252",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon Aurora PostgreSQL DB cluster for applications in a single AWS Region. The company's database team must monitor all data activity on all the databases.<br><br>Which solution will achieve this goal?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giám sát toàn bộ data activity trên Aurora PostgreSQL cluster.</li><li>Requirement chính: capture mọi hoạt động database (audit) và đưa vào nơi phân tích.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Database Activity Streams (DAS) là tính năng native của Aurora, đẩy near-real-time activity stream (đã mã hóa) vào <strong>Amazon Kinesis Data Streams</strong>. Firehose đọc từ Kinesis rồi đẩy sang S3 để phân tích.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DMS CDC chỉ bắt thay đổi dữ liệu (insert/update/delete), không phải toàn bộ activity như SELECT; Firehose không là target DMS.</li><li><strong>B</strong>: ❌ Sai — DAS đẩy vào Kinesis Data Streams, không phải EventBridge.</li><li><strong>C</strong>: ✅ Đúng — DAS → Kinesis data stream → Firehose → S3.</li><li><strong>D</strong>: ❌ Sai — cùng lỗi DMS CDC; Redshift không phải cách audit activity.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Database Activity Streams</li><li>Kinesis Data Streams</li><li>Monitor all data activity</li><li>Aurora</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Audit/monitor mọi hoạt động Aurora → nghĩ ngay đến Database Activity Streams + Kinesis.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#252",
          "answers": [
            {
              "choice": "<p>A. Set up an AWS Database Migration Service (AWS DMS) change data capture (CDC) task. Specify the Aurora DB cluster as the source. Specify Amazon Kinesis Data Firehose as the target. Use Kinesis Data Firehose to upload the data into an Amazon OpenSearch Service cluster for further analysis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Start a database activity stream on the Aurora DB cluster to capture the activity stream in Amazon EventBridge. Define an AWS Lambda function as a target for EventBridge. Program the Lambda function to decrypt the messages from EventBridge and to publish all database activity to Amazon S3 for further analysis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Start a database activity stream on the Aurora DB cluster to push the activity stream to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to consume the Kinesis data stream and to deliver the data to Amazon S3 for further analysis.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Database Migration Service (AWS DMS) change data capture (CDC) task. Specify the Aurora DB cluster as the source. Specify Amazon Kinesis Data Firehose as the target. Use Kinesis Data Firehose to upload the data into an Amazon Redshift cluster. Run queries on the Amazon Redshift data to determine database activities on the Aurora database.</p>",
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
      "question_id": "#254",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day. and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.<br><br>Which strategy should a solutions architect recommend to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DynamoDB on-demand, load dữ liệu hàng ngày vào lúc cố định, read theo burst và lặp lại trên một số key.</li><li>Cần giảm chi phí DynamoDB.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Traffic có thể dự đoán nên provisioned capacity + auto scaling rẻ hơn on-demand. DAX cache các key hay đọc, giảm RCU cần dùng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ElastiCache cần code thêm, và vẫn giữ on-demand nên chưa tối ưu cost.</li><li><strong>B</strong>: ❌ Sai — Savings Plans không áp dụng cho DynamoDB on-demand/provisioned theo kiểu này (Cost Explorer chỉ gợi ý), và vẫn không chuyển provisioned.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — provisioned giúp rẻ hơn nhưng thiếu cache; Savings Plans không áp dụng cho DynamoDB.</li><li><strong>D</strong>: ✅ Đúng — DAX + provisioned mode + auto scaling: giảm read, scale theo burst.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DAX</li><li>Provisioned capacity + auto scaling</li><li>Repeated key lookups</li><li>Predictable pattern</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đọc lặp key + giảm cost DynamoDB → DAX và provisioned + auto scaling.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#254",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon ElastiCache cluster in front of the DynamoDB table</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.</p>",
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
      "question_id": "#256",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has millions of objects in an Amazon S3 bucket. The objects are in the S3 Standard storage class. All the S3 objects are accessed frequently. The number of users and applications that access the objects is increasing rapidly. The objects are encrypted with server-side encryption with AWS KMS keys (SSE-KMS).<br><br>A solutions architect reviews the company’s monthly AWS invoice and notices that AWS KMS costs are increasing because of the high number of requests from Amazon S3. The solutions architect needs to optimize costs with minimal changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chi phí AWS KMS tăng vì mỗi request S3 SSE-KMS gọi KMS.</li><li>Giảm cost, ít thay đổi ứng dụng, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SSE-S3 không tính phí request KMS và là encryption mặc định, application gần như không đổi. S3 Batch Operations copy object sang bucket mới với SSE-S3 một cách tự động.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SSE-C bắt client tự quản lý key trong mỗi request, phải sửa ứng dụng.</li><li><strong>B</strong>: ✅ Đúng — SSE-S3 loại bỏ KMS request cost; Batch Operations copy ít công sức.</li><li><strong>C</strong>: ❌ Sai — CloudHSM đắt và phức tạp, overhead lớn.</li><li><strong>D</strong>: ❌ Sai — Intelligent-Tiering không giải quyết chi phí KMS, hơn nữa object truy cập thường xuyên.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SSE-S3 vs SSE-KMS</li><li>KMS request cost</li><li>S3 Batch Operations</li><li>Minimal application change</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"KMS cost cao do S3 request → nghĩ SSE-S3 (hoặc S3 Bucket Keys).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#256",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket that has server-side encryption with customer-provided keys (SSE-C) as the encryption type. Copy the existing objects to the new S3 bucket. Specify SSE-C.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new S3 bucket that has server-side encryption with Amazon S3 managed keys (SSE-S3) as the encryption type. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Specify SSE-S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudHSM to store the encryption keys. Create a new S3 bucket. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Encrypt the objects by using the keys from CloudHSM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the S3 Intelligent-Tiering storage class for the S3 bucket. Create an S3 Intelligent-Tiering archive configuration to transition objects that are not accessed for 90 days to S3 Glacier Deep Archive.</p>",
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
      "question_id": "#257",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media storage application uploads user photos to Amazon S3 for processing by AWS Lambda functions. Application state is stored in Amazon DynamoDB tables. Users are reporting that some uploaded photos are not being processed properly. The application developers trace the logs and find that Lambda is experiencing photo processing issues when thousands of users upload photos simultaneously. The issues are the result of Lambda concurrency limits and the performance of DynamoDB when data is saved.<br><br>Which combination of actions should a solutions architect take to increase the performance and reliability of the application? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Upload S3 đồng thời lớn gây Lambda chạm concurrency limit, DynamoDB ghi chậm.</li><li>Cần tăng performance và reliability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SQS đặt giữa S3 và Lambda làm buffer, giúp xử lý lại và làm mượt tải khi vượt concurrency. Vấn đề của DynamoDB là khi <strong>ghi</strong> dữ liệu, nên cần điều chỉnh WCU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vấn đề nằm ở ghi, không phải đọc (RCU).</li><li><strong>B</strong>: ✅ Đúng — tăng WCU giải quyết hiệu năng ghi.</li><li><strong>C</strong>: ❌ Sai — ElastiCache không giúp Lambda concurrency hay ghi DynamoDB.</li><li><strong>D</strong>: ✅ Đúng — SQS buffer + reprocessing tăng reliability.</li><li><strong>E</strong>: ❌ Sai — Transfer Acceleration chỉ giảm latency upload, không giải quyết backend.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda concurrency limit</li><li>SQS buffer</li><li>WCU</li><li>Decoupling</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Lambda bị quá tải do burst → thêm SQS; DynamoDB ghi chậm → tăng WCU.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#257",
          "answers": [
            {
              "choice": "<p>A. Evaluate and adjust the RCUs for the DynamoDB tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Evaluate and adjust the WCUs for the DynamoDB tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon ElastiCache layer to increase the performance of Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon Simple Queue Service (Amazon SQS) queue and reprocessing logic between Amazon S3 and the Lambda functions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use S3 Transfer Acceleration to provide lower latency to users.</p>",
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
      "question_id": "#261",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many separate AWS accounts and uses no central billing or management. Each AWS account hosts services for different departments in the company. The company has a Microsoft Azure Active Directory that is deployed.<br><br>A solutions architect needs to centralize billing and management of the company’s AWS accounts. The company wants to start using identity federation instead of manual user management. The company also wants to use temporary credentials instead of long-lived access keys.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều account rời rạc, cần centralize billing/management, federation với Azure AD, dùng temporary credentials.</li><li>Giải pháp: AWS Organizations + IAM Identity Center.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Organizations gom account (consolidated billing). IAM Identity Center kết nối Azure AD với SCIM sync users/groups và permission sets gán quyền vào account, cấp temporary credentials.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — tạo organization và mời các account hiện có.</li><li><strong>B</strong>: ❌ Sai — chỉ đổi email, không giải quyết billing hay federation.</li><li><strong>C</strong>: ✅ Đúng — IAM Identity Center kết nối Azure AD, tự động sync.</li><li><strong>D</strong>: ❌ Sai — AWS Managed Microsoft AD không phải federation từ Azure AD và phức tạp.</li><li><strong>E</strong>: ✅ Đúng — permission sets gán cho groups và accounts.</li><li><strong>F</strong>: ❌ Sai — cấu hình IAM trong từng account là quản lý thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Organizations</li><li>IAM Identity Center + Azure AD</li><li>SCIM sync</li><li>Permission sets</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Federation từ external IdP + multi-account → Organizations + IAM Identity Center.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#261",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS account to serve as a management account. Deploy an organization in AWS Organizations. Invite each existing AWS account to join the organization. Ensure that each account accepts the invitation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure each AWS account's email address to be aws+@example.com so that account management email messages and invoices are sent to the same place.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS IAM Identity Center (AWS Single Sign-On) in the management account. Connect IAM Identity Center to the Azure Active Directory. Configure IAM Identity Center for automatic synchronization of users and groups.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Managed Microsoft AD directory in the management account. Share the directory with all other accounts in the organization by using AWS Resource Access Manager (AWS RAM).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create AWS IAM Identity Center (AWS Single Sign-On) permission sets. Attach the permission sets to the appropriate IAM Identity Center groups and AWS accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure AWS Identity and Access Management (IAM) in each AWS account to use AWS Managed Microsoft AD for authentication and authorization.</p>",
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
      "question_id": "#264",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated a legacy application to the AWS Cloud. The application runs on three Amazon EC2 instances that are spread across three Availability Zones. One EC2 instance is in each Availability Zone. The EC2 instances are running in three private subnets of the VPC and are set up as targets for an Application Load Balancer (ALB) that is associated with three public subnets.<br><br>The application needs to communicate with on-premises systems. Only traffic from IP addresses in the company's IP address range are allowed to access the on-premises systems. The company’s security team is bringing only one IP address from its internal IP address range to the cloud. The company has added this IP address to the allow list for the company firewall. The company also has created an Elastic IP address for this IP address.<br><br>A solutions architect needs to create a solution that gives the application the ability to communicate with the on-premises systems. The solution also must be able to mitigate failures automatically.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App trong private subnets cần gọi on-premises qua đúng một Elastic IP đã allow-list.</li><li>Cần tự động khắc phục lỗi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chỉ có một EIP nên chỉ dùng được một NAT gateway tại một thời điểm. Một NAT gateway trong public subnet gắn EIP; khi lỗi, CloudWatch + Lambda tạo NAT gateway mới ở subnet khác và gắn lại EIP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — một EIP không thể gắn cho 3 NAT gateway; NAT gateway không có health check kiểu này.</li><li><strong>B</strong>: ❌ Sai — NLB xử lý inbound, không phải outbound từ app tới on-premises.</li><li><strong>C</strong>: ✅ Đúng — một NAT gateway + EIP, tự phục hồi bằng CloudWatch và Lambda.</li><li><strong>D</strong>: ❌ Sai — ALB không đại diện outbound IP; ALB không gắn EIP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>NAT gateway + Elastic IP</li><li>Outbound fixed IP</li><li>CloudWatch + Lambda automation</li><li>Single allow-listed IP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Outbound từ private subnet cần IP cố định → NAT gateway + EIP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#264",
          "answers": [
            {
              "choice": "<p>A. Deploy three NAT gateways, one in each public subnet. Assign the Elastic IP address to the NAT gateways. Turn on health checks for the NAT gateways. If a NAT gateway fails a health check, recreate the NAT gateway and assign the Elastic IP address to the new NAT gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace the ALB with a Network Load Balancer (NLB). Assign the Elastic IP address to the NLTurn on health checks for the NLIn the case of a failed health check, redeploy the NLB in different subnets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a single NAT gateway in a public subnet. Assign the Elastic IP address to the NAT gateway. Use Amazon CloudWatch with a custom metric to monitor the NAT gateway. If the NAT gateway is unhealthy, invoke an AWS Lambda function to create a new NAT gateway in a different subnet. Assign the Elastic IP address to the new NAT gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign the Elastic IP address to the ALB. Create an Amazon Route 53 simple record with the Elastic IP address as the value. Create a Route 53 health check. In the case of a failed health check, recreate the ALB in different subnets.</p>",
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
      "question_id": "#266",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s interactive web application uses an Amazon CloudFront distribution to serve images from an Amazon S3 bucket. Occasionally, third-party tools ingest corrupted images into the S3 bucket. This image corruption causes a poor user experience in the application later. The company has successfully implemented and tested Python logic to detect corrupt images.<br><br>A solutions architect must recommend a solution to integrate the detection logic with minimal latency between the ingestion and serving.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phát hiện ảnh lỗi khi ingest vào S3 trước khi phục vụ qua CloudFront.</li><li>Cần latency tối thiểu giữa ingest và serve.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 event notification kích hoạt Lambda ngay khi object được upload, chạy detection logic Python một lần lúc ingest, không thêm latency cho người dùng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — viewer-response chạy mỗi request, tăng latency; Lambda@Edge không hỗ trợ Python theo kiểu này cho mọi trường hợp (và giới hạn nghiêm ngặt).</li><li><strong>B</strong>: ❌ Sai — origin-response vẫn chạy khi cache miss, tăng latency cho user.</li><li><strong>C</strong>: ✅ Đúng — xử lý ngay khi ingest, không ảnh hưởng đường phục vụ.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions thêm độ phức tạp, không cần cho một bước kiểm tra.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 event notification</li><li>Lambda trigger</li><li>Minimal latency</li><li>Process at ingestion</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Xử lý object khi upload → S3 event + Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#266",
          "answers": [
            {
              "choice": "<p>A. Use a Lambda@Edge function that is invoked by a viewer-response event.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a Lambda@Edge function that is invoked by an origin-response event.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an S3 event notification that invokes an AWS Lambda function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an S3 event notification that invokes an AWS Step Functions state machine.</p>",
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
      "question_id": "#268",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a website that runs on four Amazon EC2 instances that are behind an Application Load Balancer (ALB). When the ALB detects that an EC2 instance is no longer available, an Amazon CloudWatch alarm enters the ALARM state. A member of the company's operations team then manually adds a new EC2 instance behind the ALB.<br><br>A solutions architect needs to design a highly available solution that automatically handles the replacement of EC2 instances. The company needs to minimize downtime during the switch to the new solution.<br><br>Which set of steps should the solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thay quy trình thủ công thay thế EC2 bằng cách tự động, HA.</li><li>Giảm thiểu downtime khi chuyển đổi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo Auto Scaling group với launch template, gắn vào ALB hiện có và attach các EC2 hiện có vào ASG. Không xóa ALB hay instance nên không có downtime.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — xóa ALB gây downtime.</li><li><strong>B</strong>: ✅ Đúng — giữ ALB, gắn ASG, attach instance hiện có, không downtime.</li><li><strong>C</strong>: ❌ Sai — xóa ALB và EC2 gây downtime lớn.</li><li><strong>D</strong>: ❌ Sai — instance hiện có không tự động được ASG quản lý, phải attach chủ động.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Auto Scaling group</li><li>Attach existing instances</li><li>Existing ALB</li><li>Minimize downtime</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chuyển sang ASG không downtime → giữ ALB, attach instance hiện có vào ASG.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#268",
          "answers": [
            {
              "choice": "<p>A. Delete the existing ALB. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Attach the existing EC2 instances to the Auto Scaling group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALAttach the existing EC2 instances to the Auto Scaling group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Delete the existing ALB and the EC2 instances. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Wait for the Auto Scaling group to launch the minimum number of EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALB. Wait for the existing ALB to register the existing EC2 instances with the Auto Scaling group.</p>",
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
      "question_id": "#269",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to optimize AWS data-transfer costs and compute costs across developer accounts within the company's organization in AWS Organizations. Developers can configure VPCs and launch Amazon EC2 instances in a single AWS Region. The EC2 instances retrieve approximately 1 TB of data each day from Amazon S3.<br><br>The developer activity leads to excessive monthly data-transfer charges and NAT gateway processing charges between EC2 instances and S3 buckets, along with high compute costs. The company wants to proactively enforce approved architectural patterns for any EC2 instance and VPC infrastructure that developers deploy within the AWS accounts. The company does not want this enforcement to negatively affect the speed at which the developers can perform their tasks.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giảm data-transfer/NAT cost từ EC2 tới S3 và compute cost; enforce kiến trúc chuẩn mà không làm chậm developer.</li><li><strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Service Catalog portfolio chứa VPC chuẩn có <strong>S3 gateway endpoint</strong> (miễn phí, bỏ NAT cost) và EC2 được duyệt. Launch constraint dùng role chuẩn, developer self-service nhanh.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 interface endpoint tốn phí, gateway endpoint rẻ hơn; SCP chỉ chặn không cung cấp self-service.</li><li><strong>B</strong>: ❌ Sai — chỉ phản ứng và terminate tài nguyên, không proactive.</li><li><strong>C</strong>: ✅ Đúng — Service Catalog với gateway endpoint, proactive, self-service.</li><li><strong>D</strong>: ❌ Sai — AWS Config chỉ detective/reactive, terminate gây cản trở developer.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Service Catalog</li><li>S3 gateway endpoint</li><li>Launch constraint</li><li>Proactively enforce</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Enforce kiến trúc chuẩn mà vẫn self-service → Service Catalog; EC2 tới S3 → gateway endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#269",
          "answers": [
            {
              "choice": "<p>A. Create SCPs to prevent developers from launching unapproved EC2 instance types. Provide the developers with an AWS CloudFormation template to deploy an approved VPC configuration with S3 interface endpoints. Scope the developers' IAM permissions so that the developers can launch VPC resources only with CloudFormation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a daily forecasted budget with AWS Budgets to monitor EC2 compute costs and S3 data-transfer costs across the developer accounts. When the forecasted cost is 75% of the actual budget cost, send an alert to the developer teams. If the actual budget cost is 100%, create a budget action to terminate the developers' EC2 instances and VPC infrastructure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Service Catalog portfolio that users can use to create an approved VPC configuration with S3 gateway endpoints and approved EC2 instances. Share the portfolio with the developer accounts. Configure an AWS Service Catalog launch constraint to use an approved IAM role. Scope the developers' IAM permissions to allow access only to AWS Service Catalog.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and deploy AWS Config rules to monitor the compliance of EC2 and VPC resources in the developer AWS accounts. If developers launch unapproved EC2 instances or if developers create VPCs without S3 gateway endpoints, perform a remediation action to terminate the unapproved resources.</p>",
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
      "question_id": "#279",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC. Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.<br><br>A security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mọi VPC dùng chung default TGW route table nên giao tiếp được với mọi VPC khác.</li><li>Requirement: mỗi VPC chỉ nói chuyện với tập VPC được phép.</li><li>Ưu tiên: kiểm soát routing tập trung, dễ quản lý.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo <strong>transit gateway route table</strong> riêng cho từng attachment (association) và chỉ propagate/route tới các VPC được phép, nên segmentation được thực thi ở TGW.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — NACL theo từng subnet, khó quản lý và vẫn còn route tới mọi VPC.</li><li><strong>B</strong>: ❌ Sai — security group không có deny rule.</li><li><strong>C</strong>: ✅ Đúng — TGW route table riêng cho mỗi attachment giới hạn routing.</li><li><strong>D</strong>: ❌ Sai — VPC route table chỉ trỏ đến TGW, TGW vẫn route tới mọi VPC.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway route table, association, propagation, segmentation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Hạn chế VPC-to-VPC qua TGW → nhiều TGW route table, không dùng default.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#279",
          "answers": [
            {
              "choice": "<p>A. Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway.</p>",
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
      "question_id": "#285",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a blog post application on AWS using Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. The application currently does not use API keys to authorize requests. The API model is as follows:<br><br>GET /posts/{postId}: to get post details<br>GET /users/{userId}: to get user details<br>GET /comments/{commentId}: to get comments details<br><br>The company has noticed users are actively discussing topics in the comments section, and the company wants to increase user engagement by making the comments appear in real time.<br><br>Which design should be used to reduce comment latency and improve user experience?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Comment cần xuất hiện real time để tăng engagement.</li><li>Requirement: giảm latency và trải nghiệm real-time.</li><li>Ưu tiên: push thay vì polling.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS AppSync</strong> với <strong>WebSockets</strong> (GraphQL subscriptions) đẩy comment mới tới client ngay lập tức.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cache làm dữ liệu cũ, không real time.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — polling 10 giây không phải real time và tốn request.</li><li><strong>C</strong>: ✅ Đúng — subscriptions đẩy dữ liệu real time.</li><li><strong>D</strong>: ❌ Sai — concurrency không liên quan tới độ trễ push.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AppSync, WebSockets, GraphQL subscriptions, real time</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Real-time update tới client → AppSync subscriptions (hoặc WebSocket API).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#285",
          "answers": [
            {
              "choice": "<p>A. Use edge-optimized API with Amazon CloudFront to cache API responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the blog application code to request GET/comments/{commentId} every 10 seconds.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS AppSync and leverage WebSockets to deliver comments.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change the concurrency limit of the Lambda functions to lower the API response time.</p>",
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
      "question_id": "#297",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a complex web application that leverages Amazon CloudFront for global scalability and performance. Over time, users report that the web application is slowing down.<br><br>The company's operations team reports that the CloudFront cache hit ratio has been dropping steadily. The cache metrics report indicates that query strings on some URLs are inconsistently ordered and are specified sometimes in mixed-case letters and sometimes in lowercase letters.<br><br>Which set of actions should the solutions architect take to increase the cache hit ratio as quickly as possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cache hit ratio của CloudFront giảm vì query string sai thứ tự và lẫn hoa/thường.</li><li>Requirement: tăng hit ratio nhanh nhất.</li><li>Ưu tiên: chuẩn hóa cache key.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda@Edge</strong> ở <strong>viewer request</strong> chuẩn hóa query string (sắp xếp theo tên, chuyển lowercase) trước khi tạo cache key.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — normalize ở viewer request nên cache key thống nhất.</li><li><strong>B</strong>: ❌ Sai — tắt query string forwarding có thể làm sai nội dung nếu query quyết định kết quả.</li><li><strong>C</strong>: ❌ Sai — reverse proxy sau load balancer không ảnh hưởng cache key của CloudFront.</li><li><strong>D</strong>: ❌ Sai — CloudFront không có tùy chọn case-insensitive query string.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront cache key, Lambda@Edge, viewer request, query string normalization</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chuẩn hóa request trước cache → Lambda@Edge viewer request.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#297",
          "answers": [
            {
              "choice": "<p>A. Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the CloudFront distribution to disable caching based on query string parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a reverse proxy after the load balancer to post-process the emitted URLs in the application to force the URL strings to be lowercase.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFront distribution to specify casing-insensitive query string processing.</p>",
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
      "question_id": "#299",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is evaluating an AWS workload that was deployed several years ago. The application tier is stateless and runs on a single large Amazon EC2 instance that was launched from an AMI. The application stores data in a MySQL database that runs on a single EC2 instance.<br><br>The CPU utilization on the application server EC2 instance often reaches 100% and causes the application to stop responding. The company manually installs patches on the instances. Patching has caused downtime in the past. The company needs to make the application highly available.<br><br>Which solution will meet these requirements with the LEAST development me?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>App stateless trên một EC2 lớn, MySQL trên một EC2, CPU 100%, patch thủ công gây downtime.</li><li>Requirement: HA với LEAST development effort.</li><li>Ưu tiên: tái dùng AMI, không đổi engine DB.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AMI mới có <strong>SSM Agent</strong> (patch tự động), <strong>Auto Scaling group</strong> + <strong>ALB</strong> cho HA, và <strong>Aurora MySQL</strong> tương thích MySQL nên không phải sửa code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chuyển sang Lambda và DocumentDB cần viết lại nhiều.</li><li><strong>B</strong>: ❌ Sai — DynamoDB không tương thích MySQL, cần viết lại.</li><li><strong>C</strong>: ❌ Sai — containerize và Neptune (graph DB) không phù hợp.</li><li><strong>D</strong>: ✅ Đúng — ASG + ALB + SSM + Aurora MySQL, ít sửa nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Auto Scaling group, ALB, Systems Manager, Aurora MySQL, least development effort</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"MySQL cần HA, ít sửa code → Aurora MySQL; app tier → ASG + ALB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#299",
          "answers": [
            {
              "choice": "<p>A. Move the application tier to AWS Lambda functions in the existing VPC. Create an Application Load Balancer to distribute traffic across the Lambda functions. Use Amazon GuardDuty to scan the Lambda functions. Migrate the database to Amazon DocumentDB (with MongoDB compatibility.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the EC2 instance type to a smaller Graviton powered instance type. Use the existing AMI to create a launch template for an Auto Scaling group. Create an Application Load Balancer to distribute traffic across the instances in the Auto Scaling group. Set the Auto Scaling group to scale based on CPU utilization. Migrate the database to Amazon DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the application tier to containers by using Docker. Run the containers on Amazon Elastic Container Service (Amazon ECS) with EC2 instances. Create an Application Load Balancer to distribute traffic across the ECS cluster. Configure the ECS cluster to scale based on CPU utilization. Migrate the database to Amazon Neptune.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a now AMI that is configured with AWS Systems Manager Agent (SSM Agent). Use the new AMI to create a launch template for an Auto Scaling group. Use smaller instances in the Auto Scaling group. Create an Application Load Balancer to distribute traffic across the instances in the Auto Scaling group. Set the Auto Scaling group to scale based on CPU utilization. Migrate the database to Amazon Aurora MySQL.</p>",
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
    }
  ]
};
