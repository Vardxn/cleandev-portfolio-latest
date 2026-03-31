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
    category: "Frontend",
    skills: [
      { name: "React", proficiency: 95, color: "#61dafb" },
      { name: "TypeScript", proficiency: 90, color: "#3178c6" },
      { name: "Tailwind CSS", proficiency: 92, color: "#06b6d4" },
      { name: "GSAP Animations", proficiency: 88, color: "#88ce02" },
      { name: "Vite", proficiency: 85, color: "#646cff" },
      { name: "HTML5/CSS3", proficiency: 95, color: "#e34c26" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: 92, color: "#68a063" },
      { name: "Express.js", proficiency: 90, color: "#000000" },
      { name: "MongoDB", proficiency: 85, color: "#13aa52" },
      { name: "PostgreSQL", proficiency: 82, color: "#336791" },
      { name: "REST APIs", proficiency: 93, color: "#ff6c37" },
      { name: "JWT Auth", proficiency: 88, color: "#000000" },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", proficiency: 94, color: "#f05033" },
      { name: "Vercel", proficiency: 90, color: "#000000" },
      { name: "Docker", proficiency: 75, color: "#2496ed" },
      { name: "AWS", proficiency: 72, color: "#ff9900" },
      { name: "Firebase", proficiency: 80, color: "#ffa726" },
      { name: "VS Code", proficiency: 98, color: "#007acc" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 95, color: "#f7df1e" },
      { name: "Python", proficiency: 85, color: "#3776ab" },
      { name: "C++", proficiency: 80, color: "#00599c" },
      { name: "SQL", proficiency: 88, color: "#336791" },
    ],
  },
];
