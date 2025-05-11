"use client";
import React, { useState } from "react";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";

type FavoriteIconProps = {
  favorite: boolean;
  itemId: string | number;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ favorite, itemId }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  return (
    <div
      className="absolute z-10 right-[16px] cursor-pointer p-1 rounded-full bg-white hover-effect"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {!isFavorite ? (
        <FavoriteBorderRounded className="popup-effect" />
      ) : (
        <FavoriteRounded
          className="text-red-600 popup-effect"
          onClick={() => setIsFavorite(!isFavorite)}
        />
      )}
    </div>
  );
};

export default FavoriteIcon;
