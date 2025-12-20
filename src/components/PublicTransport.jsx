import React from "react";
import { arrow, background2 } from "../assets";
import { publicRoutes } from "./constants";

const PublicTransport = () => {
  return (
    <div id="public-transport">
      <div className="container relative">
        <div className="absolute top-20 mx-[4rem] z-10">
          <div className="font-semibold text-[3rem] mt-3">
            <h1>
              Need a <span className="text-g-4">Public</span> Ride ?
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {publicRoutes.map((route) => (
              <div
                key={route.id}
                className="flex w-[40%] border-3 border-g-4 rounded-[9px] justify-around p-4"
              >
                <div className="flex flex-col text-g-3 font-bold justify-around pb-3">
                  <h1 className="text-3xl">ROUTE</h1>
                  <div className="text-7xl text-center">{route.no}</div>
                </div>

                <div className="flex flex-col w-[70%] justify-evenly text-sm">
                  <div className="flex justify-between p-1">
                    <div className="bg-wh-8 rounded-2xl w-[45%] flex justify-center items-center text-center font-medium p-2">
                      {route.from}
                    </div>

                    <div className="flex justify-center items-center">
                      <img src={arrow} alt="arrow" />
                    </div>

                    <div className="bg-g-3 rounded-2xl w-[45%] flex justify-center items-center text-center text-wh-1 font-medium p-2">
                      {route.to}
                    </div>
                  </div>

                  <div className="p-1 text-center font-medium opacity-75">
                    {route.description}
                  </div>

                  <div className="p-1 font-semibold text-center text-red-4">
                    {route.frequency}
                  </div>

                  <div className="flex justify-around p-1">
                    <div className="flex flex-col items-center justify-around w-[20%] bg-wh-8 rounded-xl text-g-3">
                      <span className="uppercase font-medium">Fare</span>
                      <span className="font-semibold ">
                        <span className="align-text-top text-[10px] font-medium">₹</span>{" "}
                        <span>{route.fare}</span>
                      </span>
                    </div>
                    <div className="w-[70%] flex justify-center items-center bg-g-3 rounded-xl text-wh-1">
                      MO BUS
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={background2} alt="public" className="opacity-6 z-0" />
        </div>
      </div>
    </div>
  );
};

export default PublicTransport;
