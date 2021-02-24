import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import AddTaskPage from '../components/AddTaskPage'
import EditTaskPage from '../components/EditTaskPage'
import ReadTaskPage from '../components/ReadTaskPage'

// Untill react-router v6 release
const TaskRouter = () => {
    const { path } = useRouteMatch()

    return (
        <React.Fragment>
            <Route path={`${path}/add`}><AddTaskPage /></Route>
            <Route path={`${path}/edit/:taskId`}><EditTaskPage /></Route>
            <Route path={`${path}/read/:taskId`}><ReadTaskPage /></Route>
        </React.Fragment>
    )
}

export default TaskRouter