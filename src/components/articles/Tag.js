import React, { Component } from "react"
import "./Tags.css"

class Tag extends Component {
    render() {
        let { value, name } = this.props
        let hideValue = false
        if (typeof value !== "string") {
            value = "{....}"
        }
        if (value === "" || !value) {
            hideValue = true
        }
        return (
            <div className="Tag">
                <span>├</span>
                <div className="Tag-content">
                    {name}
                    {hideValue ? "" : ":" + value}
                </div>
                <span
                    className="Tag-delete"
                    onClick={this.props.remove}
                    role="img"
                    aria-label="Remove tag"
                >
                    ❌
                </span>
            </div>
        )
    }
}

export default Tag
