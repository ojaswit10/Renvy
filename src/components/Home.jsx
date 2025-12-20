import React from "react";
import { background, bike, car, scooter, suv } from "../assets";
import PublicTransport from "./PublicTransport";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen pt-20 pb-10 md:pb-16 lg:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background} 
          className="w-full h-full object-cover opacity-6" 
          alt="hero background" 
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 py-8 md:py-12 lg:py-16">
          
          {/* Hero Heading */}
          <div className="font-bold text-center w-full md:w-[85%] lg:w-[70%] xl:w-[60%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] tracking-[-1%] leading-[120%]">
              Don't <span className="text-red-4">Envy</span> their trips,
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] tracking-[-1%] leading-[120%] flex justify-center gap-3 md:gap-5 mt-2">
              <span className="text-red-4">RENT</span>
              <span>yours!</span>
            </h1>
          </div>

          {/* Description Text */}
          <div className="w-full md:w-[85%] lg:w-[70%] xl:w-[60%]">
            <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] tracking-[-1%] text-[#0000008A] leading-[164%] text-center">
              With Renvy, forget juggling ten tabs — we compare{" "}
              <span className="text-red-4 font-semibold">Bhubaneswar's</span> rental platforms
              for you, show <span className="text-red-4 font-semibold">verified shops</span>,
              and let you grab the ride that actually fits your trip (and your
              wallet). Find the perfect vehicle in seconds, whether it's a bike,
              scooter, or car. Say goodbye to hidden fees and last-minute
              surprises — your smooth ride starts here.
            </p>
          </div>

          {/* Section Heading */}
          <div className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] tracking-[0%] text-red-4 text-center mt-4 md:mt-6">
            <h2>What's Your Ride Today?</h2>
          </div>

          {/* Vehicle Options Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full max-w-6xl mt-6 md:mt-8">
            {/* Scooter */}
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-full aspect-square bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 group-hover:scale-105">
                <img 
                  src={scooter} 
                  alt="scooter" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-wh-2 font-semibold text-xs md:text-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 text-center group-hover:bg-red-4 group-hover:text-white transition-all duration-300">
                Scooter
              </div>
            </div>

            {/* Bike */}
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-full aspect-square bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 group-hover:scale-105">
                <img 
                  src={bike} 
                  alt="bike" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-wh-2 font-semibold text-xs md:text-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 text-center group-hover:bg-red-4 group-hover:text-white transition-all duration-300">
                Bikes
              </div>
            </div>

            {/* Car */}
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-full aspect-square bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 group-hover:scale-105">
                <img 
                  src={car} 
                  alt="car" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-wh-2 font-semibold text-xs md:text-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 text-center group-hover:bg-red-4 group-hover:text-white transition-all duration-300">
                Cars
              </div>
            </div>

            {/* SUV */}
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-full aspect-square bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 group-hover:scale-105">
                <img 
                  src={suv} 
                  alt="suvs" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-wh-2 font-semibold text-xs md:text-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 text-center group-hover:bg-red-4 group-hover:text-white transition-all duration-300">
                SUVs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;