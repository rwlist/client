import { combineReducers } from 'redux'
import api from './api'
import user from './user'

export const rootReducer = combineReducers({
    api,
    user,
})
