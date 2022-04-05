import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./product_horizontal.css";

const Product_Horizontal_scrolling = () => {
  const slideClick = (i) => {
    alert("hello" + i);
  };
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "Effective way for walk",
      descrtiption: "The overview of",
      clickEvent: slideClick,
    },
    {
      image: "https://picsum.photos/300/300",
      title: "Effective way for walk",
      descrtiption: "This is description",
      clickEvent: slideClick,
    },
    {
      image: "https://picsum.photos/400/300",
      title: "This is title",
      descrtiption: "This is description",
      clickEvent: slideClick,
    },
    {
      image: "https://picsum.photos/600/300",
      title: "This is title",
      descrtiption: "This is description",
      clickEvent: slideClick,
    },
    {
      image: "https://picsum.photos/300/200",
      title: "This is title",
      descrtiption: "This is description",
      clickEvent: slideClick,
    },
    {
      image: "https://picsum.photos/300/100",
      title: "This is title",
      descrtiption: "This is description",
      clickEvent: slideClick,
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="container w-80% h-[44vh]  p-0 relative flex justify-center items-center">
       <MdKeyboardArrowLeft
          onClick={slideLeft}
          className="absolute top-1/2 z-50 ml-1 bg-white rounded-full left-0 opacity-50 hover:opacity-100 cursor-pointer"
          size={40}
        />
      <div
        id="slider"
        className="absolute overflow-x-auto h-[300px] w-full 
      whitespace-nowrap gap-3 scroll-smooth"
      >
       
      
        {slides.map((slide, index) => {
          return (
            <div className="w-[300px] h-[300px] first:ml-0 last:mr-0 border border-gray-800 rounded-xl inline-block ml-2 mr-2" key={index}>
              <div
                className="w-full h-3/4 bg-center bg-no-repeat bg-cover rounded-tl-xl rounded-tr-xl"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <p className="text-gray-800 text-xl font-semibold pt-1 pl-2">
                {slide.title}
              </p>
              <p className="text-gray-400  pt-1 pl-2">{slide.descrtiption}</p>
            </div>
          );
        })}
     
        
      </div>
      <MdKeyboardArrowRight
          onClick={slideRight}
          className="absolute top-1/2  mr-1 bg-white rounded-full right-0 opacity-50 hover:opacity-100 cursor-pointer"
          size={40}
        />
    </div>
  );
};

export default Product_Horizontal_scrolling;
