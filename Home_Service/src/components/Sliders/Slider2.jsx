import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import one from "./Assets/1.jpg";
import two from "./Assets/2.jpg";
import three from "./Assets/3.jpg";

const featuredProducts = [
  { image: one, title: "NASA Apollo 11" },
  { image: two, title: "Astronaut Apollo 15" },
  { image: three, title: "Atmosphere in the World" },
];
let count = 0;
export const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  let sliderInterval;
  useEffect(() => {
    // startSlide();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlide);
    startSlide();
    return () => {
      pauseSlider();
    };
  }, []);

  const pauseSlider = () => {
    clearInterval(sliderInterval);
  };
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const startSlide = () => {
    sliderInterval = setInterval(() => {
      handleOneNextClick();
    }, 3000);
  };
  const handleOneNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnePreClick = () => {
    count =
      (currentIndex + featuredProducts.length - 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  console.log(slideRef);
  return (
    <div ref={slideRef} className="p-5 bg-gray-300">
      <div className="relative w-full h-[400px] overflow-hidden mt-5 flex flex-col ">
        <img
          className="h-full w-full object-cover"
          src={featuredProducts[currentIndex].image}
          alt=""
        />
        <div className="absolute w-full h-full flex items-center justify-center">
          <h2
            className="bg-[#333333af] p-3
             text-white  text-[3rem] rounded-xl"
          >
            {featuredProducts[currentIndex].title}
          </h2>
        </div>

        <div className="absolute w-full top-1/2 text-white flex justify-between p-2">
          <button onClick={handleOnePreClick}>
            <IoIosArrowDropleftCircle className="text-4xl bg-gray-600 rounded-full opacity-50 hover:opacity-100" />
          </button>
          <button onClick={handleOneNextClick}>
            <IoIosArrowDroprightCircle className="text-4xl bg-gray-600 rounded-full opacity-50 hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
};
