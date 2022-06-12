import React, { useEffect, useState } from "react";
import Button from "../../General/Button/Button";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../../redux/store/store";
import LikeIcon from "../../General/LikeIcon/LikeIcon";
import { handleLikeProgram } from "../../../redux/slices/wishlistSlice";
import ContentWrapper from "../../General/ContentWrapper/ContentWrapper";
import InfoPill from "../../General/InfoPill/InfoPill";

import { Link } from "react-router-dom";

interface ProgramEssentialsProps {
  data: Record<string, any>;
}

const ProgramEssentials = ({ data }: ProgramEssentialsProps) => {
  const dispatch = useDispatch();
  const programs = useSelector(selectWishlist);

  const copyToClipboard = async () => {
    let linkToCopy: string = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(linkToCopy);
      //   show success message
    } else {
      //   show error message
    }
  };

  const handleLike = () => {
    dispatch(handleLikeProgram(data));
  };

  const playTrailer = () => {
    console.log("It should play the trailer open");
  };

  return (
    <div className="program-essentials">
      <ContentWrapper>
        <div className="program-essentials--top-row ">
          <div className="program-essentials--summary ">
            <div className="program-essentials--summary-title">
              <h1 className="program-title font-Alata">{data.title}</h1>
              <span className="program-release-year">
                {data.plprogram$year}
              </span>
            </div>
            {/* options */}
            <div className="program-essentials--row">
              <Button label={"Add to wishlist"} onClick={handleLike}>
                <LikeIcon id={data.id} />
              </Button>
              {data.trailerURL && (
                <Button label={"Play Trailer"} onClick={playTrailer}>
                  <BsPlayCircle />
                </Button>
              )}
              <Button label={"Share the link"} onClick={copyToClipboard}>
                <AiOutlineShareAlt />
              </Button>
            </div>
            {/* summary  */}
            <div className="grid grid-flow-col gap-2 auto-cols-max mt-4">
              <InfoPill label="Runtime:">{data.runtime}</InfoPill>
              <InfoPill label="Release:">{data.releaseYear}</InfoPill>
              <InfoPill label="Genre:">
                {data.genre.map((genre: string, index: number) => (
                  <Link to={`genre/${genre}`} key={index} className="link">
                    {index > 0 && ", "}
                    {genre}
                  </Link>
                ))}
              </InfoPill>
            </div>
          </div>
          <div className="program-essentials--image">
            <img src={data.poster.posterImageUrl} alt={data!.title} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProgramEssentials;
