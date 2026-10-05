var SAP_C02_Part4 = 
{
  "msg": "Quiz Questions",
  "data": [
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
      "question_id": "#323",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company processes environmental data. The company has set up sensors to provide a continuous stream of data from different areas in a city. The data is available in JSON format.<br><br>The company wants to use an AWS solution to send the data to a database that does not require fixed schemas for storage. The data must be sent in real time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đẩy dữ liệu JSON stream từ sensor vào database không cần schema cố định, theo thời gian thực.</li><li>Requirement quyết định: schemaless (NoSQL) + real time.</li><li>Ưu tiên: đúng loại database và streaming.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Kinesis Data Streams</strong> xử lý stream thời gian thực, <strong>DynamoDB</strong> là NoSQL không cần schema cố định, phù hợp JSON.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Redshift là data warehouse có schema; Firehose có độ trễ buffer, không thật sự real time.</li><li><strong>B</strong>: ✅ Đúng — Kinesis Data Streams + DynamoDB, real time và schemaless.</li><li><strong>C</strong>: ❌ Sai — Aurora là relational, cần schema cố định.</li><li><strong>D</strong>: ❌ Sai — Firehose không hỗ trợ Keyspaces làm destination.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Kinesis Data Streams</li><li>DynamoDB</li><li>schemaless</li><li>real time</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"không cần fixed schema + real time\" → <strong>Kinesis Data Streams</strong> + <strong>DynamoDB</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#323",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Kinesis Data Firehose to send the data to Amazon Redshift.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Kinesis Data Streams to send the data to Amazon DynamoDB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to send the data to Amazon Aurora.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Kinesis Data Firehose to send the data to Amazon Keyspaces (for Apache Cassandra).</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#324",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application uses MongoDB as a key-value database. According to the company's technical guidelines, all Amazon EC2 instances must be hosted in a private subnet without an internet connection. In addition, all connectivity between applications and databases must be encrypted. The database must be able to scale based on demand.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate ứng dụng dùng MongoDB làm key-value store; EC2 ở private subnet không có internet; kết nối phải mã hóa; database phải scale theo nhu cầu.</li><li>Requirement quyết định: scale tự động và truy cập private.</li><li>Ưu tiên: scalability, security.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DynamoDB on-demand</strong> scale tự động cho workload key-value. <strong>Gateway VPC endpoint</strong> cho DynamoDB cho phép truy cập từ private subnet qua đường nội bộ, không cần internet, và kết nối dùng HTTPS (được mã hóa).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DocumentDB không scale tự động theo nhu cầu; dùng instance endpoint làm mất HA.</li><li><strong>B</strong>: ✅ Đúng — On-demand + gateway endpoint (miễn phí, đúng loại cho DynamoDB).</li><li><strong>C</strong>: ❌ Sai — DynamoDB dùng gateway endpoint, không phải interface endpoint trong tình huống chuẩn của đề.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Cluster endpoint đúng hơn nhưng DocumentDB không tự scale theo nhu cầu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DynamoDB on-demand</li><li>gateway VPC endpoint</li><li>private subnet</li><li>key-value</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"key-value + scale theo nhu cầu + private subnet\" → <strong>DynamoDB on-demand</strong> + <strong>gateway VPC endpoint</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#324",
          "answers": [
            {
              "choice": "<p>A. Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the instance endpoint to connect to Amazon DocumentDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new Amazon DynamoDB tables for the application with on-demand capacity. Use a gateway VPC endpoint for DynamoDB to connect to the DynamoDB tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create new Amazon DynamoDB tables for the application with on-demand capacity. Use an interface VPC endpoint for DynamoDB to connect to the DynamoDB tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the cluster endpoint to connect to Amazon DocumentDB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#325",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on Amazon EC2 instances in the AWS Cloud. The application is using a MongoDB database with a replica set as its data tier. The MongoDB database is installed on systems in the company’s on-premises data center and is accessible through an AWS Direct Connect connection to the data center environment.<br><br>A solutions architect must migrate the on-premises MongoDB database to Amazon DocumentDB (with MongoDB compatibility).<br><br>Which strategy should the solutions architect choose to perform this migration?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate MongoDB on-premises (replica set) sang Amazon DocumentDB qua Direct Connect.</li><li>Requirement quyết định: công cụ migration phù hợp, ít downtime.</li><li>Ưu tiên: managed, liên tục.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DMS</strong> hỗ trợ MongoDB làm source và DocumentDB làm target, với <strong>CDC</strong> để đồng bộ liên tục khi cutover.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — MongoDB Community trên EC2 không phải DocumentDB; không có replication synchronous kiểu này.</li><li><strong>B</strong>: ✅ Đúng — DMS replication instance + CDC + task.</li><li><strong>C</strong>: ❌ Sai — Data Pipeline không có data node cho MongoDB/DocumentDB và đã ở chế độ bảo trì.</li><li><strong>D</strong>: ❌ Sai — Glue crawler dùng để khám phá schema, không phải công cụ replication liên tục.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS DMS</li><li>CDC</li><li>DocumentDB</li><li>MongoDB source endpoint</li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"MongoDB sang DocumentDB\" → nghĩ ngay đến <strong>AWS DMS</strong> với <strong>CDC</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#325",
          "answers": [
            {
              "choice": "<p>A. Create a fleet of EC2 instances. Install MongoDB Community Edition on the EC2 instances, and create a database. Configure continuous synchronous replication with the database that is running in the on-premises data center.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Database Migration Service (AWS DMS) replication instance. Create a source endpoint for the on-premises MongoDB database by using change data capture (CDC). Create a target endpoint for the Amazon DocumentDB database. Create and run a DMS migration task.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a data migration pipeline by using AWS Data Pipeline. Define data nodes for the on-premises MongoDB database and the Amazon DocumentDB database. Create a scheduled task to run the data pipeline.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a source endpoint for the on-premises MongoDB database by using AWS Glue crawlers. Configure continuous asynchronous replication between the MongoDB database and the Amazon DocumentDB database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#326",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is rearchitecting its applications to run on AWS. The company’s infrastructure includes multiple Amazon EC2 instances. The company's development team needs different levels of access. The company wants to implement a policy that requires all Windows EC2 instances to be joined to an Active Directory domain on AWS. The company also wants to implement enhanced security processes such as multi-factor authentication (MFA). The company wants to use managed AWS services wherever possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: bắt buộc Windows EC2 join Active Directory trên AWS, có MFA, phân quyền nhiều mức cho dev.</li><li>Requirement quyết định: MFA + dùng managed service.</li><li>Ưu tiên: tính năng AD đầy đủ, ít vận hành.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Directory Service for Microsoft Active Directory</strong> (AWS Managed Microsoft AD) là AD thật, hỗ trợ MFA (qua RADIUS), Group Policy, domain join. Việc cấu hình domain security (Group Policy, user, group) cần một Windows EC2 instance đã join domain có cài AD admin tools.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Managed AD đúng, nhưng Workspace không phải công cụ phù hợp để quản trị domain; EC2 instance mới là cách chuẩn.</li><li><strong>B</strong>: ✅ Đúng — Managed Microsoft AD + EC2 Windows làm management instance.</li><li><strong>C</strong>: ❌ Sai — Simple AD không hỗ trợ MFA, không hỗ trợ đầy đủ tính năng AD.</li><li><strong>D</strong>: ❌ Sai — Simple AD không có MFA và dùng Workspace không hợp lý.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS Managed Microsoft AD, MFA, Simple AD không có MFA, domain join, management EC2 instance.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp AD + MFA + domain join Windows → nghĩ ngay đến AWS Managed Microsoft AD (không phải Simple AD).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#326",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Directory Service for Microsoft Active Directory implementation. Launch an Amazon Workspace. Connect to and use the Workspace for domain security configuration tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Directory Service for Microsoft Active Directory implementation. Launch an EC2 instance. Connect to and use the EC2 instance for domain security configuration tasks.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Directory Service Simple AD implementation. Launch an EC2 instance. Connect to and use the EC2 instance for domain security configuration tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Directory Service Simple AD implementation. Launch an Amazon Workspace. Connect to and use the Workspace for domain security configuration tasks.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#327",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises application to AWS. The database for the application stores structured product data and temporary user session data. The company needs to decouple the product data from the user session data. The company also needs to implement replication in another AWS Region for disaster recovery.<br><br>Which solution will meet these requirements with the HIGHEST performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tách product data (structured) khỏi session data (tạm thời), DR sang Region khác.</li><li>Requirement quyết định: HIGHEST performance cho từng loại dữ liệu.</li><li>Ưu tiên: performance + cross-Region replication.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Product data có cấu trúc quan hệ hợp với <strong>Amazon RDS</strong> + cross-Region read replica. Session data cần độ trễ thấp, key-value, nên dùng <strong>DynamoDB global table</strong> (multi-Region replication, single-digit ms).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — gộp chung một RDS, không thực sự decouple và hiệu năng session kém.</li><li><strong>B</strong>: ❌ Sai — ElastiCache for Memcached không hỗ trợ global datastore (chỉ Redis có).</li><li><strong>C</strong>: ❌ Sai — chuyển product data có cấu trúc sang DynamoDB không phù hợp; thêm DAX cho cả hai không cần thiết.</li><li><strong>D</strong>: ✅ Đúng — RDS cho product, DynamoDB global table cho session.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>DynamoDB global table, session data, RDS cross-Region read replica, Global Datastore chỉ có ở Redis.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp session data + replicate multi-Region → nghĩ ngay đến DynamoDB global tables.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#327",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon RDS DB instance with separate schemas to host the product data and the user session data. Configure a read replica for the DB instance in another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon RDS DB instance to host the product data. Configure a read replica for the DB instance in another Region. Create a global datastore in Amazon ElastiCache for Memcached to host the user session data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two Amazon DynamoDB global tables. Use one global table to host the product data. Use the other global table to host the user session data. Use DynamoDB Accelerator (DAX) for caching.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon RDS DB instance to host the product data. Configure a read replica for the DB instance in another Region. Create an Amazon DynamoDB global table to host the user session data.</p>",
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
      "question_id": "#328",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company orchestrates a multi-account structure on AWS by using AWS Control Tower. The company is using AWS Organizations, AWS Config, and AWS Trusted Advisor. The company has a specific OU for development accounts that developers use to experiment on AWS. The company has hundreds of developers, and each developer has an individual development account.<br><br>The company wants to optimize costs in these development accounts. Amazon EC2 instances and Amazon RDS instances in these accounts must be burstable. The company wants to disallow the use of other services that are not relevant.<br><br>What should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giới hạn tài nguyên trong các development account (chỉ burstable EC2/RDS, chặn service không liên quan).</li><li>Requirement quyết định: ngăn chặn (prevent) trong môi trường dùng AWS Control Tower.</li><li>Ưu tiên: tối ưu chi phí, quản trị tập trung.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Preventive control (guardrail)</strong> của <strong>AWS Control Tower</strong> được triển khai bằng SCP, chặn hành động trước khi xảy ra, áp dụng ở mức OU và được Control Tower quản lý nên phù hợp nhất.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — SCP tự tạo hoạt động được nhưng nằm ngoài quản lý của Control Tower, dễ gây drift.</li><li><strong>B</strong>: ❌ Sai — detective control chỉ phát hiện, không ngăn chặn.</li><li><strong>C</strong>: ✅ Đúng — preventive control (SCP) quản lý bởi Control Tower, áp dụng cho OU.</li><li><strong>D</strong>: ❌ Sai — AWS Config rule chỉ đánh giá/phát hiện, không chặn, lại phải deploy bằng StackSets.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Preventive guardrail, SCP, detective vs preventive, Control Tower, OU.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp 'disallow' trong Control Tower → nghĩ ngay đến preventive control (SCP).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#328",
          "answers": [
            {
              "choice": "<p>A. Create a custom SCP in AWS Organizations to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the SCP to the development OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom detective control (guardrail) in AWS Control Tower. Configure the control (guardrail) to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the control (guardrail) to the development OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a custom preventive control (guardrail) in AWS Control Tower. Configure the control (guardrail) to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the control (guardrail) to the development OU.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config rule in the AWS Control Tower account. Configure the AWS Config rule to allow the deployment of only burstable instances and to disallow services that are not relevant. Deploy the AWS Config rule to the development OU by using AWS CloudFormation StackSets.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#329",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company runs a complex, multi-tier application on Amazon EC2 instances and AWS Lambda functions. The application stores temporary data in Amazon S3. The S3 objects are valid for only 45 minutes and are deleted after 24 hours.<br><br>The company deploys each version of the application by launching an AWS CloudFormation stack. The stack creates all resources that are required to run the application. When the company deploys and validates a new application version, the company deletes the CloudFormation stack of the old version.<br><br>The company recently tried to delete the CloudFormation stack of an old application version, but the operation failed. An analysis shows that CloudFormation failed to delete an existing S3 bucket. A solutions architect needs to resolve this issue without making major changes to the application's architecture.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: xóa CloudFormation stack thất bại vì S3 bucket còn object.</li><li>Requirement quyết định: sửa lỗi mà không đổi kiến trúc lớn.</li><li>Ưu tiên: ít thay đổi, tự động hóa.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>CloudFormation không xóa được S3 bucket còn object. <strong>Custom resource</strong> (Lambda) chạy khi delete stack sẽ làm rỗng bucket trước. `DependsOn` bảo đảm custom resource bị xóa trước bucket, tức Lambda chạy trước khi bucket bị xóa.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Lambda custom resource empty bucket khi delete.</li><li><strong>B</strong>: ❌ Sai — chuyển sang EFS là thay đổi kiến trúc lớn.</li><li><strong>C</strong>: ❌ Sai — Lifecycle rule không thể expire theo phút (tối thiểu 1 ngày), không đảm bảo bucket rỗng.</li><li><strong>D</strong>: ❌ Sai — DeletionPolicy Delete là mặc định, không làm rỗng bucket.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFormation custom resource, DependsOn, bucket phải rỗng mới xóa được, DeletionPolicy.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp stack delete fail vì S3 bucket không rỗng → nghĩ ngay đến Lambda-backed custom resource để empty bucket.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#329",
          "answers": [
            {
              "choice": "<p>A. Implement a Lambda function that deletes all files from a given S3 bucket. Integrate this Lambda function as a custom resource into the CloudFormation stack. Ensure that the custom resource has a DependsOn attribute that points to the S3 bucket's resource.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the CloudFormation template to provision an Amazon Elastic File System (Amazon EFS) file system to store the temporary files there instead of in Amazon S3. Configure the Lambda functions to run in the same VPC as the file system. Mount the file system to the EC2 instances and Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the CloudF ormation stack to create an S3 Lifecycle rule that expires all objects 45 minutes after creation. Add a DependsOn attribute that points to the S3 bucket’s resource.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the CloudFormation stack to attach a DeletionPolicy attribute with a value of Delete to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#330",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a mobile game. The backend for the game runs on several virtual machines located in an on-premises data center. The business logic is exposed using a REST API with multiple functions. Player session data is stored in central file storage. Backend services use different API keys for throttling and to distinguish between live and test traffic.<br><br>The load on the game backend varies throughout the day. During peak hours, the server capacity is not sufficient. There are also latency issues when fetching player session data. Management has asked a solutions architect to present a cloud architecture that can handle the game’s varying load and provide low-latency data access. The API model should not be changed.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: backend game tải biến động, độ trễ lấy session cao, giữ nguyên REST API model.</li><li>Requirement quyết định: API keys + throttling theo client, scale tự động, low latency.</li><li>Ưu tiên: serverless, scalable, low-latency data.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon API Gateway</strong> hỗ trợ REST API, API keys và usage plans (throttling, phân biệt live/test). <strong>Lambda</strong> scale theo tải, <strong>DynamoDB on-demand</strong> cho độ trễ mili giây và tự scale.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — NLB không có API keys/throttling, EC2 và Aurora Serverless kém linh hoạt.</li><li><strong>B</strong>: ❌ Sai — ALB không hỗ trợ API keys và usage plans.</li><li><strong>C</strong>: ✅ Đúng — API Gateway + Lambda + DynamoDB on-demand.</li><li><strong>D</strong>: ❌ Sai — AppSync dành cho GraphQL, đổi API model; Aurora không tối ưu độ trễ.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>API Gateway usage plans, API keys, throttling, DynamoDB on-demand, REST API.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp API keys + throttling + REST → nghĩ ngay đến API Gateway.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#330",
          "answers": [
            {
              "choice": "<p>A. Implement the REST API using a Network Load Balancer (NLB). Run the business logic on an Amazon EC2 instance behind the NLB. Store player session data in Amazon Aurora Serverless.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement the REST API using an Application Load Balancer (ALB). Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement the REST API using Amazon API Gateway. Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement the REST API using AWS AppSync. Run the business logic in AWS Lambda. Store player session data in Amazon Aurora Serverless.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#331",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application to the AWS Cloud. The application runs in an on-premises data center and writes thousands of images into a mounted NFS file system each night. After the company migrates the application, the company will host the application on an Amazon EC2 instance with a mounted Amazon Elastic File System (Amazon EFS) file system.<br><br>The company has established an AWS Direct Connect connection to AWS. Before the migration cutover, a solutions architect must build a process that will replicate the newly created on-premises images to the EFS file system.<br><br>What is the MOST operationally efficient way to replicate the images?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: replicate ảnh từ NFS on-premises sang EFS qua Direct Connect.</li><li>Requirement quyết định: MOST operationally efficient.</li><li>Ưu tiên: ít thành phần, ít code, tự động.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DataSync</strong> đồng bộ trực tiếp NFS sang EFS, qua private VIF + VPC interface endpoint, lên lịch chạy định kỳ. Không cần trung gian S3 hay Lambda.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dùng S3 + Lambda, thêm nhiều bước tự quản lý.</li><li><strong>B</strong>: ❌ Sai — File Gateway lưu vào S3, không ghi trực tiếp vào EFS.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — DataSync đúng nhưng vẫn qua S3 + Lambda dư thừa.</li><li><strong>D</strong>: ✅ Đúng — DataSync trực tiếp NFS tới EFS, scheduled task.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>DataSync, NFS to EFS, private VIF, PrivateLink endpoint, scheduled task.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp di chuyển/đồng bộ file on-premises sang EFS → nghĩ ngay đến DataSync.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#331",
          "answers": [
            {
              "choice": "<p>A. Configure a periodic process to run the aws s3 sync command from the on-premises file system to Amazon S3. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file gateway file system on the on-premises server. Configure a process to periodically copy the images to the mount point.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an S3 bucket by using a public VIF. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF. Configure a DataSync scheduled task to send the images to the EFS file system every 24 hours.</p>",
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
      "question_id": "#332",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated a web application from an on-premises data center to the AWS Cloud. The web application infrastructure consists of an Amazon CloudFront distribution that routes to an Application Load Balancer (ALB), with Amazon Elastic Container Service (Amazon ECS) to process requests. A recent security audit revealed that the web application is accessible by using both CloudFront and ALB endpoints. However, the company requires that the web application must be accessible only by using the CloudFront endpoint.<br><br>Which solution will meet this requirement with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chỉ cho truy cập ALB qua CloudFront.</li><li>Requirement quyết định: LEAST effort.</li><li>Ưu tiên: đơn giản, tự cập nhật khi IP CloudFront đổi.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS-managed prefix list</strong> `com.amazonaws.global.cloudfront.origin-facing` chứa IP origin-facing của CloudFront và AWS tự cập nhật; chỉ cần tham chiếu trong security group của ALB.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — không thể gắn security group vào CloudFront distribution.</li><li><strong>B</strong>: ✅ Đúng — managed prefix list, ít công sức nhất.</li><li><strong>C</strong>: ❌ Sai — chuyển ALB sang internal làm CloudFront không truy cập được origin theo cách này, phức tạp.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — phải tự trích xuất và cập nhật IP, dễ lỗi và tốn công.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CloudFront origin-facing managed prefix list, ALB security group, ip-ranges.json.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp khóa ALB chỉ cho CloudFront → nghĩ ngay đến CloudFront managed prefix list (kèm custom header nếu cần).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#332",
          "answers": [
            {
              "choice": "<p>A. Create a new security group and attach it to the CloudFront distribution. Update the ALB security group ingress to allow access only from the CloudFront security group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update ALB security group ingress to allow access only from the com.amazonaws.global.cloudfront.origin-facing CloudFront managed prefix list.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a com.amazonaws.region.elasticloadbalancing VPC interface endpoint for Elastic Load Balancing. Update the ALB scheme from internet-facing to internal.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Extract CloudFront IPs from the AWS provided ip-ranges.json document. Update ALB security group ingress to allow access only from CloudFront IPs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#333",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a community forum site using an Application Load Balancer (ALB) and a Docker application hosted in an Amazon ECS cluster. The site data is stored in Amazon RDS for MySQL and the container image is stored in ECR. The company needs to provide their customers with a disaster recovery SLA with an RTO of no more than 24 hours and RPO of no more than 8 hours.<br><br>Which of the following solutions is the MOST cost-effective way to meet the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DR cho ECS + RDS MySQL với RTO 24 giờ, RPO 8 giờ.</li><li>Requirement quyết định: MOST cost-effective.</li><li>Ưu tiên: chi phí thấp, RTO/RPO khá thoải mái.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>RTO 24 giờ cho phép chiến lược <strong>backup and restore</strong>: copy ECR image và RDS snapshot (mỗi 8 giờ) sang Region phụ, khi sự cố mới dùng <strong>CloudFormation</strong> dựng hạ tầng. Không chạy tài nguyên ở Region phụ nên rẻ nhất.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — chạy full hạ tầng ở hai Region, tốn kém; RDS multi-region replication không phải cơ chế đúng.</li><li><strong>B</strong>: ✅ Đúng — backup and restore, rẻ nhất, đạt RPO 8h và RTO 24h.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — dựng sẵn hạ tầng thứ cấp, backup mỗi giờ, quy trình phức tạp, tốn hơn.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — pilot light đạt yêu cầu nhưng đắt hơn backup and restore.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>RTO 24h, RPO 8h, backup and restore, snapshot copy cross-Region, CloudFormation.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp RTO/RPO tính bằng giờ + cost-effective → nghĩ ngay đến backup and restore.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#333",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation to deploy identical ALB, EC2, ECS and RDS resources in two regions. Schedule RDS snapshots every 8 hours. Use RDS multi-region replication to update the secondary region's copy of the database. In the event of a failure, restore from the latest snapshot, and use an Amazon Route 53 DNS failover policy to automatically redirect customers to the ALB in the secondary region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the Docker image in ECR in two regions. Schedule RDS snapshots every 8 hours with snapshots copied to the secondary region. In the event of a failure, use AWS CloudFormation to deploy the ALB, EC2, ECS and RDS resources in the secondary region, restore from the latest snapshot, and update the DNS record to point to the ALB in the secondary region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudFormation to deploy identical ALB, EC2, ECS, and RDS resources in a secondary region. Schedule hourly RDS MySQL backups to Amazon S3 and use cross-region replication to replicate data to a bucket in the secondary region. In the event of a failure, import the latest Docker image to Amazon ECR in the secondary region, deploy to the EC2 instance, restore the latest MySQL backup, and update the DNS record to point to the ALB in the secondary region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a pilot light environment in a secondary region with an ALB and a minimal resource EC2 deployment for Docker in an AWS Auto Scaling group with a scaling policy to increase instance size and number of nodes. Create a cross-region read replica of the RDS data. In the event of a failure, promote the replica to primary, and update the DNS record to point to the ALB in the secondary region.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#334",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its infrastructure to the AWS Cloud. The company must comply with a variety of regulatory standards for different projects. The company needs a multi-account environment.<br><br>A solutions architect needs to prepare the baseline infrastructure. The solution must provide a consistent baseline of management and security, but it must allow flexibility for different compliance requirements within various AWS accounts. The solution also needs to integrate with the existing on-premises Active Directory Federation Services (AD FS) server.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: baseline multi-account nhất quán, linh hoạt compliance, tích hợp AD FS.</li><li>Requirement quyết định: LEAST operational overhead.</li><li>Ưu tiên: tự động hóa landing zone, SSO.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Control Tower</strong> dựng sẵn landing zone, guardrails, logging và OU; thêm OU tùy theo compliance. <strong>IAM Identity Center</strong> kết nối AD FS để SSO tập trung cho nhiều account.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — làm thủ công, một SCP và một OU, thiếu linh hoạt, dùng IAM IdP từng account.</li><li><strong>B</strong>: ✅ Đúng — Control Tower + IAM Identity Center với AD FS.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — tự dựng mọi thứ, overhead cao.</li><li><strong>D</strong>: ❌ Sai — IAM identity provider theo từng account, không quản lý tập trung bằng Identity Center.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Control Tower, guardrails, IAM Identity Center, AD FS, landing zone.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp multi-account baseline + ít vận hành → nghĩ ngay đến Control Tower + IAM Identity Center.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#334",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Create a single SCP for least privilege access across all accounts. Create a single OU for all accounts. Configure an IAM identity provider for federation with the on-premises AD FS server. Configure a central logging account with a defined process for log generating services to send log events to the central account. Enable AWS Config in the central account with conformance packs for all accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organization in AWS Organizations. Enable AWS Control Tower on the organization. Review included controls (guardrails) for SCPs. Check AWS Config for areas that require additions. Add OUs as necessary. Connect AWS IAM Identity Center (AWS Single Sign-On) to the on-premises AD FS server.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization in AWS Organizations. Create SCPs for least privilege access. Create an OU structure, and use it to group AWS accounts. Connect AWS IAM Identity Center (AWS Single Sign-On) to the on-premises AD FS server. Configure a central logging account with a defined process for log generating services to send log events to the central account. Enable AWS Config in the central account with aggregators and conformance packs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Enable AWS Control Tower on the organization. Review included controls (guardrails) for SCPs. Check AWS Config for areas that require additions. Configure an IAM identity provider for federation with the on-premises AD FS server.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#335",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only.<br><br>The magazine is expecting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch.<br><br>Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: giảm response time cho người dùng toàn cầu, traffic chủ yếu read-only.</li><li>Requirement quyết định: optimal performance toàn cầu.</li><li>Ưu tiên: low latency, scale.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora global database</strong> (physical replication) và S3 CRR + web/app tier nhiều Region đưa dữ liệu gần user (D). <strong>Route 53 latency-based routing</strong> và <strong>CloudFront</strong> cache nội dung tĩnh, Auto Scaling xử lý spike (E).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Aurora MySQL dùng logical replication, thay web server bằng S3 không phù hợp site dynamic.</li><li><strong>B</strong>: ❌ Sai — Direct Connect không giúp user internet toàn cầu.</li><li><strong>C</strong>: ❌ Sai — chuyển sang RDS MySQL không cải thiện hiệu năng/độ trễ toàn cầu.</li><li><strong>D</strong>: ✅ Đúng — Aurora global database, S3 CRR, deploy multi-Region.</li><li><strong>E</strong>: ✅ Đúng — Route 53 latency routing, CloudFront, Auto Scaling.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Aurora global database, CloudFront, Route 53 latency-based routing, S3 CRR, read-only traffic.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp audience toàn cầu + giảm latency → nghĩ ngay đến CloudFront + Route 53 latency routing + Aurora global database.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#335",
          "answers": [
            {
              "choice": "<p>A. Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application tiers in Regions across the world.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers – web, application, and database – are in private subnets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.</p>",
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
      "question_id": "#336",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming company needs to optimize the cost of its workloads on AWS. The company uses a dedicated account to host the production environment for its online gaming application and an analytics application.<br><br>Amazon EC2 instances host the gaming application and must always be available. The EC2 instances run all year. The analytics application uses data that is stored in Amazon S3. The analytics application can be interrupted and resumed without issue.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: tối ưu chi phí cho game app (chạy 24/7 quanh năm) và analytics (chịu gián đoạn).</li><li>Requirement quyết định: MOST cost-effectively với workload ổn định vs chịu ngắt.</li><li>Ưu tiên: cost.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Workload chạy liên tục cả năm hợp với <strong>EC2 Instance Savings Plan</strong>; workload có thể ngắt/tiếp tục hợp với <strong>Spot Instances</strong> (giảm tới ~90%).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — analytics dùng On-Demand đắt hơn Spot.</li><li><strong>B</strong>: ✅ Đúng — Savings Plan cho game, Spot cho analytics.</li><li><strong>C</strong>: ❌ Sai — Spot cho game app (phải luôn available) là rủi ro; Service Catalog không giảm giá.</li><li><strong>D</strong>: ❌ Sai — On-Demand cho game đắt, Service Catalog không giảm giá.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>EC2 Instance Savings Plan, Spot Instances, interruptible, always available, run all year.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp workload ổn định chạy liên tục → Savings Plan/RI; gặp workload chịu gián đoạn → Spot.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#336",
          "answers": [
            {
              "choice": "<p>A. Purchase an EC2 Instance Savings Plan for the online gaming application instances. Use On-Demand Instances for the analytics application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase an EC2 Instance Savings Plan for the online gaming application instances. Use Spot Instances for the analytics application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Spot Instances for the online gaming application and the analytics application. Set up a catalog in AWS Service Catalog to provision services at a discount.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use On-Demand Instances for the online gaming application. Use Spot Instances for the analytics application. Set up a catalog in AWS Service Catalog to provision services at a discount.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#337",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs applications in hundreds of production AWS accounts. The company uses AWS Organizations with all features enabled and has a centralized backup operation that uses AWS Backup.<br><br>The company is concerned about ransomware attacks. To address this concern, the company has created a new policy that all backups must be resilient to breaches of privileged-user credentials in any production account.<br><br>Which combination of steps will meet this new requirement? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: backup phải chống được việc lộ credentials của privileged user trong production account (ransomware).</li><li>Requirement quyết định: backup bất biến và nằm ngoài tầm với của production account.</li><li>Ưu tiên: security, immutability.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cross-account backup</strong> sang vault ở account non-production (A), <strong>SCP</strong> hạn chế sửa/xóa vault (B), <strong>Vault Lock compliance mode</strong> ngăn xóa/sửa kể cả root (C). Ba lớp cùng bảo vệ backup.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — vault ở account khác, tách khỏi blast radius của production.</li><li><strong>B</strong>: ✅ Đúng — SCP chặn thay đổi vault.</li><li><strong>C</strong>: ✅ Đúng — Vault Lock compliance mode, không thể gỡ sau grace period.</li><li><strong>C (least privilege cho service role)</strong>: ❌ Sai — không chống được privileged user bị lộ credentials.</li><li><strong>D</strong>: ❌ Sai — cold tier không bảo vệ khỏi xóa.</li><li><strong>E</strong>: ❌ Sai — AWS Backup không ghi trực tiếp backup vào S3 bucket tự quản lý như vậy.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Cross-account backup, Backup Vault Lock compliance mode, SCP, ransomware, immutable backup.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp backup chống ransomware/credential bị lộ → nghĩ ngay đến cross-account vault + Vault Lock compliance + SCP.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#337",
          "answers": [
            {
              "choice": "<p>A. Implement cross-account backup with AWS Backup vaults in designated non-production accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an SCP that restricts the modification of AWS Backup vaults.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement AWS Backup Vault Lock in compliance mode.<br>C. Implement least privilege access for the IAM service role that is assigned to AWS Backup.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the backup frequency, lifecycle, and retention period to ensure that at least one backup always exists in the cold tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure AWS Backup to write all backups to an Amazon S3 bucket in a designated non-production account. Ensure that the S3 bucket has S3 Object Lock enabled.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#338",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to aggregate Amazon CloudWatch logs from its AWS accounts into one central logging account. The collected logs must remain in the AWS Region of creation. The central logging account will then process the logs, normalize the logs into standard output format, and stream the output logs to a security tool for more processing.<br><br>A solutions architect must design a solution that can handle a large volume of logging data that needs to be ingested. Less logging will occur outside normal business hours than during normal business hours. The logging solution must scale with the anticipated load. The solutions architect has decided to use an AWS Control Tower design to handle the multi-account logging process.<br><br>Which combination of steps should the solutions architect take to meet the requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C, E</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: gom CloudWatch Logs đa account về một account trung tâm, log giữ trong Region gốc, chuẩn hóa rồi stream sang security tool.</li><li>Requirement quyết định: khối lượng lớn, scale theo tải.</li><li>Ưu tiên: scalable streaming.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudWatch Logs subscription filter</strong> đẩy log vào <strong>Kinesis Data Streams</strong> ở central account (A, C) để ingest khối lượng lớn; <strong>Lambda</strong> ở central account chuẩn hóa và gửi sang security tool (E).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Kinesis data stream làm destination.</li><li><strong>B</strong>: ❌ Sai — CloudWatch Logs subscription không hỗ trợ SQS làm destination.</li><li><strong>C</strong>: ✅ Đúng — IAM role + trust policy + subscription filter tới Kinesis.</li><li><strong>D</strong>: ❌ Sai — SQS không phải destination của subscription filter.</li><li><strong>E</strong>: ✅ Đúng — Lambda xử lý ở central account.</li><li><strong>F</strong>: ❌ Sai — xử lý ở member account làm phân tán, không tập trung.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Subscription filter, Kinesis Data Streams, central logging account, Lambda, destination.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp CloudWatch Logs cross-account + volume lớn → nghĩ ngay đến subscription filter + Kinesis Data Streams.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#338",
          "answers": [
            {
              "choice": "<p>A. Create a destination Amazon Kinesis data stream in the central logging account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a destination Amazon Simple Queue Service (Amazon SQS) queue in the central logging account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role that grants Amazon CloudWatch Logs the permission to add data to the Amazon Kinesis data stream. Create a trust policy. Specify the trust policy in the IAM role. In each member account, create a subscription filter for each log group to send data to the Kinesis data stream.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role that grants Amazon CloudWatch Logs the permission to add data to the Amazon Simple Queue Service (Amazon SQS) queue. Create a trust policy. Specify the trust policy in the IAM role. In each member account, create a single subscription filter for all log groups to send data to the SQS queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Lambda function. Program the Lambda function to normalize the logs in the central logging account and to write the logs to the security tool.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an AWS Lambda function. Program the Lambda function to normalize the logs in the member accounts and to write the logs to the security tool.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#339",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a legacy application from an on-premises VMware environment to AWS. The application server stores 20 TB across attached volumes, and a separate Microsoft SQL Server database stores 30 TB. A dedicated 10 Gbps AWS Direct Connect connection is available. The company wants to rehost the application server on Amazon EC2, replatform the database to Amazon RDS for SQL Server, and minimize cutover downtime. Which combination of steps meets these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D, E</p><p>AWS Transform MGN continuously replicates server disks at the block level and supports tested cutovers with a short downtime window. AWS DMS full load plus ongoing replication moves the SQL Server data while changes continue, so writes need to stop only for the final synchronization. Offline export or appliance-based copies create a much longer cutover window.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#339",
          "answers": [
            {
              "choice": "<p>A. Use VM Import/Export to import the database server after the application is stopped.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the application server VM to an S3 bucket and import the image after the database migration is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy both VMs to an AWS Snowball Edge device and import them during the cutover window.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Transform MGN continuous block-level replication for the application server. Test the target instance, and launch the cutover instance when replication lag is minimal.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Database Migration Service (AWS DMS) with full load and ongoing replication to migrate the database to Amazon RDS for SQL Server, and stop writes only for final cutover.</p>",
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
      "question_id": "#340",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a fleet of servers on premises and operates a fleet of Amazon EC2 instances in its organization in AWS Organizations. The company's AWS accounts contain hundreds of VPCs. The company wants to connect its AWS accounts to its on-premises network. AWS Site-to-Site VPN connections are already established to a single AWS account. The company wants to control which VPCs can communicate with other VPCs.<br><br>Which combination of steps will achieve this level of control with the LEAST operational effort? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, C</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: nối hàng trăm VPC nhiều account và on-premises (VPN), kiểm soát VPC nào nói chuyện với VPC nào.</li><li>Requirement quyết định: LEAST operational effort + kiểm soát routing.</li><li>Ưu tiên: hub-and-spoke, segmentation.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Transit Gateway</strong> chia sẻ qua <strong>AWS RAM</strong> (A), tạo attachment cho mọi VPC và VPN (B), dùng <strong>TGW route tables</strong> với association/propagation để kiểm soát giao tiếp (C).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — TGW tạo một lần, share qua RAM.</li><li><strong>B</strong>: ✅ Đúng — attachment cho VPC và VPN.</li><li><strong>C</strong>: ✅ Đúng — route table của TGW điều khiển ai thấy ai.</li><li><strong>D</strong>: ❌ Sai — peering hàng trăm VPC rất khó quản lý.</li><li><strong>E</strong>: ❌ Sai — không có khái niệm attachment giữa VPC và VPN như vậy.</li><li><strong>F</strong>: ❌ Sai — route table trên VPC không tạo được segmentation tập trung.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Transit Gateway, AWS RAM, attachments, TGW route tables, association.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp hàng trăm VPC + kiểm soát giao tiếp → nghĩ ngay đến Transit Gateway + route tables riêng.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#340",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway in an AWS account. Share the transit gateway across accounts by using AWS Resource Access Manager (AWS RAM).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure attachments to all VPCs and VPNs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup transit gateway route tables. Associate the VPCs and VPNs with the route tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure VPC peering between the VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure attachments between the VPCs and VPNs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Setup route tables on the VPCs and VPNs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#341",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to optimize the cost of its application on AWS. The application uses AWS Lambda functions and Amazon Elastic Container Service (Amazon ECS) containers that run on AWS Fargate. The application is write-heavy and stores data in an Amazon Aurora MySQL database.<br><br>The load on the application is not consistent. The application experiences long periods of no usage, followed by sudden and significant increases and decreases in traffic. The database runs on a memory optimized DB instance that cannot handle the load.<br><br>A solutions architect must design a solution that can scale to handle the changes in traffic.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: DB write-heavy, tải thất thường, có thời gian không dùng, instance hiện tại quá tải.</li><li>Requirement quyết định: MOST cost-effective, scale theo biến động.</li><li>Ưu tiên: auto scaling, trả theo mức dùng.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora Serverless</strong> tự scale capacity và có thể pause khi không dùng, trả phí theo mức sử dụng. <strong>Compute Savings Plans</strong> áp dụng cho Lambda và Fargate (Instance Savings Plans thì không).</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — read replicas không giải quyết write-heavy, Instance Savings Plans không áp dụng Lambda/Fargate.</li><li><strong>B</strong>: ❌ Sai — multi-writer tốn kém, không tối ưu cho tải thất thường; Instance Savings Plans không phù hợp.</li><li><strong>C</strong>: ❌ Sai — global database dành cho multi-Region, không giải quyết scale write và tốn kém.</li><li><strong>D</strong>: ✅ Đúng — Aurora Serverless + Compute Savings Plans.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Aurora Serverless, Compute Savings Plans, Lambda và Fargate, long periods of no usage.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp tải không đều + có lúc không dùng → nghĩ ngay đến Aurora Serverless; Lambda/Fargate → Compute Savings Plans.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#341",
          "answers": [
            {
              "choice": "<p>A. Add additional read replicas to the database. Purchase Instance Savings Plans and RDS Reserved Instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to an Aurora DB cluster that has multiple writer instances. Purchase Instance Savings Plans.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Aurora global database. Purchase Compute Savings Plans and RDS Reserved instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Aurora Serverless v1. Purchase Compute Savings Plans.</p>",
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
      "question_id": "#342",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated an application to the AWS Cloud. The application runs on two Amazon EC2 instances behind an Application Load Balancer (ALB).<br>Application data is stored in a MySQL database that runs on an additional EC2 instance. The application's use of the database is read-heavy.<br><br>The application loads static content from Amazon Elastic Block Store (Amazon EBS) volumes that are attached to each EC2 instance. The static content is updated frequently and must be copied to each EBS volume.<br><br>The load on the application changes throughout the day. During peak hours, the application cannot handle all the incoming requests. Trace data shows that the database cannot handle the read load during peak hours.<br><br>Which solution will improve the reliability of the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: nâng độ tin cậy: web không chịu nổi tải đỉnh, DB không đủ read capacity, static content phải copy đến từng EBS.</li><li>Requirement quyết định: scale compute, shared storage, read scaling cho DB.</li><li>Ưu tiên: reliability, scalability.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ECS Fargate</strong> + Application Auto Scaling xử lý tải đỉnh, <strong>EFS</strong> chia sẻ static content cho mọi container, <strong>Aurora Serverless v2</strong> với reader scale đọc.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda không đọc được EBS volume; EBS không share.</li><li><strong>B</strong>: ❌ Sai — Step Functions không phải ALB target.</li><li><strong>C</strong>: ❌ Sai — một EBS volume không mount cho nhiều Fargate task, DB Multi-AZ không giải quyết read load.</li><li><strong>D</strong>: ✅ Đúng — Fargate + EFS + Aurora Serverless v2 reader.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>ECS Fargate, EFS shared storage, Aurora Serverless v2 reader, Application Auto Scaling, ALB target.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp static content cần share nhiều instance → nghĩ ngay đến EFS; read-heavy DB → Aurora reader.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#342",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to a set of AWS Lambda functions. Set the Lambda functions as targets for the ALB. Create a new single EBS volume for the static content. Configure the Lambda functions to read from the new EBS volume. Migrate the database to an Amazon RDS for MySQL Multi-AZ DB cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application to a set of AWS Step Functions state machines. Set the state machines as targets for the ALCreate an Amazon Elastic File System (Amazon EFS) file system for the static content. Configure the state machines to read from the EFS file system. Migrate the database to Amazon Aurora MySQL Serverless v2 with a reader DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Containerize the application. Migrate the application to an Amazon Elastic Container Service (Amazon ECS) cluster. Use the AWS Fargate launch type for the tasks that host the application. Create a new single EBS volume for the static content. Mount the new EBS volume on the ECS cluster. Configure AWS Application Auto Scaling on the ECS cluster. Set the ECS service as a target for the ALB. Migrate the database to an Amazon RDS for MySQL Multi-AZ DB cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Containerize the application. Migrate the application to an Amazon Elastic Container Service (Amazon ECS) cluster. Use the AWS Fargate launch type for the tasks that host the application. Create an Amazon Elastic File System (Amazon EFS) file system for the static content. Mount the EFS file system to each container. Configure AWS Application Auto Scaling on the ECS cluster. Set the ECS service as a target for the ALB. Migrate the database to Amazon Aurora MySQL Serverless v2 with a reader DB instance.</p>",
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
      "question_id": "#343",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect wants to make sure that only AWS users or roles with suitable permissions can access a new Amazon API Gateway endpoint. The solutions architect wants an end-to-end view of each request to analyze the latency of the request and create service maps.<br><br>How can the solutions architect design the API Gateway access control and perform request inspections?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: chỉ IAM user/role có quyền gọi API Gateway, đồng thời cần end-to-end tracing và service map.</li><li>Requirement quyết định: IAM authorization + X-Ray.</li><li>Ưu tiên: security và observability.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS_IAM</strong> authorization cùng quyền `execute-api:Invoke` và ký request bằng SigV4 chỉ cho phép principal AWS hợp lệ. <strong>AWS X-Ray</strong> cho trace và service map.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — AWS_IAM + SigV4 + X-Ray.</li><li><strong>B</strong>: ❌ Sai — CORS không phải cơ chế xác thực; CloudWatch không tạo service map/trace.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — custom authorizer nhận key/secret là cách tệ, không cần thiết.</li><li><strong>D</strong>: ❌ Sai — client certificate dùng để backend xác thực API Gateway, không dùng để phân quyền IAM; CloudWatch không trace.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>AWS_IAM authorization, execute-api:Invoke, SigV4, X-Ray, service map.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp 'service map' / 'trace' → X-Ray; gặp chỉ IAM principal gọi API → AWS_IAM authorization.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#343",
          "answers": [
            {
              "choice": "<p>A. For the API Gateway method, set the authorization to AWS_IAM. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Enable the API caller to sign requests with AWS Signature when accessing the endpoint. Use AWS X-Ray to trace and analyze user requests to API Gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. For the API Gateway resource, set CORS to enabled and only return the company's domain in Access-Control-Allow-Origin headers. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function as the custom authorizer, ask the API client to pass the key and secret when making the call, and then use Lambda to validate the key/secret pair against the IAM system. Use AWS X-Ray to trace and analyze user requests to API Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a client certificate for API Gateway. Distribute the certificate to the AWS users and roles that need to access the endpoint. Enable the API caller to pass the client certificate when accessing the endpoint. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#344",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CodePipeline for the CI/CD of an application to an Amazon EC2 Auto Scaling group. All AWS resources are defined in AWS CloudFormation templates. The application artifacts are stored in an Amazon S3 bucket and deployed to the Auto Scaling group using instance user data scripts. As the application has become more complex, recent resource changes in the CloudFormation templates have caused unplanned downtime.<br><br>How should a solutions architect improve the CI/CD pipeline to reduce the likelihood that changes in the templates will cause downtime?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: thay đổi CloudFormation template gây downtime ngoài kế hoạch.</li><li>Requirement quyết định: giảm rủi ro khi thay đổi template.</li><li>Ưu tiên: automated testing, rollback, zero-downtime deployment.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CodeBuild</strong> test tự động, <strong>CloudFormation change sets</strong> xem trước thay đổi (tránh replace bất ngờ), <strong>CodeDeploy blue/green</strong> cho phép đánh giá và rollback.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — dựa vào test plan thủ công, vẫn dễ downtime.</li><li><strong>B</strong>: ✅ Đúng — test tự động + change sets + blue/green.</li><li><strong>C</strong>: ❌ Sai — chủ yếu validate thủ công, không ngăn downtime.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — blue/green tốt nhưng test thủ công, thiếu change sets.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Change sets, CodeBuild, CodeDeploy blue/green, automated testing, rollback.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp template change gây downtime → nghĩ ngay đến change sets + blue/green + automated test.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#344",
          "answers": [
            {
              "choice": "<p>A. Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to run in a non-production environment before approving the change for production.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and run a manual test plan before approving the change for production.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#345",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A North American company with headquarters on the East Coast is deploying a new web application running on Amazon EC2 in the us-east-1 Region. The application should dynamically scale to meet user demand and maintain resiliency. Additionally, the application must have disaster recovery capabilities in an active-passive configuration with the us-west-1 Region.<br><br>Which steps should a solutions architect take after creating a VPC in the us-east-1 Region?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: web app scale được, resilient, DR active-passive sang us-west-1.</li><li>Requirement quyết định: active-passive giữa hai Region.</li><li>Ưu tiên: failover tự động, high availability.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Mỗi Region có stack riêng (ALB + Auto Scaling group đa AZ). <strong>Route 53 failover routing</strong> với health checks chuyển traffic sang Region phụ khi Region chính lỗi.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Auto Scaling group không span nhiều Region, ALB không phục vụ cross-Region.</li><li><strong>B</strong>: ✅ Đúng — hai stack độc lập + Route 53 failover policy.</li><li><strong>C</strong>: ❌ Sai — ALB không span nhiều VPC/Region.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — record riêng + health check nhưng không có failover routing policy rõ ràng cho active-passive.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Route 53 failover routing, health checks, active-passive, ALB theo Region.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp active-passive DR multi-Region → nghĩ ngay đến Route 53 failover routing.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#345",
          "answers": [
            {
              "choice": "<p>A. Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs in each Region as part of an Auto Scaling group spanning both VPCs and served by the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALDeploy the same solution to the us-west-1 Region. Create an Amazon Route 53 record set with a failover routing policy and health checks enabled to provide high availability across both Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) that spans both VPCs. Deploy EC2 instances across multiple Availability Zones as part of an Auto Scaling group in each VPC served by the ALB. Create an Amazon Route 53 record that points to the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB. Deploy the same solution to the us-west-1 Region. Create separate Amazon Route 53 records in each Region that point to the ALB in the Region. Use Route 53 health checks to provide high availability across both Regions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#346",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a legacy application that runs on multiple NET Framework components. The components share the same Microsoft SQL Server database and communicate with each other asynchronously by using Microsoft Message Queueing (MSMQ).<br><br>The company is starting a migration to containerized .NET Core components and wants to refactor the application to run on AWS. The .NET Core components require complex orchestration. The company must have full control over networking and host configuration. The application's database model is strongly relational.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: refactor .NET sang container, cần orchestration phức tạp, toàn quyền network/host, DB quan hệ, messaging bất đồng bộ.</li><li>Requirement quyết định: full control host + relational DB + queue.</li><li>Ưu tiên: control, phù hợp mô hình quan hệ.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>ECS với EC2 launch type</strong> cho toàn quyền host/network và orchestration. <strong>Aurora</strong> (quan hệ) phù hợp, <strong>SQS</strong> thay thế MSMQ cho messaging bất đồng bộ.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — App Runner không cho kiểm soát host/network; EventBridge không phải queue thay MSMQ.</li><li><strong>B</strong>: ❌ Sai — Fargate không cho kiểm soát host; DynamoDB không hợp DB quan hệ.</li><li><strong>C</strong>: ❌ Sai — Elastic Beanstalk không hợp orchestration phức tạp; MSK quá nặng cho queue.</li><li><strong>D</strong>: ✅ Đúng — ECS EC2 launch type + Aurora + SQS.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>ECS EC2 launch type, full control host, SQS thay MSMQ, relational database.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp 'full control over host configuration' → nghĩ ngay đến ECS EC2 launch type (không phải Fargate).\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#346",
          "answers": [
            {
              "choice": "<p>A. Host the INET Core components on AWS App Runner. Host the database on Amazon RDS for SQL Server. Use Amazon EventBiridge for asynchronous messaging.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host the .NET Core components on Amazon Elastic Container Service (Amazon ECS) with the AWS Fargate launch type. Host the database on Amazon DynamoDUse Amazon Simple Notification Service (Amazon SNS) for asynchronous messaging.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the .NET Core components on AWS Elastic Beanstalk. Host the database on Amazon Aurora PostgreSQL Serverless v2. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) for asynchronous messaging.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the NET Core components on Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type. Host the database on Amazon Aurora MySQL Serverless v2. Use Amazon Simple Queue Service (Amazon SQS) for asynchronous messaging.</p>",
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
      "question_id": "#347",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has launched multiple Amazon EC2 instances in a placement group within a single Availability Zone. Because of additional load on the system, the solutions architect attempts to add new instances to the placement group. However, the solutions architect receives an insufficient capacity error.<br><br>What should the solutions architect do to troubleshoot this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: lỗi insufficient capacity khi thêm instance vào cluster placement group trong một AZ.</li><li>Requirement quyết định: cách troubleshoot đúng.</li><li>Ưu tiên: hiểu hành vi capacity của placement group.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Khi gặp lỗi capacity trong placement group, stop và start tất cả instance rồi thử lại: instance có thể được di chuyển sang phần phần cứng còn đủ capacity để chứa tất cả cùng nhau.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — spread placement group không phải cách khắc phục, và không có \"minimum eight instances per AZ\".</li><li><strong>B</strong>: ✅ Đúng — stop/start tất cả instance rồi launch lại.</li><li><strong>C</strong>: ❌ Sai — không thể merge placement group.</li><li><strong>D</strong>: ❌ Sai — Dedicated Hosts không dùng với placement group theo cách này.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Placement group, insufficient capacity error, stop/start instances, cluster placement group.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp insufficient capacity trong placement group → nghĩ ngay đến stop/start toàn bộ instance rồi launch lại.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#347",
          "answers": [
            {
              "choice": "<p>A. Use a spread placement group. Set a minimum of eight instances for each Availability Zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stop and start all the instances in the placement group. Try the launch again.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new placement group. Merge the new placement group with the original placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the additional instances as Dedicated Hosts in the placement groups.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#348",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on an Amazon EC2 Auto Scaling group. Company policy requires monthly operating system security updates. After an in-place patch and reboot, unhealthy instances were replaced with instances based on an unpatched image. Which solution prevents this problem and keeps future replacements consistently patched?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p><p>An immutable-image workflow makes the patched AMI the source for every new instance. A versioned launch template records that image, and instance refresh replaces the fleet while honoring the minimum healthy percentage. Patching only current instances leaves the Auto Scaling replacement source unpatched; disabling health replacement weakens availability.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#348",
          "answers": [
            {
              "choice": "<p>A. Enable instance scale-in protection before each maintenance window and patch every running instance manually.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the health check grace period to 24 hours and continue patching running instances in place.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Suspend the ReplaceUnhealthy process permanently so that Auto Scaling cannot replace an instance after a reboot.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Automate creation and testing of a patched AMI, publish a new launch template version, and use an Auto Scaling instance refresh with an appropriate minimum healthy percentage.</p>",
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
      "question_id": "#349",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team of data scientists is using Amazon SageMaker instances and SageMaker APIs to train machine learning (ML) models. The SageMaker instances are deployed in a VPC that does not have access to or from the internet. Datasets for ML model training are stored in an Amazon S3 bucket. Interface VPC endpoints provide access to Amazon S3 and the SageMaker APIs.<br><br>Occasionally, the data scientists require access to the Python Package Index (PyPI) repository to update Python packages that they use as part of their workflow. A solutions architect must provide access to the PyPI repository while ensuring that the SageMaker instances remain isolated from the internet.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: SageMaker trong VPC cô lập internet cần cài package từ PyPI.</li><li>Requirement quyết định: truy cập PyPI nhưng vẫn cô lập internet.</li><li>Ưu tiên: security, managed.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS CodeArtifact</strong> có <strong>external connection</strong> `public:pypi` làm proxy/cache package từ PyPI. Truy cập qua <strong>VPC endpoint</strong> nên instance không cần đường ra internet.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — CodeCommit không phải package repository và đồng bộ từng package thủ công.</li><li><strong>B</strong>: ❌ Sai — NAT gateway mở đường ra internet, phá vỡ cô lập.</li><li><strong>C</strong>: ❌ Sai — NAT instance cũng mở internet.</li><li><strong>D</strong>: ✅ Đúng — CodeArtifact + external connection PyPI + VPC endpoint.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>CodeArtifact, external connection public:pypi, VPC endpoint, isolated VPC.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp VPC cô lập cần package pip/npm → nghĩ ngay đến CodeArtifact + VPC endpoint.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#349",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CodeCommit repository for each package that the data scientists need to access. Configure code synchronization between the PyPI repository and the CodeCommit repository. Create a VPC endpoint for CodeCommit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a NAT gateway in the VPC. Configure VPC routes to allow access to the internet with a network ACL that allows access to only the PyPI repository endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a NAT instance in the VPC. Configure VPC routes to allow access to the internet. Configure SageMaker notebook instance firewall rules that allow access to only the PyPI repository endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CodeArtifact domain and repository. Add an external connection for public:pypi to the CodeArtifact repository. Configure the Python client to use the CodeArtifact repository. Create a VPC endpoint for CodeArtifact.</p>",
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
      "question_id": "#350",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect works for a government agency that has strict disaster recovery requirements. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>1. <strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p>2. <strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Bài toán: EBS snapshot phải có ở ít nhất hai Region khác.</li><li>Requirement quyết định: lowest operational overhead.</li><li>Ưu tiên: tự động, managed.</li></ul><p>3. <strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon Data Lifecycle Manager (DLM)</strong> hỗ trợ cross-Region copy cho snapshot theo policy, có thể cấu hình tới nhiều Region đích, không cần code.</p><p>4. <strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — DLM policy copy snapshot sang nhiều Region.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Lambda tự viết, tốn công bảo trì.</li><li><strong>C</strong>: ❌ Sai — snapshot EBS không nằm trong S3 bucket của người dùng nên không dùng S3 CRR được.</li><li><strong>D</strong>: ❌ Sai — Image Builder để tạo AMI, không phù hợp quản lý snapshot.</li></ul><p>5. <strong>🔑 KEYWORDS CẦN NHỚ</strong></p><p>Data Lifecycle Manager, EBS snapshot, cross-Region copy, lowest overhead.</p><p>6. <strong>🧠 MẸO THI</strong></p><p>\"Gặp tự động hóa vòng đời EBS snapshot + copy cross-Region → nghĩ ngay đến Data Lifecycle Manager.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#350",
          "answers": [
            {
              "choice": "<p>A. Configure a policy in Amazon Data Lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup AWS Backup to create the EBS snapshots. Configure Amazon S3 Cross-Region Replication to copy the EBS snapshots to the additional Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#351",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a project that is launching Amazon EC2 instances that are larger than required. The project's account cannot be part of the company's organization in AWS Organizations due to policy restrictions to keep this activity outside of corporate IT. The company wants to allow only the launch of t3.small EC2 instances by developers in the project's account. These EC2 instances must be restricted to the us-east-2 Region.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Giới hạn developer chỉ launch được `t3.small` trong `us-east-2`.</li><li>Requirement then chốt: account <strong>không nằm trong</strong> AWS Organizations.</li><li>Ưu tiên: kiểm soát quyền truy cập trong một account độc lập.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Account đứng riêng nên không dùng được SCP. IAM policy với condition `ec2:InstanceType` và `aws:RequestedRegion` gắn vào role/group của developer giới hạn đúng loại instance và Region.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đưa account vào organization, vi phạm policy; tagging policy không chặn được launch.</li><li><strong>B</strong>: ❌ Sai — SCP chỉ áp dụng cho account trong Organizations.</li><li><strong>C</strong>: ❌ Sai — Reserved Instance là billing, không giới hạn quyền launch.</li><li><strong>D</strong>: ✅ Đúng — IAM policy với condition instance type + Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>cannot be part of Organizations</strong></li><li><strong>IAM policy condition</strong></li><li><strong>ec2:InstanceType</strong></li><li><strong>aws:RequestedRegion</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"account không thuộc Organizations\" + giới hạn quyền → nghĩ ngay đến <strong>IAM policy</strong>, không phải SCP.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#351",
          "answers": [
            {
              "choice": "<p>A. Create a new developer account. Move all EC2 instances, users, and assets into us-east-2. Add the account to the company's organization in AWS Organizations. Enforce a tagging policy that denotes Region affinity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP that denies the launch of all EC2 instances except t3.small EC2 instances in us-east-2. Attach the SCP to the project's account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create and purchase a t3.small EC2 Reserved Instance for each developer in us-east-2. Assign each developer a specific EC2 instance with their name as the tag.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy than allows the launch of only t3.small EC2 instances in us-east-2. Attach the policy to the roles and groups that the developers use in the project's account.</p>",
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
      "question_id": "#352",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A scientific company needs to process text and image data from an Amazon S3 bucket. The data is collected from several radar stations during a live, time-critical phase of a deep space mission. The radar stations upload the data to the source S3 bucket. The data is prefixed by radar station identification number.<br><br>The company created a destination S3 bucket in a second account. Data must be copied from the source S3 bucket to the destination S3 bucket to meet a compliance objective. This replication occurs through the use of an S3 replication rule to cover all objects in the source S3 bucket.<br><br>One specific radar station is identified as having the most accurate data. Data replication at this radar station must be monitored for completion within 30 minutes after the radar station uploads the objects to the source S3 bucket.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Replicate S3 cross-account, riêng một radar station (một prefix) phải được theo dõi hoàn tất trong 30 phút.</li><li>Requirement then chốt: có SLA thời gian replication và monitoring.</li><li>Ưu tiên: đảm bảo thời gian, ít thay đổi kiến trúc.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Replication Time Control (S3 RTC)</strong> cam kết replicate 99.99% object trong 15 phút và có metric/event để giám sát. Tạo replication rule lọc theo prefix của station đó để chỉ bật RTC cho đúng dữ liệu cần.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — DataSync không phải cơ chế replication có SLA; trạng thái TRANSFERRING không phản ánh thời gian hoàn tất.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — thêm bucket, không bật RTC nên không có cam kết thời gian; làm phức tạp.</li><li><strong>C</strong>: ❌ Sai — Transfer Acceleration tăng tốc upload, không liên quan replication; `TotalRequestLatency` không đo replication.</li><li><strong>D</strong>: ✅ Đúng — rule theo prefix + S3 RTC + monitor maximum replication time + EventBridge alert.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>S3 Replication Time Control (RTC)</strong></li><li><strong>15 minutes SLA</strong></li><li><strong>replication rule filter by prefix</strong></li><li><strong>ReplicationLatency metric</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"replication phải xong trong X phút, cần monitor\" → nghĩ ngay đến <strong>S3 RTC</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#352",
          "answers": [
            {
              "choice": "<p>A. Setup an AWS DataSync agent to replicate the prefixed data from the source S3 bucket to the destination S3 bucket. Select to use all available bandwidth on the task, and monitor the task to ensure that itis in the TRANSFERRING status. Create an Amazon EventBridge rule to initiate an alert if this status changes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the second account, create another S3 bucket to receive data from the radar station with the most accurate data. Set up a new replication rule for this new S3 bucket to separate the replication from the other radar stations. Monitor the maximum replication time to the destination. Create an Amazon EventBridge rule to initiate an alert when the time exceeds the desired threshold.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon S3 Transfer Acceleration on the source S3 bucket, and configure the radar station with the most accurate data to use the new endpoint. Monitor the S3 destination bucket's TotalRequestLatency metric. Create an Amazon EventBridge rule to initiate an alert if this status changes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new S3 replication rule on the source S3 bucket that filters for the keys that use the prefix of the radar station with the most accurate data. Enable S3 Replication Time Control (S3 RTC). Monitor the maximum replication time to the destination. Create an Amazon EventBridge rule to initiate an alert when the time exceeds the desired threshold.</p>",
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
      "question_id": "#353",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MySQL, and Oracle databases. There are many dependent services hosted either in the same data center or externally. The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration.<br><br>Which tools or services should the solutions architect use to plan the cloud migration? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, F</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lập kế hoạch migration khi tài liệu cũ/thiếu: cần hiểu môi trường hiện tại, dependency và ước tính chi phí cloud.</li><li>Chọn 3 công cụ phục vụ <strong>discovery, assessment, tracking</strong>.</li><li>Ưu tiên: khám phá và đánh giá, chưa phải thực hiện migrate.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Application Discovery Service</strong> thu thập inventory và dependency, <strong>CART</strong> đánh giá mức độ sẵn sàng, <strong>AWS Migration Hub</strong> gom dữ liệu và theo dõi tiến trình migration.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — discover server, dependency, utilization.</li><li><strong>B</strong>: ❌ Sai — AWS SMS là công cụ replicate server (đã bị thay thế), không phải planning/discovery.</li><li><strong>C</strong>: ❌ Sai — X-Ray là tracing cho ứng dụng trên AWS.</li><li><strong>D</strong>: ✅ Đúng — Cloud Adoption Readiness Tool đánh giá mức sẵn sàng.</li><li><strong>E</strong>: ❌ Sai — Amazon Inspector quét lỗ hổng bảo mật.</li><li><strong>F</strong>: ✅ Đúng — Migration Hub là trung tâm theo dõi và lập kế hoạch.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Application Discovery Service</strong></li><li><strong>Migration Hub</strong></li><li><strong>CART</strong></li><li><strong>documentation outdated</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"tài liệu thiếu, cần hiểu môi trường + dependency\" → nghĩ ngay đến <strong>Application Discovery Service + Migration Hub</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#353",
          "answers": [
            {
              "choice": "<p>A. AWS Application Discovery Service</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS SMS</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS X-Ray</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Cloud Adoption Readiness Tool (CART)</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Amazon Inspector</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. AWS Migration Hub</p>",
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
      "question_id": "#354",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is reviewing an application's resilience before launch. The application runs on an Amazon EC2 instance that is deployed in a private subnet of a VPC. The EC2 instance is provisioned by an Auto Scaling group that has a minimum capacity of 1 and a maximum capacity of 1. The application stores data on an Amazon RDS for MySQL DB instance. The VPC has subnets configured in three Availability Zones and is configured with a single NAT gateway.<br><br>The solutions architect needs to recommend a solution to ensure that the application will operate across multiple Availability Zones.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Làm ứng dụng chạy được qua nhiều AZ (loại bỏ single point of failure ở NAT, EC2, RDS).</li><li>Requirement then chốt: <strong>multi-AZ</strong> cho cả tầng compute, network và database.</li><li>Ưu tiên: high availability.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>NAT gateway là zonal nên cần thêm NAT gateway mỗi AZ, RDS chuyển sang <strong>Multi-AZ</strong>, và Auto Scaling group trải qua nhiều AZ với min/max = 3.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — đủ NAT, RDS Multi-AZ, ASG nhiều AZ.</li><li><strong>B</strong>: ❌ Sai — virtual private gateway không thay thế NAT cho truy cập internet từ private subnet.</li><li><strong>C</strong>: ❌ Sai — NAT instance kém bền, đổi engine sang PostgreSQL không cần thiết, không có auto scaling đa AZ.</li><li><strong>D</strong>: ❌ Sai — backup không phải Multi-AZ; ASG vẫn max 1 nên chỉ có một instance.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>NAT gateway per AZ</strong></li><li><strong>RDS Multi-AZ</strong></li><li><strong>ASG across AZs</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"single NAT gateway + multi-AZ\" → nghĩ ngay đến <strong>mỗi AZ một NAT gateway</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#354",
          "answers": [
            {
              "choice": "<p>A. Deploy an additional NAT gateway in the other Availability Zones. Update the route tables with appropriate routes. Modify the RDS for MySQL DB instance to a Multi-AZ configuration. Configure the Auto Scaling group to launch the instances across Availability Zones. Set the minimum capacity and maximum capacity of the Auto Scaling group to 3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace the NAT gateway with a virtual private gateway. Replace the RDS for MySQL DB instance with an Amazon Aurora MySQL DB cluster. Configure the Auto Scaling group to launch instances across all subnets in the VPC. Set the minimum capacity and maximum capacity of the Auto Scaling group to 3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the NAT gateway with a NAT instance. Migrate the RDS for MySQL DB instance to an RDS for PostgreSQL DB instance. Launch a new EC2 instance in the other Availability Zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an additional NAT gateway in the other Availability Zones. Update the route tables with appropriate routes. Modify the RDS for MySQL DB instance to turn on automatic backups and retain the backups for 7 days. Configure the Auto Scaling group to launch instances across all subnets in the VPC. Keep the minimum capacity and the maximum capacity of the Auto Scaling group at 1.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#355",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate its on-premises transaction-processing application to AWS. The application runs inside Docker containers that are hosted on VMs in the company's data center. The Docker containers have shared storage where the application records transaction data.<br><br>The transactions are time sensitive. The volume of transactions inside the application is unpredictable. The company must implement a low-latency storage solution that will automatically scale throughput to meet increased demand. The company cannot develop the application further and cannot continue to administer the Docker hosting environment.<br><br>How should the company migrate the application to AWS to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển container có shared storage, tải không dự đoán được, cần storage low-latency tự scale throughput.</li><li>Không sửa app và không muốn quản lý host Docker.</li><li>Ưu tiên: <strong>serverless container + shared file storage</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Fargate</strong> loại bỏ việc quản lý host, <strong>Amazon EFS</strong> là shared file system (POSIX) tự scale throughput và mount trực tiếp vào task definition của Fargate.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — S3 là object storage, app phải sửa code, latency cao hơn; EKS còn nặng vận hành.</li><li><strong>B</strong>: ✅ Đúng — Fargate + EFS, shared, tự scale, không cần admin host.</li><li><strong>C</strong>: ❌ Sai — EBS không chia sẻ cho nhiều task và không scale throughput tự động.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — EFS đúng nhưng vẫn phải quản lý EC2 và Docker host.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Fargate</strong></li><li><strong>EFS shared storage</strong></li><li><strong>cannot administer Docker hosts</strong></li><li><strong>auto scale throughput</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"container + shared storage + không quản lý host\" → nghĩ ngay đến <strong>Fargate + EFS</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#355",
          "answers": [
            {
              "choice": "<p>A. Migrate the containers that run the application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon S3 to store the transaction data that the containers share.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the containers that run the application to AWS Fargate for Amazon Elastic Container Service (Amazon ECS). Create an Amazon Elastic File System (Amazon EFS) file system. Create a Fargate task definition. Add a volume to the task definition to point to the EFS file system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the containers that run the application to AWS Fargate for Amazon Elastic Container Service (Amazon ECS). Create an Amazon Elastic Block Store (Amazon EBS) volume. Create a Fargate task definition. Attach the EBS volume to each running task.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch Amazon EC2 instances. Install Docker on the EC2 instances. Migrate the containers to the EC2 instances. Create an Amazon Elastic File System (Amazon EFS) file system. Add a mount point to the EC2 instances for the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#356",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate to the AWS Cloud. The company hosts many applications on Windows servers and Linux servers. Some of the servers are physical, and some of the servers are virtual. The company uses several types of databases in its on-premises environment. The company does not have an accurate inventory of its on-premises servers and applications.<br><br>The company wants to rightsize its resources during migration. A solutions architect needs to obtain information about the network connections and the application relationships. The solutions architect must assess the company’s current environment and develop a migration plan.<br><br>Which solution will provide the solutions architect with the required information to develop the migration plan?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Server vật lý và ảo, không có inventory chính xác; cần thông tin <strong>network connection</strong> và <strong>application relationship</strong> để rightsize và lập kế hoạch.</li><li>Ưu tiên: discovery ở mức dependency chi tiết.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Application Discovery Agent</strong> (agent-based) thu thập network connection, process, utilization và chạy được trên cả server vật lý; <strong>Migration Hub Strategy Recommendations</strong> dùng dữ liệu này để đưa ra khuyến nghị.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Migration Evaluator chủ yếu ước tính chi phí; Agentless Collector không cho dữ liệu dependency/network.</li><li><strong>B</strong>: ✅ Đúng — agent thu dependency, Strategy Recommendations tạo báo cáo.</li><li><strong>C</strong>: ❌ Sai — Agentless Collector chỉ dành cho VMware vCenter, không phủ server vật lý; Application Migration Service không dùng để nhóm.</li><li><strong>D</strong>: ❌ Sai — import tool dùng dữ liệu có sẵn, mà công ty chưa có inventory.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Application Discovery Agent</strong></li><li><strong>network connections</strong></li><li><strong>physical servers</strong></li><li><strong>Strategy Recommendations</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"network connections + physical servers\" → nghĩ ngay đến <strong>agent-based discovery</strong> (không phải Agentless).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#356",
          "answers": [
            {
              "choice": "<p>A. Use Migration Evaluator to request an evaluation of the environment from AWS. Use the AWS Application Discovery Service Agentless Collector to import the details into a Migration Evaluator Quick Insights report.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Migration Hub and install the AWS Application Discovery Agent on the servers. Deploy the Migration Hub Strategy Recommendations application data collector. Generate a report by using Migration Hub Strategy Recommendations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Migration Hub and run the AWS Application Discovery Service Agentless Collector on the servers. Group the servers and databases by using AWS Application Migration Service. Generate a report by using Migration Hub Strategy Recommendations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Migration Hub import tool to load the details of the company’s on-premises environment. Generate a report by using Migration Hub Strategy Recommendations.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#357",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company sells its software-as-a-service (SaaS) platform for application compliance to large global banks. The SaaS platform runs on AWS and uses multiple AWS accounts that are managed in an organization in AWS Organizations. The SaaS platform uses many AWS resources globally.<br><br>For regulatory compliance, all API calls to AWS resources must be audited, tracked for changes, and stored in a durable and secure data store.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Audit mọi API call trên nhiều account trong Organization, lưu bền và bảo mật.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Organization trail</strong> tạo ở management account tự áp dụng cho mọi account (và Region nếu multi-Region), log tập trung vào một S3 bucket mới có versioning, MFA delete và encryption.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — dùng bucket có sẵn (không rõ cấu hình), không nói rõ trail cho cả organization.</li><li><strong>B</strong>: ❌ Sai — trail từng member account, nhiều bucket, overhead cao.</li><li><strong>C</strong>: ✅ Đúng — một organization trail, bucket versioning, MFA delete, encryption.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — thêm SNS và hệ thống ngoài không cần thiết, không có versioning.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>CloudTrail organization trail</strong></li><li><strong>management account</strong></li><li><strong>S3 versioning + MFA delete</strong></li><li><strong>LEAST operational overhead</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"audit API calls toàn organization\" → nghĩ ngay đến <strong>organization trail</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#357",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS CloudTrail trail. Use an existing Amazon S3 bucket in the organization's management account to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS CloudTrail trail in each member account of the organization. Create new Amazon S3 buckets to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 buckets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket with versioning turned on to store the logs. Deploy the trail for all accounts in the organization. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket to store the logs. Configure Amazon Simple Notification Service (Amazon SNS) to send log-file delivery notifications to an external management system that will track the logs. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#358",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a distributed in-memory database on a fleet of Amazon EC2 instances. The fleet consists of a primary node and eight worker nodes. The primary node is responsible for monitoring cluster health, accepting user requests, distributing user requests to worker nodes, and sending an aggregate response back to a client. Worker nodes communicate with each other to replicate data partitions.<br><br>The company requires the lowest possible networking latency to achieve maximum performance.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>In-memory database phân tán, node giao tiếp với nhau nhiều.</li><li>Requirement then chốt: <strong>lowest possible network latency</strong>.</li><li>Ưu tiên: placement strategy và loại instance.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Cluster placement group</strong> đặt instance gần nhau trong một AZ để có latency thấp và throughput cao nhất; <strong>memory optimized</strong> phù hợp in-memory database.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — partition placement group chia rack để cô lập lỗi, không tối ưu latency.</li><li><strong>B</strong>: ❌ Sai — partition group và compute optimized không hợp in-memory.</li><li><strong>C</strong>: ✅ Đúng — memory optimized + cluster placement group.</li><li><strong>D</strong>: ❌ Sai — spread placement group tách phần cứng, latency cao hơn, compute optimized không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>cluster placement group</strong></li><li><strong>lowest network latency</strong></li><li><strong>memory optimized</strong></li><li><strong>in-memory database</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"lowest latency giữa các node\" → nghĩ ngay đến <strong>cluster placement group</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#358",
          "answers": [
            {
              "choice": "<p>A. Launch memory optimized EC2 instances in a partition placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch compute optimized EC2 instances in a partition placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch memory optimized EC2 instances in a cluster placement group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch compute optimized EC2 instances in a spread placement group.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#359",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company maintains information on premises in approximately 1 million.csv files that are hosted on a VM. The data initially is 10 TB in size and grows at a rate of 1 TB each week. The company needs to automate backups of the data to the AWS Cloud.<br><br>Backups of the data must occur daily. The company needs a solution that applies custom filters to back up only a subset of the data that is located in designated source directories. The company has set up an AWS Direct Connect connection.<br><br>Which solution will meet the backup requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backup hằng ngày từ on-premises (1 triệu file .csv, 10 TB, tăng 1 TB/tuần) lên AWS, có filter tùy chỉnh theo thư mục, đã có Direct Connect.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DataSync</strong> agent trên VM tự động hóa việc di chuyển, hỗ trợ <strong>include/exclude filter</strong>, lập lịch hằng ngày, truyền qua Direct Connect, chỉ chuyển dữ liệu thay đổi.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — `CopyObject` copy giữa các S3 object, không phải nguồn on-premises; phải tự viết script.</li><li><strong>B</strong>: ❌ Sai — AWS Backup không hỗ trợ trực tiếp backup file trên VM on-premises như thế này.</li><li><strong>C</strong>: ✅ Đúng — DataSync agent + task có filter + lịch hằng ngày.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — Snowball Edge không cần vì đã có Direct Connect, thêm bước vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>DataSync</strong></li><li><strong>custom filters</strong></li><li><strong>Direct Connect</strong></li><li><strong>scheduled task</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"on-premises file → S3, lập lịch + filter\" → nghĩ ngay đến <strong>DataSync</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#359",
          "answers": [
            {
              "choice": "<p>A. Use the Amazon S3 CopyObject API operation with multipart upload to copy the existing data to Amazon S3. Use the CopyObject API operation to replicate new data to Amazon S3 daily.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a backup plan in AWS Backup to back up the data to Amazon S3. Schedule the backup plan to run daily.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the AWS DataSync agent as a VM that runs on the on-premises hypervisor. Configure a DataSync task to replicate the data to Amazon S3 daily.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Snowball Edge device for the initial backup. Use AWS DataSync for incremental backups to Amazon S3 daily.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#360",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company has an asset management product that thousands of customers use around the world. The customers provide feedback about the product through surveys. The company is building a new analytical solution that runs on Amazon EMR to analyze the data from these surveys. The following user personas need to access the analytical solution to perform different actions:<br><br>• Administrator: Provisions the EMR cluster for the analytics team based on the team’s requirements<br>• Data engineer: Runs ETL scripts to process, transform, and enrich the datasets<br>• Data analyst: Runs SQL and Hive queries on the data<br><br>A solutions architect must ensure that all the user personas have least privilege access to only the resources that they need. The user personas must be able to launch only applications that are approved and authorized. The solution also must ensure tagging for all resources that the user personas create.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ba persona dùng EMR với least privilege, chỉ launch được ứng dụng được duyệt, và resource phải có tag.</li><li>Ưu tiên: <strong>governance</strong>, kiểm soát phiên bản/cấu hình/quyền.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Service Catalog</strong> cho phép admin định nghĩa product (EMR version, cấu hình cluster được duyệt), gán quyền theo persona và bắt buộc tag qua <strong>TagOptions</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — IAM role + Config chỉ phát hiện sau, không ngăn launch ứng dụng chưa duyệt.</li><li><strong>B</strong>: ❌ Sai — Kerberos là authentication trong cluster, không giải quyết governance/tagging.</li><li><strong>C</strong>: ✅ Đúng — Service Catalog kiểm soát version, cấu hình, quyền, tag.</li><li><strong>D</strong>: ❌ Sai — Config chỉ phát hiện không ngăn; resource-based policy cho EMR cluster không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>AWS Service Catalog</strong></li><li><strong>approved products</strong></li><li><strong>TagOptions</strong></li><li><strong>least privilege personas</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chỉ launch resource được phê duyệt + bắt buộc tag\" → nghĩ ngay đến <strong>Service Catalog</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#360",
          "answers": [
            {
              "choice": "<p>A. Create IAM roles for each user persona. Attach identity-based policies to define which actions the user who assumes the role can perform. Create an AWS Config rule to check for noncompliant resources. Configure the rule to notify the administrator to remediate the noncompliant resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup Kerberos-based authentication for EMR clusters upon launch. Specify a Kerberos security configuration along with cluster-specific Kerberos options.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Service Catalog to control the Amazon EMR versions available for deployment, the cluster configuration, and the permissions for each user persona.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the EMR cluster by using AWS CloudFormation, Attach resource-based policies to the EMR cluster during cluster creation. Create an AWS. Config rule to check for noncompliant clusters and noncompliant Amazon S3 buckets. Configure the rule to notify the administrator to remediate the noncompliant resources.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#361",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software as a service (SaaS) company uses AWS to host a service that is powered by AWS PrivateLink. The service consists of proprietary software that runs on three Amazon EC2 instances behind a Network Load Balancer (NLB). The instances are in private subnets in multiple Availability Zones in the eu-west-2 Region. All the company's customers are in eu-west-2.<br><br>However, the company now acquires a new customer in the us-east-1 Region. The company creates a new VPC and new subnets in us-east-1. The company establishes inter-Region VPC peering between the VPCs in the two Regions.<br><br>The company wants to give the new customer access to the SaaS service, but the company does not want to immediately deploy new EC2 resources in us-east-1.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mở PrivateLink service cho khách ở us-east-1 trong khi backend ở eu-west-2, không deploy EC2 mới.</li><li>Requirement then chốt: PrivateLink endpoint service phải dùng NLB cùng Region với consumer.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo NLB ở us-east-1 với <strong>IP target group</strong> trỏ tới IP của EC2 ở eu-west-2 qua inter-Region VPC peering, rồi tạo endpoint service từ NLB này.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — endpoint service không dùng được NLB ở Region khác.</li><li><strong>B</strong>: ✅ Đúng — NLB mới + IP target qua peering + endpoint service.</li><li><strong>C</strong>: ❌ Sai — NLB không thể dùng ALB ở Region khác làm target kiểu này; thêm tầng phức tạp.</li><li><strong>D</strong>: ❌ Sai — RAM không chia sẻ EC2 instance để làm target.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>PrivateLink endpoint service</strong></li><li><strong>NLB IP target group</strong></li><li><strong>inter-Region VPC peering</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"PrivateLink cross-Region\" → nghĩ ngay đến <strong>NLB cùng Region + IP target qua peering</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#361",
          "answers": [
            {
              "choice": "<p>A. Configure a PrivateLink endpoint service in us-east-1 to use the existing NLB that is in eu-west-2. Grant specific AWS accounts access to connect to the SaaS service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an NLB in us-east-1. Create an IP target group that uses the IP addresses of the company's instances in eu-west-2 that host the SaaS service. Configure a PrivateLink endpoint service that uses the NLB that is in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Application Load Balancer (ALB) in front of the EC2 instances in eu-west-2. Create an NLB in us-east-1. Associate the NLB that is in us-east-1 with an ALB target group that uses the ALB that is in eu-west-2. Configure a PrivateLink endpoint service that uses the NLB that is in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Resource Access Manager (AWS RAM) to share the EC2 instances that are in eu-west-2. In us-east-1, create an NLB and an instance target group that includes the shared EC2 instances from eu-west-2. Configure a PrivateLink endpoint service that uses the NLB that is in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#362",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to monitor a growing number of Amazon S3 buckets across two AWS Regions. The company also needs to track the percentage of objects that are encrypted in Amazon S3. The company needs a dashboard to display this information for internal compliance teams.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Theo dõi nhiều S3 bucket ở hai Region, tỷ lệ object được mã hóa, dashboard cho compliance.</li><li>Ưu tiên: <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Storage Lens default dashboard</strong> có sẵn, tự động bao phủ mọi bucket/Region của account (kể cả bucket mới) và có metric encryption; chỉ cần cấp quyền xem trên console.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — dashboard từng Region và QuickSight là thừa; default dashboard đã gộp.</li><li><strong>B</strong>: ❌ Sai — tự viết Lambda, Athena, QuickSight, overhead cao.</li><li><strong>C</strong>: ✅ Đúng — default dashboard, không cần build.</li><li><strong>D</strong>: ❌ Sai — event-driven, chỉ bắt object mới, tốn công vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>S3 Storage Lens</strong></li><li><strong>default dashboard</strong></li><li><strong>encrypted objects metric</strong></li><li><strong>LEAST operational overhead</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"metrics toàn bộ bucket, dashboard sẵn\" → nghĩ ngay đến <strong>S3 Storage Lens</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#362",
          "answers": [
            {
              "choice": "<p>A. Create a new 3 Storage Lens dashboard in each Region to track bucket and encryption metrics. Aggregate data from both Region dashboards into a single dashboard in Amazon QuickSight for the compliance teams.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Lambda function in each Region to list the number of buckets and the encryption status of objects. Store this data in Amazon S3. Use Amazon Athena queries to display the data on a custom dashboard in Amazon QuickSight for the compliance teams.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the S3 Storage Lens default dashboard to track bucket and encryption metrics. Give the compliance teams access to the dashboard directly in the S3 console.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge rule to detect AWS CloudTrail events for S3 object creation. Configure the rule to invoke an AWS Lambda function to record encryption metrics in Amazon DynamoDB. Use Amazon QuickSight to display the metrics in a dashboard for the compliance teams.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#363",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company’s CISO has asked a solutions architect to re-engineer the company's current CI/CD practices to make sure patch deployments to its application can happen as quickly as possible with minimal downtime if vulnerabilities are discovered. The company must also be able to quickly roll back a change in case of errors.<br><br>The web application is deployed in a fleet of Amazon EC2 instances behind an Application Load Balancer. The company is currently using GitHub to host the application source code, and has configured an AWS CodeBuild project to build the application. The company also intends to use AWS CodePipeline to trigger builds from GitHub commits using the existing CodeBuild project.<br><br>What CI/CD configuration meets all of the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>CI/CD cho EC2 sau ALB: patch nhanh, downtime tối thiểu, rollback nhanh.</li><li>Ưu tiên: <strong>zero/minimal downtime + quick rollback</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CodeDeploy blue/green</strong> dựng fleet mới song song và chuyển traffic qua ALB; khi lỗi chỉ cần chuyển traffic lại về fleet cũ, rollback nhanh.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — in-place gây downtime, rollback bằng cách push code mới chậm.</li><li><strong>B</strong>: ✅ Đúng — blue/green, rollback bằng CodeDeploy.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — CloudFormation tạo stack được nhưng rollback bằng push code mới chậm.</li><li><strong>D</strong>: ❌ Sai — OpsWorks in-place, không rollback nhanh.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>CodeDeploy blue/green</strong></li><li><strong>quick rollback</strong></li><li><strong>minimal downtime</strong></li><li><strong>ALB traffic shift</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ít downtime + rollback nhanh\" → nghĩ ngay đến <strong>blue/green deployment</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#363",
          "answers": [
            {
              "choice": "<p>A. Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for in-place deployment. Monitor the newly deployed code, and, if there are any issues, push another code update</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for blue/green deployments. Monitor the newly deployed code, and, if there are any issues, trigger a manual rollback using CodeDeploy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure CodePipeline with a deploy stage using AWS CloudFormation to create a pipeline for test and production stacks. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the CodePipeline with a deploy stage using AWS OpsWorks and in-place deployments. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#364",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is managing many AWS accounts by using an organization in AWS Organizations. Different business units in the company run applications on Amazon EC2 instances. All the EC2 instances must have a BusinessUnit tag so that the company can track the cost for each business unit.<br><br>A recent audit revealed that some instances were missing this tag. The company manually added the missing tag to the instances.<br><br>What should a solutions architect do to enforce the tagging requirement in the future?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li><strong>Ngăn</strong> launch EC2 thiếu tag `BusinessUnit` trên toàn Organization.</li><li>Requirement then chốt: <strong>enforce</strong> (chặn), không chỉ báo cáo.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>SCP có statement deny `ec2:RunInstances` khi thiếu tag, gắn vào <strong>root</strong> của organization để áp dụng cho mọi account. SCP không áp dụng cho management account nên gắn vào management account là sai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — tag policy chỉ kiểm tra tag đã có, không chặn tạo resource thiếu tag.</li><li><strong>B</strong>: ❌ Sai — cùng lý do và gắn vào management account.</li><li><strong>C</strong>: ✅ Đúng — SCP gắn vào root, enforce cho mọi account.</li><li><strong>D</strong>: ❌ Sai — SCP gắn vào management account không có hiệu lực với account khác (và không ảnh hưởng chính nó).</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>SCP deny RunInstances</strong></li><li><strong>aws:RequestTag / Null condition</strong></li><li><strong>attach to root</strong></li><li><strong>tag policy ≠ enforcement</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"bắt buộc tag khi launch\" → nghĩ ngay đến <strong>SCP (deny nếu thiếu tag)</strong>; tag policy chỉ kiểm tra tuân thủ.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#364",
          "answers": [
            {
              "choice": "<p>A. Enable tag policies in the organization. Create a tag policy for the BusinessUnit tag. Ensure that compliance with tag key capitalization is turned off. Implement the tag policy for the ec2:instance resource type. Attach the tag policy to the root of the organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable tag policies in the organization. Create a tag policy for the BusinessUnit tag. Ensure that compliance with tag key capitalization is turned on. Implement the tag policy for the ec2:instance resource type. Attach the tag policy to the organization's management account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP and attach the SCP to the root of the organization. Include the following statement in the SCP: //IMG//</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP and attach the SCP to the organization’s management account. Include the following statement in the SCP: //IMG//</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#365",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a workload that consists of thousands of Amazon EC2 instances. The workload is running in a VPC that contains several public subnets and private subnets. The public subnets have a route for 0.0.0.0/0 to an existing internet gateway. The private subnets have a route for 0.0.0.0/0 to an existing NAT gateway.<br><br>A solutions architect needs to migrate the entire fleet of EC2 instances to use IPv6. The EC2 instances that are in private subnets must not be accessible from the public internet.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuyển fleet sang IPv6, instance trong private subnet không được truy cập từ internet.</li><li>Requirement then chốt: IPv6 outbound-only.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Egress-only internet gateway</strong> cho phép outbound IPv6 và chặn kết nối inbound khởi tạo từ internet. Dùng Amazon-provided IPv6 CIDR và route `::/0` tới egress-only IGW.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — route `::/0` tới IGW cho phép inbound, không đạt yêu cầu; VPC không dùng custom IPv6 như vậy.</li><li><strong>B</strong>: ❌ Sai — NAT gateway không dùng route IPv6 theo cách này.</li><li><strong>C</strong>: ✅ Đúng — egress-only IGW cho private subnet.</li><li><strong>D</strong>: ❌ Sai — NAT gateway không có cấu hình \"IPv6 support\" cho mục đích này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>egress-only internet gateway</strong></li><li><strong>::/0</strong></li><li><strong>IPv6 outbound only</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"IPv6 + private subnet không cho inbound\" → nghĩ ngay đến <strong>egress-only internet gateway</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#365",
          "answers": [
            {
              "choice": "<p>A. Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Update all the VPC route tables, and add a route for ::/0 to the internet gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Update the VPC route tables for all private subnets, and add a route for ::/0 to the NAT gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Create an egress-only internet gateway. Update the VPC route tables for all private subnets, and add a route for ::/0 to the egress-only internet gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the existing VPC, and associate a custom IPV6 CIDR block with the VPC and all subnets. Create a new NAT gateway, and enable IPV6 support. Update the VPC route tables for all private subnets, and add a route for ::/0 to the IPv6-enabled NAT gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#366",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon API Gateway to deploy a private REST API that will provide access to sensitive data. The API must be accessible only from an application that is deployed in a VPC. The company deploys the API successfully. However, the API is not accessible from an Amazon EC2 instance that is deployed in the VPC.<br><br>Which solution will provide connectivity between the EC2 instance and the API?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Private REST API trong API Gateway không truy cập được từ EC2 trong VPC.</li><li>Requirement then chốt: kết nối private tới API bằng <strong>interface VPC endpoint</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cần interface VPC endpoint cho `execute-api`, endpoint policy cho phép `execute-api:Invoke`, bật private DNS, và resource policy của API cho phép VPC endpoint.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — action `apigateway:*` là quản lý API, tắt private DNS và dùng DNS name của endpoint thiếu đúng cấu hình.</li><li><strong>B</strong>: ✅ Đúng — interface endpoint + `execute-api:Invoke` + private DNS + resource policy.</li><li><strong>C</strong>: ❌ Sai — VPC link/NLB dùng để API Gateway gọi backend, không phải để client vào API.</li><li><strong>D</strong>: ❌ Sai — cùng lý do, ALB/VPC link là hướng ngược.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>private REST API</strong></li><li><strong>interface VPC endpoint</strong></li><li><strong>execute-api:Invoke</strong></li><li><strong>resource policy</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"private API Gateway truy cập từ VPC\" → nghĩ ngay đến <strong>interface VPC endpoint + resource policy</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#366",
          "answers": [
            {
              "choice": "<p>A. Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows apigateway:* actions. Disable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC. Use the VPC endpoint's DNS name to access the API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows the execute-api:Invoke action. Enable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC endpoint. Use the API endpoint’s DNS names to access the API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB) and a VPC link. Configure private integration between API Gateway and the NLB. Use the API endpoint’s DNS names to access the API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) and a VPC Link. Configure private integration between API Gateway and the ALB. Use the ALB endpoint’s DNS name to access the API.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#367",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large payroll company recently merged with a small staffing company. The unified company now has multiple business units, each with its own existing AWS account.<br><br>A solutions architect must ensure that the company can centrally manage the billing and access policies for all the AWS accounts. The solutions architect configures AWS Organizations by sending an invitation to all member accounts of the company from a centralized management account.<br><br>What should the solutions architect do next to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Sau khi mời account vào Organizations, bước tiếp theo để management account quản lý các member account.</li><li>Requirement then chốt: account được mời <strong>không</strong> tự có role truy cập.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Account được mời (khác account tạo qua Organizations) không có sẵn `OrganizationAccountAccessRole`. Phải tạo role này trong mỗi member account và cho phép management account assume.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — đây là IAM role, không phải IAM group.</li><li><strong>B</strong>: ❌ Sai — cần role, không phải policy.</li><li><strong>C</strong>: ✅ Đúng — role trong member account, trust management account.</li><li><strong>D</strong>: ❌ Sai — role phải ở member account, không ở management account.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>OrganizationAccountAccessRole</strong></li><li><strong>invited accounts</strong></li><li><strong>assume role from management account</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"account được mời vào Organizations\" → nghĩ ngay đến <strong>tự tạo OrganizationAccountAccessRole</strong> trong member account.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#367",
          "answers": [
            {
              "choice": "<p>A. Create the OrganizationAccountAccess IAM group in each member account. Include the necessary IAM roles for each administrator.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create the OrganizationAccountAccessPolicy IAM policy in each member account. Connect the member accounts to the management account by using cross-account access.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create the OrganizationAccountAccessRole IAM role in each member account. Grant permission to the management account to assume the IAM role.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create the OrganizationAccountAccessRole IAM role in the management account. Attach the AdministratorAccess AWS managed policy to the IAM role. Assign the IAM role to the administrators in each member account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#368",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS for PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released.<br><br>What changes to the current architecture will reduce operational overhead and support the product release?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chuẩn bị cho tải tăng đột biến và giảm gánh nặng vận hành (container trên EC2, Kafka tự quản, RDS).</li><li>Ưu tiên: <strong>managed services + scalability + reduce operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>EKS on Fargate</strong> bỏ quản lý node, <strong>Amazon MSK</strong> thay Kafka tự quản, <strong>read replicas</strong> tăng khả năng đọc, <strong>S3 + CloudFront</strong> phục vụ static content.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vẫn quản lý EC2; Kinesis đòi sửa ứng dụng đang dùng Kafka.</li><li><strong>B</strong>: ❌ Sai — vẫn quản lý EC2 và đổi sang Kinesis.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Kubernetes tự dựng trên EC2 tăng overhead vận hành.</li><li><strong>D</strong>: ✅ Đúng — EKS Fargate, MSK, replica, CloudFront.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>EKS on Fargate</strong></li><li><strong>Amazon MSK</strong></li><li><strong>read replicas</strong></li><li><strong>reduce operational overhead</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Kafka tự quản trên EC2 + giảm overhead\" → nghĩ ngay đến <strong>Amazon MSK</strong> và <strong>Fargate</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#368",
          "answers": [
            {
              "choice": "<p>A. Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
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
      "question_id": "#369",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a VPN in an on-premises data center. Employees currently connect to the VPN to access files in their Windows home directories. Recently, there has been a large growth in the number of employees who work remotely. As a result, bandwidth usage for connections into the data center has begun to reach 100% during business hours.<br><br>The company must design a solution on AWS that will support the growth of the company's remote workforce, reduce the bandwidth usage for connections into the data center, and reduce operational overhead.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhân viên remote tăng, băng thông VPN về data center đầy 100%, home directory Windows.</li><li>Ưu tiên: scale, giảm băng thông vào data center, <strong>LEAST operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Chuyển home directory sang <strong>FSx for Windows File Server</strong> (managed, SMB, tích hợp AD) và dùng <strong>AWS Client VPN</strong> (managed) để người dùng truy cập thẳng vào AWS thay vì qua data center.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Volume Gateway là block, vẫn phụ thuộc file server on-premises.</li><li><strong>B</strong>: ✅ Đúng — FSx for Windows File Server là file share managed.</li><li><strong>C</strong>: ❌ Sai — FSx for Lustre cho HPC, không phải Windows home directory.</li><li><strong>D</strong>: ✅ Đúng — Client VPN managed, scale theo số người dùng.</li><li><strong>E</strong>: ❌ Sai — Direct Connect không giảm tải từ người dùng remote, tốn thời gian và chi phí.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>FSx for Windows File Server</strong></li><li><strong>AWS Client VPN</strong></li><li><strong>Windows home directories</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"Windows file share\" → nghĩ ngay đến <strong>FSx for Windows File Server</strong>; \"VPN remote managed\" → <strong>Client VPN</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#369",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Storage Gateway Volume Gateway. Mount a volume from the Volume Gateway to the on-premises file server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the home directories to Amazon FSx for Windows File Server.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the home directories to Amazon FSx for Lustre.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate remote users to AWS Client VPN.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Direct Connect connection from the on-premises data center to AWS.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#370",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts. The company recently had a security audit that revealed many unencrypted Amazon Elastic Block Store (Amazon EBS) volumes attached to Amazon EC2 instances.<br><br>A solutions architect must encrypt the unencrypted volumes and ensure that unencrypted volumes will be detected automatically in the future. Additionally, the company wants a solution that can centrally manage multiple AWS accounts with a focus on compliance and security.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Mã hóa các EBS volume đang chưa mã hóa, tự động phát hiện volume chưa mã hóa trong tương lai, quản lý nhiều account tập trung.</li><li>Ưu tiên: compliance và security tập trung.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Volume chưa mã hóa không thể mã hóa tại chỗ: phải snapshot, tạo volume mã hóa từ snapshot rồi thay thế (C). <strong>Control Tower</strong> với strongly recommended guardrails (có guardrail phát hiện EBS chưa mã hóa) phục vụ quản lý tập trung và phát hiện (A).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Control Tower + strongly recommended guardrails để detect.</li><li><strong>B</strong>: ❌ Sai — không thể mã hóa in place.</li><li><strong>C</strong>: ✅ Đúng — snapshot → volume mã hóa → thay thế.</li><li><strong>D</strong>: ❌ Sai — mandatory guardrails không gồm kiểm tra mã hóa EBS.</li><li><strong>E</strong>: ❌ Sai — không thể tự động mã hóa volume có sẵn bằng cách này.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Control Tower strongly recommended guardrails</strong></li><li><strong>snapshot → encrypted volume</strong></li><li><strong>cannot encrypt in place</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"mã hóa EBS volume đã có\" → nghĩ ngay đến <strong>snapshot rồi tạo volume mã hóa</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#370",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the strongly recommended controls (guardrails). Join all accounts to the organization. Categorize the AWS accounts into OUs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS CLI to list all the unencrypted volumes in all the AWS accounts. Run a script to encrypt all the unencrypted volumes in place.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of each unencrypted volume. Create a new encrypted volume from the unencrypted snapshot. Detach the existing volume, and replace it with the encrypted volume.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the mandatory controls (guardrails). Join all accounts to the organization. Categorize the AWS accounts into OUs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Turn on AWS CloudTrail. Configure an Amazon EventBridge rule to detect and automatically encrypt unencrypted volumes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#371",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an intranet web application on Amazon EC2 instances behind an Application Load Balancer (ALB). Currently, users authenticate to the application against an internal user database.<br><br>The company needs to authenticate users to the application by using an existing AWS Directory Service for Microsoft Active Directory directory. All users with accounts in the directory must have access to the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xác thực người dùng ứng dụng sau ALB bằng AWS Managed Microsoft AD hiện có.</li><li>Requirement then chốt: ALB listener rule + federate AD.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>ALB hỗ trợ `authenticate-cognito`. Cấu hình <strong>Cognito user pool</strong> federate với AD qua SAML IdP, tạo app client, rồi dùng nó trong listener rule của ALB.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — AWS Managed AD không có \"app client\" OIDC.</li><li><strong>B</strong>: ✅ Đúng — Cognito user pool + SAML IdP + `authenticate-cognito`.</li><li><strong>C</strong>: ❌ Sai — IAM IdP và role không dùng được cho ALB authenticate-oidc như vậy.</li><li><strong>D</strong>: ❌ Sai — IAM Identity Center và role không phải cơ chế xác thực của ALB.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>authenticate-cognito</strong></li><li><strong>user pool + SAML IdP</strong></li><li><strong>ALB listener rule</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"ALB xác thực với AD/IdP\" → nghĩ ngay đến <strong>Cognito user pool + authenticate-cognito</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#371",
          "answers": [
            {
              "choice": "<p>A. Create a new app client in the directory. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule. Configure the listener rule with the appropriate issuer, client ID and secret, and endpoint details for the Active Directory service. Configure the new app client with the callback URL that the ALB provides.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon Cognito user pool. Configure the user pool with a federated identity provider (ldP) that has metadata from the directory. Create an app client. Associate the app client with the user pool. Create a listener rule for the ALSpecify the authenticate-cognito action for the listener rule. Configure the listener rule to use the user pool and app client.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add the directory as a new IAM identity provider (ldP). Create a new IAM role that has an entity type of SAML 2.0 federation. Configure a role policy that allows access to the ALB. Configure the new role as the default authenticated user role for the ldP. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS IAM Identity Center (AWS Single Sign-On). Configure the directory as an external identity provider (ldP) that uses SAML. Use the automatic provisioning method. Create a new IAM role that has an entity type of SAML 2.0 federation. Configure a role policy that allows access to the ALB. Attach the new role to all groups. Create a listener rule for the ALB. Specify the authenticate-cognito action for the listener rule.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#372",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a website that serves many visitors. The company deploys a backend service for the website in a primary AWS Region and a disaster recovery (DR) Region.<br><br>A single Amazon CloudFront distribution is deployed for the website. The company creates an Amazon Route 53 record set with health checks and a failover routing policy for the primary Region’s backend service. The company configures the Route 53 record set as an origin for the CloudFront distribution. The company configures another record set that points to the backend service's endpoint in the DR Region as a secondary failover record type. The TTL for both record sets is 60 seconds.<br><br>Currently, failover takes more than 1 minute. A solutions architect must design a solution that will provide the fastest failover time.<br><br>Which solution will achieve this goal?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Failover backend giữa hai Region nhanh nhất, hiện tại mất hơn 1 phút do DNS TTL và health check.</li><li>Ưu tiên: <strong>fastest failover</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudFront origin group</strong> failover ngay ở edge dựa trên response lỗi từ primary origin, không phụ thuộc DNS TTL hay caching của Route 53.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — vẫn phụ thuộc DNS và health check, thêm distribution không cần thiết.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — TTL cực thấp chỉ cải thiện một phần, resolver có thể không tôn trọng.</li><li><strong>C</strong>: ❌ Sai — latency routing không phải failover.</li><li><strong>D</strong>: ✅ Đúng — origin group với origin failover.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>CloudFront origin group</strong></li><li><strong>origin failover</strong></li><li><strong>DNS TTL</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"CloudFront + failover nhanh nhất\" → nghĩ ngay đến <strong>origin group</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#372",
          "answers": [
            {
              "choice": "<p>A. Deploy an additional CloudFront distribution. Create a new Route 53 failover record set with health checks for both CloudFront distributions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set the TTL to 4 second for the existing Route 53 record sets that are used for the backend service in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create new record sets for the backend services by using a latency routing policy. Use the record sets as an origin in the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFront origin group that includes two origins, one for each backend service Region. Configure origin failover as a cache behavior for the CloudFront distribution.</p>",
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
      "question_id": "#373",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using multiple AWS accounts and has multiple DevOps teams running production and non-production workloads in these accounts. The company would like to centrally-restrict access to some of the AWS services that the DevOps teams do not use. The company decided to use AWS Organizations and successfully invited all AWS accounts into the Organization. They would like to allow access to services that are currently in-use and deny a few specific services. Also they would like to administer multiple accounts together as a single unit.<br><br>What combination of steps should the solutions architect take to satisfy these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chặn một vài service không dùng bằng SCP, giữ nguyên các service đang dùng, quản lý nhiều account như một nhóm.</li><li>Ưu tiên: <strong>Deny list</strong> + biết service nào đang được dùng.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Dùng <strong>Deny list strategy</strong> (giữ `FullAWSAccess`, thêm SCP deny), xem <strong>IAM Access Advisor</strong> để biết service nào đã dùng, và gom account vào <strong>OU</strong>.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — deny list phù hợp \"deny vài service\".</li><li><strong>B</strong>: ✅ Đúng — Access Advisor cho thấy service được dùng lần cuối.</li><li><strong>C</strong>: ❌ Sai — Trusted Advisor không cho biết service nào được dùng.</li><li><strong>D</strong>: ❌ Sai — xóa `FullAWSAccess` biến thành allow list.</li><li><strong>E</strong>: ✅ Đúng — OU để quản lý nhóm account.</li><li><strong>F</strong>: ❌ Sai — không có SCP mặc định `DenyAWSAccess`.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>SCP deny list</strong></li><li><strong>IAM Access Advisor</strong></li><li><strong>OU</strong></li><li><strong>FullAWSAccess</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"chặn vài service\" → nghĩ ngay đến <strong>deny list SCP</strong>, giữ `FullAWSAccess`.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#373",
          "answers": [
            {
              "choice": "<p>A. Use a Deny list strategy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Review the Access Advisor in AWS IAM to determine services recently used</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Review the AWS Trusted Advisor report to determine services recently used.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove the default FullAWSAccess SCP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Define organizational units (OUs) and place the member accounts in the OUs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Remove the default DenyAWSAccess SCP.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#374",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A live-events company is designing a scaling solution for its ticket application on AWS. The application has high peaks of utilization during sale events. Each sale event is a one-time event that is scheduled. The application runs on Amazon EC2 instances that are in an Auto Scaling group. The application uses PostgreSQL for the database layer.<br><br>The company needs a scaling solution to maximize availability during the sale events.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Scale cho sự kiện bán vé có lịch cố định, cực đại availability.</li><li>Requirement then chốt: tải <strong>biết trước</strong>, cần chuẩn bị tài nguyên trước sự kiện.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Scheduled scaling</strong> phù hợp sự kiện có lịch một lần (predictive scaling cần dữ liệu lịch sử lặp). Aurora PostgreSQL với Aurora Replica lớn hơn được tạo trước và failover, sau đó scale xuống, cho failover nhanh và availability cao.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — predictive scaling không hợp sự kiện một lần; \"pre-warm\" bằng Step Functions không chuẩn.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — scheduled scaling đúng nhưng RDS failover chậm hơn Aurora.</li><li><strong>C</strong>: ❌ Sai — predictive scaling và pre-warm không hợp lý.</li><li><strong>D</strong>: ✅ Đúng — scheduled scaling + Aurora Replica lớn hơn, failover.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>scheduled scaling</strong></li><li><strong>one-time event</strong></li><li><strong>Aurora Replica failover</strong></li><li><strong>maximize availability</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"sự kiện có lịch, một lần\" → nghĩ ngay đến <strong>scheduled scaling</strong> (không phải predictive).</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#374",
          "answers": [
            {
              "choice": "<p>A. Use a predictive scaling policy for the EC2 instances. Host the database on an Amazon Aurora PostgreSQL Serverless v2 Multi-AZ DB instance with automatically scaling read replicas. Create an AWS Step Functions state machine to run parallel AWS Lambda functions to pre-warm the database before a sale event. Create an Amazon EventBridge rule to invoke the state machine.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a scheduled scaling policy for the EC2 instances. Host the database on an Amazon RDS for PostgreSQL Mulli-AZ DB instance with automatically scaling read replicas. Create an Amazon EventBridge rule that invokes an AWS Lambda function to create a larger read replica before a sale event. Fail over to the larger read replica. Create another EventBridge rule that invokes another Lambda function to scale down the read replica after the sale event.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a predictive scaling policy for the EC2 instances. Host the database on an Amazon RDS for PostgreSQL MultiAZ DB instance with automatically scaling read replicas. Create an AWS Step Functions state machine to run parallel AWS Lambda functions to pre-warm the database before a sale event. Create an Amazon EventBridge rule to invoke the state machine.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a scheduled scaling policy for the EC2 instances. Host the database on an Amazon Aurora PostgreSQL Multi-AZ DB cluster. Create an Amazon EventBridge rule that invokes an AWS Lambda function to create a larger Aurora Replica before a sale event. Fail over to the larger Aurora Replica. Create another EventBridge rule that invokes another Lambda function to scale down the Aurora Replica after the sale event.</p>",
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
      "question_id": "#375",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an intranet application on premises. The company wants to configure a cloud backup of the application. The company has selected AWS Elastic Disaster Recovery for this solution.<br><br>The company requires that replication traffic does not travel through the public internet. The application also must not be accessible from the internet. The company does not want this solution to consume all available network bandwidth because other applications require bandwidth.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Elastic Disaster Recovery cho on-premises: replication không đi qua internet công cộng, ứng dụng không truy cập từ internet, không chiếm hết băng thông.</li><li>Ưu tiên: <strong>private connectivity + băng thông riêng</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>VPC chỉ có private subnet, NAT gateway và virtual private gateway (A); <strong>Direct Connect</strong> cho đường truyền riêng, không đi qua internet và tách băng thông (D); chọn <strong>private IP</strong> cho replication (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — VPC private subnet + virtual private gateway, không public.</li><li><strong>B</strong>: ❌ Sai — public subnet và internet gateway làm lộ ra internet.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — Site-to-Site VPN đi qua internet và tranh chấp băng thông.</li><li><strong>D</strong>: ✅ Đúng — Direct Connect + Direct Connect gateway.</li><li><strong>E</strong>: ✅ Đúng — replication qua private IP.</li><li><strong>F</strong>: ❌ Sai — chỉ giữ IP khi recovery, không liên quan đến replication traffic.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li><strong>Direct Connect</strong></li><li><strong>private IP replication</strong></li><li><strong>private subnet + virtual private gateway</strong></li></ul><p><strong>🧠 MẸO THI</strong></p><p>Gặp \"DRS replication không qua internet\" → nghĩ ngay đến <strong>Direct Connect + private IP replication</strong>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#375",
          "answers": [
            {
              "choice": "<p>A. Create a VPC that has at least two private subnets, two NAT gateways, and a virtual private gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC that has at least two public subnets, a virtual private gateway, and an internet gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Site-to-Site VPN connection between the on-premises network and the target AWS network.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Direct Connect connection and a Direct Connect gateway between the on-premises network and the target AWS network.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. During configuration of the replication servers, select the option to use private IP addresses for data replication.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. During configuration of the launch settings for the target servers, select the option to ensure that the Recovery instance’s private IP address matches the source server's private IP address.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#376",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that provides image storage services wants to deploy a customer-facing solution to AWS. Millions of individual customers will use the solution. The solution will receive batches of large image files, resize the files, and store the files in an Amazon S3 bucket for up to 6 months.<br><br>The solution must handle significant variance in demand. The solution must also be reliable at enterprise scale and have the ability to rerun processing jobs in the event of failure.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Xử lý ảnh hàng loạt, tải biến động mạnh, cần retry/rerun job khi lỗi, lưu tối đa 6 tháng.</li><li>Requirement quan trọng nhất: <strong>reliable at scale + rerun khi fail</strong>.</li><li>Ưu tiên <strong>MOST cost-effectively</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon SQS</strong> đệm các S3 event, hấp thụ spike, và message chưa xử lý xong sẽ quay lại queue (có DLQ) nên rerun được. <strong>Lambda</strong> scale theo queue, ghi vào bucket <strong>S3 Standard-IA</strong> rẻ hơn, sau đó Lifecycle chuyển sang <strong>S3 Glacier Deep Archive</strong> để giảm chi phí lưu trữ dài hạn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Step Functions</strong> tốn kém ở quy mô hàng triệu event, ghi đè ảnh gốc nên không rerun được nếu hỏng.</li><li><strong>B</strong>: ❌ Sai — <strong>EventBridge</strong> không có cơ chế buffer/retry bền như queue; ghi đè ảnh gốc làm mất dữ liệu để rerun.</li><li><strong>C</strong>: ❌ Sai — gọi Lambda trực tiếp, không có buffer cho spike; lifecycle chuyển sang Standard-IA sau 6 tháng không giảm chi phí hợp lý.</li><li><strong>D</strong>: ✅ Đúng — SQS + Lambda decouple, retry được, storage class rẻ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>significant variance in demand</li><li>rerun processing jobs</li><li>SQS buffer</li><li>S3 Standard-IA, Glacier Deep Archive</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp spike + cần rerun khi lỗi → nghĩ ngay đến <strong>SQS + Lambda</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#376",
          "answers": [
            {
              "choice": "<p>A. Use AWS Step Functions to process the S3 event that occurs when a user stores an image. Run an AWS Lambda function that resizes the image in place and replaces the original file in the S3 bucket. Create an S3 Lifecycle expiration policy to expire all stored images after 6 months.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge to process the S3 event that occurs when a user uploads an image. Run an AWS Lambda function that resizes the image in place and replaces the original file in the S3 bucket. Create an S3 Lifecycle expiration policy to expire all stored images after 6 months.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 Event Notifications to invoke an AWS Lambda function when a user stores an image. Use the Lambda function to resize the image in place and to store the original file in the S3 bucket. Create an S3 Lifecycle policy to move all stored images to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Simple Queue Service (Amazon SQS) to process the S3 event that occurs when a user stores an image. Run an AWS Lambda function that resizes the image and stores the resized file in an S3 bucket that uses S3 Standard-Infrequent Access (S3 Standard-IA). Create an S3 Lifecycle policy to move all stored images to S3 Glacier Deep Archive after 6 months.</p>",
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
      "question_id": "#377",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations that includes a separate AWS account for each of the company’s departments. Application teams from different departments develop and deploy solutions independently.<br><br>The company wants to reduce compute costs and manage costs appropriately across departments. The company also wants to improve visibility into billing for individual departments. The company does not want to lose operational flexibility when the company selects compute resources.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều account theo phòng ban trong <strong>AWS Organizations</strong>, cần giảm chi phí compute và thấy billing từng phòng ban.</li><li>Requirement quan trọng: <strong>không mất flexibility khi chọn compute</strong>.</li><li>Ưu tiên cost saving + cost visibility.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Consolidated billing</strong> gộp hóa đơn và chia sẻ discount giữa các account; <strong>cost allocation tags</strong> (áp dụng bằng <strong>Tag Editor</strong>) cho phép phân bổ chi phí theo phòng ban. <strong>Compute Savings Plans</strong> áp dụng cho EC2, Fargate, Lambda và mọi instance family/Region nên giữ được flexibility.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>EC2 Instance Savings Plans</strong> gắn với instance family và Region, mất flexibility; thiếu consolidated billing.</li><li><strong>B</strong>: ❌ Sai — <strong>SCPs</strong> chỉ giới hạn quyền, không áp dụng tag; EC2 Instance Savings Plans kém linh hoạt.</li><li><strong>C</strong>: ✅ Đúng — consolidated billing + tag + Compute Savings Plans.</li><li><strong>D</strong>: ❌ Sai — SCPs không dùng để gắn tag.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>consolidated billing</li><li>cost allocation tags, Tag Editor</li><li>Compute Savings Plans</li><li>operational flexibility</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cần giảm cost nhưng giữ linh hoạt compute → nghĩ ngay đến <strong>Compute Savings Plans</strong>; SCP không bao giờ gắn tag.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#377",
          "answers": [
            {
              "choice": "<p>A. Use AWS Budgets for each department. Use Tag Editor to apply tags to appropriate resources. Purchase EC2 Instance Savings Plans.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Organizations to use consolidated billing. Implement a tagging strategy that identifies departments. Use SCPs to apply tags to appropriate resources. Purchase EC2 Instance Savings Plans.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Organizations to use consolidated billing. Implement a tagging strategy that identifies departments. Use Tag Editor to apply tags to appropriate resources. Purchase Compute Savings Plans.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Budgets for each department. Use SCPs to apply tags to appropriate resources. Purchase Compute Savings Plans.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#378",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that securely uploads pictures and videos to an Amazon S3 bucket. The company requires that only authenticated users are allowed to post content. The application generates a presigned URL that is used to upload objects through a browser interface. Most users are reporting slow upload times for objects larger than 100 MB.<br><br>What can a solutions architect do to improve the performance of these uploads while ensuring only authenticated users are allowed to post content?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Upload file lớn (&gt;100 MB) qua presigned URL bị chậm với người dùng ở xa.</li><li>Requirement: tăng tốc upload nhưng vẫn chỉ cho authenticated users.</li><li>Ưu tiên performance, ít thay đổi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>S3 Transfer Acceleration</strong> định tuyến upload qua edge location và backbone của AWS; presigned URL vẫn dùng được với accelerated endpoint nên giữ nguyên cơ chế xác thực. <strong>Multipart upload</strong> giúp upload song song file lớn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>API Gateway</strong> giới hạn payload 10 MB nên không upload được file lớn.</li><li><strong>B</strong>: ❌ Sai — cùng giới hạn payload 10 MB của API Gateway, lại dùng regional endpoint.</li><li><strong>C</strong>: ✅ Đúng — Transfer Acceleration + presigned URL + multipart upload.</li><li><strong>D</strong>: ❌ Sai — dùng <strong>CloudFront</strong> với OAI cho PUT không giữ được kiểm soát authenticated user như presigned URL, phức tạp hơn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 Transfer Acceleration</li><li>presigned URL</li><li>multipart upload</li><li>objects larger than 100 MB</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp upload S3 chậm từ xa → nghĩ ngay đến <strong>Transfer Acceleration + multipart upload</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#378",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon API Gateway with an edge-optimized API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using a COGNITO_USER_POOLS authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload objects.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon API Gateway with a regional API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using an AWS Lambda authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload objects.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable an S3 Transfer Acceleration endpoint on the S3 bucket. Use the endpoint when generating the presigned URL. Have the browser interface upload the objects to this URL using the S3 multipart upload API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon CloudFront distribution for the destination S3 bucket. Enable PUT and POST methods for the CloudFront cache behavior. Update the CloudFront origin to use an origin access identity (OAI). Give the OAI user 3: PutObject permissions in the bucket policy. Have the browser interface upload objects using the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#379",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is migrating its entire IT portfolio to AWS. Each business unit in the company has a standalone AWS account that supports both development and test environments. New accounts to support production workloads will be needed soon.<br><br>The finance department requires a centralized method for payment but must maintain visibility into each group's spending to allocate costs.<br><br>The security team requires a centralized mechanism to control IAM usage in all the company’s accounts.<br><br>What combination of the following options meets the company’s needs with the LEAST effort? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều account riêng lẻ, cần thanh toán tập trung nhưng vẫn thấy chi tiêu từng nhóm, đồng thời kiểm soát IAM tập trung.</li><li>Ưu tiên <strong>LEAST effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Organizations</strong> (B) cho consolidated billing, mời account hiện có và tạo account mới theo OU. Bật <strong>all features</strong> và dùng <strong>SCPs</strong> (D) để giới hạn quyền IAM tập trung trên tất cả account.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — phải deploy CloudFormation vào từng account, nhiều công sức, không enforce được.</li><li><strong>B</strong>: ✅ Đúng — Organizations cho billing tập trung, OU hierarchy.</li><li><strong>C</strong>: ❌ Sai — không có thanh toán tập trung, chỉ tag account.</li><li><strong>D</strong>: ✅ Đúng — all features + SCP kiểm soát IAM trung tâm.</li><li><strong>E</strong>: ❌ Sai — gộp về một account mất cô lập, Access Advisor không enforce được.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Organizations</li><li>consolidated billing</li><li>all features</li><li>service control policies (SCPs)</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp billing tập trung + guardrail đa account → nghĩ ngay đến <strong>Organizations + SCP</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#379",
          "answers": [
            {
              "choice": "<p>A. Use a collection of parameterized AWS CloudFormation templates defining common IAM permissions that are launched into each account. Require all new and existing accounts to launch the appropriate stacks to enforce the least privilege model.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations to create a new organization from a chosen payer account and define an organizational unit hierarchy. Invite the existing accounts to join the organization and create new accounts using Organizations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Require each business unit to use its own AWS accounts. Tag each AWS account appropriately and enable Cost Explorer to administer chargebacks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable all features of AWS Organizations and establish appropriate service control policies that filter IAM permissions for sub-accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Consolidate all of the company's AWS accounts into a single AWS account. Use tags for billing purposes and the IAM’s Access Advisor feature to enforce the least privilege model.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#380",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a solution that analyzes weather data from thousands of weather stations. The weather stations send the data over an Amazon API Gateway REST API that has an AWS Lambda function integration. The Lambda function calls a third-party service for data pre-processing. The third-party service gets overloaded and fails the pre-processing, causing a loss of data.<br><br>A solutions architect must improve the resiliency of the solution. The solutions architect must ensure that no data is lost and that data can be processed later if failures occur.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API Gateway gọi Lambda, Lambda gọi dịch vụ bên thứ ba bị quá tải nên mất dữ liệu.</li><li>Requirement: không mất dữ liệu, xử lý lại được sau khi lỗi.</li><li>Ưu tiên resiliency.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>API Gateway tích hợp trực tiếp với <strong>Amazon SQS</strong> để lưu message bền vững, <strong>Lambda</strong> poll queue và retry. Message lỗi nhiều lần chuyển sang <strong>dead-letter queue</strong> (secondary queue) để xử lý lại sau.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — API Gateway không có khái niệm dead-letter queue cho API như vậy.</li><li><strong>B</strong>: ✅ Đúng — SQS đệm dữ liệu, retry, DLQ giữ message lỗi.</li><li><strong>C</strong>: ❌ Sai — event bus không được cấu hình làm failure destination của Lambda; EventBridge không phải đích hợp lệ cho bus phụ.</li><li><strong>D</strong>: ❌ Sai — event bus không phải failure destination hợp lệ, API vẫn gọi Lambda trực tiếp nên vẫn mất dữ liệu.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>SQS decoupling</li><li>dead-letter queue (DLQ)</li><li>API Gateway service integration</li><li>no data lost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp downstream hay quá tải + không được mất dữ liệu → nghĩ ngay đến <strong>SQS + DLQ</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#380",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the queue as the dead-letter queue for the API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create two Amazon Simple Queue Service (Amazon SQS) queues: a primary queue and a secondary queue. Configure the secondary queue as the dead-letter queue for the primary queue. Update the API to use a new integration to the primary queue. Configure the Lambda function as the invocation target for the primary queue.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two Amazon EventBridge event buses: a primary event bus and a secondary event bus. Update the API to use a new integration to the primary event bus. Configure an EventBridge rule to react to all events on the primary event bus. Specify the Lambda function as the target of the rule. Configure the secondary event bus as the failure destination for the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom Amazon EventBridge event bus. Configure the event bus as the failure destination for the Lambda function.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#381",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company built an ecommerce website on AWS using a three-tier web architecture. The application is Java-based and composed of an Amazon CloudFront distribution, an Apache web server layer of Amazon EC2 instances in an Auto Scaling group, and a backend Amazon Aurora MySQL database.<br><br>Last month, during a promotional sales event, users reported errors and timeouts while adding items to their shopping carts. The operations team recovered the logs created by the web servers and reviewed Aurora DB cluster performance metrics. Some of the web servers were terminated before logs could be collected and the Aurora metrics were not sufficient for query performance analysis.<br><br>Which combination of steps must the solutions architect take to improve application performance visibility during peak traffic events? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A, B, D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lỗi/timeout lúc peak; log web server mất khi instance bị terminate, metric Aurora không đủ.</li><li>Requirement: tăng <strong>visibility</strong> hiệu năng ứng dụng.</li><li>Cần log bền vững, slow query và tracing.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>CloudWatch Logs agent</strong> (D) đẩy log Apache ra ngoài trước khi instance bị terminate. Aurora publish <strong>slow query/error logs</strong> lên CloudWatch Logs (A). <strong>AWS X-Ray SDK</strong> (B) trace request HTTP và SQL query để tìm điểm nghẽn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — slow query log của Aurora lên CloudWatch Logs.</li><li><strong>B</strong>: ✅ Đúng — X-Ray trace request và SQL.</li><li><strong>C</strong>: ❌ Sai — Aurora không stream log trực tiếp tới Kinesis theo cách này, thừa phức tạp.</li><li><strong>D</strong>: ✅ Đúng — log Apache được lưu bền.</li><li><strong>E</strong>: ❌ Sai — <strong>CloudTrail</strong> ghi API call, không phải hiệu năng ứng dụng.</li><li><strong>F</strong>: ❌ Sai — không có tính năng \"performance benchmarking\" publish tới X-Ray.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>CloudWatch Logs agent</li><li>Aurora slow query log</li><li>AWS X-Ray SDK</li><li>CloudTrail ≠ performance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cần visibility log + query + request → nghĩ ngay đến <strong>CloudWatch Logs + X-Ray</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#381",
          "answers": [
            {
              "choice": "<p>A. Configure the Aurora MySQL DB cluster to publish slow query and error logs to Amazon CloudWatch Logs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement the AWS X-Ray SDK to trace incoming HTTP requests on the EC2 instances and implement tracing of SQL queries with the X-Ray SDK for Java.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Aurora MySQL DB cluster to stream slow query and error logs to Amazon Kinesis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install and configure an Amazon CloudWatch Logs agent on the EC2 instances to send the Apache logs to CloudWatch Logs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable and configure AWS CloudTrail to collect and analyze application activity from Amazon EC2 and Aurora</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable Aurora MySQL DB cluster performance benchmarking and publish the stream to AWS X-Ray.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#382",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that provisions job boards for a seasonal workforce is seeing an increase in traffic and usage. The backend services run on a pair of Amazon EC2 instances behind an Application Load Balancer with Amazon DynamoDB as the datastore. Application read and write traffic is slow during peak seasons.<br><br>Which option provides a scalable application architecture to handle peak seasons with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Backend trên 2 EC2 cố định và DynamoDB, chậm vào mùa cao điểm.</li><li>Requirement: kiến trúc scalable.</li><li>Ưu tiên <strong>LEAST development effort</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Auto Scaling groups</strong> scale EC2 mà không cần sửa code, <strong>DynamoDB auto scaling</strong> điều chỉnh read/write capacity theo tải. Không phải viết lại ứng dụng.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — chuyển sang <strong>Lambda</strong> cần viết lại code, tăng capacity thủ công không linh hoạt.</li><li><strong>B</strong>: ❌ Sai — <strong>global tables</strong> phục vụ multi-Region, không giải quyết bài toán scale.</li><li><strong>C</strong>: ✅ Đúng — ít sửa code nhất, scale cả compute lẫn database.</li><li><strong>D</strong>: ⚠️ Có thể nhưng không tối ưu — thêm SQS + Lambda cần thay đổi kiến trúc/code, không scale đọc.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Auto Scaling group</li><li>DynamoDB auto scaling</li><li>LEAST development effort</li><li>peak seasons</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp scale mà ít sửa code → nghĩ ngay đến <strong>ASG + DynamoDB auto scaling</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#382",
          "answers": [
            {
              "choice": "<p>A. Migrate the backend services to AWS Lambda. Increase the read and write capacity of DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the backend services to AWS Lambda. Configure DynamoDB to use global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Auto Scaling groups for the backend services. Use DynamoDB auto scaling.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Auto Scaling groups for the backend services. Use Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function to write to DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#383",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating to the cloud. It wants to evaluate the configurations of virtual machines in its existing data center environment to ensure that it can size new Amazon EC2 instances accurately. The company wants to collect metrics, such as CPU, memory, and disk utilization, and it needs an inventory of what processes are running on each instance. The company would also like to monitor network connections to map communications between servers.<br><br>Which would enable the collection of this data MOST cost effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Đánh giá VM on-premises để sizing EC2 khi migrate.</li><li>Cần CPU/memory/disk, danh sách process và network connection giữa các server.</li><li>Ưu tiên <strong>MOST cost effective</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Application Discovery Service</strong> với <strong>agent-based discovery</strong> thu thập đầy đủ: system performance, running processes và network connections. Dịch vụ không tốn thêm phí.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — agent thu thập metric, process và network connection.</li><li><strong>B</strong>: ❌ Sai — <strong>CloudWatch agent</strong> không cung cấp inventory process/network mapping phục vụ migration và tốn phí.</li><li><strong>C</strong>: ❌ Sai — <strong>agentless discovery</strong> chỉ lấy VM config và performance cơ bản, không có process và network connection.</li><li><strong>D</strong>: ❌ Sai — không thể \"quét qua firewall/VPN\" từ console; cần agent hoặc connector.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Application Discovery Service</li><li>agent-based discovery</li><li>running processes</li><li>network connections</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cần process + network dependency → <strong>Discovery agent</strong>; chỉ cần VM config → agentless.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#383",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Discovery Service and deploy the data collection agent to each virtual machine in the data center.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Amazon CloudWatch agent on all servers within the local environment and publish metrics to Amazon CloudWatch Logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Application Discovery Service and enable agentless discovery in the existing virtualization environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Application Discovery Service in the AWS Management Console and configure the corporate firewall to allow scans over a VPN.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#384",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides a software as a service (SaaS) application that runs in the AWS Cloud. The application runs on Amazon EC2 instances behind a Network Load Balancer (NLB). The instances are in an Auto Scaling group and are distributed across three Availability Zones in a single AWS Region.<br><br>The company is deploying the application into additional Regions. The company must provide static IP addresses for the application to customers so that the customers can add the IP addresses to allow lists. The solution must automatically route customers to the Region that is geographically closest to them.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>SaaS multi-Region sau <strong>NLB</strong>, cần static IP cho allow list.</li><li>Requirement: tự động route tới Region gần nhất.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Global Accelerator standard accelerator</strong> cung cấp 2 static anycast IP và route traffic tới endpoint khỏe, gần nhất về mặt địa lý. NLB của mỗi Region là endpoint hợp lệ.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>CloudFront</strong> không có static IP cố định, origin group chỉ dùng cho failover.</li><li><strong>B</strong>: ✅ Đúng — static anycast IP + routing tới Region gần nhất.</li><li><strong>C</strong>: ❌ Sai — dải IP edge của CloudFront rất lớn và thay đổi, không phải static IP chuyên biệt.</li><li><strong>D</strong>: ❌ Sai — <strong>custom routing accelerator</strong> ánh xạ user tới destination cụ thể, không route theo proximity.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Global Accelerator</li><li>static IP allow list</li><li>standard accelerator</li><li>closest Region</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp static IP + multi-Region + gần nhất → nghĩ ngay đến <strong>Global Accelerator (standard)</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#384",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution. Create a CloudFront origin group. Add the NLB for each additional Region to the origin group. Provide customers with the IP address ranges of the distribution’s edge locations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Global Accelerator standard accelerator. Create a standard accelerator endpoint for the NLB in each additional Region. Provide customers with the Global Accelerator IP address.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution. Create a custom origin for the NLB in each additional Region. Provide customers with the IP address ranges of the distribution’s edge locations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Global Accelerator custom routing accelerator. Create a listener for the custom routing accelerator. Add the IP address and ports for the NLB in each additional Region. Provide customers with the Global Accelerator IP address.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#385",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account.<br><br>Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads.<br><br>Which strategy will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nhiều dev unit dùng chung production account, cần ngăn unit này xóa EC2 của unit khác.</li><li>Developer vẫn quản lý được instance của mình.</li><li>Ưu tiên least privilege qua <strong>ABAC</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Truyền <strong>session tag</strong> DevelopmentUnit qua SAML, rồi dùng IAM policy deny khi resource tag khác với <strong>aws:PrincipalTag/DevelopmentUnit</strong>. Đây là mô hình ABAC với tag so khớp động.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — các unit dùng chung một production account nên không thể tách bằng OU/SCP theo account.</li><li><strong>B</strong>: ✅ Đúng — ABAC với session tag + deny StringNotEquals.</li><li><strong>C</strong>: ❌ Sai — SCP chỉ là guardrail, không cấp quyền; \"allow\" trong SCP không cấp permission.</li><li><strong>D</strong>: ❌ Sai — policy riêng cho mỗi unit khó mở rộng, không dùng tag principal.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ABAC</li><li>STS session tag</li><li>aws:PrincipalTag</li><li>SAML federation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp cô lập tài nguyên giữa team trong cùng account → nghĩ ngay đến <strong>ABAC với session tag</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#385",
          "answers": [
            {
              "choice": "<p>A. Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCP with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the IAM policy for the developers’ assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#386",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An enterprise company is building an infrastructure services platform for its users. The company has the following requirements:<br><br>• Provide least privilege access to users when launching AWS infrastructure so users cannot provision unapproved services.<br>• Use a central account to manage the creation of infrastructure services.<br>• Provide the ability to distribute infrastructure services to multiple accounts in AWS Organizations.<br>• Provide the ability to enforce tags on any infrastructure that is started by users.<br><br>Which combination of actions using AWS services will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, D, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Nền tảng infra service: least privilege, quản lý tập trung, phân phối multi-account, ép tag.</li><li>Ưu tiên governance bằng <strong>AWS Service Catalog</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Đóng gói CloudFormation thành <strong>Service Catalog products</strong> trong portfolio ở central account và share qua Organizations (B). Người dùng chỉ có <strong>ServiceCatalogEndUserAccess</strong> và launch constraints (D). <strong>TagOption Library</strong> ép tag bắt buộc (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — template trong S3 không giới hạn dịch vụ được provision, không ép tag.</li><li><strong>B</strong>: ✅ Đúng — Service Catalog portfolio chia sẻ qua Organizations.</li><li><strong>C</strong>: ❌ Sai — <strong>CloudFormationFullAccess</strong> quá rộng, vi phạm least privilege.</li><li><strong>D</strong>: ✅ Đúng — quyền end user tối thiểu, launch constraint, import portfolio.</li><li><strong>E</strong>: ✅ Đúng — TagOption Library quản lý tag bắt buộc.</li><li><strong>F</strong>: ❌ Sai — thuộc tính Tags trong template không ép được người dùng.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Service Catalog</li><li>portfolio sharing</li><li>TagOption</li><li>launch constraints</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp phân phối infra đã duyệt + ép tag → nghĩ ngay đến <strong>Service Catalog + TagOptions</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#386",
          "answers": [
            {
              "choice": "<p>A. Develop infrastructure services using AWS CloudFormation templates. Add the templates to a central Amazon S3 bucket and add the IAM roles or users that require access to the S3 bucket policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Develop infrastructure services using AWS CloudFormation templates. Upload each template as an AWS Service Catalog product to portfolios created in a central AWS account. Share these portfolios with the Organizations structure created for the company.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow user IAM roles to have AWSCloudFormationFullAccess and AmazonS3ReadOnlyAccess permissions. Add an Organizations SCP at the AWS account root user level to deny all services except AWS CloudFormation and Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow user IAM roles to have ServiceCatalogEndUserAccess permissions only. Use an automation script to import the central portfolios to local AWS accounts, copy the TagOption, assign users access, and apply launch constraints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the AWS Service Catalog TagOption Library to maintain a list of tags required by the company. Apply the TagOption to AWS Service Catalog products or portfolios.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use the AWS CloudFormation Resource Tags property to enforce the application of tags to any CloudFormation templates that will be created for users.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#387",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys a new web application. As part of the setup, the company configures AWS WAF to log to Amazon S3 through Amazon Kinesis Data Firehose. The company develops an Amazon Athena query that runs once daily to return AWS WAF log data from the previous 24 hours. The volume of daily logs is constant. However, over time, the same query is taking more time to run.<br><br>A solutions architect needs to design a solution to prevent the query time from continuing to increase. The solution must minimize operational overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Athena query hàng ngày ngày càng chậm dù khối lượng log mỗi ngày không đổi (dữ liệu tích lũy).</li><li>Requirement: ngăn thời gian query tăng, <strong>minimize operational overhead</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Cấu hình <strong>Kinesis Data Firehose</strong> partition dữ liệu theo date/time và <strong>Athena table partitioning</strong>; query chỉ quét partition của 24 giờ gần nhất nên thời gian ổn định, không cần thêm xử lý.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — gộp file bằng Lambda thêm vận hành, vẫn quét toàn bộ dữ liệu.</li><li><strong>B</strong>: ❌ Sai — mỗi ngày một bucket khiến quản lý phức tạp, không thân thiện với Athena.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — thêm <strong>Redshift Spectrum</strong>, tăng chi phí và vận hành không cần thiết.</li><li><strong>D</strong>: ✅ Đúng — partition giảm dữ liệu quét, ít vận hành.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Athena partitioning</li><li>Firehose dynamic partitioning</li><li>data scanned</li><li>minimize operational overhead</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Athena chậm dần theo thời gian → nghĩ ngay đến <strong>partition theo date</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#387",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that consolidates each day's AWS WAF logs into one log file.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the amount of data scanned by configuring AWS WAF to send logs to a different S3 bucket each day.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Kinesis Data Firehose configuration to partition the data in Amazon S3 by date and time. Create external tables for Amazon Redshift. Configure Amazon Redshift Spectrum to query the data source.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Kinesis Data Firehose configuration and Athena table definition to partition the data by date and time. Change the Athena query to view the relevant partitions.</p>",
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
      "question_id": "#388",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a web application that runs on Amazon EC2 instances in an Auto Scaling group behind a public-facing Application Load Balancer (ALB). Only users from a specific country are allowed to access the application. The company needs the ability to log the access requests that have been blocked. The solution should require the least possible maintenance.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Chỉ cho phép người dùng từ một quốc gia vào ứng dụng sau <strong>ALB</strong>, cần log request bị chặn.</li><li>Ưu tiên <strong>least possible maintenance</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS WAF</strong> có <strong>geo match rule</strong> chặn theo quốc gia, gắn với ALB và hỗ trợ logging request bị block. Không phải tự duy trì danh sách IP.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — IPSet phải cập nhật thủ công khi dải IP đổi.</li><li><strong>B</strong>: ✅ Đúng — geo match rule, ít bảo trì, có log.</li><li><strong>C</strong>: ❌ Sai — <strong>AWS Shield</strong> bảo vệ DDoS, không lọc theo quốc gia.</li><li><strong>D</strong>: ❌ Sai — security group cần duy trì dải IP, không có log request bị chặn.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS WAF geo match</li><li>web ACL on ALB</li><li>WAF logging</li><li>least maintenance</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp chặn theo quốc gia → nghĩ ngay đến <strong>WAF geo match</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#388",
          "answers": [
            {
              "choice": "<p>A. Create an IPSet containing a list of IP ranges that belong to the specified country. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from an IP range in the IPSet. Associate the rule with the web ACL. Associate the web ACL with the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Shield to block any requests that do not originate from the specified country. Associate AWS Shield with the ALB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a security group rule that allows ports 80 and 443 from IP ranges that belong to the specified country. Associate the security group with the ALB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#389",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application from on-premises infrastructure to the AWS Cloud. During migration design meetings, the company expressed concerns about the availability and recovery options for its legacy Windows file server. The file server contains sensitive business-critical data that cannot be recreated in the event of data corruption or data loss. According to compliance requirements, the data must not travel across the public internet. The company wants to move to AWS managed services where possible.<br><br>The company decides to store the data in an Amazon FSx for Windows File Server file system. A solutions architect must design a solution that copies the data to another AWS Region for disaster recovery (DR) purposes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: C</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Copy dữ liệu <strong>FSx for Windows File Server</strong> sang Region khác cho DR.</li><li>Requirement: dữ liệu không đi qua internet công cộng, ưu tiên managed service.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Tạo FSx for Windows ở DR Region, nối VPC hai Region bằng <strong>inter-Region VPC peering</strong> (private backbone) và dùng <strong>AWS DataSync</strong> qua <strong>interface VPC endpoint (PrivateLink)</strong> để sao chép, không qua internet.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>FSx File Gateway</strong> không dùng để sao lưu FSx sang S3 ở Region khác theo cách này.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — Site-to-Site VPN đi qua internet, vi phạm yêu cầu.</li><li><strong>C</strong>: ✅ Đúng — peering + DataSync + PrivateLink hoàn toàn private.</li><li><strong>D</strong>: ❌ Sai — <strong>Transfer Family</strong> là dịch vụ SFTP/FTPS, không dùng để copy giữa hai FSx.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>inter-Region VPC peering</li><li>AWS DataSync</li><li>PrivateLink endpoint</li><li>not over public internet</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp sao chép FSx cross-Region qua mạng private → nghĩ ngay đến <strong>DataSync + VPC peering/PrivateLink</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#389",
          "answers": [
            {
              "choice": "<p>A. Create a destination Amazon S3 bucket in the DR Region. Establish connectivity between the FSx for Windows File Server file system in the primary Region and the S3 bucket in the DR Region by using Amazon FSx File Gateway. Configure the S3 bucket as a continuous backup source in FSx File Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC the primary Region and the VPC in the DR Region by using AWS Site-to-Site VPN. Configure AWS DataSync to communicate by using VPN endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using VPC peering. Configure AWS DataSync to communicate by using interface VPC endpoints with AWS PrivateLink.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Transit Gateway in each Region. Use AWS Transfer Family to copy files between the FSx for Windows File Server file system in the primary Region and the FSx for Windows File Server file system in the DR Region over the private AWS backbone network.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#390",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is currently in the design phase of an application that will need an RPO of less than 5 minutes and an RTO of less than 10 minutes. The solutions architecture team is forecasting that the database will store approximately 10 TB of data. As part of the design, they are looking for a database solution that will provide the company with the ability to fail over to a secondary Region.<br><br>Which solution will meet these business requirements at the LOWEST cost?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>DR sang Region khác với RPO &lt; 5 phút, RTO &lt; 10 phút, dữ liệu 10 TB.</li><li>Ưu tiên <strong>LOWEST cost</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>RDS cross-Region read replica</strong> sao chép bất đồng bộ liên tục (lag thường vài giây) nên đạt RPO &lt; 5 phút, promote nhanh đạt RTO &lt; 10 phút, chi phí thấp hơn chạy cluster Aurora thứ hai.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — snapshot copy 10 TB mỗi 5 phút không đảm bảo RPO/RTO.</li><li><strong>B</strong>: ✅ Đúng — replica cross-Region, rẻ, promote nhanh.</li><li><strong>C</strong>: ❌ Sai — hai cluster Aurora kèm <strong>DMS</strong> đắt và phức tạp hơn.</li><li><strong>D</strong>: ❌ Sai — replica cùng Region không bảo vệ khi mất cả Region.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>cross-Region read replica</li><li>RPO / RTO</li><li>promote replica</li><li>lowest cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR cross-Region RPO phút + rẻ → nghĩ ngay đến <strong>cross-Region read replica</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#390",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#391",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company needs to create a separate AWS account for a new digital wallet application. The company uses AWS Organizations to manage its accounts. A solutions architect uses the IAM user Support1 from the management account to create a new member account with finance1@example.com as the email address.<br><br>What should the solutions architect do to create IAM users in the new member account?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Member account mới tạo từ management account bằng IAM user Support1, cần tạo IAM user trong account đó.</li><li>Cách truy cập mặc định vào account mới.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Khi tạo account bằng <strong>Organizations</strong>, AWS tự tạo role <strong>OrganizationAccountAccessRole</strong> trong member account. Từ management account chỉ cần switch role để quản trị và tạo IAM user.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — root password không được gửi qua email; phải dùng quy trình reset password, không phải best practice.</li><li><strong>B</strong>: ✅ Đúng — switch role vào OrganizationAccountAccessRole.</li><li><strong>C</strong>: ❌ Sai — root password của management account không dùng cho member account.</li><li><strong>D</strong>: ❌ Sai — IAM user Support1 chỉ tồn tại trong management account, không đăng nhập trực tiếp vào account khác.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>OrganizationAccountAccessRole</li><li>switch role</li><li>member account</li><li>management account</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp truy cập account mới tạo bằng Organizations → nghĩ ngay đến <strong>OrganizationAccountAccessRole</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#391",
          "answers": [
            {
              "choice": "<p>A. Sign in to the AWS Management Console with AWS account root user credentials by using the 64-character password from the initial AWS Organizations email sent to finance1@example.com. Set up the IAM users as required.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the management account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Go to the AWS Management Console sign-in page. Choose “Sign in using root account credentials.” Sign in in by using the email address finance 1@example.com and the management account's root password. Set up the IAM users as required.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Go to the AWS Management Console sign-in page. Sign in by using the account ID of the new member account and the Support1 IAM credentials. Set up the IAM users as required.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#392",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors.<br><br>Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events.<br><br>The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.<br><br>Which strategy meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>API serverless bị tăng tải, nhiều GET lặp lại cùng query gây lỗi memory trên Aurora Serverless.</li><li>Requirement: hỗ trợ thêm tải, <strong>minimize cost</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon ElastiCache for Redis</strong> cache kết quả query, giảm trực tiếp số lần gọi database. Lambda đọc cache trước nên giảm tải Aurora với chi phí thấp.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ⚠️ Có thể nhưng không tối ưu — API caching giúp request giống nhau nhưng edge-optimized không cần thiết, cache theo stage tốn phí cố định; đáp án chuẩn của đề là ElastiCache.</li><li><strong>B</strong>: ✅ Đúng — cache kết quả DB, giảm tải Aurora.</li><li><strong>C</strong>: ❌ Sai — tăng memory Aurora tăng chi phí và không giải quyết gốc rễ.</li><li><strong>D</strong>: ❌ Sai — throttling chặn người dùng thay vì tăng khả năng phục vụ.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>ElastiCache for Redis</li><li>repeated GET queries</li><li>database memory errors</li><li>minimize cost</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp query lặp lại làm quá tải DB → nghĩ ngay đến <strong>caching (ElastiCache)</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#392",
          "answers": [
            {
              "choice": "<p>A. Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#393",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an on-premises application and a MySQL database to AWS. The application processes highly sensitive data, and new data is constantly updated in the database. The data must not be transferred over the internet. The company also must encrypt the data in transit and at rest.<br><br>The database is 5 TB in size. The company already has created the database schema in an Amazon RDS for MySQL DB instance. The company has set up a 1 Gbps AWS Direct Connect connection to AWS. The company also has set up a public VIF and a private VIF. A solutions architect needs to design a solution that will migrate the data to AWS with the least possible downtime.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Migrate MySQL 5 TB, dữ liệu liên tục thay đổi, không qua internet, mã hóa in transit và at rest.</li><li>Có <strong>Direct Connect</strong> 1 Gbps (public + private VIF).</li><li>Ưu tiên <strong>least possible downtime</strong>.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS DMS</strong> với <strong>full load + CDC</strong> giữ đồng bộ liên tục nên cutover gần như không downtime. Replication instance đặt trong private subnet, dùng Direct Connect private VIF và TLS, KMS cho mã hóa at rest.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Snowball Edge</strong> mất nhiều ngày, dữ liệu thay đổi không đồng bộ, downtime dài.</li><li><strong>B</strong>: ✅ Đúng — DMS full load + CDC, private, mã hóa.</li><li><strong>C</strong>: ❌ Sai — backup + DataSync không bắt kịp thay đổi mới, downtime lớn.</li><li><strong>D</strong>: ❌ Sai — backup qua <strong>S3 File Gateway</strong> cũng không replicate thay đổi liên tục.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS DMS full load + CDC</li><li>least downtime</li><li>Direct Connect private VIF</li><li>TLS + KMS</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp migrate database ít downtime → nghĩ ngay đến <strong>DMS full load + CDC</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#393",
          "answers": [
            {
              "choice": "<p>A. Perform a database backup. Copy the backup files to an AWS Snowball Edge Storage Optimized device. Import the backup to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS) to migrate the data to AWS. Create a DMS replication instance in a private subnet. Create VPC endpoints for AWS DMS. Configure a DMS task to copy data from the on-premises database to the DB instance by using full load plus change data capture (CDC). Use the AWS Key Management Service (AWS KMS) default key for encryption at rest. Use TLS for encryption in transit.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Perform a database backup. Use AWS DataSync to transfer the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 File Gateway. Set up a private connection to Amazon S3 by using AWS PrivateLink. Perform a database backup. Copy the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#394",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Accompany is deploying a new cluster for big data analytics on AWS. The cluster will run across many Linux Amazon EC2 instances that are spread across multiple Availability Zones.<br><br>All of the nodes in the cluster must have read and write access to common underlying file storage. The file storage must be highly available, must be resilient, must be compatible with the Portable Operating System Interface (POSIX), and must accommodate high levels of throughput.<br><br>Which storage solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Cluster big data nhiều EC2 Linux trải nhiều AZ cần chung file storage.</li><li>Yêu cầu: highly available, resilient, <strong>POSIX</strong>, throughput cao.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Amazon EFS</strong> là file system POSIX, multi-AZ, mount được từ nhiều instance. Với big data cần throughput và IOPS rất cao, <strong>Max I/O performance mode</strong> phù hợp hơn General Purpose.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>file gateway</strong> gắn với S3 không phù hợp POSIX/throughput cao.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>General Purpose</strong> có độ trễ thấp nhưng giới hạn thấp hơn cho workload song song cao.</li><li><strong>C</strong>: ❌ Sai — EBS io2 không đa AZ; multi-attach chỉ trong một AZ.</li><li><strong>D</strong>: ✅ Đúng — EFS Max I/O cho throughput song song cao.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Amazon EFS</li><li>POSIX</li><li>Max I/O performance mode</li><li>multi-AZ shared storage</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp shared POSIX multi-AZ + big data throughput → nghĩ ngay đến <strong>EFS Max I/O</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#394",
          "answers": [
            {
              "choice": "<p>A. Provision an AWS Storage Gateway file gateway NFS file share that is attached to an Amazon S3 bucket. Mount the NFS file share on each EC2 instance in the cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a new Amazon Elastic File System (Amazon EFS) file system that uses General Purpose performance mode. Mount the EFS file system on each EC2 instance in the cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a new Amazon Elastic Block Store (Amazon EBS) volume that uses the io2 volume type. Attach the EBS volume to all of the EC2 instances in the cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a new Amazon Elastic File System (Amazon EFS) file system that uses Max I/O performance mode. Mount the EFS file system on each EC2 instance in the cluster.</p>",
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
      "question_id": "#395",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a software as a service (SaaS) solution on AWS. The solution has an Amazon API Gateway API that serves an HTTPS endpoint. The API uses AWS Lambda functions for compute. The Lambda functions store data in an Amazon Aurora Serverless v1 database.<br><br>The company used the AWS Serverless Application Model (AWS SAM) to deploy the solution. The solution extends across multiple Availability Zones and has no disaster recovery (DR) plan.<br><br>A solutions architect must design a DR strategy that can recover the solution in another AWS Region. The solution has an RTO of 5 minutes and an RPO of 1 minute.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: D</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Serverless SaaS (API Gateway, Lambda, Aurora Serverless v1) cần DR sang Region khác.</li><li>RTO 5 phút, RPO 1 phút.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>Aurora global database</strong> sao chép cross-Region với lag dưới 1 giây (RPO ~1 phút). Dùng giải pháp <strong>active-passive</strong> đã launch sẵn ở Region đích để failover trong vài phút đạt RTO 5 phút. Aurora Serverless v1 không hỗ trợ global database nên phải chuyển sang Aurora MySQL tiêu chuẩn.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Serverless v1 không có cross-Region read replica; runbook triển khai thủ công không đạt RTO.</li><li><strong>B</strong>: ⚠️ Có thể nhưng không tối ưu — global database đúng nhưng deploy bằng runbook khi thảm họa mất quá nhiều thời gian cho RTO 5 phút.</li><li><strong>C</strong>: ❌ Sai — Serverless v1 không có multiple writer cross-Region.</li><li><strong>D</strong>: ✅ Đúng — global database + stack chạy sẵn ở Region đích.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Aurora global database</li><li>active-passive</li><li>RTO 5 phút, RPO 1 phút</li><li>Aurora Serverless v1 limitation</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DR cross-Region RTO/RPO phút với Aurora → nghĩ ngay đến <strong>Aurora global database + warm standby</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#395",
          "answers": [
            {
              "choice": "<p>A. Create a read replica of the Aurora Serverless v1 database in the target Region. Use AWS SAM to create a runbook to deploy the solution to the target Region. Promote the read replica to primary in case of disaster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the Aurora Serverless v1 database to a standard Aurora MySQL global database that extends across the source Region and the target Region. Use AWS SAM to create a runbook to deploy the solution to the target Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora Serverless v1 DB cluster that has multiple writer instances in the target Region. Launch the solution in the target Region. Configure the two Regional solutions to work in an active-passive configuration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change the Aurora Serverless v1 database to a standard Aurora MySQL global database that extends across the source Region and the target Region. Launch the solution in the target Region. Configure the two Regional solutions to work in an active-passive configuration.</p>",
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
      "question_id": "#396",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company owns a chain of travel agencies and is running an application in the AWS Cloud. Company employees use the application to search for information about travel destinations. Destination content is updated four times each year.<br><br>Two fixed Amazon EC2 instances serve the application. The company uses an Amazon Route 53 public hosted zone with a multivalue record of travel.example.com that returns the Elastic IP addresses for the EC2 instances. The application uses Amazon DynamoDB as its primary data store. The company uses a self-hosted Redis instance as a caching solution.<br><br>During content updates, the load on the EC2 instances and the caching solution increases drastically. This increased load has led to downtime on several occasions. A solutions architect must update the application so that the application is highly available and can handle the load that is generated by the content updates.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Ứng dụng 2 EC2 cố định với Redis tự host, quá tải khi cập nhật nội dung (4 lần/năm).</li><li>Requirement: highly available và chịu được tải tăng đột biến có dự đoán.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>DAX</strong> là cache in-memory tích hợp DynamoDB (ít sửa code). <strong>Auto Scaling group + ALB</strong> cho high availability, <strong>scheduled scaling</strong> chuẩn bị trước cho các đợt cập nhật đã biết lịch.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — DAX, ASG + ALB, scheduled scaling.</li><li><strong>B</strong>: ❌ Sai — scale thủ công không tự động, CloudFront không cần cho ứng dụng nội bộ động.</li><li><strong>C</strong>: ⚠️ Có thể nhưng không tối ưu — <strong>Memcached</strong> cần tự quản lý cache logic, không tích hợp DynamoDB bằng DAX.</li><li><strong>D</strong>: ❌ Sai — scale thủ công, CloudFront không phù hợp.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>DynamoDB Accelerator (DAX)</li><li>ALB + Auto Scaling</li><li>scheduled scaling</li><li>predictable load</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp DynamoDB cần cache + tải biết trước lịch → nghĩ ngay đến <strong>DAX + scheduled scaling</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#396",
          "answers": [
            {
              "choice": "<p>A. Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the EC2 instances before the content updates.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up Amazon ElastiCache for Redis. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution’s DNS alias. Manually scale up EC2 instances before the content updates.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Amazon ElastiCache for Memcached. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the application before the content updates.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#397",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time. A user is notified when image processing is complete.<br><br>Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, C, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Upload ảnh từ mobile, tải cao giờ hành chính, gần như không dùng lúc khác, thông báo khi xử lý xong.</li><li>Requirement: xử lý ảnh scale theo tải.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Upload thẳng lên <strong>S3</strong>, S3 event notification đẩy message vào <strong>SQS standard queue</strong> (B), <strong>Lambda</strong> xử lý theo queue và scale tự động (C), rồi <strong>Amazon SNS</strong> gửi push notification cho mobile app (E).</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>Amazon MQ</strong> là broker cần quản lý, S3 không gửi event trực tiếp tới nó.</li><li><strong>B</strong>: ✅ Đúng — SQS buffer cho thời điểm cao điểm.</li><li><strong>C</strong>: ✅ Đúng — Lambda scale theo số message.</li><li><strong>D</strong>: ❌ Sai — <strong>S3 Batch Operations</strong> dùng cho job hàng loạt, không phải xử lý theo message.</li><li><strong>E</strong>: ✅ Đúng — SNS hỗ trợ mobile push.</li><li><strong>F</strong>: ❌ Sai — <strong>SES</strong> là email, không phải push notification.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>S3 event notification</li><li>SQS standard queue</li><li>Lambda scale</li><li>SNS mobile push</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp upload tải đột biến + xử lý bất đồng bộ → nghĩ ngay đến <strong>S3 → SQS → Lambda</strong>, notify bằng <strong>SNS</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#397",
          "answers": [
            {
              "choice": "<p>A. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invoke an AWS Lambda function to perform image processing when a message is available in the queue.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#398",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application on AWS. The application sends logs to an Amazon OpenSearch Service cluster for analysis. All data must be stored within a VPC.<br><br>Some of the company’s developers work from home. Other developers work from three different company office locations. The developers need to access OpenSearch Service to analyze and visualize logs directly from their local development machines.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: A</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Developer ở nhà và 3 văn phòng cần truy cập <strong>OpenSearch Service</strong> trong VPC từ máy cá nhân.</li><li>Dữ liệu phải nằm trong VPC.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>AWS Client VPN</strong> cho phép từng người dùng từ bất kỳ đâu kết nối an toàn vào VPC bằng client, không cần hạ tầng riêng tại từng văn phòng. Là managed service, ít vận hành.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ✅ Đúng — Client VPN cho người dùng từ xa lẫn văn phòng.</li><li><strong>B</strong>: ❌ Sai — <strong>Site-to-Site VPN</strong> kết nối mạng với mạng, không dành cho developer ở nhà.</li><li><strong>C</strong>: ❌ Sai — <strong>Direct Connect</strong> public VIF không vào được VPC và quá đắt.</li><li><strong>D</strong>: ❌ Sai — <strong>bastion host</strong> SSH không truy cập được dashboard/visualization và tăng rủi ro bảo mật.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>AWS Client VPN</li><li>remote developers</li><li>VPC-only OpenSearch</li><li>managed</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp người dùng từ xa truy cập tài nguyên VPC → nghĩ ngay đến <strong>Client VPN</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#398",
          "answers": [
            {
              "choice": "<p>A. Configure and set up an AWS Client VPN endpoint. Associate the Client VPN endpoint with a subnet in the VPC. Configure a Client VPN self-service portal. Instruct the developers to connect by using the client for Client VPN.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway, and connect it to the VPC. Create an AWS Site-to-Site VPN. Create an attachment to the transit gateway. Instruct the developers to connect by using an OpenVPN client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway, and connect it to the VPC. Order an AWS Direct Connect connection. Set up a public VIF on the Direct Connect connection. Associate the public VIF with the transit gateway. Instruct the developers to connect to the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and configure a bastion host in a public subnet of the VPC. Configure the bastion host security group to allow SSH access from the company CIDR ranges. Instruct the developers to connect by using SSH.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#399",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its website from an on-premises data center onto AWS. At the same time, it wants to migrate the website to a containerized microservice-based architecture to improve the availability and cost efficiency. The company’s security policy states that privileges and network permissions must be configured according to best practice, using least privilege.<br><br>A solutions architect must create a containerized architecture that meets the security requirements and has deployed the application to an Amazon ECS cluster.<br><br>What steps are required after the deployment to meet the requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Container trên <strong>Amazon ECS</strong> cần cấu hình network và quyền theo least privilege.</li><li>Cần kiểm soát network mức task và quyền riêng cho từng task.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p><strong>awsvpc network mode</strong> (B) cấp ENI riêng cho từng task nên áp dụng được <strong>security group</strong> ở mức task. <strong>IAM roles for tasks</strong> (E) cấp quyền riêng cho mỗi task, đúng least privilege.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — <strong>bridge</strong> mode chia sẻ network của instance, không có security group riêng cho task.</li><li><strong>B</strong>: ✅ Đúng — awsvpc cho network isolation mức task.</li><li><strong>C</strong>: ❌ Sai — gắn security group và role ở mức EC2 instance khiến mọi task chung quyền.</li><li><strong>D</strong>: ❌ Sai — truyền IAM credentials vào container là anti-pattern bảo mật.</li><li><strong>E</strong>: ✅ Đúng — task role + security group cho task.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>awsvpc network mode</li><li>IAM roles for tasks</li><li>task-level security group</li><li>least privilege</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp ECS least privilege → nghĩ ngay đến <strong>awsvpc + task IAM role</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#399",
          "answers": [
            {
              "choice": "<p>A. Create tasks using the bridge network mode.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create tasks using the awsvpc network mode.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Apply security groups to Amazon EC2 instances, and use IAM roles for EC2 instances to access other resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Apply security groups to the tasks, and pass IAM credentials into the container at launch time to access other resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Apply security groups to the tasks, and use IAM roles for tasks to access other resources.</p>",
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
      "question_id": "#400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is located in three subnets in a VPC.<br><br>Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>✅ ĐÁP ÁN ĐÚNG</strong>: B, E</p><p><strong>🎯 ĐỀ ĐANG HỎI GÌ?</strong></p><ul><li>Lambda cần truy cập <strong>Neptune</strong> (trong VPC) và vẫn truy cập được <strong>DynamoDB</strong>.</li><li>Chọn 2 cách khả thi.</li></ul><p><strong>💡 LÝ DO CHỌN ĐÁP ÁN</strong></p><p>Neptune nằm trong VPC nên Lambda phải gắn vào VPC. Lambda ở private subnet với <strong>NAT gateway</strong> (B) vẫn gọi được DynamoDB qua internet; hoặc dùng <strong>VPC endpoint (gateway) cho DynamoDB</strong> (E) để truy cập DynamoDB mà không cần internet.</p><p><strong>⚡ PHÂN TÍCH NHANH</strong></p><ul><li><strong>A</strong>: ❌ Sai — Lambda trong public subnet không có public IP nên không ra internet qua IGW.</li><li><strong>B</strong>: ✅ Đúng — private subnet + NAT để gọi DynamoDB.</li><li><strong>C</strong>: ❌ Sai — Neptune không có public endpoint, Lambda ngoài VPC không truy cập được.</li><li><strong>D</strong>: ❌ Sai — Neptune không có VPC endpoint kiểu này cho client bên ngoài VPC.</li><li><strong>E</strong>: ✅ Đúng — private subnet + DynamoDB VPC endpoint.</li></ul><p><strong>🔑 KEYWORDS CẦN NHỚ</strong></p><ul><li>Lambda in VPC</li><li>NAT gateway</li><li>DynamoDB gateway endpoint</li><li>Neptune private</li></ul><p><strong>🧠 MẸO THI</strong></p><p>\"Gặp Lambda trong VPC cần gọi dịch vụ public → nghĩ ngay đến <strong>NAT gateway hoặc VPC endpoint</strong>.\"</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#400",
          "answers": [
            {
              "choice": "<p>A. Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the Lambda functions outside the VPC. Update the Neptune security group to allow access from the IP ranges of the Lambda functions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the Lambda functions outside the VPC. Create a VPC endpoint for the Neptune database, and have the Lambda functions access Neptune over the VPC endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create three private subnets in the Neptune VPC. Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB, and route DynamoDB traffic to the VPC endpoint.</p>",
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
