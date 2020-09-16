import * as types from './actionTypes';
import * as ruleApi from '../../api/rules';
import { apiCallError, beginApiCall } from "../../redux/actions/apiStatusAction";

export function updateRulesSuccess(data) {
    return { type: types.UPDATE_RULES_SUCCESS, data }
}

export function updateRuleData(data, zone_id) {
    return function (dispatch) {
        dispatch(updateRulesSuccess(data));
        // dispatch(beginApiCall());
        // return ruleApi.updateRuleData(data, zone_id)
        //     .then((response) => {
        //         console.log('response ', response);
        //         dispatch(updateRulesSuccess(response.data.data));
        //     }).catch((error) => {
        //         dispatch(apiCallError(error));
        //         throw error;
        //     })
    }
}