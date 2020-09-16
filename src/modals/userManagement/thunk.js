import { selectUsers } from "./selectors";
import { setUsers } from "./actions";
import axios from "axios";
import { fetchUsersUrl, deleteUserUrl, addUserUrl, updateUserUrl } from "./api";
import { appShowPushNotification } from "../app/thunk";

export const deleteUser = (user) => async (dispatch, getState) => {
  const users = selectUsers(getState());
  const updatedUsers = users.filter((list) => list.id !== user.id);
  dispatch(setUsers(updatedUsers));
  //api request
  const respone = await axios.delete(deleteUserUrl, {
    user_id: user.id,
  });
  console.log("api data ==>", respone);
};

export const fetchUsers = () => async (dispatch, getState) => {
  const { data: users } = await axios.get(fetchUsersUrl);
  console.log("Users fetched data ==>", users);
  dispatch(setUsers(users ? users.data : []));
};

export const addUser = (user) => async (dispatch, getState) => {
  try {
    console.log("add user data before post ==>", user);
    dispatch(appShowPushNotification("adding user in user management"));
    console.log('user from thunk', JSON.stringify(user) );
    const response = await axios.post(addUserUrl, user);
    dispatch(fetchUsers());
    dispatch(appShowPushNotification("successfully added user"));
  } catch (err) {
    dispatch(appShowPushNotification("failed to add user, try again"));
    console.error(`failed to add user with ${err}`);
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  dispatch(appShowPushNotification("updating user"));
  try {
    console.log("updating user ==>", user);
    const updateResponse = await axios.put(updateUserUrl, user);
    dispatch(appShowPushNotification("successfully updated user"));
    console.log("updated response ==>", updateResponse);
  } catch (err) {
    dispatch(appShowPushNotification("failed to update user, try again"));
    console.error(`failed to update user with ${err}`);
  }
};
