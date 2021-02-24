import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import DashboardProyectPage from '../components/DashboardProyectPage'
import DashboardTaskPage from '../components/DashboardTaskPage'
import AddProyectPage from '../components/AddProyectPage'
import EditProyectPage from '../components/EditProyectPage'
import AddTaskPage from '../components/AddTaskPage'
import EditTaskPage from '../components/EditTaskPage'
import ReadTaskPage from '../components/ReadTaskPage'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        
        <Switch>
            <Route exact path='/'><LoginPage /></Route>

            <Route path='/dashboard'><DashboardProyectPage /></Route>
            <Route path='/proyect/:proyectId'><DashboardTaskPage /></Route>
            <Route path='/add-proyect'><AddProyectPage /></Route>
            <Route path='/edit-proyect/:proyectId'><EditProyectPage /></Route>

            <Route path='/add-task'><AddTaskPage /></Route>
            <Route path='/edit-task/:taskId'><EditTaskPage /></Route>
            <Route path='/task/:taskId'><ReadTaskPage /></Route>
        </Switch>
    </BrowserRouter>
)

export default AppRouter