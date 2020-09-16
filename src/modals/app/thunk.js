import axios from "axios";
import {
  unitsGetAllUnitsListUrl,
  designationsGetAllDesignationsUrl,
  equipmentGetAllEquipmentUrl,
  notificationsGetAllUrl,
  zonesGetAllZoneUrl,
  hodGetAllHodUrl,
  scheduleWipUrl,
  zoneGetWIPdetailsUrl,
  zoneUpdateWIPUrl,
  rolesGetAllRolesListUrl
} from "./api";
import {
  appSetNotifications,
  appSetAvailableZones,
  appSetHodList,
  appSetPushNotifications,
  appSetPushNotifTimeOut,
} from "./actions.js";
import { appSelectPrevPushNotifTimemout } from "./selectors";

export const appCheckIsLoggedIn = () => ({});

export const appFetchAllUnits = () => async (dispatch, getState) => {
  try {
    const {
      data: { data: roles },
    } = await axios.get(unitsGetAllUnitsListUrl);
    return roles;
  } catch (err) {
    console.error(`failed to fetch roles with ${err}`);
    return [];
  }
};

export const appFetchAllRoles = () => async (dispatch, getState) => {
  try {
    const {
      data: { data: units },
    } = await axios.get(rolesGetAllRolesListUrl);
    return units;
  } catch (err) {
    console.error(`failed to fetch designation with ${err}`);
    return [];
  }
};

export const appFetchAllDesignations = () => async (dispatch, getState) => {
  try {
    const {
      data: { data: designations },
    } = await axios.get(designationsGetAllDesignationsUrl);
    return designations;
  } catch (err) {
    console.error(`failed to fetch units with ${err}`);
    return [];
  }
};

export const appFetchAllEquipments = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(equipmentGetAllEquipmentUrl);
    return data;
  } catch (err) {
    console.error(`failed to fetch equipment with ${err}`);
    return [];
  }
};

export const appFetchNotifications = () => async (dispatch, getState) => {
  try {
    const {
      data: { data: notifications },
    } = await axios.get(notificationsGetAllUrl);
    dispatch(appSetNotifications(notifications));
    return notifications;
  } catch (err) {
    console.error(`failed to fetch notfications with ${err}`);
    return [];
  }
};

export const appFetchZonesData = () => async (dispatch, getState) => {
  try {
    const {
      data: { data = [] },
    } = await axios.get(zonesGetAllZoneUrl);
    dispatch(appSetAvailableZones(data));
    // const activeZones = data.length
    //   ? data.filter(({ is_active }) => is_active === true)
    //   : data;
    // if (activeZones.length) {
    //   dispatch(appSetAvailableZones(activeZones));
    //   return activeZones;
    // }
    return data;
  } catch (err) {
    console.error(`failed tofetch zones dashboard data with ${err}`);
    return [];
  }
};

export const appFetchHodList = () => async (dispatch, getState) => {
  try {
    const {
      data: { data = [] },
    } = await axios.get(hodGetAllHodUrl);
    dispatch(appSetHodList(data));
  } catch (err) {
    console.error(`failed to load hod list with ${err}`);
  }
};

export const appShowPushNotification = (msg) => async (dispatch, getState) => {
  const prevTimeOut = appSelectPrevPushNotifTimemout(getState());
  clearTimeout(prevTimeOut);
  dispatch(appSetPushNotifications(msg));
  // const currentTimeOut = setTimeout(
  //   dispatch(appClearPushNotification(null)),
  //   5000
  // );
  // dispatch(appSetPushNotifTimeOut(currentTimeOut));
};

export const appClearPushNotification = () => async (dispatch, getState) => {
  dispatch(appSetPushNotifications(null));
};

export const zoneScheduleWIP = (scheduleData) => async (dispatch, getState) => {
  console.log("WIP schedule data thunk ==>", scheduleData);
  dispatch(appShowPushNotification("Scheduling WIP"));
  try {
    const { data } = await axios.post(scheduleWipUrl, scheduleData);
    dispatch(appShowPushNotification("WIP Scheduled Successfully"));
  } catch (err) {
    dispatch(appShowPushNotification("Failed to Schedule WIP, try again"));
  }
};

export const zoneFecthWIPdetails = (zoneId) => async (dispatch, getState) => {
  console.log("insode wip get**");
  try {
    const {
      data: {
        data: [wipData],
      },
    } = await axios.get(`${zoneGetWIPdetailsUrl}/${zoneId}`);
    console.log("zone wip fetched data = {} =>", wipData);
    return wipData;
  } catch (err) {
    console.error(`failed to update wip data with ${err}`);
    return null;
  }
};

export const zoneUpdateWIPdetails = (data) => async (dispatch, getState) => {
  dispatch(appShowPushNotification("updating WIP"));
  try {
    const response = await axios.put(zoneUpdateWIPUrl, data);
    dispatch(appShowPushNotification("successfully updated WIP"));
  } catch (err) {
    console.log(`failed updating wip data with ${err}`);
  }
};
