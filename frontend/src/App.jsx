import {useCallback, useState} from "react";
import {fetchWord} from "./store/slices/wordSlice.ts";

function App() {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value)
    }

    const onButtonClick = useCallback(() => {
        fetchWord(text)
    }, [text]);

    return (
    <>
        <div className="w-fit mx-auto flex ">
        <input type="text" onChange={handleTextChange} className=" border-2 bg-blue-300 text-3xl"/>
        <button onClick={onButtonClick} className="border-2 p-2">Find</button>

        </div>
    </>
  )
}

export default App
