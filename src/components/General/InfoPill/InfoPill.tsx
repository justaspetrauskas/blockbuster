import React from "react";
import "./style.css";

interface InfoPillProp {
  children?: React.ReactNode;
  label: string;
}

const InfoPill = ({ label, children }: InfoPillProp) => {
  return (
    <div className="infopill">
      <span className="infopill-title">{label}</span>
      <span className="infopill-content">{children}</span>
    </div>
  );
};

export default InfoPill;
