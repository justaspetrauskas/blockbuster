import React from "react";
import { useSelector } from "react-redux";

import { selectWishlist } from "../../redux/store/store";

const Wishlist = () => {
  const programs = useSelector(selectWishlist);
  // const localWishlist = localStorage.getItem("wishlistArray");
  // const parsed = localWishlist != null && JSON.parse(localWishlist);
  console.log(programs);
  return <div>Wishlist</div>;
};

export default Wishlist;
