import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Title from './Title'
import { startAddTask } from '../actions/task'
import ItemForm from './Form'

const AddTaskPage = () => {
    // 1. Variables
    const { proyectId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    // 2. Events
    const onParentFormSubmit = (task) => {
        dispatch(startAddTask(task))   
        history.push(`/proyect/${proyectId}`)
    } 

    // 3. Render
    return (
        <Fragment>
            <Title
                title={'Add task'}
                description={'Add new tasks to your current proyect'}
            />
            <ItemForm 
                proyectId={proyectId}
                onParentFormSubmit={onParentFormSubmit}
            />
        </Fragment>
)}

export default AddTaskPage