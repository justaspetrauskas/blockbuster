import React from "react";
import "./style.css";

interface ButtonProps {
  children?: React.ReactNode;
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={["blockbuster-button", `blockbuster-button--${size}`].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {children && <i className="blockbuster-button--icon">{children}</i>}

      <span className="blockbuster-button--title">{label}</span>
    </button>
  );
};

export default Button;
