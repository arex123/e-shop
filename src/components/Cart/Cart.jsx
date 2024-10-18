import React from "react";
const cart = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    qnt: 1,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    qnt: 1,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    qnt: 1,
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    qnt: 1,
  },
];
const Cart = () => {
  return (
    <div>
      {cart.map((itm) => (
        <div className="flex items-center justify-evenly my-8 border-b-2 p-2 border-black">
          <img className="h-16 rounded-md" src={itm.imageUrl} />
          <p className="w-10 text-wrap">{itm.title}</p>
          <p>{itm.price}</p>
          <p>{itm.qnt}</p>
          <button className="bg-red-400 p-1 ml-5 text-white text-sm">Remove</button>
          </div>
      ))}
    </div>
  );
};

export default Cart;
