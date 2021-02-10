import styled from "styled-components";

export const Wrapper = styled.div<{
  size: string;
  weight: number | string;
  color: string;
  align: string;
  transform: string;
  variant: string;
}>`
  font-size: ${(p) =>
    p.size === "xs"
      ? p.theme.font.size.xs
      : p.size === "sm"
      ? p.theme.font.size.sm
      : p.size === "md"
      ? p.theme.font.size.md
      : p.size === "lg"
      ? p.theme.font.size.lg
      : p.size === "xl"
      ? p.theme.font.size.xl
      : p.theme.font.size.md};
  font-weight: ${(p) => p.weight};
  color: ${(p) => p.color};
  text-align: ${(p) => p.align};
  text-transform: ${(p) => p.transform};
  font-family: ${(p) =>
    p.variant === "monospace"
      ? "'Ubuntu Mono', monospace"
      : "'Ubuntu', sans-serif;"};
`;
export const Para = styled.p``;
export const Span = styled.span`
  display: inline;
`;
