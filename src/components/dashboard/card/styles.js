import styled from "styled-components";
import Button from "@material-ui/core/IconButton";

export const LogoutMenuContainer = styled.span`
  float: right;
`;

export const LogoutMenuButton = styled(Button)`
  && {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    display: inline-block;
    min-width: fit-content;
    min-height: fit-content;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    &:hover {
      background: transparent;
    }
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  background: ${({ background = "" }) => background};
`;

export const CustomWrapper = styled.div`
  .ant-dropdown-menu {
    background-color: #000 !important;
  }
`;

export const DropDownElement = styled.div`
  padding: 5px 20px;
  color: #fff;
  font-size: 16px;
  background: inherit;
  &:hover {
    color: #2dd1ac;
  }
`;
