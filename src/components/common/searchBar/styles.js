import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 2rem;
  > svg {
    margin-right: 0.5rem;
    height: 25px;
    width: 25px;
  }
`;

export const InputBar = styled.input`
  background: #0d111e;
  color: #fff;
  width: 100%;
  outline: none;
  border: none;
  padding: 0.2rem;
  font-size: 1rem;
  width: 100%;
  ::placeholder {
    color: #fff;
  }
`;
