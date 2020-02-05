/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import loggedReducer from "./LoginReducer";

import {combineReducers} from 'redux';

const GlobalReducer = combineReducers({
    logged: loggedReducer
})

export default GlobalReducer