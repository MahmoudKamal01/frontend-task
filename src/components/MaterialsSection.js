import React, { useState, useEffect } from "react";
import MaterialCard from "./MaterialCard";
import FiltersMenu from "./FiltersMenu";
import { products } from "@/data/materials";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";

function MaterialsSection() {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Update itemsPerPage based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update filtered products whenever filters change
    setFilteredProducts(currentProducts);
  }, [currentProducts]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const showPreviousPageButton = currentPage > 1;
  const showNextPageButton = currentPage < totalPages;

  return (
    <div className="border-t-4 border-t-[#E4E4E4] pt-12 ">
      <div className="flex flex-row justify-between w-full  md:mb-20">
        <div className="flex items-center space-x-1  pb-4">
          <h1 className="text-[18px] font-bold inline-flex items-center">
            Materials
          </h1>
          <span className="font-bold text-[34px] "> / </span>
          <span className="text-[#9B9B9B] font-medium inline-flex items-center">
            Premium Photos
          </span>
        </div>
        <div className="flex flex-row items-center space-x-2  md:text-[24px] text-[12px] capitalize">
          <span className="w-3 h-3 md:h-6 md:w-6">
            <Image src={"/arrows.svg"} alt="sorting" width={25} height={25} />
          </span>
          <p className="text-[#9B9B9B] ">sort by</p>
          <DropdownMenu />
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-1/5 hidden md:block">
          <FiltersMenu
            currentProducts={currentProducts}
            setCurrentProducts={setCurrentProducts}
          />
        </div>
        <div className="md:ml-20 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {filteredProducts
            .slice(startIndex, endIndex)
            .map((product, index) => (
              <MaterialCard
                key={index}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                bestseller={product.bestseller}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        {showPreviousPageButton && (
          <span
            onClick={() => handlePageChange(currentPage - 1)}
            className="text-[29px] font-black text-black cursor-pointer"
          >
            {"<"}
          </span>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`text-[29px] ${
              i + 1 === currentPage
                ? "font-black text-black"
                : "text-[#B4B4B4] cursor-pointer"
            }`}
          >
            {i + 1}
          </span>
        ))}
        {showNextPageButton && (
          <span
            onClick={() => handlePageChange(currentPage + 1)}
            className="text-[29px] font-black text-black cursor-pointer"
          >
            {">"}
          </span>
        )}
      </div>
    </div>
  );
}

export default MaterialsSection;
