import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import todosReducer from "./todoSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
export default rootReducer;
