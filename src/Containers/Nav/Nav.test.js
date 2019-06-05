import React from 'react';
import { Nav } from './Nav'
import { shallow } from 'enzyme'

describe('Nav', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Nav/>)
    })
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should call fetchCategory on click of "Mystery"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-mystery')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "Fiction"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-fiction')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "Science-Fiction"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-science')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "Biography"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-bio')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "Horror"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-horror')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "Romance"', () => {
        let MockFn = jest.spyOn(wrapper.instance(), "fetchCategory");
        let button = wrapper.find('#cat-romance')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call fetchCategory on click of "View Favorites"', () => {
        let MockFN = jest.fn()
        wrapper = shallow(<Nav getBooks={MockFN}/>)
        let MockFn = jest.spyOn(wrapper.instance(), "viewFavorites");
        let button = wrapper.find('#cat-fav')
        button.simulate('click')
        expect(MockFn).toHaveBeenCalled()
    })

})
