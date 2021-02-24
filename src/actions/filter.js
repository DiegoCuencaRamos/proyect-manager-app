const searchFilterChanged = (searchText = '') => ({
    type: 'filter/serachFilterChanged',
    payload: searchText
})

const sortByFilterChanged = (sortBy) => ({
    type: 'filter/sortByFilterChanged',
    payload: sortBy
})

const visualizeModeFilterChanged = (visualizeMode = 'list') => ({
    type: 'filter/visualizeModeFilterChanged',
    payload: visualizeMode
})

export { searchFilterChanged, sortByFilterChanged, visualizeModeFilterChanged }