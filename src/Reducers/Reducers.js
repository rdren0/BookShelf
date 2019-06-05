export const favoriteABook = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if(state.includes(action.book)){
        console.log('includes')
        return state;
      }else{
        console.log('doesnt')
        return [...state, action.book ];
      }
    case "DELETE_FAVORITE":
    console.log(state)
      return state.filter(book => book !== action.book);
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
