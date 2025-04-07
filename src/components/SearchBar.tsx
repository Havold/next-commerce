import { SearchRounded } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[60%] flex border-1 border-[#cccc] rounded-full px-4 py-2 focus-within:border-[var(--primary)] focus-within:border-2">
      <input
        className="text-[12px] w-full outline-none caret-[var(--primary)]"
        type="text"
        placeholder="Search"
        id="search"
      />
      <SearchRounded fontSize="small" className="cursor-pointer" />
    </div>
  );
};

export default SearchBar;
