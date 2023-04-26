import React from 'react'
const Results = ({words}) => {
    return (
        <div>
            {words?.def?.map((word, index) => {
                return (
                    <div key={index}>
                        {word.text} : {word.tr.map((el, ind) => {
                            return <li key={el+ind}>{el.text}</li>
                    })}
                    </div>

                )
            })}
        </div>
    );
};

export default Results;
