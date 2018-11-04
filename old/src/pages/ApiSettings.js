import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import StringSettingCard from '../components/StringSettingCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as apiActions from '../actions/ApiActions'

class ApiSettings extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    API Settings
                </Typography>
                <StringSettingCard
                    name="Current entrypoint"
                    value={this.props.entrypoint}
                    update={this.props.setEntrypoint}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return store.api;
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(apiActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ApiSettings)