import React, { useState, useEffect } from "react";
import {
  MainBoard,
  HeaderText,
  Header,
  CustomCloseIcon,
  DetailRow,
  DetailKey,
  DetailsSection,
  DetailValue,
  SubmitSection,
  ErrorMsg,
} from "./styles.js";
import Button from "@material-ui/core/Button";
import { isEmpty } from "lodash";
import "antd/dist/antd.css";
import { Select, DatePicker, Input, Radio } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useForm } from "react-hook-form";
import { zoneUpdateWIPdetails } from "../../../modals/app/thunk.js";
import { connect } from "react-redux";

const { Option } = Select;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1b2848",
  },
}));

const WipScheduler = ({
  schedulingZone,
  toggleWipScheduler,
  equipments,
  createWIP,
  getWipDetails,
  updateWIP,
}) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const [alertHod, setAlertHod] = useState(true);
  const [equipment, setEquipment] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [existingData, setExistingWipData] = useState({});
  const [isEditingForm, setFormModeEditing] = useState(false);

  const calculateDuration = (startTime, endTime) => {
    if (
      startTime &&
      endTime &&
      new Date(startTime).getTime() < new Date(endTime).getTime()
    ) {
      const totalMinDiff = moment(endTime).diff(startTime, "minutes");
      var hours = Math.floor(totalMinDiff / 60);
      var minutes = totalMinDiff % 60;
      setDuration(`${hours}:${minutes} Hours`);
      setErrorMsg(null);
      return `${hours}:${minutes} Hours`;
    }
    setErrorMsg("Select valid time");
    return "not valid time";
  };

  const prefillFormData = ({
    purpose,
    start_time,
    end_time,
    equipment_id,
    duration,
    send_alert,
  }) => {
    setPurpose(purpose);
    setEquipment(equipment_id);
    setStartTime(start_time);
    setEndTime(end_time);
    setAlertHod(send_alert);
    const totalMinDiff = moment(start_time).diff(end_time, "minutes");
    var hours = Math.floor(totalMinDiff / 60);
    var minutes = totalMinDiff % 60;
    setDuration(`${Math.abs(hours)}:${Math.abs(minutes)} Hours`);
  };

  const checkZoneWipSchedule = async () => {
    if (isEmpty(schedulingZone)) return;
    const wipData = await getWipDetails(schedulingZone.zone_id);
    if (wipData) {
      setFormModeEditing(true);
      setExistingWipData(wipData);
      prefillFormData(wipData);
      return;
    }
    prefillFormData({
      purpose: "",
      start_time: new Date().getTime(),
      end_time: new Date().getTime(),
      equipment_id: null,
      duration: null,
      send_alert: true,
    });
    setFormModeEditing(false);
  };

  useEffect(() => {
    checkZoneWipSchedule();
  }, [schedulingZone]);

  const dateFormat = "YYYY/MM/DD hh:mm A";

  const onTimeChange = (time, timePeriod) => {
    const string = moment(time).toISOString();
    console.log("from calendar ==>", time, moment(time).toISOString());
    timePeriod === "start"
      ? setStartTime(new Date(string).getTime())
      : setEndTime(new Date(string).getTime());
    const timeDuration =
      timePeriod === "start"
        ? calculateDuration(setStartTime(new Date(string).getTime()), endTime)
        : calculateDuration(startTime, new Date(string).getTime());
    setDuration(timeDuration);
  };

  const onPurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const onEquipmentChange = (value) => {
    setEquipment(value);
  };

  const onSubmit = (data) => {
    if (
      !Boolean(startTime) ||
      !Boolean(endTime) ||
      new Date(startTime) >= new Date(endTime)
    ) {
      setErrorMsg("Please provide valid time");
      return;
    }
    if (!Boolean(equipment)) {
      setErrorMsg("Please Select equipment");
      return;
    }
    if (!purpose) {
      setErrorMsg("Please provide purpose");
      return;
    }
    setErrorMsg(null);

    const scheduleData = {
      start_time: new Date(startTime).getTime(),
      end_time: new Date(endTime).getTime(),
      zone_id: schedulingZone.zone_id,
      equipment_id: equipment,
      purpose: purpose,
      send_alert: alertHod,
      created_by: "user",
      updated_by: "user",
    };
    isEditingForm
      ? updateWIP({ ...scheduleData, wip_id: existingData.wip_id })
      : createWIP(scheduleData);
  };

  return (
    <MainBoard isScheduling={!isEmpty(schedulingZone)}>
      {!isEmpty(schedulingZone) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header>
            <HeaderText>{"Schedule WIP"}</HeaderText>
            <CustomCloseIcon
              onClick={() => toggleWipScheduler({})}
              color="white"
            />
          </Header>
          <DetailsSection>
            <DetailRow>
              <DetailKey>Zone Name</DetailKey>:
              <DetailValue>{schedulingZone.name}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailKey>Start Time</DetailKey>:
              <DetailValue>
                {isEditingForm ? (
                  moment(startTime).format(dateFormat)
                ) : (
                  <DatePicker
                    defaultValue={moment(startTime)}
                    onOk={(time) => onTimeChange(time, "start")}
                    showTime={{
                      format: "hh:mm A",
                      defaultValue: moment(startTime),
                    }}
                  />
                )}
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailKey>End Time</DetailKey>:
              <DetailValue>
                {isEditingForm ? (
                  moment(endTime).format(dateFormat)
                ) : (
                  <DatePicker
                    defaultValue={moment(endTime)}
                    onOk={(time) => onTimeChange(time, "end")}
                    showTime={{
                      format: "hh:mm a",
                      defaultValue: moment(endTime),
                    }}
                  />
                )}
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailKey>Duration</DetailKey>:
              <DetailValue>{`${duration}`}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailKey>Purpose</DetailKey>:
              <DetailValue>
                {isEditingForm ? (
                  purpose
                ) : (
                  <Input
                    placeholder="Purpose"
                    onChange={onPurposeChange}
                    value={purpose}
                    ref={register}
                    required
                  />
                )}
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailKey>Equipment</DetailKey>:
              <DetailValue>
                {
                  <Select
                    value={equipment}
                    style={{ width: 120 }}
                    onChange={onEquipmentChange}
                    ref={register}
                    required
                    disabled={isEditingForm}
                  >
                    {equipments &&
                      equipments.map(({ equipment_id, name }, i) => (
                        <Option value={equipment_id}>{name}</Option>
                      ))}
                  </Select>
                }
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailValue>
                <Radio
                  size={24}
                  onClick={() => setAlertHod(!alertHod)}
                  checked={alertHod}
                />
                Alert to the Zone HOD/Supervisor
              </DetailValue>
            </DetailRow>
          </DetailsSection>
          <SubmitSection>
            <ErrorMsg>{errorMsg}</ErrorMsg>
            {isEditingForm ? null : (
              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                className={classes.root}
              >
                {isEditingForm ? "Update" : "Submit"}
              </Button>
            )}
          </SubmitSection>
        </form>
      )}
    </MainBoard>
  );
};

const mapDispatchToProps = {
  updateWIP: zoneUpdateWIPdetails,
};

export default connect(null, mapDispatchToProps)(WipScheduler);

//proceed to data submission
// const startMinutes =
//   String(moment(startTime).minutes()).length === 1
//     ? `0${moment(startTime).minutes()}`
//     : moment(startTime).minutes();
// const endMinutes =
//   String(moment(endTime).minutes()).length === 1
//     ? `0${moment(endTime).minutes()}`
//     : moment(endTime).minutes();
// const startHours =
//   String(moment(startTime).hours()).length === 1
//     ? `0${moment(startTime).hours()}`
//     : moment(startTime).hours();
// const endHours =
//   String(moment(endTime).hours()).length === 1
//     ? `0${moment(endTime).hours()}`
//     : moment(endTime).hours();
// start_time: new Date(startTime).getTime(),
// end_time: new Date(endTime).getTime(),
//above start and end minutes can be removed if backend approves time stamps
// const scheduleData = {
//   start_time: new Date(startTime).getTime(),
//   end_time: new Date(endTime).getTime(),
//above start and end minutes can be removed if backend approves time stamps
// `${startHours}${startMinutes}`
// `${endHours}${endMinutes}`
