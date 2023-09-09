import Image from "next/image";
import React from "react";
import AddButton from "./AddButton";
import Label from "./Label";

function FeaturedSection() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4 md:py-8">
        <h1 className="text-[32px] font-bold ">Recycled Plastic</h1>
        <div className="hidden md:inline">
          <AddButton />
        </div>
      </div>
      <div className="w-auto h-[233px] md:h-[553px] relative bg-red-500">
        <Label text="Featured" />
        <Image
          src={"/images/Recycled Plastic.png"}
          alt="featured"
          fill
          className="object-cover"
        />
      </div>
      <div className="md:hidden py-4 w-full">
        <AddButton />
      </div>
    </div>
  );
}

export default FeaturedSection;
