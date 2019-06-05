import { combineReducers } from "redux";
import { allBooks, favoriteABook, anError } from "./Reducers";

const rootReducer = combineReducers({
  books: allBooks,
  favorites: favoriteABook,
  error: anError
});

export default rootReducer;
