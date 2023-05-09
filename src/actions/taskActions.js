import axios from 'axios';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TASKS_REQUEST });
    axios.get('/api/tasks')
      .then((response) => {
        const tasks = response.data;
        dispatch({
          type: FETCH_TASKS_SUCCESS,
          payload: tasks
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: FETCH_TASKS_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const addTask = (task) => {
  return (dispatch) => {
    dispatch({ type: ADD_TASK_REQUEST });
    axios.post('/api/tasks', task)
      .then((response) => {
        const addedTask = response.data;
        dispatch({
          type: ADD_TASK_SUCCESS,
          payload: addedTask
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: ADD_TASK_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const editTask = (taskId, updatedTask) => {
  return (dispatch) => {
    dispatch({ type: EDIT_TASK_REQUEST });
    axios.put(`/api/tasks/${taskId}`, updatedTask)
      .then((response) => {
        const updatedTask = response.data;
        dispatch({
          type: EDIT_TASK_SUCCESS,
          payload: updatedTask
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: EDIT_TASK_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TASK_REQUEST });
    axios.delete(`/api/tasks/${taskId}`)
      .then(() => {
        dispatch({
          type: DELETE_TASK_SUCCESS,
          payload: taskId
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: DELETE_TASK_FAILURE,
          payload: errorMessage
        });
      });
  };
};
