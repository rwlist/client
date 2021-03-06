import { actArticle, actionArticles } from "./articles"
import { api } from "../../api"

export function onClick(article) {
    return actArticle(article, "/click")
}

export function setReadStatus(article, status) {
    return actArticle(
        article,
        "/read/status?newStatus=" + encodeURIComponent(status)
    )
}

export function changeRating(article, delta) {
    return actArticle(article, "/rating/change?delta=" + delta)
}

export function removeTag(article, tag) {
    return actArticle(article, "/tags/remove?tag=" + encodeURIComponent(tag))
}

export function addTag(article, tag) {
    return actArticle(article, "/tags/add?tag=" + encodeURIComponent(tag))
}

export function addURL(url) {
    return actionArticles(
        {
            type: "addURL",
            url,
        },
        () => api.articles.addURL(url)
    )
}
