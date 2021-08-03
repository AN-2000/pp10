// Libraries

import React from "react"; // creation logic

import ReactDOM from "react-dom"; // render logic

//App is a component we have imported
import App from "./App";

ReactDOM.render(
                <App />, // ek component
                 document.querySelector("#root") // aur ek jagah jha us component ko dikhana hai
                 );
