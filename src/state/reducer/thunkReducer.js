import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addinguser = createAsyncThunk('user/addinguser',async()=>{
    //fetch(url).then(a=>a.json()).then(data=>console.log(data))
let data = await fetch("https://jsonplaceholder.typicode.com/users")
let data2 = await data.json()
return data2;

})

const initialState={
    dataArray: [{name:"einstein"},{name:"newton"}],
    status: "idle", //'idle' | 'pending' | 'succeeded' | 'failed'
    // error: null,
}

const asynSlicer = createSlice({
    name:"userdata",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addinguser.fulfilled, (state, action) => {
            state.dataArray = action.payload
            state.status = "succeeded"
            console.log("succeeded")
        });
        builder.addCase(addinguser.pending, (state, action) => {            
            state.status = "loading"
            console.log("pending...")
        });
        builder.addCase(addinguser.rejected, (state, action) => {
            state.status = "failed"
            // state.error = "error"
          });
    }
})

export default asynSlicer.reducer
