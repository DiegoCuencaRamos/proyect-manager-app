import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProyectId } from '../../actions/id'
import DashboardContext from '../../contexts/dashboard-context'

const KanbanItem = ({ id, name, description, invoice = undefined }) => {
    // Context
    const isProyect = useContext(DashboardContext)
    
    // Events
    let onItemClicked
    if (isProyect) {
        const dispatch = useDispatch()
        onItemClicked = (e) => {
            const id = e.target.dataset.id
            dispatch(setProyectId(id))
        }
    }

    // Render
    return (
        <Link 
            to={isProyect ? `/proyect/${id}` : `/task/${id}`}
            className="kanban__item"
            data-id={id}
            onClick={onItemClicked}
        >
            <p className="kanban__item__title">{name}</p>
            <p className="kanban__item__description">{description}</p>
            <p className="kanban__item__invoice">{invoice}</p>
        </Link>
    )
}

export default KanbanItem