import React from 'react'
import Link from 'next/link';

function info() {
  return (
    <div className="w-full text-main p-10 duration-700 flex flex-col gap-14 max-sm:text-base">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold max-sm:text-2xl">
          PORAPARINT PKAKDEEPHUMMIN
        </h1>
        <p className="mt-5">
          My name is Poraparint, a second-year student at the University of
          Phayao, majoring in Software Engineering. I am seeking internship
          opportunities to gain experience as a Front-end Developer, Project
          Manager, or in other software-related fields.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl max-sm:text-lg font-semibold">EXPERIENCE</h1>
        <hr className="mb-5 mt-2 border-main rounded-full" />
        <div className="space-y-16">
          {/* Experience 1 */}
          <div className="flex items-start">
            <i className="fa-solid fa-circle mt-2 mr-4 text-sm"></i>
            <div>
              <h3 className="text-xl max-sm:text-lg font-semibold">
                Time Management System{" "}
                <span className="font-normal text-gray-600">
                  {" "}
                  / November 2024
                </span>
              </h3>
              <div className="flex gap-2 items-center mt-3 ml-3">
                <Link href="https://nextjs.org/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=next"
                    alt="Next.js"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://tailwindcss.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="TailwindCSS"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://supabase.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=supabase"
                    alt="Supabase"
                    width={35}
                    height={35}
                  />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 my-5 text-lgmax-sm:text-base">
                <li>
                  Designed a system for creating boards that enable users to
                  collaborate and manage a shared calendar.
                </li>
                <li>Developed using Next.js and Supabase as the database.</li>
              </ul>
              <div className="flex gap-3">
                <Link
                  href="https://appointment-dental.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn text-secon bg-main border-none">
                    <i className="fa-solid fa-link"></i>
                    Visit My Website
                  </div>
                </Link>
                <Link
                  href="https://github.com/Poraparint/Appointment-Nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn text-secon bg-main border-none ">
                    <i className="fa-brands fa-github text-2xl "></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Experience 2 */}
          <div className="flex items-start">
            <i className="fa-solid fa-circle mt-2 mr-4 text-sm"></i>
            <div>
              <h3 className="text-xl font-semibold max-sm:text-lg">
                Team Project: Job Finder System{" "}
                <span className="font-normal text-gray-600">
                  {" "}
                  / June 2024 - October 2024
                </span>
              </h3>
              <div className="flex gap-2 items-center mt-3 ml-3">
                <Link href="https://nextjs.org/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=next"
                    alt="Next.js"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://tailwindcss.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="TailwindCSS"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://supabase.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=supabase"
                    alt="Supabase"
                    width={35}
                    height={35}
                  />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 my-5 text-lg max-sm:text-base">
                <li>
                  Collaborated in a team of 4 members to create a system for
                  connecting employers and freelancers.
                </li>
                <li>
                  Focused on implementing features to allow users to add their
                  own job postings.
                </li>
                <li>Built using Next.js and Supabase as the database.</li>
              </ul>
              <div className="flex gap-3">
                <Link
                  href="https://jobhouse-supabase.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn text-secon bg-main border-none">
                    <i className="fa-solid fa-link"></i>
                    Visit My Website
                  </div>
                </Link>
                <Link
                  href="https://github.com/Poraparint/Jobhouse_Supabase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn text-secon bg-main border-none">
                    <i className="fa-brands fa-github text-2xl"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Experience 3 */}

          <div className="flex items-start">
            <i className="fa-solid fa-circle mt-2 mr-4 text-sm"></i>
            <div>
              <h3 className="text-xl font-semibold max-sm:text-lg">
                Patient Management and Revenue Calculation System for a Clinic{" "}
                <span className="font-normal text-gray-600">
                  {" "}
                  / March 2024 - April 2024
                </span>
              </h3>
              <div className="flex gap-2 items-center mt-3 ml-3">
                <Link href="https://react.dev/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="React"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://laravel.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=laravel"
                    alt="Laravel"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://www.mysql.com/" target="blank">
                  <img
                    src="https://skillicons.dev/icons?i=mysql"
                    alt="MYSQL"
                    width={35}
                    height={35}
                  />
                </Link>
              </div>
              <ul className="list-disc list-inside space-y-2 my-5 text-lg max-sm:text-base">
                <li>
                  Developed a system for managing patient records and
                  calculating clinic revenue.
                </li>
                <li>
                  Utilized React framework for the front-end and Laravel for the
                  back-end, integrated with a MySQL database.
                </li>
              </ul>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/Poraparint/DentLab-React-Laravel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn text-secon bg-main border-none">
                    <i className="fa-brands fa-github text-2xl"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default info