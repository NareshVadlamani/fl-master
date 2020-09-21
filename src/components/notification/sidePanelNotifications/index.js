import React from "react";
import NotificationCard from "../notificationCards";
import { NotificationsBody, NotificationHead, HeadText } from "./styles";

const SidePanelNotifications = ({ notifications }) => {
  return (
    <NotificationsBody>
      <NotificationHead>
        <HeadText>id</HeadText>
        <HeadText>location</HeadText>
        <HeadText>zone name</HeadText>
        <HeadText>message</HeadText>
        <HeadText>date</HeadText>
        <HeadText>severity</HeadText>
      </NotificationHead>
      {notifications.length > 0 &&
        notifications.map((notification, i) => (
          <NotificationCard
            key={`notification-${i}`}
            notification={notification}
          />
        ))}
    </NotificationsBody>
  );
};

export default SidePanelNotifications;
