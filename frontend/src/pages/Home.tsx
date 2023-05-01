import React from "react";
import {useSelector} from "react-redux";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";

const Home = () => {
    const result: any[] = useSelector((state: any) => state.wordSlice.result);
    console.log(result)
    return (
        <>
            <div className="flex row w-full ">
                <SearchInput />
                <div className="mx-auto p-2 w-screen">
                    <Results words={result}/>
                </div>
            </div>


        </>
    );
};

export default Home;
