import Image from "next/image";
import React from "react";
import AddButton from "./AddButton";
import Label from "./Label";
import { products } from "@/data/materials";
import { useCart } from "@/contexts/CartContext";
const featuredProduct = products.find((product) => product.featured == true);

function FeaturedSection() {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(featuredProduct);
    openCart();
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4 md:py-8">
        <h1 className="text-[32px] font-bold ">{`${featuredProduct.name} ${featuredProduct.category}`}</h1>
        <div className="hidden md:inline">
          <AddButton handleClick={handleAddToCart} />
        </div>
      </div>
      <div className="w-auto h-[233px] md:h-[553px] relative bg-red-500">
        <Label text="Featured" />
        <Image
          src={featuredProduct.image.src}
          alt={featuredProduct.image.alt}
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
