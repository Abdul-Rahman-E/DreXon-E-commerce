import React, { useEffect, useState } from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <div className="popular p-10 md:p-0 h-full md:h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center space-y-3 mb-10">
        <h1 className="text-2xl md:text-3xl ">POPULAR IN WOMEN</h1>
        <hr className="bg-slate-900 h-1 w-24 md:w-32" />
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 flex-wrap justify-center ">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
