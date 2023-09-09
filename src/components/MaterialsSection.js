import React from "react";
import MaterialCard from "./MaterialCard";
import FiltersMenu from "./FiltersMenu";

function MaterialsSection() {
  return (
    <div className="border-t-4 border-t-[#E4E4E4] pt-12 ">
      <div className="flex items-center space-x-1 md:pb-20 pb-4">
        <h1 className="text-[18px] font-bold inline-flex items-center">
          Materials
        </h1>
        <span className="font-bold text-[34px] "> / </span>
        <span className="text-[#9B9B9B] font-medium inline-flex items-center">
          Premium Photos
        </span>
      </div>
      <div className="flex justify-between ">
        <div className="w-1/5 hidden md:block">
          <FiltersMenu />
        </div>
        <div className=" md:ml-20 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
        </div>
      </div>
    </div>
  );
}

export default MaterialsSection;
