import React from "react"
import TComponent from "../TComponent"

export default class LoginFields extends TComponent {
    state = {
        username: "",
        password: "",
        passwordVisible: false,
    }

    action = () => {
        const { username, password } = this.state
        this.props.action({ username, password })
    }

    render() {
        return (
            <div>
                <b>Зологиниться:</b>
                <br />
                {this.field("username")}
                <br />
                {this.passwordField("password")}
                <br />
                <button onClick={this.action}>Довайте сделаем ето!</button>
            </div>
        )
    }
}
