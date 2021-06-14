import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import RegisterReducer from "../Containers/RegisterContainer/reducer";
import EventsReducer from "../Containers/EventsContainer/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    RegisterReducer,
    EventsReducer
  });

export default createRootReducer;
