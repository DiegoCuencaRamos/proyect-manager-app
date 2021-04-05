import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import DashboardContext from '../../../contexts/dashboard-context'
import KanbanBoard from '../../../components/kanban/KanbanBoard'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'
import { tasks } from '../../fixures/tasks'
import { addTask } from '../../../actions/task'

// RENDER
test('Should render KanbanBoard correctly with no items', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[
            {
            "hash": "",
            "key": "123qwe",
            "pathname": "/",
            "search": "",
            "state": undefined,
          }
        ]}>
            <Provider store={store}>
                <KanbanBoard />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

test('Should render KanbanBoard correctly with proyects', () => {
    const isProyect = true

    proyects.forEach(proyect => {
        store.dispatch(addProyect(proyect))
    })

    const wrapper = mount(
        <MemoryRouter initialEntries={[
            {
            "hash": "",
            "key": "123qwe",
            "pathname": "/",
            "search": "",
            "state": undefined,
          }
        ]}>
            <Provider store={store}>
                <DashboardContext.Provider value={{ isProyect }}>
                    <KanbanBoard />
                </DashboardContext.Provider>
            </Provider>
        </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
})

test('Should render KanbanBoard correctly with tasks', () => {
    tasks.forEach(task => {
        store.dispatch(addTask(task))
    })

    const wrapper = mount(
        <MemoryRouter initialEntries={[
            {
            "hash": "",
            "key": "123qwe",
            "pathname": "/",
            "search": "",
            "state": undefined,
          }
        ]}>
            <Provider store={store}>
                <KanbanBoard />
            </Provider>
        </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
})

// EVENTS

