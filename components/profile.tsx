import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactTarget } from "@/ui/shared";


export const Profile = () => {
  return (
    <div className="w-full flex py-10 pr-5 max-xl:flex-col-reverse gap-8">
      <div className="flex flex-col gap-9 w-4/6 max-lg:text-base duration-700 max-xl:w-full my-5">
        {/* Content Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">PORAPARINT PKAKDEEPHUMMIN</h1>
          <p className="mt-2">
            I am seeking internship opportunities to gain experience as a
            Fullstack Developer, Project Manager, or in other software-related
            fields.
          </p>
        </div>
        {/* Contact Section */}
        <div className="grid grid-cols-2 gap-3">
          <ContactTarget
            target="https://www.facebook.com/poraparin.phakdeephoomin/?locale=th_TH"
            icon="fa-brands fa-facebook"
            text="Facebook"
          />
          <ContactTarget
            target="mailto:poraparint@gmail.com"
            icon="fa-regular fa-envelope"
            text="Gmail"
          />
          <ContactTarget
            target="https://github.com/Poraparint"
            icon="fa-brands fa-github"
            text="Github"
          />
          <ContactTarget
            target="https://www.linkedin.com/in/poraparint-p-2a92a6347"
            icon="fa-brands fa-linkedin"
            text="Linkedin"
          />
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
};
