import { REGISTER_USER,
         USER_REGISTERED,
         LOGIN_USER,
         USER_LOGIN } from '../actions';


const initalState = {
  isRegistering: false,
  isLogginIn: false,
  message: '',
  token: null,
  error: null
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return{
        ...state,
        error: '',
        isRegistering: true
      }
    case USER_REGISTERED:
      return{
        ...state,
        error: '',
        isRegistering: false
      }
    case LOGIN_USER:
      return{
        ...state,
        error: '',
        isLogginIn: true
      }
    case USER_LOGIN:
      return{
        ...state,
        error: '',
        token: action.payload.token,
        isLogginIn: false
      }
    default:
      return state;
  }
};
