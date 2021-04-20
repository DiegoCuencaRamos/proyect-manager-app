import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startEmailLogin, startEmailSignUp } from '../actions/auth'

const LoginEmailPage = () => {
    // 1. State
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
    // 2. Variables
    const dispatch = useDispatch()
    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    // 3. vents
    const onEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onPasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const onEmailLogin = (e) => {
        e.preventDefault()
        dispatch(startEmailLogin(email, password, setErrorMessage))
    }

    const onEmailSingUp = (e) => {
        e.preventDefault()
        setErrorMessage('')
        const emailValid = emailIsValid(email)
        
        if (emailValid && password) {
            dispatch(startEmailSignUp(email, password, setErrorMessage))
        } else {
            setErrorMessage('Please provid a valid email and password')
        }
    }

    // 4. Render
    return (
        <section className="email-login-page">
            <div className="container">
                <h1 className="email-login-page__title">Login with your email</h1>
                <h5>Please provide email and password</h5>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form className="email-form__wrapper">
                    <input
                        id="txtEmail" 
                        className="form__item--emial"
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={onEmailChange}
                    />
                    <input 
                        id="txtPassword"
                        className="form__item--password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={onPasswordChange}
                    />
                    <div className="form__buttom-wrpper">
                        <button 
                            id={'emailLoginBtn'}
                            className="button"
                            onClick={onEmailLogin}
                        >Login</button>
                        <button 
                            id={'emailSignUpBtn'}
                            className="button--remove"
                            onClick={onEmailSingUp}
                        >Sign Up</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginEmailPage