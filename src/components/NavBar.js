import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
function NavBar() {
  return (
    <div>
      <div className="py-8 flex justify-between items-center md:border-b-[#E4E4E4] md:border-b-4">
        <div className="font-bold text-[32px] uppercase ">
          <h1>Logo</h1>
        </div>
        <div className="w-[32px] h-[32px] md:w-12 md:h-12">
          <Image src={"./cart.svg"} alt="cart-icon" width={100} height={200} />
        </div>
      </div>
      <div className="md:hidden mx-[-80px] border-b-[#E4E4E4] border-b-4"></div>
    </div>
  );
}

export default NavBar;
