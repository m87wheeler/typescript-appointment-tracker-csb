import React from "react";
import { Container, Element, Checkbox, StyledLabel } from "./RadioGroup.style";

type Option = {
  value: string;
  label: string;
};

interface Props {
  name: string;
  checked: string | number;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}

const RadioGroup = ({
  name,
  checked,
  options,
  onChange,
  style,
  className
}: Props) => {
  return (
    <Container style={style} className={className}>
      {options.map((option) => (
        <StyledLabel
          label={option.label}
          checked={checked === option.value}
          key={option.value}
        >
          <Element
            type="radio"
            name={name}
            value={option.value}
            checked={checked === option.value}
            onChange={onChange}
          />
          <Checkbox checked={checked === option.value} />
        </StyledLabel>
      ))}
    </Container>
  );
};

export default RadioGroup;
