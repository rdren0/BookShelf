import { Search } from './Search';
import React from 'react';
import { shallow } from 'enzyme'


describe('Search', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Search/>)
    })
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})