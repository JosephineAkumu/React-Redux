import { SET_USER, LOGOUT_USER } from '../actions/authActions';

const initialState = {
  user: null,
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
