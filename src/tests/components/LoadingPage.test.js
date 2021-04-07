import React from 'react'
import { mount } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('Should render Loading page correctly', () => {
    const wrapper = mount(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})