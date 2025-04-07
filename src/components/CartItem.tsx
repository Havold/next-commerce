import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex h-[400px] gap-4 py-3 px-3 border-b-1 border-gray-200 cursor-pointer hover:opacity-80 hover:bg-gray-200 transition-all duration-500 ease-in-out">
      {/* LEFT */}

      <Image
        src={"/assets/tote.jpg"}
        width={72}
        height={96}
        alt="Item Picture"
        className="object-cover rounded-lg"
      />

      {/* RIGHT */}
      <div className="flex flex-col w-full h-full justify-between">
        {/* TOP */}
        <div className="flex justify-between">
          {/* LEFT */}
          <div className="flex flex-col">
            <h1 className="text-[14px] leading-tight font-bold">
              Classic Tote Bag
            </h1>
            <span className="text-[12px] text-secondary-text">AVAILABLE</span>
          </div>
          {/* RIGHT */}
          <span className="font-medium text-[14px]">$18</span>
        </div>
        {/* BOTTOM */}
        <div className="flex justify-between">
          <span className="text-[12px] text-[var(--secondaryText)]">
            Qty. 1
          </span>
          <button className="text-[12px] text-[var(--primary)] cursor-pointer hover:opacity-50 transition-all duration-200 ease-in">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
