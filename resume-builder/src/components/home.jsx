import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

let Home = () => {
  let user = useSelector((state) => state);
  return (
    <>
      {user ? "Home" : <Redirect to="/login" />}

      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
