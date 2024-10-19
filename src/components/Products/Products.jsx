import React, { useContext } from "react";
import Product from "./Product";
import StoreContext from "../../store/StoreContext";

const Products = () => {
  const ctx=useContext(StoreContext)
  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] ">
        <h2 className="uppercase text-2xl text-center p-10">music</h2>
        <div className="grid grid-cols-2 gap-20 justify-items-center">
          {ctx.items.map((product) => (
            <Product item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
