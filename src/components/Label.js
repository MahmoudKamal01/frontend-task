import React from "react";

function Label({ text }) {
  return (
    <div className="absolute text-[20px] z-10 top-[-1px] left-0 py-1 px-4 md:px-8 md:py-0  bg-white ">
      {text}
    </div>
  );
}

export default Label;
