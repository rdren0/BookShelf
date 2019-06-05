export const favoriteABook = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if(state.includes(action.book)){
        return state;
      }else{
        return [...state, action.book ];
      }
    case "DELETE_FAVORITE":
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

export const anError = (state = '', action) => {
  switch(action.type){
    case "HAS_ERRORED":
    return action.error
    default:
      return state;
  }
}
