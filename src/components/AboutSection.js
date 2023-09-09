import React from "react";

function AboutSection() {
  return (
    <div className="flex-col justify-between ">
      <h1 className="font-bold py-4 text-[22px]">About the Recycled Plastic</h1>
      <span className="hidden md:block text-[#656565] font-bold">Plastic</span>
      <p className="text-[#656565]">
        Plastic recycling is the reprocessing of plastic waste into new and
        useful products. When performed correctly, this can reduce dependence on
        landfill, conserve resources and protect the environment from plastic
        pollution and greenhouse gas emissions...
      </p>
    </div>
  );
}

export default AboutSection;
