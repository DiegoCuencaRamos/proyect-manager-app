const listReducer = (state, action) => {
    switch (action.type) {
        case 'list/setTextFilter':
            return {
                ...state,
                textFilter: action.payload
            }
        case 'list/setSortBy':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'list/setCurrentPage':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'list/setPageLimit':
            return {
                ...state,
                pageLimit: action.payload
            }
        default:
            return state
    }
}

export default listReducer

