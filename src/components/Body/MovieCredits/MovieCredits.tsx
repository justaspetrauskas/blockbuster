import React from "react";
import { CreditData } from "../../../utils/types/data.types";
import CreditCard from "./CreditCard";
import "./style.css";

interface MovieCreditsProps {
  credits: CreditData[];
}
const MovieCredits = ({ credits }: MovieCreditsProps) => {
  return (
    <>
      <h1 className=" font-Alata text-4xl font-bold  underline underline-offset-8 inline-block text-blockbusterBlue">
        Credits
      </h1>
      <div className="credits-row">
        {credits?.map((credit, index) => (
          <CreditCard credit={credit} key={index} />
        ))}
      </div>
    </>
  );
};

export default MovieCredits;
