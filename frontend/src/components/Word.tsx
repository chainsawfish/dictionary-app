import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addStarred, removeStarred} from "../store/slices/wordSlice";
import starBw from "../assets/star-bw.svg"
import starYellow from "../assets/star-yellow.svg"

interface IWordProps {
    wordText: string,
    wordType?: string,
    definition?: string,
    detailed?: boolean,
    starred?: boolean,
}

const Word = (props: IWordProps) => {
    const {wordText, wordType, definition, detailed, starred} = props;
    const dispatch = useDispatch()
    const [isStarred, setIsStarred] = useState(starred);

    const handleStar = () => {
        setIsStarred(!isStarred)
        dispatch(!isStarred ? addStarred({...props}) : removeStarred({...props}))
    }

    return (
        <div className="flex gap-4 p-2 items-baseline bg-amber-50 border-2 rounded-sm m-2">
            <span className="font-bold w-[200px]">{wordText}</span>
            {detailed && <>
                <span className="italic">{wordType}</span>
                <span className="w-full">{definition}</span>
                <span className="w-[30px]" onClick={handleStar}><img src={isStarred ? starYellow : starBw}
                                                                     alt="star-black-white"/> </span>
            </>
            }
        </div>
    );
};

export default Word;
