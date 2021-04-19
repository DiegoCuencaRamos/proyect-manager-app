import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startAddProyect } from '../actions/proyect'
import Title from './Title'
import ItemForm from './Form'

const AddProyectPage = () => {
    // 1. Variables
    const dispatch = useDispatch()
    const history = useHistory()

    // 2. Events
    const onParentFormSubmit = (proyect) => {
        dispatch(startAddProyect(proyect))
        history.push('/dashboard')
    } 

    // 3. Render
    return (
        <Fragment>
            <Title
                title={'Add proyect'}
                description={'Add new proyects to your new proyect manager'}
            />
            <ItemForm 
                isProyect={true}
                onParentFormSubmit={onParentFormSubmit}
            />
        </Fragment>
    )
}

export default AddProyectPage