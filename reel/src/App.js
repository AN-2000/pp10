import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import AuthProvider from "./AuthProvider";
import { useEffect } from "react";
import { firestore } from "./firebase";
let App = () => {
  // useEffect(() => {
  // add
  // firestore.collection("users").add({ body: "this is val 2" });

  // get all

  // async function f() {
  //   let querySnapshot = await firestore.collection("users").get();
  //   for (let i = 0; i < querySnapshot.docs.length; i++) {
  //     console.log(querySnapshot.docs[i].data());
  //   }

  // }
  // f();

  //get single

  //this gives you the ref of that document
  // let f = async () => {
  //   let docRef = firestore.collection("users").doc("Yn0y1cjISraHa9xngpqr");

  //   let documentSnapshot = await docRef.get();

  //   console.log(documentSnapshot.exists);
  // };

  // f();
  // }, []);

  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
};

export default App;
