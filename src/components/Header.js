import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = () => {
    const dispatch = useDispatch()
    
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link to={'/dashboard'}>
                        <span className="header__title">Proyect Manager</span>
                    </Link>
                    <button
                        className="button--link"
                        onClick={() => dispatch(startLogout())}
                    >Logout</button>
                </div>
            </div>
        </header>
)}

export default Header