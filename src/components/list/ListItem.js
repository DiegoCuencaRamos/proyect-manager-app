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
    const onItemClicked = isProyect 
        ?  (
            (e) => {
                const id = e.target.dataset.id
                dispatch(setProyectId(id))
            }
        ) : (
            undefined
        )

    const onChangeDropdownVisibility = (e) => {
        const dropdownContent = e.target.nextSibling
        dropdownContent.classList.toggle('visible')
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

    // Render
    return (
        <div key={id} className="list__body-item">
            
            <Link 
                className="list__name"
                to={isProyect ? `/proyect/${id}` : `/task/${id}`}
                data-id={id}
                onClick={onItemClicked}
            >
                {name}
            </Link>

            { isProyect && <p className={`list__status list__status--${status}`}>{status}</p> }

            { isProyect && <p className="list__invoice">{invoice}</p> }

            <div className="list__dropdown">

                <div 
                    className="list__dropdown-button" 
                    onMouseEnter={onChangeDropdownVisibility}
                    /*onMouseLeave={onChangeDropdownVisibility}*/
                >
                    <i className="fas fa-sliders-h"></i>
                    <i className="fas fa-sort-down"></i>
                </div>    

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