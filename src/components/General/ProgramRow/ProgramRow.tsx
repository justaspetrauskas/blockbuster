import React from "react";
import "./style.css";

interface GridWrapperProps {
  children: React.ReactNode;
}

const ProgramRow = ({ children }: GridWrapperProps) => {
  return <div className="grid-wrapper overflow-visible">{children}</div>;
};

export default ProgramRow;
