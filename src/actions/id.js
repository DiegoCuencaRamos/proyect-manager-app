const setProyectId = id => ({
    type: 'id/setProyectId',
    payload: id
})

const setTaskId = id => ({
    type: 'id/setTaskId',
    payload: id
})

export { setProyectId, setTaskId }