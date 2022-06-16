import React, { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import { HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectInitialGenres,
  selectWishlist,
  selectSubmenuState,
} from "../../../redux/store/store";
import "./style.css";

import WishlistCard from "../WishlistCard/wishlistCard";
import { closeMenu } from "../../../redux/slices/headerSlice";
import Icon from "../../General/Icon/Icon";
import LinkElement from "../../General/LinkElement/LinkElement";

interface SubMenuProps {
  submenuType: "movies" | "wishlist";
}

const SubMenu = ({ submenuType }: SubMenuProps) => {
  const movieGenres = useSelector(selectInitialGenres);
  const wishlist = useSelector(selectWishlist);
  const subMenuVisible = useSelector(selectSubmenuState);
  const dispatch = useDispatch();

  const handleCloseSubmenu = () => {
    dispatch(closeMenu("submenu"));
  };
  const handleCloseSideMenu = () => {
    dispatch(closeMenu("submenu"));
    dispatch(closeMenu("sidebar"));
  };

  return (
    <div
      className={`submenu-wrapper ${subMenuVisible ? "left-4" : "left-[100%]"}`}
    >
      <div
        className={`submenu-title relative submenu-title--${
          subMenuVisible ? "open" : "closed"
        } sticky top-0 z-[105]`}
      >
        <button
          title="Go back"
          className="inline-flex pr-4 absolute"
          onClick={handleCloseSubmenu}
        >
          <Icon icon={"arrow"} size={"large"} />
        </button>
        <h2 className="text-center text-lg flex-1 capitalize font-Alata">
          {submenuType}
        </h2>
      </div>
      <ul className="w-full flex flex-col">
        {submenuType === "movies" && (
          <LinkElement primary to={"movies"} label={"All Movies"} />
        )}
        {submenuType === "movies" &&
          movieGenres.map((genre) => (
            <LinkElement
              primary
              to={`movies/genre/${genre}`}
              clickHandler={handleCloseSideMenu}
              label={genre}
              key={genre}
            />
          ))}
        {submenuType === "wishlist" && (
          <LinkElement
            primary
            to={`wishlist`}
            classes={["border-blockbusterBlue", "border-b"]}
            clickHandler={handleCloseSideMenu}
            label={"Open Wishlist"}
          />
        )}
        {submenuType === "wishlist" &&
          wishlist.map((item) => (
            <WishlistCard
              item={item}
              key={item.id}
              closeSubmenu={handleCloseSubmenu}
            />
          ))}
      </ul>
    </div>
  );
};

export default SubMenu;
