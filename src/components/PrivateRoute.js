import React from "react"
import { Route, Redirect, withRouter } from 'react-router-dom';
import { STATUS_LOGGED_IN } from "../reducers/auth"
import { connect } from "react-redux"

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

const mapStateToProps = store => {
    return {
        loggedIn: store.auth.status === STATUS_LOGGED_IN,
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
