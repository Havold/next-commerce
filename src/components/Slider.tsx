"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const sliders = [
  {
    id: 1,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/736x/0c/bf/5e/0cbf5e049b2440151464e6369e025daa.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-red-100",
  },
  {
    id: 2,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/736x/bf/94/96/bf9496b614b4c845a11e1e8fe7ed4eef.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-green-50 to-green-50",
  },
  {
    id: 3,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/736x/7a/98/1a/7a981a1bfd5c4adbb7cfa687a4ff221b.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-blue-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* SLIDERS CONTAINER */}
      <div
        className="w-max h-full flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(calc(-${current}*100vw)` }}
      >
        {sliders.map((slider) => {
          return (
            // SLIDER CONTAINER
            <div
              key={slider.id}
              className="w-[100vw] flex flex-col md:flex-row"
            >
              {/* TEXT CONTAINER */}
              <div
                className={`${slider.bg} w-full lg:w-3/5 h-full flex flex-col items-center justify-center gap-4 leading-tight`}
              >
                <span className="text-[24px]">{slider.description}</span>
                <span className="text-[40px] font-medium text-center">
                  {slider.title}
                </span>
                <button className="bg-primary-btn text-white text-[12px] md:text-[16px] cursor-pointer w-fit p-3 rounded-md hover:opacity-60 hover:scale-90 transition-all duration-500 ease">
                  SHOP NOW
                </button>
              </div>
              {/* IMAGE CONTAINER */}
              <div className="w-full lg:w-2/5 h-full relative">
                <Image
                  src={slider.img}
                  alt="Slider Picture"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 absolute bottom-8 left-[50vw] translate-x-[-50%]">
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`${
              index === current && "scale-160"
            } cursor-pointer flex items-center justify-center w-3 h-3 ring-1 ring-white md:ring-gray-500 rounded-full transition-all duration-500 ease-in-out`}
            onClick={() => {
              setCurrent(index);
            }}
          >
            {index === current && (
              <div className="w-[8px] h-[8px] bg-white md:bg-gray-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
