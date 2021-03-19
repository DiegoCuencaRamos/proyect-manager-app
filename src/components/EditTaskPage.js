import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Title from './Title'
import { startEditTask } from '../actions/task'
import ItemForm from './Form'

const EditTaskPage = () => {
    const tasks = useSelector(state => state.tasks)
    const proyectId = useSelector(state => state.ids.proyectId)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)
    const history = useHistory()

    const dispatch = useDispatch()

    const onParentFormSubmit = (updates) => {
        dispatch(startEditTask(taskId, updates))
        history.push(`/proyect/${proyectId}`)
    }

    return(
        <section>
            <Title
                title={'Edit task'}
                description={'Edit your current task'}
            />

            <ItemForm
                proyectId={proyectId}
                item={task}
                onParentFormSubmit={onParentFormSubmit}
            />
        </section>
    )
}

export default EditTaskPage