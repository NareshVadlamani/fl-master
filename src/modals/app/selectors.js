import { createSelector } from "reselect";

export const appSelectNotifications = ({ appData: { notifications } }) => {
  return notifications || [];
};

export const appSelectPushNotification = ({
  appData: {
    pushNotification: { msg },
  },
}) => msg;

export const appSelectHodList = ({ appData: { hodList } }) => hodList;

export const appSelectAvailablezones = ({ appData: { availableZones } }) => {
  return availableZones;
};

export const appSelectFilter = ({ appData: { zonesFilter } }) => {
  return zonesFilter;
};

export const appSelectFilteredZones = createSelector(
  [appSelectAvailablezones, appSelectFilter],
  (zones, filter) => {
    if (!filter) return zones;
    const filteredZones = zones.filter(
      ({ name }) => name.toUpperCase().indexOf(filter.toUpperCase()) > -1
    );
    return filteredZones;
  }
);

export const appSelectPrevPushNotifTimemout = ({
  appData: {
    pushNotification: { timeOut },
  },
}) => timeOut;
