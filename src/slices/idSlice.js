const initialState = {
    proyectId: '',
    taskId: ''
}

const idSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'id/setProyectId':
            return {
                ...state,
                proyectId: action.payload
            }
            case 'id/setTaskId':
                return {
                    ...state,
                    taskId: action.payload
                }
        default:
            return state
    }
}

export default idSlice