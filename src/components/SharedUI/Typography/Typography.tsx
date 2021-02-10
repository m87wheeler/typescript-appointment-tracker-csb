import React from "react";
import { Wrapper, Para, Span } from "./Typography.style";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  element?: "p" | "span";
  weight?: 300 | 400 | 500 | 700 | 900 | "300" | "400" | "500" | "700" | "900";
  color?: string;
  align?: "left" | "center" | "right";
  transform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  variant?: "default" | "monospace";
  children: any | any[];
  style?: React.CSSProperties;
  className?: string;
}

const Typography = ({
  element = "p",
  size = "md",
  weight = 400,
  color = "#111",
  align = "left",
  transform = "none",
  variant = "default",
  children,
  style,
  className
}: Props) => {
  switch (element) {
    case "p":
      return (
        <Para
          as={Wrapper}
          size={size}
          weight={weight}
          color={color}
          align={align}
          transform={transform}
          variant={variant}
          element={element}
          style={style}
          className={className}
        >
          {children}
        </Para>
      );
    case "span":
      return (
        <Span
          as={Wrapper}
          size={size}
          weight={weight}
          color={color}
          align={align}
          transform={transform}
          variant={variant}
          element={element}
          style={style}
          className={className}
        >
          {children}
        </Span>
      );
    default:
      return (
        <Para
          as={Wrapper}
          size={size}
          weight={weight}
          color={color}
          align={align}
          transform={transform}
          variant={variant}
          element={element}
          style={style}
          className={className}
        >
          {children}
        </Para>
      );
  }
};

export default Typography;
