import { v4 as uuidv4 } from 'uuid';

const addProyect = ({ 
    name = '', 
    description = '', 
    status = '', 
    invoice = undefined
}) => ({
    type: 'proyect/addProyect',
    payload: {
        id: uuidv4(),
        name,
        description,
        status,
        invoice
    }
})

const editProyect = (id, updates) => ({
    type: 'proyect/editProyect',
    payload: {
        id,
        updates
    }
})

const removeProyect = (id) => ({
    type: 'proyect/removeProyect',
    payload: id
})

export { addProyect, editProyect, removeProyect }