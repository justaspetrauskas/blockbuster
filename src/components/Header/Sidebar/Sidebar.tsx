import React, { useContext, useEffect, useState } from "react";
// elements
import SubMenu from "../SubMenu/SubMenu";
import Button from "../../General/Button/Button";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMenuState, closeMenu } from "../../../redux/slices/headerSlice";
import {
  selectInitialGenres,
  selectSidebarState,
  selectSubmenuState,
} from "../../../redux/store/store";

// style
import "./style.css";
import Icon from "../../General/Icon/Icon";

interface SidebarProps {}

const menuItems = ["movies", "series", "wishlist"];

const Sidebar = () => {
  const sidebar = useSelector(selectSidebarState);
  const dispatch = useDispatch();

  const [headerHeight, setHeaderHeight] = useState(0);

  const [subMenuType, setSubMenuType] =
    useState<"movies" | "wishlist">("movies");

  useEffect(() => {
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    setHeaderHeight(headerHeight + 0.5);
  }, [headerHeight]);

  const handleOpenSubMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonValue: string = e.currentTarget.value;
    if (buttonValue === "movies" || buttonValue === "wishlist") {
      dispatch(changeMenuState("submenu"));
      setSubMenuType(buttonValue === "movies" ? "movies" : "wishlist");
    }
  };

  return (
    <div
      className={`sidebar-wrapper h-[calc(100%-4rem)] ${
        sidebar ? "translate-x-0" : "translate-x-full"
      } `}
      style={{
        top: headerHeight,
      }}
    >
      <nav className="sidebar-navigation">
        {menuItems.map((item) => (
          <Button
            primary
            onClick={(e) => handleOpenSubMenu(e)}
            value={item}
            key={item}
          >
            <span>{item}</span>
            <Icon icon={"arrow"} size={"medium"} />
          </Button>
        ))}
      </nav>

      <SubMenu
        // isOpen={isSubMenuOpen}
        // closeSubmenu={handleCloseSubmenu}
        submenuType={subMenuType}
      />
    </div>
  );
};

export default Sidebar;
