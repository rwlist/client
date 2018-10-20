const ENTRYPOINT = "http://localhost:9090"

export const fetchAuth = auth => (method, endpoint, body) => {
    const args = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }
    return fetch(ENTRYPOINT + endpoint, args).then(async it => {
        if (it.ok) {
            return it.json()
        } else {
            throw await it.json()
        }
    })
}
