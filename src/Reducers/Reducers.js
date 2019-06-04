export const favoriteABook = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      console.log(state)
      return [...state, action.id];
    case "DELETE_FAVORITE":
    console.log(state)
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

export const allBooks = (state = [], action) => {
  switch (action.type) {
    case "BOOKS":
      return action.books;
    default:
      return state;
  }
};
