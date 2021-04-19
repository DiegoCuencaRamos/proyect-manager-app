import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { startEditProyect } from '../actions/proyect'
import Title from './Title'
import ItemForm from './Form'

const EditProyectPage = () => {
    // 1. Variables
    const dispatch = useDispatch()
    const history = useHistory()
    // 2. Project data
    const proyects = useSelector(state => state.proyects)
    const { proyectId } = useParams()
    const proyect = proyects.find(proyect => proyect.id === proyectId)

    // 3. Events
    const onParentFormSubmit = (updates) => {
        dispatch(startEditProyect(proyectId, updates))
        history.push('/dashboard')
    }

    // 4. Render
    return (
        <Fragment>
            <Title
                title={'Edit proyect'}
                description={'Edit your current proyect'}
            />

            <ItemForm 
                item={proyect}
                isProyect={true}
                onParentFormSubmit={onParentFormSubmit}
            />
        </Fragment>
    )
}


export default EditProyectPage