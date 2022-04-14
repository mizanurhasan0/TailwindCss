import React from "react";
import { IoLogoFacebook, IoLogoYoutube, IoMailOpen } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="w-full px-14 bg-gray-700 h-auto text-gray-200 flex justify-between p-5" >
      <div className="space-y-4">
        <h1 className="font-semibold uppercase">Software-BD</h1>

        <ul className="xl:flex xl:space-x-4">
          <li className=" cursor-pointer hover:underline">Home</li>
          <li className=" cursor-pointer hover:underline">All Services</li>
          <li className=" cursor-pointer hover:underline">About Us</li>
          <li className=" cursor-pointer hover:underline">Teams</li>
        </ul>
      </div>
      <div className="mt-8">
        <ul className="xl:flex space-x-4">
          <li className=" cursor-pointer hover:underline">Promotional</li>
          <li className=" cursor-pointer hover:underline">Partners</li>
          <li className=" cursor-pointer hover:underline">Careers</li>
          <li className=" cursor-pointer hover:underline">FAQs</li>
        </ul>
      </div>
      <div className="xl:space-x-4 mt-8 xl:flex xl:m-0 xl:p-0 xl:space-y-0 space-y-2">
        <a href="/" className="group flex items-center">
          <IoLogoFacebook className=" text-xl mr-2 group-hover:text-blue-600"/>
          Facebook
        </a>
        <a href="/" className="group flex items-center">
          <IoLogoYoutube className=" text-xl mr-2 group-hover:text-red-600"/>
          Youtube
        </a>
        <a href="/" className="group flex items-center">
          <IoMailOpen className=" text-xl mr-2 group-hover:text-yellow-600"/>
          Gmail
        </a>
      </div>
    </div>
  );
};

export default Footer;
