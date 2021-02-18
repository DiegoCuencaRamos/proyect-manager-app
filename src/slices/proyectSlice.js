const inicialState = []

const proyectReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'proyect/addProyect':

            return [
                ...state,
                { ...action.payload }
            ]
        case 'proyect/editProyect':

            return state.map((proyect) => {
                if (proyect.id !== action.payload.id) {
                    return proyect
                } else {
                    return {
                        ...proyect,
                        ...action.payload.updates
                    }
                }
            })
        case 'proyect/removeProyect':

            return state.filter((proyect) => proyect.id !== action.payload)
        default:
            return state
    } 
}

export default proyectReducer