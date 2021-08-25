import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
});

export default rootReducer;
