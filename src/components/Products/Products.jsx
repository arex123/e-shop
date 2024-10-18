import React from "react";
import Product from "./Product";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] ">
        <h2 className="uppercase text-2xl text-center p-10">music</h2>
        <div className="grid grid-cols-2 gap-20 justify-items-center">
          {productsArr.map((product) => (
            <Product item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
