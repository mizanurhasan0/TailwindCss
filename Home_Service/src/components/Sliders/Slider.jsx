import React, { useEffect, useRef, useState } from "react";
import one from "./Assets/1.jpg";
import two from "./Assets/2.jpg";
import three from "./Assets/3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const featuredProducts = [one, two, three];
let count = 0;

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  let sliderInterval;

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    // slideRef.current.addEventListener("mouseleave", startSlider);
    // startSlider();

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
  const startSlider = () => {
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

  // console.log(slideRef);
  return (
    <div ref={slideRef} className="w-full h-[400px] relative overflow-hidden ">
      <img
        className="h-100% w-100% object-fill"
        src={featuredProducts[currentIndex]}
        alt=""
      />
      <div className="absolute w-full top-1/2 flex justify-between transform -translate-y-1/2 px-3  ">
        <button
          onClick={handleOnePreClick}
          className="bg-white bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition p-2 rounded-full shadow-md text-xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          className="bg-white bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition p-2 rounded-full shadow-md text-xl"
          onClick={handleOneNextClick}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
