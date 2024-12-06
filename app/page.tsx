"use client";
import Profile from "./components/profile";
import Info from "./components/project";
import Skills from "./components/skills";
import Education from "./components/education";
import { useRef } from "react";

export default function Home() {
  const profile = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const education = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-secon flex h-full text-xl tracking-wider duration-700 max-sm:flex-col">
      <div className=" bg-transparent w-36 max-sm:hidden">
        <div className="sticky top-1/2 transform -translate-y-1/2 p-6 mx-5 rounded-lg text-3xl text-main flex flex-col gap-8 items-center max-sm:flex-row ">
          <button
            onClick={() => scrollToSection(profile)}
            className="flex flex-col justify-center items-center hover:text-black duration-100"
          >
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <i className="fa-solid fa-user"></i>
            </div>
            <span className="mt-2 text-base ">Profile</span>
          </button>
          <button
            onClick={() => scrollToSection(skills)}
            className="flex flex-col justify-center items-center hover:text-black duration-100"
          >
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <i className="fa-solid fa-code"></i>
            </div>
            <span className="mt-2 text-base ">Skills</span>
          </button>
          <button
            onClick={() => scrollToSection(projects)}
            className="flex flex-col justify-center items-center hover:text-black duration-100"
          >
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <i className="fa-solid fa-suitcase"></i>
            </div>
            <span className="mt-2 text-base ">Projects</span>
          </button>
          <button
            onClick={() => scrollToSection(education)}
            className="flex flex-col justify-center items-center hover:text-black duration-100"
          >
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <i className="fa-solid fa-book-bookmark"></i>
            </div>
            <span className="mt-2 text-base ">Education</span>
          </button>
        </div>
      </div>

      <div className="w-full p-20 max-lg:p-5 flex flex-col gap-10">
        <div ref={profile}>
          <Profile />
        </div>
        <div ref={skills}>
          <Skills />
        </div>
        <div ref={projects}>
          <Info />
        </div>
        <div ref={education}>
          <Education />
        </div>
      </div>
    </div>
  );
}
