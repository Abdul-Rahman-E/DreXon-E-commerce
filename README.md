# DREXON E-commerce React Project

Welcome to the DREXON E-Commerce project! This React-based frontend application provides a user-friendly shopping experience with key features highlighted below.

## Project Highlights

### 1. Cart Component

The Cart component is crucial to the project, allowing users to manage their selected items. It provides features like adding, removing, and deleting items. The component dynamically displays product details and calculates the total and shipping information in real-time.

#### Cart.jsx

```jsx
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import crossButton from "../Components/Assets/cart_cross_icon.png";

const Cart = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    removeAllSame,
    getTotal,
    getNumberOfItems,
  } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  return (
    <div className="w-screen md:flex md:flex-row-reverse min-h-screen bg-zinc-50">
      <div className="w-screen md:w-2/6 md:h-full md:mt-2 md:mr-2 flex flex-col p-2 bg-gradient-to-b from-slate-200 to-white shadow-sm shadow-slate-500">
        <div className="flex justify-between">
          <div>
            <span>Subtotal</span>
            <span>({getNumberOfItems()} Items)</span>
          </div>
          <span>${getTotal()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-[#007600]">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>${getTotal()}</span>
        </div>
        <div className="h-16">
            <button
              className="w-full select-none pt-2 pb-2 pr-6 pl-6 text-sm mt-6 bg-[#FFD814] text-black rounded-md md:hover:bg-[#ffe76c]"
            >
              Proceed to Buy
            </button>
            
          </div>
      </div>
      <div className="w-screen flex flex-col mb-10">
        {all_product.map((item) => {
          if (cartItems[item.id][0] > 0) {
            return (
              <div
                key={item.id}
                className="w-full mt-2 flex flex-col items-center"
              >
                <div className="w-5/6 p-1 bg-gradient-to-br bg-zinc-100 flex border-[1px] border-slate-400 rounded-md">
                  <div className="w-auto p-1 flex items-center">
                    <img
                      className="w-44 rounded-md border-[1px] border-slate-300"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="ml-2 text-sm md:text-xl font-medium">
                      {item.name}
                    </p>
                    <p className="ml-2 text-xs md:text-md text-[#007600]">
                      In stock
                    </p>
                    <p className="ml-2 text-xs md:text-md text-slate-600">
                      Eligible for FREE Shipping
                    </p>
                    <p className=" text-xl font-semibold ml-2 md:text-lg ">
                      ${item.new_price}
                    </p>
                    <p className="text-sm font-semibold ml-2 md:text-base">
                      Size:{" "}
                      <span className="font-normal">
                        {cartItems[item.id][1]}
                      </span>
                    </p>
                    <div className=" flex items-center ">
                      <div className="flex drop-shadow-md ml-2">
                        <span
                          onClick={() => {
                            removeFromCart(item.id);
                          }}
                          className="w-8 select-none h-8 bg-gradient-to-b from-slate-100 to-slate-400 border-[1px] border-slate-300 md:cursor-pointer rounded-l-lg flex items-center justify-center"
                        >
                          -
                        </span>
                        <span className="w-8 select-none h-8 flex justify-center items-center text-[#007185] border-y-[1px] border-slate-300 bg-slate-50">
                          {cartItems[item.id][0]}
                        </span>
                        <span
                          onClick={() => {
                            addToCart(item.id);
                          }}
                          className="w-8 select-none h-8 bg-gradient-to-b from-slate-100 to-slate-400 border-[1px] border-slate-300 md:cursor-pointer rounded-r-lg flex items-center justify-center"
                        >
                          +
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          removeAllSame(item.id);
                        }}
                        className="text-xs md:w-20 md:h-8 border-[1px] bg-slate-50 md:hover:bg-slate-100 border-slate-400 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center cursor-pointer active:scale-95 px-3 py-2 ml-12"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
```

### 2. Shop Category Page

The Shop Category page enhances the user experience with a selection input type. Users can sort products based on various criteria such as alphabetic name, price high to low, price low to high, and average customer reviews. The page is designed to be responsive, providing an optimal viewing experience on different devices.

#### ShopCategory.jsx

```jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import dropArrow from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentSort, setCurrentSort] = useState("name");

  useEffect(() => {
    const productsCopy = [...all_product];
    let sortedCopy = [];

    if (currentSort === "name") {
      sortedCopy = productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "lth") {
      sortedCopy = productsCopy.sort((a, b) => a.new_price - b.new_price);
    } else if (currentSort === "htl") {
      sortedCopy = productsCopy.sort((a, b) => b.new_price - a.new_price);
    } else if (currentSort === "avg") {
      sortedCopy = productsCopy.sort((a, b) => b.rating - a.rating);
    }

    setSortedProducts(sortedCopy);
  }, [currentSort, all_product]);

  return (
    <div className="w-screen flex flex-col items-center mt-8 mb-10">
      <img className="w-[1140px]" src={props.banner} alt="" />
      <div className="w-screen md:w-[1140px] flex justify-between items-center mt-5 mb-5 px-4 md:px-0">
        <p className="text-xs md:text-sm">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <select
          onChange={(e) => {
            setCurrentSort(e.target.value);
          }}
          className="text-xs md:text-sm font-medium px-2 rounded-md shadow-sm shadow-slate-600"
        >
          <option value="name">Name</option>
          <option value="lth">Price: Low to High</option>
          <option value="htl">Price: High to Low</option>
          <option value="avg">Customer Review</option>
        </select>
      </div>
      <div className="md:w-[1140px] grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-16 md:gap-10 mb-20 py-4">
        {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="w-44 h-12  bg-[#c0bfc45d] text-slate-600 rounded-full flex justify-center items-center text-sm hover:bg-[#c0bfc47b] cursor-pointer mb-20">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
```

