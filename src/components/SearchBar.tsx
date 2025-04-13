"use client";
import { SearchRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    router.push(`/list/${name}`);
  };
  return (
    <form
      className="w-[60%] flex border-2 border-[#cccc] rounded-full px-4 py-2 focus-within:border-[var(--primary)] transition-all duration-1000 ease"
      onSubmit={handleSearch}
    >
      <input
        className="text-[12px] w-full outline-none caret-[var(--primary)]"
        type="text"
        placeholder="Search"
        id="search"
        name="name"
      />
      <button className="cursor-pointer text-secondary-text transition-all duration-500 ease hover:text-primary">
        <SearchRounded fontSize="small" />
      </button>
    </form>
  );
};

export default SearchBar;
