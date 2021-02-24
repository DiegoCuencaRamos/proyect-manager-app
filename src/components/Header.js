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

    /*<div>
        <NavLink to={'/proyects'} activeClassName="selected">ProyectDashboard</NavLink>
        <NavLink to={'/proyects/add'} activeClassName="selected">ProyectAdd</NavLink>
        <NavLink to={'/proyects/edit'} activeClassName="selected">ProyectEdit</NavLink>
        <br />
        <br />
        <NavLink to={'/tasks'} activeClassName="selected">TaskDashboard</NavLink>
        <NavLink to={'/tasks/add'} activeClassName="selected">TaskAdd</NavLink>
        <NavLink to={'/tasks/edit'} activeClassName="selected">TaskEdit</NavLink>
        <NavLink to={'/tasks/read'} activeClassName="selected">TaskRead</NavLink>
    </div>*/
)

export default Header