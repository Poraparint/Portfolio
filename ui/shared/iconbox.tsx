import Link from "next/link";
import { TargetLink } from "@/ui/common/targetlink";

interface IconBoxProps {
  target: string;
  icon: string;
  alt?: string;
}

export const IconBox = ({ target, icon, alt }: IconBoxProps) => {
  return (
    <TargetLink target={target}>
      <img
        src={icon}
        alt={alt}
        width={35}
        height={35}
      />
    </TargetLink>
  );
};
