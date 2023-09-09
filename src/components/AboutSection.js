import React from "react";

function AboutSection() {
  return (
    <div className="flex-col justify-between  md:w-1/2">
      <h1 className="font-bold py-4 text-[22px]">About the Recycled Plastic</h1>
      <span className="hidden md:block text-[#656565] font-bold">Plastic</span>
      <p className="text-[#656565]   line-clamp-6 md:line-clamp-none">
        Plastic recycling is the reprocessing of plastic waste into new and
        useful products. When performed correctly, this can reduce dependence on
        landfill, conserve resources and protect the environment from plastic
        pollution and greenhouse gas emissions. Although recycling rates are
        increasing, they lag behind those of other recoverable materials, such
        as aluminium, glass and paper. The global recycling rate in 2015 was
        19.5%, while 25.5% was incinerated and the remaining 55% disposed of to
        landfill. Since the beginning of plastic production in the 20th century,
        until 2015, the world has produced some 6.3 billion tonnes of plastic
        waste, only 9% of which has been recycled, and only ~1% has been
        recycled more than once.[6]
      </p>
    </div>
  );
}

export default AboutSection;
