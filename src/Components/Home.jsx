import React, { useEffect } from "react";
import { Bio } from "../constants/info";
import TypeWriter from "typewriter-effect";
import Hero from "../assets/Hero.webp";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.div className="pt-20 grid grid-cols-1 md:grid-cols-2" id="about">
      <div className="pl-6 pt-10 pr-4 pb-4">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Hey It's
        </p>
        <h2 className="font-bold text-5xl text-white">Asif Mulla</h2>
        <p className="text-white text-2xl">
          I am a{" "}
          <span className="text-green-500 font-extrabold text-xl inline-block">
            <TypeWriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p
          className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4"
          data-aos="fade-up"
        >
          {Bio.description}
        </p>
        <button className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-slate-600 p-4 rounded-3xl mt-4 text-white cursor-pointer hover:opacity-90 shadow-2xl">
          <a href={Bio.resume} download>
            Download Resume
          </a>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Hero}
          alt="hero image"
          className="rounded-[50%] object-contain"
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
};

export default Home;
