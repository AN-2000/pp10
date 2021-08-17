import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const authContext = createContext();

let AuthProvider = (props) => {

  console.log(props);

  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    
    let unsub = auth.onAuthStateChanged((user) => {

      if (user) {
        let { displayName, email, uid, photoURL } = user;

        setUser({ displayName, email, uid, photoURL });
      } else {
        setUser(null);
      }

      setLoading(false);


    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <authContext.Provider value={user}>

      {!loading && props.children}

    </authContext.Provider>
  );
};

export default AuthProvider;
