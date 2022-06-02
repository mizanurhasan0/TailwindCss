import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import JsonData from "../../Helper/JsonData";
import "./category.css";
import { Link } from "react-scroll";

const AllCategory = () => {
  return (
    <div className="w-full h-full px-8 pt-5 mb-10">
      <div className="flex h-full text-gray-600">
        {/* Side Bar */}
        <div className="  w-[225px]  md:flex flex-col px-4 pt-4">
          <h1 className=" font-semibold text-[0.8rem] md:text-[1.5rem]">
            All Category
          </h1>
          <ul className="flex flex-col  pt-6 space-y-2 text-[0.8rem] md:text-[1rem]">
            <li className="cursor-pointer hover:bg-gray-200 ">
              <Link
                to="recommended"
                activeClass="true"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Recommended
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-200">
              <Link
                to="forhome"
                activeClass="true"
                smooth={true}
                // offset={50}
                duration={500}
              >
                For Your Home
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-200">
              <Link
                to="trending"
                activeClass="true"
                smooth={true}
                // offset={50}
                duration={500}
              >
                Trending
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          {/* Start */}
          <div name="recommended" className="mt-10 md:mt-16 ">
            <h1 className="font-semibold pb-5 pt-3">Recommended</h1>
            <div className="grid-container ">
              {JsonData.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="w-[206px] max-w-[206px] h-[270px]  bg-white 
                    relative rounded-2xl shadow-xl cursor-pointer"
                  >
                    <div
                      className="absolute rounded-full bg-white w-[25px] 
                    h-[25px] flex justify-center items-center m-2"
                    >
                      <IoHeartOutline />
                    </div>
                    <img
                      className="w-full h-[200px] rounded-t-2xl "
                      src={val.image}
                      alt=""
                    />
                    <div className="mt-2 ml-2">
                      <h3 className="font-semibold">Wirless headphone</h3>
                      <div className="flex space-x-2">
                        <p>$199.00</p>
                        <p className="line-through text-gray-400">$299.00</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End */}
          {/* Start */}
          <div name="forhome" className="mt-10 md:mt-16 ">
            <h1 className="font-semibold pb-5 pt-3">For your Home</h1>
            <div className="grid-container ">
              {JsonData.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="w-[206px] max-w-[206px] h-[270px]  bg-white 
                    relative rounded-2xl shadow-xl cursor-pointer"
                  >
                    <div
                      className="absolute rounded-full bg-white w-[25px] 
                    h-[25px] flex justify-center items-center m-2"
                    >
                      <IoHeartOutline />
                    </div>
                    <img
                      className="w-full h-[200px] rounded-t-2xl "
                      src={val.image}
                      alt=""
                    />
                    <div className="mt-2 ml-2">
                      <h3 className="font-semibold">Wirless headphone</h3>
                      <div className="flex space-x-2">
                        <p>$199.00</p>
                        <p className="line-through text-gray-400">$299.00</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End */}
          {/* Start */}
          <div name="trending" className="mt-10 md:mt-16 ">
            <h1 className="font-semibold pb-5 pt-3">Trending</h1>
            <div className="grid-container ">
              {JsonData.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="w-[206px] max-w-[206px] h-[270px]  bg-white 
                    relative rounded-2xl shadow-xl cursor-pointer"
                  >
                    <div
                      className="absolute rounded-full bg-white w-[25px] 
                    h-[25px] flex justify-center items-center m-2"
                    >
                      <IoHeartOutline />
                    </div>
                    <img
                      className="w-full h-[200px] rounded-t-2xl "
                      src={val.image}
                      alt=""
                    />
                    <div className="mt-2 ml-2">
                      <h3 className="font-semibold">Wirless headphone</h3>
                      <div className="flex space-x-2">
                        <p>$199.00</p>
                        <p className="line-through text-gray-400">$299.00</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
