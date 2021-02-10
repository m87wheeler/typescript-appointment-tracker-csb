import React from "react";
import { Wrapper } from "./Input.style";

interface Props {
  type: string;
  name: string;
  value: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Input = ({
  type = "text",
  name,
  value,
  placeholder,
  required,
  disabled,
  onInput,
  style,
  className
}: Props) => {
  return (
    <Wrapper
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onInput={onInput}
      style={style}
      className={className}
    />
  );
};

export default Input;
