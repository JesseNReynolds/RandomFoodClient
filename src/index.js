import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import store from './store/store'
import App from './components/App.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
