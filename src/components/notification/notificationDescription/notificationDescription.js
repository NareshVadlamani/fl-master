import React from "react";
import clsx from "clsx";
import Axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "../../assets/JSW-logo.png";
import { Badge, FormControl, Select } from "@material-ui/core";
import { useStyles } from "../../styles/layoutStyles";
import { Button, CardContent, Card, Grid } from "@material-ui/core";
import "./notificationDescription.css";
import { findByLabelText } from "@testing-library/react";
import { mainListItems } from "../../layout/listItems";
import { ManagementSection, BannerHeading, UsersSection } from "./styles";

export default function NotificationDescription(Notification_id) {
  const classes = useStyles();
  const [details, setDetails] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [message, setMessage] = React.useState(null);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = () => {
    Axios.post(
      "http://shark-api-v2.herokuapp.com/api/notification_status/create",
      {
        notification_id: details.notification_id,
        status: status,
        description: message,
        created_by: "admin",
      }
    ).then(
      (response) => {
        console.log(response);

        window.location = "/dashboard";
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const formatDate = (date) => {
    if (date) {
      return (
        new Date(date).getDate() +
        "/" +
        (new Date(date).getMonth() + 1) +
        "/" +
        new Date(date).getFullYear()
      );
    }
  };

  const formatTime = (date) => {
    if (date) {
      var time = new Date(date * 1000);
      return (
        time.getHours() + ": " + time.getMinutes() + ": " + time.getSeconds()
      );
    }
  };

  React.useEffect(() => {
    console.log(
      "Notification_id",
      Notification_id.match.params.notification_id
    );
    Axios.get(
      `http://shark-api-v2.herokuapp.com/api/notification/fetch/by-id/${Notification_id.match.params.notification_id}`
    )
      .then((res) => {
        setDetails(res.data.data);
        console.log("pulling data", res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <UsersSection>
      <ManagementSection>
        <main className={classes.content}>
          <div className="preview">
            <span style={{ fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }} className="SMS-LRF-1">
              Notification
            </span>
          </div>
          <img
            style={{ maxHeight: "400px", marginLeft: "20%" }}
            src={details.resource_url != "/"  ? details.resource_url: "https://vijayanagar.s3.ap-south-1.amazonaws.com/unknownface.PNG"}
          ></img>
          <div className="preview">
            <Grid container style={{ height: "25%" }}>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <Grid container style={{ border: "2px solid black" }}>
                  <Grid item xs={6}>
                    <div
                      style={{
                        paddingBottom: "10px",
                        borderRight: "2px solid black"
                      }}
                    >
                      <div
                        style={{
                          height: "40px",
                          fontSize: 16,
                          backgroundColor: "#111728",
                          padding: "5px",
                          borderBottom: "2px solid black",
                        }}
                      >
                        Information
                      </div>
                      <div className="table1">
                        <div className="tr">
                          <div className="name">Zone Name</div>
                          <div className="colon">:</div>
                          <div className="val">{details.zone_name}</div>
                        </div>
                        <div className="tr">
                          <div className="name">Camera</div>
                          <div className="colon">:</div>
                          <div className="val">{details.camera_name}</div>
                        </div>
                        <div className="tr">
                          <div className="name">Message</div>
                          <div className="colon">:</div>
                          <div className="val">{details.custom_message}</div>
                        </div>
                        <div className="tr">
                          <div className="name">Date</div>
                          <div className="colon">:</div>
                          <div className="val">
                            {formatDate(details.generated_time)}
                          </div>
                        </div>
                        <div className="tr">
                          <div className="name">Time</div>
                          <div className="colon">:</div>
                          <div className="val">
                            {formatTime(details.generated_time)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          borderBottom: "2px solid black",
                          height: "40px",
                          fontSize: 16,
                          backgroundColor: "#111728",
                          padding: "5px",
                        }}
                      >
                        Action
                      </div>
                      <div className="table1">
                        <div className="status">
                          <div className="name">Status</div>
                          <form
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <select
                              name="status"
                              id="status"
                              onChange={handleChange}
                              style={{
                                backgroundColor: "#111728",
                                height: "27px",
                              }}
                            >
                              <option value="Resolved">{"Resolved"}</option>
                              <option value="Pending">{"Pending"}</option>
                              <option value="Deferred">{"Deferred"}</option>
                            </select>
                          </form>
                          <input
                            type="text"
                            placeholder="message..."
                            style={{
                              marginLeft: "20px",
                              backgroundColor: "#111728",
                              border: "1px solid black",
                            }}
                            onChange={messageHandler}
                          />
                          <button
                            style={{
                              marginLeft: "10px",
                              backgroundColor: "#111728",
                              border: "none",
                            }}
                            onClick={submitHandler}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="table1">
                        <div className="status">
                          Identified Personnel(optional)
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid tem xs={1}></Grid>
            </Grid>
          </div>
        </main>
      </ManagementSection>
    </UsersSection>
  );
}
