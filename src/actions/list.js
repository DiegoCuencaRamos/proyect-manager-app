const setTextFilter = text => ({
    type: 'list/setTextFilter',
    payload: text
})

const setSortBy = sortBy => ({
    type: 'list/setSortBy',
    payload: sortBy
})

const setCurrentPage = currentPage => ({
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
    setCurrentPage,
    setPageLimit
}