import { SkillBox } from "@/ui/shared";
import { SubHeader, Header } from "@/ui/public";

export const Skills = () => {
  return (
    <Header title="SKILLS"> 
      <div className="flex flex-col gap-8 pl-3">
        {/* Coding Skills */}
        <SubHeader title="Coding" icon="fa-solid fa-code">
          <SkillBox
            text="NextJS"
            icon="https://skillicons.dev/icons?i=nextjs"
          />
          <SkillBox
            text="Prisma"
            icon="https://skillicons.dev/icons?i=prisma"
          />
          <SkillBox
            text="Typescript"
            icon="https://skillicons.dev/icons?i=typescript"
          />
          <SkillBox
            text="NodeJS"
            icon="https://skillicons.dev/icons?i=nodejs"
          />
          <SkillBox
            text="TailwindCSS"
            icon="https://skillicons.dev/icons?i=tailwind"
          />
        </SubHeader>
        {/* Tools */}
        <SubHeader title="Tools" icon="fa-solid fa-wrench">
          <SkillBox text="Figma" icon="https://skillicons.dev/icons?i=figma" />
          <SkillBox
            text="Github"
            icon="https://skillicons.dev/icons?i=github"
          />
          <SkillBox
            text="PostgreSQL"
            icon="https://skillicons.dev/icons?i=postgresql"
          />
        </SubHeader>
        <SubHeader title="Learning" icon="fa-solid fa-graduation-cap">
          <SkillBox
            text="Python"
            icon="https://skillicons.dev/icons?i=python"
          />
          <SkillBox text="Java" icon="https://skillicons.dev/icons?i=java" />
          <SkillBox text="C++" icon="https://skillicons.dev/icons?i=c" />

          <SkillBox
            text="Elysia"
            icon="https://skillicons.dev/icons?i=elysia"
          />
          <SkillBox
            text="Express"
            icon="https://skillicons.dev/icons?i=express"
          />
        </SubHeader>
      </div>
    </Header>
  );
};
