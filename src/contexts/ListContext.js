import React from 'react'
// Actions
import {
    setTextFilter,
    setSortBy,
    setCurrectPage,
    setPageLimit
} from '../actions/list'

const ListContext = React.createContext()

const ListContextProvider = ({ state, dispatch, children }) => {
    // 1. Dispatchs functions
    const setTextFilterFunc = text => {
        dispatch(setTextFilter(text))
    }

    const setSortByFunc = sortBy => {
        dispatch(setSortBy(sortBy))
    }

    const setCurrentPageFunc = currentPage => {
        dispatch(setCurrectPage(currentPage))
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
        setCurrectPage: setCurrentPageFunc,
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