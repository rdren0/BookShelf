import { Search } from './Search';
import React from 'react';
import { shallow } from 'enzyme'


describe('Search', () => {
    let wrapper;
    let mockFN;
    beforeEach(() => {
        mockFN= jest.fn()
        wrapper = shallow(<Search fetchCategory={mockFN}/>)
    })
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it.skip('should call handleChange when typeing', () => {
        let mockEvent = {target:{value: 'x'}}
        let MockFn = jest.spyOn(wrapper.instance(), "handleChange");
        let input = wrapper.find('#search-input')
        input.simulate('change', mockEvent)
        expect(MockFn).toHaveBeenCalled()
    })
    it('should call handleSubmit when submit', () => {
        let mockEvent = {target:{value: 'x'}, preventDefault:jest.fn()}
        let MockFn = jest.spyOn(wrapper.instance(), "handleSubmit");
        let button = wrapper.find('form')
        button.simulate('submit', mockEvent)
        expect(MockFn).toHaveBeenCalled()
    })
})