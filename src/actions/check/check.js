import {
    CHECK_STATUS_REQUEST,
    CHECK_STATUS_RESPONSE,
} from "../../constants/check"

import { api } from "../../api"

export function checkStatusRequest() {
    return {
        type: CHECK_STATUS_REQUEST,
    }
}

export function checkStatusResponse(resp) {
    return {
        type: CHECK_STATUS_RESPONSE,
        payload: {
            resp,
        },
    }
}

export function checkStatus() {
    return dispatch => {
        dispatch(checkStatusRequest())

        return api.auth
            .status()
            .then(resp => dispatch(checkStatusResponse(resp)))
            .catch(err => dispatch(checkStatusResponse(err)))
    }
}
