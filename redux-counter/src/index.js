import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

let myStore = createStore(reducer);

ReactDOM.render(
  
  <Provider store={myStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);
