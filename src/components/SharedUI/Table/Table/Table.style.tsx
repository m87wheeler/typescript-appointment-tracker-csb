import styled from "styled-components";

export const Element = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadow.main};

  th,
  td {
    padding: 0.5rem 1rem;
    background: ${(p) => p.theme.palette.common.white};
  }

  th {
    text-align: left;
    background: ${(p) => `rgb(${p.theme.palette.primary.main})`};
  }

  tbody {
    tr {
      &:hover {
        background: ${(p) => p.theme.palette.common.grey[900]};
      }
    }
    tr {
      td {
        position: relative;
        &:hover {
          &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: -9999px;
            bottom: -9999px;
            background: ${(p) => p.theme.palette.common.white};
            z-index: -1;
          }
        }
      }
    }
  }
`;
