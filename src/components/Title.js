import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../contexts/ProjectContext'

const Title = ({ title, description, isDashboard }) => {
    // Variables
    const isProyect = useContext(ProjectContext)
    const proyectId = isProyect ? null : useParams().proyectId

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
                            to={isProyect ? '/add-proyect' : `/add-task/${proyectId}`}
                            className="button"
                        >Add{isProyect ? 'Proyect' : 'Task'}</Link>
                    )  
                }
            </div>
        </div>
    )
}

export default Title