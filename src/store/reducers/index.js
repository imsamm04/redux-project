import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  myTodos: todoReducer,
  users: userReducer,
});

export default rootReducer;
