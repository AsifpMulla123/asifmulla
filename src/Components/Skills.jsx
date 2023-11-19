import React from "react";
import Marquee from "react-fast-marquee";
import Technologies from "./Technologies";
import SkillText from "./SkillText";
const Skills = () => {
  return (
    <div className="text-white mt-10 mb-10">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ml-10">
        Skills
      </h2>
      <div className="flex sm:flex-row justify-center items-center mt-10 flex-wrap">
        <Marquee direction="right">
          <SkillText />
          <SkillText />
        </Marquee>
        <Marquee>
          <Technologies />
        </Marquee>
        <Marquee direction="right">
          <SkillText />
          <SkillText />
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
