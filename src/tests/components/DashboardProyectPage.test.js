import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import ProyectContextProvider from '../../contexts/ProjectContext'
import DashboardProyectPage from '../../components/DashboardProyectPage'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[{ key: '123qwe' }]}>
            <ProyectContextProvider>
                <Provider store={store}>
                    <DashboardProyectPage />
                </Provider>
            </ProyectContextProvider>
        </MemoryRouter>
    )
})

test('Should render Proyect Dashboard page with default layout', () => {
    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('list')
    expect(wrapper.find('List')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Proyect list layout ', () => {
    const firstLayout = 'calendar'
    const secondLayout = 'list'

    wrapper.find('[data-layout="calendar"]').simulate('click', {
        target: {
            dataset: { layout: firstLayout }
        }
    })

    wrapper.find('[data-layout="list"]').simulate('click', {
        target: {
            dataset: { layout: secondLayout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('list')
    expect(wrapper.find('List')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Proyect calendar layout ', () => {
    const layout = 'calendar'
    wrapper.find('[data-layout="calendar"]').simulate('click', {
        target: {
            dataset: { layout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('calendar')
    expect(wrapper.find('Calendar')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})

test('Should set Proyect kanban layout ', () => {
    const layout = 'kanban'
    wrapper.find('[data-layout="kanban"]').simulate('click', {
        target: {
            dataset: { layout }
        }
    })

    expect(wrapper.find('ItemsLayout').prop('layout')).toBe('kanban')
    expect(wrapper.find('KanbanBoard')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
})