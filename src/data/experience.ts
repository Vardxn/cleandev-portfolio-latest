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
    school: "National Institute of Technology (NIT) Srinagar",
    date: "2022 - 2026",
    duration: "4 years",
    achievements: [
      "CGPA: 8.0+",
      "Specialized in Full-Stack Development",
      "Proficient in cloud-native architectures",
      "Advanced problem-solving skills",
    ],
    description: "Pursuing B.Tech in Information Technology with strong foundation in computer science, data structures, and modern web technologies.",
    icon: "🎓",
  },
  {
    id: "2",
    type: "work",
    title: "Software Development Intern",
    company: "Noventiq/Umbrella Infotech",
    date: "Dec 2024 - Feb 2025",
    duration: "3 months",
    achievements: [
      "Developed cloud-native web applications",
      "Worked with enterprise development frameworks",
      "Collaborated with senior developers on production systems",
      "Implemented REST APIs and database optimization",
    ],
    description: "Software development internship focusing on cloud-native application development, modern frameworks, and enterprise-level coding practices.",
    icon: "💼",
  },
  {
    id: "3",
    type: "education",
    title: "Senior Secondary Education (Class X & XII)",
    school: "Army Public School",
    date: "2019 - 2021",
    duration: "2 years",
    achievements: [
      "Class XII: 87.4% (PCM Stream)",
      "Class X: 91.4%",
      "Strong foundation in Mathematics & Science",
      "Developed analytical thinking skills",
    ],
    description: "High school education with focus on Science and Mathematics, developing strong fundamentals for engineering entrance exams.",
    icon: "📚",
  },
];
