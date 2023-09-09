import React from "react";

const materials = [
  "Wood",
  "Concrete",
  "Brick",
  "Glass",
  "Steel",
  "Carbon Fiber",
  "Copper",
];

const prices = [
  "Lower than $20",
  "$20 - $100",
  "$100 - $200",
  "More than $200",
];
function FiltersMenu() {
  return (
    <div className="w-full bg-red-400 min-h-[600px] pl-8 ">
      <div className="border-b-2 border-[#C2C2C2]">
        <h1 className="font-bold pb-4">Materials</h1>
        <ul>
          {materials.map((material, index) => (
            <>
              <li className="flex gap-3 my-4" key={index}>
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-black bg-white mt-1"
                />
                <label htmlFor="some_id">{material}</label>
                <svg
                  className=" absolute  w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </li>
            </>
          ))}
        </ul>
      </div>
      <h1 className="font-bold py-3">Price range</h1>
      <ul>
        {prices.map((price, index) => (
          <>
            <li className="flex gap-3 my-4" key={index}>
              <input
                type="checkbox"
                id="some_id"
                className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-black bg-white mt-1"
              />
              <label htmlFor="some_id">{price}</label>
              <svg
                className=" absolute  w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default FiltersMenu;
