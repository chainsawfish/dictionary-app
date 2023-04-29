import React from 'react'
import Word from "./Word";
import {nanoid} from "@reduxjs/toolkit";
import {sortWords} from "../utils/sortWords";

interface IResultsProps {
    words: string[] | any
}

const Results = ({words}: IResultsProps) => {
    console.log(words)
    console.log(words?.length)
    const arrayWords = () => {
        let arr = []

        if (words && Array.isArray(words)) {
            if (words.length < 15) {
                words?.map((word) => {
                    return (
                        arr.push(<Word key={nanoid()} wordText={word?.hwi?.hw} wordType={word?.fl}
                                       definition={word?.shortdef} detailed/>)
                    )
                })
            }
            if (words.length > 15) {
                words?.map((word) => {
                    return (
                        arr.push(<Word key={nanoid()} wordText={word}/>)
                    )
                })
            }
        }
        return sortWords(arr);
    }


    return (
        <div>
            {arrayWords() && arrayWords()}
        </div>
    );
};

export default Results;
