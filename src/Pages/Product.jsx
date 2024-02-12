import React, { useContext } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="w-full h-full">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
