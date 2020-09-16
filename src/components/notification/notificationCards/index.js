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
      generated_time,
      zone_name,
    } = this.props.notification;
    return (
      <CardContainer onClick={this.onClickHandler}>
        <SevierityIndicatior severity={severity}></SevierityIndicatior>
        <DetailsBody>
          <NotificationType>{activity_name}</NotificationType>
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
          </LocationDetails>
        </DetailsBody>
      </CardContainer>
    );
  }
}

export default withRouter(NotificationCard);
