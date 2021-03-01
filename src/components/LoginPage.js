import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = () => {
    const dispatch = useDispatch()

    return (
        <section className="login-layout">
            <div className="login-layout__box">
                <h1 className="login-layout__title">My blog</h1>
                <p>Lets write something awesome</p>
                <button
                    className="button"
                    onClick={() => dispatch(startLogin())}
                >
                    Login with Google
                </button>
            </div>
        </section>
)}

export default LoginPage