import {
  aiMocker,
  codefolio,
  realestate,
  redis_server,
  server
} from "@/app/constants/image";


export const projectData = [
  {
    name: "AI-Interview-Mocker",
    users: "",
    visitors: "",
    skills: ["NextJs", "JavaScript", "Gemini-ai", "PostgreSQL","NeonDB","Shadcn-ui","Drizzle-ORM"],
    image: aiMocker,
    bgColor: "yellow-500",
    description:
      "AI-Interview-Mocker is your personal interview coach, powered by advanced AI.",
    liveLink: "https://ai-interview-mocker-rosy.vercel.app",
    githubLink: "https://github.com/Sadaf2005/AI-Interview-Mocker",
  },
  {
    name: "Serverless-EC2_Instance",
    users: "",
    visitors: "", 
    skills: ["AWS", "AWS-Lambda", "AWS-EC2", "AWS-Cloudwatch","Serverless","Nodejs"],
    image: server,
    bgColor: "yellow-500",
    description:
      "Automation solution for EC2 instance scheduling",
    liveLink: "",
    githubLink: "https://github.com/Sadaf2005/serverless-ec2-scheduler",
  },
  {
    name: "ReCache",
    users: "",
    visitors: "",
    skills: [ "Redis","JavaScript", "Docker","Docker-Image","NodeJs", "Redis-cache"],
    image: redis_server,
    bgColor: "purple-500",
    description:
      "A lightweight, custom implementation of a Redis-like server,supports a powerful in-memory key-value store. ",
    liveLink: "https://github.com/Sadaf2005/ReCache",
    githubLink: "https://github.com/Sadaf2005/ReCache",
  },
  {
    name: "UrbanNest",
    users: "",
    visitors: "",
    skills: ["ReactJs","Redux","Firebase", "JWT-Authentication","MongoDB","NodeJs","ExpressJs"],
    image: realestate,
    bgColor: "purple-500",
    description:
      "Implies luxury and a safe, comfortable place to live.Suggests finding a cozy, modern home in the city.",
    liveLink: "https://sadaf-estate-urbannest.onrender.com",
    githubLink: "https://github.com/Sadaf2005/UrbanNest",
  },
  {
    name: "CodeFolio",
    users: "",
    visitors: "",
    skills: ["ReactJs", "SEO","Redux","Router","Animation-CSS","Real-Time-Rendering"],
    image: codefolio,
    bgColor: "red-500",
    description:
      " Your Ultimate Code Playground – Build, Test, and Share Interactive Web Snippets in Real-Time!",
    liveLink: "https://codefolio-d0da1.firebaseapp.com/home/projects",
    githubLink: "https://github.com/Sadaf2005/CodeFolio",
  },
];
