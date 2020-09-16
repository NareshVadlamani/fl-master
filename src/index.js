import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
import App from "./App";
import configureStore from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
