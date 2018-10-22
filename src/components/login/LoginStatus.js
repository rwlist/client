import React, { Component } from "react"
import TError from "../TError"

class LoginStatus extends Component {
    render() {
        const { auth } = this.props
        if (auth.error) {
            return <TError err={auth.error} />
        }
        return null
    }
}

export default LoginStatus
