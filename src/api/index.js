import { store } from "../store/configureStore"
import client from "../client"
import { fetchAuth } from "./fetch"

const createApi = state => {
    return client({
        fetch: fetchAuth(state.auth),
    })
}

export let api = createApi(store.getState())

store.subscribe(() => {
    api = createApi(store.getState())
})
