import {createSlice} from '@reduxjs/toolkit';

const initialState={
    count:0,
    userdata:[]
}
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count =  state.count+1
        },
        decrement:(state)=>{
            state.count =  state.count-1
        },
        reset:(state)=>{
            state.count =  0
        },
        changeAmount:(state,action)=>{
            state.count = state.count+ action.payload
        },
        adduser:(state,action)=>{
            state.userdata = [...state.userdata,action.payload]
        },
    }
})

export default counterSlice.reducer

export const {increment,decrement,changeAmount,reset,adduser} = counterSlice.actions

