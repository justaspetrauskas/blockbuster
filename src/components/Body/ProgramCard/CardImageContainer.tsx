import React from "react";
import ContentPlaceholder from "../../General/ContentPlaceHolder/ContentPlaceholder";
import "./imageContainer.css";

interface CardImageContainerProps {
  url?: string;
  title: string;
}

const CardImageContainer = ({ url, title }: CardImageContainerProps) => {
  if (url) {
    return (
      <img
        className="program_card-image duration-700"
        src={url}
        alt={title}
        loading={"lazy"}
      />
    );
  } else {
    return <ContentPlaceholder />;
  }
};

export default CardImageContainer;
