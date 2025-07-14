import { SkillBox } from "@/ui/shared";
import { SubHeader, Header } from "@/ui/public";
import { SkillsData } from "@/data/skillsdata";

export const Skills = () => {
  return (
    <Header title="SKILLS">
      <div className="flex flex-col gap-8 pl-3">
        {SkillsData.map((category) => (
          <SubHeader
            key={category.title}
            title={category.title}
            icon={category.icon}
          >
            {category.items.map((skill) => (
              <SkillBox key={skill.text} text={skill.text} icon={skill.icon} />
            ))}
          </SubHeader>
        ))}
      </div>
    </Header>
  );
};
