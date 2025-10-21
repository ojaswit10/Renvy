import React from "react";
import { background, background2 } from "../assets";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container relative">
        <div className="flex justify-center items-center top-30 z-10">
          <p>Don't Envy their trips,RENT yours !</p>
        </div>
        <div>
          <img src={background} className="opacity-6 z-0" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
