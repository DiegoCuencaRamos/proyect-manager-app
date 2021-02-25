import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = () => {
    const dispatch = useDispatch()

    return (
        <section className="box-layout">
            <div className="">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">My blog</h1>
                    <p>Lets write something awesome</p>
                    <button
                        className="button"
                        onClick={() => dispatch(startLogin())}
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        </section>
)}

export default LoginPage