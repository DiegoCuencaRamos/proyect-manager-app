import { firebase, provider } from "../firebase"

const login = (uid) => ({
    type: 'auth/login',
    payload: uid
})

const startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(provider)
    }
}

const logout = () => ({
    type: 'auth/logout'
})

const startLogout = () => {
    return (dipatch, getState) => {
        return firebase.auth().signOut()
    }
}

export {
    login,
    startLogin,
    logout,
    startLogout
}