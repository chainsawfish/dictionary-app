import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
// yandex dict
// const BASE_URL: string = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup'
// const API_KEY: string = 'dict.1.1.20230426T072642Z.a57083466a2d9328.75ef34d10887073fed3f6e60e29307321d8d0dd8'

const BASE_URL: string = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
const API_KEY: string = 'e67ed205-818b-4000-b245-5dc08795402a'

export const fetchWord = createAsyncThunk('wordSlice/fetchWord',
    async (word: string) => {
        //const response = await axios.get(`${BASE_URL}?key=${API_KEY}&lang=en-ru&text=${word}`)
        const response = await axios.get(`${BASE_URL}${word}?key=${API_KEY}`)
        return response?.data
    })

interface IState {
    initialState: object,
}

const wordSlice = createSlice({
    name: 'wordSlice',
    initialState: {
        favorites: [],
        result: null,
    },
    reducers: {
        addStarred(state, action) {
            state.favorites.push({...action.payload, order: state.favorites.length})
        },
        removeStarred(state, action) {
            state.favorites = state.favorites.filter(word => word.wordText !== action.payload.wordText)
        },
        loadWords(state) {
        },
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchWord.fulfilled, (state, action) => {
                state.result = action.payload
            })
        }

})

export const {addStarred, removeStarred} = wordSlice.actions
export default wordSlice.reducer;
