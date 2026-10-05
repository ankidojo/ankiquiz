var SAP_C02_Part2 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running applications on AWS in a multi-account environment. The company's sales team and marketing team use separate AWS accounts in AWS Organizations.<br><br>The sales team stores petabytes of data in an Amazon S3 bucket. The marketing team uses Amazon QuickSight for data visualizations. The marketing team needs access to data that the sates team stores in the S3 bucket. The company has encrypted the S3 bucket with an AWS Key Management Service (AWS KMS) key. The marketing team has already created the IAM service role for QuickSight to provide QuickSight access in the marketing AWS account. The company needs a solution that will provide secure access to the data in the S3 bucket across AWS accounts.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho QuickSight ở marketing account đọc dữ liệu S3 (petabytes, mã hóa KMS) nằm ở sales account.</li><li>Requirement chính: truy cập cross-account an toàn.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>, không sao chép dữ liệu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo IAM role trong sales account (có quyền S3 và KMS), marketing account assume role đó thông qua trust relationship. Không phải copy petabytes dữ liệu, truy cập trực tiếp tại nguồn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — replication petabytes tốn chi phí, tăng overhead và dữ liệu bị nhân đôi.</li><li><strong>B</strong>: ❌ Sai — SCP chỉ giới hạn quyền, không cấp quyền; AWS RAM không share được KMS key.</li><li><strong>C</strong>: ❌ Sai — bucket policy phải nằm ở bucket của sales account (không phải marketing); cấu hình không đúng.</li><li><strong>D</strong>: ✅ Đúng — cross-account IAM role + AssumeRole, quản lý tập trung, ít overhead nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>cross-account access</li><li>IAM role + trust relationship</li><li>sts:AssumeRole</li><li>SCP không cấp quyền</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Truy cập S3 cross-account, không muốn copy dữ liệu → nghĩ ngay đến cross-account IAM role (AssumeRole).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#101",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sates account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in the sales account and grant access to the S3 bucket. From the marketing account, assume the IAM role in the sales account to access the S3 bucket. Update the QuickSight rote, to create a trust relationship with the new IAM role in the sales account.</p>",
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
      "question_id": "#102",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate its business-critical applications from an on-premises data center to AWS. The company has an on-premises installation of a Microsoft SQL Server Always On cluster. The company wants to migrate to an AWS managed database service. A solutions architect must design a heterogeneous database migration on AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Di chuyển SQL Server Always On sang managed database của AWS theo kiểu heterogeneous (đổi engine).</li><li>Requirement chính: chuyển đổi schema và migrate dữ liệu giữa hai engine khác nhau.</li><li>Ưu tiên: dùng đúng công cụ migration chuẩn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Heterogeneous migration cần <strong>AWS Schema Conversion Tool (SCT)</strong> để chuyển schema, sau đó <strong>AWS DMS</strong> để migrate dữ liệu sang RDS đích.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — backup/restore của SQL Server không restore được vào MySQL.</li><li><strong>B</strong>: ❌ Sai — BULK INSERT là tính năng SQL Server, không dùng cho RDS MySQL; không chuyển đổi schema.</li><li><strong>C</strong>: ✅ Đúng — SCT chuyển schema, DMS chuyển dữ liệu.</li><li><strong>D</strong>: ❌ Sai — DataSync chuyển file, không phải công cụ migrate database; BULK INSERT không áp dụng cho MySQL.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>heterogeneous migration</li><li>AWS SCT</li><li>AWS DMS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Đổi database engine (heterogeneous) → nghĩ ngay đến SCT + DMS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#102",
          "answers": [
            {
              "choice": "<p>A. Migrate the SQL Server databases to Amazon RDS for MySQL by using backup and restore utilities.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Snowball Edge Storage Optimized device to transfer data to Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool to translate the database schema to Amazon RDS for MySQL. Then use AWS Database Migration Service (AWS DMS) to migrate the data from on-premises databases to Amazon RDS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to migrate data over the network between on-premises storage and Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#103",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A publishing company's design team updates the icons and other static assets that an ecommerce web application uses. The company serves the icons and assets from an Amazon S3 bucket that is hosted in the company's production account. The company also uses a development account that members of the design team can access.<br><br>After the design team tests the static assets in the development account, the design team needs to load the assets into the S3 bucket in the production account. A solutions architect must provide the design team with access to the production account without exposing other parts of the web application to the risk of unwanted changes.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Design team ở development account cần upload asset vào S3 bucket ở production account.</li><li>Requirement chính: cross-account access theo least privilege, không để lộ phần khác của production.</li><li>Ưu tiên: security và quyền tối thiểu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Trong production: tạo policy S3 (A) và role gắn policy đó, trust development account (C). Trong development: group của design team được phép sts:AssumeRole vào role ở production (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — policy quyền S3 phải nằm ở production, nơi có bucket.</li><li><strong>B</strong>: ❌ Sai — policy ở development không cấp quyền được cho resource ở production.</li><li><strong>C</strong>: ✅ Đúng — role ở production, trust development account.</li><li><strong>D</strong>: ❌ Sai — role ở development với trust production là ngược chiều.</li><li><strong>E</strong>: ✅ Đúng — group được phép AssumeRole vào role ở production.</li><li><strong>F</strong>: ❌ Sai — AssumeRole vào role ở development, không tới production.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>cross-account role</li><li>trusted entity</li><li>sts:AssumeRole</li><li>least privilege</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Role nằm ở account chứa resource (trust account kia); user account kia được cấp AssumeRole.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#103",
          "answers": [
            {
              "choice": "<p>A. In the production account, create a new IAM policy that allows read and write access to the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the development account, create a new IAM policy that allows read and write access to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the production account, create a role Attach the new policy to the role. Define the development account as a trusted entity.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the development account, create a role. Attach the new policy to the role Define the production account as a trusted entity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role In the production account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#104",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company developed a pilot application by using AWS Elastic Beanstalk and Java. To save costs during development, the company's development team deployed the application into a single-instance environment. Recent tests indicate that the application consumes more CPU than expected. CPU utilization is regularly greater than 85%, which causes some performance bottlenecks.<br><br>A solutions architect must mitigate the performance issues before the company launches the application to production.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng Elastic Beanstalk single-instance bị CPU trên 85%.</li><li>Requirement chính: cần scale và load balancing trước khi production.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Sửa cấu hình capacity của environment hiện có sang load-balanced, chọn nhiều AZ và thêm scaling rule theo average CPU. Không phải tạo lại application.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tạo application mới thêm overhead; dùng maximum CPU không chuẩn.</li><li><strong>B</strong>: ❌ Sai — traffic-splitting là chính sách deployment, không phải autoscaling.</li><li><strong>C</strong>: ✅ Đúng — đổi environment type, multi-AZ, scale-out theo average CPU.</li><li><strong>D</strong>: ❌ Sai — rebuild gây gián đoạn, chỉ chọn một AZ, dùng sum CPU.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Elastic Beanstalk load-balanced environment</li><li>capacity configuration</li><li>average CPU scaling</li><li>multi-AZ</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Beanstalk single-instance cần scale → đổi capacity sang load-balanced + Auto Scaling trigger.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#104",
          "answers": [
            {
              "choice": "<p>A. Create a new Elastic Beanstalk application. Select a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the maximum CPU utilization is over 85% for 5 minutes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second Elastic Beanstalk environment. Apply the traffic-splitting deployment policy. Specify a percentage of incoming traffic to direct to the new environment in the average CPU utilization is over 85% for 5 minutes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing environment’s capacity configuration to use a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the average CPU utilization is over 85% for 5 minutes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Select the Rebuild environment action with the load balancing option. Select an Availability Zones. Add a scale-out rule that will run if the sum CPU utilization is over 85% for 5 minutes.</p>",
              "correct": false,
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
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Java application that has complex dependencies on VMs that are in the company's data center. The application is stable. but the company wants to modernize the technology stack. The company wants to migrate the application to AWS and minimize the administrative overhead to maintain the servers.<br><br>Which solution will meet these requirements with the LEAST code changes?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng Java trên VM với dependency phức tạp cần migrate và hiện đại hóa.</li><li>Requirement chính: giảm quản trị server.</li><li>Ưu tiên: <strong>LEAST code changes</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS App2Container</strong> đóng gói ứng dụng thành container không cần sửa code, chạy trên <strong>ECS Fargate</strong> (serverless, không quản lý server) sau ALB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — App2Container + Fargate, không sửa code, không quản server.</li><li><strong>B</strong>: ❌ Sai — chuyển sang Lambda cần viết lại code và API Gateway.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — EKS managed node groups vẫn phải quản lý node.</li><li><strong>D</strong>: ❌ Sai — Lambda yêu cầu sửa code nhiều.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS App2Container</li><li>ECS on Fargate</li><li>least code changes</li><li>no server management</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Ứng dụng Java/.NET trên VM, containerize không sửa code → App2Container.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#106",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Grant the ECS task execution role permission 10 access the ECR image repository. Configure Amazon ECS to use an Application Load Balancer (ALB). Use the ALB to interact with the application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application code to a container that runs in AWS Lambda. Build an Amazon API Gateway REST API with Lambda integration. Use API Gateway to interact with the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application to Amazon Elastic Kubernetes Service (Amazon EKS) on EKS managed node groups by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Give the EKS nodes permission to access the ECR image repository. Use Amazon API Gateway to interact with the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application code to a container that runs in AWS Lambda. Configure Lambda to use an Application Load Balancer (ALB). Use the ALB to interact with the application.</p>",
              "correct": false,
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
      "question_id": "#108",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has structured its AWS accounts to be part of an organization in AWS Organizations. The company has set up consolidated billing and has mapped its departments to the following OUs: Finance, Sales, Human Resources (HR), Marketing, and Operations. Each OU has multiple AWS accounts, one for each environment within a department. These environments are development, test, pre-production, and production.<br><br>The HR department is releasing a new system that will launch in 3 months. In preparation, the HR department has purchased several Reserved Instances (RIs) in its production AWS account. The HR department will install the new application on this account. The HR department wants to make sure that other departments cannot share the RI discounts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>HR có RI ở production account, không muốn account khác dùng chung discount.</li><li>Requirement chính: tắt RI sharing cho account đó.</li><li>Ưu tiên: giữ consolidated billing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>RI sharing được cấu hình từ <strong>management account</strong> trong Billing preferences; tắt sharing cho account của HR là đủ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — member account không tự tắt được RI sharing.</li><li><strong>B</strong>: ❌ Sai — không thể xóa khỏi organization mà vẫn giữ consolidated billing.</li><li><strong>C</strong>: ✅ Đúng — management account tắt RI sharing cho account HR.</li><li><strong>D</strong>: ❌ Sai — SCP không điều khiển chia sẻ discount.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RI sharing</li><li>management account</li><li>consolidated billing</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chặn chia sẻ RI/Savings Plans giữa các account → tắt sharing ở management account.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#108",
          "answers": [
            {
              "choice": "<p>A. In the AWS Billing and Cost Management console for the HR department's production account turn off RI sharing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the HR department's production AWS account from the organization. Add the account 10 the consolidating billing configuration only.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the AWS Billing and Cost Management console. use the organization’s management account 10 turn off RI Sharing for the HR departments production AWS account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP in the organization to restrict access to the RIs. Apply the SCP to the OUs of the other departments.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#109",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet. An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.<br><br>The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.<br><br>How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Instance bị đánh unhealthy và bị Auto Scaling terminate, cần giữ lại để debug.</li><li>Requirement chính: truy cập instance lỗi trước khi bị xóa.</li><li>Ưu tiên: giải pháp đơn giản, đúng cơ chế.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Suspend process <strong>Terminate</strong> của ASG để instance unhealthy không bị xóa, rồi dùng Session Manager truy cập.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — suspend HealthCheck chỉ ngăn đánh dấu unhealthy, không ngăn terminate các instance đã bị đánh dấu.</li><li><strong>B</strong>: ❌ Sai — termination protection không ngăn Auto Scaling scale-in do health check.</li><li><strong>C</strong>: ❌ Sai — OldestInstance chỉ đổi thứ tự chọn xóa.</li><li><strong>D</strong>: ✅ Đúng — Terminate suspended thì instance được giữ lại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>suspend Terminate process</li><li>Auto Scaling processes</li><li>Session Manager</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần giữ instance unhealthy để điều tra → suspend Terminate của ASG.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#109",
          "answers": [
            {
              "choice": "<p>A. Suspend the Auto Scaling group’s HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Suspend the Auto Scaling group’s Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
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
      "question_id": "#110",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations.<br><br>Administrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed. Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quản lý AWS WAF rules tập trung đa account/OU.</li><li>Requirement chính: thêm/bớt account hoặc OU, tự động remediate rule không tuân thủ.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Firewall Manager</strong> quản lý WAF tập trung qua security policy, tự động áp dụng và remediate. Parameter Store + EventBridge + Lambda giúp cập nhật phạm vi account/OU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Firewall Manager là dịch vụ chuyên dụng.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Config + Lambda + StackSets nhiều thành phần, vận hành phức tạp.</li><li><strong>C</strong>: ❌ Sai — tự viết Lambda cross-account, overhead cao.</li><li><strong>D</strong>: ❌ Sai — Control Tower không quản WAF; dùng IAM access key là bad practice; KMS không lưu danh sách account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Firewall Manager</li><li>security policy</li><li>automatic remediation</li><li>AWS Organizations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Quản WAF/security group tập trung nhiều account → AWS Firewall Manager.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#110",
          "answers": [
            {
              "choice": "<p>A. Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an organization-wide AWS Config rule that requires all resources in the selected OUs to associate the AWS WAF rules. Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources. Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OUs where the AWS Config rule is applied.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create AWS WAF rules in the management account of the organization. Use AWS Lambda environment variables to store account numbers and OUs to manage. Update environment variables as needed to add or remove accounts or OUs. Create cross-account IAM roles in member accounts. Assume the roles by using AWS Security Token Service (AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Control Tower to manage AWS WAF rules across accounts in the organization. Use AWS Key Management Service (AWS KMS) to store account numbers and OUs to manage. Update AWS KMS as needed to add or remove accounts or OUs. Create IAM users in member accounts. Allow AWS Control Tower in the management account to use the access key and secret access key to create and update AWS WAF rules in the member accounts.</p>",
              "correct": false,
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
      "question_id": "#112",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large mobile gaming company has successfully migrated all of its on-premises infrastructure to the AWS Cloud. A solutions architect is reviewing the environment to ensure that it was built according to the design and that it is running in alignment with the Well-Architected Framework.<br><br>While reviewing previous monthly costs in Cost Explorer, the solutions architect notices that the creation and subsequent termination of several large instance types account for a high proportion of the costs. The solutions architect finds out that the company’s developers are launching new Amazon EC2 instances as part of their testing and that the developers are not using the appropriate instance types.<br><br>The solutions architect must implement a control mechanism to limit the instance types that only the developers can launch.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Developers launch EC2 instance type quá lớn gây tốn chi phí.</li><li>Requirement chính: giới hạn instance type mà developers được phép launch.</li><li>Ưu tiên: kiểm soát chủ động (preventive).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>IAM policy với condition `ec2:InstanceType` gắn vào group của developers sẽ chặn việc launch instance type không cho phép.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Config chỉ phát hiện (detective), không ngăn launch.</li><li><strong>B</strong>: ❌ Sai — launch template không bắt buộc, developers vẫn launch thủ công.</li><li><strong>C</strong>: ✅ Đúng — IAM policy kiểm soát chủ động.</li><li><strong>D</strong>: ❌ Sai — Image Builder tạo AMI, không giới hạn instance type.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM policy</li><li>ec2:InstanceType condition</li><li>preventive control</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn hành động/loại resource của người dùng → IAM policy (hoặc SCP) với condition.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#112",
          "answers": [
            {
              "choice": "<p>A. Create a desired-instance-type managed rule in AWS Config. Configure the rule with the instance types that are allowed. Attach the rule to an event to run each time a new EC2 instance is launched.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the EC2 console, create a launch template that specifies the instance types that are allowed. Assign the launch template to the developers’ IAM accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new IAM policy. Specify the instance types that are allowed. Attach the policy to an IAM group that contains the IAM accounts for the developers</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image.</p>",
              "correct": false,
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
      "question_id": "#116",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has an on-premises data center in Europe. The company also has a multi-Region AWS presence that includes the eu-west-1 and us-east-1 Regions. The company wants to be able to route network traffic from its on-premises infrastructure into VPCs in either of those Regions. The company also needs to support traffic that is routed directly between VPCs in those Regions. No single points of failure can exist on the network.<br><br>The company already has created two 1 Gbps AWS Direct Connect connections from its on-premises data center. Each connection goes into a separate Direct Connect location in Europe for high availability. These two locations are named DX-A and DX-B, respectively. Each Region has a single AWS Transit Gateway that is configured to route all inter-VPC traffic within that Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>On-prem kết nối hai Region (eu-west-1, us-east-1) qua hai Direct Connect, kèm traffic giữa các VPC.</li><li>Requirement chính: không có single point of failure, route cross-Region.</li><li>Ưu tiên: high availability, kiến trúc đúng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Hai <strong>transit VIF</strong> vào cùng một <strong>Direct Connect gateway</strong>, gắn cả hai transit gateway vào DX gateway, và dùng <strong>transit gateway peering</strong> cho cross-Region (DX gateway không route giữa các TGW).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — private VIF không kết nối được tới transit gateway.</li><li><strong>B</strong>: ❌ Sai — DX gateway không peer với nhau; tách riêng làm mất HA.</li><li><strong>C</strong>: ❌ Sai — DX gateway không route traffic giữa các transit gateway.</li><li><strong>D</strong>: ✅ Đúng — transit VIF, cùng DX gateway, TGW peering.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>transit VIF</li><li>Direct Connect gateway</li><li>transit gateway peering</li><li>no single point of failure</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Direct Connect tới Transit Gateway → transit VIF; cross-Region → TGW peering.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#116",
          "answers": [
            {
              "choice": "<p>A. Create a private VIF from the DX-A connection into a Direct Connect gateway. Create a private VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with the Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Associate the eu-west-1 transit gateway with this Direct Connect gateway. Create a transit VIF from the DX-8 connection into a separate Direct Connect gateway. Associate the us-east-1 transit gateway with this separate Direct Connect gateway. Peer the Direct Connect gateways with each other to support high availability and cross-Region routing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Configure the Direct Connect gateway to route traffic between the transit gateways.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.</p>",
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
      "question_id": "#117",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-Region AWS CloudTrail trail in the AWS account.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Khi có IAM user mới: tự động gỡ toàn bộ quyền, rồi thông báo security team duyệt.</li><li>Requirement chính: phát hiện sự kiện CreateUser, remediate tự động, notify.</li><li>Ưu tiên: event-driven, managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>EventBridge rule</strong> bắt API call CreateUser qua CloudTrail, gọi <strong>Step Functions</strong> để gỡ quyền, và dùng <strong>SNS</strong> thông báo security team.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EventBridge pattern cho CreateUser.</li><li><strong>B</strong>: ❌ Sai — CloudTrail không gửi thông báo theo từng event riêng lẻ tới SNS như vậy.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — chạy container Fargate nặng nề cho tác vụ đơn giản.</li><li><strong>D</strong>: ✅ Đúng — Step Functions điều phối quy trình gỡ quyền.</li><li><strong>E</strong>: ✅ Đúng — SNS gửi thông báo.</li><li><strong>F</strong>: ❌ Sai — Pinpoint dành cho marketing/engagement.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EventBridge</li><li>AWS API Call via CloudTrail</li><li>CreateUser</li><li>Step Functions</li><li>SNS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Phản ứng tự động với API call → CloudTrail + EventBridge + (Step Functions/Lambda) + SNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#117",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invoke an AWS Step Functions state machine to remove access.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon Pinpoint to notify the security team.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#118",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate to AWS. The company wants to use a multi-account structure with centrally managed access to all accounts and applications. The company also wants to keep the traffic on a private network. Multi-factor authentication (MFA) is required at login, and specific roles are assigned to user groups.<br><br>The company must create separate accounts for development. staging, production, and shared network. The production account and the shared network account must have connectivity to all accounts. The development account and the staging account must have access only to each other.<br><br>Which combination of steps should a solutions architect take 10 meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Multi-account có quản lý truy cập tập trung, MFA, network private với kết nối theo mô hình hub.</li><li>Requirement chính: landing zone, SSO có MFA, kết nối giữa các account theo quy tắc.</li><li>Ưu tiên: centralized governance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Control Tower</strong> dựng landing zone nhiều account, <strong>IAM Identity Center</strong> quản lý đăng nhập tập trung với MFA và permission sets, <strong>Transit Gateway</strong> với route table kiểm soát kết nối giữa account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Control Tower landing zone, Organizations.</li><li><strong>B</strong>: ❌ Sai — Security Hub không quản lý truy cập hay ép MFA.</li><li><strong>C</strong>: ✅ Đúng — Transit Gateway và route table phân tách dev/staging với prod/shared.</li><li><strong>D</strong>: ✅ Đúng — IAM Identity Center có MFA và permission sets.</li><li><strong>E</strong>: ❌ Sai — Control Tower không quản lý routing; CloudTrail không ép MFA.</li><li><strong>F</strong>: ❌ Sai — IAM user và Cognito không phù hợp truy cập tập trung đa account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Control Tower</li><li>IAM Identity Center</li><li>Transit Gateway route tables</li><li>permission sets, MFA</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Multi-account + SSO + MFA → Control Tower + IAM Identity Center; kết nối nhiều VPC → Transit Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#118",
          "answers": [
            {
              "choice": "<p>A. Deploy a landing zone environment by using AWS Control Tower. Enroll accounts and invite existing accounts into the resulting organization in AWS Organizations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS Security Hub in all accounts to manage cross-account access. Collect findings through AWS CloudTrail to force MFA login.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create transit gateways and transit gateway VPC attachments in each account. Configure appropriate route tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up and enable AWS IAM Identity Center (AWS Single Sign-On). Create appropriate permission sets with required MFA for existing accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable AWS Control Tower in all accounts to manage routing between accounts. Collect findings through AWS CloudTrail to force MFA login.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create IAM users and groups. Configure MFA for all users. Set up Amazon Cognoto user pools and Identity pools to manage access to accounts and between accounts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#119",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application in the eu-west-1 Region and has one account for each of its environments: development, testing, and production. All the environments are running 24 hours a day, 7 days a week by using stateful Amazon EC2 instances and Amazon RDS for MySQL databases. The databases are between 500 GB and 800 GB in size.<br><br>The development team and testing team work on business days during business hours, but the production environment operates 24 hours a day, 7 days a week. The company wants to reduce costs. All resources are tagged with an environment tag with either development, testing, or production as the key.<br><br>What should a solutions architect do to reduce costs with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Môi trường dev/test chỉ cần chạy giờ hành chính, nhưng chạy 24/7 với EC2 stateful và RDS.</li><li>Requirement chính: giảm chi phí theo lịch, không mất dữ liệu.</li><li>Ưu tiên: <strong>LEAST operational effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Hai EventBridge rule theo lịch: tối <strong>stop</strong> và sáng <strong>start</strong> theo tag. Stop giữ lại dữ liệu và EBS, tiết kiệm chi phí compute.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — một Lambda xử lý cả start/stop theo ngày giờ phức tạp hơn.</li><li><strong>B</strong>: ✅ Đúng — stop/start theo lịch, đơn giản, giữ dữ liệu.</li><li><strong>C</strong>: ❌ Sai — terminate rồi restore từ backup tốn công sức, rủi ro mất dữ liệu stateful.</li><li><strong>D</strong>: ❌ Sai — terminate/restore mỗi giờ quá phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EventBridge schedule</li><li>stop/start theo tag</li><li>stateful instances</li><li>RDS stop</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Dev/test chỉ dùng giờ hành chính, stateful → stop/start theo lịch, không terminate.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#119",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge rule that runs once every day. Configure the rule to invoke one AWS Lambda function that starts or slops instances based on me tag, day, and time.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge rule that runs every business day in the evening. Configure the rule to invoke an AWS Lambda function that stops instances based on the tag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that starts instances based on the tag.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge rule that runs every business day in the evening, Configure the rule to invoke an AWS Lambda function that terminates, instances based on the lag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that restores the instances from their last backup based on the tag.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge rule that runs every hour. Configure the rule to invoke one AWS Lambda function that terminates or restores instances from their last backup based on the tag. day, and time.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#120",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a software-as-a-service (SaaS) solution on AWS. The company has deployed an Amazon API Gateway REST API with AWS Lambda integration in multiple AWS Regions and in the same production account.<br><br>The company offers tiered pricing that gives customers the ability to pay for the capacity to make a certain number of API calls per second. The premium tier offers up to 3,000 calls per second, and customers are identified by a unique API key. Several premium tier customers in various Regions report that they receive error responses of 429 Too Many Requests from multiple API methods during peak usage hours. Logs indicate that the Lambda function is never invoked.<br><br>What could be the cause of the error messages for these customers?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Khách hàng premium nhận lỗi 429 ở nhiều method và nhiều Region, nhưng Lambda không được gọi.</li><li>Requirement chính: xác định nguyên nhân throttling ở API Gateway.</li><li>Ưu tiên: hiểu hạn mức (quota).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda không được invoke nên throttle xảy ra ở API Gateway. Lỗi xảy ra ở nhiều method và Region, phù hợp với việc chạm <strong>account-level limit</strong> (số request mỗi giây của account).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — nếu Lambda throttle thì function đã được gọi/ghi log.</li><li><strong>B</strong>: ❌ Sai — cùng lý do, Lambda không được invoke.</li><li><strong>C</strong>: ✅ Đúng — account-level throttle limit của API Gateway.</li><li><strong>D</strong>: ❌ Sai — per-method limit chỉ ảnh hưởng từng method, không giải thích lỗi trên nhiều method.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>429 Too Many Requests</li><li>API Gateway account limit</li><li>Lambda never invoked</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"429 mà Lambda không chạy, nhiều method → account-level throttling của API Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#120",
          "answers": [
            {
              "choice": "<p>A. The Lambda function reached its concurrency limit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Lambda function its Region limit for concurrency.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The company reached its API Gateway account limit for calls per second.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The company reached its API Gateway default per-method limit for calls per second.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#121",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company is planning to migrate its web application from on premises to AWS. The company uses a third-party security tool to monitor the inbound traffic to the application. The company has used the security tool for the last 15 years, and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology.<br><br>The company plans to deploy the application migration to AWS on Amazon EC2 instances. The EC2 instances will run in an Auto Scaling group in a dedicated VPC. The company needs to use the security tool to inspect all packets that come in and out of the VPC. This inspection must occur in real time and must not affect the application's performance. A solutions architect must design a target architecture on AWS that is highly available within an AWS Region.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Dùng third-party security tool (chỉ chạy trên VM) để inspect toàn bộ packet vào/ra VPC.</li><li>Requirement chính: real time, không ảnh hưởng hiệu năng, highly available trong Region.</li><li>Ưu tiên: inline inspection.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chạy security tool trên EC2 trong Auto Scaling group, và dùng <strong>Gateway Load Balancer</strong> (mỗi AZ) để chuyển traffic qua appliance mà trong suốt với ứng dụng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — appliance trên EC2 Auto Scaling.</li><li><strong>B</strong>: ❌ Sai — NLB không chuyển traffic qua appliance để inspect.</li><li><strong>C</strong>: ❌ Sai — ALB không hỗ trợ traffic appliance ở lớp 3.</li><li><strong>D</strong>: ✅ Đúng — Gateway Load Balancer cho virtual appliance.</li><li><strong>E</strong>: ❌ Sai — không cần transit gateway cho một VPC.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Gateway Load Balancer</li><li>third-party appliance</li><li>inspect all packets</li><li>GENEVE</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Third-party security appliance inline → Gateway Load Balancer.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#121",
          "answers": [
            {
              "choice": "<p>A. Deploy the security tool on EC2 instances m a new Auto Scaling group in the existing VPC</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the web application behind a Network Load Balancer</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Application Load Balancer in front of the security tool instances</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision a transit gateway to facilitate communication between VPCs.</p>",
              "correct": false,
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
      "question_id": "#123",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating some of its applications to AWS. The company wants to migrate and modernize the applications quickly after it finalizes networking and security strategies. The company has set up an AWS Direct Connect connection in a central network account.<br><br>The company expects to have hundreds of AWS accounts and VPCs in the near future. The corporate network must be able to access the resources on AWS seamlessly and also must be able to communicate with all the VPCs. The company also wants to route its cloud resources to the internet through its on-premises data center.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng trăm account/VPC cần kết nối với on-prem qua Direct Connect, và đi Internet qua data center on-prem.</li><li>Requirement chính: kết nối tập trung có thể mở rộng, egress qua on-prem.</li><li>Ưu tiên: scalability, centralized networking.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Transit Gateway</strong> gắn với <strong>Direct Connect gateway</strong> bằng transit VIF (B), chia sẻ TGW qua RAM và attach VPC (D), chỉ dùng private subnet và route outbound Internet về on-prem (F).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng virtual private gateway từng account không scale cho hàng trăm VPC.</li><li><strong>B</strong>: ✅ Đúng — TGW + DX gateway + transit VIF.</li><li><strong>C</strong>: ❌ Sai — Internet gateway đi thẳng Internet, trái yêu cầu egress qua on-prem.</li><li><strong>D</strong>: ✅ Đúng — chia sẻ TGW và attach VPC.</li><li><strong>E</strong>: ❌ Sai — VPC peering không scale, không đi qua Direct Connect.</li><li><strong>F</strong>: ✅ Đúng — private subnet, route Internet qua on-prem.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Transit Gateway</li><li>Direct Connect gateway + transit VIF</li><li>AWS RAM sharing</li><li>egress qua on-prem</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Hàng trăm VPC + Direct Connect → Transit Gateway + DX gateway (transit VIF).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#123",
          "answers": [
            {
              "choice": "<p>A. Create a Direct Connect gateway in the central account. In each of the accounts, create an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Direct Connect gateway and a transit gateway in the central network account. Attach the transit gateway to the Direct Connect gateway by using a transit VIF.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an internet gateway. Attach the internet gateway to subnets. Allow internet traffic through the gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the transit gateway with other accounts. Attach VPCs to the transit gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision VPC peering as necessary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Provision only private subnets. Open the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center.</p>",
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
      "question_id": "#124",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br><br>A solutions architect needs to enforce the new process in the most secure way possible.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bắt buộc quy trình tập trung mua/sửa Reserved Instances trên hàng trăm account.</li><li>Requirement chính: enforce an toàn nhất, không cho account tự thực hiện.</li><li>Ưu tiên: security, kiểm soát tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần Organizations với <strong>all features</strong> để dùng <strong>SCP</strong>, rồi SCP deny `ec2:PurchaseReservedInstancesOffering` và `ec2:ModifyReservedInstances` gắn vào các OU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — all features là điều kiện để dùng SCP.</li><li><strong>B</strong>: ❌ Sai — Config chỉ báo cáo, không chặn.</li><li><strong>C</strong>: ❌ Sai — IAM policy từng account, admin account có thể gỡ, khó quản lý.</li><li><strong>D</strong>: ✅ Đúng — SCP chặn tập trung, không thể bypass từ member account.</li><li><strong>E</strong>: ❌ Sai — chỉ consolidated billing không có SCP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Organizations all features</li><li>SCP deny</li><li>PurchaseReservedInstancesOffering</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chặn hành động trên mọi account một cách bắt buộc → SCP (cần all features).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#124",
          "answers": [
            {
              "choice": "<p>A. Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#125",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a critical application that uses an Amazon RDS for MySQL database to store data. The RDS DB instance is deployed in Multi-AZ mode.<br><br>A recent RDS database failover test caused a 40-second outage to the application. A solutions architect needs to design a solution to reduce the outage time to less than 20 seconds.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>RDS MySQL Multi-AZ failover mất 40 giây, cần giảm xuống dưới 20 giây.</li><li>Requirement chính: rút ngắn thời gian failover.</li><li>Ưu tiên: high availability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Migrate sang <strong>Aurora MySQL</strong> (failover nhanh nhờ shared storage), tạo <strong>Aurora Replica</strong> làm failover target, và dùng <strong>RDS Proxy</strong> giữ kết nối, giảm thời gian ứng dụng bị ảnh hưởng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cache không rút ngắn thời gian failover của database.</li><li><strong>B</strong>: ❌ Sai — tương tự, cache không giải quyết failover.</li><li><strong>C</strong>: ✅ Đúng — RDS Proxy giảm thời gian failover và giữ connection.</li><li><strong>D</strong>: ✅ Đúng — Aurora failover nhanh hơn RDS Multi-AZ.</li><li><strong>E</strong>: ✅ Đúng — Aurora Replica là failover target nhanh.</li><li><strong>F</strong>: ❌ Sai — RDS read replica không phải cơ chế failover tự động nhanh.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>RDS Proxy</li><li>Aurora MySQL</li><li>Aurora Replica</li><li>faster failover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giảm thời gian failover DB → Aurora + Aurora Replica + RDS Proxy.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#125",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache for Memcached in front of the database</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon ElastiCache for Redis in front of the database</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use RDS Proxy in front of the database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon Aurora MySQL.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Aurora Replica.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an RDS for MySQL read replica</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#126",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account.<br><br>What is the MOST secure way to allow org1 to access resources in org2?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cấp quyền cross-account cho bên thứ ba (partner) ở organization khác.</li><li>Requirement chính: least privilege, truy cập qua API/CLI, <strong>MOST secure</strong>.</li><li>Ưu tiên: security, tránh chia sẻ long-term credentials, chống confused deputy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Customer tạo IAM role với permission tối thiểu và trust policy có <strong>external ID</strong>; partner gọi `sts:AssumeRole` với role ARN + external ID để nhận temporary credentials. External ID chống lỗi confused deputy khi partner phục vụ nhiều khách hàng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chia sẻ access keys (thậm chí của root/account) là cách kém an toàn nhất.</li><li><strong>B</strong>: ❌ Sai — IAM user với long-term credentials gửi cho bên ngoài, khó rotate/kiểm soát.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — dùng IAM role nhưng thiếu external ID, dễ bị confused deputy.</li><li><strong>D</strong>: ✅ Đúng — IAM role + external ID trong trust policy, temporary credentials.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account IAM role</li><li>External ID</li><li>Confused deputy</li><li>sts:AssumeRole</li><li>Temporary credentials</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Third-party/partner truy cập account của mình → nghĩ ngay đến IAM role + External ID.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#126",
          "answers": [
            {
              "choice": "<p>A. The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role’s Amazon Resource Name (ARN) when requesting access to perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role’s Amazon Resource Name (ARN), including the external ID in the IAM role’s trust policy, when requesting access to perform the required tasks.</p>",
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
      "question_id": "#128",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure.<br><br>Which factors could cause this error? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tạo VPC peering cross-account, cross-Region bằng CloudFormation bị lỗi.</li><li>Requirement chính: tìm 2 nguyên nhân có thể gây lỗi peering.</li><li>Ưu tiên: nắm điều kiện của VPC peering (CIDR, quyền, accepter).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>VPC peering không cho phép <strong>CIDR chồng lấn</strong> (10.10.10.0/24 nằm trong 10.10.0.0/16). Với peering cross-account, CloudFormation cần IAM role ở accepter account có quyền đúng (peer role) để chấp nhận peering; thiếu quyền sẽ lỗi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CIDR overlap làm peering thất bại.</li><li><strong>B</strong>: ❌ Sai — inter-Region VPC peering được hỗ trợ.</li><li><strong>C</strong>: ❌ Sai — peering không cần Internet gateway.</li><li><strong>D</strong>: ❌ Sai — peering không dùng AWS RAM để chia sẻ VPC.</li><li><strong>E</strong>: ✅ Đúng — thiếu quyền của IAM role (PeerRoleArn) ở accepter account gây lỗi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC peering</li><li>Overlapping CIDR</li><li>Cross-account peer role</li><li>AWS::EC2::VPCPeeringConnection</li><li>Inter-Region peering</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"VPC peering lỗi → kiểm tra CIDR overlap và quyền/accepter của account còn lại.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#128",
          "answers": [
            {
              "choice": "<p>A. The IPv4 CIDR ranges of the two VPCs overlap</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The VPCs are not in the same Region</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. One or both accounts do not have access to an Internet gateway</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. One of the VPCs was not shared through AWS Resource Access Manager</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. The IAM role in the peer accepter account does not have the correct permissions</p>",
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
      "question_id": "#129",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An external audit of a company’s serverless application reveals IAM policies that grant too many permissions. These policies are attached to the company's AWS Lambda execution roles. Hundreds of the company's Lambda functions have broad access permissions such as full access to Amazon S3 buckets and Amazon DynamoDB tables. The company wants each function to have only the minimum permissions that the function needs to complete its task.<br><br>A solutions architect must determine which permissions each Lambda function needs.<br><br>What should the solutions architect do to meet this requirement with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: hàng trăm Lambda role quá rộng quyền, cần xác định quyền tối thiểu.</li><li>Requirement chính: <strong>LEAST amount of effort</strong>.</li><li>Ưu tiên: tự động hóa tạo least-privilege policy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>IAM Access Analyzer</strong> có thể tự động sinh policy dựa trên hoạt động trong <strong>AWS CloudTrail</strong> của từng role, sau đó chỉ cần review. Không cần viết script hay xử lý log thủ công.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CodeGuru Profiler không dùng để thống kê AWS API calls cho IAM policy.</li><li><strong>B</strong>: ✅ Đúng — CloudTrail + IAM Access Analyzer policy generation, ít công sức nhất.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự viết script parse log và tạo policy.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — dùng EMR xử lý log, quá nặng và tốn công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM Access Analyzer</li><li>Policy generation</li><li>CloudTrail</li><li>Least privilege</li><li>Lambda execution role</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cần tạo least-privilege policy từ hoạt động thực tế → nghĩ ngay đến IAM Access Analyzer policy generation.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#129",
          "answers": [
            {
              "choice": "<p>A. Set up Amazon CodeGuru to profile the Lambda functions and search for AWS API calls. Create an inventory of the required API calls and resources for each Lambda function. Create new IAM access policies for each Lambda function. Review the new policies to ensure that they meet the company's business requirements.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on AWS CloudTrail logging for the AWS account. Use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on AWS CloudTrail logging for the AWS account. Create a script to parse the CloudTrail log, search for AWS API calls by Lambda execution role, and create a summary report. Review the report. Create IAM access policies that provide more restrictive permissions for each Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS CloudTrail logging for the AWS account. Export the CloudTrail logs to Amazon S3. Use Amazon EMR to process the CloudTrail logs in Amazon S3 and produce a report of API calls and resources used by each execution role. Create a new IAM access policy for each role. Export the generated roles to an S3 bucket. Review the generated policies to ensure that they meet the company’s business requirements.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#130",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must analyze a company’s Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.<br><br>The solutions architect must analyze the environment and take action based on the findings.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: phân tích EC2 và EBS để rightsize, tải thay đổi không theo pattern.</li><li>Requirement chính: <strong>MOST cost-effectively</strong> và đưa ra hành động dựa trên phân tích.</li><li>Ưu tiên: công cụ tự động đưa recommendation, chi phí thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Compute Optimizer</strong> phân tích metric và đưa ra recommendation rightsizing cho EC2/EBS, miễn phí. Cài <strong>CloudWatch agent</strong> để có memory metric (quan trọng với instance high-memory chạy database).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — OpsCenter dashboard thủ công, tự đánh giá peak.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — detailed monitoring tốn phí và vẫn phân tích thủ công.</li><li><strong>C</strong>: ✅ Đúng — Compute Optimizer + CloudWatch agent (memory metric), tự động recommend.</li><li><strong>D</strong>: ❌ Sai — Enterprise Support rất tốn kém, không cost-effective.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Compute Optimizer</li><li>CloudWatch agent</li><li>Memory metrics</li><li>Rightsizing</li><li>Cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Rightsize EC2/EBS ít tốn kém → nghĩ ngay đến Compute Optimizer.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#130",
          "answers": [
            {
              "choice": "<p>A. Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes. Create and review a dashboard that is based on the metrics. Identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the Amazon CloudWatch agent on each of the EC2 instances. Turn on AWS Compute Optimizer, and let it run for at least 12 hours. Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Sign up for the AWS Enterprise Support plan. Turn on AWS Trusted Advisor. Wait 12 hours. Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#131",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.<br><br>In an AWS application account, the company’s application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization. The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed m the application account.<br><br>The application team has stored the database credentials as secrets in AWS Secrets Manager in the application account. The application team is manually sharing the secrets with the database administrators. The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account. A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DBA account truy cập secret ở application account mà không chia sẻ thủ công.</li><li>Requirement chính: cross-account access tới Secrets Manager; secret mã hóa bằng AWS managed key mặc định.</li><li>Ưu tiên: cơ chế cross-account đúng kỹ thuật, bảo mật.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Secret mã hóa bằng <strong>AWS managed key</strong> thì không thể chia sẻ cross-account trực tiếp (key policy không sửa được). Giải pháp là role ở application account (có quyền secret + key) và DBA-Admin role <strong>assume</strong> role đó.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS RAM không dùng để share secret kiểu này.</li><li><strong>B</strong>: ✅ Đúng — cross-account `AssumeRole` vào DBA-Secret role ở application account.</li><li><strong>C</strong>: ❌ Sai — không thể sửa key policy của AWS managed key.</li><li><strong>D</strong>: ❌ Sai — SCP chỉ giới hạn quyền, không cấp quyền.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account AssumeRole</li><li>Secrets Manager</li><li>AWS managed key</li><li>SCP không cấp quyền</li><li>Instance profile</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Secret dùng AWS managed key + cross-account → nghĩ ngay đến assume role ở account chứa secret.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#131",
          "answers": [
            {
              "choice": "<p>A. Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the application account, create an IAM role that is named DBA-Secret. Grant the role the required permissions to access the secrets. In the DBA account, create an IAM role that is named DBA-Admin. Grant the DBA-Admin role the required permissions to assume the DBA-Secret role in the application account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the DBA account create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets and the default AWS managed key in the application account. In the application account, attach resource-based policies to the key to allow access from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets in the application account. Attach an SCP to the application account to allow access to the secrets from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#132",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.<br><br>Because of regulatory requirements, all resources that the company deploys in the organization must reside in the ap-northeast-1 Region. Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.<br><br>A solutions architect must implement a solution that applies these restrictions. The solution must maximize operational efficiency and must minimize ongoing maintenance.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: ép toàn organization chỉ dùng ap-northeast-1 và DataOps chỉ dùng danh sách instance type cho phép.</li><li>Requirement chính: tối đa hiệu quả vận hành, ít bảo trì.</li><li>Ưu tiên: governance tập trung bằng <strong>SCP</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP áp dụng ở root OU với `aws:RequestedRegion` giới hạn Region cho mọi account; SCP riêng với `ec2:InstanceType` áp dụng cho DataOps OU giới hạn instance type. Tập trung, không cần cấu hình từng account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ áp dụng cho một role ở một account, không scale.</li><li><strong>B</strong>: ❌ Sai — tạo user từng account, tốn bảo trì.</li><li><strong>C</strong>: ✅ Đúng — SCP + `aws:RequestedRegion` ở root OU.</li><li><strong>D</strong>: ❌ Sai — `ec2:Region` không phải condition key hợp lệ cho mục đích này.</li><li><strong>E</strong>: ✅ Đúng — SCP + `ec2:InstanceType` gắn vào DataOps OU.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP</li><li>aws:RequestedRegion</li><li>ec2:InstanceType</li><li>Root OU / DataOps OU</li><li>Region restriction</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn Region/instance type toàn organization → nghĩ ngay đến SCP với condition key.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#132",
          "answers": [
            {
              "choice": "<p>A. Create an IAM role in one account under the DataOps OU. Use the ec2:InstanceType condition key in an inline policy on the role to restrict access to specific instance type.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user in all accounts under the root OU. Use the aws:RequestedRegion condition key in an inline policy on each user to restrict access to all AWS Regions except ap-northeast-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP. Use the aws:RequestedRegion condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP. Use the ec2:Region condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU, the DataOps OU, and the Research OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an SCP. Use the ec2:InstanceType condition key to restrict access to specific instance types. Apply the SCP to the DataOps OU.</p>",
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
      "question_id": "#137",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital marketing company has multiple AWS accounts that belong to various teams. The creative team uses an Amazon S3 bucket in its AWS account to securely store images and media files that are used as content for the company’s marketing campaigns. The creative team wants to share the S3 bucket with the strategy team so that the strategy team can view the objects.<br><br>A solutions architect has created an IAM role that is named strategy_reviewer in the Strategy account. The solutions architect also has set up a custom AWS Key Management Service (AWS KMS) key in the Creative account and has associated the key with the S3 bucket. However, when users from the Strategy account assume the IAM role and try to access objects in the S3 bucket, they receive an Access Denied error.<br><br>The solutions architect must ensure that users in the Strategy account can access the S3 bucket. The solution must provide these users with only the minimum permissions that they need.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Strategy account đọc S3 của Creative account, bucket mã hóa bằng custom KMS key, đang Access Denied.</li><li>Requirement chính: cross-account read-only, minimum permissions.</li><li>Ưu tiên: cần cả quyền S3 lẫn quyền KMS ở cả hai phía.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-account cần cho phép cả hai phía: bucket policy (Creative) cấp read cho Strategy account, <strong>KMS key policy</strong> cấp decrypt cho role, và IAM role (Strategy) có quyền read S3 + decrypt KMS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — bucket policy read cho Strategy account.</li><li><strong>B</strong>: ❌ Sai — full permissions vi phạm least privilege.</li><li><strong>C</strong>: ✅ Đúng — key policy cho phép role decrypt.</li><li><strong>D</strong>: ❌ Sai — principal anonymous làm bucket công khai.</li><li><strong>E</strong>: ❌ Sai — chỉ cần decrypt, không cần encrypt.</li><li><strong>F</strong>: ✅ Đúng — IAM role có read S3 + decrypt KMS (minimum).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account S3</li><li>KMS key policy</li><li>kms:Decrypt</li><li>Least privilege</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"S3 cross-account + custom KMS → nghĩ ngay đến cấp quyền ở cả bucket policy, key policy và IAM role.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to the account ID of the Strategy account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the strategy_reviewer IAM role to grant full permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to an anonymous user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the custom KMS key policy in the Creative account to grant encrypt permissions to the strategy_reviewer IAM role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Update the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.</p>",
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
      "question_id": "#140",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software as a service (SaaS) based company provides a case management solution to customers A3 part of the solution. The company uses a standalone Simple Mail Transfer Protocol (SMTP) server to send email messages from an application. The application also stores an email template for acknowledgement email messages that populate customer data before the application sends the email message to the customer.<br><br>The company plans to migrate this messaging functionality to the AWS Cloud and needs to minimize operational overhead.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: migrate SMTP server và email template lên AWS.</li><li>Requirement chính: giảm operational overhead, <strong>MOST cost-effective</strong>.</li><li>Ưu tiên: dịch vụ email managed có sẵn template.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon SES</strong> thay SMTP server, lưu <strong>template ngay trong SES</strong> và Lambda gọi `SendTemplatedEmail` với dữ liệu khách hàng. Không cần S3 hay tự merge template, không quản lý server.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SMTP server trên EC2 tốn vận hành.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — SES tốt nhưng tự merge template qua S3 + Lambda, thừa bước.</li><li><strong>C</strong>: ❌ Sai — vẫn dùng SMTP trên EC2.</li><li><strong>D</strong>: ✅ Đúng — SES templates + SendTemplatedEmail.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon SES</li><li>SES templates</li><li>SendTemplatedEmail</li><li>Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Email template có tham số → nghĩ ngay đến SES template và SendTemplatedEmail.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#140",
          "answers": [
            {
              "choice": "<p>A. Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace. Store the email template in an Amazon S3 bucket. Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template. Use an SDK in the Lambda function to send the email message.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up Amazon Simple Email Service (Amazon SES) to send email messages. Store the email template in an Amazon S3 bucket. Create an AWS Lambda function to retrieve the template from the S3 bucket and to merge the customer data from the application with the template. Use an SDK in the Lambda function to send the email message.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an SMTP server on Amazon EC2 instances by using an AMI from the AWS Marketplace. Store the email template in Amazon Simple Email Service (Amazon SES) with parameters for the customer data. Create an AWS Lambda function to call the SES template and to pass customer data to replace the parameters. Use the AWS Marketplace SMTP server to send the email message.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Amazon Simple Email Service (Amazon SES) to send email messages. Store the email template on Amazon SES with parameters for the customer data. Create an AWS Lambda function to call the SendTemplatedEmail API operation and to pass customer data to replace the parameters and the email destination.</p>",
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
      "question_id": "#141",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is processing videos in the AWS Cloud by Using Amazon EC2 instances in an Auto Scaling group. It takes 30 minutes to process a video Several EC2 instances scale in and out depending on the number of videos in an Amazon Simple Queue Service (Amazon SQS) queue.<br><br>The company has configured the SQS queue with a redrive policy that specifies a target dead-letter queue and a maxReceiveCount of 1. The company has set the visibility timeout for the SQS queue to 1 hour. The company has set up an Amazon CloudWatch alarm to notify the development team when there are messages in the dead-letter queue.<br><br>Several times during the day. the development team receives notification that messages are in the dead-letter queue and that videos have not been processed property. An investigation finds no errors m the application logs.<br><br>How can the company solve this problem?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: video xử lý 30 phút, message vào DLQ nhưng log không lỗi.</li><li>Requirement chính: tìm nguyên nhân thật sự khiến message không xử lý xong.</li><li>Ưu tiên: instance không bị terminate khi đang xử lý (scale-in).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Auto Scaling scale-in có thể terminate instance giữa lúc đang xử lý; message quay lại queue, `maxReceiveCount` = 1 nên chuyển ngay vào DLQ. Bật <strong>scale-in protection</strong> trong lúc xử lý ngăn việc này.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — termination protection không ngăn Auto Scaling scale-in.</li><li><strong>B</strong>: ❌ Sai — visibility timeout 1 giờ đã lớn hơn 30 phút xử lý.</li><li><strong>C</strong>: ✅ Đúng — scale-in protection khi đang xử lý.</li><li><strong>D</strong>: ❌ Sai — `maxReceiveCount` = 0 không hợp lệ và không giải quyết gốc rễ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Scale-in protection</li><li>Dead-letter queue</li><li>maxReceiveCount</li><li>Visibility timeout</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Job dài trên ASG, message vào DLQ không có lỗi → nghĩ ngay đến scale-in protection.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#141",
          "answers": [
            {
              "choice": "<p>A. Turn on termination protection tor the EC2 Instances</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the visibility timeout for the SQS queue to 3 hours</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure scale-in protection for the instances during processing</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the redrive policy and set maxReceiveCount to 0.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#142",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed APIs that use Amazon API Gateway with Regional endpoints. The APIs call AWS Lambda functions that use API Gateway authentication mechanisms. After a design review, a solutions architect identifies a set of APIs that do not require public access.<br><br>The solutions architect must design a solution to make the set of APIs accessible only from a VPC. All APIs need to be called with an authenticated user<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: một số API chỉ cho phép gọi từ VPC.</li><li>Requirement chính: private access, vẫn xác thực người dùng, <strong>LEAST effort</strong>.</li><li>Ưu tiên: dùng tính năng sẵn có của API Gateway.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đổi endpoint sang <strong>Private</strong>, tạo <strong>interface VPC endpoint</strong> (PrivateLink) và gắn <strong>resource policy</strong> giới hạn truy cập qua endpoint đó. Giữ nguyên cơ chế authentication.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB đến Lambda bỏ qua API Gateway authentication.</li><li><strong>B</strong>: ❌ Sai — đổi DNS/CNAME không làm API private.</li><li><strong>C</strong>: ✅ Đúng — Private endpoint + interface VPC endpoint + resource policy.</li><li><strong>D</strong>: ❌ Sai — EC2/Apache là kiến trúc thừa, nhiều công sức.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Private API endpoint</li><li>Interface VPC endpoint</li><li>Resource policy</li><li>PrivateLink</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"API Gateway chỉ truy cập từ VPC → nghĩ ngay đến Private endpoint + VPC endpoint + resource policy.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#142",
          "answers": [
            {
              "choice": "<p>A. Create an internal Application Load Balancer (ALB). Create a target group. Select the Lambda function to call. Use the ALB DNS name to call the API from the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the DNS entry that is associated with the API in API Gateway. Create a hosted zone in Amazon Route 53. Create a CNAME record in the hosted zone. Update the API in API Gateway with the CNAME record. Use the CNAME record to call the API from the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the API endpoint from Regional to private in API Gateway. Create an interface VPC endpoint in the VPC. Create a resource policy, and attach it to the API. Use the VPC endpoint to call the API from the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the Lambda functions inside the VPC Provision an EC2 instance, and install an Apache server. From the Apache server, call the Lambda functions. Use the internal CNAME record of the EC2 instance to call the API from the VPC.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront.<br><br>The company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time.<br><br>Which combination of steps will resolve the us-east-1 performance issues? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: user ở us-east-1 truy cập chậm nội dung S3 ở eu-west-1 qua CloudFront.</li><li>Requirement chính: giảm latency cho user Bắc Mỹ.</li><li>Ưu tiên: đặt dữ liệu gần user và route request đến origin gần.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo bucket ở us-east-1 và <strong>S3 Cross-Region Replication</strong> để có dữ liệu gần user, rồi dùng <strong>Lambda@Edge</strong> đổi origin sang bucket us-east-1 cho request từ Bắc Mỹ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Global Accelerator không có endpoint trực tiếp cho S3 bucket.</li><li><strong>B</strong>: ✅ Đúng — bucket us-east-1 + CRR.</li><li><strong>C</strong>: ❌ Sai — Transfer Acceleration dành cho upload, không phải giải pháp này.</li><li><strong>D</strong>: ✅ Đúng — Lambda@Edge route request tới bucket us-east-1.</li><li><strong>E</strong>: ❌ Sai — Global Accelerator làm origin CloudFront là thừa và không hợp với S3.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 CRR</li><li>Lambda@Edge</li><li>Origin selection</li><li>CloudFront</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"CloudFront + S3 đa Region → nghĩ ngay đến CRR và Lambda@Edge chọn origin.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution. Use Lambda@Edge to modify requests from North America to use the new origin.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#144",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is investigating an issue in which a company cannot establish new sessions in Amazon Workspaces. An initial analysis indicates that the issue involves user profiles. The Amazon Workspaces environment is configured to use Amazon FSx for Windows File Server as the profile share storage. The FSx for Windows File Server file system is configured with 10 TB of storage.<br><br>The solutions architect discovers that the file system has reached Its maximum capacity. The solutions architect must ensure that users can regain access. The solution also must prevent the problem from occurring again.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: FSx for Windows File Server đầy dung lượng, WorkSpaces không tạo được session.</li><li>Requirement chính: khôi phục truy cập và ngăn tái diễn.</li><li>Ưu tiên: mở rộng dung lượng và tự động hóa.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tăng dung lượng bằng `update-file-system`, đồng thời giám sát <strong>FreeStorageCapacity</strong> bằng CloudWatch alarm, dùng <strong>EventBridge</strong> gọi <strong>Lambda</strong> để tự động tăng dung lượng khi cần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — FSx for Lustre không phù hợp cho profile Windows.</li><li><strong>B</strong>: ✅ Đúng — tăng dung lượng ngay, tự động mở rộng bằng alarm + EventBridge + Lambda.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — không nêu rõ tăng dung lượng ngay để khôi phục truy cập.</li><li><strong>D</strong>: ❌ Sai — chia user sang file system mới, phức tạp và không ngăn tái diễn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>update-file-system</li><li>FreeStorageCapacity</li><li>EventBridge</li><li>Lambda</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"FSx đầy dung lượng → tăng storage capacity và tự động hóa bằng alarm + Lambda.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#144",
          "answers": [
            {
              "choice": "<p>A. Remove old user profiles to create space. Migrate the user profiles to an Amazon FSx for Lustre file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase capacity by using the update-file-system command. Implement an Amazon CloudWatch metric that monitors free space. Use Amazon EventBridge to invoke an AWS Lambda function to increase capacity as required.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Monitor the file system by using the FreeStorageCapacity metric in Amazon CloudWatch. Use AWS Step Functions to increase the capacity as required.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove old user profiles to create space. Create an additional FSx for Windows File Server file system. Update the user profile redirection for 50% of the users to use the new file system.</p>",
              "correct": false,
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
      "question_id": "#146",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application runs on containers m an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS tasks use the Fargate launch type. The application's data is relational and is stored in Amazon Aurora MySQL. To meet regulatory requirements, the application must be able to recover to a separate AWS Region in the event of an application failure. In case of a failure, no data can be lost.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: Aurora MySQL cần khả năng recover ở Region khác, không mất dữ liệu.</li><li>Requirement chính: cross-Region DR với RPO gần bằng 0, <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: replication managed.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora cross-Region Replica</strong> (hoặc Global Database) replicate gần như real-time, managed hoàn toàn, có thể promote khi sự cố. Overhead thấp nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Aurora Replica ở Region khác, managed.</li><li><strong>B</strong>: ❌ Sai — DataSync không dùng để replicate database.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — DMS làm được nhưng phải tự quản lý.</li><li><strong>D</strong>: ❌ Sai — snapshot 5 phút vẫn có thể mất dữ liệu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Aurora cross-Region replica</li><li>Aurora Global Database</li><li>RPO</li><li>Managed replication</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Aurora DR cross-Region, không mất dữ liệu → nghĩ ngay đến Aurora Replica / Global Database.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#146",
          "answers": [
            {
              "choice": "<p>A. Provision an Aurora Replica in a different Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS DataSync for continuous replication of the data to a different Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Database Migration Service (AWS DMS) to perform a continuous replication of the data to a different Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule a snapshot every 5 minutes.</p>",
              "correct": false,
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
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use AWS to create a business continuity solution in case the company's main on-premises application fails. The application runs on physical servers that also run other applications. The on-premises application that the company is planning to migrate uses a MySQL database as a data store. All the company's on-premises applications use operating systems that are compatible with Amazon EC2.<br><br>Which solution will achieve the company's goal with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: business continuity cho ứng dụng on-premises (physical server, MySQL).</li><li>Requirement chính: <strong>LEAST operational overhead</strong>.</li><li>Ưu tiên: dịch vụ DR chuyên dụng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Elastic Disaster Recovery (DRS)</strong> dùng Replication Agent để replicate liên tục toàn bộ server (kể cả MySQL), cung cấp launch settings, failover và failback có sẵn. Ít vận hành nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thiếu Elastic Disaster Recovery, phải tự xử lý failover bằng test instance.</li><li><strong>B</strong>: ✅ Đúng — Replication Agent + Elastic Disaster Recovery, failover/fallback.</li><li><strong>C</strong>: ❌ Sai — DMS + SCT phức tạp, chỉ giải quyết database.</li><li><strong>D</strong>: ❌ Sai — Volume Gateway thủ công, nhiều bước vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Elastic Disaster Recovery</li><li>AWS Replication Agent</li><li>Failover / failback</li><li>Continuous replication</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"DR cho server on-premises → nghĩ ngay đến AWS Elastic Disaster Recovery.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#148",
          "answers": [
            {
              "choice": "<p>A. Install the AWS Replication Agent on the source servers, including the MySQL servers. Set up replication for all servers. Launch test instances for regular drills. Cut over to the test instances to fail over the workload in the case of a failure event.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the AWS Replication Agent on the source servers, including the MySQL servers. Initialize AWS Elastic Disaster Recovery in the target AWS Region. Define the launch settings. Frequently perform failover and fallback from the most recent point in time.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create AWS Database Migration Service (AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database. Create a DMS replication task to copy the existing data to the target DB cluster. Create a local AWS Schema Conversion Tool (AWS SCT) change data capture (CDC) task to keep the data synchronized. Install the rest of the software on EC2 instances by starting with a compatible base AMI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway Volume Gateway on premises. Mount volumes on all on-premises servers. Install the application and the MySQL database on the new volumes. Take regular snapshots. Install all the software on EC2 Instances by starting with a compatible base AMI. Launch a Volume Gateway on an EC2 instance. Restore the volumes from the latest snapshot. Mount the new volumes on the EC2 instances in the case of a failure event.</p>",
              "correct": false,
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
      "question_id": "#151",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated an application from on premises to AWS. The application frontend is a static website that runs on two Amazon EC2 instances behind an Application Load Balancer (ALB). The application backend is a Python application that runs on three EC2 instances behind another ALB. The EC2 instances are large, general purpose On-Demand Instances that were sized to meet the on-premises specifications for peak usage of the application.<br><br>The application averages hundreds of thousands of requests each month. However, the application is used mainly during lunchtime and receives minimal traffic during the rest of the day.<br><br>A solutions architect needs to optimize the infrastructure cost of the application without negatively affecting the application availability.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Workload nhỏ, traffic chỉ tập trung giờ trưa, nhưng EC2 đang sized cho peak và chạy On-Demand 24/7.</li><li>Requirement: giảm chi phí hạ tầng mà không làm giảm availability.</li><li>Ưu tiên: cost optimization.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Frontend là static website nên chuyển sang <strong>Amazon S3</strong> loại bỏ hẳn EC2 và ALB phía frontend. Backend traffic thấp, có burst ngắn nên <strong>burstable instances (T-family)</strong> tích lũy CPU credits lúc rảnh và dùng khi peak, rẻ hơn nhiều mà vẫn giữ số core.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — compute optimized thường đắt hơn, workload không CPU-bound và không giải quyết vấn đề dư tài nguyên.</li><li><strong>B</strong>: ✅ Đúng — S3 static website hosting gần như không tốn compute, availability cao.</li><li><strong>C</strong>: ❌ Sai — Elastic Beanstalk vẫn dùng cùng instance type nên không giảm chi phí.</li><li><strong>D</strong>: ❌ Sai — Spot có thể bị thu hồi bất cứ lúc nào, ảnh hưởng availability của backend.</li><li><strong>E</strong>: ✅ Đúng — burstable phù hợp traffic thấp với burst theo giờ trưa, giảm chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>static website, Amazon S3, burstable (T3), CPU credits, cost optimization</p><p><strong>🧠 MẸO THI</strong></p><p>\"Static content trên EC2 → nghĩ ngay đến S3; traffic thấp có burst → nghĩ đến burstable instances.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#151",
          "answers": [
            {
              "choice": "<p>A. Change all the EC2 instances to compute optimized instances that have the same number of cores as the existing EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the application frontend to a static website that is hosted on Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application frontend by using AWS Elastic Beanstalk. Use the same instance type for the nodes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change all the backend EC2 instances to Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the backend Python application to general purpose burstable EC2 instances that have the same number of cores as the existing EC2 instances.</p>",
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
      "question_id": "#152",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an event ticketing platform on AWS and wants to optimize the platform's cost-effectiveness. The platform is deployed on Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 and is backed by an Amazon RDS for MySQL DB instance. The company is developing new application features to run on Amazon EKS with AWS Fargate.<br><br>The platform experiences infrequent high peaks in demand. The surges in demand depend on event dates.<br><br>Which solution will provide the MOST cost-effective setup for the platform?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nền tảng EKS + RDS for MySQL, có peak hiếm và theo lịch sự kiện, đang phát triển thêm feature chạy trên Fargate.</li><li>Requirement: setup MOST cost-effective.</li><li>Ưu tiên: cost, nhưng vẫn phải xử lý peak đáng tin cậy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Compute Savings Plans</strong> áp dụng cho cả EC2 lẫn <strong>Fargate</strong>, nên phù hợp khi workload chuyển dần sang Fargate. Peak biết trước theo ngày sự kiện nên dùng <strong>On-Demand Capacity Reservations</strong> để đảm bảo capacity. DB dùng RI cho base load và scale out <strong>read replicas</strong> tạm thời khi peak.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Standard RI không áp dụng cho Fargate; mua RDS RI theo peak cả năm là lãng phí.</li><li><strong>B</strong>: ✅ Đúng — Compute Savings Plans bao gồm Fargate, capacity reservation cho peak biết trước, RDS RI cho base load, read replica tạm thời.</li><li><strong>C</strong>: ❌ Sai — EC2 Instance Savings Plans không áp dụng cho Fargate.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Compute Savings Plans đúng, nhưng Spot có thể bị thu hồi lúc peak và scale up DB thủ công gây downtime.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Compute Savings Plans, Fargate, On-Demand Capacity Reservations, RDS Reserved Instances, read replicas</p><p><strong>🧠 MẸO THI</strong></p><p>\"Có Fargate/Lambda trong cost optimization → nghĩ ngay đến Compute Savings Plans; peak biết trước và cần đảm bảo capacity → Capacity Reservations.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#152",
          "answers": [
            {
              "choice": "<p>A. Purchase Standard Reserved Instances for the EC2 instances that the EKS cluster uses in its baseline load. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet predicted peak load for the year.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase Compute Savings Plans for the predicted medium load of the EKS cluster. Scale the cluster with On-Demand Capacity Reservations based on event dates for peaks. Purchase 1-year No Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale out database read replicas during peaks.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase EC2 Instance Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase Compute Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#153",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an application on AWS Elastic Beanstalk. The application uses Amazon Aurora for the database layer. An Amazon CloudFront distribution serves web requests and includes the Elastic Beanstalk domain name as the origin server. The distribution is configured with an alternate domain name that visitors use when they access the application.<br><br>Each week, the company takes the application out of service for routine maintenance. During the time that the application is unavailable, the company wants visitors to receive an informational message instead of a CloudFront error message.<br><br>A solutions architect creates an Amazon S3 bucket as the first step in the process.<br><br>Which combination of steps should the solutions architect take next to meet the requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Khi bảo trì hàng tuần, CloudFront phải trả trang thông báo từ S3 thay vì lỗi CloudFront.</li><li>Requirement: dùng chính distribution hiện tại (có alternate domain name), thao tác đơn giản.</li><li>Ưu tiên: ít thay đổi, giữ nguyên domain.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Upload nội dung thông báo lên S3, thêm S3 làm <strong>origin thứ hai</strong> trong distribution gốc với <strong>OAI</strong>, rồi khi bảo trì đổi default cache behavior sang S3 origin và revert sau đó. Domain không đổi nên visitor không bị ảnh hưởng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — cần có nội dung tĩnh trong S3.</li><li><strong>B</strong>: ❌ Sai — distribution mới sẽ không dùng alternate domain name hiện tại.</li><li><strong>C</strong>: ✅ Đúng — thêm S3 làm origin thứ hai, bảo vệ bucket bằng OAI.</li><li><strong>D</strong>: ✅ Đúng — đổi default behavior sang S3 origin khi bảo trì rồi revert.</li><li><strong>E</strong>: ❌ Sai — tạo behavior trên distribution mới, không phải distribution đang phục vụ domain.</li><li><strong>F</strong>: ❌ Sai — Elastic Beanstalk không phục vụ traffic trực tiếp từ S3 bucket.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFront multiple origins, cache behavior, OAI, S3 static content, maintenance page</p><p><strong>🧠 MẸO THI</strong></p><p>\"Trang bảo trì qua CloudFront → nghĩ đến thêm S3 origin và đổi cache behavior, không tạo distribution mới.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#153",
          "answers": [
            {
              "choice": "<p>A. Upload static informational content to the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CloudFront distribution. Set the S3 bucket as the origin.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the S3 bucket as a second origin in the original CloudFront distribution. Configure the distribution and the S3 bucket to use an origin access identity (OAI).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. During the weekly maintenance, edit the default cache behavior to use the S3 origin. Revert the change when the maintenance is complete.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. During the weekly maintenance, create a cache behavior for the S3 origin on the new distribution. Set the path pattern to \\ Set the precedence to 0. Delete the cache behavior when the maintenance is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. During the weekly maintenance, configure Elastic Beanstalk to serve traffic from the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#154",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company gives users the ability to upload images from a custom application. The upload process invokes an AWS Lambda function that processes and stores the image in an Amazon S3 bucket. The application invokes the Lambda function by using a specific function version ARN.<br><br>The Lambda function accepts image processing parameters by using environment variables. The company often adjusts the environment variables of the Lambda function to achieve optimal image processing output. The company tests different parameters and publishes a new function version with the updated environment variables after validating results. This update process also requires frequent changes to the custom application to invoke the new function version ARN. These changes cause interruptions for users.<br><br>A solutions architect needs to simplify this process to minimize disruption to users.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng gọi Lambda bằng function version ARN; mỗi lần đổi environment variables lại publish version mới và phải sửa app.</li><li>Requirement: giảm gián đoạn cho user.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda alias</strong> là con trỏ ổn định tới một version. App chỉ gọi alias ARN, khi test xong chỉ cần trỏ alias sang version mới, không cần đổi code client và có thể dùng weighted routing để chuyển dần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — published version là immutable, không sửa được environment variables; $LATEST không ổn định cho production.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — thêm DynamoDB và code truy xuất, tăng overhead và latency.</li><li><strong>C</strong>: ❌ Sai — hard-code tham số vẫn phải publish version mới và đổi ARN.</li><li><strong>D</strong>: ✅ Đúng — alias ARN cố định, chỉ đổi con trỏ version.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda alias, function version, immutable, $LATEST, weighted alias</p><p><strong>🧠 MẸO THI</strong></p><p>\"Client không muốn đổi ARN khi deploy version mới Lambda → nghĩ ngay đến alias.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#154",
          "answers": [
            {
              "choice": "<p>A. Directly modify the environment variables of the published Lambda function version. Use the SLATEST version to test image processing parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon DynamoDB table to store the image processing parameters. Modify the Lambda function to retrieve the image processing parameters from the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Directly code the image processing parameters within the Lambda function and remove the environment variables. Publish a new function version when the company updates the parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Lambda function alias. Modify the client application to use the function alias ARN. Reconfigure the Lambda alias to point to new versions of the function when the company finishes testing.</p>",
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
      "question_id": "#156",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new serverless API by using Amazon API Gateway and AWS Lambda. The company integrated the Lambda functions with API Gateway to use several shared libraries and custom classes.<br><br>A solutions architect needs to simplify the deployment of the solution and optimize for code reuse.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Serverless API với nhiều shared libraries và custom classes dùng chung giữa các Lambda function.</li><li>Requirement: đơn giản hóa deployment và tối ưu code reuse.</li><li>Ưu tiên: operational simplicity.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đóng gói libraries, custom classes và code vào một <strong>container image</strong> trong <strong>Amazon ECR</strong> rồi cấu hình Lambda dùng image làm deployment package (tới 10 GB). Cách này chính thức được hỗ trợ và dễ chia sẻ dependency.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda layer không thể dùng Docker image làm nguồn, và image không lưu ở S3 để dùng cho layer.</li><li><strong>B</strong>: ❌ Sai — layer không được tạo từ Docker image trong ECR.</li><li><strong>C</strong>: ❌ Sai — không thể dùng container ECS Fargate làm Lambda layer.</li><li><strong>D</strong>: ✅ Đúng — Lambda hỗ trợ container image làm deployment package.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda container image, Amazon ECR, Lambda layers (zip archive), code reuse, deployment package</p><p><strong>🧠 MẸO THI</strong></p><p>\"Lambda layer chỉ nhận zip archive; muốn dùng Docker image → cấu hình image trực tiếp cho function.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#156",
          "answers": [
            {
              "choice": "<p>A. Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the shared libraries and custom classes to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service (Amazon ECS) by using the AWS Fargate launch type. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.</p>",
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
      "question_id": "#158",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must create a business case for migration of a company's on-premises data center to the AWS Cloud. The solutions architect will use a configuration management database (CMDB) export of all the company's servers to create the case.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cần tạo business case di chuyển data center lên AWS từ CMDB export có sẵn.</li><li>Requirement: phân tích chi phí, MOST cost-effectively.</li><li>Ưu tiên: ít công sức, dùng dữ liệu có sẵn, không cần cài agent.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Migration Evaluator</strong> (trước là TSO Logic) tạo business case, ước tính chi phí AWS và cho phép import dữ liệu qua <strong>data import template</strong>, không tốn phí và không cần agent.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Well-Architected Tool đánh giá kiến trúc workload, không phân tích CMDB để tạo business case.</li><li><strong>B</strong>: ✅ Đúng — Migration Evaluator + import template từ CMDB.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng matching rules với Price List Bulk API, tốn nhiều công sức.</li><li><strong>D</strong>: ❌ Sai — Application Discovery Service thu thập dữ liệu bằng agent/agentless, không phải công cụ business case từ CMDB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Migration Evaluator, business case, CMDB, data import template, cost estimate</p><p><strong>🧠 MẸO THI</strong></p><p>\"Business case di chuyển + có sẵn dữ liệu server → nghĩ ngay đến Migration Evaluator.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Use AWS Well-Architected Tool to import the CMDB data to perform an analysis and generate recommendations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Migration Evaluator to perform an analysis. Use the data import template to upload the data from the CMDB export.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement resource matching rules. Use the CMDB export and the AWS Price List Bulk API to query CMDB data against AWS services in bulk.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Discovery Service to import the CMDB data to perform an analysis.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#159",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a website that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB is associated with an AWS WAF web ACL.<br><br>The website often encounters attacks in the application layer. The attacks produce sudden and significant increases in traffic on the application server. The access logs show that each attack originates from different IP addresses. A solutions architect needs to implement a solution to mitigate these attacks.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Website sau ALB + AWS WAF bị tấn công layer 7, traffic tăng đột biến từ nhiều IP khác nhau.</li><li>Requirement: giảm thiểu tấn công.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Shield Advanced</strong> kết hợp WAF cung cấp phát hiện và giảm thiểu DDoS layer 7 tự động, có automatic application layer DDoS mitigation (tự tạo WAF rules) và hỗ trợ SRT, không phải tự xử lý từng IP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chặn từng IP thủ công qua alarm; tấn công đến từ nhiều IP khác nhau nên không hiệu quả, overhead cao.</li><li><strong>B</strong>: ✅ Đúng — Shield Advanced + WAF tự động giảm thiểu, ít vận hành nhất.</li><li><strong>C</strong>: ❌ Sai — không thể thêm deny rule vào route table theo IP; route table không hoạt động như vậy.</li><li><strong>D</strong>: ❌ Sai — geolocation của Route 53 không chặn traffic và không khớp nguồn tấn công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Shield Advanced, AWS WAF, layer 7 DDoS, automatic mitigation, ALB</p><p><strong>🧠 MẸO THI</strong></p><p>\"DDoS layer 7 từ nhiều IP, ít vận hành → nghĩ ngay đến Shield Advanced + WAF.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm that monitors server access. Set a threshold based on access by IP address. Configure an alarm action that adds the IP address to the web ACL’s deny list.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy AWS Shield Advanced in addition to AWS WAF. Add the ALB as a protected resource.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm that monitors user IP addresses. Set a threshold based on access by IP address. Configure the alarm to invoke an AWS Lambda function to add a deny rule in the application server’s subnet route table for any IP addresses that activate the alarm.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Inspect access logs to find a pattern of IP addresses that launched the attacks. Use an Amazon Route 53 geolocation routing policy to deny traffic from the countries that host those IP addresses.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a critical application in which the data tier is deployed in a single AWS Region. The data tier uses an Amazon DynamoDB table and an Amazon Aurora MySQL DB cluster. The current Aurora MySQL engine version supports a global database. The application tier is already deployed in two Regions.<br><br>Company policy states that critical applications must have application tier components and data tier components deployed across two Regions. The RTO and RPO must be no more than a few minutes each. A solutions architect must recommend a solution to make the data tier compliant with company policy.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Data tier (DynamoDB + Aurora MySQL) đang ở một Region, policy yêu cầu hai Region.</li><li>Requirement: RTO và RPO tối đa vài phút.</li><li>Ưu tiên: cross-Region replication gần real-time.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora Global Database</strong> (thêm Region cho cluster) replicate dưới 1 giây, và <strong>DynamoDB global tables</strong> replicate nhiều Region, đạt RPO/RTO cỡ vài phút.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — thêm Region secondary cho Aurora cluster qua Global Database.</li><li><strong>B</strong>: ❌ Sai — Aurora không cấu hình theo từng table.</li><li><strong>C</strong>: ❌ Sai — backup theo lịch có RPO/RTO quá lớn.</li><li><strong>D</strong>: ✅ Đúng — chuyển DynamoDB table thành global table.</li><li><strong>E</strong>: ❌ Sai — Route 53 ARC không tự động backup/recovery database.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Aurora Global Database, DynamoDB global tables, cross-Region replication, RPO/RTO vài phút</p><p><strong>🧠 MẸO THI</strong></p><p>\"DB cần RPO/RTO vài phút ở hai Region → Aurora Global Database + DynamoDB global tables.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#160",
          "answers": [
            {
              "choice": "<p>A. Add another Region to the Aurora MySQL DB cluster</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add another Region to each table in the Aurora MySQL DB cluster</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up scheduled cross-Region backups for the DynamoDB table and the Aurora MySQL DB cluster</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the existing DynamoDB table to a global table by adding another Region to its configuration</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Route 53 Application Recovery Controller to automate database backup and recovery to the secondary Region</p>",
              "correct": false,
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
      "question_id": "#162",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on a fleet of Amazon EC2 instances that are in private subnets behind an internet-facing Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront distribution. An AWS WAF web ACL that contains various AWS managed rules is associated with the CloudFront distribution.<br><br>The company needs a solution that will prevent internet traffic from directly accessing the ALB.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ALB internet-facing là origin của CloudFront; WAF gắn vào CloudFront.</li><li>Requirement: chặn truy cập trực tiếp từ internet vào ALB.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Security group của ALB chỉ cho phép <strong>AWS managed prefix list cho CloudFront</strong> (com.amazonaws.global.cloudfront.origin-facing). AWS tự cập nhật danh sách IP, nên không cần bảo trì thủ công.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vẫn cho phép truy cập trực tiếp ALB, chỉ thêm WAF và phải duy trì hai web ACL.</li><li><strong>B</strong>: ❌ Sai — WAF gắn thêm vào ALB không chặn được truy cập trực tiếp.</li><li><strong>C</strong>: ✅ Đúng — managed prefix list tự cập nhật, ít vận hành nhất.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự theo dõi và cập nhật dải IP CloudFront, dễ vượt quota rule.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>managed prefix list, CloudFront origin-facing, security group, ALB, restrict direct access</p><p><strong>🧠 MẸO THI</strong></p><p>\"Chỉ cho CloudFront truy cập ALB → security group với CloudFront managed prefix list.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#162",
          "answers": [
            {
              "choice": "<p>A. Create a new web ACL that contains the same rules that the existing web ACL contains. Associate the new web ACL with the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the existing web ACL with the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a security group rule to the ALB to allow traffic from the AWS managed prefix list for CloudFront only.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a security group rule to the ALB to allow only the various CloudFront IP address ranges.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#163",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application that uses an Amazon ElastiCache for Redis cluster as a caching layer. A recent security audit revealed that the company has configured encryption at rest for ElastiCache. However, the company did not configure ElastiCache to use encryption in transit. Additionally, users can access the cache without authentication.<br><br>A solutions architect must make changes to require user authentication and to ensure that the company is using end-to-end encryption.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ElastiCache for Redis đã có encryption at rest nhưng chưa có in-transit encryption và chưa yêu cầu authentication.</li><li>Requirement: bắt buộc authentication và end-to-end encryption.</li><li>Ưu tiên: dùng đúng cơ chế Redis AUTH + TLS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Redis <strong>AUTH token</strong> dùng để authentication, <strong>in-transit encryption (TLS)</strong> bảo vệ dữ liệu trên đường truyền. Token lưu trong <strong>AWS Secrets Manager</strong> và ứng dụng lấy khi cần. Đáp án B áp dụng cả hai lên cluster hiện có.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — hướng đi đúng nhưng phải tạo cluster mới, tốn công hơn.</li><li><strong>B</strong>: ✅ Đúng — AUTH token + in-transit encryption, lưu token ở Secrets Manager.</li><li><strong>C</strong>: ❌ Sai — SSL certificate không dùng để authenticate vào Redis.</li><li><strong>D</strong>: ❌ Sai — dùng certificate làm authentication là sai cơ chế.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Redis AUTH token, in-transit encryption, TLS, Secrets Manager, ElastiCache</p><p><strong>🧠 MẸO THI</strong></p><p>\"ElastiCache Redis cần authentication + mã hóa đường truyền → AUTH token + in-transit encryption.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#163",
          "answers": [
            {
              "choice": "<p>A. Create an AUTH token. Store the token in AWS System Manager Parameter Store, as an encrypted parameter. Create a new cluster with AUTH, and configure encryption in transit. Update the application to retrieve the AUTH token from Parameter Store when necessary and to use the AUTH token for authentication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AUTH token. Store the token in AWS Secrets Manager. Configure the existing cluster to use the AUTH token, and configure encryption in transit. Update the application to retrieve the AUTH token from Secrets Manager when necessary and to use the AUTH token for authentication.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SSL certificate. Store the certificate in AWS Secrets Manager. Create a new cluster, and configure encryption in transit. Update the application to retrieve the SSL certificate from Secrets Manager when necessary and to use the certificate for authentication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SSL certificate. Store the certificate in AWS Systems Manager Parameter Store, as an encrypted advanced parameter. Update the existing cluster to configure encryption in transit. Update the application to retrieve the SSL certificate from Parameter Store when necessary and to use the certificate for authentication.</p>",
              "correct": false,
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
      "question_id": "#167",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web application in a VPC. The web application runs on a group of Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is using AWS WAF.<br><br>An external customer needs to connect to the web application. The company must provide IP addresses to all external customers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>ALB (có WAF) phục vụ web app; khách hàng bên ngoài cần IP cố định để allow list.</li><li>Requirement: cung cấp IP tĩnh.</li><li>Ưu tiên: LEAST operational overhead, giữ ALB và WAF.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Global Accelerator</strong> cấp static anycast IP và nhận ALB làm endpoint, không cần thay ALB hay mất WAF.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — NLB có Elastic IP nhưng mất tính năng ALB và WAF, phải thiết kế lại.</li><li><strong>B</strong>: ❌ Sai — không thể gán Elastic IP trực tiếp cho ALB.</li><li><strong>C</strong>: ✅ Đúng — Global Accelerator static IP trước ALB.</li><li><strong>D</strong>: ❌ Sai — IP của CloudFront không cố định và thay đổi.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Global Accelerator, static IP, ALB endpoint, allow list, anycast</p><p><strong>🧠 MẸO THI</strong></p><p>\"ALB cần IP tĩnh cho khách hàng → Global Accelerator.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#167",
          "answers": [
            {
              "choice": "<p>A. Replace the ALB with a Network Load Balancer (NLB). Assign an Elastic IP address to the NLB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Allocate an Elastic IP address. Assign the Elastic IP address to the ALProvide the Elastic IP address to the customer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Global Accelerator standard accelerator. Specify the ALB as the accelerator's endpoint. Provide the accelerator's IP addresses to the customer.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon CloudFront distribution. Set the ALB as the origin. Ping the distribution's DNS name to determine the distribution's public IP address. Provide the IP address to the customer.</p>",
              "correct": false,
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
      "question_id": "#172",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple business units that each have separate accounts on AWS. Each business unit manages its own network with several VPCs that have CIDR ranges that overlap. The company’s marketing team has created a new internal application and wants to make the application accessible to all the other business units. The solution must use private IP addresses only.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều business unit có VPC CIDR chồng lấn cần truy cập một ứng dụng nội bộ.</li><li>Requirement: chỉ dùng private IP.</li><li>Ưu tiên: LEAST operational overhead, tránh vấn đề overlapping CIDR.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS PrivateLink</strong> (endpoint service + interface endpoints) cho phép truy cập private mà không cần routing giữa các VPC, nên CIDR chồng lấn không ảnh hưởng, và quản lý quyền theo account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — VPC peering không hoạt động với CIDR chồng lấn và quản lý secondary CIDR cho từng BU rất phức tạp.</li><li><strong>B</strong>: ❌ Sai — VPN và virtual appliance tăng overhead, vẫn bị ảnh hưởng bởi overlapping CIDR.</li><li><strong>C</strong>: ✅ Đúng — PrivateLink không phụ thuộc CIDR, ít vận hành.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — API Gateway private integration hoạt động nhưng phức tạp hơn và không phải cho truy cập private IP trực tiếp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS PrivateLink, endpoint service, interface VPC endpoint, overlapping CIDR</p><p><strong>🧠 MẸO THI</strong></p><p>\"CIDR chồng lấn + chia sẻ service riêng tư → PrivateLink.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#172",
          "answers": [
            {
              "choice": "<p>A. Instruct each business unit to add a unique secondary CIDR range to the business unit's VPC. Peer the VPCs and use a private NAT gateway in the secondary range to route traffic to the marketing team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EC2 instance to serve as a virtual appliance in the marketing account's VPC. Create an AWS Site-to-Site VPN connection between the marketing team and each business unit's VPC. Perform NAT where necessary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS PrivateLink endpoint service to share the marketing application. Grant permission to specific AWS accounts to connect to the service. Create interface VPC endpoints in other accounts to access the application by using private IP addresses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Network Load Balancer (NLB) in front of the marketing application in a private subnet. Create an API Gateway API. Use the Amazon API Gateway private integration to connect the API to the NLB. Activate IAM authorization for the API. Grant access to the accounts of the other business units.</p>",
              "correct": false,
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
      "question_id": "#174",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to assess a newly acquired company’s portfolio of applications and databases. The solutions architect must create a business case to migrate the portfolio to AWS. The newly acquired company runs applications in an on-premises data center. The data center is not well documented. The solutions architect cannot immediately determine how many applications and databases exist. Traffic for the applications is variable. Some applications are batch processes that run at the end of each month.<br><br>The solutions architect must gain a better understanding of the portfolio before a migration to AWS can begin.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Data center không được tài liệu hóa tốt, chưa biết có bao nhiêu app/database, traffic biến thiên.</li><li>Requirement: hiểu rõ portfolio và tạo business case trước khi migrate.</li><li>Ưu tiên: discovery, dependencies, business case.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Migration Evaluator</strong> tạo danh sách server và business case, <strong>Application Discovery Service</strong> hiểu dependencies, <strong>Migration Hub</strong> gom view portfolio.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SMS và DMS dùng để migrate, Service Catalog không dùng để hiểu dependencies.</li><li><strong>B</strong>: ❌ Sai — Application Migration Service dùng để migrate; Storage Gateway không đánh giá dependencies.</li><li><strong>C</strong>: ✅ Đúng — Migration Evaluator + Migration Hub + Application Discovery Service.</li><li><strong>D</strong>: ❌ Sai — Control Tower không tạo application portfolio.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Migration Evaluator, Application Discovery Service, Migration Hub, business case, dependencies</p><p><strong>🧠 MẸO THI</strong></p><p>\"Chưa biết hiện trạng on-premises → Discovery (Application Discovery Service) trước, Migration Evaluator cho business case.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#174",
          "answers": [
            {
              "choice": "<p>A. Use AWS Server Migration Service (AWS SMS) and AWS Database Migration Service (AWS DMS) to evaluate migration. Use AWS Service Catalog to understand application and database dependencies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Application Migration Service. Run agents on the on-premises infrastructure. Manage the agents by using AWS Migration Hub. Use AWS Storage Gateway to assess local storage needs and database dependencies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Migration Evaluator to generate a list of servers. Build a report for a business case. Use AWS Migration Hub to view the portfolio. Use AWS Application Discovery Service to gain an understanding of application dependencies.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Control Tower in the destination account to generate an application portfolio. Use AWS Server Migration Service (AWS SMS) to generate deeper reports and a business case. Use a landing zone for core accounts and resources.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#175",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs as a ReplicaSet of multiple pods in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster has nodes in multiple Availability Zones. The application generates many small files that must be accessible across all running instances of the application. The company needs to back up the files and retain the backups for 1 year.<br><br>Which solution will meet these requirements while providing the FASTEST storage performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Pods trong EKS nhiều AZ tạo nhiều file nhỏ cần truy cập chung.</li><li>Requirement: backup, giữ 1 năm, FASTEST storage performance.</li><li>Ưu tiên: shared file storage đa AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EFS</strong> là shared file system đa AZ, hiệu năng tốt cho nhiều file nhỏ và tích hợp EKS. <strong>AWS Backup</strong> quản lý backup với retention 1 năm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EFS shared đa AZ + AWS Backup 1 năm.</li><li><strong>B</strong>: ❌ Sai — EBS Multi-Attach chỉ trong một AZ và chỉ dùng được với io1/io2 cho instance, không phù hợp pods đa AZ.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — S3 có latency cao hơn cho file nhỏ, không phải storage nhanh nhất.</li><li><strong>D</strong>: ❌ Sai — storage cục bộ trên pod không chia sẻ được và mất khi pod bị xóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Amazon EFS, mount target, AWS Backup, shared storage, multi-AZ</p><p><strong>🧠 MẸO THI</strong></p><p>\"Pods đa AZ cần chia sẻ file → EFS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#175",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file system and a mount target for each subnet that contains nodes in the EKS cluster. Configure the ReplicaSet to mount the file system. Direct the application to store files in the file system. Configure AWS Backup to back up and retain copies of the data for 1 year.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Elastic Block Store (Amazon EBS) volume. Enable the EBS Multi-Attach feature. Configure the ReplicaSet to mount the EBS volume. Direct the application to store files in the EBS volume. Configure AWS Backup to back up and retain copies of the data for 1 year.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket. Configure the ReplicaSet to mount the S3 bucket. Direct the application to store files in the S3 bucket. Configure S3 Versioning to retain copies of the data. Configure an S3 Lifecycle policy to delete objects after 1 year.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the ReplicaSet to use the storage available on each of the running application pods to store the files locally. Use a third-party tool to back up the EKS cluster for 1 year.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#176",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a customer service center that accepts calls and automatically sends all customers a managed, interactive, two-way experience survey by text message. The applications that support the customer service center run on machines that the company hosts in an on-premises data center. The hardware that the company uses is old, and the company is experiencing downtime with the system. The company wants to migrate the system to AWS to improve reliability.<br><br>Which solution will meet these requirements with the LEAST ongoing operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thay hardware call center cũ và gửi survey SMS hai chiều, tương tác, cho khách hàng.</li><li>Requirement chính: managed service, tăng reliability.</li><li>Ưu tiên: LEAST ongoing operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Connect là cloud contact center fully managed thay thế phần cứng cũ. Amazon Pinpoint hỗ trợ SMS two-way, interactive, managed nên gửi survey không cần tự vận hành.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Connect + Pinpoint đều managed, Pinpoint có two-way SMS.</li><li><strong>B</strong>: ❌ Sai — SNS chỉ gửi SMS một chiều, không có trải nghiệm survey tương tác hai chiều.</li><li><strong>C</strong>: ❌ Sai — Tự vận hành software trên EC2, overhead cao nhất.</li><li><strong>D</strong>: ❌ Sai — Pinpoint không phải contact center, không nhận cuộc gọi thay hardware.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Connect = cloud call center</li><li>Pinpoint = two-way SMS, interactive</li><li>SNS = one-way</li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Call center trên cloud → Amazon Connect; SMS two-way/survey → Pinpoint, không phải SNS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#176",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Connect to replace the old call center hardware. Use Amazon Pinpoint to send text message surveys to customers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Connect to replace the old call center hardware. Use Amazon Simple Notification Service (Amazon SNS) to send text message surveys to customers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the call center software to Amazon EC2 instances that are in an Auto Scaling group. Use the EC2 instances to send text message surveys to customers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Pinpoint to replace the old call center hardware and to send text message surveys to customers.</p>",
              "correct": false,
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
      "question_id": "#178",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on AWS. The company curates data from several different sources. The company uses proprietary algorithms to perform data transformations and aggregations. After the company performs ETL processes, the company stores the results in Amazon Redshift tables. The company sells this data to other companies. The company downloads the data as files from the Amazon Redshift tables and transmits the files to several data customers by using FTP. The number of data customers has grown significantly. Management of the data customers has become difficult.<br><br>The company will use AWS Data Exchange to create a data product that the company can use to share data with customers. The company wants to confirm the identities of the customers before the company shares data. The customers also need access to the most recent data when the company publishes the data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chia sẻ dữ liệu Amazon Redshift cho nhiều customers qua AWS Data Exchange.</li><li>Cần xác minh danh tính customer và customer luôn có dữ liệu mới nhất.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Data Exchange datashare cho Amazon Redshift cho phép subscriber truy cập trực tiếp dữ liệu live, luôn cập nhật khi publisher thay đổi. Subscription verification xác nhận identity customer trước khi cấp quyền.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Data Exchange for APIs + API Gateway cần tự xây và vận hành API layer.</li><li><strong>B</strong>: ✅ Đúng — Redshift datashare, dữ liệu luôn mới, ít việc vận hành nhất, có subscription verification.</li><li><strong>C</strong>: ❌ Sai — Phải export định kỳ ra S3, tăng công việc, dữ liệu không luôn mới nhất.</li><li><strong>D</strong>: ❌ Sai — Open Data là dữ liệu công khai, không xác minh customer; resource-based policy trên Redshift tables không tồn tại.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Data Exchange datashare for Amazon Redshift</li><li>Subscription verification</li><li>Live/most recent data</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chia sẻ dữ liệu Redshift qua Data Exchange, cần data mới nhất → datashare.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#178",
          "answers": [
            {
              "choice": "<p>A. Use AWS Data Exchange for APIs to share data with customers. Configure subscription verification. In the AWS account of the company that produces the data, create an Amazon API Gateway Data API service integration with Amazon Redshift. Require the data customers to subscribe to the data product.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the AWS account of the company that produces the data, create an AWS Data Exchange datashare by connecting AWS Data Exchange to the Redshift cluster. Configure subscription verification. Require the data customers to subscribe to the data product.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Download the data from the Amazon Redshift tables to an Amazon S3 bucket periodically. Use AWS Data Exchange for S3 to share data with customers. Configure subscription verification. Require the data customers to subscribe to the data product.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish the Amazon Redshift data to an Open Data on AWS Data Exchange. Require the customers to subscribe to the data product in AWS Data Exchange. In the AWS account of the company that produces the data, attach IAM resource-based policies to the Amazon Redshift tables to allow access only to verified AWS accounts.</p>",
              "correct": false,
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
      "question_id": "#182",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application to AWS. It wants to use fully managed services as much as possible during the migration. The company needs to store large important documents within the application with the following requirements:<br><br>1. The data must be highly durable and available<br>2. The data must always be encrypted at rest and in transit<br>3. The encryption key must be managed by the company and rotated periodically<br><br>Which of the following solutions should the solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lưu tài liệu lớn, quan trọng bằng fully managed service.</li><li>Cần durable, highly available, encrypt at rest và in transit, key do công ty quản lý và rotate định kỳ.</li><li>Ưu tiên: managed, bảo mật.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon S3 (11 nines durability) kết hợp bucket policy bắt buộc HTTPS (`aws:SecureTransport`) và SSE-KMS dùng customer managed key có rotation.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — File gateway cần vận hành thêm; không phải lưu trữ chính fully managed, EBS encrypt không phải giải pháp cho tài liệu lớn.</li><li><strong>B</strong>: ✅ Đúng — S3 durable, HTTPS enforce, SSE-KMS key rotation.</li><li><strong>C</strong>: ❌ Sai — DynamoDB không phù hợp lưu tài liệu lớn (giới hạn item 400 KB).</li><li><strong>D</strong>: ❌ Sai — EC2 + EBS không fully managed, durability và availability kém hơn S3.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 + SSE-KMS</li><li>`aws:SecureTransport`</li><li>Customer managed key, rotation</li><li>Fully managed</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Tài liệu lớn, durable, encrypt, key rotation → S3 + SSE-KMS + bucket policy ép HTTPS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#182",
          "answers": [
            {
              "choice": "<p>A. Deploy the storage gateway to AWS in file gateway mode. Use Amazon EBS volume encryption using an AWS KMS key to encrypt the storage gateway volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon S3 with a bucket policy to enforce HTTPS for connections to the bucket and to enforce server-side encryption and AWS KMS for object encryption.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon DynamoDB with SSL to connect to DynamoDB. Use an AWS KMS key to encrypt DynamoDB objects at rest.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy instances with Amazon EBS volumes attached to store this data. Use EBS volume encryption using an AWS KMS key to encrypt the data.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#183",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s public API runs as tasks on Amazon Elastic Container Service (Amazon ECS). The tasks run on AWS Fargate behind an Application Load Balancer (ALB) and are configured with Service Auto Scaling for the tasks based on CPU utilization. This service has been running well for several months.<br><br>Recently, API performance slowed down and made the application unusable. The company discovered that a significant number of SQL injection attacks had occurred against the API and that the API service had scaled to its maximum amount.<br><br>A solutions architect needs to implement a solution that prevents SQL injection attacks from reaching the ECS API service. The solution must allow legitimate traffic through and must maximize operational efficiency.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API chạy ECS Fargate sau ALB bị tấn công SQL injection làm scale tới tối đa.</li><li>Cần chặn SQL injection nhưng vẫn cho legitimate traffic qua.</li><li>Ưu tiên: maximize operational efficiency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS WAF web ACL gắn vào ALB với AWS Managed Rules SQL database rule group chặn SQL injection ngay tại biên, không cần bảo trì, các request còn lại được allow.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Chỉ monitor (count), không chặn.</li><li><strong>B</strong>: ❌ Sai — Bot Control nhắm vào bot, không phải SQL injection.</li><li><strong>C</strong>: ✅ Đúng — Block bằng managed SQL database rule group, default allow, gắn ALB.</li><li><strong>D</strong>: ❌ Sai — Lambda scrape logs để cập nhật IP set là thủ công, phản ứng chậm, tốn vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF managed rule group (SQL database)</li><li>Block action, web ACL attached to ALB</li><li>Operational efficiency</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"SQL injection / XSS → AWS WAF managed rule group, đặt action Block.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#183",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS WAF web ACL to monitor the HTTP requests and HTTPS requests that are forwarded to the ALB in front of the ECS tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS WAF Bot Control implementation. Add a rule in the AWS WAF Bot Control managed rule group to monitor traffic and allow only legitimate traffic to the ALB in front of the ECS tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS WAF web ACL. Add a new rule that blocks requests that match the SQL database rule group. Set the web ACL to allow all other traffic that does not match those rules. Attach the web ACL to the ALB in front of the ECS tasks.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS WAF web ACL. Create a new empty IP set in AWS WAF. Add a new rule to the web ACL to block requests that originate from IP addresses in the new IP set. Create an AWS Lambda function that scrapes the API logs for IP addresses that send SQL injection attacks, and add those IP addresses to the IP set. Attach the web ACL to the ALB in front of the ECS tasks.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#184",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An environmental company is deploying sensors in major cities throughout a country to measure air quality. The sensors connect to AWS IoT Core to ingest timeseries data readings. The company stores the data in Amazon DynamoDB.<br><br>For business continuity, the company must have the ability to ingest and store data in two AWS Regions.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Sensors gửi dữ liệu vào AWS IoT Core, lưu vào DynamoDB, cần ingest và lưu ở hai Region.</li><li>Ưu tiên: business continuity, failover.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng domain configuration (custom domain) cho IoT Core mỗi Region, Route 53 health check + failover routing để chuyển thiết bị sang Region còn sống. DynamoDB global table đồng bộ dữ liệu hai Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Aurora global tables không tồn tại (là Aurora Global Database), và chuyển khỏi DynamoDB không cần thiết.</li><li><strong>B</strong>: ❌ Sai — MemoryDB không phù hợp lưu time-series bền vững cho trường hợp này.</li><li><strong>C</strong>: ✅ Đúng — Domain configuration + health check + failover + DynamoDB global table.</li><li><strong>D</strong>: ❌ Sai — Dùng trực tiếp endpoint mặc định IoT Core không dùng được cho routing; DynamoDB streams tự replicate thủ công phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IoT Core domain configuration</li><li>Route 53 failover + health check</li><li>DynamoDB global table</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"IoT Core multi-Region → custom domain + Route 53 failover; DynamoDB đa Region → global table.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#184",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Route 53 alias failover routing policy with values for AWS IoT Core data endpoints in both Regions Migrate data to Amazon Aurora global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Migrate the data to Amazon MemoryDB for Redis and configure cross-Region replication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 health check that evaluates domain configuration health. Create a failover routing policy with values for the domain name from the AWS IoT Core domain configurations. Update the DynamoDB table to a global table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Configure DynamoDB streams and cross-Region data replication.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#185",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company's finance team has a data processing application that uses AWS Lambda and Amazon DynamoDB. The company's marketing team wants to access the data that is stored in the DynamoDB table.<br><br>The DynamoDB table contains confidential data. The marketing team can have access to only specific attributes of data in the DynamoDB table. The finance team and the marketing team have separate AWS accounts.<br><br>What should a solutions architect do to provide the marketing team with the appropriate access to the DynamoDB table?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cấp quyền cross-account cho marketing team vào DynamoDB của finance team.</li><li>Chỉ được truy cập một số attributes cụ thể.</li><li>Ưu tiên: bảo mật, least privilege.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo IAM role ở account finance với fine-grained access control (`dynamodb:Attributes` condition), trust account marketing. Marketing role assume role này (cross-account AssumeRole).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP chỉ giới hạn tối đa quyền, không cấp quyền.</li><li><strong>B</strong>: ✅ Đúng — Cross-account role + IAM condition theo attribute.</li><li><strong>C</strong>: ❌ Sai — DynamoDB lúc đó không hỗ trợ resource-based policy cho yêu cầu này theo cách đề mô tả.</li><li><strong>D</strong>: ❌ Sai — Permissions boundary là mức tối đa, không phải cách chuẩn giới hạn theo attribute.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Fine-grained access control</li><li>`dynamodb:Attributes`</li><li>Cross-account AssumeRole</li><li>SCP không cấp quyền</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Giới hạn attribute DynamoDB cross-account → IAM role với condition `dynamodb:Attributes` + AssumeRole.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#185",
          "answers": [
            {
              "choice": "<p>A. Create an SCP to grant the marketing team's AWS account access to the specific attributes of the DynamoDB table. Attach the SCP to the OU of the finance team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role in the finance team's account by using IAM policy conditions for specific DynamoDB attributes (fine-grained access control). Establish trust with the marketing team's account. In the marketing team's account, create an IAM role that has permissions to assume the IAM role in the finance team's account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a resource-based IAM policy that includes conditions for specific DynamoDB attributes (fine-grained access control). Attach the policy to the DynamoDB table. In the marketing team's account, create an IAM role that has permissions to access the DynamoDB table in the finance team's account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in the finance team's account to access the DynamoDB table. Use an IAM permissions boundary to limit the access to the specific attributes. In the marketing team's account, create an IAM role that has permissions to assume the IAM role in the finance team's account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#186",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating an application that stores objects in an Amazon S3 bucket. The solutions architect must deploy the application in two AWS Regions that will be used simultaneously. The objects in the two S3 buckets must remain synchronized with each other.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng chạy đồng thời ở hai Region, hai S3 bucket phải đồng bộ.</li><li>Ưu tiên: LEAST operational overhead. Chọn 3 bước.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Multi-Region Access Point cung cấp một endpoint duy nhất tự route tới bucket gần nhất. Two-way CRR giữ hai bucket đồng bộ, và CRR yêu cầu S3 Versioning bật ở cả hai bucket.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Multi-Region Access Point, app dùng một endpoint.</li><li><strong>B</strong>: ✅ Đúng — Two-way CRR đồng bộ hai chiều, managed.</li><li><strong>C</strong>: ❌ Sai — App tự ghi vào từng bucket, tăng độ phức tạp, không đồng bộ tự động.</li><li><strong>D</strong>: ❌ Sai — Lifecycle rule không copy object sang bucket khác.</li><li><strong>E</strong>: ✅ Đúng — Versioning là điều kiện bắt buộc của replication.</li><li><strong>F</strong>: ❌ Sai — Lambda copy tự xây, tốn vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Multi-Region Access Point</li><li>Cross-Region Replication (bidirectional)</li><li>S3 Versioning bắt buộc</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"S3 đa Region đồng bộ → CRR hai chiều + Versioning + Multi-Region Access Point.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#186",
          "answers": [
            {
              "choice": "<p>A. Create an S3 Multi-Region Access Point Change the application to refer to the Multi-Region Access Point</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure two-way S3 Cross-Region Replication (CRR) between the two S3 buckets</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the application to store objects in each S3 bucket</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 Lifecycle rule for each S3 bucket to copy objects from one S3 bucket to the other S3 bucket</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable S3 Versioning for each S3 bucket</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure an event notification for each S3 bucket to invoke an AWS Lambda function to copy objects from one S3 bucket to the other S3 bucket</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#187",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an IoT platform that runs in an on-premises environment. The platform consists of a server that connects to IoT devices by using the MQTT protocol. The platform collects telemetry data from the devices at least once every 5 minutes. The platform also stores device metadata in a MongoDB cluster.<br><br>An application that is installed on an on-premises machine runs periodic jobs to aggregate and transform the telemetry and device metadata. The application creates reports that users view by using another web application that runs on the same on-premises machine. The periodic jobs take 120-600 seconds to run. However, the web application is always running.<br><br>The company is moving the platform to AWS and must reduce the operational overhead of the stack.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển nền tảng IoT (MQTT, MongoDB, jobs báo cáo 120-600 giây, web xem báo cáo) lên AWS.</li><li>Ưu tiên: LEAST operational overhead. Chọn 3 bước.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS IoT Core là managed MQTT broker. Amazon DocumentDB tương thích MongoDB, managed. Step Functions + Lambda chạy jobs (dưới 15 phút), ghi report ra S3, phục vụ qua CloudFront nên serverless hoàn toàn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda không kết nối chủ động tới devices qua MQTT; không phải cách làm.</li><li><strong>B</strong>: ✅ Đúng — IoT Core managed MQTT.</li><li><strong>C</strong>: ❌ Sai — Self-managed MongoDB trên EC2, overhead cao.</li><li><strong>D</strong>: ✅ Đúng — DocumentDB managed, tương thích MongoDB.</li><li><strong>E</strong>: ✅ Đúng — Serverless reports, S3 + CloudFront phục vụ tĩnh.</li><li><strong>F</strong>: ❌ Sai — EKS trên EC2 vận hành nặng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS IoT Core (MQTT)</li><li>Amazon DocumentDB</li><li>Step Functions + Lambda</li><li>S3 + CloudFront</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"MQTT → IoT Core; MongoDB → DocumentDB; job ngắn dưới 15 phút → Lambda/Step Functions.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#187",
          "answers": [
            {
              "choice": "<p>A. Use AWS Lambda functions to connect to the IoT devices</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the IoT devices to publish to AWS IoT Core</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write the metadata to a self-managed MongoDB database on an Amazon EC2 instance</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write the metadata to Amazon DocumentDB (with MongoDB compatibility)</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Step Functions state machines with AWS Lambda tasks to prepare the reports and to write the reports to Amazon S3. Use Amazon CloudFront with an S3 origin to serve the reports</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with Amazon EC2 instances to prepare the reports. Use an ingress controller in the EKS cluster to serve the reports</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global manufacturing company plans to migrate the majority of its applications to AWS. However, the company is concerned about applications that need to remain within a specific country or in the company's central on-premises data center because of data regulatory requirements or requirements for latency of single-digit milliseconds. The company also is concerned about the applications that it hosts in some of its factory sites, where limited network infrastructure exists.<br><br>The company wants a consistent developer experience so that its developers can build applications once and deploy on premises, in the cloud, or in a hybrid architecture. The developers must be able to use the same tools, APIs, and services that are familiar to them.<br><br>Which solution will provide a consistent hybrid experience to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Một số app phải ở on-premises/trong nước vì regulation hoặc latency single-digit ms, một số ở factory ít hạ tầng mạng.</li><li>Cần trải nghiệm developer nhất quán: cùng tools, APIs, services.</li><li>Ưu tiên: consistent hybrid experience.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Outposts mang hạ tầng và API AWS về on-premises (latency thấp, data residency). Snowball Edge Compute Optimized chạy workload ở nơi mạng hạn chế, kết nối gián đoạn như factory.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Vẫn trên Region, không đáp ứng latency single-digit ms hay factory.</li><li><strong>B</strong>: ❌ Sai — Snowball Edge Storage Optimized thiên về storage; Wavelength dành cho 5G edge của carrier.</li><li><strong>C</strong>: ✅ Đúng — Outposts cho on-premises, Snowball Edge Compute Optimized cho factory.</li><li><strong>D</strong>: ❌ Sai — Local Zone và Wavelength vẫn là hạ tầng AWS, không nằm trong data center công ty/factory.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Outposts</li><li>Snowball Edge Compute Optimized</li><li>Consistent hybrid experience</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Cùng API AWS tại on-premises → Outposts; edge mạng yếu → Snowball Edge.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#188",
          "answers": [
            {
              "choice": "<p>A. Migrate all applications to the closest AWS Region that is compliant. Set up an AWS Direct Connect connection between the central on-premises data center and AWS. Deploy a Direct Connect gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Snowball Edge Storage Optimized devices for the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds. Retain the devices on premises. Deploy AWS Wavelength to host the workloads in the factory sites.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install AWS Outposts for the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds. Use AWS Snowball Edge Compute Optimized devices to host the workloads in the factory sites.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds to an AWS Local Zone. Deploy AWS Wavelength to host the workloads in the factory sites.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#189",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is updating an application that customers use to make online orders. The number of attacks on the application by bad actors has increased recently.<br><br>The company will host the updated application on an Amazon Elastic Container Service (Amazon ECS) cluster. The company will use Amazon DynamoDB to store application data. A public Application Load Balancer (ALB) will provide end users with access to the application. The company must prevent attacks and ensure business continuity with minimal service interruptions during an ongoing attack.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng đặt hàng online trên ECS + DynamoDB, ALB public, bị tấn công nhiều.</li><li>Cần chặn tấn công và giữ business continuity.</li><li>Ưu tiên: MOST cost-effectively. Chọn 2.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFront đặt trước ALB (ALB chỉ nhận traffic có custom header) hấp thụ DDoS ở edge. AWS WAF gắn vào CloudFront chặn request độc hại bằng rule group.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CloudFront che ALB, ép truy cập qua CloudFront.</li><li><strong>B</strong>: ❌ Sai — Multi-Region tốn kém, không ngăn tấn công.</li><li><strong>C</strong>: ❌ Sai — Scaling + DAX tốn chi phí, không chặn attack.</li><li><strong>D</strong>: ❌ Sai — ElastiCache giảm tải DB, không chặn tấn công.</li><li><strong>E</strong>: ✅ Đúng — WAF web ACL trên CloudFront chặn attack, hiệu quả chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront + custom header cho ALB</li><li>AWS WAF web ACL</li><li>Cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Chống tấn công web, tiết kiệm → CloudFront + AWS WAF, không scale ngang vô tội vạ.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#189",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution with the ALB as the origin. Add a custom header and random value on the CloudFront domain. Configure the ALB to conditionally forward traffic if the header and value match.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application in two AWS Regions. Configure Amazon Route 53 to route to both Regions with equal weight.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure auto scaling for Amazon ECS tasks Create a DynamoDB Accelerator (DAX) cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon ElastiCache to reduce overhead on DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy an AWS WAF web ACL that includes an appropriate rule group. Associate the web ACL with the Amazon CloudFront distribution.</p>",
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
      "question_id": "#191",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an application to AWS. The application runs as a Docker container and uses an NFS version 4 file share.<br><br>A solutions architect must design a secure and scalable containerized solution that does not require provisioning or management of the underlying infrastructure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Docker container dùng NFS v4, cần giải pháp secure, scalable, không phải quản lý hạ tầng.</li><li>Ưu tiên: serverless containers + shared NFS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ECS Fargate không cần quản lý server. Amazon EFS là NFS v4 managed, mount trực tiếp vào Fargate task qua task definition (file system ID, mount point, IAM authorization).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Fargate + EFS (NFSv4), serverless.</li><li><strong>B</strong>: ❌ Sai — FSx for Lustre không phải NFS v4 chung và không hỗ trợ Fargate.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — EC2 launch type phải quản lý instances.</li><li><strong>D</strong>: ❌ Sai — EBS Multi-Attach không phải NFS, vẫn dùng EC2.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ECS Fargate</li><li>Amazon EFS = NFSv4</li><li>No infrastructure management</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Container + NFS + không quản lý server → Fargate + EFS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#191",
          "answers": [
            {
              "choice": "<p>A. Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type. Use Amazon Elastic File System (Amazon EFS) for shared storage. Reference the EFS file system ID, container mount point, and EFS authorization IAM role in the ECS task definition.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type. Use Amazon FSx for Lustre for shared storage. Reference the FSx for Lustre file system ID, container mount point, and FSx for Lustre authorization IAM role in the ECS task definition.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type and auto scaling turned on. Use Amazon Elastic File System (Amazon EFS) for shared storage. Mount the EFS file system on the ECS container instances. Add the EFS authorization IAM role to the EC2 instance profile.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type and auto scaling turned on. Use Amazon Elastic Block Store (Amazon EBS) volumes with Multi-Attach enabled for shared storage. Attach the EBS volumes to ECS container instances. Add the EBS authorization IAM role to an EC2 instance profile.</p>",
              "correct": false,
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
      "question_id": "#198",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a hybrid environment that includes servers in an on-premises data center and in the AWS Cloud. The company has deployed Amazon EC2 instances in three VPCs. Each VPC is in a different AWS Region. The company has established an AWS Direct. Connect connection to the data center from the Region that is closest to the data center.<br><br>The company needs the servers in the on-premises data center to have access to the EC2 instances in all three VPCs. The servers in the on-premises data center also must have access to AWS public services.<br><br>Which combination of steps will meet these requirements with the LEAST cost? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>On-premises cần truy cập EC2 ở 3 VPC (3 Region) và AWS public services, chỉ có một Direct Connect ở Region gần nhất.</li><li>Ưu tiên: LEAST cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Direct Connect gateway cho phép một connection truy cập VPC ở nhiều Region. Public VIF cho phép truy cập AWS public services và là đường để dựng Site-to-Site VPN tới các VPC Region khác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Direct Connect gateway kết nối VPC nhiều Region qua một connection.</li><li><strong>B</strong>: ❌ Sai — Thêm Direct Connect rất tốn chi phí.</li><li><strong>C</strong>: ❌ Sai — Site-to-Site VPN không chạy qua private VIF.</li><li><strong>D</strong>: ✅ Đúng — Public VIF cho public services và VPN over public VIF.</li><li><strong>E</strong>: ❌ Sai — Peering cross-Region không transitive tới on-premises qua private VIF.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Direct Connect gateway</li><li>Public VIF</li><li>VPN over public VIF</li><li>LEAST cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Một DX tới nhiều Region → Direct Connect gateway; public services → public VIF.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#198",
          "answers": [
            {
              "choice": "<p>A. Create a Direct Connect gateway in the Region that is closest to the data center. Attach the Direct Connect connection to the Direct Connect gateway. Use the Direct Connect gateway to connect the VPCs in the other two Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up additional Direct Connect connections from the on-premises data center to the other two Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a private VIF. Establish an AWS Site-to-Site VPN connection over the private VIF to the VPCs in the other two Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a public VIF. Establish an AWS Site-to-Site VPN connection over the public VIF to the VPCs in the other two Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use VPC peering to establish a connection between the VPCs across the Regions Create a private VIF with the existing Direct Connect connection to connect to the peered VPCs.</p>",
              "correct": false,
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
    }
  ]
};
