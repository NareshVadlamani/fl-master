import React, { useState } from "react";
import {
  Typography,
  CardContent,
} from "@material-ui/core";
import { useStyles } from "../styles/layoutStyles";
import helmet from "../assets/helmet.png";
import jacket from "../assets/Denim-jacket.png";
import mask from "../assets/Nose-mask.png";
import shoes from "../assets/safety-shoes.png";
import RestrictedArea from "../assets/Restricted-area.png";
import SecludedArea from "../assets/Secluded-area.png";
import { Card, Grid, Button, ButtonGroup, Drawer } from "@material-ui/core";
import RuleDrawer from "./rules-drawer/rules-drawer";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styled from "styled-components";

export default function Rules(props) {
  const classes = useStyles();
  const [currentData, setCurrentData] = useState({});
  const [state, setState] = React.useState({
    right: false,
    data: [],
  });

  React.useEffect(() => {
    fetch("http://shark-api-v2.herokuapp.com/api/activity/fetch/all")
      .then((results) => results.json())
      .then((data) => {
        setState({
          data: data.data,
        });
      });
  }, []);

  const toggleDrawer = (anchor, open, data = null, isSaved = false) => (
    event
  ) => {
    if (data) {
      data.isSelected = true;
      setCurrentData(data);
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <RuleDrawer
      data={currentData}
      anchor={anchor}
      toggleDrawer={toggleDrawer}
    />
  );
  let UnathorizedArray = [];
  return (
    <Wrapper>
      <Heading>PPE</Heading>

      <Content>
        <Grid className={classes.root} container>
          {state.data.map((activity) => {
            if (
              activity.name === "SAFETY ALERT - RESTRICTED AREA" ||
              activity.name === "SAFETY ALERT - SECLUDED AREA"
            ) {
              UnathorizedArray.push(activity);
              return;
            }
            return (
              <a onClick={toggleDrawer("right", true, activity)}>
                <Card
                  style={{
                    height: "140px",
                    width: "300px",
                    backgroundColor: "#0D111E",
                    marginRight: "12px",
                    marginBottom: "12px",
                    borderRadius: "2px",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={0}>
                      <Grid item xs={4}>
                        {activity.name === "PPE VIOLATION - HELMET" ? (
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
                        )}
                      </Grid>
                      <Grid item xs={7}>
                        <Typography style={{ color: "white", fontSize: 15 }}>
                          {activity.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        {activity.isSelected ? (
                          <CheckCircleIcon
                            style={{
                              color: "#2dd1ac",
                              position: "relative",
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          style={{
                            color: "white",
                            fontSize: 13,
                            textAlign: "center",
                            marginTop: "9px",
                          }}
                        >
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

        <Heading>Unauthorized Access</Heading>

        <Grid className={classes.root} container>
          {UnathorizedArray.map((activity) => {
            return (
              <a onClick={toggleDrawer("right", true, activity)}>
                <Card
                  style={{
                    height: "140px",
                    width: "300px",
                    backgroundColor: "#0D111E",
                    marginRight: "12px",
                    marginBottom: "12px",
                    borderRadius: "2px",
                  }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item xs={4}>
                        {activity.name === "SAFETY ALERT - RESTRICTED AREA" ? (
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
                        )}
                      </Grid>
                      <Grid item xs={7}>
                        <Typography style={{ color: "white", fontSize: 15 }}>
                          {activity.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        {activity.isSelected ? (
                          <CheckCircleIcon
                            style={{
                              color: "#2dd1ac",
                              position: "relative",
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          style={{
                            color: "white",
                            fontSize: 13,
                            textAlign: "center",
                            marginTop: "9px",
                          }}
                        >
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
      </Content>

      <ButtonOuter>
        <ButtonGroup className={classes.nextbutton}>
          <Button
            style={{ color: "white" }}
            onClick={() => props.handleChange(2)}
          >
            Previous
          </Button>
          <Button
            className={classes.nextbutton}
            style={{ color: "white" }}
            onClick={() => props.handleChange(4)}
          >
            Next
          </Button>
        </ButtonGroup>
      </ButtonOuter>

      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${"" /* background: #f00; */}
  background: #111728;
  padding: 20px;
  position: relative;
`;

const Heading = styled.h1`
  margin: 0 0 20px;
  color: wheat;
  font-size: 26px;
  font-weight: normal;
  color: white;
`;

const Content = styled.div`
  ${"" /* margin: 24px 32px; */}
`;

const ButtonOuter = styled.div`
  ${"" /* background: #f00; */}
  background: #111728;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  width: 100%;
`;
