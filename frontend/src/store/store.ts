import {configureStore} from "@reduxjs/toolkit";
import wordSlice from "./slices/wordSlice";

const store = configureStore({
    reducer: {
        wordSlice,
    },
})

export default store;