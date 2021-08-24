import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

let myStore = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
