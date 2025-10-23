import React from "react";
import { background, background2 } from "../assets";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container relative">
        <div className="absolute flex flex-col justify-center items-center gap-10 top-[8rem] z-10">
          <div className="font-bold text-[5rem] w-[60%] tracking-[-1%] leading-[120%]">
            <h1>
              Don't <span className="text-red-4">Envy</span> their trips,
            </h1>
            <h1 className="flex justify-center gap-5">
              <span className="text-red-4 after:content-['_']">RENT</span>yours
              !
            </h1>
          </div>
          <div className="w-[60%]">
            <p className="font-medium text-[1.25rem] tracking-[-1%] text-[#0000008A] leading-[164%]">
              With Renvy, forget juggling ten tabs — we compare <span className="text-red-4">Bhubaneswar’s</span> rental platforms for you, show <span className="text-red-4">verified shops</span>, and let you grab the ride that actuall fits your trip (and your wallet). Find the perfect vehicle in seconds, whether it’s a bike, scooter, or car. Say goodbye to hidden fees and last-minute surprises — your smooth ride starts here.
            </p>
          </div>
          <div className="font-semibold text-[2.25rem] tracking-[0%] text-red-4">
            <h2>What’s Your Ride Today ?</h2>
          </div>
          <div className="flex">
            
          </div>
        </div>
        <div>
          <img src={background} className="opacity-6 z-0" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
