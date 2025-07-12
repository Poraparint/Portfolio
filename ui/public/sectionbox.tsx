import React from "react";
import { TargetLink } from "@/ui/common/targetlink";

interface SectionBoxProps {
  title: string;
  timeline: string;
  header: React.ReactNode;
  children: React.ReactNode;
  websiteLink?: string;
  githubLink?: string;
}

export const SectionBox = ({
  title,
  timeline,
  header,
  children,
  websiteLink,
  githubLink,
}: SectionBoxProps) => {
  return (
    <div className="flex items-start bg-[#dcdbdb] p-5 rounded-xl">
      <i className="fa-solid fa-circle mt-2 mr-4 text-xs"></i>
      <div>
        <h3 className="text-xl max-sm:text-lg font-semibold">
          {title} <span className="font-normal text-gray-600"> {timeline}</span>
        </h3>

        {header}

        <ul className="list-disc list-inside space-y-2 my-5 text-lg max-sm:text-base">
          {children}
        </ul>

        <div className="flex gap-3 ">
          {websiteLink && (
            <TargetLink target={websiteLink}>
              <div className="btn text-secon bg-main border-none">
                <i className="fa-solid fa-link"></i>
                Visit My Website
              </div>
            </TargetLink>
          )}
          {githubLink && (
            <TargetLink target={githubLink}>
              <div className="btn text-secon bg-main border-none">
                <i className="fa-brands fa-github text-2xl"></i>
              </div>
            </TargetLink>
          )}
        </div>
      </div>
    </div>
  );
};
