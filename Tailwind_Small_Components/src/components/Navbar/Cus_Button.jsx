import React from "react";

const Cus_Button = (props) => {
  return <button className="uppercase bg-yellow-500 px-3 rounded-sm py-1 font-semibold">{props.children}</button>;
};

export default Cus_Button;
