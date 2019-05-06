import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import mountainReducer from "./mountainReducer";
export default combineReducers({
  auth: authReducer,
  resort:mountainReducer,
  errors: errorReducer
});
