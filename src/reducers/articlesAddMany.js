import {
    ARTICLES_ADD_MANY_REQUEST,
    ARTICLES_ADD_MANY_RESPONSE,
} from "../constants/articles"

const initialState = {
    isFetching: false,
    data: null,
}

export function articlesAddMany(state = initialState, action) {
    switch (action.type) {
        case ARTICLES_ADD_MANY_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case ARTICLES_ADD_MANY_RESPONSE:
            return {
                ...state,
                isFetching: false,
                data: action.payload.resp,
            }
        default:
            return state
    }
}
