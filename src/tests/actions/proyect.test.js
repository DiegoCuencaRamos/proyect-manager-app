import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import database from '../../firebase'
import { proyects } from '../fixures/proyects'
import { addProyect, editProyect, removeProyect, setProyects, startAddProyect, startEditProyect, startRemoveProyect, startSetProyects } from '../../actions/proyect'

const uid = '123qwe'
// Minimal store necesary to be passed to the mockStore
const authState = { auth: { uid } }
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

beforeEach((done) => {
    const proyectData = {}
    proyects.forEach(({ id, name, status, invoice, startDate, endDate, color, description}) => {
        proyectData[id] = {
            name,
            status,
            invoice,
            startDate,
            endDate,
            color,
            description
        }
    })
    database.ref(`users/${uid}/proyects`).set(proyectData)
        .then(() => done())
})

afterEach((done) => {
    database.ref(`users/${uid}/proyects`).remove()
    done()
})

// ADD
test('Should setup addProyect action object', () => {
    const action = addProyect(proyects[0])
    expect(action).toEqual({
        type: 'proyect/addProyect',
        payload: {
            ...proyects[0],
            id: expect.any(String)
        }
    })
})

test('Should add proyect to test database and store', (done) => {
    const store = mockStore(authState)
    const proyect = {
        name:'Any proyect',
        status: 'todo',
        invoice: '123.45',
        startDate: 0,
        endDate: 1000,
        color: 'yellow',
        description: 'Any description',
    }

    store.dispatch(startAddProyect(proyect))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'proyect/addProyect',
                payload: {
                    ...proyect,
                    id: expect.any(String),
                }
            })

            return database.ref(`users/${uid}/proyects/${actions[0].payload.id}`).once('value')
        }).then((dataSnapshot) => {
            expect(dataSnapshot.val()).toEqual(proyect)
            done()
        })
})

test('Should add proyect to database and store with default values', (done) => {
    const store = mockStore(authState)
    const proyect = {}
    const defaultProyect = {
        name: '', 
        status: '', 
        invoice: 0,
        startDate: 0,
        endDate: 0,
        color: '',
        description: '',
    }

    store.dispatch(startAddProyect(proyect))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'proyect/addProyect',
                payload: {
                    ...defaultProyect,
                    id: expect.any(String),
                }
            })

            return database.ref(`users/${uid}/proyects/${actions[0].payload.id}`).once('value')
        }).then((dataSnapshot) => {
            expect(dataSnapshot.val()).toEqual(defaultProyect)
            done()
        })
})

// EDIT
test('Should setup editProyect action object', () => {
    const id = 'p1'
    const updates = { status: 'done', invoiced: 5000 }
    const action = editProyect(id, updates)
    expect(action).toEqual({
        type: 'proyect/editProyect',
        payload: {
            id,
            updates
        }
    })
})

test('Should edit proyect to database and store', (done) => {
    const store = mockStore(authState)
    const { name, status, invoice, startDate, endDate, color, description } = proyects[0]
    const proyect = { name, status, invoice, startDate, endDate, color, description }
    const id = proyects[0].id
    const updates = {
        name: 'Edited proyect',
        status: 'done',
        description: 'Edited proyect description'
    }

    store.dispatch(startEditProyect(id, updates))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'proyect/editProyect',
                payload: {
                    id,
                    updates
                }
            })

            return database.ref(`users/${uid}/proyects/${id}`).once('value')
        }).then((dataSnapshot) => {
            expect(dataSnapshot.val()).toEqual({
                ...proyect,
                ...updates
            })
            done()
        })
})

// REMOVE
test('Should setup removeProyect action object', () => {
    const id = 'p2'
    const action = removeProyect(id)
    expect(action).toEqual({
        type: 'proyect/removeProyect',
        payload: id
    })
})

test('Should remove proyect from databese and store', (done) => {
    const store = mockStore(authState)
    const id = proyects[1].id

    store.dispatch(startRemoveProyect(id))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'proyect/removeProyect',
                payload: id
            })

            return database.ref(`users/${uid}/proyects/${id}`).once('value')
        }).then(dataSnapshot => {
            expect(dataSnapshot.val()).toBeFalsy()
            done()
        })
})

// SET
test('Should setup setProyects action object', () => {
    const action = setProyects(proyects)
    expect(action).toEqual({
        type: 'proyect/setProyects',
        payload: proyects
    })
})

test('Should fetch proyects from database', (done) => {
    const store = mockStore(authState)

    store.dispatch(startSetProyects())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'proyect/setProyects',
                payload: proyects
            })
            done()
        }) 
})