### 3. Responsive Navbar

The project includes two types of navigation bars. One is designed for desktop screens, and the other is specifically tailored for mobile sizes, featuring a burger icon for easy navigation.

#### ShopCategory.jsx

```jsx
import React, { useContext, useEffect, useState } from "react";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [toggle, setToggle] = useState(false);
  const { getNumberOfItems } = useContext(ShopContext);
  return (
    <>
      <div className="navbar w-screen h-20 flex md:justify-around pt-5 pb-5 border-b-[1px] border-slate-300 bg-white overflow-hidden z-10">
        <div className="w-20 ml-8 md:ml-0 logo flex items-center justify-center">
          <Link
            className="text-base font-bold md:text-lg"
            onClick={() => setMenu("shop")}
            to="/"
          >
            DRE<span className="text-xl md:text-2xl">X</span>ON
          </Link>
        </div>
        <div className="flex items-center">
          <div className="">
            <ul className="hidden space-x-12 items-center md:flex">
              <li onClick={() => setMenu("shop")} className="cursor-pointer">
                <Link to="/">Shop</Link>
                {menu === "shop" ? (
                  <hr className="mt-3 h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li onClick={() => setMenu("mens")} className="cursor-pointer">
                <Link to="/mens">Men</Link>
                {menu === "mens" ? (
                  <hr className="mt-3 h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li onClick={() => setMenu("womens")} className="cursor-pointer">
                <Link to="/womens">Women</Link>
                {menu === "womens" ? (
                  <hr className="mt-3 h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li onClick={() => setMenu("kids")} className="cursor-pointer">
                <Link to="/kids">Kids</Link>
                {menu === "kids" ? (
                  <hr className="mt-3 h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="login-cart flex items-center ml-44 md:ml-0">
          <Link to="/login">
            <button
              onClick={() => setMenu("login")}
              className="hidden cursor-pointer mx-10 border-2 pl-8 pr-8 pt-2 pb-2 rounded-3xl border-slate-400 bg-white active:bg-slate-100 md:block"
            >
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img
              onClick={() => setMenu("cart")}
              className="w-8 cursor-pointer"
              src={cart_icon}
            />
          </Link>
          <div className="cart-count w-5 h-5 -mt-5 -ml-1 rounded-full text-xs text-white flex items-center justify-center bg-red-500">
            {getNumberOfItems()}
          </div>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex justify-center items-center md:hidden text-3xl cursor-pointer p-3 ml-2 md:ml-0"
          >
            {!toggle ? (
              <p className="text-4xl text-slate-600 hover:text-slate-700">≡</p>
            ) : (
              <p className="text-2xl text-slate-700 hover:text-slate-500">⛌</p>
            )}
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="h-56 w-screen bg-[#102526] md:hidden pt-2 pb-2 absolute z-10 bg-opacity-95">
          <ul className="flex flex-col space-y-3 items-center">
            <li
              onClick={() => {
                setMenu("shop");
                setToggle(!toggle);
              }}
              className="cursor-pointer text-slate-200 p-1"
            >
              <Link to="/">
                <p
                  className={`${
                    menu === "shop"
                      ? "text-teal-300"
                      : "text-slate-200 hover:text-teal-200"
                  } `}
                >
                  Shop
                </p>
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("mens");
                setToggle(!toggle);
              }}
              className="cursor-pointer text-slate-200 p-1"
            >
              <Link to="/mens">
                <p
                  className={`${
                    menu === "mens"
                      ? "text-teal-300"
                      : "text-slate-200 hover:text-teal-200"
                  } `}
                >
                  Mens
                </p>
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("womens");
                setToggle(!toggle);
              }}
              className="cursor-pointer text-slate-200 p-1"
            >
              <Link to="/womens">
                <p
                  className={`${
                    menu === "womens"
                      ? "text-teal-300"
                      : "text-slate-200 hover:text-teal-200"
                  } `}
                >
                  Womens
                </p>
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("kids");
                setToggle(!toggle);
              }}
              className="cursor-pointer text-slate-200 p-1"
            >
              <Link to="/kids">
                <p
                  className={`${
                    menu === "kids"
                      ? "text-teal-300"
                      : "text-slate-200 hover:text-teal-200"
                  } `}
                >
                  Kids
                </p>
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("login");
                setToggle(!toggle);
              }}
              className="cursor-pointer text-slate-200 p-1"
            >
              <Link to="/login">
                <p
                  className={`${
                    menu === "login"
                      ? "text-teal-300"
                      : "text-slate-200 hover:text-teal-200"
                  } `}
                >
                  Login
                </p>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
```

Feel free to explore the individual component files for detailed implementation.

## Getting Started
Follow these steps to get the project up and running on your local machine:

### Clone the repository:
```bash
git clone https://github.com/Abdul-Rahman-E/DreXon-Eccommerce
```


### Install dependencies:
```bash
cd DreXon-E-commerce
npm install
```

### Start the development server:
```bash
cd DreXon-E-commerce
npm install
```
Now you can explore and test the features of this DREXON E-Commerce React project!

Happy coding!
