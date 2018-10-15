import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                Page not found. Back to <Link to='/'>home</Link>?
            </div>
        )
    }
}
