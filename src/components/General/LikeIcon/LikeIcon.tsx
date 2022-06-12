import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../../redux/store/store";

interface LikeIconProps {
  id: string;
}

const LikeIcon = ({ id }: LikeIconProps) => {
  const programs = useSelector(selectWishlist);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const liked = programs.some((e) => e.id === id);
    setLiked(liked);
  }, [programs, id]);

  if (liked) {
    return <AiFillHeart />;
  } else {
    return <AiOutlineHeart />;
  }
};

export default LikeIcon;
