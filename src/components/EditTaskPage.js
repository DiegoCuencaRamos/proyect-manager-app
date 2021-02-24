import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import Title from './Title'
import { editTask } from '../actions/task'
import ItemForm from './ItemForm'

const EditProyectPage = () => {
    const tasks = useSelector(state => state.tasks)
    const proyectId = useSelector(state => state.ids.proyectId)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)

    const dispatch = useDispatch()

    const onParentFormSubmit = (updates) => {
        dispatch(editTask(taskId, updates))
    }

    return(
        <section>
            <Title
                title={'Edit proyect'}
                description={'Edit your current proyect'}
            />

            <ItemForm
                proyectId={proyectId}
                item={task}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
    )
}

export default EditProyectPage