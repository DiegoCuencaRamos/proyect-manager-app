import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import DashboardContext from '../../../contexts/dashboard-context'
import List from '../../../components/list/List'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'
import { tasks } from '../../fixures/tasks'
import { addTask } from '../../../actions/task'

// RENDER
test('Should render List correctly with no items', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ "key": "123qwe" }]}>
            <Provider store={store}>
                <List />
            </Provider>
        </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
})

// SET ITEMS TO THE STORE
proyects.forEach(proyect => {
    store.dispatch(addProyect(proyect))
})

tasks.forEach(task => {
    store.dispatch(addTask(task))
})

// PROYECTS
test('Should render List correctly with proyects', () => {
    const isProyect = true

    const wrapper = mount(
        <MemoryRouter initialEntries={[{ "key": "123qwe" }]}>
            <DashboardContext.Provider value={{ isProyect }}>
                <Provider store={store}>
                    <List />
                </Provider>
            </DashboardContext.Provider>
        </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
})

test('Should set proyectId on proyect clicked', () => {
    const isProyect = true
    const id = proyects[0].id

    const wrapper = mount(
        <MemoryRouter initialEntries={[{ "key": "123qwe" }]}>
            <DashboardContext.Provider value={{ isProyect }}>
                <Provider store={store}>
                    <List />
                </Provider>
            </DashboardContext.Provider>
        </MemoryRouter>
    )

    wrapper.find(`.list__body ListItem#${id} Link`).simulate('click', {
        
    })

    expect(store.getState().ids.proyectId).toBe(id)
})

// TASKS
test('Should render List correctly with tasks', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ "key": "123qwe" }]}>
            <Provider store={store}>
                <List />
            </Provider>
        </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
})