import React, { useRef, useState } from "react";

const AutoResize = () => {
  const [height, setHeight] = useState(90);
  const refText = useRef(null);

  const getHeaith = (e) => {
    if (e.current.value == "" || e.current.scrollHeight < 96) {
      setHeight(96);
    } else {
      setHeight(e.current.scrollHeight);
    }
  };
  return (
    <div className="container w-full h-96 bg-green-900 flex justify-center items-center">
      <div className="bg-white  p-5 flex flex-col items-center rounded-md">
        <p className="text-blue-500 pb-4 text-xl font-semibold">
          Auto Resize Textarea
        </p>

        <textarea
          rows={2}
          ref={refText}
          onKeyUp={() => getHeaith(refText)}
          style={{ height: `${height}px` }}
          className="border-2 w-[50vw] outline-none focus:border-blue-500 overflow-y-hidden"
        ></textarea>
      </div>
    </div>
  );
};

export default AutoResize;
