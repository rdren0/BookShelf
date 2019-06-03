import * as actions from "../Actions";

describe('Book Actions', () => {
    describe('getStartingBooks',() => {
        it('returns an array of books with a type of "FIRST_BOOKS"', () => {
            const expected = {type: 'FIRST_BOOKS', books: [{1:'book', 2:'book also'}]}
            const result= actions.getStartingBooks([{1:'book', 2:'book also'}])
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
})






