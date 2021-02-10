import styled, { css } from "styled-components";
import Typography from "../Typography/Typography";

interface IProps {
  icon: string | undefined;
  text: string | undefined;
  color: string;
  size: string;
  disabled: boolean;
  flat: boolean;
}

const contrastColor = css<{ color?: string }>`
  ${(p) =>
    p.color === "primary" ||
    p.color === "secondary" ||
    p.color === "danger" ||
    p.color === "confirm"
      ? `rgb(${p.theme.palette.primary.contrastText})`
      : `rgb(${p.theme.palette.secondary.contrastText})`}
`;

const colorOptions = css<{ color?: string }>`
  ${(p) =>
    p.color === "primary"
      ? `rgb(${p.theme.palette.primary.main})`
      : p.color === "secondary"
      ? `rgb(${p.theme.palette.secondary.main})`
      : p.color === "confirm"
      ? `rgb(${p.theme.palette.common.confirm})`
      : p.color === "danger"
      ? `rgb(${p.theme.palette.common.danger})`
      : p.color === "warning"
      ? `rgb(${p.theme.palette.common.warning})`
      : `rgb(${p.theme.palette.common.grey[400]})`};
`;

export const StyledTypography = styled(Typography)`
  text-transform: capitalize;
  text-align: center;
`;

const Button = styled.button<IProps>`
  padding: 0.5rem 0.75rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${(p) => (p.icon && p.text ? ".5rem" : "0")};
  align-items: center;
  border: none;
  border-radius: 0;
  background: ${colorOptions};
  color: ${contrastColor};
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  ${StyledTypography} {
    color: ${contrastColor};
  }

  &:disabled {
    background: ${(p) => `rgb(${p.theme.palette.common.grey[400]})`};
    color: ${(p) => `rgb(${p.theme.palette.common.grey[200]})`};
    box-shadow: none;
    cursor: default;

    ${StyledTypography} {
      color: ${(p) => `rgb(${p.theme.palette.common.grey[200]})`};
    }

    &:hover {
      filter: brightness(1);
    }
  }
`;

export const ContainedVariant = styled(Button)`
  box-shadow: ${(p) => (p.flat ? "none" : p.theme.shadow.main)};
`;

export const TextVariant = styled(Button)`
  background: transparent;
  color: ${colorOptions};

  &:hover {
    background: ${(p) =>
      p.color === "primary"
        ? `rgba(${p.theme.palette.primary.main}, .2)`
        : p.color === "secondary"
        ? `rgba(${p.theme.palette.secondary.main}, .2)`
        : p.color === "confirm"
        ? `rgba(${p.theme.palette.common.confirm}, .2)`
        : p.color === "danger"
        ? `rgba(${p.theme.palette.common.danger}, .2)`
        : p.color === "warning"
        ? `rgba(${p.theme.palette.common.warning}, .2)`
        : `rgba(${p.theme.palette.common.grey[400]}, .2)`};
  }
`;

export const OutlinedVariant = styled(Button)`
  box-shadow: ${(p) => (p.flat ? "none" : p.theme.shadow.main)};
  border: 0.1rem solid ${contrastColor};
`;
