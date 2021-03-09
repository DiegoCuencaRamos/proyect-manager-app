import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './routers/AppRouter'
import { auth } from './firebase'
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

auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        // TODO: check and prevent for same users login with diferent methods
        store.dispatch(login(firebaseUser.uid))
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

