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
    title: "Programming Languages",
    icon: "fa-solid fa-code",
    items: [
      { text: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { text: "Typescript", icon: "https://skillicons.dev/icons?i=typescript" },
    ],
  },
  {
    title: "Frontend Frameworks",
    icon: "fa-solid fa-code",
    items: [
      { text: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
      { text: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
      { text: "React", icon: "https://skillicons.dev/icons?i=react" },
      { text: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    ],
  },
  {
    title: "Backend Frameworks",
    icon: "fa-solid fa-code",
    items: [
      { text: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
      { text: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
      { text: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
    ],
  },
  {
    title: "Database",
    icon: "fa-solid fa-database",
    items: [
      { text: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { text: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { text: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
    ],
  },
  {
    title: "Testing",
    icon: "fa-solid fa-pen",
    items: [
      { text: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { text: "Playwright", icon: "https://skillicons.dev/icons?i=playwright" },
    ],
  },
  {
    title: "Tools",
    icon: "fa-solid fa-wrench",
    items: [
      { text: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
      { text: "Github", icon: "https://skillicons.dev/icons?i=github" },
      { text: "GitLab", icon: "https://skillicons.dev/icons?i=gitlab" },
      { text: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { text: "IntelliJ IDEA", icon: "https://skillicons.dev/icons?i=idea" },
      { text: "Miro", icon: "https://skillicons.dev/icons?i=miro" },
    ],
  },
];