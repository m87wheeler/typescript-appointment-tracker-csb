import styled, { css } from "styled-components";

export const Element = styled.button<{
  size: string;
  color: string;
  variant: string;
}>`
  background: ${(p) => p.theme.palette.common.black};
  color: ${(p) => p.theme.palette.common.white};
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  border-radius: 0;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
    border: ${(p) => `.1rem solid ${p.theme.palette.common.white}`};
  }

  ${(p) =>
    p.size === "xs" &&
    css`
      min-width: 0rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `}
  ${(p) =>
    p.size === "sm" &&
    css`
      min-width: 3rem;
      padding: 0.25rem;
    `}
  ${(p) =>
    p.size === "md" &&
    css`
      min-width: 5rem;
      padding: 0.25rem 0.5rem;
    `}

  ${(p) =>
    p.color === "primary" &&
    css`
      background: ${(p) => p.theme.palette.primary.main};
    `}
  ${(p) =>
    p.color === "secondary" &&
    css`
      background: ${(p) => p.theme.palette.secondary.main};
    `}
  ${(p) =>
    p.color === "danger" &&
    css`
      background: ${(p) => p.theme.palette.common.danger};
    `}
  ${(p) =>
    p.color === "confirm" &&
    css`
      background: ${(p) => p.theme.palette.common.confirm};
    `}

  ${(p) => p.variant === "default" && css``};
  ${(p) => p.variant === "border" && css``};
`;
