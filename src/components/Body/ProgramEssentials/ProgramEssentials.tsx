import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../../redux/store/store";
import LikeIcon from "../../General/LikeIcon/LikeIcon";
import { handleLikeProgram } from "../../../redux/slices/wishlistSlice";
import ContentWrapper from "../../General/ContentWrapper/ContentWrapper";
import InfoPill from "../../General/InfoPill/InfoPill";
import Button from "../../General/Button/Button";
import Icon from "../../General/Icon/Icon";

import { Link } from "react-router-dom";

interface ProgramEssentialsProps {
  data: Record<string, any>;
}

const ProgramEssentials = ({ data }: ProgramEssentialsProps) => {
  const dispatch = useDispatch();

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
        <div className="program-essentials--row justify-between ">
          <div className="program-essentials--sumary ">
            <div className="program-essentials--sumary-title">
              <h1 className="program-title ">{data.title}</h1>
              <span className="program-release-year">{data.releaseYear}</span>
            </div>
            {/* options */}
            <div className="program-essentials--row py-2 mt-2 gap-[0.5rem] sm:gap-1 md:gap-2">
              <Button secondary size={"medium"} onClick={handleLike}>
                <Icon icon={"heart"} liked={data.id} />
                <span>Add to Wishlist</span>
              </Button>
              {data.trailerURL && (
                <Button secondary size={"medium"} onClick={playTrailer}>
                  <Icon icon={"playTrailer"} />
                  <span>Play Trailer</span>{" "}
                </Button>
              )}

              <Button secondary size={"medium"} onClick={copyToClipboard}>
                <span className="hidden md:block">
                  <Icon icon={"share"} />
                </span>
                <span>Share the link</span>{" "}
              </Button>
            </div>
            {/* summary  */}
            <div className="flex flex-row text-xs sm:text-sm lg:text-md xs:grid xs:grid-flow-col gap-1 auto-cols-max text-white border-t py-2 border-t-white">
              <InfoPill label="Runtime:">{data.runtime}</InfoPill>
              <InfoPill label="Imdb Rating:">{data.imdbRating}</InfoPill>
              <InfoPill label="Genre:">
                {data.genre.map((genre: string, index: number) => (
                  <Link
                    to={`/movies/genre/${genre}`}
                    key={index}
                    className="program-essentials--link"
                  >
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
