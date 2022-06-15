import React, { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import { HiArrowSmRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectInitialGenres,
  selectWishlist,
} from "../../../redux/store/store";
import "./style.css";

import WishlistCard from "../WishlistCard/wishlistCard";

interface SubMenuProps {
  isOpen: boolean;
  closeSubmenu: () => void;
  submenuType: "movies" | "wishlist";
}

const SubMenu = ({ isOpen, closeSubmenu, submenuType }: SubMenuProps) => {
  const movieGenres = useSelector(selectInitialGenres);
  const wishlist = useSelector(selectWishlist);

  useEffect(() => {
    console.log("Wishlist", wishlist);
  }, [wishlist]);

  return (
    <div className={`submenu-wrapper ${isOpen ? "left-4" : "left-[100%]"}`}>
      <div
        className={`submenu-title submenu-title--${
          isOpen ? "open" : "closed"
        } sticky top-0 z-[105]`}
      >
        <button
          title="Go back"
          className="inline-flex pr-8"
          onClick={closeSubmenu}
        >
          <BiRightArrow />
        </button>
        <h2 className="text-center flex-1 -translate-x-8">
          {submenuType === "wishlist" ? "Wishlist" : "Movies"}
        </h2>
      </div>
      <ul className="w-full flex flex-col">
        {submenuType === "movies" && (
          <Link to={`movies`}>
            <li className="submenu-link">
              <i className="arrow-icon">
                <HiArrowSmRight />
              </i>
              <span>All Movies</span>
            </li>
          </Link>
        )}
        {submenuType === "movies" &&
          movieGenres.map((genre) => (
            <Link to={`movies/${genre}`} key={genre} onClick={closeSubmenu}>
              <li className="submenu-link">
                <i className="arrow-icon">
                  <HiArrowSmRight />
                </i>
                <span>{genre}</span>
              </li>
            </Link>
          ))}
        {submenuType === "wishlist" &&
          wishlist.map((item) => (
            <WishlistCard
              item={item}
              key={item.id}
              closeSubmenu={closeSubmenu}
            />
          ))}
      </ul>
    </div>
  );
};

export default SubMenu;
