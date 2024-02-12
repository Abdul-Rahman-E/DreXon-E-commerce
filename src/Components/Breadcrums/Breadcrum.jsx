import React from "react";
import sideArrow from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex ml-5 text-xs md:text-sm md:ml-32 mt-4 pt-1 pb-1 pr-4 pl-4 items-center">
      <p>{`${product.category[0]}`.toUpperCase()}{`${product.category}`.slice(1)}</p>
      <img className="h-3 mx-1 md:h-4" src={sideArrow} alt="" />
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
