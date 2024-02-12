import React from "react";
import "../../index.css";
import product_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="collection w-screen h-full flex flex-col items-center md:space-y-8 md:p-20 mb-10 overflow-hidden">
      <div className="flex flex-col items-center space-y-3 mt-5 mb-3 md:mb-10 md:mt-8">
        <h1 className="text-2xl md:text-3xl">NEW COLLECTIONS</h1>
        <hr className="bg-slate-900 h-1 w-32" />
      </div>
      <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-12">
        {product_collections.map((item, i) => {
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

export default NewCollections;
