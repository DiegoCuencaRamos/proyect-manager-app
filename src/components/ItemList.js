import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import getVisibleProyects from '../selectors/proyects'
import getVisibleTasks from '../selectors/tasks'
import { startRemoveProyect } from '../actions/proyect'
import { startRemoveTask } from '../actions/task'
import { setProyectId } from '../actions/id'



const IemList = ({ isProyect }) => {
    // Variavles
    const dispatch = useDispatch()
    const history = useHistory()

    const items = useSelector(state => state[ isProyect ? 'proyects' : 'tasks' ]) 
    const filters = useSelector(state => state.filters)
    const proyectId = isProyect ? undefined : useSelector(state => state.ids.proyectId)
    const filteredItems = isProyect ? getVisibleProyects(items, filters) : getVisibleTasks(proyectId, items, filters)
    
    // Events
    const onEditButtonClicked = (e) => {
        const id = e.target.dataset.id
        history.push(isProyect ? `/edit-proyect/${id}` : `/edit-task/${id}`)
    }

    const onRemoveButtonClicked = (e) => {
        const id = e.target.dataset.id
        dispatch(isProyect ? startRemoveProyect(id) : startRemoveTask(id))
    }

    const onItemClicked = isProyect 
        ?  (
            (e) => {
                const id = e.target.dataset.id
                dispatch(setProyectId(id))
            }
        ) : (
            undefined
        )
    
    // Rendering
    return (
        <div className="list">
            <div className="list__table">

                <div className="list__thead">
                    {isProyect && <p>Logo</p>}
                    <p>Name</p>
                    <p>Status</p>
                    <p>Invoice</p>
                </div>
                
                <div className="list_tbody">
                    {
                        filteredItems
                            .map(({ id, name, description, status, invoice = undefined }) => (
                                <div 
                                    key={id} 
                                    className="list__item"
                                >
                                    <Link 
                                        to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                                        data-id={id}
                                        onClick={onItemClicked}>{name}</Link>
                                    <p>{description}</p>
                                    <p>{status}</p>
                                    {isProyect && <p>{invoice}</p>}
                                    <button 
                                        data-id={id} 
                                        onClick={onEditButtonClicked}
                                    >Edit</button>
                                    <button 
                                        data-id={id}
                                        onClick={onRemoveButtonClicked}>Remove</button>
                                </div>
                            ))
                    }
                </div>
            
            </div>
        </div>
    )
}

export default IemList