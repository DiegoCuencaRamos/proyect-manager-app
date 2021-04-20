import authReducer from "../../reducers/auth"

test('Should set up default auth values', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('Should set uid state for login', () => {
    const uid = '213asd'
    const action = {
        type: 'auth/login',
        payload: uid
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({ uid })
})

test('Should wipe out uid state for logout', () => {
    const action = { type: 'auth/logout' }
    const state = authReducer(undefined, action)
    expect(state).toEqual({})
})