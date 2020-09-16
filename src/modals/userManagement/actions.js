import * as types from "./types.js";


export const setUsers = (users) => {
  return {
    type: types.SET_TOTAL_USERS,
    users
  }
};