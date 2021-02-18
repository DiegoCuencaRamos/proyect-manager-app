import { createStore } from 'redux'
import rootReducer from './reducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    /* preloadedState. */
    enhancer,
)

export default store