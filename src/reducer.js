import { combineReducers } from 'redux'

import proyectReducer from './slices/proyectSlice'
import taskReducer from './slices/taskSlice'
import filterReducer from './slices/filterSlice'
import authReducer from './slices/authSlice'
import idSlice from './slices/idSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    filters: filterReducer,
    proyects: proyectReducer,
    tasks: taskReducer,
    ids: idSlice,
})

export default rootReducer