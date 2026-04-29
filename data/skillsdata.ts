export interface SkillItem{
    text: string;
    icon: string;
};

export interface SkillCategory{
    title: string;
    icon: string;
    items: SkillItem[];
};

export const SkillsData: SkillCategory[] = [
  {
    title: "Coding",
    icon: "fa-solid fa-code",
    items: [
      { text: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
      { text: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
      { text: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { text: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { text: "Typescript", icon: "https://skillicons.dev/icons?i=typescript" },
      { text: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
      { text: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    ],
  },
  {
    title: "Tools",
    icon: "fa-solid fa-wrench",
    items: [
      { text: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
      { text: "Github", icon: "https://skillicons.dev/icons?i=github" },
      { text: "GitLab", icon: "https://skillicons.dev/icons?i=gitlab" },
      { text: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { text: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { text: "IntelliJ IDEA", icon: "https://skillicons.dev/icons?i=idea" },
    ],
  },
  {
    title: "Learning",
    icon: "fa-solid fa-graduation-cap",
    items: [
      { text: "C++", icon: "https://skillicons.dev/icons?i=c" },
      { text: "Express", icon: "https://skillicons.dev/icons?i=express" },
    ],
  },
];