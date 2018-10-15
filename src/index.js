import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker()
