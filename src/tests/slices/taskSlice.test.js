import taskReducer from '../../reducers/tasks'
import { tasks } from '../fixures/tasks'

//SET
test('Should set up default tasks state', () => {
    const state = taskReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should set inicial tasks', () => {
    const action = {
        type: 'task/setTasks',
        payload: tasks
    }
    const state = taskReducer([], action)
    expect(state).toEqual(tasks)
})

// ADD
test('Should add a task', () => {
    const task = {
        id: 't4',
        proyectId: 'p1',
        name: 'Task 4',
        description: 'This is my task fixure 4',
        status:"todo"
    }
    const action = {
        type: 'task/addTask',
        payload: task
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual([...tasks, task])
})

// EDIT
test('Should edit a task', () => {
    const updates = { status: 'done' }
    const action = {
        type: 'task/editTask',
        payload: { 
            id: 't1',
            updates
        }
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual([{
        ...tasks[0],
        ...updates
    }, tasks[1], tasks[2]])
})

test('Should not edit a task if id not found', () => {
    const updates = { status: 'done' }
    const action = {
        type: 'task/editTask',
        payload: { 
            id: '',
            updates
        }
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual(tasks)
})

// REMOVE
test('Should remove a task', () => {
    const action = {
        type: 'task/removeTask',
        payload: 't1'
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual([tasks[1], tasks[2]])
})

test('Should not remove a task if id not found', () => {
    const action = {
        type: 'task/removeTask',
        payload: ''
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual(tasks)
})

test('Should remove all proyect tasks', () => {
    const proyectId = 'p1'
    const action = {
        type: 'task/removeProyectTasks',
        payload: proyectId,
    }
    const state = taskReducer(tasks, action)
    expect(state).toEqual([tasks[2]])
})