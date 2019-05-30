export const allBooks = (state = [], action) => {
    switch(action.type) {
       case 'FIRST_BOOKS':
         return action.books;
       default:
         return state;
     }
  };