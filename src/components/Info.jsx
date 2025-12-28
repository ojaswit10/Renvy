import React from 'react';
import { car } from '../assets';

const Info = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-10 bg-[#3F857717]">
      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-5 md:px-8 lg:px-10">
        <div className="py-8 md:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Image */}
            <div className="flex-1 bg-wh-1 rounded-[20px] p-8 md:p-12 flex items-center justify-center">
              <img 
                src={car} 
                alt="Baleno Maruti Suzuki" 
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* Right Side - Details */}
            <div className="flex-1 flex flex-col">
              {/* Provider */}
              <div className="text-[14px] font-semibold mb-2">
                uber
              </div>

              {/* Vehicle Name */}
              <h1 className="text-[32px] font-bold mb-3">
                Baleno Maruti Suzuki
              </h1>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-g-4 rounded-full flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold">VERIFIED</span>
                </div>
              </div>

              {/* Pre-bookings */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-2 h-2 bg-red-4 rounded-full"></div>
                <span className="text-[12px] font-medium text-red-4">pre-bookings available</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[36px] font-bold">₹ 200/hr</span>
                <span className="text-[14px] text-[#00000099]">Fits 5 adults</span>
              </div>

              {/* Model Section */}
              <div className="mb-6">
                <div className="text-[14px] font-semibold mb-3">Model</div>
                <div className="inline-block border-[2px] rounded-[12px] p-3 bg-wh-1">
                  <img 
                    src={car} 
                    alt="model" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-[12px] text-[#00000099] mt-2">
                  Baleno maruti suzuki
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-6">
                <div className="text-[14px] font-semibold mb-2">Contact</div>
                <div className="text-[12px] text-[#00000099] leading-relaxed">
                  to check for availability and booking details contact the rental provider
                </div>
              </div>

              {/* Contact Button */}
              <button className="bg-g-4 text-wh-1 rounded-full py-3 px-6 font-semibold text-[14px] flex items-center justify-between max-w-[200px] hover:bg-g-5 transition-colors duration-300">
                <span>uber</span>
                <div className="w-6 h-6 bg-wh-1 rounded-full flex items-center justify-center ml-auto">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#3F8577" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              {/* Disclaimer */}
              <div className="mt-auto pt-8">
                <div className="flex gap-2 items-start text-[10px]">
                  <div className="w-4 h-4 flex-shrink-0 border border-[#00000099] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-[8px]">i</span>
                  </div>
                  <p className="leading-relaxed">
                    Prices and details are sourced from third-party platforms and may vary. Please check the provider's site for the latest updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;