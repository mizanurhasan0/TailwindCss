import React from "react";
import headerImage from "../../assets/Component Img/header.jpg";

const HeaderSlide = () => {
  return (
    <div className=" bg-gray-600 w-full h-96 xl:h-[40rem] duration-500">
      <div
        style={{ backgroundImage: `url(${headerImage})` }}
        className="w-full h-full bg-cover bg-no-repeat bg-center object-fill flex"
      >
        <div className="flex-1"></div>
        <div className="w-full h-full flex-1 flex  justify-center items-center">
          <div className="bg-gray-800/75 md:space-y-2 xl:space-y-5 p-5 rounded-xl shadow-2xl duration-500">
            <h1 className="text-[#ff9a00] md:text-[1.8rem] xl:text-[4.0rem] duration-500">
              Just Call <span className="text-gray-200">(01818674298)</span>
            </h1>
            <p className="md:text-[1rem] xl:text-[2.0rem] text-gray-200 duration-500">We are always ready to service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlide;
