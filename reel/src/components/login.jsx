import { useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase";

let Login = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        className="btn btn-primary m-4"
      >
        Login with google
      </button>

      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        lOGOUT
      </button>
    </>
  );
};

export default Login;
