import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import * as History from "history";

import createRootReducer from "../Reducer";
import saga from "./sagas";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
export const history = History.createBrowserHistory();

const middleware = [
  thunk,
  loggerMiddleware,
  sagaMiddleware,
  routerMiddleware(history)
];

const initialState = {};

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleware.run(saga);

  return { store, history };
}
