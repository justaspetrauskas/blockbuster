import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./style.css";

interface LinkProps {
  children?: React.ReactNode;
  primary?: boolean;
  size?: "small" | "medium" | "large" | "fullWidth";
  to: string;
  icon?: boolean;
  classes?: string[];
  label?: string;
  clickHandler?: () => void;
}

const LinkElement = ({
  children = undefined,
  primary = false,
  size = "fullWidth",
  to = "/",
  classes = undefined,
  icon = true,
  label = undefined,
}: LinkProps) => {
  const mode = primary ? "blockbuster-link--primary" : "";
  return (
    <Link
      to={to}
      className={[
        `blockbuster-link`,
        `blockbuster-link--${size}`,
        icon && `blockbuster-link--icon`,
        classes && [...classes].join(" "),
        mode,
      ].join(" ")}
    >
      {icon && <Icon icon={"arrow"} size={"small"} />}
      {label && <span>{label || to}</span>}
      {children}
    </Link>
  );
};

export default LinkElement;
