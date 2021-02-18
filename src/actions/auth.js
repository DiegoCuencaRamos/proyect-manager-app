const login = (uid) => ({
    type: 'auth/login',
    payload: uid
})

const logout = () => ({
    type: 'auth/logout'
})

export { login, logout }