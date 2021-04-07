import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from '../../store'
import AddProyectPage from '../../components/AddProyectPage'

test('Should render Add Task Page correctly', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <AddProyectPage />
            </Provider>
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
})

// Falta testear events: Redux - dispatchs / history.







/*import React from 'react'
import { mount } from 'enzyme'

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import database from '../../firebase'

import { Provider } from 'react-redux'
import AddProyectPage from '../../components/AddProyectPage'
import { proyects } from '../fixures/proyects'
import { MemoryRouter } from 'react-router'

const uid = '123qwe'
// Minimal store necesary to be passed to the mockStore
const authState = { auth: { uid } }
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore(authState)

let wrapper
beforeEach(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[{ key: 'static' }]}>
            <Provider store={store}>
                <AddProyectPage />
            </Provider>
        </MemoryRouter>
        
    )
})

test('Should render Add Proyect Page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

// NOTAS:
// Funciona a mendias: puedo comprobar cambios en database, pero no en la store
// para comprobar cambios en database necesito moquear la store, para darle un uid.
// Si mokeo la store con redux-mock-store no puedo comprobar cambios en esta, ya que el estado no varia.

// --- Aun así, no creo que el haya que checkar cambios en la DDBB o la store, sino la UI --> ¿cómo?

test('Should dispatch startAddProyect form submit', (done) => {
    const wrapper = getWrapper()
    const { name, status, invoice, startDate, endDate, color, description } = proyects[0]
    const proyect = { name, status, invoice, startDate, endDate, color, description }

    wrapper.find('ItemForm').prop('onParentFormSubmit')(proyect)

    database.ref(`users/${uid}/proyects/`).once('value')
        .then((dataSnapshot) => {

            dataSnapshot.forEach(dataChildSnapshot => {
                if(dataChildSnapshot.name === name) {
                    expect(dataChildSnapshot.val()).toEqual(proyect)
                }  
            })            
            done()
        })
    
})

// Falta por comprobar la parte del history*/