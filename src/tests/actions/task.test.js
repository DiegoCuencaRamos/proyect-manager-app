import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import database from '../../firebase'
import { tasks } from '../fixures/tasks'
import { addTask, editTask, removeProyectTasks, removeTask, setTasks, startAddTask, startEditTask, startRemoveProyectTasks, startRemoveTask, startSetTasks } from "../../actions/task"

const uid = '123qwe'
// Minimal store necesary to be passed to the mockStore
const authState = { auth: { uid } }
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

beforeEach((done) => {
    const tasksData = {}
    tasks.forEach(({ id, proyectId, name, status, startDate, endDate, color, description }) => {
        tasksData[id] = {
            proyectId,
            name,
            status,
            startDate,
            endDate,
            color,
            description
        }
    })

    database.ref(`users/${uid}/tasks`).set(tasksData)
        .then(() => done())
})

afterEach((done) => {
    database.ref(`users/${uid}/tasks`).remove()
    done()
})

// ADD
test('Should set up addTask action object', () => {
    const action = addTask(tasks[0])
    expect(action).toEqual({
        type: 'task/addTask',
        payload: {
            ...tasks[0],
            id: expect.any(String)
        }
    })
})

test('Should add a task to database and store', (done) => {
    const store = mockStore(authState)
    const task = {
        proyectId: 'asd234',
        name: 'Any name',
        status: 'done',
        startDate: 0,
        endDate: 0,
        color: 'gray',
        description: 'Any description'
    }

    store.dispatch(startAddTask(task))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/addTask',
                payload: {
                    ...task,
                    id: expect.any(String)
                }
            })

            return database.ref(`users/${uid}/tasks/${actions[0].payload.id}`).once('value')
        }).then(dataSnapshot => {
            expect(dataSnapshot.val()).toEqual(task)
            done()
        })
}) 

test('Should set add task to database and store with default values', (done) => {
    const store = mockStore(authState)
    const task = {}
    const defaultTask = {
        proyectId: '', 
        name: '', 
        status: '',
        startDate: 0,
        endDate: 0,
        color: '',
        description: '',
    }

    store.dispatch(startAddTask(task))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/addTask',
                payload: {
                    ...defaultTask,
                    id: expect.any(String),
                }
            })

            return database.ref(`users/${uid}/tasks/${actions[0].payload.id}`).once('value')
        }).then(dataSnapshot => {
            expect(dataSnapshot.val()).toEqual(defaultTask)
            done()
        })
})

// EDIT
test('Should set up editTast action object', () => {
    const id = 't1'
    const updates = { name: 'Task 5000', description: 'That is a good task' }
    const action = editTask(id, updates)
    expect(action).toEqual({
        type: 'task/editTask',
        payload: {
            id,
            updates
        }
    })
})

test('Should edit task from database and store', (done) => {
    const store = mockStore(authState)
    const { proyectId, name, status, startDate, endDate, color, description } = tasks[0]
    const task = { proyectId, name, status, startDate, endDate, color, description } 
    const id = tasks[0].id
    const updates = {
        name: 'Edit task name',
        description: 'Edit task description',
    }
    store.dispatch(startEditTask(id, updates))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/editTask',
                payload: {
                    id,
                    updates,
                }
            })

            return database.ref(`users/${uid}/tasks/${id}`).once('value')
        }).then(dataSnapshot => {
            expect(dataSnapshot.val()).toEqual({
                ...task,
                ...updates,
            })
            done()
        })
})

// REMOVE TASK
test('Should set up removeTask action object', () => {
    const id = 't3'
    const action = removeTask(id)
    expect(action).toEqual({
        type: 'task/removeTask',
        payload: id
    })
})

test('should remove task from database and store', (done) => {
    const store = mockStore(authState)
    const id = tasks[1].id

    store.dispatch(startRemoveTask(id))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/removeTask',
                payload: id
            })

            return database.ref(`users/${uid}/tasks/${id}`).once('value')
        }).then(dataSnapshot => {
            expect(dataSnapshot.val()).toBeFalsy()
            done()
        })
})

// REMOVE PROYECT TASKS
test('Should set up removeProyectTasks action object', () => {
    const proyectId = 'p1'
    const action = removeProyectTasks(proyectId)
    expect(action).toEqual({
        type: 'task/removeProyectTasks',
        payload: proyectId
    })
})

test('Should remove all proyect tasks from database and store', (done) => {
    const store = mockStore(authState)
    const proyectId = 'p1'

    store.dispatch(startRemoveProyectTasks(proyectId))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/removeProyectTasks',
                payload: proyectId
            })

            return database.ref(`users/${uid}/tasks/`).once('value')
        }).then(dataSnapshot => {
            const tasksLeft = {}
            dataSnapshot.forEach(dataChildSnapshot => {
                if(dataChildSnapshot.proyectId !== proyectId) {
                    tasksLeft[dataChildSnapshot.key] = dataChildSnapshot.val()
                }
            })

            expect(dataSnapshot.val()).toEqual(tasksLeft)
            done()
        })
})

// SET
test('Should set up setTasks action object', () => {
    const action = setTasks(tasks)
    expect(action).toEqual({
        type: 'task/setTasks',
        payload: tasks
    })
})

test('Should fetch tasks from database to the store', (done) => {
    const store = mockStore(authState)
    store.dispatch(startSetTasks())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'task/setTasks',
                payload: tasks
            })
            
            done()
        })
})