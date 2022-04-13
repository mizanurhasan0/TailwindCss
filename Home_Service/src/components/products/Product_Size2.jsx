import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";
const product = {
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
};
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
export const Product_Size2 = () => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  return (
    <div className="mt-10">
      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-4"
      >
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-8">
          {product.sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              disabled={!size.inStock}
              className={({ active }) =>
                classNames(
                  size.inStock
                    ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                    : "bg-gray-50 text-gray-200 cursor-not-allowed",
                  active ? "ring-2 ring-indigo-500" : "",
                  "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
