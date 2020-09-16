import * as types from "./actionTypes";
import * as ZoneApi from "../../api/zone";
import {
  apiCallError,
  beginApiCall,
} from "../../redux/actions/apiStatusAction";

export function loadZoneDataSuccess(data) {
  return { type: types.LOAD_ZONE_SUCCESS, data };
}

export function loadZoneData() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return ZoneApi.getZoneData()
      .then((response) => {
        console.log("response ", response);
        if (!response || !response.data) throw "No response";
        // Object.assign(response.data.data, { hod: '' }, { hod_ph: '' })
        dispatch(loadZoneDataSuccess(response.data.data));
      })
      .catch((error) => {
        console.log("******* =>>>>>>>>>>> error ", error);
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function setZoneData(data) {
  return function (dispatch) {
    return new Promise((resolve) => {
      dispatch(loadZoneDataSuccess(data));
      resolve(data);
    });
  };
}
