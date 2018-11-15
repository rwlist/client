import { all, articles } from "./articles"
import { ARTICLES_ACTION_RESPONSE } from "../constants/articles"

it("works ok", () => {
    articles(undefined, {
        type: ARTICLES_ACTION_RESPONSE,
        payload: {
            resp: {
                addedArticles: null,
            },
        },
    })
})
