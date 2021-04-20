import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import ProyectContextProvider from '../../../contexts/ProjectContext'
import ListContextProvider from '../../../contexts/ListContext'
import List from '../../../components/list/List'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

const renderWithWrapper = () => mount(
    <MemoryRouter initialEntries={[{ key: 'static' }]}>
        <ProyectContextProvider>
            <ListContextProvider>
                <Provider store={store}>
                    <List />
                </Provider>
            </ListContextProvider>
        </ProyectContextProvider>
    </MemoryRouter>
)

// Rendering
test('Should render List correctly with no items', () => {
    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

test('Should render List correctly with proyects', () => {
    // Set proyects to the store
    proyects.forEach(proyect => {
        store.dispatch(addProyect(proyect))
    })

    const wrapper = renderWithWrapper()
    expect(wrapper).toMatchSnapshot()
})

// Events
describe('Should handle Project List events:', () => {

    const id = proyects[0].id
    let wrapper 
    
    beforeEach(() => {
        wrapper = renderWithWrapper()
    })
    
    test('Should navigate to Proyect Page on proyect clicked', () => {    
        wrapper.find(`.list__body ListItem#${id} Link`).simulate('click', { button: 0 })
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/proyect/${id}`)
    })
    
    test('Should navigate to Edit Proyect Page on edit button clicked', () => {
        // Simulate dropdown-button clicked  
        wrapper.find(`.list__body ListItem#${id} .list__dropdown-button`).simulate('click')
        // Simulate edit button clicked  
        wrapper.find(`.list__body ListItem#${id} .editBtn`).simulate('click', {
            target: {
                dataset: { id }
            }
        })
        
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/edit-proyect/${id}`)
    })
})
