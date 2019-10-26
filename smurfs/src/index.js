import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {getSmurfReducer} from './reducers/index'

const rootReducer = combineReducers({
    smurf: getSmurfReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root"));
