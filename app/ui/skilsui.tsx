import React from "react";

interface SkillIconProps {
  skillName: string;
  iconUrl: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skillName, iconUrl }) => {
  return (
    <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
      <img src={iconUrl} alt={skillName} width={35} height={35} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillIcon;
