import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {debounce} from "../utils/debounce";
import {fetchWord} from "../store/slices/wordSlice";

const SearchInput = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const [text, setText] = useState<string>("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleDebounce = debounce(() => {
        if (text.length > 0) {
            dispatch(fetchWord(text));
        }
    }, 500);

    const onButtonClick = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            dispatch(fetchWord(text));
        }
    };

    return (
            <form onSubmit={onButtonClick} className="flex col items-baseline w-[300px] bg-blue-400 min-h-screen">
                <input type="text" onChange={handleTextChange} placeholder="Start typing word..."
                       onKeyUp={handleDebounce}
                       className="h-[50px] m-2 p-2 rounded-sm flex row justify-center"/>
                <button type="submit" className="bg-blue-400 h-[50px] w-[60px] text-white ">FIND</button>
            </form>
    );
};

export default SearchInput;