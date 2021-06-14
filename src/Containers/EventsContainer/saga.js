import { put, takeEvery } from "redux-saga/effects";

import {
  FETCH_EVENTS_INIT_ACTION,
  FETCH_EVENTS_SUCCESS_ACTION,
  FETCH_EVENTS_FAIL_ACTION,
  FETCH_EVENTTYPES_INIT_ACTION,
  FETCH_EVENTTYPES_SUCCESS_ACTION,
  FETCH_EVENTTYPES_FAIL_ACTION
} from "./action";

import { ipConfig } from "../../../config";

function* fetchEvents() {
  const token = localStorage.getItem("token");
  try {
    const res = yield fetch(`${ipConfig.URL}events`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) {
      let errJSON = {};
      try {
        errJSON = yield res.json();
      } catch {}
      throw Object.assign(res, errJSON);
    } else {
      const resJSON = yield res.json();
      console.log(resJSON);

      yield put({
        type: FETCH_EVENTS_SUCCESS_ACTION,
        payload: resJSON
      });
    }
  } catch (err) {
    if (err.ok === false) {
      yield put({ type: FETCH_EVENTS_FAIL_ACTION, error: err });
    } else {
    }
  }
}

function* fetchEventType() {
  const token = localStorage.getItem("token");
  try {
    const res = yield fetch(`${ipConfig.URL}events/event_types`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) {
      let errJSON = {};
      try {
        errJSON = yield res.json();
      } catch {}
      throw Object.assign(res, errJSON);
    } else {
      const resJSON = yield res.json();
      console.log(resJSON);

      yield put({
        type: FETCH_EVENTTYPES_SUCCESS_ACTION,
        payload: resJSON
      });
    }
  } catch (err) {
    if (err.ok === false) {
      yield put({ type: FETCH_EVENTTYPES_FAIL_ACTION, error: err });
    } else {
    }
  }
}

export function* EventsActionWatcher() {
  yield takeEvery(FETCH_EVENTS_INIT_ACTION, fetchEvents);
  yield takeEvery(FETCH_EVENTTYPES_INIT_ACTION, fetchEventType);
}
