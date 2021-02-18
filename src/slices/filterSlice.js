const inicialState = {
    search: '',
    sortBy: ''
}

const filterReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'filter/serachFilterChanged':
            return {
                ...state,
                search: action.payload
            }
        case 'filter/sortByFilterChanged':

            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}

export default filterReducer