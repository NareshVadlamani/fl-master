import * as types from "./types";

export const initialState = {
  notifications: [],
  pushNotification: {
    msg: null,
    timeOut: null,
  },
  availableZones: [],
  zonesFilter: "",
  hodList: [],
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case types.APP_SET_NOTIFICATIONS: {
      const { notifications } = action;
      return (state = { ...state, notifications });
    }
    case types.APP_SET_PUSH_NOTIFICATION: {
      const { msg } = action;
      return (state = {
        ...state,
        pushNotification: { ...state.pushNotification, msg },
      });
    }

    case types.APP_SET_PUSH_NOTIF_TIMEOUT: {
      const { timeOut } = action;
      return {
        ...state,
        pushNotification: { ...state.pushNotification, timeOut },
      };
    }
    case types.APP_SET_AVAILABLE_ZONES: {
      const { zones: availableZones } = action;
      return (state = { ...state, availableZones });
    }
    case types.APP_SET_ZONES_FILTER: {
      const { filter: zonesFilter } = action;
      return (state = { ...state, zonesFilter });
    }
    case types.APP_SET_HOD_LIST: {
      const { hodList } = action;
      return (state = { ...state, hodList });
    }
    default:
      return state;
  }

  return state;
}
