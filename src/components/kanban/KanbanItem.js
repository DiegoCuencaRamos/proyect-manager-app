import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProyectId } from '../../actions/id'
import { ProjectContext } from '../../contexts/ProjectContext'

const KanbanItem = ({ id, name, description, invoice = undefined }) => {
    // Variables
    const dispatch = useDispatch()
    const isProyect = useContext(ProjectContext)
    const itemDescription = description.length <= 55 ? description : description.slice(0, 55) + '...'

    // Events
    let onItemClicked
    if (isProyect) {
        onItemClicked = (e) => {
            const id = e.target.dataset.id
            dispatch(setProyectId(id))
        }
    }

    // Render
    return (
        <div className="kanban_item">
            <Link 
                to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                className="kanban__item"
                data-id={id}
                onClick={onItemClicked}
            >
                <p className="kanban__item__title">{name}</p>
                <p className="kanban__item__description">{itemDescription}</p>
                {isProyect && <p className="kanban__item__invoice">{invoice}</p>}
            </Link>
        </div>
    )
}

export default KanbanItem