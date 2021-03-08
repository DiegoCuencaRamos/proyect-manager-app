const searchFilterChanged = (searchText = '') => ({
    type: 'filter/serachFilterChanged',
    payload: searchText
})

const sortByFilterChanged = (sortBy) => ({
    type: 'filter/sortByFilterChanged',
    payload: sortBy
})

export { searchFilterChanged, sortByFilterChanged }