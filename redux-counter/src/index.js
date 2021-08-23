import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { counterReducer, loginReducer } from "./redux/reducer";

let rootReducer = combineReducers({
  count: counterReducer,
  logged: loginReducer,
});

let myStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);
