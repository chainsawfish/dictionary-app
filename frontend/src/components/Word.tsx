import React from 'react';

const Word = ({wordText, wordType, definition }) => {
    const starBw = require('../assets/star-bw.svg') as string;
    const starYellow = require('../assets/star-yellow.svg') as string;
    return (
        <div className="flex gap-3 p-1 items-baseline">
            <span className="text-2xl">{wordText}</span>
            <span className="italic">{wordType}</span>
            <span>{definition}</span>
            <span><img src={starBw} width="20px" alt="star-black-white"/> </span>
        </div>
    );
};

export default Word;