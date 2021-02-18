import { combineReducers } from 'redux'

import proyectReducer from './slices/proyectSlice'
import taskReducer from './slices/taskSlice'
import filterReducer from './slices/filterSlice'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    filters: filterReducer,
    proyects: proyectReducer,
    task: taskReducer,
})

export default rootReducer