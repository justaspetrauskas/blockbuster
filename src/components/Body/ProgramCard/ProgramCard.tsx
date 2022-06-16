import { Link, useNavigate } from "react-router-dom";

import { handleLikeProgram } from "../../../redux/slices/wishlistSlice";

import "./style.css";
import { useDispatch } from "react-redux";

import LikeIcon from "../../General/LikeIcon/LikeIcon";
import CardImageContainer from "./CardImageContainer";
import React, { useEffect, useState, forwardRef } from "react";
import { BiRightArrow } from "react-icons/bi";

interface ProgramCardProps {
  program: Record<string, any>;
}

const ProgramCard = forwardRef(({ program }: ProgramCardProps, ref?: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mouseOverLike, setMouseOverLike] = useState(false);
  const [mouseOverCard, setMouseOverCard] = useState(false);

  const handleLike = () => {
    dispatch(handleLikeProgram(program));
  };

  const handleNavigate = () => {
    if (!mouseOverLike) {
      navigate(`/movies/${program.id}`, { replace: true });
    }
  };

  return (
    <div
      className="program_card"
      onClick={handleNavigate}
      onMouseOver={() => setMouseOverCard(true)}
      onMouseOut={() => setMouseOverCard(false)}
      ref={ref}
    >
      <div className="program_card-image-wrapper">
        <CardImageContainer
          url={program.poster.cardImageUrl}
          title={program.title}
        />
        <span
          className="icon-wrapper"
          onMouseOver={() => setMouseOverLike(true)}
          onMouseOut={() => setMouseOverLike(false)}
        >
          <i className="icon-like" onClick={handleLike}>
            <LikeIcon id={program.id} />
          </i>
        </span>
        {mouseOverCard && (
          <div className="image-overlay">
            <Link to={`/movies/${program.id}`} className="card-button">
              <span>Find out more</span>
            </Link>
          </div>
        )}
      </div>

      <div className="program_card-content">
        <h2 className="program_card-content--title">{program.title}</h2>
        <span className="py-0 font-light text-[0.8rem] leading-3">
          ({program.releaseYear})
        </span>
      </div>
    </div>
  );
});

export default ProgramCard;
