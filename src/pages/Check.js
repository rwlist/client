import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { checkStatus } from "../actions/check/check"
import ReactJson from "react-json-view"
import Loading from "../components/Loading"

class Check extends Component {
    render() {
        const { checkStatus, check } = this.props
        return (
            <div>
                <h2>Чекеры</h2>
                <p>КАК ТЕБЕ ТАКИЕ ЧЕКЕРЫ, ИЛОН МАСК?</p>

                <button onClick={checkStatus}>Чекнуть статус</button>
                <br />
                <br />

                {check.isFetching ? (
                    <Loading />
                ) : (
                    <ReactJson src={check.authStatus} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    check: state.check,
})

const mapDispatchToProps = dispatch => ({
    checkStatus: () => dispatch(checkStatus()),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Check)
)
