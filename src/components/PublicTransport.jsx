import React from "react";
import { background2 } from "../assets";

const PublicTransport = () => {
  return (
    <div id="public">
      <div className="container relative top-20 mx-[5rem]">
        <div className="font-semibold text-[3rem] mt-3">
          <h1>
            Need a <span className="text-g-4">Public</span> Ride ?
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full md:w-[40%] border rounded-lg p-4 shadow-sm">
            {/* Content for Route 9 */}
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[40%] border rounded-lg p-4 shadow-sm">
            {/* Content for Route 33 */}
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[40%] border rounded-lg p-4 shadow-sm">
            {/* Content for Route 34 */}
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-[40%] border rounded-lg p-4 shadow-sm">
            {/* Content for Route 50 */}
          </div>
        </div>
      </div>
      <img src={background2} alt="public" className="opacity-6 z-0" />
    </div>
  );
};

export default PublicTransport;
