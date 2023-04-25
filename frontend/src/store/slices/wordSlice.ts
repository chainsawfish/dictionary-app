import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const BASE_URL: String = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
const API_KEY: String = 'e67ed205-818b-4000-b245-5dc08795402a'

export const fetchWord = createAsyncThunk(
    'fetchWord', async (word: String) => {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}`)
        return await response.json() as Object
    }
)

const wordSlice = createSlice({
    name: 'wordSlice',
    initialState: {
        favorites: []
    },
    reducers: {
        saveWords(state, actions) {
            state.favorites.push(actions.payload)
        },
        loadWords(state) {
            // load from localStorage
        }
    }
})

export const {saveWords, loadWords} = wordSlice.actions
export default wordSlice.reducer;