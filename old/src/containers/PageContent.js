import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import ApiSettings from '../pages/ApiSettings'

export default class PageContent extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/api-settings" component={ApiSettings} />
            </div>
        )
    }
}