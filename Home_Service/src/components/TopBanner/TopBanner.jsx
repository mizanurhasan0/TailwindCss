import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full h-20 bg-gray-100  flex">
      <div className="w-full flex justify-between items-center px-8">
        <h1 className="uppercase text-[#ff9a00] font-semibold
         md:text-2xl tracking-tighter duration-700">
          Maintenance <span className="text-gray-700 ">Services</span>
        </h1>
        <div>
          <div className="flex space-x-4">
            {/* 1st  */}
            <div className="flex justify-center items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-10 md:w-10 text-[#ff9a00] duration-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="leading-tight duration-700">
                <h4 className="text-[0.7rem] md:text-sm font-semibold  duration-700">01818674298</h4>
                <span className="text-[0.7rem] md:text-sm text-gray-400 lowercase duration-700">
                  info@domain.com
                </span>
              </div>
            </div>
            {/* End 1 */}
            {/* 2st  */}
            <div className="flex justify-center items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-10 md:w-10 text-[#ff9a00] duration-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <div className="leading-tight">
                <h4 className="text-[0.7rem] md:text-sm font-semibold  duration-700">Dhanmondi 27</h4>
                <span className="text-[0.7rem] md:text-sm text-gray-400 duration-700">
                  Dhaka - 1209
                </span>
              </div>
            </div>
            {/* End 2 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
