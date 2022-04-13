import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import "./grid.css";

const Grid = () => {
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

  return (
    <div className="w-full container h-auto bg-gray-100 mt-4 pt-5 relative">
      <div className="grid-container ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, key) => {
          return (
            <div
              key={key}
              className="w-[206px] h-[270px] bg-white relative rounded-2xl shadow-xl cursor-pointer"
            >
              <div className="absolute rounded-full bg-white w-[25px] h-[25px] flex justify-center items-center m-2">
                <IoHeartOutline />
              </div>
              <img
                className="w-full h-[200px] rounded-t-2xl "
                src={slides[0].image}
                alt=""
              />
              <div className="mt-2 ml-2">
                <h3 className="font-semibold">Wirless headphone</h3>
                <div className="flex space-x-2">
                  <p>$199.00</p>
                  <p className="line-through text-gray-400">$299.00</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
