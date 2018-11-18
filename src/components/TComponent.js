import React, { Component } from "react"

class TComponent extends Component {
    text(prop) {
        return e => {
            this.setState({ [prop]: e.target.value })
        }
    }

    checkbox(prop) {
        return e => {
            this.setState({ [prop]: e.target.checked })
        }
    }

    field(name, inline = false) {
        const inp = (
            <input
                type="text"
                value={this.state[name]}
                onChange={this.text(name)}
            />
        )
        if (inline) {
            return inp
        }
        return (
            <div>
                {name + ": "}
                {inp}
            </div>
        )
    }

    fieldCheckbox(name) {
        return (
            <div>
                {name + ": "}
                <input
                    type="checkbox"
                    checked={this.state[name]}
                    onChange={this.checkbox(name)}
                />
            </div>
        )
    }

    passwordField(name) {
        return (
            <div>
                {name + ": "}
                <input
                    type={this.state[name + "Visible"] ? "text" : "password"}
                    value={this.state[name]}
                    onChange={this.text(name)}
                />
                <input
                    type="checkbox"
                    value={this.state[name + "Visible"]}
                    onChange={this.checkbox(name + "Visible")}
                />
            </div>
        )
    }
}

export default TComponent
