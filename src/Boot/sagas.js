import { call, all } from "redux-saga/effects";
//import { RegisterActionWatcher } from "../Containers/RegisterContainer/saga";
import { LoginActionWatcher } from "../Containers/LoginContainer/saga";
import { EventsActionWatcher } from "../Containers/EventsContainer/saga";

function* rootSaga() {
  yield all([
    call(LoginActionWatcher),
    call(EventsActionWatcher)
    // call(RegisterActionWatcher)
  ]);
}

export default rootSaga;
