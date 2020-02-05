/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import loggedReducer from "./LoginReducer";
import UserReducer from "./UserReducer";

import {combineReducers} from 'redux';

const GlobalReducer = combineReducers({
    logged: loggedReducer,
    user: UserReducer
})

export default GlobalReducer