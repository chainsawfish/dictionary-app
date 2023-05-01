import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavTop from "./components/NavTop";

function App() {

    return (
        <>
            <NavTop/>
            <Routes>
                <Route path="/" element={<Home/>} index/>
                <Route path="/favorites" element={< Favorites/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App;
