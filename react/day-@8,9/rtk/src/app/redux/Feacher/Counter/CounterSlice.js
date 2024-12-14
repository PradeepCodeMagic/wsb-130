const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 1,
    ws:20

}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.ws += 1
        }
        ,
        decrement: (state) => {
            if(state.ws>1){
                state.ws -= 1
            }
           
        },
    }
})

 export const {increment,decrement}=counterSlice.actions

 export default counterSlice.reducer