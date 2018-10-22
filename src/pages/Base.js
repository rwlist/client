import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import Main from "./Main"
import Articles from "./articles/Articles"
import Check from "./Check"

class Base extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/articles" component={Articles} />
                <Route path="/check" component={Check} />

                <br />
                <br />
                <Link to="/">Назад в будущее</Link>
            </div>
        )
    }
}

export default Base
