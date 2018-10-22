import React, { Component } from "react"
import ReactJson from "react-json-view"

class Article extends Component {
    render() {
        const { data } = this.props
        return <ReactJson src={data} />
    }
}

export default Article
