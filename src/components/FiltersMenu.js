import React, { useState } from "react";
import { products } from "@/data/materials";

const uniqueCategories = new Set([
  "wood",
  "concrete",
  "bricks",
  "glass",
  "steel",
  "carbon Fiber",
  "copper",
]);

products.forEach((product) => {
  uniqueCategories.add(product.category);
});

const categories = Array.from(uniqueCategories);
const prices = [
  "Lower than $20",
  "$20 - $100",
  "$100 - $200",
  "More than $200",
];

function FiltersMenu({ currentProducts, setCurrentProducts }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleCategoryChange = (category) => {
    // Toggle the selected category
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (price) => {
    // Toggle the selected price range
    if (selectedPriceRange === price) {
      setSelectedPriceRange(null);
    } else {
      setSelectedPriceRange(price);
    }
  };

  // Apply filters and update currentProducts
  React.useEffect(() => {
    const filteredProducts = products.filter((product) => {
      // Filter by category
      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
      ) {
        // Filter by price
        if (
          !selectedPriceRange ||
          (selectedPriceRange === "Lower than $20" && product.price < 20) ||
          (selectedPriceRange === "$20 - $100" &&
            product.price >= 20 &&
            product.price <= 100) ||
          (selectedPriceRange === "$100 - $200" &&
            product.price > 100 &&
            product.price <= 200) ||
          (selectedPriceRange === "More than $200" && product.price > 200)
        ) {
          return true;
        }
      }
      return false;
    });

    setCurrentProducts(filteredProducts);
  }, [selectedCategories, selectedPriceRange, setCurrentProducts]);

  return (
    <div className="w-full min-h-[600px] pl-8 ">
      <div className="border-b-2 border-[#C2C2C2]">
        <h1 className="font-bold pb-4">Materials</h1>
        <ul>
          {categories.map((material, index) => (
            <li className="flex gap-3 my-4" key={index}>
              <input
                type="checkbox"
                id={`category_${index}`}
                className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-black bg-white mt-1 hover:cursor-pointer"
                checked={selectedCategories.includes(material)}
                onChange={() => handleCategoryChange(material)}
              />
              <label htmlFor={`category_${index}`} className="capitalize">
                {material}
              </label>
              <svg
                className="absolute  w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="font-bold py-3">Price range</h1>
      <ul>
        {prices.map((price, index) => (
          <li className="flex gap-3 my-4" key={index}>
            <input
              type="checkbox"
              id={`price_${index}`}
              className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-black bg-white mt-1 hover:cursor-pointer"
              checked={selectedPriceRange === price}
              onChange={() => handlePriceChange(price)}
            />
            <label htmlFor={`price_${index}`}>{price}</label>
            <svg
              className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FiltersMenu;
