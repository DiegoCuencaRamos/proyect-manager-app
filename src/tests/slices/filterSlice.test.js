import filterReducer from "../../slices/filterSlice"

test('Should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        searchText: '',
        sortBy: '',
    })
})

test('Should set searchText filter', () => {
    const searchText = 'text'
    const action = {
        type: 'filter/serachFilterChanged',
        payload: searchText
    }
    const state = filterReducer(undefined, action)
    expect(state).toEqual({
        searchText,
        sortBy: '',
    })
})

test('Should set sortBy filter', () => {
    const sortBy = 'name'
    const action = {
        type: 'filter/sortByFilterChanged',
        payload: sortBy
    }
    const state = filterReducer(undefined, action)
    expect(state).toEqual({
        searchText: '',
        sortBy,
    })
})




