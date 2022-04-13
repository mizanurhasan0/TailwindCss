import React, { useState } from "react";
import Cus_Button from "./Cus_Button";
import Navbar2 from "./Navbar2";

const Navbar1 = () => {
    const [open,setOpen]=useState(true);

    const dropDown=()=>{
        setOpen(!open);
    }
  return (
    <div className="w-full h-screen mt-4 text-gray-200 relative">
      <div className="w-full h-16 bg-gray-800 flex items-center justify-between px-4">
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
           text-yellow-500"
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
            className={`absolute left-0 right-0 bg-gray-800 
          h-[50%] space-y-10 transform 
          ${open?'translate-x-full ':'translate-x-0 duration-300'} md:translate-x-0
           text-center pt-11 md:relative md:flex 
           md:p-0 md:m-0 md:justify-center md:items-center 
           md:space-y-0 hover:text-white` }
          >
            <li>Home</li>
            <li>All Services</li>
            <li>About Us</li>
            <li>Teams</li>
            <li>
              <Cus_Button>Login</Cus_Button>
            </li>
          </ul>
        </nav>
      </div>

 
    </div>
  );
};

export default Navbar1;
