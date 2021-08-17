import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
