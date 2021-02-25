import database from '../firebase'

// 1. Add task
const addTask = (task) => ({
    type: 'task/addTask',
    payload: task
})

const startAddTask = (taskData = {}) => {
    return (dispatch, getState) => {
        const {
            proyectId = '', 
            name = '', 
            description = '', 
            status = ''
        } = taskData
        const task = { proyectId, name, description, status }

        return database.ref('/tasks').push(task)
            .then(ref => {
                dispatch(addTask({
                    id: ref.key,
                    ...task
                }))
            })     
    }
}

// 2. Edit task
const editTask = (id, updates) => ({
    type: 'task/editTask',
    payload: {
        id,
        updates
    }
})

const startEditTask = (id, updates) => {
    return (dispatch, getState) => {

        return database.ref(`/tasks/${id}`).update(updates)
            .then(() => {
                dispatch(editTask(id, updates))
            })
    }
}

// 3. Remove task
const removeTask = (id) => ({
    type: 'task/removeTask',
    payload: id
})

const startRemoveTask = (id) => {
    return (dispatch, getState) => {

        return database.ref(`/tasks/${id}`).remove()
            .then(() => {
                dispatch(removeTask(id))
            })
    }
}

// 4. Set tasks
const setTasks = (tasks) => ({
    type: 'task/setTasks',
    payload: tasks
})

const startSetTasks = () => {
    return (dispatch, getState) => {

        return database.ref(`/tasks`).once('value')
            .then(dataSnapshot => {
                const tasks = []

                dataSnapshot.forEach(dataChildSnapshot => {
                    tasks.push({
                        id: dataChildSnapshot.key,
                        ...dataChildSnapshot.val()
                    })
                })

                dispatch(setTasks(tasks))
            })
    }
}

export { 
    addTask, 
    startAddTask,
    editTask, 
    startEditTask,
    removeTask,
    startRemoveTask,
    setTasks,
    startSetTasks
}