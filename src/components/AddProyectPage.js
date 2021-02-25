import React from 'react'
import { useDispatch } from 'react-redux'
import { startAddProyect } from '../actions/proyect'
import Title from './Title'
import ItemForm from './ItemForm'

const AddProyectPage = () => {
    const dispatch = useDispatch()

    const onParentFormSubmit = (proyect) => {
        dispatch(startAddProyect(proyect))
    } 

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