import React, { useState } from "react";
const StoreContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalItems: 10,
  onAddItem: () => {},
  onRemoveItem: () => {},
});
export default StoreContext;

export const StoreProvider = (props) => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
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
