import styled from "styled-components";

export const Header = styled.div`
  font-size: 2.6rem;
  color: #fff;
`;

export const ActionsBar = styled.div`
  background: #111728;
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
`;

export const ActionCells = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem 0 0;
  cursor: pointer;
  border-radius: 0.2rem;
  padding: 0.5rem 1.5rem;
  background: ${({ isActive }) => (isActive ? "#2dd1ac" : "inherit")};
  & > svg {
    margin: 0 1rem 0 0;
  }
`;

export const ActionText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
`;
