"use client";
import { Sidebar } from "@/components";
import { sections } from "@/data/sections";
import { useRef } from "react";

export default function Home() {
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    profile: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
  };

  const scrollToSection = (id: string) => {
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-full text-xl tracking-wider duration-700 max-sm:flex-col">
      <div className=" bg-transparent w-36 max-sm:hidden">
        <div className="sticky top-1/2 transform -translate-y-1/2 p-6 mx-5 rounded-lg text-3xl flex flex-col gap-8 items-center max-sm:flex-row ">
          {sections.map(({ id, label, icon }) => (
            <Sidebar
              key={id}
              label={label}
              icon={icon}
              onClick={() => scrollToSection(id)}
            />
          ))}
        </div>
      </div>

      <div className="w-full p-20 max-lg:p-5 flex flex-col gap-10">
        {sections.map(({ id, component: SectionComponent }) => (
          <div key={id} ref={sectionRefs[id]}>
            <SectionComponent />
          </div>
        ))}
      </div>
    </div>
  );
}
