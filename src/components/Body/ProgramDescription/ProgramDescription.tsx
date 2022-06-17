import React from "react";
import Container from "../../General/ContentWrapper/ContentWrapper";
import "./style.css";

interface ProgramDescriptionProps {
  description: string;
}

const ProgramDescription = ({ description }: ProgramDescriptionProps) => {
  return (
    <div className="py-4 relative min-h-[40vh]">
      <h1 className=" font-Alata  underline underline-offset-8 text-4xl font-bold  inline-block text-blockbusterBlue ">
        Storyline
      </h1>
      <div className="description-content py-2 mt-8">{description}</div>
    </div>
  );
};

export default ProgramDescription;
