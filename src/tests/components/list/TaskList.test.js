import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import ListContextProvider from '../../../contexts/ListContext'
import { Provider } from 'react-redux'
import store from '../../../store'
import List from '../../../components/list/List'
import { tasks } from '../../fixures/tasks'
import { addTask } from '../../../actions/task'
import { setProyectId } from '../../../actions/id'


const renderWithWrapper = () => mount(
    <MemoryRouter initialEntries={[{ key: 'static' }]}>
        <ListContextProvider>
            <Provider store={store}>
                <List />
            </Provider>
        </ListContextProvider>
    </MemoryRouter>
)


// Rendering
test('Should render List correctly with no items', () => {
    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

test('Should render List correctly with tasks', () => {
    const proyectId = tasks[0].proyectId
    // Set tasks to the store
    tasks.forEach(task => {
        store.dispatch(addTask(task))
    })
    // Set proyectId to the store
    store.dispatch(setProyectId(proyectId))

    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

// Events
describe('Should handle Task List events:', () => {

    const id = tasks[0].id
    let wrapper

    beforeEach(() => {
        wrapper = renderWithWrapper()
    })
    
    test('Should navigate to Task Page on proyect clicked', () => {    
        wrapper.find(`.list__body ListItem#${id} Link`).simulate('click', { button: 0 })
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/task/${id}`)
    })
    
    test('Should navigate to Edit Task Page on edit button clicked', () => {   
        // Simulate dropdown-button clicked 
        wrapper.find(`.list__body ListItem#${id} .list__dropdown-button`).simulate('click')
        // Simulate edit button clicked 
        wrapper.find(`.list__body ListItem#${id} .editBtn`).simulate('click', {
            target: {
                dataset: { id }
            }
        })
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/edit-task/${id}`)
    })
})

