import React from 'react'
import { useDispatch } from 'react-redux'
import { 
    startGoogleLogin, 
    startFacebookLogin, 
    startTwitterLogin, 
    startGithubLogin 
} from '../actions/auth'

export const LoginPage = () => {
    // Variables
    const dispatch = useDispatch()

    // Events
    const onGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const onFacebookLogin = () => {
        dispatch(startFacebookLogin())
    }

    const onTwitterLogin = () => {
        dispatch(startTwitterLogin())
    }

    const onGithubLogin = () => {
        dispatch(startGithubLogin())
    }

    return (
        <section className="login-layout">
            <div className="login-layout__box">
                <h1 className="login-layout__title">My blog</h1>
                <p>Lets write something awesome</p>
                <button
                    className="button"
                    onClick={onGoogleLogin}
                >
                    Login with Google
                </button>
                <button
                    className="button"
                    onClick={onFacebookLogin}
                >
                    Login with Facebook
                </button>
                <button
                    className="button"
                    onClick={onTwitterLogin}
                >
                    Login with Twitter
                </button>
                <button
                    className="button"
                    onClick={onGithubLogin}
                >
                    Login with Github
                </button>

            </div>
        </section>
)}

export default LoginPage