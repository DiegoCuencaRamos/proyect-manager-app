import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import DashboardContext from '../../contexts/dashboard-context';
import KanbanItem from './KanbanItem'

const KanbanBoardBody = ({ status }) => {
    // Variables
    const isProyect = useContext(DashboardContext)
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])

    
    return (
        <div className="kanban__tbody">
            <Link key={uuidv4()} to={isProyect ? `/add-proyect` : `/add-task`} className="kanban__item">
                <p className="kanban__add-plus">+</p>
                <p className="kanban__add-text">{`Create new ${isProyect ? 'proyect' : 'task'} here`}</p>
            </Link>
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