import React, { useState } from "react";
import MaterialCard from "./MaterialCard";

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle pagination buttons
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-red-300">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        {items
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <div key={index}>
              <MaterialCard />
            </div>
          ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 font-bold text-[29px] text-[#B4B4B4]">
        <button
          onClick={handlePrevPage}
          className={`mr-2 ${currentPage === 1 ? "hidden" : "block"}`}
        >
          {"<"}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`mx-2 ${
              currentPage === pageNumber ? "font-bold text-black" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`ml-2 ${currentPage === totalPages ? "hidden" : "block"}`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
