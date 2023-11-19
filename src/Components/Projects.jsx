import React, { useEffect } from "react";
import { projects } from "../constants/info";
import { github } from "../constants/index";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div
      data-aos="fade-up"
      className="text-white flex justify-center flex-col  mb-10"
      id="work"
    >
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ml-10">
        MY WORK
      </p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ml-10">
        Projects.
      </h3>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 mt-4">
        {projects.map((project) => (
          <div
            key={project.source_code_link}
            className="flex flex-col justify-center items-center flex-wrap flex-1"
          >
            <Tilt
              options={defaultOptions}
              key={project.name}
              className="h-full w-80 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-slate-600 border"
            >
              <div className="absolute bg-black rounded-full h-6 w-6 z-20 right-3 top-3">
                <a href={project.source_code_link} className="absolute">
                  <img
                    src={github}
                    alt="github"
                    className="w-20 rounded-full"
                  />
                </a>
              </div>
              <img
                src={project.image}
                alt="project images"
                className="rounded-t-2xl"
              />
              <h2 className="text-center mt-4">{project.name}</h2>
              <p className="p-4 text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] xs:text-[18px] text-[16px] lg:leading-[25px] text-justify">
                {project.description}
              </p>
              {project.tags.map((tag) => (
                <div
                  key={tag.color + "" + tag.name}
                  className="bg-slate-700 rounded-2xl text-xs p-1 inline-flex flex-1 flex-wrap ml-4 mt-1 mb-4"
                >
                  <p className={`${tag.color} p-1 uppercase`}>#{tag.name}</p>
                </div>
              ))}
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;