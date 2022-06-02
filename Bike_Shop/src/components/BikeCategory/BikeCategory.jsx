import React from "react";
import BikeData from "../../Helper/BikeData";
import { IoEyeSharp } from "react-icons/io5";

export const BikeCategory = () => {
  return (
    <div className="w-full flex flex-col h-auto">
      <div className="w-full text-center uppercase py-7">
        <p className="text-xl text-gray-600">Discover The</p>
        <h1 className="font-semibold text-4xl tracking-tighter">
          SUZUKI RANGE
        </h1>
      </div>
      <div className="w-full h-full px-10">
        <div className="grid grid-cols-2 gap-10">
          {BikeData.map((val, key) => {
            return (
              <div
                className="group w-full h-96 bg-contain  bg-no-repeat
                 bg-center relative
                 cursor-pointer "
                key={key}
                style={{ backgroundImage: `url(${val.image})` }}
              >
                <h1
                  className="absolute bottom-2 text-4xl font-semibold 
                w-full text-center uppercase bg-gray-300/50 py-2 rounded-tl-full rounded-br-full"
                >
                  {val.title}
                </h1>
                <IoEyeSharp className="text-2xl absolute right-4 text-red-200 group-hover:text-red-600" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
