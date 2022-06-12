import React from "react";
import "./style.css";
import { BsImage } from "react-icons/bs";

interface ContentPlaceholderProps {
  image?: boolean;
}

const ContentPlaceholder = ({ image = true }: ContentPlaceholderProps) => {
  return (
    <div data-placeholder className="placeholder-image ">
      {image && <BsImage />}
      <span className="placeholder-text">{image && "No Image..."}</span>
    </div>
  );
};

export default ContentPlaceholder;
