export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  socials?: { linkedin?: string; github?: string; twitter?: string }
}

export interface TeamGroup {
  name: string
  members: TeamMember[]
}

export const teamGroups: TeamGroup[] = [
  {
    name: "Faculty Coordinators",
    members: [
      {
        name: "Dr. Arvind Sharma",
        role: "Faculty Advisor",
        image: "/images/team/placeholder-1.jpg",
        bio: "Professor of Computer Science with 15+ years of experience in cloud computing and distributed systems. Guides the club's technical direction and industry partnerships.",
        socials: { linkedin: "https://linkedin.com/in/arvind-sharma", github: "https://github.com/arvindsharma" },
      },
      {
        name: "Prof. Meena Iyer",
        role: "Co-Faculty Advisor",
        image: "/images/team/placeholder-2.jpg",
        bio: "Associate Professor specializing in AI/ML and cloud-native architectures. Helps mentor students in research projects and certification pathways.",
        socials: { linkedin: "https://linkedin.com/in/meena-iyer" },
      },
      {
        name: "Dr. Rahul Verma",
        role: "Industry Mentor",
        image: "/images/team/placeholder-3.jpg",
        bio: "Solutions Architect at AWS with expertise in enterprise cloud migrations. Provides industry insights and connects students with internship opportunities.",
        socials: { linkedin: "https://linkedin.com/in/rahul-verma", github: "https://github.com/rahulverma" },
      },
    ],
  },
  {
    name: "Core Team",
    members: [
      {
        name: "Priya Patel",
        role: "President",
        image: "/images/team/placeholder-4.jpg",
        bio: "Senior year CS student with 4 AWS certifications. Led the club to organize 20+ events and grew membership by 300%. Passionate about building cloud communities.",
        socials: { linkedin: "https://linkedin.com/in/priya-patel", github: "https://github.com/priyapatel" },
      },
      {
        name: "Arjun Nair",
        role: "Vice President",
        image: "/images/team/placeholder-5.jpg",
        bio: "Full-stack developer turned cloud architect. Spearheaded the club's hackathon initiatives and built the club's website. AWS Community Builder.",
        socials: { linkedin: "https://linkedin.com/in/arjun-nair", github: "https://github.com/arjunnair", twitter: "https://twitter.com/arjun_nair" },
      },
      {
        name: "Sneha Reddy",
        role: "Technical Lead",
        image: "/images/team/placeholder-6.jpg",
        bio: "Cloud infrastructure enthusiast specializing in AWS CDK and serverless architectures. Leads the technical team and mentors juniors in cloud concepts.",
        socials: { linkedin: "https://linkedin.com/in/sneha-reddy", github: "https://github.com/snehareddy" },
      },
      {
        name: "Vikram Singh",
        role: "Operations Lead",
        image: "/images/team/placeholder-7.jpg",
        bio: "Organized 15+ successful events including the annual Cloud Summit. Ensures smooth execution of all club activities and manages stakeholder communications.",
        socials: { linkedin: "https://linkedin.com/in/vikram-singh" },
      },
      {
        name: "Ananya Gupta",
        role: "Community Lead",
        image: "/images/team/placeholder-8.jpg",
        bio: "Community builder focused on growing the club's Discord and social media presence. Runs the mentorship program connecting seniors with freshers.",
        socials: { linkedin: "https://linkedin.com/in/ananya-gupta", twitter: "https://twitter.com/ananya_gupta" },
      },
      {
        name: "Rohit Joshi",
        role: "Treasurer",
        image: "/images/team/placeholder-9.jpg",
        bio: "Manages club finances and sponsorships. Successfully secured sponsorships from AWS Educate and multiple tech companies for club events.",
        socials: { linkedin: "https://linkedin.com/in/rohit-joshi", github: "https://github.com/rohitjoshi" },
      },
    ],
  },
  {
    name: "Cloud Team",
    members: [
      {
        name: "Neha Kapoor",
        role: "Cloud Lead",
        image: "/images/team/placeholder-10.jpg",
        bio: "AWS certified solutions architect with hands-on experience in EC2, S3, Lambda, and VPC design. Leads cloud infrastructure workshops.",
        socials: { linkedin: "https://linkedin.com/in/neha-kapoor", github: "https://github.com/nehakapoor" },
      },
      {
        name: "Aditya Mishra",
        role: "Cloud Engineer",
        image: "/images/team/placeholder-11.jpg",
        bio: "Specializes in serverless computing with AWS Lambda and API Gateway. Built the club's automated event registration system.",
        socials: { linkedin: "https://linkedin.com/in/aditya-mishra", github: "https://github.com/adityamishra" },
      },
      {
        name: "Kavya Sharma",
        role: "Cloud Engineer",
        image: "/images/team/placeholder-12.jpg",
        bio: "Expert in containerization and ECS. Runs workshops on Docker and AWS Fargate. AWS Certified Developer Associate.",
        socials: { linkedin: "https://linkedin.com/in/kavya-sharma" },
      },
      {
        name: "Ishaan Mehta",
        role: "Cloud Engineer",
        image: "/images/team/placeholder-13.jpg",
        bio: "Focuses on cloud security and IAM best practices. Helps students prepare for the AWS Security Specialty certification.",
        socials: { linkedin: "https://linkedin.com/in/ishaan-mehta", github: "https://github.com/ishaanmehta" },
      },
      {
        name: "Riya Deshmukh",
        role: "Cloud Intern",
        image: "/images/team/placeholder-14.jpg",
        bio: "Junior year student passionate about cloud architecture. Currently working on infrastructure-as-code projects using AWS CDK.",
        socials: { linkedin: "https://linkedin.com/in/riya-deshmukh" },
      },
    ],
  },
  {
    name: "AI/ML Team",
    members: [
      {
        name: "Dhruv Kulkarni",
        role: "AI/ML Lead",
        image: "/images/team/placeholder-15.jpg",
        bio: "Machine learning enthusiast working on NLP and computer vision projects. Experienced with SageMaker, Bedrock, and Hugging Face.",
        socials: { linkedin: "https://linkedin.com/in/dhruv-kulkarni", github: "https://github.com/dhruvkulkarni" },
      },
      {
        name: "Tanvi Agarwal",
        role: "ML Engineer",
        image: "/images/team/placeholder-16.jpg",
        bio: "Specializes in generative AI and large language models. Leads the Generative AI study group. Published research on prompt engineering.",
        socials: { linkedin: "https://linkedin.com/in/tanvi-agarwal", github: "https://github.com/tanviagarwal" },
      },
      {
        name: "Pranav Shetty",
        role: "ML Engineer",
        image: "/images/team/placeholder-17.jpg",
        bio: "Data science enthusiast focused on building ML pipelines on AWS. Expert in SageMaker, feature engineering, and model deployment.",
        socials: { linkedin: "https://linkedin.com/in/pranav-shetty", twitter: "https://twitter.com/pranav_shetty" },
      },
      {
        name: "Aisha Khan",
        role: "AI Researcher",
        image: "/images/team/placeholder-18.jpg",
        bio: "Exploring foundation models, RAG architectures, and Amazon Bedrock. Published papers on efficient fine-tuning of LLMs.",
        socials: { linkedin: "https://linkedin.com/in/aisha-khan", github: "https://github.com/aishakhan" },
      },
      {
        name: "Vivaan Oberoi",
        role: "ML Intern",
        image: "/images/team/placeholder-19.jpg",
        bio: "Sophomore passionate about deep learning and MLOps. Building end-to-end ML pipelines on AWS as part of the club's research initiatives.",
        socials: { linkedin: "https://linkedin.com/in/vivaan-oberoi" },
      },
    ],
  },
  {
    name: "DevOps Team",
    members: [
      {
        name: "Siddharth Rao",
        role: "DevOps Lead",
        image: "/images/team/placeholder-20.jpg",
        bio: "CI/CD pipelines expert with deep knowledge of Jenkins, GitHub Actions, and AWS CodePipeline. Drives the club's infrastructure automation.",
        socials: { linkedin: "https://linkedin.com/in/siddharth-rao", github: "https://github.com/siddharthrao" },
      },
      {
        name: "Maya Joseph",
        role: "DevOps Engineer",
        image: "/images/team/placeholder-21.jpg",
        bio: "Kubernetes and Terraform specialist. Manages the club's multi-environment infrastructure and conducts workshops on IaC.",
        socials: { linkedin: "https://linkedin.com/in/maya-joseph", github: "https://github.com/mayajoseph" },
      },
      {
        name: "Karan Bhatia",
        role: "DevOps Engineer",
        image: "/images/team/placeholder-22.jpg",
        bio: "Focuses on monitoring, logging, and observability with CloudWatch, Prometheus, and Grafana. Ensures club services run reliably.",
        socials: { linkedin: "https://linkedin.com/in/karan-bhatia" },
      },
      {
        name: "Isha Talwar",
        role: "DevOps Intern",
        image: "/images/team/placeholder-23.jpg",
        bio: "Learning infrastructure automation and container orchestration. Contributed to migrating club workloads to EKS.",
        socials: { linkedin: "https://linkedin.com/in/isha-talwar", github: "https://github.com/ishatalwar" },
      },
    ],
  },
  {
    name: "Cybersecurity Team",
    members: [
      {
        name: "Amit Saxena",
        role: "Security Lead",
        image: "/images/team/placeholder-24.jpg",
        bio: "Cybersecurity researcher with expertise in cloud security, penetration testing, and CTF competitions. AWS Security Specialty certified.",
        socials: { linkedin: "https://linkedin.com/in/amit-saxena", github: "https://github.com/amitsaxena" },
      },
      {
        name: "Pooja Menon",
        role: "Security Engineer",
        image: "/images/team/placeholder-25.jpg",
        bio: "Specializes in network security, IAM policies, and security auditing on AWS. Organizes the club's monthly CTF challenges.",
        socials: { linkedin: "https://linkedin.com/in/pooja-menon", github: "https://github.com/pooja-menon" },
      },
      {
        name: "Rajan Khanna",
        role: "Security Engineer",
        image: "/images/team/placeholder-26.jpg",
        bio: "Web application security expert focusing on OWASP Top 10 and secure cloud architectures. Conducts workshops on ethical hacking.",
        socials: { linkedin: "https://linkedin.com/in/rajan-khanna", twitter: "https://twitter.com/rajankhanna" },
      },
      {
        name: "Nitya Srinivas",
        role: "Security Intern",
        image: "/images/team/placeholder-27.jpg",
        bio: "Junior year student passionate about cloud forensics and incident response. Learning AWS security services and compliance frameworks.",
        socials: { linkedin: "https://linkedin.com/in/nitya-srinivas" },
      },
    ],
  },
  {
    name: "Web Development Team",
    members: [
      {
        name: "Harsh Vardhan",
        role: "Web Lead",
        image: "/images/team/placeholder-28.jpg",
        bio: "Full-stack developer specializing in Next.js, TypeScript, and Tailwind CSS. Built and maintains the club's official website and internal tools.",
        socials: { linkedin: "https://linkedin.com/in/harsh-vardhan", github: "https://github.com/harshvardhan" },
      },
      {
        name: "Simran Kaur",
        role: "Frontend Developer",
        image: "/images/team/placeholder-29.jpg",
        bio: "React and UI/UX enthusiast. Creates beautiful, accessible interfaces and contributes to the club's design system.",
        socials: { linkedin: "https://linkedin.com/in/simran-kaur", github: "https://github.com/simrankaur" },
      },
      {
        name: "Aryan Thakur",
        role: "Backend Developer",
        image: "/images/team/placeholder-30.jpg",
        bio: "API design and database management expert. Built the club's event management and member tracking backend on AWS Lambda and DynamoDB.",
        socials: { linkedin: "https://linkedin.com/in/aryan-thakur", github: "https://github.com/aryanthakur" },
      },
      {
        name: "Diya Malhotra",
        role: "Full Stack Developer",
        image: "/images/team/placeholder-31.jpg",
        bio: "Building full-stack applications with Next.js, Prisma, and PostgreSQL. Contributed to the club's resource sharing platform.",
        socials: { linkedin: "https://linkedin.com/in/diya-malhotra" },
      },
      {
        name: "Kunal Jain",
        role: "Web Intern",
        image: "/images/team/placeholder-32.jpg",
        bio: "First-year student learning web development. Contributes to documentation, bug fixes, and small features on the club website.",
        socials: { linkedin: "https://linkedin.com/in/kunal-jain", github: "https://github.com/kunaljain" },
      },
    ],
  },
  {
    name: "Design Team",
    members: [
      {
        name: "Nandini Chopra",
        role: "Design Lead",
        image: "/images/team/placeholder-33.jpg",
        bio: "UI/UX designer with a passion for creating intuitive digital experiences. Designs all club posters, banners, and the website interface.",
        socials: { linkedin: "https://linkedin.com/in/nandini-chopra", github: "https://github.com/nandinichopra" },
      },
      {
        name: "Rohan Desai",
        role: "Graphic Designer",
        image: "/images/team/placeholder-34.jpg",
        bio: "Creative visual designer skilled in Figma, Illustrator, and motion graphics. Creates engaging social media content and event branding.",
        socials: { linkedin: "https://linkedin.com/in/rohan-desai" },
      },
      {
        name: "Zara Sheikh",
        role: "UI Designer",
        image: "/images/team/placeholder-35.jpg",
        bio: "User interface designer focused on design systems and prototyping. Ensures consistent branding across all club platforms.",
        socials: { linkedin: "https://linkedin.com/in/zara-sheikh" },
      },
      {
        name: "Ayaan Khan",
        role: "Design Intern",
        image: "/images/team/placeholder-36.jpg",
        bio: "Aspiring UX researcher and visual designer. Assists in creating event collateral and maintaining the club's design assets library.",
        socials: { linkedin: "https://linkedin.com/in/ayaan-khan" },
      },
    ],
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Sara Williams",
        role: "Content Lead",
        image: "/images/team/placeholder-37.jpg",
        bio: "Technical writer and editor. Manages the club's blog, newsletter, and documentation. Ensures high-quality educational content.",
        socials: { linkedin: "https://linkedin.com/in/sara-williams", twitter: "https://twitter.com/sara_williams" },
      },
      {
        name: "Om Tiwari",
        role: "Technical Writer",
        image: "/images/team/placeholder-38.jpg",
        bio: "Writes in-depth tutorials and certification guides. His blog posts on AWS Lambda have been featured in the club's top resources.",
        socials: { linkedin: "https://linkedin.com/in/om-tiwari", github: "https://github.com/omtiwari" },
      },
      {
        name: "Lavanya Krishnan",
        role: "Content Writer",
        image: "/images/team/placeholder-39.jpg",
        bio: "Creates engaging social media posts and event recaps. Ensures timely communication across all club channels.",
        socials: { linkedin: "https://linkedin.com/in/lavanya-krishnan" },
      },
      {
        name: "Tushar Saxena",
        role: "Content Intern",
        image: "/images/team/placeholder-40.jpg",
        bio: "Sophomore with a knack for simplifying complex technical topics. Assists in creating study materials for certification preparation.",
        socials: { linkedin: "https://linkedin.com/in/tushar-saxena" },
      },
    ],
  },
  {
    name: "Marketing Team",
    members: [
      {
        name: "Jhanvi Shah",
        role: "Marketing Lead",
        image: "/images/team/placeholder-41.jpg",
        bio: "Digital marketing strategist managing the club's outreach campaigns. Increased event attendance by 200% through targeted promotions.",
        socials: { linkedin: "https://linkedin.com/in/jhanvi-shah" },
      },
      {
        name: "Dev Agarwal",
        role: "Social Media Manager",
        image: "/images/team/placeholder-42.jpg",
        bio: "Manages Instagram, LinkedIn, and Twitter presence. Creates engaging content calendars and analyzes campaign performance.",
        socials: { linkedin: "https://linkedin.com/in/dev-agarwal", twitter: "https://twitter.com/dev_agarwal" },
      },
      {
        name: "Myra Choudhury",
        role: "Marketing Coordinator",
        image: "/images/team/placeholder-43.jpg",
        bio: "Coordinates event promotions, email campaigns, and cross-team communication. Runs the club's ambassador program.",
        socials: { linkedin: "https://linkedin.com/in/myra-choudhury" },
      },
      {
        name: "Yashwant Pillai",
        role: "Marketing Intern",
        image: "/images/team/placeholder-44.jpg",
        bio: "Helps with market research, competitor analysis, and student outreach. Passionate about tech community building.",
        socials: { linkedin: "https://linkedin.com/in/yashwant-pillai" },
      },
    ],
  },
  {
    name: "Event Team",
    members: [
      {
        name: "Ritika Bansal",
        role: "Event Lead",
        image: "/images/team/placeholder-45.jpg",
        bio: "Event management pro who has organized everything from 50-person workshops to 500-attendee conferences. Ensures flawless event execution.",
        socials: { linkedin: "https://linkedin.com/in/ritika-bansal" },
      },
      {
        name: "Manav Goyal",
        role: "Event Coordinator",
        image: "/images/team/placeholder-46.jpg",
        bio: "Handles logistics, venue coordination, and volunteer management. Instrumental in the success of the annual Cloud Summit.",
        socials: { linkedin: "https://linkedin.com/in/manav-goyal", github: "https://github.com/manavgoyal" },
      },
      {
        name: "Trisha Iyengar",
        role: "Event Coordinator",
        image: "/images/team/placeholder-47.jpg",
        bio: "Manages speaker relations, schedules, and attendee engagement. Ensures every event delivers maximum value to participants.",
        socials: { linkedin: "https://linkedin.com/in/trisha-iyengar" },
      },
      {
        name: "Aarav Nambiar",
        role: "Event Intern",
        image: "/images/team/placeholder-48.jpg",
        bio: "Assists in event planning, on-ground coordination, and post-event analysis. Learning the ropes of large-scale event management.",
        socials: { linkedin: "https://linkedin.com/in/aarav-nambiar" },
      },
    ],
  },
  {
    name: "Alumni",
    members: [
      {
        name: "Karthik Subramaniam",
        role: "Former President (2023-24)",
        image: "/images/team/placeholder-49.jpg",
        bio: "Now Cloud Engineer at Amazon. Founded the club and set the vision. Continues to mentor current team and speaks at club events.",
        socials: { linkedin: "https://linkedin.com/in/karthik-subramaniam", github: "https://github.com/karthiksub" },
      },
      {
        name: "Divya Nair",
        role: "Former Technical Lead (2023-24)",
        image: "/images/team/placeholder-50.jpg",
        bio: "Currently Software Engineer at Google Cloud. Built the club's initial curriculum and workshop structure that is still in use.",
        socials: { linkedin: "https://linkedin.com/in/divya-nair", github: "https://github.com/divyanair" },
      },
      {
        name: "Akash Srinivasan",
        role: "Former Cloud Lead (2022-23)",
        image: "/images/team/placeholder-51.jpg",
        bio: "Now DevOps Engineer at Netflix. His workshops on AWS fundamentals helped 200+ students pass the Cloud Practitioner exam.",
        socials: { linkedin: "https://linkedin.com/in/akash-srinivasan" },
      },
      {
        name: "Rhea Mathew",
        role: "Former Marketing Lead (2022-23)",
        image: "/images/team/placeholder-52.jpg",
        bio: "Currently Product Marketing Manager at Atlassian. Built the club's brand presence from scratch across all social media platforms.",
        socials: { linkedin: "https://linkedin.com/in/rhea-mathew" },
      },
      {
        name: "Nikhil George",
        role: "Former Events Lead (2023-24)",
        image: "/images/team/placeholder-53.jpg",
        bio: "Now Program Manager at AWS. His event frameworks and checklists are still the gold standard for club event execution.",
        socials: { linkedin: "https://linkedin.com/in/nikhil-george" },
      },
    ],
  },
]
