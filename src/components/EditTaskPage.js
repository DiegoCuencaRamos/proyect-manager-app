import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Title from './Title'
import { startEditTask } from '../actions/task'
import ItemForm from './Form'

const EditTaskPage = () => {
    // 1. Varaibles
    const history = useHistory()
    const dispatch = useDispatch()
    // 2. Task data
    const tasks = useSelector(state => state.tasks)
    const { taskId } = useParams()
    const task = tasks.find(task => task.id === taskId)

    // 3. Events
    const onParentFormSubmit = (updates) => {
        dispatch(startEditTask(taskId, updates))
        history.goBack()
    }

    // 4. Render
    return(
        <Fragment>
            <Title
                title={'Edit task'}
                description={'Edit your current task'}
            />

            <ItemForm
                item={task}
                onParentFormSubmit={onParentFormSubmit}
            />
        </Fragment>
    )
}

export default EditTaskPage