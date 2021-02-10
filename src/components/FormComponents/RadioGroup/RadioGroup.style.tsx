import styled, { css } from "styled-components";
import Label from "../Label/Label";

const StyledLabel = styled(({ checked, ...rest }) => <Label {...rest} />)<{
  checked: boolean;
}>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0.25rem 0.4rem;
  background: ${(p) => (p.checked ? p.theme.palette.secondary.main : "#fff")};
  color: ${(p) => p.theme.palette.common.black};
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  font-weight: ${(p) => (p.checked ? "500" : "400")};
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  p {
    line-height: 1;
  }

  &:hover {
    background: ${(p) => p.theme.palette.secondary.main};
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.1rem;

  ${StyledLabel}:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  ${StyledLabel}:last-of-type {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const Element = styled.input`
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
`;

const Checkbox = styled.div<{ checked: boolean }>`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  border-radius: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    transition: background 0.3s ease-in-out;
  }

  ${(p) =>
    p.checked &&
    css`
      &:after {
        background: ${(p) => p.theme.palette.common.black};
      }
    `}
`;

export { Container, Element, Checkbox, StyledLabel };
