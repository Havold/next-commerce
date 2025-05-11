import React from "react";
import ListItem from "./ListItem";

const data = [
  {
    id: 1,
    img: "/assets/shoe_1.png",
    name: "Nike TC 7900",
    category: "Women's Sneaker",
    price: 140,
    favorite: false,
  },
  {
    id: 2,
    img: "/assets/shoe_1.png",
    name: "Nike TC 7900",
    category: "Women's Sneaker",
    price: 140,
    favorite: false,
  },
  {
    id: 3,
    img: "/assets/shoe_1.png",
    name: "Nike TC 7900",
    category: "Women's Sneaker",
    price: 140,
    favorite: false,
  },
  {
    id: 4,
    img: "/assets/shoe_1.png",
    name: "Nike TC 7900",
    category: "Women's Sneaker",
    price: 140,
    favorite: false,
  },
];

const ProductsList = () => {
  return (
    <div className="w-full h-max flex gap-x-4 gap-y-8 flex-wrap justify-between">
      {data.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          category={item.category}
          price={item.price}
          favorite={item.favorite}
        />
      ))}
    </div>
  );
};

export default ProductsList;
