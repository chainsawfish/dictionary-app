import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL: string = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup'
const API_KEY: string = 'dict.1.1.20230426T072642Z.a57083466a2d9328.75ef34d10887073fed3f6e60e29307321d8d0dd8'

export const fetchWord = createAsyncThunk('wordSlice/fetchWord',
    async (word: string) => {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&lang=en-ru&text=${word}`)
        return response?.data
    })


const wordSlice = createSlice({
    name: 'wordSlice',
    initialState: {
        favorites: [],
        result: null,
    },
    reducers: {
        saveWords(state, actions) {
            state.favorites.push(actions.payload)
        },
        loadWords(state) {
            // load from localStorage
        },
        setResult(state, action) {
            state.result = action.payload
        }
    },
    extraReducers:
        (builder) => {
        builder.addCase(fetchWord.fulfilled, (state, action) => {
        state.result = action.payload
        })
}

})

export const {setResult, loadWords} = wordSlice.actions
export default wordSlice.reducer;
