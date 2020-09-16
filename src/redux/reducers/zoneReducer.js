import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function zoneReducer(state = initialState.zone, action) {
    switch (action.type) {
        case types.LOAD_ZONE_SUCCESS: {
            console.log('reducer ', action.data);
            return action.data;
        }
        default:
            return state;
    }
}