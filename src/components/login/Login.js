import React, { Component } from "react"
import { connect } from "react-redux"
import { STATUS_LOGGED_IN } from "../../reducers/auth"
import { Redirect, Link, withRouter } from "react-router-dom"
import LoginFields from "./LoginFields"
import { login } from "../../actions/auth/login"
import LoginStatus from "./LoginStatus"

class Login extends Component {
    render() {
        if (this.props.auth.status === STATUS_LOGGED_IN) {
            return <Redirect push from="/login" to="/" />
        }
        return (
            <div>
                <h2>Здравствуйте, вы незологинены</h2>
                <br />
                <LoginStatus auth={this.props.auth} />
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

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
)
