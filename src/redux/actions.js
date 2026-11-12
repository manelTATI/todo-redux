import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_FILTER,
} from "./actionTypes";

// Action creators: small functions that return an action object

// Create a new task with a unique id, not done by default
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: crypto.randomUUID(), description, isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

// filter is one of: "all", "done", "notDone"
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
