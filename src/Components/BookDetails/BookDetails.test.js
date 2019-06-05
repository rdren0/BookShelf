import React from 'react'
import  BookDetails  from '../Books/Book'
import { shallow } from 'enzyme'

describe('Book Details', () => {
    let wrapper;
    let mockBook;
    beforeEach(() => {
        mockBook = { volumeInfo: { title: "Great Gatsby" } }
        wrapper = shallow(<BookDetails book = {mockBook}/>)
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})