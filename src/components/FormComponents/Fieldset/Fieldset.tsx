import React from "react";
import { Wrapper, Legend, Summary, Details } from "./Fieldset.style";

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  legend?: string;
  summary?: string;
  details?: string;
}

const Fieldset = ({
  style,
  className,
  children,
  legend,
  summary,
  details
}: Props) => {
  return (
    <Wrapper style={style} className={className}>
      {legend && <Legend>{legend}</Legend>}
      {summary && details && (
        <Details>
          <Summary>{summary}</Summary>
          {details}
        </Details>
      )}
      {children}
    </Wrapper>
  );
};

export default Fieldset;
