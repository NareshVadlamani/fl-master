import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dashboardReducer(
  state = initialState.dashboard,
  action
) {
  switch (action.type) {
    case types.LOAD_DASHBOARD_SUCCESS: {
      // console.log('reducer ', action.data);
      return action.data;
    }
    default:
      return state;
  }
}
