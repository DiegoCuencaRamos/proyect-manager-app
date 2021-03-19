import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../../store'
import moment from 'moment'
import Calendar from '../../../components/calendar/Calendar'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

let wrapper

beforeEach(() => {
    // Add items to the calendar
    proyects.forEach(item => {
        store.dispatch(addProyect(item))
    })
    // Render calender
    wrapper = mount(
        <Provider store={store}>
            <Calendar />
        </Provider>
    )
})

// RENDER
test('Shoul render calendar correctly with some items', () => {
    const proyect = store.getState().proyects[0]
    console.log('startDate: ', moment(proyect.startDate).format())
    console.log('endDate: ', moment(proyect.endDate).format())
    
    expect(wrapper).toMatchSnapshot()
})

// CALENDAR HEADER
test('Should substract one month from current month on prevMonth clicked', () => {
    const dateFormat = 'MMMM YYYY'
    wrapper.find('#prevMonth').simulate('click')
    expect(wrapper.find('#displayMonth').text()).toBe(moment().subtract(1, 'months').format(dateFormat))
})

test('Should add one month from current month on nextMonth clicked', () => {
    const dateFormat = 'MMMM YYYY'
    wrapper.find('#nextMonth').simulate('click')
    expect(wrapper.find('#displayMonth').text()).toBe(moment().add(1, 'months').format(dateFormat))
})

// CALENDAR WEEK DAYS
// All done

// CALENDAR BODY
// All done



