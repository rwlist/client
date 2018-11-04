import auth from "./auth"
import articles from "./articles"

export default opts => ({
    auth: auth(opts),
    articles: articles(opts),
})
