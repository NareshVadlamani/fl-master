import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import AddUserForm from "../../workForce/addUserForm";
import { CloseButton, Drawer, Header, PanelBody, HeaderText } from "./styles";

const Panel = ({
  closeAction,
  Heading,
  panelType,
  submitData,
  children,
  isPanelOpen,
  ...props
}) => {
  return (
    <Drawer isPanelOpen={isPanelOpen}>
      <Header>
        <HeaderText>{Heading}</HeaderText>
        <CloseButton onClick={() => closeAction(null)}>
          <CloseIcon />
        </CloseButton>
      </Header>
      {isPanelOpen && <PanelBody>{children}</PanelBody>}
    </Drawer>
  );
};

export default Panel;
