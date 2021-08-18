import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import AuthProvider from "./AuthProvider";
import { useEffect } from "react";
import { firestore } from "./firebase";
function App() {
  useEffect(() => {
    // add
    // firestore.collection("users").add({ body: "this is val 2" });

    // get

    async function f() {

      let querySnapshot = await firestore.collection("users").get();

      for (let i = 0; i < querySnapshot.docs.length; i++) {

        console.log(querySnapshot.docs[i].data());
        
      }

    }
    f();
  }, []);

  return (
    <>
      <h1>App</h1>

      {/* <AuthProvider>
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
      </AuthProvider> */}
    </>
  );
}

export default App;
