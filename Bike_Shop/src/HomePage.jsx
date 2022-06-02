import React from "react";
import { BikeCategory } from "./components/BikeCategory/BikeCategory";
import { BikeViews } from "./components/BikeCategoryView/BikeViews";

import HeaderSlide from "./components/HeaderSliders/HeaderSlide";

const HomePage = () => {
  return (
    <div>
      <HeaderSlide />
      <BikeCategory />
      <BikeViews />
    </div>
  );
};

export default HomePage;
