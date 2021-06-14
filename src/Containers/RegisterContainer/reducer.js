import { REGISTER_FAIL_ACTION } from "./action";

const initialState = {
  processing: true,
  error: false,
  registerErr: ""
};

export default function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAIL_ACTION:
      return {
        ...state,
        registerErr: action.payload,
        processing: false,
        error: false
      };

    default:
      return {
        ...state
      };
  }
}
