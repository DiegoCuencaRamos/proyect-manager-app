import proyectReducer from '../../slices/proyectSlice'
import { proyects } from '../fixures/proyects'

// SET
test('Should set up default proyects state', () => {
    const state = proyectReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should set up initial proyects', () => {
    const action = {
        type: 'proyect/setProyects',
        payload: proyects
    }
    const state = proyectReducer([], action)
    expect(state).toEqual(proyects)
})

// ADD
test('Should add a proyect', () => {
    const proyect = {
        id: 'p4',
        name:'Proyect 4',
        description: 'This is my proyect fixure 4',
        status: 'done',
        invoice: '400',
    }
    const action = {
        type: 'proyect/addProyect',
        payload: proyect
    }
    const state = proyectReducer(proyects, action)
    expect(state).toEqual([...proyects, proyect])
})

// EDIT
test('Should edit a proyect', () => {
    const updates = { invoice: 10000000 }
    const action = {
        type: 'proyect/editProyect',
        payload: { 
            id: 'p1',
            updates
        }
    }
    const state = proyectReducer(proyects, action)
    expect(state).toEqual([{
        ...proyects[0],
        ...updates
    }, proyects[1], proyects[2]])
})

test('Should not edit a proyect if id not found', () => {
    const updates = { invoice: 10000000 }
    const action = {
        type: 'proyect/editProyect',
        payload: { 
            id: '',
            updates
        }
    }
    const state = proyectReducer(proyects, action)
    expect(state).toEqual(proyects)
})

// REMOVE
test('Should remove a proyect', () => {
    const action = {
        type: 'proyect/removeProyect',
        payload: 'p1'
    }
    const state = proyectReducer(proyects, action)
    expect(state).toEqual([proyects[1], proyects[2]])
})

test('Should not remove a proyect if id not found', () => {
    const action = {
        type: 'proyect/removeProyect',
        payload: ''
    }
    const state = proyectReducer(proyects, action)
    expect(state).toEqual(proyects)
})