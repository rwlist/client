import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_ACTION,
} from "../constants/auth"

export const STATUS_NOT_LOGGED_IN = "STATUS_NOT_LOGGED_IN"
export const STATUS_LOGGING_IN = "STATUS_LOGGING_IN"
export const STATUS_LOGGED_IN = "STATUS_LOGGED_IN"

// TODO: put jwt in localStorage
const jwt = JSON.parse(localStorage.getItem("jwt"))
const initialState = jwt
    ? {
          status: STATUS_LOGGED_IN,
          jwt,
      }
    : {
          status: STATUS_NOT_LOGGED_IN,
      }

export function auth(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case LOGIN_REQUEST:
            if (state.status !== STATUS_NOT_LOGGED_IN) return state
            return {
                status: STATUS_LOGGING_IN,
                onActionType: action.type,
            }
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            if (state.status !== STATUS_LOGGING_IN) return state
            return {
                status: STATUS_LOGGED_IN,
                jwt: action.payload.jwt,
            }
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_ACTION:
            return {
                status: STATUS_NOT_LOGGED_IN,
                error: action.error,
                onActionType: action.type,
            }
        default:
            return state
    }
}
