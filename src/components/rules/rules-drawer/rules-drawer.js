import React, { useState, useEffect } from "react";
import { Radio, Select } from "antd";
import { SeveritySelection } from "./rules-drawer-styles";
import rulesimg from "../../assets/rules.jpg";
import "./rules-drawer.css";
import { FormControl, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Axios from "axios";
import { updateRuleData } from "../../../redux/actions/rulesAction";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

export function RuleDrawer({
  rules,
  updateRuleData,
  anchor,
  toggleDrawer,
  data,
  zone,
}) {
  const { register, errors, handleSubmit } = useForm();
  const [roles, setRoles] = useState(null);
  const [isSms, setIsSms] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [users, setUsers] = useState([]);
  const [personnelPermitted, setPersonnelPermitted] = React.useState([]);
  const [showAuth, setShowAuth] = React.useState(true);
  const [selected, setSelected] = React.useState([]);
  const [severity, setSeverity] = useState("high");
  const [customNotification, setCustomNotification] = useState([]);
  const [count, setCount] = useState([1]);
  const handleSmsChecked = () => {
    setIsSms(!isSms);
  };

  const onSelect = (e) => {
    const results = users.find((user) => {
      return user.user_id == e.target.value;
    });
    setSelected(results);
  };
  const showPerson = (person) => {
    console.log(person);
    const results = users.find((user) => {
      return user.user_id == person;
    });
    console.log(results);
    return (
      <div className="tr1" style={{ marginTop: "5px" }}>
        <div className="name">{results.emp_id}</div>
        <div className="val">{results.name}</div>
      </div>
    );
  };
  const goBackHandler = () => {
    setShowAuth(true);
  };

  const counthandler = (info) => {
    console.log(info);
    console.log({data})
    setCount([...count, 2]);
    // setCustomNotification([])
  };

  useEffect(() => {});

  const renderCount = count.map((count) => {
    return <div>sachin</div>;
  });

  const onClickHandler = () => {
    setShowAuth(false);
  };
  const handleNotifyChecked = () => {
    setIsNotify(!isNotify);
  };
  const addUserHandle = (data) => {
    console.log({ data });
    if (personnelPermitted.findIndex((x) => x === data.User) === -1) {
      personnelPermitted.push(data.User);
      console.log("personnelPermitted", JSON.stringify(personnelPermitted));
      alert("user added successfully");
      return;
    }
    alert("user already has access");
  };
  useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/role/fetch/all")
      .then((res) => {
        setRoles(res.data.data);
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    fetch("http://shark-api-v2.herokuapp.com/api/user/fetch/all")
      .then((results) => results.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  const onSubmit = () => {
    console.log("isSms ", zone);
    let obj = {
      zone_id: zone.zone_id,
      activities: [
        {
          activity_id: data.activity_id,
          severity: severity,
          sms_alert: isSms,
          popped_notification: isNotify,
          custom_notification: [
            {
              type: "role",
              role_id: 88,
              message: "custom error message",
            },
            {
              type: "notification_group",
              notification_group_id: 47,
              message: "custom error message2",
            },
          ],
          authorised_personnel: personnelPermitted,
        },
      ],
    };
    updateRuleData(data, 20);
    toggleDrawer(anchor, false);
    alert("activity added successfully");
    Axios.post(
      "http://shark-api-v2.herokuapp.com/api/zone/activity-rule-map",
      obj
    )
      .then((res) => {
        console.log("role ", res);
      })
      .catch((err) => {});
  };

  const handleSeverity = (severity) => {
    let value = severity.target.value
    setSeverity(value);
  };
  return (
    <div
      className="Rectangle-12"
      role="presentation"
      //  onClick={toggleDrawer(anchor, false)}
      //  onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="Rectangle-11">
        <div className="Rectangle-6">
          <span>Configure Rules</span>
          <span onClick={toggleDrawer(anchor, false)} className="Close">
            X
          </span>
        </div>
        {showAuth ? (
          <div>
            {data.name !== "SAFETY ALERT - RESTRICTED AREA" ? (
              <img className="img1" src={rulesimg}></img>
            ) : (
              ""
            )}
            <div className="tr1">
              <div className="name">Name</div>
              <div className="val">{data.name}</div>
            </div>
            <div className="tr1">
              <div className="name">Description</div>
              <div className="val">{data.description}</div>
            </div>
            <hr class="new2"></hr>
            <h3 style={{ color: "white" }}>Rules</h3>
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
                onChange={(severity) => handleSeverity(severity)}
                defaultValue={severity}
              >
                <Radio value={"high"}>High</Radio>
                <Radio value={"medium"}>Medium</Radio>
                <Radio value={"low"}>Low</Radio>
              </Radio.Group>
            </SeveritySelection>
            <h3 style={{ color: "white" }}>Notifications</h3>
            <div className="tr1">
              <div className="name">Default Notification</div>
              <div className="val">{data.default_notification_msg}</div>
            </div>
            <h3 style={{ color: "white" }}>Custom Notification</h3>
            <form onSubmit={handleSubmit(counthandler)}>
              {count.map((count) => {
                return (
                  <div class="hod">
                    <Grid container spacing={10}>
                      <Grid item xs={3}>
                        <select
                          native
                          ref={register({ required: true, maxLength: 80 })}
                          name="customNoti"
                          style={{
                            backgroundColor: "#111627",
                            color: "white",
                            width: "100px",
                            borderRadius: "2px",
                          }}
                        >
                          {roles ? (
                            roles.map(({ name, role_id }, index) => (
                              <option value={role_id}>{name}</option>
                            ))
                          ) : (
                            <></>
                          )}
                        </select>
                      </Grid>
                      <Grid item xs={9}>
                        <input
                          type="text"
                          ref={register({ required: true, maxLength: 80 })}
                          placeholder="Add message.."
                          maxLength="100"
                          name="customMess"
                          style={{
                            width: "270px",
                            height: "21px",
                            border: "1px solid white",
                            backgroundColor: "#111627",
                            borderRadius: "2px",
                          }}
                        ></input>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
              <button
                style={{
                  width: "25px",
                  backgroundColor: "#2dd1ac",
                  marginLeft: "-2px",
                  marginRight: "10px",
                  borderRadius: "50%",
                  color: "white",
                  border: "none",
                }}
                type="submit"
              >
                +
              </button>
            Add New Notification
            </form>
            <br style={{ marginBottom: "20px" }} />
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isSms}
                    onChange={handleSmsChecked}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Send SMS"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isNotify}
                    onChange={handleNotifyChecked}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Open notifications as pop up on dashboard"
              />
            </div>
            {data.name === "SAFETY ALERT - RESTRICTED AREA" ? (
              <div>
                <h3 style={{ color: "white" }}>Authorized Personnel</h3>
                {personnelPermitted
                  ? personnelPermitted.map((person) => {
                      return <div>{showPerson(person)}</div>;
                    })
                  : ""}
                <button
                  style={{
                    width: "25px",
                    backgroundColor: "#2dd1ac",
                    marginLeft: "-2px",
                    marginRight: "10px",
                    borderRadius: "50%",
                    color: "white",
                    border: "none",
                  }}
                  onClick={onClickHandler}
                >
                  +
                </button>
                Add Authorized personnel
              </div>
            ) : (
              <></>
            )}
            <Button
              style={{ marginTop: "10px", marginLeft: "30%" }}
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        ) : (
          <div>
            <div className="Rectangle-11">
              <div className="Rectangle-6">
                <span style={{ marginLeft: "10px" }}>
                  <button
                    style={{
                      marginRight: "20px",
                      color: "white",
                      backgroundColor: "#111728",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={goBackHandler}
                  >
                    {"<---"}
                  </button>
                  Add Authorized Personnel
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit(addUserHandle)}>
              <select
                name="User"
                onChange={onSelect}
                ref={register({ required: true, maxLength: 80 })}
                style={{
                  marginLeft: "40px",
                  height: "30px",
                  width: "300px",
                  backgroundColor: "#111728",
                  color: "white",
                }}
              >
                {users.map((person) => {
                  return (
                    <option className="tr1" value={person.user_id}>
                      {person.emp_id}
                    </option>
                  );
                })}
              </select>
              <br />
              {selected ? (
                <div>
                  <div className="tr1" style={{ marginTop: "5px" }}>
                    <div className="name">Name</div>
                    <div className="val">{selected.name}</div>
                  </div>
                  <div className="tr1" style={{ marginTop: "5px" }}>
                    <div className="name">EMP.ID</div>
                    <div className="val">{selected.emp_id}</div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <input
                type="submit"
                style={{
                  backgroundColor: "#1B2848",
                  marginLeft: "40%",
                  marginTop: "10px",
                  padding: "10px",
                  border: "none",
                }}
                value="Add User"
              ></input>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    rules: state.rules,
    zone: state.zone,
  };
}

const mapDispatchToProps = {
  updateRuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleDrawer);
