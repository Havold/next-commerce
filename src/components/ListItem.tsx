"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteIcon from "./FavoriteIcon";
import { makeRequest } from "@/app/axios";

type ListItemProps = {
  id: string | number;
  img: string;
  name: string;
  category: string;
  price: number;
  favorite?: boolean;
};

const ListItem: React.FC<ListItemProps> = ({
  id,
  img,
  name,
  category,
  price,
  favorite = false,
}) => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cart = { value: "Hello World" };
    const response = await makeRequest.post("/payment-service", { cart });
    console.log(response);
    // console.log("Hello");
  };
  return (
    <div className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] h-[60vh] md:h-[42vh] lg:h-[62vh] xl:h-[60vh] px-3 py-6 rounded-3xl overflow-hidden shadow-custom-sm">
      <FavoriteIcon key={id} itemId={id} favorite={favorite} />
      {/* IMAGE */}
      <Link href={`/${id}`}>
        <div className="relative h-2/3 w-full rounded-3xl gradient-purple-custom">
          <Image
            src={img}
            alt="Item Picture"
            width={160}
            height={160}
            className="w-[320px] h-[320px] md:w-[160px] md:h-[160px] lg:w-[240px] lg:h-[240px] object-contain bottom-[-40px] md:bottom-[-20px] lg:bottom-[-40px] left-[50%] translate-x-[-50%] z-20 absolute"
          />
          <span className="absolute text-[60px] text-gray-400 opacity-40 font-black italic top-[25%] left-[50%] rotate-90 translate-x-[-50%] ">
            NIKE
          </span>
        </div>
      </Link>
      {/* CONTENT */}
      <div className="h-1/3 w-full md:mt-2 flex justify-between items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-3 leading-tight">
          {/* PRODUCT INFO  */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold">
              {name}
            </h3>
            <span className="text-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] uppercase text-secondary ">
              {category}
            </span>
          </div>

          <span className="text-[18px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-bold">
            $ {price}
          </span>
        </div>
        {/* RIGHT */}
        <button
          onClick={handleClick}
          className="w-[48px] md:w-[40px] lg:w-[60px] h-[48px] md:h-[40px] lg:h-[60px] rounded-full bg-secondary text-[32px] md:text-[24px] lg:text-[32px] font-extralight cursor-pointer hover-effect"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ListItem;
