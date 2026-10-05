var SAP_C02_Part1 = 
{
  "msg": "Quiz Questions",
  "data": [
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
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB. Static content is cached. Amazon Route 53 is used to host all public zones.<br>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB. The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.<br>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.<br>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: hiển thị custom error page thay cho trang 502 của ALB.</li><li>Requirement chính: đã có CloudFront trước ALB.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lưu trang lỗi tĩnh trên S3 và cấu hình CloudFront custom error response (cho mã 502) trỏ tới trang đó — không cần code hay giám sát thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — S3 static website chứa trang lỗi, chi phí và vận hành thấp.</li><li><strong>B</strong>: ❌ Sai — Lambda + CloudWatch alarm sửa listener rule phức tạp, tốn vận hành.</li><li><strong>C</strong>: ❌ Sai — Route 53 health check không bắt được lỗi 502 thỉnh thoảng và không phải giải pháp trực tiếp.</li><li><strong>D</strong>: ❌ Sai — Cũng dùng Lambda sửa ALB rule, phức tạp và metric không phù hợp.</li><li><strong>E</strong>: ✅ Đúng — CloudFront custom error response trả trang lỗi tùy chỉnh.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudFront custom error response, S3 static website, 502</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"custom error page + có CloudFront\" → nghĩ ngay đến CloudFront custom error response + S3.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
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
      "question_id": "#24",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new service that will be accessed using TCP on a static port. A solutions architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name my.service.com, which is publicly accessible. The service must use fixed address assignments so other companies can add the addresses to their allow lists.<br>Assuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dịch vụ TCP trên port tĩnh, HA nhiều AZ, DNS công khai.</li><li>Requirement chính: địa chỉ IP cố định để đối tác allow list.</li><li>Ưu tiên: Network Load Balancer với Elastic IP.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>NLB hỗ trợ TCP và gán một Elastic IP cho mỗi AZ, alias record trỏ tới NLB cung cấp IP cố định.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Gán EIP cho từng instance và name server record không đúng, NLB không dùng IP này.</li><li><strong>B</strong>: ❌ Sai — Public IP của ECS thay đổi, không cố định.</li><li><strong>C</strong>: ✅ Đúng — NLB + EIP mỗi AZ + alias record.</li><li><strong>D</strong>: ❌ Sai — ALB không hỗ trợ TCP thuần và không có IP tĩnh.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>NLB, Elastic IP, TCP, alias record, allow list</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"TCP + IP cố định + multi-AZ\" → nghĩ ngay đến NLB với Elastic IP.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB. Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLCreate a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB. Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB. Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.</p>",
              "correct": false,
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
      "question_id": "#43",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon OpenSearch Service to analyze data. The company loads data into an OpenSearch Service cluster with 10 data nodes from an Amazon S3 bucket that uses S3 Standard storage. The data resides in the cluster for 1 month for read-only analysis. After 1 month, the company deletes the index that contains the data from the cluster. For compliance purposes, the company must retain a copy of all input data.<br><br>The company is concerned about ongoing costs and asks a solutions architect to recommend a new solution.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cluster OpenSearch 10 data node, data dùng read-only 1 tháng rồi xoá index; phải giữ bản copy input cho compliance.</li><li>Ưu tiên <strong>MOST cost-effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Giảm hot data node, dùng <strong>UltraWarm</strong> (rẻ hơn, phù hợp read-only) ngay khi ingest; bản input trên S3 chuyển sang <strong>S3 Glacier Deep Archive</strong> sau 1 tháng bằng lifecycle để giữ compliance rẻ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — UltraWarm không dùng làm node ingest chính (cần hot node) và chuyển Glacier ngay khi load làm khó cho việc đọc input.</li><li><strong>B</strong>: ✅ Đúng — hot node ít, UltraWarm cho read-only, S3 lifecycle Deep Archive.</li><li><strong>C</strong>: ❌ Sai — thêm cold storage không cần thiết và xoá input vi phạm compliance.</li><li><strong>D</strong>: ❌ Sai — dùng instance-backed data node không tiết kiệm bằng UltraWarm.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>UltraWarm</li><li>S3 Lifecycle</li><li>Glacier Deep Archive</li><li>Compliance retention</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"OpenSearch data read-only, giảm cost\" → nghĩ đến <strong>UltraWarm</strong>, và giữ copy bằng <strong>S3 Lifecycle → Glacier Deep Archive</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A. Replace all the data nodes with UltraWarm nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the number of data nodes in the cluster to 2 Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Transition the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Reduce the number of data nodes in the cluster to 2. Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Add cold storage nodes to the cluster Transition the indexes from UltraWarm to cold storage. Delete the input data from the S3 bucket after 1 month by using an S3 Lifecycle policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reduce the number of data nodes in the cluster to 2. Add instance-backed data nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.</p>",
              "correct": false,
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
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate 1,000 on-premises servers to AWS. The servers run on several VMware clusters in the company’s data center. As part of the migration plan, the company wants to gather server metrics such as CPU details, RAM usage, operating system information, and running processes. The company then wants to query and analyze the data.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Thu thập metric server (CPU, RAM, OS, <strong>running processes</strong>) của 1,000 server VMware, rồi query và phân tích.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chỉ <strong>Application Discovery Agent</strong> thu thập được thông tin running process. <strong>Data Exploration</strong> trong Migration Hub lưu dữ liệu vào S3 và dùng <strong>Athena</strong> để query.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Agentless Discovery Connector không lấy được running processes; Glue và S3 Select không phải luồng chuẩn.</li><li><strong>B</strong>: ❌ Sai — chỉ export performance, thiếu thông tin cần thiết.</li><li><strong>C</strong>: ❌ Sai — tự viết script và put-resource-attributes thủ công, không có Data Exploration.</li><li><strong>D</strong>: ✅ Đúng — Discovery Agent + Data Exploration + Athena.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Discovery Agent</li><li>Data Exploration</li><li>Athena</li><li>Running processes</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"cần running processes / network connections\" → nghĩ ngay đến <strong>Discovery Agent</strong> (không phải agentless).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3.</p>",
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
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.<br><br>The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company’s customers.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate hệ thống phân tích lên AWS, hết lỗi load job khi chạy aggregation, không gián đoạn và không đổi gì với khách hàng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DMS</strong> replicate liên tục tới <strong>Aurora MySQL</strong>, <strong>Aurora Replica</strong> chạy aggregation tách khỏi load, <strong>Lambda + ALB + RDS Proxy</strong> nhận dữ liệu; cutover bằng DNS rồi tắt DMS.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Aurora không là replication target kiểu này, NLB với Lambda không hợp lệ.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — không tách aggregation sang replica nên lỗi load có thể còn, EC2 tốn vận hành.</li><li><strong>C</strong>: ✅ Đúng — DMS, Aurora Replica cho aggregation, ALB + Lambda + RDS Proxy.</li><li><strong>D</strong>: ❌ Sai — Kinesis làm collection endpoint thay đổi giao diện với khách hàng, không phải replicate DB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS DMS continuous replication</li><li>Aurora Replica</li><li>RDS Proxy</li><li>DNS cutover</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"migrate DB không downtime\" → nghĩ ngay đến <strong>DMS continuous replication + DNS cutover</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases are synced, point the collector DNS record to the ALDisable the AWS DMS sync task after the cutover from on premises to AWS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB. Disable the AWS DMS sync task after the cutover from on premises to AWS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon Aurora MySQL database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as an Amazon Kinesis data stream. Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the Kinesis data stream.</p>",
              "correct": false,
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
      "question_id": "#53",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company’s global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br><br>The company’s networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Quản lý tập trung danh sách CIDR của các văn phòng cho nhiều account.</li><li>Requirement chính: một nơi cập nhật, các account khác tham chiếu được.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Managed prefix list</strong> tạo ở transit account, chia sẻ qua <strong>AWS RAM</strong> cho toàn bộ account, rồi dùng trong security group rule. Khi cập nhật prefix list, mọi rule tham chiếu tự động cập nhật, không cần code.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — hoạt động nhưng phải tự xây SNS + Lambda, overhead cao.</li><li><strong>B</strong>: ❌ Sai — AWS Config rule chỉ kiểm tra/remediate, không phải nơi quản lý danh sách tập trung.</li><li><strong>C</strong>: ✅ Đúng — prefix list + RAM, cập nhật một chỗ, tự lan tỏa.</li><li><strong>D</strong>: ❌ Sai — security group không thể chứa dải IP và không tham chiếu cross-account kiểu này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Managed prefix list, AWS RAM, centrally manage CIDR, security group rule.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Danh sách CIDR dùng chung nhiều account/rule\" → nghĩ ngay đến prefix list + RAM.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>A. Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account’s security group by using a nested security group reference of “/sg-1a2b3c4d”.</p>",
              "correct": false,
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
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client’s allow list.<br><br>The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in a VPC. The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets.<br><br>How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng trong private subnet gọi API bên thứ ba chỉ cho phép một public CIDR block.</li><li>Requirement chính: egress traffic phải xuất phát từ dải IP của khách hàng.</li><li>Ưu tiên: giữ nguyên IP allow-list sau migration.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>EC2 ở private subnet đi ra internet qua <strong>NAT gateway</strong>, nên IP nguồn là Elastic IP của NAT gateway. Dùng <strong>BYOIP</strong> (đăng ký block IP của khách trên AWS) rồi tạo Elastic IP từ block đó gán cho NAT gateways.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không gắn public IP block vào VPC kiểu này; traffic ra qua NAT, không dùng IP của public subnet.</li><li><strong>B</strong>: ✅ Đúng — BYOIP + Elastic IP trên NAT gateway.</li><li><strong>C</strong>: ❌ Sai — IP của ALB là inbound, không phải IP outbound của EC2.</li><li><strong>D</strong>: ❌ Sai — Global Accelerator xử lý inbound, không ảnh hưởng nguồn outbound call.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>BYOIP, Elastic IP, NAT gateway, outbound IP allow list.</p><p><strong>🧠 MẸO THI</strong></p><p>\"IP nguồn outbound từ private subnet cần cố định\" → nghĩ ngay đến NAT gateway + Elastic IP.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Associate a block of customer-owned public IP addresses to the VPC. Enable public IP addressing for public subnets in the VPC.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Elastic IP addresses from the block of customer-owned IP addresses. Assign the static Elastic IP addresses to the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Register a block of customer-owned public IP addresses in the AWS account. Set up AWS Global Accelerator to use Elastic IP addresses from the address block. Set the ALB as the accelerator endpoint.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company with several AWS accounts is using AWS Organizations and service control policies (SCPs). An administrator created the following SCP and has attached it to an organizational unit (OU) that contains AWS account 1111-1111-1111:<br><br>//IMG//<br><br><br>Developers working in account 1111-1111-1111 complain that they cannot create Amazon S3 buckets. How should the administrator address this problem?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Developer trong account thuộc OU không tạo được S3 bucket dù có SCP.</li><li>Requirement chính: hiểu SCP chỉ là guardrail giới hạn, không cấp quyền.</li><li>Ưu tiên: đúng cơ chế permission evaluation.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP không cấp quyền, chỉ đặt giới hạn tối đa. Developer vẫn cần <strong>IAM policy</strong> cho phép S3 trong IAM entity của họ. Nếu SCP không deny S3 thì thêm quyền IAM là đủ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SCP \"Allow\" không cấp quyền thực sự, chỉ cho phép giữ lại tối đa; vẫn thiếu IAM permission.</li><li><strong>B</strong>: ❌ Sai — gắn SCP trực tiếp vào account không thay đổi kết quả.</li><li><strong>C</strong>: ✅ Đúng — thêm S3 permission vào IAM entity.</li><li><strong>D</strong>: ❌ Sai — gỡ SCP không cấp thêm quyền cho developer.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>SCP là guardrail, không cấp quyền, IAM policy, effective permissions.</p><p><strong>🧠 MẸO THI</strong></p><p>\"SCP + user không làm được gì\" → nhớ SCP không grant; cần IAM policy.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Add s3:CreateBucket with “Allow” effect to the SCP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Instruct the developers to add Amazon S3 permissions to their IAM entities.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove the SCP from account 1111-1111-1111.</p>",
              "correct": false,
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
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to copy data from an Amazon S3 bucket m an AWS account to a new S3 bucket in a new AWS account. The solutions architect must implement a solution that uses the AWS CLI.<br><br>Which combination of steps will successfully copy the data? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Copy dữ liệu S3 cross-account bằng AWS CLI.</li><li>Requirement chính: cấp quyền đúng ở cả bucket policy và IAM policy.</li><li>Ưu tiên: cross-account access đúng chuẩn.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chạy `aws s3 sync` bằng user trong <strong>destination account</strong>, để object mới thuộc quyền sở hữu của destination account. Bucket policy ở source cho phép user đó list/read; IAM policy trong destination account cho phép đọc source và ghi destination.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — bucket (source bucket) không phải principal; policy phải cho user/role.</li><li><strong>B</strong>: ✅ Đúng — bucket policy trên source cho user destination account list/read.</li><li><strong>C</strong>: ❌ Sai — chạy ở source account khiến object do source account sở hữu, và bucket đích account khác cần quyền thêm; không thuộc bộ đáp án đúng.</li><li><strong>D</strong>: ✅ Đúng — IAM policy trong destination account cho source (get/list) và destination (put/ACL).</li><li><strong>E</strong>: ❌ Sai — chạy ở source account, object vẫn thuộc source account.</li><li><strong>F</strong>: ✅ Đúng — chạy sync bằng user ở destination account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Cross-account S3, bucket policy, IAM policy, destination account sync.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Copy S3 cross-account\" → chạy bằng user ở account đích, bucket policy ở nguồn.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>A. Create a bucket policy to allow the source bucket to list its contents and to put objects and set object ACLs in the destination bucket. Attach the bucket policy to the destination bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a bucket policy to allow a user in the destination account to list the source bucket’s contents and read the source bucket’s objects. Attach the bucket policy to the source bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM policy in the source account. Configure the policy to allow a user in the source account to list contents and get objects in the source bucket, and to list contents, put objects, and set object ACLs in the destination bucket. Attach the policy to the user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy in the destination account. Configure the policy to allow a user in the destination account to list contents and get objects in the source bucket, and to list contents, put objects, and set objectACLs in the destination bucket. Attach the policy to the user.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Run the aws s3 sync command as a user in the source account. Specify the source and destination buckets to copy the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Run the aws s3 sync command as a user in the destination account. Specify the source and destination buckets to copy the data.</p>",
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
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC. After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.<br><br>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cải thiện reliability và scalability của SFTP server tự quản trên EC2.</li><li>Requirement chính: SFTP vào S3 data lake, giữ nguyên DNS.</li><li>Ưu tiên: managed, ít vận hành.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Transfer Family (SFTP)</strong> là dịch vụ managed, HA, scale tự động, ghi thẳng vào S3, không cần cron job. Chỉ cần đổi DNS Route 53 sang endpoint.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB không hỗ trợ SFTP (TCP, không phải HTTP).</li><li><strong>B</strong>: ✅ Đúng — Transfer for SFTP managed, ghi vào S3.</li><li><strong>C</strong>: ❌ Sai — file gateway chỉ hỗ trợ NFS/SMB, không phải SFTP.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — NLB hỗ trợ TCP nhưng vẫn phải tự quản EC2, cron job.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Transfer Family, SFTP, S3, managed service.</p><p><strong>🧠 MẸO THI</strong></p><p>\"SFTP/FTP vào S3\" → nghĩ ngay đến AWS Transfer Family.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#62",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate VM VMware sang EC2, giữ nguyên software và configuration.</li><li>Requirement chính: import VM image nguyên trạng.</li><li>Ưu tiên: đúng công cụ migration.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Export VM sang định dạng <strong>OVF/OVA</strong> từ vSphere, upload lên S3, tạo IAM role cho <strong>VM Import/Export</strong> (vmimport) rồi chạy import-image bằng AWS CLI để tạo AMI.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DataSync + FSx for Windows không phải cách import VM; quy trình rối.</li><li><strong>B</strong>: ✅ Đúng — OVF export, S3, VM Import role, CLI import.</li><li><strong>C</strong>: ❌ Sai — Storage Gateway file gateway không tạo AMI từ backup file kiểu này.</li><li><strong>D</strong>: ❌ Sai — Systems Manager hybrid activation không dùng AWS Backup snapshot VM on-prem.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>VM Import/Export, OVF, S3, vmimport role.</p><p><strong>🧠 MẸO THI</strong></p><p>\"VMware sang EC2, giữ cấu hình\" → nghĩ ngay đến VM Import/Export.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for VM Import. Use the AWS CLI to run the EC2 import command.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFS) share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy. Launch an EC2 instance that is based on the AMI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM. Register the VM with Systems Manager to be a managed instance. Use AWS Backup to create a snapshot of the VM and create an AMI. Launch an EC2 instance that is based on the AMI.</p>",
              "correct": false,
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
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The company is using AWS Control Tower to deploy a landing zone for the organization. The company wants to implement governance and policy enforcement. The company must implement a policy that will detect Amazon RDS DB instances that are not encrypted at rest in the company’s production OU.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Phát hiện (detect) RDS DB instance không mã hóa at rest trong production OU.</li><li>Requirement chính: detective guardrail trong Control Tower.</li><li>Ưu tiên: governance với ít công sức.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Guardrail \"Disallow/Detect RDS instances not encrypted\" thuộc nhóm <strong>strongly recommended</strong> (detective, dùng AWS Config rule). Bật và áp dụng cho production OU.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — mandatory guardrail luôn bật sẵn và không bao gồm guardrail này; không \"turn on\" tùy chọn.</li><li><strong>B</strong>: ✅ Đúng — strongly recommended guardrail, detective, áp dụng theo OU.</li><li><strong>C</strong>: ❌ Sai — không tạo mandatory guardrail mới bằng AWS Config.</li><li><strong>D</strong>: ❌ Sai — SCP là preventive, không phải detect.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Control Tower guardrail, strongly recommended, detective, AWS Config.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Detect trong Control Tower\" → detective guardrail (AWS Config); \"prevent\" → SCP.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#64",
          "answers": [
            {
              "choice": "<p>A. Turn on mandatory guardrails in AWS Control Tower. Apply the mandatory guardrails to the production OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the appropriate guardrail from the list of strongly recommended guardrails in AWS Control Tower. Apply the guardrail to the production OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Config to create a new mandatory guardrail. Apply the rule to all accounts in the production OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom SCP in AWS Control Tower. Apply the SCP to the production OU.</p>",
              "correct": false,
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
      "question_id": "#67",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications in an AWS account that is named Source. The account is in an organization in AWS Organizations. One of the applications uses AWS Lambda functions and stores inventory data in an Amazon Aurora database. The application deploys the Lambda functions by using a deployment package. The company has configured automated backups for Aurora.<br><br>The company wants to migrate the Lambda functions and the Aurora database to a new AWS account that is named Target. The application processes critical data, so the company must minimize downtime.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate Lambda và Aurora sang account khác với downtime tối thiểu.</li><li>Requirement chính: Lambda deploy package, Aurora cần chia sẻ.</li><li>Ưu tiên: minimize downtime.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Lambda không chia sẻ qua RAM, nên tạo lại từ deployment package. Aurora DB cluster chia sẻ qua <strong>AWS RAM</strong> và cho phép Target account <strong>clone</strong> cluster, nhanh và ít downtime hơn restore snapshot.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — automated snapshot phải copy/restore, downtime lớn hơn clone.</li><li><strong>B</strong>: ✅ Đúng — deployment package cho Lambda + RAM clone cho Aurora.</li><li><strong>C</strong>: ❌ Sai — Lambda function không chia sẻ được bằng RAM.</li><li><strong>D</strong>: ❌ Sai — Lambda không chia sẻ qua RAM; snapshot tự động không chia sẻ trực tiếp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS RAM, Aurora clone, cross-account, deployment package.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Aurora cross-account ít downtime\" → RAM + clone.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the automated Aurora DB cluster snapshot with the Target account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the Aurora DB cluster with the Target account by using AWS Resource Access Manager {AWS RAM). Grant the Target account permission to clone the Aurora DB cluster.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions and the Aurora DB cluster with the Target account. Grant the Target account permission to clone the Aurora DB cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions with the Target account. Share the automated Aurora DB cluster snapshot with the Target account.</p>",
              "correct": false,
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
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company in North America plans to release a new online web application to its customers on AWS. The company will launch the application in the us-east-1 Region on Amazon EC2 instances. The application must be highly available and must dynamically scale to meet user traffic. The company also wants to implement a disaster recovery environment for the application in the us-west-1 Region by using active-passive failover.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Web app HA, auto scale ở us-east-1, DR active-passive ở us-west-1.</li><li>Requirement chính: failover giữa Region.</li><li>Ưu tiên: availability và DR.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mỗi Region có ALB + ASG riêng (multi-AZ). <strong>Route 53 failover routing</strong> với health check, primary ở us-east-1 và secondary ở us-west-1, tạo mô hình active-passive.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — ALB và ASG không thể trải rộng nhiều Region.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — nhiều record có health check nhưng không có failover policy, không phải active-passive.</li><li><strong>C</strong>: ✅ Đúng — failover routing policy + health check giữa hai Region.</li><li><strong>D</strong>: ❌ Sai — ALB không xuyên Region; thiếu DR thật sự.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Route 53 failover routing, health check, active-passive, multi-Region.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Active-passive DR giữa Region\" → Route 53 failover.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC. Place the Auto Scaling group behind the ALSet up the same configuration in the us-west-1 VPC. Create an Amazon Route 53 hosted zone. Create separate records for each ALEnable health checks to ensure high availability between Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC. Place the Auto Scaling group behind the ALB. Set up the same configuration in the us-west-1 VPC. Create an Amazon Route 53 hosted zone. Create separate records for each ALB. Enable health checks and configure a failover routing policy for each record.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB. Create an Amazon Route 53 hosted zone. Create a record for the ALB.</p>",
              "correct": false,
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
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB.<br><br>Users who access the app from Australia have experienced uploads that take long periods of time. Sometimes the files fail to completely upload for these users. A solutions architect must improve the app’s performance for these uploads.<br><br>Which solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Upload file 1-10 GB từ Australia lên S3 us-east-1 chậm và hay lỗi.</li><li>Requirement chính: tăng tốc và độ tin cậy upload.</li><li>Ưu tiên: performance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Transfer Acceleration</strong> dùng edge location để tăng tốc đường truyền xa; <strong>multipart upload</strong> chia file lớn thành phần, upload song song và retry từng phần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Transfer Acceleration cho upload khoảng cách xa.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — nhiều bucket + CRR phức tạp, tốn kém.</li><li><strong>C</strong>: ❌ Sai — Route 53 latency routing không áp dụng cho S3 bucket nhiều Region kiểu này.</li><li><strong>D</strong>: ✅ Đúng — multipart upload cho file lớn.</li><li><strong>E</strong>: ❌ Sai — random prefix không cải thiện tốc độ upload long-distance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>S3 Transfer Acceleration, multipart upload, large file, long distance.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Upload S3 xa, file lớn\" → Transfer Acceleration + multipart.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>A. Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 bucket in each Region to receive the uploads. Use S3 Cross-Region Replication to copy the files to the distribution S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the app to break the video files into chunks. Use a multipart upload to transfer files to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the app to add random prefixes to the files before uploading.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#72",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application is using an Amazon RDS for MySQL Multi-AZ DB instance in the us-east-1 Region. After a failover test, the application lost the connections to the database and could not re-establish the connections. After a restart of the application, the application re-established the connections.<br><br>A solutions architect must implement a solution so that the application can re-establish connections to the database without requiring a restart.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Sau failover RDS Multi-AZ, ứng dụng mất kết nối và không tự kết nối lại.</li><li>Requirement chính: tự reconnect không restart.</li><li>Ưu tiên: ít thay đổi nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>RDS Proxy</strong> giữ connection pool, tự chuyển sang standby khi failover, giảm thời gian failover và ứng dụng không cần restart.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Aurora Serverless v1 và reader endpoint không phù hợp, migrate lớn.</li><li><strong>B</strong>: ✅ Đúng — RDS Proxy trước RDS hiện có.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — migrate sang Aurora không cần thiết, RDS Proxy đã đủ.</li><li><strong>D</strong>: ❌ Sai — Athena/S3 không phải thay thế database giao dịch.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>RDS Proxy, failover, connection pooling, Multi-AZ.</p><p><strong>🧠 MẸO THI</strong></p><p>\"Ứng dụng mất connection sau failover\" → RDS Proxy.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Aurora MySQL Serverless v1 DB instance. Migrate the RDS DB instance to the Aurora Serverless v1 DB instance. Update the connection settings in the application to point to the Aurora reader endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a two-node Amazon Aurora MySQL DB cluster. Migrate the RDS DB instance to the Aurora DB cluster. Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket. Export the database to Amazon S3 by using AWS Database Migration Service (AWS DMS). Configure Amazon Athena to use the S3 bucket as a data store. Install the latest Open Database Connectivity (ODBC) driver for the application. Update the connection settings in the application to point to the Athena endpoint</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a solution in the AWS Cloud. Thousands or devices will connect to the solution and send data. Each device needs to be able to send and receive data in real time over the MQTT protocol. Each device must authenticate by using a unique X.509 certificate.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Hàng nghìn thiết bị gửi/nhận dữ liệu real time qua MQTT, xác thực bằng X.509 certificate riêng.</li><li>Requirement chính: MQTT + cert per device.</li><li>Ưu tiên: LEAST operational overhead.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS IoT Core</strong> là managed MQTT broker, mỗi device là một <strong>IoT thing</strong> với certificate X.509 riêng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Amazon MQ không phải cách kết hợp với IoT Core, không có queue cho mỗi device.</li><li><strong>B</strong>: ❌ Sai — tự chạy MQTT broker trên EC2, overhead cao.</li><li><strong>C</strong>: ✅ Đúng — IoT Core, thing + certificate.</li><li><strong>D</strong>: ❌ Sai — API Gateway HTTP API không hỗ trợ MQTT; tự quản broker.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS IoT Core, MQTT, X.509 certificate, IoT thing.</p><p><strong>🧠 MẸO THI</strong></p><p>\"MQTT + device certificate\" → AWS IoT Core.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Set up AWS IoT Core. For each device, create a corresponding Amazon MQ queue and provision a certificate. Connect each device to Amazon MQ.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Network Load Balancer (NLB) and configure it with an AWS Lambda authorizer. Run an MQTT broker on Amazon EC2 instances in an Auto Scaling group. Set the Auto Scaling group as the target for the NLConnect each device to the NLB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS IoT Core. For each device, create a corresponding AWS IoT thing and provision a certificate. Connect each device to AWS IoT Core.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon API Gateway HTTP API and a Network Load Balancer (NLB). Create integration between API Gateway and the NLB. Configure a mutual TLS certificate authorizer on the HTTP API. Run an MQTT broker on an Amazon EC2 instance that the NLB targets. Connect each device to the NLB.</p>",
              "correct": false,
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
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is hosting an ecommerce website on AWS across multiple AWS Regions. The company wants the website to be operational at all times for online purchases. The website stores data in an Amazon RDS for MySQL DB instance.<br><br>Which solution will provide the HIGHEST availability for the database?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: database RDS for MySQL cho website multi-Region, cần availability cao nhất.</li><li>Requirement chính: chịu được sự cố cả Region, failover nhanh.</li><li>Ưu tiên: high availability / DR cross-Region.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cross-Region read replica luôn được replicate liên tục, khi sự cố có thể promote thành standalone DB instance và chuyển traffic sang, RTO/RPO thấp hơn restore từ backup.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — restore/promote từ automated backup chậm, RPO/RTO cao, không phải availability cao nhất.</li><li><strong>B</strong>: ❌ Sai — \"global tables\" là tính năng của DynamoDB, không có trên RDS.</li><li><strong>C</strong>: ❌ Sai — cũng dùng global tables (không tồn tại trên RDS) và chỉ dựa vào backup.</li><li><strong>D</strong>: ✅ Đúng — cross-Region read replica, promote khi sự cố, tạo lại replica mới.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cross-Region read replica</li><li>Promote read replica</li><li>HIGHEST availability</li><li>Global tables = DynamoDB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp RDS cần DR cross-Region → nghĩ ngay đến cross-Region read replica (hoặc Aurora Global Database); thấy 'global tables' đi với RDS → loại.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
          "answers": [
            {
              "choice": "<p>A. Configure automated backups on Amazon RDS. In the case of disruption, promote an automated backup to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure global tables and read replicas on Amazon RDS. Activate the cross-Region scope. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure global tables and automated backups on Amazon RDS. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
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
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently acquired several other companies. Each company has a separate AWS account with a different billing and reporting method. The acquiring company has consolidated all the accounts into one organization in AWS Organizations. However, the acquiring company has found it difficult to generate a cost report that contains meaningful groups for all the teams.<br><br>The acquiring company’s finance team needs a solution to report on costs for all the companies through a self-managed application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: báo cáo chi phí hợp nhất theo nhóm có ý nghĩa cho nhiều account trong Organizations.</li><li>Requirement chính: báo cáo qua một ứng dụng self-managed, nhóm theo tags và cost categories.</li><li>Ưu tiên: dữ liệu chi tiết, tùy biến.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Cost and Usage Report (CUR) là nguồn chi phí chi tiết nhất, kèm tags và cost categories; Athena query và Amazon QuickSight trực quan hóa cho finance team.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — CUR + Athena + QuickSight, nhóm theo tags/cost categories.</li><li><strong>B</strong>: ❌ Sai — Cost Explorer không lấy dữ liệu từ CUR và không phải ứng dụng self-managed.</li><li><strong>C</strong>: ❌ Sai — Price List Query API chỉ cho giá dịch vụ, không phải chi tiêu thực tế.</li><li><strong>D</strong>: ❌ Sai — cũng dùng Price List API, không có dữ liệu chi tiêu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Cost and Usage Report</li><li>Cost categories</li><li>Athena + QuickSight</li><li>Price List API = giá, không phải spend</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp báo cáo chi phí tùy biến chi tiết theo tag/account → nghĩ ngay đến CUR + Athena + QuickSight.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a table in Amazon Athena. Create an Amazon QuickSight dataset based on the Athena table. Share the dataset with the finance team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon QuickSight dataset that receives spending information from the AWS Price List Query API. Share the dataset with the finance team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Price List Query API to collect account spending information. Create a specialized template in AWS Cost Explorer that the finance department will use to build reports.</p>",
              "correct": false,
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
      "question_id": "#84",
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
          "question_id": "#84",
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
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to refactor a monolithic application into a modern application design deployed on AWS. The CI/CD pipeline needs to be upgraded to support the modern design for the application with the following requirements:<br><br>• It should allow changes to be released several times every hour.<br>• It should be able to roll back the changes as quickly as possible.<br><br>Which design will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: CI/CD cho ứng dụng hiện đại.</li><li>Requirement chính: release nhiều lần mỗi giờ và rollback nhanh nhất.</li><li>Ưu tiên: tốc độ deploy và rollback.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Elastic Beanstalk blue/green: deploy vào environment staging rồi swap URL; rollback chỉ cần swap lại ngay lập tức.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — thay thế EC2 theo AMI chậm (bake AMI, launch instance), rollback lâu.</li><li><strong>B</strong>: ✅ Đúng — blue/green swap URL, rollback tức thì.</li><li><strong>C</strong>: ❌ Sai — re-provision hạ tầng mỗi lần deploy chậm; Route 53 weighted bị ảnh hưởng bởi DNS TTL.</li><li><strong>D</strong>: ❌ Sai — rolling thay AMI chậm, rollback phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Blue/green deployment</li><li>Elastic Beanstalk swap URLs</li><li>Rollback nhanh</li><li>Nhiều lần mỗi giờ</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp release thường xuyên + rollback nhanh → nghĩ ngay đến blue/green (swap environment).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#86",
          "answers": [
            {
              "choice": "<p>A. Deploy a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Specify AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application. To deploy, swap the staging and production environment URLs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Systems Manager to re-provision the infrastructure for each deployment. Update the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and use Amazon Route 53 weighted routing to point to the new environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Roll out the application updates as part of an Auto Scaling event using prebuilt AMIs. Use new versions of the AMIs to add instances. and phase out all instances that use the previous AMI version with the configured termination policy during a deployment event.</p>",
              "correct": false,
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
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br><br>Which solution is the MOST cost-effective way to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: báo cáo chi phí hàng tháng cho từng business unit và cảnh báo vượt ngưỡng.</li><li>Requirement chính: giải pháp tập trung, MOST cost-effective.</li><li>Ưu tiên: dùng tag sẵn có (application, environment, owner), quản lý từ management account.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>AWS Budgets và Cost Explorer ở management account thấy toàn bộ chi phí của organization, group theo tag, dùng SNS để thông báo; không tốn phát triển thêm.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — cấu hình từng account, không tập trung.</li><li><strong>B</strong>: ✅ Đúng — Budgets + Cost Explorer ở management account, theo tag.</li><li><strong>C</strong>: ❌ Sai — cấu hình từng account, và dashboard Billing không tạo báo cáo tùy biến.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — CUR + Lambda tự xây, tốn công và chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Budgets</li><li>Cost Explorer</li><li>Management account</li><li>Cost allocation tags</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp chi phí tập trung theo tag + alert ngưỡng → nghĩ ngay đến AWS Budgets + Cost Explorer ở management account.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Budgets in the organization's management account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's management account to create monthly reports for each business unit.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Cost and Usage Reports in the organization's management account and configure reports grouped by application, environment. and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#89",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CloudFormation to deploy its infrastructure. The company is concerned that, if a production CloudFormation stack is deleted, important data stored in Amazon RDS databases or Amazon EBS volumes might also be deleted.<br><br>How can the company prevent users from accidentally deleting data in this way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tránh mất dữ liệu RDS/EBS khi CloudFormation stack bị xóa.</li><li>Requirement chính: bảo vệ dữ liệu khi delete stack.</li><li>Ưu tiên: cơ chế native, đơn giản.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>DeletionPolicy (Retain hoặc Snapshot) trong template giữ lại hoặc snapshot resource khi stack bị xóa.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — DeletionPolicy Retain/Snapshot.</li><li><strong>B</strong>: ❌ Sai — stack policy chỉ ngăn update, không ngăn delete stack.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — deny qua IAM gây lỗi cho thao tác xóa stack hợp lệ, phức tạp.</li><li><strong>D</strong>: ❌ Sai — AWS Config rules chỉ đánh giá/phát hiện, không ngăn chặn xóa.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DeletionPolicy</li><li>Retain / Snapshot</li><li>Stack deletion</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp bảo vệ data khi xóa stack → nghĩ ngay đến DeletionPolicy.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>A. Modify the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a stack policy that disallows the deletion of RDS and EBS resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify IAM policies lo deny deleting RDS and EBS resources that are tagged with an \"aws:cloudformation:stack-name\" tag.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Config rules to prevent deleting RDS and EBS resources.</p>",
              "correct": false,
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
      "question_id": "#92",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application collects and stores a large amount of unstructured data in an Amazon S3 bucket. The S3 bucket contains several terabytes of data and uses the S3 Standard storage class. The data increases in size by several gigabytes every day.<br><br>The company needs to query and analyze the data. The company does not access data that is more than 1 year old. However, the company must retain all the data indefinitely for compliance reasons.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: query dữ liệu unstructured nhiều TB trong S3 và lưu trữ dài hạn cho compliance.</li><li>Requirement chính: MOST cost-effective, data cũ hơn 1 năm không truy cập nhưng phải giữ mãi.</li><li>Ưu tiên: cost.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Athena + Glue Data Catalog là serverless, trả tiền theo query; Lifecycle policy chuyển sang S3 Glacier Deep Archive có chi phí lưu trữ thấp nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 Select chỉ query trong một object, không phù hợp phân tích nhiều object.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Redshift Spectrum cần cluster Redshift, tốn kém hơn.</li><li><strong>C</strong>: ✅ Đúng — Athena serverless + Glue Data Catalog + Deep Archive.</li><li><strong>D</strong>: ❌ Sai — Redshift Spectrum tốn kém và Intelligent-Tiering không rẻ bằng Deep Archive cho dữ liệu không truy cập.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Athena + Glue Data Catalog</li><li>Glacier Deep Archive</li><li>S3 Lifecycle</li><li>MOST cost-effective</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp query data trong S3 rẻ nhất → nghĩ ngay đến Athena; giữ lâu dài, ít truy cập → Deep Archive.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>A. Use S3 Select to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Redshift Spectrum to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old 10 S3 Glacier Deep Archive.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Glue Data Catalog and Amazon Athena to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Glacier Deep Archive.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Redshift Spectrum to query the data. Create an S3 Lifecycle policy to transition data that is more than 1 year old to S3 Intelligent-Tiering.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
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
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated Its forms-processing application to AWS. When users interact with the application, they upload scanned forms as files through a web application. A database stores user metadata and references to files that are stored in Amazon S3. The web application runs on Amazon EC2 instances and an Amazon RDS for PostgreSQL database.<br><br>When forms are uploaded, the application sends notifications to a team through Amazon Simple Notification Service (Amazon SNS). A team member then logs in and processes each form. The team member performs data validation on the form and extracts relevant data before entering the information into another system that uses an API.<br><br>A solutions architect needs to automate the manual processing of the forms. The solution must provide accurate form extraction. minimize time to market, and minimize tong-term operational overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tự động xử lý form scan (OCR, trích xuất dữ liệu).</li><li>Requirement chính: extraction chính xác, minimize time to market, minimize long-term operational overhead.</li><li>Ưu tiên: managed AI service, serverless.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon Textract là dịch vụ managed chuyên trích xuất text/form, Amazon Comprehend hỗ trợ phân tích; kết hợp Step Functions và Lambda serverless thì ít vận hành nhất.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tự phát triển OCR trên EKS/EC2, tốn công và vận hành.</li><li><strong>B</strong>: ❌ Sai — tự train/host model trên EC2, tốn vận hành.</li><li><strong>C</strong>: ❌ Sai — tự host model trên SageMaker và dùng ElastiCache không phù hợp lưu output.</li><li><strong>D</strong>: ✅ Đúng — Textract + Comprehend, Step Functions + Lambda.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon Textract</li><li>Amazon Comprehend</li><li>Step Functions + Lambda</li><li>Minimize operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp OCR/trích xuất form → nghĩ ngay đến Amazon Textract.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Develop custom libraries to perform optical character recognition (OCR) on the forms. Deploy the libraries to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster as an application tier. Use this tier to process the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data into an Amazon DynamoDB table. Submit the data to the target system's APL. Host the new application tier on EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use artificial intelligence and machine learning (AI/ML) models that are trained and hosted on an EC2 instance to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host a new application tier on EC2 instances. Use this tier to call endpoints that host artificial intelligence and machine teaming (AI/ML) models that are trained and hosted in Amazon SageMaker to perform optical character recognition (OCR) on the forms. Store the output in Amazon ElastiCache. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Extend the system with an application tier that uses AWS Step Functions and AWS Lambda. Configure this tier to use Amazon Textract and Amazon Comprehend to perform optical character recognition (OCR) on the forms when forms are uploaded. Store the output in Amazon S3. Parse this output by extracting the data that is required within the application tier. Submit the data to the target system's API.</p>",
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
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to implement a client-side encryption mechanism for objects that will be stored in a new Amazon S3 bucket. The solutions architect created a CMK that is stored in AWS Key Management Service (AWS KMS) for this purpose.<br><br>The solutions architect created the following IAM policy and attached it to an IAM role:<br><br>//IMG//<br><br><br>During tests, the solutions architect was able to successfully get existing test objects in the S3 bucket. However, attempts to upload a new object resulted in an error message. The error message stated that the action was forbidden.<br><br>Which action must the solutions architect add to the IAM policy to meet all the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: client-side encryption với KMS CMK, get object được nhưng upload bị forbidden.</li><li>Requirement chính: bổ sung KMS permission còn thiếu cho việc upload (encrypt).</li><li>Ưu tiên: đúng action KMS cho envelope encryption.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Client-side encryption dùng envelope encryption: client gọi kms:GenerateDataKey để lấy data key mã hóa object trước khi upload (decrypt đã được phép nên GET chạy được).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — kms:GenerateDataKey tạo data key cho envelope encryption.</li><li><strong>B</strong>: ❌ Sai — GetKeyPolicy chỉ xem key policy, không phải encrypt.</li><li><strong>C</strong>: ❌ Sai — GetPublicKey dành cho asymmetric key.</li><li><strong>D</strong>: ❌ Sai — Sign dành cho signing với asymmetric key.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Client-side encryption</li><li>Envelope encryption</li><li>kms:GenerateDataKey</li><li>Upload forbidden</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp client-side encryption với KMS cần ghi object → nghĩ ngay đến kms:GenerateDataKey.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#96",
          "answers": [
            {
              "choice": "<p>A. kms:GenerateDataKey</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. kms:GetKeyPolicy</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. kms:GetPublicKey</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. kms:Sign</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer. The company wants to improve the security posture of the application and plans to use AWS WAF web ACLs. The solution must not adversely affect legitimate traffic to the application.<br><br>How should a solutions architect configure the web ACLs to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: dùng AWS WAF web ACL cho ứng dụng sau ALB.</li><li>Requirement chính: tăng bảo mật nhưng không ảnh hưởng traffic hợp lệ (tránh false positive).</li><li>Ưu tiên: triển khai an toàn, có kiểm chứng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đặt rule ở chế độ Count trước, bật logging để phân tích false positives, tinh chỉnh rồi mới chuyển sang Block dần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Count, logging, phân tích, rồi chuyển sang Block.</li><li><strong>B</strong>: ❌ Sai — chỉ dùng rate-based rules không đủ bảo mật toàn diện.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Block ngay có thể chặn nhầm traffic hợp lệ.</li><li><strong>D</strong>: ❌ Sai — action Allow không tăng bảo mật, chỉ dùng custom rule group là hạn chế.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF Count mode</li><li>WAF logging</li><li>False positives</li><li>Count → Block</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp triển khai WAF không ảnh hưởng traffic hợp lệ → nghĩ ngay đến Count mode trước, sau đó Block.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#97",
          "answers": [
            {
              "choice": "<p>A. Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use only rate-based rules in the web ACLs, and set the throttle limit as high as possible. Temporarily block all requests that exceed the limit. Define nested rules to narrow the scope of the rate tracking.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the action of the web ACL rules to Block. Use only AWS managed rule groups in the web ACLs. Evaluate the rule groups by using Amazon CloudWatch metrics with AWS WAF sampled requests or AWS WAF logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use only custom rule groups in the web ACLs, and set the action to Allow. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Allow to Block.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.<br><br>The company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company’s on-premises network. Developers within each account are responsible for adding new IP CIDR ranges to their security groups. The security team has its own AWS account. Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.<br><br>The solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: phân phối danh sách CIDR chung cho nhiều account trong Organizations.</li><li>Requirement chính: LEAST operational overhead.</li><li>Ưu tiên: quản lý tập trung, cập nhật tự động.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Một customer-managed prefix list ở account security, chia sẻ qua AWS Resource Access Manager (RAM) cho cả organization; cập nhật một chỗ là mọi security group tham chiếu tự đồng bộ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — SNS + Lambda mỗi account tự xây, tốn vận hành.</li><li><strong>B</strong>: ❌ Sai — prefix list riêng mỗi account phải cập nhật thủ công từng nơi.</li><li><strong>C</strong>: ✅ Đúng — prefix list dùng chung qua RAM.</li><li><strong>D</strong>: ❌ Sai — Lambda cross-account với IAM role từng account, phức tạp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Customer-managed prefix list</li><li>AWS RAM</li><li>Share across organization</li><li>Security group rules</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phân phối CIDR chung cho nhiều account → nghĩ ngay đến prefix list + RAM.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account. Deploy an AWS Lambda function in each AWS account. Configure the Lambda function to run every time an SNS topic receives a message. Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account. Instruct the security team to distribute changes by publishing messages to its SNS topic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new customer-managed prefix lists in each AWS account within the organization. Populate the prefix lists in each account with all internal CIDR ranges. Notify the owner of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups. Instruct the security team to share updates with each AWS account owner.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new customer-managed prefix list in the security team’s AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in each account in the organization. Grant permissions to update security groups. Deploy an AWS Lambda function in the security team’s AWS account. Configure the Lambda function to take a list of internal IP addresses as input, assume a role in each organization account, and add the list of IP addresses to the security groups in each account.</p>",
              "correct": false,
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
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. Recent application metrics show inconsistent response times and a significant increase in error rates. Calls to third-party services are causing the delays. Currently, the application calls third-party services synchronously by directly invoking an AWS Lambda function.<br><br>A solutions architect needs to decouple the third-party service calls and ensure that all the calls are eventually completed.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: gọi Lambda đồng bộ tới dịch vụ bên thứ ba gây chậm và lỗi.</li><li>Requirement chính: decouple, đảm bảo mọi lời gọi cuối cùng đều hoàn thành.</li><li>Ưu tiên: reliability, buffering.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Amazon SQS lưu message bền vững, Lambda poll và retry khi thất bại (có thể kèm DLQ), đảm bảo mọi call cuối cùng được xử lý.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — SQS đệm, retry, decouple.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Step Functions là orchestration, không phải buffer decouple đơn giản.</li><li><strong>C</strong>: ❌ Sai — EventBridge rule không đệm lâu dài với đảm bảo xử lý giống SQS.</li><li><strong>D</strong>: ❌ Sai — SNS không \"lưu\" message; chỉ push, retry hạn chế.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon SQS</li><li>Decouple</li><li>Eventually completed</li><li>Retry / DLQ</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp decouple + đảm bảo cuối cùng hoàn thành → nghĩ ngay đến Amazon SQS.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#100",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon Simple Queue Service (Amazon SQS) queue to store events and invoke the Lambda function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Step Functions state machine to pass events to the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon EventBridge rule to pass events to the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Simple Notification Service (Amazon SNS) topic to store events and Invoke the Lambda function.</p>",
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
