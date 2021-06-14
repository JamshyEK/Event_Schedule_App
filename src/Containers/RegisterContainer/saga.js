import { put, takeLatest } from "redux-saga/effects";
import {
  //ToastContainer,
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  REGISTER_INIT_ACTION,
  REGISTER_SUCCESS_ACTION,
  REGISTER_FAIL_ACTION
} from "./action";
import { ipConfig } from "../../../config";
import { push } from "connected-react-router";

function* register(value) {
  console.log(value);
  try {
    const registerData = {
      email: value.value.email,
      password: value.value.password
    };

    const res = yield fetch(`${ipConfig.URL}accounts/register/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    });
    console.log(res);

    if (!res.ok) {
      throw res;
    } else if (res.status === 406) {
      yield put({
        type: REGISTER_FAIL_ACTION,
        payload: "User already exist"
      });
    } else {
      yield put(push("/login"));
      const resJSON = yield res.json();
      yield toast.error("Success", {
        autoClose: 3000

        // position: "top-center"
      });
      console.log(resJSON, "---------");
      // yield put({
      //   type: REGISTER_SUCCESS_ACTION,
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

    // yield put({
    //   type: REGISTER_FAIL_ACTION,
    //   payload: err
    // });
  }
}

export function* RegisterActionWatcher() {
  yield takeLatest(REGISTER_INIT_ACTION, register);
}
