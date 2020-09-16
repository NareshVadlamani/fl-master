import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1rem;
`;

export const CustomInput = styled.input`
  width: 100%;
  background: #0c111d;
  border: none;
  border-bottom: 1px solid #a1adcd;
  color: #fff;
  padding: 0.5rem 0rem;
  font-size: 1rem;
  margin: 0 0 1rem 0;
  outline: none;
  &:focus {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :: placeholder {
    color: #fff;
  }
`;

export const GenderSelection = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  margin: 0 0 1rem 0;
  border-bottom: 1px solid #a1adcd;
  font-size: 1rem;
  .ant-radio + * {
    color: #fff;
  }
  .ant-radio:hover .ant-radio-inner {
    border-color: #2dd1ac;
    &:hover {
      border-color: #2dd1ac;
    }
  }
  .ant-radio-inner {
    height: 1.5rem;
    width: 1.5rem;
  }
  .ant-radio-inner::after {
    background-color: #2dd1ac;
    top: 4px;
    left: 4px;
    display: table;
    width: 14px;
    height: 14px;
  }
`;

export const GenderLable = styled.p`
  margin: 0 1rem 0 0;
`;

export const SubmitSection = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  display: flex;
`;

export const ActionButtons = styled.button`
  border: 1px solid #979797;
  padding: 0.5rem 1.5rem;
  color: #fff;
  margin: 0 1rem 0 0;
  cursor: pointer;
  background: ${({ isSubmit }) => (isSubmit ? "#1b2848" : "#111728")};
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: red;
`;

export const AligningWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  margin: 0 0 1rem 0;
`;

export const Lable = styled.p`
  margin: 0 0.3rem 0 0;
  font-size: 1.2rem;
  color: #fff;
`;
