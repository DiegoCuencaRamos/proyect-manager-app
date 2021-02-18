const searchFilterChanged = (text) => ({
    type: 'filter/serachFilterChanged',
    payload: text
})

const sortByFilterChanged = (sortBy) => ({
    type: 'filter/sortByFilterChanged',
    payload: sortBy
})

export { searchFilterChanged, sortByFilterChanged }