import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = () => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <Link to={'/'}>
                <span>Proyect Manager</span>
            </Link>
            <button 
                onClick={() => dispatch(startLogout())}
            >Logout</button>
            <br />
            <br />
            <hr />
        </div>
)}

export default Header