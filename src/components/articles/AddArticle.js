import React from "react"
import TComponent from "../TComponent"
import "./Article.css"
import Button from "../Button"

class AddArticle extends TComponent {
    state = {
        url: "",
    }

    render() {
        return (
            <div className="Articles-add-container">
                {this.field("url", true)}
                <Button
                    className="Articles-add-button"
                    onClick={() => this.props.add(this.state.url)}
                >
                    Add
                </Button>
            </div>
        )
    }
}

export default AddArticle
