import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import getVisibleProyects from '../selectors/proyects'
import getVisibleTasks from '../selectors/tasks'
import { startRemoveProyect } from '../actions/proyect'
import { startRemoveProyectTasks, startRemoveTask } from '../actions/task'
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
    const onChangeDropdownVisibility = (e) => {
        const dropdownContent = document.querySelector('.list__dropdown-content')
        dropdownContent.classList.toggle('list__dropdown-content--visible')
    }

    const onEditButtonClicked = (e) => {
        const id = e.target.dataset.id
        history.push(isProyect ? `/edit-proyect/${id}` : `/edit-task/${id}`)
    }

    const onRemoveButtonClicked = (e) => {
        const id = e.target.dataset.id
        
        if(isProyect) {
            dispatch(startRemoveProyect(id))
            dispatch(startRemoveProyectTasks(id))
        } else {
            dispatch(startRemoveTask(id))
        }
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
            <div className="container">
                <div className="list__table">
                    <div className="list__header">
                        <div className="list__header-item">
                            {isProyect && <p className="list__logo">Logo</p>}
                            <p className="list__name">Name</p>
                            <p className="list__status">Status</p>
                            <p className="list__invoice">Invoice</p>
                            <p className="list__dropdown">Options</p>
                        </div>   
                    </div>                    
                    <div className="list__body">
                        {
                            filteredItems
                                .map(({ id, name, description, status, invoice = undefined }) => (
                                    <div key={id} className="list__body-item">

                                        <p className="list__logo">Logo</p>

                                        <Link 
                                            className="list__name"
                                            to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                                            data-id={id}
                                            onClick={onItemClicked}
                                        >
                                            {name}
                                        </Link>

                                        <p className="list__status">{status}</p>

                                        {isProyect && 
                                            <p className="list__invoice">{invoice}</p>
                                        }

                                        <div 
                                            className="list__dropdown"
                                            onMouseEnter ={onChangeDropdownVisibility}
                                            onMouseLeave ={onChangeDropdownVisibility}
                                        >
                                            <button ><i>Icon</i></button>
                                            <div className="list__dropdown-content">
                                                <ul>
                                                    <li 
                                                        className=""
                                                        data-id={id} 
                                                        onClick={onEditButtonClicked}
                                                    >
                                                        Edit
                                                    </li>

                                                    <li 
                                                        className=""
                                                        data-id={id}
                                                        onClick={onRemoveButtonClicked}
                                                    >
                                                        Remove
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IemList