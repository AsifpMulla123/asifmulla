import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyright,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Bio } from "../constants/info";
const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-10 text-white  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-slate-600 font-medium
    "
    >
      <h2 className="mt-4">Asif Mulla</h2>
      <div className=" flex gap-4 mt-2">
        <p className="cursor-pointer hover:text-blue-800">
          <a href={Bio.linkedin} alt="linkdeIn">
            <AiFillLinkedin className="w-7 h-7" />
          </a>
        </p>
        <p className="cursor-pointer hover:text-black hover:bg-white hover:rounded-full">
          <a href={Bio.github} alt="github">
            <AiFillGithub className="w-7 h-7" />
          </a>
        </p>
        <p className="cursor-pointer hover:text-blue-800">
          <a href={Bio.discord} alt="discord">
            <FaDiscord className="w-7 h-7" />
          </a>
        </p>
      </div>
      <div className="mt-5">
        <p className="text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] xs:text-[15px] text-[16px] lg:leading-[30px]">
          copyright 2023 <AiOutlineCopyright className="inline" />
          AsifMulla.com
        </p>
        <p className="text-center text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[12px] xs:text-[20px] text-[16px] lg:leading-[30px]">
          All rights are reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;