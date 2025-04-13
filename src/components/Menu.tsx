"use client";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <MenuRoundedIcon
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="flex flex-col justify-center items-center z-20 gap-8 absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)]">
          <Link href="#">Homepage</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Deals</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Logout</Link>
          <Link href="#">Cart</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
