import firebase from "firebase/app";
import config from "./config.json";
import "firebase/auth";

// import "firebase/firestore";

firebase.initializeApp(config);

//flag => using google
let provider = new firebase.auth.GoogleAuthProvider();

//object jiske ander login/logout/signup
export const auth = firebase.auth();

export const signInWithGoogle = () => {
  //ki muje popup ko use krke sign up krna with google
  auth.signInWithPopup(provider);
};

export default firebase;
