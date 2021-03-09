import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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

    // Render
    return (
        <section className="login-layout">
            <div className="login-layout__box">
                <h1 className="login-layout__title">Proyect Manager</h1>
                <p>It is time to get control over your proyects.</p>
                <button
                    className="btn--google"
                    onClick={onGoogleLogin}
                >
                    <i>Icon</i>
                    Sign in with Google
                </button>
                <button
                    className="btn--facebook"
                    onClick={onFacebookLogin}
                >
                    <i>Icon</i>
                    Sign in with Facebook
                </button>
                <button
                    className="btn--twitter"
                    onClick={onTwitterLogin}
                >
                    <i>Icon</i>
                    Sign in with Twitter
                </button>
                <button
                    className="btn--github"
                    onClick={onGithubLogin}
                >
                    <i>Icon</i>
                    Sign in with Github
                </button>
                <Link
                    className="btn--emial"
                    to='/email-login'
                >
                    <i>Icon</i>
                    Sign in with Email
                </Link>
            </div>
        </section>
)}

export default LoginPage