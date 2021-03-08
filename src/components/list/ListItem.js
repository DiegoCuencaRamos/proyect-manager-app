import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveProyect } from '../../actions/proyect'
import { startRemoveProyectTasks, startRemoveTask } from '../../actions/task'
import { setProyectId } from '../../actions/id'
import DashboardContext from '../../contexts/dashboard-context'

const ListItem = ({ id, name, status, invoice = undefined }) => {
    // Variavles
    const isProyect = useContext(DashboardContext)
    const dispatch = useDispatch()
    const history = useHistory()

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

    return (
        <div key={id} className="list__body-item">
            {isProyect && 
                <p className="list__logo">Logo</p>
            }

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
                onClick ={onChangeDropdownVisibility}
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
    )
}

export default ListItem