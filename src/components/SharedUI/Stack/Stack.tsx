import React from "react";
import { Wrapper } from "./Stack.style";

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  // spacing?: number;
}

const Stack = ({ style, className, children }: Props) => {
  return (
    // <Wrapper style={style} className={className} spacing={spacing}>
    <Wrapper style={style} className={className}>
      {children}
    </Wrapper>
  );
};

export default Stack;
