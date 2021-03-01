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
            <div className="container">
                {
                    statuses.map((status, index) => (
                        <div 
                            key={index}
                            className={`kanban__board--${status}`}
                        >
                            <div className="kanban__thead">
                                <h3>{status}</h3>
                            </div>
                            <div className="kanban__tbody">
                                <Link 
                                    key={index}
                                    to={isProyect ? `/add-proyect` : `/add-task`}
                                    className="kanban__item"
                                >
                                    <p className="kanban__add-plus">+</p>
                                    <p className="kanban__add-text">{`Create new ${isProyect ? 'proyect' : 'task'} here`}</p>
                                </Link>

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
                                                    <p className="kanban__item__title">{name}</p>
                                                    <p className="kanban__item__description">{description}</p>
                                                    <p className="kanban__item__invoice">{invoice}</p>
                                                </Link>
                                            ))
                                    }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        
    )
}

export default KanbanBoard