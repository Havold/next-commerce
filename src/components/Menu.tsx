"use client";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <MenuRoundedIcon
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Menu;
