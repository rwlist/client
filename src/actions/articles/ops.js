import { patchArticle } from "./articles"

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
