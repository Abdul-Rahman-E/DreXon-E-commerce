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
