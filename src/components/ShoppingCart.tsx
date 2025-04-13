"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { AuthContext } from "@/context/authContext";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  useEffect(() => {
    console.log("Navbar isAuth:", isAuth);
  }, [isAuth]);
  const router = useRouter();

  return (
    <div className="relative cursor-pointer">
      <ShoppingCartOutlined
        fontSize="small"
        onClick={() => {
          if (!isAuth) router.push("/login");
          else setOpen(!open);
        }}
      />
      {isAuth ? (
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
