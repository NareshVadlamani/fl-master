import React, { useState, useEffect } from "react";
import BottomNavigation from "../footer/bottom-nav";
import { connect } from "react-redux";
import { useStyles } from "../styles/layoutStyles";
import zoneImg from "../assets/zone.jpg";
import "./preview.css";
import {
  Card,
  Grid,
  CardContent,
  Button,
  ButtonGroup,
  Typography,
  Container,
} from "@material-ui/core";
import helmet from "../assets/helmet.png";
//import "../rules/rulesmodel.css";
import jacket from "../assets/Denim-jacket.png";
import mask from "../assets/Nose-mask.png";
import shoes from "../assets/safety-shoes.png";
import RestrictedArea from "../assets/Restricted-area.png";
import SecludedArea from "../assets/Secluded-area.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";
import styled from "styled-components";

import dashboardImg from "../assets/dashboard.jpeg";

export function Preview({ stateData, history }) {
  const [zone, setZone] = useState(stateData.zone);
  const [camera, setCamera] = useState(stateData.camera);
  const [rules, setRules] = useState(stateData.rules);
  let temp = JSON.parse(localStorage.getItem("cameras"));
  console.log("temp ", temp);
  console.log("preview ", stateData.zone, stateData.camera, stateData.rules);
  useEffect(() => {
    setZone(stateData.zone);
    setCamera(temp);
    setRules(stateData.rules);
  }, [stateData]);
  // const { setValue, value, ...rest } = props;
  const classes = useStyles();
  const onSubmit = () => {
    history.push("/dashboard");
  };
  return (
    <Wrapper>
      <div className="p-zone">
        <Heading>Zone</Heading>
        <Img src={zoneImg} alt="Map"></Img>
      </div>
      <div className="p-zone">
        <Heading>Zone Information</Heading>
        <div className="preview-main">
          <div className="table">
            <div className="tr">
              <div className="name">Zone Name</div>
              <div className="colon">:</div>
              <div className="val">{zone.name}</div>
            </div>
            <div className="tr">
              <div className="name">Zone Code</div>
              <div className="colon">:</div>
              <div className="val">10</div>
            </div>
            <div className="tr">
              <div className="name">Parent Zone</div>
              <div className="colon">:</div>
              <div className="val">{zone.parent_zone_id}</div>
            </div>
            <div className="tr">
              <div className="name">Severity</div>
              <div className="colon">:</div>
              <div className="val">{zone.severity}</div>
            </div>
            <div className="tr">
              <div className="name">Shift</div>
              <div className="colon">:</div>
              <div className="val">Shift 1</div>
            </div>
            <div className="tr">
              <div className="name">Department</div>
              <div className="colon">:</div>
              <div className="val">BRM</div>
            </div>
            {/* <div className="tr">
              <div className="name">Supervisor</div>
              <div className="colon">:</div>
              <div className="val">Shiva</div>
            </div> */}
            {/* <div className="tr">
              <div className="name">HOD</div>
              <div className="colon">:</div>
              <div className="val">{zone.Hod}</div>
            </div>
            <div className="tr">
              <div className="name">HOD Ph</div>
              <div className="colon">:</div>
              <div className="val">{zone.hod_ph}</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-camera">
        <Heading>Selected Cameras</Heading>
        <div id="dashboard1">
          {camera.map((card) => {
            return (
              <div className="card1">
                <div className="tooltip">
                  <img
                    className="card-img"
                    src={dashboardImg}
                    style={{ width: "200px" }}
                    alt="Camera"
                  />
                  {/* <iframe className="card-img"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe> */}
                  <div className="tooltiptext">{card.camera_name}</div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontSize: 10 }}>
                    {card.name ? card.name : "SMS"}
                  </span>
                  <div style={{ fontSize: 10 }}>{card.ipaddress}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-rules">
        <Grid className={classes.root} container>
          {rules.map((activity) => {
            return (
              <a>
                {/* {activity.isSelected ? <CheckCircleIcon style={{ color: '#2dd1ac', position: 'absolute', marginLeft: '80px' }} /> : <></>} */}
                <Card
                  style={{
                    height: "124px",
                    width: "222px",
                    backgroundColor: "#111728",
                    marginRight: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item xs={6}>
                        {
                          // (activity.name === "helmet") ? <img src={helmet} alt="logo" style={{ maxHeight: "60px" }} /> : (activity.name === "Nose Mask") ? <img src={mask} alt="logo" style={{ maxHeight: "60px" }} /> : (activity.name === "Denim Jacket") ? <img src={jacket} alt="logo" style={{ maxHeight: "60px" }} /> : (activity.name === "Safety Shoes") ? <img src={shoes} alt="logo" style={{ maxHeight: "60px" }} /> : (activity.name === "Secluded Area") ? <img src={SecludedArea} alt="logo" style={{ maxHeight: "60px" }} /> : <img src={RestrictedArea} alt="logo" style={{ maxHeight: "60px" }} />
                          activity.name === "PPE VIOLATION - HELMET" ? (
                            <img
                              src={helmet}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          ) : activity.name === "Nose Mask" ? (
                            <img
                              src={mask}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          ) : activity.name === "Denim Jacket" ? (
                            <img
                              src={jacket}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          ) : activity.name === "Safety Shoes" ? (
                            <img
                              src={shoes}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          ) : activity.name ===
                            "SAFETY ALERT - RESTRICTED AREA" ? (
                            <img
                              src={SecludedArea}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          ) : (
                            <img
                              src={RestrictedArea}
                              alt="logo"
                              style={{ maxHeight: "40px" }}
                            />
                          )
                        }
                      </Grid>
                      <Grid item xs={6}>
                        <Typography style={{ color: "white" }}>
                          {activity.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography style={{ color: "white", fontSize: 14 }}>
                          {activity.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </Grid>
      </div>
      <ButtonOuter>
        <Button href="/dashboard" style={{ color: "white" }}>
          Submit
        </Button>
      </ButtonOuter>
    </Wrapper>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    stateData: state,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

const Wrapper = styled.div`
  background: #111728;
  padding: 20px;
  position: relative;
`;

const Content = styled.div`
  ${"" /* margin: 24px 32px; */}
`;

const Heading = styled.h1`
  margin: 0 0 20px;
  color: wheat;
  font-size: 26px;
  font-weight: normal;
  color: white;
`;

const Img = styled.img`
  height: auto;
  width: 300px;
`;

const ButtonOuter = styled.div`
  background: #111728;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  width: 100%;
`;
