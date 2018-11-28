import React from "react"
import TComponent from "../TComponent"
import "./Tags.css"
import Button from "../Button"

class AddTag extends TComponent {
    state = {
        tag: "",
    }

    addTag = () => {
        this.props.add(this.state.tag)
        this.setState({ tag: "" })
    }

    render() {
        return (
            <div className="Tags-add-container">
                {this.field("tag", true)}
                <Button className="Tags-add-button" onClick={this.addTag}>
                    Add
                </Button>
            </div>
        )
    }
}

export default AddTag
