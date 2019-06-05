export const getBooks = (books) => ({
    type: "BOOKS",
    books
  });

  export const errorMessage = (message) => ({
    type: "AN_ERROR",
    message
  })

  export const addFavorite = (book) => ({
    type: "ADD_FAVORITE",
    book
  })
  
  export const deleteFavorite = (book) => ({
    type: "DELETE_FAVORITE",
    book
  })