import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProyect } from '../actions/proyect'
import Title from './Title'
import ItemForm from './ItemForm'

const EditProyectPage = () => {
    const proyects = useSelector(state => state.proyects)
    const { proyectId } = useParams()
    const proyect = proyects.find(proyect => proyect.id === proyectId)
    
    const dispatch = useDispatch()

    const onParentFormSubmit = (updates) => {
        dispatch(editProyect(proyectId, updates))
    }

    return (
        <section>
            <Title
                title={'Edit proyect'}
                description={'Edit your current proyect'}
            />

            <ItemForm 
                item={proyect}
                isProyect={true}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
)}


export default EditProyectPage