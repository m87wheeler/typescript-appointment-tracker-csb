import styled, { css } from "styled-components";
import Typography from "../../SharedUI/Typography/Typography";

/** set background-color based on entryType */
const typeColor = css<{ type?: string }>`
  ${(p) =>
    p.type === "quotation"
      ? "#8b3e9e"
      : p.type === "sale"
      ? "#459e5b"
      : p.type === "no_show"
      ? "#d83631"
      : "#373d40"};
`;

export const StyledTypography = styled(Typography)`
  color: ${typeColor};
`;

export const MainWrapper = styled.div<{ type: string }>`
  position: relative;
  padding: 0.5rem 1rem 0.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  row-gap: 0.25rem;
  background: #ffffff;
  cursor: pointer;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 100%;
    background: ${typeColor};
    z-index: 5;
  }
`;

export const ExtendWrapper = styled.div<{ active: boolean; type: string }>`
  position: absolute;
  top: 0;
  left: ${(p) => (p.active ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  padding-left: 1rem;
  display: grid;
  grid-template-columns: 1fr auto auto;
  column-gap: 0.5rem;
  align-items: center;
  background: pink;
  transition: left 0.3s ease-in-out;
  background: ${typeColor};
  z-index: 1;

  ${StyledTypography} {
    color: ${(p) => p.theme.palette.common.white};
    color: white;
  }
`;
