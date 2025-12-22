import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { renvy } from "../assets";
import { navigation } from "./constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-wh-1 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-5 md:px-8 xl:px-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-block">
              <img src={renvy} width={106} height={48} alt="renvy" className="w-20 md:w-24 lg:w-[106px]" />
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 font-semibold">
              {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="relative flex items-center justify-center">
              {navigation.map((item) => (
                <div key={item.id}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `block relative uppercase hover:text-red-7 mx-3 xl:mx-4 py-6 font-semibold text-[0.9rem] xl:text-[1rem] transition-colors duration-300 ${
                        isActive ? "text-red-5" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.title}
                        <span
                          className={`absolute left-0 bottom-0 h-[5px] rounded-full w-full bg-red-5 transition-transform duration-300 ease-out ${
                            isActive ? "scale-x-100" : "scale-x-0"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>
          </nav>
            <a href="/signup" className="border-[2.5px] border-red-4 text-red-4 text-[0.7rem] xl:text-[0.75rem] px-4 xl:px-6 py-2.5 xl:py-3 rounded-[9px] cursor-pointer hover:bg-red-4 hover:text-wh-1 transition-all duration-300 whitespace-nowrap">
              Sign Up
            </a>
            <a href="/signin" className="border-[2.5px] border-red-4 bg-red-4 text-wh-1 text-[0.7rem] xl:text-[0.75rem] px-4 xl:px-6 py-2.5 xl:py-3 rounded-[9px] cursor-pointer hover:bg-red-5 hover:border-red-5 transition-all duration-300 whitespace-nowrap">
              Log In
            </a>
          </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-red-4 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-red-4 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-red-4 transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 bg-wh-1 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-6 py-4 uppercase font-semibold text-[0.95rem] transition-colors duration-300 ${
                  isActive
                    ? "text-red-5 bg-red-4 bg-opacity-10"
                    : "text-b-5 hover:text-red-5 hover:bg-red-4 hover:bg-opacity-5"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 px-6 mt-4 pb-4">
            <button className="border-[2.5px] border-red-4 text-red-4 text-[0.875rem] font-semibold py-3 rounded-[9px] cursor-pointer hover:bg-red-4 hover:text-wh-1 transition-all duration-300">
              Sign Up
            </button>
            <button className="border-[2.5px] border-red-4 bg-red-4 text-wh-1 text-[0.875rem] font-semibold py-3 rounded-[9px] cursor-pointer hover:bg-red-5 hover:border-red-5 transition-all duration-300">
              Log In
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
  );
};

export default Navbar;