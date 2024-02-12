import React, { useContext, useState } from "react";
import Rating from "../Rating/Rating";
import { ShopContext } from "../Context/ShopContext";
import DescriptionBox from "../DescriptionBox/DescriptionBox";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  return (
    <div className="text-base flex flex-col h-full w-screen">
      <h1 className="text-lg mt-5 mx-auto w-5/6 lg:w-auto lg:text-2xl font-semibold lg:ml-36">
        {product.name}
      </h1>
      <div className="flex w-5/6 mt-1 mx-auto lg:ml-36 text-sm font-light text-slate-600">
        <div className="flex items-center">
          <Rating rating={product.rating} />
        </div>
        <p className="ml-[85px]">({product.rating * 123})</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-5/6 flex lg:3/6 mx-auto lg:w-auto lg:ml-[138px] mt-5 p-2">
          <img className="lg:w-[480px] lg:h-[620px]" src={product.image} alt="" />
        </div>
        <div className="w-5/6 lg:w-3/6 mt-1 lg:mt-5 lg:p-2 mx-auto">
          <div className="flex space-x-5 text-lg font-semibold mt-5">
            <p className="text-red-600">${product.new_price}</p>
            <p className="text-[#818181] line-through">${product.old_price}</p>
          </div>
          <div className="mt-5">
            <h2 className="font-semibold text-xl">Select Size</h2>
            <div className="flex text-sm items-center justify-between lg:w-2/5 lg:justify-around mt-5">
              <div onClick={() => setSize("S")} className={` w-11 h-11 flex justify-center items-center border-slate-800 cursor-pointer ${size === 'S' ? "bg-black text-white" : "border-[1px]"}`}>
                S
              </div>
              <div onClick={() => setSize("M")} className={` w-11 h-11 flex justify-center items-center border-slate-800 cursor-pointer ${size === 'M' ? "bg-black text-white" : "border-[1px]"}`}>
                M
              </div>
              <div onClick={() => setSize("L")} className={` w-11 h-11 flex justify-center items-center border-slate-800 cursor-pointer ${size === 'L' ? "bg-black text-white" : "border-[1px]"}`}>
                L
              </div>
              <div onClick={() => setSize("XL")} className={` w-11 h-11 flex justify-center items-center border-slate-800 cursor-pointer ${size === 'XL' ? "bg-black text-white" : "border-[1px]"}`}>
                Xl
              </div>
              <div onClick={() => setSize("2XL")} className={` w-11 h-11 flex justify-center items-center  border-slate-800 cursor-pointer ${size === '2XL' ? "bg-black text-white" : "border-[1px]"}`}>
                2Xl
              </div>
              <div onClick={() => setSize("3XL")} className={` w-11 h-11 flex justify-center items-center  border-slate-800 cursor-pointer ${size === '3XL' ? "bg-black text-white" : "border-[1px]"}`}>
                3Xl
              </div>
            </div>
          </div>

          <div className="h-16">
            <button
              onClick={() => {
                size ? addToCart(product.id, size) : alert("Select the size of the product!");
              }}
              className="w-full pt-2 pb-2 pr-6 pl-6 text-sm mt-6 bg-red-500 text-white lg:active:bg-red-400 active:scale-105 active:origin-center transition-all"
            >
              ADD TO CART
            </button>
            
          </div>
          {window.innerWidth > 767 ? <div><DescriptionBox /></div> : null}
        </div>
      </div>
      {window.innerWidth < 767 ? <DescriptionBox /> : null}
    </div>
  );
};

export default ProductDisplay;
