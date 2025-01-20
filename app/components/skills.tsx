import React from "react";
import SkillIcon from "../ui/skilsui";

function skills() {
  return (
    <div className="flex flex-col mt-8 text-lg">
      <h1 className="font-semibold text-2xl">SKILLS</h1>
      <hr className="mb-5 mt-2 border-main rounded-full" />
      <div className="flex flex-col gap-8 pl-3">
        {/* Frontend Skills */}
        <div>
          <h2 className=" text-main mb-5 text-2xl">
            <i className="fa-solid fa-code mr-2 text-xl"></i>
            Frontend
          </h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 text-secon">
            <SkillIcon
              skillName="HTML"
              iconUrl="https://skillicons.dev/icons?i=html"
            />
            <SkillIcon
              skillName="CSS"
              iconUrl="https://skillicons.dev/icons?i=css"
            />
            <SkillIcon
              skillName="JS"
              iconUrl="https://skillicons.dev/icons?i=js"
            />
            <SkillIcon
              skillName="React"
              iconUrl="https://skillicons.dev/icons?i=react"
            />
            <SkillIcon
              skillName="NextJS"
              iconUrl="https://skillicons.dev/icons?i=nextjs"
            />
            <SkillIcon
              skillName="TailwindCSS"
              iconUrl="https://skillicons.dev/icons?i=tailwind"
            />
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="font-medium text-main mb-5 text-2xl">
            <i className="fa-solid fa-wrench mr-2 text-xl"></i>Tools
          </h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 text-secon ">
            <SkillIcon
              skillName="Figma"
              iconUrl="https://skillicons.dev/icons?i=figma"
            />
            <SkillIcon
              skillName="Github"
              iconUrl="https://skillicons.dev/icons?i=github"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
