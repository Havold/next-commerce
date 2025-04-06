import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-12 px-8 md:px-16 lg:px-32 xl:px-48 bg-amber-50">
      <h1 className="text-[20px] ">metan</h1>
      {/* MOBILE */}
      <Menu />
    </div>
  );
};

export default Navbar;
