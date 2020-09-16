import * as types from "./types.js";

// export const appSetIsLoggedIn = (isLoggedIn) => ({
//   type: types.APP_SET_LOGIN_STATUS,
//   isLoggedIn,
// });

// export const appSetUserDetails = (userDetails) => ({
//   type: types.APP_SET_USER_DETAILS,
//   userDetails,
// });

// export const appSetUserJwt = (JWT) => ({
//   type: types.APP_SET_JWT,
//   JWT,
// });

export const appSetNotifications = (notifications) => ({
  type: types.APP_SET_NOTIFICATIONS,
  notifications,
});

export const appSetAvailableZones = (zones) => ({
  type: types.APP_SET_AVAILABLE_ZONES,
  zones,
});

export const appSetZonesFilter = (filterText) => ({
  type: types.APP_SET_ZONES_FILTER,
  filter: filterText,
});

export const appSetHodList = (hodList) => ({
  type: types.APP_SET_HOD_LIST,
  hodList,
});

export const appSetPushNotifications = (msg) => ({
  type: types.APP_SET_PUSH_NOTIFICATION,
  msg,
});

export const appSetPushNotifTimeOut = (timeOut) => ({
  type: types.APP_SET_PUSH_NOTIF_TIMEOUT,
  timeOut,
});
