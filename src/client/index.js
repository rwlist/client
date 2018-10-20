import auth from "./auth"

export default opts => ({
    auth: auth(opts),
})
