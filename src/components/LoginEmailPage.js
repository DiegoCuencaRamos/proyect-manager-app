import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { startEmailLogin, startEmailSignUp } from '../actions/auth'

const LoginEmailPage = () => {
    // Variables
    const dispatch = useDispatch()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    // Events
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

    return (
        <Fragment>
            {errorMessage && <p className="error-massage">{errorMessage}</p>}
            <form>
                <input
                    id="txtEmail" 
                    type="text"
                    value={email}
                    onChange={onEmailChange}
                />
                <input 
                    id="txtPassword"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <button 
                    onClick={onEmailLogin}
                >Login</button>
                <button 
                    onClick={onEmailSingUp}
                >Sign Up</button>
            </form>
        </Fragment>
    )
}

export default LoginEmailPage