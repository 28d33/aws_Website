export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  type: "featured" | "open_source" | "community" | "hackathon" | "research"
  team?: string[]
}

export const projects: Project[] = [
  {
    title: "AWS Club Website",
    description:
      "The official website for the AWS Student Builder Group built with Next.js, TypeScript, and Tailwind CSS. Features event management, blog, gallery, and member portal. Deployed on AWS Amplify with CI/CD pipeline.",
    image: "/images/projects/website-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify", "DynamoDB"],
    link: "https://aws-sbg.example.edu",
    github: "https://github.com/aws-sbg/website",
    type: "featured",
    team: ["Harsh Vardhan", "Simran Kaur", "Aryan Thakur", "Diya Malhotra"],
  },
  {
    title: "Cloud Resource Hub",
    description:
      "A centralized platform for students to access AWS study materials, practice exams, and hands-on labs. Features personalized learning paths and progress tracking with leaderboards.",
    image: "/images/projects/resource-hub-1.jpg",
    tags: ["React", "AWS Lambda", "DynamoDB", "S3", "Cognito"],
    github: "https://github.com/aws-sbg/resource-hub",
    type: "open_source",
    team: ["Sneha Reddy", "Kavya Sharma", "Om Tiwari"],
  },
  {
    title: "Event Management System",
    description:
      "End-to-end event management platform handling registrations, attendance tracking, feedback collection, and certificate generation. Reduced event management overhead by 70%.",
    image: "/images/projects/event-mgmt-1.jpg",
    tags: ["Next.js", "API Gateway", "Lambda", "SES", "SQS"],
    link: "https://events.aws-sbg.example.edu",
    github: "https://github.com/aws-sbg/event-manager",
    type: "community",
    team: ["Vikram Singh", "Ritika Bansal", "Aryan Thakur"],
  },
  {
    title: "Serverless Chat Application",
    description:
      "A real-time chat application built entirely on AWS serverless services. Features WebSocket APIs, message persistence, file sharing, and moderation tools. Won Best Serverless App at the Cloud Hackathon.",
    image: "/images/projects/serverless-chat-1.jpg",
    tags: ["WebSocket", "API Gateway", "Lambda", "DynamoDB", "S3"],
    github: "https://github.com/aws-sbg/serverless-chat",
    type: "hackathon",
    team: ["Arjun Nair", "Aditya Mishra", "Riya Deshmukh"],
  },
  {
    title: "AWS Cost Optimizer",
    description:
      "An intelligent tool that analyzes AWS account usage and provides actionable cost optimization recommendations. Helped club members save over $2,000 in unused resources.",
    image: "/images/projects/cost-optimizer-1.jpg",
    tags: ["Python", "Cost Explorer", "Lambda", "CloudWatch", "SNS"],
    github: "https://github.com/aws-sbg/cost-optimizer",
    type: "open_source",
    team: ["Siddharth Rao", "Karan Bhatia"],
  },
  {
    title: "AI Study Buddy",
    description:
      "An AI-powered study assistant built with Amazon Bedrock and LangChain that answers questions about AWS services, helps with certification preparation, and generates practice quizzes.",
    image: "/images/projects/study-buddy-1.jpg",
    tags: ["Bedrock", "LangChain", "Lambda", "Aurora", "Streamlit"],
    link: "https://study-buddy.aws-sbg.example.edu",
    github: "https://github.com/aws-sbg/study-buddy",
    type: "featured",
    team: ["Dhruv Kulkarni", "Tanvi Agarwal", "Pranav Shetty"],
  },
  {
    title: "Cloud Security Scanner",
    description:
      "Automated security scanning tool that checks AWS accounts against CIS benchmarks, identifies misconfigurations, and generates remediation reports. Used by 50+ students.",
    image: "/images/projects/security-scanner-1.jpg",
    tags: ["Python", "Config", "GuardDuty", "IAM", "Security Hub"],
    github: "https://github.com/aws-sbg/security-scanner",
    type: "open_source",
    team: ["Amit Saxena", "Pooja Menon", "Rajan Khanna"],
  },
  {
    title: "Hackathon Project Template",
    description:
      "A quick-start template for hackathon teams featuring pre-configured CI/CD, authentication, database, and deployment on AWS. Includes starter code for common hackathon project types.",
    image: "/images/projects/hackathon-template-1.jpg",
    tags: ["Next.js", "CDK", "Cognito", "DynamoDB", "Amplify"],
    github: "https://github.com/aws-sbg/hackathon-template",
    type: "community",
    team: ["Harsh Vardhan", "Diya Malhotra"],
  },
  {
    title: "Containerized ML Pipeline",
    description:
      "Research project implementing a scalable ML training and inference pipeline on Amazon EKS with GPU support. Achieved 3x faster training times through distributed computing.",
    image: "/images/projects/ml-pipeline-1.jpg",
    tags: ["EKS", "Kubernetes", "PyTorch", "SageMaker", "EFS"],
    type: "research",
    team: ["Aisha Khan", "Dhruv Kulkarni", "Vivaan Oberoi"],
  },
  {
    title: "College Event Dashboard",
    description:
      "A real-time dashboard aggregating event registrations, attendance, and feedback across all college tech clubs. Deployed on AWS with automated reporting via SES.",
    image: "/images/projects/dashboard-1.jpg",
    tags: ["React", "Lambda", "DynamoDB", "QuickSight", "SES"],
    link: "https://dashboard.aws-sbg.example.edu",
    type: "community",
    team: ["Maya Joseph", "Kunal Jain", "Sneha Reddy"],
  },
  {
    title: "CTF Challenge Platform",
    description:
      "A Capture The Flag platform designed for cybersecurity workshops featuring cloud-focused challenges, real-time scoring, and automated infrastructure deployment.",
    image: "/images/projects/ctf-platform-1.jpg",
    tags: ["ECS", "Lambda", "DynamoDB", "CloudFront", "WAF"],
    github: "https://github.com/aws-sbg/ctf-platform",
    type: "open_source",
    team: ["Amit Saxena", "Nitya Srinivas", "Ishaan Mehta"],
  },
  {
    title: "Multi-Cloud Migration Tool",
    description:
      "A tool that analyzes on-premises infrastructure and generates migration plans for AWS, including cost estimates, dependency mapping, and phased migration timelines.",
    image: "/images/projects/migration-tool-1.jpg",
    tags: ["Python", "CloudFormation", "DMS", "S3", "Migration Hub"],
    github: "https://github.com/aws-sbg/migration-tool",
    type: "research",
    team: ["Neha Kapoor", "Aditya Mishra", "Rohit Joshi"],
  },
]
