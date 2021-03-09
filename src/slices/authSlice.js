const inicialState = {}

const authReducer = (state= inicialState, action) => {
    switch (action.type) {
        case 'auth/login':
            const uid = action.payload
            return { uid }
        case 'auth/logout':
            return { }
        default:
            return state
    }
}

export default authReducer