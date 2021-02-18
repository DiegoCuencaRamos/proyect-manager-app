const addProyect = ({ id, title, description, status, invoiced }) => ({
    type: 'proyect/addProyect',
    payload: {
        id,
        title,
        description,
        status,
        invoiced
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