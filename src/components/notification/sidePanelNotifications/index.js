import React from "react";
import NotificationCard from "../notificationCards";
import { NotificationsBody } from "./styles";

const SidePanelNotifications = ({ notifications }) => {
  return (
    <NotificationsBody>
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
