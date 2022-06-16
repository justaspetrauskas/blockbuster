import React from "react";
import "./style.css";

interface ButtonProps {
  children: React.ReactNode;

  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large" | "fullWidth";
  backgroundColor?: string;
  value?: string;
  onClick?: (e?: any) => void;
}

const Button = ({
  primary = false,
  secondary = false,
  children,
  size = "fullWidth",
  backgroundColor,

  value,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "blockbuster-button--primary"
    : secondary
    ? "blockbuster-button--secondary"
    : "";

  return (
    <button
      className={[
        "blockbuster-button",
        `blockbuster-button--${size}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      value={value}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
