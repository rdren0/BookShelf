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
})