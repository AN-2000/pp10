import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

import Login from "./components/login";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";

let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
