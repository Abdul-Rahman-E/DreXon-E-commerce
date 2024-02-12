import React from "react";
import "../../index.css";

const Newsletter = () => {
  return (
    <div className="w-screen h-[200px] md:h-[300px] bg-teal-700 flex items-center flex-col justify-center">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-xl md:text-4xl font-bold">Get Exclusive Offers On Your Email</h1>
        <p className="text-sm md:text-base">Subscribe to our newsletter and stay updated</p>
      </div>
      <div className="flex mt-5">
        <input className="w-56 p-2 md:w-80 md:p-3 pl-5 rounded-l-full bg-slate-200 border-none outline-none hover:bg-slate-100 focus:bg-slate-50" type="email" placeholder="Your Email id" />
        <button className="text-sm md:text-base bg-slate-950 text-slate-200 pl-10 pr-10 rounded-full -ml-10 hover:text-white active:scale-x-105 active:transition-transform">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
