import React, { Component } from "react"
import { STATUS_LOGGED_IN } from "../../reducers/auth"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import SignUpFields from "./SignUpFields"
import { signup } from "../../actions/auth/signup"
import LoginStatus from "./LoginStatus"

class SignUp extends Component {
    render() {
        if (this.props.auth.status === STATUS_LOGGED_IN) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Здравствуйте, вы незологинены</h2>
                <br />
                <LoginStatus auth={this.props.auth} />
                <SignUpFields action={this.props.action} />
                <br />
                <Link to="/login">Я лучше зологинюсь</Link>
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
        action: req => dispatch(signup(req)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
