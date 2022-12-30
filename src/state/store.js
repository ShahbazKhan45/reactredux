import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducer/counterReducer'
import thunkReducer from './reducer/thunkReducer'


const store = configureStore({
    reducer:{
        counter:counterReducer,
        userdata:thunkReducer
    }
})

export default store;