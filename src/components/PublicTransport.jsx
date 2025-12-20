import React from "react";
import { arrow, background2 } from "../assets";
import { publicRoutes } from "./constants";

const PublicTransport = () => {
  return (
    <div
      id="public-transport"
      className="relative min-h-screen pt-20 pb-10 md:pb-16 lg:pb-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={background2}
          alt="public transport background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-5 md:px-8 lg:px-10">
        <div className="py-8 md:py-12 lg:py-16">
          {/* Heading */}
          <div className="font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3rem] mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <h1>
              Need a <span className="text-g-4">Public</span> Ride?
            </h1>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
            {publicRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>

          {/* View More Link */}
          <div className="mt-8 md:mt-10 text-center">
            <button className="text-sm md:text-base text-b-5 hover:text-g-4 underline transition-colors duration-300">
              Couldn't find your ideal route?{" "}
              <span className="font-semibold">View more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RouteCard = ({ route }) => {
  return (
    <div className="flex border-3 border-g-4 rounded-[9px] p-3 md:p-4 lg:p-5 bg-wh-1 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Route Number Section */}
      <div className="flex flex-col text-g-3 font-bold justify-around pb-2 md:pb-3 pr-3 md:pr-4 lg:pr-6 min-w-[80px] md:min-w-[90px] lg:min-w-[120px]">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase">
          Route
        </h2>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-1 md:mt-2">
          {route.no}
        </div>
      </div>

      {/* Route Details Section */}
      <div className="flex flex-col flex-1 justify-evenly gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm">
        {/* From/To Section */}
        <div className="flex items-center justify-between gap-1.5 md:gap-2">
          <div className="bg-wh-8 rounded-xl md:rounded-2xl flex-1 flex justify-center items-center text-center font-medium p-1.5 md:p-2 lg:p-2.5">
            <span className="line-clamp-2 text-[10px] md:text-xs lg:text-sm">
              {route.from}
            </span>
          </div>

          <div className="flex-shrink-0 px-0.5 md:px-1">
            <img
              src={arrow}
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            />
          </div>

          <div className="bg-g-3 rounded-xl md:rounded-2xl flex-1 flex justify-center items-center text-center text-wh-1 font-medium p-1.5 md:p-2 lg:p-2.5">
            <span className="line-clamp-2 text-[10px] md:text-xs lg:text-sm">
              {route.to}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="text-center font-medium opacity-75 leading-relaxed text-[10px] md:text-xs lg:text-sm">
          <p className="line-clamp-3">{route.description}</p>
        </div>

        {/* Frequency */}
        <div className="font-semibold text-center text-red-4 text-[10px] md:text-xs lg:text-sm">
          {route.frequency}
        </div>

        {/* Fare and Bus Type */}
        <div className="flex items-center justify-between gap-2 md:gap-3">
          <div className="flex flex-col items-center justify-center bg-wh-8 rounded-xl text-g-3 py-1.5 md:py-2 px-2 md:px-3 lg:px-4 min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
            <span className="uppercase font-medium text-[9px] md:text-[10px] lg:text-xs">
              Fare
            </span>
            <span className="font-semibold text-xs md:text-sm lg:text-base mt-0.5">
              <span className="align-text-top text-[8px] md:text-[9px] lg:text-[10px] font-medium">
                ₹
              </span>
              <span className="ml-0.5">{route.fare}</span>
            </span>
          </div>

          <div className="flex-1 flex justify-center items-center bg-g-3 rounded-xl text-wh-1 font-semibold py-1.5 md:py-2 px-3 md:px-4 text-xs md:text-sm lg:text-base">
            MO BUS
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicTransport;
