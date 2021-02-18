const inicialState = []

const taskReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'task/addTask':
            
            return [
                ...state,
                { ...action.payload }
            ]
        case 'task/editTask':

            return state.map((task) => {
                if (task.id !== action.payload.id) {
                    return task
                } else {
                    return {
                        ...task,
                        ...action.payload.updates
                    }
                }
            })
        case 'task/removeTask':

            return state.filter((task) => task.id !== action.payload)
        default:
            return state
    }
}

export default taskReducer
