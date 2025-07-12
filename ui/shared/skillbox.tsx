interface SkillBoxProps {
  text: string;
  icon: string;
};

export const SkillBox = ({ text, icon }: SkillBoxProps) => {
  return (
    <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
      <img src={icon} alt={text} width={35} height={35} />
      <p>{text}</p>
    </div>
  );
};
