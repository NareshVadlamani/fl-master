import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cameraReducer(state = initialState.camera, action) {
    switch (action.type) {
        case types.LOAD_CAMERA_SUCCESS: {
            console.log('reducer ', action.data);
            return action.data;
        }
        default:
            return state;
    }
}