const { configureStore } = require("@reduxjs/toolkit");
import counterSlice from "./Feacher/Counter/CounterSlice"

export const store=configureStore({
    reducer: {
        wsCounter:counterSlice
    },
})