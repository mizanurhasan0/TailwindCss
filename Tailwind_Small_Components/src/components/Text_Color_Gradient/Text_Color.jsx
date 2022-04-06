import React from 'react';
import "./text.css";

const Text_Color = () => {
  return (
    <div className='relative container mt-5 mb-5 w-full h-28 
    bg-gradient-to-tr from-cyan-200 to-blue-200'>
      <div className='absolute top-[50%] left-[50%] 
      translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='text text-4xl uppercase font-semibold'>Gradient</h1>
      </div>
    </div>
  );
}

export default Text_Color;
