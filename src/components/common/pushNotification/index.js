import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import { appSelectPushNotification } from "../../../modals/app/selectors";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { NotificationBar, CloseButton } from "./styles";
import { appClearPushNotification } from "../../../modals/app/thunk";

const mapStateToProps = (state) => ({
  notificationMsg: appSelectPushNotification(state),
});

const mapdispatchToProps = {
  closeNotification: appClearPushNotification,
};

class Index extends Component {
  render() {
    const { notificationMsg, closeNotification } = this.props;
    console.log("from notif comp ==>", notificationMsg);
    return (
      <NotificationBar isOpen={Boolean(notificationMsg)}>
        <CloseButton onClick={closeNotification}>
          <HighlightOffIcon />
        </CloseButton>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>{notificationMsg}</strong>
        </Alert>
      </NotificationBar>
    );
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(Index);
