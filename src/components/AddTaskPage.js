import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Title from './Title'
import { startAddTask } from '../actions/task'
import ItemForm from './Form'

const AddTaskPage = () => {
    const { proyectId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const onParentFormSubmit = (task) => {
        dispatch(startAddTask(task))   
        history.push(`/proyect/${proyectId}`)
    } 

    return (
        <section>
            <Title
                title={'Add task'}
                description={'Add new tasks to your current proyect'}
            />
            <ItemForm 
                proyectId={proyectId}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
)}

export default AddTaskPage