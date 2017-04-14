import { USER_ACTION } from '../actions/userActions';

export default (state = {
  token: null,
  error: null,
}, action) => {
  let copy;
  switch (action.type) {
    case USER_ACTION.LOGIN:
      copy = Object.assign({}, state);
      copy.token = action.item;
      return copy;

    case USER_ACTION.CREDENTIALS_ERROR:
      copy = Object.assign({}, state);
      copy.error = true;
      return copy;

    case USER_ACTION.SIGNUP:
      copy = Object.assign({}, state);
      copy.signup = true;
      return copy;

    case USER_ACTION.SIGNUP_ERROR:
      return state;

    default:
      return state;
  }
};
