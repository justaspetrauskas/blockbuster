import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import LikeIcon from "../LikeIcon/LikeIcon";
import "./style.css";
import { BsPlayCircle } from "react-icons/bs";

interface IconProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  icon?: "arrow" | "heart" | "share" | "playTrailer";
  liked?: string;
  children?: React.ReactElement;
}

const Icon = ({
  size = "medium",
  icon = "arrow",
  children = undefined,
  liked = undefined,
}: IconProps) => {
  if (!children) {
    return (
      <i className={[`arrow-icon`, `arrow-icon--${size}`].join(" ")}>
        {icon === "arrow" && <HiArrowSmRight />}
        {icon === "heart" && liked && <LikeIcon id={liked} />}
        {icon === "share" && <AiOutlineShareAlt />}
        {icon === "playTrailer" && <BsPlayCircle />}
        {children}
      </i>
    );
  } else {
    return (
      <i className={[`arrow-icon`, `arrow-icon--${size}`].join(" ")}>
        {children}
      </i>
    );
  }
};

export default Icon;
