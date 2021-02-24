import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProyectId } from '../actions/id'

const KanbanBoard = ({ isProyect }) => {
    // Variables
    const statuses =  ['todo', 'doing', 'done']
    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ])
    // Events
    let onItemClicked
    if (isProyect) {
        const dispatch = useDispatch()
        onItemClicked = (e) => {
            const id = e.target.dataset.id
            dispatch(setProyectId(id))
        }
    }
    // Rendering
    return (
        <section className="kanban">
            {
                statuses.map((status, index) => (
                    <div 
                        key={index}
                        className="kanban__board"
                    >
                        <div className="kanban__thead">
                            <h2>{status}</h2>
                        </div>
                        <div className="kanban__tbody">
                                {
                                    items
                                        .filter(item => item.status === status)
                                        .map(({ id, name, description, invoice = undefined }) => (
                                            <Link 
                                                key={id}
                                                to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                                                className="kanban__item"
                                                data-id={id}
                                                onClick={onItemClicked}
                                            >
                                                <p>{name}</p>
                                                <p>{description}</p>
                                                <p>{invoice}</p>
                                            </Link>
                                        ))
                                }
                        </div>
                    </div>
                ))
            }
        </section>
        
    )
}

export default KanbanBoard