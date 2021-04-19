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
    // 1. Dispatch
    const dispatch = useDispatch()

    // 2. Events
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

    // 3. Render
    return (
        <section className="login-layout">
            <div className="login-layout__box">
                <h1 className="login-layout__title">Proyect Manager</h1>
                <p>It is time to get control over your proyects.</p>
                <div
                    className="btn--google"
                    onClick={onGoogleLogin}
                >
                    <i className="fab fa-google"></i>
                    <span>Sign in with Google</span>
                </div>
                <div
                    className="btn--facebook"
                    onClick={onFacebookLogin}
                >
                    <i className="fab fa-facebook-f"></i>
                    <span>Sign in with Facebook</span>
                </div>
                <div
                    className="btn--twitter"
                    onClick={onTwitterLogin}
                >
                    <i className="fab fa-twitter"></i>
                    <span>Sign in with Twitter</span>
                </div>
                <div
                    className="btn--github"
                    onClick={onGithubLogin}
                >
                    <i className="fab fa-github"></i>
                    <span>Sign in with Github</span>
                </div>
                <Link
                    className="btn--emial"
                    to='/email-login'
                >
                    <i className="fas fa-envelope"></i>
                    <span>Sign in with Email</span>
                </Link>
            </div>
        </section>
)}

export default LoginPage