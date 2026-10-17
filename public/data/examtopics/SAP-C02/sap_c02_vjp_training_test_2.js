var SAP_C02_VJP_Training_Test_2 = 
{
  "msg": "Quiz Questions",
  "data": [
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
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.<br>The company’s infrastructure team has a dedicated infrastructure account that has a VPC. The infrastructure team must use this account to manage the network. Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets.<br>Which combination of actions should the solutions architect perform to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chia sẻ một VPC chung từ infrastructure account cho nhiều account.</li><li>Requirement chính: chỉ infrastructure account quản lý network, account khác tạo resource trong subnet.</li><li>Ưu tiên: VPC sharing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>VPC sharing dùng AWS RAM: bật resource sharing với Organizations rồi chia sẻ các subnet cho OU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Transit gateway kết nối mạng, không cho account khác tạo resource trong subnet dùng chung.</li><li><strong>B</strong>: ✅ Đúng — Bật sharing với AWS Organizations (điều kiện của RAM).</li><li><strong>C</strong>: ❌ Sai — Mỗi account có VPC riêng tự quản lý, trái yêu cầu.</li><li><strong>D</strong>: ✅ Đúng — Resource share trong RAM, chọn OU và subnet.</li><li><strong>E</strong>: ❌ Sai — Prefix list không chia sẻ subnet.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC sharing, AWS RAM, subnet, Organizations</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"nhiều account dùng chung subnet của một VPC\" → nghĩ ngay đến AWS RAM (VPC sharing).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway in the infrastructure account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable resource sharing from the AWS Organizations management account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.</p>",
              "correct": false,
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
      "question_id": "#52",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br><br>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br><br>A solutions architect must configure the application so that itis highly available and fault tolerant.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Làm kiến trúc CloudFront + ALB + ASG trở nên highly available và fault tolerant (chịu được lỗi cả Region).</li><li>Requirement chính: failover tự động ở tầng origin.</li><li>Ưu tiên: availability với thay đổi tối thiểu.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFront hỗ trợ <strong>origin group</strong> với primary và secondary origin; khi primary trả lỗi (5xx), CloudFront tự chuyển sang origin dự phòng ở Region khác. Chỉ cần dựng thêm ALB + ASG + EC2 ở Region thứ hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cần hai CloudFront distribution và Route 53 failover alias trỏ tới CloudFront; không cần thiết và phức tạp, cách làm không chuẩn.</li><li><strong>B</strong>: ✅ Đúng — CloudFront origin group (primary/secondary) giữa hai ALB ở hai Region.</li><li><strong>C</strong>: ❌ Sai — ALB là dịch vụ regional, không có \"failover routing algorithm\" và không có target liên Region.</li><li><strong>D</strong>: ❌ Sai — Global Accelerator không dùng CloudFront distribution làm endpoint.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFront origin group, primary/secondary origin, multi-Region failover, ALB là regional.</p><p><strong>🧠 MẸO THI</strong></p><p>\"CloudFront + cần HA cho origin\" → nghĩ ngay đến origin group.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALCreate an origin group for the two origins. Configure one origin as primary and one origin as secondary.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB. Set up the failover routing algorithm on the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.</p>",
              "correct": false,
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
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site-to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.<br><br>A solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.<br><br>What is the MOST cost-effective solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: nhân viên làm việc từ xa cần truy cập ứng dụng trong nhiều VPC qua AWS Client VPN.</li><li>Requirement chính: scalable, MOST cost-effective.</li><li>Ưu tiên: dùng kết nối sẵn có (peering) thay vì thêm thành phần.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một Client VPN endpoint trong main account, định tuyến qua các peering connection sẵn có tới VPC khác là rẻ nhất, không cần thêm hạ tầng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — nhiều endpoint mỗi account tốn phí hơn.</li><li><strong>B</strong>: ✅ Đúng — một endpoint + định tuyến qua peering sẵn có.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — thêm Transit Gateway tốn chi phí không cần thiết khi đã có peering.</li><li><strong>D</strong>: ❌ Sai — Client VPN không kết nối trực tiếp tới Site-to-Site VPN như vậy.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Client VPN endpoint</li><li>VPC peering sẵn có</li><li>MOST cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Client VPN + đã có peering → nghĩ ngay đến một endpoint ở main account, không thêm Transit Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Client VPN endpoint in the main AWS account. Provision a transit gateway that is connected to each AWS account. Configure required routing that allows access to internal applications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Client VPN endpoint in the main AWS account. Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has VPC flow logs enabled for Its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address 198.51.100.2 destined for a private Amazon EC2 instance.<br><br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br><br>Which set of steps should the solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xác định traffic từ 198.51.100.2 có phải kết nối inbound không được yêu cầu từ internet hay không.</li><li>Requirement chính: query VPC flow logs để xem hướng traffic.</li><li>Ưu tiên: dùng đúng service (CloudWatch Logs Insights) và đúng source/destination.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>VPC flow logs nằm trong CloudWatch Logs; query Logs Insights với source là 198.51.100.2 và destination là dải VPC 203.0 để xem inbound, rồi stats tổng bytes.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudTrail ghi API call, không phải flow logs.</li><li><strong>B</strong>: ✅ Đúng — CloudWatch Logs Insights, source 198.51.100.2 → destination 203.0.</li><li><strong>C</strong>: ❌ Sai — dùng CloudTrail và đảo source/destination.</li><li><strong>D</strong>: ❌ Sai — đảo source/destination (đó là traffic đáp lại, không phải inbound).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>VPC Flow Logs</li><li>CloudWatch Logs Insights</li><li>Source / destination address</li><li>CloudTrail = API calls</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phân tích flow logs → nghĩ ngay đến CloudWatch Logs Insights, không phải CloudTrail.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>A. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interlace. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance’s elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store files and images in a variety of storage classes. The company's S3 costs have increased substantially during the past year.<br><br>A solutions architect needs to review data trends for the past 12 months and identity the appropriate storage class for the objects.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xem xu hướng dữ liệu S3 12 tháng qua và chọn storage class phù hợp.</li><li>Requirement chính: trend 12 tháng, khuyến nghị storage class.</li><li>Ưu tiên: insight tổ chức (organization-wide) với ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 Storage Lens với advanced metrics cung cấp dữ liệu usage/activity trong 15 tháng, đủ để phân tích xu hướng và chọn storage class.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CUR và Trusted Advisor không cho insight về access pattern theo object.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — storage class analysis chỉ theo bucket/prefix, dữ liệu cần thời gian dài để quan sát, ít trend tổng thể.</li><li><strong>C</strong>: ✅ Đúng — Storage Lens advanced metrics lưu trữ 15 tháng.</li><li><strong>D</strong>: ❌ Sai — Access Analyzer for S3 dùng cho quyền truy cập (security), không phải chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Storage Lens</li><li>Advanced metrics</li><li>15 months data</li><li>Storage trends</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp trend và tối ưu storage S3 toàn account/org → nghĩ ngay đến S3 Storage Lens.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>A. Download AWS Cost and Usage Reports for the last 12 months of S3 usage. Review AWS Trusted Advisor recommendations for cost savings.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use S3 storage class analysis. Import data trends into an Amazon QuickSight dashboard to analyze storage trends.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 Storage Lens. Upgrade the default dashboard to include advanced metrics for storage trends.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Access Analyzer for S3. Download the Access Analyzer for S3 report for the last 12 months. Import the .csv file to an Amazon QuickSight dashboard.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin. The web application communicates with Amazon API Gateway Regional endpoints. The API Gateway APIs call AWS Lambda functions that store metadata in an Amazon Aurora Serverless database and put the documents into an S3 bucket.<br>The company is growing steadily and has completed a proof of concept with its largest customer. The company must improve latency outside of Europe.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: hệ thống serverless đặt ở eu-central-1, người dùng ngoài châu Âu bị latency.</li><li>Requirement chính: cải thiện latency ngoài Europe với thay đổi tối thiểu.</li><li>Ưu tiên: latency cho upload tài liệu và gọi API.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 Transfer Acceleration tăng tốc upload qua edge location; edge-optimized API Gateway endpoint đưa request vào mạng CloudFront gần người dùng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Transfer Acceleration tăng tốc upload tài liệu từ xa.</li><li><strong>B</strong>: ❌ Sai — Global Accelerator không attach được vào CloudFront (CloudFront đã có edge network).</li><li><strong>C</strong>: ✅ Đúng — edge-optimized endpoint giảm latency cho client toàn cầu.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — nhân bản toàn stack phức tạp, chi phí cao, không \"tối thiểu\".</li><li><strong>E</strong>: ❌ Sai — RDS Proxy cải thiện connection pooling, không giảm latency địa lý.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Transfer Acceleration</li><li>Edge-optimized API Gateway</li><li>Latency ngoài Region</li><li>CloudFront</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp upload từ xa + API Regional → nghĩ ngay đến S3 Transfer Acceleration và edge-optimized endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an accelerator in AWS Global Accelerator. Attach the accelerator to the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the API Gateway Regional endpoints to edge-optimized endpoints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision the entire stack in two other locations that are spread across the world. Use global databases on the Aurora Serverless cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#75",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing the data storage and retrieval architecture for a new application that a company will be launching soon. The application is designed to ingest millions of small records per minute from devices all around the world. Each record is less than 4 KB in size and needs to be stored in a durable location where it can be retrieved with low latency. The data is ephemeral and the company is required to store the data for 120 days only, after which the data can be deleted.<br><br>The solutions architect calculates that, during the course of a year, the storage requirements would be about 10-15 TB.<br><br>Which storage strategy is the MOST cost-effective and meets the design requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng triệu record nhỏ (&lt;4 KB) mỗi phút, lưu 120 ngày, truy xuất độ trễ thấp.</li><li>Requirement chính: durable, low latency, tự xóa sau 120 ngày.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB</strong> hợp với record nhỏ, scale lớn, độ trễ mili giây; <strong>TTL</strong> tự xóa dữ liệu sau 120 ngày không tốn WCU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — hàng triệu file CSV nhỏ trong S3 tốn request cost, không truy xuất theo index.</li><li><strong>B</strong>: ✅ Đúng — DynamoDB + TTL.</li><li><strong>C</strong>: ❌ Sai — RDS khó scale với hàng triệu ghi/phút và tốn kém hơn.</li><li><strong>D</strong>: ❌ Sai — S3 metadata search không tồn tại như vậy, truy xuất không low latency.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>DynamoDB, TTL, small records, low latency, 120 days.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Record nhỏ, scale lớn, tự hết hạn\" → DynamoDB + TTL.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>A. Design the application to store each incoming record as a single .csv file in an Amazon S3 bucket to allow for indexed retrieval. Configure a lifecycle policy to delete data older than 120 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to delete records older than 120 days.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Design the application to store each incoming record in a single table in an Amazon RDS MySQL database. Run a nightly cron job that runs a query to delete any records older than 120 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Design the application to batch incoming records before writing them to an Amazon S3 bucket. Update the metadata for the object to contain the list of records in the batch and use the Amazon S3 metadata search feature to retrieve the data. Configure a lifecycle policy to delete the data after 120 days.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several workloads in a single AWS account. A new company policy states that engineers can provision only approved resources and that engineers must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access.<br><br>What should the solutions architect do to create the solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Engineer chỉ được tạo resource đã duyệt và phải qua CloudFormation.</li><li>Requirement chính: ép dùng CloudFormation, giới hạn resource.</li><li>Ưu tiên: governance, least privilege.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Role của engineer chỉ có quyền CloudFormation; quyền tạo resource được gắn vào một <strong>CloudFormation service role</strong>. Engineer chỉ có thể tạo resource qua stack, không trực tiếp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chỉ cho S3 và CloudFormation vẫn không cho phép tạo resource; không có service role.</li><li><strong>B</strong>: ❌ Sai — engineer có quyền tạo resource trực tiếp, bỏ qua CloudFormation.</li><li><strong>C</strong>: ✅ Đúng — service role tách quyền, ép dùng CloudFormation.</li><li><strong>D</strong>: ❌ Sai — không giới hạn loại resource được duyệt.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFormation service role, least privilege, approved resources.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Ép dùng CloudFormation\" → service role + user chỉ có quyền CloudFormation.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>A. Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers’ IAM role to only allow access to Amazon S3 and AWS CloudFormation. Use AWS CloudFormation templates to provision resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the IAM policy for the engineers’ IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the IAM policy for the engineers’ IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources, and assign the policy to a new IAM service role. Assign the IAM service role to AWS CloudFormation during stack creation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision resources in AWS CloudFormation stacks. Update the IAM policy for the engineers’ IAM role to only allow access to their own AWS CloudFormation stack.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company’s IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.<br><br>The IT support workers no longer want to maintain both their Active Directory and IAM user accounts. They want to be able to access the console by using their existing Active Directory credentials. The solutions architect is using AWS IAM Identity Center (AWS Single Sign-On) to implement this functionality.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cho IT support đăng nhập console bằng AD on-premises qua IAM Identity Center.</li><li>Requirement chính: dùng AD hiện có làm identity source.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AD Connector</strong> chỉ là proxy tới AD on-premises, rẻ hơn <strong>AWS Managed Microsoft AD</strong>. IAM Identity Center cần Organizations với all features bật.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Managed Microsoft AD tốn kém hơn và cần trust; không bật all features.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — dùng AD Connector nhưng chỉ \"turn on\" tính năng Identity Center, thiếu all features (cần để dùng IAM Identity Center với Organizations).</li><li><strong>C</strong>: ❌ Sai — Managed Microsoft AD đắt hơn.</li><li><strong>D</strong>: ✅ Đúng — AD Connector + all features, rẻ nhất.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>IAM Identity Center, AD Connector, Organizations all features, permission sets.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Dùng AD on-prem, rẻ\" → AD Connector; \"cần AD trên AWS\" → Managed AD.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company’s on-premises Active Directory. Configure IAM Identity Center and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure an AD Connector to connect to the company’s on-premises Active Directory. Configure IAM Identity Center and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company’s Active Directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company’s on-premises Active Directory. Configure IAM Identity Center and select the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure an AD Connector to connect to the company’s on-premises Active Directory. Configure IAM Identity Center and set the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company’s Active Directory.</p>",
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
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Python script on an Amazon EC2 instance to process data. The script runs every 10 minutes. The script ingests files from an Amazon S3 bucket and processes the files. On average, the script takes approximately 5 minutes to process each file The script will not reprocess a file that the script has already processed.<br><br>The company reviewed Amazon CloudWatch metrics and noticed that the EC2 instance is idle for approximately 40% of the time because of the file processing speed. The company wants to make the workload highly available and scalable. The company also wants to reduce long-term management overhead.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Script chạy 10 phút/lần, mỗi file xử lý ~5 phút, EC2 idle 40%.</li><li>Requirement chính: HA, scalable, giảm vận hành.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Lambda</strong> + <strong>S3 event notification</strong> là serverless, tự scale, trả tiền theo lần chạy, không idle, xử lý 5 phút nằm trong giới hạn 15 phút.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — serverless, event-driven, rẻ nhất, ít vận hành.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — SQS + ASG vẫn có tối thiểu một EC2 chạy liên tục, phải quản lý.</li><li><strong>C</strong>: ❌ Sai — vẫn một EC2 và polling, không HA/scalable.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Fargate + Lambda trigger phức tạp và đắt hơn, không cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Lambda, S3 event notification, serverless, cost-effective.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Xử lý file &lt; 15 phút, event từ S3\" → Lambda.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>A. Migrate the data processing script to an AWS Lambda function. Use an S3 event notification to invoke the Lambda function to process the objects when the company uploads the objects.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure Amazon S3 to send event notifications to the SQS queue. Create an EC2 Auto Scaling group with a minimum size of one instance. Update the data processing script to poll the SQS queue. Process the S3 objects that the SQS message identifies.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the data processing script to a container image. Run the data processing container on an EC2 instance. Configure the container to poll the S3 bucket for new objects and to process the resulting objects.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the data processing script to a container image that runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Create an AWS Lambda function that calls the Fargate RunTaskAPI operation when the container processes the file. Use an S3 event notification to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to store a large number of archived documents and make the documents available to employees through the corporate intranet. Employees will access the system by connecting through a client VPN service that is attached to a VPC. The data must not be accessible to the public.<br>The documents that the company is storing are copies of data that is held on physical media elsewhere. The number of requests will be low. Availability and speed of retrieval are not concerns of the company.<br>Which solution will meet these requirements at the LOWEST cost?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: lưu trữ tài liệu archive, truy cập qua intranet/client VPN, không public.</li><li>Requirement chính: dữ liệu là bản sao, ít request, không cần availability/tốc độ cao.</li><li>Ưu tiên: LOWEST cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 One Zone-IA rẻ vì dữ liệu chỉ là bản sao, kết hợp interface endpoint và bucket policy để giới hạn truy cập private; không cần EC2.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 One Zone-IA + endpoint + bucket policy, rẻ và private.</li><li><strong>B</strong>: ❌ Sai — EC2 + EFS tốn kém hơn và phải vận hành.</li><li><strong>C</strong>: ❌ Sai — EC2 + EBS sc1 cần quản lý server, đắt hơn S3.</li><li><strong>D</strong>: ❌ Sai — Glacier Deep Archive không truy cập trực tiếp qua website hosting được (cần restore).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 One Zone-IA, interface endpoint, bucket policy, lowest cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"bản sao dữ liệu, ít truy cập, rẻ nhất\" → nghĩ ngay đến S3 One Zone-IA.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch an Amazon EC2 instance that runs a web server. Attach an Amazon Elastic File System (Amazon EFS) file system to store the archived data in the EFS One Zone-Infrequent Access (EFS One Zone-IA) storage class Configure the instance security groups to allow access only from private networks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an Amazon EC2 instance that runs a web server Attach an Amazon Elastic Block Store (Amazon EBS) volume to store the archived data. Use the Cold HDD (sc1) volume type. Configure the instance security groups to allow access only from private networks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 Glacier Deep Archive storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a monolithic application that is critical to the company’s business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company’s application team receives a directive from the legal department to back up the data from the instance’s encrypted Amazon Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket. The application team does not have the administrative SSH key pair for the instance. The application must continue to serve the users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backup dữ liệu từ EBS volume được mã hóa của EC2 sang S3 khi không có SSH key.</li><li>Requirement chính: truy cập instance không cần SSH key và không gây downtime.</li><li>Ưu tiên: ứng dụng tiếp tục phục vụ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Gắn IAM role có quyền S3 và AmazonSSMManagedInstanceCore (Amazon Linux 2 có sẵn SSM Agent), dùng <strong>Session Manager</strong> để truy cập không cần key rồi copy dữ liệu lên S3. Không reboot, không downtime.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Session Manager + IAM role, không cần SSH, không downtime.</li><li><strong>B</strong>: ❌ Sai — tạo image với reboot gây downtime; cũng vẫn không có cách truy cập.</li><li><strong>C</strong>: ❌ Sai — snapshot không thể copy trực tiếp sang S3 dưới dạng file bằng DLM.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — vẫn thiếu cách truy cập instance mới, phức tạp hơn A.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Session Manager, no SSH key, IAM instance role, SSM Agent, no downtime.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Không có SSH key mà cần vào instance\" → nghĩ ngay đến Systems Manager Session Manager.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an image of the instance. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s factory and automation applications are running in a single VPC. More than 20 applications run on a combination of Amazon EC2, Amazon Elastic Container Service (Amazon ECS), and Amazon RDS.<br><br>The company has software engineers spread across three teams. One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications. Team resources have tags that represent their application and team. The teams use IAM access for daily activities.<br><br>The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports.<br><br>Which combination of actions will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quy chi phí hóa đơn về từng application/team, so sánh 12 tháng qua và dự báo 12 tháng tới.</li><li>Requirement chính: phân bổ chi phí theo tag và báo cáo/forecast.</li><li>Ưu tiên: cost visibility.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tag tài nguyên đã có, cần <strong>activate user-defined cost allocation tags</strong> để hiện trong billing. <strong>Cost category</strong> gom chi phí theo application/team. <strong>Cost Explorer</strong> cung cấp báo cáo 12 tháng và forecast 12 tháng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kích hoạt user-defined tag của team/application.</li><li><strong>B</strong>: ❌ Sai — AWS-generated tag (vd createdBy) không đại diện application/team tự định nghĩa.</li><li><strong>C</strong>: ✅ Đúng — cost category nhóm chi phí theo application/team.</li><li><strong>D</strong>: ❌ Sai — IAM access đã dùng sẵn hàng ngày, không phải yêu cầu để có báo cáo.</li><li><strong>E</strong>: ❌ Sai — budget để cảnh báo, không phải báo cáo so sánh và forecast.</li><li><strong>F</strong>: ✅ Đúng — Cost Explorer cho lịch sử và forecast.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>User-defined cost allocation tags, cost category, Cost Explorer, forecast 12 months.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Chi phí theo team + forecast\" → tag + cost category + Cost Explorer.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>A. Activate the user-define cost allocation tags that represent the application and the team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate the AWS generated cost allocation tags that represent the application and the team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a cost category for each application in Billing and Cost Management.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Activate IAM access to Billing and Cost Management.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a cost budget.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable Cost Explorer.</p>",
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
      "question_id": "#45",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a Git repository in an on-premises data center. The company uses webhooks to invoke functionality that runs in the AWS Cloud. The company hosts the webhook logic on a set of Amazon EC2 instances in an Auto Scaling group that the company set as a target for an Application Load Balancer (ALB). The Git server calls the ALB for the configured webhooks. The company wants to move the solution to a serverless architecture.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển webhook từ EC2 + ALB sang serverless, Git server on-prem gọi tới.</li><li>Ưu tiên <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>API Gateway HTTP API</strong> cung cấp một endpoint duy nhất, định tuyến tới từng <strong>Lambda</strong> function; serverless hoàn toàn, rẻ và đơn giản.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — mỗi webhook một Lambda function URL, nhiều URL phải cấu hình ở Git server, thiếu quản lý tập trung.</li><li><strong>B</strong>: ✅ Đúng — một endpoint, Lambda cho từng webhook, serverless.</li><li><strong>C</strong>: ❌ Sai — App Runner sau ALB thêm thành phần, không cần thiết.</li><li><strong>D</strong>: ❌ Sai — ECS/Fargate + REST API tốn công vận hành hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>API Gateway HTTP API</li><li>Lambda</li><li>Webhook</li><li>Serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"webhook serverless\" → nghĩ ngay đến <strong>API Gateway + Lambda</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. For each webhook, create and configure an AWS Lambda function URL. Update the Git servers to call the individual Lambda function URLs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API. Implement each webhook logic in a separate AWS Lambda function. Update the Git servers to call the API Gateway endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the webhook logic to AWS App Runner. Create an ALB, and set App Runner as the target. Update the Git servers to call the ALB endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Containerize the webhook logic. Create an Amazon Elastic Container Service (Amazon ECS) cluster, and run the webhook logic in AWS Fargate. Create an Amazon API Gateway REST API, and set Fargate as the target. Update the Git servers to call the API Gateway endpoint.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently deployed an application on AWS. The application uses Amazon DynamoDB. The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.<br><br>A solutions architect needs to implement a solution to minimize the cost of the table.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bảng DynamoDB có peak gấp đôi trung bình trong 4 giờ/tuần, nhiều write hơn read; tối thiểu chi phí.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tải nền ổn định gần mức trung bình nên <strong>provisioned + reserved capacity</strong> rẻ nhất; <strong>Application Auto Scaling</strong> nâng capacity trong giờ peak.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — reserved capacity cho baseline, auto scaling cho peak, chi phí thấp nhất.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — on-demand đắt hơn khi tải ổn định và dự đoán được.</li><li><strong>C</strong>: ❌ Sai — DAX chỉ giảm read, mà workload chủ yếu là write.</li><li><strong>D</strong>: ❌ Sai — DAX không giúp write và on-demand tốn kém.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Auto Scaling</li><li>Reserved capacity</li><li>Predictable load</li><li>DAX chỉ cho read</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tải dự đoán được, tối thiểu cost\" → nghĩ đến <strong>provisioned + auto scaling + reserved capacity</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure on-demand capacity mode for the table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure DynamoDB Accelerator (DAX) in front of the table. Reduce the provisioned read capacity to match the new peak load on the table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure DynamoDB Accelerator (DAX) in front of the table. Configure on-demand capacity mode for the table.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#36",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s solutions architect is reviewing a web application that runs on AWS. The application references static assets in an Amazon S3 bucket in the us-east-1 Region. The company needs resiliency across multiple AWS Regions. The company already has created an S3 bucket in a second Region.<br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Static asset trên S3 cần resiliency đa Region, đã có bucket Region thứ hai.</li><li>Ưu tiên <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Cross-Region Replication</strong> tự động đồng bộ giữa hai bucket; <strong>CloudFront origin group</strong> tự failover sang origin phụ khi origin chính lỗi, không cần sửa code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — app phải ghi hai nơi và Route 53 không trỏ trực tiếp vào S3 bucket theo kiểu này, không có health failover tốt.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — tự viết Lambda để copy trong khi S3 replication có sẵn.</li><li><strong>C</strong>: ✅ Đúng — replication managed + origin group failover tự động.</li><li><strong>D</strong>: ❌ Sai — failover thủ công bằng cách sửa code.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 replication (CRR)</li><li>CloudFront origin group</li><li>Automatic failover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"S3 đa Region, failover tự động\" → nghĩ ngay đến <strong>CRR + CloudFront origin group</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A. Configure the application to write each object to both S3 buckets. Set up an Amazon Route 53 public hosted zone with a record set by using a weighted routing policy for each S3 bucket. Configure the application to reference the objects by using the Route 53 DNS name.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to copy objects from the S3 bucket in us-east-1 to the S3 bucket in the second Region. Invoke the Lambda function each time an object is written to the S3 bucket in us-east-1. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. If failover is required, update the application code to load S3 objects from the S3 bucket in the second Region.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is refactoring its on-premises order-processing platform in the AWS Cloud. The platform includes a web front end that is hosted on a fleet of VMs, RabbitMQ to connect the front end to the backend, and a Kubernetes cluster to run a containerized backend system to process the orders. The company does not want to make any major changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: refactor nền tảng on-premises (VM web, RabbitMQ, Kubernetes) lên AWS.</li><li>Requirement chính: không thay đổi lớn ứng dụng, LEAST operational overhead.</li><li>Ưu tiên: dùng managed service tương thích.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon MQ hỗ trợ RabbitMQ tương thích hoàn toàn, Amazon EKS là managed Kubernetes, còn web VM chạy trong EC2 Auto Scaling group + ALB nên không phải đổi code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — EC2 ASG + ALB, Amazon MQ, Amazon EKS.</li><li><strong>B</strong>: ❌ Sai — chuyển web server sang Lambda/API Gateway là thay đổi lớn.</li><li><strong>C</strong>: ❌ Sai — tự cài Kubernetes trên EC2 tăng overhead so với EKS.</li><li><strong>D</strong>: ❌ Sai — SQS không tương thích giao thức RabbitMQ, phải sửa ứng dụng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon MQ (RabbitMQ)</li><li>Amazon EKS</li><li>No major changes</li><li>LEAST operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp RabbitMQ/ActiveMQ on-premises → nghĩ ngay đến Amazon MQ; Kubernetes → EKS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom AWS Lambda runtime to mimic the web server environment. Create an Amazon API Gateway API to replace the front-end web servers. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Install Kubernetes on a fleet of different EC2 instances to host the order-processing backend.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up an Amazon Simple Queue Service (Amazon SQS) queue to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#21",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company’s AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company’s AWS accounts.<br>The company’s security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location.<br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dùng Active Directory on-premises để đăng nhập nhiều AWS account.</li><li>Requirement chính: conditional access theo group/role, quản lý identity tại một nơi.</li><li>Ưu tiên: IAM Identity Center với AD làm identity source.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>IAM Identity Center kết nối AD, tự động provisioning bằng SCIM, và phân quyền theo thuộc tính (ABAC), giữ identity ở AD.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Identity Center kết nối AD, SCIM, ABAC.</li><li><strong>B</strong>: ❌ Sai — Dùng Identity Center làm identity source tạo user ở AWS, vi phạm yêu cầu quản lý ở một nơi.</li><li><strong>C</strong>: ❌ Sai — Tạo IAM user cho từng federated user, khó quản lý.</li><li><strong>D</strong>: ❌ Sai — AD không dùng OIDC kiểu này và cross-account setup thủ công.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IAM Identity Center, SCIM, ABAC, Active Directory</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"AD on-premises + nhiều account Organizations\" → nghĩ ngay đến IAM Identity Center.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. Configure AWS IAM Identity Center (AWS Single Sign-On) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS IAM Identity Center (AWS Single Sign-On) by using IAM Identity Center as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using IAM Identity Center permission sets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In one of the company’s AWS accounts, configure AWS Identity and Access Management (IAM) to use a SAML 2.0 identity provider. Provision IAM users that are mapped to the federated users. Grant access that corresponds to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In one of the company’s AWS accounts, configure AWS Identity and Access Management (IAM) to use an OpenID Connect (OIDC) identity provider. Provision IAM roles that grant access to the AWS account for the federated users that correspond to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM roles.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#33",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a monolithic REST-based API for a mobile app on five Amazon EC2 instances in public subnets of a VPC. Mobile clients connect to the API by using a domain name that is hosted on Amazon Route 53. The company has created a Route 53 multivalue answer routing policy with the IP addresses of all the EC2 instances. Recently, the app has been overwhelmed by large and sudden increases to traffic. The app has not been able to keep up with the traffic.<br>A solutions architect needs to implement a solution so that the app can handle the new and varying load.<br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API monolith trên 5 EC2 bị quá tải khi traffic tăng đột biến.</li><li>Cần xử lý tải thay đổi với <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ALB</strong> phân phối tải và kiểm tra health, thêm <strong>Auto Scaling</strong> (hoặc thêm target) giúp xử lý tải; không cần refactor code. Route 53 chỉ cần alias tới ALB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — tách monolith thành Lambda đòi hỏi viết lại lớn.</li><li><strong>B</strong>: ❌ Sai — containerize + EKS tốn công vận hành nhất.</li><li><strong>C</strong>: ❌ Sai — ASG nhưng vẫn dùng Route 53 và Lambda cập nhật record, phức tạp, DNS multivalue không phản ánh nhanh.</li><li><strong>D</strong>: ✅ Đúng — ALB trước EC2, ít thay đổi nhất, instance vào private subnet an toàn hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ALB</li><li>Route 53 alias</li><li>Monolith</li><li>Least operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"monolith EC2 quá tải, ít thay đổi\" → nghĩ ngay đến <strong>ALB (+ Auto Scaling)</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) in front of the API. Move the EC2 instances to private subnets in the VPC. Add the EC2 instances as targets for the ALB. Update the Route 53 record to point to the ALB.</p>",
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
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is in the process of implementing AWS Organizations to constrain its developers to use only Amazon EC2, Amazon S3, and Amazon DynamoDB. The developers account resides in a dedicated organizational unit (OU). The solutions architect has implemented the following SCP on the developers account:<br>//IMG//<br><br>When this policy is deployed, IAM users in the developers account are still able to use AWS services that are not listed in the policy.<br>What should the solutions architect do to eliminate the developers’ ability to use services outside the scope of this policy?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>SCP allow-list (EC2, S3, DynamoDB) nhưng user vẫn dùng được service khác.</li><li>Cần hiểu cách SCP được đánh giá.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP là giao (intersection) của mọi SCP kế thừa. `FullAWSAccess` mặc định đang allow tất cả, nên SCP allow-list không có tác dụng. Gỡ `FullAWSAccess` khỏi OU thì chỉ còn các service được allow.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — deny từng service thì khó bao quát và rất tốn công.</li><li><strong>B</strong>: ✅ Đúng — gỡ FullAWSAccess để allow-list có hiệu lực.</li><li><strong>C</strong>: ❌ Sai — không thể sửa SCP AWS managed FullAWSAccess, và deny tất cả sẽ chặn luôn mọi thứ.</li><li><strong>D</strong>: ❌ Sai — deny wildcard cũng chặn cả service được phép (explicit deny thắng allow).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SCP</li><li>FullAWSAccess</li><li>Allow list</li><li>Explicit deny</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"SCP allow-list không chặn được\" → nghĩ ngay đến <strong>gỡ FullAWSAccess</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Create an explicit deny statement for each AWS service that should be constrained.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the FullAWSAccess SCP from the developers account’s OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the FullAWSAccess SCP to explicitly deny all services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an explicit deny statement using a wildcard to the end of the SCP.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team’s policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS Marketplace to achieve this requirement. The procurement team wants administration of Private Marketplace to be restricted to a role named procurement-manager-role, which could be assumed by procurement managers. Other IAM users, groups, roles, and account administrators in the company should be denied Private Marketplace administrative access.<br>What is the MOST efficient way to design an architecture to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chỉ `procurement-manager-role` được quản trị Private Marketplace, mọi principal khác (kể cả admin) bị chặn.</li><li>Ưu tiên cách thiết kế <strong>MOST efficient</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Role tạo ở các shared services account với policy `AWSPrivateMarketplaceAdminFullAccess`. <strong>SCP ở root</strong> deny quyền admin Marketplace trừ role này, và SCP thứ hai chặn người khác tạo role trùng tên để tránh vượt quyền.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — PowerUserAccess và inline policy cho mọi user/role, không hiệu quả, khó quản lý.</li><li><strong>B</strong>: ❌ Sai — AdministratorAccess và permissions boundary không giới hạn đúng, cấp quá quyền.</li><li><strong>C</strong>: ✅ Đúng — SCP root-level kiểm soát tập trung, kèm SCP chống tạo role giả mạo.</li><li><strong>D</strong>: ❌ Sai — tạo role ở account developer và chỉ áp SCP cho shared services account, không chặn được account khác.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Private Marketplace</li><li>SCP root-level</li><li>AWSPrivateMarketplaceAdminFullAccess</li><li>Deny except role</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chỉ một role được làm X toàn Organization\" → nghĩ đến <strong>SCP deny với điều kiện loại trừ role đó</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the PowerUserAccess managed policy to the role. Apply an inline policy to all IAM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the AdministratorAccess managed policy to the role. Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role named procurement-manager-role in all the shared services accounts in the organization. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role named procurement-manager-role in all AWS accounts that will be used by developers. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an SCP in Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Apply the SCP to all the shared services accounts in the organization.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that has multiple AWS accounts is using AWS Organizations. The company’s AWS accounts host VPCs, Amazon EC2 instances, and containers.<br>The company’s compliance team has deployed a security tool in each VPC where the company has deployments. The security tools run on EC2 instances and send information to the AWS account that is dedicated for the compliance team. The company has tagged all the compliance-related resources with a key of “costCenter” and a value or “compliance”.<br>The company wants to identify the cost of the security tools that are running on the EC2 instances so that the company can charge the compliance team’s AWS account. The cost calculation must be as accurate as possible.<br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Tính chính xác chi phí tài nguyên gắn tag `costCenter=compliance` trên nhiều account để charge lại.</li><li>Ưu tiên độ chính xác và ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cost allocation tag phải được kích hoạt ở <strong>management account</strong> của Organization; <strong>Cost and Usage Report (CUR)</strong> của management account tổng hợp cost mọi member account kèm tag breakdown.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — activate tag ở management account, CUR về S3 và dùng tag breakdown.</li><li><strong>B</strong>: ❌ Sai — kích hoạt ở member account không phải cách chuẩn, lại thêm Lambda tự tính, không cần thiết.</li><li><strong>C</strong>: ❌ Sai — cùng lỗi kích hoạt tag ở member account.</li><li><strong>D</strong>: ❌ Sai — Trusted Advisor không có custom billing report theo tag.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cost allocation tags</li><li>Management account</li><li>Cost and Usage Report</li><li>Tag breakdown</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chi phí theo tag toàn Organization\" → nghĩ đến <strong>activate cost allocation tag ở management account + CUR</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. In the management account of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Use the tag breakdown in the report to obtain the total cost for the costCenter tagged resources.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the member accounts of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Schedule a monthly AWS Lambda function to retrieve the reports and calculate the total cost for the costCenter tagged resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the member accounts of the organization activate the costCenter user-defined tag. From the management account, schedule a monthly AWS Cost and Usage Report. Use the tag breakdown in the report to calculate the total cost for the costCenter tagged resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom report in the organization view in AWS Trusted Advisor. Configure the report to generate a monthly billing summary for the costCenter tagged resources in the compliance team’s AWS account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLs are defined in a JSON document. All DNS records are managed by Amazon Route 53.<br>A solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.<br>Which combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Redirect 10 domain sang URL đích định nghĩa trong JSON, nhận cả HTTP và HTTPS.</li><li>Ưu tiên <strong>LEAST operational effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudFront</strong> nhận HTTP/HTTPS cho nhiều domain, <strong>Lambda@Edge</strong> (logic Lambda đọc JSON) trả về redirect, và <strong>ACM</strong> cấp một certificate chứa mọi domain bằng SAN. Toàn bộ serverless/managed.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — EC2 phải tự vận hành, overhead cao.</li><li><strong>B</strong>: ❌ Sai — ALB cần backend và không tự redirect theo JSON cho từng domain, thêm chi phí vận hành.</li><li><strong>C</strong>: ✅ Đúng — Lambda chứa logic lookup và trả redirect.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — API Gateway + custom domain phức tạp hơn cho 10 domain so với CloudFront.</li><li><strong>E</strong>: ✅ Đúng — CloudFront + Lambda@Edge xử lý redirect ở edge.</li><li><strong>F</strong>: ✅ Đúng — ACM cert với SAN cho HTTPS nhiều domain.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront</li><li>Lambda@Edge</li><li>ACM SAN</li><li>Redirect</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"redirect nhiều domain, ít vận hành\" → nghĩ ngay đến <strong>CloudFront + Lambda@Edge + ACM</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A. Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Application Load Balancer that includes HTTP and HTTPS listeners.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an SSL certificate by using AWS Certificate Manager (ACM). Include the domains as Subject Alternative Names.</p>",
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
      "question_id": "#27",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing data in several Amazon DynamoDB tables. A solutions architect must use a serverless architecture to make the data accessible publicly through a simple API over HTTPS. The solution must scale automatically in response to demand.<br>Which solutions meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Expose dữ liệu DynamoDB ra public qua API HTTPS đơn giản.</li><li>Phải serverless và tự động scale.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>API Gateway REST API</strong> hỗ trợ AWS integration trực tiếp với DynamoDB. <strong>API Gateway HTTP API</strong> + <strong>Lambda</strong> đọc DynamoDB cũng là kiến trúc serverless chuẩn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — REST API có AWS service integration trực tiếp tới DynamoDB.</li><li><strong>B</strong>: ❌ Sai — HTTP API không hỗ trợ direct integration tới DynamoDB.</li><li><strong>C</strong>: ✅ Đúng — HTTP API + Lambda + DynamoDB, serverless, auto scale.</li><li><strong>D</strong>: ❌ Sai — Global Accelerator không tích hợp Lambda@Edge (Lambda@Edge dùng với CloudFront).</li><li><strong>E</strong>: ❌ Sai — NLB không forward trực tiếp tới Lambda (chỉ ALB mới có Lambda target).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>REST API AWS integration</li><li>HTTP API + Lambda</li><li>Serverless</li><li>Lambda@Edge ↔ CloudFront</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"API trực tiếp tới DynamoDB không Lambda\" → nghĩ đến <strong>REST API</strong> (HTTP API chưa hỗ trợ).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon API Gateway REST API. Configure this API with direct integrations to DynamoDB by using API Gateway’s AWS integration type.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway HTTP API. Configure this API with direct integrations to Dynamo DB by using API Gateway’s AWS integration type.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway HTTP API. Configure this API with integrations to AWS Lambda functions that return data from the DynamoDB tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an accelerator in AWS Global Accelerator. Configure this accelerator with AWS Lambda@Edge function integrations that return data from the DynamoDB tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a Network Load Balancer. Configure listener rules to forward requests to the appropriate AWS Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#22",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon DynamoDB table. The application is showing an increase in the number of errors during PUT requests. Most of the PUT calls come from a small number of clients that are authenticated with specific API keys.<br>A solutions architect has identified that a large number of the PUT requests originate from one client. The API is noncritical, and clients can tolerate retries of unsuccessful calls. However, the errors are displayed to customers and are causing damage to the API’s reputation.<br>What should the solutions architect recommend to improve the customer experience?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: một client gây quá nhiều PUT làm lỗi cho các client khác.</li><li>Requirement chính: API không critical, client chấp nhận retry, giảm lỗi hiển thị.</li><li>Ưu tiên: bảo vệ backend khỏi một client.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Usage plan với API key giới hạn tốc độ từng client; client xử lý mã 429 và retry nên lỗi không ảnh hưởng người khác.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Retry giúp client nhưng không giới hạn client gây tải.</li><li><strong>B</strong>: ✅ Đúng — Usage plan throttling theo API key, xử lý 429.</li><li><strong>C</strong>: ❌ Sai — Caching không hiệu quả cho PUT.</li><li><strong>D</strong>: ❌ Sai — Reserved concurrency không giải quyết việc một client chiếm tài nguyên.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Usage plan, API key, throttling, 429</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"một client làm quá tải API\" → nghĩ ngay đến usage plan + throttling.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement API throttling through a usage plan at the API Gateway level. Ensure that the client application handles code 429 replies without error.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on API caching to enhance responsiveness for the production stage. Run 10-minute load tests. Verify that the cache capacity is appropriate for the workload.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement reserved concurrency at the Lambda function level to provide the resources that are needed during sudden increases in traffic.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#19",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a serverless application comprised of Amazon CloudFront, Amazon API Gateway, and AWS Lambda functions. The current deployment process of the application code is to create a new version number of the Lambda function and run an AWS CLI script to update. If the new function version has errors, another CLI script reverts by deploying the previous working version of the function. The company would like to decrease the time to deploy new versions of the application logic provided by the Lambda functions, and also reduce the time to detect and revert when errors are identified.<br>How can this be accomplished?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: triển khai Lambda nhanh hơn và phát hiện/rollback lỗi nhanh.</li><li>Requirement chính: deploy nhanh, rollback tự động.</li><li>Ưu tiên: progressive deployment.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS SAM với CodeDeploy dịch chuyển traffic dần (canary/linear), có pre-traffic và post-traffic hook, tự rollback khi CloudWatch alarm kích hoạt.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CloudFormation change set không dịch chuyển traffic dần, rollback chậm.</li><li><strong>B</strong>: ✅ Đúng — SAM + CodeDeploy gradual shift + alarm rollback.</li><li><strong>C</strong>: ❌ Sai — Vẫn là script thủ công, không giảm thời gian phát hiện lỗi.</li><li><strong>D</strong>: ❌ Sai — Đổi origin CloudFront thủ công, phức tạp và chậm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS SAM, CodeDeploy, canary/linear, pre-traffic hook, CloudWatch alarm</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda deploy an toàn + auto rollback\" → nghĩ ngay đến SAM + CodeDeploy.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>A. Create and deploy nested AWS CloudFormation stacks with the parent stack consisting of the AWS CloudFront distribution and API Gateway, and the child stack containing the Lambda function. For changes to Lambda, create an AWS CloudFormation change set and deploy; if errors are triggered, revert the AWS CloudFormation change set to the previous version.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS SAM and built-in AWS CodeDeploy to deploy the new Lambda version, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code. Rollback if Amazon CloudWatch alarms are triggered.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Refactor the AWS CLI scripts into a single script that deploys the new Lambda version. When deployment is completed, the script tests execute. If errors are detected, revert to the previous Lambda version.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and deploy an AWS CloudFormation stack that consists of a new API Gateway endpoint that references the new Lambda version. Change the CloudFront origin to the new API Gateway endpoint, monitor errors and if detected, change the AWS CloudFront origin to the previous API Gateway endpoint.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#18",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that allows users to upload short videos. The videos are stored on Amazon EBS volumes and analyzed by custom recognition software for categorization.<br>The website contains static content that has variable traffic with peaks in certain months. The architecture consists of Amazon EC2 instances running in an Auto Scaling group for the web application and EC2 instances running in an Auto Scaling group to process an Amazon SQS queue. The company wants to re-architect the application to reduce operational overhead using AWS managed services where possible and remove dependencies on third-party software.<br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tái kiến trúc ứng dụng upload video, phân loại bằng phần mềm tự viết.</li><li>Requirement chính: dùng managed service, giảm vận hành, bỏ phần mềm bên thứ ba.</li><li>Ưu tiên: serverless.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 lưu web tĩnh và video, S3 event notification gửi vào SQS, Lambda gọi Rekognition — toàn bộ managed/serverless.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Vẫn phải quản lý ECS/EC2 và Spot instance.</li><li><strong>B</strong>: ❌ Sai — Vẫn dùng EC2 cho web và EFS, vận hành nhiều.</li><li><strong>C</strong>: ✅ Đúng — S3 + SQS + Lambda + Rekognition, vận hành tối thiểu.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Elastic Beanstalk vẫn có EC2 cần quản lý.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 static hosting, S3 event notification, Rekognition, serverless</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"giảm vận hành, phân loại video/ảnh\" → nghĩ ngay đến S3 + Lambda + Rekognition.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ECS containers for the web application and Spot instances for the Auto Scaling group that processes the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the uploaded videos in Amazon EFS and mount the file system to the EC2 instances for the web application. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the web application in Amazon S3. Store the uploaded videos in Amazon S3. Use S3 event notification to publish events to the SQS queue. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk to launch EC2 instances in an Auto Scaling group for the web application and launch a worker environment to process the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company’s on-premises network uses the connection to communicate with the company’s resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.<br>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thêm Direct Connect dự phòng và mở rộng sang nhiều Region trên cùng cặp kết nối.</li><li>Requirement chính: redundancy + multi-Region.</li><li>Ưu tiên: Direct Connect gateway.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Direct Connect gateway cho phép private virtual interface trên cả hai connection kết nối tới VPC ở nhiều Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Direct Connect gateway + private VIF trên mỗi connection.</li><li><strong>B</strong>: ❌ Sai — VIF gắn trực tiếp vào một VPC, không mở rộng sang Region khác.</li><li><strong>C</strong>: ❌ Sai — Public VIF dùng cho dịch vụ public của AWS, không kết nối VPC.</li><li><strong>D</strong>: ❌ Sai — Private VIF không gắn trực tiếp vào transit gateway (cần transit VIF).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Direct Connect gateway, private VIF, multi-Region, redundancy</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Direct Connect đến nhiều Region/VPC\" → nghĩ ngay đến Direct Connect gateway.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company used Amazon EC2 instances to deploy a web fleet to host a blog site. The EC2 instances are behind an Application Load Balancer (ALB) and are configured in an Auto Scaling group. The web application stores all blog content on an Amazon EFS volume.<br>The company recently added a feature for bloggers to add video to their posts, attracting 10 times the previous user traffic. At peak times of day, users report buffering and timeout issues while attempting to reach the site or watch videos.<br>Which is the MOST cost-efficient and scalable deployment that will resolve the issues for users?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: video làm tải tăng 10 lần, người dùng bị buffering/timeout; nội dung lưu trên EFS.</li><li>Requirement chính: scalable, cost-efficient.</li><li>Ưu tiên: offload nội dung tĩnh/video khỏi EC2 và EFS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>S3 lưu video rẻ và scale tốt; CloudFront cache ở edge giảm tải cho web fleet và độ trễ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Max I/O tăng throughput EFS nhưng tốn kém và không giải quyết tải web/video.</li><li><strong>B</strong>: ❌ Sai — Instance store là tạm thời, rủi ro mất dữ liệu.</li><li><strong>C</strong>: ✅ Đúng — S3 + CloudFront, rẻ và scalable.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — CloudFront trước ALB vẫn đọc video từ EFS qua EC2, tốn kém hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront, S3, offload video, cost-efficient</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"video/static traffic tăng mạnh\" → nghĩ ngay đến S3 + CloudFront.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>A. Reconfigure Amazon EFS to enable maximum I/O.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the blog site to use instance store volumes for storage. Copy the site contents to the volumes at launch and to Amazon S3 at shutdown.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon CloudFront distribution for all site contents, and point the distribution at the ALB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A. The company’s applications and databases are running in Account B.<br>A solutions architect will deploy a two-tier application in a new VPC. To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53.<br>During deployment, the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53.<br>Which combination of steps should the solutions architect take to resolve this issue? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: EC2 ở VPC của Account B không resolve được record trong private hosted zone của Account A.</li><li>Requirement chính: VPC phải được associate với private hosted zone.</li><li>Ưu tiên: cross-account PHZ association.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Account A tạo authorization cho VPC của Account B, sau đó Account B associate VPC với hosted zone (qua API/CLI); cuối cùng có thể xóa authorization.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Chuyển DB sang EC2 không giải quyết vấn đề DNS và không cần thiết.</li><li><strong>B</strong>: ❌ Sai — Sửa /etc/resolv.conf thủ công, không bền và không đúng cách.</li><li><strong>C</strong>: ✅ Đúng — Tạo association authorization ở Account A.</li><li><strong>D</strong>: ❌ Sai — Route 53 không có replication giữa các account.</li><li><strong>E</strong>: ✅ Đúng — Associate VPC của Account B với hosted zone Account A, rồi xóa authorization.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Private hosted zone, association authorization, cross-account, VPC association</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"PHZ khác account không resolve\" → nghĩ ngay đến authorize rồi associate VPC.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Deploy the database on a separate EC2 instance in the new VPC. Create a record set for the instance’s private IP in the private hosted zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use SSH to connect to the application tier EC2 instance. Add an RDS endpoint IP address to the /etc/resolv.conf file.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a private hosted zone for the example com domain in Account B. Configure Route 53 replication between AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Associate a new VPC in Account B with a hosted zone in Account A. Delete the association authorization in Account A.</p>",
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
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central Amazon S3 bucket every 15 minutes. The security team discovers that log files are missing from some of the terminated EC2 instances.<br>Which set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: log của instance bị terminate chưa kịp copy lên S3.</li><li>Requirement chính: copy log trước khi instance bị terminate.</li><li>Ưu tiên: tự động, đáng tin cậy.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Auto Scaling lifecycle hook (Terminating:Wait) giữ instance lại; EventBridge gọi Lambda, Lambda dùng Systems Manager SendCommand chạy script copy log rồi gửi CONTINUE để terminate.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Gửi ABANDON làm terminate ngay và script nằm trên instance, logic sai.</li><li><strong>B</strong>: ✅ Đúng — Lifecycle hook + SSM SendCommand + CONTINUE.</li><li><strong>C</strong>: ❌ Sai — EventBridge phát hiện terminate khi instance đã bị hủy, quá muộn.</li><li><strong>D</strong>: ❌ Sai — Gửi ABANDON không phù hợp để hoàn tất lifecycle và dùng SNS không cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lifecycle hook, Terminating:Wait, SSM SendCommand, CONTINUE</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"làm việc trước khi ASG terminate instance\" → nghĩ ngay đến lifecycle hook + CONTINUE.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#14",
          "answers": [
            {
              "choice": "<p>A. Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic. From the SNS notification, call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send ABANDON to the Auto Scaling group to terminate the instance.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#13",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching. Management requires a single report showing the patch status of all the servers and instances.<br>Which set of actions should a solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: quản lý patch hợp nhất cho on-premises server và EC2.</li><li>Requirement chính: một báo cáo duy nhất về patch status.</li><li>Ưu tiên: dịch vụ managed hỗ trợ hybrid.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Systems Manager Patch Manager quản lý patch cho cả EC2 và on-premises (managed nodes) và có patch compliance report.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Systems Manager Patch Manager + compliance reports.</li><li><strong>B</strong>: ❌ Sai — OpsWorks không có tích hợp QuickSight cho báo cáo patch.</li><li><strong>C</strong>: ❌ Sai — Amazon Inspector quét lỗ hổng, không phải báo cáo patch compliance.</li><li><strong>D</strong>: ❌ Sai — X-Ray dùng cho tracing, không dùng để đăng patch status.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Systems Manager, Patch Manager, hybrid, compliance report</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"patch EC2 + on-premises, một báo cáo\" → nghĩ ngay đến Systems Manager Patch Manager.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon EventBridge rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use AWS X-Ray to post the patch status to AWS Systems Manager OpsCenter to generate patch compliance reports.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use a third-party software-as-a-service (SaaS) application. The third-party SaaS application is consumed through several API calls. The third-party SaaS application also runs on AWS inside a VPC.<br>The company will consume the third-party SaaS application from inside a VPC. The company has internal security policies that mandate the use of private connectivity that does not traverse the internet. No resources that run in the company VPC are allowed to be accessed from outside the company’s VPC. All permissions must conform to the principles of least privilege.<br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dùng SaaS của bên thứ ba chạy trong VPC khác, qua kết nối private.</li><li>Requirement chính: không đi qua internet, không cho truy cập từ ngoài vào VPC công ty, least privilege.</li><li>Ưu tiên: kết nối một chiều (consumer đến provider).</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>PrivateLink interface VPC endpoint kết nối tới endpoint service của SaaS, chỉ cho phép luồng một chiều và kiểm soát bằng security group.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Interface endpoint + security group, một chiều, least privilege.</li><li><strong>B</strong>: ❌ Sai — Site-to-Site VPN cho phép kết nối hai chiều và không phải cách chuẩn cho SaaS.</li><li><strong>C</strong>: ❌ Sai — VPC peering mở kết nối hai chiều giữa các VPC, vi phạm yêu cầu không cho truy cập vào VPC công ty.</li><li><strong>D</strong>: ❌ Sai — Tạo endpoint service ở phía công ty khiến SaaS truy cập vào VPC công ty, ngược yêu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>PrivateLink, interface VPC endpoint, endpoint service, security group</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"SaaS private, không qua internet, không cho truy cập ngược\" → nghĩ ngay đến PrivateLink.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A. Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Site-to-Site VPN connection between the third-party SaaS application and the company VPC. Configure network ACLs to limit access across the VPN tunnels.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC peering connection between the third-party SaaS application and the company VPC. Update route tables by adding the needed routes for the peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS PrivateLink endpoint service. Ask the third-party SaaS provider to create an interface VPC endpoint for this endpoint service. Grant permissions for the endpoint service to the specific account of the third-party SaaS provider.</p>",
              "correct": false,
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
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.<br>A solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.<br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: loại bỏ single point of failure ở EC2, RDS, ElastiCache.</li><li>Requirement chính: tự động phục hồi, downtime tối thiểu.</li><li>Ưu tiên: high availability bằng Multi-AZ.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>EC2 cần ELB + Auto Scaling group (min 2), RDS dùng Multi-AZ để failover tự động, ElastiCache Redis dùng replication group với Multi-AZ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — ELB + ASG tối thiểu 2 instance, tự thay thế instance lỗi.</li><li><strong>B</strong>: ❌ Sai — Unlimited mode là cấu hình burstable CPU, không đem lại HA.</li><li><strong>C</strong>: ❌ Sai — Read replica cùng AZ, promote thủ công, không tự động và không chịu lỗi AZ.</li><li><strong>D</strong>: ✅ Đúng — RDS Multi-AZ tự động failover.</li><li><strong>E</strong>: ❌ Sai — ElastiCache không dùng EC2 Auto Scaling group kiểu này.</li><li><strong>F</strong>: ✅ Đúng — Replication group + Multi-AZ cho automatic failover.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Multi-AZ, Auto Scaling group, replication group, automatic failover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tự động phục hồi, single point of failure\" → nghĩ ngay đến Multi-AZ cho từng tầng (ASG, RDS Multi-AZ, ElastiCache Multi-AZ).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are configured in unlimited mode.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DB instance to create a read replica in the same Availability Zone. Promote the read replica to be the primary DB instance in failure scenarios.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DB instance to create a Multi-AZ deployment that extends across two Availability Zones.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a replication group for the ElastiCache for Redis cluster. Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a replication group for the ElastiCache for Redis cluster. Enable Multi-AZ on the cluster.</p>",
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
      "question_id": "#8",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application’s data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.<br>The company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region. The company does not have a large enough budget for an active-active strategy.<br>What should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DR sang backup Region, tự động failover, RTO dưới 15 phút.</li><li>Requirement chính: không đủ ngân sách active-active, hạ tầng backup đang ở trạng thái ASG = 0.</li><li>Ưu tiên: pilot light/warm standby với chi phí thấp.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Route 53 health check + failover routing policy chỉ chuyển traffic sang backup khi primary unhealthy; Lambda promote read replica và nâng ASG để bật backup Region khi cần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Latency-based routing đẩy traffic cả sang backup Region khi chưa sẵn sàng (ASG = 0), không phải failover.</li><li><strong>B</strong>: ✅ Đúng — Health check + failover record + Lambda promote replica/scale ASG.</li><li><strong>C</strong>: ❌ Sai — Chạy ASG ở cả hai Region là active-active (đắt) và bỏ read replica là sai.</li><li><strong>D</strong>: ❌ Sai — Global Accelerator với trọng số bằng nhau gửi traffic tới Region backup đang rỗng; không phải failover.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Route 53 failover, health check, pilot light, promote read replica, RTO</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"DR tự động, không active-active, budget thấp\" → nghĩ ngay đến Route 53 failover routing + pilot light.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Reconfigure the application’s Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service (Amazon SNS) notification to the Lambda function when the health check status is unhealthy. Update the application’s Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region. Reconfigure the application’s Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a traditional web application on Amazon EC2 instances. The company needs to refactor the application as microservices that run on containers. Separate versions of the application exist in two distinct environments: production and testing. Load for the application is variable, but the minimum load and the maximum load are known. A solutions architect needs to design the updated application with a serverless architecture that minimizes operational complexity.<br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chạy microservices dạng container, 2 môi trường (prod, test), tải biến động nhưng biết min/max.</li><li>Requirement chính: serverless, giảm operational complexity.</li><li>Ưu tiên: MOST cost-effective.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon ECS với Fargate là serverless cho container, auto scaling theo tải, không quản lý server và không tốn phí control plane như EKS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda container image bị giới hạn (thời gian chạy, 10 GB image), không hợp \"microservices container\" và dùng concurrency limit cho peak không tối ưu.</li><li><strong>B</strong>: ✅ Đúng — ECS Fargate + ECR + ALB, serverless, scale theo tải, chi phí thấp.</li><li><strong>C</strong>: ❌ Sai — EKS tốn thêm phí cluster ($/giờ) và phức tạp hơn ECS.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Elastic Beanstalk không phải serverless, vận hành EC2 bên dưới.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Fargate, ECS, serverless containers, ECR, minimize operational complexity</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"container + serverless + cost-effective\" → nghĩ ngay đến ECS on Fargate (không phải EKS).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A. Upload the container images to AWS Lambda as functions. Configure a concurrency limit for the associated Lambda functions to handle the expected peak load. Configure two separate Lambda integrations within Amazon API Gateway: one for production and one for testing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Kubernetes Service (Amazon EKS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the EKS clusters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the container images to AWS Elastic Beanstalk. In Elastic Beanstalk, create separate environments and deployments for production and testing. Configure two separate Application Load Balancers to direct traffic to the Elastic Beanstalk deployments.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under Account A, which belongs to the retail company. The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own AWS account (Account B).<br>Which combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: cho phép IAM user ở Account B truy cập S3 bucket ở Account A (cross-account).</li><li>Requirement chính: phải cấp quyền ở CẢ HAI phía.</li><li>Ưu tiên: đúng mô hình cross-account access.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-account cần <strong>bucket policy</strong> ở Account A cho phép principal của Account B, và <strong>IAM policy</strong> ở Account B cấp quyền S3 cho User_DataProcessor. Cả hai phải cùng tồn tại.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CORS dành cho truy cập từ browser cross-origin, không liên quan cross-account permission.</li><li><strong>B</strong>: ❌ Sai — Bucket policy này không đúng (theo đáp án, không phải policy phù hợp).</li><li><strong>C</strong>: ✅ Đúng — Bucket policy ở Account A cho phép User_DataProcessor/Account B.</li><li><strong>D</strong>: ✅ Đúng — IAM policy ở Account B cấp quyền truy cập bucket cho user.</li><li><strong>E</strong>: ❌ Sai — IAM policy này không đúng (không phù hợp so với D).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-account, bucket policy, IAM policy, Principal</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cross-account S3 access\" → nghĩ ngay đến bucket policy (bên chủ) + IAM policy (bên dùng).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In Account A, set the S3 bucket policy to the following: //IMG//</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In Account A, set the S3 bucket policy to the following: //IMG//</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In Account B, set the permissions of User_DataProcessor to the following: //IMG//</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. In Account B, set the permissions of User_DataProcessor to the following: //IMG//</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a two-tier web-based application in an on-premises data center. The application layer consists of a single server running a stateful application. The application connects to a PostgreSQL database running on a separate server. The application’s user base is expected to grow significantly, so the company is migrating the application and database to AWS. The solution will use Amazon Aurora PostgreSQL, Amazon EC2 Auto Scaling, and Elastic Load Balancing.<br>Which solution will provide a consistent user experience that will allow the application and database tiers to scale?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p><p>Aurora Auto Scaling changes the number of Aurora Replicas and does not scale the writer. An Application Load Balancer supports HTTP application traffic and sticky sessions, preserving session affinity for the stateful application while EC2 Auto Scaling changes the instance fleet. Therefore the replica Auto Scaling plus ALB option is the only combination with valid capabilities.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Enable Aurora Auto Scaling for Aurora Replicas. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Aurora Auto Scaling for Aurora writers. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the round robin routing and sticky sessions enabled.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Aurora Scaling for Aurora writers. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations with a single OU named Production to manage multiple accounts. All accounts are members of the Production OU. Administrators use deny list SCPs in the root of the organization to manage access to restricted services.<br>The company recently acquired a new business unit and invited the new unit’s existing AWS account to the organization. Once onboarded, the administrators of the new business unit discovered that they are not able to update existing AWS Config rules to meet the company’s policies.<br>Which option will allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p><p>An explicit Deny in an SCP at the organization root applies to every descendant and cannot be overridden by an Allow on a lower OU. Moving the restrictive SCP to the Production OU keeps current production controls while the temporary Onboarding OU permits AWS Config changes. Moving the account into Production afterward restores the standard policy without an account-specific long-term exception.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Remove the organization’s root SCPs that limit access to AWS Config. Create AWS Service Catalog products for the company’s standard AWS Config rules and deploy them throughout the organization, including the new account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the new account to the Production OU when adjustments to AWS Config are complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert the organization’s root SCPs from deny list SCPs to allow list SCPs to allow the required services only. Temporarily apply an SCP to the organization’s root that allows AWS Config actions for principals only in the new account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the organization’s root SCP to the Production OU. Move the new account to the Production OU when adjustments to AWS Config are complete.</p>",
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
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs.<br>The company has the following DNS resolution requirements:<br>On-premises systems should be able to resolve and connect to cloud.example.com.<br>All VPCs should be able to resolve cloud.example.com.<br>There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway.<br>Which architecture should the company use to meet these requirements with the HIGHEST performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p><p>A Route 53 Resolver inbound endpoint accepts DNS queries forwarded from the on-premises network over Direct Connect or VPN. Associating the private hosted zone with every VPC makes its records resolvable in those VPCs, while Transit Gateway provides connectivity to the shared inbound endpoint. An outbound endpoint is for queries from VPCs toward another network, and an EC2 forwarder adds avoidable operations.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the private hosted zone to all the VPCs. Deploy an Amazon EC2 conditional forwarder in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the conditional forwarder.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Associate the private hosted zone to the shared services VPC. Create a Route 53 outbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the outbound resolver.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate the private hosted zone to the shared services VPC. Create a Route 53 inbound resolver in the shared services VPC. Attach the shared services VPC to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#2",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is providing weather data over a REST-based API to several customers. The API is hosted by Amazon API Gateway and is integrated with different AWS Lambda functions for each API operation. The company uses Amazon Route 53 for DNS and has created a resource record of weather.example.com. The company stores data for the API in Amazon DynamoDB tables. The company needs a solution that will give the API the ability to fail over to a different AWS Region.<br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p><p>A second regional API Gateway API and Lambda deployment provides compute in the standby Region. Route 53 failover routing with health evaluation implements active-passive failover, and DynamoDB global tables replicate the data across Regions. Lambda functions are regional, not global, and multivalue routing is not the intended primary/standby policy.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. Deploy a new set of Lambda functions in a new Region. Update the API Gateway API to use an edge-optimized API endpoint with Lambda functions from both Regions as targets. Convert the DynamoDB tables to global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a new API Gateway API and Lambda functions in another Region. Change the Route 53 DNS record to a multivalue answer. Add both API Gateway APIs to the answer. Enable target health monitoring. Convert the DynamoDB tables to global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new API Gateway API and Lambda functions in another Region. Change the Route 53 DNS record to a failover record. Enable target health monitoring. Convert the DynamoDB tables to global tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new API Gateway API in a new Region. Change the Lambda functions to global functions. Change the Route 53 DNS record to a multivalue answer. Add both API Gateway APIs to the answer. Enable target health monitoring. Convert the DynamoDB tables to global tables.</p>",
              "correct": false,
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
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an IoT platform on AWS. IoT sensors in various locations send data to the company’s Node.js API servers on Amazon EC2 instances running behind an Application Load Balancer. The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume.<br><br>The number of sensors the company has deployed in the field has increased over time, and is expected to grow significantly. The API servers are consistently overloaded and RDS metrics show high write latency.<br><br>Which of the following steps together will resolve the issues permanently and enable growth as new sensors are provisioned, while keeping this platform cost-efficient? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: IoT ingest tăng mạnh, API servers quá tải, RDS MySQL write latency cao.</li><li>Requirement chính: giải quyết vĩnh viễn, scale theo số sensor, tiết kiệm chi phí.</li><li>Ưu tiên: scalability ghi (write), cost-efficiency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Kinesis Data Streams + Lambda tách và đệm luồng ingest, giảm tải API servers; DynamoDB scale write gần như không giới hạn, phù hợp dữ liệu sensor.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tăng storage chỉ tăng IOPS tạm thời, không giải quyết gốc, tốn kém.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Aurora cải thiện nhưng read replicas không giúp write bottleneck.</li><li><strong>C</strong>: ✅ Đúng — Kinesis Data Streams + Lambda ingest/xử lý có thể scale.</li><li><strong>D</strong>: ❌ Sai — X-Ray chỉ debug, thêm server không giải quyết write latency, tốn chi phí.</li><li><strong>E</strong>: ✅ Đúng — DynamoDB scale write tốt, cost-efficient cho IoT.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>IoT sensors tăng</li><li>High write latency</li><li>Kinesis Data Streams</li><li>DynamoDB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp IoT write-heavy, tăng trưởng lớn → nghĩ ngay đến Kinesis ingest + DynamoDB.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume’s IOPS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS X-Ray to analyze and debug application issues and add more API servers to match the load.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance.</p>",
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
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a serverless application that runs on an AWS Lambda function that is attached to a VPC. The company needs to integrate the application with a new service from an external provider. The external provider supports only requests that come from public IPv4 addresses that are in an allow list.<br><br>The company must provide a single public IP address to the external provider before the application can start using the new service.<br><br>Which solution will give the application the ability to access the new service?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda trong VPC cần gọi dịch vụ ngoài chỉ chấp nhận một public IPv4 trong allow list.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda trong VPC (private subnet) ra internet qua <strong>NAT gateway</strong> có <strong>Elastic IP</strong> cố định; toàn bộ egress dùng một IP public duy nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — NAT gateway + Elastic IP cho IP outbound cố định.</li><li><strong>B</strong>: ❌ Sai — egress-only internet gateway chỉ dành cho IPv6 và không gắn Elastic IP.</li><li><strong>C</strong>: ❌ Sai — không gắn Elastic IP vào internet gateway, và Lambda ENI không có public IP.</li><li><strong>D</strong>: ❌ Sai — Elastic IP không gắn vào internet gateway, và Lambda ENI không có public IP.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>NAT gateway</li><li>Elastic IP</li><li>Lambda in VPC</li><li>Static outbound IP</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Lambda trong VPC cần IP public cố định\" → nghĩ ngay đến <strong>NAT gateway + Elastic IP</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an egress-only internet gateway. Associate an Elastic IP address with the egress-only internet gateway. Configure the elastic network interface on the Lambda function to use the egress-only internet gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the Lambda function to use the internet gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the default route in the public VPC route table to use the internet gateway.</p>",
              "correct": false,
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
      "question_id": "#313",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a third-party firewall appliance solution from AWS Marketplace to monitor and protect traffic that leaves the company's AWS environments. The company wants to deploy this appliance into a shared services VPC and route all outbound internet-bound traffic through the appliances.<br><br>A solutions architect needs to recommend a deployment method that prioritizes reliability and minimizes failover time between firewall appliances within a single AWS Region. The company has set up routing from the shared services VPC to other VPCs.<br><br>Which steps should the solutions architect recommend to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Triển khai firewall appliance của bên thứ ba ở shared services VPC để kiểm tra traffic đi ra internet.</li><li>Requirement quyết định: reliability cao và failover time ngắn trong một Region.</li><li>Ưu tiên: high availability, tích hợp appliance trong suốt.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đặt appliance ở nhiều <strong>Availability Zone</strong>, dùng <strong>Gateway Load Balancer</strong> (health check và failover nhanh, hỗ trợ GENEVE), và định tuyến traffic qua <strong>GWLB endpoint</strong> làm next hop.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Hai appliance ở hai AZ khác nhau cho HA.</li><li><strong>B</strong>: ❌ Sai — NLB không dành cho appliance inspection trong suốt như GWLB.</li><li><strong>C</strong>: ✅ Đúng — GWLB là loại load balancer thiết kế cho virtual appliance.</li><li><strong>D</strong>: ❌ Sai — Interface endpoint thông thường không dùng làm next hop; cần Gateway Load Balancer endpoint.</li><li><strong>E</strong>: ❌ Sai — Cùng một AZ thì mất HA khi AZ lỗi.</li><li><strong>F</strong>: ✅ Đúng — GWLB endpoint làm next hop trong route table.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Gateway Load Balancer</li><li>GWLB endpoint</li><li>GENEVE</li><li>multi-AZ</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"firewall appliance bên thứ ba + failover nhanh\" → nghĩ ngay đến <strong>Gateway Load Balancer</strong> + <strong>GWLB endpoint</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#313",
          "answers": [
            {
              "choice": "<p>A. Deploy two firewall appliances into the shared services VPC, each in a separate Availability Zone.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Network Load Balancer in the shared services VPC. Create a new target group, and attach it to the new Network Load Balancer. Add each of the firewall appliance instances to the target group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Gateway Load Balancer in the shared services VPC. Create a new target group, and attach it to the new Gateway Load Balancer Add each of the firewall appliance instances to the target group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC interface endpoint. Add a route to the route table in the shared services VPC. Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy two firewall appliances into the shared services VPC, each in the same Availability Zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a VPC Gateway Load Balancer endpoint. Add a route to the route table in the shared services VPC. Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.</p>",
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
      "question_id": "#23",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200 TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72 hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared file system run continuously. The compute and storage instances are all in the same AWS Region.<br>A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run.<br>Which solution will provide the LARGEST overall cost reduction while meeting these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: file system chia sẻ 200 TB chạy liên tục nhưng chỉ cần 72 giờ mỗi tháng.</li><li>Requirement chính: hiệu năng cao trong lúc chạy job, đọc một phần dữ liệu.</li><li>Ưu tiên: LARGEST cost reduction.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dữ liệu ở S3 Intelligent-Tiering rẻ; FSx for Lustre tạo theo nhu cầu với lazy loading chỉ tải phần file cần dùng, rồi xóa sau job.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 Intelligent-Tiering + FSx for Lustre lazy loading.</li><li><strong>B</strong>: ❌ Sai — EBS Multi-Attach bị giới hạn (một AZ, số instance) và đắt cho 200 TB.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — S3 Standard đắt hơn và batch loading tải toàn bộ dữ liệu.</li><li><strong>D</strong>: ❌ Sai — File gateway không đạt hiệu năng cao cần thiết.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>FSx for Lustre, lazy loading, S3 Intelligent-Tiering, ephemeral file system</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"HPC theo đợt, dữ liệu trên S3\" → nghĩ ngay đến FSx for Lustre liên kết S3.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.</p>",
              "correct": false,
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
      "question_id": "#320",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's compliance audit reveals that some Amazon Elastic Block Store (Amazon EBS) volumes that were created in an AWS account were not encrypted. A solutions architect must implement a solution to encrypt all new EBS volumes at rest.<br><br>Which solution will meet this requirement with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đảm bảo mọi EBS volume mới đều được mã hóa at rest.</li><li>Requirement quyết định: LEAST effort.</li><li>Ưu tiên: ít công sức, phòng ngừa thay vì xử lý sau.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Bật <strong>EBS encryption by default</strong> cho từng Region khiến mọi volume mới tự động được mã hóa, không cần code hay giám sát.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Xóa volume không tuân thủ là phản ứng muộn, gây mất dữ liệu.</li><li><strong>B</strong>: ❌ Sai — Audit Manager chỉ thu thập bằng chứng, không buộc mã hóa.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Config rule + Automation phức tạp, và không thể mã hóa lại volume đang tồn tại ngay tại chỗ.</li><li><strong>D</strong>: ✅ Đúng — Một cài đặt, tự động áp dụng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EBS encryption by default</li><li>per Region</li><li>LEAST effort</li><li>preventive control</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"mã hóa mọi EBS volume mới\" → <strong>EBS encryption by default</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#320",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge rule to detect the creation of unencrypted EBS volumes. Invoke an AWS Lambda function to delete noncompliant volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Audit Manager with data encryption.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config rule to detect the creation of a new EBS volume. Encrypt the volume by using AWS Systems Manager Automation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on EBS encryption by default in all AWS Regions.</p>",
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
      "question_id": "#318",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company hosts its stateful web-based application and MySQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture.<br><br>Which solution should provide the HIGHEST level of reliability?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng stateful và MySQL từ một server on-premises lên AWS.</li><li>Requirement quyết định: HIGHEST level of reliability.</li><li>Ưu tiên: database HA, session store phù hợp, load balancer đúng loại.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora MySQL</strong> (storage 6 bản sao qua 3 AZ, failover nhanh), ASG sau <strong>ALB</strong>, session lưu ở <strong>ElastiCache for Redis</strong> replication group có HA.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Neptune là graph database, không phải session store.</li><li><strong>B</strong>: ✅ Đúng — Aurora + ASG/ALB + Redis replication group.</li><li><strong>C</strong>: ❌ Sai — DocumentDB không tương thích MySQL; Kinesis Data Firehose không lưu session.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Memcached không có replication, mất session khi node lỗi; RDS Multi-AZ kém Aurora về reliability.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Aurora MySQL</li><li>ElastiCache for Redis replication group</li><li>session store</li><li>ALB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"stateful web + reliability cao nhất\" → <strong>Aurora</strong> + <strong>session ở Redis</strong> với replication.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#318",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Neptune</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer Store sessions in Amazon Kinesis Data Firehose.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.</p>",
              "correct": false,
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
      "question_id": "#322",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating mobile banking applications to run on Amazon EC2 instances in a VPC. Backend service applications run in an on-premises data center. The data center has an AWS Direct Connect connection into AWS. The applications that run in the VPC need to resolve DNS requests to an on-premises Active Directory domain that runs in the data center.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>EC2 trong VPC cần phân giải DNS đến AD on-premises qua Direct Connect.</li><li>Requirement quyết định: LEAST administrative overhead.</li><li>Ưu tiên: managed, hybrid DNS.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Route 53 Resolver outbound endpoint</strong> cùng <strong>conditional forwarding rule</strong> chuyển các truy vấn của domain on-premises đến DNS server on-premises. Đây là dịch vụ managed.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Tự vận hành DNS server trên EC2 tốn quản trị.</li><li><strong>B</strong>: ❌ Sai — Private hosted zone với NS record không phân giải được domain AD on-premises.</li><li><strong>C</strong>: ✅ Đúng — Resolver endpoint + forwarding rule, managed.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Thêm domain controller và trust, tốn quản trị.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Route 53 Resolver</li><li>outbound endpoint</li><li>conditional forwarding</li><li>hybrid DNS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"VPC phân giải DNS on-premises\" → <strong>Route 53 Resolver outbound endpoint + forwarding rule</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#322",
          "answers": [
            {
              "choice": "<p>A. Provision a set of EC2 instances across two Availability Zones in the VPC as caching DNS servers to resolve DNS queries from the application servers within the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an Amazon Route 53 private hosted zone. Configure NS records that point to on-premises DNS servers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create DNS endpoints by using Amazon Route 53 Resolver. Add conditional forwarding rules to resolve DNS namespaces between the on-premises data center and the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a new Active Directory domain controller in the VPC with a bidirectional trust between this new domain and the on-premises Active Directory domain.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#321",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research company is running daily simulations in the AWS Cloud to meet high demand. The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2. Occasionally, a simulation gets stuck and requires a cloud operations engineer to solve the problem by connecting to an EC2 instance through SSH.<br><br>Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail.<br><br>How can a solutions architect meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Engineer SSH vào hàng trăm EC2 khi cần xử lý sự cố.</li><li>Requirement quyết định: không dùng chung SSH key, mọi kết nối được ghi trong CloudTrail.</li><li>Ưu tiên: security, audit, dễ vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>EC2 Instance Connect</strong> đẩy public key tạm thời (hiệu lực 60 giây) qua API <strong>SendSSHPublicKey</strong>, mỗi lần dùng một key riêng, và lời gọi API được ghi trong <strong>CloudTrail</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — Quản lý nhiều key trong Secrets Manager, việc kết nối SSH không được log trong CloudTrail.</li><li><strong>B</strong>: ❌ Sai — Engineer tự đặt key, dễ dùng chung, không có audit kết nối.</li><li><strong>C</strong>: ✅ Đúng — Key tạm thời, mỗi lần khác nhau, log qua CloudTrail.</li><li><strong>D</strong>: ❌ Sai — Rotation hàng ngày phức tạp và không log kết nối.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>EC2 Instance Connect</li><li>SendSSHPublicKey</li><li>CloudTrail</li><li>không dùng chung key</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"SSH key riêng + log CloudTrail\" → nghĩ ngay đến <strong>EC2 Instance Connect</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#321",
          "answers": [
            {
              "choice": "<p>A. Launch new EC2 instances, and generate an individual SSH key for each instance. Store the SSH key in AWS Secrets Manager. Create a new IAM policy, and attach it to the engineers’ IAM role with an Allow statement for the GetSecretValue action. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key. Create a new IAM policy, and attach it to the engineers’ IAM role with an Allow statement to run Systems Manager documents. Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch new EC2 instances without setting up any SSH key for the instances. Set up EC2 Instance Connect on each instance. Create a new IAM policy, and attach it to the engineers’ IAM role with an Allow statement for the SendSSHPublicKey action. Instruct the engineers to connect to the instance by using a browser-based SSH client from the EC2 console.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up AWS Secrets Manager to store the EC2 SSH key. Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance. Configure Secrets Manager to use the Lambda function for automatic rotation once daily. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.</p>",
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
