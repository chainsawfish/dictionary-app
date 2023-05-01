import {configureStore} from "@reduxjs/toolkit";
import wordSlice from "./slices/wordSlice";

const store = configureStore({
    reducer: {
        wordSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store;