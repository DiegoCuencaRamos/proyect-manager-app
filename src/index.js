import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './routers/AppRouter'
import { startSetProyects } from './actions/proyect'
import { startSetTasks } from './actions/task'

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>    
    </React.StrictMode>
)

const renderApp = () => {
    ReactDOM.render(app, document.querySelector('#root'))
}

store.dispatch(startSetProyects())
    .then(() => {
        store.dispatch(startSetTasks())
    })
    .then(() => {
        renderApp()
    })