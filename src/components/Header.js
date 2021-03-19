import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = () => {
    // Variables
    const dispatch = useDispatch()

    // Events
    const onLogoutClicked = () => {
        dispatch(startLogout())
    }
    
    // Render
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link to={'/dashboard'}>
                        <span className="header__title">Proyect Manager</span>
                    </Link>
                    <button
                        className="button--link"
                        onClick={onLogoutClicked}
                    >Logout</button>
                </div>
            </div>
        </header>
)}

export default Header