import {useState} from "react";
import React from "react";
import {fetchWord} from "./store/slices/wordSlice";
import Results from "./components/Results";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";


function App() {
    const [text, setText] = useState<string>("");
    const result = useSelector((state: any) => state.wordSlice.result);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    function handleTextChange(e) {
        setText(e.target.value);
    }

    const onButtonClick = (e) => {
        e.preventDefault();
        dispatch(fetchWord(text));
    };

    return (
        <>
            <div className=" w-{600px}">
                <form onSubmit={onButtonClick} className="flex justify-center m-4">
                    <input type="text" onChange={handleTextChange} className=" border-2 text-3xl"/>
                    <button type="submit" className="border-2 p-2 bg-green-500 rounded-md">Find</button>
                </form>
                <div className="flex-col mx-auto w-fit">
                    <Results words={result}/>
                </div>
            </div>
        </>
    );
}

export default App;
