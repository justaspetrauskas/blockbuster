import React, { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectInitialGenres } from "../../../redux/store/store";
import SubMenu from "../SubMenu/SubMenu";

import "./style.css";

interface SidebarProps {
  isOpen: boolean;

  clickHandler: () => void;
}

const menuItems = ["movies", "series", "wishlist"];

const Sidebar = ({ isOpen, clickHandler }: SidebarProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSubMenuOpen, setOpenSubMenu] = useState(false);
  const [subMenuType, setSubMenuType] =
    useState<"movies" | "wishlist">("movies");

  useEffect(() => {
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;

    setHeaderHeight(headerHeight + 0.5);
  }, [headerHeight]);

  const handleCloseSubmenu = () => {
    setOpenSubMenu(false);
  };

  const handleOpenSubMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonValue: string = e.currentTarget.value;
    if (buttonValue === "movies" || buttonValue === "wishlist") {
      setOpenSubMenu(!isSubMenuOpen);
      setSubMenuType(buttonValue === "movies" ? "movies" : "wishlist");
    }
  };

  return (
    <div
      className={`sidebar-wrapper h-[calc(100%-${headerHeight}px)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } `}
      style={{
        top: headerHeight,
      }}
    >
      <nav className="sidebar-navigation">
        {menuItems.map((item) => (
          <button
            className="sidebar-link-wrapper"
            onClick={(e) => handleOpenSubMenu(e)}
            value={item}
          >
            <span>{item}</span>

            <i className="arrow-icon">
              <BiRightArrow />
            </i>
          </button>
        ))}
      </nav>

      <SubMenu
        isOpen={isSubMenuOpen}
        closeSubmenu={handleCloseSubmenu}
        submenuType={subMenuType}
      />
    </div>
  );
};

export default Sidebar;
