import React, { useEffect } from "react";
import BikeCategoryData from "../../Helper/BikeCategoryData";
import { IoArrowForwardOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export const BikeViews = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full  px-10 text-black mt-10 flex flex-col">
      {BikeCategoryData.map((items, key) => {
        return (
          <div key={key} className="h-60 w-full ">
            <h1
              className="bg-gray-700 text-center 
            text-white p-1 uppercase  text-2xl
            tracking-tighter rounded-md"
            >
              Crusier
            </h1>
            <div className=" flex items-center justify-center space-x-10">
              {items.cruiser.map((val, i) => {
                return (
                  <div
                    data-aos="fade-up"
                    key={i}
                    className="w-80 md:w-[35rem] mt-10 cursor-pointer relative"
                  >
                    <div className="text-center">
                      <h1 className="uppercase tracking-tighter text-gray-500 font-bold">
                        {val.name}
                      </h1>

                      <img className="" src={val.images[0].bike1} alt="" />

                      <div className="group w-full flex justify-center">
                        <button
                          className="border-2 px-2 m-1 rounded-md flex items-center
                         space-x-1"
                        >
                          <span>Explore</span>
                          <IoArrowForwardOutline
                            className="text-red-600 
                          group-hover:translate-x-1 duration-500 "
                          />
                        </button>
                      </div>

                      <p className="text-red-600">MRP BDT {val.price}/-</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* end */}
            <h1
              className="bg-gray-700 text-center 
            text-white p-1 mt-10 uppercase  text-2xl
            tracking-tighter rounded-md"
            >
              sports
            </h1>
            <div className=" flex items-center justify-center space-x-10">
              {items.sports.map((val, i) => {
                return (
                  <div
                    data-aos="fade-left"
                    key={i}
                    className="w-80 md:w-[35rem] mt-10 cursor-pointer relative"
                  >
                    <div className="text-center">
                      <h1 className="uppercase tracking-tighter text-gray-500 font-bold">
                        {val.name}
                      </h1>

                      <img className="" src={val.images[0].bike1} alt="" />

                      <div className="group w-full flex justify-center">
                        <button
                          className="border-2 px-2 m-1 rounded-md flex items-center
                         space-x-1"
                        >
                          <span>Explore</span>
                          <IoArrowForwardOutline
                            className="text-red-600 
                          group-hover:translate-x-1 duration-500 "
                          />
                        </button>
                      </div>

                      <p className="text-red-600">MRP BDT {val.price}/-</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* end */}
            <h1
              className="bg-gray-700 text-center 
            text-white p-1 mt-10 uppercase  text-2xl
            tracking-tighter rounded-md"
            >
              Super Sports
            </h1>
            <div className=" flex items-center justify-center space-x-10">
              {items.supersports.map((val, i) => {
                return (
                  <div
                    data-aos="fade-right"
                    key={i}
                    className="w-80 md:w-[35rem] mt-10 cursor-pointer relative"
                  >
                    <div className="text-center">
                      <h1 className="uppercase tracking-tighter text-gray-500 font-bold">
                        {val.name}
                      </h1>

                      <img className="" src={val.images[0].bike1} alt="" />

                      <div className="group w-full flex justify-center">
                        <button
                          className="border-2 px-2 m-1 rounded-md flex items-center
                         space-x-1"
                        >
                          <span>Explore</span>
                          <IoArrowForwardOutline
                            className="text-red-600 
                          group-hover:translate-x-1 duration-500 "
                          />
                        </button>
                      </div>

                      <p className="text-red-600">MRP BDT {val.price}/-</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*  */}
            <h1
              className="bg-gray-700 text-center 
            text-white p-1 mt-10 uppercase  text-2xl
            tracking-tighter rounded-md"
            >
              Scooter
            </h1>
            <div className=" flex items-center justify-center space-x-10">
              {items.scooter.map((val, i) => {
                return (
                  <div
                    data-aos="fade-zoom-in"
                    key={i}
                    className="w-80 md:w-[35rem] mt-10 cursor-pointer relative"
                  >
                    <div className="text-center">
                      <h1 className="uppercase tracking-tighter text-gray-500 font-bold">
                        {val.name}
                      </h1>

                      <img className="" src={val.images[0].bike1} alt="" />

                      <div className="group w-full flex justify-center">
                        <button
                          className="border-2 px-2 m-1 rounded-md flex items-center
                         space-x-1"
                        >
                          <span>Explore</span>
                          <IoArrowForwardOutline
                            className="text-red-600 
                          group-hover:translate-x-1 duration-500 "
                          />
                        </button>
                      </div>

                      <p className="text-red-600">MRP BDT {val.price}/-</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*  */}
            <h1
              className="bg-gray-700 text-center 
            text-white p-1 mt-10 uppercase  text-2xl
            tracking-tighter rounded-md"
            >
              commuter
            </h1>
            <div className=" flex items-center justify-center space-x-10">
              {items.commuter.map((val, i) => {
                return (
                  <div
                    data-aos="flip-left"
                    key={i}
                    className="w-80 md:w-[35rem] mt-10 cursor-pointer relative"
                  >
                    <div className="text-center">
                      <h1 className="uppercase tracking-tighter text-gray-500 font-bold">
                        {val.name}
                      </h1>

                      <img className="" src={val.images[0].bike1} alt="" />

                      <div className="group w-full flex justify-center">
                        <button
                          className="border-2 px-2 m-1 rounded-md flex items-center
                         space-x-1"
                        >
                          <span>Explore</span>
                          <IoArrowForwardOutline
                            className="text-red-600 
                          group-hover:translate-x-1 duration-500 "
                          />
                        </button>
                      </div>

                      <p className="text-red-600">MRP BDT {val.price}/-</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          // -------1st End..................
        );
      })}
    </div>
  );
};
