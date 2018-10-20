import React, { Component } from "react"
import { Route, BrowserRouter } from "react-router-dom"

import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp"
import Base from "./components/Base"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
    render() {
        console.log("render")
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute exact path="/" component={Base} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
