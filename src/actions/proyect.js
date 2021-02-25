import database from '../firebase'

// 1. Add proyect
const addProyect = (proyect) => ({
    type: 'proyect/addProyect',
    payload: proyect
})

const startAddProyect = (proyectData = {}) => {
    return (dispatch, getState) => {
        const {
            name = '', 
            description = '', 
            status = '', 
            invoice = undefined
        } = proyectData
        const proyect = { name, description, status, invoice }

        return database.ref('/proyects').push(proyect)
            .then(ref => {
                dispatch(addProyect({
                    id: ref.key,
                    ...proyect
                }))
            })
    }
}

// 2. Edit proyect
const editProyect = (id, updates) => ({
    type: 'proyect/editProyect',
    payload: {
        id,
        updates
    }
})

const startEditProyect = (id, updates) => {
    return (dispatch, getState) => {

        return database.ref(`/proyects/${id}`).update(updates)
            .then(() => {
                dispatch(editProyect(id, updates))
            })
    }
}

// 3. Remove proyect
const removeProyect = (id) => ({
    type: 'proyect/removeProyect',
    payload: id
})

const startRemoveProyect = (id) => {
    return (dispatch, getState) => {

        return database.ref(`/proyects/${id}`).remove()
            .then(() => {
                dispatch(removeProyect(id))
            })
    }
}

// 4. Set proyect
const setProyects = (proyects) => ({
    type: 'proyect/setProyects',
    payload: proyects
})

const startSetProyects = () => {
    return (dispatch, getState) => {

        return database.ref(`/proyects`).once('value')
            .then(dataSnapshot => {
                const proyects = []

                dataSnapshot.forEach(childDataSnapshot => {
                    proyects.push({
                        id: childDataSnapshot.key,
                        ...childDataSnapshot.val() 
                    })
                })

                dispatch(setProyects(proyects))
            })
    }
}

export { 
    addProyect,
    startAddProyect, 
    editProyect, 
    startEditProyect, 
    removeProyect, 
    startRemoveProyect, 
    setProyects, 
    startSetProyects 
}