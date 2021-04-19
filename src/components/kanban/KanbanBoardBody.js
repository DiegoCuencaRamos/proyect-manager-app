import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../../contexts/ProjectContext'
import KanbanItem from './KanbanItem'

const KanbanBoardBody = ({ status }) => {
    // 1. Variables
    const isProyect = useContext(ProjectContext)
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])
    const proyectId = isProyect ? null : useParams().proyectId

    // 2. Render
    return (
        <div className="kanban__tbody">
            <div id="kanbanNewItem" className="kanban_item">
                <Link to={isProyect ? `/add-proyect` : `/add-task/${proyectId}`} className="kanban__item">
                    <p className="kanban__add-plus">+</p>
                    <p className="kanban__add-text">{`Create new ${isProyect ? 'proyect' : 'task'} here`}</p>
                </Link>
            </div>
            {items
                .filter(item => item.status === status)
                .map((item) => (
                    <KanbanItem 
                        key={item.id} 
                        {...item} 
                    />
                ))
            }
        </div>
)}

export default KanbanBoardBody