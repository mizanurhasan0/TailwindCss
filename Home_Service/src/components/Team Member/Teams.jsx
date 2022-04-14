import React from "react";
import PersonInfo from "../../Helper/PersonInfo";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoStorefrontSharp,
} from "react-icons/io5";
const Teams = () => {
  return (
    <div className="w-full h-full p-8 bg-gray-200 flex flex-col ">
      <div className="w-full h-72 bg-[#FF9A00] ">
        <div className="w-full h-full flex flex-col items-center text-gray-200 p-5">
          <IoStorefrontSharp  className="text-4xl "/>
          <h1 className="text-4xl p-3">Our Team</h1>
          <p className="text-center text-gray-100">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>
      </div>
      <div
        className=" text-center items-center
         grid  grid-rows-2 grid-cols-2   xl:grid-rows-1 md:grid-cols-3 
       xl:grid-cols-4 justify-center  mt-4 gap-3 "
      >
        {PersonInfo.map((val, key) => {
          return (
            <div
              key={key}
              className="min-w-[206px] h-[370px] bg-white  
              rounded-md shadow-xl cursor-pointer flex flex-col "
            >
              <img
                className="w-full min-h-[200px]  p-3 rounded-2xl object-center"
                src={val.image}
                alt=""
              />
              <div className="mt-1 ml-2   text-center">
                <p className="text-gray-300 text-sm">{val.jobTitle}</p>
                <h3 className="font-semibold pb-1 text-[#ff9a00]">
                  {val.name}
                </h3>
                <p className="h-[5.8rem] text-sm text-gray-500">
                  {val.descrtiption}
                </p>
                <div className="flex justify-center space-x-5 text-[#ff9a00] pb-3">
                  <IoLogoFacebook />
                  <IoLogoTwitter />
                  <IoLogoInstagram />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
