import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProyectId } from '../../actions/id'
import { ProjectContext } from '../../contexts/ProjectContext'
import ListDropdown from './ListDropdown'

const ListItem = ({ id, name, status, invoice = undefined }) => {
    // 1. Variables
    const isProyect = useContext(ProjectContext)
    const dispatch = useDispatch()

    // 2. Events
    const onItemClicked = isProyect 
        ?  (
            (e) => {
                const id = e.target.dataset.id
                dispatch(setProyectId(id))
            }
        ) : (
            undefined
        )

    // 3. Render
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

            <p className={`list__status list__status--${status}`}>{status}</p>

            { isProyect && <p className="list__invoice">{invoice}</p> }

            <ListDropdown id={id} />
        </div>
    )
}

export default ListItem