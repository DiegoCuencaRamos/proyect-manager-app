import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startAddProyect } from '../actions/proyect'
import Title from './Title'
import ItemForm from './Form'

const AddProyectPage = () => {
    // Variables
    const dispatch = useDispatch()
    const history = useHistory()

    // Events
    const onParentFormSubmit = (proyect) => {
        dispatch(startAddProyect(proyect))
        history.push('/dashboard')
    } 

    // Render
    return (
        <section>
            <Title
                title={'Add proyect'}
                description={'Add new proyects to your new proyect manager'}
            />
            <ItemForm 
                isProyect={true}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
    )
}

export default AddProyectPage