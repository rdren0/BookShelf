export const getBooks = (books) => ({
    type: "BOOKS",
    books
  });

  export const errorMessage = (message) => ({
    type: "AN_ERROR",
    message
  })

  export const addFavorite = (id) => ({
    type: "ADD_FAVORITE",
    id
  })
  
  export const deleteFavorite = (id) => ({
    type: "DELETE_FAVORITE",
    id
  })