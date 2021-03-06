const inicialState = []

const proyectsReducer = (state = inicialState, action) => {
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
        
        case 'proyect/setProyects':
            return action.payload

        default:
            return state
    } 
}

export default proyectsReducer