"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { LogoutRounded, PersonOutlineRounded } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const ProfileIcon = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="relative">
      <PersonOutlineRounded
        className="cursor-pointer"
        fontSize="small"
        onClick={() => {
          if (!isAuth) {
            router.push("/login");
          } else setModalOpen(!modalOpen);
        }}
      />
      {modalOpen && (
        <div className="absolute overflow-hidden bg-white rounded-md shadow-custom w-[120px] h-fit top-[32px] right-0 text-start">
          <Link
            className="flex items-center border-b-1 border-gray-200 gap-2 text-[14px] px-2 py-3 hover:bg-gray-200 transition-all duration-500 ease"
            href="/"
          >
            <PersonOutlineRounded fontSize="small" className="text-[8px]" />
            <span className="text-sm">Profile</span>
          </Link>
          <div className="text-[14px] flex items-center gap-2 cursor-pointer px-2 py-3 hover:bg-gray-200 transition-all duration-500 ease">
            <LogoutRounded fontSize="small" className="" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
