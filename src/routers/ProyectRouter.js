import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import DashboardProyectPage from '../components/DashboardProyectPage'
import DashboardTaskPage from '../components/DashboardTaskPage'
import AddProyectPage from '../components/AddProyectPage'
import EditProyectPage from '../components/EditProyectPage'

// Untill react-router v6 release
const ProyectRouter = () => {
    const { path } = useRouteMatch()

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={`${path}/`}><DashboardProyectPage /></Route>
                <Route path={`${path}/:proyectId`}><DashboardTaskPage /></Route>
                <Route path={`${path}/add`}><AddProyectPage /></Route>
                <Route path={`${path}/edit/:proyectId`}><EditProyectPage /></Route>
            </Switch>    
        </React.Fragment>
    )
}

export default ProyectRouter