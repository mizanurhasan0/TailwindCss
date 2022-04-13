import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

const product = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-600" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const RadioButton = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <div>
      <h3 className="text-sm text-gray-900 font-medium">Color</h3>

      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {product.colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedClass,
                  active && checked ? "ring ring-offset-2" : "",
                  !active && checked ? "ring" : "",
                  "relative rounded-full  flex items-center justify-center cursor-pointer focus:outline-none"
                )
              }
            >
              <RadioGroup.Label className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.class,
                  "h-8 w-8 border border-black border-opacity-10 rounded-full"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
