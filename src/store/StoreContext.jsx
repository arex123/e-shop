import React, { useEffect, useState } from "react";
const StoreContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalItems: 10,
  onAddItem: () => {},
  onRemoveItem: () => {},
});
export default StoreContext;


const productsArr = [
  {
    id:1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

export const StoreProvider = (props) => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(()=>{
    setItems(productsArr)
  },[])


  const AddItemHandler = (item) => {
    setItems([...items, item]);
    setTotalItems(items.length+1)
  };
  const removeItemHandler = (id) => {};
  return (
    <StoreContext.Provider
      value={{
        items: items,
        totalAmount: amount,
        totalItems: totalItems,
        onAddItem: AddItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
