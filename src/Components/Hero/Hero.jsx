import React from "react";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero h-[600px] md:h-screen bg-gradient-to-b from-[#163031] to-[#ffffff] flex items-center justify-evenly font-poppins overflow-hidden">
      <div className="ml-16 hero-left p-10 md:ml-0">
        <h2 className="text-lg font-medium ">NEW ARRIVALS ONLY</h2>
        <div className="p-50">
          <div className="hand flex">
            <p className="text-6xl text-orange-400">NEW</p>
          </div>
          <p className="text-6xl">collections</p>
          <p className="text-4xl md:text-6xl">for everyone</p>
          <div>
            <div
              onClick={() => {
                const element = document.querySelector(".popular");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="mt-10 tracking-wide bg-[#505f37] text-white p-2 w-24 text-sm hover:bg-[#5e6f42] cursor-pointer"
            >
              SHOP NOW
            </div>
          </div>
        </div>
      </div>
      <div className="invisible h-[1000px] p-10 hero-right overflow-hidden md:visible md:h-screen">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
