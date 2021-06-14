import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "./configureStore";
import AppNavigator from "../Navigation";

const { store, history } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <AppNavigator />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
