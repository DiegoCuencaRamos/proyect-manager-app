import { auth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "../firebaseSDK"

// LOGIN
const login = (uid) => ({
    type: 'auth/login',
    payload: uid
})

// Login-middleware
const startGoogleLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(GoogleAuthProvider)
    }
}

const startFacebookLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(FacebookAuthProvider)
    }
}

const startTwitterLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(TwitterAuthProvider)
    }
}

const startGithubLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(GithubAuthProvider)
    }
}

// LOGOUT
const logout = () => ({
    type: 'auth/logout'
})

const startLogout = () => {
    return (dipatch, getState) => {
        return auth.signOut()
    }
}

export {
    login,
    startGoogleLogin,
    startFacebookLogin,
    startTwitterLogin,
    startGithubLogin,
    logout,
    startLogout
}