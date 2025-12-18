import React from "react";
import { background2 } from "../assets";
import { publicRoutes } from "./constants";

const PublicTransport = () => {
  return (
    <div id="public">
      <div className="container relative">
        <div className="absolute top-20 mx-[4rem] z-10">
          <div className="font-semibold text-[3rem] mt-3">
            <h1>
              Need a <span className="text-g-4">Public</span> Ride ?
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {publicRoutes.map((route) => (
              <div key={route.id} className="flex w-[40%]">
                <div className="flex flex-col">
                  <h1>ROUTE</h1>
                  <div>{route.no}</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div>{route.from}</div>
                    <div>arrow</div>
                    <div>{route.to}</div>
                  </div>
                  <div>{route.description}</div>
                  <div>{route.frequency}</div>
                  <div className="flex">
                    <div>{route.fare}</div>
                    <div>Mo bus button</div>
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
