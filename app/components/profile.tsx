import React from "react";
import Image from "next/image";
import Link from "next/link";


function Profile() {
  return (
    <div className="w-[400px] bg-main flex flex-col items-end text-secon py-10 pr-5 max-sm:w-full max-sm:pl-5 max-sm:bg-secon max-sm:text-main">
      {/* Avatar Section */}
      <div className="relative w-36 h-36 rounded-full flex self-center max-lg:w-24 max-lg:h-24 mb-10 duration-700">
        <Image
          className="rounded-full border-4 border-secon max-sm:border-main"
          src="/Profile.jpeg"
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-9 w-5/6 max-lg:text-lg duration-700 max-sm:w-full">
        {/* Contact Section */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">CONTACT</h1>
          <hr className="mb-5 mt-2 border-secon rounded-full max-sm:border-main" />
          <Link
            href="https://www.facebook.com/poraparin.phakdeephoomin/?locale=th_TH"
            target="blank"
          >
            <div className="flex items-center gap-3 pl-3 p-2 rounded-lg hover:bg-secon hover:text-main max-sm:hover:bg-main max-sm:hover:text-secon duration-200 cursor-pointer">
              <i className="fa-brands fa-facebook text-2xl"></i>
              <p>Facebook</p>
            </div>
          </Link>
          <Link href="mailto:poraparint@gmail.com">
            <div className="flex items-center gap-3 pl-3 p-2 rounded-lg hover:bg-secon hover:text-main max-sm:hover:bg-main max-sm:hover:text-secon duration-200 cursor-pointer">
              <i className="fa-regular fa-envelope text-2xl"></i> <p>Gmail</p>
            </div>
          </Link>
          <Link href="https://github.com/Poraparint" target="blank">
            <div className="flex items-center gap-3 pl-3 p-2 rounded-lg hover:bg-secon hover:text-main max-sm:hover:bg-main max-sm:hover:text-secon duration-200 cursor-pointer">
              <i className="fa-brands fa-github text-2xl"></i>
              <p>Github</p>
            </div>
          </Link>
          <Link href="https://fastwork.co/user/poraparint" target="blank">
            <div className="flex items-center gap-3 pl-3 p-2 rounded-lg hover:bg-secon hover:text-main max-sm:hover:bg-main max-sm:hover:text-secon duration-200 cursor-pointer">
              <div className="relative w-6 h-6 rounded-md bg-secon">
                <Image
                  className="rounded-md"
                  src="/fastwork.png"
                  alt="Fastwork"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p>Fastwork</p>
            </div>
          </Link>
        </div>

        {/* Education Section */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">EDUCATION</h1>
          <hr className="mb-5 mt-2 border-secon rounded-full max-sm:border-main" />
          <div className="flex flex-col pl-3 mb-2 text-lg">
            <p>University Of Phayao</p>
            <p className="text-base text-gray-400">2023 - Present</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">SKILLS</h1>
          <hr className="mb-5 mt-2 border-secon rounded-full max-sm:border-main" />
          <div className="flex flex-col gap-8 pl-3">
            {/* Frontend Skills */}
            <div>
              <h2 className=" text-secon mb-5 text-xl max-sm:text-main">
                <i className="fa-solid fa-code mr-2 text-lg"></i>
                Frontend
              </h2>
              <div className="flex flex-col gap-4 text-gray-300">
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="HTML"
                    width={40}
                    height={40}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    alt="CSS"
                    width={40}
                    height={40}
                  />
                  <p>CSS</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                    width={40}
                    height={40}
                  />
                  <p>JavaScript</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="React"
                    width={40}
                    height={40}
                  />
                  <p>React</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=nextjs"
                    alt="Next.js"
                    width={40}
                    height={40}
                  />
                  <p>Next.js</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="TailwindCSS"
                    width={40}
                    height={40}
                  />
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h2 className="text-xl font-medium text-secon mb-5 max-sm:text-main">
                <i className="fa-solid fa-wrench mr-2 text-lg"></i>Tools
              </h2>
              <div className="flex flex-col gap-4 text-gray-300">
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=figma"
                    alt="Figma"
                    width={40}
                    height={40}
                  />
                  <p>Figma</p>
                </div>
                <div className="flex gap-5 items-center">
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                    width={40}
                    height={40}
                  />
                  <p>Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
