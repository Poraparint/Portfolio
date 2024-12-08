import React from "react";
import Image from "next/image";
import Link from "next/link";


function Profile() {
  return (
    <div className="w-full bg-secon flex text-main py-10 pr-5 max-xl:flex-col-reverse gap-8">
      <div className="flex flex-col gap-9 w-4/6 max-lg:text-base duration-700 max-xl:w-full my-5">
        {/* Content Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">PORAPARINT PKAKDEEPHUMMIN</h1>
          <p className="mt-2">
            My name is Poraparint, a second-year student at the University of
            Phayao, majoring in Software Engineering. I am seeking internship
            opportunities to gain experience as a Front-end Developer, Project
            Manager, or in other software-related fields.
          </p>
        </div>
        {/* Contact Section */}
        <div className="grid grid-cols-2 gap-3">
          
          <Link
            href="https://www.facebook.com/poraparin.phakdeephoomin/?locale=th_TH"
            target="blank"
          >
            <div className="flex items-center gap-3 pl-3 p-3 rounded-lg hover:bg-main hover:text-secon duration-200 cursor-pointer bg-[#dcdbdb]">
              <i className="fa-brands fa-facebook text-2xl"></i>
              <p>Facebook</p>
            </div>
          </Link>
          <Link href="mailto:poraparint@gmail.com">
            <div className="flex items-center gap-3 pl-3 p-3 rounded-lg hover:bg-main hover:text-secon duration-200 cursor-pointer bg-[#dcdbdb]">
              <i className="fa-regular fa-envelope text-2xl"></i> <p>Gmail</p>
            </div>
          </Link>
          <Link href="https://github.com/Poraparint" target="blank">
            <div className="flex items-center gap-3 pl-3 p-3 rounded-lg hover:bg-main hover:text-secon duration-200 cursor-pointer bg-[#dcdbdb]">
              <i className="fa-brands fa-github text-2xl"></i>
              <p>Github</p>
            </div>
          </Link>
          <Link href="https://fastwork.co/user/poraparint" target="blank">
            <div className="flex items-center gap-3 pl-3 p-3 rounded-lg hover:bg-main hover:text-secon duration-200 cursor-pointer bg-[#dcdbdb]">
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
      </div>
      {/* Avatar Section */}
      <div className=" flex flex-col w-2/6 max-xl:w-full justify-center">
        <div className="relative w-96 h-96 max-xl:w-56 max-xl:h-56 rounded-full flex self-center duration-700">
          <Image
            className="rounded-full border-4 border-main"
            src="/Profile.jpeg"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
