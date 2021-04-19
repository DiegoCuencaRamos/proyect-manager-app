import React, { useReducer } from 'react'
// Reducer
import listReducer from '../reducers/list'
// Actions
import {
    setTextFilter,
    setSortBy,
    setCurrentPage,
    setPageLimit
} from '../actions/list'

const ListContext = React.createContext()

const inicialState = {
    textFilter: '',
    sortBy: '',
    currentPage: 1,
    pageLimit: 5
}

const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, inicialState)
    
    // 1. Dispatchs functions
    const setTextFilterFunc = text => {
        dispatch(setTextFilter(text))
    }

    const setSortByFunc = sortBy => {
        dispatch(setSortBy(sortBy))
    }

    const setCurrentPageFunc = currentPage => {
        dispatch(setCurrentPage(currentPage))
    }

    const setPageLimitFunc = pageLimit => {
        dispatch(setPageLimit(pageLimit))
    }

    // 2. Value
    const value = {
        textFilter: state.textFilter,
        setTextFilter: setTextFilterFunc,
        sortBy: state.sortBy,
        setSortBy: setSortByFunc,
        currentPage: state.currentPage,
        setCurrentPage: setCurrentPageFunc,
        pageLimit: state.pageLimit,
        setPageLimit: setPageLimitFunc
    }

    // 3. Render
    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
}

export { ListContext, ListContextProvider as default }