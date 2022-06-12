import React from "react";
import "./style.css";

interface ContentWrapperProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge" | "screen";
  backgroundColor?: string;
}

const ContentWrapper = ({
  children,
  size = "large",
  backgroundColor,
}: ContentWrapperProps) => {
  return (
    <div
      className={["content-container", `content-container--${size}`].join(" ")}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
