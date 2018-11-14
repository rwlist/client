import React, { Component } from "react"
import "./Rating.css"
import Button from "../Button"

class Rating extends Component {
    render() {
        return (
            <div className="Rating">
                <span className="Rating-caption">Rating:</span>

                <div className="Rating-btns">
                    <Button onClick={this.props.ratingDown}>-</Button>
                    {this.props.rating}
                    <Button onClick={this.props.ratingUp}>+</Button>
                </div>
            </div>
        )
    }
}

export default Rating
