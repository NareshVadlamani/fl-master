import * as types from "./types";

export const initialState = {
  workers: [],
};

export default function workForceManagementReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.WORFOCE_SET_TOTAL_WORKERS:
      {
        const { workers } = action;
        state = { ...state, workers };
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
