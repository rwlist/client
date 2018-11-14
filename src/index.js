import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store } from "./store/configureStore"
import App from "./App"

import JavascriptTimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

JavascriptTimeAgo.locale(en)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default
        ReactDOM.render(
            <Provider store={store}>
                <NextApp />
            </Provider>,
            document.getElementById("root")
        )
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
