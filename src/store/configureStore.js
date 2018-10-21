import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "../reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { persistJWT } from "./jwt"

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

persistJWT(store)
