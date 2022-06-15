import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsBookmarkHeart } from "react-icons/bs";
import ContentWrapper from "../General/ContentWrapper/ContentWrapper";
import "./style.css";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../redux/store/store";
import Sidebar from "./Sidebar/Sidebar";

const HeaderComponent = () => {
  const wishlist = useSelector(selectWishlist);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   console.log(pageId);

  // useEffect(() => {
  //   let body = document.getElementsByTagName("body")[0];
  //   if (mobileMenuOpen) {
  //     body.style.overflowY = "hidden";
  //   } else {
  //     body.style.overflowY = "visible";
  //   }
  // }, [mobileMenuOpen]);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      <ContentWrapper size="screen">
        <div className="flex flex-row items-center justify-between">
          <div className="header-brand">
            <Link to={"/"}>Blockbuster</Link>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className={`hamburger-menu ${
              mobileMenuOpen ? "hamburger-open" : "hamburger-closed"
            }`}
            onClick={handleOpenMobileMenu}
          >
            <span className="burger-slice "></span>
            <span className="burger-slice "></span>
            <span className="burger-slice "></span>
          </button>
        </div>
      </ContentWrapper>

      <Sidebar isOpen={mobileMenuOpen} clickHandler={linkClick} />
    </header>
  );
};

export default HeaderComponent;
