import Image from "next/image";
import React from "react";

function AlsoUsedSection() {
  return (
    <div className="flex-col justify-between pb-8">
      <div>
        <h1 className="font-bold py-4 text-[22px]">
          Materials people also use
        </h1>
      </div>
      <div className="flex justify-between items-center md:space-x-4">
        <div>
          <Image
            src={"/images/also1.png"}
            width={104}
            height={103}
            alt="material people also use"
          />
        </div>
        <div>
          <Image
            src={"/images/also2.png"}
            width={104}
            height={103}
            alt="material people also use"
          />
        </div>
        <div>
          <Image
            src={"/images/also3.png"}
            width={104}
            height={103}
            alt="material people also use"
          />
        </div>
      </div>
      <div className="flex-col justify-between">
        <h1 className="font-bold py-4 text-[22px]">Details</h1>
        <p className="text-[#656565]">Weight: 2340g/m2</p>
        <p className="text-[#656565]">Thickness: 3cm</p>
      </div>
    </div>
  );
}

export default AlsoUsedSection;
