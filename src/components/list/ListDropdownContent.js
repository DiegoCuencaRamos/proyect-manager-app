import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ProjectContext } from '../../contexts/ProjectContext'
import { startRemoveProyect } from '../../actions/proyect'
import { startRemoveProyectTasks, startRemoveTask } from '../../actions/task'

const ListDropdownContent = ({ open, id, onListClicked }) => {
    // 1. Variables
    const isProyect = useContext(ProjectContext)
    const history = useHistory()
    const dispatch = useDispatch()


    // 2. Events
    const onEditButtonClicked = e => {
        onListClicked()

        const id = e.target.dataset.id
        history.push(isProyect ? `/edit-proyect/${id}` : `/edit-task/${id}`)
    }

    const onRemoveButtonClicked = e => {
        onListClicked()

        const id = e.target.dataset.id
        
        if(isProyect) {
            dispatch(startRemoveProyect(id))
            dispatch(startRemoveProyectTasks(id))
        } else {
            dispatch(startRemoveTask(id))
        }
    }
    
    // 3. Render
    return (
        open && <div className="list__dropdown-content" >
            <ul>
                <li 
                    className="editBtn"
                    data-id={id} 
                    onClick={onEditButtonClicked}
                >
                    Edit
                </li>

                <li 
                    className="removeBtn"
                    data-id={id}
                    onClick={onRemoveButtonClicked}
                >
                    Remove
                </li>
            </ul>
        </div>
)}

export default ListDropdownContent