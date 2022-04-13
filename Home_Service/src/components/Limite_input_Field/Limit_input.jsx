import React, { useState } from 'react';
import "./input_field.css";
import { MdAlternateEmail } from "react-icons/md";

let TotalNumberOfCharecter=16;
const Limit_input = () => {
    const [charecter,setCharecter]=useState(TotalNumberOfCharecter)
 

    const checkingCharecter=(e)=>{
      const val=TotalNumberOfCharecter-e.target.value.length;
      setCharecter(val);
    }
      return (
        <div className="container h-[200px] w-full flex justify-center
         items-center body">
          <div className="wrapper bg-white p-[20px] w-[450px] 
          rounded-md">
            <form action="/" className="h-[50px]  flex justify-between items-center relative ">
              <MdAlternateEmail className="absolute left-1 text-gray-400" id="icon" size={30}/>
              <input className="w-full h-full border-2 border-gray-200 pl-10 pt-0 pr-10
               text-[20px] outline-none focus:border-[#96ebfa]" type="text" maxLength={16} 
               placeholder="Username" required onChange={checkingCharecter}/>
              <span className="absolute right-3 pl-2 border-l-2 text-gray-400">{charecter}</span>
            </form>
          </div>
          
        </div>
      );
    };
export default Limit_input;
