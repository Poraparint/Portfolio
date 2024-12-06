import React from "react";

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
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="HTML"
                width={35}
                height={35}
              />
              <p>HTML</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="CSS"
                width={35}
                height={35}
              />
              <p>CSS</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=js"
                alt="JavaScript"
                width={35}
                height={35}
              />
              <p>JavaScript</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="React"
                width={35}
                height={35}
              />
              <p>React</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=nextjs"
                alt="Next.js"
                width={35}
                height={35}
              />
              <p>Next.js</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="TailwindCSS"
                width={35}
                height={35}
              />
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="font-medium text-main mb-5 text-2xl">
            <i className="fa-solid fa-wrench mr-2 text-xl"></i>Tools
          </h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 text-secon ">
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=figma"
                alt="Figma"
                width={35}
                height={35}
              />
              <p>Figma</p>
            </div>
            <div className="flex gap-5 items-center bg-main p-2 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Github"
                width={35}
                height={35}
              />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
