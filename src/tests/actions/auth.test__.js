import { login, logout } from "../../actions/auth"

test('Should set up login action object', () => {
    const uid = '123qwdsxz'
    const action = login(uid)
    expect(action).toEqual({
        type: 'auth/login',
        payload: uid
    })
})

test('Should set up logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'auth/logout'
    })
})