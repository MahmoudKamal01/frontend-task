import React from "react";
import Image from "next/image";
import AddButton from "./AddButton";
import Label from "./Label";
function MaterialCard() {
  return (
    <div className="flex-col justify-between w-full border">
      <div className="relative bg-red-600 mb-2">
        <Label text="Best Seller" />
        <Image
          src={"/images/glass.png"}
          className="w-full object-cover"
          alt="material image"
          width={50}
          height={600}
        />
        <div className="absolute bottom-[-1px] md:bottom-0 w-full ">
          <AddButton />
        </div>
      </div>
      <div>
        <span className="text-[#656565] font-bold text-[22px]">Glass</span>
        <h1 className="font-bold text-[34px]">Reinforced</h1>
        <p className="text-[29px] text-[#656565] ">$33.78</p>
      </div>
    </div>
  );
}

export default MaterialCard;
