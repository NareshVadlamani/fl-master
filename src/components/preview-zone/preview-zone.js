import React, { useEffect, useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../assets/JSW-logo.png";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "../styles/layoutStyles";
import { Button, CardContent, Card } from "@material-ui/core";
import zoneImg from "../assets/zone.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { mainListItems } from "../layout/listItems";
import "./preview-zone.css";
import { loadDashboardData } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import StyleIcon from "@material-ui/icons/Style";
import Spinner from "../common/Spinner";
import Axios from "axios";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dashboardImg from "../assets/dashboard.jpeg";
import { ViewZoneContainer } from "./styles";

export function PreviewZone({
  zone_id,
  zoneData,
  dashboard,
  loadDashboardData,
}) {
  const [zone, setZone] = useState(null);
  console.log("abhi zoneData", zoneData);
  console.log("abhi zone", zone);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const formatDate = (date) => {
    if (date) {
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
  };

  const formatTime = (date) => {
    if (date) {
      console.log("abhi ", date);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }
  };

  useEffect(() => {
    Axios.get(
      `http://shark-api-v2.herokuapp.com/api/zone/fetch/by-id/${zone_id}`
    )
      .then((res) => {
        console.log("Preview zone ", res.data.data);
        setZone(res.data.data);
      })
      .catch((err) => {});
  }, []);
console.log('zone ===>', zone);
  return (
    <ViewZoneContainer>
      {zone ? (
        <main className={classes.content}>
          <div className="preview">
            <span className="SMS-LRF-1">
              {zone.name}
            </span>
            <div className="preview-main">
              <div className="table1">
                <div className="tr">
                  <div className="name">Zone Name</div>
                  <div className="colon">:</div>
                  <div className="val">{zone.name ? zone.name : "BRM"}</div>
                </div>
                {/* <div className="tr">
                                <div className="name">Camera</div>
                                <div className="colon">:</div>
                                <div className="val">SL_BRM</div>
                            </div>
                            <div className="tr">
                                <div className="name">Message</div>
                                <div className="colon">:</div>
                                <div className="val">A worker has been spotted without helmet</div>
                            </div> */}
                {/* <div className="tr">
                            <div className="name">Date</div>
                            <div className="colon">:</div>
                            <div className="val">{formatDate(new Date(zone.updated_time))}</div>
                        </div>
                        <div className="tr">
                            <div className="name">Time</div>
                            <div className="colon">:</div>
                            <div className="val">{formatTime(new Date(zone.updated_time))}</div>
                        </div> */}
                <div className="tr">
                  <div className="name">Severity</div>
                  <div className="colon">:</div>
                  {
                    zone.severity == "low" ? <div style = {{
                      backgroundColor: "green", width: "46px", marginRight: "113px", borderRadius: "5px", paddingLeft: "7px"
                    }} className="val">{zone.severity}</div> : zone.severity == "medium" ? <div className="val" style = {{
                      backgroundColor: "yellow", width: "46px", marginRight: "113px", borderRadius: "5px", paddingLeft: "7px"
                    }}>{zone.severity}</div> : <div className="val" style = {{
                      backgroundColor: "red", width: "46px", marginRight: "113px", borderRadius: "5px", paddingLeft: "7px"
                    }}>{zone.severity}</div>
                  }
                  
                </div>
                <div className="tr">
                  <div className="name">Shifts</div>
                  <div className="colon">:</div>
                  <div className="val">{zone.shift_names.map((shift)=>{return shift + "  "})}</div>
                </div>
              </div>
              <div style={{ marginLeft: 290 }}>
                <img
                  style={{
                    height: 200,
                    width: 400,
                    backgroundColor: "#111728",
                  }}
                  src={zoneImg}
                ></img>
              </div>
            </div>
            {/* <div className="cards">
                        <div className="card1">
                            <span className="text1">Outside Temperature</span>
                            <div className="bottom">
                                <StyleIcon />
                                <span className="number">32</span>
                            </div>
                        </div>
                        <div className="card1">
                            <span className="text1">People Detected</span>
                            <div className="bottom">
                                <StyleIcon />
                                <span className="number">3</span>
                            </div>
                        </div>
                        <div className="card1">
                            <span className="text1">Plant Health</span>
                            <div className="bottom">
                                <StyleIcon />
                                <span className="number">{zone.health_percentage}%</span>
                            </div>
                        </div>
                    </div> */}
            <div className="cameras">
              <div className="txt-30">Cameras</div>

              <div id="dashboard1">
                {zone.cameras.map((card) => {
                  return (
                    <div className="card1">
                      <Link
                        to={"/preview-zone/" + card.zone_id}
                        className="tooltip"
                      >
                        {/* <img className="card-img" src={dashboardImg} /> */}
                        <iframe
                          className="card-img"
                          width="100%"
                          height="100%"
                          src={card.video_url}
                        ></iframe>
                        <div className="tooltiptext">{card.camera_name}</div>
                      </Link>
                      <div>
                        <span style={{ fontSize: 10 }}>
                          {card.camera_name ? card.camera_name : "SMS"}
                        </span>
                        <div style={{ fontSize: 10 }}>{card.ip_address}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
        </main>
      ) : (
        <Spinner />
      )}
    </ViewZoneContainer>
  );
}

export function getZoneById(dashboard, zone_id) {
  console.log("abhi getZoneById", zone_id, dashboard[0].zone_id);
  let test = dashboard.find((zone) => zone.zone_id == zone_id) || null;
  console.log("abhi test", test);
  return test;
}

// export default PreviewZone;
function mapStateToProps(state, ownProps) {
  const zone_id = ownProps.match.params.zone_id;
  console.log("abhi zone_id ", zone_id);
  const zoneData =
    zone_id && state.dashboard.length > 0
      ? getZoneById(state.dashboard, zone_id)
      : [];
  console.log("abhi zoneData", zoneData);

  return {
    zone_id: zone_id,
    zoneData,
    dashboard: state.dashboard,
    apiCallsInProgress: state.apiCallsInProgress,
  };
}

const mapDispatchToProps = {
  loadDashboardData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewZone);
