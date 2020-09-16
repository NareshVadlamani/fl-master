import styled from "styled-components";

export const NotificationBar = styled.div`
  position: fixed;
  top: 2rem;
  right: ${({ isOpen }) => (isOpen ? "2rem" : "-100rem")};
  min-width: 25rem;
  max-width: 100rem;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

export const CloseButton = styled.div`
  float: right;
  margin: 10px;
  cursor: pointer;
`;
