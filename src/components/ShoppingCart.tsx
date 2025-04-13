"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="relative cursor-pointer">
      <ShoppingCartOutlined
        fontSize="small"
        onClick={() => {
          if (!login) router.push("/login");
          else setOpen(!open);
        }}
      />
      {login ? (
        <div
          className="absolute top-[-6px] right-[-8px] w-4 h-4 rounded-full bg-[var(--primary)] text-[10px] text-white text-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          2
        </div>
      ) : (
        ""
      )}
      {open && <CartModal />}
    </div>
  );
};

export default ShoppingCart;
