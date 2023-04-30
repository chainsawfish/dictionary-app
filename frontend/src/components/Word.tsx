import React from 'react';
import starBw from "../assets/star-bw.svg"

interface IWordProps {
    wordText: string,
    wordType?: string,
    definition?: string,
    detailed?: boolean,
}
const Word = ({wordText, wordType, definition, detailed}: IWordProps) => {
    return (
        <div className="flex gap-4 p-2 items-baseline bg-amber-50 border-2 m-2">
            <span className="font-bold w-[200px]">{wordText}</span>
            {detailed && <>
                <span className="italic">{wordType}</span>
                <span className="w-full">{definition}</span>
                <span className="w-[30px]"><img src={starBw} alt="star-black-white"/> </span>
            </>
            }
        </div>
    );
};

export default Word;
