import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { MuiThemeProvider } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import LinkListItem from '../components/LinkListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PageContent from './PageContent'
import Layout from '../components/Layout'


class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <Layout drawer={(
                    <Fragment>
                        <LinkListItem to="/">
                            <ListItemText primary="Home" />
                        </LinkListItem>
                        <LinkListItem to="/api-settings">
                            <ListItemText primary="API Settings" />
                        </LinkListItem>
                    </Fragment>
                )} title="rwlist.io">
                    <PageContent />
                </Layout>
            </MuiThemeProvider>
        )
    }
}

export default App
