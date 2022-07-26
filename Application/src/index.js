import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import usersReducer from './store/reducers/users'
import ReduxThunk from 'redux-thunk'
import './index.css'
const combinedReducer = combineReducers({
    user: usersReducer,
})

const store = createStore(combinedReducer, applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
