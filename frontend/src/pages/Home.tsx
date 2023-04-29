import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {debounce} from "../utils/debounce";
import {fetchWord} from "../store/slices/wordSlice";
import Results from "../components/Results";

const Home = () => {
    const [text, setText] = useState<string>("");
    const result: string[] = useSelector((state: any) => state.wordSlice.result);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleDebounce = debounce(() => {
        if (text.length > 0) {
            dispatch(fetchWord(text))
        }
    }, 500)

    const onButtonClick = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            dispatch(fetchWord(text));
        }
    };

    return (
        <>
            <div className="w-{600px} border-2">

                <form onSubmit={onButtonClick} className="flex justify-center m-4">
                    <input type="text" onChange={handleTextChange} onKeyUp={handleDebounce}
                           className="border-2 rounded-md text-3xl"/>
                    <button type="submit" className="border-2 p-2 bg-green-700 text-white rounded-md ">Find</button>
                </form>

                <div className="flex-col mx-auto w-fit">
                    <Results words={result}/>
                </div>

            </div>
        </>
    );
}

export default Home;