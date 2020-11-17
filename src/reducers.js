import { combineReducers } from "redux";
import todosReducer from "./features/todos/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
