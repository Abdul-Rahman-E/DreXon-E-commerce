import React from "react";
import data_product from "../Assets/data.js";
import Item from "../Item/Item.jsx";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col item-center w-screen mb-16 overflow-hidden">
      <div className="flex flex-col items-center mt-10 space-y-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl ">Related Products</h1>
        <hr className="bg-slate-900 h-1 w-32" />
      </div>
      <div className="grid grid-cols-2 md:p-5 justify-items-center lg:flex lg:space-x-8 lg:justify-center mt-10">
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

export default RelatedProducts;
