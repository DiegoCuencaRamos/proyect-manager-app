import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './routers/AppRouter'
import { firebase } from './firebase'
import { login, logout } from './actions/auth'
import { startSetProyects } from './actions/proyect'
import { startSetTasks } from './actions/task'
import LoadingPage from './components/LoadingPage'

// React dates
import 'react-dates/initialize' // JS
import 'react-dates/lib/css/_datepicker.css' // CSS
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'

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

ReactDOM.render(<LoadingPage />, document.querySelector('#root'))

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetProyects())
            .then(() => {
                store.dispatch(startSetTasks())
            })
            .then(() => {
                renderApp()
            })
    } else {
        store.dispatch(logout())
        renderApp()
    }
})