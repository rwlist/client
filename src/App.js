import React, { Component } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"

import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp"
import Base from "./pages/Base"
import PrivateRoute from "./components/PrivateRoute"
import "./App.css"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/" component={Base} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
