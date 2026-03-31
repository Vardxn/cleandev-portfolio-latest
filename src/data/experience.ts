export interface ExperienceItem {
  id: string;
  type: "work" | "education" | "certification";
  title: string;
  company?: string;
  school?: string;
  date: string;
  duration?: string;
  achievements: string[];
  description: string;
  icon: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    type: "education",
    title: "Bachelor of Technology in Information Technology",
    school: "Current University",
    date: "2024 - Present",
    duration: "4 years",
    achievements: [
      "CGPA: 8.0+",
      "Specialized in Full-Stack Development",
      "Cloud-Native Architecture focus",
      "AI-Integrated Solutions track",
    ],
    description: "Pursuing B.Tech in Information Technology with specialization in full-stack development, cloud architecture, and AI integration.",
    icon: "🎓",
  },
  {
    id: "2",
    type: "work",
    title: "Full-Stack Developer",
    company: "Self-Employed / Freelance",
    date: "2025 - Present",
    duration: "10+ months",
    achievements: [
      "Built 3+ production-ready MERN stack applications",
      "Deployed multiple projects to Vercel with 95+ Lighthouse scores",
      "Implemented real-time features using Socket.io",
      "Managed MongoDB and PostgreSQL databases",
    ],
    description: "Developing full-stack web applications with modern tech stack (React, Node.js, MongoDB). Focus on performance optimization and user experience.",
    icon: "💼",
  },
  {
    id: "3",
    type: "certification",
    title: "Full-Stack Web Development Bootcamp",
    company: "Online Learning Platform",
    date: "2024 - 2025",
    duration: "6 months",
    achievements: [
      "Completed 100+ hours of intensive training",
      "Built 5+ capstone projects",
      "Mastered MERN stack fundamentals",
      "Learned DevOps practices",
    ],
    description: "Comprehensive bootcamp covering full-stack development with hands-on projects and real-world scenarios.",
    icon: "📜",
  },
  {
    id: "4",
    type: "education",
    title: "Advanced JavaScript & React",
    school: "Online Certification",
    date: "2024",
    duration: "3 months",
    achievements: [
      "Advanced React Hooks mastery",
      "State management with Redux",
      "Performance optimization techniques",
      "Component library development",
    ],
    description: "Specialized course in advanced JavaScript concepts and React optimization strategies for production applications.",
    icon: "⚡",
  },
  {
    id: "5",
    type: "work",
    title: "Open Source Contributions",
    company: "GitHub Community",
    date: "2025 - Present",
    duration: "Ongoing",
    achievements: [
      "Contributed to 5+ open source projects",
      "Merged PRs improving performance",
      "Fixed critical bugs in popular libraries",
      "Maintained personal package libraries",
    ],
    description: "Active contributor to open source projects, helping improve developer tools and libraries used by thousands.",
    icon: "🌟",
  },
  {
    id: "6",
    type: "certification",
    title: "AWS Fundamentals",
    company: "Amazon Web Services Training",
    date: "2025",
    duration: "4 weeks",
    achievements: [
      "AWS EC2 & S3 expertise",
      "Lambda functions & API Gateway",
      "Database services (RDS, DynamoDB)",
      "Cloud deployment best practices",
    ],
    description: "AWS certification course covering cloud fundamentals, deployment strategies, and best practices for scalable applications.",
    icon: "☁️",
  },
];
