import * as types from './actionTypes';

export function loadCameraDataSuccess(data) {
    return { type: types.LOAD_CAMERA_SUCCESS, data }
}

export function setCameraData(data) {
    return function (dispatch) {
        return new Promise((resolve) => {
            dispatch(loadCameraDataSuccess(data))
            resolve(data);
        })
    }
}
