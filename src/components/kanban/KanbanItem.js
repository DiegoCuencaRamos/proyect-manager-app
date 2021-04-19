import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProjectContext } from '../../contexts/ProjectContext'

const KanbanItem = ({ id, name, description, invoice = undefined }) => {
    // 1. Variables
    const isProyect = useContext(ProjectContext)
    const itemDescription = description.length <= 55 ? description : description.slice(0, 55) + '...'

    // 3. Render
    return (
        <div className="kanban_item">
            <Link 
                to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                className="kanban__item"
                data-id={id}
            >
                <p className="kanban__item__title">{name}</p>
                <p className="kanban__item__description">{itemDescription}</p>
                {isProyect && <p className="kanban__item__invoice">{invoice}</p>}
            </Link>
        </div>
    )
}

export default KanbanItem