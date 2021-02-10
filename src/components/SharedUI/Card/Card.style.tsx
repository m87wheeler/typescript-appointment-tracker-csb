import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ hover: boolean }>`
  box-shadow: ${(p) => p.theme.shadow.main};
  transition: ${(p) => p.theme.shadow.transition};

  ${(p) =>
    p.hover &&
    css`
      &:hover {
        box-shadow: ${(p) => p.theme.shadow.hover};
      }
    `}
`;
