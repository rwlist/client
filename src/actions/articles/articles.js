import { api } from "../../api"
import {
    ARTICLES_ALL_FAILURE,
    ARTICLES_ALL_RESPONSE,
    ARTICLES_ALL_REQUEST,
    ARTICLES_ADD_MANY_REQUEST,
    ARTICLES_ADD_MANY_RESPONSE,
} from "../../constants/articles"

export function allArticlesRequest() {
    return {
        type: ARTICLES_ALL_REQUEST,
    }
}

export function allArticlesResponse(articles) {
    return {
        type: ARTICLES_ALL_RESPONSE,
        payload: {
            articles,
        },
    }
}

export function allArticlesFailure(err) {
    return {
        type: ARTICLES_ALL_FAILURE,
        error: err,
    }
}

export function fetchAllArticles() {
    return dispatch => {
        dispatch(allArticlesRequest())

        return api.articles
            .all()
            .then(resp => dispatch(allArticlesResponse(resp)))
            .catch(err => dispatch(allArticlesFailure(err)))
    }
}

export function addManyArticlesRequest(articles) {
    return {
        type: ARTICLES_ADD_MANY_REQUEST,
        payload: {
            articles,
        },
    }
}

export function addManyArticlesResponse(resp) {
    return {
        type: ARTICLES_ADD_MANY_RESPONSE,
        payload: {
            resp,
        },
    }
}

export function addManyArticles(articles) {
    return dispatch => {
        dispatch(addManyArticlesRequest(articles))

        return api.articles
            .addMany(articles)
            .then(resp => dispatch(addManyArticlesResponse(resp)))
            .catch(err => dispatch(addManyArticlesResponse(err)))
    }
}
