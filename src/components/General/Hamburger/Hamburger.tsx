import React from "react";
import "./style.css";

interface HamburgerProps {
  isOpen: boolean;
  clickHandler: () => void;
}

const Hamburger = ({ isOpen, clickHandler }: HamburgerProps) => {
  return (
    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      className={`hamburger-menu ${
        isOpen ? "hamburger-open" : "hamburger-closed"
      }`}
      onClick={clickHandler}
    >
      <span className="burger-slice "></span>
      <span className="burger-slice "></span>
      <span className="burger-slice "></span>
    </button>
  );
};

export default Hamburger;
