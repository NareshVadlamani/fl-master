import * as types from "./actionTypes";
import * as dashboardApi from "../../api/dashboard";
import {
  apiCallError,
  beginApiCall,
} from "../../redux/actions/apiStatusAction";

export function loadDashboardDataSuccess(data) {
  return { type: types.LOAD_DASHBOARD_SUCCESS, data };
}

export function loadDashboardData() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return dashboardApi
      .getDashboardData()
      .then((response) => {
        // console.log('response ', response);
        dispatch(loadDashboardDataSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
