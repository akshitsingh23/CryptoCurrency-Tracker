import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux' //we need to provide store to provider

import 'antd/dist/antd.css';
import App from './App';
import Store from './app/store'

ReactDOM.render
(
    <React.StrictMode>
        <Router>
            <Provider store={Store}>
                {/* now all things in app can access the provider */}
                <App/>
            </Provider>
        </Router>
        </React.StrictMode>
    ,document.getElementById('root')
);
