import React from 'react'
import { shallow } from 'enzyme'
import ItemsLayout from '../../components/ItemsLayout'

test('Should render default ItemsLayout', () => {
    const wrapper = shallow(<ItemsLayout />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render list ItemsLayout', () => {
    const layout = 'list'
    const wrapper = shallow(<ItemsLayout layout={layout} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render calendar ItemsLayout', () => {
    const layout = 'calendar'
    const wrapper = shallow(<ItemsLayout layout={layout} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render kanban ItemsLayout', () => {
    const layout = 'kanban'
    const wrapper = shallow(<ItemsLayout layout={layout} />)
    expect(wrapper).toMatchSnapshot()
})