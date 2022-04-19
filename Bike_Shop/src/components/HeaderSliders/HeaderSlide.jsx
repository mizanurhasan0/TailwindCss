import React from "react";
import headerImage from "../../assets/Component Img/header.jpg";

const HeaderSlide = () => {
  return (
    <div className=" bg-gray-600 w-full h-96 xl:h-[45rem] duration-500">
      <div
        style={{ backgroundImage: `url(${headerImage})` }}
        className="w-full h-full bg-cover bg-no-repeat bg-center object-fill flex"
      >
        <div className="w-full h-full flex-1 flex  justify-center items-center mx-2 flex-col">
          <div className="bg-gray-800/40 md:space-y-2 xl:space-y-5 p-5 rounded-xl shadow-2xl duration-500">
            <h1 className="text-white font-semibold md:text-[1.3rem] xl:text-[4.0rem] duration-500">
              Be a part of the movers generation
            </h1>
            <p className="md:text-[0.9rem] xl:text-[2.0rem] text-gray-200 duration-500">
              Bikes are now at attractive prices.
            </p>
          </div>
          <button
            className="text-white mt-3  xl:mt-7 border-2 border-[#666666]  uppercase 
          font-semibold md:text-xl xl:text-4xl px-5 py-1 rounded-md
          hover:bg-[#0000007a] hover:border-white duration-500"
          >
            Explor Now
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HeaderSlide;
