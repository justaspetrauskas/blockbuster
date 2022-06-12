import React from "react";
import "./style.css";

interface GridWrapperProps {
  children: React.ReactNode;
}

const GridWrapper = ({ children }: GridWrapperProps) => {
  return <div className="grid-wrapper overflow-visible">{children}</div>;
};

export default GridWrapper;
