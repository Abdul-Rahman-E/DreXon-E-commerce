import React, { useState } from "react";
import drop_down from "../Assets/dropdown_icon.png"
import profile from "../Assets/profile.png"

const DescriptionBox = () => {
  const [boxStatus, setBoxStatus] = useState(false);
  return (
    <div className="w-screen flex justify-center mt-8 mb-14">
      <div className="flex flex-col">
        <div className="flex flex-col w-screen">
          <div
            onClick={() => setBoxStatus(!boxStatus)}
            className="w-5/6 md:w-[750px] mx-auto md:mx-0 pt-1 pb-1 items-center justify-center cursor-pointer tracking-widest font-semibold border-b-[1px]"
          >
            <span className="flex items-center justify-between">Product Description<img className={`${boxStatus ? "rotate-180 transition-transform duration-300 ease-in" : "rotate-0 transition-transform duration-300 ease-in"}`} src={drop_down} alt="" /></span>
          </div>
          {boxStatus ? (
            <div className="w-5/6 md:w-3/6 mx-auto md:mx-0 flex flex-col ">
              <p className="text-sm pt-3 w-full">
                Discover timeless elegance and contemporary style in our men's
                dress collection, offering a curated selection of sophisticated
                apparel. From tailored suits to refined formalwear, elevate your
                wardrobe with premium craftsmanship and versatile designs
                suitable for any occasion. You can wash and dry at home—no
                ironing required. Pair them with our Traveler Shorts for a
                sharp, summer-ready look.
              </p>
            </div>
          ) : null}
          <div className="w-5/6 mx-auto md:mx-0 mt-10 items-center md:w-[750px] flex flex-col justify-center cursor-pointer tracking-widest text-xl font-semibold">
            Customer Reviews(122)
            <div className="w-full flex flex-col mt-8 mb-8">
              <div className="w-5/6 flex">
                <img className="w-14 h-14" src={profile} alt="" />
                <div className="ml-2">
                  <h2 className="text-lg font-normal">John Aaron</h2>
                  <p className="text-sm font-normal mt-2">Very Good! I recommend this to all. must try.</p>
                </div>
              </div>
              <hr className="mb-4 mt-4"/>
              <div className="w-5/6 flex">
                <img className="w-14 h-14" src={profile} alt="" />
                <div className="ml-2">
                  <h2 className="text-lg font-normal">Jennie Wilson</h2>
                  <p className="text-sm font-normal mt-2">Feel like the paradise wrapped over me. Wonderful purchase!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
