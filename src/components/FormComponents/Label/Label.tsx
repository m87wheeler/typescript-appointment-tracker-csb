import React from "react";
import { Wrapper } from "./Label.style";
import Typography from "../../shared_ui/Typography/Typography";

interface Props {
  label: string;
  required?: boolean;
  color?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Label = ({
  label,
  required,
  color,
  children,
  style,
  className
}: Props) => {
  return (
    <Wrapper style={style} className={className}>
      {label && (
        <Typography size="sm" weight="500" color={color || "#111"}>
          {label}
          {required && (
            <Typography
              element="span"
              color="crimson"
              style={{ paddingLeft: ".1rem" }}
            >
              *
            </Typography>
          )}
        </Typography>
      )}
      {children}
    </Wrapper>
  );
};

export default Label;
