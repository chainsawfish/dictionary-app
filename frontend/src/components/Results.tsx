import React from 'react'
import Word from "./Word";
import {nanoid} from "@reduxjs/toolkit";

const Results = ({words}) => {

    console.log(words)
    const arrayWords = () => {
        let arr = []
        if (words && Array.isArray(words) && words.length > 1) {
            console.log("ARRAY:")
            words?.map((word) => {
                return (
                        arr.push(<Word key={nanoid()} wordText={word?.hwi?.hw} wordType={word?.fl} definition={word?.shortdef}/>)
                )
            })
        }
        return arr;
    }

    const singleWord = () => {
        if (words && Array.isArray(words[0])) {
            console.log("SINGLE WORD")
            console.log(words[0].hwi?.hw)
            console.log(words[0].shortdef[0])
        }
        else {
            console.log("word")
            console.log(words?.hwi?.hw)
        }
    }

    arrayWords()
    singleWord()

    return (
        <div>
            {arrayWords() && arrayWords()}
        </div>
    );
};

export default Results;
