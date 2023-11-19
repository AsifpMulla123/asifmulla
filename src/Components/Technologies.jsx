import React from "react";
import { technologies } from "../constants/info";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="flex">
      {technologies.map((technology) => (
        <motion.div key={technology.icon} whileHover={{ scale: 1.2 }}>
          <img
            src={technology.icon}
            alt="skills icons"
            className="m-4 object-contain"
            width="100"
            height="150"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
