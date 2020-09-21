import React from "react";
import axios from "axios";
import {
  Typography,
  Container,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import { useStyles } from "../styles/layoutStyles";
import Map from "../assets/Plant-map.jpg";
import { loadZoneData } from "../../redux/actions/zoneAction";
import { connect } from "react-redux";
import styled from "styled-components";

export function Select(props) {
  // props.handleChange(2);
  const classes = useStyles();
  const nextButton = () => {
    props.loadZoneData().then(() => {
      props.handleChange(1);
    });
  };
  //nextButton();

  return (
    <Wrapper>
      <Heading>Mark Zone</Heading>

      <Content>
        <Img src={Map} alt="Map" height="1200" width="700" />
      </Content>

      <ButtonOuter>
        <Button
          className={classes.nextbutton}
          style={{ color: "#2dd1ac" }}
          onClick={nextButton}
        >
          Next
        </Button>
      </ButtonOuter>
    </Wrapper>
  );
}

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = {
  loadZoneData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);

const Wrapper = styled.div`
  ${"" /* background: #f00; */}
  padding: 20px;
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

const Img = styled.img`
  height: auto;
  width: 100%;
  max-height: 700px;
`;

const ButtonOuter = styled.div`
  margin: 3rem 0 0 0;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  width: 100%;
`;
