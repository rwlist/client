const ENTRYPOINT = "http://localhost:9090"

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
