export interface Announcement {
  title: string
  content: string
  date: string
  type: "info" | "warning" | "success"
}

export const announcements: Announcement[] = [
  {
    title: "New Semester Recruitment Open",
    content: "We are excited to announce that recruitment for the Fall 2026 semester is now open! All students are welcome to join our community of cloud enthusiasts. Fill out the membership form on our website and join the Discord server to get started. Orientation will be held on August 5th at 4 PM in the CS Auditorium.",
    date: "2026-07-10",
    type: "info",
  },
  {
    title: "AWS Certification Voucher Deadline Approaching",
    content: "Reminder: The deadline to apply for subsidized AWS certification vouchers is July 25th. Active members who have attended at least 3 events this semester are eligible. Apply through the club portal with your preferred certification and target exam date.",
    date: "2026-07-12",
    type: "warning",
  },
  {
    title: "Cloud Practitioner Bootcamp Registrations Full",
    content: "Great news! The AWS Cloud Practitioner Bootcamp scheduled for August 10th has reached full capacity with 200 registrations. A waitlist has been opened for cancellations. We are planning another bootcamp in September based on demand. Stay tuned for updates!",
    date: "2026-07-08",
    type: "success",
  },
  {
    title: "Serverless Hackathon Team Formation",
    content: "We are organizing team formation sessions for the upcoming Serverless Stack Hackathon on September 5th. If you need a team or want to find teammates with complementary skills, join us at the Innovation Lab this Friday at 3 PM. Solo participants will be grouped during registration.",
    date: "2026-07-14",
    type: "info",
  },
]
