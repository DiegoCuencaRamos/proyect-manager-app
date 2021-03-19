import React from 'react'
import { mount, shallow } from 'enzyme'
import moment from 'moment'
import Form from '../../../components/Form'
import { tasks } from '../../fixures/tasks'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize' // datePicker JS
import { MemoryRouter } from 'react-router'


let wrapper, item, onParentFormSubmit 
const { name, status, startDate, endDate, color, description } = tasks[0]

beforeEach(() => {
    item = { name, status, startDate, endDate, color, description }
    onParentFormSubmit = jest.fn()
})

test('should render Task Form with empty values', () => {
    wrapper = shallow(
        <Form 
            onParentFormSubmit={onParentFormSubmit}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

describe('should render Task Form with task data:', () => {
    beforeEach(() => {
        wrapper = shallow(
            <Form 
                item={item} 
                onParentFormSubmit={onParentFormSubmit}
            />
        )
    })
    
    test(('should set task name input value'), () => {
        expect(wrapper.find('.form__item--name').prop('value')).toBe(item.name)
    })

    test(('should set task status input value'), () => {
        expect(wrapper.find('.form__item--status').prop('value')).toBe(item.status)
    })

    test(('should set task start date input value'), () => {
        expect(wrapper.find(DateRangePicker).prop('startDate')).toEqual(moment(item.startDate))
    })

    test(('should set task end date input value'), () => {
        expect(wrapper.find(DateRangePicker).prop('endDate')).toEqual(moment(item.endDate))
    })

    test(('should set task color input value'), () => {
        expect(wrapper.find('.form__item--color input').prop('value')).toBe(item.color)
    })

    test(('should set task description input value'), () => {
        expect(wrapper.find('.form__item--description').prop('value')).toBe(item.description)
    })

    test(('should match snapshot'), () => {
        expect(wrapper).toMatchSnapshot()
    })    
})

describe('Should handle Task Form events:', () => {
    beforeEach(() => {
        wrapper = shallow(
            <Form 
                onParentFormSubmit={onParentFormSubmit}
            />
        )
    })

    test('should set name on name change', () => {
        const value = 'Any name'
        wrapper.find('.form__item--name').simulate('change', {
            target: { value }
        })
        expect(wrapper.find('.form__item--name').prop('value')).toBe(value)
    })
    
    test('should set status on status change', () => {
        const value = 'done'
        wrapper.find('.form__item--status').simulate('change', {
            target: { value }
        })
        expect(wrapper.find('.form__item--status').prop('value')).toBe(value)
    })
    
    test('should set start / end dates on DateRangePicker change', () => {
        const startDate = moment('1994-09-08')
        const endDate = moment('1994-09-20')
        wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate })
        expect(wrapper.find(DateRangePicker).prop('startDate')).toEqual(startDate)
        expect(wrapper.find(DateRangePicker).prop('endDate')).toEqual(endDate)
    })
    
    test('should set calendar focus on focus change', () => {
        const calendarFocused = 'startDate'
        wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
        expect(wrapper.find(DateRangePicker).prop('focusedInput')).toBe(calendarFocused)
    })
    
    test('should set description on description change', () => {
        const value = 'Any description'
        wrapper.find('.form__item--description').simulate('change', {
            target: { value }
        })
        expect(wrapper.find('.form__item--description').prop('value')).toBe(value)
    })
    
    test('should render error on invalid form submission', (done) => {
        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
        expect(wrapper.find('.error-message').text().length).toBeGreaterThan(0) 
        done()
    })

    test('should submit form on valid form submission', (done) => {
        wrapper = mount(
            <MemoryRouter>
                <Form 
                    item={item}
                    onParentFormSubmit={onParentFormSubmit}
                />
            </MemoryRouter>
        ) 
        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
        expect(onParentFormSubmit).toHaveBeenCalledWith(item)
        done()
    })
})