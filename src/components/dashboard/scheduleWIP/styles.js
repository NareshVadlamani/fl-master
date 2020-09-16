import styled from "styled-components";
import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export const MainBoard = styled.div`
  max-width: 33%;
  min-width: 30rem;
  height: 83%;
  background: #0d111e;
  position: fixed;
  bottom: 0;
  right: ${({ isScheduling }) => (isScheduling ? "0" : "-30rem")};
  opacity: ${({ isScheduling }) => (isScheduling ? 1 : 0)};
  color: white;
  transition: all 0.3s ease-in-out;
  .ant-input[disabled] {
    color: #000;
  }
`;

export const CustomDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    background-color: lightgreen;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #0f1726;
`;

export const HeaderText = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const DetailsSection = styled.div`
  padding: 10px 20px;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
`;

export const DetailKey = styled.p`
  font-size: 14px;
  flex: 1;
  margin: 0;
`;

export const DetailValue = styled.div`
  font-size: 14px;
  flex: 3;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px;
  // .ant-picker {
  //   padding: 0;
  //   color: #fff;
  //   cursor: pointer;
  //   margin: 0 10px 0 0;
  // }
  // .ant-picker-input > input {
  //   color: #fff;
  //   cursor: pointer;
  // }
  // .ant-input {
  //   padding: 3px 3px;
  //   border: 1px solid #a1adcd;
  //   background-color: #0d111e;
  //   color: #fff;
  // }
`;

export const SubmitSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #1b2848;
  margin: 0 auto;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const ErrorMsg = styled.p`
  color: red;
`;
