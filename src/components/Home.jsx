import React from "react";
import { background, bike, car, scooter, suv } from "../assets";

const Hero = () => {
  return (
    <div id="hero" >
      <div className="container relative">
        <div className="absolute flex flex-col w-[100vw] items-center gap-10 top-[8rem]">
          <div className="font-bold text-[5rem] flex justify-center tracking-[-1%] leading-[120%]">
            <div>
              <h1>
                Don't <span className="text-red-4">Envy</span> their trips,
              </h1>
              <div className="flex justify-center w-full">
                <h1>
                  <span className="text-red-4 after:content-['_']">RENT</span>yours
                  !
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[60%]">
            <p className="font-medium text-[1.25rem] tracking-[-1%] text-[#0000008A] leading-[164%]">
              With Renvy, forget juggling ten tabs — we compare{" "}
              <span className="text-red-4">Bhubaneswar’s</span> rental platforms
              for you, show <span className="text-red-4">verified shops</span>,
              and let you grab the ride that actuall fits your trip (and your
              wallet). Find the perfect vehicle in seconds, whether it’s a bike,
              scooter, or car. Say goodbye to hidden fees and last-minute
              surprises — your smooth ride starts here.
            </p>
          </div>
          <div className="font-semibold text-[2.25rem] tracking-[0%] text-red-4">
            <h2>What’s Your Ride Today ?</h2>
          </div>
          <div className="flex z-10 items-baseline w-full justify-around px-10">
            <div className="flex flex-col gap-3">
              <img src={scooter} alt="scooter" />
              <div className="bg-w-2 font-semibold text-[0.75rem] rounded-full w-[40%] mx-auto text-center">
                Scooter
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src={bike} alt="bike" />
              <div className="bg-w-2 font-semibold text-[0.75rem] rounded-full w-[40%] mx-auto text-center">
                Bikes
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src={car} alt="car" />
              <div className="bg-w-2 font-semibold text-[0.75rem] rounded-full w-[40%] mx-auto text-center">
                Cars
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src={suv} alt="suvs" />
              <div className="bg-w-2 font-semibold text-[0.75rem] rounded-full w-[40%] mx-auto text-center">
                SUVs
              </div>
            </div>
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
