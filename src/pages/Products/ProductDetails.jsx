import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoreContext from "../../store/StoreContext";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("id ::", id);
  const ctx = useContext(StoreContext);
  const [item, setItem] = useState();
  useEffect(() => {
    let prod = ctx.items.filter(itm => itm.id == id);
    console.log("prod ",prod,ctx.items)
    setItem(...prod);
  }, []);
  console.log(":::itm",item)
  if(item==undefined){
    return <p>Item not found</p>
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2">
        <p>{item.title}</p>
        <div className="h-64 w-64 overflow-hidden">
          <img
            className="transition-all duration-1000 hover:scale-150"
            src={item.imageUrl}
          />
        </div>
        <div className="w-full flex justify-between">
          <p>{item.price}</p>
          <button
            // onClick={handleItemAdd}
            className="bg-blue-400 p-1 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
