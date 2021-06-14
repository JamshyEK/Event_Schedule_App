export const LOGIN_INIT_ACTION = "LOGIN_INIT";
export const FETCH_LOGIN_FAIL_ACTION = LOGIN_INIT_ACTION + "_ERROR";
export const FETCH_LOGIN_SUCCESS_ACTION = LOGIN_INIT_ACTION + "_SUCCESS";
export const LOGOUT_ACTION = "LOGOUT";

export function login(value) {
  return {
    type: LOGIN_INIT_ACTION,
    value: value
  };
}

export function logOut() {
  return {
    type: LOGOUT_ACTION
  };
}
