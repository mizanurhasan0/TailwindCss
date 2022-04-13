import React from "react";
const slides = [
  {
    image: "https://picsum.photos/200/300",
    title: "Effective way for walk",
    descrtiption: "The overview of",
  },
];
const FlipCard = () => {
  return (
    <div
      className="h-screen bg-gray-900 flex 
    justify-center items-center gap-x-16 "
    >
      <div className="group w-[300px] h-[420px] bg-transparent cursor-pointer perspective">
        <div className="relative preserve-3d  group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img className="w-full h-full" src={slides[0].image} alt="" />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden bg-gray-100 
            overflow-hidden "
          >
            <div
              className="text-center flex flex-col items-center justify-center h-full
             text-gray-800 px-2 pb-24"
            >
              <h1>The king's Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p >
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting,
              </p>
              <button
                className="bg-cyan-600 rounded-full px-6 py-2 font-semibold 
            text-white absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5
            scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
