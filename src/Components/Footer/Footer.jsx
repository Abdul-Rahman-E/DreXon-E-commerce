import React from "react";
import insta from "../Assets/instagram_icon.png";
import pinint from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="h-[300px] md:h-[400px] flex flex-col items-center justify-evenly bg-slate-300">
      <p className="text-base font-bold md:text-lg">
        DRE<span className="text-xl md:text-2xl">X</span>ON
      </p>
      <ul className="flex space-x-4 md:space-x-10">
        <li className="text-sm md:text-base cursor-pointer">Company</li>
        <li className="text-sm md:text-base cursor-pointer">Products</li>
        <li className="text-sm md:text-base cursor-pointer">Offices</li>
        <li className="text-sm md:text-base cursor-pointer">About</li>
        <li className="text-sm md:text-base cursor-pointer">Contact</li>
      </ul>
      <div className="flex space-x-4 md:space-x-5">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 shadow-sm shadow-slate-400 flex justify-center items-center hover:bg-slate-50 active:scale-105 active:transition-transform rounded-lg">
          <img className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" src={insta} alt="" />
        </div>
        <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 shadow-sm shadow-slate-400 flex justify-center items-center hover:bg-slate-50 active:scale-105 active:transition-transform rounded-lg">
          <img className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" src={pinint} alt="" />
        </div>
        <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 shadow-sm shadow-slate-400 flex justify-center items-center hover:bg-slate-50 active:scale-105 active:transition-transform rounded-lg">
          <img className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" src={whatsapp} alt="" />
        </div>
      </div>
      <div>
        <hr className="bg-slate-900 h-[2px] w-[80vw] md:w-[1140px]" />
      </div>
      <p className="text-sm md:text-base">Copyright @ DREXON - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
