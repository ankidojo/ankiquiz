var SAP_C02_VJP_Training_Test_4 = 
{
  "msg": "Quiz Questions",
  "data": [
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
    }
  ]
};
