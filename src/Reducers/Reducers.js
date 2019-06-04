export const favoriteABook = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE_BOOK":
      return [...state, action.book];
    default:
      return state;
  }
};

export const allBooks = (state = [], action) => {
  switch (action.type) {
    case "FIRST_BOOKS":
      return action.books;
    default:
      return state;
  }
};
