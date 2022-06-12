import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsBookmarkHeart } from "react-icons/bs";
import ContentWrapper from "../General/ContentWrapper/ContentWrapper";
import "./style.css";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../redux/store/store";

const HeaderComponent = () => {
  const wishlist = useSelector(selectWishlist);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   console.log(pageId);

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    if (mobileMenuOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }
  }, [mobileMenuOpen]);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <ContentWrapper size="screen">
        <div className="flex flex-row items-center justify-between">
          <div className="header-brand">
            <Link to={"/"}>Blockbuster</Link>
          </div>
          {/* large screen menu */}
          <div className="md:flex flex-row items-center hidden">
            <nav className="header-navigation ">
              <Link to="movies" className="header-link">
                Movies
              </Link>
              <Link to="series" className="header-link">
                Series
              </Link>
            </nav>
            <nav className="header-navigation--extra relative">
              <Link to="wishlist" className="header-link wishlist-link">
                <span>Wishlist</span>
                <span>
                  <BsBookmarkHeart />
                </span>
                {wishlist.length > 0 && (
                  <span className="wishlist-counter">{wishlist.length}</span>
                )}
              </Link>
              {/* <div className="wishlist-summary absolute">
                This shoulw be wishlist
              </div> */}
            </nav>
          </div>
          {/* small screen menu */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="hamburger-menu"
            onClick={handleOpenMobileMenu}
          >
            <span className="burger-slice "></span>
            <span className="burger-slice "></span>
            <span className="burger-slice "></span>
          </button>
        </div>
      </ContentWrapper>
      {mobileMenuOpen && (
        <div
          className={`mobile-menu--${mobileMenuOpen && `open`}`}
          id="mobile-menu"
        >
          <div className="h-full flex items-center justify-center">
            <nav className="mobile-navigation max-w-[12rem] mx-auto ">
              <Link
                to="movies"
                className="header-link mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="series"
                className="header-link mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Series
              </Link>

              <Link
                to="wishlist"
                className="header-link wishlist-link mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="wishlist-counter">{wishlist.length}</span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
