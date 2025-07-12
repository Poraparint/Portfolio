import { TargetLink } from "@/ui/common/targetlink";

interface ContactProps {
  target: string;
  icon: string;
  text: string;
}

export const ContactTarget = ({ target, icon, text }: ContactProps) => {
  return (
    <TargetLink target={target}>
      <div className="flex items-center gap-3 pl-3 p-3 rounded-lg hover:bg-main hover:text-secon duration-200 cursor-pointer bg-[#dcdbdb]">
        <i className={`${icon} text-2xl`}></i>
        <p>{text}</p>
      </div>
    </TargetLink>
  );
};
