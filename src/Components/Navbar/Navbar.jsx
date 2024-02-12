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
