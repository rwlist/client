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