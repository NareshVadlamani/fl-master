import * as types from "./types.js";

export const workForceSetWorkers = (workers) => ({
  type: types.WORFOCE_SET_TOTAL_WORKERS,
  workers,
});
