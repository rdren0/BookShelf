import * as actions from "../Actions";

describe('Book Actions', () => {
    describe('getStartingBooks',() => {
        it('returns an array of books with a type of "FIRST_BOOKS"', () => {
            const expected = {type: 'BOOKS', books: [{1:'book', 2:'book also'}]}
            const result= actions.getBooks([{1:'book', 2:'book also'}])
            expect(result).toEqual(expected)
        })
    });

    describe('errorMessage',() => {
        it('returns an error message string with a type of "AN_ERROR"', () => {
            const expected = {type: 'AN_ERROR', message: 'Something went wrong!'}
            const result= actions.errorMessage('Something went wrong!')
            expect(result).toEqual(expected)
        })
    });
    describe('addFavorite',() => {
        it('returns a book object with a type of "ADD_FAVORITE"', () => {
            const expected = {book:{book: {title: 'Jurrasic Park'}},type: 'ADD_FAVORITE'}
            const result= actions.addFavorite({book: {title: 'Jurrasic Park'}})
            expect(result).toEqual(expected)
        })
    });
})






