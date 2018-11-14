const ARTICLES_ADD_ONE = "/articles/add"
const ARTICLES_ADD_URL = "/articles/addURL"
const ARTICLES_ADD_MANY = "/articles/addMany"
const ARTICLES_ALL = "/articles/all"
const ARTICLES_PATCH = "/articles/0/patch"

export default opts => {
    const { fetch } = opts
    return {
        addOne: article => fetch("POST", ARTICLES_ADD_ONE, article),
        addURL: url => fetch("POST", ARTICLES_ADD_URL, url),
        addMany: articles => fetch("POST", ARTICLES_ADD_MANY, articles),
        all: () => fetch("GET", ARTICLES_ALL),
        patch: article => fetch("PATCH", ARTICLES_PATCH, article),
        act: (article, url) =>
            fetch("POST", `/articles/${article.id}${url}`, null),
    }
}
