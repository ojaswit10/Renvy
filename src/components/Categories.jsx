import React, { useState } from 'react';
import { bikeOutline, scooterOutline, carOutline, suvOutline } from '../assets';

const vehicleCategories = [
  { id: 'scooter', name: 'Scooter', icon: scooterOutline },
  { id: 'bike', name: 'Bike', icon: bikeOutline },
  { id: 'car', name: 'Car', icon: carOutline },
  { id: 'suv', name: 'SUV', icon: suvOutline },
];

// Updated data to match the screenshot content
const vehicleData = {
  scooter: [
    {
      id: 1,
      name: 'Honda Activa 125 (BS6)',
      provider: 'royal brothers',
      price: '25/hr',
      features: ['pre-booking available'],
      isVerified: true,
    },
  ],
  bike: [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      provider: 'royal brothers',
      price: '45/hr',
      features: ['pre-booking available'],
      isVerified: true,
    },
  ],
  car: [
    {
      id: 1,
      name: 'Maruti Swift Dzire',
      provider: 'zoomcar',
      price: '85/hr',
      features: ['pre-booking available'],
      isVerified: true,
    },
  ],
  suv: [
    {
      id: 1,
      name: 'Mahindra XUV 500',
      provider: 'zoomcar',
      price: '125/hr',
      features: ['pre-booking available'],
      isVerified: true,
    },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('scooter');

  return (
    <div className="relative min-h-screen pt-20 pb-10 bg-white">
      <div className="container mx-auto relative z-10 px-5 md:px-8 lg:px-10">
        <div className="py-8 md:py-12 lg:py-16">
          
          {/* Category Icons */}
          <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
            {vehicleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer min-w-[68px] h-[68px] rounded-[14px] flex items-center justify-center border-[3px] transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#58152a] border-[#58152a]' // Used arbitrary color to match maroon
                    : 'bg-white border-gray-200'
                }`}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className={`w-[38px] h-[38px] object-contain ${
                    selectedCategory === category.id ? 'brightness-0 invert' : ''
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Vehicle Cards List */}
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            {vehicleData[selectedCategory].map((vehicle) => (
              // CARD CONTAINER
              <div
                key={vehicle.id}
                className="bg-white rounded-xl border-[1.5px] border-[#58152a] p-3 md:p-4 flex flex-col md:flex-row gap-5 shadow-sm"
              >
                
                {/* LEFT: Price Box */}
                <div className="bg-[#f3e6e8] rounded-lg min-w-[140px] flex flex-col items-center justify-center py-6 px-4">
                  <span className="text-[#58152a] text-lg font-medium mb-1">
                    Price
                  </span>
                  <div className="flex items-baseline text-[#58152a] font-bold">
                    <span className="text-sm mr-1">₹</span>
                    <span className="text-3xl">{vehicle.price}</span>
                  </div>
                </div>

                {/* RIGHT: Details Section */}
                <div className="flex-1 flex flex-col justify-center">
                  
                  {/* Top Row: Title + View More */}
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      {vehicle.name}
                    </h3>
                    <button className="text-[#58152a] text-sm md:text-base font-medium underline decoration-1 underline-offset-4 whitespace-nowrap ml-2">
                      View more
                    </button>
                  </div>

                  {/* Provider Info */}
                  <p className="text-gray-500 text-sm md:text-base mb-2">
                    Rental provider : <span className="text-black font-bold">{vehicle.provider}</span>
                  </p>

                  {/* Features (Bullet points) */}
                  <div className="mb-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-[#58152a] font-medium text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#58152a]"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Verified Badge */}
                  {vehicle.isVerified && (
                    <div className="flex items-center gap-1.5 text-[#1e5c4e] font-bold text-sm uppercase tracking-wide mt-1">
                      {/* Custom Verified SVG Icon */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-5 h-5"
                      >
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      VERIFIED
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;