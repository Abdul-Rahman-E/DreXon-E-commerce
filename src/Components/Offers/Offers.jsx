import React from "react";
import "../../index.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <>
      <div className="h-[80vh] w-screen md:h-[400px] bg-gradient-to-t from-teal-300 to-white flex flex-col justify-center md:flex-row items-center md:justify-start">
        <div className="h-[250px] md:w-auto md:h-[350px] ml-32">
          <img className="h-full" src={exclusive_image} alt="" />
        </div>
        <div className="ml-4 md:ml-16">
          <h2 className="text-5xl md:text-6xl">Exclusive</h2>
          <h2 className="mt-5 text-5xl md:text-6xl">Offers For You</h2>
          <p className="mt-2">ONLY ON BEST SELLERS PRODUCTS</p>
          <div onClick={() => {
            const element = document.querySelector('.collection');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }} className="mt-6 tracking-wide bg-red-600 text-white p-2 w-32 text-center text-sm cursor-pointer hover:bg-red-500">
            Check Now
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-gradient-to-b  from-teal-300 to-white"></div>
    </>
  );
};

export default Offers;
