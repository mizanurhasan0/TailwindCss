import React from "react";

const Navbar2 = () => {
  return (
    <div className="fixed w-full flex justify-between px-4 h-screen md:px-12  bg-yellow-900 text-white p-2">
      <a href="/">
        <img
          src={
            "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          }
          alt=""
          className="h-10"
        />
      </a>
    </div>
  );
};

export default Navbar2;
