import styled from "styled-components";

export const RowActionsWrapper = styled.div`
  display: flex;
  align-itmes: center;
  position: absolute;
  right: 0;
  background: #111728;
  display: none;
`;

export const RowActionsAligner = styled.div`
  display: flex;
  margin: 0 5rem 0 0;
`;

export const Action = styled.p`
  margin: 0;
  color: #489482;
  margin-right: 1rem;
  padding: 0 1rem;
  &:first-of-type {
    border-right: 1px solid #489482;
  }
`;

export const TableRow = styled.div`
  display: flex;
  background: #111728;
  margin: 0 2rem;
  padding: 1rem;
  border: 1px solid #000000;
  cursor: pointer;
  min-height: 4rem;
  position: relative;
  &:hover {
    background: #0f1322;
    box-shadow: -1px 0px 5px 0px rgba(157, 142, 230, 0.34);
  }
  &:hover {
    ${RowActionsWrapper} {
      display: block;
    }
  }
`;

export const TableRowsContainer = styled.div``;
