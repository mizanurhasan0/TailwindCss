import React from "react";
import "./text_typing.css";
import Typewriter from "typewriter-effect";

const Text_Typing = () => {
  return (
    <div className="h-60 w-full flex flex-col justify-center items-center container bg-gray-600 mb-4">
      <div className='inline-flex'>
          <div className='text-4xl text-white font-semibold'>I'm a</div>
          <ul className='space-y-3 overflow-hidden h-[50px] '>
              <li className='text-red-500 text-4xl '><span className='relative'>Programmer....      </span></li>
              <li className='text-red-500 text-4xl '><span className='relative'>Developer...</span></li>
              <li className='text-red-500 text-4xl '><span className='relative'>Editor</span></li>
              <li className='text-red-500 text-4xl '><span className='relative'>Designer..</span></li>
          </ul>
      </div>
      {/* With Type Write Library "npm i typewriter-effect"*/}
      <div className="text-white text-3xl ">
        <Typewriter 
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "I have a Youtube Channel",
              "I'm a web developer",
              "I'm a Tech Enthusiastic",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Text_Typing;
