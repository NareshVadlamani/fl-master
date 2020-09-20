import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import RoomIcon from "@material-ui/icons/Room";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import {
  CardContainer,
  SevierityIndicatior,
  DetailsBody,
  NotificationType,
  NotificationSubDetail,
  LocationDetails,
  DetailsWrapper,
} from "./styles";
import moment from "moment";

class NotificationCard extends Component {
  onClickHandler = () => {
    let { notification_id } = this.props.notification;
    this.props.history.push("/NotificationDescription/" + notification_id);
  };
  render() {
    const {
      severity,
      activity_name,
      default_message,
      message,
      notification_id,
      generated_time,
      zone_name,
      location,
    } = this.props.notification;
    return (
      <DetailsWrapper>
        <div style={{ flex: 1 }}>{notification_id}</div>
        <div style={{ flex: 1 }}>{location}</div>
        <div style={{ flex: 1 }}>{zone_name}</div>
        <div style={{ flex: 1 }}>{message}</div>
        <div style={{ flex: 1 }}>
          {moment(generated_time).format("DD/MM/YYYY, h:mm a")}
        </div>
        <div style={{ flex: 1 }}>{severity || "low"}</div>
      </DetailsWrapper>
    );
  }
}

// <CardContainer onClick={this.onClickHandler}>
{
  /* <SevierityIndicatior severity={severity}></SevierityIndicatior> */
}
{
  /* <DetailsBody> */
}
{
  /* <NotificationType>{activity_name}</NotificationType>
          <NotificationSubDetail>{default_message}</NotificationSubDetail>
          <LocationDetails>
            <DetailsWrapper>
              <RoomIcon />
              {zone_name}
            </DetailsWrapper>
            <DetailsWrapper>
              <QueryBuilderIcon />
              {moment(generated_time).format("DD/MM/YYYY, h:mm a")}
            </DetailsWrapper>
          </LocationDetails> */
}
{
  /* </DetailsBody>
      </CardContainer> */
}

export default withRouter(NotificationCard);
