import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div
      className={`group ${
        window.innerWidth < 767 ? "w-48" : null
      } md:w-64 h-full hover:scale-105 transition-transform duration-300 ease-linear cursor-pointer px-3 py-1`}
    >
      <Link to={`/product/${props.id}`}>
        <div onClick={window.scrollTo(0, 0)}>
          <div className={`rounded-lg overflow-hidden`}>
            <img
              className="group-hover:scale-110 transition-transform ease-linear duration-700 delay-75"
              src={props.image}
              alt=""
            />
          </div>
          <div>
            <h2
              className={`${
                window.innerWidth < 767 ? "w-[165px] text-xs text-[13px]" : null
              } mt-2  md:w-56`}
            >
              {props.name}
            </h2>
            <div className="flex space-x-2 mt-1 font-semibold">
              <p className="text-sm md:text-base">${props.new_price}</p>
              <p className="text-sm md:text-base line-through opacity-50">
                ${props.old_price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
