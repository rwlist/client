const AUTH_STATUS = "/auth/status"
const AUTH_LOGIN = "/auth/login"
const AUTH_SIGNUP = "/auth/signup"

export default opts => {
    const { fetch } = opts
    return {
        login: req => fetch("POST", AUTH_LOGIN, req),
        signup: req => fetch("POST", AUTH_SIGNUP, req),
        status: () => fetch("GET", AUTH_STATUS),
    }
}
