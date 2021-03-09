import { auth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "../firebase"

// LOGIN
const login = (uid) => ({
    type: 'auth/login',
    payload: uid
})

// Login-middleware
const startGoogleLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(GoogleAuthProvider)
            .catch(e => console.log(e.message))
    }
}

const startFacebookLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(FacebookAuthProvider)
            .catch(e => console.log(e.message))
    }
}

const startTwitterLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(TwitterAuthProvider)
            .catch(e => console.log(e.message))
    }
}

const startGithubLogin = () => {
    return (dispatch, getState) => {
        return auth.signInWithRedirect(GithubAuthProvider)
            .catch(e => console.log(e.message))
    }
}

const startEmailLogin = (email, password, setErrorMessage) => {
    return (dispath, getState) => {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(e => {
                console.log(e.message)
                if(e.message === 'The password is invalid or the user does not have a password.') {
                    setErrorMessage('he password is invalid')
                } else {
                    setErrorMessage(e.message)
                }  
            })
    }
}

const startEmailSignUp = (email, password, setErrorMessage) => {
    return (dispatch, getState) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .catch(e => {
                console.log(e.message)
                setErrorMessage(e.message)
            })
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
    startEmailLogin,
    startEmailSignUp,
    logout,
    startLogout
}