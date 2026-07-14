export interface Resource {
  title: string
  description: string
  link: string
  type: "guide" | "video" | "article" | "course" | "tool"
}

export interface ResourceCategory {
  name: string
  icon: string
  resources: Resource[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    name: "AWS Cloud Practitioner",
    icon: "cloud",
    resources: [
      {
        title: "AWS Cloud Practitioner Essentials",
        description: "Official AWS course covering cloud concepts, services, pricing, and security fundamentals.",
        link: "https://aws.amazon.com/training/learn-about/cloud-practitioner/",
        type: "course",
      },
      {
        title: "CLF-C02 Exam Guide",
        description: "Official exam guide with detailed breakdown of domains and weightings.",
        link: "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf",
        type: "guide",
      },
      {
        title: "AWS Free Tier",
        description: "Get hands-on experience with AWS services for free.",
        link: "https://aws.amazon.com/free/",
        type: "tool",
      },
      {
        title: "AWS Ramp-Up Guide: Cloud Practitioner",
        description: "A curated learning path with videos, digital training, and whitepapers.",
        link: "https://aws.amazon.com/training/ramp-up-guides/",
        type: "guide",
      },
      {
        title: "Practice Exam: Cloud Practitioner",
        description: "Official AWS practice exam to test your readiness.",
        link: "https://aws.amazon.com/certification/certification-prep-exams/",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS Solutions Architect",
    icon: "server",
    resources: [
      {
        title: "AWS Solutions Architect Learning Path",
        description: "Comprehensive learning path from AWS Training and Certification.",
        link: "https://aws.amazon.com/training/learn-about/solutions-architect/",
        type: "course",
      },
      {
        title: "SAA-C03 Exam Guide",
        description: "Official exam guide for the Solutions Architect Associate certification.",
        link: "https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf",
        type: "guide",
      },
      {
        title: "AWS Well-Architected Framework",
        description: "Whitepaper covering the six pillars of the Well-Architected Framework.",
        link: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
        type: "guide",
      },
      {
        title: "AWS Architecture Center",
        description: "Reference architectures, diagrams, and best practices.",
        link: "https://aws.amazon.com/architecture/",
        type: "article",
      },
      {
        title: "AWS CloudFormation Designer",
        description: "Visual tool to create and manage CloudFormation templates.",
        link: "https://console.aws.amazon.com/cloudformation/designer",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS Developer",
    icon: "code",
    resources: [
      {
        title: "AWS SDK Code Examples",
        description: "Official code examples for AWS SDKs across all supported languages.",
        link: "https://docs.aws.amazon.com/code-library/latest/ug/what-is-code-library.html",
        type: "article",
      },
      {
        title: "AWS Lambda Developer Guide",
        description: "Comprehensive documentation for building serverless functions.",
        link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        type: "guide",
      },
      {
        title: "AWS CDK Workshop",
        description: "Hands-on workshop for Infrastructure as Code with AWS CDK.",
        link: "https://cdkworkshop.com/",
        type: "course",
      },
      {
        title: "Amazon API Gateway Tutorial",
        description: "Video series on building REST and WebSocket APIs with API Gateway.",
        link: "https://www.youtube.com/watch?v=6wD0RlGq5tI",
        type: "video",
      },
      {
        title: "AWS SAM CLI",
        description: "Command-line tool for building serverless applications locally.",
        link: "https://aws.amazon.com/serverless/sam/",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS SysOps",
    icon: "settings",
    resources: [
      {
        title: "AWS SysOps Administrator Learning Path",
        description: "Official learning path for the SysOps Administrator certification.",
        link: "https://aws.amazon.com/training/learn-about/sysops/",
        type: "course",
      },
      {
        title: "AWS CloudFormation User Guide",
        description: "Complete documentation for infrastructure as code with CloudFormation.",
        link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",
        type: "guide",
      },
      {
        title: "AWS Systems Manager Documentation",
        description: "Operations management service documentation with runbooks and automation.",
        link: "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html",
        type: "article",
      },
      {
        title: "AWS CloudWatch Monitoring",
        description: "Video course on monitoring and observability with CloudWatch.",
        link: "https://www.youtube.com/watch?v=JgZvsfvP8TQ",
        type: "video",
      },
      {
        title: "AWS Trusted Advisor",
        description: "Tool that inspects your AWS environment and provides cost optimization recommendations.",
        link: "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS DevOps Engineer",
    icon: "refresh-cw",
    resources: [
      {
        title: "AWS DevOps Engineer Learning Path",
        description: "Official learning path for DevOps Engineer Professional certification.",
        link: "https://aws.amazon.com/training/learn-about/devops/",
        type: "course",
      },
      {
        title: "AWS CodePipeline Documentation",
        description: "Guide to building CI/CD pipelines with AWS native tools.",
        link: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
        type: "guide",
      },
      {
        title: "Amazon EKS Best Practices",
        description: "Production best practices for running Kubernetes on AWS.",
        link: "https://aws.github.io/aws-eks-best-practices/",
        type: "article",
      },
      {
        title: "CI/CD on AWS Workshop",
        description: "Hands-on workshop for building end-to-end CI/CD pipelines.",
        link: "https://catalog.workshops.aws/cicd-on-aws",
        type: "course",
      },
      {
        title: "AWS CodeStar",
        description: "Unified interface for managing software development activities on AWS.",
        link: "https://aws.amazon.com/codestar/",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS Security Specialty",
    icon: "shield",
    resources: [
      {
        title: "AWS Security Learning Path",
        description: "Official learning path for the Security Specialty certification.",
        link: "https://aws.amazon.com/training/learn-about/security/",
        type: "course",
      },
      {
        title: "AWS Security Best Practices",
        description: "Whitepaper covering security best practices across AWS services.",
        link: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
        type: "guide",
      },
      {
        title: "AWS IAM Documentation",
        description: "Comprehensive guide to identity and access management on AWS.",
        link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
        type: "guide",
      },
      {
        title: "OWASP Top 10 Cloud Security",
        description: "Cloud-specific OWASP security risks and mitigations.",
        link: "https://owasp.org/www-project-cloud-security/",
        type: "article",
      },
      {
        title: "AWS Security Hub",
        description: "Cloud security posture management service.",
        link: "https://aws.amazon.com/security-hub/",
        type: "tool",
      },
    ],
  },
  {
    name: "AWS AI Practitioner",
    icon: "brain",
    resources: [
      {
        title: "AWS AI Practitioner Learning Path",
        description: "Official learning path for the AI Practitioner certification.",
        link: "https://aws.amazon.com/training/learn-about/ai-practitioner/",
        type: "course",
      },
      {
        title: "Amazon Bedrock User Guide",
        description: "Documentation for building generative AI applications with Bedrock.",
        link: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
        type: "guide",
      },
      {
        title: "AWS SageMaker Documentation",
        description: "Complete guide to building, training, and deploying ML models.",
        link: "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html",
        type: "article",
      },
      {
        title: "Generative AI on AWS Workshop",
        description: "Hands-on workshops covering Bedrock, SageMaker, and foundation models.",
        link: "https://catalog.workshops.aws/generative-ai",
        type: "course",
      },
      {
        title: "Amazon Q Developer",
        description: "AI-powered developer assistant for coding and troubleshooting.",
        link: "https://aws.amazon.com/q/developer/",
        type: "tool",
      },
    ],
  },
  {
    name: "Programming",
    icon: "terminal",
    resources: [
      {
        title: "Python for Cloud Engineers",
        description: "Comprehensive Python course focused on cloud automation use cases.",
        link: "https://www.python.org/about/gettingstarted/",
        type: "course",
      },
      {
        title: "Java on AWS",
        description: "Official guide for building Java applications on AWS.",
        link: "https://aws.amazon.com/developer/language/java/",
        type: "guide",
      },
      {
        title: "JavaScript/TypeScript on AWS",
        description: "Developer guide for Node.js and TypeScript applications on AWS.",
        link: "https://aws.amazon.com/developer/language/javascript/",
        type: "article",
      },
      {
        title: "Go Programming Language",
        description: "Official Go documentation and tutorials.",
        link: "https://go.dev/doc/",
        type: "course",
      },
      {
        title: "Rust Programming Language",
        description: "Official Rust book and learning resources.",
        link: "https://www.rust-lang.org/learn",
        type: "course",
      },
    ],
  },
  {
    name: "DevOps",
    icon: "box",
    resources: [
      {
        title: "Docker Getting Started",
        description: "Official Docker documentation and tutorials for beginners.",
        link: "https://docs.docker.com/get-started/",
        type: "guide",
      },
      {
        title: "Kubernetes Basics",
        description: "Official Kubernetes tutorials covering pods, deployments, and services.",
        link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
        type: "course",
      },
      {
        title: "Terraform AWS Provider",
        description: "Documentation for managing AWS resources with Terraform.",
        link: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
        type: "guide",
      },
      {
        title: "Jenkins User Handbook",
        description: "Comprehensive guide to setting up and using Jenkins for CI/CD.",
        link: "https://www.jenkins.io/doc/",
        type: "guide",
      },
      {
        title: "GitHub Actions Documentation",
        description: "Learn how to automate workflows with GitHub Actions.",
        link: "https://docs.github.com/en/actions",
        type: "article",
      },
      {
        title: "CI/CD Best Practices Guide",
        description: "Industry best practices for continuous integration and delivery.",
        link: "https://aws.amazon.com/devops/continuous-delivery/",
        type: "guide",
      },
    ],
  },
  {
    name: "Cloud",
    icon: "cloud-lightning",
    resources: [
      {
        title: "Amazon EC2 User Guide",
        description: "Complete documentation for compute instances on AWS.",
        link: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html",
        type: "guide",
      },
      {
        title: "Amazon S3 Documentation",
        description: "Comprehensive guide to object storage on AWS.",
        link: "https://docs.aws.amazon.com/s3/latest/userguide/Welcome.html",
        type: "article",
      },
      {
        title: "AWS Lambda Developer Guide",
        description: "Guide to building serverless applications with Lambda.",
        link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        type: "guide",
      },
      {
        title: "AWS IAM User Guide",
        description: "Learn how to manage access to AWS resources securely.",
        link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
        type: "article",
      },
      {
        title: "Amazon VPC Documentation",
        description: "Networking documentation for Virtual Private Cloud.",
        link: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
        type: "guide",
      },
    ],
  },
  {
    name: "AI",
    icon: "sparkles",
    resources: [
      {
        title: "Amazon Bedrock Workshop",
        description: "Hands-on workshop for building generative AI applications.",
        link: "https://catalog.workshops.aws/building-with-amazon-bedrock",
        type: "course",
      },
      {
        title: "Amazon Q Developer Guide",
        description: "Documentation for Amazon Q, AWS's generative AI assistant.",
        link: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html",
        type: "guide",
      },
      {
        title: "AWS SageMaker Studio Lab",
        description: "Free ML development environment for learning and experimentation.",
        link: "https://studiolab.sagemaker.aws/",
        type: "tool",
      },
      {
        title: "Generative AI Learning Path",
        description: "Curated learning resources for generative AI on AWS.",
        link: "https://aws.amazon.com/ai/generative-ai/learning/",
        type: "course",
      },
      {
        title: "RAG with LangChain and Bedrock",
        description: "Tutorial on building RAG applications with LangChain and Bedrock.",
        link: "https://docs.aws.amazon.com/bedrock/latest/userguide/rag.html",
        type: "article",
      },
    ],
  },
  {
    name: "Security",
    icon: "lock",
    resources: [
      {
        title: "AWS IAM Best Practices",
        description: "Official IAM best practices documentation.",
        link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
        type: "guide",
      },
      {
        title: "AWS Cloud Security",
        description: "Overview of cloud security fundamentals on AWS.",
        link: "https://aws.amazon.com/security/",
        type: "article",
      },
      {
        title: "Network Security on AWS",
        description: "Best practices for securing network infrastructure.",
        link: "https://docs.aws.amazon.com/vpc/latest/userguide/security.html",
        type: "guide",
      },
      {
        title: "Web Security Fundamentals",
        description: "OWASP resources for web application security.",
        link: "https://owasp.org/www-project-web-security-testing-guide/",
        type: "article",
      },
      {
        title: "CTF Resources and Tools",
        description: "Collection of resources for Capture The Flag competitions.",
        link: "https://ctftime.org/",
        type: "tool",
      },
    ],
  },
]
