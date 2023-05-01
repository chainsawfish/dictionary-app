import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {nanoid} from "@reduxjs/toolkit";
import SearchInput from "../components/SearchInput";
import Word from "../components/Word";

const Favorites = () => {
    const favorites = useSelector<RootState>(state => state.wordSlice.favorites)
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState<object>({});

    useEffect(() => {
        setWords(favorites as object[])
        console.log({favorites})
    }, [favorites]);

    const handleDragStart = (e, word) => {
        setCurrentWord(word)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.target.style.background = 'red'
    }

    const handleDrop = (e, word) => {
        e.preventDefault()
        e.target.style.background = 'white'
    }

    return (
        <div>
            <div className="flex row w-full ">
                <SearchInput/>
                <div className="mx-auto p-2 w-screen">
                    {words.map(word => {
                        return (
                            <div key={nanoid()} draggable
                                 onDragStart={(e) => handleDragStart(e, word)}
                                 onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleDrop(e, word)}>
                            <Word  wordText={word.wordText} wordType={word?.wordType}
                                     definition={word?.definition} detailed={word.detailed} starred={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favorites;