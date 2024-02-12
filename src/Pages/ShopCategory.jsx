import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import dropArrow from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentSort, setCurrentSort] = useState("name");

  useEffect(() => {
    const productsCopy = [...all_product];
    let sortedCopy = [];

    if (currentSort === "name") {
      sortedCopy = productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "lth") {
      sortedCopy = productsCopy.sort((a, b) => a.new_price - b.new_price);
    } else if (currentSort === "htl") {
      sortedCopy = productsCopy.sort((a, b) => b.new_price - a.new_price);
    } else if (currentSort === "avg") {
      sortedCopy = productsCopy.sort((a, b) => b.rating - a.rating);
    }

    setSortedProducts(sortedCopy);
  }, [currentSort, all_product]);

  return (
    <div className="w-screen flex flex-col items-center mt-8 mb-10">
      <img className="w-[1140px]" src={props.banner} alt="" />
      <div className="w-screen md:w-[1140px] flex justify-between items-center mt-5 mb-5 px-4 md:px-0">
        <p className="text-xs md:text-sm">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <select className="text-xs md:text-sm font-medium px-2 rounded-md shadow-sm shadow-slate-600">
          <option
            onClick={() => {
              setCurrentSort("name");
            }}
            value="Name"
          >
            Name
          </option>
          <option
            onClick={() => {
              setCurrentSort("lth");
            }}
            value="lth"
          >
            Price: Low to High
          </option>
          <option
            onClick={() => {
              setCurrentSort("htl");
            }}
            value="htl"
          >
            Price: High to Low
          </option>
          <option
            onClick={() => {
              setCurrentSort("avg");
            }}
            value="avg"
          >
            Customer Review
          </option>
        </select>
      </div>
      <div className="md:w-[1140px] grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-16 md:gap-10 mb-20 py-4">
        {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="w-44 h-12  bg-[#c0bfc45d] text-slate-600 rounded-full flex justify-center items-center text-sm hover:bg-[#c0bfc47b] cursor-pointer mb-20">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
