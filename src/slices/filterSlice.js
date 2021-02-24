const inicialState = {
    searchText: '',
    sortBy: '',
    visualizeMode: ''
}

const filterReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'filter/serachFilterChanged':
            return {
                ...state,
                searchText: action.payload
            }
        case 'filter/sortByFilterChanged':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'filter/visualizeModeFilterChanged':
            return {
                ...state,
                visualizeMode: action.payload
            }
        default:
            return state
    }
}

export default filterReducer