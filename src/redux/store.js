import { combineReducers, configureStore } from '@reduxjs/toolkit'
import weatherSlice from "./weatherSlice";

const rootReducer = combineReducers({
    weatherSlice: weatherSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;