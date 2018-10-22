import {
    ARTICLES_ALL_REQUEST,
    ARTICLES_ALL_RESPONSE,
    ARTICLES_ALL_FAILURE,
} from "../constants/articles"

import { articlesAddMany } from "./articlesAddMany"

const initialState = {
    isFetching: false,
    error: null,
    list: [],
    addMany: articlesAddMany(undefined, {}),
}

export function articles(state = initialState, action) {
    switch (action.type) {
        case ARTICLES_ALL_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
                list: [],
            }
        case ARTICLES_ALL_RESPONSE:
            return {
                ...state,
                isFetching: false,
                error: null,
                list: action.payload.articles,
            }
        case ARTICLES_ALL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                list: [],
            }
        default:
            return {
                ...state,
                addMany: articlesAddMany(state.addMany, action),
            }
    }
}
