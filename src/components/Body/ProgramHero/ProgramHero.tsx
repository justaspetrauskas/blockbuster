import React from "react";
import "./style.css";

interface ProgramHeorProps {
  trailerURL?: string;
  imageURL?: string;
  children?: React.ReactNode;
  gradient?: boolean;
  primary?: boolean;
}

const ProgramHero = ({
  trailerURL,
  imageURL,
  children,
  gradient = true,
  primary = true,
}: ProgramHeorProps) => {
  return (
    <div
      className={`program-header--hero-${primary ? "primary" : "secondary"}`}
      style={
        imageURL
          ? {
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${imageURL})`,
            }
          : {}
      }
    >
      {gradient! && <div className="program-header--gradient"></div>}
      {/* trailer */}
      {children && <div className="program-header--title">{children}</div>}
    </div>
  );
};

export default ProgramHero;
