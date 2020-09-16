import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  background: #0f1322;
  margin: 1rem 2rem;
  padding: 1rem;
  border: 1px solid #000000;
`;

export const Cell = styled.div`
  margin: 0 10px 0 0;
  display: flex;
  color: #fff;
  font-size: 1rem;
  min-width: ${({ size }) => (size ? `${size}%` : "10%")};
  & .ant-checkbox + span {
    color: #fff;
  }
  & .ant-checkbox-inner {
    height: 1.3rem;
    width: 1.3rem;
    border: 1px solid #fff;
    background: #0f1322;
  }
  & .ant-checkbox-wrapper:hover {
    & .ant-checkbox-inner {
      border: 1px solid #2dd1ac;
    }
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #2dd1ac;
    border-color: #2dd1ac;
  }
  & .ant-checkbox-inner ::after {
    width: 8.714286px;
    height: 14.142857px;
  }
  & .ant-switch {
    border: 1px solid #2dd1ac;
  }
  & .ant-switch-checked {
    background-color: #2dd1ac;
  }
`;

export const ColumnName = styled.p`
  margin: 0;
`;

export const ColumnActions = styled.div``;
