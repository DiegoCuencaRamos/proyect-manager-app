import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRouter from './routers/AppRouter'

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>    
    </React.StrictMode>
)

ReactDOM.render(app, document.querySelector('#root'))
