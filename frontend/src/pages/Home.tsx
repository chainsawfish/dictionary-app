import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {debounce} from "../utils/debounce";
import {fetchWord} from "../store/slices/wordSlice";
import Results from "../components/Results";
import starYellow from "../assets/star-yellow.svg";


const Home = () => {
    const [text, setText] = useState<string>("");
    const result: string[] = useSelector((state: any) => state.wordSlice.result);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

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
        <>

            <div
                className="flex col p-2 w-full justify-between align-middle h-[50px] bg-blue-500 text-2xl font-semibold text-white">
                <div>BIG Dictionary</div>
                <div className="flex col items-center p-2">
                    <img src={starYellow} alt="starred" className="p-1" width="30px"/>
                    <span>Favorite words</span>
                </div>
            </div>

            <div className="flex row w-full ">
                <form onSubmit={onButtonClick} className="flex col items-baseline w-[300px] bg-blue-400 min-h-screen" >
                    <input type="text" onChange={handleTextChange} placeholder="Start typing word..."
                           onKeyUp={handleDebounce}
                           className="h-[50px] m-2 p-2 flex row justify-center"/>
                    <button type="submit" className="bg-blue-400 h-[50px] w-[60px] text-white">FIND</button>
                </form>
                <div className="mx-auto p-2 w-screen">
                    <Results words={result}/>
                </div>
            </div>


        </>
    );
};

export default Home;
