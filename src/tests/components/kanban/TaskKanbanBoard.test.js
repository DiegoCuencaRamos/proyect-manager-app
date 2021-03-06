import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import KanbanBoard from '../../../components/kanban/KanbanBoard'
import { tasks } from '../../fixures/tasks'
import { addTask } from '../../../actions/task'

const proyectId = 'p1'

const renderWithWrapper = () => {
    const inicialEntries = [{ 
        key: 'static',
        pathname: `/proyect/${proyectId}`
    }]

    return mount(
        <MemoryRouter initialEntries={inicialEntries}>
            <Route path="/proyect/:proyectId">
                <Provider store={store}>
                    <KanbanBoard />
                </Provider>
            </Route>
        </MemoryRouter>
    )
}

// Render
test('Should render KanbanBoard correctly with no items', () => {
    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

test('Should render KanbanBoard correctly with tasks', () => {
    // Add tasks to the KanbanBoard
    tasks.forEach(task => {
        store.dispatch(addTask(task))
    })

    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

// Events
test('Should navigate to Add Proyect Page on add new item clicked', () => {
    const wrapper = renderWithWrapper()
    wrapper.find('.kanban__board--todo #kanbanNewItem Link').simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/add-task/${proyectId}`)
})

test('Should navigate to Proyect Page proyect clicked', () => {
    const id = tasks[0].id
    const wrapper = renderWithWrapper()
    wrapper.find(`KanbanItem#${id} Link`).simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/task/${id}`)
})

