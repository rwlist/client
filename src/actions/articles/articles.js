import { api } from "../../api"
import {
    ARTICLES_ALL_FAILURE,
    ARTICLES_ALL_RESPONSE,
    ARTICLES_ALL_REQUEST,
    ARTICLE_ACT_REQUEST,
    ARTICLE_ACT_RESPONSE,
    ARTICLE_ACT_ERROR,
    ARTICLES_ACTION_REQUEST,
    ARTICLES_ACTION_RESPONSE,
    ARTICLES_ACTION_ERROR,
} from "../../constants/articles"

/// fetchAll

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

// article act

export function actArticleRequest(article, url) {
    return {
        type: ARTICLE_ACT_REQUEST,
        payload: {
            id: article.id,
            article,
            url,
        },
    }
}

export function actArticleResponse(resp) {
    return {
        type: ARTICLE_ACT_RESPONSE,
        payload: resp,
    }
}

export function actArticleError(err, article) {
    return {
        type: ARTICLE_ACT_ERROR,
        payload: {
            id: article.id,
            err,
            article,
        },
    }
}

export function actArticle(article, url) {
    return dispatch => {
        dispatch(actArticleRequest(article, url))

        return api.articles
            .act(article, url)
            .then(resp => dispatch(actArticleResponse(resp)))
            .catch(err => dispatch(actArticleError(err, article)))
    }
}

// articles action

export function actionArticlesRequest(action) {
    return {
        type: ARTICLES_ACTION_REQUEST,
        payload: {
            action,
        },
    }
}

export function actionArticlesResponse(resp, action) {
    return {
        type: ARTICLES_ACTION_RESPONSE,
        payload: {
            resp,
            action,
        },
    }
}

export function actionArticlesError(err, action) {
    return {
        type: ARTICLES_ACTION_ERROR,
        payload: {
            err,
            action,
        },
    }
}

export function actionArticles(action, req) {
    return dispatch => {
        dispatch(actionArticlesRequest(action))

        return req(action)
            .then(resp => dispatch(actionArticlesResponse(resp, action)))
            .catch(err => dispatch(actionArticlesError(err, action)))
    }
}
