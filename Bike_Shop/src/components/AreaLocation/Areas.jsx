import React from "react";
import { IoLocation,IoMapSharp } from "react-icons/io5";
const Areas = () => {
  return (
    <div className="px-14 w-full mt-4 text-gray-700">
      <h1 className="font-semibold text-2xl flex items-center">Our Servicing area <IoMapSharp className="ml-4 text-[#ff9a00]"/></h1>
      <div className="mt-4 ">
        <h2 className="font-semibold flex items-center text-gray-600 pb-3">
          Inside Dhaka City <IoLocation className="ml-2 text-[#ff9a00]" />
        </h2>
        <div className="grid grid-rows-[repeat(7,minmax(auto,1fr))] gap-x-2 gap-y-0 md:grid-rows-5  grid-flow-col md:gap-x-4 md:gap-y-2 text-gray-500 ">
          <p>Adabor</p>
          <p>Uttar Khan</p>
          <p>Uttara</p>
          <p>Kadamtali</p>
          <p>Kalabagan</p>
          <p>Kafrul</p>
          <p>Khilkhet</p>
          <p>Khilgaon</p>
          <p>Glushan</p>
          <p>Gendaria</p>
          <p>Chawkbazar Model</p>
          <p>Demra</p>
          <p>Turag</p>
          <p>Tejgaon</p>
          <p>Dakshinkhan</p>
          <p>Darus Salam</p>
          <p>Dhanmondi</p>
          <p>New Market</p>
          <p>Paltan</p>
          <p>Pallabi</p>
          <p>Bangshal</p>
          <p>Badda</p>
          <p>Bimanbandar</p>
          <p>Motijheel</p>
          <p>Mirpur Model</p>
          <p>Mohammadpur</p>
          <p>Jatrabari</p>
        </div>
      </div>
    </div>
  );
};

export default Areas;
