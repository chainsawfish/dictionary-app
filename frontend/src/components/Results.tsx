import React from 'react'
const Results = ({words}) => {
    console.log(words)
    const arrayWords = () => {
        if (words!==null && Array.isArray(words) && words.length > 1) {
            words?.map(el => console.log(el?.hwi?.hw))
        }
    }

    const singleWord = () => {
        if (words !== null) {
            console.log(words?.hwi?.hw)
        }
    }

    arrayWords()
    singleWord()

    return (
        <div>

        </div>
    );
};

export default Results;
