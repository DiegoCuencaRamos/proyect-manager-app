import React from 'react'
import { mount, render } from 'enzyme'

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import database from '../../firebase'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import store from '../../store'
import proyectReducer from '../../slices/proyectSlice'
import AddProyectPage from '../../components/AddProyectPage'
import { proyects } from '../fixures/proyects'
import { MemoryRouter } from 'react-router'

const uid = '123qwe'
// Minimal store necesary to be passed to the mockStore
const authState = { auth: { uid } }
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore(authState)
// const mockStore = createStore(proyectReducer)
const getWrapper = () => mount(
    <MemoryRouter>
        <Provider store={store}>
            <AddProyectPage />
        </Provider>
    </MemoryRouter>
    
)

test('Should render AddProyectPage correctly', () => {
    const wrapper = render(
        <MemoryRouter>
            <Provider store={store}>
                <AddProyectPage />
            </Provider>
        </MemoryRouter>
        
    )
    expect(wrapper).toMatchSnapshot()
})

// NOTAS:
// Funciona a mendias: puebo comprobar cambios en database, pero no en la store
// Para comprobar cambios en database necesito moqueal la store, para darle un uid.
// Si mokeo la store con redux-mock-store no puedo comprobar cambios en esta, ya que el estado no varia.
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

// Falta por comprobar la parte del history