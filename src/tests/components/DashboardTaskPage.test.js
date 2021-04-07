import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import DashboardTasktPage from '../../components/DashboardTaskPage'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <DashboardTasktPage />
            </Provider>
        </MemoryRouter>
    )
})

test('Should render Task Dashboard page with default layout', () => {
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('list')
    expect(wrapper.find('List')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Task list layout', () => {
    const firstLayout = 'calendar'
    const secondLayout = 'list'

    wrapper.find('#calendarSelector').simulate('click', {
        target: {
            dataset: { layout: firstLayout }
        }
    })

    wrapper.find('#listSelector').simulate('click', {
        target: {
            dataset: { layout: secondLayout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('list')
    expect(wrapper.find('List')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Task calendar layout ', () => {
    const layout = 'calendar'
    wrapper.find('#calendarSelector').simulate('click', {
        target: {
            dataset: { layout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('calendar')
    expect(wrapper.find('Calendar')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Task kanban layout ', () => {
    const layout = 'kanban'
    wrapper.find('#kanbanSelector').simulate('click', {
        target: {
            dataset: { layout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('kanban')
    expect(wrapper.find('KanbanBoard')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

