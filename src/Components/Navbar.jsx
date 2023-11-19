import React, { useState } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants/info";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-slate-600 border w-full h-16 flex justify-between items-center fixed z-10">
      <h2 className="text-white font-bold text-xl pl-6">
        Asif <span className="hidden sm:inline-block">Mulla</span>
      </h2>
      <div className="pr-10 text-secondary">
        <ul className="hidden sm:flex gap-20">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white underline"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pr-4 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="absolute right-0 text-secondary top-16 bg-slate-700 w-80 h-[91vh] sm:hidden">
          <ul className="text-secondary p-20">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer mt-10`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;