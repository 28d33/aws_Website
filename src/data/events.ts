export type EventType = "workshop" | "bootcamp" | "hackathon" | "webinar" | "meetup" | "speaker_session" | "ctf" | "gameday"

export interface Event {
  id: string
  title: string
  slug: string
  type: EventType
  date: string
  time: string
  location: string
  description: string
  longDescription: string
  image: string
  registrationLink?: string
  isUpcoming: boolean
  gallery?: string[]
}

export const events: Event[] = [
  {
    id: "1",
    title: "AWS Cloud Practitioner Bootcamp 2026",
    slug: "aws-cloud-practitioner-bootcamp-2026",
    type: "bootcamp",
    date: "2026-08-10",
    time: "09:00 AM - 05:00 PM",
    location: "Computer Science Auditorium",
    description: "An intensive one-day bootcamp to help you prepare for the AWS Cloud Practitioner certification exam.",
    longDescription:
      "Join us for a full-day intensive bootcamp designed to help you ace the AWS Cloud Practitioner (CLF-C02) exam. This bootcamp covers all six domains of the exam: Cloud Concepts, Security, Technology, Billing and Pricing, and more. You will get hands-on experience with the AWS Free Tier, practice exams, and study materials. Lunch and certification voucher will be provided for top performers in the mock test. Whether you are new to cloud computing or looking to validate your foundational knowledge, this bootcamp is the perfect starting point for your AWS certification journey.",
    image: "/images/events/bootcamp-1.jpg",
    registrationLink: "https://forms.example.com/cloud-practitioner-bootcamp",
    isUpcoming: true,
    gallery: [],
  },
  {
    id: "2",
    title: "Serverless Stack Hackathon",
    slug: "serverless-stack-hackathon-2026",
    type: "hackathon",
    date: "2026-09-05",
    time: "10:00 AM (48 hours)",
    location: "Innovation Lab & Online",
    description: "Build innovative serverless applications using AWS Lambda, API Gateway, DynamoDB, and more in this 48-hour hackathon.",
    longDescription:
      "Get ready for a 48-hour coding marathon where you will build production-ready serverless applications using the AWS serverless stack. Teams of 3-4 will compete to build solutions for real-world problems using AWS Lambda, API Gateway, DynamoDB, SQS, SNS, and Step Functions. AWS credits worth $500 will be provided to each team. Expert mentors from AWS will be available for guidance throughout the event. Winning teams will receive AWS certification vouchers, exclusive swag, and a chance to present their projects to AWS solution architects.",
    image: "/images/events/hackathon-1.jpg",
    registrationLink: "https://forms.example.com/serverless-hackathon",
    isUpcoming: true,
    gallery: [],
  },
  {
    id: "3",
    title: "Generative AI with Amazon Bedrock",
    slug: "gen-ai-bedrock-workshop",
    type: "workshop",
    date: "2026-07-25",
    time: "02:00 PM - 05:00 PM",
    location: "Virtual (Zoom)",
    description: "Hands-on workshop exploring foundation models, prompt engineering, and RAG architectures using Amazon Bedrock.",
    longDescription:
      "Dive into the world of generative AI with Amazon Bedrock in this hands-on workshop. You will learn how to access and use foundation models from AI21 Labs, Anthropic, Cohere, Meta, and Stability AI through a single API. The workshop covers prompt engineering best practices, building RAG (Retrieval-Augmented Generation) applications, and deploying generative AI applications securely. Participants will build a custom chatbot powered by Bedrock and LangChain. Basic Python knowledge is recommended. AWS credits will be provided to all participants for hands-on practice.",
    image: "/images/events/workshop-1.jpg",
    registrationLink: "https://forms.example.com/bedrock-workshop",
    isUpcoming: true,
  },
  {
    id: "4",
    title: "AWS DeepRacer Gameday",
    slug: "aws-deepracer-gameday",
    type: "gameday",
    date: "2026-08-22",
    time: "10:00 AM - 04:00 PM",
    location: "CS Building, Room 201",
    description: "Compete in a fun reinforcement learning race using AWS DeepRacer. Train models and race on a physical track.",
    longDescription:
      "Experience the thrill of machine learning with AWS DeepRacer! In this gameday event, participants will train reinforcement learning models using the AWS DeepRacer console, fine-tune hyperparameters, and compete on a physical 1/18th scale race track. No prior ML experience is required. You will learn the fundamentals of reinforcement learning, reward function design, and model optimization. The top three racers with the fastest lap times will win AWS DeepRacer merchandise and AWS credits. All participants will get hands-on experience with SageMaker and RoboMaker.",
    image: "/images/events/gameday-1.jpg",
    registrationLink: "https://forms.example.com/deepracer-gameday",
    isUpcoming: true,
  },
  {
    id: "5",
    title: "Introduction to AWS Cloud",
    slug: "intro-aws-cloud",
    type: "workshop",
    date: "2026-01-15",
    time: "03:00 PM - 05:00 PM",
    location: "Seminar Hall A",
    description: "A beginner-friendly workshop covering AWS fundamentals, core services, and the AWS Free Tier.",
    longDescription:
      "This workshop introduced absolute beginners to cloud computing and AWS. Participants learned about EC2, S3, Lambda, and IAM through hands-on labs. The session covered AWS Free Tier signup, navigating the AWS Management Console, and deploying a simple static website on S3. Over 120 students attended and 80% signed up for the AWS Free Tier during the session.",
    image: "/images/events/workshop-2.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/intro-cloud-1.jpg", "/images/gallery/intro-cloud-2.jpg", "/images/gallery/intro-cloud-3.jpg"],
  },
  {
    id: "6",
    title: "Cloud Career Talk with AWS Leaders",
    slug: "cloud-career-talk-aws-leaders",
    type: "speaker_session",
    date: "2026-02-10",
    time: "04:00 PM - 06:00 PM",
    location: "Main Auditorium",
    description: "An inspiring session with AWS leaders sharing career insights, certification tips, and industry trends.",
    longDescription:
      "We hosted senior leaders from AWS India for an engaging career talk. Speakers included a Principal Solutions Architect and a Talent Acquisition Manager from AWS. They shared insights on cloud careers, the value of AWS certifications, interview preparation tips, and emerging trends in cloud computing. The session concluded with a lively Q&A where students got their career questions answered. Over 300 students attended this session.",
    image: "/images/events/speaker-1.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/career-talk-1.jpg", "/images/gallery/career-talk-2.jpg"],
  },
  {
    id: "7",
    title: "AWS Community Day",
    slug: "aws-community-day-2026",
    type: "meetup",
    date: "2026-03-20",
    time: "09:00 AM - 06:00 PM",
    location: "College Convention Center",
    description: "A day-long community event with technical sessions, workshops, and networking with AWS enthusiasts.",
    longDescription:
      "Our flagship event of the year, AWS Community Day brought together students, professionals, and AWS enthusiasts for a day of learning and networking. The event featured 10+ technical sessions on topics ranging from serverless computing to machine learning, hands-on workshops, a project showcase, and a career fair with participating companies. Over 500 attendees participated, making it the largest cloud community event in the region.",
    image: "/images/events/community-day-1.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/community-day-1.jpg", "/images/gallery/community-day-2.jpg", "/images/gallery/community-day-3.jpg"],
  },
  {
    id: "8",
    title: "Cybersecurity CTF Challenge",
    slug: "cybersecurity-ctf-challenge",
    type: "ctf",
    date: "2026-04-05",
    time: "10:00 AM - 06:00 PM",
    location: "Online & Lab 301",
    description: "A Capture The Flag competition focused on cloud security, web exploitation, and cryptography challenges.",
    longDescription:
      "Our Capture The Flag competition tested participants on cloud security challenges including IAM policy misconfigurations, S3 bucket enumeration, web application vulnerabilities, and cryptography. Teams of 2-3 competed in a jeopardy-style CTF with challenges ranging from easy to hard. The top three teams won AWS certifications, swag, and direct interview opportunities with our sponsors. Over 40 teams registered for this event.",
    image: "/images/events/ctf-1.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/ctf-1.jpg"],
  },
  {
    id: "9",
    title: "DevOps and CI/CD Bootcamp",
    slug: "devops-cicd-bootcamp",
    type: "bootcamp",
    date: "2026-04-18",
    time: "09:00 AM - 05:00 PM",
    location: "Computer Science Lab",
    description: "A full-day bootcamp covering Docker, Kubernetes, CI/CD pipelines, and infrastructure as code on AWS.",
    longDescription:
      "This intensive bootcamp covered the complete DevOps toolchain on AWS. Participants learned containerization with Docker, orchestration with Amazon EKS, CI/CD pipeline creation with AWS CodePipeline and GitHub Actions, and infrastructure as code using Terraform and AWS CloudFormation. The bootcamp featured live coding sessions, hands-on labs, and a mini-project where attendees deployed a full-stack application using DevOps best practices.",
    image: "/images/events/devops-bootcamp-1.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/devops-1.jpg", "/images/gallery/devops-2.jpg"],
  },
  {
    id: "10",
    title: "Building AI Chatbots with Amazon Q",
    slug: "building-ai-chatbots-amazon-q",
    type: "webinar",
    date: "2026-05-02",
    time: "05:00 PM - 06:30 PM",
    location: "Virtual (Zoom)",
    description: "Learn to build intelligent chatbots using Amazon Q, Bedrock, and Lex with this online webinar.",
    longDescription:
      "This online webinar explored Amazon Q, AWS's new generative AI-powered assistant. Participants learned how to build conversational AI experiences using Amazon Q Business and Amazon Q Developer. The session covered integration with Bedrock for foundation model access, building chatbots with Amazon Lex, and deploying intelligent virtual assistants. The webinar included a live demo of building a customer support chatbot from scratch. Recordings were shared with all registered participants.",
    image: "/images/events/webinar-1.jpg",
    isUpcoming: false,
  },
  {
    id: "11",
    title: "Lunch & Learn: AWS Certification Pathways",
    slug: "lunch-learn-aws-certification",
    type: "meetup",
    date: "2026-05-20",
    time: "01:00 PM - 02:00 PM",
    location: "Student Activity Center",
    description: "An informal lunch session discussing AWS certification paths, study resources, and exam strategies.",
    longDescription:
      "An informal lunch session where certified club members shared their experiences with various AWS certifications. The session covered the different certification paths (Foundational, Associate, Professional, and Specialty), recommended study resources including AWS Skill Builder and Tutorials Dojo, exam strategies, and how to get free or discounted certification vouchers through AWS Educate and AWS Academy. Pizza was provided for all attendees. Over 80 students attended this relaxed and informative session.",
    image: "/images/events/meetup-1.jpg",
    isUpcoming: false,
  },
  {
    id: "12",
    title: "Cloud Resume Challenge Workshop",
    slug: "cloud-resume-challenge",
    type: "workshop",
    date: "2026-06-10",
    time: "02:00 PM - 04:00 PM",
    location: "Online & Lab 202",
    description: "Build and deploy your cloud resume using AWS services including S3, Lambda, DynamoDB, and CloudFront.",
    longDescription:
      "This workshop guided participants through the famous Cloud Resume Challenge developed by Forrest Brazeal. Students built a personal resume website hosted on AWS S3 with HTTPS via CloudFront, a dynamic visitor counter using Lambda and DynamoDB, and CI/CD pipelines using GitHub Actions. The challenge helped participants gain hands-on experience with core AWS services while creating a impressive cloud portfolio piece. Participants who completed the challenge received a digital badge and certificate.",
    image: "/images/events/workshop-3.jpg",
    isUpcoming: false,
    gallery: ["/images/gallery/resume-challenge-1.jpg"],
  },
]
