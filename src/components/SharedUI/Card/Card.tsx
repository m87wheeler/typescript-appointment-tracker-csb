import React from "react";
import { Wrapper } from "./Card.style";

interface Props {
  hover?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Card = ({ hover = false, children, style, className }: Props) => {
  return (
    <Wrapper hover={hover} style={style} className={className}>
      {children}
    </Wrapper>
  );
};

export default Card;
