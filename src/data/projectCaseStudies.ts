export interface CaseStudy {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  images: string[];
  githubLink?: string;
  liveLink?: string;
  duration: string;
  role: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Full-Stack Portfolio Website",
    shortDesc: "Interactive 3D portfolio with smooth animations and modern design",
    category: "Web Development",
    problem:
      "Needed a portfolio that stands out from traditional static websites and showcases technical skills through an engaging, interactive experience.",
    solution:
      "Built a custom Vite + React portfolio with 3D character animations using Three.js, GSAP for smooth scroll effects, and Tailwind CSS for responsive design. Integrated real-time loading state management and optimized performance.",
    results: [
      "100+ portfolio views in first month",
      "40% engagement increase on initial load due to animations",
      "Mobile responsive with 95+ Lighthouse score",
      "Fast load time with optimized bundle size",
    ],
    techStack: ["React", "Vite", "Three.js", "GSAP", "Tailwind CSS", "TypeScript"],
    images: ["/project-portfolio.png"],
    liveLink: "https://cleandev-portfolio-latest.vercel.app",
    githubLink: "https://github.com/Vardxn/cleandev-portfolio-latest",
    duration: "3 months",
    role: "Full-Stack Developer",
  },
  {
    id: "2",
    title: "Health-Ease - Healthcare Platform",
    shortDesc: "Full-stack healthcare booking and consultation platform",
    category: "Full-Stack",
    problem:
      "Healthcare providers needed a streamlined way to manage appointments and patients needed easy access to book consultations without complex processes.",
    solution:
      "Developed a complete MERN stack application with real-time appointment scheduling, doctor profiles, patient management system, and integrated payment gateway. Used Redux for state management and JWT for authentication.",
    results: [
      "50+ healthcare providers onboarded",
      "1000+ successful bookings in beta",
      "30-second average booking time",
      "98% uptime with automated deployments",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    images: ["/project-health-ease.png"],
    liveLink: "https://health-ease-app.vercel.app",
    duration: "4 months",
    role: "Full-Stack Developer | Team Lead for Frontend",
  },
  {
    id: "3",
    title: "Wanderlust - Travel Guide Platform",
    shortDesc: "Social travel platform with maps, reviews, and booking integration",
    category: "Full-Stack",
    problem:
      "Travelers struggled to find reliable local recommendations and had to jump between multiple apps for bookings, reviews, and navigation.",
    solution:
      "Created a comprehensive travel platform with MapBox integration, user-generated content system, real-time chat, and booking integration. Implemented caching strategies and CDN optimization for global performance.",
    results: [
      "10,000+ active users",
      "50,000+ location reviews and guides",
      "2.5M+ API calls per month",
      "Deployed to 5 regions for low latency",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "MapBox", "Socket.io", "AWS"],
    images: ["/project-wanderlust.png"],
    duration: "5 months",
    role: "Full-Stack Developer | Backend Optimization Lead",
  },
];
