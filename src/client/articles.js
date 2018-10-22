const ARTICLES_ADD_ONE = "/articles/add"
const ARTICLES_ADD_MANY = "/articles/addMany"
const ARTICLES_ALL = "/articles/all"
const ARTICLES_PATCH = "/articles/0/patch"

export default opts => {
    const { fetch } = opts
    return {
        addOne: article => fetch("POST", ARTICLES_ADD_ONE, article),
        addMany: articles => fetch("POST", ARTICLES_ADD_MANY, articles),
        all: () => fetch("GET", ARTICLES_ALL),
        patch: article => fetch("PATCH", ARTICLES_PATCH, article),
    }
}