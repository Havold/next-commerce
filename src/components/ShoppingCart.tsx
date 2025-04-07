"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative cursor-pointer">
      <ShoppingCartOutlined fontSize="small" onClick={() => setOpen(!open)} />
      <div
        className="absolute top-[-6px] right-[-8px] w-4 h-4 rounded-full bg-[var(--primary)] text-[10px] text-white text-center"
        onClick={() => setOpen(!open)}
      >
        2
      </div>
      {open && (
        <div className="absolute bg-white rounded-md shadow right-0 w-[320px] p-4 flex flex-col gap-3 cursor-auto">
          {/* TITLE */}
          <span className="text-[14px] font-medium">Shopping Cart</span>
          {/* BODY */}
          <div className="flex flex-col max-h-[160px] overflow-auto scrollbar-custom">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* TOTAL */}
          <div>
            <div className="flex justify-between">
              <span className="font-bold">Subtotal</span>
              <span className="font-bold">$103</span>
            </div>
            <p className="text-[12px] text-[var(--secondaryText)] mt-1">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          {/* BUTTONS */}
          <div className="flex justify-between">
            <button className="text-[13px] font-medium px-[12px] py-[10px] border-1 border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:opacity-70 transition-all duration-[0.8s]">
              View Cart
            </button>
            <button className="text-[13px] font-medium px-[12px] py-[10px] bg-[var(--primary)] text-white rounded-md cursor-pointer hover:opacity-70 transition-all duration-[0.8s]">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
