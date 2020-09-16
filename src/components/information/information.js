import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, TextField, FormControl } from "@material-ui/core";
import { Radio, Select } from "antd";

import "./information-style.js";
import zone from "../assets/zone.jpg";
import {
  useStyles,
  SeveritySelection,
  ShiftsWrapper,
  Shiftbox,
  ShiftText,
} from "./information-style";

import Title from "../title/title";
import { connect } from "react-redux";
import { setZoneData } from "../../redux/actions/zoneAction";
import { goToZoneSelectionPage } from "../../Utils/navigationUtils";
import {
  appSelectFilteredZones,
  appSelectHodList,
} from "../../modals/app/selectors";
import "./information.css";
// import Select from "@material-ui/core/Select";
import Axios from "axios";
import styled from "styled-components";
import { appFetchHodList } from "../../modals/app/thunk.js";
import {
  appSetPushNotifTimeOut,
  appSetPushNotifications,
} from "../../modals/app/actions.js";

const { Option } = Select;

export function Information(props) {
  const [zoneInfo, setZoneInfo] = useState(
    props.currentZone || { shift_ids: [] }
  );
  const [shiftIds, setShiftIds] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [severity, setSeverity] = useState("high");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/unit/fetch/all").then(
      (res) => {
        setDepartments(res.data.data);
      }
    );
  }, []);

  useEffect(() => {
    const { fetchHods, currentZone } = props;
    setZoneInfo(currentZone);
    fetchHods();
  }, [props.currentZone]);

  const onsubmithandler = (event) => {
    localStorage.setItem("zone_id", zoneInfo.zone_id);
    let data = {
      zone_id: zoneInfo.zone_id,
      name: zoneInfo.name,
      shift_ids: shiftIds,
      unit_id: zoneInfo.unit_id,
      parent_zone_id: zoneInfo.parent_zone_id,
      severity: zoneInfo.severity,
      hod_user_id: zoneInfo.hod_user_id,
      hod_phone: zoneInfo.hod_phone,
    };
    if (!data.zone_id) {
      setErrorMsg("No zone id, please refresh to get a zoneId");
      return;
    } else if (!data.name) {
      setErrorMsg("Please provide zone Name");
      return;
    } else if (!data.shift_ids || !data.shift_ids.length) {
      setErrorMsg("Please, select Shifts");
      return;
    } else if (!data.unit_id) {
      setErrorMsg("Please, select department");
      return;
    } else if (!data.hod_user_id || !data.hod_phone) {
      setErrorMsg("Please, provide HOD details", data);
      return;
    }
    setErrorMsg(null);
    const { pushnotification } = props;
    console.log("***data is valid ==>");

    props.setZoneData(zoneInfo).then(() => {
      Axios.put("http://shark-api-v2.herokuapp.com/api/zone/update", data)
        .then((res) => {
          pushnotification("Zone details Updates Successfully !");
          console.log("res", res);
        })
        .catch((err) => {
          pushnotification("Failed to update Zone details !");
          console.error(err);
        });

      props.handleChange(2);
    });
  };

  const handleChange = (event, name) => {
    console.log(event.target.value, name, zoneInfo);
    setZoneInfo({ ...zoneInfo, [name]: event.target.value });
  };

  const handleSelectChange = (value, selectType) => {
    setZoneInfo({ ...zoneInfo, [selectType]: value });
  };

  const handleShiftChange = (value, name) => {
    let updatedShiftIds = shiftIds;
    if (updatedShiftIds.find((existingId) => existingId === value)) {
      updatedShiftIds = updatedShiftIds.filter(
        (existingId) => existingId !== value
      );
    } else {
      updatedShiftIds.push(value);
    }
    setShiftIds([...updatedShiftIds]);
  };

  const classes = useStyles();
  return (
    <Wrapper classes={classes.info}>
      <Heading>Zone information</Heading>
      <Content>
        <div className={classes.content}>
          <div className={classes.left}>
            <TextField
              label="Zone Code"
              style={{ width: 100 }}
              disabled
              onChange={(event) => handleChange(event, "zone_code")}
              value={zoneInfo.zone_code}
            />

            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              label="Zone Name"
              onChange={(event) => handleChange(event, "name")}
              value={zoneInfo.name}
            />

            <FormControl
              variant="outlined"
              className={classes.dropdown}
              style={{ width: "100%" }}
            >
              <span>Parent Zone</span>
              <Select
                native
                //   value={zoneInfo.name}
                onChange={(value) =>
                  handleSelectChange(value, "parent_zone_id")
                }
                label="Zone"
                inputProps={{
                  name: "Zone",
                  id: "outlined-age-native-simple",
                }}
                style={{ width: "100%" }}
              >
                {props.zones ? (
                  props.zones.map((o, index) => (
                    <Option value={o.zone_id}>
                      {o.name ? o.name : "no name"}
                    </Option>
                  ))
                ) : (
                  <></>
                )}
              </Select>
            </FormControl>

            <SeveritySelection
              color={
                severity === "high"
                  ? "#ff0008"
                  : severity === "medium"
                  ? "#facc2c"
                  : "#2dd1ac"
              }
            >
              <p>Severity</p>
              <Radio.Group
                onChange={(severity) => setSeverity(severity.target.value)}
                defaultValue={severity}
              >
                <Radio value={"high"}>High</Radio>
                <Radio value={"medium"}>Medium</Radio>
                <Radio value={"low"}>Low</Radio>
              </Radio.Group>
            </SeveritySelection>
            <ShiftsWrapper>
              <ShiftText>Shifts</ShiftText>
              <Shiftbox
                isSelected={shiftIds.includes(129)}
                onClick={() => {
                  handleShiftChange(129, "shift_ids");
                }}
              >
                <ShiftText>Shit A</ShiftText>
              </Shiftbox>
              <Shiftbox
                isSelected={shiftIds.includes(130)}
                onClick={() => {
                  handleShiftChange(130, "shift_ids");
                }}
              >
                <ShiftText>Shift B</ShiftText>
              </Shiftbox>
              <Shiftbox
                isSelected={shiftIds.includes(131)}
                onClick={() => {
                  handleShiftChange(131, "shift_ids");
                }}
              >
                <ShiftText>Shift C</ShiftText>
              </Shiftbox>
              <Shiftbox
                isSelected={shiftIds.includes(132)}
                onClick={() => {
                  handleShiftChange(132, "shift_ids");
                }}
              >
                <ShiftText>Gen</ShiftText>
              </Shiftbox>
            </ShiftsWrapper>
            <ShiftsWrapper className={classes.dropdown}>
              <span style={{ color: "#fff" }}>Department</span>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  native
                  style={{ width: "100%", color: "#000" }}
                  value={zoneInfo.unit_id}
                  onChange={(value) => handleSelectChange(value, "unit_id")}
                  label="Department"
                  inputProps={{
                    name: "Department",
                    id: "outlined-age-native-simple",
                  }}
                >
                  {departments ? (
                    departments.map((o, index) => (
                      <Option value={o.unit_id}>{o.name}</Option>
                    ))
                  ) : (
                    <></>
                  )}
                </Select>
              </FormControl>
            </ShiftsWrapper>

            <ShiftsWrapper className={classes.dropdown}>
              <span style={{ color: "#fff" }}>HOD</span>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  native
                  style={{ width: "100%", color: "#000" }}
                  value={zoneInfo.hod_user_id}
                  onChange={(value) => handleSelectChange(value, "hod_user_id")}
                  label="Department"
                  inputProps={{
                    name: "Department",
                    id: "outlined-age-native-simple",
                  }}
                >
                  {props.hodList ? (
                    props.hodList.map((o, index) => (
                      <Option value={o.user_id}>{o.name}</Option>
                    ))
                  ) : (
                    <></>
                  )}
                </Select>
              </FormControl>
            </ShiftsWrapper>
            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              type="Number"
              label="HOD Phone"
              onChange={(event) => handleChange(event, "hod_phone")}
              value={zoneInfo.hod_phone}
              maxLength={10}
            />
            <ErrorHighlighter>{errorMsg}</ErrorHighlighter>
          </div>

          <div className={classes.right}>
            <Title>Selected Zone Map</Title>
            <img className={classes.rightImg} src={zone} alt="Map"></img>
          </div>
        </div>
      </Content>

      <ButtonOuter>
        <ButtonGroup className={classes.nextbutton}>
          <Button
            style={{ color: "white" }}
            onClick={() => props.handleChange(0)}
          >
            Previous
          </Button>
          <Button
            className={classes.nextbutton}
            style={{ color: "white" }}
            onClick={onsubmithandler}
          >
            Next
          </Button>
        </ButtonGroup>
      </ButtonOuter>
    </Wrapper>
  );
}
Information.prototype = {
  className: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    currentZone: state.zone,
    zones: appSelectFilteredZones(state),
    hodList: appSelectHodList(state),
  };
}

const mapDispatchToProps = {
  setZoneData,
  fetchHods: appFetchHodList,
  pushnotification: appSetPushNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);

const Wrapper = styled.div`
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

const ButtonOuter = styled.div`
  background: #111728;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  left: 0;
  width: 100%;
`;

export const ErrorHighlighter = styled.p`
  margin: 1rem;
  color: red;
`;
