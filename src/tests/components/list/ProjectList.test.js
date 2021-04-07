import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../../store'
import DashboardContext from '../../../contexts/dashboard-context'
import List from '../../../components/list/List'
import { proyects } from '../../fixures/proyects'
import { addProyect } from '../../../actions/proyect'

const renderWithWrapper = () => mount(
    <MemoryRouter initialEntries={[{ key: 'static' }]}>
        <DashboardContext.Provider value={{ isProyect: true }}>
            <Provider store={store}>
                <List />
            </Provider>
        </DashboardContext.Provider>
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

    test('Should set proyectId on proyect clicked', () => {
        wrapper.find(`.list__body ListItem#${id} Link`).simulate('click')
        expect(store.getState().ids.proyectId).toBe(id)
    })
    
    test('Should navigate to Proyect Page on proyect clicked', () => {    
        wrapper.find(`.list__body ListItem#${id} Link`).simulate('click', { button: 0 })
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/proyect/${id}`)
    })
    
    test('Should navigate to Edit Proyect Page on edit button clicked', () => {    
        wrapper.find(`.list__body ListItem#${id} .editBtn`).simulate('click', {
            target: {
                dataset: { id }
            }
        })
        expect(wrapper.find('Router').prop('history').location.pathname).toBe(`/edit-proyect/${id}`)
    })
})
