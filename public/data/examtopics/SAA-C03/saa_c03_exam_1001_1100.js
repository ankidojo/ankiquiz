var SAA_C03_Exam_1001_1100 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1001",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a food delivery service. Because of recent growth, the company's order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes Amazon EC2 instances in an Auto Scaling group that collect orders from an application. A second group of EC2 instances in an Auto Scaling group fulfills the orders.<br><br>The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event.<br><br>A solutions architect must ensure that the order collection process and the order fulfillment process can both scale adequately during peak traffic hours.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1001",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups. Configure each Auto Scaling group's minimum capacity to meet its peak workload value.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic to create additional Auto Scaling groups on demand.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues. Scale the Auto Scaling groups based on notifications that the queues send.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues. Scale the Auto Scaling groups based on the number of messages in each queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1001 discussion",
      "discusstion": [
        {
          "id": 1299931,
          "date": "Sat 19 Oct 2024 10:06",
          "username": "sOI852POL",
          "content": "SQS to ensure data is not lost because of a scaling event, scale based on number of messages on the queue.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1298946,
          "date": "Wed 16 Oct 2024 22:39",
          "username": "8621a7c",
          "content": "Go with D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1294228,
          "date": "Mon 07 Oct 2024 13:35",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#1002",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming company is transitioning user data storage to Amazon DynamoDB to support the company's growing user base. The current architecture includes DynamoDB tables that contain user profiles, achievements, and in-game transactions.<br><br>The company needs to design a robust, continuously available, and resilient DynamoDB architecture to maintain a seamless gaming experience for users.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1002",
          "answers": [
            {
              "choice": "<p>Create DynamoDB tables in a single AWS Region. Use on-demand capacity mode. Use global tables to replicate data across multiple Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use DynamoDB Accelerator (DAX) to cache frequently accessed data. Deploy tables in a single AWS Region and enable auto scaling. Configure Cross-Region Replication manually to additional Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create DynamoDB tables in multiple AWS Regions. Use on-demand capacity mode. Use DynamoDB Streams for Cross-Region Replication between Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple AWS Regions. Use provisioned capacity mode. Enable auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1002 discussion",
      "discusstion": [
        {
          "id": 1323020,
          "date": "Sat 07 Dec 2024 06:35",
          "username": "trinh_le",
          "content": "Following keywords<br>robust: provisioned capacity reduces cost<br>continuously available: global tables<br>resilient: multiple regions enhances available",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1318505,
          "date": "Wed 27 Nov 2024 09:27",
          "username": "Cpso",
          "content": "c &d can do 2 ways rep. But C need user logic to handle conflict ,so it not robust",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1317992,
          "date": "Tue 26 Nov 2024 10:21",
          "username": "78b9037",
          "content": "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1308704,
          "date": "Fri 08 Nov 2024 11:30",
          "username": "striker89",
          "content": "DynamoDB Streams for replication are less expensive than Global tables.<br>On-demand capacity mode can be less expensive than provisionned mode.<br>Multi region deployment ensure high availability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300124,
          "date": "Sat 19 Oct 2024 20:33",
          "username": "Bwhizzy",
          "content": "D. Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple AWS Regions. Use provisioned capacity mode. Enable auto scaling.<br><br>Explanation:<br>DynamoDB global tables automatically replicate data across multiple Regions, ensuring that the data is available and consistent across all Regions. This provides resilience and high availability by allowing users in different geographical locations to access data from the closest Region.<br><br>Provisioned capacity mode allows you to pre-allocate read and write capacity units, which can result in cost savings over on-demand capacity mode if the traffic is predictable. Additionally, auto scaling can be enabled to dynamically adjust the capacity based on the actual traffic, ensuring that you only pay for the capacity that you need.<br><br>Multi-Region deployment improves the resilience of the system. If a failure occurs in one Region, another Region can seamlessly take over, ensuring an uninterrupted gaming experience.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#1003",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its media rendering application on premises. The company wants to reduce storage costs and has moved all data to Amazon S3. The on-premises rendering application needs low-latency access to storage.<br><br>The company needs to design a storage solution for the application. The storage solution must maintain the desired application performance.<br><br>Which storage solution will meet these requirements in the MOST cost-effective way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1003",
          "answers": [
            {
              "choice": "<p>Use Mountpoint for Amazon S3 to access the data in Amazon S3 for the on-premises application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon S3 File Gateway to provide storage for the on-premises application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the data from Amazon S3 to Amazon FSx for Windows File Server. Configure an Amazon FSx File Gateway to provide storage for the on-premises application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an on-premises file server. Use the Amazon S3 API to connect to S3 storage. Configure the application to access the storage from the on-premises file server.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1003 discussion",
      "discusstion": [
        {
          "id": 1316365,
          "date": "Fri 22 Nov 2024 15:59",
          "username": "Americanman",
          "content": "Amazon S3 File Gateway enables your existing file-based applications, devices, and workflows to use Amazon S3, without modification. Amazon S3 File Gateway securely and durably stores both file contents and metadata as objects, while providing your on-premises applications low-latency access to cached data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1300126,
          "date": "Sat 19 Oct 2024 20:38",
          "username": "Bwhizzy",
          "content": "B. Configure an Amazon S3 File Gateway to provide storage for the on-premises application.<br><br>Explanation:<br>Amazon S3 File Gateway provides a way for on-premises applications to access objects stored in Amazon S3 as files. It caches frequently accessed data locally, which ensures low-latency access to the data. This is crucial for maintaining the performance of the rendering application.<br><br>By keeping the data in Amazon S3, the company benefits from lower storage costs compared to using other storage services like Amazon FSx, while still providing the necessary performance for the on-premises application through the local caching capabilities of the File Gateway.<br><br>The File Gateway seamlessly integrates with Amazon S3, allowing the application to access data using standard file protocols like NFS or SMB, which simplifies the setup.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1004",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The system runs on Amazon EC2 instances. Customers use a public API that is hosted on the EC2 instances to exchange information with the ERP system. International customers report slow API response times from their data centers.<br><br>Which solution will improve response times for the international customers MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1004",
          "answers": [
            {
              "choice": "<p>Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide connectivity from each customer's data center to us-east-1. Route customer API requests by using a Direct Connect gateway to the ERP system API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized managed cache policy to provide improved cache efficiency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer networks. Route traffic to the API over the VPN connections.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1004 discussion",
      "discusstion": [
        {
          "id": 1298949,
          "date": "Wed 16 Oct 2024 22:47",
          "username": "8621a7c",
          "content": "CloudFront for Dynamic content (such as API acceleration and dynamic site delivery)",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1297805,
          "date": "Mon 14 Oct 2024 21:49",
          "username": "TewatiaAmit",
          "content": "CloudFront can reduce response times by caching API responses, but if the API is dynamic and not cacheable, it may not be as effective. Global Accelerator is better for improving latency when caching is not an option.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While dynamic content typically has low caching potential, CloudFront reduces latency by routing requests to the nearest edge location. There is also TCP Connection Reuse, which is also beneficial for low latency.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1312834,
          "date": "Fri 15 Nov 2024 23:42",
          "username": "Sergantus",
          "content": "While dynamic content typically has low caching potential, CloudFront reduces latency by routing requests to the nearest edge location. There is also TCP Connection Reuse, which is also beneficial for low latency.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1332722,
          "date": "Sat 28 Dec 2024 03:46",
          "username": "Anyio",
          "content": "The correct answer is C.<br><br>Explanation:<br><br>Option C: Correct. AWS Global Accelerator provides access via the AWS global network, reducing latency and improving performance for globally distributed users. By using Global Accelerator, you can direct global traffic to optimal AWS endpoints, offering lower latency and better connectivity compared to standard internet routing. It achieves this without modifying the API infrastructure, making it a highly cost-effective solution for improving API response times for international users.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1330388,
          "date": "Sun 22 Dec 2024 13:55",
          "username": "tch",
          "content": "MOST cost-effectively -<br>(ERP) system in the us-east-1 Region (one region only)<br>will be B<br><br>AWS Global Accelerator use case for one or multiple AWS regions!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1327031,
          "date": "Sun 15 Dec 2024 20:41",
          "username": "dragossky",
          "content": "C. Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1324870,
          "date": "Wed 11 Dec 2024 06:44",
          "username": "DhirajBansal",
          "content": "Cloudfront used for API acceleration and Dynamic content delivery",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1005",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company tracks customer satisfaction by using surveys that the company hosts on its website. The surveys sometimes reach thousands of customers every hour. Survey results are currently sent in email messages to the company so company employees can manually review results and assess customer sentiment.<br><br>The company wants to automate the customer survey process. Survey results must be available for the previous 12 months.<br><br>Which solution will meet these requirements in the MOST scalable way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1005",
          "answers": [
            {
              "choice": "<p>Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Send the survey results data to an API that is running on an Amazon EC2 instance. Configure the API to store the survey results as a new record in an Amazon DynamoDB table, call Amazon Comprehend for sentiment analysis, and save the results in a second DynamoDB table. Set the TTL for all records to 365 days in the future.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an AWS Lambda function to read the data and call Amazon Rekognition for sentiment analysis. Store the sentiment analysis results in a second S3 bucket. Use S3 lifecycle policies on each bucket to expire objects after 365 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1005 discussion",
      "discusstion": [
        {
          "id": 1331852,
          "date": "Thu 26 Dec 2024 10:12",
          "username": "EllenLiu",
          "content": "https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1323023,
          "date": "Sat 07 Dec 2024 07:11",
          "username": "trinh_le",
          "content": "Following keywords<br>reach thousands of customers every hour: use SQS<br>Automate handle survey: aws comprehen",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319791,
          "date": "Fri 29 Nov 2024 16:53",
          "username": "siheom",
          "content": "VOTE A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1315201,
          "date": "Wed 20 Nov 2024 11:58",
          "username": "Changwha",
          "content": "A. This solution is the most scalable, cost-effective, and tailored to the requirements. It uses Amazon Comprehend for sentiment analysis, leverages serverless architecture, and retains data for 12 months using DynamoDB's TTL feature.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#1006",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Systems Manager for routine management and patching of Amazon EC2 instances. The EC2 instances are in an IP address type target group behind an Application Load Balancer (ALB).<br><br>New security protocols require the company to remove EC2 instances from service during a patch. When the company attempts to follow the security protocol during the next patch, the company receives errors during the patching window.<br><br>Which combination of solutions will resolve the errors? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1006",
          "answers": [
            {
              "choice": "<p>Change the target type of the target group from IP address type to instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Continue to use the existing Systems Manager document without changes because it is already optimized to handle instances that are in an IP address type target group behind an ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation document to manage the patching process.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Systems Manager Maintenance Windows to automatically remove the instances from service to patch the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Systems Manager State Manager to remove the instances from service and manage the patching schedule. Use ALB health checks to re-route traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1006 discussion",
      "discusstion": [
        {
          "id": 1331856,
          "date": "Thu 26 Dec 2024 10:42",
          "username": "EllenLiu",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-vs-maintenance-windows.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1313077,
          "date": "Sat 16 Nov 2024 15:27",
          "username": "bujuman",
          "content": "https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awsec2-patch-load-balancer-instance.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1312964,
          "date": "Sat 16 Nov 2024 07:03",
          "username": "aragon_saa",
          "content": "Answe is CD",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#1007",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical company wants to perform transformations on a large amount of clinical trial data that comes from several customers. The company must extract the data from a relational database that contains the customer data. Then the company will transform the data by using a series of complex rules. The company will load the data to Amazon S3 when the transformations are complete.<br><br>All data must be encrypted where it is processed before the company stores the data in Amazon S3. All data must be encrypted by using customer-specific keys.<br><br>Which solution will meet these requirements with the LEAST amount of operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1007",
          "answers": [
            {
              "choice": "<p>Create one AWS Glue job for each customer. Attach a security configuration to each job that uses server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses client-side encryption with a custom client-side root key (CSE-Custom) to encrypt the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one AWS Glue job for each customer. Attach a security configuration to each job that uses client-side encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1007 discussion",
      "discusstion": [
        {
          "id": 1299925,
          "date": "Sat 19 Oct 2024 09:26",
          "username": "sOI852POL",
          "content": "AWS Glue for ETL, then AWS KMS (CSE-KMS)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1297806,
          "date": "Mon 14 Oct 2024 21:52",
          "username": "TewatiaAmit",
          "content": "AWS Glue with client-side encryption using AWS KMS (CSE-KMS) provides the required pre-processing encryption with minimal operational effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1295300,
          "date": "Thu 10 Oct 2024 00:05",
          "username": "blehbleh",
          "content": "It's C gotta use glue and since it's before the company stores the data in Amazon S3 gotta be client side.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1292299,
          "date": "Wed 02 Oct 2024 10:15",
          "username": "blehbleh",
          "content": "I say C, aws glue reduces the operational management uses server side encryption and ins which allows for user specific keys.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#1008",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics application is highly resilient and is designed to run in stateless mode.<br><br>The company notices that the application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1008",
          "answers": [
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load across the two EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization is more than 75%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) of the web application. Apply the AMI to a launch template. Create an Auto Scaling group that includes the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1008 discussion",
      "discusstion": [
        {
          "id": 1320999,
          "date": "Mon 02 Dec 2024 16:37",
          "username": "JA2018",
          "content": "3 reasons why I will choose Option D:<br><br>1. Scalability: Auto Scaling groups are designed to automatically scale up or down the number of instances based on demand, which is ideal for handling fluctuating traffic during busy periods.<br><br>2. Cost-effectiveness: Using a Spot Fleet allows you to leverage unused EC2 capacity at significantly lower costs compared to On-Demand instances.<br><br>3. Stateless Application: Since the application is stateless, it can easily be scaled horizontally with multiple instances behind an Application Load Balancer without any data consistency issues",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1303980,
          "date": "Mon 28 Oct 2024 14:35",
          "username": "Razvan_C",
          "content": "With auto scalling group it can also scale down on low demand (costs saved)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#1009",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an environment where data is stored in an Amazon S3 bucket. The objects are accessed frequently throughout the day. The company has strict da ta encryption requirements for data that is stored in the S3 bucket. The company currently uses AWS Key Management Service (AWS KMS) for encryption.<br><br>The company wants to optimize costs associated with encrypting S3 objects without making additional calls to AWS KMS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1009",
          "answers": [
            {
              "choice": "<p>Use server-side encryption with Amazon S3 managed keys (SSE-S3).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use client-side encryption with AWS KMS customer managed keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1009 discussion",
      "discusstion": [
        {
          "id": 1298956,
          "date": "Wed 16 Oct 2024 23:07",
          "username": "8621a7c",
          "content": "reduce cost https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1327975,
          "date": "Tue 17 Dec 2024 16:05",
          "username": "dragossky",
          "content": "Amazon S3 Bucket Keys reduce the cost of Amazon S3 server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS). Using a bucket-level key for SSE-KMS can reduce AWS KMS request costs by up to 99 percent by decreasing the request traffic from Amazon S3 to AWS KMS. With a few clicks in the AWS Management Console, and without any changes to your client applications, you can configure your bucket to use an S3 Bucket Key for SSE-KMS encryption on new objects.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1310553,
          "date": "Tue 12 Nov 2024 12:50",
          "username": "djhtoon",
          "content": "optimize costs associated with encrypting S3 objects without making additional calls to AWS KMS. The answer should be A and it also optimize costs- free.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1301500,
          "date": "Tue 22 Oct 2024 11:15",
          "username": "elmyth",
          "content": "All S3 are now encrypted by default and free with SSE-S3, but B is also possible. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Strict data encryption requirements wouldn't be met with SSE-S3</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1312840,
          "date": "Sat 16 Nov 2024 00:03",
          "username": "Sergantus",
          "content": "Strict data encryption requirements wouldn't be met with SSE-S3",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#1010",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs multiple workloads on virtual machines (VMs) in an on-premises data center. The company is expanding rapidly. The on-premises data center is not able to scale fast enough to meet business needs. The company wants to migrate the workloads to AWS.<br><br>The migration is time sensitive. The company wants to use a lift-and-shift strategy for non-critical workloads.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1010",
          "answers": [
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Complete the initial replication of the VMs. Launch test instances to perform acceptance tests on the VMs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Stop all operations on the VMs. Launch a cutover instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App2Container (A2C) to collect data about the VMs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to migrate the VMs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1010 discussion",
      "discusstion": [
        {
          "id": 1321005,
          "date": "Mon 02 Dec 2024 16:45",
          "username": "JA2018",
          "content": "Why I will choose Options B, C& D:<br><br>#B: AWS Application Migration Service (AWS Migration Service)<br>is the primary tool for a lift-and-shift migration strategy, allowing you to easily replicate on-premises VMs to AWS by installing the Replication Agent on the VMs.<br><br>#C: Complete initial replication and launch test instances:<br>After the initial replication of VMs to AWS, it's crucial to perform acceptance tests on the newly migrated instances to ensure functionality before fully transitioning.<br><br>#D: Stop operations and launch a cutover instance:<br>For a cutover migration, you would stop operations on the on-premises VMs and then launch the migrated instances on AWS to switch over completely<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are not suitable:<br>A and E: AWS Schema Conversion Tool (AWS SCT) and AWS App2Container (A2C):<br>These tools are primarily used for database migration and containerization respectively, which are not the best fit for a simple lift-and-shift migration of VMs.<br>F: AWS Database Migration Service (AWS DMS):<br>While AWS DMS is used for database migration, the question specifies migrating entire VMs, not just databases.</li><li>ey points to remember:<br>For a lift-and-shift migration, AWS Application Migration Service is the recommended tool.<br>Always perform testing on migrated instances before fully transitioning to AWS.<br>A cutover migration involves stopping operations on the source and switching to the new environment.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCD"
        },
        {
          "id": 1321007,
          "date": "Mon 02 Dec 2024 16:45",
          "username": "JA2018",
          "content": "Why the other options are not suitable:<br>A and E: AWS Schema Conversion Tool (AWS SCT) and AWS App2Container (A2C):<br>These tools are primarily used for database migration and containerization respectively, which are not the best fit for a simple lift-and-shift migration of VMs.<br>F: AWS Database Migration Service (AWS DMS):<br>While AWS DMS is used for database migration, the question specifies migrating entire VMs, not just databases.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ey points to remember:<br>For a lift-and-shift migration, AWS Application Migration Service is the recommended tool.<br>Always perform testing on migrated instances before fully transitioning to AWS.<br>A cutover migration involves stopping operations on the source and switching to the new environment.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1321008,
          "date": "Mon 02 Dec 2024 16:45",
          "username": "JA2018",
          "content": "ey points to remember:<br>For a lift-and-shift migration, AWS Application Migration Service is the recommended tool.<br>Always perform testing on migrated instances before fully transitioning to AWS.<br>A cutover migration involves stopping operations on the source and switching to the new environment.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1312963,
          "date": "Sat 16 Nov 2024 07:01",
          "username": "aragon_saa",
          "content": "Answer is BCD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCD"
        }
      ]
    },
    {
      "question_id": "#1011",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application in a private subnet. The company has already integrated the application with Amazon Cognito. The company uses an Amazon Cognito user pool to authenticate users.<br><br>The company needs to modify the application so the application can securely store user documents in an Amazon S3 bucket.<br><br>Which combination of steps will securely integrate Amazon S3 with the application? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1011",
          "answers": [
            {
              "choice": "<p>Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for users when they successfully log in.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for users when they successfully log in.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a NAT gateway in the VPC where the company hosts the application. Assign a policy to the S3 bucket to deny any request that is not initiated from Amazon Cognito.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach a policy to the S3 bucket that allows access only from the users' IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1011 discussion",
      "discusstion": [
        {
          "id": 1313093,
          "date": "Sat 16 Nov 2024 15:54",
          "username": "bujuman",
          "content": "securely integrate Amazon S3 with the application:<br>https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1308512,
          "date": "Thu 07 Nov 2024 20:01",
          "username": "viejito",
          "content": "respuesta correcta : A - B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>identity pool - authorization<br>user pool - authentication, in this case something needs to modify docs, so authorization</li><li>B doesnt make sense here. because user pools are used for authentication, not authorization</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1327980,
          "date": "Tue 17 Dec 2024 16:11",
          "username": "dragossky",
          "content": "identity pool - authorization<br>user pool - authentication, in this case something needs to modify docs, so authorization",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1314095,
          "date": "Mon 18 Nov 2024 18:20",
          "username": "luther77",
          "content": "B doesnt make sense here. because user pools are used for authentication, not authorization",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#1012",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a three-tier web application that processes orders from customers. The web tier consists of Amazon EC2 instances behind an Application Load Balancer. The processing tier consists of EC2 instances. The company decoupled the web tier and processing tier by using Amazon Simple Queue Service (Amazon SQS). The storage layer uses Amazon DynamoDB.<br><br>At peak times, some users report order processing delays and halls. The company has noticed that during these delays, the EC2 instances are running at 100% CPU usage, and the SQS queue fills up. The peak times are variable and unpredictable.<br><br>The company needs to improve the performance of the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1012",
          "answers": [
            {
              "choice": "<p>Use scheduled scaling for Amazon EC2 Auto Scaling to scale out the processing tier instances for the duration of peak usage times. Use the CPU Utilization metric to determine when to scale.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon ElastiCache for Redis in front of the DynamoDB backend tier. Use target utilization as a metric to determine when to scale.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon CloudFront distribution to cache the responses for the web tier. Use HTTP latency as a metric to determine when to scale.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EC2 Auto Scaling target tracking policy to scale out the processing tier instances. Use the ApproximateNumberOfMessages attribute to determine when to scale.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1012 discussion",
      "discusstion": [
        {
          "id": 1335527,
          "date": "Thu 02 Jan 2025 12:26",
          "username": "GOTJ",
          "content": "Check this out:<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331890,
          "date": "Thu 26 Dec 2024 12:17",
          "username": "EllenLiu",
          "content": "The bottleneck is from the processing tier.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1327985,
          "date": "Tue 17 Dec 2024 16:16",
          "username": "dragossky",
          "content": "Yes, ElastiCache can be used with DynamoDB to improve the performance and scalability of read-heavy or frequently accessed workloads. Amazon ElastiCache is a fully managed in-memory data store that supports popular caching engines such as Memcached and Redis.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree. But this \\\"SQS queue fill up\\\" (remember, SQS is meant for decouple web and processing tiers) suggest that the bottleneck is produced by the processing CPU bottleneck because web servers are sending more requests to the queue than the processing servers are able to process from the queue. As the first approach, I would try option D</li><li>DynamoDB Accelerator is cache for dynamoDB</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1335503,
          "date": "Thu 02 Jan 2025 11:30",
          "username": "GOTJ",
          "content": "Agree. But this \\\"SQS queue fill up\\\" (remember, SQS is meant for decouple web and processing tiers) suggest that the bottleneck is produced by the processing CPU bottleneck because web servers are sending more requests to the queue than the processing servers are able to process from the queue. As the first approach, I would try option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1331888,
          "date": "Thu 26 Dec 2024 12:13",
          "username": "EllenLiu",
          "content": "DynamoDB Accelerator is cache for dynamoDB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1299821,
          "date": "Sat 19 Oct 2024 00:36",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#1013",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's production environment consists of Amazon EC2 On-Demand Instances that run constantly between Monday and Saturday. The instances must run for only 12 hours on Sunday and cannot tolerate interruptions. The company wants to cost-optimize the production environment.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1013",
          "answers": [
            {
              "choice": "<p>Purchase Scheduled Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Convertible Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Convertible Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1013 discussion",
      "discusstion": [
        {
          "id": 1335480,
          "date": "Thu 02 Jan 2025 11:06",
          "username": "GOTJ",
          "content": "\\\"A\\\" is the most straightforward option. However, I'm afraid this feature could be eventually removed and substituted by On-Demand Capacity Reservations and Savings Plans. If you try to use scheduled reservation in the EC2 console, you'll get the following banner:<br><br>\\\"We recommend Savings Plans over Reserved Instances. Savings Plans are the easiest and most flexible way to save money on your AWS compute costs and offer lower prices (up to 72% off) just like Reserved Instances. To learn more and get started with Savings Plans click here\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1331899,
          "date": "Thu 26 Dec 2024 12:50",
          "username": "EllenLiu",
          "content": "Scheduled reserved instances are purchase of reserved Instances on a recurring schedule<br>https://aws.amazon.com/ec2/pricing/reserved-instances/buyer/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1313101,
          "date": "Sat 16 Nov 2024 16:25",
          "username": "bujuman",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1298966,
          "date": "Wed 16 Oct 2024 23:33",
          "username": "8621a7c",
          "content": "standard reserved instance is cheaper than convertible reserved instance",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#1014",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital image processing company wants to migrate its on-premises monolithic application to the AWS Cloud. The company processes thousands of images and generates large files as part of the processing workflow.<br><br>The company needs a solution to manage the growing number of image processing jobs. The solution must also reduce the manual tasks in the image processing workflow. The company does not want to manage the underlying infrastructure of the solution.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1014",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 Spot Instances to process the images. Configure Amazon Simple Queue Service (Amazon SQS) to orchestrate the workflow. Store the processed files in Amazon Elastic File System (Amazon EFS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Batch jobs to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions and Amazon EC2 Spot Instances to process the images. Store the processed files in Amazon FSx.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a group of Amazon EC2 instances to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon Elastic Block Store (Amazon EBS) volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1014 discussion",
      "discusstion": [
        {
          "id": 1320566,
          "date": "Sun 01 Dec 2024 14:32",
          "username": "trinh_le",
          "content": "A. Use Amazon Elastic Container Service (Amazon ECS) complexity<br>C. Amazon FSx is not an ideal compared to s3<br>D. Use a group of Amazon EC2 instances do not scalable",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1299820,
          "date": "Sat 19 Oct 2024 00:35",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1015",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's image-hosting website gives users around the world the ability to up load, view, and download images from their mobile devices. The company currently hosts the static website in an Amazon S3 bucket.<br><br>Because of the website's growing popularity, the website's performance has decreased. Users have reported latency issues when they upload and download images.<br><br>The company must improve the performance of the website.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1015",
          "answers": [
            {
              "choice": "<p>Configure an Amazon CloudFront distribution for the S3 bucket to improve the download performance. Enable S3 Transfer Acceleration to improve the upload performance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EC2 instances of the right sizes in multiple AWS Regions. Migrate the application to the EC2 instances. Use an Application Load Balancer to distribute the website traffic equally among the EC2 instances. Configure AWS Global Accelerator to address global demand with low latency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon CloudFront distribution that uses the S3 bucket as an origin to improve the download performance. Configure the application to use CloudFront to upload images to improve the upload performance. Create S3 buckets in multiple AWS Regions. Configure replication rules for the buckets to replicate users' data based on the users' location. Redirect downloads to the S3 bucket that is closest to each user's location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Global Accelerator for the S3 bucket to improve network performance. Create an endpoint for the application to use Global Accelerator instead of the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1015 discussion",
      "discusstion": [
        {
          "id": 1334448,
          "date": "Mon 30 Dec 2024 23:26",
          "username": "Denise123",
          "content": "Obvious.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1299819,
          "date": "Sat 19 Oct 2024 00:35",
          "username": "aragon_saa",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#1016",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application in a private subnet behind an Application Load Balancer (ALB) in a VPC. The VPC has a NAT gateway and an internet gateway. The application calls the Amazon S3 API to store objects.<br><br>According to the company's security policy, traffic from the application must not travel across the internet.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1016",
          "answers": [
            {
              "choice": "<p>Configure an S3 interface endpoint. Create a security group that allows outbound traffic to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 gateway endpoint. Update the VPC route table to use the endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 bucket policy to allow traffic from the Elastic IP address that is assigned to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second NAT gateway in the same subnet where the legacy application is deployed. Update the VPC route table to use the second NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1016 discussion",
      "discusstion": [
        {
          "id": 1333098,
          "date": "Sat 28 Dec 2024 19:01",
          "username": "GOTJ",
          "content": "Here's another document that support option \\\"B\\\" as the most cost-effectively:<br><br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1320567,
          "date": "Sun 01 Dec 2024 14:34",
          "username": "trinh_le",
          "content": "Keyword: ec2 connect s3 -> vpc endpoint or s3 endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1301072,
          "date": "Mon 21 Oct 2024 17:14",
          "username": "sOI852POL",
          "content": "S3 gateway endpoint<br><br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1299818,
          "date": "Sat 19 Oct 2024 00:35",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1017",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2 instances. The application has a UI that uses Amazon DynamoDB and data services that use Amazon S3 as part of the application deployment.<br><br>The company must ensure that the EKS Pods for the UI can access only Amazon DynamoDB and that the EKS Pods for the data services can access only Amazon S3. The company uses AWS Identity and Access Management (IAM).<br><br>Which solution meals these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1017",
          "answers": [
            {
              "choice": "<p>Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach both IAM policies to the EC2 instance profile. Use role-based access control (RBAC) to control access to Amazon S3 or DynamoDB for the respective EKS Pods.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach the Amazon S3 IAM policy directly to the EKS Pods for the data services and the DynamoDB policy to the EKS Pods for the UI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Attach the AmazonS3FullAccess policy to the data services account and the AmazonDynamoDBFullAccess policy to the UI service account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Use IAM Role for Service Accounts (IRSA) to provide access to the EKS Pods for the UI to Amazon S3 and the EKS Pods for the data services to DynamoDB.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1017 discussion",
      "discusstion": [
        {
          "id": 1299633,
          "date": "Fri 18 Oct 2024 13:13",
          "username": "jingen11",
          "content": "https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html#service-accounts-iam",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1333067,
          "date": "Sat 28 Dec 2024 18:31",
          "username": "GOTJ",
          "content": "Even though there are a couple of comments rightfully discarding \\\"D\\\" because the UI --> S3/DataServices --> DynamoDB swap, I found an AWS document claiming that Kubernetes Service accounts and IAM Role for Service Accounts combination should be the right answer:<br><br>https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html<br><br>Having this in mind, I'm also discarding \\\"D\\\" (right reasoning, wrong scenario), as well \\\"A\\\" and \\\"B\\\". I didn't like the \\\"full access\\\" policy, but is technically correct, so my vote goes to \\\"C\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320585,
          "date": "Sun 01 Dec 2024 15:06",
          "username": "trinh_le",
          "content": "* A. Attach both IAM policies to the EC2 instance profile. Does not separate each EKS Pod<br>* B. Aws does not support Attach the Amazon S3 IAM policy directly to the EKS Pods<br>*<br>* D. provide access 'UI to Amazon S3'  and 'data services to DynamoDB'  > it does not meet requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320340,
          "date": "Sat 30 Nov 2024 19:28",
          "username": "rosanna",
          "content": "The answer is C as they're switching data pods with DynamoDB service and vice versa (configure the wrong resources)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1302005,
          "date": "Wed 23 Oct 2024 13:01",
          "username": "tm1000000",
          "content": "answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#1018",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to give a globally distributed development team secure access to the company's AWS resources in a way that complies with security policies.<br><br>The company currently uses an on-premises Active Directory for internal authentication. The company uses AWS Organizations to manage multiple AWS accounts that support multiple projects.<br><br>The company needs a solution to integrate with the existing infrastructure to provide centralized identity management and access control.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1018",
          "answers": [
            {
              "choice": "<p>Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS. Establish a trust relationship with the on-premises Active Directory. Use IAM rotes that are assigned to Active Directory groups to access AWS resources within the company's AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for each developer. Manually manage permissions for each IAM user based on each user's involvement with each project. Enforce multi-factor authentication (MFA) as an additional layer of security.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory. Integrate AD Connector with AWS IAM Identity Center. Configure permissions sets to give each AD group access to specific AWS accounts and resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation solution with the on-premises Active Directory. Use Amazon Cognito to provide access tokens for developers to access AWS accounts and resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1018 discussion",
      "discusstion": [
        {
          "id": 1331965,
          "date": "Thu 26 Dec 2024 16:11",
          "username": "GOTJ",
          "content": "Why not \\\"A\\\"? Check out the note of this link: https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html<br><br>AD Connector cannot be shared with other AWS accounts. If this is a requirement, consider using AWS Managed Microsoft AD to Share your AWS Managed Microsoft AD. AD Connector is also not multi-VPC aware, which means that AWS applications like WorkSpaces are required to be provisioned into the same VPC as your AD Connector.<br><br>And I think managing multiple aws accounts is, indeed, a requirement",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320590,
          "date": "Sun 01 Dec 2024 15:21",
          "username": "trinh_le",
          "content": "C:AD Connector allows AWS to use the on-premises Active Directory for authentication without replicating directory data to AWS.<br> - Maintains centralized identity management in the on-premises directory, adhering to the company's security policies.<br>A: Higher Overhead: Requires creating and maintaining a separate managed Active Directory instance in AWS.<br>B: Scalability Issues: Manually creating and managing IAM users for a globally distributed team is cumbersome.<br>D: Unnecessary Federation Layer: Cognito is more suited for customer identity use cases rather than managing internal developer access to AWS resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1317972,
          "date": "Tue 26 Nov 2024 09:18",
          "username": "78b9037",
          "content": "Once set up, it requires minimal ongoing management. User provisioning and deprovisioning are handled through the existing Active Directory.processes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1298598,
          "date": "Wed 16 Oct 2024 09:34",
          "username": "xekiva3329",
          "content": "answer C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294966,
          "date": "Wed 09 Oct 2024 07:15",
          "username": "aragon_saa",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#1019",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of trusted IP addresses that belong to the company's internal network.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1019",
          "answers": [
            {
              "choice": "<p>Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a resource policy for the API that denies access to any IP address that is not specifically allowed.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from specific IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1019 discussion",
      "discusstion": [
        {
          "id": 1294586,
          "date": "Tue 08 Oct 2024 07:56",
          "username": "Jassn3",
          "content": "OMG finally I have reached here",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 1300142,
          "date": "Sat 19 Oct 2024 21:34",
          "username": "Bwhizzy",
          "content": "Finally made it. Congratulations to everyone who got here. I know the journey has been hard and long. best of luck",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1334464,
          "date": "Mon 30 Dec 2024 23:45",
          "username": "Denise123",
          "content": "I can't believe that I made it! Congrats everyone! Time to restart from the Q1 to polish, and good luck for the exam!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331913,
          "date": "Thu 26 Dec 2024 13:44",
          "username": "EllenLiu",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html#apigateway-resource-policies-source-ip-address-example",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1321026,
          "date": "Mon 02 Dec 2024 17:13",
          "username": "JA2018",
          "content": "yes, finally, the finishing point.....<br><br>---<br>Why not D?<br><br>By modifying the security group attached to API Gateway, you can explicitly define which IP addresses are allowed to access the API, effectively restricting access to only the trusted internal network IPs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320593,
          "date": "Sun 01 Dec 2024 15:42",
          "username": "trinh_le",
          "content": "B: api gateway allows configure resource policy to restricted IP<br>A: private integration-> private api<br>C: private subnet -> private api<br>D: security group does not support api gateway",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1312855,
          "date": "Sat 16 Nov 2024 00:46",
          "username": "Sergantus",
          "content": "Congrats to everyone who made it here. On to the next step, gents.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1306623,
          "date": "Sun 03 Nov 2024 20:49",
          "username": "Ben_88",
          "content": "And now it's time to start all over again to see if you can do better this time . good luck lads !",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1298596,
          "date": "Wed 16 Oct 2024 09:29",
          "username": "xekiva3329",
          "content": "answer B",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1019",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of trusted IP addresses that belong to the company's internal network.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1019",
          "answers": [
            {
              "choice": "<p>Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a resource policy for the API that denies access to any IP address that is not specifically allowed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from specific IP addresses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP addresses.</p>",
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
}