import React from "react"
import TComponent from "../TComponent"

export default class SignUpFields extends TComponent {
    state = {
        username: "",
        email: "",
        password: "",
        passwordVisible: false,
        firstName: "",
        secondName: "",
    }

    action = () => {
        const { username, email, password, firstName, secondName } = this.state
        this.props.action({ username, email, password, firstName, secondName })
    }

    render() {
        return (
            <div>
                <b>Зорегистрироваться:</b>
                <br />
                {this.field("username")}
                <br />
                {this.field("email")}
                <br />
                {this.passwordField("password")}
                <br />
                {this.field("firstName")}
                <br />
                {this.field("secondName")}
                <br />
                <button onClick={this.action}>Довайте сделаем ето!</button>
            </div>
        )
    }
}
