import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import WarriorsReducer from "./reducers/reducer.jsx";
import WarriorsApp from "./App.jsx";
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(WarriorsReducer, reduxDevtools && reduxDevtools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WarriorsApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
