import React, { Component } from "react"
import { connect } from "react-redux"
import { logoutAction } from "../actions/auth/logout"

class Base extends Component {
    render() {
        return (
            <div>
                <p>КАК ТЕБЕ ТАКАЯ ГЛАВНАЯ СТРАНИЦА, ИЛОН МАСК?</p>
                <button onClick={this.props.logout}>Выйти в окно</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
})

export default connect(
    null,
    mapDispatchToProps
)(Base)
