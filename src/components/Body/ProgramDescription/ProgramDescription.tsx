import React from "react";
import Container from "../../General/ContentWrapper/ContentWrapper";
import "./style.css";

interface ProgramDescriptionProps {
  description: string;
}

const ProgramDescription = ({ description }: ProgramDescriptionProps) => {
  return (
    <Container size={"screen"}>
      <div className="py-4 relative min-h-[40vh]">
        <Container size={"medium"}>
          <h1 className=" font-Alata text-4xl font-bold border-b inline-block text-blockbusterBlue border-blockbusterBlue">
            Storyline
          </h1>
          <div className="description-content py-2 mt-8">{description}</div>
        </Container>
      </div>
    </Container>
  );
};

export default ProgramDescription;
