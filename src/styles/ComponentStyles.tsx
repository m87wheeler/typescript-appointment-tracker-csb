import { css } from "styled-components";

export const InputWrapper = css`
  padding: 0.25rem;
  font-size: 1rem;
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  border-radius: 0;

  &:focus {
    outline: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  }
`;
