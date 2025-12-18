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
        </div>
        <div>
          <img src={background2} alt="public" className="opacity-6 z-0" />
        </div>
      </div>
    </div>
  );
};

export default PublicTransport;
