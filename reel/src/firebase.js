import firebase from "firebase/app";
import config from "./config.json";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
