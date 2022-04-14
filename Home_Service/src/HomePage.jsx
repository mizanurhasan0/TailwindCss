import React from "react";
import Areas from "./components/AreaLocation/Areas";
import AllCategory from "./components/Categorys/AllCategory";

import HeaderSlide from "./components/HeaderSliders/HeaderSlide";


const HomePage = () => {
  return (
    <div>
      
      <HeaderSlide />
      <Areas />
      <AllCategory />
    
    </div>
  );
};

export default HomePage;
