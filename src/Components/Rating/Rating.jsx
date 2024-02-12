import React from "react";
import brightStar from "../Assets/star_icon.png";
import dullStar from "../Assets/star_dull_icon.png";

const Rating = (props) => {
  return (
    <>
      {props.rating === 5 ? (
        <div className="flex space-x-1 w-4 items-center">
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
        </div>
      ) : props.rating === 4 ? (
        <div className="flex space-x-1 w-4 items-center">
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={dullStar} alt="" />
        </div>
      ) : props.rating === 3 ? (
        <div className="flex space-x-1 w-4 items-center ">
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
        </div>
      ) : rprops.rating === 2 ? (
        <div className="flex space-x-1 w-4 items-center">
          <img src={brightStar} alt="" />
          <img src={brightStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
        </div>
      ) : props.rating === 1 ? (
        <div className="flex space-x-1 w-4 items-center">
          <img src={brightStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
          <img src={dullStar} alt="" />
        </div>
      ) : null}
    </>
  );
};

export default Rating;
