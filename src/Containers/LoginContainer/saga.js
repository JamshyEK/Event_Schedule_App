import { put, takeLatest } from "redux-saga/effects";
import {
  //ToastContainer,
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LOGIN_INIT_ACTION,
  FETCH_LOGIN_FAIL_ACTION,
  FETCH_LOGIN_SUCCESS_ACTION,
  LOGOUT_ACTION
} from "./action";
import { ipConfig } from "../../../config";
import { push } from "connected-react-router";

function* login(value) {
  try {
    const loginData = {
      email: value.value.email,
      password: value.value.password
    };

    const res = yield fetch(`${ipConfig.URL}accounts/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });
    console.log(res);

    if (!res.ok) {
      throw res;
    } else {
      const resJSON = yield res.json();
      localStorage.setItem("token", resJSON.token);

      yield toast.error("Success", {
        autoClose: 3000
      });
      console.log(resJSON);
      yield put(push("/events"));
      // yield put({
      //   type: FETCH_LOGIN_SUCCESS_ACTION,
      //   payload: resJSON
      // });

      // if (resJSON.user.role === "agency") {
      //   localStorage.setItem("token", resJSON.token);
      //   if (resJSON.user.ftLogin) {
      //     yield put(push("/profileupdate"));
      //   } else {
      //     yield put(push("/dashboard"));
      //   }

      //   yield toast.success("Login successful", {
      //     autoClose: 3000
      //   });
      // } else {
      //   yield toast.error("Only Agency access allowed", {
      //     autoClose: 3000
      //   });
      // }
    }
  } catch (err) {
    if (err.status === 400) {
      //toast.dismiss(toastId);
      //const toastId =
      yield toast.error("Invalid credentials", {
        autoClose: 3000

        // position: "top-center"
      });
    }

    yield put({
      type: FETCH_LOGIN_FAIL_ACTION,
      payload: err
    });
  }
}

function* logOut() {
  yield localStorage.removeItem("token");
}

export function* LoginActionWatcher() {
  yield takeLatest(LOGIN_INIT_ACTION, login);
  yield takeLatest(LOGOUT_ACTION, logOut);
}
