import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
function NavBar() {
  const { cartItems, clearCart, isCartOpen, toggleCart } = useCart();

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleClear = () => {
    clearCart();
    toggleCart();
  };
  return (
    <div>
      <div className="py-8 flex justify-between items-center md:border-b-[#E4E4E4] md:border-b-4">
        <div className="font-bold text-[32px] uppercase ">
          <h1>Logo</h1>
        </div>
        <button
          className="w-[32px] h-[32px] md:w-12 md:h-12"
          onClick={toggleCart}
        >
          <Image src={"./cart.svg"} alt="cart-icon" width={100} height={200} />
        </button>
        {isCartOpen ? (
          <div className=" bg-white  md:w-96 w-80  absolute z-20 right-2 md:right-16 top-[76px]">
            <div className="flex justify-end">
              <div className="mb-2 bg-black text-[20px] w-[20px] h-[24px] text-white flex items-center justify-center">
                {cartItems.length}
              </div>
            </div>
            <div className="flex-col justify-between w-full h-full border-[#E4E4E4] border-4">
              {cartItems.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex justify-end p-4">
                    <Image
                      src={"/x.svg"}
                      width={22}
                      height={22}
                      alt="close cart"
                    />
                  </div>
                  <div className="flex justify-around m-2 border-[#C2C2C2] border-b-2 py-2">
                    <div className="flex flex-col items-center justify-center m-2">
                      <h1 className="text-[20px] font-bold">{`${item.name} ${item.category}`}</h1>
                      <p className="text-[29px] text-[#656565]">
                        {USDollar.format(item.price)}
                      </p>
                    </div>
                    <div className="w-[168px] h-[92px]">
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                {cartItems.length > 0 ? (
                  <button
                    onClick={handleClear}
                    className="uppercase border-black border-2 px-28 py-2 my-2 bg-white font-bold text-[23px] tracking-widest"
                  >
                    Clear
                  </button>
                ) : (
                  <h1 className="text-[25px] italic">Cart is empty</h1>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
{
  /* <span className="absolute bg-black w-[40px] h-[40px]">{cartItems.length}</span>; */
}
