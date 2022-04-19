import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom";
import bikelogo from "../../assets/Component Img/bikelogo.png";
import "./navbar.css";

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
    <div
      className={`${
        scrollValue ? "bg-[#000000d7]" : "fixed top-0 bg-gray-900"
      }  w-full h-16  flex items-center justify-between px-8 text-white shadow-md z-50`}
    >
      <a href="/" className="flex items-center space-x-1">
        <img src={bikelogo} alt="" className="h-10" />
        <span
          className="uppercase text-2xl font-semibold
           text-white"
        >
          Software-<b className="text-red-500 ">BD</b>
        </span>
      </a>
      <nav className="navbar">
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
          className={`fixed left-0 right-0  h-screen uppercase
          md:h-full space-y-10 transform  space-x-6
          ${
            mobileNavOpen
              ? "translate-x-full "
              : "translate-x-0 duration-300 bg-gray-800"
          } md:translate-x-0
           text-center pt-11 md:relative md:flex 
           md:p-0 md:m-0 md:justify-center md:items-center 
           md:space-y-0 hover:text-white`}
        >
          <li className=" cursor-pointer ">
            <NavLink to="/" className="relative">
              Home
            </NavLink>
          </li>

          <li className=" cursor-pointer ">
            <NavLink to="/about" className="relative">
              Bikes
            </NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/team" className="relative">
              Services
            </NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/team" className="relative">
              Offers
            </NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/team" className="relative">
              News
            </NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/team" className="relative">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar1;
