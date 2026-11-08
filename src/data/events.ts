export type EventType =
  | "workshop"
  | "bootcamp"
  | "hackathon"
  | "webinar"
  | "meetup"
  | "speaker_session"
  | "ctf"
  | "gameday"

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
    title: "AWS Cloud 101",
    slug: "aws-cloud-101",
    type: "workshop",
    date: "2026-02-06",
    time: "02:00 PM - 04:00 PM",
    location: "MARVEL Lab, UVCE",
    description: "A beginner-friendly introduction to the cloud — AWS accounts, core services, and first hands-on labs.",
    longDescription:
      "Our very first session introduced the community to the cloud. Students set up their AWS accounts and got hands-on with core services — EC2, S3, and IAM.",
    image: "/images/events/workshop-2.jpg",
    isUpcoming: false,
  },
  {
    id: "2",
    title: "Cloud Career Talk",
    slug: "cloud-career-talk",
    type: "speaker_session",
    date: "2026-03-13",
    time: "04:00 PM - 06:00 PM",
    location: "Main Auditorium, UVCE",
    description: "An open conversation on cloud careers, certifications, and how to get started.",
    longDescription:
      "An evening of honest conversations about building a career in the cloud — certification paths, internships, and what the industry actually looks for.",
    image: "/images/events/speaker-1.jpg",
    isUpcoming: false,
  },
  {
    id: "3",
    title: "Cloud Practitioner Bootcamp",
    slug: "cloud-practitioner-bootcamp",
    type: "bootcamp",
    date: "2026-05-08",
    time: "09:00 AM - 05:00 PM",
    location: "MARVEL Lab, UVCE",
    description: "A full-day bootcamp covering everything you need for the AWS Cloud Practitioner exam.",
    longDescription:
      "A full-day, hands-on bootcamp built around the AWS Cloud Practitioner certification — covering cloud concepts, security, billing, and practice exams.",
    image: "/images/events/bootcamp-1.jpg",
    isUpcoming: false,
  },
  {
    id: "4",
    title: "Build with Cloud — Hackathon",
    slug: "build-with-cloud-hackathon",
    type: "hackathon",
    date: "2026-08-21",
    time: "10:00 AM (24 hours)",
    location: "MARVEL Lab, UVCE",
    description: "24 hours of building on AWS — serverless apps, AI projects, and a lot of coffee.",
    longDescription:
      "Teams had 24 hours to design, build, and demo something real on AWS. Serverless applications, AI experiments, and a great showcase of what student builders can do.",
    image: "/images/events/hackathon-1.jpg",
    isUpcoming: false,
  },
  {
    id: "5",
    title: "Builders' Meetup",
    slug: "builders-meetup",
    type: "meetup",
    date: "2026-10-03",
    time: "03:00 PM - 05:00 PM",
    location: "UVCE Campus",
    description: "An open meetup — project demos, lightning talks, and community networking.",
    longDescription:
      "An open afternoon for the community — members showed off what they had built, swapped lessons learned, and planned what to build next.",
    image: "/images/events/meetup-1.jpg",
    isUpcoming: false,
  },
]
