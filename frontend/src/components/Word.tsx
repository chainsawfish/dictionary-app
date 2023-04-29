import React from 'react';
// @ts-ignore
import starBw from "../assets/star-bw.svg"

interface IWordProps {
    wordText: string,
    wordType?: string,
    definition?: string,
    detailed?: boolean,
}
const Word = ({wordText, wordType, definition, detailed}: IWordProps) => {
    return (
        <div className="flex gap-3 p-1 items-baseline">
            <span className="text-2xl">{wordText}</span>
            {detailed && <>
                <span className="italic">{wordType}</span>
                <span>{definition}</span>
                <span><img src={starBw} width="20px" alt="star-black-white"/> </span>
            </>
            }
        </div>
    );
};

export default Word;