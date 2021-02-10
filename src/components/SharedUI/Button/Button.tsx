import React from "react";
import { Element } from "./Button.style";

interface Props {
  onClick: () => void;
  children: string;
  style?: React.CSSProperties;
  className?: string;
  size?: "xs" | "sm" | "md";
  color?: "primary" | "secondary" | "confirm" | "danger";
  variant?: "default" | "border";
}

const Button = ({
  onClick,
  children,
  style,
  className,
  size = "md",
  color = "primary",
  variant = "default"
}: Props) => {
  return (
    <Element
      onClick={onClick}
      style={style}
      className={className}
      size={size}
      color={color}
      variant={variant}
    >
      {children}
    </Element>
  );
};

export default Button;
