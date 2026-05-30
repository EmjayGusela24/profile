export interface Project {
  title: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  liveLink: string;
  repoLink: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "HTML5/CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git/GitHub", "Docker", "AWS (S3/EC2)", "Vercel", "CI/CD", "InfinityFree"],
  },
  { category: "Testing", skills: ["Jest", "React Testing Library", "Cypress"] },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "DLMHS Online Voting System",
    role: "Lead Full-Stack Engineer",
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Recharts"],
    problem:
      "The client needed a way to visualize massive amounts of daily transaction data without sacrificing web application performance.",
    solution:
      "Built a paginated, memoized dashboard leveraging GraphQL queries and Recharts, reducing data load times by 40%.",
    liveLink: "https://dlmhs-onlinevoting.xo.je/?i=1",
    repoLink: "https://github.com/EmjayGusela24/gusela21",
  },
];

