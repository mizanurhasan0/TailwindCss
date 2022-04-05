import React, { useState } from "react";
import "./headerSlider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

let count=0;
const HeaderSlider = () => {
  const [current,setCurrent]=useState(0);
  const sliders = [
    {
      image: "https://picsum.photos/200/300",
      title: "natural Beauty of Bangla",
      description:
        "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.",
    },
    {
      image: "https://picsum.photos/200/400",
      title: "natural Beach of Bangla",
      description:
        "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.",
    },
    {
      image: "https://picsum.photos/200/500",
      title: "natural forest of Bangla",
      description:
        "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.",
    },
    {
      image: "https://picsum.photos/300/300",
      title: "natural Land of Bangla",
      description:
        "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.",
    },
  ];
  const nextIndex=()=>{

    count=(count+1)%sliders.length;
    setCurrent(count);

  }
  const prevIndex=()=>{
    count=(current+sliders.length-1)%sliders.length;
    setCurrent(count);
  }
  const changeCurrent=(index)=>{
    setCurrent(index)
  }
  return (
    <div className="h-[54vh] w-full mt-5 container  p-0">
      <div className="h-[50vh] w-full  bg-gray-900 relative ">
        <div
          style={{ backgroundImage: `url(${sliders[current].image})` }}
          className=" h-full bg-cover bg-center object-cover
           bg-no-repeat absolute"
        >
          <div className="text-white flex flex-col justify-center items-center h-full p-24 bg-[#226b2e86]">
          <h2 className="text-4xl capitalize mb-4">{sliders[current].title}</h2>
          <p >{sliders[current].description}</p>
          </div>
        </div>

        <div className="absolute flex justify-between items-center top-1/2 w-full pl-2 pr-2">
          <MdKeyboardArrowLeft
            size={40}
            className="bg-white rounded-full opacity-50 
        hover:opacity-100 cursor-pointer" onClick={prevIndex}
          />
          <MdKeyboardArrowRight
            size={40}
            className="bg-white rounded-full opacity-50
        hover:opacity-100 cursor-pointer" onClick={nextIndex}
          />
        </div>
        <div className="absolute flex bottom-0 w-full  justify-center space-x-3 mb-2">
          {sliders.map((i,index)=>(
          <button onClick={()=>changeCurrent(index)} className={
            current===index?"rounded-full border-4 border-gray-700 bg-white p-1 cursor-pointer":"rounded-full border-4 bg-white p-1 cursor-pointer"}
           key={index}></button>
           ))}
           </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
