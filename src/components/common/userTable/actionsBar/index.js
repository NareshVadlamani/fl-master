import React, { Component } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { ActionCells, ActionsBar, ActionText } from "./styles";

class ManageActionsBar extends Component {
  render() {
    const {
      actions = [
        { text: "Add User", icon: PersonAddIcon, type: "add" },
        { text: "Bulk upload users", icon: GroupAddIcon, type: "upload" }
      ],
      clickAction,
      panelType,
    } = this.props;
    console.log("panel type ==>", panelType);
    return (
      <ActionsBar>
        {actions.map(({ text, icon: Icon, type }) => (
          <ActionCells
            onClick={() => clickAction(type)}
            isActive={panelType === type}
          >
            <Icon /> <ActionText>{text}</ActionText>
          </ActionCells>
        ))}
      </ActionsBar>
    );
  }
}

export default ManageActionsBar;
