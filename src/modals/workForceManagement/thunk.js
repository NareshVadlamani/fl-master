import { workforceSelectWorkers } from "./selectors";
import { workForceSetWorkers } from "./actions";
import axios from "axios";
import {
  fetchWorkeForceUrl,
  deleteWorkerUrl,
  addWorkForceWorkerUrl,
  updateWorkForceWorkerUrl,
} from "./api";
import { appShowPushNotification } from "../app/thunk";

export const deleteWorkForceWorker = (worker) => async (dispatch, getState) => {
  dispatch(appShowPushNotification("deleting Work force user"));
  try {
    const workers = workforceSelectWorkers(getState());
    const updatedWorkers = workers.filter(
      (list) => list.emp_id !== worker.emp_id
    );
    dispatch(workForceSetWorkers(updatedWorkers));
    const respone = await axios.delete(
      `${deleteWorkerUrl}/${worker.work_force_id}`
    );
    dispatch(appShowPushNotification("succesfully deleted, Work force user"));
  } catch (err) {
    dispatch(appShowPushNotification("Failed to delete Work force user"));
    let workers = workforceSelectWorkers(getState());
    workers.push(worker);
    dispatch(workForceSetWorkers(workers));
    console.error(`failed to delete work force user with ${err}`);
  }
};

export const fetchWorkForceWorkers = () => async (dispatch, getState) => {
  const {
    data: { data: workers },
  } = await axios.get(fetchWorkeForceUrl);
  console.log("workforce workers fetched data ==>", workers);
  dispatch(workForceSetWorkers(workers ? workers : []));
};

export const addWorkForceWorker = (worker) => async (dispatch, getState) => {
  try {
    console.log("add workforce worker data before post ==>", worker);
    dispatch(appShowPushNotification("adding Work force user"));
    const response = await axios.post(addWorkForceWorkerUrl, worker);
    dispatch(fetchWorkForceWorkers());
    dispatch(appShowPushNotification("successfully added user to work force"));
  } catch (err) {
    dispatch(
      appShowPushNotification("failed to add user in work force, try again")
    );
    console.error(`failed to add work force user with ${err}`);
  }
};

export const updateWorkForceWorker = (worker) => async (dispatch, getState) => {
  dispatch(appShowPushNotification("updating Work force user"));
  try {
    console.log("updating worker ==>", worker);
    const updateResponse = await axios.put(updateWorkForceWorkerUrl, worker);
    dispatch(appShowPushNotification("successfully updated user"));
    console.log("updated response ==>", updateResponse);
  } catch (err) {
    dispatch(appShowPushNotification("failed to update user, try again"));
    console.error(`failed to update work force user with ${err}`);
  }
};
