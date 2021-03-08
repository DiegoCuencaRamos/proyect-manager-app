import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../contexts/dashboard-context'

const Title = ({ title, description, isDashboard }) => {
    // Context
    const isProyect = useContext(DashboardContext)

    // Render
    return (
        <div className="page-header">
            <div className="container page-header__wrapper">
                <div>
                    <h1 className="page-header__title">{title}</h1>
                    <p className="page-header__text">{description}</p>
                </div>
                {
                    isDashboard && (
                        <Link 
                            to={isProyect ? '/add-proyect' : '/add-task'}
                            className="button"
                        >Add{isProyect ? 'Proyect' : 'Task'}</Link>
                    )  
                }
            </div>
        </div>
    )
}

export default Title