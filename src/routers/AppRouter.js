import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import LoginPage from '../components/LoginPage'
import DashboardProyectPage from '../components/DashboardProyectPage'
import DashboardTaskPage from '../components/DashboardTaskPage'
import AddProyectPage from '../components/AddProyectPage'
import EditProyectPage from '../components/EditProyectPage'
import AddTaskPage from '../components/AddTaskPage'
import EditTaskPage from '../components/EditTaskPage'
import ReadTaskPage from '../components/ReadTaskPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            
            <PrivateRoute path='/dashboard' component={DashboardProyectPage}></PrivateRoute>
            <PrivateRoute path='/proyect/:proyectId' component={DashboardTaskPage}></PrivateRoute>
            <PrivateRoute path='/add-proyect' component={AddProyectPage}></PrivateRoute>
            <PrivateRoute path='/edit-proyect/:proyectId' component={EditProyectPage}></PrivateRoute>

            <PrivateRoute path='/add-task' component={AddTaskPage}></PrivateRoute>
            <PrivateRoute path='/edit-task/:taskId' component={EditTaskPage}></PrivateRoute>
            <PrivateRoute path='/task/:taskId' component={ReadTaskPage}></PrivateRoute>
            
            <Route><NotFoundPage /></Route>
        </Switch>
    </BrowserRouter>
)

export default AppRouter