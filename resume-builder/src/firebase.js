import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGYu_ZG5-ROP-x5fDz9wTcpvgXBpb2mXE",
  authDomain: "resume-d6572.firebaseapp.com",
  projectId: "resume-d6572",
  storageBucket: "resume-d6572.appspot.com",
  messagingSenderId: "319088618973",
  appId: "1:319088618973:web:f19db084243ba64fa69a34",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
