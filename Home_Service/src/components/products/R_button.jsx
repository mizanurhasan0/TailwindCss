import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

const products = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-600" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
export const R_button = () => {
  const [selectedColor, setSelectedColor] = useState(products.colors[0]);
  return (
    <div className="h-screen w-100% flex flex-col justify-center items-center bg-gray-300">
      <h3 className="text-sm text-gray-900 font-medium">Color</h3>
      <RadioGroup value={selectedColor} onChange={setSelectedColor}>
        <RadioGroup.Label>Choose a color</RadioGroup.Label>
        <div className="flex space-x-3 mt-10">
          {products.colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedClass,
                  active && checked ? "ring ring-offset-2" : " ",
                  !active && checked ? "ring" : " ",
                  "relative rounded-full flex items-center justify-center focus:outline-none cursor-pointer"
                )
              }
            >
              <span
                className={classNames(
                  color.class,
                  "w-10 h-10  border-black border-opacity-10 rounded-full"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
