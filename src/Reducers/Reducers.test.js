import { allBooks, favoriteABook } from "./Reducers";
import * as actions from "../Actions";

describe("allBooks Reducer", () => {
  it("should return initial state", () => {
    const expected = [];
    const result = allBooks(undefined, []);
    expect(result).toEqual(expected);
  });
  it('should return the state with all books when case is "FIRST_BOOKS"', () => {
    const expected = [{ 1: "book", 2: "book also" }];
    const result = allBooks(
      undefined,
      actions.getBooks([{ 1: "book", 2: "book also" }])
    );
    expect(result).toEqual(expected);
  });
});
describe("favoriteABook Reducer", () => {
  it("should return initial state", () => {
    const expected = []
    const result = favoriteABook(undefined, []);
    expect(result).toEqual(expected);
  });
  it('should return the state with all favorites when case is "ADD_FAVORITE"', () => {
    const expected = [{ 1: "book", 2: "book also" }];
    const result = favoriteABook([],
      actions.addFavorite({ 1: "book", 2: "book also" })
    );
    expect(result).toEqual(expected);
  });
  it('should return the state with all favorites when case is "DELETE_FAVORITE"', () => {
    const expected = [{ 1: "book", 2: "book also" }, {3: 'book', 4: "more books"}];
    const result = favoriteABook([{ 1: "book", 2: "book also" }, {3: 'book', 4: "more books"}],
      actions.deleteFavorite({ 1: "book", 2: "book also" })
    );
    expect(result).toEqual(expected);
  });
});

