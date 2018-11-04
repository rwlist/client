import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
} from "../../constants/auth"
import { api } from "../../api"

export function loginRequest(req) {
    return {
        type: LOGIN_REQUEST,
        payload: req,
    }
}

export function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        error: err,
    }
}

export function loginSuccess(jwt) {
    return {
        type: LOGIN_SUCCESS,
        payload: { jwt },
    }
}

export function login(req) {
    return dispatch => {
        dispatch(loginRequest(req))

        return api.auth
            .login(req)
            .then(resp => dispatch(loginSuccess(resp)))
            .catch(err => dispatch(loginFailure(err)))
    }
}
