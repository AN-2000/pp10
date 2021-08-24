import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions";
let App = () => {
  let state = useSelector((state) => state);
  console.log(state);
  let dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Click me
      </button>
    </>
  );
};

export default App;
