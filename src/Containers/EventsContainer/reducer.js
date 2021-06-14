import {
  FETCH_EVENTS_SUCCESS_ACTION,
  FETCH_EVENTTYPES_SUCCESS_ACTION
} from "./action";

const initialState = {
  processing: false,
  error: false
};

export default function EventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS_ACTION:
      return {
        ...state,
        EventsList: action.payload
      };

    case FETCH_EVENTTYPES_SUCCESS_ACTION:
      return {
        ...state,
        EventTypeList: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
