import * as types from "./types";

export const initialState = {
  users: [],
};

export default function userManagementReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.SET_TOTAL_USERS:
      {
        const { users } = action;
        state = { ...state, users };
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
