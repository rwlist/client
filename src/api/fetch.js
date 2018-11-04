const ENTRYPOINT = process.env.REACT_APP_ENTRYPOINT || "http://api.rwlist.io"
// TODO: take from env

export const fetchAuth = auth => (method, endpoint, body) => {
    const args = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }
    if (auth.jwt && auth.jwt.Token) {
        args.headers["Authorization"] = "Bearer " + auth.jwt.Token
    }
    return fetch(ENTRYPOINT + endpoint, args).then(async it => {
        // TODO: dispatch INVALID_AUTH event on unauthorized response
        if (it.ok) {
            return it.json()
        } else {
            throw await it.json()
        }
    })
}
