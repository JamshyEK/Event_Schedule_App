export const REGISTER_INIT_ACTION = "REGISTER_INIT";
export const REGISTER_FAIL_ACTION = REGISTER_INIT_ACTION + "_ERROR";
export const REGISTER_SUCCESS_ACTION = REGISTER_INIT_ACTION + "_SUCCESS";

export function register(value) {
  return {
    type: REGISTER_INIT_ACTION,
    value: value
  };
}
