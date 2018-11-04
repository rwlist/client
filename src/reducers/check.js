import { CHECK_STATUS_REQUEST, CHECK_STATUS_RESPONSE } from "../constants/check"
const initialState = {
    isFetching: false,
    authStatus: undefined,
}

export function check(state = initialState, action) {
    switch (action.type) {
        case CHECK_STATUS_REQUEST:
            return {
                isFetching: true,
            }
        case CHECK_STATUS_RESPONSE:
            return {
                isFetching: false,
                authStatus: action,
            }
        default:
            return state
    }
}
