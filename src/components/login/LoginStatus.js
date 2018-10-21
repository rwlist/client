import React, { Component } from "react"
import ReactJson from "react-json-view"
import "./LoginStatus.css"

class LoginStatus extends Component {
    render() {
        const { auth } = this.props
        if (auth.error) {
            return (
                <div className="LoginStatus LoginStatus_error">
                    <ReactJson src={auth.error} />
                </div>
            )
        }
        return null
    }
}

export default LoginStatus
