import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import ProyectContextProvider from '../../../contexts/ProjectContext'
import KanbanBoard from '../../../components/kanban/KanbanBoard'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

const renderWithWrapper = () => mount(
    <MemoryRouter initialEntries={[{ key: 'static' }]}>
        <Provider store={store}>
            <ProyectContextProvider>
                <KanbanBoard />
            </ProyectContextProvider>
        </Provider>
    </MemoryRouter>
)

// Render
test('Should render KanbanBoard correctly with no items', () => {
    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

test('Should render KanbanBoard correctly with proyects', () => {
    // Add proyects to the KanbanBoard
    proyects.forEach(proyect => {
        store.dispatch(addProyect(proyect))
    })

    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

// Events
test('Should navigate to Add Proyect Page on add new item clicked', () => {
    const wrapper = renderWithWrapper()
    wrapper.find('.kanban__board--todo #kanbanNewItem Link').simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe('/add-proyect')
})

test('Should navigate to Proyect Page proyect clicked', () => {
    const id = proyects[0].id
    const wrapper = renderWithWrapper()
    wrapper.find(`KanbanItem#${id} Link`).simulate('click', { button: 0 })
    expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/proyect/${id}`)
})
