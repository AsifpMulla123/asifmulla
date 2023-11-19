import React, { useEffect } from "react";
import { services } from "../constants/info";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div className="text-white mt-4 ml-10 mr-10" data-aos="fade-up">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Services
      </h2>
      <div className="flex flex-col flex-1 justify-center items-center mt-4 gap-10 sm:flex-row">
        {services.map((service) => (
          <Tilt
            options={defaultOptions}
            key={service.title}
            className="h-64 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border green-pink-gradient w-60"
          >
            <div className="flex justify-center items-center flex-wrap">
              <img src={service.icon} alt="service icon" className="w-32 m-8" />
            </div>
            <h2 className="text-center text-xl font-bold">{service.title}</h2>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Services;
