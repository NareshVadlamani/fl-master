import React, { Component } from "react";
import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./login.css";
import src from "../assets/JSW-logo.png";

// const inputProps = {
//   color: "white",
// };

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false,
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  signIn = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        open: true,
        message: "You have successfully Logged In!",
      });
      this.props.history.push("/dashboard");
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!",
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="welcome-screen">
        <div className="split left">
          <div className="info">
            <img src={src} alt="JSW | Salem Works" />
            <h1>SHARK</h1>
            <h2>AI-enabled surveillance Platform</h2>
          </div>
        </div>

        <div className="split right">
          <div className="info">
            <h2>Login</h2>
            <TextField
              variant="standard"
              placeholder="Name"
              margin="normal"
              //   required
              color="white"
              className="text-field"
              onChange={this.setUsername}
              value={this.state.username}
              inputProps={{ color: "white" }}
            />
            <TextField
              className="text-field"
              variant="standard"
              placeholder="Emp ID."
              margin="normal"
              // required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />

            <div className="button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.signIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary">
                <Link className="link submit" to="/dashboard">
                  Okay
                </Link>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default SignIn;
