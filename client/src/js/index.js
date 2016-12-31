import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'

import Root from './components/Root.jsx';
import reducers from './reducers'

let store = createStore(reducers)

const app = document.getElementById('application')

ReactDOM.render(<Root store={store} />, app);
