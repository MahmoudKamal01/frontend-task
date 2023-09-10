import React, { useState } from "react";
import Image from "next/image";
import AddButton from "./AddButton";
import Label from "./Label";
import { useCart } from "@/contexts/CartContext";
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function MaterialCard({ category, name, price, image, bestseller }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { addToCart, openCart } = useCart();

  const product = { category, name, price, image };
  const handleAddToCart = () => {
    addToCart(product);
    openCart();
  };

  return (
    <div className="flex-col justify-between w-full ">
      <div
        className="relative mb-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {bestseller ? <Label text="Best Seller" /> : null}
        <Image
          src={image.src}
          className="w-full object-cover h-[390px]"
          alt={image.alt}
          width={281}
          height={390}
        />
        {/* Conditionally show the AddButton on hovering the image */}
        {isHovered && (
          <div className="absolute bottom-[-1px] md:bottom-0 w-full ">
            <AddButton handleClick={handleAddToCart} />
          </div>
        )}
      </div>
      <div>
        <span className="text-[#656565] font-bold text-[22px]">{category}</span>
        <h1 className="font-bold text-[34px] capitalize">{name}</h1>
        <p className="text-[29px] text-[#656565] ">{USDollar.format(price)}</p>
      </div>
    </div>
  );
}

export default MaterialCard;
