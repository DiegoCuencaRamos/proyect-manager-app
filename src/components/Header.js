import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Link to={'/'}>
            <span>Proyect Manager</span>
        </Link>
        <button>Logout</button>
        <br />
        <br />
        <hr />
    </div>
)

export default Header