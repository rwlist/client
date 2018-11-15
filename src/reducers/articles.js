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
    ARTICLES_ACTION_REQUEST,
    ARTICLES_ACTION_RESPONSE,
    ARTICLES_ACTION_ERROR,
} from "../constants/articles"

const initialState = {
    isFetching: false,
    error: null,
    list: [],
}

const initialAddState = {
    isFetching: false,
    error: [],
}

function add(state = initialAddState, action) {
    switch (action.type) {
        case ARTICLES_ACTION_REQUEST:
            return {
                isFetching: true,
                errors: [],
            }
        case ARTICLES_ACTION_RESPONSE:
            return {
                isFetching: false,
                resp: action.payload.resp,
                errors: [],
            }
        case ARTICLES_ACTION_ERROR:
            return {
                isFetching: false,
                errors: action.payload.resp.errors,
            }
        default:
            return state
    }
}

export function all(state, action) {
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
        case ARTICLES_ACTION_RESPONSE:
            return {
                ...state,
                list: [
                    ...(action.payload.resp.addedArticles || []),
                    ...state.list,
                ],
            }
        default:
            return {
                ...state,
                list: processArticleEvents(state.list, action),
            }
    }
}

export function articles(state = initialState, action) {
    return {
        ...all(state, action),
        add: add(state.add, action),
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
