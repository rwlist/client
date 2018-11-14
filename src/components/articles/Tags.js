import React, { Component } from "react"
import "./Tags.css"
import Tag from "./Tag"
import AddTag from "./AddTag"

class Tags extends Component {
    state = {
        expanded: false,
    }

    spoiler = () => {
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    render() {
        let expanded = null
        if (this.state.expanded) {
            expanded = (
                <div>
                    <div className="Tags-container">{this.renderTags()}</div>
                    <AddTag add={this.props.add} />
                </div>
            )
        }
        return (
            <div>
                <span className="Tags-caption" onClick={this.spoiler}>
                    {this.state.expanded ? "-" : "+"}
                    Tags
                </span>
                {expanded}
            </div>
        )
    }

    renderTags() {
        const { tags } = this.props.data

        const tagsArray = Object.keys(tags)
            .map(key => {
                return (
                    <Tag
                        key={key}
                        name={key}
                        value={tags[key]}
                        remove={() => this.props.remove(key)}
                    />
                )
            })
            .filter(it => it !== null)

        return tagsArray
    }
}

export default Tags
