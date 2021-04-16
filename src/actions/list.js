const setTextFilter = text => ({
    type: 'list/setTextFilter',
    payload: text
})

const setSortBy = sortBy => ({
    type: 'list/setSortBy',
    payload: sortBy
})

const setCurrectPage = currentPage => ({
    type: 'list/setCurrentPage',
    payload: currentPage
})

const setPageLimit = pageLimit => ({
    type: 'list/setPageLimit',
    payload: pageLimit
})

export {
    setTextFilter,
    setSortBy,
    setCurrectPage,
    setPageLimit
}