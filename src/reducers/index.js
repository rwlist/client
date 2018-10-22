import { combineReducers } from "redux"
import { auth } from "./auth"
import { check } from "./check"
import { articles } from "./articles"

export const rootReducer = combineReducers({
    auth,
    check,
    articles,
})
