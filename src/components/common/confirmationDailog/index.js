import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function ResponsiveDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { openDailog, confirmAction, cancelAction, user } = props;
  console.log("from dailog ==>", user, openDailog);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDailog}
      onClose={cancelAction}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Are you sure, Delete the user?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          please click on Delete to remove user from work force
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={cancelAction} color="primary">
          Cancel
        </Button>
        <Button onClick={() => confirmAction(user)} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
