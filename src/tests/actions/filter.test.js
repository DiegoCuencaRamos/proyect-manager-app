import { searchFilterChanged, sortByFilterChanged, visualizeModeFilterChanged } from "../../actions/filter"

test('Should set up searchFilterChanged action object', () => {
    const searchText = 'yooo! what´s up'
    const action = searchFilterChanged(searchText)
    expect(action).toEqual({
        type: 'filter/serachFilterChanged',
        payload: searchText
    })
})

test('Should set up searchFilterChanged action object with defaults', () => {
    const action = searchFilterChanged()
    expect(action).toEqual({
        type: 'filter/serachFilterChanged',
        payload: ''
    })
})

test('Should set up sortByFilterChanged action object', () => {
    const sortBy = 'title'
    const action = sortByFilterChanged(sortBy)
    expect(action).toEqual({
        type: 'filter/sortByFilterChanged',
        payload: sortBy
    })
})