export interface Skill {
  name: string;
  proficiency: number; // 0-100
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React", proficiency: 95, color: "#61dafb" },
      { name: "TypeScript", proficiency: 90, color: "#3178c6" },
      { name: "Next.js", proficiency: 88, color: "#ffffff" },
      { name: "Tailwind CSS", proficiency: 92, color: "#06b6d4" },
      { name: "Framer Motion", proficiency: 86, color: "#ff4d9f" },
      { name: "GSAP Animations", proficiency: 88, color: "#88ce02" },
      { name: "HTML5/CSS3", proficiency: 95, color: "#e34c26" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", proficiency: 92, color: "#68a063" },
      { name: "Express.js", proficiency: 90, color: "#000000" },
      { name: "REST API Design", proficiency: 93, color: "#ff6c37" },
      { name: "JWT Authentication", proficiency: 88, color: "#f9a826" },
      { name: "MongoDB", proficiency: 85, color: "#13aa52" },
      { name: "PostgreSQL", proficiency: 82, color: "#336791" },
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: [
      { name: "Git & GitHub", proficiency: 94, color: "#f05033" },
      { name: "Vercel Deployments", proficiency: 90, color: "#ffffff" },
      { name: "CI/CD Workflows", proficiency: 82, color: "#3fb950" },
      { name: "Docker", proficiency: 75, color: "#2496ed" },
      { name: "AWS Fundamentals", proficiency: 72, color: "#ff9900" },
      { name: "VS Code", proficiency: 98, color: "#007acc" },
    ],
  },
  {
    category: "Languages & Core CS",
    skills: [
      { name: "JavaScript", proficiency: 95, color: "#f7df1e" },
      { name: "Python", proficiency: 85, color: "#3776ab" },
      { name: "C++", proficiency: 80, color: "#00599c" },
      { name: "SQL", proficiency: 88, color: "#336791" },
      { name: "Data Structures & Algorithms", proficiency: 86, color: "#f85149" },
      { name: "OOP & System Design", proficiency: 84, color: "#58a6ff" },
    ],
  },
];
