

import { allBooks } from './allBooks'
import * as actions from "../Actions";



describe('allBooksReducer', () => {
    it('should return initial state', () => {
        const expected = [];
        const result = allBooks(undefined,[]);
        expect(result).toEqual(expected);
    })
    it('should return the state with all books when case is "FIRST_BOOKS"', () =>{
        const expected = [{1:'book', 2:'book also'}]
        const result = allBooks(undefined, actions.getStartingBooks([{1:'book', 2:'book also'}]))
        expect(result).toEqual(expected)
    })

})



