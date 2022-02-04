import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dateStore from './date'


const rootReducer = combineReducers({
    date: dateStore
})

export const store = configureStore({
    reducer: rootReducer,
})