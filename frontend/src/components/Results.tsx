import React, {useEffect, useState} from "react";
import {sortWords} from "../utils/sortWords";
import Word from "./Word";

interface IResultsProps {
    words: any[];
}

const Results = ({words}: IResultsProps) => {
    const [wordsArr, setWordsArr] = useState([]);
    console.log(words);
    useEffect(() => {
        let arr = [];

        if (words && Array.isArray(words)) {
            words?.map((word) => {
                return (
                    arr.push({
                        wordText: words.length < 15 ? word?.hwi?.hw : word,
                        wordType: word?.fl ?? null,
                        definition: word?.shortdef ?? null,
                        detailed: !!word?.shortdef,
                    })
                );
            });
        }
        setWordsArr(arr);
    }, [words]);


    return (
        <>
            {wordsArr.map((word: any, index) => {
                return <Word key={index} wordText={word.wordText} wordType={word?.wordType} definition={word?.definition} detailed={word.detailed}/>
            }) }
        </>
    );
};

export default Results;
