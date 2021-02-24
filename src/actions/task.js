import { v4 as uuidv4 } from 'uuid';


const addTask = ({ 
    proyectId = '', 
    name = '', 
    description = '', 
    status = '' 
}) => ({
    type: 'task/addTask',
    payload: {
        id: uuidv4(),
        proyectId,
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