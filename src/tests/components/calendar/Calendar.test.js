import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../../store'
import moment from 'moment'
import Calendar from '../../../components/calendar/Calendar'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

const renderWithWrapper = () => mount(
    <Provider store={store}>
        <Calendar />
    </Provider>
)

// Rendering
test('Shoul render calendar correctly with no items', () => {
    const wrapper = renderWithWrapper()  
    expect(wrapper).toMatchSnapshot()
})

test('Shoul render calendar correctly with some items', () => {
    // Add items to the calendar
    proyects.forEach(item => {
        store.dispatch(addProyect(item))
    })
    const wrapper = renderWithWrapper()  
    expect(wrapper).toMatchSnapshot()
})

// Events
test('Should substract one month from current month on prevMonth clicked', () => {
    const wrapper = renderWithWrapper()  
    const dateFormat = 'MMMM YYYY'
    wrapper.find('#prevMonth').simulate('click')
    expect(wrapper.find('#displayMonth').text()).toBe(moment().subtract(1, 'months').format(dateFormat))
})

test('Should add one month from current month on nextMonth clicked', () => {
    const wrapper = renderWithWrapper()
    const dateFormat = 'MMMM YYYY'
    wrapper.find('#nextMonth').simulate('click')
    expect(wrapper.find('#displayMonth').text()).toBe(moment().add(1, 'months').format(dateFormat))
})



