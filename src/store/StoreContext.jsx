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

import React, { useContext, useEffect, useState, useCallback } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const authCtx = useContext(AuthContext);
  const email = localStorage.getItem("email");
  const sanitizedEmail = email ? email.replace(/[@.]/g, "") : null;
  const apiUrl = `https://crudcrud.com/api/30db31051416419d957b4e2d1131cd7a/${sanitizedEmail}`;

  const getItems = useCallback(async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  }, [apiUrl]);
  useEffect(() => {
    if (authCtx.isLoggedIn && sanitizedEmail) {
      getItems();
    }
  }, [authCtx.isLoggedIn, sanitizedEmail, getItems]);

  // Update quantity of an item in the cart
  const addToCartWithQuantity = async (item) => {
    try {
      const existingItem = items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        await fetch(`${apiUrl}/${existingItem._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: item.id,
            title: item.title,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: item.quantity
          }),
        });
        setItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === item.id ? item : cartItem
          )
        );
      }
    } catch (error) {
      console.error("Failed to update item quantity:", error);
    }
  };

  const addToCart = async (item) => {
    try {
      // Check if the item already exists in the cart
      const existingItem = items.find((cartItem) => cartItem.id === item.id);
      console.log(existingItem);
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) + 1,
        };
        await fetch(`${apiUrl}/${existingItem._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: updatedItem.id,
            title: updatedItem.title,
            price: updatedItem.price,
            imageUrl: updatedItem.imageUrl,
            quantity: updatedItem.quantity
          }),
        });
        setItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === item.id ? updatedItem : cartItem
          )
        );
      } else {
        // If the item doesn't exist, add it to the cart
        console.log('hii');
        const newItem = { ...item, quantity: 1 };
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
        const addedItem = await res.json();
        setItems((prevItems) => [...prevItems, addedItem]);
      }
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const itemToRemove = items.find((cartItem) => cartItem.id === id);
      if (itemToRemove) {
        await fetch(`${apiUrl}/${itemToRemove._id}`, {
          method: 'DELETE',
        });
        setItems((prevItems) =>
          prevItems.filter((cartItem) => cartItem.id !== id)
        );
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const cartContext = {
    items: items,
    addToCart: addToCart,
    addToCartWithQuantity: addToCartWithQuantity,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

