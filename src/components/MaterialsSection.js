import React, { useState, useEffect } from "react";
import MaterialCard from "./MaterialCard";
import FiltersMenu from "./FiltersMenu";
import { products } from "@/data/materials";
import Image from "next/image";

function MaterialsSection() {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("unsorted"); // Default: unsorted
  const [sortDirection, setSortDirection] = useState("asc");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleSortTypeChange = (event) => {
    setSortType(event.target.value);
  };

  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const showPreviousPageButton = currentPage > 1;
  const showNextPageButton = currentPage < totalPages;

  const sortedProducts =
    sortType !== "unsorted"
      ? [...filteredProducts].sort((a, b) => {
          if (sortType === "name") {
            return sortDirection === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          } else if (sortType === "price") {
            return sortDirection === "asc"
              ? a.price - b.price
              : b.price - a.price;
          }
          return 0;
        })
      : filteredProducts;

  return (
    <div className=" pt-4 ">
      <div className="flex justify-end md:hidden mb-4 pb-8">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image
            src={"/icons/filters.svg"}
            alt="cart-icon"
            width={30}
            height={25}
          />
        </button>
      </div>
      {isMenuOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-80 z-50">
          <div className="h-[90%] bg-white mt-16 flex flex-col justify-between">
            <div className="absolute top-4 right-4 ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image
                  src={"/icons/x.svg"}
                  width={20}
                  height={20}
                  alt={"close filters"}
                />
              </button>
            </div>
            <div className=" w-full h-full overflow-y-auto">
              <FiltersMenu
                currentProducts={currentProducts}
                setCurrentProducts={setCurrentProducts}
              />
            </div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <button className="w-[170px] border-4 border-black px-8 text-[20px] uppercase">
                Clear
              </button>
              <button className=" w-[170px] bg-black py-1 text-white px-8 text-[20px] uppercase">
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex md:flex-row flex-col justify-around md:justify-between w-full pt-12  md:mb-20 border-t-4 border-t-[#E4E4E4]">
        <div className="flex items-center space-x-1  pb-4">
          <h1 className="md:text-[30px] font-bold inline-flex items-center">
            Materials
          </h1>
          <span className="font-bold md:text-[34px] "> / </span>
          <span className="text-[#9B9B9B] md:text-[30px] font-medium inline-flex items-center">
            Premium Photos
          </span>
        </div>
        <div className="flex flex-row items-center space-x-2 pb-4 md:text-[24px] text-[12px] capitalize">
          {/* Button to change sorting direction */}
          <button
            className="w-3 h-3 md:h-6 md:w-6"
            onClick={handleSortDirectionChange}
          >
            <Image
              src={"/icons/arrows.svg"}
              alt="sorting"
              width={25}
              height={25}
            />
          </button>
          <p className="text-[#9B9B9B] ">sort by</p>
          <div className="flex items-center space-x-2 md:text-[24px] text-[12px] capitalize">
            <select
              className="px-2 py-1"
              value={sortType}
              onChange={handleSortTypeChange}
            >
              <option value="unsorted">Select Option</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
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
          {sortedProducts.slice(startIndex, endIndex).map((product, index) => (
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
