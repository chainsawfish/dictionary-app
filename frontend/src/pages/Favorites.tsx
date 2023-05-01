import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {nanoid} from "@reduxjs/toolkit";
import SearchInput from "../components/SearchInput";
import Word from "../components/Word";

const Favorites = () => {
    const favorites = useSelector<RootState>(state => state.wordSlice.favorites)
    const [words, setWords] = useState([]);
    useEffect(() => {
        setWords(favorites as object[])
        console.log({favorites})
    }, [favorites]);

    return (
        <div>
            <div className="flex row w-full ">
                <SearchInput/>
                <div className="mx-auto p-2 w-screen">
                    {words.map(word => {
                        return <Word key={nanoid()} wordText={word.wordText} wordType={word?.wordType}
                                     definition={word?.definition} detailed={word.detailed} starred={true}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favorites;