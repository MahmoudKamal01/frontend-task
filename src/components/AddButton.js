import React from "react";

function AddButton({ handleClick }) {
  return (
    <button
      className="bg-black px-8 py-3 font-[23px] text-white uppercase w-full"
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}

export default AddButton;
