import { combineReducers } from 'redux'
import authReducer from './reducers/auth'
import proyectsReducer from './reducers/proyecs'
import tasksReducer from './reducers/tasks'

const rootReducer = combineReducers({
    auth: authReducer,
    proyects: proyectsReducer,
    tasks: tasksReducer,
})

export default rootReducer