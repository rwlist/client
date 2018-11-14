import React, { Component } from "react"
import "./Button.css"

class Button extends Component {
    render() {
        return (
            <button
                className={
                    "Button-style-1" +
                    (this.props.big ? " Button-style-big" : "")
                }
                style={
                    this.props.dashed
                        ? {
                              borderStyle: "dashed",
                          }
                        : {}
                }
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button
