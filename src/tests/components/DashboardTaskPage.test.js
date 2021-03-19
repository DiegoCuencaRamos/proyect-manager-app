import React from 'react'
import { shallow } from 'enzyme'
import DashboardTasktPage from '../../components/DashboardTaskPage'

let wrapper

beforeEach(() => {
    wrapper = shallow(<DashboardTasktPage />)
})

test('Should render DashboardTaskPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
}) 

test('Should setup default luyout state', () => {
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('')
})

test('Should setup luyout state', () => {
    const layoutData = 'calendar'
    wrapper.find('LayoutSelectors').prop('handleLayoutChange')(layoutData)
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe(layoutData)
})