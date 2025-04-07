import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import {
  NotificationsNoneRounded,
  PersonOutlineRounded,
} from "@mui/icons-material";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  return (
    <div className="relative h-20 px-8 md:px-16 lg:px-32 xl:px-48 bg-white ">
      {/* MOBILE */}
      <div className="h-full md:hidden flex justify-between items-center">
        <Link href="/" className="text-[24px] text-[var(--primary)]">
          metan
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREEN */}
      <div className="hidden h-full md:flex items-center justify-between">
        {/* LEFT */}
        <div className="w-2/3 flex gap-8 items-center">
          <Link href="/" className="text-[24px] text-[var(--primary)]">
            metan
          </Link>
          <div className="hidden lg:flex gap-6 text-[14px] ">
            <Link href="/">Homepage</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Deals</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex gap-8 items-center justify-end">
          <SearchBar />
          <Link href="#">
            <PersonOutlineRounded className="cursor-pointer" fontSize="small" />
          </Link>
          <Link href="#">
            <NotificationsNoneRounded
              className="cursor-pointer"
              fontSize="small"
            />
          </Link>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
