import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from './Title'
import { startAddTask } from '../actions/task'
import ItemForm from './Form'

const AddTaskPage = () => {
    const proyectId = useSelector(state => state.ids.proyectId)
    const dispatch = useDispatch()

    const onParentFormSubmit = (task) => {
        dispatch(startAddTask(task))        
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