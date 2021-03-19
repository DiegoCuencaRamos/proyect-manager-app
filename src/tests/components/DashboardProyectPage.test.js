import React from 'react'
import { shallow } from 'enzyme'
import DashboardProyectPage from '../../components/DashboardProyectPage'

let wrapper

beforeEach(() => {
    wrapper = shallow(<DashboardProyectPage />)
})

test('Should render Dashboard page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should set default layout state', () => {
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('')
})

test('Should set layout state', () => {
    const layoutData = 'list'
    wrapper.find('LayoutSelectors').prop('handleLayoutChange')(layoutData)
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe(layoutData)
})