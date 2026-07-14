import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";

const publicDir = resolve("public/images");
const dirs = ["team", "events", "projects", "blog", "gallery", "sponsors"];

const placeholders = {
  "team": ["placeholder-1","placeholder-2","placeholder-3","placeholder-4","placeholder-5","placeholder-6"],
  "events": ["bootcamp-1","hackathon-1","workshop-1","gameday-1","workshop-2","speaker-1","community-day-1","ctf-1","devops-bootcamp-1","webinar-1","meetup-1","workshop-3"],
  "projects": ["cloud-portfolio","ai-chatbot","devops-pipeline","serverless-app","security-monitor","iac-tool","ml-platform","chat-app","blog-platform","cloud-migration","rag-system","iot-platform"],
  "blog": ["lambda-guide","community-day-recap","saa-c03-guide","ecs-eks","bedrock-rag","cicd-pipeline","cloud-security","student-journey","s3-deep-dive","hackathon-strategy","cdk-intro","security-checklist"],
  "gallery": ["community-day-group","bootcamp-session","hackathon-coding","career-talk-panel","deepracer-race","ctf-winners","genai-workshop","orientation-day","devops-livecode","women-in-cloud","hackathon-demo","certification-party","s3-lambda-workshop","team-outing","cloud-summit-keynote","freshers-welcome","intro-cloud-1","intro-cloud-2","intro-cloud-3","career-talk-1","career-talk-2","community-day-1","community-day-2","community-day-3","ctf-1","devops-1","devops-2","resume-challenge-1"],
  "sponsors": ["aws","college","sponsor-1","sponsor-2","organization-1","organization-2","organization-3","organization-4"],
};

for (const [category, files] of Object.entries(placeholders)) {
  const dir = resolve(publicDir, category);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  for (const name of files) {
    const hue = (files.indexOf(name) * 47) % 360;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="hsl(${hue}, 20%, 12%)"/>
  <text x="400" y="245" text-anchor="middle" fill="hsl(${hue}, 40%, 45%)" font-family="monospace" font-size="18" font-weight="bold">
    ${category}
  </text>
  <text x="400" y="275" text-anchor="middle" fill="hsl(${hue}, 20%, 35%)" font-family="monospace" font-size="13">
    ${name}
  </text>
</svg>`;
    writeFileSync(resolve(dir, `${name}.jpg`), svg);
  }
}

// Also create a generic og-image
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0A0A0A"/>
  <rect x="0" y="0" width="1200" height="4" fill="#2563EB"/>
  <text x="600" y="300" text-anchor="middle" fill="#2563EB" font-family="monospace" font-size="48" font-weight="bold">
    AWS Student Builder Group
  </text>
  <text x="600" y="350" text-anchor="middle" fill="#6B7280" font-family="monospace" font-size="20">
    Empowering the Next Generation of Cloud Innovators
  </text>
</svg>`;
writeFileSync(resolve(publicDir, "og-image.jpg"), ogSvg);

console.log("All placeholder images generated!");
