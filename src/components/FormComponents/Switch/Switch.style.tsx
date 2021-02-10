import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
`;

export const Button = styled.div`
  position: absolute;
  top: 0.075rem;
  left: 0.075rem;
  width: 0.9rem;
  height: 0.9rem;
  background: ${(p) => p.theme.palette.common.black};
  border-radius: 100%;
  transition: left 0.2s ease-in-out, background 0.2s ease-in-out;
`;

export const Wrapper = styled.div<{ checked: boolean }>`
  position: relative;
  width: 2.5rem;
  height: 1.3rem;
  background: transparent;
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
  border-radius: 1.3rem;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.2s ease-in-out;

  ${(p) =>
    p.checked &&
    css`
      background: ${(p) => p.theme.palette.common.confirm};

      ${Button} {
        left: 1.275rem;
        background: ${(p) => p.theme.palette.common.white};
      }
    `}
`;

export const Element = styled.input`
  opacity: 0;
`;
