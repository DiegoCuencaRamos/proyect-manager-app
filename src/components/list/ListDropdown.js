import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import DashboardContext from '../../contexts/ProjectContext'
import { startRemoveProyect } from '../../actions/proyect'
import { startRemoveProyectTasks, startRemoveTask } from '../../actions/task'

const ListDropdown = ({ id }) => {
    // 1. Variables
    const isProyect = useContext(DashboardContext)
    const history = useHistory()
    const node = useRef()
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return 
        }
        // Outside click
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

    // 3. Events
    const onButtonClicked = e => {
        console.log('working')
        setOpen(!open)
    }

    const onListClicked = (e) => {
        setOpen(false)
    }

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

    // 4. Render
    return (
        <div ref={node} className="list__dropdown">
            <div 
                className="list__dropdown-button" 
                onClick={onButtonClicked}                    
            >
                <i className="fas fa-sliders-h"></i>
                <i className="fas fa-sort-down"></i>
            </div>    

            {open && <div className="list__dropdown-content" >
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
            </div>}
        </div>
    )
}

export default ListDropdown

/*const handleDropdownVisibility = (e) => {
    if(node.current.contains(e.target)) {
        console.log('On Element')
        return
    } else {
        console.log('Off Element')
        // const dropdownContent = document.querySelector('list__dropdown-content')
        // if(dropdownContent.classList.contains('visible')) {
        //     dropdownContent.classList.remove('visible')
        // }
    }
}*/