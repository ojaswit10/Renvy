import React, { useState } from "react";
import { renvy } from "../assets";
import { navigation } from "./constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("0");

  return (
    <div className="fixed top-0 left-0 w-full bg-w-1 z-50">
      <div className="flex h-20 items-center justify-center px-10">
        <div className="w-[40%]">
          <a href="#hero" className="inline-block">
            <img src={renvy} width={106} height={48} alt="renvy" />
          </a>
        </div>
        <nav className="fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex w-[60%]">
          <div className="relative flex items-center justify-center m-auto">
            {navigation.map((item) => (
              <div>
                <a
                  href={item.url}
                  key={item.id}
                  className={`block relative uppercase hover:text-red-7 mx-3 py-6 font-semibold text-[1rem] transition-colors duration-300 ${isOpen===item.id ? "text-red-5": ""}`}
                  onClick={() => setIsOpen(item.id)}
                >
                  {item.title}
                  <span className={`absolute left-0 bottom-0 h-[5px] rounded-full bg-red-5 transition-transform duration-300 ease-out ${isOpen === item.id ? "w-full" : "hidden"}`}></span>
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 font-semibold">
            <button className="border-[2.5px] border-red-4 text-red-4 text-[0.75rem] w-32.5 py-3 rounded-[9px] cursor-pointer">
              Sign Up
            </button>
            <button className="border-[2.5px] border-red-4 bg-red-4 text-w-1 text-[0.75rem] w-32.5 py-3 rounded-[9px] cursor-pointer">
              Log In
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
