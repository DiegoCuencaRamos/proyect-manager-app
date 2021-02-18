const addTask = ({ id, name, description, status }) => ({
    type: 'task/addTask',
    payload: {
        id,
        name,
        description,
        status
    }
})

const editTask = (id, updates) => ({
    type: 'task/editTask',
    payload: {
        id,
        updates
    }
})

const removeTask = (id) => ({
    type: 'task/removeTask',
    payload: id
})

export { addTask, editTask, removeTask }