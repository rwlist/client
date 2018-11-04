import React, { Component } from "react"
import { connect } from "react-redux"
import { logoutAction } from "../actions/auth/auth"
import { withRouter, Link } from "react-router-dom"

class Main extends Component {
    render() {
        return (
            <div>
                <h2>Маин паге</h2>
                <p>КАК ТЕБЕ ТАКАЯ ГЛАВНАЯ СТРАНИЦА, ИЛОН МАСК?</p>
                <ul>
                    <li>
                        <Link to="/articles">Почетать артикли</Link>
                    </li>
                    <li>
                        <Link to="/check">Чекнуть защеку</Link>
                    </li>
                </ul>

                <button onClick={this.props.logout}>Выйти в окно</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
})

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Main)
)
