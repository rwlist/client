import {
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
} from "../../constants/auth"
import { api } from "../../api"

export function signupRequest(req) {
    return {
        type: SIGNUP_REQUEST,
        payload: req,
    }
}

export function signupFailure(err) {
    return {
        type: SIGNUP_FAILURE,
        error: err,
    }
}

export function signupSuccess(jwt) {
    return {
        type: SIGNUP_SUCCESS,
        payload: { jwt },
    }
}

export function signup(req) {
    return dispatch => {
        dispatch(signupRequest(req))

        return api.auth
            .signup(req)
            .then(resp => dispatch(signupSuccess(resp)))
            .catch(err => dispatch(signupFailure(err)))
    }
}
