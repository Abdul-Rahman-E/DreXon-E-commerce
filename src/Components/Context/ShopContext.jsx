import React, { createContext, useEffect, useState } from "react";
import all_product from "../Assets/all_product.js";

export const ShopContext = createContext({ all_product: [] });

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = [0, ""];
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    console.log("carts items have been updated:", cartItems);
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: [prev[itemId][0] + 1, size],
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: [prev[itemId][0] - 1, prev[itemId][1]],
    }));
  };

  const removeAllSame = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item][0] > 0) {
        let itemDetail = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemDetail.new_price * cartItems[item][0];
      }
    }
    return totalAmount.toFixed(2);
  };

  const getNumberOfItems = () => {
    let numOfItems = 0;
    for (const item in cartItems) {
      if (cartItems[item][0] > 0) {
        numOfItems += cartItems[item][0];
      }
    }
    return numOfItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllSame,
    getTotal,
    getNumberOfItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
