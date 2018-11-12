import {
    ARTICLES_ALL_REQUEST,
    ARTICLES_ALL_RESPONSE,
    ARTICLES_ALL_FAILURE,
    ARTICLE_PATCH_REQUEST,
    ARTICLE_PATCH_ERROR,
    ARTICLE_PATCH_RESPONSE,
    ARTICLE_ACT_REQUEST,
    ARTICLE_ACT_RESPONSE,
    ARTICLE_ACT_ERROR,
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
                list: processArticleEvents(state.list, action),
                addMany: articlesAddMany(state.addMany, action),
            }
    }
}

function processArticleEvents(list = [], action) {
    switch (action.type) {
        case ARTICLE_PATCH_REQUEST:
            return list.map(it => {
                if (it.id === action.payload.article.id) {
                    return {
                        ...action.payload.article,
                        patching: "now",
                    }
                } else {
                    return it
                }
            })
        case ARTICLE_PATCH_RESPONSE:
            return list.map(it => {
                if (it.id === action.payload.article.id) {
                    return {
                        ...action.payload.article,
                        patching: undefined,
                    }
                } else {
                    return it
                }
            })
        case ARTICLE_PATCH_ERROR:
            return list.map(it => {
                if (it.id === action.payload.prev.id) {
                    return {
                        ...action.payload.prev,
                        patching: "error",
                    }
                } else {
                    return it
                }
            })
        case ARTICLE_ACT_REQUEST:
            return list.map(it => {
                if (it.id === action.payload.id) {
                    return {
                        ...it,
                        patching: "now",
                    }
                } else {
                    return it
                }
            })
        case ARTICLE_ACT_RESPONSE:
            return list.map(it => {
                if (it.id === action.payload.id) {
                    return {
                        ...action.payload.article,
                        patching: undefined,
                    }
                } else {
                    return it
                }
            })
        case ARTICLE_ACT_ERROR:
            return list.map(it => {
                if (it.id === action.payload.id) {
                    return {
                        ...it,
                        patching: "error",
                    }
                } else {
                    return it
                }
            })
        default:
            return list
    }
}
