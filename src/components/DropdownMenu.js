import React, { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Price"); // Default selected item is "Price"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown when an item is selected
  };

  return (
    <div className="relative ">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black  rounded-lg text-center inline-flex items-center"
        type="button"
      >
        {selectedItem} {/* Display the selected item */}
        <svg
          className={`md:w-5 md:h-5 w-3 h-3 ml-2.5 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-white right-0 mt-2 w-48 border border-gray-300 rounded-lg shadow-lg"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  selectedItem === "Price" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
                onClick={() => handleItemClick("Price")}
              >
                Price
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  selectedItem === "Name" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
                onClick={() => handleItemClick("Name")}
              >
                Name
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
