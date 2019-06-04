import { combineReducers } from "redux";
import { allBooks, favoriteABook } from "./Reducers";

const rootReducer = combineReducers({
  books: allBooks,
  favorites: favoriteABook
});

export default rootReducer;
