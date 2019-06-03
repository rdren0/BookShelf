export const getStartingBooks = (books) => ({
    type: "FIRST_BOOKS",
    books
  });

  export const errorMessage = (message) => ({
    type: "AN_ERROR",
    message
  })