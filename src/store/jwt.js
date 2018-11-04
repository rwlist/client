import { saveState } from "../localStorage"

export function persistJWT(store) {
    let prev = {}
    store.subscribe(() => {
        const { jwt } = store.getState().auth
        if (jwt === prev) return
        prev = jwt
        saveState("jwt", jwt)
    })
}
