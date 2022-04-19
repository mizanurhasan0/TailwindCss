import React from "react";
import Areas from "./components/AreaLocation/Areas";
import { BikeCategory } from "./components/BikeCategory/BikeCategory";
import { BikeViews } from "./components/BikeCategoryView/BikeViews";
import AllCategory from "./components/Categorys/AllCategory";
import Footer from "./components/Footer/Footer";

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
