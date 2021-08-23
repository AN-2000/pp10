import { useDispatch, useSelector } from "react-redux";

import { incrementCreator, decrementCreator } from "./redux/actions";

let App = () => {
  let state = useSelector(function (state) {
    console.log(state);
    return state;
  });

  let dispatch = useDispatch();

  return (
    <>
      {/* <button
        onClick={() => {
          dispatch(incrementCreator(1));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(incrementCreator(10));
        }}
      >
        +10
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch(decrementCreator());
        }}
      >
        -
      </button> */}
    </>
  );
};

export default App;
