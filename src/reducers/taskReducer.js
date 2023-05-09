import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [],
    isLoading: false,
    error: null
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TASKS_REQUEST:
      case ADD_TASK_REQUEST:
      case EDIT_TASK_REQUEST:
      case DELETE_TASK_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case FETCH_TASKS_SUCCESS:
        return {
          ...state,
          tasks: action.payload,
          isLoading: false
        };
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          isLoading: false
        };
      case EDIT_TASK_SUCCESS:
        const updatedTask = action.payload;
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
          isLoading: false
        };
      case DELETE_TASK_SUCCESS:
        const deletedTaskId = action.payload;
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== deletedTaskId),
          isLoading: false
        };
      case FETCH_TASKS_FAILURE:
      case ADD_TASK_FAILURE:
      case EDIT_TASK_FAILURE:
      case DELETE_TASK_FAILURE:
        const error = action.payload;
        return {
          ...state,
          isLoading: false,
          error
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  