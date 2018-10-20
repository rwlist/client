import React, { Component } from "react"
import { connect } from "react-redux"
import { STATUS_LOGGED_IN } from "../../reducers/auth"
import { Redirect, Link } from "react-router-dom"
import LoginFields from "./LoginFields"
import { login } from "../../actions/auth/login"

class Login extends Component {
    render() {
        if (this.props.auth.status === STATUS_LOGGED_IN) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Здравствуйте, вы незологинены</h2>
                <br />
                <LoginFields action={this.props.action} />
                <br />
                <Link to="/signup">Я лучше зорегаюсь</Link>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: req => dispatch(login(req)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
