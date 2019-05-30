import { combineReducers } from "redux";
import { allBooks } from "./allBooks";


const rootReducer = combineReducers({
  books: allBooks,
});

export default rootReducer;
