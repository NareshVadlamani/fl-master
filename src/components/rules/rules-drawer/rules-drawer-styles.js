import styled from "styled-components";
export const SeveritySelection = styled.div`
  display: flex;
  color: #fff;
  margin: 1rem 0 1rem 0;
  font-size: 1rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid #5f5d70;
  & > p {
    margin-right: 1rem;
  }
  .ant-radio + * {
    color: #fff;
  }
  .ant-radio:hover .ant-radio-inner {
    border-color: ${({ color }) => color};
    &:hover {
      border-color: ${({ color }) => color};
    }
  }
  .ant-radio-inner {
    height: 1.5rem;
    width: 1.5rem;
  }
  .ant-radio-inner::after {
    background-color: ${({ color }) => color};
    top: 4px;
    left: 4px;
    display: table;
    width: 14px;
    height: 14px;
  }
`;