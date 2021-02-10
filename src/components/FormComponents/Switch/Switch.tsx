import React from "react";
import Typography from "../../shared_ui/Typography/Typography";
import { Wrapper, Button, Element, Container } from "./Switch.style";

interface Props {
  checked: boolean;
  label: string;
  name: string;
  activeLabel: string;
  inactiveLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Switch = ({
  checked,
  name,
  activeLabel,
  inactiveLabel,
  onChange,
  style,
  className
}: Props) => {
  return (
    <Container style={style} className={className}>
      <Wrapper checked={checked}>
        <Button />
        <Element
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </Wrapper>
      {checked ? (
        <Typography size="sm" weight="500">
          {activeLabel}
        </Typography>
      ) : (
        <Typography size="sm" weight="500">
          {inactiveLabel}
        </Typography>
      )}
    </Container>
  );
};

export default Switch;
