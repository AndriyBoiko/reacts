import {combineReducers, configureStore} from "@reduxjs/toolkit"
import catReducer from "./slices/cat.slices";
import dogReducer from "./slices/dog.slices";


const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store;