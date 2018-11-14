import { patchArticle, actArticle } from "./articles"

export function onClick(article) {
    return actArticle(article, "/click")
}

export function setReadStatus(article, status) {
    return actArticle(article, "/read/status?newStatus=" + status)
}

export function changeRating(article, delta) {
    return actArticle(article, "/rating/change?delta=" + delta)
}

/// ALL BELOW IS DEPRECATED

export function onArticleClick(article) {
    return patchTags(article, tags => ({
        ...tags,
        clicks: (tags.clicks || 0) + 1,
        lastClicked: new Date().toISOString(),
    }))
}

export function changeArticleStatus(article, status) {
    return patchTags(article, tags => ({
        ...tags,
        status,
        statusChanged: new Date().toISOString(),
    }))
}

function patchTags(it, f) {
    return patchArticle(modifyTags(it, f), it)
}

function modifyTags(it, f) {
    return {
        ...it,
        tags: f(it.tags),
    }
}
