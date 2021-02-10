import React from "react";
import { Element } from "./Select.style";

type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Select = ({ options, value, onChange, style, className }: Props) => {
  return (
    <Element
      value={value}
      onChange={onChange}
      style={style}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Element>
  );
};

export default Select;
