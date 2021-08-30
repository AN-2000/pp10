import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";
import detailsReducer from "./reducers/detailsReducer";
import { saveReducer } from "./reducers/saveReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: detailsReducer,
  saveState: saveReducer,
});

export default rootReducer;
