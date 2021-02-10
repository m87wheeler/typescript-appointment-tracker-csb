import styled, { css } from "styled-components";
import TableRow from "../../components/SharedUI/Table/TableRow/TableRow";
import Typography from "../../components/SharedUI/Typography/Typography";

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

const Wrapper = styled.div``;

const StyledTypography = styled(Typography)``;

const TypeContainer = styled.div<{ type?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: ${typeColor};

  ${StyledTypography} {
    color: ${(p) => p.theme.palette.common.white};
    color: white;
  }
`;

const DetailsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

const TotalContainer = styled.div`
  padding: 1rem 0;
`;

const StyledRow = styled(TableRow)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export {
  Wrapper,
  StyledTypography,
  TypeContainer,
  DetailsContainer,
  TotalContainer,
  StyledRow
};
