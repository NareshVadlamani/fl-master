import * as types from "./types";

export const initialState = {
  currentWIPScheduling: [],
};

export default function zonesData(state = initialState, action) {
  switch (action.type) {
    case types.AZONES_SET_WORK_INP_PROGRESS:
      {
        const { workers } = action;
        state.workers = workers;
      }
      break;
    // case y:
    //   // code block
    //   break;
    default:
      return state;
  }

  return state;
}
