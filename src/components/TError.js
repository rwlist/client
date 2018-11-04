import React, { Component } from "react"
import ReactJson from "react-json-view"
import "./TError.css"

class TError extends Component {
    render() {
        const { err } = this.props
        if (err) {
            return (
                <div className="TError TError_error">
                    <ReactJson src={err} />
                </div>
            )
        }
        return null
    }
}

export default TError
