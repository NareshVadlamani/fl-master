import styled from "styled-components";

export const Drawer = styled.div`
  width: 30rem;
  height: 83%;
  background: #0d111e;
  position: fixed;
  bottom: 0;
  right: ${({ isPanelOpen }) => (isPanelOpen ? "0" : "-30rem")};
  opacity: ${({ isPanelOpen }) => (isPanelOpen ? 1 : 0)};
  color: white;
  transition: all 0.3s ease-in-out;
  min-width: 30rem;
  z-index: 99;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 35px;
  background: #0f1726;
  border-bottom: 1px solid #000;
`;

export const HeaderText = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const PanelBody = styled.div`
  background: #0d111e;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
