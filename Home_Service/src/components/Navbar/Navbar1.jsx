import React, { useState } from "react";
import Cus_Button from "./Cus_Button";

const Navbar1 = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(true);
  const [scrollValue, setScrollValue] = useState(true);
  const dropDown = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  const scrollingValue = () => {
    if (window.scrollY < 80) {
      setScrollValue(true);
    } else {
      setScrollValue(false);
    }
  };
  window.addEventListener("scroll", scrollingValue);
  return (
    <div className={`${scrollValue?"bg-[#0000009a]":"fixed top-0 bg-gray-800"}  w-full h-16  flex items-center justify-between px-8 text-gray-200 shadow-md z-50`}>

      <a href="/" className="flex items-center space-x-1">
        <img
          src={
            "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          }
          alt=""
          className="h-10"
        />
        <span
          className="uppercase font-semibold
           text-[#ff9a00]"
        >
          Software-<b className="text-gray-200">BD</b>
        </span>
      </a>
      <nav>
        <button className="md:hidden" onClick={dropDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`absolute left-0 right-0  h-screen
          md:h-full space-y-10 transform  space-x-6
          ${
            mobileNavOpen ? "translate-x-full " : "translate-x-0 duration-300 bg-gray-800"
          } md:translate-x-0
           text-center pt-11 md:relative md:flex 
           md:p-0 md:m-0 md:justify-center md:items-center 
           md:space-y-0 hover:text-white`}
        >
          <li className=" cursor-pointer hover:underline">Home</li>
          <li className=" cursor-pointer hover:underline">All Services</li>
          <li className=" cursor-pointer hover:underline">About Us</li>
          <li className=" cursor-pointer hover:underline">Teams</li>
          <li className=" cursor-pointer hover:underline">
            <Cus_Button>Login</Cus_Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar1;
