import styled from "styled-components";

const Wrapper = styled.fieldset`
  padding: 0.5rem 0.5rem 1rem;
  border: ${(p) => `.1rem solid ${p.theme.palette.common.black}`};
`;

const Legend = styled.legend`
  padding: 0 0.25rem;
  font-weight: 500;
  line-height: 1;
`;

const Details = styled.details`
  margin-bottom: 0.25rem;
`;

const Summary = styled.summary`
  padding: 0.1rem;
  border: 0.1rem solid transparent;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 0.1rem solid #111;
  }
`;

export { Wrapper, Legend, Summary, Details };
