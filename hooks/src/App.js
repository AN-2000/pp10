import { useEffect, useState } from "react";

let App = () => {
  let [count, setCount] = useState(0);

  console.log("render was called");

  //This is case 2 for clean  up
  // in this case useEffect will only execute once and return a clean up function
  //but we dont have other useEffect which will execute
  // and we know clean up works before execution of useEffect
  // so in this case the clean up execute when the component is getting unmounted from the screen
  useEffect(() => {
    console.log("case 1 useEffect was called");

    return () => {
      console.log("clean up function");
    };
  },[]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
