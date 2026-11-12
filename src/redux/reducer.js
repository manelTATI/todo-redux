import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_FILTER,
} from "./actionTypes";

const initialState = {
  tasks: [],
  filter: "all",
};

// Pure reducer: it never changes the old state, it always returns a new object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default reducer;
