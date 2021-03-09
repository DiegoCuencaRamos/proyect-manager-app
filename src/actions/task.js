import database from '../firebase'

// 1. Add task
const addTask = (task) => ({
    type: 'task/addTask',
    payload: task
})

const startAddTask = (taskData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            proyectId = '', 
            name = '', 
            description = '', 
            status = ''
        } = taskData
        const task = { proyectId, name, description, status }

        return database.ref(`/users/${uid}/tasks`).push(task)
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
        const uid = getState().auth.uid

        return database.ref(`/users/${uid}/tasks/${id}`).update(updates)
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
        const uid = getState().auth.uid

        return database.ref(`/users/${uid}/tasks/${id}`).remove()
            .then(() => {
                dispatch(removeTask(id))
            })
    }
}

// 4. Remove all proyect tasks
const removeProyectTasks = (proyectId) => ({
    type: 'task/removeProyectTasks',
    payload: proyectId
})

const startRemoveProyectTasks = (proyectId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return database.ref(`/users/${uid}/tasks`).once('value')
            .then(dataSnapshot => {
                dataSnapshot.forEach(childDataSnapshot => {
                    const data = childDataSnapshot.val()

                    if(proyectId === data.proyectId) {
                        childDataSnapshot.ref.remove()
                    }
                })

                dispatch(removeProyectTasks(proyectId))
            }) 
    }
} 

// 5. Set tasks
const setTasks = (tasks) => ({
    type: 'task/setTasks',
    payload: tasks
})

const startSetTasks = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return database.ref(`/users/${uid}/tasks`).once('value')
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
    removeProyectTasks,
    startRemoveProyectTasks,
    setTasks,
    startSetTasks
}